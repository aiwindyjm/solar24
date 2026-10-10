---
schema_version: '0.1.0'
id: 'sci-dashu-sanfu-zhongfu-heat'
type: 'ScientificFact'
title: '大暑与中伏："冷在三九，热在中伏"及温湿指数的气候学核对'
solar_terms: ['dashu']
season: 'summer'
dimensions: ['climate', 'calendar', 'scientific-interpretation']
region: ['中国（气象统计以30余个省会级城市为准；区域差异显著）']
period: '气象数据为1991-2020年常年统计；稿件为2022年'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
contested: false
risk_level: 'medium'
impact_level: 'term'
source_ids:
  [
    'source-xinhua-dashu-2022',
    'source-ihchina-dashu-feature',
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
claim:
  {
    'statement': '大暑节气与三伏的中伏高度重合：新华社2022稿表述为"大暑节气正值''三伏''里的中伏前后，大暑大部分时段与中伏重合，而高温、高湿又是中伏的特点，正所谓''冷在三九，热在中伏''"；非遗网大暑专题亦称大暑"此时正值二伏前后，是一年中最热的时节"。中国气象局公共气象服务中心回顾全国30余个省会级城市1991至2020年历史观测数据：从最高气温看，三伏天并不一定是所有地区全年气温最高的时候；但从常年看，大多数省会城市的温湿指数在中伏期间达到高峰——即中伏期间无论气温是否处在巅峰，确实是人体感觉最为闷热的时期。',
    'exceptions': [
      '三伏的推算机制（夏至三庚数头伏的干支计日）为共享知识，见 [[03_notes/sci-xiaoshu-sanfu-gengday-mechanism|小暑三伏机制卡]]，本卡不复述机制，只记大暑与中伏的重合关系',
      '温湿指数结论为新华社对气象局公共气象服务中心工作的转述，原始统计发布页未直读，按机构转述级对待',
      '"一年中最热"是就多数地区常年统计而言的概括，原文自带"我国幅员辽阔，同一时间不同地域的气象条件往往差异较大"限定，不得写成所有地区无条件成立',
      '非遗网专题另称"七下八上"（7月下旬和8月上旬）为北方汛期关键期兼"我国大部分地区一年中最热的阶段"——汛期部分为北方地域限定，气温部分为该页概括性表述，引用时保留限定语',
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

# 大暑与中伏：最热时段的历法叠合与体感核对

## 研究问题

"热在中伏"与"大暑"是什么关系？大暑最热是天文定义还是气候统计结论？

## 证据（机构直读）

- **已直接读取**：新华社2022大暑稿（[[04_sources/source-xinhua-dashu-2022|source-xinhua-dashu-2022]]）：
  > "大暑节气正值'三伏'里的中伏前后，大暑大部分时段与中伏重合，而高温、高湿又是中伏的特点，正所谓'冷在三九，热在中伏'。"
  > "中国气象局公共气象服务中心通过回顾全国30余个省会级城市常年（1991至2020年）的历史观测数据，发现由于我国幅员辽阔，同一时间不同地域的气象条件往往差异较大，从最高气温来看，三伏天并不一定是所有地区全年气温最高的时候，但从常年来看，大多数省会城市的温湿指数都在中伏期间达到高峰。这意味着，中伏期间不管气温是否处在巅峰，但确实是人体感觉最为闷热的时期。"
- **已直接读取**：非遗网大暑专题（[[04_sources/source-ihchina-dashu-feature|source-ihchina-dashu-feature]]）："大暑是二十四节气的第十二个节气，此时正值二伏前后，是一年中最热的时节。"另："『七下八上』，即7月下旬和8月上旬，是北方汛期的关键期，也是我国大部分地区一年中最热的阶段。"

## 解释（Scientific Interpretation）

- **两套刻度的叠合**：节气按太阳黄经每15°推进（大暑=120°），三伏按干支庚日锚定夏至/立秋推算（机制见 [[03_notes/sci-xiaoshu-sanfu-gengday-mechanism|三伏干支机制卡]]，属小暑波次知识锚）。中伏（夏至后第四个庚日起）绝大多数年份覆盖7月下旬至8月上旬，与大暑节气（7月22-24日交节至立秋前）的15天高度重叠——"热在中伏"因此与大暑在时间上几乎同指一个时段。
- **"最热"的正确表述是体感综合而非单纯气温**：直读的气象统计结论是"最高气温未必全年最高、温湿指数多在中伏达峰"——高温+高湿共同作用下的闷热体感才是"大暑/中伏最热"的实质。这为大暑的公众传播提供了一个精确化的科学叙事（呼应二候"土潤溽暑"的湿热叠加经验，见 [[03_notes/hist-yueling-dashu-pentads|三候卡]]——该呼应是解释层联想，非古籍本义）。
- 季节滞后（夏至后一个多月才最热）的物理机理（海洋/地表热容量）未在直读源中出现，记为待研究，不写成已证事实。

## 适用条件、例外与分歧

- 两直读机构源对"中伏前后/大部分时段重合"的表述一致，无冲突。
- 温湿指数（temperature-humidity index 之类）的具体定义、计算式未在直读稿中给出，原始统计口径待核。
- 逐年例外（中伏10或20天造成的年份差异、厄尔尼诺/台风年偏凉等）不在本卡证据范围内。

## 关联

[[01_terms/12_大暑|大暑索引]] · [[03_notes/sci-xiaoshu-sanfu-gengday-mechanism|三伏干支机制（小暑知识锚）]] · [[03_notes/sci-dashu-longitude-120|大暑黄经定义]] · [[03_notes/hist-yueling-dashu-pentads|大暑三候（土润溽暑）]] · [[02_topics/climate|气候维度]]

## 待人工确认

- 气象局公共气象服务中心温湿指数统计的原始发布（数据口径、城市清单）。
- "大暑大部分时段与中伏重合"的逐年核验（可由三伏日期表+节气日期表机械核对，未做）。

## 修改记录

- 2026-09-16（建卡）：跨节气引用小暑三伏机制卡（合法引用，不复述命题）；温湿指数结论按机构转述级标注；"最热"表述统一收窄为源文限定语内的结论。
- 2026-09-16（路由）：引擎路由 human-review-required（finding=pending-primary-source，气象局公共气象服务中心温湿指数原始统计未直读），状态 draft → in-review。AI 不做最终审核。
