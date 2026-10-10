---
schema_version: '0.1.0'
id: 'sci-daxue-longitude-255'
type: 'ScientificFact'
title: '大雪的天文定义：太阳黄经 255°'
solar_terms: ['daxue']
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
    'source-ihchina-daxue-feature',
    'source-weathercn-daxue-2008',
    'source-xinhua-daxue-topic',
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
    'statement': '二十四节气按太阳黄经等分黄道24段、每段15°；大雪为太阳到达黄经255°的时刻，是二十四节气中的第21个节气、冬季的第三个节气，出现在每年公历12月7日或8日（2017年实例为12月7日）。',
    'exceptions': [
      '"12月6日交节"的个别年份表述（检索摘要见人大农发学院等页）本轮未获直读机构源支持，日期范围下限以直读的"12月7日或8日"为准，12月6日待核',
      'GB/T 33661-2017 正文条款仍未直读（继承立春待办），法定表述待人工核读',
      '节气时刻按东经120°北京时间计，与其他时区的"当天"可能相差一日',
      '新华网专题页为薄内容落地页（仅导语），作第三印证而非独立支撑',
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

# 大雪的天文定义：太阳黄经 255°

## 研究问题

大雪在现代天文与历法口径中的定义是什么？这个定义有多可靠？

## 证据

- **已直接读取**：非遗网大雪专题（[[04_sources/source-ihchina-daxue-feature|source-ihchina-daxue-feature]]）："大雪是二十四节气中的第21个节气，此时太阳到达黄经255°，今年的大雪节气是12月7日（农历丁酉年十月二十日）。"（页面创建于2017-12-07，当年即12月7日交节。）
- **已直接读取**：中国天气网节气专题（[[04_sources/source-weathercn-daxue-2008|source-weathercn-daxue-2008]]）：""大雪"节气在每年的12月7日或8日，其时视太阳到达黄经255度。"
- **已直接读取**：新华网专题导语（[[04_sources/source-xinhua-daxue-topic|source-xinhua-daxue-topic]]）：""大雪"是农历二十四节气中的第21个节气，更是冬季的第三个节气，标志着仲冬时节的正式开始，其时视太阳到达黄经255度。"
- **元数据级**：GB/T 33661-2017（[[04_sources/source-gbt-33661-openstd|source-gbt-33661-openstd]]）为现行国家标准，信息页已读，正文条款待人工核读。
- 黄道24等分、每段黄经15°的机制属共享知识，见 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]（香港天文台直读）。

## 解释（Scientific Interpretation）

现代口径下，大雪与所有节气一样是**太阳视运动在黄道上的位置刻度**：从春分0°起算，小雪240°之后15°即大雪255°，再过15°到冬至270°。因为它绑定太阳位置而非地球天气，"大雪"这个名称描述的是黄河流域古典经验中降雪概率增大的时段（见 [[03_notes/hist-daxue-naming|大雪命名卡]]、[[03_notes/sci-daxue-jieqi-vs-tianqi|节气大雪≠天气大雪]]），不是对当日降雪量的预报。节气/中气分组下"大雪，十一月節"属"节"，与其后的"冬至，十一月中"配对——机制见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气/中气与置闰]]。

## 适用条件与待核验

- 待核验1：GB/T 33661-2017 正文中的节气定义条款原文（在线预览含验证码，人工核读）。
- 待核验2：12月6日交节的年份实例与逐年时刻（紫金山天文台《中国天文年历》为权威计算来源，尚未建立本节气 Source）。
- 注意：本卡三个直读机构源中，非遗网与中国天气网、新华网互为独立发布方，黄经与序位表述一致；日期方面两源分别给出"12月7日（2017实例）"与"12月7日或8日"。

## 关联

[[01_terms/21_大雪|大雪索引]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_topics/astronomy|天文维度]]

## 待人工确认

- GB/T 标准正文条款引用；12月6日交节实例的权威历表核读。

## 修改记录

- 2026-09-16（第一轮）：建卡。三个直读机构源（非遗网/中国天气网/新华网）支撑黄经255°与序位；日期范围按直读口径写"12月7日或8日"，"12月6日"仅见于检索摘要，记入待核验。
- 2026-09-16（审核阶段）：路由引擎判 human-review-required（finding=pending-primary-source：GB/T 33661-2017 正文未直读，继承立春待办），列入大雪审核包 B 区，状态 draft → in-review。
