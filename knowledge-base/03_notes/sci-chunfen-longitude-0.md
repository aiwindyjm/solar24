---
schema_version: '0.1.0'
id: 'sci-chunfen-longitude-0'
type: 'ScientificFact'
title: '春分的天文定义：太阳黄经 0°——二十四节气黄经刻度的起算点'
solar_terms: ['chunfen']
season: 'spring'
dimensions: ['astronomy', 'calendar', 'scientific-interpretation']
region: ['全球（黄经定义与地域无关）；日期经验因纬度而异']
period: '现代天文学口径'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  [
    'source-xinhuanet-chunfen-2021',
    'source-xinhuanet-chunfen-2022',
    'source-ihchina-chunfen-feature',
    'source-hko-solar-terms',
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
    'statement': '春分是二十四节气中的第四个节气，出现在每年公历3月20日或21日：此时太阳沿黄道自南向北移动经过赤道、直射地球赤道（太阳位于黄经0度），南北半球昼夜近乎平分。黄经以春分点为0度起算，因此春分同时是二十四节气黄经刻度的原点。',
    'exceptions': [
      '部分通行表述将日期范围写作"3月20日至22日"，本轮直读来源（新华网2021/2022稿）口径均为"3月20日或21日"，边缘年份的精确归属未逐年核算',
      '节气时刻按东经120°北京时间计，与其他时区的"当天"可能相差一日',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立3；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 春分的天文定义：太阳黄经 0°

## 研究问题

春分在现代天文与历法口径中的定义是什么？"黄经0°"为什么是全库锚点？

## 证据

- **已直接读取**：新华网2021稿（[[04_sources/source-xinhuanet-chunfen-2021|source-xinhuanet-chunfen-2021]]，引紫金山天文台科普部主管胡方浩）："天文学上的春分，是指太阳沿黄道自南向北移动经过赤道的一刻。""此时，太阳位于地心视黄经零度，直射赤道，南北两半球获得等量的光和热。"
- **已直接读取**：新华网2022稿（[[04_sources/source-xinhuanet-chunfen-2022|source-xinhuanet-chunfen-2022]]，引天津社科院研究员罗澍伟）："'春分'是二十四节气中第四个节气，也是春季第四个节气。""每年公历3月20日或21日，太阳运行至黄经0度时进入'春分'节气。"
- **已直接读取**：非遗网春分专题（[[04_sources/source-ihchina-chunfen-feature|source-ihchina-chunfen-feature]]）："这一天太阳直射地球赤道，南北半球昼夜平分。"（该页未给出黄经度数与日期范围）
- **机制引用（不复述）**：黄道24等分、每段黄经15°的划分机制见香港天文台直读源 [[04_sources/source-hko-solar-terms|source-hko-solar-terms]] 与 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]。

## 解释（Scientific Interpretation）

黄经是沿黄道度量的角度坐标，**0°原点即春分点**——太阳自南向北穿越赤道之交点。这意味着二十四节气中其他节气的黄经值（立春315°、清明15°等）都是以春分点为基准起算的，春分因此是整个节气黄经体系的"零点"。因为定义绑定太阳位置而非天气，它对全球同时成立；"春分=春暖花开"只是中纬度经验联想。春分在传统历法中为二月中气（机制见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]，此处不重复）。

## 适用条件与待核验

- "3月20日或21日"为本轮两个机构直读稿的共同口径；"20日至22日"的更宽表述未获直读来源支持，已登记研究日志冲突项。
- 春分具体时刻逐年数值（如2022年3月20日23时33分，新华网2022稿标题）以《中国天文年历》等权威历表为准，本轮未建独立 Source。
- GB/T 33661-2017 为现行农历编算国家标准（信息页元数据级），正文条款仍需人工核读（沿用立春轮结论，不在此重复建源）。

## 关联

[[01_terms/04_春分|春分索引]] · [[03_notes/sci-chunfen-day-night-equal|昼夜均分解释]] · [[03_notes/hist-yueling-chunfen-pentads|月令三候]] · [[02_topics/astronomy|天文维度]] · [[02_topics/calendar|历法维度]]

## 待人工确认

- 春分逐年时刻权威数据源（《中国天文年历》）入库；边缘年份日期归属的核算。

## 修改记录

- 2026-09-16（首轮批研究）：建卡。两个独立机构直读（新华网2021引紫金山天文台、新华网2022引罗澍伟）+非遗网专题直读互证，confidence high；日期范围按直读口径写"3月20日或21日"，LEAD 的"3月20-22日"未获直读、记入 exceptions。
