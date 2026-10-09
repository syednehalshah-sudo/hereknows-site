/* Marketplace version: search, categories, tabs, cost estimate. No dependencies. */
const doc = document.documentElement;
doc.classList.add('js');
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Menu ---------- */
const menuBtn = $('.top__menu');
const topnav = $('#topnav');
menuBtn.addEventListener('click', () => {
  const open = topnav.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
topnav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') { topnav.classList.remove('is-open'); menuBtn.setAttribute('aria-expanded', 'false'); }
});

/* ---------- Learn / teach mode ---------- */
const MODES = {
  learn: {
    title: 'Learn it live, from someone who knows.',
    lede: 'Book a video call with a real person, by the minute, for anything from guitar to a washing machine that will not drain.',
    placeholder: 'What do you need help with?',
    chips: ['Acoustic guitar', 'Primary maths', 'Small appliance repair', 'Arabic', 'Microsoft Excel'],
    note: (skill, cat) => `People who teach ${skill} are listed under ${cat}. Search the app, read their profile and book, or send an urgent ask and the first five to say yes are ranked for you.`,
  },
  teach: {
    title: 'Sell what you know, by the minute.',
    lede: 'List a skill in two minutes, set your rate and your hours, and answer when it suits you.',
    placeholder: 'What can you teach?',
    chips: ['Home cooking basics', 'Hatha yoga', 'Python', 'Fixing leaking taps', 'Spanish'],
    note: (skill, cat) => `You can list ${skill} under ${cat}. Set a price per hour and the session lengths you take. Listings go live at once, with no approval queue.`,
  },
};
let mode = 'learn';
const input = $('#q');
const chipsEl = $('[data-copy="chips"]');
function renderChips() {
  chipsEl.innerHTML = '';
  for (const label of MODES[mode].chips) {
    const li = document.createElement('li');
    const b = document.createElement('button');
    b.type = 'button';
    b.innerHTML = `${label} <span aria-hidden="true">&rarr;</span>`;
    b.addEventListener('click', () => { input.value = label; pickBest(label); });
    li.appendChild(b);
    chipsEl.appendChild(li);
  }
}
function setMode(next) {
  mode = next;
  const m = MODES[mode];
  $('[data-copy="title"]').textContent = m.title;
  $('[data-copy="lede"]').textContent = m.lede;
  input.placeholder = m.placeholder;
  for (const b of $$('.toggle [data-mode]')) b.setAttribute('aria-selected', String(b.dataset.mode === mode));
  renderChips();
  closeResults();
}
for (const b of $$('.toggle [data-mode]')) b.addEventListener('click', () => setMode(b.dataset.mode));
renderChips();

/* ---------- Data ---------- */
const FEATURED = [
  'cooking-and-food', 'home-repair-and-diy', 'electronics-and-appliance-repair', 'tech-help-and-digital-skills', 'languages',
  'music', 'fitness-and-gym', 'tutoring-and-education', 'business-and-career', 'cars-and-mechanics',
];
const ICONS = {
  'cooking-and-food': '<path d="M3 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6a2 2 0 0 0 2 2h3Zm0 0v7"/>',
  'home-repair-and-diy': '<path d="m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9M17.6 15 22 10.6M20.9 11.7l-1.3-1.3a3 3 0 0 1-.9-2.2v-.9L16 4.6A5.6 5.6 0 0 0 12.1 3H9l.9.8A6.2 6.2 0 0 1 12 8.4V10l2 2h2.5l2.3 1.9"/>',
  'electronics-and-appliance-repair': '<path d="M12 22v-5M9 8V2M15 8V2M18 8v5a6 6 0 0 1-12 0V8Z"/>',
  'tech-help-and-digital-skills': '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.3 2.5a1 1 0 0 1-.9 1.5H3.6a1 1 0 0 1-.9-1.5L4 16"/>',
  'languages': '<path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"/>',
  'music': '<path d="M9 18V5l12-2v13M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>',
  'fitness-and-gym': '<path d="M6 7v10M18 7v10M3 9v6M21 9v6M6 12h12"/>',
  'tutoring-and-education': '<path d="M22 10 12 5 2 10l10 5 10-5ZM6 12v5c3 3 9 3 12 0v-5"/>',
  'business-and-career': '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  'cars-and-mechanics': '<path d="M5 17H3v-5l2-5h12l3 5h1v5h-2M7 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm6 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM3 12h18"/>',
  default: '<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/>',
};
const icon = (id) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[id] ?? ICONS.default}</svg>`;

let data = { categories: [], licenceAreas: [] };
let index = [];
const byId = new Map();
const catsEl = $('#cats');
const panel = $('#panel');
const allBtn = $('#cats-all');

fetch('data/skills.json')
  .then((r) => r.json())
  .then((d) => {
    data = d;
    for (const c of d.categories) {
      byId.set(c.id, c);
      index.push({ name: c.name, cat: c.id, isCat: true });
      for (const s of c.skills) index.push({ name: s, cat: c.id, isCat: false });
    }
    renderCats();
  })
  .catch(() => { catsEl.innerHTML = '<p>The category list could not be loaded. The app lists 795 skills across 30 categories.</p>'; });

function renderCats() {
  const order = [...FEATURED.map((id) => byId.get(id)).filter(Boolean), ...data.categories.filter((c) => !FEATURED.includes(c.id))];
  catsEl.innerHTML = '';
  order.forEach((c, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = `cat${i >= FEATURED.length ? ' is-extra' : ''}`;
    b.dataset.cat = c.id;
    b.setAttribute('aria-pressed', 'false');
    b.innerHTML = `${icon(c.id)}<span>${c.name}</span>`;
    b.addEventListener('click', () => openPanel(c.id));
    catsEl.appendChild(b);
  });
}
allBtn.addEventListener('click', () => {
  const all = catsEl.classList.toggle('is-all');
  allBtn.setAttribute('aria-expanded', String(all));
  allBtn.textContent = all ? 'Show fewer categories' : 'Show all 30 categories';
});

function openPanel(catId, hit = null, message = null) {
  const c = byId.get(catId);
  if (!c) return;
  for (const b of $$('.cat')) b.setAttribute('aria-pressed', String(b.dataset.cat === catId));
  if (b_isExtra(catId) && !catsEl.classList.contains('is-all')) allBtn.click();
  $('#panel-title').textContent = c.name;
  $('#panel-note').textContent = message ?? (hit ? MODES[mode].note(hit, c.name) : `${c.skills.length} skills. ${mode === 'teach' ? 'List any of them, or add your own under Other.' : 'Pick one in the app, or ask for something not listed under Other.'}`);
  const list = $('#panel-skills');
  list.innerHTML = '';
  for (const s of c.skills) {
    const li = document.createElement('li');
    li.textContent = s;
    if (hit && s.toLowerCase() === hit.toLowerCase()) li.classList.add('is-hit');
    list.appendChild(li);
  }
  panel.hidden = false;
  const first = list.querySelector('.is-hit');
  (first ?? panel).scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
}
function b_isExtra(catId) {
  const b = $(`.cat[data-cat="${catId}"]`);
  return b ? b.classList.contains('is-extra') : false;
}
$('#panel-close').addEventListener('click', () => {
  panel.hidden = true;
  for (const b of $$('.cat')) b.setAttribute('aria-pressed', 'false');
});

/* ---------- Search ---------- */
const results = $('#results');
let active = -1;
let matches = [];
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
function search(q) {
  const n = norm(q.trim());
  if (n.length < 2) return [];
  const words = n.split(/\s+/);
  const scored = [];
  for (const item of index) {
    const name = norm(item.name);
    let score = 0;
    if (name === n) score = 100;
    else if (name.startsWith(n)) score = 80;
    else if (words.every((w) => name.includes(w))) score = 60;
    else if (words.some((w) => w.length > 2 && name.includes(w))) score = 30;
    if (score) scored.push({ item, score: score + (item.isCat ? 5 : 0) - name.length / 100 });
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, 8).map((s) => s.item);
}
function renderResults(q) {
  matches = search(q);
  active = -1;
  results.innerHTML = '';
  if (norm(q).length < 2) return closeResults();
  if (!matches.length) {
    const li = document.createElement('li');
    li.className = 'is-empty';
    li.setAttribute('role', 'option');
    li.textContent = `No skill called "${q.trim()}" yet. In the app you can add it under Other.`;
    results.appendChild(li);
  }
  matches.forEach((m, i) => {
    const li = document.createElement('li');
    li.setAttribute('role', 'option');
    li.id = `opt-${i}`;
    li.setAttribute('aria-selected', 'false');
    li.innerHTML = `${m.name}<span>${m.isCat ? 'Category' : byId.get(m.cat).name}</span>`;
    li.addEventListener('mousedown', (e) => { e.preventDefault(); pick(m); });
    results.appendChild(li);
  });
  results.hidden = false;
  input.setAttribute('aria-expanded', 'true');
}
function closeResults() {
  results.hidden = true;
  input.setAttribute('aria-expanded', 'false');
  input.removeAttribute('aria-activedescendant');
  active = -1;
}
function setActive(i) {
  const items = $$('[role="option"]', results).filter((el) => !el.classList.contains('is-empty'));
  if (!items.length) return;
  active = (i + items.length) % items.length;
  items.forEach((el, k) => el.setAttribute('aria-selected', String(k === active)));
  input.setAttribute('aria-activedescendant', items[active].id);
  items[active].scrollIntoView({ block: 'nearest' });
}
function pick(m) {
  input.value = m.name;
  closeResults();
  openPanel(m.cat, m.isCat ? null : m.name);
}
function pickBest(q) {
  const found = search(q);
  if (found.length) return pick(found[0]);
  closeResults();
  const fallback = data.categories[0];
  if (fallback) openPanel(fallback.id, null, `No skill called "${q.trim()}" yet. In the app you can add it under Other in the closest category.`);
}
input.addEventListener('input', () => renderResults(input.value));
input.addEventListener('focus', () => { if (input.value) renderResults(input.value); });
input.addEventListener('blur', () => setTimeout(closeResults, 120));
input.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') { e.preventDefault(); setActive(active + 1); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(active - 1); }
  else if (e.key === 'Escape') closeResults();
});
$('.search').addEventListener('submit', (e) => {
  e.preventDefault();
  if (active >= 0 && matches[active]) pick(matches[active]);
  else pickBest(input.value);
});

/* ---------- How it works tabs ---------- */
const tabs = $$('.tabs [role="tab"]');
for (const t of tabs) {
  t.addEventListener('click', () => {
    for (const o of tabs) {
      const on = o === t;
      o.setAttribute('aria-selected', String(on));
      $(`#${o.getAttribute('aria-controls')}`).hidden = !on;
    }
  });
}

/* ---------- Cost estimate ---------- */
const rate = $('#rate');
const mins = $('#mins');
const out = $('#cost-out');
function calc() {
  const r = Math.max(0, Number(rate.value) || 0);
  const m = Math.max(0, Number(mins.value) || 0);
  const cost = (r * m) / 60;
  out.textContent = r && m ? `$${cost.toFixed(2)} for ${m} minute${m === 1 ? '' : 's'} at $${r}/hour` : 'Enter a rate and a length';
}
rate.addEventListener('input', calc);
mins.addEventListener('input', calc);
calc();

/* ---------- Reveal ---------- */
const revealTargets = $$('.section > *, .facts, .hero__copy');
if (!reduce && 'IntersectionObserver' in window) {
  for (const el of revealTargets) el.classList.add('reveal');
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }, { rootMargin: '0px 0px -8% 0px' });
  for (const el of revealTargets) io.observe(el);
}

/* Screenshot helper used by scripts/shots.mjs */
window.__hk = {
  jump(sel) {
    const el = document.querySelector(sel.startsWith('#') || sel.includes(' ') ? sel : `#${sel}`);
    if (!el) return;
    for (const r of $$('.reveal')) r.classList.add('is-in');
    el.scrollIntoView({ behavior: 'auto', block: 'start' });
  },
};
