---
schema_version: '0.1.0'
id: 'sci-lichun-calendar-position'
type: 'ScientificFact'
title: '立春在历法中的位置：正月之"节"，与正月初一相互独立'
solar_terms: ['lichun']
season: 'spring'
dimensions: ['calendar']
region: ['中国']
period: '现行历法口径；"正月节"对应属传统月令框架'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'medium'
contested: false
source_ids: ['source-pmo-almanac-qa', 'source-ihchina-lichun-feature', 'source-yueling-qishierhou-wikisource']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-18'
human_review:
  {
    'reviewer': 'aiwindyjm',
    'reviewed_at': '2026-09-28',
    'decision': 'approved',
    'notes': 'Owner-authorized batch approval based on AI pre-review',
  }
claim:
  {
    'statement': '立春属二十四节气中"节气"一组（非中气），在传统月令框架中对应正月之节（"立春，正月节"）；但它与农历正月初一在历法上相互独立——立春固定在公历2月3-5日附近，而春节在1月21日至2月20日间移动，同一农历年可出现两个立春（双立春）或没有立春（无春年），立春也可能落在农历腊月（如2018年2月4日=丁酉年腊月十九）。',
    'exceptions': [
      '"立春总在正月"是月令理想对应，不是每年历法事实，引用时必须区分',
      '双立春/无立春的成因（春节移动范围 vs 立春固定）来自PMO科普问答，具体年份历表数据未逐年核验',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=low/A/独立3；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 立春在历法中的位置

## 研究问题

立春与农历正月初一（春节）是什么关系？"立春是春天/正月开始"在历法意义上是什么？

## 证据（原文与定位）

- 紫金山天文台问答（已读，[[04_sources/source-pmo-almanac-qa|source-pmo-almanac-qa]]）：节气属阳历范畴、农历置闰机制、春节与立春错动的双立春/无立春现象。
- 非遗网立春专题（已读，[[04_sources/source-ihchina-lichun-feature|source-ihchina-lichun-feature]]）："每年2月3日至5日，太阳到达黄经315°时为立春。2018年的立春时间是2月4日（农历丁酉年腊月十九）。"——**立春可以不在正月**的直读实例。
- 《月令七十二候集解》（已读）："立春，正月節。"——"正月节"是古典月令框架的对应表述。

## AI 摘要 / 解释

三层区分，缺一不可：

1. **月令/礼制层（传统框架）**：古典文献把立春配为"正月节"，与雨水（正月中）成对——这是理想化的月令秩序。
2. **历法事实层**：农历月按朔望编排、年按置闰伸缩，立春按太阳黄经运转；两者只近似同步。春节在公历上大幅移动而立春几乎不动，于是出现"双立春年""无立春年"以及立春落腊月的情形。
3. **概念层**："立春是春天的开始"指**天文/节气意义的春**（太阳黄经315°起的季节象限），不是气象学入春（见 [[03_notes/sci-lichun-vs-meteorological-spring|两套春的定义]]），也不必然等于"农历正月开始了"。

对外解释时最易犯错点：把"立春=正月第一天"或"立春=春节"当作事实——两者都不成立。

## 适用条件、例外与分歧

无实质分歧。"无春年不宜结婚"一类民间说法属民俗禁忌传说，与历法事实无关，本库不收录为事实。

## 关联

[[01_terms/01_立春|立春索引]] · [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]] · [[03_notes/sci-lichun-longitude-315|立春天文定义]] · [[02_topics/calendar|历法维度]]

## 待人工确认

2018年立春=丁酉年腊月十九的实例句来自非遗网立春专题一处直读；PMO 问答页支持历法机制（朔日定初一、双立春/无立春成因）但不包含该具体日期句（2026-09-18 复核更正：原"两处独立直读"表述不准确）。历表逐项核验建议人审时用《中国天文年历》复核。

## 修改记录

- 2026-09-18（复核收口）：2018 实例证据归属更正——实例句唯一来源为非遗网（直读原句在卡内证据区），PMO 仅支持机制；见 docs/research/lichun-review-readiness-verification-2026-09-18.md 小范围后续改进。
- 2026-09-17（质量修正 F01 传播点）：删除"（单数位，非中气）"——"单数位"依赖计数起点（从立春起算成立、从冬至起算不成立），沿自旧版共享卡的奇偶口令，已随 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]] 修正一并废弃，改为直接表述"节气一组（非中气）"。
