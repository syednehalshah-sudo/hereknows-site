# Hereknows website

Marketing site for Hereknows (hereknows.com), served by GitHub Pages from the `main` branch root.

## Pages

- `index.html`: the live home page, a marketplace-style page (search over the skills taxonomy, category panel, how-it-works tabs, cost estimate). Styles in `assets/css/market.css`, behaviour in `assets/js/market.js`, data in `assets/data/skills.json`.
- `cinematic/index.html`: the archived first version with the scroll-driven 3D scene (Three.js, GSAP ScrollTrigger, Lenis). Styles in `assets/css/cinematic.css`; source `assets/js/main.js` is bundled into `assets/js/cinematic.js` by `npm run build`. Marked `noindex`.

All asset paths are root-absolute (`/assets/...`), so both pages work only when served from a site root, which the preview server and GitHub Pages both do.

## Scripts

- `scripts/prep-assets.py`: frames the live app captures into phone textures, converts the collage, poster and video, and copies logos and favicons (sources in OneDrive).
- `scripts/prep-v2.py`: writes `assets/data/skills.json` from the taxonomy and crops the collage into photo tiles for the home page.
- `scripts/serve.mjs`: local preview server. `scripts/shots.mjs`: headless screenshots and a console check (`STOPS=a,b,c` picks the sections, `ONLY=desktop|mobile|og` limits the run).

## Commands

```bash
npm install            # once
npm run assets         # regenerate the phone textures, collage, poster, logos
npm run build          # rebuild assets/js/cinematic.js after editing assets/js/main.js
npm run serve          # http://127.0.0.1:8090/
npm run shots          # screenshots into shots/ (needs the server running)
```

Deploying is a push: edit, build if `main.js` changed, commit, push. GitHub Pages republishes in about a minute. GitHub added the `CNAME` file when the custom domain was attached; keep it.
