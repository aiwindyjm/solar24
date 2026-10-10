import React, { useState, useEffect, useRef, useCallback, type CSSProperties } from 'react';
import { createRoot } from 'react-dom/client';
import { terms, asset, categories, cardFor, type Term } from './data';
import { Scene } from './Scene';
import { useSound } from './Audio';
import {
  parseRoute,
  routeHash,
  places,
  daysInMonth,
  clampDay,
  type Route,
  type View,
  type Lens,
} from './state';
import './style.css';

function useReduced() {
  const [value, set] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const mq = matchMedia('(prefers-reduced-motion: reduce)'),
      fn = () => set(mq.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, []);
  return value;
}
function Dial({
  term,
  bagua,
  onChoose,
  english,
}: {
  term: Term;
  bagua: boolean;
  onChoose: (i: number) => void;
  english: boolean;
}) {
  return (
    <div
      className="dial"
      role="group"
      aria-label={english ? 'The twenty-four solar terms' : '二十四节气时间轮'}
    >
      <svg viewBox="0 0 800 800" aria-hidden="true">
        <defs>
          <filter id="ink-edge">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".04"
              numOctaves="2"
              seed="4"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
        </defs>
        <g fill="none" stroke="currentColor">
          <circle cx="400" cy="400" r="350" opacity=".15" />
          <circle cx="400" cy="400" r="268" opacity=".24" />
          <circle
            cx="400"
            cy="400"
            r="244"
            opacity=".13"
            strokeWidth="11"
            filter="url(#ink-edge)"
            strokeDasharray="1210 320"
          />
          <circle cx="400" cy="400" r="238" opacity=".36" strokeWidth="1" />
          {Array.from({ length: 144 }, (_, i) => {
            const a = (i * 2.5 * Math.PI) / 180,
              r = i % 6 ? 268 : 262;
            return (
              <line
                key={i}
                x1={400 + Math.sin(a) * r}
                y1={400 - Math.cos(a) * r}
                x2={400 + Math.sin(a) * 276}
                y2={400 - Math.cos(a) * 276}
                opacity={i % 6 ? 0.2 : 0.45}
              />
            );
          })}
        </g>
        {bagua && (
          <g fill="currentColor" opacity=".4" fontSize="25" textAnchor="middle">
            {['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷'].map((symbol, i) => (
              <text key={symbol} x="400" y="177" transform={`rotate(${i * 45} 400 400)`}>
                {symbol}
              </text>
            ))}
          </g>
        )}
        <circle
          cx={400 + Math.sin((terms.indexOf(term) * Math.PI) / 12) * 268}
          cy={400 - Math.cos((terms.indexOf(term) * Math.PI) / 12) * 268}
          r="6"
          fill="var(--light)"
          stroke="currentColor"
        />
      </svg>
      <div className="butterfly" key={term.id}>
        <img src={asset(term.id)} alt={`${term.name}蝴蝶`} width="600" height="600" />
      </div>
      <div className="longitude">
        <small>SOLAR LONGITUDE</small>
        <b>{term.longitude}°</b>
        <span>{english ? 'Time, observed through the Sun' : '以太阳为刻度 · 以万物感知'}</span>
      </div>
      {terms.map((t, i) => {
        const a = (i * Math.PI) / 12;
        return (
          <button
            key={t.id}
            className="term-node"
            style={{ left: `${50 + 42 * Math.sin(a)}%`, top: `${50 - 42 * Math.cos(a)}%` }}
            onClick={() => onChoose(i)}
            aria-label={`${english ? 'Enter ' : '进入'}${t.name}`}
            aria-pressed={term.id === t.id}
          >
            <img src={asset(t.id, true)} alt="" width="38" height="38" />
            <span>{t.name}</span>
          </button>
        );
      })}
    </div>
  );
}
function Fallback({ view, english }: { view: View; english: boolean }) {
  return (
    <div className="fallback-scene">
      <svg viewBox="0 0 1600 800" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
        <path
          d="M0 510Q130 330 240 490Q350 350 510 510Q660 390 820 520Q980 310 1110 470Q1350 300 1600 480V800H0"
          fill="var(--mist)"
          opacity=".5"
        />
        <path
          d="M0 650Q180 490 350 660Q720 730 950 630Q1210 470 1600 550V800H0"
          fill="var(--accent)"
          opacity=".12"
        />
        <path d="M0 755Q320 700 800 750T1600 715" fill="none" stroke="var(--accent)" opacity=".3" />
      </svg>
      {view === 'cosmos' && (
        <div className="fallback-message">
          <b>{english ? 'A shared planet, a shared year' : '一颗地球 · 一个共同的年'}</b>
          <p>
            {english
              ? '3D is unavailable here. Solar-term navigation and the reading view remain available.'
              : '当前设备无法呈现3D，仍可选择节气、查看太阳黄经与文化内容。'}
          </p>
        </div>
      )}
    </div>
  );
}
function App() {
  const [route, setRoute] = useState(() => parseRoute(location.hash));
  const [lens, setLens] = useState<Lens>('earth'),
    [bagua, setBagua] = useState(true),
    [paused, setPaused] = useState(false),
    [sound, setSound] = useState(false),
    [english, setEnglish] = useState(false);
  const [category, setCategory] = useState(0),
    [reading, setReading] = useState(false),
    [focus, setFocus] = useState<number | null>(null);
  const [calendar, setCalendar] = useState(false),
    [month, setMonth] = useState(1),
    [day, setDay] = useState(1);
  const [capable, setCapable] = useState(true),
    [reset, setReset] = useState(0),
    [tour, setTour] = useState(false);
  const reduced = useReduced(),
    term = terms[route.term],
    view = route.view;
  const interaction = useRef<HTMLDivElement>(null),
    anchors = useRef<(HTMLButtonElement | null)[]>([]);
  const calendarRef = useRef<HTMLElement>(null),
    dateTrigger = useRef<HTMLButtonElement>(null),
    readRef = useRef<HTMLElement>(null),
    returnFocus = useRef<HTMLElement | null>(null);
  const routeRef = useRef(route);
  routeRef.current = route;
  const supported = useSound(sound, paused, term.effect, view);
  const capability = useCallback((ok: boolean) => setCapable(ok), []);
  const navigate = useCallback((change: Partial<Route>, replace = false) => {
    const next = { ...routeRef.current, ...change };
    routeRef.current = next;
    setRoute(next);
    const hash = routeHash(next);
    if (location.hash !== hash) {
      if (replace) history.replaceState(null, '', hash);
      else history.pushState(null, '', hash);
    }
  }, []);
  useEffect(() => {
    const restore = () => {
      const next = parseRoute(location.hash);
      setRoute(next);
      routeRef.current = next;
      setTour(false);
    };
    addEventListener('popstate', restore);
    addEventListener('hashchange', restore);
    if (!location.hash) history.replaceState(null, '', routeHash(routeRef.current));
    return () => {
      removeEventListener('popstate', restore);
      removeEventListener('hashchange', restore);
    };
  }, []);
  useEffect(() => {
    document.documentElement.lang = english ? 'en' : 'zh-CN';
  }, [english]);
  useEffect(() => {
    if (!tour || paused || reduced || view !== 'seasons' || reading || calendar) return;
    const timer = setInterval(() => {
      if (!document.hidden) navigate({ term: (routeRef.current.term + 1) % 24 }, true);
    }, 8500);
    return () => clearInterval(timer);
  }, [tour, paused, reduced, view, reading, calendar, navigate]);
  const closeCalendar = useCallback(() => {
    setCalendar(false);
    dateTrigger.current?.focus();
  }, []);
  useEffect(() => {
    if (calendar)
      calendarRef.current?.querySelector<HTMLButtonElement>('[aria-pressed="true"]')?.focus();
  }, [calendar]);
  useEffect(() => {
    const escape = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (calendar) closeCalendar();
      else if (reading) {
        setReading(false);
        setFocus(null);
        returnFocus.current?.focus();
      }
    };
    addEventListener('keydown', escape);
    return () => removeEventListener('keydown', escape);
  }, [calendar, reading, closeCalendar]);
  const choose = (i: number) => {
    setTour(false);
    navigate({ term: (i + 24) % 24 });
  };
  const changeView = (next: View) => {
    setTour(false);
    navigate({ view: next });
    // Retain the reading selection, date, and audio preference across the three scales.
  };
  const openStory = (next: number, point: number | null = null) => {
    if (!reading) returnFocus.current = document.activeElement as HTMLElement;
    setCategory(next);
    setFocus(point);
    setReading(true);
    setTour(false);
    if (matchMedia('(max-width:700px)').matches)
      requestAnimationFrame(() =>
        readRef.current?.scrollIntoView({
          behavior: reduced ? 'instant' : 'smooth',
          block: 'start',
        }),
      );
  };
  const card = cardFor(term, category);
  const colors = {
    '--sky': term.palette[0],
    '--mist': term.palette[1],
    '--accent': term.palette[2],
    '--water': term.palette[3],
    '--light': term.palette[4],
  } as CSSProperties;
  const days = daysInMonth(month),
    offset = (new Date(Date.UTC(2026, month, 1)).getUTCDay() + 6) % 7;
  return (
    <main
      className={`world view-${view} ${paused || reduced ? 'still' : ''} ${reading ? 'has-reading' : ''} ${english ? 'english' : ''}`}
      style={colors}
    >
      <a
        href="#experience"
        className="skip"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('experience')?.focus();
        }}
      >
        {english ? 'Skip to experience' : '跳到体验'}
      </a>
      <header>
        <button
          className="brand"
          aria-label="Solar24 首页"
          onClick={() => {
            navigate({ term: 0, view: 'seasons' });
            setReading(false);
          }}
        >
          <span className="seal">
            廿<br />四
          </span>
          <span>
            <b>蝶见四时</b>
            <small>SOLAR24 · IV</small>
          </span>
        </button>
        <nav aria-label={english ? 'Three perspectives' : '三种观看尺度'}>
          {(['seasons', 'cosmos', 'life'] as View[]).map((mode, i) => (
            <button key={mode} aria-pressed={view === mode} onClick={() => changeView(mode)}>
              <small>0{i + 1}</small>
              {english ? ['Seasons', 'Cosmos', 'Human life'][i] : ['观四时', '望天地', '听人间'][i]}
            </button>
          ))}
        </nav>
        <div className="settings">
          <button
            onClick={() => setSound(!sound)}
            aria-pressed={sound}
            aria-label={sound ? '关闭声音' : '开启声音'}
            title="合成环境音"
          >
            {sound ? '♫' : '♩'}
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
        id="experience"
        className="hero"
        tabIndex={-1}
        aria-label={`${term.name} · ${view === 'seasons' ? '观四时' : view === 'cosmos' ? '望天地' : '听人间'}`}
      >
        <Fallback view={view} english={english} />
        {capable && (
          <Scene
            term={term}
            view={view}
            lens={lens}
            paused={paused}
            reduced={reduced}
            focus={focus}
            reset={reset}
            interaction={interaction}
            anchors={anchors}
            onCapability={capability}
          />
        )}
        <div className="paper" />
        <div className="chapter">
          <span>
            {english ? 'ONE LANDSCAPE · THREE PERSPECTIVES' : '同一片山水 · 三种观看尺度'}
          </span>
          <span>{String(route.term + 1).padStart(2, '0')} / 24</span>
        </div>
        <div className="poem">
          <span className="eyebrow">
            {english
              ? ['THE RHYTHM OF NATURE', 'BENEATH THE SAME SKY', 'WHERE TIME BECOMES LIFE'][
                  ['seasons', 'cosmos', 'life'].indexOf(view)
                ]
              : view === 'seasons'
                ? '一岁一周 · 万物各时'
                : view === 'cosmos'
                  ? '由山川 · 至星河'
                  : '由天地 · 入人间'}
          </span>
          <h1>
            {view === 'seasons'
              ? english
                ? term.translation
                : term.poem.replace('，', '\n')
              : view === 'cosmos'
                ? english
                  ? 'One Earth.\nA shared sky.'
                  : '山河之外\n日月之间'
                : english
                  ? 'Time lives\namong us.'
                  : '烟火有时\n人间有声'}
          </h1>
          <p>
            {english
              ? 'A world to feel, before a world to read.'
              : view === 'seasons'
                ? '看见光阴，落在万物身上。'
                : view === 'cosmos'
                  ? '抬头之后，重新看见我们。'
                  : '沿着水岸，走近时间里的生活。'}
          </p>
          <span className="poem-stamp">
            {view === 'seasons' ? term.motif : view === 'cosmos' ? '望远' : '归近'}
          </span>
        </div>
        <div
          className={`wheel-layer ${view === 'seasons' ? 'visible' : ''}`}
          aria-hidden={view !== 'seasons'}
          inert={view !== 'seasons'}
        >
          <Dial term={term} bagua={bagua} english={english} onChoose={choose} />
        </div>
        <div
          ref={interaction}
          className="cosmos-interaction"
          role="group"
          aria-label="3D观察区域，可拖动；方向键旋转，加减键缩放，Home复位"
          tabIndex={view === 'cosmos' && capable ? 0 : -1}
          aria-hidden={view !== 'cosmos'}
        />
        {view === 'cosmos' && (
          <div className="cosmos-tools">
            <div className="lens-switch" role="group" aria-label="天文镜头">
              <button onClick={() => setLens('earth')} aria-pressed={lens === 'earth'}>
                {english ? 'Our planet' : '地球近观'}
              </button>
              <button onClick={() => setLens('year')} aria-pressed={lens === 'year'}>
                {english ? 'A solar year' : '太阳周年'}
              </button>
              <button onClick={() => setReset((r) => r + 1)} aria-label="复位镜头">
                ↺
              </button>
            </div>
            <p>
              {english ? 'Drag to look · scroll to approach' : '拖动环顾 · 滚动靠近'}
              <span>
                {english
                  ? 'Artistic 3D · not to scale or a live ephemeris'
                  : '三维艺术空间 · 非实际比例或实时星历'}
              </span>
            </p>
          </div>
        )}
        {view === 'life' && (
          <div
            className={`hotspots ${!capable ? 'static-hotspots' : ''}`}
            aria-label="山水中的生活"
          >
            {places.map((place, i) => (
              <button
                key={place.id}
                ref={(el) => {
                  anchors.current[i] = el;
                }}
                onClick={() => openStory(place.category, i)}
                aria-pressed={focus === i}
              >
                <i />
                <span>{english ? place.en : place.name}</span>
                <small>0{i + 1} ↗</small>
              </button>
            ))}
          </div>
        )}
        <aside className="term-title">
          <span>{term.longitude}°</span>
          <h2>{term.name}</h2>
          <p>{term.en}</p>
          <i className="red-seal">{['春', '夏', '秋', '冬'][Math.floor(route.term / 6)]}</i>
        </aside>
        {view === 'seasons' && (
          <div className="dial-tools">
            <button onClick={() => setBagua(!bagua)} aria-pressed={bagua}>
              {english
                ? bagua
                  ? 'Hide trigrams'
                  : 'Show trigrams'
                : bagua
                  ? '隐藏卦象'
                  : '显示卦象'}
            </button>
            <small>
              {english
                ? 'Artistic rings · butterfly always in focus'
                : '水墨卦象为艺术层 · 蝶的形态始终清晰'}
            </small>
            <button onClick={() => setTour(!tour)} aria-pressed={tour} disabled={reduced}>
              {english
                ? tour
                  ? 'Stay here'
                  : 'Journey through a year'
                : tour
                  ? 'Ⅱ 停驻此刻'
                  : '▷ 漫游一年'}
            </button>
          </div>
        )}
        {view === 'life' && !reading && (
          <div className="life-invitation">
            <span>{english ? 'FOLLOW A DETAIL INTO A STORY' : '循一处景物，进入一段故事'}</span>
            <p>
              {term.id === 'lichun'
                ? english
                  ? 'Lichun · research preview, rooted in place'
                  : '立春 · 自然观察与地方生活的研究预览'
                : english
                  ? 'An artistic environment; local stories await review.'
                  : '此节气先呈现生活意象，地方故事待选编审核。'}
            </p>
          </div>
        )}
      </section>
      {reading && (
        <aside ref={readRef} className="reading-rail" aria-labelledby="story-title">
          <button
            className="reading-close"
            onClick={() => {
              setReading(false);
              setFocus(null);
              returnFocus.current?.focus();
            }}
            aria-label="收起故事"
          >
            ×
          </button>
          <span className="eyebrow">
            {term.name} · {categories[category][0]}
          </span>
          <h3 id="story-title">{card.title}</h3>
          <p>{card.body}</p>
          {category === 0 && (
            <div className="swatches">
              {term.palette.map((color, i) => (
                <span
                  key={i}
                  style={{ background: color }}
                  title={`${['天色', '山雾', '墨色', '水色', '日光'][i]} ${color}`}
                />
              ))}
            </div>
          )}
          <details>
            <summary>
              {english ? 'Place, source & research status' : '地域、来源与研究状态'}
            </summary>
            <p>{card.scope}</p>
            <p className="note-id">{card.note}</p>
            {card.url && (
              <a href={card.url} target="_blank" rel="noreferrer">
                {english ? 'Read source ↗' : '查阅来源 ↗'}
              </a>
            )}
            <p>
              {english
                ? 'Research draft; cultural text and translation await human review.'
                : '研究草稿，未经人工事实审核。村落为艺术布景，不是地方建筑或仪式复原。'}
            </p>
          </details>
        </aside>
      )}
      <div className="term-ribbon" role="group" aria-label="选择节气">
        {terms.map((t, i) => (
          <button key={t.id} aria-pressed={i === route.term} onClick={() => choose(i)}>
            <img src={asset(t.id, true)} width="38" height="38" alt="" />
            {t.name}
          </button>
        ))}
      </div>
      <section className="culture-strip" aria-label="文化的五种观察">
        <span>{english ? 'LOOK CLOSER' : '由天入地'}</span>
        {categories.map(([en, zh], i) => (
          <button key={en} aria-pressed={reading && category === i} onClick={() => openStory(i)}>
            <i aria-hidden="true">{['◌', '❋', '╱', '⌂', '◒'][i]}</i>
            <b>{english ? en : zh}</b>
            <small>{english ? zh : en}</small>
            <span>↗</span>
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
        <div className="month-ruler">
          {Array.from({ length: 12 }, (_, i) => (
            <button
              key={i}
              aria-label={`2026年${i + 1}月`}
              aria-pressed={month === i}
              onClick={() => {
                setMonth(i);
                setDay((d) => clampDay(d, i));
              }}
            >
              {String(i + 1).padStart(2, '0')}
              <i />
            </button>
          ))}
        </div>
        <div className="stepper">
          <button onClick={() => choose(route.term - 1)} aria-label="上一个节气">
            ←
          </button>
          <span>{term.name}</span>
          <button onClick={() => choose(route.term + 1)} aria-label="下一个节气">
            →
          </button>
        </div>
      </footer>
      <div className="colophon">
        <span>OPEN SOURCE CULTURAL EXPRESSION PROTOCOL</span>
        <span>
          {english
            ? 'Artistic environment · cultural research preview'
            : '艺术环境 · 非各地实况 · 文化内容待审核'}{' '}
          · {capable ? '3D' : '静态模式'}
          {sound && !supported ? ' · 声音不可用' : ''}
        </span>
      </div>
      {calendar && (
        <section ref={calendarRef} id="calendar" className="calendar" aria-label="原位日历">
          <div className="calendar-heading">
            <b>
              2026 · {month + 1}
              {english ? '' : ' 月'}
            </b>
            <button onClick={closeCalendar} aria-label="收起历日">
              ×
            </button>
          </div>
          <div className="calendar-grid">
            {(english
              ? ['M', 'T', 'W', 'T', 'F', 'S', 'S']
              : ['一', '二', '三', '四', '五', '六', '日']
            ).map((d, i) => (
              <small key={i}>{d}</small>
            ))}
            {Array.from({ length: offset }, (_, i) => (
              <span key={i} />
            ))}
            {Array.from({ length: days }, (_, i) => (
              <button
                key={i}
                aria-label={`2026年${month + 1}月${i + 1}日`}
                aria-pressed={day === i + 1}
                onClick={() => setDay(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <p>
            {english
              ? 'Gregorian preview. Lunar dates and exact solar-term times are not connected. Selecting a date does not change the seasonal world.'
              : '公历预览 · 农历与精确交节尚未接入。浏览日期不改变节气意象，也不暗示该日交节。'}
          </p>
        </section>
      )}
      <p className="sr-only" role="status">
        {term.name} · {view === 'cosmos' ? '望天地' : view === 'life' ? '听人间' : '观四时'}
        {paused ? '，动态已暂停' : ''}
      </p>
    </main>
  );
}
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
