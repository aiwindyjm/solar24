import type { Gesture } from './life-data';

/** Drawing parameters express a gesture, never a physical or agricultural simulation. */
export function SeasonDrawing({ kind, progress }: { kind: Gesture; progress: number }) {
  const t = progress;
  const stem = (x: number, height: number, grain = false) => (
    <g key={x} transform={`translate(${x} 112)`}>
      <path d={`M0 0 Q-3 ${-height / 2} 0 ${-height}`} />
      <path
        d={`M0 ${-height * 0.45} Q-18 ${-height * 0.8} -20 ${-height * 0.5} Q-8 ${-height * 0.3} 0 ${-height * 0.45}`}
        fill="var(--mist)"
      />
      <path
        d={`M0 ${-height * 0.65} Q18 ${-height} 20 ${-height * 0.75} Q7 ${-height * 0.5} 0 ${-height * 0.65}`}
        fill="var(--mist)"
      />
      {grain &&
        Array.from({ length: 6 }, (_, j) => (
          <ellipse
            key={j}
            cx={(j % 2 ? -1 : 1) * (3 + t * 3)}
            cy={-height - j * 4}
            rx={2 + t * 3}
            ry={4}
            fill="var(--light)"
          />
        ))}
    </g>
  );
  let drawing;
  switch (kind) {
    case 'bud':
    case 'soil':
      drawing = (
        <>
          <path d="M20 116 Q100 110 165 115 T310 112" opacity=".35" />
          {stem(160, 14 + t * 70)}
          <path
            d={`M30 117 Q105 ${110 + t * 15} ${156 - t * 26} 114 M${164 + t * 26} 114 Q245 109 300 116`}
            strokeWidth={kind === 'soil' ? 9 : 1}
            opacity={kind === 'soil' ? 0.25 : 0.15}
          />
          {kind === 'soil' && <path d={`M160 115 l${-5 - t * 10} 14 m5 -5 l16 12`} opacity=".3" />}
        </>
      );
      break;
    case 'water':
      drawing = (
        <>
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              d={`M25 ${82 + i * 17} Q100 ${74 + i * 17} 165 ${85 + i * 17} T305 ${80 + i * 17}`}
              opacity=".28"
            />
          ))}
          <path
            d={`M25 ${110 - t * 40} Q100 ${103 - t * 40} 170 ${110 - t * 40} T305 ${105 - t * 40} L305 126 H25Z`}
            fill="var(--water)"
            stroke="none"
            opacity=".7"
          />
          {[60, 126, 197, 265].map((x, i) => (
            <g key={x} opacity={0.15 + t * 0.7}>
              <path d={`M${x} ${12 + i * 7} l-5 ${7 + t * 15}`} />
              <ellipse cx={x - 5} cy={109 - t * 38} rx={4 + t * 17} ry={2 + t * 3} />
            </g>
          ))}
        </>
      );
      break;
    case 'tea':
      drawing = (
        <>
          <path d="M93 54 Q100 121 161 120 Q223 118 230 54Z" opacity=".55" />
          <ellipse cx="161" cy="54" rx="69" ry="12" />
          <path
            d="M99 67 Q161 89 224 67 Q213 118 161 117 Q112 114 99 67"
            fill="var(--light)"
            opacity={0.12 + t * 0.45}
            stroke="none"
          />
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              d={`M${132 + i * 23} 86 q${-8 - t * 9} ${-8 - t * 8} ${-5 - t * 5} ${-14 - t * 15} q${12 + t * 12} 5 ${5 + t * 5} ${14 + t * 15}`}
              fill="var(--mist)"
              transform={`rotate(${t * 18 * (i - 1)} 161 80)`}
            />
          ))}
        </>
      );
      break;
    case 'grain':
      drawing = (
        <>
          {[100, 160, 220].map((x) => stem(x, 45, true))}
          <path d="M65 116 H260" opacity=".2" />
        </>
      );
      break;
    case 'harvest':
      drawing = (
        <>
          {Array.from({ length: 9 }, (_, i) => {
            const cutoff = t * 10;
            const cut = i < cutoff;
            const replanted = t > 0.55 && i < (t - 0.55) * 20;
            return (
              <g key={i} opacity={cut && !replanted ? 0.5 : 1}>
                {stem(35 + i * 32, replanted ? 20 : cut ? 5 : 48, !cut)}
              </g>
            );
          })}
          <path d={`M${30 + t * 274} 25 V130`} opacity=".25" strokeDasharray="3 5" />
        </>
      );
      break;
    case 'light':
    case 'shade':
      drawing = (
        <>
          <path d="M25 112 Q160 103 302 114" opacity=".25" />
          <circle
            cx={58 + t * 210}
            cy={kind === 'light' ? 38 + Math.sin(t * Math.PI) * 15 : 30}
            r="13"
            fill="var(--light)"
            stroke="none"
          />
          {kind === 'light' ? (
            <>
              <path
                d={`M160 105 L${70 + t * 210} 119 L160 118Z`}
                fill="currentColor"
                opacity=".2"
              />
              <path d="M160 64 V117" />
              <path d={`M${58 + t * 210} 55 L160 105`} opacity=".2" strokeDasharray="2 5" />
            </>
          ) : (
            <>
              <path d="M158 113 Q155 70 167 35 M158 77 L123 55 M162 61 L196 45" />
              <ellipse
                cx="157"
                cy="51"
                rx={36 + t * 45}
                ry="23"
                fill="var(--mist)"
                opacity=".45"
                stroke="none"
              />
              <ellipse
                cx={171 - t * 15}
                cy="115"
                rx={18 + t * 95}
                ry="8"
                fill="currentColor"
                opacity=".13"
                stroke="none"
              />
            </>
          )}
        </>
      );
      break;
    case 'leaf':
    case 'dew':
      drawing = (
        <>
          <path
            d="M56 114 Q86 19 270 31 Q246 129 56 114Z"
            fill={kind === 'leaf' ? 'var(--light)' : 'var(--mist)'}
            fillOpacity={0.1 + t * 0.25}
          />
          <path d="M56 114 Q143 83 270 31" opacity=".6" />
          {Array.from({ length: 5 }, (_, i) => (
            <path
              key={i}
              d={`M${91 + i * 29} ${101 - i * 12} q-5 -24 ${3 + i * 2} -37 m${-3 - i * 2} 37 q21 5 35 0`}
              opacity={0.1 + t * 0.5}
            />
          ))}
          {kind === 'dew' &&
            [0, 1, 2, 3].map((i) => (
              <ellipse
                key={i}
                cx={100 + i * 37}
                cy={78 - i * 9}
                rx={(2 + (i % 2) * 2) * t + 1}
                ry={3 + t * 5}
                fill="var(--water)"
                opacity={t}
              />
            ))}
        </>
      );
      break;
    case 'shelter':
      drawing = (
        <>
          {[95, 155, 215].map((x) => stem(x, 25))}
          <path d="M30 117 Q160 109 299 118" opacity=".3" />
          <path
            d={`M${35 + (1 - t) * 220} 106 Q175 17 285 103 L288 112 Q172 51 ${35 + (1 - t) * 220} 115Z`}
            fill="var(--sky)"
            fillOpacity=".8"
            opacity={0.2 + t * 0.65}
          />
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              d={`M22 ${35 + i * 15} q25 -8 ${40 + (1 - t) * 60} 0`}
              opacity={0.35 - t * 0.2}
            />
          ))}
        </>
      );
      break;
    case 'store':
      drawing = (
        <>
          <path d="M165 35 H292 V121 H165Z M165 78 H292 M230 35 V121" opacity=".4" />
          {Array.from({ length: 8 }, (_, i) => {
            const x = 34 + (i % 4) * 23,
              y = 88 + Math.floor(i / 4) * 20;
            const destX = 180 + (i % 4) * 29,
              destY = 58 + Math.floor(i / 4) * 42;
            return (
              <ellipse
                key={i}
                cx={x + (destX - x) * t}
                cy={y + (destY - y) * t}
                rx="7"
                ry="11"
                fill="var(--light)"
                fillOpacity=".6"
                transform={`rotate(${18 * (1 - t)} ${x + (destX - x) * t} ${y + (destY - y) * t})`}
              />
            );
          })}
        </>
      );
      break;
    case 'plum':
      drawing = (
        <>
          {Array.from({ length: 81 }, (_, i) => {
            const cluster = Math.floor(i / 9),
              dot = i % 9;
            const x = 42 + (cluster % 3) * 108 + (dot % 3) * 9,
              y = 24 + Math.floor(cluster / 3) * 40 + Math.floor(dot / 3) * 9;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="2.6"
                fill={i < Math.round(t * 81) ? 'currentColor' : 'none'}
                opacity={i < Math.round(t * 81) ? 0.7 : 0.2}
              />
            );
          })}
        </>
      );
      break;
    case 'year':
      drawing = (
        <>
          {Array.from({ length: 24 }, (_, i) => {
            const a = (i / 24) * Math.PI * 2 - Math.PI / 2;
            return (
              <circle
                key={i}
                cx={160 + Math.cos(a) * 61}
                cy={76 + Math.sin(a) * 53}
                r={i <= Math.round(t * 23) ? 3 : 1.6}
                fill="currentColor"
                opacity={i <= Math.round(t * 23) ? 0.7 : 0.16}
              />
            );
          })}
          <g transform="translate(0 -15)">{stem(160, 12 + t * 35)}</g>
        </>
      );
  }
  return (
    <svg
      className="season-drawing"
      viewBox="0 0 330 145"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
      data-gesture={kind}
    >
      {drawing}
    </svg>
  );
}
