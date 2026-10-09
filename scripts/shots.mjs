// Screenshots plus a console check through the Chrome DevTools Protocol (no extra dependencies).
// Usage: node scripts/shots.mjs [baseUrl] [outDir]   e.g. node scripts/shots.mjs http://127.0.0.1:8090/ shots
// ONLY=desktop|mobile|og limits the run.
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const CHROME = process.env.CHROME ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const BASE = process.argv[2] ?? 'http://127.0.0.1:8090/';
const out = process.argv[3] ?? 'shots';
const ONLY = process.env.ONLY;
mkdirSync(out, { recursive: true });

const port = 9334;
const chrome = spawn(CHROME, [
  '--headless=new', `--remote-debugging-port=${port}`,
  '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist',
  '--no-first-run', '--hide-scrollbars', '--mute-audio',
  `--user-data-dir=${join(process.env.TEMP ?? '/tmp', 'hk-site-cdp')}`, 'about:blank',
], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
process.on('exit', () => chrome.kill());

let wsUrl;
for (let i = 0; i < 60 && !wsUrl; i++) {
  try {
    const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
    wsUrl = list.find((t) => t.type === 'page')?.webSocketDebuggerUrl;
  } catch {
    await sleep(250);
  }
}
if (!wsUrl) {
  console.error('Chrome did not start');
  process.exit(1);
}
const ws = new WebSocket(wsUrl);
await new Promise((r) => ws.addEventListener('open', r, { once: true }));
let id = 0;
const pending = new Map();
const problems = [];
ws.addEventListener('message', (e) => {
  const msg = JSON.parse(e.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg.result ?? msg.error);
    pending.delete(msg.id);
    return;
  }
  if (msg.method === 'Runtime.exceptionThrown') {
    const d = msg.params.exceptionDetails;
    problems.push(`EXCEPTION ${d.text} ${d.exception?.description ?? ''} (${d.url ?? ''}:${d.lineNumber ?? ''})`);
  } else if (msg.method === 'Runtime.consoleAPICalled' && (msg.params.type === 'error' || msg.params.type === 'warning')) {
    problems.push(`${msg.params.type.toUpperCase()} ${msg.params.args.map((a) => a.value ?? a.description ?? '').join(' ')}`);
  } else if (msg.method === 'Log.entryAdded' && msg.params.entry.level === 'error') {
    problems.push(`LOG ${msg.params.entry.text} ${msg.params.entry.url ?? ''}`);
  }
});
const send = (method, params = {}) => new Promise((r) => {
  const n = ++id;
  pending.set(n, r);
  ws.send(JSON.stringify({ id: n, method, params }));
});

await send('Page.enable');
await send('Runtime.enable');
await send('Log.enable');

const shot = async (name, format = 'jpeg') => {
  const { data } = await send('Page.captureScreenshot', format === 'png' ? { format } : { format, quality: 82 });
  writeFileSync(join(out, `${name}.${format === 'png' ? 'png' : 'jpg'}`), Buffer.from(data, 'base64'));
  console.log('captured', name);
};
const jump = async (sel, wait = 1600) => {
  await send('Runtime.evaluate', { expression: `window.__hk && window.__hk.jump(${JSON.stringify(sel)})` });
  await sleep(wait);
};

const views = [
  { name: 'desktop', width: 1440, height: 900, dpr: 1, mobile: false },
  { name: 'mobile', width: 390, height: 844, dpr: 2, mobile: true },
];
const stops = [
  'hero', 'anything', 'how', '#how .step:nth-of-type(2)', '#how .step:nth-of-type(3)',
  'urgent', '#urgent .step:nth-of-type(3)', 'sell', 'people', 'film', 'trust', 'download',
];
for (const v of views) {
  if (ONLY && v.name !== ONLY) continue;
  await send('Emulation.setDeviceMetricsOverride', { width: v.width, height: v.height, deviceScaleFactor: v.dpr, mobile: v.mobile });
  await send('Page.navigate', { url: BASE });
  await sleep(4000);
  await shot(`${v.name}-00-load`);
  let n = 1;
  for (const s of stops) {
    await jump(s);
    const label = s.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '');
    await shot(`${v.name}-${String(n++).padStart(2, '0')}-${label}`);
  }
}
if (!ONLY || ONLY === 'og') {
  await send('Emulation.setDeviceMetricsOverride', { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: `${BASE}?og` });
  await sleep(4000);
  await shot('og', 'png');
}
console.log(problems.length ? `PROBLEMS:\n${problems.join('\n')}` : 'no console errors or warnings');
ws.close();
chrome.kill();
