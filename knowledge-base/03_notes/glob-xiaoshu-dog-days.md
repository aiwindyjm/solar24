---
schema_version: '0.1.0'
id: 'glob-xiaoshu-dog-days'
type: 'GlobalExpression'
title: '欧洲"犬日"（Dog Days）：天狼星偕日升后的最热时段（Candidate）'
solar_terms: ['xiaoshu']
season: 'summer'
dimensions: ['global-expressions', 'astronomy']
region: ['地中海-欧洲（古希腊罗马传统起源；后世泛用于欧美通俗话语）']
period: '古典古代起；传统时段约公历7月3日至8月11日（据检索摘要）'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'low'
contested: false
source_ids: ['source-wikipedia-dog-days']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
risk_level: 'high'
impact_level: 'global'
claim:
  {
    'statement': '待核验：欧洲传统的"犬日"（Dog Days，拉丁 diēs caniculārēs）指天狼星（Sirius，"Dog Star"）偕日升之后一年中最炎热的时段，古希腊罗马已有此说，后世传统时段约为公历7月3日至8月11日。',
    'exceptions': ['仅检索摘要级来源（Wikipedia 词条摘要并综合 EarthSky、History.com 检索摘要），页面未直接读取'],
  }
expression:
  {
    'schema_version': '0.1.0',
    'id': 'glob-xiaoshu-dog-days',
    'editorial_layer': 'community',
    'term_ids': ['xiaoshu'],
    'title': { 'zh-CN': '犬日（天狼星偕日升后的最热时段）', 'en': 'Dog Days: the hottest days after the heliacal rising of Sirius' },
    'location': '地中海-欧洲（古希腊、古罗马传统；现代欧美为通俗文化用语）',
    'country': '希腊、意大利（古典起源地）；当代使用遍及欧美',
    'region': '欧洲/地中海',
    'culture': '古希腊罗马天文-民俗传统；基督教化后仍延续为通俗语',
    'creators': [{ 'name': '古希腊罗马民间传统（无个人作者）', 'url': null, 'role': 'community' }],
    'time_period': '古典古代起；传统时段约7月3日至8月11日（待核验）',
    'natural_context': '天狼星偕日升（heliacal rising）之后约40天的酷热时段',
    'cultural_expression': '古罗马称 diēs caniculārēs（狗星日）；古人认为天狼星加剧太阳的热（检索摘要）；今为英语"dog days of summer"日常用语',
    'relationship_to_solar_term': 'seasonal-experience',
    'relationship_reason': '与中国三伏同属"一年最热时段"的文化-天文标记（seasonal-experience：相近季节经验），但参照系不同：犬日锚定恒星（天狼星偕日升），三伏锚定干支纪日（庚日）；两者是相近气候经验在不同天文/历法参照下的独立表达，不是对应或等同关系。',
    'difference': '犬日基于恒星视运动（且因岁差，今天的偕日升日期已与古典时代不同），三伏基于干支计日循环；犬日无祭祀制度谱系，三伏有秦汉以降的伏祠/伏腊制度史；两者时段仅部分重叠（犬日传统约7月3日-8月11日 vs 三伏约7月中旬-8月中下旬，逐年变动）',
    'similarity': '都把"一年中最热的时段"以天文/历法方式标记出来；都出现"最热时段恰在夏至之后"的季节滞后经验；都衍生出避暑、节制活动的生活民俗',
    'source_ids': ['source-wikipedia-dog-days'],
    'license': 'pending（习俗本身为民俗传统；描述文本的来源许可待核）',
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

# 犬日 · Dog Days（GlobalExpression · Candidate）

> **状态：Candidate（候选表达）**——来源未直读、consent=pending。三要素：**Similarity** 与三伏同为"最热时段"的文化-天文标记、共享夏至后最热的季节滞后经验；**Difference** 参照系不同（天狼星偕日升 vs 干支庚日）、无祭祀制度谱系、时段仅部分重叠；**Relationship** 是**相近季节经验+不同天文参照的独立表达**（seasonal-experience），**不是对应、不是等同、不是"外国版三伏"**。不得进入正式对外内容。

## 研究问题

"一年最热时段"在其他文化中如何被标记？与中国三伏的可比边界在哪里？

## 证据与状态

线索级：仅依据检索摘要（[[04_sources/source-wikipedia-dog-days|source-wikipedia-dog-days]]，未读原文，另综合 EarthSky/History.com 检索摘要）。天狼星偕日升的定义、diēs caniculārēs 之名、传统时段（July 3 - August 11）、"古人认为天狼星致热/岁差致日期漂移"诸断言**均须直接读取后**方可用于正式内容。

## 待人工确认

- 直接读取 Wikipedia 词条及天文馆/古典学权威来源（偕日升的天文定义、古典文献出处如 Hesiod/Pliny 相关段落）；
- 与三伏的对比表述（季节滞后、民俗形态）需要跨文化顾问复核后方可脱离 Candidate；
- 禁止在产品文案中出现"欧洲的三伏""西方也有三伏天"类等同表述。

## 修改记录

- 2026-09-16（建卡）：按 Candidate 规范建卡，relationship 显式取 same-phenomenon-different-system，杜绝"等同三伏"叙事；status=draft。

[[01_terms/11_小暑|小暑索引]] · [[03_notes/sci-xiaoshu-sanfu-gengday-mechanism|三伏机制]] · [[02_topics/global-expressions|世界文化表达]]
