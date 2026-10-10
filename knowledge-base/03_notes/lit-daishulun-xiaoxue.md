---
schema_version: '0.1.0'
id: 'lit-daishulun-xiaoxue'
type: 'CulturalFact'
title: '戴叔伦《小雪》：以节气字面为题的唐诗文本（附归属异说与异文）'
solar_terms: ['xiaoxue']
season: 'winter'
dimensions: ['literature-art']
region: ['中国']
period: '唐（戴叔伦，732-789，生卒年待复核）；文本录自《全唐诗·卷274》；《文苑英华》成书于北宋984年'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-daishulun-xiaoxue', 'source-wikisource-wenyuan-xiaoxue']
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
    'statement': '《全唐诗·卷274》收戴叔伦七言绝句《小雪》："花雪隨風不厭看，更多還肯失【一作『恐蔽』】林巒。愁人正在【書，一作『西』】窗下，一片飛來一片寒。"这是本轮直读到的唯一以节气"小雪"二字为题的古典诗歌：诗写初雪随风、掩映林峦的景与"愁人"对"一片寒"的感受，属节令题名下的抒情诗，不含节气义理表述。北宋《文苑英华》卷155（四库本）同收此诗，作者栏题"戴叔倫"而夹注"類詩作釋清晝"（《类诗》一系归于僧人释清昼，即皎然），且"失"字下注"類詩作蔽"——作者归属与关键异文在早期文献中即有两说，引用需注版本。',
    'exceptions': [
      '两个所据页面同为维基文库托管（全唐诗系作品页+四库本文苑英华页），按同托管方规则不构成独立交叉，confidence 上限 medium',
      '作者归属（戴叔伦/释清昼）是文献学未决问题，本卡不裁决；《全唐诗》成书（清康熙）晚于《文苑英华》（北宋）约七百年，两系源流待版本学家核',
      '诗题"小雪"是否即节气义（而非泛咏小雪之雪），诗内无内证，属合理解读而非确证',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=low/B/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 戴叔伦《小雪》

## 研究问题

古典诗歌中有哪些以"小雪"为题的作品？文本与归属是否可靠？

## 证据（原文与定位）

1. **直读作品页**：维基文库《小雪（戴叔伦）》（[[04_sources/source-wikisource-daishulun-xiaoxue|source-wikisource-daishulun-xiaoxue]]），标注"全唐詩·卷274"、七言絕句、公有领域：

> 花雪隨風不厭看，更多還肯失【一作「恐蔽」】林巒。
> 愁人正在【書，一作「西」】窗下，一片飛來一片寒。

2. **直读总集页**：《文苑英华》（四库本）卷155（[[04_sources/source-wikisource-wenyuan-xiaoxue|source-wikisource-wenyuan-xiaoxue]]），雪类诗目：

> 小雪　　戴叔倫〈類詩作釋清晝〉
> 花雪隨風不厭㸔更多還肯失〈類詩作蔽〉林巒愁人正在書窓下一片飛來一片寒

（㸔为"看"的异写字，"窓/窗"同字异写；条目居祖咏《终南望餘雪》与戎昱《韓舎人書齋殘雪》之间。）

## AI 摘要 / 解释

- 为什么值得作为小雪文学样本：**它是本轮直读到的唯一以节气名"小雪"为题的古典诗**——"小雪字面诗稀缺"是本研究的一个如实结论（检索中另见的"小雪"诗多为人名/地名或现代作品）。诗的视角是室内望雪的"愁人"：雪之轻盈（花雪随风、不厌看）与体感之寒（一片飞来一片寒）对写，恰可与节气的"雪未盛"命名（[[03_notes/hist-xiaoxue-naming|命名卡]]）互文——初雪季节的诗意经验。
- **文献学提示**：《文苑英华》的"類詩作釋清晝"夹注表明此诗在北宋已有归属异说（释清昼即唐代诗僧皎然，俗姓谢，名清昼）；同页"失/蔽"异文与全唐诗系"失/恐蔽"相合。对外引用时建议题作"戴叔伦（一说释清昼）《小雪》"。
- 与饮食/腌藏习俗层的关系：无直接关系——本卡是文学经验层，不与习俗卡互证。

## 适用条件、例外与分歧

- 文本分歧已如上述（归属两说+两处异文），无其他冲突。
- 创作系年、写作地（戴叔伦仕历抚州/容管）本轮未核。

## 关联

[[01_terms/20_小雪|小雪索引]] · [[03_notes/hist-xiaoxue-naming|小雪命名卡]] · [[02_topics/literature-art|文学艺术]]

## 待人工确认

- 中华书局《全唐诗》印本与《文苑英华》影印本核对；《类诗》一系源流（归属问题的版本学考证，傅璇琮《唐代诗人丛考》类文献）。
- 是否另有唐代以降"小雪"题名诗（全唐诗/全宋诗系统检索），补足小雪文学谱系。

## 修改记录

- 2026-09-16（建卡）：作品页+总集页双直读建卡；同托管方规则下 confidence 定为 medium；归属异说与异文入卡为引用红线。
