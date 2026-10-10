import React, { useState, useEffect, useCallback, useRef, type CSSProperties } from 'react';
import { createRoot } from 'react-dom/client';
import { terms, asset, categories, cardFor, type Term } from './data';
import { Atmosphere, Particles, Landscape, useAmbient } from './Environment';
import { Cosmos } from './Cosmos';
import './style.css';

function useReduced() {
  const [reduced, set] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const mq = matchMedia('(prefers-reduced-motion: reduce)'),
      fn = () => set(mq.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, []);
  return reduced;
}
function initialTerm() {
  const id = location.hash.slice(1).split('/')[0];
  return Math.max(
    0,
    terms.findIndex((t) => t.id === id),
  );
}
function Dial({
  term,
  selected,
  onChoose,
  taiji,
  cosmos,
}: {
  term: Term;
  selected: number;
  onChoose: (n: number) => void;
  taiji: boolean;
  cosmos: boolean;
}) {
  const angle = (term.longitude - 315 + 360) % 360;
  return (
    <div
      className={`dial ${cosmos ? 'cosmic' : ''}`}
      role="group"
      aria-label="二十四节气太阳周年刻度示意"
    >
      <svg className="dial-lines" viewBox="0 0 800 800" aria-hidden="true">
        <defs>
          <filter id="brush-edge">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".03"
              numOctaves="2"
              seed="3"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
        </defs>
        <circle
          cx="400"
          cy="400"
          r="342"
          fill="none"
          stroke="currentColor"
          opacity=".2"
          strokeWidth=".8"
        />
        <circle
          cx="400"
          cy="400"
          r="262"
          fill="none"
          stroke="currentColor"
          opacity=".25"
          strokeWidth=".8"
        />
        {Array.from({ length: 144 }, (_, i) => {
          const a = ((i * 2.5 - 90) * Math.PI) / 180,
            r = i % 6 === 0 ? 255 : 258;
          return (
            <line
              key={i}
              x1={400 + Math.cos(a) * r}
              y1={400 + Math.sin(a) * r}
              x2={400 + Math.cos(a) * 268}
              y2={400 + Math.sin(a) * 268}
              stroke="currentColor"
              opacity={i % 6 === 0 ? 0.45 : 0.18}
              strokeWidth=".8"
            />
          );
        })}
        <g fill="none" stroke="currentColor" filter="url(#brush-edge)">
          <circle
            cx="400"
            cy="400"
            r="239"
            strokeWidth="13"
            strokeDasharray="1120 390"
            transform="rotate(35 400 400)"
            opacity=".13"
          />
          <circle cx="400" cy="400" r="231" strokeWidth="1.5" opacity=".4" />
          <circle cx="400" cy="400" r="197" strokeWidth=".7" opacity=".22" />
        </g>
        <g className="solar-marker" style={{ transform: `rotate(${angle}deg)` }}>
          <circle
            cx="400"
            cy="169"
            r="7"
            fill="var(--light)"
            stroke="var(--accent)"
            strokeWidth="1"
          />
          <path d="M400 147V154M378 169H385M415 169H422" stroke="var(--accent)" opacity=".6" />
        </g>
        <g
          fill="currentColor"
          opacity=".65"
          fontFamily="KaiTi,serif"
          fontSize="17"
          textAnchor="middle"
        >
          <text x="400" y="204">
            春
          </text>
          <text x="602" y="407">
            夏
          </text>
          <text x="400" y="614">
            秋
          </text>
          <text x="198" y="407">
            冬
          </text>
        </g>
        {taiji && (
          <g opacity=".65">
            {['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷'].map((symbol, i) => (
              <text
                key={symbol}
                x="400"
                y="248"
                textAnchor="middle"
                fontSize="26"
                fill="currentColor"
                transform={`rotate(${i * 45} 400 400)`}
              >
                {symbol}
              </text>
            ))}
            <circle cx="400" cy="400" r="104" fill="var(--accent)" />
            <path
              d="M400 296A104 104 0 0 1 400 504A52 52 0 0 1 400 400A52 52 0 0 0 400 296"
              fill="var(--sky)"
            />
            <circle cx="400" cy="348" r="12" fill="var(--sky)" />
            <circle cx="400" cy="452" r="12" fill="var(--accent)" />
          </g>
        )}
      </svg>
      <div className={`butterfly-center ${taiji ? 'subtle' : ''}`} key={term.id}>
        <img src={asset(term.id)} alt={`${term.name}蝴蝶图腾`} width="480" height="405" />
        <span className="butterfly-shadow" />
      </div>
      {!taiji && (
        <div className="center-caption">
          <span>S O L A R L O N G I T U D E</span>
          <b>{term.longitude}°</b>
          <small>太阳周年视位置 · 艺术示意</small>
        </div>
      )}
      {terms.map((t, i) => {
        const a = ((i * 15 - 90) * Math.PI) / 180;
        return (
          <button
            className={`term-node ${i === selected ? 'selected' : ''}`}
            key={t.id}
            style={{ left: `${50 + 40 * Math.cos(a)}%`, top: `${50 + 40 * Math.sin(a)}%` }}
            aria-label={`进入${t.name}`}
            aria-pressed={i === selected}
            onClick={() => onChoose(i)}
          >
            <img src={asset(t.id, true)} alt="" width="34" height="29" />
            <span>{t.name}</span>
          </button>
        );
      })}
    </div>
  );
}

function App() {
  const [selected, setSelected] = useState(initialTerm),
    [panel, setPanel] = useState<number | null>(null),
    [calendar, setCalendar] = useState(false),
    [day, setDay] = useState(1),
    [month, setMonth] = useState(1),
    [paused, setPaused] = useState(false),
    [sound, setSound] = useState(false),
    [english, setEnglish] = useState(false),
    [taiji, setTaiji] = useState(false),
    [cosmos, setCosmos] = useState(false),
    [webgl, setWebgl] = useState(true),
    [tour, setTour] = useState(false);
  const reduced = useReduced(),
    term = terms[selected],
    dialogRef = useRef<HTMLDialogElement>(null),
    returnFocus = useRef<HTMLElement | null>(null),
    calendarRef = useRef<HTMLElement>(null),
    dateTrigger = useRef<HTMLButtonElement>(null);
  const audioSupported = useAmbient(sound, paused, term.effect);
  const handleCapability = useCallback((ok: boolean) => setWebgl(ok), []);
  useEffect(() => {
    document.documentElement.lang = english ? 'en' : 'zh-CN';
  }, [english]);
  useEffect(() => {
    if (calendar)
      calendarRef.current?.querySelector<HTMLButtonElement>('[aria-pressed="true"]')?.focus();
  }, [calendar]);
  const closeCalendar = useCallback(() => {
    setCalendar(false);
    dateTrigger.current?.focus();
  }, []);
  const choose = useCallback((i: number) => {
    const n = (i + 24) % 24;
    setSelected(n);
    setPanel(null);
    setCosmos(false);
    setTour(false);
    history.replaceState(null, '', '#' + terms[n].id);
  }, []);
  useEffect(() => {
    const fn = () => {
      const next = initialTerm();
      if (location.hash === '#experience') {
        document.getElementById('experience')?.focus();
        return;
      }
      setSelected(next);
    };
    addEventListener('hashchange', fn);
    return () => removeEventListener('hashchange', fn);
  }, []);
  useEffect(() => {
    if (!tour || paused || reduced || cosmos || calendar || panel !== null) return;
    const id = setInterval(() => {
      if (!document.hidden)
        setSelected((prev) => {
          const next = (prev + 1) % 24;
          history.replaceState(null, '', '#' + terms[next].id);
          return next;
        });
    }, 7000);
    return () => clearInterval(id);
  }, [tour, paused, reduced, cosmos, calendar, panel]);
  useEffect(() => {
    if (panel === null) {
      dialogRef.current?.close();
      returnFocus.current?.focus();
      return;
    }
    if (!dialogRef.current?.open) returnFocus.current = document.activeElement as HTMLElement;
    dialogRef.current?.showModal();
  }, [panel]);
  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (calendar) closeCalendar();
        else if (panel === null) setCosmos(false);
      }
    };
    addEventListener('keydown', onEscape);
    return () => removeEventListener('keydown', onEscape);
  }, [calendar, closeCalendar, panel]);
  const colors = {
    '--sky': term.palette[0],
    '--mist': term.palette[1],
    '--accent': term.palette[2],
    '--water': term.palette[3],
    '--light': term.palette[4],
  } as CSSProperties;
  const card = cardFor(term, panel ?? 0);
  const dates = Array.from(
      { length: new Date(Date.UTC(2026, month + 1, 0)).getUTCDate() },
      (_, i) => i + 1,
    ),
    offset = (new Date(Date.UTC(2026, month, 1)).getUTCDay() + 6) % 7;
  return (
    <main
      className={`world ${paused || reduced ? 'still' : ''} ${cosmos ? 'cosmos-mode' : ''} effect-${term.effect} ${english ? 'english' : ''}`}
      style={colors}
    >
      <a className="skip" href="#experience">
        {english ? 'Skip to experience' : '跳到体验'}
      </a>
      <div className="fallback-sky" />
      {webgl && (
        <Atmosphere term={term} paused={paused} reduced={reduced} onCapability={handleCapability} />
      )}
      <Landscape term={term} />
      <Particles term={term} paused={paused} reduced={reduced} />
      <div className="paper-grain" />
      <header>
        <a className="brand" href="#lichun" aria-label="Solar24">
          <span className="brand-seal">
            廿<br />四
          </span>
          <span>
            <b>蝶见四时</b>
            <small>SOLAR24</small>
          </span>
        </a>
        <nav aria-label="观察尺度">
          <button
            aria-label={english ? 'Seasons' : '观四时'}
            onClick={() => {
              setCosmos(false);
              setPanel(null);
            }}
            aria-pressed={!cosmos}
          >
            {english ? 'Seasons' : '观四时'}
          </button>
          <button
            aria-label={english ? 'Our planet' : '望天地'}
            onClick={() => setCosmos(!cosmos)}
            aria-pressed={cosmos}
          >
            {english ? 'Our planet' : '望天地'}
          </button>
          <button onClick={() => setPanel(4)}>{english ? 'Our story' : '听人间'}</button>
        </nav>
        <div className="settings">
          <button
            onClick={() => setSound(!sound)}
            aria-pressed={sound}
            aria-label={sound ? '关闭声音' : '开启声音'}
            title="合成环境音，非实地录音"
          >
            {sound ? '♫' : '♩'}
            <span>{english ? (sound ? 'Sound on' : 'Sound off') : sound ? '声开' : '声隐'}</span>
          </button>
          <button
            onClick={() => setPaused(!paused)}
            aria-pressed={paused}
            aria-label={paused ? '继续动态' : '暂停动态'}
          >
            {paused ? '▷' : 'Ⅱ'}
          </button>
          <button onClick={() => setEnglish(!english)} aria-label="切换中英文">
            {english ? '中' : 'EN'}
          </button>
        </div>
      </header>
      <section
        className="experience"
        id="experience"
        tabIndex={-1}
        aria-label={`${term.name}视觉世界`}
      >
        <div className="chapter">
          <span>{english ? 'TWENTY-FOUR WAYS TO FEEL TIME' : '二十四节气 · 时间的生命形状'}</span>
          <i>01 — 24</i>
        </div>
        <div className="poem">
          <h1>
            {cosmos
              ? english
                ? 'One planet.\nA shared year.'
                : '一颗地球\n万千时序'
              : english
                ? term.translation
                : term.poem.split('，').join('\n')}
          </h1>
          <p>
            {english
              ? 'An open cultural expression through time and nature.'
              : '日月有序 · 万物有时'}
          </p>
          <span className="poem-stamp">{term.motif}</span>
        </div>
        <div className="main-dial">
          {cosmos ? (
            <Cosmos
              term={term}
              english={english}
              onChoose={(i) => {
                setSelected(i);
                setTour(false);
                history.replaceState(null, '', '#' + terms[i].id);
              }}
            />
          ) : (
            <Dial term={term} selected={selected} onChoose={choose} taiji={taiji} cosmos={cosmos} />
          )}
        </div>
        <aside className="term-title">
          <span className="term-number">{String(selected + 1).padStart(2, '0')} / 24</span>
          <h2>{term.name}</h2>
          <p>{term.en}</p>
          <span className="red-seal">{['春', '夏', '秋', '冬'][Math.floor(selected / 6)]}</span>
          <button onClick={() => setPanel(0)}>
            {english ? 'Discover' : '循迹而入'} <span>↓</span>
          </button>
        </aside>
        <div className="dial-footer">
          <button onClick={() => setTaiji(!taiji)} aria-pressed={taiji}>
            {english ? (taiji ? '◒ Butterfly' : '◒ Taiji') : taiji ? '◒  蝶的形态' : '◒  太极意象'}
          </button>
          <span>
            {taiji
              ? english
                ? 'Artistic arrangement, not a correspondence chart'
                : '太极八卦为艺术层 · 非对应图谱'
              : english
                ? '24 angular markers · not equal days'
                : '节气等角刻度 · 非等长日期'}
          </span>
          <button onClick={() => setTour(!tour)} aria-pressed={tour} disabled={reduced}>
            {english
              ? tour
                ? 'Ⅱ Stay here'
                : '▷ Journey through a year'
              : tour
                ? 'Ⅱ  停驻此刻'
                : '▷  漫游一年'}
          </button>
        </div>
        <div className="mobile-terms" role="group" aria-label="选择节气">
          {terms.map((t, i) => (
            <button key={t.id} onClick={() => choose(i)} aria-pressed={selected === i}>
              <img src={asset(t.id, true)} alt="" />
              {t.name}
            </button>
          ))}
        </div>
      </section>
      <section className="culture-strip" aria-label="文化的五种观察">
        <span className="strip-label">{english ? 'LOOK CLOSER' : '由天入地'}</span>
        {categories.map(([en, zh], i) => (
          <button
            key={en}
            onClick={() => {
              setTour(false);
              setPanel(i);
            }}
          >
            <span className="category-mark" aria-hidden="true">
              {['◌', '❋', '╱', '⌂', '◒'][i]}
            </span>
            <b>{english ? en : zh}</b>
            <small>{english ? zh : en}</small>
            <span className="arrow">↗</span>
          </button>
        ))}
      </section>
      <footer className="time-dock">
        <button
          ref={dateTrigger}
          className="date-trigger"
          onClick={() => setCalendar(!calendar)}
          aria-expanded={calendar}
          aria-controls="calendar"
        >
          <b>{String(day).padStart(2, '0')}</b>
          <span>
            2026 · {String(month + 1).padStart(2, '0')}
            <small>{english ? 'Open calendar +' : '展开历日 ＋'}</small>
          </span>
        </button>
        <div className="year-ruler">
          {Array.from({ length: 12 }, (_, i) => (
            <button
              key={i}
              onClick={() => {
                setMonth(i);
                setDay((d) => Math.min(d, new Date(Date.UTC(2026, i + 1, 0)).getUTCDate()));
              }}
              aria-label={`2026年${i + 1}月`}
              aria-pressed={i === month}
            >
              <span>{String(i + 1).padStart(2, '0')}</span>
              <i />
            </button>
          ))}
        </div>
        <div className="stepper">
          <button
            onClick={() => {
              setTour(false);
              choose(selected - 1);
            }}
            aria-label="上一个节气"
          >
            ←
          </button>
          <span>{term.name}</span>
          <button
            onClick={() => {
              setTour(false);
              choose(selected + 1);
            }}
            aria-label="下一个节气"
          >
            →
          </button>
        </div>
      </footer>
      <div className="colophon">
        <span>OPEN SOURCE CULTURAL EXPRESSION PROTOCOL</span>
        <span>
          {english
            ? 'Artistic environments · research preview'
            : '艺术环境 · 非各地实况 · 研究内容待审核'}{' '}
          · {webgl ? 'WebGL' : '静态光影'}
          {sound && !audioSupported ? ' · 声音不可用' : ''}
        </span>
      </div>
      {calendar && (
        <section ref={calendarRef} className="calendar" id="calendar" aria-label="原位日历">
          <div className="calendar-top">
            <strong>2026 · {month + 1} 月</strong>
            <button onClick={closeCalendar} aria-label="收起历日">
              ×
            </button>
          </div>
          <div className="calendar-grid">
            {'一二三四五六日'.split('').map((d) => (
              <small key={d}>{d}</small>
            ))}
            {Array.from({ length: offset }, (_, i) => (
              <span key={'s' + i} />
            ))}
            {dates.map((d) => (
              <button
                key={d}
                onClick={() => setDay(d)}
                aria-label={`2026年${month + 1}月${d}日`}
                aria-pressed={d === day}
              >
                {d}
              </button>
            ))}
          </div>
          <p>
            公历示例 · 农历与精确交节待核验后接入。
            <br />
            浏览日期与节气意象独立，不暗示该日交节。
          </p>
        </section>
      )}
      <dialog
        ref={dialogRef}
        className="culture-dialog"
        aria-labelledby="culture-heading"
        onCancel={() => setPanel(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setPanel(null);
        }}
      >
        <div className="culture-inner">
          <button className="dialog-close" onClick={() => setPanel(null)} aria-label="收起文化内容">
            ×
          </button>
          <span className="dialog-label">
            {term.name} / {categories[panel ?? 0][0]}
          </span>
          <img className="dialog-butterfly" src={asset(term.id, true)} alt="" />
          <h2 id="culture-heading">{card.title}</h2>
          {panel === 0 && (
            <div className="color-language" aria-label="节气环境色">
              {term.palette.map((color, i) => (
                <span key={i} style={{ backgroundColor: color }} title={color}>
                  <small>
                    {english
                      ? ['Sky', 'Mist', 'Ink', 'Water', 'Light'][i]
                      : ['天色', '山雾', '墨色', '水色', '日光'][i]}
                  </small>
                </span>
              ))}
            </div>
          )}
          <p>{card.body}</p>
          <div className="source-line">
            <span>{card.scope}</span>
            {card.url && (
              <a href={card.url} target="_blank" rel="noreferrer">
                查阅来源 ↗
              </a>
            )}
          </div>
          <details>
            <summary>Obsidian 研究线索</summary>
            <p className="note-id">{card.note}</p>
            <p>本地知识库选编，未替代人工事实审核。英文界面已提供，文化正文英译仍待审核。</p>
          </details>
          <div className="dialog-tabs">
            {categories.map(([en, zh], i) => (
              <button key={en} onClick={() => setPanel(i)} aria-pressed={panel === i}>
                {zh}
              </button>
            ))}
          </div>
        </div>
      </dialog>
      <p className="sr-only" role="status">
        {term.name}环境，{term.en}。{paused ? '动态已暂停' : ''}
      </p>
    </main>
  );
}
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
