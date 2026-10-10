---
schema_version: '0.1.0'
id: 'trad-jingzhe-nongyan-chungeng'
type: 'Tradition'
title: '"过了惊蛰节，春耕不能歇"：惊蛰农谚与春耕动员'
solar_terms: ['jingzhe']
season: 'spring'
dimensions: ['agriculture', 'chinese-life', 'customs']
region: ['中国（非遗网汇编未逐条标注农谚流传地域；新华网表述为"大江南北"）']
period: '农谚为传统口传（断代不明）；机构表述为当代'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'medium'
contested: false
risk_level: 'medium'
impact_level: 'term'
source_ids:
  ['source-ihchina-jingzhe-feature', 'source-xinhua-jingzhe-2022', 'source-wikisource-guantianjia']
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
    'statement': '非遗网惊蛰专题记"过了惊蛰节，春耕不能歇"等农谚，并表述惊蛰被"视为春耕的开始"（"惊蛰节气正值九九艳阳天……春耕大忙的季节到了"；农谚另有"冷惊蛰，暖春分""惊蛰刮北风，从头另过冬""惊蛰吹南风，秧苗迟下种""惊蛰不耙地，好像蒸锅跑了气"等）；新华网惊蛰稿以"田家几日闲，耕种从此起"描述惊蛰后农村进入繁忙时节。此"春耕动员"语义在唐代诗歌中已有直接表达（韦应物《观田家》"微雨众卉新，一雷惊蛰始。田家几日闲，耕种从此起"，维基文库直读）。',
    'exceptions': [
      '农谚属传统口传知识（tradition 层），不标科学置信；非遗网未逐条标注各农谚流传地域',
      '"视为春耕的开始"是机构汇编表述，各气候带实际春耕起点并不相同（参初雷卡同款南北差异问题）',
      '任务线索中的农谚异文"到了惊蛰节，锄头不停歇"未在直读来源中出现，记为异文待考',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立3；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 惊蛰农谚与春耕动员

## 研究问题

惊蛰作为农时信号的证据链是什么？"春耕开始"的说法有多深的历史？

## 证据（按证据等级排列）

1. **直读机构汇编**：非遗网惊蛰专题"农事农谚"节（[[04_sources/source-ihchina-jingzhe-feature|source-ihchina-jingzhe-feature]]）："俗话说'过了惊蛰节，春耕不能歇。'劳动人民自古就非常重视惊蛰节气，把它视为春耕的开始。惊蛰虽然气温升高迅速，雨量却有限，春旱开始露头。"（"自古"为页面用语，本卡不采为断代）另载农谚：惊蛰不耙地，好像蒸锅跑了气；冷惊蛰，暖春分；惊蛰冷，冷半年；惊蛰刮北风，从头另过冬；惊蛰吹南风，秧苗迟下种等。
2. **直读机构稿**：新华网2022年惊蛰稿（[[04_sources/source-xinhua-jingzhe-2022|source-xinhua-jingzhe-2022]]）："'惊蛰'之后，广大农村进入了一年中的繁忙时节，'田家几日闲，耕种从此起'，大江南北，陆续呈现出一派春耕的忙碌景象。"
3. **直读古诗**：韦应物《观田家》（[[04_sources/source-wikisource-guantianjia|source-wikisource-guantianjia]]）："微雨衆卉新，一雷驚蟄始。田家幾日閑，耕種從此起。丁壯俱在野，場圃亦就理。"——唐代已有"惊蛰之雷=春耕起点"的成句表达（详见 [[03_notes/lit-weiyingwu-guantianjia|观田家卡]]）。
4. 中国天气网专题亦载惊蛰农谚四条（"未过惊蛰先打雷，四十九天云不开"等，见 [[04_sources/source-weathercn-jingzhe-origin|中国天气网]]），与非遗网条目部分重合。

## AI 摘要 / 解释

- 三层证据构成"惊蛰→春耕动员"的连续谱：**唐代诗歌成句（8世纪）→ 当代机构表述 → 当代口传农谚**。中间层（宋元农书如《授时通考》对惊蛰农事的记载）本轮未直读，链条有缺口，故 confidence medium。
- 农谚内容分两类：时令动员类（春耕不能歇）与天气征兆类（冷惊蛰暖春分、刮北风另过冬）——后者是地方性经验口诀，属传统知识而非科学结论，且各条流传地域未标注，不能当作全国统一的"农谚规律"使用。
- 与立春"备耕"的分工：立春是劝农准备（见 [[03_notes/trad-lichun-nongshi|立春农事卡]]，仅作对照），惊蛰在表述层进入"大忙"阶段——但实际春耕起点随气候带南北推移，节气的农时语义本就以黄河流域经验为基准（见 [[02_shared/fact-solarterms-yellow-river-origin|黄河流域起源卡]]）。

## 适用条件、例外与分歧

无跨来源直接冲突。注意"大江南北陆续呈现春耕忙碌"（新华网）本身是对progressive启动的表述（陆续），非同日全国开播——引用时保留"陆续"限定。

## 关联

[[01_terms/03_惊蛰|惊蛰索引]] · [[03_notes/lit-weiyingwu-guantianjia|韦应物《观田家》]] · [[03_notes/sci-jingzhe-thunder-climate|初雷南北差异]] · [[02_shared/fact-solarterms-yellow-river-origin|黄河流域起源]] · [[02_topics/agriculture|农业维度]]

## 待人工确认

- 农书直读：《齐民要术》《农桑辑要》《授时通考》等惊蛰/二月农事条目，补齐唐→清的农时证据链。
- 各农谚的地域归属排查（方志/农谚汇编）。

## 修改记录

- 2026-09-16（第一轮研究）：建卡。线索农谚"到了惊蛰节，锄头不停歇"与直读版本"过了惊蛰节，春耕不能歇"字面不同，按直读版入卡、异文入 exceptions。
