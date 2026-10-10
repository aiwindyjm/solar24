---
schema_version: '0.1.0'
id: 'sci-lidong-vs-meteorological-winter'
type: 'ScientificFact'
title: '立冬 ≠ 气象入冬：天文冬季之始与候温入冬标准的错位'
solar_terms: ['lidong']
season: 'winter'
dimensions: ['climate', 'scientific-interpretation']
region: ['中国（入冬日期自北向南大幅延后；华南沿海无冬、青藏高原长冬无夏）']
period: '现代气候学口径（候温法）；引用统计为1981-2010常年值与2023年稿数据'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  [
    'source-szmb-season-division',
    'source-weathercn-lidong-225',
    'source-xinhua-lidong-2023',
    'source-ihchina-lidong-feature',
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
    'statement': '立冬是天文/历法意义上的冬季第一个节气，不等于气象学入冬：气候学以候温（连续5天平均气温）稳定低于10℃为入冬标准。立冬时节（11月7-8日前后）中国东北、西北、华北北部及西藏、川西已达入冬标准，华北南部至江南及西南大部仍为秋季，两广沿海与闽南尚有夏季；常年入冬日期自北向南大幅延后（漠河9月上旬、北京约10月28日、石家庄11月7日、南京11月19日，深圳常年平均入冬更迟至1月21日），长江流域的冬季要到小雪节气前后才真正开始。',
    'exceptions': [
      '入冬具体阈值表述存在口径差：深圳气象局作"五天滑动平均气温≤10℃且日平均气温≤10℃那天起"，中国天气网稿作"连续5天的平均气温低于10℃时，其首日即为冬季的开始日"——滑动平均算法与"稳定通过"判定细节以气象行业标准 QX/T 152-2012 为准（正文未直读）',
      '各省会常年入冬日期引自新华网2023稿（数据：中国天气网，1981-2010常年口径待核）',
      '深圳"平均入冬1月21日"为深圳市气象局1991-2020三十年平均，且深圳入秋常年在11月8日——立冬日在深圳常年恰为深秋而非冬',
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

# 立冬 ≠ 气象入冬

## 研究问题

"立冬为冬之始"在气候学上成立吗？中国各地实际入冬在何时？

## 证据

- **直读**：深圳市气象局业务知识库（[[04_sources/source-szmb-season-division|source-szmb-season-division]]，本轮重抓）："气候上采用候温(五天平均温度)来划分，即候温低于或等于10℃为冬季……入冬，五天滑动平均气温≤10度，且日平均气温≤10度那天起。按此标准，深圳最新三十年（1991-2020年）平均入冬、入春、入夏、入秋日期分别为：1月21日、2月3日、4月20日、11月8日。"
- **直读**：中国天气网北京站（[[04_sources/source-weathercn-lidong-225|source-weathercn-lidong-225]]）："在下半年若连续5天的平均气温低于10℃时，其首日即为冬季的开始日……北京……常年入冬约在10月28日前后……东北、西北、华北北部及西藏、川西已入冬；华北南部至江南及西南大部为秋季；两广、闽南和台湾仍是夏季。"
- **直读**：新华网2023稿（[[04_sources/source-xinhua-lidong-2023|source-xinhua-lidong-2023]]）："立冬不等于入冬……冬季前沿开始跨越秦岭淮河，北方大部已入冬，而南方大部仍处于秋季……省会城市常年入冬日期……石家庄（11月7日）、西安（11月11日）、济南（11月10日）、郑州（11月13日）、合肥（11月18日）、南京（11月19日）。"
- **直读**：非遗网立冬专题（[[04_sources/source-ihchina-lidong-feature|source-ihchina-lidong-feature]]）："按气候学标准，'立冬为冬日始'的说法与黄淮地区的气候规律基本相符。实际上，除全年无冬的华南沿海和长冬无夏的青藏高原外，各地的冬季并非都始于立冬日。我国最北部的漠河以及大兴安岭以北地区，9月上旬就进入冬季了，而长江流域的冬季要到小雪节气前后才真正开始。"

## 解释（Scientific Interpretation）

立冬绑定太阳黄经225°（见 [[03_notes/sci-lidong-longitude-225|黄经定义]]），而气象冬季由**当地气温序列**定义：连续5天（滑动）平均气温稳定≤10℃方为入冬。因为热量传导滞后于太阳辐射、且中国南北纬差与地形悬殊，两条"冬始"线在11月上旬**只在黄淮一带大致重合**（非遗网口径），向北（漠河9月上旬已入冬）与向南（长江流域到小雪前后、华南沿海无冬）都大幅错开。深圳常年平均入冬日（1月21日）与立冬相差约两个半月，且常年入秋日恰为11月8日前后——同一日期在中国最北与最南分别可以是"深冬已两月"与"刚入秋"。

## 适用条件与待核验

- 待核验1：QX/T 152-2012《气候季节划分》标准正文（当前仅有两机构科普口径互证，滑动平均与"稳定通过"算法细节未读到标准原文）。
- 待核验2：逐年入冬日期的官方数据源（中国天气网/各省气候中心产品）未入库；省会日期清单为媒体转述的常年值。
- 注意：本卡命题与 [[03_notes/sci-lichun-vs-meteorological-spring|立春≠气象入春]]、立秋卡同构但证据独立（四套直读机构源均为立冬专属稿件/页面）。

## 关联

[[01_terms/19_立冬|立冬索引]] · [[03_notes/sci-lidong-longitude-225|立冬天文定义]] · [[03_notes/hist-yueling-lidong-pentads|立冬三候（水始冰=古典进程观）]] · [[02_topics/climate|气候维度]]

## 待人工确认

- QX/T 152-2012 标准条款直读；常年入冬日期逐年数据源入库。

## 修改记录

- 2026-09-16（第一轮）：建卡。四源直读（深圳气象局/中国天气网/新华网/非遗网），候温口径与全国入冬梯度齐备；两处阈值表述差异如实记入 exceptions。
