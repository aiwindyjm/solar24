---
schema_version: '0.1.0'
id: 'source-naoj-24sekki-shuangjiang'
type: 'Source'
title: '日本国立天文台暦計算室：こよみ用語解説 二十四節気（霜降=九月中・黄経210°・霜が降りるころ）'
solar_terms: ['shuangjiang']
season: 'autumn'
dimensions: ['astronomy', 'calendar', 'global-expressions', 'references']
region: ['日本（历法文化中的二十四節気沿用）']
period: '现行机构解说页（解説口径为现代天文）'
language: 'ja'
status: 'draft'
epistemic: 'unverified'
confidence: 'high'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
source:
  {
    'id': 'source-naoj-24sekki-shuangjiang',
    'title': 'こよみ用語解説 二十四節気（国立天文台暦計算室）',
    'authors': ['国立天文台暦計算室（NTJL）'],
    'publisher': '国立天文台（National Astronomical Observatory of Japan）',
    'published': null,
    'url': 'https://eco.mtk.nao.ac.jp/koyomi/faq/24sekki.html',
    'citation': '国立天文台暦計算室：こよみ用語解説「二十四節気」（霜降の項），2026-09-16 读取。',
    'source_type': 'institutional',
    'access': 'direct-read',
    'accessed': '2026-09-16',
    'original_excerpt': '霜降 (そうこう) 九月中 210° 霜が降りるころ …… 二十四節気は日本や中国で伝統的に用いられる季節の目印で、各節気は太陽黄経（視黄経）の値によって定義されています。',
    'locator': '「二十四節気一覧 (秋)」表：名称（読み仮名）/月/太陽黄経/説明四列，霜降行为"九月中 210° 霜が降りるころ"；页首定义段。',
    'ai_summary': '日本国立天文台历计算室的二十四節気解说页秋表：霜降（そうこう）=九月中、太阳黄経210°、释名"霜が降りるころ"（下霜的时节）。页首明言二十四節気为日中传统共用的季节标记、各節気按太阳黄经定义。该页与雨水/秋分侧已有源卡同URL，本卡仅提取霜降行与定义段，内容各侧独立。',
    'rights': '机构公开解说页；仅短摘录。',
    'verification': 'human-verified',
  }

# owner-authorized source upgrade 2026-09-28
---

# NAOJ二十四節気页·霜降行 · Source

- 实际读取：是（2026-09-16，curl 经代理抓取，Shift-JIS 解码提取页首定义段与秋表霜降行）。
- 交叉核对：黄経210°与新华社2021稿、非遗网霜降专题（均直读）跨语言一致；"九月中"月序标签与《月令七十二候集解》"霜降，九月中"（直读）一致——三方异发布方互证。
- 同 URL 已有雨水侧（source-naoj-24sekki-yushui）与秋分侧（source-naoj-24sekki-qiufen）源卡；本卡为霜降侧，按前例分卡互注、引用内容各侧独立。

- **同源登记（2026-09-17 F03）**：本卡与 source-naoj-24sekki-dahan、source-naoj-24sekki-hanlu、source-naoj-24sekki-qiufen、source-naoj-24sekki-xiaoxue、source-naoj-24sekki-yushui 共用同一页面 URL（各卡摘录不同节气行，定位不同）。独立性计数按发布方（国立天文台）计为 1，同页兄弟卡互不构成独立来源。

[[04_sources/README|来源入口]]
