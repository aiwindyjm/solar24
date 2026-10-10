import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { Term } from './data';
import { places, type View, type Lens } from './state';
import landPolygons from '../assets/earth-land.json';
import { shorePainting } from './inkLandscape';

export type SceneState = {
  english: boolean;
  term: Term;
  view: View;
  lens: Lens;
  paused: boolean;
  reduced: boolean;
  focus: number | null;
  reset: number;
};
type Props = SceneState & {
  interaction: React.RefObject<HTMLDivElement | null>;
  anchors: React.RefObject<(HTMLButtonElement | null)[]>;
  onCapability: (ok: boolean) => void;
};
const v = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
const seed = (n: number) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

function earthTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const c = canvas.getContext('2d')!;
  c.fillStyle = '#456b74';
  c.fillRect(0, 0, 2048, 1024);
  // Natural Earth 1:110m public-domain land polygons; provenance recorded with the asset.
  const continents = landPolygons.flat();
  for (const points of continents) {
    c.beginPath();
    points.forEach(([lon, lat], i) => {
      const x = ((lon + 180) / 360) * 2048,
        y = ((90 - lat) / 180) * 1024;
      if (i) c.lineTo(x, y);
      else c.moveTo(x, y);
    });
    c.closePath();
    c.fillStyle = '#adb391';
    c.fill();
    c.strokeStyle = '#91a18b';
    c.lineWidth = 1;
    c.stroke();
  }
  c.fillStyle = '#d6d9cb';
  c.beginPath();
  c.moveTo(0, 940);
  for (let i = 0; i <= 40; i++) c.lineTo(i * 52, 935 + seed(i) * 40);
  c.lineTo(2048, 1024);
  c.lineTo(0, 1024);
  c.fill();
  for (let i = 0; i < 42000; i++) {
    c.fillStyle = i % 2 ? '#d8cfab' : '#193c49';
    c.globalAlpha = 0.05;
    c.fillRect(seed(i) * 2048, seed(i + 400) * 1024, 2 + seed(i + 9) * 5, 2);
  }
  c.globalAlpha = 1;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function cloudTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const c = canvas.getContext('2d')!;
  for (let i = 0; i < 85; i++) {
    const x = seed(i) * 512,
      y = seed(i + 62) * 256,
      r = 8 + seed(i + 99) * 27;
    const g = c.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(239,237,223,.27)');
    g.addColorStop(1, 'rgba(239,237,223,0)');
    c.fillStyle = g;
    c.fillRect(x - r, y - r, r * 2, r * 2);
  }
  return new THREE.CanvasTexture(canvas);
}

export function Scene(props: Props) {
  const mount = useRef<HTMLDivElement>(null);
  const latest = useRef(props);
  latest.current = props;
  const update = useRef<() => void>(() => {});
  useEffect(
    () => update.current(),
    [
      props.english,
      props.term,
      props.view,
      props.lens,
      props.paused,
      props.reduced,
      props.focus,
      props.reset,
    ],
  );
  useEffect(() => {
    const host = mount.current!;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: 'low-power',
      });
    } catch {
      latest.current.onCapability(false);
      return;
    }
    latest.current.onCapability(true);
    renderer.setPixelRatio(Math.min(devicePixelRatio, innerWidth < 700 ? 1.25 : 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);
    renderer.domElement.setAttribute('aria-hidden', 'true');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(39, 1, 0.1, 450);
    const sky = new THREE.Color(latest.current.term.palette[0]);
    scene.background = sky;
    const fog = new THREE.FogExp2(sky.clone(), 0.012);
    scene.fog = fog;
    const ground = new THREE.Group();
    scene.add(ground);
    const cosmos = new THREE.Group();
    cosmos.position.y = 125;
    scene.add(cosmos);
    const textures: THREE.Texture[] = [];
    const colored: {
      material: THREE.MeshBasicMaterial | THREE.LineBasicMaterial;
      role: number;
      factor: number;
    }[] = [];
    function ink(role: number, opacity = 1, factor = 1) {
      const m = new THREE.MeshBasicMaterial({
        color: latest.current.term.palette[role],
        transparent: opacity < 1,
        opacity,
        side: THREE.DoubleSide,
        depthWrite: opacity === 1,
      });
      colored.push({ material: m, role, factor });
      return m;
    }
    const lineMaterial = (role: number, opacity = 0.5) => {
      const m = new THREE.LineBasicMaterial({
        color: latest.current.term.palette[role],
        transparent: true,
        opacity,
      });
      colored.push({ material: m, role, factor: 1 });
      return m;
    };
    function line(
      points: THREE.Vector3[],
      material: THREE.LineBasicMaterial,
      parent: THREE.Object3D = ground,
    ) {
      const result = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material);
      parent.add(result);
      return result;
    }
    // Each ridge is fixed geometry at a different depth. Only the camera moves.
    for (let layer = 0; layer < 6; layer++) {
      const paper = document.createElement('canvas');
      paper.width = 2048;
      paper.height = 512;
      const brush = paper.getContext('2d')!;
      brush.beginPath();
      brush.moveTo(0, 512);
      for (let i = 0; i <= 2048; i++) {
        const x = (i / 2048) * 180 - 90;
        const peaks =
          Math.sin(x * 0.16 + layer * 2) * 2.4 +
          Math.sin(x * 0.35 - layer) * 1.2 +
          Math.sin(x * 1.2 + layer) * 0.13 +
          Math.sin(x * 3.9) * 0.04;
        const valley = Math.exp((-x * x) / 220) * 2.5;
        brush.lineTo(i, (1 - (9 + peaks - valley) / 24) * 512);
      }
      brush.lineTo(2048, 512);
      brush.closePath();
      const gradient = brush.createLinearGradient(0, 190, 0, 512);
      gradient.addColorStop(0, 'rgba(255,255,255,.85)');
      gradient.addColorStop(0.58, 'rgba(255,255,255,.5)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      brush.fillStyle = gradient;
      brush.fill();
      brush.globalCompositeOperation = 'source-atop';
      for (let i = 0; i < 12000; i++) {
        brush.fillStyle = `rgba(255,255,255,${seed(i + layer) * 0.12})`;
        brush.fillRect(seed(i) * 2048, seed(i + 2) * 512, 1 + seed(i + 5) * 2, 2);
      }
      const map = new THREE.CanvasTexture(paper);
      textures.push(map);
      const material = ink(layer < 4 ? 1 : 2, layer < 4 ? 0.45 : 0.2);
      material.map = map;
      const ridge = new THREE.Mesh(new THREE.PlaneGeometry(180, 24), material);
      ridge.position.set((layer % 2 ? 1 : -1) * layer, -4, -46 + layer * 5.5);
      ground.add(ridge);
    }
    const water = new THREE.Mesh(new THREE.PlaneGeometry(600, 600), ink(3, 0.12));
    water.rotation.x = -Math.PI / 2;
    water.position.set(0, -2, 0);
    ground.add(water);
    // Sparse brush-painted details share the landscape's depth, without literal set dressing.
    const shoreMaterials: THREE.MeshBasicMaterial[] = [];
    const shorePlanes: THREE.Mesh[] = [];
    for (const [index, kind] of (['bank', 'reeds', 'water'] as const).entries()) {
      const map = new THREE.CanvasTexture(shorePainting(kind));
      textures.push(map);
      const material = ink(2, 0);
      material.map = map;
      shoreMaterials.push(material);
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(35, 12.4), material);
      plane.position.set(0, 1.5, 1 + index * 0.1);
      ground.add(plane);
      shorePlanes.push(plane);
    }
    // Rain rings are small, incomplete events; quiet water remains mostly unpainted.
    const ripples: THREE.Line[] = [];
    for (let i = 0; i < 7; i++) {
      const points = [];
      for (let j = 0; j < 22; j++) {
        const a = (j / 24) * Math.PI * 1.5;
        points.push(v(Math.cos(a) * 0.36, 0, Math.sin(a) * 0.12));
      }
      const ring = line(points, lineMaterial(2, 0.08));
      ring.position.set((seed(i) - 0.5) * 24, -1.96, (seed(i + 60) - 0.5) * 14);
      ripples.push(ring);
    }
    const fogTexture = cloudTexture();
    textures.push(fogTexture);
    const mists: THREE.Sprite[] = [];
    for (let i = 0; i < 8; i++) {
      const mist = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: fogTexture,
          color: 0xffffff,
          transparent: true,
          opacity: 0.19,
          depthWrite: false,
        }),
      );
      mist.position.set((i - 4) * 9, i < 5 ? 2 : 32, -10 - i * 3);
      mist.scale.set(36, 9, 1);
      ground.add(mist);
      mists.push(mist);
    }
    const particleCount = innerWidth < 700 ? 85 : 160;
    const positions = new Float32Array(particleCount * 3);
    const pGeometry = new THREE.BufferGeometry();
    pGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMaterial = new THREE.PointsMaterial({
      color: '#b2bfa1',
      size: 0.08,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(pGeometry, pMaterial);
    ground.add(particles);
    const rainPositions = new Float32Array(particleCount * 6);
    const rainGeometry = new THREE.BufferGeometry();
    rainGeometry.setAttribute('position', new THREE.BufferAttribute(rainPositions, 3));
    const rain = new THREE.LineSegments(rainGeometry, lineMaterial(2, 0.2));
    ground.add(rain);
    const leaves: THREE.Mesh[] = [];
    const leafShape = new THREE.Shape();
    leafShape.moveTo(0, 0);
    leafShape.quadraticCurveTo(0.4, 0.12, 0.2, 0.5);
    leafShape.quadraticCurveTo(-0.2, 0.25, 0, 0);
    const leafGeometry = new THREE.ShapeGeometry(leafShape),
      leafMat = ink(4, 0.72);
    for (let i = 0; i < 25; i++) {
      const mesh = new THREE.Mesh(leafGeometry, leafMat);
      ground.add(mesh);
      leaves.push(mesh);
    }
    const birds: THREE.Group[] = [];
    for (let i = 0; i < 3; i++) {
      const g = new THREE.Group();
      const mat = lineMaterial(2, 0.55);
      line([v(-0.5, 0, 0), v(-0.2, 0.13, 0), v(0, 0, 0), v(0.2, 0.13, 0), v(0.5, 0, 0)], mat, g);
      ground.add(g);
      birds.push(g);
    }
    const groundOpacity = new Map<THREE.Material & { opacity: number }, number>();
    ground.traverse((object) => {
      const material = (object as THREE.Mesh).material;
      if (material) {
        for (const m of Array.isArray(material) ? material : [material]) {
          groundOpacity.set(m, m.opacity);
        }
      }
    });
    // A single universe group contains volumetric bodies, orbit, light and stars.
    cosmos.add(new THREE.AmbientLight('#a6b4bd', 0.27));
    const sunLight = new THREE.PointLight('#ffe2ab', 65, 0, 1);
    cosmos.add(sunLight);
    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(3.3, 48, 32),
      new THREE.MeshBasicMaterial({ color: '#e9c287' }),
    );
    cosmos.add(sun);
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = 128;
    glowCanvas.height = 128;
    const gc = glowCanvas.getContext('2d')!,
      grad = gc.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(248,212,143,.8)');
    grad.addColorStop(0.25, 'rgba(242,199,125,.24)');
    grad.addColorStop(1, 'rgba(242,199,125,0)');
    gc.fillStyle = grad;
    gc.fillRect(0, 0, 128, 128);
    const glowTexture = new THREE.CanvasTexture(glowCanvas);
    textures.push(glowTexture);
    const sunGlow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    sunGlow.scale.set(22, 22, 1);
    cosmos.add(sunGlow);
    const orbitPts = [];
    for (let i = 0; i <= 160; i++) {
      const a = (i / 160) * Math.PI * 2;
      orbitPts.push(v(Math.cos(a) * 17, 0, Math.sin(a) * 17));
    }
    line(
      orbitPts,
      new THREE.LineBasicMaterial({ color: '#b8b49a', transparent: true, opacity: 0.35 }),
      cosmos,
    );
    for (let i = 0; i < 24; i++) {
      const a = ((i * 15 + 180) * Math.PI) / 180;
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(i % 6 === 0 ? 0.18 : 0.085, 10, 8),
        new THREE.MeshBasicMaterial({ color: '#d1c5a3' }),
      );
      dot.position.set(Math.cos(a) * 17, 0, -Math.sin(a) * 17);
      cosmos.add(dot);
    }
    const labels: { sprite: THREE.Sprite; maps: THREE.CanvasTexture[] }[] = [];
    function label(en: string, zh: string, position: THREE.Vector3, width = 7) {
      const maps = [en, zh].map((text) => {
        const c = document.createElement('canvas');
        c.width = 640;
        c.height = 100;
        const brush = c.getContext('2d')!;
        brush.fillStyle = '#e3dfc6';
        brush.font = '48px sans-serif';
        brush.textAlign = 'center';
        brush.fillText(text, 320, 66, 610);
        const map = new THREE.CanvasTexture(c);
        textures.push(map);
        return map;
      });
      const sprite = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: maps[0],
          transparent: true,
          depthWrite: false,
          sizeAttenuation: false,
        }),
      );
      sprite.position.copy(position);
      sprite.scale.set(width * 0.017, (width * 0.017) / 6.4, 1);
      cosmos.add(sprite);
      labels.push({ sprite, maps });
      return sprite;
    }
    const stations = [
      ['March equinox · 0°', '春分 · 0°'],
      ['June solstice · 90°', '夏至 · 90°'],
      ['September equinox · 180°', '秋分 · 180°'],
      ['December solstice · 270°', '冬至 · 270°'],
    ];
    const stationLabels = stations.map(([en, zh], i) => {
      const a = ((i * 90 + 180) * Math.PI) / 180;
      return label(en, zh, v(Math.cos(a) * 21, 0.8, -Math.sin(a) * 21), 9);
    });
    const sunLabel = label('SUN', '太阳', v(0, 4.5, 0), 5);
    const earthLabel = label('EARTH', '地球', v(0, 0, 0), 4);
    const sunEarthLine = line(
      [v(0, 0, 0), v(17, 0, 0)],
      new THREE.LineBasicMaterial({ color: '#e7cb8d', transparent: true, opacity: 0.55 }),
      cosmos,
    );
    const earthRoot = new THREE.Group();
    cosmos.add(earthRoot);
    const axial = new THREE.Group();
    // Fixed north axis leans toward -Z. At June solstice Earth is +Z: north leans sunward.
    axial.rotation.x = (-23.44 * Math.PI) / 180;
    earthRoot.add(axial);
    line(
      [v(0, -2.6, 0), v(0, 2.8, 0)],
      new THREE.LineBasicMaterial({ color: '#e6d5ac', transparent: true, opacity: 0.6 }),
      axial,
    );

    const globeTexture = earthTexture();
    textures.push(globeTexture);
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(1.8, 64, 48),
      new THREE.MeshStandardMaterial({ map: globeTexture, roughness: 0.9, metalness: 0 }),
    );
    earth.rotation.z = 0;
    axial.add(earth);
    const clouds = new THREE.Mesh(
      new THREE.SphereGeometry(1.835, 48, 32),
      new THREE.MeshStandardMaterial({
        map: fogTexture,
        transparent: true,
        opacity: 0.21,
        depthWrite: false,
        roughness: 1,
      }),
    );
    axial.add(clouds);
    const air = new THREE.Mesh(
      new THREE.SphereGeometry(1.87, 48, 32),
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: THREE.FrontSide,
        vertexShader:
          'varying vec3 n;varying vec3 p;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);p=mv.xyz;n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*mv;}',
        fragmentShader:
          'varying vec3 n;varying vec3 p;void main(){float rim=pow(1.-max(dot(normalize(n),normalize(-p)),0.),3.);gl_FragColor=vec4(.59,.76,.79,rim*.4);}',
      }),
    );
    axial.add(air);
    const starsPositions = new Float32Array(650 * 3);
    for (let i = 0; i < 650; i++) {
      const a = seed(i) * 6.28,
        b = Math.acos(seed(i + 400) * 2 - 1),
        r = 65 + seed(i + 900) * 60;
      starsPositions.set(
        [Math.cos(a) * Math.sin(b) * r, Math.cos(b) * r, Math.sin(a) * Math.sin(b) * r],
        i * 3,
      );
    }
    const starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    cosmos.add(
      new THREE.Points(
        starsGeometry,
        new THREE.PointsMaterial({
          color: '#ddd8be',
          size: 0.14,
          transparent: true,
          opacity: 0.72,
        }),
      ),
    );

    let frame = 0,
      last = 0,
      time = 0,
      transitionStart = 0,
      transitionDuration = 1800;
    let running = false,
      disposed = false,
      lost = false,
      yaw = 0,
      pitch = 0,
      zoom = 1,
      lastReset = 0;
    const look = v(0, 2, 0),
      fromLook = look.clone(),
      toLook = look.clone();
    camera.position.set(0, 6, 34);
    const fromPos = camera.position.clone(),
      toPos = camera.position.clone();
    const earthFrom = earthRoot.position.clone(),
      earthTo = earthRoot.position.clone();
    let transition = false,
      themeBlend = latest.current.view === 'cosmos' ? 1 : 0,
      shoreBlend = 0;
    const palette = latest.current.term.palette.map((c) => new THREE.Color(c));
    function goal() {
      const s = latest.current;
      const a = ((s.term.longitude + 180) * Math.PI) / 180;
      earthTo.set(Math.cos(a) * 17, 0, -Math.sin(a) * 17);
      if (s.view === 'cosmos') {
        const target = s.lens === 'earth' ? earthTo.clone().add(cosmos.position) : v(0, 125, 0);
        const radius =
          (s.lens === 'earth' ? 9.8 : 74) *
          (host.clientWidth < 700 ? (s.lens === 'earth' ? 1.15 : 1.75) : 1) *
          zoom;
        const elevation = (s.lens === 'earth' ? 0.2 : 0.62) + pitch;
        return {
          look: target,
          pos: target
            .clone()
            .add(
              v(
                Math.sin(yaw + 0.3) * Math.cos(elevation) * radius,
                Math.sin(elevation) * radius,
                Math.cos(yaw + 0.3) * Math.cos(elevation) * radius,
              ),
            ),
        };
      }
      if (s.view === 'life') {
        const f = s.focus === null ? v(2, 0, 0) : new THREE.Vector3(...places[s.focus].position);
        return {
          look: f.clone().add(v(0, 0.3, 0)),
          pos: f
            .clone()
            .add(v(host.clientWidth < 700 ? 1 : 3, 6, host.clientWidth < 700 ? 34 : 21)),
        };
      }
      return { look: v(0, 2, 0), pos: v(0, 6, 34) };
    }
    function retarget() {
      if (disposed || lost) return;
      const s = latest.current;
      if (s.reset !== lastReset) {
        yaw = 0;
        pitch = 0;
        zoom = 1;
        lastReset = s.reset;
      }
      const g = goal();
      earthFrom.copy(earthRoot.position);
      fromPos.copy(camera.position);
      fromLook.copy(look);
      toPos.copy(g.pos);
      toLook.copy(g.look);
      transitionStart = performance.now();
      transitionDuration = s.paused || s.reduced ? 0 : 1900;
      transition = true;
      wake();
    }
    function wake() {
      if (disposed || lost) return;
      cancelAnimationFrame(frame);
      running = false;
      last = 0;
      if (!document.hidden) {
        running = true;
        frame = requestAnimationFrame(draw);
      }
    }
    function draw(now: number) {
      if (disposed || lost || document.hidden) {
        running = false;
        return;
      }
      const s = latest.current,
        still = s.paused || s.reduced;
      const dt = last ? Math.min((now - last) / 1000, 0.06) : 0;
      last = now;
      if (!still) time += dt;
      if (transition) {
        const raw = transitionDuration
          ? Math.min(1, (now - transitionStart) / transitionDuration)
          : 1;
        const a = raw * raw * (3 - 2 * raw);
        camera.position.lerpVectors(fromPos, toPos, a);
        look.lerpVectors(fromLook, toLook, a);
        earthRoot.position.lerpVectors(earthFrom, earthTo, a);
        transition = raw < 1;
      }
      camera.lookAt(look);
      labels.forEach(({ sprite, maps }) => {
        sprite.material.map = maps[s.english ? 0 : 1];
      });
      stationLabels.forEach((sprite, i) => {
        sprite.visible = s.lens === 'year';
        const labelScale = host.clientWidth < 700 ? 0.085 : 0.153;
        sprite.scale.set(labelScale, labelScale / 6.4, 1);
        const a = ((i * 90 + 180) * Math.PI) / 180;
        const radius = host.clientWidth < 700 ? 12 : 13;
        sprite.position.set(Math.cos(a) * radius, 0.8, -Math.sin(a) * radius);
      });
      sunLabel.visible = s.lens === 'year';
      earthLabel.position.copy(earthRoot.position).add(v(0, 3.1, 0));
      earthLabel.scale.setScalar(s.lens === 'year' ? 0.017 : 0.024);
      earthLabel.scale.multiply(v(4, 4 / 6.4, 1));
      const ray = sunEarthLine.geometry.attributes.position as THREE.BufferAttribute;
      ray.setXYZ(1, earthRoot.position.x, earthRoot.position.y, earthRoot.position.z);
      ray.needsUpdate = true;
      sunEarthLine.geometry.computeBoundingSphere();
      sunEarthLine.visible = s.lens === 'year';

      themeBlend = still
        ? s.view === 'cosmos'
          ? 1
          : 0
        : THREE.MathUtils.damp(themeBlend, s.view === 'cosmos' ? 1 : 0, 2.4, dt);
      palette.forEach((c, i) =>
        c.lerp(new THREE.Color(s.term.palette[i]), still ? 1 : 1 - Math.exp(-dt * 3)),
      );
      sky.copy(palette[0]).lerp(new THREE.Color('#162c31'), themeBlend);
      fog.color.copy(sky);
      fog.density = 0.012 * (1 - themeBlend);
      colored.forEach(({ material, role, factor }) =>
        material.color.copy(palette[role]).multiplyScalar(factor),
      );
      ground.visible = themeBlend < 0.98;
      groundOpacity.forEach((opacity, material) => (material.opacity = opacity * (1 - themeBlend)));
      cosmos.visible = themeBlend > 0.001;
      sunGlow.material.opacity = 0.55 + 0.02 * Math.sin(time * 0.2);
      earth.rotation.y = 4.1 + time * 0.008;
      clouds.rotation.y = time * 0.013;
      shoreBlend = still
        ? Number(s.view === 'life')
        : THREE.MathUtils.damp(shoreBlend, Number(s.view === 'life'), 2.4, dt);
      shoreMaterials.forEach(
        (m, i) => (m.opacity = shoreBlend * (1 - themeBlend) * (i === 0 ? 0.83 : 0.55)),
      );
      shorePlanes[1].rotation.z = Math.sin(time * 0.35) * 0.0015;
      const snowfall = s.term.effect === 'snow',
        rainfall = s.term.effect === 'rain',
        leafFall = s.term.effect === 'leaves';
      rain.visible = rainfall;
      particles.visible = !rainfall && !leafFall;
      pMaterial.color.set(snowfall ? '#ffffff' : s.term.palette[2]);
      pMaterial.size = snowfall ? 0.09 : 0.045;
      for (let i = 0; i < particleCount; i++) {
        const x = (seed(i) - 0.5) * 36 + Math.sin(time * 0.2 + i) * 0.3,
          z = (seed(i + 800) - 0.5) * 24;
        const y = 12 - ((seed(i + 99) * 16 + time * (rainfall ? 5 : 0.25)) % 16);
        positions.set([x, y, z], i * 3);
        rainPositions.set([x, y, z, x - 0.07, y + 0.5, z], i * 6);
      }
      pGeometry.attributes.position.needsUpdate = true;
      rainGeometry.attributes.position.needsUpdate = true;
      leaves.forEach((leaf, i) => {
        leaf.visible = leafFall;
        leaf.position.set(
          (seed(i + 4) - 0.5) * 30 + Math.sin(time * 0.35 + i),
          10 - ((seed(i) * 13 + time * 0.4) % 13),
          (seed(i + 500) - 0.5) * 18,
        );
        leaf.rotation.set(time * 0.18 + i, time * 0.3, Math.sin(time * 0.5 + i));
      });
      birds.forEach((bird, i) => {
        bird.visible = !snowfall && !rainfall;
        bird.position.set(
          ((time * 0.28 + i * 8) % 38) - 19,
          7 + Math.sin(time * 0.12 + i),
          -13 - i * 3,
        );
        bird.scale.y = 0.3 + Math.sin(time * 2 + i) * 0.25;
      });
      mists.forEach((mist, i) => {
        mist.position.x = (i - 4) * 9 + Math.sin(time * 0.045 + i) * 2;
      });
      ripples.forEach((ring, i) => {
        ring.visible = rainfall;
        const phase = (time * 0.3 + i * 0.17) % 1;
        ring.scale.setScalar(0.2 + phase * 1.4);
        (ring.material as THREE.LineBasicMaterial).opacity = (1 - phase) * 0.15;
      });
      renderer.render(scene, camera);
      places.forEach((place, i) => {
        const el = latest.current.anchors.current[i];
        if (!el) return;
        const p = new THREE.Vector3(...place.position).project(camera);
        const narrow = host.clientWidth < 700;
        // Keep the three equivalent content entrances reachable after a close approach.
        const x = THREE.MathUtils.clamp(
          (p.x * 0.5 + 0.5) * host.clientWidth,
          narrow ? 66 : 88,
          host.clientWidth - (narrow ? 66 : 88),
        );
        const y = THREE.MathUtils.clamp(
          (-p.y * 0.5 + 0.5) * host.clientHeight,
          narrow ? 295 + i * 55 : 155,
          host.clientHeight - 175,
        );
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.visibility = s.view === 'life' ? 'visible' : 'hidden';
      });
      host.dataset.view = s.view;
      host.dataset.running = String(!still);
      host.dataset.frame = String(renderer.info.render.frame);
      if (!still || transition) {
        frame = requestAnimationFrame(draw);
        running = true;
      } else running = false;
    }
    function resize() {
      renderer.setSize(host.clientWidth, host.clientHeight);
      camera.aspect = host.clientWidth / host.clientHeight;
      camera.updateProjectionMatrix();
      retarget();
    }
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    const interaction = latest.current.interaction.current;
    let pointer: { id: number; x: number; y: number } | null = null;
    const down = (e: PointerEvent) => {
      if (latest.current.view !== 'cosmos') return;
      pointer = { id: e.pointerId, x: e.clientX, y: e.clientY };
      interaction?.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      if (!pointer || pointer.id !== e.pointerId) return;
      yaw = THREE.MathUtils.clamp(yaw + (e.clientX - pointer.x) * 0.006, -1.1, 1.1);
      pitch = THREE.MathUtils.clamp(pitch + (e.clientY - pointer.y) * 0.003, -0.18, 0.38);
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      retarget();
      transitionDuration = latest.current.reduced || latest.current.paused ? 0 : 120;
    };
    const up = () => {
      pointer = null;
    };
    const wheel = (e: WheelEvent) => {
      if (latest.current.view !== 'cosmos') return;
      e.preventDefault();
      zoom = THREE.MathUtils.clamp(zoom + e.deltaY * 0.001, 0.72, 1.45);
      retarget();
      transitionDuration = latest.current.reduced || latest.current.paused ? 0 : 200;
    };
    const key = (e: KeyboardEvent) => {
      if (latest.current.view !== 'cosmos') return;
      if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', '+', '-', 'Home'].includes(e.key))
        return;
      e.preventDefault();
      if (e.key === 'ArrowLeft') yaw -= 0.12;
      if (e.key === 'ArrowRight') yaw += 0.12;
      if (e.key === 'ArrowUp') pitch -= 0.08;
      if (e.key === 'ArrowDown') pitch += 0.08;
      if (e.key === '+') zoom -= 0.1;
      if (e.key === '-') zoom += 0.1;
      if (e.key === 'Home') {
        yaw = 0;
        pitch = 0;
        zoom = 1;
      }
      yaw = THREE.MathUtils.clamp(yaw, -1.1, 1.1);
      pitch = THREE.MathUtils.clamp(pitch, -0.18, 0.38);
      zoom = THREE.MathUtils.clamp(zoom, 0.72, 1.45);
      retarget();
    };
    interaction?.addEventListener('pointerdown', down);
    interaction?.addEventListener('pointermove', move);
    interaction?.addEventListener('pointerup', up);
    interaction?.addEventListener('pointercancel', up);
    interaction?.addEventListener('wheel', wheel, { passive: false });
    interaction?.addEventListener('keydown', key);
    const visibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        running = false;
        host.dataset.running = 'false';
      } else wake();
    };
    const contextLost = (event: Event) => {
      event.preventDefault();
      lost = true;
      cancelAnimationFrame(frame);
      latest.current.onCapability(false);
    };
    document.addEventListener('visibilitychange', visibility);
    renderer.domElement.addEventListener('webglcontextlost', contextLost);
    update.current = retarget;
    resize();
    retarget();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      running = false;
      update.current = () => {};
      observer.disconnect();
      document.removeEventListener('visibilitychange', visibility);
      renderer.domElement.removeEventListener('webglcontextlost', contextLost);
      interaction?.removeEventListener('pointerdown', down);
      interaction?.removeEventListener('pointermove', move);
      interaction?.removeEventListener('pointerup', up);
      interaction?.removeEventListener('pointercancel', up);
      interaction?.removeEventListener('wheel', wheel);
      interaction?.removeEventListener('keydown', key);
      const geometries = new Set<THREE.BufferGeometry>(),
        materials = new Set<THREE.Material>();
      scene.traverse((o) => {
        const obj = o as THREE.Mesh;
        if (obj.geometry) geometries.add(obj.geometry);
        if (obj.material)
          (Array.isArray(obj.material) ? obj.material : [obj.material]).forEach((m) =>
            materials.add(m),
          );
      });
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      textures.forEach((t) => t.dispose());
      renderer.dispose();
      renderer.domElement.remove();
      void running;
    };
  }, []);
  return <div ref={mount} className="render-surface" data-testid="scene" />;
}

