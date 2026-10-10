---
schema_version: '0.1.0'
id: 'glob-setsubun-early-february'
type: 'GlobalExpression'
title: '日本节分：以"立春前日"为坐标的季节分界仪式（Candidate）'
solar_terms: ['lichun']
season: 'spring'
dimensions: ['global-expressions', 'customs']
region: ['日本']
period: '习俗定型于室町时代（据检索摘要）；延续至今'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'low'
contested: false
source_ids: ['source-wikipedia-setsubun']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
claim:
  {
    'statement': '待核验：日本"节分"（Setsubun）意为"季节分界"，特指旧历立春前一日（今约公历2月3日），当日举行撒豆驱鬼（ mamemaki ）等仪式。',
    'exceptions': ['仅检索摘要级来源，页面未直接读取'],
  }
expression:
  {
    'schema_version': '0.1.0',
    'id': 'glob-setsubun-early-february',
    'editorial_layer': 'community',
    'term_ids': ['lichun'],
    'title': { 'zh-CN': '节分（立春前日的撒豆仪式）', 'en': 'Setsubun: the eve of Risshun (Beginning of Spring)' },
    'location': '日本（全国性习俗，各地神社寺庙与家庭）',
    'country': '日本',
    'region': '东亚',
    'culture': '日本民俗传统；立春（Risshun）概念随汉字历法体系传入',
    'creators': [{ 'name': '日本民间传统（无个人作者）', 'url': null, 'role': 'community' }],
    'time_period': '习俗定型于室町时代（1392-1573，待核验）；延续至今',
    'natural_context': '旧历立春前夜：冬春交替、季节分界',
    'cultural_expression': '撒炒豆（福豆）驱鬼，喊"鬼は外、福は内"（鬼出去，福进来）；吃与年龄同数的豆子',
    'relationship_to_solar_term': 'same-time',
    'relationship_reason': '节分以从中国传入的"立春"为直接参照点：即立春的前一日。这是历法传播关系，不是平行发明。',
    'difference': '仪式内容（撒豆驱鬼，源于追傩）与中国立春习俗（迎春、鞭春、咬春）不同；日本节气体系未发展出与二十四节气农事深度绑定的同形态民俗',
    'similarity': '都以"立春"为季节转换的仪式化时间标记；都表达辞旧迎新、驱邪纳福',
    'source_ids': ['source-wikipedia-setsubun'],
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

# 节分 · 立春前日（GlobalExpression · Candidate）

> **状态：Candidate（候选表达）**——表达层草稿，来源未直读、consent=pending。三要素：**Similarity** 同以"立春"为季节转换的仪式化标记，表达辞旧迎新；**Difference** 仪式内容（撒豆驱鬼）与中国立春习俗不同，且日本未发展出与农事深度绑定的同形态民俗；**Relationship** 是汉字历法文化圈内的**传播关系**（节分以传入的"立春"为参照点），不是平行发明，也不是"同一个节日"。不得进入正式对外内容。

## 研究问题

立春概念在汉字文化圈的传播中产生了什么变形实践？

## 证据与状态

线索级：仅依据检索摘要（[[04_sources/source-wikipedia-setsubun|source-wikipedia-setsubun]]，未读原文）。"same-time"关系（节分=立春前日）是本条目最有价值的断言，**必须直接读取日文/英文权威来源核验后**才可用于正式内容。

## 待人工确认

直接读取 Wikipedia 词条或日本权威来源（国立国語研究所、神社本厅等）；确认日语语境中"節分"从泛指四季节分收窄为立春前日的历史过程；按 vault 规范获得跨文化顾问/社区确认后才可脱离 Candidate。

## 修改记录

- 2026-09-16（第三阶段·协议）：expression.status 由 draft 改为 candidate（协议枚举正式支持），正文 Candidate 语义不变。
- 2026-09-16（模型复盘）：从"线索级草稿"显式降级为 **Candidate**，并在开头补齐 Similarity / Difference / Relationship 三要素声明块。原因：GlobalExpression 的 expression.status 枚举暂无 candidate 值，以正文标注承载；防止把节分当作立春的"外国对应节日"使用。研究内容未删改。

[[01_terms/01_立春|立春索引]] · [[03_notes/interp-global-early-february-marks|跨文化比较框架]] · [[02_topics/global-expressions|世界文化表达]]
