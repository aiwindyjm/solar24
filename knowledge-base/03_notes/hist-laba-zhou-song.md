---
schema_version: '0.1.0'
id: 'hist-laba-zhou-song'
type: 'HistoricalRecord'
title: '宋"腊八粥"记载：《岁时广记》卷四辑（与《东京梦华录》同文关系待核）'
solar_terms: ['xiaohan']
season: 'winter'
dimensions: ['food', 'history', 'customs']
region: ['中国（北宋都城口径的记载，经宋类书辑录）']
period: '宋（辑录文本记北宋都城事）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'low'
risk_level: 'medium'
impact_level: 'term'
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
    'statement': '《岁时广记》卷四（直读）辑腊八（十二月初八）浴佛会与腊八粥记载：「（十二月）八日，有僧尼三五爲羣，以盆器盛金銅佛像，浸以香水，楊柳洒浴，排門教化。諸大寺作浴佛會，并送七寶五味粥，謂之臘八粥。都人是日亦以果子雜料煑粥而食。」——腊八粥与浴佛会、七宝五味粥的宋代记载。',
    'exceptions': [
      '本段与《东京梦华录》卷十腊八条文字高度相似，疑岁时广记径引东京梦华录——两书同文关系待逐字比对（R31-R33 窗口核对），核对前不并引',
      '腊八为农历十二月初八，锚定农历日而非小寒/大寒节气日',
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

# 宋腊八粥记载（岁时广记卷四辑）

## 研究问题

腊八粥的一手宋代文本是什么？"腊八"与冬至-大寒节气时段的关系如何表述？

## 证据（原文与定位）

《岁时广记》卷四（直读）如 claim；同卷另辑《前漢紀》冬夜绩麻、《東觀漢記》黄香暖席、《孝子傳》王祥卧冰、《楚國先賢傳》孟宗冬笋（冬月孝行故事群）、《魏畧》董遇"三餘"读书（"冬者歲之餘"）、《漢書》東方朔"三冬文史足用"。

## AI 摘要 / 解释

- 腊八（佛寺浴佛+施粥）是农历十二月节令，与小寒/大寒同月相邻但锚定农历日——本库存档为"邻近节令"样本（同蜀中二月二、拉保保）。
- 冬月孝行/三余/三冬故事群说明宋类书把冬季知识组织为"孝行+勤学"德目——节气时段承载道德叙事的编纂学证据。
- 待核点：若确认为东京梦华录文，则腊八粥最早完整记载归于孟元老书，本卡改注"经岁时广记辑存"。

## 适用条件、例外与分歧

置信 low：同文关系未核、辑录来源书未标明。

## 关联

[[01_terms/23_小寒|小寒索引]] · [[02_topics/food|饮食维度]] · [[03_notes/hist-shu-eryueer-taqing-canshi|蜀中二月二（农历日锚定对照）]] · [[02_topics/history|历史维度]]

## 待人工确认

- 与《东京梦华录》卷十腊八条逐字比对；《梦粱录》卷六有无对应条（R34-36 窗口）。

## 修改记录

- 2026-09-25（R30，第二轮）：建卡（岁时广记卷四直读）；腊日-冬至关系块在四卷本中仅存腊八此条，其余腊日条（祭灶/守岁）见四时纂要卷五（已读，见农事占候卡）。
