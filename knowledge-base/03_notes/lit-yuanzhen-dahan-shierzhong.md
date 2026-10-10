---
schema_version: '0.1.0'
id: 'lit-yuanzhen-dahan-shierzhong'
type: 'CulturalFact'
title: '元稹《咏廿四气诗·大寒十二月中》：节气组诗的收束篇（报纸转录本）'
solar_terms: ['dahan']
season: 'winter'
dimensions: ['literature-art']
region: ['中国']
period: '唐（元稹，779-831）；组诗文本为人民日报海外版2016年转录'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-rmrbhwb-dahan-2016']
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
    'statement': '署名元稹的《咏廿四气诗》组诗有大寒一篇《大寒十二月中》，人民日报海外版2016年专版物候篇转录全诗："腊酒自盈樽，金炉兽炭温。大寒宜近火，无事莫开门。冬与春交替，星周月讵存？明朝换新律，梅柳待阳春。"诗写大寒时节围炉闭门的起居与冬春交替的年序感。',
    'exceptions': [
      '本轮诗文本系人民日报海外版报纸转录（直读到报纸页，非古籍直读）；维基文库无《咏廿四气诗》组诗页（wave1-2 两波次确认），古籍校本（敦煌写本/《才调集》系统）未核——组诗作者归属（元稹）在学界有讨论，本轮未核',
      '转录本文字与古籍本的异文未校；引用时注明"据人民日报海外版2016年转录"',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立1；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 元稹《咏廿四气诗·大寒十二月中》

## 研究问题

节气程式诗如何书写大寒？大寒篇在组诗结构中处于什么位置？

## 证据（原文与定位）

已直接读取人民日报海外版2016-01-19第07版物候篇（[[04_sources/source-rmrbhwb-dahan-2016|source-rmrbhwb-dahan-2016]]），文中转录：

> 腊酒自盈樽，金炉兽炭温。大寒宜近火，无事莫开门。
> 冬与春交替，星周月讵存？明朝换新律，梅柳待阳春。

该文并解释："诗人这里不再写'鸡乳、征鸟厉疾、水泽腹坚'等物候现象了，而是直接写人们的习俗和新、旧年的交替。"

## AI 摘要 / 解释

- 组诗身份：《咏廿四气诗》每节气一首、题目即节气名与月份身份（"大寒十二月中"的"十二月中"正是中气标签，与《月令》"大寒，十二月中"同构，见 [[03_notes/hist-yueling-dahan-pentads|三候卡]]）——**大寒篇是组诗的第24篇、收束篇**。
- 内容结构：前四句写大寒起居（腊酒、兽炭、近火、闭门——岁末的休眠态），后四句写年序交替（"冬与春交替，星周月讵存？明朝换新律"——星回岁终、律吕更换，"梅柳待阳春"预告立春）。它把"大寒=终而复始"写成了诗的程序：**这是全组诗里唯一一个"下一首回到第一首"的节气**，与 [[03_notes/sci-dahan-longitude-300|天文定义卡]]的刻度闭环互为文学表达。
- "腊酒"是岁末时间信号（腊月酿/饮的酒），与尾牙、腊八同属农历岁末序列（见 [[03_notes/trad-dahan-weiya|尾牙卡]]）。

## 适用条件、例外与分歧

- 文本层级：报纸转录本（非古籍直读）。组诗的作者归属（元稹说为主流，亦有疑伪讨论）与文字校勘均待古籍本核验——本卡 confidence medium 封顶的原因。
- "星周"（恒星周年视运动回归）"新律"（古以十二律配十二月，月移律换）的解释为媒体文自注与传统常识层，未引学术注本。

## 关联

[[01_terms/24_大寒|大寒索引]] · [[03_notes/lit-luyou-dahan-jiangling|陆游《大寒出江陵西門》]] · [[03_notes/hist-yueling-dahan-pentads|大寒三候]] · [[03_notes/sci-dahan-longitude-300|黄经300°定义]] · [[02_topics/literature-art|文学艺术]]

## 待人工确认

- 组诗古籍本（敦煌P.5000等写本系统、《全唐诗》录文）直读与异文校勘；作者归属的学界讨论综述。
- 与其他节气侧元稹组诗卡（如已建各波次）的文本源统一问题。

## 修改记录

- 2026-09-16（第一轮）：建卡。诚实标注"报纸转录本"层级（报纸页直读、诗文本非古籍直读）；作者归属与校勘列入待核，confidence medium。
