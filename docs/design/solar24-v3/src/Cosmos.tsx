import { useState } from 'react';
import { terms, type Term } from './data';

/** Conceptual geometry only; no date-to-position or live ephemeris calculation. */
export function Cosmos({
  term,
  english,
  onChoose,
}: {
  term: Term;
  english: boolean;
  onChoose: (index: number) => void;
}) {
  const [scale, setScale] = useState<'orbit' | 'sky'>('orbit');
  const heliocentric = scale === 'orbit';
  const angle = ((term.longitude + (heliocentric ? 180 : 0)) * Math.PI) / 180;
  const x = 400 + Math.cos(angle) * 240;
  const y = 350 - Math.sin(angle) * 240;
  const labels = english ? ['Solar system', 'From Earth'] : ['太阳系 · 看公转', '地球上 · 望黄道'];
  return (
    <div className="cosmos-stage">
      <div className="cosmos-scale" role="group" aria-label={english ? 'Viewpoint' : '观察视角'}>
        {(['orbit', 'sky'] as const).map((value, i) => (
          <button key={value} onClick={() => setScale(value)} aria-pressed={scale === value}>
            {labels[i]}
          </button>
        ))}
      </div>
      <svg viewBox="0 0 800 720" role="img" aria-labelledby="cosmos-title cosmos-desc">
        <title id="cosmos-title">
          {heliocentric ? '太阳与地球公转位置示意' : '地球观察太阳黄经示意'}
        </title>
        <desc id="cosmos-desc">
          {term.name}，太阳黄经{term.longitude}
          度。太阳系视图以太阳为中心，地球视图以地球为观察中心。尺寸、距离与轨道为简化示意，非实时星历。
        </desc>
        <defs>
          <radialGradient id="cosmic-sun">
            <stop stopColor="#fff8d2" />
            <stop offset=".65" stopColor="#e9c378" />
            <stop offset="1" stopColor="#c18c47" />
          </radialGradient>
          <radialGradient id="cosmic-glow">
            <stop stopColor="#e6bd72" stopOpacity=".35" />
            <stop offset="1" stopColor="#e6bd72" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cosmic-earth" cx=".3" cy=".3">
            <stop stopColor="#aec5bb" />
            <stop offset=".55" stopColor="#5e898c" />
            <stop offset="1" stopColor="#203e4d" />
          </radialGradient>
          <g id="earth-body">
            <circle r="25" fill="url(#cosmic-earth)" />
            <path
              d="M-15-17L-4-20 6-12 2-4 11 2 7 10 1 9-3 20-9 13-7 4-17-1-20-9Z"
              fill="#b5c0a0"
              opacity=".75"
            />
            <path d="M10-19L18-12 22-3 17 0 11-6Z" fill="#c8ccb1" opacity=".65" />
            <ellipse rx="25" ry="8" fill="none" stroke="#e7eee4" strokeWidth=".6" opacity=".4" />
            <circle r="29" fill="none" stroke="#b5ccd1" strokeWidth=".5" opacity=".6" />
          </g>
        </defs>
        {Array.from({ length: 75 }, (_, i) => (
          <circle
            key={i}
            cx={((i * 137.51) % 790) + 5}
            cy={((i * 97.33) % 640) + 30}
            r={i % 9 === 0 ? 1.5 : 0.7}
            fill="currentColor"
            opacity={0.12 + (i % 5) * 0.05}
          />
        ))}
        <ellipse
          cx="400"
          cy="350"
          rx="370"
          ry="298"
          fill="none"
          stroke="currentColor"
          strokeWidth=".5"
          strokeDasharray="1 9"
          opacity=".23"
        />
        <circle cx="400" cy="350" r="240" fill="none" stroke="currentColor" opacity=".3" />
        <circle
          cx="400"
          cy="350"
          r="210"
          fill="none"
          stroke="currentColor"
          strokeDasharray="2 9"
          opacity=".15"
        />
        <path
          d="M400 350H675"
          fill="none"
          stroke="currentColor"
          strokeDasharray="3 7"
          opacity=".3"
        />
        <text x="682" y="355" className="cosmic-degree">
          0°
        </text>
        {terms.map((t) => {
          const a = ((t.longitude + (heliocentric ? 180 : 0)) * Math.PI) / 180;
          return (
            <circle
              key={t.id}
              cx={400 + Math.cos(a) * 240}
              cy={350 - Math.sin(a) * 240}
              r={t.id === term.id ? 5 : 2}
              fill="currentColor"
              opacity=".55"
            />
          );
        })}
        <line
          x1="400"
          y1="350"
          x2={x}
          y2={y}
          stroke="currentColor"
          opacity=".35"
          strokeDasharray="4 7"
        />
        {heliocentric ? (
          <>
            <circle cx="400" cy="350" r="112" fill="url(#cosmic-glow)" />
            <circle cx="400" cy="350" r="38" fill="url(#cosmic-sun)" />
            <text x="400" y="415" textAnchor="middle">
              {english ? 'SUN' : '日 · 太阳'}
            </text>
            <g transform={`translate(${x} ${y})`}>
              <use href="#earth-body" />
            </g>
            <text x={x} y={y + 52} textAnchor="middle">
              {english ? 'OUR EARTH' : '地球 · 我们在这里'}
            </text>
          </>
        ) : (
          <>
            <g transform="translate(400 350) scale(1.7)">
              <use href="#earth-body" />
            </g>
            <text x="400" y="425" textAnchor="middle">
              {english ? 'OUR VIEWPOINT' : '从这里，观察一年'}
            </text>
            <circle cx={x} cy={y} r="65" fill="url(#cosmic-glow)" />
            <circle cx={x} cy={y} r="22" fill="url(#cosmic-sun)" />
            <text x={x} y={y + 48} textAnchor="middle">
              {english ? 'APPARENT SUN' : '太阳的视位置'}
            </text>
          </>
        )}
      </svg>
      <div className="cosmos-steps">
        {[0, 3, 9, 15, 21].map((i) => (
          <button key={i} onClick={() => onChoose(i)} aria-pressed={term.id === terms[i].id}>
            {english ? terms[i].en : terms[i].name}
          </button>
        ))}
      </div>
      <p className="cosmos-note">
        <span className="cosmos-longitude">
          {term.name} · {english ? 'Solar longitude' : '太阳黄经'} {term.longitude}°
        </span>
        {english
          ? 'One year, two viewpoints. Diagram only; sizes and distances are not to scale.'
          : '同一年，两种视角。尺寸与距离不按比例；非实时星历。'}
        <a
          href="https://www.hko.gov.hk/en/gts/time/24solarterms.htm"
          target="_blank"
          rel="noreferrer"
        >
          {english ? 'Astronomy reference ↗' : '天文依据 ↗'}
        </a>
      </p>
    </div>
  );
}
