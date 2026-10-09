# Hereknows website

Marketing site for Hereknows (hereknows.com): a single page with a scroll-driven 3D scene.

- `index.html`, `assets/css/site.css`: the page.
- `assets/js/main.js`: the 3D scene (Three.js), scroll choreography (GSAP ScrollTrigger + Lenis) and page behaviour. Source only.
- `assets/js/site.js`: the built bundle that the page loads. Rebuild after editing `main.js`.
- `assets/img/screens/*.webp`: framed app screenshots used as phone textures, generated from the live captures.
- `scripts/prep-assets.py`: rebuilds images from the brand kit and the app's live screenshots (sources in OneDrive).
- `scripts/serve.mjs`: local preview server. `scripts/shots.mjs`: headless screenshots and a console check.

## Commands

```bash
npm install            # once
npm run assets         # regenerate images from OneDrive sources
npm run build          # bundle assets/js/main.js into assets/js/site.js
npm run serve          # http://127.0.0.1:8090/
npm run shots          # screenshots into shots/ (needs the server running)
```

## Hosting

GitHub Pages serves the `main` branch root of this repository. No build runs on GitHub, so commit `assets/js/site.js` after every `npm run build`.
The custom domain is set in the repository's Pages settings; the DNS records live at the registrar.
