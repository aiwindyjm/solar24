---
schema_version: '0.1.0'
id: 'hist-nongshu-shiyi-concept'
type: 'CulturalFact'
title: '农书"时宜"概念：节气指导农事的文献框架（齐民要术基准）'
solar_terms: []
season: null
dimensions: ['agriculture', 'scientific-interpretation']
region: ['中国北方黄河流域中下游（北魏农书经验范围）']
period: '北魏（约6世纪30-50年代成书）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'system'
contested: false
source_ids: ['source-wikisource-qiminyaoshu', 'source-wikisource-shoushitongkao']
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
    'statement': '中国古代农书以"时宜"为 organizing 概念组织农事知识：《齐民要术》以"順天時，量地利"为总纲、以上时/中时/下时三级排播种窗口、并含闰年调整规则——"节气指导农业"在文献层是可直读的农书编纂数据结构，而非后世概括。',
    'exceptions': ['本卡以《齐民要术》卷第一为基准建立；《四时纂要》《授时通考》的时宜表述由 R07-R12 补强后再升级'],
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

# 农书"时宜"概念：节气指导农事的文献框架（齐民要术基准）

## 研究问题

"节气指导农事"这一通行叙述，在一手农书里究竟是什么形态？

## 证据（原文与定位）

- 《氾勝之書》（经《授时通考》卷03天時門·春時辑录，2026-09-25直读）：「種禾無期，因地爲時，三月榆莢時雨膏地强可種禾。」——西汉农书的时宜总纲句，与齐民要术「順天時，量地利」前后相承。

- 总纲句：種穀第三"順天時，量地利，則用力少而成功多。任情返道，勞而無獲。"（直读）
- 三级时序：见 [[02_shared/hist-qimin-zhonggu-shixu|种谷时序卡]]。
- 耕作时机：见 [[02_shared/hist-qimin-gengtian-shouzhong|耕田收种卡]]。

## AI 摘要 / 解释

对 Solar24 的意义：向国际用户解释"节气=农业时间系统"时，最有力的一手证据不是现代转述，而是农书本身的**编排结构**——贾思勰把节气/物候写进了播种指令。解释层引用时保留"北魏·黄河流域"限定（该框架本身随农书传播，但证据地域在此）。

## 适用条件、例外与分歧

- 地域时代红线：所引为**北魏黄河流域中下游**农书经验（贾思勰活动于山东河北一带），不可写成"中国农民都……"或当代农事。
- 版本与文字以维基文库本直读为准（卷第一 2026-09-25 逐字提取）；点校本（《齐民要术校释》）核对列入人工待办。

## 关联

[[02_shared/README|共享知识]] · [[02_shared/fact-solarterms-yellow-river-origin|黄河流域起源]] · [[02_topics/agriculture|农业维度]]

## 待人工确认

- 与缪启愉《齐民要术校释》核对文字与句读；"麻菩楊"等异文用字核点校本。

## 修改记录

- 2026-09-25（R04/R05，第二轮）：建卡，证据为维基文库卷第一逐字直读。
- 2026-09-25（R10）：补《氾胜之书》时宜句（授时通考卷03辑录）与齐民要术引文异文登记。
