---
schema_version: '0.1.0'
id: 'glob-chunfen-nowruz'
type: 'GlobalExpression'
title: '诺鲁孜节（Nowruz）：以天文春分为历法参照的新年（Candidate）'
solar_terms: ['chunfen']
season: 'spring'
dimensions: ['global-expressions', 'customs']
region: ['伊朗及中亚、高加索、中东、巴尔干、黑海盆地等地区（联合国页口径）']
period: '联合国页称庆祝历史超过3000年；2010年联大宣布3月21日为国际诺鲁孜节'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'low'
risk_level: 'high'
impact_level: 'global'
contested: false
source_ids: ['source-un-nowruz-day']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
claim:
  {
    'statement': '待核验：诺鲁孜节（Nowruz，意为"new day"）是以天文春分为时间基准的新年节日——联合国官方页："Nowruz, meaning ''new day'', marks the first day of spring and is celebrated on the day of the astronomical vernal equinox, which usually occurs on 21 March"，全球逾3亿人庆祝、历史逾3000年；2010年联大宣布3月21日为国际诺鲁孜节。与中国春分节气的关系仅为历法上同以春分点为自然参照，并不是同一个节日。',
    'exceptions': ['联合国页内部对 UNESCO 列入年份表述不一（2009/2016 并见），列入与扩展细节以 UNESCO 档案为准'],
  }
expression:
  {
    'schema_version': '0.1.0',
    'id': 'glob-chunfen-nowruz',
    'editorial_layer': 'community',
    'term_ids': ['chunfen'],
    'title': { 'zh-CN': '诺鲁孜节：以春分为历法参照的新年', 'en': 'Nowruz: a new year reckoned by the vernal equinox' },
    'location': '伊朗及中亚、高加索、中东、巴尔干、黑海盆地等地区（联合国页口径）',
    'country': '跨国家多民族共享节日（联合国页未列全名单）',
    'region': '西亚/中亚/高加索/巴尔干',
    'culture': '波斯历法传统及其传播区域的新年文化（联合国页："celebrated by more than 300 million people"）',
    'creators': [{ 'name': '相关各国社区民众（无个人作者）', 'url': null, 'role': 'community' }],
    'time_period': '联合国页称庆祝历史超过3000年；国际诺鲁孜节设立于2010年',
    'natural_context': '天文春分（vernal equinox）：太阳直射赤道、北半球春季开始、昼夜近乎均分',
    'cultural_expression': '辞旧迎新、迎接春季与自然更新的新年庆典（联合国页未详列仪式细节，具体习俗不作转述）',
    'relationship_to_solar_term': 'shared-nature',
    'relationship_reason': '历法上都以春分点为参照：联合国页明言 Nowruz "is celebrated on the day of the astronomical vernal equinox"，与中国春分节气（太阳到达黄经0°、直射赤道）指向同一天文事件。但这是共享自然参照的平行时间实践，并不是同一个节日，也无传播同源关系的证据。',
    'difference': 'Nowruz 是新年节日体系（意为"new day"的新年庆典，跨多国多民族、历时逾3000年）；中国春分是二十四节气体系中的一个节气而非新年（传统新年为农历正月初一）。二者体系形态、文化内涵与庆祝方式均属两套独立发展',
    'similarity': '都以春分（太阳直射赤道、昼夜近乎均分的天文事件）作为春季起点的时间坐标，都包含辞旧迎新、迎接自然更新的主题',
    'source_ids': ['source-un-nowruz-day'],
    'license': 'pending（联合国页内容引用注明出处；表达层许可与社区确认待办）',
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
    'findings': ['全球候选保持candidate，不入首版'],
    'notes': 'GlobalExpression按Content Gate规程维持hold',
  }
---

# 诺鲁孜节（Nowruz）· GlobalExpression（Candidate）

> **状态：Candidate（候选表达）**——三要素：**Similarity** 同以春分点（天文春分）为春季起点的时间坐标，主题皆含辞旧迎新；**Difference** Nowruz 是逾3000年、3亿人规模的新年节日体系，春分是中国二十四节气之一而非新年，两套体系独立发展；**Relationship** 仅是历法上共享同一自然参照（vernal equinox）的平行实践，并不是同一个节日。不得进入正式对外内容。

## 研究问题

春分点作为时间坐标是否在中国节气体系之外被其他文明独立使用？可比样本是什么？

## 证据与状态

联合国官方节日页已直读（[[04_sources/source-un-nowruz-day|source-un-nowruz-day]]，institutional）：导语级事实（以 astronomical vernal equinox 为基准、通常3月21日、3亿人、逾3000年、2010年联大设国际日）可用；页面内部 UNESCO 年代表述不一致（2009/2016 并见），列入谱系待 UNESCO 档案核对；仪式细节（如七鲜桌等）未在联合国页出现，本卡不作转述。

## 待人工确认

- UNESCO 名录页/决议文件核对 Nowruz 列入与扩展年份（ich.unesco.org 本环境已知拦截）。
- 跨文化顾问审阅三要素表述；波斯历法（太阳历）与中国节气（黄道24等分）的机制差异表述是否需要专卡。

## 修改记录

- 2026-09-16（首轮批研究）：建卡。联合国页 direct-read（导语级事实）+三要素齐全；按规范保持 epistemic unverified/confidence low/consent pending 的 Candidate 状态。

[[01_terms/04_春分|春分索引]] · [[02_topics/global-expressions|世界文化表达]]
