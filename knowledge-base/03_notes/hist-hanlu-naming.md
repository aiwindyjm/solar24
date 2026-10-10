---
schema_version: '0.1.0'
id: 'hist-hanlu-naming'
type: 'HistoricalRecord'
title: '寒露的命名：《月令七十二候集解》"露氣寒冷，將凝結也"与白露命名的对偶递进'
solar_terms: ['hanlu']
season: 'autumn'
dimensions: ['history', 'phenology', 'scientific-interpretation']
region: ['文本经验锚定中国（黄河流域为核心的古典文本传统）']
period: '《月令七十二候集解》传统题名元代；所承物候体系更早'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-yueling-qishierhou-wikisource', 'source-ihchina-hanlu-feature']
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
    'statement': '《月令七十二候集解》寒露定义句为"寒露，九月節。露氣寒冷，將凝結也"——命名的观察层是露气寒冷、将要凝结。它与白露定义句"秋屬金，金色白，陰氣漸重，露凝而白也"构成同一露意象的递进对偶：白露言阴气渐重、露凝而白，寒露言露气寒冷、将凝结；机构稿把这一递进今译为"寒露时的气温比白露时更低，地面的露水快要凝结成霜了"（非遗网），"相对于白露而言，寒露期间气候更凉，气温更低"（新华社2021）。新华社2021稿并称寒露为"二十四节气中第一个带寒字的节气"。',
    'exceptions': [
      '白露定义句含五行配属解释层（秋屬金，金色白），寒露定义句无此成分、纯为观察描述——两节气命名的解释层次不同，分层引用',
      '"第一个带寒字的节气"为新华社2021稿依节气名序列的表述（寒露之前无带"寒"字的节气名），属序列事实的媒体表述',
      '"九月節"的"九月"是农历月序标签（寒露与农历九月的对应随置闰漂移），节/中气分组机制见共享卡',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 寒露的命名（古籍直读）

## 研究问题

"寒露"这个名字在古籍原文中如何解释？它与"白露"的命名是什么关系？

## 证据（原文与定位）

1. **已直接读取**：《月令七十二候集解》寒露节首句（[[04_sources/source-yueling-qishierhou-wikisource|月令七十二候源]]，维基文库本，本代理本轮重抓）：

   > "寒露，九月節。露氣寒冷，將凝結也。"

2. **已直接读取**：同书白露节首句（对照段，同页直读）：

   > "白露，八月節。秋屬金，金色白，陰氣漸重，露凝而白也。"（详见 [[03_notes/hist-bailu-naming|白露命名卡]]）

3. **已直接读取**：非遗网寒露专题（[[04_sources/source-ihchina-hanlu-feature|source-ihchina-hanlu-feature]]）引《月令七十二候集解》"九月节，露气寒冷，将凝结也"并今译"寒露时的气温比白露时更低，地面的露水快要凝结成霜了"——引文与维基文库本一致（省"寒露"二字起首）。

## AI 摘要 / 解释

- **命名对偶的观察链条**：白露→寒露→霜降三节气的命名沿"露"的物态递进展开——阴气渐重、露凝而白（白露）→露气寒冷、将凝结（寒露）→露凝结为霜（霜降之名）。寒露处"将凝未凝"的临界点：暑气尽、寒意显，但尚未到成霜。这条命名链是古人用同一自然现象（露）为深秋三个时段刻度的连续观察，构成一条可讲述的"露的三部曲"（现代气象学对应露点与霜点的区分，见 [[03_notes/sci-hanlu-cooling-transition|由凉转寒]]，两卡分层互引）。
- **寒露定义句没有五行成分**：与白露句"秋屬金，金色白"不同，寒露句是纯观察描述——"寒"直接命名体感与露温。这使寒露成为二十四节气中第一个以"寒"命名的节点（媒体表述，依序列成立），语言上标记了从"凉"到"寒"的换挡。
- "将凝结也"三字精确：不是已凝（那是霜降的事），而是将要凝结——命名即温度预报的临界描述。

## 适用条件、例外与分歧

- 引文警戒：非遗网引文作"九月节，露气寒冷，将凝结也"（省"寒露"起首、用简体），与原书繁体全文一致，无实质异文；引用时以维基文库本为准。
- "露气寒冷"是古典阴阳框架下的表达（气、凝结），与现代辐射冷却解释框架不同，两卡分层引用不混排。

## 关联

[[01_terms/17_寒露|寒露索引]] · [[03_notes/hist-yueling-hanlu-pentads|寒露三候]] · [[03_notes/hist-bailu-naming|白露命名（对偶上联）]] · [[03_notes/sci-hanlu-cooling-transition|由凉转寒（现代气候层）]] · [[02_topics/history|历史维度]]

## 待人工确认

- 《礼记·月令》季秋之月段是否有"寒露"作为现象名的平行文本（本轮已读孟秋"白露降"段，季秋段未核）。
- 《吕氏春秋·季秋纪》平行文本比对（未读）。

## 修改记录

- 2026-09-16（第一轮）：建卡。寒露与白露定义句均为本轮逐字直读；"三部曲"递进为跨卡对照的解释性归纳（依两直读文本），不引入未读文献。
