---
schema_version: '0.1.0'
id: 'sci-xiaoxue-longitude-240'
type: 'ScientificFact'
title: '小雪的天文定义：太阳黄经 240°'
solar_terms: ['xiaoxue']
season: 'winter'
dimensions: ['astronomy', 'scientific-interpretation']
region: ['全球（黄经定义与地域无关）；日期经验因纬度而异']
period: '现代天文学口径；2017年起有国家标准表述'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  [
    'source-gbt-33661-openstd',
    'source-ihchina-xiaoxue-feature',
    'source-xinhua-xiaoxue-2022',
    'source-xinhua-xiaoxue-2019',
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
    'statement': '二十四节气按太阳黄经等分黄道24段、每段15°；小雪为太阳到达黄经240°的时刻，是二十四节气中的第20个节气、冬季第二个节气，出现在每年公历11月22日或23日。',
    'exceptions': [
      'GB/T 33661-2017 正文条款仍未直读（在线预览含验证码），法定表述待人工核读；"11月22日或23日、黄经240°"已获非遗网小雪专题、新华社2022稿、中新社2019稿（新华网转载）三个直读机构来源支持',
      '节气时刻按东经120°北京时间计，与其他时区的"当天"可能相差一日',
      '2017年实例：小雪交节于11月22日，农历丁酉年十月初五（非遗网专题页）——"农历十月初五"为该年特例，不可反推每年对应关系',
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

# 小雪的天文定义：太阳黄经 240°

## 研究问题

小雪在现代天文与历法口径中的定义是什么？这个定义有多可靠？

## 证据

- **已直接读取**：中国非遗网小雪专题（[[04_sources/source-ihchina-xiaoxue-feature|source-ihchina-xiaoxue-feature]]）："小雪，是二十四节气中的第20个节气。11月22日或23日，太阳到达黄经240°时为小雪节气。今年的小雪时间是2017年11月22日（农历丁酉年十月初五）。"
- **已直接读取**：新华社2022"节气里的中国"稿（[[04_sources/source-xinhua-xiaoxue-2022|source-xinhua-xiaoxue-2022]]）："这是二十四节气中的'老廿'，冬季第二个节气，时间在每年公历11月22日或23日，此时太阳到达黄经240度。"
- **已直接读取**：中新社2019稿（[[04_sources/source-xinhua-xiaoxue-2019|source-xinhua-xiaoxue-2019]]，新华网转载）："它是二十四节气中的第20个节气，时间在每年公历11月22或23日。此时，太阳到达黄经240°。"
- **元数据级**：GB/T 33661-2017（[[04_sources/source-gbt-33661-openstd|source-gbt-33661-openstd]]）为现行国家标准，信息页已读，正文条款待人工核读。

三个直读机构来源分属三个发布方（中国艺术研究院非遗中心、新华社、中国新闻社），口径完全一致。

## 解释（Scientific Interpretation）

现代口径下，小雪与其他节气一样是**太阳视运动在黄道上的位置刻度**（见 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]）：从春分0°起算，立冬225°之后15°即小雪240°。因为定义绑定太阳位置而非地球天气，"小雪"这个名字说的不是"这天会下小雪"，而是黄河流域古典经验里"此期降水由雨转雪、雪尚不大"的气候趋势命名（命名原文见 [[03_notes/hist-xiaoxue-naming|小雪命名卡]]；节气名与当日降雪无关的辨析见 [[03_notes/sci-xiaoxue-not-necessarily-snow|小雪≠必然降雪]]）。冬季第二个节气、全年第20个的序位，与《淮南子》以来的完整序列一致（[[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]]）。

## 适用条件与待核验

- 待核验1：GB/T 33661-2017 正文中的节气定义条款原文（人工核读）。
- 待核验2：小雪具体时刻的逐年数值（《中国天文年历》为国内权威计算来源，尚未建立 Source）。
- "11月22日或23日"为三个机构稿一致口径；是否存在极少数年份落于11月21日或24日，本轮无直读依据，不作断言。

## 关联

[[01_terms/20_小雪|小雪索引]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_topics/astronomy|天文维度]] · [[03_notes/sci-xiaoxue-not-necessarily-snow|小雪≠必然降雪]]

## 待人工确认

- GB/T 标准正文条款引用；小雪逐年交节时刻权威数据源入库。

## 修改记录

- 2026-09-16（建卡）：三机构直读口径一致（240°/11月22日或23日/第20个），confidence 定为 high；GB/T 正文直读留待人工。
- 2026-09-16（路由入包）：引擎路由 human-review-required（finding: pending-primary-source——GB/T 正文未直读），status draft → in-review。AI 不做最终审核。
