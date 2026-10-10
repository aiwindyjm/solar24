---
schema_version: '0.1.0'
id: 'glob-mangzhong-june-grain-harvest'
type: 'GlobalExpression'
title: '欧洲南部六月麦收与仲夏时节：北半球麦收季的夏季环节（Candidate）'
solar_terms: ['mangzhong']
season: 'summer'
dimensions: ['global-expressions', 'agriculture']
region: ['欧洲南部（地中海：意大利中部/西西里、西班牙等）；对照项：英国/欧洲北部']
period: '现代农学文献的收获时序（田野试验2008-2009等）；英国 harvest home 传统会期据线索为晚夏-秋'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'low'
risk_level: 'high'
impact_level: 'global'
contested: false
source_ids: ['source-medgrain-june-leads', 'source-britannica-harvesthome-leads']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
claim:
  {
    'statement': '待核验：北半球的冬小麦收获带在六月自南向北推进——欧洲南部（地中海）麦区六月成熟开镰（农学文献线索：意大利中部硬粒小麦完熟期在6月22日/30日前后），欧洲北部则晚至七八月；英格兰传统的 harvest home（Ingathering）收获节标记收割最后一天，会期在晚夏至秋季（八九月），**不是六月**。它与芒种同属"冬小麦成熟-收获"这一农业阶段的时间经验，不构成节日对应或等同关系。',
    'exceptions': ['仅检索摘要级来源（农学论文摘要+Britannica 词条摘要，页面均未直接读取）；地中海具体产区、年份与品种数据待直读核验'],
  }
expression:
  {
    'schema_version': '0.1.0',
    'id': 'glob-mangzhong-june-grain-harvest',
    'editorial_layer': 'community',
    'term_ids': ['mangzhong'],
    'title': { 'zh-CN': '欧洲南部的六月麦收与仲夏时节', 'en': 'June grain harvest in southern Europe and midsummer time' },
    'location': '欧洲南部地中海麦区（意大利中部/南部、西班牙等，线索级）',
    'country': '意大利、西班牙等（多国区域）',
    'region': '欧洲南部',
    'culture': '地中海麦作农业区（现代农事时序）；对照英格兰 harvest home 传统',
    'creators': [{ 'name': '农区集体时间经验（无单一创作者）', 'url': null, 'role': 'community' }],
    'time_period': '现代农学文献所记收获时序；欧洲北部收获节传统会期据线索为八九月',
    'natural_context': '冬小麦经春季灌浆后于初夏成熟；收获窗口自南向北推移',
    'cultural_expression': '地中海麦区六月开镰收麦；英国等地以 harvest home（晚夏-秋）标记收割完成并庆祝；六月的仲夏节（Midsummer/St John''s Day）在欧洲多地与最长白昼重合',
    'relationship_to_solar_term': 'seasonal-experience',
    'relationship_reason': '无传播关系：欧洲收获时序独立于中国节气体系。可比较的是**相近农业阶段的时间经验**——都围绕"冬小麦何时熟、何时收"组织农事与节庆。芒种额外承载"收+种"双任务（麦收与稻作插秧同节，见三夏卡）并有黄经75°的历法定义与物候体系，欧洲六月麦收只是农事阶段，无对应的"抢种"制度。因此本条是"平行农时经验"的类比样本，不是"外国版芒种"，不得把六月收获节与芒种画等号。',
    'difference': '时序结构不同：芒种（6月5-7日）是"麦收起点+稻种死线"的双任务节点，欧洲南部六月麦收是单一收获环节；英国 harvest home 庆祝收割完成、会期在八九月，与六月无重合。制度形态不同：节气有天文定义、三候物候、农谚与习俗体系，欧洲收获庆祝依附宗教历（圣徒日/教堂收获感恩）或地方民俗，无太阳黄经刻度。气候机制亦不同：地中海冬雨夏干气候的麦作节奏与中国东部季风区"麦熟逢梅雨"的水热配置不同——芒种最关键的"收麦要赶在梅雨前"压力在欧洲南部不存在。',
    'similarity': '同处北半球冬小麦带的初夏收获阶段：都在六月前后面对"成熟-收割"的时间窗口，都发展出围绕麦收的时间经验与庆祝（收获完成仪式/农谚口诀），提示不同农区独立发展出对麦收时序的敏感。',
    'source_ids': ['source-medgrain-june-leads', 'source-britannica-harvesthome-leads'],
    'license': 'pending（农事时序本身为客观经验；两来源页面未直读，描述文本许可待核）',
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
    'findings': ['weak-source-low-confidence'],
    'notes': '来源仅搜索摘要/弱来源，证据不足；列needs-research',
  }
---

# 欧洲南部六月麦收 · 芒种的跨文化经验类比（GlobalExpression · Candidate）

> **状态：Candidate（候选表达）**——来源未直读（两个 search-excerpt 级源）、consent=pending。三要素：**Similarity** 同处北半球冬小麦初夏收获阶段的农时经验；**Difference** 芒种是"麦收+稻种"双任务节点且有天文定义/物候体系，欧洲六月只是收获环节之一，英格兰 harvest home 更在八九月，且地中海气候无"梅雨抢收"压力；**Relationship** 无传播关系的平行农时经验，写"相近农业阶段的时间经验"，不写"对应/等同/外国版"。不得进入正式对外内容。

## 研究问题

芒种"麦收"的农时内核在其他农业文化中有没有可比较（而非相对应）的表达？

## 证据与状态

线索级：仅检索摘要（[[04_sources/source-medgrain-june-leads|欧洲谷物收获时序线索]]、[[04_sources/source-britannica-harvesthome-leads|Britannica Harvest Home]]，两页均未直读）。"地中海六月完熟"（Ercoli 2014 的 GS90 日期）、"英国 harvest home 在八九月"等断言**全部待直读核验**。选题说明：本轮按诚实选项取"北半球六月麦收季"而非任何六月节庆本身——正是为了保留"欧洲经典收获节其实在晚夏"这一反直觉对照，防止"六月=外国收获节"式强行对应。

## 待人工确认

- 直读 Ercoli et al. 2014（PMC 开放获取）与 JRC MARS 公报，核地中海/北欧收获时序数据。
- 直读 Britannica "Harvest Home"（403 拦截，需换途径）与 Midsummer/St. John's Day 词条，确认六月份欧洲节庆与麦收的实际关联度（若有）。
- 跨文化顾问审核后决定是否保留/改写/替换本 Candidate。

## 修改记录

- 2026-09-16（第一轮）：建卡（Candidate）。按诚实选项原则选"六月麦收的农业阶段经验"，显式写入"harvest home 在八九月"的反锚点，避免"外国版芒种"叙事。

[[01_terms/09_芒种|芒种索引]] · [[03_notes/sci-mangzhong-sanxia-meiyu|三夏与梅雨]] · [[03_notes/trad-mangzhong-nongshi|农事与农谚]] · [[02_topics/global-expressions|世界文化表达]]
