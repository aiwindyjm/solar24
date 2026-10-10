---
schema_version: '0.1.0'
id: 'sci-lidong-longitude-225'
type: 'ScientificFact'
title: '立冬的天文定义：太阳黄经 225°'
solar_terms: ['lidong']
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
    'source-ihchina-lidong-feature',
    'source-weathercn-lidong-225',
    'source-xinhua-lidong-2023',
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
    'statement': '二十四节气按太阳黄经等分黄道24段、每段15°；立冬为太阳到达黄经225°的时刻，是二十四节气中的第19个节气、冬季的第一个节气，出现在每年公历11月7日或8日（2017年、2023年实例分别为11月7日、11月8日）。',
    'exceptions': [
      'GB/T 33661-2017 正文条款仍未直读（在线预览含验证码，继承立春待办），法定表述待人工核读',
      '新华网2023稿未提黄经度数，仅作日期（11月8日实例）与"立冬不等于入冬"口径的交叉；黄经225°由非遗网与中国天气网两个直读机构源支持',
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

# 立冬的天文定义：太阳黄经 225°

## 研究问题

立冬在现代天文与历法口径中的定义是什么？这个定义有多可靠？

## 证据

- **已直接读取**：非遗网立冬专题（[[04_sources/source-ihchina-lidong-feature|source-ihchina-lidong-feature]]）："立冬，是二十四节气的第19个节气。每年11月7、8日之间，太阳位于黄经225°时为立冬节气。立冬后，日照时间将继续缩短，正午太阳高度继续降低。今年的立冬时间是2017年11月7日（农历丁酉年九月十九日）。"
- **已直接读取**：中国天气网北京站（[[04_sources/source-weathercn-lidong-225|source-weathercn-lidong-225]]）："今天（11月7日）是'立冬'节气，太阳已到达黄经225°，它是农历冬季的第一个节气。"
- **已直接读取**：新华网2023年立冬稿（[[04_sources/source-xinhua-lidong-2023|source-xinhua-lidong-2023]]）："今天（11月8日）我国进入立冬节气"（2023年交节实例；未提黄经）。
- **元数据级**：GB/T 33661-2017（[[04_sources/source-gbt-33661-openstd|source-gbt-33661-openstd]]）为现行国家标准，信息页已读，正文条款待人工核读。
- 黄道24等分、每段黄经15°的机制属共享知识，见 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]（香港天文台直读）。

## 解释（Scientific Interpretation）

现代口径下，立冬与所有节气一样是**太阳视运动在黄道上的位置刻度**：从春分0°起算，霜降210°之后15°即立冬225°，再过15°到小雪240°。因为它绑定太阳位置而非地球天气，它对全球任何经纬度同时成立；"立冬=冬天开始"只是民间习惯与中纬度经验的联想——气候学上中国多数地区此时尚未达到入冬标准（见 [[03_notes/sci-lidong-vs-meteorological-winter|立冬与气象入冬]]）。节气/中气分组下"立冬，十月節"属"节"，与其后的"小雪，十月中"配对——机制见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气/中气与置闰]]。

## 适用条件与待核验

- 待核验1：GB/T 33661-2017 正文中的节气定义条款原文（人工核读）。
- 待核验2：立冬逐年交节时刻的权威数据源（紫金山天文台《中国天文年历》尚未建立本节气 Source）；11月7日/8日之外的罕见交节日（如11月6日或9日个别年份）未直读核证。
- 注意：本卡两个黄经直读机构源（非遗网、中国天气网）互为独立发布方；日期"11月7、8日之间"（非遗网）与"11月7日"（天气网2012稿）、"11月8日"（新华网2023稿）两组实例一致。

## 关联

[[01_terms/19_立冬|立冬索引]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_topics/astronomy|天文维度]]

## 待人工确认

- GB/T 标准正文条款引用；立冬逐年时刻权威历表入库。

## 修改记录

- 2026-09-16（第一轮）：建卡。非遗网+中国天气网两个直读机构源支撑黄经225°与序位，新华网2023稿补11月8日实例（未提黄经，记入 exceptions）；confidence high。
