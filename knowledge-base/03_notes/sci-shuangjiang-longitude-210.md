---
schema_version: '0.1.0'
id: 'sci-shuangjiang-longitude-210'
type: 'ScientificFact'
title: '霜降的天文定义：太阳黄经 210°，秋季最后一个节气'
solar_terms: ['shuangjiang']
season: 'autumn'
dimensions: ['astronomy', 'calendar', 'scientific-interpretation']
region: ['全球（黄经定义与地域无关）；日期经验因纬度而异']
period: '现代天文学口径；2017年起有国家标准表述（GB/T 33661-2017 正文待人工核读）'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  [
    'source-ihchina-shuangjiang-feature',
    'source-xinhua-shuangjiang-2021',
    'source-naoj-24sekki-shuangjiang',
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
    'statement': '霜降是二十四节气中的第18个节气、秋季的最后一个，为太阳到达黄经210°的时刻，出现在每年公历10月23日至24日前后（非遗网口径"每年公历10月23日左右"，新华社口径"每年阳历10月24日前后"；2017年与2021年两年实例均为10月23日）。',
    'exceptions': [
      '"10月23日至24日"的区间由两个机构口径合成，两稿原文分别作"10月23日左右""10月24日前后"；逐年精确时刻需《中国天文年历》核读（未入库）',
      'GB/T 33661-2017 正文条款仍未直读（沿用 02_shared 现状），法定表述待人工核读',
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

# 霜降的天文定义：太阳黄经 210°

## 研究问题

霜降在现代天文与历法口径中的定义是什么？"秋季最后一个节气"的身份是否可靠？

## 证据

- **已直接读取**：中国非遗网霜降专题（[[04_sources/source-ihchina-shuangjiang-feature|source-ihchina-shuangjiang-feature]]）："霜降是二十四节气中的第18个节气。每年公历10月23日左右，太阳位于黄经210°时为霜降节气……之后就是立冬节气"；并给出2017年实例"10月23日（农历丁酉年九月初四）"。
- **已直接读取**：新华社2021霜降特稿（[[04_sources/source-xinhua-shuangjiang-2021|source-xinhua-shuangjiang-2021]]）："霜降节气，在每年阳历10月24日前后，农历九月中旬，太阳到达黄经210°时开始"——发布当日（2021-10-23）即为霜降。
- **已直接读取**：日本国立天文台暦計算室（[[04_sources/source-naoj-24sekki-shuangjiang|source-naoj-24sekki-shuangjiang]]）秋表："霜降 (そうこう) 九月中 210° 霜が降りるころ"，页首明言各節気按太阳黄経定义——跨语言第三方互证。
- 黄道24等分、每段15°的系统命题不复述，见 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]] 与 [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]]。

## 解释（Scientific Interpretation）

霜降的黄经定义（210°）与立春315°、秋分180°同属一套太阳视运动刻度（相邻节气相差15°）。"霜降=天气渐冷、初霜出现"是中纬度经验联想，不是黄经定义的一部分——黄经210°对全球同时成立，而此时是否真有霜，取决于当地天气与地形（见 [[03_notes/sci-shuangjiang-frost-formation|霜的形成机制]]）。历法位相上，霜降为**九月中气**（《月令七十二候集解》"霜降，九月中"，直读见 [[03_notes/hist-yueling-shuangjiang-pentads|霜降三候卡]]）；节气/中气分组与置闰机制见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]。

## 适用条件与待核验

- 待核验1：逐年霜降时刻（2026年及前后年份）以《中国天文年历》为准，尚未建立 Source。
- 待核验2："10月23日至24日"区间的逐年核算（与秋分"9月22日至24日"同一全库口径问题）。
- 注意：日本二十七節气/二十四節気中的"霜降（そうこう）"与中国霜降同刻度（NAOJ 直读），但其民俗实践层本轮零来源，不得外推。

## 关联

[[01_terms/18_霜降|霜降索引]] · [[03_notes/hist-yueling-shuangjiang-pentads|霜降三候]] · [[03_notes/sci-shuangjiang-frost-formation|霜的形成机制]] · [[02_topics/astronomy|天文维度]] · [[02_topics/calendar|历法维度]]

## 待人工确认

- GB/T 33661-2017 正文条款引用；《中国天文年历》逐年时刻入库。
- 两个机构日期口径（"23日左右"/"24日前后"）在全库统一时的取舍。

## 修改记录

- 2026-09-16（第一轮）：建卡。黄经210°+第18个节气+秋季最后一个由非遗网与新华社两个独立机构直读支撑，NAOJ 跨语言第三方互证，confidence high；日期区间按两口径合成写入命题并逐字登记原文措辞。
- 2026-09-16（审核阶段）：路由引擎判 human-review-required（finding=pending-primary-source：GB/T 正文与《中国天文年历》未直读）；列入霜降审核包 B 区，状态 draft → in-review。
