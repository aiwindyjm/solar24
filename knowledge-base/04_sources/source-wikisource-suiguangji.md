---
schema_version: '0.1.0'
id: 'source-wikisource-suiguangji'
type: 'Source'
title: '歲時廣記 · 维基文库本（书籍层主源）'
solar_terms: []
season: null
dimensions: ['history', 'customs', 'references']
region: ['中国（宋，编于江南）']
period: '南宋（13世纪，陈元靓撰）'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'medium'
risk_level: 'low'
impact_level: 'system'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-25'
updated: '2026-09-25'
human_review: null
source:
  {
    'id': 'source-wikisource-suiguangji',
    'title': '歲時廣記（维基文库（四庫全書本·学海类编本，四卷））',
    'authors': ['陈元靓（南宋）'],
    'publisher': '维基文库',
    'published': null,
    'url': 'https://zh.wikisource.org/wiki/歲時廣記_(四庫全書本)',
    'citation': '陈元靓：《岁时广记》（四库全书本四卷），维基文库，2026-09-25 读取提要与朱鉴序。',
    'source_type': 'historical',
    'access': 'direct-read',
    'accessed': '2026-09-25',
    'original_excerpt': '提要：按四季分卷，春令四十六條、夏令五十條、秋令三十二條、冬令三十八條（转写自提要；宋陈元靓撰，曹溶学海类编本，原本卷首图说已佚）。',
    'locator': '主页（四库提要+朱鑑序，无正文）；正文在卷一至卷四子页（春/夏/秋/冬）+全覽页。',
    'ai_summary': '宋代岁时类书，唐→清断代链的"宋环节"主源；通行四十卷本与此四库四卷本（学海类编）卷帙不同，引文一律以本库所读四卷子页为准。R19-R30按节令读卷一至卷四。',
    'rights': '原文公有领域古籍；维基文库文本依其站点许可。仅元数据与短摘录。',
    'verification': 'human-verified',
  }

# owner-authorized source upgrade 2026-09-28
---

# 歲時廣記 · 书籍层主源（R03骨架）

- 实际读取：是（2026-09-25，主页/卷目录/提要级）。本 Source 为书籍层入口；后续每读一卷，如需精确引文另建卷级 Source 或在本源 locator 追加（引文以卷子页直读为准）。
- 注意版本差异：学界常引四十卷本；本源用四库四卷本并已声明。

[[04_sources/README|来源入口]]
