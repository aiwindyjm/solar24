---
schema_version: '0.1.0'
id: 'sci-xiaoshu-longitude-105'
type: 'ScientificFact'
title: '小暑的天文定义：太阳黄经 105°'
solar_terms: ['xiaoshu']
season: 'summer'
dimensions: ['astronomy', 'scientific-interpretation']
region: ['全球（黄经定义与地域无关）；气候经验因纬度而异']
period: '现代天文学口径；2017年起有国家标准表述'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
contested: false
source_ids:
  [
    'source-xinhua-xiaoshu-2022',
    'source-forestry-xiaoshu-2026',
    'source-ihchina-xiaoshu-feature',
    'source-xinhua-xiaoshu-poetic-2024',
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
risk_level: 'medium'
impact_level: 'term'
claim:
  {
    'statement': '小暑是二十四节气中的第十一个节气、夏季的第五个节气；太阳到达黄经105°时为小暑之始，公历日期通常落在7月6日至8日。',
    'exceptions': [
      '公历日期范围存在口径差：新华网2022稿作"7月6日、7日或8日"，国家林草局2026稿与非遗网专题页作"7月7日或8日"——本卡取并集"7月6日至8日"，7月6日交节仅见于新华社口径',
      'GB/T 33661-2017 正文条款仍未直读（沿用立春卡同项待办），法定表述待人工核读',
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

# 小暑的天文定义：太阳黄经 105°

## 研究问题

小暑在现代天文与历法口径中的定义是什么？"小"暑的"小"指什么？

## 证据

- **已直接读取**：新华网2022稿（[[04_sources/source-xinhua-xiaoshu-2022|source-xinhua-xiaoshu-2022]]，天津民俗专家由国庆受访）："公历每年7月6日、7日或8日，当太阳到达黄经105度时，为小暑之始，它是二十四节气中第十一个节气，也是夏季第五个节气。"
- **已直接读取**：国家林业和草原局政府网2026稿（[[04_sources/source-forestry-xiaoshu-2026|source-forestry-xiaoshu-2026]]，中国绿色时报供稿，独立于新华社的国务院部门政府网）："每年公历7月7日或8日，太阳到达黄经105°时进入小暑节气。"
- **已直接读取**：新华社2024诗意节令稿（[[04_sources/source-xinhua-xiaoshu-poetic-2024|source-xinhua-xiaoshu-poetic-2024]]）："当太阳到达黄经105度，小暑悄然而至。"（第三源印证）
- **已直接读取**：非遗网小暑节气专题页（[[04_sources/source-ihchina-xiaoshu-feature|source-ihchina-xiaoshu-feature]]，2017，curl 504 后经 web_reader 读取）："小暑，是二十四节气中的第十一个节气，每年公历7月7日或8日，太阳到达黄经105°时为小暑。"（第四源、非遗机构口径）

## 解释（Scientific Interpretation）

现代口径下，节气是**太阳视运动在黄道上的位置刻度**（黄道24等分、每段15°的体系命题见 [[02_topics/astronomy|天文维度]] 与共享卡，不在此复述）：夏至90°之后第二个刻度即小暑105°，再过15°为大暑120°。"小暑"命名的本义见 [[03_notes/hist-yueling-xiaoshu-pentads|《月令七十二候集解》小暑条]]——"就热之中分为大小，月初为小"，即古人以"小/大"区分炎热程度尚未达极与达极，小暑表示盛夏开始而非最热点。三伏（一年最热时段的传统标记）以干支计日另行推算、不与黄经绑定，见 [[03_notes/sci-xiaoshu-sanfu-gengday-mechanism|三伏机制卡]]。

## 适用条件与待核验

- 待核验1：GB/T 33661-2017 正文中的节气定义条款原文（人工核读在线预览或 PDF）。
- 待核验2：逐年小暑交节时刻的权威数值（紫金山天文台《中国天文年历》，尚未建 Source；新华社2022稿载2022年时刻为7月7日10时38分，单年单源）。
- 日期口径差（6-8日 vs 7-8日）建议人工以天文年历逐年核对后收敛。

## 关联

[[01_terms/11_小暑|小暑索引]] · [[03_notes/hist-yueling-xiaoshu-pentads|月令小暑三候]] · [[03_notes/sci-xiaoshu-sanfu-gengday-mechanism|三伏机制]] · [[02_topics/astronomy|天文维度]]

## 待人工确认

- GB/T 标准正文条款引用；小暑日期范围两源口径差的收敛（天文年历逐年数据）。

## 修改记录

- 2026-09-16（建卡）：新华社与国家林草局两个独立机构直读支撑黄经105°与公历日期范围；发现 brief 线索页（solar_details/50.html）实为三门祭冬项目页，小暑真实专题页为 solar_details/6971（经 web_reader 补读后纳入为第四源）。status=in-review（引擎路由 human-review-required·pending-primary-source）。
