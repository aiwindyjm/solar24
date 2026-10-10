---
schema_version: '0.1.0'
id: 'lit-luyou-dahan-jiangling'
type: 'CulturalFact'
title: '陆游《大寒出江陵西門》：节气名入题的岁末纪行诗'
solar_terms: ['dahan']
season: 'winter'
dimensions: ['literature-art']
region: ['中国（诗中地望：江陵西门，今湖北荆州一带）']
period: '南宋（陆游，1125-1210）；《劎南詩槀》卷二（四庫全書本）录文'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-jiannan-shigao-dahan']
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
    'statement': '南宋陆游《大寒出江陵西門》（七律，收于其自编诗集《劎南詩槀》卷二）以节气名"大寒"直接入题，四庫本录文全诗为"平明羸馬出西門，淡日寒雲乆吐吞。醉面衝風驚易醒，重裘藏手取微温。紛紛狐兔投深莽，㸃㸃牛羊散逺村。不為山川多感慨，歲窮遊子自消魂。"（尾联"歲窮遊子自消魂"点出大寒的岁末定位）。',
    'exceptions': [
      '维基文库四庫本为唯一直读录文系统（另检得《放翁詩選》《精選陸放翁詩集》同题诗均同托管方，不计独立交叉）——confidence 封顶 medium',
      '四庫本异体字：乆（久）、㸃㸃（点点）、逺（遠）——引用时保留录文原字或注明校读，需与中华书局《劍南詩稿》校点本核对',
      '创作系年（1170年冬陆游赴夔州途经江陵说）本轮未核，仅由同卷相邻纪行诗（《公安》《沙頭》《將離江陵》）提示荆楚行程背景',
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

# 陆游《大寒出江陵西門》

## 研究问题

古典诗歌中大寒如何被直接书写？哪一首适合作大寒的文学样本？

## 证据（原文与定位）

已直接读取维基文库《劎南詩槀（四庫全書本）卷02》（[[04_sources/source-wikisource-jiannan-shigao-dahan|source-wikisource-jiannan-shigao-dahan]]），诗位于《沙頭》与《江夏與章冠之遇别後寄贈》之间：

> 大寒出江陵西門
> 平明羸馬出西門，淡日寒雲乆吐吞。
> 醉面衝風驚易醒，重裘藏手取微温。
> 紛紛狐兔投深莽，㸃㸃牛羊散逺村。
> 不為山川多感慨，歲窮遊子自消魂。

（录文原字：乆=久，㸃=點，逺=遠。）

## AI 摘要 / 解释

- 为什么值得作为大寒文学样本：(1) **节气名直接入题**——大寒在古典诗题中罕见地被点名（多数冬寒诗只写雪写风不写节气名），使"诗-节气"关联无歧义；(2) **体感书写精准**——"淡日寒云久吐吞"（冬阳在云间明灭）与"重裘藏手取微温"（厚衣伸手取一点暖）是大寒清晨的低成本体感修辞，与三候"水泽腹坚"的极值寒冷互为表里（见 [[03_notes/hist-yueling-dahan-pentads|三候卡]]）；(3) **尾联的岁末命题**——"歲窮遊子自消魂"：诗人自注般地把"大寒"与"岁穷"并置，正是"过了大寒，又是一年"（农谚，见 [[03_notes/trad-dahan-nongshi|农事卡]]）的文人表达；(4) 颈联冬野物象（狐兔投莽、牛羊散村）是江汉平原的冬日物候速写，可与七十二候的动物信号（征鸟厉疾）对照阅读。
- 与元稹《咏廿四气诗·大寒十二月中》分工（见 [[03_notes/lit-yuanzhen-dahan-shierzhong|元稹卡]]）：陆诗是**行旅中的大寒**（个人体感+岁末乡愁），元诗是**节气程式中的大寒**（围炉闭门+新旧年交替的宇宙感），一散一整互补。

## 适用条件、例外与分歧

- 录文为四庫本系统，异体字与形近字（逺/逯）待校点本核对；系年待核（1170年冬赴夔州通判任途经江陵为通行说法，本轮未直读年谱）。
- 诗题"江陵西門"今地对应（湖北荆州）为通行地理常识，未做历史地理核验。

## 关联

[[01_terms/24_大寒|大寒索引]] · [[03_notes/lit-yuanzhen-dahan-shierzhong|元稹《大寒十二月中》]] · [[03_notes/hist-yueling-dahan-pentads|大寒三候]] · [[02_topics/literature-art|文学艺术]]

## 待人工确认

- 与中华书局《劍南詩稿》校点本对校；创作系年（钱仲联《剑南诗稿校注》系年）核对。
- "淡日寒云久吐吞"在后世选本的流传与异文。

## 修改记录

- 2026-09-16（第一轮）：建卡。维基文库四庫本直读；同托管方规则下 confidence 封顶 medium；系年与校勘列入待核。
