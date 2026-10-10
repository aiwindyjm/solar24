"""Rebuild local CJK web subsets after editorial changes. Original fonts stay untouched.

Run from repository root; provide the originals directory as the first argument.
Requires fontTools and brotli. Font sources and OFL licenses are in assets/fonts/.
"""
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont
import hashlib
import json
import sys

root = Path(__file__).resolve().parents[1]
originals = Path(sys.argv[1])
text = ''.join(p.read_text(encoding='utf-8') for p in (root / 'src').rglob('*')
               if p.suffix in {'.ts', '.tsx', '.json', '.css'})
families = {'LXGWWenKai-Regular.ttf': 'Solar24 Reading',
            'LXGWSeal-Regular.ttf': 'Solar24 Seal',
            'MaShanZheng-Regular.ttf': 'Solar24 Brush'}
manifest_path = root / 'assets/fonts/manifest.json'
manifest = json.loads(manifest_path.read_text(encoding='utf-8'))
for entry in manifest:
    source = entry['source']
    if source not in families:
        continue
    raw = originals / source
    assert hashlib.sha256(raw.read_bytes()).hexdigest() == entry['sha256'], source
    font = TTFont(raw)
    options = subset.Options()
    options.name_IDs = ['*']
    options.name_legacy = True
    options.name_languages = ['*']
    sub = subset.Subsetter(options=options)
    sub.populate(text=text)
    sub.subset(font)
    family = families[source]
    for record in font['name'].names:
        if record.nameID in {1, 3, 4, 6, 16, 17}:
            value = 'Regular' if record.nameID == 17 else family
            if record.nameID == 6:
                value = family.replace(' ', '') + '-Regular'
            record.string = value.encode(record.getEncoding())
    font.flavor = 'woff2'
    output = root / 'assets/fonts' / entry['web']
    font.save(output)
    entry['bytes'] = output.stat().st_size
    entry['webSha256'] = hashlib.sha256(output.read_bytes()).hexdigest()
    print(f'{output.name}: {entry["bytes"]} bytes; {len(font.getBestCmap())} glyph mappings')
manifest_path.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
(root / 'public/font-licenses/manifest.json').write_bytes(manifest_path.read_bytes())
