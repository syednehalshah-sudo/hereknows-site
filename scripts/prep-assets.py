"""Prepare the site's images from the brand kit and the live app screenshots.

Run from anywhere:  python scripts/prep-assets.py
Sources stay in OneDrive; outputs land in assets/ next to this repo's index.html.
"""
import os
import shutil

from PIL import Image, ImageDraw, ImageFont

ROOT = r"C:\Users\Admin\OneDrive\1. Layal Consulting\Claude code"
LIVE = os.path.join(ROOT, "Hereknows App", "Pitch Deck", "build", "assets", "live")
KIT = os.path.join(ROOT, "Hereknows Branding", "Hereknows Brand Kit")
MEDIA = os.path.join(ROOT, "Hereknows App", "Media")
BRAG = os.path.join(ROOT, "Hereknows App", "brag-output")

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(HERE, "assets", "img")
SCR = os.path.join(IMG, "screens")
VID = os.path.join(HERE, "assets", "video")
for d in (IMG, SCR, VID):
    os.makedirs(d, exist_ok=True)

# output name -> (live capture, mask the fake-camera self-view tile)
SCREENS = {
    "profile": ("01-profile.png", False),
    "urgent-form": ("07-urgent-form.png", False),
    "ask-waiting": ("09-ask-waiting.png", False),
    "ask-shortlist": ("10-ask-shortlist.png", False),
    "ask-matched": ("11-ask-matched.png", False),
    "call-ended": ("12-call-ended-solved.png", False),
    "new-listing": ("13-new-listing.png", False),
    "browse-categories": ("14-browse-categories.png", False),
    "browse-people": ("16-browse-people.png", False),
    "seller": ("17-seller.png", False),
    "listing": ("18-listing-weekly.png", False),
    "verified": ("20-verify-verified.png", False),
    "call": ("26-call-page-iphone.png", True),
}

S = 2  # the captures are 390x844 points at 2x
BAR = 54 * S  # status bar added above the capture
BEZEL = 12 * S
R_OUT = 62 * S
R_IN = 50 * S
PILL_W, PILL_H, PILL_Y = 126 * S, 37 * S, 11 * S


def font(size):
    names = ["PlusJakartaSans-SemiBold.ttf", "Inter-SemiBold.ttf", "Inter-SemiBold.otf", "Inter-Medium.otf", "segoeuib.ttf", "arialbd.ttf"]
    folders = [os.path.expandvars(r"%LOCALAPPDATA%\Microsoft\Windows\Fonts"), r"C:\Windows\Fonts"]
    for name in names:
        for folder in folders:
            p = os.path.join(folder, name)
            if os.path.exists(p):
                return ImageFont.truetype(p, size)
    return ImageFont.load_default(size)


def mask_self_view(im):
    """The live capture used a flat green fake camera; show a neutral camera-off tile instead."""
    d = ImageDraw.Draw(im)
    box = (545, 145, 750, 430)
    d.rounded_rectangle(box, radius=22, fill=(38, 51, 46), outline=(70, 86, 79), width=2)
    d.text(((box[0] + box[2]) // 2, (box[1] + box[3]) // 2), "You", font=font(30), fill=(200, 212, 205), anchor="mm")
    return im


def frame(src, out_path, mask=False):
    im = Image.open(src).convert("RGB")
    if mask:
        im = mask_self_view(im)
    w, h = im.size
    bg = im.getpixel((8, 8))
    dark = sum(bg) / 3 < 128
    ink = (255, 255, 255) if dark else (10, 20, 16)

    screen = Image.new("RGB", (w, h + BAR), bg)
    screen.paste(im, (0, BAR))
    d = ImageDraw.Draw(screen)
    d.text((34 * S, 27 * S), "9:41", font=font(17 * S), fill=ink, anchor="lm")
    x0, base = w - 96 * S, 32 * S
    for i in range(4):
        bh = (4 + i * 2.6) * S
        d.rounded_rectangle((x0 + i * 6 * S, base - bh, x0 + i * 6 * S + 4 * S, base), radius=2, fill=ink)
    bx = w - 62 * S
    d.rounded_rectangle((bx, 21 * S, bx + 27 * S, 33 * S), radius=4 * S, outline=ink, width=2)
    d.rounded_rectangle((bx + 2 * S, 23 * S, bx + 22 * S, 31 * S), radius=2 * S, fill=ink)
    d.rounded_rectangle((bx + 28 * S, 25 * S, bx + 30 * S, 29 * S), radius=1, fill=ink)
    px = (w - PILL_W) // 2
    d.rounded_rectangle((px, PILL_Y, px + PILL_W, PILL_Y + PILL_H), radius=PILL_H // 2, fill=(0, 0, 0))

    W, H = w + 2 * BEZEL, screen.height + 2 * BEZEL
    phone = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(phone).rounded_rectangle(
        (0, 0, W - 1, H - 1), radius=R_OUT, fill=(14, 22, 19, 255), outline=(58, 76, 68, 255), width=3
    )
    m = Image.new("L", screen.size, 0)
    ImageDraw.Draw(m).rounded_rectangle((0, 0, w - 1, screen.height - 1), radius=R_IN, fill=255)
    phone.paste(screen, (BEZEL, BEZEL), m)
    phone.save(out_path, "WEBP", quality=86, method=6)
    return phone.size


def main():
    sizes = {}
    for name, (src, mask) in SCREENS.items():
        out = os.path.join(SCR, f"{name}.webp")
        sizes[name] = frame(os.path.join(LIVE, src), out, mask)

    collage = Image.open(os.path.join(MEDIA, "welcome-collage.jpg")).convert("RGB")
    for width, suffix in ((1400, ""), (820, "-sm")):
        c = collage.resize((width, round(collage.height * width / collage.width)), Image.LANCZOS)
        c.save(os.path.join(IMG, f"collage{suffix}.webp"), "WEBP", quality=82, method=6)

    poster = Image.open(os.path.join(BRAG, "brag.jpg")).convert("RGB").resize((1280, 720), Image.LANCZOS)
    poster.save(os.path.join(IMG, "film-poster.webp"), "WEBP", quality=80, method=6)
    shutil.copy(os.path.join(BRAG, "brag.mp4"), os.path.join(VID, "hereknows-film.mp4"))

    logos = os.path.join(KIT, "01 Logos", "svg")
    for f in ("hereknows_horizontal_reversed.svg", "hereknows_symbol_white.svg", "hereknows_symbol_light.svg",
              "hereknows_wordmark_reversed.svg"):
        shutil.copy(os.path.join(logos, f), os.path.join(IMG, f.replace("hereknows_", "logo-").replace("_", "-")))
    icons = os.path.join(KIT, "04 Website Icons")
    for f in ("favicon.ico", "favicon.svg", "favicon-16.png", "favicon-32.png", "favicon-48.png"):
        shutil.copy(os.path.join(icons, f), os.path.join(IMG, f))
    app_icon = Image.open(os.path.join(KIT, "02 App Icons", "iOS", "AppIcon.appiconset", "AppIcon-1024.png")).convert("RGB")
    app_icon.resize((180, 180), Image.LANCZOS).save(os.path.join(IMG, "apple-touch-icon.png"))

    for folder in (IMG, SCR, VID):
        for f in sorted(os.listdir(folder)):
            p = os.path.join(folder, f)
            if os.path.isfile(p):
                print(f"{os.path.relpath(p, HERE):48s} {os.path.getsize(p) / 1024:8.1f} KB")
    print("phone texture size:", sizes["browse-people"])


if __name__ == "__main__":
    main()
