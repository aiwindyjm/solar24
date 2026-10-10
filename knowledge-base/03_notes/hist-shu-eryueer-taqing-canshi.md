---
schema_version: '0.1.0'
id: 'hist-shu-eryueer-taqing-canshi'
type: 'HistoricalRecord'
title: '宋蜀中"二月二踏青节"与蚕市：地方节令实践的宋人记载'
solar_terms: ['jingzhe', 'chunfen']
season: 'spring'
dimensions: ['customs', 'regional-differences', 'history']
region: ['中国四川（成都平原：万里桥-宝历寺；眉州；同州蚕市条另核）']
period: '宋（北宋张咏帅蜀事至宋末辑录）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'regional'
contested: false
source_ids: ['source-wikisource-suiguangji']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-25'
updated: '2026-09-25'
human_review:
  {
    'reviewer': 'aiwindyjm',
    'reviewed_at': '2026-09-28',
    'decision': 'approved',
    'notes': 'Owner-authorized batch approval based on AI pre-review',
  }
claim:
  {
    'statement': '《岁时广记》卷一（直读）载宋蜀中地方节俗：①《壶中赘录》「蜀中風俗舊以二月二日爲踏青節，都人士女絡繹遊賞」；②北宋张咏（乖崖公）帅蜀时改分散游赏为官府组织「遊江」——「自萬里橋以錦繡器皿結綵舫十數…郡人士女駢於八九里間縱觀如堵，抵寶歷寺橋出讌於寺內，寺前剏一蠶市」；③《四川記》同州二月二/二月八日蚕市「四逺村民畢集，應蠶農所用…皆至」；④苏辙蠶市诗序「眉人以二月望日鬻蠶器謂之蠶市」并苏轼诗「蜀人衣食常苦艱…閒時尚以蠶爲市」。',
    'exceptions': [
      '全部锚定农历二月二/二月望，不锚定节气日——与惊蛰/春分仅时段相邻，不得写成"惊蛰/春分习俗"',
      '《壶中赘录》《四川记》为宋人笔记（转引层），原书待核；眉山蚕市在二月望非二月二，同卷两说并存',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/B/独立1；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 宋蜀中二月二踏青节与蚕市

## 研究问题

惊蛰-春分相邻时段（农历二月）的地方节令实践有什么一手宋代记载？"二月二"作为节日的锚定方式是什么？

## 证据（原文与定位）

《岁时广记》卷一（直读），四条如 claim 所引，另录张仲殊词《成都好·蠶市》「夜放笙歌喧紫陌，春邀燈火上紅樓…人散後繭館喜綢繆」。

## AI 摘要 / 解释

- 本卡是"农历日锚定 vs 节气锚定"分层的又一实证样本（同广汉拉保保=正月十六）：宋代地方节俗大量按**农历日**（二月二/二月望）而非节气运转；节气时段只提供季节背景。
- 张咏"遊江"改革展示了官方如何重组民间节俗（分散→集中、防治安之虞转为官办宴游），与 [[02_shared/hist-quannong-institutional-chain|劝农制度链]] 的"官府组织节令活动"主题同构。
- 蚕市=蚕具交易+游乐的市集形态，是"节气时段×农事×市井经济"三合一的地方实践，成都蚕市延续史待另卡（当代"蚕市"遗存 needs-research）。

## 适用条件、例外与分歧

地域限定蜀中（成都/眉山/同州各条）；时代限定宋。两处蚕市日期不同（二月二 vs 二月望）如实并存，不作调和。

## 关联

[[01_terms/03_惊蛰|惊蛰索引]] · [[01_terms/04_春分|春分索引]] · [[03_notes/region-guanghan-yushui-baobaojie|广汉拉保保（农历日锚定对照）]] · [[02_topics/regional-differences|地域差异]] · [[02_topics/customs|民俗维度]]

## 待人工确认

- 《壶中赘录》《四川记》原书与张咏事在《宋史·张咏传》/《乖崖集》的平行记载核对。
- 成都二月二习俗的后世流变（"踏青节"与"龙抬头"名目的关系不在本卡证据内，needs-research）。

## 修改记录

- 2026-09-25（R22，第二轮）：建卡（岁时广记卷一直读）。
