---
schema_version: '0.1.0'
id: 'glob-xiaohan-plough-monday'
type: 'GlobalExpression'
title: '英格兰耕犁星期一：主显节后的农业年重启（Candidate）'
solar_terms: ['xiaohan']
season: 'winter'
dimensions: ['global-expressions', 'customs', 'agriculture']
region: ['英格兰（东盎格利亚与东米德兰兹为主要流传区，据检索摘要）']
period: '习俗可溯至中世纪晚期/近代早期英格兰（据检索摘要）；今有复兴实践'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'low'
risk_level: 'high'
impact_level: 'global'
contested: false
source_ids: ['source-historicuk-plough-monday']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
claim:
  {
    'statement': '待核验：英格兰"耕犁星期一"（Plough Monday）为主显节（1月6日）后第一个周一，被视为英格兰传统农业年之始——圣诞假期结束、农事重启之日，习俗含犁具运至教堂祝福、拖装饰犁巡村、Molly 舞与化装募捐等。',
    'exceptions': ['仅检索摘要级来源（Historic UK 页面未直接读取），断代与当代复兴范围均待核验'],
  }
expression:
  {
    'schema_version': '0.1.0',
    'id': 'glob-xiaohan-plough-monday',
    'editorial_layer': 'community',
    'term_ids': ['xiaohan'],
    'title': { 'zh-CN': '耕犁星期一（主显节后的农业年重启）', 'en': 'Plough Monday: restart of the English farming year after Epiphany' },
    'location': '英格兰（东盎格利亚、东米德兰兹等地，据检索摘要）',
    'country': '英国',
    'region': '西欧',
    'culture': '英格兰民间农事传统（基督教历框架下的岁首农俗）',
    'creators': [{ 'name': '英格兰乡村社区（无个人作者）', 'url': null, 'role': 'community' }],
    'time_period': '中世纪晚期/近代早期起（据检索摘要）；今有地方复兴（待核验）',
    'natural_context': '深冬：圣诞后的1月上旬，白昼已明显回长但仍寒冷，传统农闲结束、备耕重启',
    'cultural_expression': '主显节后第一个周一日，犁具装饰后拖行巡村、或运至教堂祝福，plough boys 化装挨户募捐（不捐者田地被"犁"一下的玩笑式惩罚），东盎格利亚有 Molly 舞与 plough plays',
    'relationship_to_solar_term': 'nearby-time',
    'relationship_reason': '两者同处公历1月上旬的深冬时间窗（小寒1月5日或6日交节；Plough Monday 在1月6日主显节后的第一个周一），都把"一年中最冷的时节"组织成有秩序的社会时间——但这是各自文化的独立时间实践，无传播或派生关系，也不是"英国版小寒"。',
    'difference': '时间机制不同：小寒锚太阳黄经（阳历刻度），Plough Monday 锚基督教历（主显节+周一规则）；文化动作相反：小寒时段的中国民俗主题是御寒、进补、备年（农闲收官，见食俗卡/三九卡），Plough Monday 主题是农事重启（犁出第一犁）；前者数着日子熬冬（九九消寒图），后者数着日子开春。',
    'similarity': '都在深冬用确定的日期给社群一个共同的行动信号；都以自己的历法体系（太阳黄经 / 教历）在"天仍很冷"的时段预置了"春天已被安排"的时间秩序。',
    'source_ids': ['source-historicuk-plough-monday'],
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

# 耕犁星期一 · Plough Monday（GlobalExpression · Candidate）

> **状态：Candidate（候选表达）**——表达层草稿，来源未直读、consent=pending。三要素：**Similarity** 同在公历1月上旬深冬用确定日期给社群共同行动信号；**Difference** 历法锚（黄经 vs 教历）与文化动作（御寒备年 vs 农事重启）均不同；**Relationship** 独立平行的时间实践（nearby-time 时段相邻），无传播关系，不是"外国版小寒"。不得进入正式对外内容。

## 研究问题

深冬时间秩序是不是中国独有的文化发明？1月上旬这个时间窗在其他文化里如何被组织？

## 证据与状态

线索级：仅依据检索摘要（[[04_sources/source-historicuk-plough-monday|source-historicuk-plough-monday]]，Historic UK 页未直读；同题线索 Wikipedia/JSTOR Daily/Weald & Downland 博物馆均未直读）。"主显节后第一个周一""英格兰农业年之始"两断言必须直接读取后核验。

## 待人工确认

直接读取 Historic UK 页与学术来源（JSTOR Daily 文、民俗学研究）；核验断代（中世纪晚期说起）与当代复兴范围；按 vault 规范获得跨文化顾问/社区确认后才可脱离 Candidate。

## 修改记录

- 2026-09-16（建卡）：Candidate 建卡；三要素齐备，relationship 用协议枚举 nearby-time；差异面明确写入"御寒备年 vs 农事重启"的反向对照，防"外国版节气"叙事。

[[01_terms/23_小寒|小寒索引]] · [[02_topics/global-expressions|世界文化表达]]
