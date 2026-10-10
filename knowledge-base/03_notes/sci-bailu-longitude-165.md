---
schema_version: '0.1.0'
id: 'sci-bailu-longitude-165'
type: 'ScientificFact'
title: '白露的天文定义：太阳黄经 165°'
solar_terms: ['bailu']
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
    'source-ihchina-bailu-feature',
    'source-xinhua-bailu-2022',
    'source-rmrbhwb-bailu-2016',
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
    'statement': '白露是二十四节气中的第十五个节气、秋季第三个节气：太阳到达黄经165°的时刻为白露，出现在每年公历9月7日至9日。节气按太阳黄经等分黄道24段、每段15°（共享命题，见02_shared）。',
    'exceptions': [
      'GB/T 33661-2017 正文条款仍未直读（继承立春待办），法定表述待人工核读；"9月7日至9日、黄经165°"已获非遗网白露专题、新华社2022稿、人民日报海外版2016稿三个直读来源支持（其中非遗网仅给2017年9月7日实例+黄经165°，日期范围由另两源直读）',
      '非遗网/农大等汇编稿的"秋季第三个节气"表述与新华社稿一致，本轮三个直读源中两个明写此定位',
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

# 白露的天文定义：太阳黄经 165°

## 研究问题

白露在现代天文与历法口径中的定义是什么？这个定义有多可靠？

## 证据

- **已直接读取**：中国非遗网白露专题（[[04_sources/source-ihchina-bailu-feature|source-ihchina-bailu-feature]]）："太阳到达黄经165°时，是二十四节气中的第十五个节气——白露，今年的白露时间是2017年9月7日（农历丁酉年七月十七日）。"
- **已直接读取**：新华社2022白露稿（[[04_sources/source-xinhua-bailu-2022|source-xinhua-bailu-2022]]）："公历每年9月7日至9日，当太阳到达黄经165度时，为白露之始，它是二十四节气中第十五个节气，也是秋季第三个节气。"并给出该年精确时刻"北京时间9月7日23时32分"。
- **已直接读取**：人民日报海外版2016（[[04_sources/source-rmrbhwb-bailu-2016|source-rmrbhwb-bailu-2016]]）："每年公历的9月7日到9日之间是白露，今年为7日。"
- **元数据级**：GB/T 33661-2017（[[04_sources/source-gbt-33661-openstd|source-gbt-33661-openstd]]）为现行国家标准，正文条款待人工核读。
- 黄道24等分、每段黄经15°的通用定义已由共享卡承载：[[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]。

## 解释（Scientific Interpretation）

白露是从春分0°起算的黄经165°刻度，是秋季节气（立秋135°/处暑150°/白露165°/秋分180°）的第三个。因为它绑定太阳位置而非任何地区天气，定义对全球同时成立；"白露=天气转凉见露"只是中纬度地区的经验联想。日期逐年漂移一日内的原因是节气间隔不完全等于24等分天（地球公转速度不均，此解释本轮无直读来源，不作为已证事实）。

## 适用条件与待核验

- 待核验1：GB/T 33661-2017 正文中的白露条款（在线预览含验证码，待人工核读）。
- 待核验2：逐年白露时刻的权威数据（紫金山天文台《中国天文年历》，尚未建立 Source）。
- 注意：非遗网2017年专题页只给出当年实例（9月7日）；"9月7日至9日"范围由新华社与人民日报海外版两个直读源支撑，非遗网实例与其相容。

## 关联

[[01_terms/15_白露|白露索引]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[03_notes/hist-bailu-naming|白露的命名]] · [[02_topics/astronomy|天文维度]]

## 待人工确认

- GB/T 标准正文条款引用；白露时刻权威数据源入库（继承全节气待办）。

## 修改记录

- 2026-09-16（第一轮）：建卡。黄经与日期获三个不同机构直读（非遗网/新华社/人民日报海外版，后两者与非遗网文字部分平行但发布方独立），GB/T 正文直读仍为待办。
- 2026-09-16（审核阶段）：引擎路由 human-review-required（finding=pending-primary-source，GB/T 正文未直读），status draft → in-review（verified-candidate）。AI 不做最终审核，等待人工 Decision。
