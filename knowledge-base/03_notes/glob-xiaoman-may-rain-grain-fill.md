---
schema_version: '0.1.0'
id: 'glob-xiaoman-may-rain-grain-fill'
type: 'GlobalExpression'
title: '中欧五月雨农谚：相近麦作生长阶段的盼雨表达（Candidate）'
solar_terms: ['xiaoman']
season: 'summer'
dimensions: ['global-expressions', 'agriculture']
region: ['中欧（欧洲冬小麦产区）']
period: '农谚流传年代未考（线索级）'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'low'
risk_level: 'high'
impact_level: 'global'
contested: false
source_ids: ['source-cozasadit-may-rain-proverb']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
claim:
  {
    'statement': '待核验：中欧园艺天气谚语汇集页收有义为"Good May rain supplies the soil with moisture for the whole summer and promises a generous harvest"（五月雨滋润土壤一夏、许诺丰收）的农谚；中欧为欧洲冬小麦主产区之一，五月正值麦类灌浆-乳熟阶段，与中国特色农谚对小满时节的盼雨/怕灾（"小满不满，麦有一险"）处于**相近的农业阶段**。',
    'exceptions': ['仅检索摘要级来源（页面未直接读取），谚语原句语种（德语/捷克语）、书证年代与流传地域均未核验'],
  }
expression:
  {
    'schema_version': '0.1.0',
    'id': 'glob-xiaoman-may-rain-grain-fill',
    'editorial_layer': 'community',
    'term_ids': ['xiaoman'],
    'title': { 'zh-CN': '中欧五月雨农谚（五月雨许诺丰收）', 'en': 'Central European May-rain proverbs: rain for the grain' },
    'location': '中欧（欧洲中部冬小麦产区，具体国家分布未核验）',
    'country': '中欧（多国地区，非单一国家）',
    'region': '欧洲',
    'culture': '欧洲农耕气象民俗（农谚传统）',
    'creators': [{ 'name': '中欧农耕民间传统（无个人作者）', 'url': null, 'role': 'community' }],
    'time_period': '流传年代未考（待核验）',
    'natural_context': '五月：欧洲冬小麦灌浆-乳熟期，土壤水分决定收成',
    'cultural_expression': '农谚："好五月雨滋润整个夏季的土壤并许诺丰收"（Good May rain... promises a generous harvest，检索摘要转述）',
    'relationship_to_solar_term': 'seasonal-experience',
    'relationship_reason': '相近季节经验+农业阶段平行（非"外国版小满"：欧洲无节气历法体系）。平行点是：北半球温带冬小麦带在五月同处灌浆-乳熟阶段，两地农谚都把此时的降水状况与收成预期绑定。历法体系、命名方式、物候清单完全不同。',
    'difference': '中国"小满"是太阳黄经60°的历法节点+七十二候物候体系+节俗系统；中欧谚语只是气象经验押韵句，无历法地位、无固定交节时刻、无配套节俗。且中国北方麦区小满农谚强调"怕灾"（干热风）甚于"盼雨"，语义并不对称',
    'similarity': '都以五月下旬前后麦类"将熟未熟"阶段的降水/天气为言说对象，都以丰收为期许；时间窗与作物发育期重合',
    'source_ids': ['source-cozasadit-may-rain-proverb'],
    'license': 'pending（谚语本身为民间传统；描述文本的来源许可待核）',
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

# 中欧五月雨农谚 · GlobalExpression（Candidate）

> **状态：Candidate（候选表达）**——表达层草稿，来源未直读、consent=pending。三要素：**Similarity** 同以北半球五月麦类灌浆-乳熟阶段的降水为言说对象、以丰收为期许；**Difference** 中国小满是历法节点+物候体系+节俗系统，中欧谚语仅是气象经验句，且中国北方麦谚语义偏"怕灾"（干热风）非"盼雨"；**Relationship** 是**农业阶段平行**（agricultural-parallel），不是对应节气、不是同一体系。不得进入正式对外内容。

## 研究问题

小满"将满未满"的麦作阶段经验，在其他农业文明中有无平行（非对应）表达？

## 证据与状态

线索级：仅检索摘要（[[04_sources/source-cozasadit-may-rain-proverb|source-cozasadit-may-rain-proverb]]，页面未直接读取）。北半球冬小麦五月灌浆的农学时间窗另有 AHDB/堪萨斯州立等农学页检索摘要旁证（同属未直读，不单独建源）。**必须直接读取谚语原文（德语/捷克语原句）与权威农学/民俗来源后方可用于正式内容。**

## 待人工确认

- 谚语原句与语种溯源（德国/捷克/波兰农谚集）；五月雨谚与"再生之雨"类欧洲民俗的谱系区分。
- 中国"小满大满江河满"（华南）与中欧五月雨谚的比较是否成立（防跨文化强行对应：本卡 relationship 已限定 agricultural-parallel）。

## 修改记录

- 2026-09-16（第一轮）：建卡为 Candidate。relationship 用 agricultural-parallel 显式否定"对应节气"叙事；仅 search-excerpt 源、confidence low。

[[01_terms/08_小满|小满索引]] · [[02_topics/global-expressions|世界文化表达]] · [[03_notes/sci-xiaoman-grainfill-dryhotwind|灌浆与干热风]]
