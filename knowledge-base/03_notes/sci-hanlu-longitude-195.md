---
schema_version: '0.1.0'
id: 'sci-hanlu-longitude-195'
type: 'ScientificFact'
title: '寒露的天文定义：太阳黄经 195°'
solar_terms: ['hanlu']
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
    'source-ihchina-hanlu-feature',
    'source-xinhua-hanlu-2022',
    'source-xinhua-hanlu-2021',
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
    'statement': '寒露是二十四节气中的第十七个节气、秋季第五个节气：太阳到达黄经195°的时刻为寒露，公历日期落在10月上旬（新华社两稿分别作"每年公历的10月7日、8日或9日"与"公历每年10月7日至9日"；非遗网寒露专题页作"公历10月8日或9日"）。节气按太阳黄经等分黄道24段、每段15°（共享命题，见02_shared）。',
    'exceptions': [
      'GB/T 33661-2017 正文条款仍未直读（在线预览含验证码），法定表述待人工核读；"黄经195°、第十七个节气"已获非遗网寒露专题与新华社2021/2022稿三个直读来源支持',
      '公历日期范围两系并见：新华社两稿作10月7日至9日，非遗网专题页作10月8日或9日，未获逐年《中国天文年历》数据裁决，按并流传本登记、不作排他表述',
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

# 寒露的天文定义：太阳黄经 195°

## 研究问题

寒露在现代天文与历法口径中的定义是什么？这个定义有多可靠？

## 证据

- **已直接读取**：中国非遗网寒露专题（[[04_sources/source-ihchina-hanlu-feature|source-ihchina-hanlu-feature]]）："寒露是二十四节气的第17个节气，时间在公历10月8日或9日，太阳到达黄经195°时，今年的寒露时间是2017年10月8日（农历丁酉年八月十九日）。"
- **已直接读取**：新华社2022寒露稿（[[04_sources/source-xinhua-hanlu-2022|source-xinhua-hanlu-2022]]）："公历每年10月7日至9日，当太阳到达黄经195度时为寒露之始，它是二十四节气中第十七个节气，也是秋季第五个节气。"并给出当年交节时刻"北京时间10月8日15时22分"。
- **已直接读取**：新华社2021寒露稿（[[04_sources/source-xinhua-hanlu-2021|source-xinhua-hanlu-2021]]）："每年公历的10月7日、8日或9日，太阳到达黄经195度，为'寒露'节气开始"，交节时刻据《2021年中国天文年历》"北京时间10月8日9时39分"。
- **元数据级**：GB/T 33661-2017（[[04_sources/source-gbt-33661-openstd|source-gbt-33661-openstd]]）为现行国家标准，信息页已读，正文条款待人工核读。
- 黄道24等分、每段黄经15°的通用定义已由共享卡承载：[[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]。

## 解释（Scientific Interpretation）

寒露是从春分0°起算的黄经195°刻度，是秋季节气（立秋135°/处暑150°/白露165°/秋分180°/寒露195°）的第五个、倒数第二个。因为它绑定太阳位置而非任何地区天气，定义对全球同时成立；"寒露=天气转寒见冷露"只是中纬度地区的经验联想（气候层解释另见 [[03_notes/sci-hanlu-cooling-transition|由凉转寒]]）。日期逐年漂移一日内的原因（地球公转速度不均）本轮无直读来源，不作为已证事实。

## 适用条件与待核验

- 待核验1：GB/T 33661-2017 正文中的寒露条款（在线预览或下载 PDF 人工核读）。
- 待核验2：逐年寒露时刻的权威数据（紫金山天文台《中国天文年历》，尚未建立 Source；新华社2021稿的"10月8日9时39分"即标称引自该年历）。
- 注意：日期范围以新华社两稿（10月7日至9日）为主表述；非遗网"10月8日或9日"为2017年页面口径，两系不相容处如实登记，未裁决。

## 关联

[[01_terms/17_寒露|寒露索引]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[03_notes/hist-hanlu-naming|寒露的命名]] · [[03_notes/sci-bailu-longitude-165|白露黄经165°（对偶节气）]] · [[02_topics/astronomy|天文维度]]

## 待人工确认

- GB/T 标准正文条款引用；寒露时刻权威数据源入库（继承全节气待办）。
- "10月7-9日"与"10月8日或9日"两系日期范围的裁决（依《中国天文年历》逐年核算）。

## 修改记录

- 2026-09-16（第一轮）：建卡。黄经与定位获非遗网+新华社两稿（两个独立发布方）直读；GB/T 正文直读仍为待办。
- 2026-09-16（审核阶段）：引擎路由 human-review-required（finding=pending-primary-source，GB/T 正文未直读），status draft → in-review（verified-candidate）。AI 不做最终审核，等待人工 Decision。
