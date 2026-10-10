---
schema_version: '0.1.0'
id: 'source-wikisource-shoushitongkao'
type: 'Source'
title: '欽定授時通考 · 维基文库本（书籍层主源）'
solar_terms: []
season: null
dimensions: ['agriculture', 'history', 'references']
region: ['中国（官修，全国视野）']
period: '清乾隆（1742年敕撰）'
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
    'id': 'source-wikisource-shoushitongkao',
    'title': '欽定授時通考（维基文库（四庫全書本，78卷））',
    'authors': ['乾隆敕撰（张廷玉等奉敕）'],
    'publisher': '维基文库',
    'published': null,
    'url': 'https://zh.wikisource.org/wiki/欽定授時通考_(四庫全書本)',
    'citation': '乾隆敕撰：《钦定授时通考》（四库全书本，78卷），维基文库，2026-09-25 读取目录。',
    'source_type': 'historical',
    'access': 'direct-read',
    'accessed': '2026-09-25',
    'original_excerpt': '全書78卷分八門：天時（卷1-6）、土宜（卷7-18）、穀種（卷19-30）、功作（卷31-41）、勸課（卷42-53）、蓄聚（卷54-57）、農餘（卷58-71）、蠶桑（卷72-78）。（主页目录直读）',
    'locator': '主页目录+卷03（天時門·春時：春总论+正二三月经书农书引文，2026-09-25直读）+卷42（勸課門首卷）+卷04（夏時）/卷05（秋時）/卷06（冬時）（2026-09-25 直读：農桑通訣十八候链、陶朱公搁稻、崔寔白露种麦、瑣碎錄入梅出梅辰日异文、大戴禮冬藏）；主页目录+四库提要；勸課門含诏令/章奏/官司/祈报/敕谕/祈谷耕耤/御製詩文/耕织图上下（卷52-53）；农时节令归天時門按春夏秋冬四卷编排。',
    'ai_summary': '清代官修农学总汇，"授时"即节气与农时关系的国家层表述；劝课门=劝农制度史核心卷。R10-R12读天時門春卷与勸課门首卷。',
    'rights': '原文公有领域古籍；维基文库文本依其站点许可。仅元数据与短摘录。',
    'verification': 'human-verified',
  }

# owner-authorized source upgrade 2026-09-28
---

# 欽定授時通考 · 书籍层主源（R03骨架）

- 实际读取：是（2026-09-25，主页/卷目录/提要级）。本 Source 为书籍层入口；后续每读一卷，如需精确引文另建卷级 Source 或在本源 locator 追加（引文以卷子页直读为准）。
- 书名本身（授时）即"节气指导农事"的制度化表达，值得在shared劝农制度卡中显式说明。

[[04_sources/README|来源入口]]

## 卷次读取记录

- 卷03、卷42（2026-09-25，R10-R11）。异文登记：卷03引齐民要术种谷句作「穀雨三月上旬及清明節桃始華爲中時」，与齐民要术直读本「三月上旬及清明節、桃始花爲中時」有「穀雨」前缀与「華/花」之异——已在种谷时序卡登记。
