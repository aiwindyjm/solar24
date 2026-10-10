---
schema_version: '0.1.0'
id: 'source-wikisource-qiminyaoshu'
type: 'Source'
title: '齊民要術 · 维基文库本（书籍层主源）'
solar_terms: []
season: null
dimensions: ['agriculture', 'references']
region: ['中国北方（黄河流域中下游）']
period: '北魏（约6世纪30-50年代）'
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
    'id': 'source-wikisource-qiminyaoshu',
    'title': '齊民要術（维基文库（十卷本，卷页待逐卷读））',
    'authors': ['贾思勰（北魏）'],
    'publisher': '维基文库',
    'published': null,
    'url': 'https://zh.wikisource.org/wiki/齊民要術',
    'citation': '贾思勰：《齐民要术》，维基文库，卷第一至卷十，2026-09-25 读取主页目录。',
    'source_type': 'historical',
    'access': 'direct-read',
    'accessed': '2026-09-25',
    'original_excerpt': '卷十篇名：五穀、果蓏、菜茹非中國物產者（主页目录直读）；耕田第一、收種第二、種穀第三在卷第一。',
    'locator': '主页目录+卷第一全篇（耕田第一/收種第二/種穀第三，2026-09-25逐字直读）；其余卷待后续轮次。',
    'ai_summary': '北魏农书祖本，黄河流域农事时宜的一手来源；十卷结构已直读，农时相关篇（耕田/收种/种谷）在卷第一。R04-R06逐卷读。',
    'rights': '原文公有领域古籍；维基文库文本依其站点许可。仅元数据与短摘录。',
    'verification': 'human-verified',
  }

# owner-authorized source upgrade 2026-09-28
---

# 齊民要術 · 书籍层主源（R03骨架）

- 实际读取：是（2026-09-25，主页/卷目录/提要级）。本 Source 为书籍层入口；后续每读一卷，如需精确引文另建卷级 Source 或在本源 locator 追加（引文以卷子页直读为准）。
- 与02_shared"节气起源于黄河流域"表述直接互证的农书层第一来源。

[[04_sources/README|来源入口]]

## 卷次读取记录

- 卷第一（2026-09-25，R04-R05）：耕田第一、收種第二（WebFetch直读）、種穀第三（curl代理raw直读，本地逐字提取）。关键句已入 [[02_shared/hist-qimin-zhonggu-shixu|种谷时序卡]] 与 [[02_shared/hist-qimin-gengtian-shouzhong|耕田收种卡]]。
