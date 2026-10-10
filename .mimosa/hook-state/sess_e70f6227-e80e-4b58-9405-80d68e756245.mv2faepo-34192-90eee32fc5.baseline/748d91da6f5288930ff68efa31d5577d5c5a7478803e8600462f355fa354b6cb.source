"""Reproducible local asset processing. Requires Pillow and NumPy; source is never modified."""
from pathlib import Path
import hashlib
import json
import numpy as np
from PIL import Image, ImageFilter, ImageDraw

base = Path(__file__).resolve().parents[1]
source = base.parents[2] / "24节气图标.png"
out = base / "assets"
out.mkdir(exist_ok=True)
sheet = np.asarray(Image.open(source).convert("RGB"))
names = "lichun yushui jingzhe chunfen qingming guyu lixia xiaoman mangzhong xiazhi xiaoshu dashu liqiu chushu bailu qiufen hanlu shuangjiang lidong xiaoxue daxue dongzhi xiaohan dahan".split()
records = []
previews = [Image.new("RGB", (6*220, 4*248), color) for color in ["#eef0e7", "#25373b"]]

for index, name in enumerate(names):
    row, col = divmod(index, 6)
    # Find actual white gutters separately in each column, rather than fixed row height.
    column = sheet[:, col*640:(col+1)*640]
    density = (column.min(axis=2) < 225).sum(axis=1)
    separators = [0] + [lo + int(np.argmin(density[lo:hi])) for lo, hi in [(550,680),(1050,1200),(1550,1740)]] + [2160]
    y0, y1 = separators[row], separators[row+1]
    crop = column[y0:y1].astype(float)
    low, high = crop.min(axis=2), crop.max(axis=2)
    alpha = np.clip(np.maximum((235-low)/30, (high-low-12)/40), 0, 1)
    # Suppress isolated background flecks without erasing pale details inside the icon.
    support = Image.fromarray(np.uint8(alpha > .22)*255)
    support = support.filter(ImageFilter.MedianFilter(3)).filter(ImageFilter.MaxFilter(9))
    alpha *= np.asarray(support)/255
    # Empty safety margin at gutter; all actual wing tips remain well inside this margin.
    alpha[:2] = 0
    alpha[-2:] = 0
    alpha[:, :2] = 0
    alpha[:, -2:] = 0
    rgb = np.clip((crop-255*(1-alpha[...,None]))/np.maximum(alpha[...,None], .001), 0, 255)
    image = Image.fromarray(np.dstack((rgb, alpha*255)).astype("uint8"))
    bbox = image.getbbox()
    if not bbox:
        raise RuntimeError(f"Empty butterfly: {name}")
    image = image.crop(bbox)
    image.thumbnail((548, 548), Image.Resampling.LANCZOS)
    framed = Image.new("RGBA", (600, 600))
    framed.alpha_composite(image, ((600-image.width)//2, (600-image.height)//2))
    framed.save(out/f"{name}.webp", quality=93, method=6)
    framed.resize((108,108), Image.Resampling.LANCZOS).save(out/f"{name}-small.webp", quality=88, method=6)
    # Preserve the final mask for inspection/reprocessing, not loaded by the website.
    framed.getchannel("A").save(out/f"{name}-mask.png")
    records.append({"slug":name,"sourceRect":[col*640,y0,640,y1-y0],"contentBox":list(bbox),
                    "output":[600,600],"mask":f"{name}-mask.png","file":f"{name}.webp"})
    for preview in previews:
        preview.paste(framed.resize((210,210)), (col*220+5,row*248+4), framed.resize((210,210)))
        ImageDraw.Draw(preview).text((col*220+12,row*248+220),f"{index+1:02} {name}",fill="#839584")

record = {"source":"24节气图标.png","sourceSha256":hashlib.sha256(source.read_bytes()).hexdigest(),
          "rights":"User supplied for local prototype; public redistribution permission unconfirmed.",
          "mapping":"Row-major assignment inherited from V3; original has no labels, pending owner confirmation.",
          "processing":"Per-column white gutter detection; neutral background suppression; white matte decontamination; centered 600px canvas.",
          "assets":records}
(out/"manifest.json").write_text(json.dumps(record,ensure_ascii=False,indent=2),encoding="utf-8")
proof = base.parents[2]/"output"/"playwright"/"solar24-v5"
proof.mkdir(parents=True,exist_ok=True)
for preview, label in zip(previews, ["light","dark"]):
    preview.save(proof/f"butterflies-{label}.png")
print(f"Prepared {len(records)} butterflies and masks; contact sheets: {proof}")
