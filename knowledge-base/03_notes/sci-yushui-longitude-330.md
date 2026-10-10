---
schema_version: '0.1.0'
id: 'sci-yushui-longitude-330'
type: 'ScientificFact'
title: '雨水的天文定义：太阳黄经 330°'
solar_terms: ['yushui']
season: 'spring'
dimensions: ['astronomy', 'scientific-interpretation']
region: ['全球（黄经定义与地域无关）；日期经验因纬度而异']
period: '现代天文学口径；2017年起有国家标准表述（正文未直读）'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  ['source-xinhua-yushui-feature', 'source-ihchina-yushui-feature', 'source-naoj-24sekki-yushui']
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
    'statement': '雨水是二十四节气中的第二个节气，为太阳到达黄经330°的时刻，出现在每年公历2月18日至20日前后（非遗网表述为"2月18日或19日开始，到3月4日或5日结束"，即含整个节气时段的起止日）。',
    'exceptions': [
      '起止口径存在两种表述："2月18日至20日前后"（新华网，指交节时刻所在日）与"2月18日或19日开始，至3月4日或5日结束"（非遗网，含15天节气时段）——二者所指不同，引用需注明口径',
      'GB/T 33661-2017 正文条款未直读（在线预览含验证码），法定表述待人工核读',
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

# 雨水的天文定义：太阳黄经 330°

## 研究问题

雨水在现代天文与历法口径中的定义是什么？这个定义有多可靠？

## 证据

- **已直接读取**：新华社"节气里的中国"雨水稿（[[04_sources/source-xinhua-yushui-feature|source-xinhua-yushui-feature]]）："每年公历2月18日至20日前后，当太阳到达黄经330度，我们迎来了雨水节气。"——330°、日期范围、"第二个节气"齐备。
- **已直接读取**：中国非遗网雨水专题（[[04_sources/source-ihchina-yushui-feature|source-ihchina-yushui-feature]]）："雨水是二十四节气中的第二个节气，一般从公历2月18日或19日开始，到3月4日或5日结束。2018年的雨水时间是2月19日（农历戊戌年正月初四）。"——注意该页未标黄经度数，日期为时段口径。
- **已直接读取（跨语言印证）**：日本国立天文台暦計算室（[[04_sources/source-naoj-24sekki-yushui|source-naoj-24sekki-yushui]]）：二十四节气一覧表"雨水（うすい）正月中 330°"。
- **元数据级**：GB/T 33661-2017 为现行国家标准（信息页已读，见 [[04_sources/source-gbt-33661-openstd|source-gbt-33661-openstd]]），正文条款待人工核读。

## 解释（Scientific Interpretation）

雨水在立春（315°）之后15°：太阳视运动沿黄道又行进一段，到达330°。与全部节气一样，它绑定太阳位置而非任何地区天气——"雨水"之名源于黄河流域由雪转雨的经验联想（命名逻辑见 [[03_notes/sci-yushui-rain-transition|由雪转雨卡]]），定义本身对全球同时成立。黄道24等分框架见 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]；雨水在农历编算中作为"正月中气"承担置闰锚点功能的机制不在本卡重复，见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]。

## 适用条件与待核验

- 待核验1：GB/T 33661-2017 正文中雨水条目的法定表述（人工下载 PDF 核读）。
- 待核验2：雨水交节时刻的逐年数值（紫金山天文台《中国天文年历》为权威计算来源，尚未建 Source）。

## 关联

[[01_terms/02_雨水|雨水索引]] · [[03_notes/sci-yushui-rain-transition|雨水由雪转雨]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_topics/astronomy|天文维度]]

## 待人工确认

- GB/T 标准正文条款引用；2018年"雨水=农历正月初四"实例可与紫金山天文台年历核对。

## 修改记录

- 2026-09-16（建卡）：依立春卡范式建立；两独立直读机构源（新华网、非遗网）+日本国立天文台跨语言印证，日期两种口径差异写入 exceptions。
- 2026-09-16（路由）：引擎路由 human-review-required（finding：pending-primary-source，GB/T 正文未直读），状态改 in-review，列审核分节 B 区。
