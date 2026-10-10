---
schema_version: '0.1.0'
id: 'glob-jingzhe-keichitsu-japan'
type: 'GlobalExpression'
title: '日本"啓蟄"（keichitsu）：同一物候概念在汉字历法圈的存古传承（Candidate）'
solar_terms: ['jingzhe']
season: 'spring'
dimensions: ['global-expressions', 'phenology']
region: ['日本']
period: '据检索摘要：随中国历法体系传入日本后沿用至今；传入时间未核验'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'low'
contested: false
risk_level: 'high'
impact_level: 'global'
source_ids: ['source-nippon-72microseasons']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
claim:
  {
    'statement': '待核验：日本传统历注沿用源自中国的二十四节气与七十二候（今称"72 microseasons"），其中3月上中旬的节气名作"啓蟄"（keichitsu），与汉以前旧名"启蛰"同形；其下三候据检索摘要为"蟄虫啓戸/桃始笑/菜虫化蝶"（3月6-10日/11-15日/16-20日），候名与中国七十二候惊蛰三候（桃始华/仓庚鸣/鹰化为鸠）同源而文字与物候对象有变异。',
    'exceptions': ['仅检索摘要级来源（Nippon.com 页面未直接读取），"日本保留启蛰旧名"与传入时间线均未核验'],
  }
expression:
  {
    'schema_version': '0.1.0',
    'id': 'glob-jingzhe-keichitsu-japan',
    'editorial_layer': 'community',
    'term_ids': ['jingzhe'],
    'title': { 'zh-CN': '啓蟄（日本历注中的"启蛰"旧名）', 'en': 'Keichitsu: Japan''s almanac term preserving the old name "Qizhe"' },
    'location': '日本（历注/杂节传统，非特定地点仪式）',
    'country': '日本',
    'region': '东亚',
    'culture': '日本历注传统；二十四节气与七十二候随中国历法体系传入',
    'creators': [{ 'name': '日本历注传统（无个人作者）', 'url': null, 'role': 'community' }],
    'time_period': '传入时间未核验（检索摘要称随中国历法体系传入后沿用至今）',
    'natural_context': '公历3月上中旬：昆虫出蛰、桃花初开（物候历注语境）',
    'cultural_expression': '历注/生活历中的节气名"啓蟄"及其下三候（蟄虫啓戸、桃始笑、菜虫化蝶）；用于和历、料理店菜单、生活美学写作等当代场景（后两项据检索摘要）',
    'relationship_to_solar_term': 'other',
    'relationship_reason': '传播关系：日本历注的"啓蟄"与中国节气"惊蛰"同源，但保留了汉前旧名"启蛰"的用字——它不是对惊蛰的平行发明，也不是"同一个节日"，而是同一历法体系在异域的分支存古。',
    'difference': '用字不同（啓蟄保留"启"，中国自汉代改用"惊"）；三候内容在地化改写（桃始笑/菜虫化蝶 vs 桃始华/仓庚鸣/鹰化为鸠）；日本侧不承载中国的春耕动员语义与惊蛰食俗/驱邪民俗（如吃梨、打小人）',
    'similarity': '同以3月上中旬为"蛰虫出、桃花开"的物候时段；都保留"五日一候"的细粒度物候历结构（据检索摘要）',
    'source_ids': ['source-nippon-72microseasons'],
    'license': 'pending（描述文本来源许可待核）',
    'media_types': ['text'],
    'asset_ids': [],
    'consent': 'pending',
    'status': 'candidate',
    'featured': null,
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'hold',
    'findings': ['insufficient-evidence'],
    'notes': '来源仅搜索摘要/弱来源，证据不足；列needs-research',
  }
---

# 日本"啓蟄" · GlobalExpression（Candidate）

> **状态：Candidate（候选表达）**——来源未直读、consent=pending。三要素：**Similarity** 同以3月上中旬为蛰虫出/桃花开的物候时段，保留五日一候结构；**Difference** 用字存古（啓蟄=启蛰旧名）、三候在地化改写、不承载中国春耕与驱邪民俗；**Relationship** 是汉字历法文化圈内的**传播分支**（同一体系异地存古），不是平行发明，更不能写成"日本版惊蛰节日"。不得进入正式对外内容。

## 研究问题

惊蛰（及其旧名启蛰）概念在汉字文化圈的传承中留下了什么活化石？

## 证据与状态

线索级：仅依据检索摘要（[[04_sources/source-nippon-72microseasons|source-nippon-72microseasons]]，Nippon.com "72 Microseasons" 页面未直接读取）。对本节气最有价值的断言有两点，均须直接核验后才可用于正式内容：(1) 日本历注至今用"啓蟄"（即保留"启蛰"用字）；(2) 其三候名与中国惊蛰三候同源而有变异。前者若核实，将成为 [[03_notes/hist-jingzhe-qizhe-renaming|改名公案卡]] 所记"启蛰为旧名"的域外旁证。

## 待人工确认

直接读取 Nippon.com 原文或日本权威历注来源（国立国会图书馆、日本国立天文台历法页）；核验"啓蟄"用字是否延续自中国唐代以前历书传入；按 vault 规范获得跨文化顾问确认后才可脱离 Candidate。

## 修改记录

- 2026-09-16（第一轮研究）：建卡。按 Candidate 处理（search-excerpt 源、unverified、low）；与立春"节分"候选卡同一体例，只作传播关系、不作对应/等同表述。

[[01_terms/03_惊蛰|惊蛰索引]] · [[03_notes/hist-jingzhe-qizhe-renaming|启蛰改名公案]] · [[02_topics/global-expressions|世界文化表达]]
