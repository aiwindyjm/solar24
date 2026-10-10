---
schema_version: '0.1.0'
id: 'sci-xiaoshu-climate-heat-humid'
type: 'ScientificFact'
title: '小暑气候：盛夏开始的高温高湿时段（出梅、入伏、南方28-30℃）'
solar_terms: ['xiaoshu']
season: 'summer'
dimensions: ['climate', 'scientific-interpretation']
region: ['中国（气温概述以南方为限；雷暴表述限南方大部分地区）']
period: '当代气候概述（2021-2026机构稿口径）'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'medium'
contested: false
source_ids:
  [
    'source-forestry-xiaoshu-2026',
    'source-ihchina-xiaoshu-feature',
    'source-ihchina-xiaoshu-huashuo-2021',
    'source-xinhua-xiaoshu-2022',
    'source-xinhua-xiaoshu-poetic-2024',
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
risk_level: 'medium'
impact_level: 'term'
claim:
  {
    'statement': '小暑标志中国盛夏（季夏）高温高湿时段的开始，且气候过程分区不同步：江淮流域梅雨即将结束、进入伏旱期，华北、东北地区进入多雨季，华南西部进入暴雨最多的季节，南方呈"东旱西涝"格局（非遗网专题页分区域表述）；小暑期间南方地区平均气温普遍在28-30℃左右，一般年份7月中旬起华南、东南低海拔河谷地区出现平均气温高于30℃、日最高气温高于35℃的集中时段（国家林草局稿概述）；"上蒸下煮"对应湿热交蒸的体感特征——东汉《释名》"暑，煮也，热如煮物也"已将"暑"释为湿热如煮。',
    'exceptions': [
      '气温数值为政府网科普稿概述，未附气象数据出处，未经国家气候中心/气象局数据直读验证',
      '"出梅"的气象学判据（东亚梅雨期结束的客观标准）与逐年出梅日期未建源；江淮/华北东北/华南的区域表述为非遗网汇编口径，分区统计未核',
      '小暑不是全年最热时段——多数地区极端高温出现在小暑之后的大暑至三伏中（新华社稿"小暑还不是一年中最热之时"），此为机构口径，逐站统计未做',
      '"我国大部分地区进入炎热季节"（新华社2022）为概括性表述，未逐区核验',
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

# 小暑气候：盛夏的高温高湿

## 研究问题

小暑在中国气候年程中的位置是什么？"上蒸下煮"有无物候-字源依据？

## 证据

- **已直接读取**：国家林草局稿（[[04_sources/source-forestry-xiaoshu-2026|source-forestry-xiaoshu-2026]]）："小暑期间南方地区平均气温普遍在28—30℃左右，一般年份的7月中旬华南、东南低海拔河谷地区，会开始出现平均气温高于30℃、日最高气温高于35℃的集中时段。""东汉刘熙《释名・释天》曰：暑，煮也，热如煮物也。暑区别于干热，专指湿热交蒸、闷如蒸煮的天气。"
- **已直接读取**：非遗网小暑节气专题页（[[04_sources/source-ihchina-xiaoshu-feature|source-ihchina-xiaoshu-feature]]，2017；同段文字亦见 [[04_sources/source-ihchina-xiaoshu-huashuo-2021|source-ihchina-xiaoshu-huashuo-2021]]）："这时江淮流域梅雨即将结束，盛夏开始，气温升高，并进入伏旱期，而华北、东北地区进入多雨季。""华南西部进入暴雨最多的季节，我国南方大部分地区这一东旱西涝的气候特点……""小暑的标志是：出梅、入伏。这一时节的雷雨常是'倒黄梅'的信号。"
- **已直接读取**：新华社2022稿（[[04_sources/source-xinhua-xiaoshu-2022|source-xinhua-xiaoshu-2022]]）："此时节，温风已至，暑气正浓，我国大部分地区进入炎热季节。""小暑与夏至相比，白天已经开始变短，但是气温却一直在升高，很多地区的平均气温已接近或超过30摄氏度。"（夏至后白昼变短而气温续升的滞后现象）
- **已直接读取**：新华社2024稿（[[04_sources/source-xinhua-xiaoshu-poetic-2024|source-xinhua-xiaoshu-poetic-2024]]）："当前，全国多地高温、同时多地强降水，大江南北进入一年之中的高温高湿阶段。"

## 解释（Scientific Interpretation）

- 季节滞后（thermal lag）：太阳辐射最大值在夏至，但地表热量收支要到小暑之后才达盈余峰值——"白天已变短、气温却一直在升高"（新华社稿直读表述）是这一机制的现象级描述；机制本身本轮无天文/气象专门直读源，按解释层对待。
- "暑"的字源（《释名》"煮也"）与农谚"上蒸下煮"（见 [[03_notes/trad-xiaoshu-nongshi|农事农谚卡]]）构成湿热气候经验的古今同构表达。
- 出梅入伏的"双重时间标记"：梅雨（气象事件）结束与三伏（历法时段，见 [[03_notes/sci-xiaoshu-sanfu-gengday-mechanism|三伏机制卡]]）开始大体在小暑前后衔接——两者机制不同（一为天气过程、一为干支计日），不可混称。

## 适用条件与待核验

- 待核验1：气象局/国家气候中心的小暑节气气候公报（气温、雷暴、出梅统计）直读。
- 待核验2：季节滞后的天文-气象学解释专门源。
- 数值（28-30℃/35℃）使用时必须带"政府网科普稿概述"限定。

## 关联

[[01_terms/11_小暑|小暑索引]] · [[03_notes/trad-xiaoshu-nongshi|农事农谚]] · [[03_notes/sci-xiaoshu-sanfu-gengday-mechanism|三伏机制]] · [[02_topics/climate|气候维度]]

## 待人工确认

- 气候统计数据的权威源替换；出梅判据；季节滞后表述是否可升级。

## 修改记录

- 2026-09-16（建卡）：四机构直读源，但气温数值无数据出处，confidence=medium；季节滞后机制显式标注为解释层；status=draft。
- 2026-09-16（证据补强）：补读非遗网2017专题页（6971），命题升级为分区域表述（江淮伏旱/华北东北多雨/华南暴雨/东旱西涝），消除原先的笼统"南方"概括。
