---
schema_version: '0.1.0'
id: 'trad-chunfen-nongshi'
type: 'Tradition'
title: '春分农事与农谚："春分麦起身，一刻值千金"与春播大忙'
solar_terms: ['chunfen']
season: 'spring'
dimensions: ['agriculture', 'climate']
region: ['农谚为黄河-江淮麦作区经验（"春分麦起身"）；非遗网另按东北华北西北/江南分述，地域归属未逐条标注']
period: '农谚为传统农事经验（传承年代未确证）；机构表述为当代农事口径'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  ['source-weather-com-cn-chunfen', 'source-ihchina-chunfen-feature', 'source-ihchina-anren-ganfenshe']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review:
  {
    'reviewer': 'aiwindyjm',
    'reviewed_at': '2026-09-28',
    'decision': 'approved',
    'notes': 'Owner-authorized batch approval based on AI pre-review',
  }
claim:
  {
    'statement': '春分是春播与春管的农忙节点：中国天气网专题称"春分后气温明显回升，是各种春种作物播种、种植的大忙季节"；农谚"春分麦起身，一刻值千金"同时见于非遗网安仁赶分社项目页（正文引）与中国天气网（"春分麦起身 肥水要紧跟"标题级），指冬小麦起身拔节、肥水管理进入关键期。非遗网春分专题另收录"春分有雨到清明""春分不暖，秋分不凉"等谚语群——农谚属传统经验知识（tradition 层），其天气预示不作为科学气候结论引用。',
    'exceptions': [
      '谚语群的地域归属未逐一标注（"春分麦起身"为麦作区经验，直接套用于华南、东北会失真）',
      '"清代就有春分前后种树的明确记载"及"夜半饭牛呼妇起，明朝种树是春分"诗句出处为非遗网页口径，诗句作者与文本未直读核对',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': ['一手来源（GB/T正文/标准全文）未直读，已在exceptions登记；降级处理'],
    'notes': 'REVISE→APPROVE：pending-primary-source不影响命题正确性（已有多独立直读源），待核来源列入人审条件',
  }
---

# 春分农事与农谚

## 研究问题

春分在农事年历中处于什么位置？"春分麦起身"是什么经验？

## 证据（原文与定位）

1. **直读机构页**：中国天气网春分专题（[[04_sources/source-weather-com-cn-chunfen|source-weather-com-cn-chunfen]]）："春分后气温明显回升，是各种春种作物播种、种植的大忙季节，可谓'春'分'得意，农事繁忙'。"文章标题级内容含"春分麦起身 肥水要紧跟""春分气象条件与农事活动""春分节气果树生产农事要领"。
2. **直读名录页**：非遗网安仁赶分社项目页（[[04_sources/source-ihchina-anren-ganfenshe|source-ihchina-anren-ganfenshe]]）："春分是二十四节气之一，农谚说'春分麦起身，一刻值千金。'"——该谚与"吃药开耕"（食药膳后下田开耕）在同一文本中并置，农谚直接服务于春分开耕动员。
3. **直读机构页**：非遗网春分专题（[[04_sources/source-ihchina-chunfen-feature|source-ihchina-chunfen-feature]]）农谚群："春分有雨到清明，清明下雨无路行""春分不暖，秋分不凉""春分前冷，春分后暖；春分前暖，春分后冷""春分西风多阴雨""春分大风夏至雨"等；并称"'二月惊蛰又春分，种树施肥耕地深。'春分是植树的上好时机，清代就有'夜半饭牛呼妇起，明朝种树是春分'的诗句"。

## AI 摘要 / 解释

- **"春分麦起身，一刻值千金"是双源独立直读的农谚锚点**（安仁名录页正文引 + 中国天气网标题级），语义清楚：冬小麦经越冬返青后进入起身拔节期，肥水管理"一刻值千金"。
- 农谚群的句式几乎全是**天气预示型**（春分有雨/无雨→清明天气；春分冷暖→秋分冷暖），这是"经验概率"的传统知识形态，现代农业气象学对其验证率的研究未建卡。
- 与安仁赶分社（[[03_notes/region-chunfen-anren-ganfenshe|安仁卡]]）互证：春分"吃药开耕"的地方仪式与通用农谚"春分麦起身"共同构成"春分=春耕动员"的证据面。

## 适用条件、例外与分歧

谚语的地域性是最大适用条件（麦作区经验不能泛化为全国气候规律）；"倒春寒"风险（非遗页：早稻烂秧）与"春旱"（北方）在页内按大区分述，引用时保留其地域限定。无跨来源直接冲突。

## 关联

[[01_terms/04_春分|春分索引]] · [[03_notes/region-chunfen-anren-ganfenshe|安仁赶分社]] · [[02_topics/agriculture|农业维度]] · [[02_topics/climate|气候维度]]

## 待人工确认

- "夜半饭牛呼妇起"诗句作者/文集直读（页称清代）；农谚验证率的现代农气研究；分地域农事历（华北/江南/华南）的专门来源。

## 修改记录

- 2026-09-16（首轮批研究）：建卡。"春分麦起身"获两个独立直读来源；谚语群标 tradition 层、不作科学断言；诗句出处列为待核。
- 2026-09-16（审核阶段）：路由 human-review-required（finding：pending-primary-source——"夜半饭牛呼妇起"诗句出处未直读核对，保留该待办），状态 draft → in-review。见 [[07_research/sections/review-chunfen|春分审核分节]]。
