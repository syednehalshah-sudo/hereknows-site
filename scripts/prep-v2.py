"""Assets and data for the marketplace version of the site (v2/).

Run from anywhere:  python scripts/prep-v2.py
Writes v2/data/skills.json (compact taxonomy) and assets/img/v2/*.webp (photo tiles cropped from the collage).
"""
import json
import os

from PIL import Image

ROOT = r"C:\Users\Admin\OneDrive\1. Layal Consulting\Claude code"
TAXONOMY = os.path.join(ROOT, "Hereknows App", "skills.json")
COLLAGE = os.path.join(ROOT, "Hereknows App", "Media", "welcome-collage.jpg")

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(HERE, "v2", "data")
IMG = os.path.join(HERE, "assets", "img", "v2")
for d in (DATA, IMG):
    os.makedirs(d, exist_ok=True)

# Boxes inside each collage tile, in 1400-wide coordinates (the tiles are slightly rotated, so stay inside them).
TILES = {
    "baker": (40, 90, 430, 640),
    "tech": (560, 20, 1180, 280),
    "guitar": (470, 240, 900, 500),
    "laptop": (370, 450, 850, 745),
    "oud": (920, 300, 1380, 680),
}


def main():
    with open(TAXONOMY, encoding="utf-8") as f:
        tax = json.load(f)
    categories = [
        {"id": c["id"], "name": c["name"], "skills": [s["name"] for s in c["skills"] if s.get("status", "allowed") in ("allowed", "notice")]}
        for c in tax["categories"]
    ]
    out = {"categories": categories, "licenceAreas": [a["name"] for a in tax["licenceRequired"]]}
    path = os.path.join(DATA, "skills.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, separators=(",", ":"))
    print(f"v2/data/skills.json: {len(categories)} categories, {sum(len(c['skills']) for c in categories)} skills, "
          f"{os.path.getsize(path) / 1024:.1f} KB")

    im = Image.open(COLLAGE).convert("RGB")
    k = im.width / 1400
    for name, (x0, y0, x1, y1) in TILES.items():
        box = tuple(round(v * k) for v in (x0, y0, x1, y1))
        tile = im.crop(box)
        if tile.width > 900:
            tile = tile.resize((900, round(tile.height * 900 / tile.width)), Image.LANCZOS)
        p = os.path.join(IMG, f"photo-{name}.webp")
        tile.save(p, "WEBP", quality=82, method=6)
        print(f"{os.path.relpath(p, HERE):40s} {tile.size} {os.path.getsize(p) / 1024:6.1f} KB")

    hero = im.copy()
    hero = hero.resize((1400, round(hero.height * 1400 / hero.width)), Image.LANCZOS)
    p = os.path.join(IMG, "hero-collage.webp")
    hero.save(p, "WEBP", quality=78, method=6)
    print(f"{os.path.relpath(p, HERE):40s} {hero.size} {os.path.getsize(p) / 1024:6.1f} KB")


if __name__ == "__main__":
    main()
