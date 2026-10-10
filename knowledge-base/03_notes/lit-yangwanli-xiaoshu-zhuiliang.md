---
schema_version: '0.1.0'
id: 'lit-yangwanli-xiaoshu-zhuiliang'
type: 'CulturalFact'
title: '杨万里《夏夜追凉》：盛夏"微凉不是风"与元稹小暑诗的引句传统'
solar_terms: ['xiaoshu']
season: 'summer'
dimensions: ['literature-art']
region: ['中国']
period: '南宋（杨万里，1127-1206）；小暑字面诗则以元稹《咏廿四气诗》组诗（敦煌文献系统）为线索'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
contested: false
source_ids:
  [
    'source-xinhua-xiaoshu-poetic-2024',
    'source-ihchina-xiaoshu-feature',
    'source-xinhua-xiaoshu-2022',
  ]
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
risk_level: 'low'
impact_level: 'term'
claim:
  {
    'statement': '新华社2024小暑稿引南宋杨万里七绝《夏夜追凉》全诗："夜热依然午热同，开门小立月明中。竹深树密虫鸣处，时有微凉不是风。"该诗题咏盛夏夜热而非小暑字面，新华社以之作为小暑节令诗，取其"夜热"与"追凉"的时节意境。小暑字面的诗歌直接线索是元稹《咏廿四气诗·小暑六月节》起句"倏忽温风至，因循小暑来"——非遗网与新华社两稿均引此句作题眼，但组诗全文本轮未获直读文本（维基文库无《咏廿四气诗》组诗页，前波次已确认），故元稹诗不单独建卡。',
    'exceptions': [
      '《夏夜追凉》诗文本以新华社引文为据，未与《诚斋集》校本逐字核对（维基文库检索未获该诗页），署名"宋代诗人杨万里"从新华社稿',
      '"倏忽温风至，因循小暑来"的作者归属（元稹）两机构稿均未署名，元稹说来自检索摘要级知识，未直读组诗原文——引用时只作"机构稿所引题诗"不标作者',
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

# 杨万里《夏夜追凉》与小暑诗引句

## 研究问题

与小暑时节最相称的古典诗歌样本是什么？小暑"字面诗"的文本可得性如何？

## 证据

1. **直读机构稿**：新华社2024诗意节令稿（[[04_sources/source-xinhua-xiaoshu-poetic-2024|source-xinhua-xiaoshu-poetic-2024]]，记者杨金志、郭慕清）："宋代诗人杨万里有一首诗颇有禅意：'夜热依然午热同，开门小立月明中。竹深树密虫鸣处，时有微凉不是风。'……静中生凉是此诗所要表现的意趣……最后的'微凉不是风'，读来更是令人回味无穷。"
2. **直读机构稿（题眼引句）**：非遗网（[[04_sources/source-ihchina-xiaoshu-feature|source-ihchina-xiaoshu-feature]]）与新华社2022稿（[[04_sources/source-xinhua-xiaoshu-2022|source-xinhua-xiaoshu-2022]]）均以"倏忽温风至，因循小暑来"开篇（未署作者）。
3. **检索记录**：维基文库 API 检索"夏夜追涼""攜杖來追柳外涼（秦观《纳凉》）"等，均未命中可靠作品页（仅类书/文集散卷，无该诗可直读）；《咏廿四气诗》组诗页不存在（wave1 已确认）。

## AI 摘要 / 解释

- 为什么选《夏夜追凉》作为小暑文学样本：(1) "夜热依然午热同"精确对应小暑"热而未极、昼夜皆热"的气候特征（见 [[03_notes/sci-xiaoshu-climate-heat-humid|气候卡]]）；(2) "时有微凉不是风"写静中生凉——与三候"温风至"（风皆带热）形成互文：无风处的微凉恰是盛夏体感的另一面；(3) **关联方式必须写明"题咏盛夏而非小暑字面"**——新华社以节令稿框架收编该诗，属现代媒体的节令化编排，不是古人小暑作诗的证据。
- 小暑字面诗的真实载体是《咏廿四气诗》组诗（敦煌写本系统），其"倏忽温风至"被当代机构稿高频引用而不署名——组诗文本校勘（敦煌卷子/全唐诗外编）列为 Needs Research，防止把检索摘要级的"元稹作"写成事实。

## 适用条件、例外与分歧

- 《夏夜追凉》系年、创作地未核；诗题在《诚斋集》中的原题异写（追凉/納涼类目）待校。
- 若后续直读到《咏廿四气诗》组诗可靠文本，应另建小暑字面诗卡并替代本卡的元稹线索段。

## 关联

[[01_terms/11_小暑|小暑索引]] · [[03_notes/hist-yueling-xiaoshu-pentads|小暑三候（温风至互文）]] · [[03_notes/sci-xiaoshu-climate-heat-humid|小暑气候]] · [[02_topics/literature-art|文学艺术]]

## 待人工确认

- 《诚斋集》校本核对《夏夜追凉》文本与系年；《咏廿四气诗·小暑六月节》全诗文本（敦煌文献影印/校录本）。

## 修改记录

- 2026-09-16（建卡）：候选诗（秦观《纳凉》/孟浩然《夏日南亭怀辛大》）维基文库检索未获直读页，改以新华社2024稿直读引文的杨万里《夏夜追凉》建卡；"题咏盛夏而非小暑字面"的关联方式与元稹组诗不可直读两点显式写入；status=in-review（引擎路由 human-review-required·pending-primary-source，进入审核分节 B）。
