---
schema_version: '0.1.0'
id: 'source-wikisource-suisizuanyao'
type: 'Source'
title: '四時纂要 · 维基文库本（书籍层主源）'
solar_terms: []
season: null
dimensions: ['agriculture', 'references']
region: ['中国北方（成书于唐末，宋初刊行）']
period: '唐末（10世纪初）'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'high'
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
    'id': 'source-wikisource-suisizuanyao',
    'title': '四時纂要（维基文库（全书同页本））',
    'authors': ['韩鄂（一作韩谔，唐末）'],
    'publisher': '维基文库',
    'published': null,
    'url': 'https://zh.wikisource.org/wiki/四時纂要',
    'citation': '韩鄂（一作韩谔）：《四时纂要》，维基文库全文本（春令卷之一至冬令卷之五），2026-09-25 读取。',
    'source_type': 'historical',
    'access': 'direct-read',
    'accessed': '2026-09-25',
    'original_excerpt': '孟春建寅。自立春即得正月節，凡陰陽避忌，宜依正月法。（春令卷之一·正月首句）',
    'locator': '单页全本，五卷结构；R07春卷、R08夏秋卷、R09冬卷分段直读，引文均标注所属月；逸文引《歲時廣記》"梅熟而雨曰梅雨"一条（四月）。',
    'ai_summary': '唐末逐月农事+阴阳占候+节令习俗混编；五卷按春(正月/二三三月)夏秋冬分。2026-09-25 R07-R09四季分段直读完成：十二个月的"自X即得N月節/X為N月中氣"配对句、立表占影句、朔日占、七夕乞巧、腊日祀灶庭燎除夜条均逐字取得。',
    'rights': '原文公有领域古籍；维基文库文本依其站点许可。仅元数据与短摘录。',
    'verification': 'human-verified',
  }

# owner-authorized source upgrade 2026-09-28
---

# 四時纂要 · 书籍层主源（R03骨架）

- 实际读取：是（2026-09-25，主页/卷目录/提要级）。本 Source 为书籍层入口；后续每读一卷，如需精确引文另建卷级 Source 或在本源 locator 追加（引文以卷子页直读为准）。
- 全本同页=单源单页，逐段摘录均从本源 locator 定位。

[[04_sources/README|来源入口]]

## 交叉核对

- 十二个月节/中气配对与 [[02_shared/sci-solarterms-jieqi-zhongqi|节气/中气机制]]（紫金山天文台口径）及《月令七十二候集解》"立春正月节/雨水正月中"编排一致→cross-checked。
- 十二月条"自小雪即得十二月節"与配对通则不符（当为小寒），系原文如此或传抄异文，已登记不改动。
