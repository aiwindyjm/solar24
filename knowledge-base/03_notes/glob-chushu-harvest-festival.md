---
schema_version: '0.1.0'
id: 'glob-chushu-harvest-festival'
type: 'GlobalExpression'
title: '英格兰收获节（Harvest Festival）：晚夏-初秋的教会收获感恩（Candidate）'
solar_terms: ['chushu']
season: 'autumn'
dimensions: ['global-expressions', 'customs']
region: ['英国（英格兰教会传统为主）']
period: '现代教会形态始于1843年（据检索摘要）；更早有8月1日 Lammas 传统'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'low'
risk_level: 'high'
impact_level: 'global'
contested: false
source_ids: ['source-wikipedia-harvestfestival']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
claim:
  {
    'statement': '待核验：英国教会收获感恩节（Harvest Festival）的现代形态始于1843年（康沃尔牧师 Robert Hawker 邀教区信众举行收获感恩礼拜），今多在收获月（近秋分的满月）附近的周日举行；更早有8月1日 Lammas（loaf mass，初麦面包）传统。与处暑共享"北半球晚夏-初秋收获时段"的季节坐标。',
    'exceptions': ['仅检索摘要级来源（Wikipedia 词条摘要，另综合 CPRE 等英国站点摘要），页面未直接读取'],
  }
expression:
  {
    'schema_version': '0.1.0',
    'id': 'glob-chushu-harvest-festival',
    'editorial_layer': 'community',
    'term_ids': ['chushu'],
    'title': { 'zh-CN': '英格兰收获节（教会收获感恩礼拜）', 'en': 'Harvest Festival: the English church thanksgiving for the harvest' },
    'location': '英国（英格兰、康沃尔起源说；圣公会等教会普遍举行）',
    'country': '英国',
    'region': '西欧',
    'culture': '英格兰基督教（圣公会）传统；融合更早的季节丰饶习俗（检索摘要层）',
    'creators': [{ 'name': '英格兰教会与乡土传统（无个人作者；1843年形态与 Robert Hawker 相关联）', 'url': null, 'role': 'community' }],
    'time_period': '现代教会形态始于1843年（待核验）；Lammas 传统更早；延续至今',
    'natural_context': '北半球晚夏至初秋：谷物收获完成、昼渐短、暑热消退的时段',
    'cultural_expression': '教堂以收获农产品、鲜花装饰并举行感恩礼拜，唱收获赞美诗；现代兼有食品捐赠慈善（检索摘要层）',
    'relationship_to_solar_term': 'nearby-time',
    'relationship_reason': '与处暑共享"北半球晚夏-初秋、由热转凉、作物成熟"的季节时段（nearby-time：时段邻近），但两者无传播或历法承继关系：Harvest Festival 的日期锚是教会历与本地收获实际（收获月附近的周日，浮动），处暑的日期锚是太阳黄经150°——是相近季节经验在两种时间制度下的独立表达。',
    'difference': '日期机制不同（教会历+收获月浮动周日 vs 太阳黄经150°固定刻度）；内容不同（教会感恩礼拜+慈善捐赠 vs 中国此段的民俗锚在农历七月十五中元祭祖）；起点不同（现代形态1843年，检索摘要层 vs 处暑名称定义见元代题名古籍）；"处暑三候禾乃登"是物候-农事刻度，Harvest Festival 是宗教感恩节庆',
    'similarity': '都落在北半球由夏入秋的收获时段；都以"收获完成/五谷成熟"为核心意涵（禾乃登 vs harvest thanksgiving）；都伴随对供给来源的感恩叙事（祖先/大海/教会语境各自不同）',
    'source_ids': ['source-wikipedia-harvestfestival'],
    'license': 'pending（习俗本身为民俗-教会传统；描述文本的来源许可待核）',
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

# 英格兰收获节 · Harvest Festival（GlobalExpression · Candidate）

> **状态：Candidate（候选表达）**——来源未直读、consent=pending。三要素：**Similarity** 同处北半球晚夏-初秋收获时段、同以五谷成熟为核心意涵；**Difference** 日期机制（教会历+收获月 vs 黄经150°）、内容（感恩礼拜+捐赠 vs 中元祭祖民俗群）、历史起点均不同；**Relationship** 仅是**时段邻近（nearby-time）的独立表达**，无传播/承继关系，**不是对应、不是等同、不是"西方版处暑"**。不得进入正式对外内容。

## 研究问题

"由夏入秋+收获"这个季节坐标在其他文化中如何被节庆化？与处暑的可比边界在哪里？

## 证据与状态

线索级：仅依据检索摘要（[[04_sources/source-wikipedia-harvestfestival|source-wikipedia-harvestfestival]]，未读原文）。1843年/Hawker/Lammas/收获月周日诸时间锚**必须直接读取**（Wikipedia 词条+英国教会官方材料）后方可用于正式内容。

## 待人工确认

- 直接读取 en.wikipedia 词条与 Church of England / CPRE 等权威页，核验1843起源说与当代日期惯例。
- 与处暑的对比表述需跨文化顾问复核后方可脱离 Candidate；禁止产品文案出现"英国版处暑""西方的禾乃登"类等同表述。
- 若后续研究改选"日本処暑（しょしょ）同名传播"方向，可另行建卡，两者不冲突。

## 修改记录

- 2026-09-16（建卡）：按 Candidate 规范建卡；relationship 取协议枚举 nearby-time（吸取小暑波次自造值翻车教训）；三要素声明块齐备。

[[01_terms/14_处暑|处暑索引]] · [[03_notes/trad-chushu-nongshi|处暑农事]] · [[02_topics/global-expressions|世界文化表达]]
