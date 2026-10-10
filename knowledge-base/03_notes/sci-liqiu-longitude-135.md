---
schema_version: '0.1.0'
id: 'sci-liqiu-longitude-135'
type: 'ScientificFact'
title: '立秋的天文定义：太阳黄经 135°'
solar_terms: ['liqiu']
season: 'autumn'
dimensions: ['astronomy', 'calendar', 'scientific-interpretation']
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
    'source-ihchina-liqiu-feature',
    'source-xinhua-liqiu-2022',
    'source-xinhua-liqiu-shengdong-2026',
    'source-xinhua-liqiu-2021',
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
    'statement': '立秋是二十四节气中的第十三个节气、秋季的第一个节气：太阳到达黄经135°的时刻为立秋，出现在每年公历8月7日至9日。黄道24等分、每段黄经15°的系统定义见共享卡，本卡只锚定立秋单点。',
    'exceptions': [
      'GB/T 33661-2017 正文条款仍未直读（在线预览含验证码），法定表述待人工核读（继承立春待办）；"8月7日至9日、黄经135°"已获非遗网立秋专题（直读）与新华社稿（由国庆2022直读）两个不同机构直读来源支持',
      '新华社2021稿概括为"通常在每年公历的8月8日前后"、非遗网专题页"节气习俗"节另写"每年公历8月7日或8日开始"——机构间与页面内口径宽窄不一，本卡取覆盖最宽且与逐年实例（2017/2021/2022/2024/2026年均落8月7日或8日）相容的"8月7日至9日"',
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

# 立秋的天文定义：太阳黄经 135°

## 研究问题

立秋在现代天文与历法口径中的定义是什么？这个定义有多可靠？

## 证据

- **已直接读取**：非遗网立秋专题（[[04_sources/source-ihchina-liqiu-feature|source-ihchina-liqiu-feature]]）："立秋，是二十四节气中的第十三个节气，通常在公历8月7—9日之间，太阳到达黄经135°时为立秋，今年立秋的时间是8月7日（农历丁酉年闰六月十六日）。"（"今年"=2017，页面实例）
- **已直接读取**：新华社2022稿（[[04_sources/source-xinhua-liqiu-2022|source-xinhua-liqiu-2022]]，由国庆）："公历每年8月7日至9日，当太阳到达黄经135度时，为立秋之始"，第十三个节气、秋季第一个节气。
- **已直接读取**：新华社2026稿（[[04_sources/source-xinhua-liqiu-shengdong-2026|source-xinhua-liqiu-shengdong-2026]]）："太阳行至黄经135度，二十四节气中的第十三个节气，也是秋季的第一个节气——立秋"。
- **已直接读取**：新华社2021稿（[[04_sources/source-xinhua-liqiu-2021|source-xinhua-liqiu-2021]]）：《2021年中国天文年历》显示当年立秋为8月7日14时54分（历算出处为紫金山天文台编算年历，本轮按转引对待）。
- **元数据级**：GB/T 33661-2017（[[04_sources/source-gbt-33661-openstd|source-gbt-33661-openstd]]）为现行国家标准，正文条款待人工核读。

## 解释（Scientific Interpretation）

现代口径下，立秋是**太阳视运动到达黄经135°的天文时刻**，是秋季第一个节气（第13个节气，前接大暑、后随处暑）。与立春（315°）同理：定义绑定太阳位置而非天气，"立秋=天气转凉"只是中纬度经验联想——气象学入秋的候温标准与立秋的差距见 [[03_notes/sci-liqiu-vs-meteorological-autumn|立秋与气象入秋]]。节气在阴阳合历中的角色与置闰机制详见 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]、[[02_shared/sci-solarterms-jieqi-zhongqi|节气/中气分组]]；完整二十四节气序列的最早完整记载见 [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]]。

## 适用条件与待核验

- 待核验1：GB/T 33661-2017 正文中的节气定义条款原文（继承立春待办，适用全部节气）。
- 待核验2：立秋具体时刻的逐年数值权威表（《中国天文年历》本体未入库；2021年时刻为新华社稿转引）。
- 注意：立秋在农历中的位置逐年漂移（2017年实例落"闰六月十六"），系统机制归共享卡，本卡不复述。

## 关联

[[01_terms/13_立秋|立秋索引]] · [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]] · [[02_topics/astronomy|天文维度]]

## 待人工确认

- GB/T 标准正文条款引用；《中国天文年历》或紫金山天文台节气时刻表作为正式 Source 入库。

## 修改记录

- 2026-09-16（第一轮建库）：建卡。非遗网+新华社（2022/2026/2021三稿互证但同发布方计一）两组独立直读，其一（非遗网）与月令集解/礼记引文核对后标 cross-checked，confidence high。机构间日期口径宽窄差异写入 exceptions。
