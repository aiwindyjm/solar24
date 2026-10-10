---
schema_version: '0.1.0'
id: 'sci-lichun-longitude-315'
type: 'ScientificFact'
title: '立春的天文定义：太阳黄经 315°'
solar_terms: ['lichun']
season: 'spring'
dimensions: ['astronomy', 'scientific-interpretation']
region: ['全球（黄经定义与地域无关）；日期经验因纬度而异']
period: '现代天文学口径；2017年起有国家标准表述'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
contested: false
source_ids:
  [
    'source-gbt-33661-openstd',
    'source-hko-solar-terms',
    'source-ihchina-lichun-feature',
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
    'statement': '二十四节气按太阳黄经等分黄道24段、每段15°；立春为太阳到达黄经315°的时刻，是二十四节气中的第一个节气，出现在每年公历2月3日至5日。',
    'exceptions': [
      'GB/T 33661-2017 正文条款仍未直读（在线预览含验证码），法定表述待人工核读；"2月3日至5日、黄经315°"已获非遗网立春专题与紫金山天文台问答两个直读机构来源支持',
      '节气时刻按东经120°北京时间计，与其他时区的"当天"可能相差一日',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': ['GB/T 33661-2017 正文未直读（验证码拦截），已列人审条件；双机构直读（非遗网+PMO）支撑黄经315°与日期'],
    'notes': 'LC-2 依赖卡：黄经315°由非遗网+PMO双机构直读支撑，日期由非遗网直读；GB/T正文核读列为人审条件',
  }
---

# 立春的天文定义：太阳黄经 315°

## 研究问题

立春在现代天文与历法口径中的定义是什么？这个定义有多可靠？

## 证据

- **已直接读取**：香港天文台页面（[[04_sources/source-hko-solar-terms|source-hko-solar-terms]]）："The 24 solar terms divide the ecliptic into 24 equal segments, with 15 degrees of the Sun's longitude between the terms."——黄道24等分、每段黄经15°。
- **已直接读取**：中国非遗网立春专题（[[04_sources/source-ihchina-lichun-feature|source-ihchina-lichun-feature]]）："每年2月3日至5日，太阳到达黄经315°时为立春。"
- **已直接读取**：紫金山天文台《历书科普问题解答》（[[04_sources/source-pmo-almanac-qa|source-pmo-almanac-qa]]）：节气属阳历范畴、立春在公历2月4日左右。
- **元数据级**：GB/T 33661-2017（[[04_sources/source-gbt-33661-openstd|source-gbt-33661-openstd]]）为现行国家标准（主管部门中国科学院），信息页已读，正文条款待人工核读。

## 解释（Scientific Interpretation）

现代口径下，节气不是天气事件，而是**太阳视运动在黄道上的位置刻度**：从春分0°起算，立春位于315°。因为定义绑定太阳位置而非地球气候，它对全球任何经纬度同时成立；"立春=天气转暖"只是中纬度地区的经验联想（见 [[03_notes/sci-lichun-vs-meteorological-spring|立春与气象入春]]）。历法机制详见 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]、[[03_notes/sci-lichun-calendar-position|立春在历法中的位置]]。

## 适用条件与待核验

- 待核验1：GB/T 33661-2017 正文中的节气定义条款原文（在线预览或下载 PDF 人工核读）。
- 待核验2：立春具体时刻的逐年数值（紫金山天文台《中国天文年历》为国内权威计算来源，尚未建立 Source）。
- 注意：节气间隔因地球公转速度不均匀而并非严格15天——此现代解释本轮**没有直接读取的来源**，暂记为待研究，不作为已证事实。

## 关联

[[01_terms/01_立春|立春索引]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_topics/astronomy|天文维度]]

## 待人工确认

- GB/T 标准正文条款引用；节气时刻权威数据源（紫金山天文台/《中国天文年历》）的正式入库。

## 修改记录

- 2026-09-16（模型复盘）：将"公历日期通常落在2月3-5日"从 claim 命题移入 exceptions 待核验项。原因：该日期范围当时仅有检索摘要级转述，与已直读支持的黄经定义混排会虚增证据等级。
- 2026-09-16（证据补强）：新增两个直读机构来源（非遗网立春专题"每年2月3日至5日，太阳到达黄经315°"；紫金山天文台"立春2月4日左右"），日期范围重新并入命题，confidence 由 medium 升为 high。GB/T 正文直读仍为待办，不因多源一致而免除。
- 2026-09-16（审核阶段）：列入 [[07_research/lichun-human-review-package|立春人工审核包]]，状态 draft → in-review（verified-candidate）。AI 不做最终审核，等待人工 Decision。
