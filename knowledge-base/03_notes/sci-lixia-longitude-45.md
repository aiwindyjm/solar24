---
schema_version: '0.1.0'
id: 'sci-lixia-longitude-45'
type: 'ScientificFact'
title: '立夏的天文定义：太阳黄经 45°'
solar_terms: ['lixia']
season: 'summer'
dimensions: ['astronomy', 'scientific-interpretation']
region: ['全球（黄经定义与地域无关）；日期经验因纬度而异']
period: '现代天文学口径；交节时刻由紫金山天文台《中国天文年历》逐年编算发布'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  [
    'source-ihchina-lixia-feature',
    'source-weather-com-cn-lixia',
    'source-xinhua-lixia-2026',
    'source-hko-solar-terms',
    'source-pmo-almanac-qa',
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
    'statement': '二十四节气按太阳黄经等分黄道24段、每段15°；立夏为太阳到达黄经45°的时刻，是二十四节气中的第七个节气、夏季的第一个节气，交节日期在公历5月上旬（中国天气网表述为"一般在每年公历的5月5日或6日"；新华网2026年稿表述为"通常只在公历5月4日、5日、6日之间变动"，并载2023-2026年实例：5月6日、5月5日、5月5日、5月5日）。',
    'exceptions': [
      '交节日期范围存在三种流传表述：本卡两直读来源作"5月5日或6日"与"5月4日、5日、6日之间变动"；常见的"每年5月5日至7日"表述本轮未获任何直读机构来源支持（仅见于百科类搜索摘要），暂不采信，待人工裁定或以《中国天文年历》逐年数据为准',
      '节气时刻按东经120°北京时间计，与其他时区的"当天"可能相差一日',
      'GB/T 33661-2017 正文条款仍未直读（继承立春待办），法定表述待人工核读',
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

# 立夏的天文定义：太阳黄经 45°

## 研究问题

立夏在现代天文与历法口径中的定义是什么？"5月5-7日"这一流行日期表述能否成立？

## 证据

- **已直接读取**：中国非遗网立夏专题（[[04_sources/source-ihchina-lixia-feature|source-ihchina-lixia-feature]]）："立夏是农历二十四节气中的第七个节气，也是夏季的第一个节气，此时太阳到达黄经45度。2017年的立夏时间是5月5日，即农历丁酉年四月初十。"
- **已直接读取**：中国天气网（中国气象局主办）立夏稿（[[04_sources/source-weather-com-cn-lixia|source-weather-com-cn-lixia]]）："太阳到达黄经45度时为立夏，时间一般在每年公历的5月5日或6日。"——45°定义的独立机构直读印证。
- **已直接读取**：新华网2026年立夏稿（[[04_sources/source-xinhua-lixia-2026|source-xinhua-lixia-2026]]）：黄道24等分、春分点0度起点、每15度一节气；"具体到立夏，日期通常只在公历5月4日、5日、6日之间变动"；交节时刻逐年变化系地球公转非匀速（2023-2025年实例：6日2时19分、5日8时10分、5日13时57分）；2026年为5月5日19时49分，出处为紫金山天文台《中国天文年历》。
- **复用已读源**：香港天文台黄道24等分每段15°框架（[[04_sources/source-hko-solar-terms|source-hko-solar-terms]]）、紫金山天文台节气属阳历范畴问答（[[04_sources/source-pmo-almanac-qa|source-pmo-almanac-qa]]）。

## 解释（Scientific Interpretation）

现代口径下，立夏是**太阳视运动到达黄经45°的精确时刻**（春分0°起算的第三个15°节点），不是天气事件。因为定义绑定太阳位置而非地球气候，它对全球任何经纬度同时成立；"立夏=天气变热"只是中纬度地区的经验联想，气象入夏另有标准（见 [[03_notes/sci-lixia-vs-meteorological-summer|立夏与气象入夏]]）。历法机制详见 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]。

## 适用条件与待核验

- **日期表述冲突（本卡核心边界）**："每年5月5日至7日"的流行三段式表述在两个直读机构来源中均未出现；新华网稿甚至包含5月4日。四个直读实例年份（2017/2023/2024-2026）全部落在5月5日或6日。任何对外文案的日期表述应采用"公历5月5日前后（常见5月5日或6日）"并注明口径，或以待核验形式处理"5月5-7日"。
- 待核验1：GB/T 33661-2017 正文中的立夏条款（在线预览含验证码，未读）。
- 待核验2：立夏交节时刻的逐年权威数值（《中国天文年历》正式入库）。

## 关联

[[01_terms/07_立夏|立夏索引]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_topics/astronomy|天文维度]]

## 待人工确认

- "5月5-7日 / 5月5日或6日 / 5月4-6日"三种表述的采信口径（建议以紫金山天文台逐年数据为准）。
- GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）。

## 修改记录

- 2026-09-16（第一轮建库）：建卡。黄经45°获非遗网+中国天气网双机构直读、日期表述采两直读来源口径；流行"5月5-7日"表述因无直读支持记入 exceptions 冲突项。
- 2026-09-16（审核阶段）：路由 human-review-required（pending-primary-source：GB/T 33661-2017 正文未直读），status draft → in-review，入 [[07_research/sections/review-lixia|审核分节]] B 区，等待人工 Decision。
