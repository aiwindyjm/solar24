---
schema_version: '0.1.0'
id: 'sci-dahan-longitude-300'
type: 'ScientificFact'
title: '大寒的天文定义：太阳黄经 300°，二十四节气的终点'
solar_terms: ['dahan']
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
    'source-ihchina-dahan-feature',
    'source-xinhua-dahan-topic',
    'source-rmrbhwb-dahan-2016',
    'source-naoj-24sekki-dahan',
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
    'statement': '大寒是二十四节气中的第24个（最后一个）：太阳到达黄经300°的时刻，出现在每年公历1月20日前后。大寒之后下一个节气是立春，二十四节气由此完成一轮循环、重新开始。',
    'exceptions': [
      'GB/T 33661-2017 正文条款仍未直读（继承立春波次待办），法定表述待人工核读；"1月20日前后、黄经300°、最后一个节气"已获非遗网专题、新华网专题、人民日报海外版专版、日本国立天文台四个直读机构来源支持',
      '具体交节时刻逐年不同（如2016年为1月20日23时27分，人民日报海外版）；"1月19-21日"更宽的表述仅见于检索摘要级，未采用',
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

# 大寒的天文定义：太阳黄经 300°

## 研究问题

大寒在现代天文与历法口径中的定义是什么？"最后一个节气"的循环闭环如何表述才不失实？

## 证据

- **已直接读取**：中国非遗网大寒专题（[[04_sources/source-ihchina-dahan-feature|source-ihchina-dahan-feature]]）："大寒是二十四节气中的最后一个，每年1月20日前后，太阳到达黄经300°时即为大寒……至此，节气轮回，下一个节气就是立春，新一轮的循环往复即将到来。"
- **已直接读取**：新华网大寒专题导语（[[04_sources/source-xinhua-dahan-topic|source-xinhua-dahan-topic]]）："每年1月20日前后太阳到达黄经300°时为'大寒'……大寒是二十四节气中最后一个节气。"
- **已直接读取**：人民日报海外版专版物候篇（[[04_sources/source-rmrbhwb-dahan-2016|source-rmrbhwb-dahan-2016]]）："大寒，是二十四节气中的最后一个节气，也是腊月的代表节气（即'中气'）。它一般都落在公历1月20日前后，这时太阳到达黄经300°，今年的大寒交节时刻为1月20日23时27分。"
- **已直接读取（跨语言）**：日本国立天文台暦計算室（[[04_sources/source-naoj-24sekki-dahan|source-naoj-24sekki-dahan]]）：大寒（だいかん）"十二月中 300° 冷気が極まって、最も寒さがつのる"。
- **元数据级**：GB/T 33661-2017（[[04_sources/source-gbt-33661-openstd|source-gbt-33661-openstd]]）为现行国家标准，正文条款待人工核读。

## 解释（Scientific Interpretation）

现代口径下，大寒与所有节气一样是**太阳视运动在黄道上的位置刻度**：从春分0°起算，大寒位于300°，是24等分刻度的最后一个格。它的"终点"身份有两层：

1. **刻度闭环**：300°+15°=315°=立春。大寒走完，节气序列回到起点——这不是同一个立春，而是下一轮周期的立春。二十四节气是循环刻度而非线性事件序列（体系完整记载见 [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]]，本卡不复述序列）。
2. **历法身份**：大寒是农历十二月的**中气**（人民日报海外版"腊月的代表节气（即'中气'）"直读；《月令》"十二月中"直读见 [[03_notes/hist-yueling-dahan-pentads|大寒三候卡]]）。中气与置闰的机制属系统级知识，见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]——值得注意的是大寒是节气环上最后一个中气，下一个中气已是下一轮的雨水，岁末与岁首在中气序列上首尾相接。

因为定义绑定太阳位置而非地球气候，黄经300°对全球任何经纬度同时成立；"大寒=一年最冷"只是中纬度地区的经验联想，且该经验本身与气象统计有出入（见 [[03_notes/sci-dahan-vs-xiaohan-cold|小寒与大寒谁更冷]]）。

## 适用条件与待核验

- 待核验1：GB/T 33661-2017 正文中的节气定义条款原文（继承立春待办，适用全部节气）。
- 待核验2：逐年交节时刻的权威数值（紫金山天文台《中国天文年历》为国内权威计算来源，尚未建立 Source；2016年"1月20日23时27分"为本轮唯一具体时刻直读值）。
- "1月19-21日"宽度表述（百度百科等）未获直读，claim 采用"1月20日前后"。

## 关联

[[01_terms/24_大寒|大寒索引]] · [[03_notes/hist-dahan-naming|"寒气之逆极"命名卡]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]] · [[02_topics/astronomy|天文维度]]

## 待人工确认

- GB/T 标准正文条款引用（与其他节气共担）；节气时刻权威数据源正式入库。

## 修改记录

- 2026-09-16（第一轮）：建卡。四个独立机构直读（非遗网/新华网/人民日报海外版/日本国立天文台）互证，confidence 定 high；循环闭环表述以"300°+15°=315°=立春"的刻度逻辑与非遗网"节气轮回"直读为限，不引入未经核验的哲学表述。
