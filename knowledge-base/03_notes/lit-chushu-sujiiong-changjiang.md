---
schema_version: '0.1.0'
id: 'lit-chushu-sujiiong-changjiang'
type: 'CulturalFact'
title: '苏泂《长江二首》其二："处暑无三日，新凉直万金"——南宋处暑诗'
solar_terms: ['chushu']
season: 'autumn'
dimensions: ['literature-art']
region: ['中国']
period: '南宋（苏泂，字召叟，山阴人，约12世纪末-13世纪；据四库提要）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-lingranzhai-shiji', 'source-xinhua-chushu-2022']
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
    'statement': '南宋苏泂《长江二首》其二全诗为"處暑無三日，新凉直萬金。白頭更世事，青草印禪心。放鶴婆娑舞，聴蛩斷續吟。極知仁者壽，未必海之深。"首联"处暑无三日，新凉直万金"写处暑前后新凉的珍贵，是流传最广的处暑诗句之一，收录于《泠然斋诗集》卷四（四库全书辑本）；其一"長江無六月……暑向風前退，秋從雨後來"同咏暑退秋来。',
    'exceptions': [
      '《泠然斋诗集》为四库自《永乐大典》辑本（原集二十卷久佚），无别本可校；录文用字（凉/涼、聴/听、囬/回、夀/壽等异体）保留原形',
      '新华社2022稿仅引首联两句，頷联以下未获第二文本印证；与《全宋诗》等现代校点本的文字比对未做',
      '创作系年与作地未考；苏泂生卒年四库提要未载，仅言其从陆游学诗法等生平轮廓',
    ],
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

# 苏泂《长江二首》：处暑新凉

## 研究问题

古典诗歌中"处暑"字面诗的可靠文本是哪一首？文献状态如何？

## 证据（原文与定位）

已直接读取维基文库《泠然斋诗集（四库全书本）》卷四《长江二首》（[[04_sources/source-wikisource-lingranzhai-shiji|source-wikisource-lingranzhai-shiji]]）：

> 其一："長江無六月，大地絶纎埃。暑向風前退，秋從雨後來。問桐知葉落，修桂待花開。疇昔扁舟興，分明欲喚囬。"
> 其二："處暑無三日，新凉直萬金。白頭更世事，青草印禪心。放鶴婆娑舞，聴蛩斷續吟。極知仁者壽，未必海之深。"

书首四库提要（同页直读）："泂字召叟，山陰人，右僕射頌之四世孫……今從永樂大典所載採輯排比共得詩八百五十餘篇釐為八巻……是泂本從學于㳺詩法流傳淵源有自"（"從學于游"指从学陆游）。

新华社2022处暑稿（[[04_sources/source-xinhua-chushu-2022|source-xinhua-chushu-2022]]，直读）引："宋人苏泂也说：'处暑无三日，新凉直万金。'"——与四库本首联文字一致（简繁层面）。

## AI 摘要 / 解释

- 为什么适合作处暑文学样本：(1) "处暑无三日，新凉直万金"把节气名直接嵌入诗行，以**价值判断**（新凉值万金）写暑热终结的身体快感，与《月令》"暑氣至此而止矣"的定义句互文；(2) 其一"暑向風前退，秋從雨後來"给出物候机制的白话对仗（风退暑、雨 bring 秋），两首合读恰是"处暑=由热转凉转折"的诗歌表达（对照 [[03_notes/sci-chushu-climate-autumn-transition|气候卡]] 分区现实）；(3) 白头更世事/青草印禅心将节候转换引向人生迟暮感，是节气诗"物候—生命"双层的样本。
- 文献层：作者为江湖派诗人（四库提要评"在江湖詩𣲖之中可謂卓然特出"），集子是辑本——**文本可靠性依赖四库一个系统**，与《全宋诗》等现代校点本的比对未做。

## 适用条件、例外与分歧

- 首联"處暑無三日，新凉直萬金"四库本与新华社引文一致，可靠性好；頷联以下未获第二文本印证。
- "处暑无三日"语义解读有分歧空间（处暑后不到三日？距处暑不足三日？），本卡不作唯一解读，留给解释层。

## 关联

[[01_terms/14_处暑|处暑索引]] · [[03_notes/hist-chushu-naming|处暑命名]] · [[02_topics/literature-art|文学艺术]]

## 待人工确认

- 与《永乐大典》残卷或其他辑本（《全宋诗》校点本）核对全诗文字。
- 苏泂生卒年与两诗系年（是否作于建康幕府时期）。

## 修改记录

- 2026-09-16（第一轮）：建卡。维基文库四库辑本卷四全诗直读成功（brief 备选路径"找不到作品页再换"未触发）。
