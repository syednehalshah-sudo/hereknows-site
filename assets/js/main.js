/* Hereknows site: the 3D scene, scroll choreography and page behaviour.
   Source file. `npm run build` bundles it with Three.js, GSAP and Lenis into assets/js/site.js. */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const doc = document.documentElement;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const mobileMQ = window.matchMedia('(max-width: 760px)');
const isMobile = () => mobileMQ.matches;
if (new URLSearchParams(location.search).has('og')) doc.classList.add('og');

const SKILLS = ['Guitar', 'Sourdough', 'Excel', 'Arabic', 'Maths', 'Yoga', 'Fix a leaking tap', 'Python'];
const SCATTER = [
  [-1.55, 0.95, 0.2], [0.2, 1.15, -0.6], [1.55, 0.65, 0.3], [-0.95, -0.15, 0.8],
  [1.25, -0.5, -0.4], [-1.6, -0.95, -0.3], [0.45, -1.15, 0.5], [-0.2, 0.25, -1.1],
];
const PHONE_ASPECT = 828 / 1844; // framed screenshot texture
const RING_R = 1.04;
const SPHERE_R = 0.24;
const COIN_R = 0.46;

/* ---------------- Smooth scroll and anchors ---------------- */
let lenis = null;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.085, autoRaf: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
let snapNext = false;
function scrollToEl(el, immediate = false) {
  if (lenis) lenis.scrollTo(el, { duration: 1.4, immediate, force: true });
  else el.scrollIntoView({ behavior: reduce || immediate ? 'auto' : 'smooth' });
  if (immediate) snapNext = true;
}
for (const a of document.querySelectorAll('a[href^="#"]')) {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const el = id.length > 1 ? document.querySelector(id) : null;
    if (!el) return;
    e.preventDefault();
    scrollToEl(el);
    history.replaceState(null, '', id);
  });
}

/* ---------------- Navigation state ---------------- */
const nav = document.querySelector('.nav');
ScrollTrigger.create({ start: 24, end: 'max', onToggle: (s) => nav.classList.toggle('is-scrolled', s.isActive) });

/* ---------------- Entrance reveals ---------------- */
for (const el of gsap.utils.toArray('[data-reveal]')) {
  const kids = el.hasAttribute('data-reveal-children') ? [...el.children] : [el];
  if (reduce) {
    gsap.set(kids, { autoAlpha: 1 });
    continue;
  }
  gsap.set(kids, { autoAlpha: 0, y: 28 });
  ScrollTrigger.create({
    trigger: el,
    start: 'top 86%',
    once: true,
    onEnter: () => gsap.to(kids, { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.09, delay: el.closest('#hero') ? 0.35 : 0 }),
  });
}
doc.classList.remove('js');

/* ---------------- Film ---------------- */
const film = document.querySelector('.film');
if (film) {
  const video = film.querySelector('video');
  film.querySelector('.film__play').addEventListener('click', () => video.play());
  video.addEventListener('play', () => film.classList.add('is-playing'));
  video.addEventListener('pause', () => film.classList.remove('is-playing'));
  video.addEventListener('ended', () => film.classList.remove('is-playing'));
}

/* ---------------- 3D scene ---------------- */
let setScreen = () => {};
const canvas = document.getElementById('gl');
let scene3d = null;
try {
  scene3d = init3D(canvas);
  setScreen = scene3d.setScreen;
} catch (err) {
  console.warn('WebGL unavailable, showing the static fallback.', err);
  canvas.remove();
  doc.classList.add('no-gl');
}

/* Steps inside the phone scenes swap the phone's screen as they reach the middle of the viewport. */
const steps = gsap.utils.toArray('.step');
const firstScreen = steps[0]?.dataset.screen;
if (firstScreen) setScreen(firstScreen);
/* A phone section's title block shows its first screen, so the phone never carries the previous section's screen. */
for (const head of gsap.utils.toArray('.scene--phone .scene__head')) {
  const first = head.parentElement.querySelector('.step')?.dataset.screen;
  if (!first) continue;
  ScrollTrigger.create({
    trigger: head,
    start: 'top 62%',
    end: 'bottom 62%',
    onToggle: (s) => { if (s.isActive) setScreen(first); },
  });
}
for (const step of steps) {
  ScrollTrigger.create({
    trigger: step,
    start: 'top 62%',
    end: 'bottom 62%',
    onToggle: (s) => {
      step.classList.toggle('is-active', s.isActive);
      if (s.isActive) setScreen(step.dataset.screen);
    },
  });
}
if (document.fonts?.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());

window.__hk = {
  lenis,
  jump(sel) {
    const el = document.querySelector(sel.startsWith('#') || sel.includes(' ') ? sel : `#${sel}`);
    if (el) scrollToEl(el, true);
  },
};

/* ================================================================ */

function init3D(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x06271d, 0.05);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.55;
  pmrem.dispose();

  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 60);
  camera.position.set(0, 0, 8);

  scene.add(new THREE.HemisphereLight(0xcfeede, 0x06271d, 0.5));
  const key = new THREE.DirectionalLight(0xffffff, 1.7);
  key.position.set(3, 5, 4);
  scene.add(key);
  const rim = new THREE.PointLight(0xc4f23f, 22, 24, 2);
  rim.position.set(-4, 2.5, -2);
  scene.add(rim);

  /* The Everyone ring: eight people around a coin, as in the logo. */
  const ring = new THREE.Group();
  scene.add(ring);
  const coin = new THREE.Group();
  ring.add(coin);
  const coinMat = new THREE.MeshPhysicalMaterial({
    color: 0xc4f23f, metalness: 0.7, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.15,
    emissive: 0xc4f23f, emissiveIntensity: 0.22,
  });
  const coinMesh = new THREE.Mesh(new THREE.CylinderGeometry(COIN_R, COIN_R, 0.1, 72), coinMat);
  coinMesh.rotation.x = Math.PI / 2;
  coin.add(coinMesh);
  const faceMat = new THREE.MeshPhysicalMaterial({ color: 0x109e62, metalness: 0.2, roughness: 0.4, clearcoat: 0.8 });
  const faceFront = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.036, 16, 72), faceMat);
  faceFront.position.z = 0.052;
  const faceBack = faceFront.clone();
  faceBack.position.z = -0.052;
  coin.add(faceFront, faceBack);

  const sphereGeo = new THREE.SphereGeometry(SPHERE_R, 48, 32);
  const baseEmissive = new THREE.Color(0x0a3b2c);
  const limeEmissive = new THREE.Color(0xc4f23f);
  const spheres = [];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + Math.PI / 2;
    const mesh = new THREE.Mesh(sphereGeo, new THREE.MeshPhysicalMaterial({
      color: 0x109e62, roughness: 0.3, metalness: 0.05, clearcoat: 1, clearcoatRoughness: 0.1,
      emissive: 0x0a3b2c, emissiveIntensity: 0.5,
    }));
    ring.add(mesh);
    spheres.push({
      mesh,
      home: new THREE.Vector3(Math.cos(a) * RING_R, Math.sin(a) * RING_R, 0),
      scatter: new THREE.Vector3(SCATTER[i][0] * 0.85, SCATTER[i][1], SCATTER[i][2]),
      scatterMobile: new THREE.Vector3(SCATTER[i][0] * 0.75, SCATTER[i][1] * 0.65, SCATTER[i][2]),
      phase: i * 0.8,
    });
  }

  /* Sonar rings for the urgent scene. */
  const sonar = [];
  for (let k = 0; k < 3; k++) {
    const m = new THREE.Mesh(
      new THREE.RingGeometry(0.9, 0.925, 128),
      new THREE.MeshBasicMaterial({ color: 0xc4f23f, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
    );
    m.visible = false;
    ring.add(m);
    sonar.push(m);
  }

  /* Drifting particles. */
  const count = isMobile() ? 260 : 540;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 16;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 11;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 9 - 1;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const points = new THREE.Points(pGeo, new THREE.PointsMaterial({
    color: 0x3ccb86, size: 0.045, transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
  }));
  scene.add(points);

  /* The phone: a framed screenshot plane over a thin dark body. */
  const PHONE_H = 2.25;
  const PHONE_W = PHONE_H * PHONE_ASPECT;
  const phone = new THREE.Group();
  scene.add(phone);
  const body = new THREE.Mesh(
    new RoundedBoxGeometry(PHONE_W * 0.9, PHONE_H * 0.955, 0.12, 4, 0.05),
    new THREE.MeshPhysicalMaterial({ color: 0x0e1613, metalness: 0.5, roughness: 0.4, clearcoat: 0.7 }),
  );
  body.position.z = -0.062;
  phone.add(body);
  const screenGeo = new THREE.PlaneGeometry(PHONE_W, PHONE_H);
  const mkScreen = () => new THREE.Mesh(screenGeo, new THREE.MeshBasicMaterial({ transparent: true, toneMapped: false, fog: false }));
  const screenA = mkScreen();
  const screenB = mkScreen();
  screenB.position.z = 0.002;
  screenB.material.opacity = 0;
  phone.add(screenA, screenB);
  const nudge = { y: 0 };

  const loader = new THREE.TextureLoader();
  const textures = {};
  const tex = (name) => {
    if (!textures[name]) {
      const t = loader.load(`assets/img/screens/${name}.webp`);
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
      textures[name] = t;
    }
    return textures[name];
  };
  for (const el of document.querySelectorAll('[data-screen]')) tex(el.dataset.screen);

  let current = null;
  let fading = false;
  let queued = null;
  function setScreen(name) {
    if (!name || name === current) return;
    if (fading) { queued = name; return; }
    if (!current) {
      screenA.material.map = tex(name);
      screenA.material.needsUpdate = true;
      current = name;
      return;
    }
    fading = true;
    screenB.material.map = tex(name);
    screenB.material.needsUpdate = true;
    screenB.material.opacity = 0;
    if (!reduce) gsap.fromTo(nudge, { y: -0.08 }, { y: 0, duration: 0.7, ease: 'power3.out' });
    gsap.to(screenB.material, {
      opacity: 1, duration: reduce ? 0 : 0.45, ease: 'power2.out',
      onComplete: () => {
        screenA.material.map = screenB.material.map;
        screenA.material.needsUpdate = true;
        screenB.material.opacity = 0;
        current = name;
        fading = false;
        if (queued) { const q = queued; queued = null; setScreen(q); }
      },
    });
  }

  /* Skill labels that follow the scattered orbs. */
  const labelsRoot = document.getElementById('labels');
  const labelEls = SKILLS.map((txt) => {
    const el = document.createElement('span');
    el.className = 'orb-label';
    el.textContent = txt;
    labelsRoot.appendChild(el);
    return el;
  });

  /* ---------- Shots: one camera and object arrangement per section ---------- */
  const sections = [...document.querySelectorAll('[data-shot]')];
  function buildShots(m, aspect) {
    const ax = m ? 0 : gsap.utils.clamp(0.7, 1.1, aspect / 1.6);
    const px = 1.75 * ax;
    const P = (x, y, z, rx, ry, rz, s, a) => ({ phoneX: x, phoneY: y, phoneZ: z, phoneRX: rx, phoneRY: ry, phoneRZ: rz, phoneS: s, phoneA: a });
    const R = (x, y, z, rx, ry, rz, s, spread, spin) => ({ ringX: x, ringY: y, ringZ: z, ringRX: rx, ringRY: ry, ringRZ: rz, ringS: s, spread, spin });
    const C = (x, y, z) => ({ camX: x, camY: y, camZ: z + (m ? 0.9 : 0) });
    const off = P(0, -4.2, 0, 0, 0, 0, 0.8, 0);
    const on = (ry) => (m ? P(0, 0.9, 0, 0.02, ry * 0.5, 0, 0.8, 1) : P(px, -0.05, 0, 0, ry, 0, 1, 1));
    const F = (particles, sonar, labels) => ({ particles, sonar, labels });
    return {
      hero: { ...C(0, 0.15, 7.6), ...(m ? R(0, 1.6, 0, 0.45, 0, 0, 0.8, 0, 1) : R(1.9 * ax, 0.05, 0, 0.45, 0, 0, 1.25, 0, 1)), ...off, ...F(1, 0, 0) },
      anything: { ...C(0, 0, 7.2), ...(m ? R(0, 1.55, 0, 0.3, 0.2, 0, 0.72, 1, 0.3) : R(1.9 * ax, -0.1, 0, 0.3, 0.3, 0, 1.2, 1, 0.3)), ...off, ...F(0.8, 0, 1) },
      how: { ...C(0, 0, 6.4), ...(m ? R(1.0, 2.3, -2.8, 0.9, 0.3, 0, 0.45, 0, 0.5) : R((1.75 + 1.1) * ax, 1.6, -3.6, 0.9, 0.3, 0, 0.5, 0, 0.5)), ...on(-0.3), ...F(0.6, 0, 0) },
      urgent: { ...C(0, 0, 6.4), ...(m ? R(0, 1.05, -3.0, 1.25, 0, 0, 1.1, 0.12, 0.2) : R(px + 0.5 * ax, 0.1, -3.2, 1.25, 0, 0, 1.3, 0.12, 0.2)), ...on(-0.2), ...F(0.5, 1, 0) },
      sell: { ...C(0, 0, 6.4), ...(m ? R(-1.1, 2.3, -2.6, 0.6, -0.4, 0, 0.45, 0, 0.6) : R(-2.4 * ax, -1.9, -2.2, 0.6, -0.4, 0, 0.7, 0, 0.6)), ...on(-0.3), ...F(0.6, 0, 0) },
      people: { ...C(0, 0, 7), ...R(0, 0, -3, 0.4, 0, 0, 1, 0, 0.4), ...off, ...F(0.3, 0, 0) },
      film: { ...C(0, 0, 7.5), ...R(3.2 * ax, 1.9, -3, 0.5, 0.3, 0, 0.6, 0, 0.4), ...off, ...F(0.5, 0, 0) },
      trust: { ...C(0, 0.3, 7.2), ...(m ? R(0, 0.3, -2.6, 1.15, 0, 0, 1.4, 0.3, 0.25) : R(0.9 * ax, -0.3, -2.4, 1.15, 0, 0, 1.8, 0.3, 0.25)), ...off, ...F(0.7, 0, 0) },
      download: { ...C(0, 0, 6.2), ...(m ? R(0, 1.45, -0.5, 0.15, 0, 0, 0.6, 0, 1.4) : R(0, 1.25, -0.8, 0.2, 0, 0, 0.72, 0, 1.4)), ...off, ...F(1, 0, 0) },
    };
  }
  let shots = buildShots(isMobile(), innerWidth / innerHeight);
  let resolved = sections.map((s) => shots[s.dataset.shot] ?? shots.hero);
  const keys = Object.keys(resolved[0]);
  const target = { ...resolved[0] };
  const state = { ...resolved[0] };

  let bounds = [];
  function measure() {
    bounds = sections.map((s) => {
      const r = s.getBoundingClientRect();
      const top = r.top + window.scrollY;
      return { top, bottom: top + r.height };
    });
  }
  const smooth = (x) => { const t = gsap.utils.clamp(0, 1, x); return t * t * (3 - 2 * t); };
  function timelinePos(y, vh) {
    for (let i = 0; i < bounds.length; i++) {
      const b = bounds[i];
      const holdEnd = Math.max(b.top, b.bottom - vh);
      if (y < b.top) {
        if (i === 0) return 0;
        const prev = bounds[i - 1];
        const prevEnd = Math.max(prev.top, prev.bottom - vh);
        return (i - 1) + smooth((y - prevEnd) / Math.max(1, b.top - prevEnd));
      }
      if (y <= holdEnd) return i;
    }
    return bounds.length - 1;
  }
  function computeTarget() {
    const t = timelinePos(window.scrollY, innerHeight);
    const i = Math.floor(t);
    const f = t - i;
    const a = resolved[i];
    const b = resolved[Math.min(i + 1, resolved.length - 1)];
    for (const k of keys) target[k] = a[k] + (b[k] - a[k]) * f;
  }

  /* Intro: the ring assembles and the camera eases in. */
  const intro = { v: reduce ? 1 : 0 };
  if (!reduce) gsap.to(intro, { v: 1, duration: 2.2, ease: 'power3.out', delay: 0.1 });

  /* Gentle pointer parallax on desktop. */
  const pointer = { x: 0, y: 0 };
  if (!reduce) {
    window.addEventListener('pointermove', (e) => {
      if (isMobile()) return;
      pointer.x = (e.clientX / innerWidth - 0.5) * 2;
      pointer.y = (e.clientY / innerHeight - 0.5) * 2;
    }, { passive: true });
  }

  function resize() {
    const w = innerWidth;
    const h = innerHeight;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, isMobile() ? 1.75 : 2));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    shots = buildShots(isMobile(), w / h);
    resolved = sections.map((s) => shots[s.dataset.shot] ?? shots.hero);
    measure();
  }
  resize();
  let resizeTimer = 0;
  window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 120); });
  ScrollTrigger.addEventListener('refresh', measure);

  const tmp = new THREE.Vector3();
  const look = new THREE.Vector3();
  let labelsShown = -1;

  function render(time, deltaMs) {
    if (document.hidden) return;
    const t = time;
    const dt = Math.min(0.05, (deltaMs || 16) / 1000);
    computeTarget();
    if (reduce || snapNext) {
      for (const k of keys) state[k] = target[k];
      snapNext = false;
    } else {
      const k1 = 1 - Math.exp(-dt * 5.5);
      for (const k of keys) state[k] += (target[k] - state[k]) * k1;
    }
    const iv = 1 - intro.v;

    camera.position.set(state.camX + pointer.x * 0.22, state.camY - pointer.y * 0.14, state.camZ + iv * 3.2);
    look.set(0, 0, 0);
    camera.lookAt(look);

    const spread = Math.max(state.spread, iv);
    const mobile = isMobile();
    ring.position.set(state.ringX, state.ringY, state.ringZ);
    ring.rotation.set(state.ringRX + Math.sin(t * 0.4) * 0.04, state.ringRY + t * 0.06 * state.spin, state.ringRZ);
    ring.scale.setScalar(state.ringS);
    coin.rotation.y = t * 0.25 * state.spin;
    for (let i = 0; i < spheres.length; i++) {
      const s = spheres[i];
      tmp.copy(s.home).lerp(mobile ? s.scatterMobile : s.scatter, spread);
      tmp.y += Math.sin(t * 0.9 + s.phase) * 0.05 * (0.4 + spread);
      s.mesh.position.copy(tmp);
      const hot = i < 5 ? state.sonar * (0.35 + 0.35 * Math.sin(t * 2.2 - i * 0.9)) : 0;
      s.mesh.material.emissive.lerpColors(baseEmissive, limeEmissive, hot);
      s.mesh.material.emissiveIntensity = 0.5 + 0.5 * hot;
    }
    for (let k = 0; k < sonar.length; k++) {
      const ph = (t * 0.42 + k / 3) % 1;
      const m = sonar[k];
      m.visible = state.sonar > 0.02;
      m.scale.setScalar(0.5 + ph * 2.2);
      m.material.opacity = (1 - ph) * 0.5 * state.sonar;
    }

    points.rotation.y = t * 0.015;
    points.position.y = Math.sin(t * 0.2) * 0.2;
    points.material.opacity = 0.72 * state.particles;

    const floatY = reduce ? 0 : Math.sin(t * 0.7) * 0.035;
    phone.visible = state.phoneA > 0.02;
    phone.position.set(state.phoneX, state.phoneY + floatY + nudge.y, state.phoneZ);
    phone.rotation.set(state.phoneRX, state.phoneRY + (reduce ? 0 : Math.sin(t * 0.55) * 0.03), state.phoneRZ);
    phone.scale.setScalar(state.phoneS * (0.72 + 0.28 * state.phoneA));

    const lv = state.labels;
    if (lv > 0.01) {
      labelsRoot.style.opacity = lv.toFixed(3);
      labelsShown = 1;
      for (let i = 0; i < spheres.length; i++) {
        spheres[i].mesh.getWorldPosition(tmp).project(camera);
        const x = (tmp.x * 0.5 + 0.5) * innerWidth;
        const y = (-tmp.y * 0.5 + 0.5) * innerHeight + 34 * state.ringS;
        const el = labelEls[i];
        el.style.transform = `translate(-50%,-50%) translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
        el.style.opacity = tmp.z < 1 ? '1' : '0';
      }
    } else if (labelsShown !== 0) {
      labelsRoot.style.opacity = '0';
      labelsShown = 0;
    }

    renderer.render(scene, camera);
  }
  gsap.ticker.add(render);

  return { setScreen, resize };
}
