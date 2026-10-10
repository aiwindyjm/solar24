---
schema_version: '0.1.0'
id: 'sci-qingming-longitude-15'
type: 'ScientificFact'
title: '清明的天文定义：太阳黄经 15°'
solar_terms: ['qingming']
season: 'spring'
dimensions: ['astronomy', 'calendar', 'scientific-interpretation']
region: ['全球（黄经定义与地域无关）；日期经验因纬度而异']
period: '现代天文学口径；交节日期由紫金山天文台逐年计算发布'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
contested: false
risk_level: 'medium'
impact_level: 'term'
source_ids:
  [
    'source-ihchina-qingming-feature',
    'source-xinhua-qingming-2024',
    'source-hko-solar-terms',
    'source-pmo-almanac-qa',
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
    'statement': '二十四节气按太阳黄经等分黄道24段、每段15°，春分点为零点；清明为太阳到达黄经15°的时刻（春分后的第一个节气），交节日期只落在每年公历4月4日至6日之间，具体哪一天由中国科学院紫金山天文台计算并对外发布。',
    'exceptions': [
      '黄经15°的数值表述以非遗网清明专题页为准；新华网稿给出的是划分规则（春分点为零点、每运行15度为一个节气）与4月4-6日变动范围，两者在日期范围上互证',
      '节气时刻按东经120°北京时间计，与其他时区的"当天"可能相差一日',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立4；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 清明的天文定义：太阳黄经 15°

## 研究问题

清明在现代天文与历法口径中的定义是什么？为什么它的公历日期在4月4-6日之间浮动？

## 证据

- **已直接读取**：中国非遗网清明专题（[[04_sources/source-ihchina-qingming-feature|source-ihchina-qingming-feature]]）："每年在农历三月初一前后（公历4月4-6日），太阳到达黄经15度时为清明节气。"
- **已直接读取**：新华网2024年科普稿（[[04_sources/source-xinhua-qingming-2024|source-xinhua-qingming-2024]]，受访专家杨婧，中国天文学会会员、天津市天文学会理事）："以春分点为零点，太阳每运行15度为一个节气，等分点就是节气交节的时刻。""清明的时间并不固定，在每年公历的4月4日至6日之间变动。""具体哪天为清明，则由中国科学院紫金山天文台负责计算和对外发布。"
- **既有直读源引用**：黄道24等分、每段黄经15°的总体规则见 [[04_sources/source-hko-solar-terms|香港天文台]]；节气属阳历范畴、公历日期稳定的机制见 [[04_sources/source-pmo-almanac-qa|紫金山天文台历书问答]] 与 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]。
- 推算关系：春分=黄经0°（已直读的新华网稿），清明紧随春分之后一个15°段，故15°数值与两机构直读内容自洽；此推算不另立来源。

## 解释（Scientific Interpretation）

清明与立春等所有节气一样，是**太阳视运动在黄道上的位置刻度**而非天气事件：从春分0°起算的第一个15°段。日期在4月4-6日三天内浮动，是因为一个回归年（约365.2422日）不是日的整数倍，逐年交节时刻缓慢推移；具体日期由紫金山天文台编算发布。清明在节气序列中位于春分之后、谷雨之前（序列见 [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]]）。

## 适用条件与待核验

- GB/T 33661-2017 正文条款仍未直读（沿用立春轮的既有结论，见 [[04_sources/source-gbt-33661-openstd|source-gbt-33661-openstd]]）；本轮未新增核读。
- "唯有清明演变成传统节日"这一文化命题不属本卡（天文命题），见 [[03_notes/hist-qingming-hanshi-merger|寒食清明融合史]]。
- 逐年具体交节时刻（如某年4月4日22时17分）以当年官方发布为准，本卡只锁日期范围与机制。

## 关联

[[01_terms/05_清明|清明索引]] · [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]] · [[02_topics/astronomy|天文维度]] · [[02_topics/calendar|历法维度]]

## 待人工确认

- 是否引入《中国天文年历》逐年交节时刻作为数据源（历轮缺口，非本卡独有）。

## 修改记录

- 2026-09-16（建卡）：以非遗网+新华网双直读机构源建立；日期浮动机制（回归年非整数日）仅到"两源支持日期范围+官方编算"层，未对成因做超出直读来源的展开。
