import { useState } from 'react';
import { terms, asset, type Term } from './data';

const layers = [
  {
    radius: 345,
    en: '24 solar terms',
    zh: '二十四节气',
    text: [
      'Choose a butterfly to enter a solar term. The year begins here with Lichun.',
      '点选蝴蝶进入节气。此盘以立春作为浏览起点。',
    ],
  },
  {
    radius: 298,
    en: 'Solar longitude',
    zh: '太阳黄经',
    text: [
      'Each major tick is 15° of the Sun’s apparent path. Lichun = 315°; the March equinox = 0°.',
      '大刻度每格为太阳黄经 15°。立春为 315°，春分为 0°，并非指南针方位角。',
    ],
  },
  {
    radius: 268,
    en: 'Four seasonal groups',
    zh: '四季编组',
    text: [
      'Six terms per traditional seasonal group. These are cultural groupings, not local weather forecasts.',
      '按传统四季，每季编组六个节气。这是文化编组，不代表各地同一天入季。',
    ],
  },
  {
    radius: 232,
    en: 'Eight trigrams',
    zh: '八卦符号',
    text: [
      'A traditional symbolic vocabulary. This artistic arrangement is separate from astronomical measurement.',
      '传统符号构成的艺术层；此处不用于天文测量、真实方位或占测。',
    ],
  },
];
const point = (radius: number, angle: number) => [
  400 + Math.sin(angle) * radius,
  400 - Math.cos(angle) * radius,
];
export function Dial({
  term,
  bagua,
  onChoose,
  english,
  progress,
}: {
  term: Term;
  bagua: boolean;
  onChoose: (i: number) => void;
  english: boolean;
  progress: number;
}) {
  const [focused, setFocused] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const active = focused ?? hover ?? selected;
  const visibleActive = active === 3 && !bagua ? null : active;
  return (
    <div
      className="dial"
      role="group"
      aria-label={english ? 'The twenty-four solar terms' : '二十四节气时间轮'}
    >
      <svg viewBox="0 0 800 800" className="compass-rings">
        {layers.map((layer, i) =>
          i === 3 && !bagua ? null : (
            <g
              key={layer.en}
              className={`compass-layer ${visibleActive === i ? 'active' : ''}`}
              role="button"
              tabIndex={0}
              aria-label={english ? layer.en : layer.zh}
              aria-pressed={selected === i}
              onPointerEnter={() => setHover(i)}
              onPointerLeave={() => setHover(null)}
              onFocus={() => setFocused(i)}
              onBlur={() => setFocused(null)}
              onClick={() => setSelected(selected === i ? null : i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelected(selected === i ? null : i);
                }
                if (e.key === 'Escape') setSelected(null);
              }}
            >
              <circle className="ring-hit" cx="400" cy="400" r={layer.radius} />
              <circle className="ring-ink" cx="400" cy="400" r={layer.radius} />
              {i === 1 &&
                Array.from({ length: 120 }, (_, n) => {
                  const a = (n * Math.PI) / 60;
                  const p = point(n % 5 ? 294 : 288, a),
                    q = point(303, a);
                  return (
                    <line key={n} className="ring-detail" x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} />
                  );
                })}
              {i === 1 &&
                [0, 6, 12, 18].map((n) => {
                  const p = point(313, (n * Math.PI) / 12);
                  return (
                    <text key={n} className="ring-caption" x={p[0]} y={p[1]}>
                      {(315 + n * 15) % 360}°
                    </text>
                  );
                })}
              {i === 2 &&
                ['春', '夏', '秋', '冬'].map((label, n) => {
                  const p = point(268, ((n * 90 + 45) * Math.PI) / 180);
                  return (
                    <g key={label}>
                      <circle
                        className="ring-detail"
                        cx={p[0]}
                        cy={p[1]}
                        r="15"
                        fill="var(--sky)"
                      />
                      <text className="ring-caption" x={p[0]} y={p[1]}>
                        {english ? ['SPR', 'SUM', 'AUT', 'WIN'][n] : label}
                      </text>
                    </g>
                  );
                })}
              {i === 3 &&
                ['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷'].map((symbol, n) => {
                  const p = point(232, (n * Math.PI) / 4);
                  return (
                    <text key={symbol} className="trigram ring-detail" x={p[0]} y={p[1]}>
                      {symbol}
                    </text>
                  );
                })}
            </g>
          ),
        )}
        <circle
          cx={point(298, (progress * Math.PI) / 12)[0]}
          cy={point(298, (progress * Math.PI) / 12)[1]}
          r="5"
          fill="var(--light)"
          stroke="currentColor"
          pointerEvents="none"
        />
      </svg>
      <div className="butterfly" key={term.id}>
        <img
          src={asset(term.id)}
          alt={english ? `${term.en} butterfly` : `${term.name}蝴蝶`}
          width="600"
          height="600"
        />
      </div>
      <div className="longitude">
        <small>{english ? 'SOLAR LONGITUDE' : '太阳黄经'}</small>
        <b>{term.longitude}°</b>
        <span>{english ? 'Time, observed through the Sun' : '以太阳为刻度 · 以万物感知'}</span>
      </div>
      {terms.map((t, i) => {
        const a = (i * Math.PI) / 12;
        return (
          <button
            key={t.id}
            className="term-node"
            style={{ left: `${50 + 44 * Math.sin(a)}%`, top: `${50 - 44 * Math.cos(a)}%` }}
            onClick={() => onChoose(i)}
            aria-label={english ? `Enter ${t.en}` : `进入${t.name}`}
            aria-pressed={term.id === t.id}
            title={english ? t.en : t.name}
          >
            <img src={asset(t.id, true)} alt="" width="38" height="38" />
            <span lang="zh-CN">{t.name}</span>
          </button>
        );
      })}
      <div className="ring-reading" aria-live="polite">
        {visibleActive === null ? (
          <span>{english ? 'Trace a ring to discover its meaning' : '轻触一圈，读懂一层时间'}</span>
        ) : (
          <>
            <b>{english ? layers[visibleActive].en : layers[visibleActive].zh}</b>
            <span>{layers[visibleActive].text[english ? 0 : 1]}</span>
          </>
        )}
      </div>
    </div>
  );
}
