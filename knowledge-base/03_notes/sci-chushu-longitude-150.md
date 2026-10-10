---
schema_version: '0.1.0'
id: 'sci-chushu-longitude-150'
type: 'ScientificFact'
title: '处暑的天文定义：太阳黄经 150°'
solar_terms: ['chushu']
season: 'autumn'
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
    'source-ihchina-chushu-feature',
    'source-xinhua-chushu-2022',
    'source-gbt-33661-openstd',
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
    'statement': '处暑为二十四节气中的第十四个节气、秋季第二个节气：太阳到达黄经150°的时刻为处暑，出现在每年公历8月22日至24日。',
    'exceptions': [
      'GB/T 33661-2017 正文条款仍未直读（继承立春待办），法定表述待人工核读；"黄经150°、8月22-24日、第十四个/秋季第二个"已获非遗网处暑专题与新华社2022稿两个不同机构直读来源支持',
      '节气时刻按东经120°北京时间计，与其他时区的"当天"可能相差一日',
      '非遗网专题页以2017年为例：处暑日为8月23日（该年因农历闰六月，处暑落农历七月初二而非"七月中"的典型位置）——单年实例不外推为逐年规律',
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

# 处暑的天文定义：太阳黄经 150°

## 研究问题

处暑在现代天文与历法口径中的定义是什么？"第十四个、秋季第二个"的位置表述有哪些机构直读支撑？

## 证据

- **已直接读取**：中国非遗网处暑专题（[[04_sources/source-ihchina-chushu-feature|source-ihchina-chushu-feature]]）："太阳到达黄经150°时，为二十四节气中的第十四个节气——处暑，今年的处暑时间是2017年8月23日（农历丁酉年七月初二）。"
- **已直接读取**：新华社2022处暑稿（[[04_sources/source-xinhua-chushu-2022|source-xinhua-chushu-2022]]，民俗专家由国庆受访）："公历每年8月22日至24日，当太阳到达黄经150度时，为处暑之始，它是二十四节气中第十四个节气，也是秋季第二个节气。"
- **元数据级**：GB/T 33661-2017（[[04_sources/source-gbt-33661-openstd|source-gbt-33661-openstd]]）为现行国家标准，信息页已读，正文条款待人工核读。

## 解释（Scientific Interpretation）

现代口径下，处暑是**太阳视运动在黄道上的位置刻度**：从春分0°起算的第10个15°段终点即150°（立秋135°之后15°）。因为定义绑定太阳位置而非地球气候，它对全球任何经纬度同时成立；"处暑=暑热终止"只是中纬度地区的经验联想（见 [[03_notes/sci-chushu-climate-autumn-transition|处暑气候：由热转凉与秋老虎]]——南方暑热常在此后延续）。历法机制详见 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]；处暑在节气/中气分组中属**中气**（"處暑，七月中"，见 [[03_notes/hist-yueling-chushu-pentads|处暑三候]]与 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]），故农历置闰以"不含中气之月为闰月"的规则与其位置相关。

## 适用条件与待核验

- 待核验1：GB/T 33661-2017 正文中的节气定义条款原文（人工核读）。
- 待核验2：逐年交节时刻的权威数据源（紫金山天文台《中国天文年历》）尚未入库；2017年8月23日、2022年8月23日11时16分为两稿各自实例。
- 注意：2017年处暑落农历七月初二（闰六月年），提示"七月中"是月序定位的常态而非逐年事实——节气公历日期稳定、农历日期漂移（机制见 [[02_shared/sci-solarterms-calendar-role|历法角色]]）。

## 关联

[[01_terms/14_处暑|处暑索引]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_topics/astronomy|天文维度]]

## 待人工确认

- GB/T 标准正文条款引用；逐年交节时刻数据源入库。
- "8月22日至24日"下限（22日）仅见新华社口径，非遗网专题页未给日期范围——是否再找一个机构源（如中国政府网）复核。

## 修改记录

- 2026-09-16（第一轮）：建卡。黄经150°/日期范围由非遗网专题页与新华社2022稿两个不同机构直读支撑，confidence 定 high；GB/T 正文直读待办继承立春。
- 2026-09-16（审核阶段）：路由引擎判 human-review-required（finding: pending-primary-source——GB/T 正文未直读），列入处暑审核包 B 区，状态 draft → in-review。
