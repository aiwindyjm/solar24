---
schema_version: '0.1.0'
id: 'hist-huaxinfeng-24winds'
type: 'HistoricalRecord'
title: '二十四番花信风： earliest 可直读系统文本（宋《岁时广记》引《东皋杂录》）'
solar_terms: []
season: null
dimensions: ['phenology', 'history', 'literature-art']
region: ['中国江南（"江南自初春至初夏"）']
period: '宋（岁时广记卷一引《东皋杂录》等；所引诗自唐至宋）'
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
    'statement': '《岁时广记》卷一载（引《东皋杂录》）：「江南自初春至初夏，五日一番風，謂之花信風。梅花風先，楝花風後，凡二十四畨，以為寒絕也」，并录宋人诗证「一百五日寒食雨，二十四畨花信風」——"二十四番花信风"概念（小寒至谷雨、每候一花信）的宋代可直读系统表述，起于梅花、讫于楝花。',
    'exceptions': [
      '本条为《岁时广记》转引《东皋杂录》；《东皋杂录》原书待核',
      '本条给出的是花信风的起讫与总数（梅先楝后、二十四番），未列二十四花名全表——全表（梅花→楝花）的最早完整文献另考，不得由本卡推出',
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

# 二十四番花信风（宋《岁时广记》条）

## 研究问题

流传极广的"二十四番花信风"说法，一手可直读文本是什么？它究竟说了什么、没说什么？

## 证据（原文与定位）

《岁时广记》卷一（直读）：

> 「東臯雜録：江南自初春至初夏，五日一番風，謂之花信風。梅花風先，楝花風後，凡二十四畨，以為寒絕也。後唐人詩云：楝花開後風光好，梅子黄時雨意濃。徐師川詩云：一百五日寒食雨，二十四畳花信風。」

同卷另有清明-谷雨时段的降水与物候意象条：提要録「杏花開時，正值清明前後，必有雨也，謂之杏花雨」；水衡記「黄河水二月三月名桃花水」＋颜师古《汉书音义》释「桃方華時既有雨水川谷漲泮…故謂之桃花水」。

## AI 摘要 / 解释

- 花信风是把"五日一候"与"风-花对应"结合的江南物候体系，与本库七十二候体系（[[02_shared/hist-solarterms-pentad-system|七十二候体系]]）同构而地域不同（明言"江南"）。
- 防幻觉要点：本条只给"梅先、楝后、二十四番"三信息；网络常见的二十四花名全表（小寒三信梅花/山茶/水仙…）不出自本条，全表出处待考后方可入卡。
- 视觉/交互价值（创意层线索）：二十四番风×花的时序环，是现成的高证据视觉母题（证据=本卡，呈现=创意）。

## 适用条件、例外与分歧

限定江南；"以為寒絕也"指楝风吹后寒期结束。转引层级如 exceptions。

## 关联

[[02_shared/README|共享知识]] · [[02_shared/hist-suiguangji-jieqi-kaoju|岁时广记考据链]] · [[02_topics/phenology|物候维度]] · [[03_notes/hist-yueling-lichun-pentads|月令三候（对照体系）]]

## 待人工确认

- 《东皋杂录》原书与二十四花名全表的最早完整出处（程大昌《演繁露》/《荆楚岁时记》后出诸书待查）。

## 修改记录

- 2026-09-25（R20，第二轮）：建卡（岁时广记卷一直读）。
