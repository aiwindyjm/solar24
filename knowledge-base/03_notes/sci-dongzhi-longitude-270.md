---
schema_version: '0.1.0'
id: 'sci-dongzhi-longitude-270'
type: 'ScientificFact'
title: '冬至的天文定义：太阳黄经 270°'
solar_terms: ['dongzhi']
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
    'source-ihchina-dongzhi-feature',
    'source-xinhua-dongzhi-2021',
    'source-xinhuanet-dongzhi-2015',
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
    'statement': '二十四节气按太阳黄经等分黄道24段、每段15°；冬至为太阳到达黄经270°的时刻，是二十四节气中的第22个节气（冬季第4个），出现在每年公历12月21日至23日之间（以12月22日前后为常见）。',
    'exceptions': [
      '"12月21日至23日"为三源合成口径：非遗网作"每年12月22日左右"（直读）、新华网2015稿作"一般12月22-23日"（直读，其口径与新华社2021稿所载2021年12月21日23时59分交节实例存在张力）、新华社2021稿给出12月21日实例（直读）——无单一来源逐字给出21-23日全区间，逐年确切时刻以紫金山天文台《中国天文年历》为准',
      'GB/T 33661-2017 正文条款仍未直读（在线预览含验证码），法定表述待人工核读（继承立春待办）',
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

# 冬至的天文定义：太阳黄经 270°

## 研究问题

冬至在现代天文与历法口径中的定义是什么？这个定义有多可靠？

## 证据

- **已直接读取**：中国非遗网冬至专题（[[04_sources/source-ihchina-dongzhi-feature|source-ihchina-dongzhi-feature]]）："冬至是二十四节气的第22个节气。每年12月22日左右，太阳到达黄经270°时为冬至。"
- **已直接读取**：新华社2021稿（[[04_sources/source-xinhua-dongzhi-2021|source-xinhua-dongzhi-2021]]，受访专家：中科院紫金山天文台科普主管王科超）："根据中科院紫金山天文台的计算，北京时间2021年12月21日23时59分将迎来二十四节气中的冬至。""冬至时太阳运行到视黄经270°处，处在黄道的最南端。"
- **已直接读取**：人民日报海外版2015稿（[[04_sources/source-xinhuanet-dongzhi-2015|source-xinhuanet-dongzhi-2015]]，新华网站点）："这天太阳运行至黄经270度，纬度最南，阳光直射南回归线，北半球白天最短，黑夜最长（北极圈以内则24小时都是黑夜）。"
- **元数据级**：GB/T 33661-2017（[[04_sources/source-gbt-33661-openstd|source-gbt-33661-openstd]]）为现行国家标准，正文条款待人工核读。

## 解释（Scientific Interpretation）

现代口径下，冬至是**太阳视运动到达黄道最南端（黄经270°）的时刻**：太阳直射南回归线，北半球正午太阳高度最低、白昼最短（详见 [[03_notes/sci-dongzhi-shortest-day-year-anchor|白昼最短与回归年锚卡]]）。因为定义绑定太阳位置而非地球气候，它对全球任何经纬度同时成立。历法机制详见 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]；冬至作为中气对农历十一月的锚定作用见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]。

## 适用条件与待核验

- 待核验1：GB/T 33661-2017 正文节气定义条款原文（人工核读）。
- 待核验2：逐年交节时刻以《中国天文年历》为准，本轮未建逐年数据源。
- 日期下限张力已登记于 exceptions（2015稿"22-23日" vs 2021年12月21日实例）。

## 关联

[[01_terms/22_冬至|冬至索引]] · [[03_notes/sci-dongzhi-shortest-day-year-anchor|白昼最短与回归年锚]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_topics/astronomy|天文维度]]

## 待人工确认

- GB/T 标准正文条款引用；日期区间合成口径是否采用GB/T表述替代。

## 修改记录

- 2026-09-16（第一轮）：建卡。三个独立机构直读（非遗网/新华社/人民日报海外版）互证黄经270°与第22节气序位；日期区间以合成口径写入并显式声明合成性质。
- 2026-09-16（审核阶段）：路由判 human-review-required（pending-primary-source：GB/T 正文未直读），status draft → in-review，入审核分节 B 区。
