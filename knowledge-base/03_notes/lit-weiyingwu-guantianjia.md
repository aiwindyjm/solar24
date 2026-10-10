---
schema_version: '0.1.0'
id: 'lit-weiyingwu-guantianjia'
type: 'CulturalFact'
title: '韦应物《观田家》："一雷惊蛰始"的春耕书写与自愧结尾'
solar_terms: ['jingzhe']
season: 'spring'
dimensions: ['literature-art', 'agriculture']
region: ['中国']
period: '唐（韦应物，约737-791）；文本录自《全唐诗·卷192》'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
contested: false
risk_level: 'low'
impact_level: 'term'
source_ids: ['source-wikisource-guantianjia', 'source-xinhua-jingzhe-2022']
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
    'statement': '唐代韦应物五言古诗《观田家》（《全唐诗·卷192》）全诗为"微雨众卉新，一雷惊蛰始。田家几日闲，耕种从此起。丁壮俱在野，场圃亦就理。归来景常晏，饮犊西涧水。饥劬不自苦，膏泽且为喜。仓廪无宿储，徭役犹未已。方惭不耕者，禄食出闾里。"——首四句把惊蛰之雷与春耕起点直接挂钩，是惊蛰节气诗中流传最广的唐代文本之一。',
    'exceptions': ['文本与《全唐诗》收录经维基文库直读；创作系年与点校本异文核对待做'],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=low/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 韦应物《观田家》

## 研究问题

古典诗歌中惊蛰的"物候感知+农事动员"如何被同时表达？

## 证据（原文与定位）

已直接读取维基文库作品页（[[04_sources/source-wikisource-guantianjia|source-wikisource-guantianjia]]，标注录自《全唐诗·卷192》，公有领域）：

> "微雨衆卉新，一雷驚蟄始。田家幾日閑，耕種從此起。丁壯俱在野，場圃亦就理。歸來景常晏，飲犢西澗水。飢劬不自苦，膏澤且爲喜。倉廩無宿儲，徭役猶未已。方慚不耕者，祿食出閭里。"

新华网2022年惊蛰稿（[[04_sources/source-xinhua-jingzhe-2022|source-xinhua-jingzhe-2022]]）独立引用其中"田家几日闲，耕种从此起"句，与直读文本一致。

## AI 摘要 / 解释

- 首四句是"惊蛰=春耕动员"的**唐代成句**：微雨、新卉、初雷三个物候信号之后紧接"耕种从此起"——与月令"萬物出乎震，震為雷"的命名逻辑（见 [[03_notes/hist-yueling-jingzhe-pentads|三候卡]]）同构，为农谚"过了惊蛰节，春耕不能歇"（见 [[03_notes/trad-jingzhe-nongyan-chungeng|农谚卡]]）提供了千年前的诗歌平行文本。
- 后半段的价值在批判维度：田家"飢劬不自苦"而"倉廩無宿儲，徭役猶未已"，末句作者自愧"方慚不耕者，祿食出閭里"——惊蛰诗不止颂春，还写出了农时背后的赋役负担与士人自省，这是节气文学样本中少见的深度。
- 与元稹《咏廿四气诗》组诗的关系：组诗是否有惊蛰篇本轮未核，留待比较研究。

## 适用条件、例外与分歧

无文本分歧（直读+新华社引文互证）。"一雷惊蛰始"是诗人对节气名与雷的文学书写，非气候记录（初雷南北差异见 [[03_notes/sci-jingzhe-thunder-climate|初雷卡]]）。系年（作于韦应物何任）未核。

## 关联

[[01_terms/03_惊蛰|惊蛰索引]] · [[03_notes/trad-jingzhe-nongyan-chungeng|惊蛰农谚]] · [[03_notes/hist-yueling-jingzhe-pentads|月令三候]] · [[02_topics/literature-art|文学艺术]]

## 待人工确认

- 与《全唐诗》点校本核对异文；韦应物生平系年（滁州/江州时期）引用前复核。

## 修改记录

- 2026-09-16（第一轮研究）：建卡。全诗直读 + 新华网独立引文互证，confidence high。
