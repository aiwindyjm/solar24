---
schema_version: '0.1.0'
id: 'sci-lixia-vs-meteorological-summer'
type: 'ScientificFact'
title: '立夏≠气象入夏：天文夏季开始与22℃入夏标准的两套口径'
solar_terms: ['lixia']
season: 'summer'
dimensions: ['climate', 'scientific-interpretation']
region: ['中国（入夏判定逐地不同；"全国大部分地区"表述为机构概括口径）']
period: '现行气象业务口径（QX/T 152-2012 标准原文未直读）'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-weather-com-cn-lixia', 'source-xinhua-lixia-2026', 'source-szmb-season-division']
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
    'statement': '立夏是天文学意义上夏季的开始，不代表气象学入夏：气象口径下"若一个地方的日平均气温稳定在22℃以上，才能确定为夏季开始"（中国天气网）；深圳市气象局候温口径为"候温大于或等于22℃为夏季"。立夏时节（5月上旬）中国仅福州至南岭一线以南真正入夏，东北、西北部分地区才刚入春，"全国大部分地区平均气温在18—20℃上下"（以上南北分布表述均为中国天气网机构概括，未附分区统计）。同期气候特征：江南气温回升、降雨增多，长江中下游和华南5月中旬雨量迅速增大，华南进入前汛期盛期，故有"立夏、小满，江满、河满"之说。',
    'exceptions': [
      '两套口径并行：天文口径按太阳黄经（见黄经卡），气象口径按气温序列；二者相差可达一至两个月的地区差异未逐省核验',
      '"全国大部分地区平均气温18—20℃""仅福州至南岭一线以南入夏"为机构科普概括，非分区气候统计结论',
      '行业标准 QX/T 152-2012《气候季节划分》原文未直读（继承深圳气象局源卡的待核说明）',
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

# 立夏与气象入夏：两套"夏天"

## 研究问题

立夏是不是"夏天开始了"？天文口径与气象口径差别有多大？

## 证据

- **已直接读取**：新华网2026年立夏稿（[[04_sources/source-xinhua-lixia-2026|source-xinhua-lixia-2026]]）："立夏是天文学意义上夏季的开始，并不代表着气象学上真正入夏。"
- **已直接读取**：中国天气网立夏稿（[[04_sources/source-weather-com-cn-lixia|source-weather-com-cn-lixia]]）：入夏标准"若一个地方的日平均气温稳定在22℃以上，才能确定为夏季开始"；"立夏时节中国南北的气温差异较大，而且同一地区波动频繁"；"全国大部分地区平均气温在18—20℃上下"；汛期段（长江中下游和华南5月中旬雨量迅速增大、两广珠江水系和福建闽江水系年最高水位多在此段、"立夏、小满，江满、河满"）。
- **复用已读源**：深圳市气象局四季划分（[[04_sources/source-szmb-season-division|source-szmb-season-division]]）："气候上采用候温(五天平均温度)来划分，即候温低于或等于10℃为冬季，候温在10~22℃之间为春、秋季，候温大于或等于22℃为夏季。"

## AI 摘要 / 解释

- 与立春的"两套春"（[[03_notes/sci-lichun-vs-meteorological-spring|立春与气象入春]]）同构：**立夏标记的是太阳位置刻度，不是气温阈值**。5月上旬全国多数地区尚未满足22℃入夏标准，"立夏=入夏"在天文与气象两套语言里都是不准确的。
- 立夏时节的真实气候要务是**水**：江南降雨增多、华南前汛期、江河高水位窗口——这是"立夏看夏"农事压力（[[03_notes/trad-lixia-nongshi|农事卡]]）与防汛的制度背景，比"天热"更接近该节气的功能内核。

## 适用条件、例外与分歧

- 无跨来源冲突：22℃标准在中国天气网（日平均稳定）与深圳气象局（候温≥22℃）表述一致，新华网独立确认"天文夏≠气象夏"。
- 分区入夏日期的逐年统计、气候变化下的入夏提前趋势，本轮无数据源，未建卡。

## 关联

[[01_terms/07_立夏|立夏索引]] · [[03_notes/sci-lixia-longitude-45|立夏天文定义]] · [[03_notes/sci-lichun-vs-meteorological-spring|立春与气象入春（同构卡）]] · [[02_topics/climate|气候维度]]

## 待人工确认

- QX/T 152-2012《气候季节划分》标准原文直读；各地常年入夏日与立夏日差值的分区统计（国家气候中心数据源）。

## 修改记录

- 2026-09-16（第一轮建库）：建卡。天文/气象双口径三源直读一致；南北分布表述按机构概括口径归属处理。
- 2026-09-16（审核阶段）：路由 human-review-required（pending-primary-source：QX/T 152-2012 标准原文未直读），status draft → in-review，入 [[07_research/sections/review-lixia|审核分节]] B 区，等待人工 Decision。
