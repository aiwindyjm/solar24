---
schema_version: '0.1.0'
id: 'lit-dufu-bailu-yueye'
type: 'CulturalFact'
title: '杜甫《月夜忆舍弟》："露从今夜白，月是故乡明"'
solar_terms: ['bailu']
season: 'autumn'
dimensions: ['literature-art']
region: ['中国（唐）']
period: '唐（杜甫，712-770）；创作系年本轮未核（通行系年说未直读，不入命题）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-dufu-yueye-shedi', 'source-xinhua-bailu-2022']
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
    'statement': '杜甫五律《月夜忆舍弟》全诗为"戍鼓斷人行，邊秋一雁聲。露從今夜白，月是故鄉明。有弟皆分散，無家問死生。寄書長不達，況乃未休兵。"收录于《唐诗三百首》。颔联"露从今夜白"以白露时节的今夜露白起兴乡愁，是白露节气最常被引用的唐诗句（新华社2022白露稿即引）。',
    'exceptions': [
      '"露从今夜白"是"今夜露白"还是"自今夜起露渐白"的解诗分歧（节气当日感时 vs 入秋渐变）属注释史问题，卡内不裁决',
      '系年与创作地（通行说法与乾元二年秦州相关）无直读来源，命题中不含',
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

# 杜甫《月夜忆舍弟》

## 研究问题

白露意象在唐诗中的代表文本是什么？"露从今夜白"如何使用节气时间？

## 证据（原文与定位）

已直接读取维基文库作品页（[[04_sources/source-wikisource-dufu-yueye-shedi|source-wikisource-dufu-yueye-shedi]]，页面标注"本作品收錄於：《唐詩三百首》"）：

> 戍鼓斷人行，邊秋一雁聲。露從今夜白，月是故鄉明。有弟皆分散，無家問死生。寄書長不達，況乃未休兵。

交叉引文：新华社2022白露稿（[[04_sources/source-xinhua-bailu-2022|source-xinhua-bailu-2022]]）"唐人杜甫吟有乡愁浓浓的'露从今夜白，月是故乡明'"，与直读文本一致。

## AI 摘要 / 解释

- **节气时刻的私人化**：与《蒹葭》（[[03_notes/lit-shijing-jianjia|蒹葭卡]]）以白露写自然与求索不同，杜诗把白露压缩成一个**具体的今夜**——戍鼓、雁声、露白、月明四个意象叠出战乱中的节气体验：时间刻度（今夜露白）与空间刻度（故乡月明）互为镜像，是"节气+月亮"组合抒情的典范。
- 全诗语境（"未休兵""無家問死生"）提示这是一首战时怀人诗；白露在此承担"一年将秋、人各一方"的时间标记功能——文学功能属解释层表述。
- 接受史线索：新华社节气稿将其作为白露标准引句，说明它在当代节气传播中已成为白露的"诗性名片"。

## 适用条件、例外与分歧

- 无文本分歧（两个不同发布方文本一致）。
- "最常被引用"为媒体与常识层判断，未做引文计量。

## 关联

[[01_terms/15_白露|白露索引]] · [[03_notes/lit-shijing-jianjia|蒹葭：露意象源头]] · [[02_topics/literature-art|文学艺术]]

## 待人工确认

- 与《读杜心解》《杜诗详注》等注本对照；系年考订（乾元二年秦州说的文献依据）。

## 修改记录

- 2026-09-16（第一轮）：建卡。全诗直读+新华社引文交叉；系年信息未获直读故不入命题。
