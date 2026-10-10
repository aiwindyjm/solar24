import { useEffect, useRef, useState } from 'react';
import type { Term } from './data';

const rgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
const vertex = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
const fragment = `precision mediump float;
uniform vec2 resolution;uniform float time;uniform vec3 sky;uniform vec3 mist;uniform vec3 glow;uniform float power;
float noise(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
void main(){vec2 uv=gl_FragCoord.xy/resolution;float cloud=sin(uv.x*8.+time*.03+sin(uv.y*6.))*sin(uv.y*4.-time*.02);float light=exp(-length((uv-vec2(.72,.78))*vec2(1.,1.2))*4.);float ray=pow(max(0.,sin(uv.x*10.+uv.y*3.+time*.025)),14.)*light;vec3 c=mix(sky,mist,(1.-uv.y)*.18+cloud*.015);c=mix(c,glow,light*.3+ray*.07*power);c+=(noise(gl_FragCoord.xy)-.5)*.011;gl_FragColor=vec4(c,1.);}`;

export function Atmosphere({
  term,
  paused,
  reduced,
  onCapability,
}: {
  term: Term;
  paused: boolean;
  reduced: boolean;
  onCapability: (ok: boolean) => void;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const current = useRef(term);
  const motion = useRef({ paused, reduced });
  const redraw = useRef<() => void>(() => {});
  current.current = term;
  motion.current = { paused, reduced };
  useEffect(() => redraw.current(), [paused, reduced, term]);
  useEffect(() => {
    const canvas = ref.current!;
    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      powerPreference: 'low-power',
    });
    if (!gl) {
      onCapability(false);
      return;
    }
    const program = gl.createProgram()!;
    const shaders = [gl.VERTEX_SHADER, gl.FRAGMENT_SHADER].map((type, i) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, i === 0 ? vertex : fragment);
      gl.compileShader(s);
      return s;
    });
    shaders.forEach((s) => gl.attachShader(program, s));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      onCapability(false);
      shaders.forEach((s) => gl.deleteShader(s));
      gl.deleteProgram(program);
      return;
    }
    onCapability(true);
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const p = gl.getAttribLocation(program, 'p');
    gl.enableVertexAttribArray(p);
    gl.vertexAttribPointer(p, 2, gl.FLOAT, false, 0, 0);
    const uniform = (s: string) => gl.getUniformLocation(program, s);
    const u = {
      resolution: uniform('resolution'),
      time: uniform('time'),
      sky: uniform('sky'),
      mist: uniform('mist'),
      glow: uniform('glow'),
      power: uniform('power'),
    };
    let frame = 0,
      last = 0,
      t = 0;
    const colors = [
      rgb(current.current.palette[0]),
      rgb(current.current.palette[1]),
      rgb(current.current.palette[4]),
    ];
    let lost = false;
    function resize() {
      const r = canvas.getBoundingClientRect(),
        dpr = Math.min(devicePixelRatio, 1.3);
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      gl!.viewport(0, 0, canvas.width, canvas.height);
      wake();
    }
    function draw(now: number) {
      if (lost) return;
      const { paused, reduced } = motion.current;
      if (document.hidden) return;
      if (!paused && !reduced) frame = requestAnimationFrame(draw);
      if (!paused && !reduced && now - last < 40) return;
      const dt = Math.min((now - last) / 1000, 0.06);
      last = now;
      if (!paused && !reduced) t += dt;
      const target = [
        rgb(current.current.palette[0]),
        rgb(current.current.palette[1]),
        rgb(current.current.palette[4]),
      ];
      colors.forEach((c, i) =>
        c.forEach(
          (v, j) => (c[j] = reduced || paused ? target[i][j] : v + (target[i][j] - v) * 0.055),
        ),
      );
      gl!.uniform2f(u.resolution, canvas.width, canvas.height);
      gl!.uniform1f(u.time, t);
      gl!.uniform3fv(u.sky, colors[0]);
      gl!.uniform3fv(u.mist, colors[1]);
      gl!.uniform3fv(u.glow, colors[2]);
      gl!.uniform1f(u.power, current.current.effect === 'sun' ? 1.8 : 0.5);
      gl!.drawArrays(gl!.TRIANGLES, 0, 6);
    }
    function wake() {
      cancelAnimationFrame(frame);
      last = 0;
      if (!document.hidden) frame = requestAnimationFrame(draw);
    }
    redraw.current = wake;
    document.addEventListener('visibilitychange', wake);
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    const contextLost = (e: Event) => {
      e.preventDefault();
      lost = true;
      cancelAnimationFrame(frame);
      onCapability(false);
    };
    canvas.addEventListener('webglcontextlost', contextLost);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      redraw.current = () => {};
      document.removeEventListener('visibilitychange', wake);
      canvas.removeEventListener('webglcontextlost', contextLost);
      gl.deleteBuffer(buffer);
      shaders.forEach((s) => gl.deleteShader(s));
      gl.deleteProgram(program);
    };
  }, [onCapability]);
  return <canvas ref={ref} className="atmosphere" aria-hidden="true" />;
}

export function Particles({
  term,
  paused,
  reduced,
}: {
  term: Term;
  paused: boolean;
  reduced: boolean;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const motion = useRef({ paused, reduced });
  const redraw = useRef<() => void>(() => {});
  motion.current = { paused, reduced };
  useEffect(() => redraw.current(), [paused, reduced]);
  useEffect(() => {
    const canvas = ref.current!,
      ctx = canvas.getContext('2d');
    if (!ctx) return;
    let w = 1,
      h = 1,
      frame = 0,
      last = 0,
      t = 0;
    const count = term.effect === 'rain' ? 65 : term.effect === 'snow' ? 55 : 27;
    let seed = 43;
    const random = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    const ps = Array.from({ length: count }, () => ({
      x: random(),
      y: random(),
      s: random(),
      phase: random() * 6.28,
    }));
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      const dpr = Math.min(devicePixelRatio, 1.5);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      wake();
    };
    const draw = (now: number) => {
      const { paused, reduced } = motion.current;
      if (document.hidden) return;
      if (!paused && !reduced) frame = requestAnimationFrame(draw);
      if (!paused && !reduced && now - last < 33) return;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!paused && !reduced) t += dt;
      ctx.clearRect(0, 0, w, h);
      for (const p of ps) {
        let x = p.x * w + Math.sin(t * 0.25 + p.phase) * 30;
        const y = ((p.y + t * (term.effect === 'rain' ? 0.12 : 0.014) * (p.s + 0.3)) % 1) * h;
        ctx.globalAlpha = 0.14 + p.s * 0.2;
        ctx.strokeStyle = term.palette[2];
        ctx.fillStyle = term.effect === 'snow' ? '#fff' : term.palette[2];
        if (term.effect === 'rain') {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x - 3, y + 13 + p.s * 13);
          ctx.lineWidth = 0.6;
          ctx.stroke();
          if (y > h * 0.73) {
            const radius = ((t * 0.6 + p.phase) % 1) * 24;
            ctx.beginPath();
            ctx.ellipse(x, h * (0.76 + p.s * 0.13), radius, radius * 0.23, 0, 0, 6.28);
            ctx.stroke();
          }
        } else if (term.effect === 'leaves') {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(t * 0.25 + p.phase);
          ctx.beginPath();
          ctx.ellipse(0, 0, 3 + p.s * 5, 1.5 + p.s * 2, 0, 0, 6.28);
          ctx.fill();
          ctx.restore();
        } else {
          if (term.effect === 'breeze' || term.effect === 'awakening') x += Math.sin(t * 0.2) * 16;
          ctx.beginPath();
          ctx.arc(x, y, term.effect === 'snow' ? 1 + p.s * 2 : 0.8 + p.s * 1.3, 0, 6.28);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };
    function wake() {
      cancelAnimationFrame(frame);
      last = 0;
      if (!document.hidden) frame = requestAnimationFrame(draw);
    }
    redraw.current = wake;
    document.addEventListener('visibilitychange', wake);
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      redraw.current = () => {};
      document.removeEventListener('visibilitychange', wake);
    };
  }, [term]);
  return <canvas ref={ref} className="particles" aria-hidden="true" />;
}

export function Landscape({ term }: { term: Term }) {
  const season = term.effect;
  return (
    <svg
      className="landscape"
      viewBox="0 0 1600 950"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mountainFade" x2="0" y2="1">
          <stop stopColor="var(--mist)" stopOpacity=".75" />
          <stop offset="1" stopColor="var(--sky)" stopOpacity=".12" />
        </linearGradient>
        <linearGradient id="lakeFade" x2="0" y2="1">
          <stop stopColor="var(--water)" stopOpacity=".04" />
          <stop offset="1" stopColor="var(--water)" stopOpacity=".5" />
        </linearGradient>
        <filter id="mountainInk">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".02"
            numOctaves="2"
            seed="7"
            result="n"
          />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="9" />
        </filter>
        <radialGradient id="sunlight">
          <stop stopColor="var(--light)" stopOpacity=".55" />
          <stop offset="1" stopColor="var(--light)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="1215" cy="258" r="230" fill="url(#sunlight)" />
      <g filter="url(#mountainInk)">
        <path
          d="M-60 580Q80 480 163 532T330 479Q383 497 416 455Q477 413 536 490T674 518Q775 411 850 475Q905 493 942 445Q1001 402 1065 455T1200 431Q1290 361 1344 452T1630 492V780H-60Z"
          fill="url(#mountainFade)"
          opacity=".5"
        />
        <path
          d="M-40 716Q34 653 100 628Q168 574 211 619Q243 592 285 638Q322 629 355 669L476 701Q587 676 695 711T910 690Q972 638 1003 661Q1080 593 1141 635Q1201 568 1264 604Q1320 490 1380 570Q1450 588 1510 538Q1590 507 1650 559V970H-40Z"
          fill="var(--mist)"
          opacity=".43"
        />
        <path
          d="M-50 820Q67 684 131 749Q157 715 219 775Q283 731 390 824L750 926H-50Z"
          fill="var(--accent)"
          opacity=".13"
        />
        <path
          d="M1160 933Q1237 748 1297 796Q1372 715 1421 739Q1533 636 1640 718V980Z"
          fill="var(--accent)"
          opacity=".12"
        />
      </g>
      <path d="M250 733Q735 693 1350 740L1600 950H0Z" fill="url(#lakeFade)" />
      {term.id === 'lichun' && (
        <g className="thaw" fill="#f1f6f3" stroke="var(--water)" strokeWidth="1">
          <path d="M300 792L455 780 501 795 435 816 329 811Z" />
          <path d="M466 830L590 817 640 838 545 850Z" />
          <path d="M728 789L805 785 847 800 791 812Z" />
        </g>
      )}
      {season === 'awakening' && (
        <ellipse
          className="distant-light"
          cx="850"
          cy="350"
          rx="460"
          ry="300"
          fill="url(#sunlight)"
        />
      )}
      {season === 'snow' && (
        <g transform="translate(1290 855)">
          <ellipse className="hearth" rx="84" ry="48" fill="url(#sunlight)" />
          <path
            d="M-15 0L0-13 15 0M-10-2V18H10V-2"
            fill="var(--mist)"
            stroke="var(--accent)"
            strokeWidth="1"
          />
          <path className="hearth" d="M-4 5H4V14H-4Z" fill="#d6a261" />
        </g>
      )}
      <g fill="none" stroke="var(--accent)" opacity=".13" strokeWidth=".7">
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            className="waterline"
            style={{ animationDelay: `${-i * 2}s` }}
            d={`M${280 + i * 42} ${778 + i * 24}Q800 ${770 + i * 24} ${1270 - i * 30} ${777 + i * 24}`}
          />
        ))}
      </g>
      {(season === 'breeze' || season === 'rain' || season === 'awakening') && (
        <g className="willow" fill="none" stroke="var(--accent)" strokeLinecap="round">
          <path d="M1600 40Q1460 74 1372 142Q1280 195 1196 252" strokeWidth="3" opacity=".55" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <g key={i} className="willow-strand" style={{ animationDelay: `${-i * 0.7}s` }}>
              <path
                d={`M${1230 + i * 43} ${228 - i * 23}Q${1280 + i * 38} ${335 - i * 14} ${1215 + i * 41} ${468 - i * 22}`}
                strokeWidth=".8"
                opacity=".4"
              />
              {[0, 1, 2, 3, 4, 5].map((j) => (
                <path
                  key={j}
                  d={`M${1245 + i * 40 - j * 2} ${265 - i * 20 + j * 30}q${j % 2 ? 16 : -17} 8 ${j % 2 ? 9 : -11} 27q${j % 2 ? -16 : 17} -7 ${j % 2 ? -9 : 11} -27`}
                  fill="var(--accent)"
                  stroke="none"
                  opacity={0.2 + j * 0.04}
                />
              ))}
            </g>
          ))}
        </g>
      )}
      {season === 'sun' && (
        <g className="lotus" fill="var(--accent)" opacity=".35" stroke="var(--accent)">
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} transform={`translate(${1220 + i * 65} ${825 + (i % 2) * 24})`}>
              <path d="M0 85Q4 50 0 0" fill="none" />
              <path d="M0 0Q-90 -56 -57 -70Q-16 -106 0 -48Q25 -99 65 -68Q90 -43 0 0" />
              <path d="M0 -5L-47 -64 M0 -5L46 -58" stroke="var(--sky)" strokeWidth=".7" />
            </g>
          ))}
        </g>
      )}
      {season === 'leaves' && (
        <g stroke="var(--accent)" fill="var(--light)" opacity=".6">
          <path
            d="M1590 134Q1475 160 1320 302M1460 206L1420 307M1490 190L1510 271"
            fill="none"
            strokeWidth="3"
          />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={i}
              transform={`translate(${1334 + i * 40} ${282 - i * 18}) rotate(${i * 27})`}
              d="M0 0L-16 -17L-8 -18L-15 -36L-2 -26L8 -45L12 -23L25 -27L18 -10L28 -7Z"
              strokeWidth=".5"
            />
          ))}
        </g>
      )}
      {season === 'snow' && (
        <g stroke="var(--accent)" fill="none" opacity=".35">
          <path
            d="M-10 894Q48 750 70 635Q84 594 80 566M56 709L7 659M69 649L131 589M43 757L126 714M81 624L44 576"
            strokeWidth="2"
          />
          <path
            d="M-7 889Q45 746 67 635M71 644L129 586M45 754L123 710"
            stroke="#fff"
            strokeWidth="3"
          />
        </g>
      )}
      {season === 'awakening' && (
        <g stroke="var(--accent)" fill="none" opacity=".35">
          <path d="M1140 860l-34 25 19 8-31 29M1180 875l-20 20 13 15" strokeWidth="1" />
          <path
            className="sprout"
            d="M1098 883q-3-48 5-65m-4 42q-31-12-20-29q24 5 20 29m1-16q30-25 33-4q-15 14-33 4"
            strokeWidth="2"
          />
        </g>
      )}
    </svg>
  );
}

export function useAmbient(enabled: boolean, paused: boolean, effect: string) {
  const [supported, setSupported] = useState(true);
  useEffect(() => {
    if (!enabled || paused) return;
    let context: AudioContext;
    try {
      context = new AudioContext();
    } catch {
      setSupported(false);
      return;
    }
    const length = context.sampleRate * 3,
      buffer = context.createBuffer(1, length, context.sampleRate),
      samples = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < length; i++) {
      last = (last + Math.random() * 0.04 - 0.02) * 0.98;
      samples[i] = last;
    }
    const source = context.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = effect === 'rain' ? 1800 : effect === 'snow' ? 260 : 700;
    const gain = context.createGain();
    gain.gain.setValueAtTime(0, context.currentTime);
    gain.gain.linearRampToValueAtTime(0.17, context.currentTime + 1.5);
    source.connect(filter).connect(gain).connect(context.destination);
    source.start();
    void context.resume().catch(() => setSupported(false));
    const onVisibility = () => {
      if (document.hidden) void context.suspend();
      else void context.resume();
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      source.stop();
      void context.close();
    };
  }, [enabled, paused, effect]);
  return supported;
}
