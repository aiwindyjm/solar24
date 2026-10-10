---
schema_version: '0.1.0'
id: 'lit-wengjuan-xiangcunsiyue'
type: 'CulturalFact'
title: '翁卷《乡村四月》：南宋江南初夏"才了蚕桑又插田"的农时书写'
solar_terms: ['xiaoman']
season: 'summer'
dimensions: ['literature-art', 'agriculture']
region: ['中国（诗意锚定江南乡村）']
period: '南宋（翁卷，永嘉四灵之一，生卒约1163-1245待核）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-xiangcun-siyue']
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
    'statement': '南宋翁卷七绝《乡村四月》全诗为"綠遍山原白滿川，子規聲裡雨如煙。鄉村四月閒人少，纔了蠶桑又插田。"（维基文库作品页直读）：写农历四月江南——山原绿遍、稻田水满、烟雨子规，蚕桑刚了、插田又起。作品收录于《千家诗·卷三》与《西巖集》（四库本）；《千家诗》本题为《村居即事》且署范成大，作者归属存异说。该诗锚定的是农历四月的农事节奏，与小满（四月中气）所在的蚕收-插秧时间窗重合。',
    'exceptions': [
      '诗题锚定"乡村四月"（农历月）而非小满节气日，用作小满文学样本时须注明是"同窗月份诗"而非节气诗',
      '《千家诗》本异题《村居即事》、异署范成大——作者归属需校勘（翁卷《西巖集》本 vs 范成大集）',
      '翁卷生卒年本轮未核，引用其生平需复核',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=low/B/独立1；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 翁卷《乡村四月》

## 研究问题

古典诗歌中哪一首最能承载小满所在的江南初夏农时（蚕收+插秧+麦将熟）？

## 证据（原文与定位）

已直接读取维基文库作品页（[[04_sources/source-wikisource-xiangcun-siyue|source-wikisource-xiangcun-siyue]]）：

> "綠遍山原白滿川，子規聲裡雨如煙。鄉村四月閒人少，纔了蠶桑又插田。"

页面注：收录于《千家詩/卷三》和《西巖集（翁巻，四庫全書本）》；"《千家詩》作《村居即事》，范成大作"。分类：七言絕句、南宋。公有领域。

## AI 摘要 / 解释

- 为什么适合作为小满时段的文学样本：
  1. **农时对位**："纔了蠶桑又插田"正是小满窗（四月）江南两大农事——春蚕收茧缫丝（丝车，见 [[03_notes/hist-gjts-xiaoman-sanche|动三车]]）与中稻插秧——的无缝交接，与本轮核验的"动三车"嘉兴条（浸谷种→动三车→芒种刈菜麦）、"祈蚕"习俗（[[03_notes/trad-xiaoman-qican|祈蚕卡]]）时间窗完全重合。
  2. **"白滿川"的水意象**：稻田灌水盈满反光——与南方农谚"满"指雨水盈缺（[[03_notes/trad-xiaoman-nongshi|农谚卡]]）同构；"閒人少"对应"三夏"大忙。
  3. 《中国文化报》小满文亦引此二句（"乡村四月闲人少，才了蚕桑又插田"，[[04_sources/source-ihchina-xiaoman-zheli-2015|哲理节气文]]）——机构节气稿对"四月=蚕桑+插田"书写的直接采用。
- **边界（防误用）**：这是**月份诗**，不是节气诗——诗中无"小满"字样，不可表述为"写小满的诗"；正确表述是"写小满所在农历四月的江南农忙"。

## 适用条件、例外与分歧

- 作者归属异说（《千家诗》本题《村居即事》署范成大）待校勘：以《西巖集》四库本收录为本卡默认归属，异说显式保留。
- "白滿川"解为稻田水面反光是通行读法，另有"河水涨满"解——本轮无注释文献直读，两解并存不决。

## 关联

[[01_terms/08_小满|小满索引]] · [[03_notes/hist-gjts-xiaoman-sanche|动三车古籍锚点]] · [[03_notes/trad-xiaoman-qican|祈蚕节]] · [[03_notes/trad-xiaoman-nongshi|小满农事]] · [[02_topics/literature-art|文学艺术]]

## 待人工确认

- 《西巖集》四库本卷内原文与《千家诗》异题异署的校勘；翁卷生卒与"永嘉四灵"表述复核。
- "白满川"的旧注（如《宋诗纪事》类）核验。

## 修改记录

- 2026-09-16（第一轮）：建卡。作品页直读；"月份诗≠节气诗"边界与作者异说显式写入。
