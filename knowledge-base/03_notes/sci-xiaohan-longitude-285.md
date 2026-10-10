---
schema_version: '0.1.0'
id: 'sci-xiaohan-longitude-285'
type: 'ScientificFact'
title: '小寒的天文定义：太阳黄经 285°'
solar_terms: ['xiaohan']
season: 'winter'
dimensions: ['astronomy', 'scientific-interpretation', 'calendar']
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
    'source-ihchina-xiaohan-feature',
    'source-xinhua-xiaohan-2023',
    'source-hko-solar-terms',
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
    'statement': '小寒为二十四节气中的第23个节气、冬季第五个节气，出现在每年公历1月5日或6日，此时太阳到达黄经285°；它也是每年公历新年开始后迎来的第一个节气，与大寒同处农历十二月（故称"跨年节气"）。',
    'exceptions': [
      '"1月5日至7日"的下限表述（1月7日交节）本轮仅见于检索摘要级转述，两直读机构源均作"1月5日或6日"，claim 采用直读口径；1月7日是否可能待逐年数据核验',
      'GB/T 33661-2017 正文条款仍未直读（继承立春待办），法定表述待人工核读',
      '节气时刻按东经120°北京时间计，与其他时区的"当天"可能相差一日',
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

# 小寒的天文定义：太阳黄经 285°

## 研究问题

小寒在现代天文与历法口径中的定义是什么？"第23个""跨年节气"的身份如何确证？

## 证据

- **已直接读取**：中国非遗网小寒专题（[[04_sources/source-ihchina-xiaohan-feature|source-ihchina-xiaohan-feature]]）："每年1月5日或6日，太阳到达黄经285°时为小寒……小寒是二十四节气中的第23个节气……也是跨年的节气。"
- **已直接读取**：新华网2023小寒稿（[[04_sources/source-xinhua-xiaohan-2023|source-xinhua-xiaohan-2023]]）："每年公历1月5日或6日，太阳到达黄经285度时，小寒节气开始。它是二十四节气中第二十三个节气，冬季第五个节气，也是进入公历新一年的第一个节气。"
- **共享直读源**：香港天文台（[[04_sources/source-hko-solar-terms|source-hko-solar-terms]]）——黄道24等分、每段黄经15°的系统机制（285° = 冬至270° + 15°，序位机制不在此复述，见 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]）。
- **元数据级**：GB/T 33661-2017（[[04_sources/source-gbt-33661-openstd|source-gbt-33661-openstd]]）为现行国家标准，正文条款待人工核读。
- 实例：非遗网页载"2018年的小寒时间是1月5日（农历丁酉年十一月十九日）"——该年小寒落在农历十一月而非十二月（农历月与节气月的错位实例，见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气/中气分组]]；"跨年节气"指其时段横跨公历年份更替，非遗网原句自证）。

## 解释（Scientific Interpretation）

小寒是太阳视运动黄经刻度上的第23站：从冬至270°起再行15°。因为定义绑定太阳位置，它对全球任何经纬度同时成立；"小寒=最冷"是中纬度地区的气候经验（该经验命题的真伪与地域分布见 [[03_notes/sci-xiaohan-vs-dahan-temperature|小寒与大寒谁更冷]]，本卡不作气候断言）。日期在公历中稳定于1月5日或6日，与其在农历中漂移（十月、十一月、十二月均可能）形成对照——这是节气属阳历成分的直接体现（机制见共享卡，不复述）。

## 适用条件与待核验

- 待核验1：GB/T 33661-2017 正文条款原文（继承立春待办）。
- 待核验2：逐年交节时刻（紫金山天文台《中国天文年历》为权威计算来源，尚未建立 Source）；"1月7日交节"是否存在的逐年核算。
- 待核验3：两直读机构源三候第三候均作"雉始鸲"，与《月令》直读"雉雊"异文（见三候卡），不影响本卡天文命题。

## 关联

[[01_terms/23_小寒|小寒索引]] · [[03_notes/hist-yueling-xiaohan-pentads|小寒三候]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_topics/astronomy|天文维度]]

## 待人工确认

- GB/T 标准正文条款引用；逐年交节时刻数据源入库。

## 修改记录

- 2026-09-16（建卡）：非遗网与新华网两独立机构直读互证（黄经285°/1月5日或6日/第23个），HKO/GB/T 作系统机制与标准层引用；"1月5日至7日"下限降入 exceptions。

- 2026-09-16（审核阶段）：路由 human-review-required（pending-primary-source：GB/T 正文未直读），status draft → in-review。AI 不做最终审核，等待人工 Decision。
