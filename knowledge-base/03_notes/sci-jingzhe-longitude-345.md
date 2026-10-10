---
schema_version: '0.1.0'
id: 'sci-jingzhe-longitude-345'
type: 'ScientificFact'
title: '惊蛰的天文定义：太阳黄经 345°'
solar_terms: ['jingzhe']
season: 'spring'
dimensions: ['astronomy', 'scientific-interpretation', 'calendar']
region: ['全球（黄经定义与地域无关）；日期经验因纬度而异']
period: '现代天文学口径；2017年起有国家标准表述'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
contested: false
risk_level: 'medium'
impact_level: 'term'
source_ids:
  [
    'source-ihchina-jingzhe-feature',
    'source-xinhua-jingzhe-2022',
    'source-weathercn-jingzhe-origin',
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
    'statement': '惊蛰是二十四节气中的第三个节气，为太阳到达黄经345°的时刻，出现在每年公历3月5日至6日；古籍《月令七十二候集解》将其归为"二月节"（农历定位）。',
    'exceptions': [
      'GB/T 33661-2017 正文条款仍未直读（在线预览含验证码），法定表述待人工核读；"3月5-6日、黄经345°"已获非遗网惊蛰专题、新华网、中国天气网三个直读机构来源支持',
      '节气时刻按东经120°北京时间计，与其他时区的"当天"可能相差一日',
      '"二月节"为《月令七十二候集解》所载农历定位（见三候卡），因农历置闰机制，惊蛰在农历中的月日逐年漂移',
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

# 惊蛰的天文定义：太阳黄经 345°

## 研究问题

惊蛰在现代天文与历法口径中的定义是什么？这个定义有多可靠？

## 证据

- **已直接读取**：中国非遗网惊蛰专题（[[04_sources/source-ihchina-jingzhe-feature|source-ihchina-jingzhe-feature]]）："惊蛰，是二十四节气中的第三个节气，古称'启蛰'，此时，太阳运行到黄经345°。2018年的惊蛰时间是3月5日（农历戊戌年正月十八）。"
- **已直接读取**：新华网2022年惊蛰稿（[[04_sources/source-xinhua-jingzhe-2022|source-xinhua-jingzhe-2022]]）："每年公历3月5日或6日太阳到达黄经345度时，进入'惊蛰'节气，是为二十四节气中第三个节气，春季第三个节气，也是仲春开始的标志。"（含2022年具体时刻：3月5日22时44分）
- **已直接读取**：中国天气网惊蛰专题（[[04_sources/source-weathercn-jingzhe-origin|source-weathercn-jingzhe-origin]]）："每年3月5日或6日，太阳到达黄经345度时为'惊蛰'。"
- **元数据级**：GB/T 33661-2017（[[04_sources/source-gbt-33661-openstd|source-gbt-33661-openstd]]）为现行国家标准，信息页已读，正文条款待人工核读。
- "二月节"定位出自《月令七十二候集解》直读（见 [[03_notes/hist-yueling-jingzhe-pentads|惊蛰三候卡]]）；节气/中气分组与置闰机制见共享卡 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气]]，不复述。

## 解释（Scientific Interpretation）

现代口径下，惊蛰是**太阳视运动在黄道上的位置刻度**：从春分0°起算的第345°位置点。因为定义绑定太阳位置而非任何天气事件，"惊蛰之雷"只是中纬度地区的经验联想——中国初雷时间南北差异很大（见 [[03_notes/sci-jingzhe-thunder-climate|惊蛰与初雷]]）。节气在公历中的日期稳定（3月5-6日），在农历中因置闰而漂移（2018年落正月十八，见非遗网引例）。

## 适用条件与待核验

- 待核验1：GB/T 33661-2017 正文中的节气定义条款原文。
- 待核验2：逐年惊蛰时刻的权威数值（紫金山天文台《中国天文年历》为国内权威计算来源，尚未建立 Source）。
- 注意：黄道24等分、每段15°的系统级命题已有共享卡，本卡只锚定惊蛰单个刻度。

## 关联

[[01_terms/03_惊蛰|惊蛰索引]] · [[03_notes/sci-jingzhe-thunder-climate|惊蛰与初雷]] · [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]] · [[02_topics/astronomy|天文维度]]

## 待人工确认

- GB/T 标准正文条款引用；节气时刻权威数据源正式入库。

## 修改记录

- 2026-09-16（第一轮研究）：建卡。三机构直读一致（非遗网/新华网/中国天气网，发布方互相独立），confidence 定 high；GB/T 正文未读保留在 exceptions。
