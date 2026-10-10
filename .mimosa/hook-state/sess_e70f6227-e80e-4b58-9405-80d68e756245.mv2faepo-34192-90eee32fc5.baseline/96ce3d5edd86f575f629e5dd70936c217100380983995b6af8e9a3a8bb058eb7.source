import React, { useState, useEffect, useRef, useCallback, type CSSProperties } from 'react';
import { createRoot } from 'react-dom/client';
import { terms, asset, categories } from './data';
import { ReadingScroll } from './ReadingScroll';
import { Life } from './Life';
import { lifeProfiles } from './life-data';
import {
  cycleDates,
  YEAR_START,
  TICK_MS,
  nextTourDate,
  termAtDate,
  dialProgress,
  dateForRoute,
} from './timeline';
import { Scene } from './Scene';
import { Dial } from './Dial';
import { Astronomy } from './Astronomy';
import { Typography, readPreference, savePreference, fontOptions } from './Typography';
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
import './scroll.css';
import './life.css';

function readLanguage() {
  const language = new URLSearchParams(location.search).get('lang');
  return (
    (language === 'en' || language === 'zh' ? language : readPreference('language', 'en')) !== 'zh'
  );
}

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
  const [lens, setLens] = useState<Lens>('year'),
    [bagua, setBagua] = useState(true),
    [paused, setPaused] = useState(false),
    [sound, setSound] = useState(false),
    [english, setEnglish] = useState(readLanguage);
  const [enFont, setEnFont] = useState(() => readPreference('en-font', 'baskerville'));
  const [zhFont, setZhFont] = useState(() => readPreference('zh-font', 'wenkai'));
  const validFont = (language: 'en' | 'zh', id: string) =>
    fontOptions[language].some((f) => f[0] === id)
      ? id
      : language === 'en'
        ? 'baskerville'
        : 'wenkai';
  const [category, setCategory] = useState(0),
    [readingRequest, setReadingRequest] = useState(0),
    [reading, setReading] = useState(false),
    [focus, setFocus] = useState<number | null>(null);
  const [calendar, setCalendar] = useState(false),
    [date, setDate] = useState(() => dateForRoute(route.term, history.state?.solar24Date));
  const dateRef = useRef(date);
  dateRef.current = date;
  const updateDate = useCallback((next: number) => {
    dateRef.current = next;
    setDate(next);
  }, []);
  const dateObject = new Date(date),
    year = dateObject.getUTCFullYear(),
    month = dateObject.getUTCMonth(),
    day = dateObject.getUTCDate();
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
    returnFocus = useRef<HTMLElement | null>(null);
  const routeRef = useRef(route);
  routeRef.current = route;
  const supported = useSound(sound, paused, term.effect, view, term.id);
  const capability = useCallback((ok: boolean) => setCapable(ok), []);
  const navigate = useCallback((change: Partial<Route>, replace = false) => {
    const next = { ...routeRef.current, ...change };
    routeRef.current = next;
    setRoute(next);
    const hash = routeHash(next);
    const state = { solar24Date: dateRef.current };
    if (location.hash !== hash) {
      if (replace) history.replaceState(state, '', hash);
      else history.pushState(state, '', hash);
    } else history.replaceState(state, '', hash);
  }, []);
  useEffect(() => {
    const restore = () => {
      setEnglish(readLanguage());
      const next = parseRoute(location.hash);
      setRoute(next);
      routeRef.current = next;
      setTour(false);
      setReading(false);
      setFocus(null);
      updateDate(dateForRoute(next.term, history.state?.solar24Date));
    };
    addEventListener('popstate', restore);
    addEventListener('hashchange', restore);
    if (!location.hash) history.replaceState(null, '', routeHash(routeRef.current));
    return () => {
      removeEventListener('popstate', restore);
      removeEventListener('hashchange', restore);
    };
  }, [updateDate]);
  useEffect(() => {
    document.documentElement.lang = english ? 'en' : 'zh-CN';
    document.title = english ? 'Solar24 · A living book of the seasons' : 'Solar24 · 蝶见四时';
    savePreference('language', english ? 'en' : 'zh');
    const url = new URL(location.href);
    url.searchParams.set('lang', english ? 'en' : 'zh');
    history.replaceState(history.state, '', `${url.pathname}${url.search}${url.hash}`);
  }, [english]);
  useEffect(() => {
    if (!tour || paused || view !== 'seasons' || reading) return;
    let timer: ReturnType<typeof setInterval> | undefined;
    const syncVisibility = () => {
      clearInterval(timer);
      if (document.hidden) return;
      timer = setInterval(() => {
        const next = nextTourDate(dateRef.current);
        updateDate(next);
        history.replaceState({ solar24Date: next }, '', location.hash);
        const nextTerm = termAtDate(next);
        if (nextTerm !== routeRef.current.term) navigate({ term: nextTerm }, true);
      }, TICK_MS);
    };
    syncVisibility();
    document.addEventListener('visibilitychange', syncVisibility);
    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', syncVisibility);
    };
  }, [tour, paused, view, reading, navigate, updateDate]);
  const selectDate = (next: number) => {
    setTour(false);
    updateDate(next);
    navigate({ term: termAtDate(next) });
  };
  const toggleTour = () => {
    if (tour) {
      setTour(false);
      return;
    }
    updateDate(YEAR_START);
    setPaused(false);
    setReading(false);
    setFocus(null);
    navigate({ term: 0, view: 'seasons' });
    setTour(true);
  };
  const closeCalendar = useCallback(() => {
    setCalendar(false);
    dateTrigger.current?.focus();
  }, []);
  const closeReading = useCallback(() => {
    setReading(false);
    // The edge entrance becomes visible again after React closes the reading surface.
    requestAnimationFrame(() => returnFocus.current?.focus({ preventScroll: true }));
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
        closeReading();
        setFocus(null);
      } else if (view === 'life' && focus !== null) {
        const previous = focus;
        setFocus(null);
        requestAnimationFrame(() => anchors.current[previous]?.focus({ preventScroll: true }));
      }
    };
    addEventListener('keydown', escape);
    return () => removeEventListener('keydown', escape);
  }, [calendar, reading, closeCalendar, closeReading, view, focus]);
  const choose = (i: number) => {
    setTour(false);
    setFocus(null);
    const next = (i + 24) % 24;
    updateDate(cycleDates[next]);
    navigate({ term: next });
  };
  const changeView = (next: View) => {
    setTour(false);
    setReading(false);
    setFocus(null);
    navigate({ view: next });
  };
  const openStory = (next: number) => {
    returnFocus.current = document.activeElement as HTMLElement;
    setCategory(next);
    setReadingRequest((value) => value + 1);
    setReading(true);
    setTour(false);
    setCalendar(false);
  };
  const colors = {
    '--sky': term.palette[0],
    '--mist': term.palette[1],
    '--accent': term.palette[2],
    '--water': term.palette[3],
    '--light': term.palette[4],
  } as CSSProperties;
  const days = daysInMonth(month, year),
    offset = (new Date(Date.UTC(year, month, 1)).getUTCDay() + 6) % 7;
  return (
    <main
      className={`world font-${validFont(english ? 'en' : 'zh', english ? enFont : zhFont)} view-${view} ${paused || reduced ? 'still' : ''} ${reading && view === 'seasons' ? 'has-reading' : ''} ${view === 'life' && focus !== null ? 'life-engaged' : ''} ${english ? 'english' : ''}`}
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
            setTour(false);
            updateDate(YEAR_START);
            navigate({ term: 0, view: 'seasons' });
            setReading(false);
          }}
        >
          <span className="seal">
            廿<br />四
          </span>
          <span>
            <b>{english ? 'Solar24' : '蝶见四时'}</b>
            <small>SOLAR24 · V</small>
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
          <Typography
            english={english}
            value={validFont(english ? 'en' : 'zh', english ? enFont : zhFont)}
            onChange={(id) => {
              if (english) setEnFont(id);
              else setZhFont(id);
              savePreference(english ? 'en-font' : 'zh-font', id);
            }}
          />
          <button
            onClick={() => setSound(!sound)}
            aria-pressed={sound}
            aria-label={
              english ? (sound ? 'Mute sound' : 'Enable sound') : sound ? '关闭声音' : '开启声音'
            }
            title={english ? 'Synthesized ambience' : '合成环境音'}
          >
            {sound ? '♫' : '♩'}
          </button>
          <button
            onClick={() => setPaused(!paused)}
            aria-pressed={paused}
            aria-label={
              english
                ? paused
                  ? 'Resume motion'
                  : 'Pause motion'
                : paused
                  ? '继续动态'
                  : '暂停动态'
            }
          >
            {paused ? '▷' : 'Ⅱ'}
          </button>
          <button
            onClick={() => setEnglish(!english)}
            aria-label={english ? 'Switch to Chinese' : 'Switch to English'}
          >
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
            english={english}
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
          <span className="poem-stamp" lang="zh-CN">
            {view === 'cosmos'
              ? '日月'
              : view === 'life'
                ? '人文'
                : ['春風', '夏日', '秋月', '冬雪'][Math.floor(route.term / 6)]}
          </span>
        </div>
        <div
          className={`wheel-layer ${view === 'seasons' ? 'visible' : ''}`}
          aria-hidden={view !== 'seasons'}
          inert={view !== 'seasons' || reading}
        >
          <Dial
            term={term}
            bagua={bagua}
            english={english}
            onChoose={choose}
            progress={dialProgress(date)}
          />
        </div>
        <div
          ref={interaction}
          className="cosmos-interaction"
          role="group"
          aria-label="3D观察区域，可拖动；方向键旋转，加减键缩放，Home复位"
          tabIndex={view === 'cosmos' && capable ? 0 : -1}
          aria-hidden={view !== 'cosmos'}
        />
        {view === 'cosmos' && <Astronomy term={term} english={english} />}
        {view === 'cosmos' && (
          <div className="cosmos-tools">
            <div className="lens-switch" role="group" aria-label="天文镜头">
              <button onClick={() => setLens('earth')} aria-pressed={lens === 'earth'}>
                {english ? 'Our planet' : '地球近观'}
              </button>
              <button onClick={() => setLens('year')} aria-pressed={lens === 'year'}>
                {english ? 'A solar year' : '太阳周年'}
              </button>
              <button
                onClick={() => setReset((r) => r + 1)}
                aria-label={english ? 'Reset camera' : '复位镜头'}
              >
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
            inert={focus !== null}
            aria-hidden={focus !== null}
            aria-label="山水中的生活"
          >
            {places.map((place, i) => (
              <button
                key={place.id}
                ref={(el) => {
                  anchors.current[i] = el;
                }}
                onClick={() => {
                  setFocus(i);
                  setReading(false);
                  setTour(false);
                }}
                aria-pressed={focus === i}
              >
                <i />
                <span>{lifeProfiles[term.id].labels[i][english ? 1 : 0]}</span>
                <small>0{i + 1} ↗</small>
              </button>
            ))}
          </div>
        )}
        <aside className="term-title">
          <span>{term.longitude}°</span>
          <h2 lang="zh-CN">
            {zhFont === 'seal' && !english ? term.name.replace('谷', '穀') : term.name}
          </h2>
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
              {tour
                ? english
                  ? 'One tick, one day · a year in 3m 39s'
                  : '每拍一天 · 3分39秒走过一年'
                : english
                  ? 'Begin at Lichun · follow the calendar'
                  : '从立春出发 · 随历日走过四时'}
            </small>
            <button onClick={toggleTour} aria-pressed={tour}>
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
        {view === 'life' && (
          <Life
            key={term.id}
            term={term}
            english={english}
            focus={focus}
            sound={sound}
            supported={supported}
            paused={paused}
            onSound={() => setSound(!sound)}
            onLeave={() => {
              const previous = focus;
              setFocus(null);
              if (previous !== null)
                requestAnimationFrame(() =>
                  anchors.current[previous]?.focus({ preventScroll: true }),
                );
            }}
          />
        )}
        {view === 'seasons' && (
          <ReadingScroll
            open={reading}
            term={term}
            english={english}
            category={category}
            request={readingRequest}
            onOpen={openStory}
            onClose={closeReading}
          />
        )}
      </section>
      <div className="term-ribbon" role="group" aria-label="选择节气">
        {terms.map((t, i) => (
          <button key={t.id} aria-pressed={i === route.term} onClick={() => choose(i)}>
            <img src={asset(t.id, true)} width="38" height="38" alt="" />
            {english ? t.en : t.name}
          </button>
        ))}
      </div>
      {view === 'seasons' && (
        <section className="culture-strip" aria-label="文化的五种观察">
          <span>{english ? 'CHOOSE A SCROLL' : '择一卷 · 展开'}</span>
          {categories.map(([en, zh], i) => (
            <button
              key={en}
              aria-pressed={reading && category === i}
              aria-expanded={reading && category === i}
              aria-controls={category === i ? `seasonal-scroll-${i}` : undefined}
              onClick={() => openStory(i)}
            >
              <i aria-hidden="true">{['◌', '❋', '╱', '⌂', '◒'][i]}</i>
              <b>{english ? en : zh}</b>
              <small>{english ? zh : en}</small>
              <span>↗</span>
            </button>
          ))}
        </section>
      )}
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
            {year} · {String(month + 1).padStart(2, '0')}
            <small>{english ? 'Open calendar +' : '展开历日 ＋'}</small>
          </span>
        </button>
        <div className="month-ruler">
          {Array.from({ length: 12 }, (_, i) => (
            <button
              key={i}
              aria-label={english ? `Month ${i + 1}, ${year}` : `${year}年${i + 1}月`}
              aria-pressed={month === i}
              onClick={() => {
                selectDate(Date.UTC(year, i, clampDay(day, i, year)));
              }}
            >
              {String(i + 1).padStart(2, '0')}
              <i />
            </button>
          ))}
        </div>
        <div className="stepper">
          <button
            onClick={() => choose(route.term - 1)}
            aria-label={english ? 'Previous term' : '上一个节气'}
          >
            ←
          </button>
          <span>{english ? term.en : term.name}</span>
          <button
            onClick={() => choose(route.term + 1)}
            aria-label={english ? 'Next term' : '下一个节气'}
          >
            →
          </button>
        </div>
      </footer>
      <div className="colophon">
        <span>OPEN SOURCE CULTURAL EXPRESSION PROTOCOL</span>
        <span>
          {english ? 'Nature · Time · Life' : '自然 · 时间 · 生活'} ·{' '}
          {capable ? '3D' : english ? 'Static view' : '静态模式'}
          {sound && !supported ? (english ? ' · Audio unavailable' : ' · 声音不可用') : ''}
        </span>
      </div>
      {calendar && (
        <section ref={calendarRef} id="calendar" className="calendar" aria-label="原位日历">
          <div className="calendar-heading">
            <b>
              {year} · {month + 1}
              {english ? '' : ' 月'}
            </b>
            <button onClick={() => selectDate(Date.UTC(year === 2026 ? 2027 : 2026, month, day))}>
              {english ? 'Year' : '年份'} ↔ {year === 2026 ? 2027 : 2026}
            </button>
            <button onClick={closeCalendar} aria-label={english ? 'Close calendar' : '收起历日'}>
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
                aria-label={
                  english ? `${year}-${month + 1}-${i + 1}` : `${year}年${month + 1}月${i + 1}日`
                }
                aria-pressed={day === i + 1}
                onClick={() => selectDate(Date.UTC(year, month, i + 1))}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <p>
            {english
              ? '2026–27 dates: Hong Kong Observatory (UTC+8, day precision). Each tick is one day, not live time. Select a date to stop and explore its solar term.'
              : '2026–27历日参考香港天文台（UTC+8，精度为日）。每拍推进一天，非实时时钟。选择日期即可停驻对应节气；未计算农历与精确交节时刻。'}
          </p>
        </section>
      )}
      <p className="sr-only" role="status">
        {english ? term.en : term.name} ·{' '}
        {english ? view : view === 'cosmos' ? '望天地' : view === 'life' ? '听人间' : '观四时'}
        {paused ? (english ? ', paused' : '，动态已暂停') : ''}
      </p>
    </main>
  );
}
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
