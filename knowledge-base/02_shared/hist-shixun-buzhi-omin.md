---
schema_version: '0.1.0'
id: 'hist-shixun-buzhi-omin'
type: 'HistoricalRecord'
title: '七十二候的占验面：《周书时训》"候应不至"灾异句'
solar_terms: []
season: null
dimensions: ['phenology', 'history', 'calendar']
region: ['中国（汉代文献框架，宋类书辑录）']
period: '汉以前文献（《逸周书·时训》层），宋《岁时广记》卷三/卷四辑录'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'system'
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
    'statement': '《岁时广记》所辑《周书时训》七十二候文本在候应之后系统附有"不至则…"灾异句（如立秋三候「涼風不至國無嚴政，白露不降民多欬病，寒蜩不鳴人臣力爭」；小寒三候「雁不北嚮民不懷生，鵲不始巢國不安寧，雉不始雊國乃大水」；大寒三候「雞不始乳淫女亂男，鷙鳥不厲國不除兵，水澤不腹堅言乃不從」）——七十二候在原初文本中不仅是物候记录，还是"候应失期→人事占验"的占候体系。',
    'exceptions': [
      '灾异对应属占验层（与《汉书·五行志》灾异思维同构），不得作为物候科学或史实引用',
      '《岁时广记》所辑时训文字与今本《逸周书·时训》需校勘',
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

# 七十二候的占验面（时训"不至"句）

## 研究问题

七十二候在早期文本中只是物候记录吗？"候应失期"有无后果表述？

## 证据（原文与定位）

《岁时广记》卷三（立秋/处暑段）、卷四（小寒/大寒段）直读，灾异句逐字如 claim 所引；卷三秋分段另有「雷不始收諸雨淫汰，蟄蟲不坏民靡有賴，水不始涸介蟲為害」。

## AI 摘要 / 解释

- 与 [[02_shared/hist-solarterms-pentad-system|七十二候体系]]（正面候应）互补：时训文本的正反两面结构（至/不至）说明七十二候的功能包含**占验国家与人事**，这解释了古代国家为何设观候之官——物候即政治信号。
- 对 Solar24 的分层意义：呈现七十二候时必须区分"物候观察（可与现代观测对照）"与"占验对应（文化观念）"两层；本库既有三候卡全部引用正面候应，本卡补齐被略去的占验面，防止"七十二候=古代科学观测"的过度现代化叙事。

## 适用条件、例外与分歧

转引层级（岁时广记辑时训）；占验句不进科学层。

## 关联

[[02_shared/README|共享知识]] · [[02_shared/hist-solarterms-pentad-system|七十二候体系]] · [[02_shared/hist-suiguangji-jieqi-kaoju|岁时广记考据链]] · [[02_topics/phenology|物候维度]]

## 待人工确认

- 今本《逸周书·时训》对照（黄怀信《逸周书汇校集注》）；"不至"句在月令系统（《礼记·月令》附"不…"句）的平行文本关系。

## 修改记录

- 2026-09-25（R26，第二轮）：建卡（卷三/卷四直读）。
