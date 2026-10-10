---
schema_version: '0.1.0'
id: 'glob-dashu-doyo-oxday'
type: 'GlobalExpression'
title: '日本"土用の丑の日"：盛夏食鳗进补的日子（Candidate）'
solar_terms: ['dashu']
season: 'summer'
dimensions: ['global-expressions', 'food', 'customs']
region: ['日本']
period: '食俗流行说定型于江户时代（据检索摘要）；延续至今'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'low'
contested: false
risk_level: 'high'
impact_level: 'global'
source_ids: ['source-wikipedia-dashu-oxday']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
claim:
  {
    'statement': '待核验：日本"土用の丑の日"（Midsummer Ox Day，土用丑日）指夏季土用期中的十二支"丑日"，当日日本人食蒲烧鳗鱼（unagi kabayaki）以在酷暑中补充体力；"土用"为传统历法中各季节开端（立春/立夏/立秋/立冬）前约18天的时段，丑日按十二支计日逐年漂移（2026年实例为7月26日）；食鳗传统据说始于江户时代。',
    'exceptions': ['仅检索摘要级来源（Wikipedia 词条摘要并综合多家英文文化站点摘要），页面未直接读取；"土用=季节前18天""江户起源说""2026年7月26日"均待直读核验'],
  }
expression:
  {
    'schema_version': '0.1.0',
    'id': 'glob-dashu-doyo-oxday',
    'editorial_layer': 'community',
    'term_ids': ['dashu'],
    'title': { 'zh-CN': '土用丑日（盛夏食鳗进补的日子）', 'en': 'Doyō no Ushi no Hi: the Midsummer Day of the Ox' },
    'location': '日本（全国性食俗；鳗鱼餐饮业的年度高峰）',
    'country': '日本',
    'region': '东亚',
    'culture': '日本民俗食俗传统；"土用"概念建立在中国传入的二十四节气与十二支计日体系上',
    'creators': [{ 'name': '日本民间传统（无个人作者）', 'url': null, 'role': 'community' }],
    'time_period': '食俗流行说定型于江户时代（待核验）；延续至今',
    'natural_context': '立秋前约18天的夏季土用期：北半球中纬度酷暑最盛时段',
    'cultural_expression': '食蒲烧鳗鱼（kabayaki，高脂高蛋白食物）补充体力对抗暑热；鳗鱼餐饮店年度销售高峰',
    'relationship_to_solar_term': 'same-time',
    'relationship_reason': '历法框架上的时段叠合而非平行巧合：夏季土用=立秋前约18日，大暑=立秋前约15日，土用丑日按检索摘要实例（2026年7月26日）落在大暑节气内；但丑日按十二支计日漂移，不排除个别年份落在小暑末（土用起点早于大暑交节约3天），"必在大暑内"的逐年核验未做。土用与十二支均随汉字历法体系由中国传入日本，此为传播后的本土化实践，不是日本的独立发明，也不是"日本的大暑节"。',
    'difference': '标记机制不同：土用丑日以"节气节点（立秋）前时段+十二支丑日"定位，中国三伏以"夏至后庚日"定位；食俗内容不同：鳗鱼（和食高蛋白进补）与中国的伏茶伏姜、徐州伏羊、山东喝暑羊、莆田羊肉荔枝等各自独立；土用丑日无送船迎神类仪式形态（与大暑送大暑船相比）',
    'similarity': '同处一年最热时段、同为"以食抗暑/伏天进补"的文化应答；都把"盛夏进补"绑定在传统历法的特定日期上而非气象实况；都与节气锚点（立秋/夏至）形成近似倒计时的时段结构',
    'source_ids': ['source-wikipedia-dashu-oxday'],
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

# 土用の丑の日 · Midsummer Ox Day（GlobalExpression · Candidate）

> **状态：Candidate（候选表达）**——来源未直读、consent=pending。三要素：**Similarity** 同处立秋前酷暑时段、同为"伏天以食抗暑"的历法绑定食俗；**Difference** 定位机制（节气前18天时段+十二支丑日 vs 干支庚日）、食物（鳗鱼 vs 伏茶/伏姜/伏羊/荔枝羊肉）与形态（纯食俗 vs 含送船仪式）不同；**Relationship** 是汉字历法文化圈内的**传播+本土化**关系（土用与十二支随中国历法传入日本后发展出食鳗实践），时段与大暑高度重叠但**不是对应、不是等同、不是"日本的大暑节"**。不得进入正式对外内容。

## 研究问题

"立秋前最热时段的食补文化"在其他历法文化中如何表达？与中国伏天食俗的可比边界在哪里？

## 证据与状态

线索级：仅依据检索摘要（[[04_sources/source-wikipedia-dashu-oxday|source-wikipedia-dashu-oxday]]，未读原文；综合 Bento&Co、Discover Kyoto、Glos Travel 等站点摘要）。"土用=季节开端前18天""夏季土用丑日多落7月下旬""江户时代起源说""2026年为7月26日"诸断言**均须直接读取权威来源（日本国立天文台/历法机构解说或学术文献）后**方可用于正式内容。与中国的对比（伏羊/伏茶，见 [[03_notes/trad-dashu-fucha-shushi|伏茶伏姜食俗卡]]、[[03_notes/region-xiaoshu-xuzhou-fuyang|徐州伏羊]]）在 Candidate 阶段只作相似性方向提示。

## 待人工确认

- 直接读取 Wikipedia 词条及日本权威历法解说（土用的定义、四立前18.6天的规定、十二支计日）；
- "食鳗始于江户时代（平贺源内传说）"的文献核验——该起源说本身在日本也是传说级，须谨慎分层；
- 与大暑节气的逐年重合率核验（土用丑日 vs 大暑交节日期，需历表计算）；
- 跨文化顾问复核后方可脱离 Candidate；禁止产品文案出现"日本版大暑/三伏"类等同表述。

## 修改记录

- 2026-09-16（建卡）：按 Candidate 规范建卡；relationship 取枚举 same-time（时段叠合）并在 reason 中明示漂移与未逐年核验的保留；杜绝"对应/等同"叙事。

[[01_terms/12_大暑|大暑索引]] · [[03_notes/trad-dashu-fucha-shushi|伏茶伏姜食俗]] · [[03_notes/glob-xiaoshu-dog-days|犬日（小暑 Candidate，另一"最热时段"标记）]] · [[02_topics/global-expressions|世界文化表达]]
