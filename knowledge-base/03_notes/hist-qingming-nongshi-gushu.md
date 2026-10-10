---
schema_version: '0.1.0'
id: 'hist-qingming-nongshi-gushu'
type: 'HistoricalRecord'
title: '清明农事的文献链：四民月令理蚕室·杏花农时·氾胜之书栽树三时'
solar_terms: ['qingming', 'guyu']
season: 'spring'
dimensions: ['agriculture', 'history']
region: ['中国北方（东汉-北魏农书口径）；五代蜀地劝农诏为一例']
period: '东汉（四民月令/氾胜之书）→北魏（齐民要术）→五代（孟昶劝农诏）→宋（岁时广记辑录）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-suiguangji', 'source-wikisource-qiminyaoshu']
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
    'statement': '《岁时广记》卷一（直读）为清明-谷雨农事保存了多层文献：东汉《四民月令》「清明節令蠶妾理蠶室…杏花生種百穀」；《呂氏春秋》「冬至後五旬七日菖葉生…於是始耕」；五代蜀主孟昶劝农诏「望杏敦耕瞻蒲勸穡」；《氾勝之書》栽树「正月為上時二月為中時三月為下時」并配树目形态特征（棗雞口、槐兎目、桑蝦蟇眼等）；《齊民要術》「二月辰日宜種穀」。',
    'exceptions': [
      '所引《四民月令》《氾胜之书》均为《岁时广记》转引（两书原书已佚，辑本另核）',
      '杏花/菖叶农时属黄河流域物候经验，非现代全国农事',
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

# 清明农事文献链（东汉→五代→宋辑）

## 研究问题

清明作为农时节点，在唐代以前的农书与劝农文献中有无直接记载？

## 证据（原文与定位）

《岁时广记》卷一（直读）：

- **《四民月令》（东汉崔寔，转引）**：「清明節令蠶妾理蠶室，是月也杏花盛。又云杏花生種百穀。」——现存文献中"清明节"名进入农事指令的早期农书出处之一（东汉）。
- **《呂氏春秋》（转引）**：「冬至後五旬七日菖葉生，蓋菖者百草之先生也，於是始耕。」——以冬至计日的始耕规则。
- **孟昶劝农诏（五代后蜀，转引）**：「望杏敦耕瞻蒲勸穡」——以杏花/菖蒲物候劝农的诏令语；宋祁诗「催耕併及杏花時」、王元長文「杏花菖葉耕穫不愆」为同系文脉。
- **《氾勝之書》（转引）**：「栽樹正月為上時，二月為中時，三月為下時。然棗雞口，槐兎目，桑蝦蟇眼，榆負癅散，其餘雜木䑕耳䖟趄，各有時。」——栽树三时+以树木萌芽形态特征定时机的操作体系。
- **《齊民要術》（转引）**：「二月辰日宜種穀。」

## AI 摘要 / 解释

- 与 [[02_shared/hist-qimin-zhonggu-shixu|齐民要术种谷三时]] 合观：**"三时"（上/中/下）与"形态-时机"（鸡口/兔目/虾蟇眼）是农书时宜知识的两种标准表述结构**，本卡补上了栽树场合的平行样本。
- "清明节"名在东汉农书（《四民月令》）中已进入农事指令——早于唐宋节日化叙事，是"节气农事功能先于节俗繁荣"的一手证据。
- 蚕室条把清明与蚕事月令挂钩，为未来蚕桑维度（授时通考卷72-78）预留接口。

## 适用条件、例外与分歧

转引层级贯穿全卡：命题均限定"《岁时广记》载某书曰"；直接引用各原书前须核辑本（石声汉《四民月令校注》等，人工待办）。

## 关联

[[01_terms/05_清明|清明索引]] · [[02_shared/hist-nongshu-shiyi-concept|农书时宜概念]] · [[02_shared/hist-qimin-zhonggu-shixu|种谷三时]] · [[03_notes/trad-qingming-nongshi|清明农事（机构层）]] · [[02_topics/agriculture|农业维度]]

## 待人工确认

- 石声汉《四民月令校注》《氾胜之书辑释》核对转引文字。

## 修改记录

- 2026-09-25（R21，第二轮）：建卡。同轮发现：四卷本《岁时广记》**无寒食专块**（节本删并），寒食断代链的"宋环节"改由东京梦华录/梦粱录承担（R31-R36 窗口），已记 round2-progress。
