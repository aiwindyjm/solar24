import { useEffect, useRef, useState } from 'react';
import type { Term } from './data';

import { lifeProfiles } from './life-data';
import { SeasonDrawing } from './SeasonDrawing';
import { LifeContext } from './LifeContext';

function readMemory(id: string) {
  try {
    return localStorage.getItem(`solar24-v5-memory-${id}`) ?? '';
  } catch {
    return '';
  }
}
export function Life({
  term,
  english,
  focus,
  sound,
  supported,
  paused,
  onSound,
  onLeave,
}: {
  term: Term;
  english: boolean;
  focus: number | null;
  sound: boolean;
  supported: boolean;
  paused: boolean;
  onSound: () => void;
  onLeave: () => void;
}) {
  const profile = lifeProfiles[term.id];
  const language = english ? 1 : 0;
  const [progress, setProgress] = useState(0);
  const maximum = profile.gesture === 'plum' ? 81 : 100;
  const stage = Math.min(2, Math.floor((progress / maximum) * 3));
  const moment = useRef<HTMLElement>(null);
  useEffect(() => {
    if (focus === null) return;
    moment.current?.focus({ preventScroll: true });
    if (matchMedia('(max-width:700px)').matches)
      moment.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
  }, [focus]);
  const [memory, setMemory] = useState(() => readMemory(term.id));
  const [saved, setSaved] = useState<'idle' | 'saved' | 'error'>('idle');
  if (focus === null)
    return (
      <div className="life-invitation">
        <span>
          {english ? term.en : term.name} · {english ? 'A SEASON IN DAILY LIFE' : '人间有时'}
        </span>
        <p>{profile.memory[language]}</p>
      </div>
    );
  return (
    <section
      ref={moment}
      tabIndex={-1}
      className={`life-participation life-place-${focus}`}
      aria-label={profile.labels[focus][language]}
    >
      <div className="life-moment-heading">
        <span>
          {english ? term.en : term.name} / 0{focus + 1}
        </span>
        <button onClick={onLeave} aria-label={english ? 'Return to the landscape' : '回到山水'}>
          ↶ {english ? 'Step back' : '退一步'}
        </button>
      </div>
      {focus === 0 && (
        <div className="listening-moment">
          <div
            data-sound={profile.gesture}
            className={`listening-rings ${sound && supported && !paused ? 'is-listening' : ''}`}
            aria-hidden="true"
          >
            <i />
            <i />
            <i />
          </div>
          <h3>{profile.labels[0][language]}</h3>
          <p>{profile.listening[language]}</p>
          <button className="life-action" onClick={onSound} aria-pressed={sound}>
            {english
              ? sound
                ? 'Stop listening'
                : 'Listen to this landscape'
              : sound
                ? '收起声音'
                : '听这一片山水'}{' '}
            {sound ? 'Ⅱ' : '▷'}
          </button>
          <small role="status">
            {!supported
              ? english
                ? 'Sound is unavailable in this browser.'
                : '当前浏览器声音不可用。'
              : paused && sound
                ? english
                  ? 'Paused with the landscape.'
                  : '随环境暂停。'
                : english
                  ? 'Synthesized ambience · no recorded voices or local chants'
                  : '合成环境声 · 非地方录音或民俗唱词'}
          </small>
        </div>
      )}
      {focus === 1 && (
        <div className="field-moment">
          <h3>{profile.action[language]}</h3>
          <SeasonDrawing kind={profile.gesture} progress={progress / maximum} />
          <label htmlFor="field-time">{profile.instruction[language]}</label>
          <input
            id="field-time"
            type="range"
            min={0}
            max={maximum}
            step={1}
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            aria-valuetext={
              profile.gesture === 'plum' ? `${progress} / 81` : profile.stages[stage][language]
            }
          />
          <div className="field-stages" aria-hidden="true">
            {profile.stages.map((s, i) => (
              <span key={i} className={stage === i ? 'active' : ''}>
                {s[language]}
              </span>
            ))}
          </div>
          {profile.gesture === 'plum' && (
            <div className="counting-actions">
              <button
                className="life-action"
                disabled={progress === 81}
                onClick={() => setProgress((value) => Math.min(81, value + 1))}
              >
                {english ? 'Add one day' : '点染一日'} ＋
              </button>
              <span role="status">{progress} / 81</span>
              <button onClick={() => setProgress(0)}>{english ? 'Begin again' : '重新点染'}</button>
            </div>
          )}
          <small>
            {english
              ? 'A drawing to explore, not a local forecast or farming instruction.'
              : '写意观察体验，不是当地预报或实际农事指导。'}
          </small>
        </div>
      )}
      {focus === 2 && (
        <form
          className="memory-moment"
          onSubmit={(e) => {
            e.preventDefault();
            try {
              if (memory.trim())
                localStorage.setItem(`solar24-v5-memory-${term.id}`, memory.trim());
              else localStorage.removeItem(`solar24-v5-memory-${term.id}`);
              setSaved('saved');
            } catch {
              setSaved('error');
            }
          }}
        >
          <h3>{profile.labels[2][language]}</h3>
          <label htmlFor="season-memory">{profile.memory[language]}</label>
          <textarea
            id="season-memory"
            maxLength={180}
            value={memory}
            rows={2}
            onChange={(e) => {
              setMemory(e.target.value);
              setSaved('idle');
            }}
            placeholder={english ? `My ${term.en.toLowerCase()}…` : `我的${term.name}……`}
          />
          <div className="memory-actions">
            <button className="life-action" type="submit">
              {english ? 'Keep this moment' : '留下这一刻'} ↗
            </button>
            <span>{memory.length} / 180</span>
          </div>
          <small role="status">
            {saved === 'error'
              ? english
                ? 'Could not save on this device. Your words remain here until you leave.'
                : '设备暂不能保存，文字保留在本次页面中。'
              : saved === 'saved'
                ? english
                  ? 'Kept on this browser only. Never uploaded.'
                  : '已留在此浏览器中，不会上传。'
                : english
                  ? 'Private to this browser · clear the text and save to erase it.'
                  : '仅保存在此浏览器 · 清空后保存即可移除。'}
          </small>
        </form>
      )}
      <LifeContext term={term} focus={focus} gesture={profile.gesture} english={english} />
    </section>
  );
}
