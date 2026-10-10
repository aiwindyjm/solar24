---
schema_version: '0.1.0'
id: 'sci-qiufen-longitude-180'
type: 'ScientificFact'
title: '秋分的天文定义：太阳黄经 180°'
solar_terms: ['qiufen']
season: 'autumn'
dimensions: ['astronomy', 'scientific-interpretation']
region: ['全球（黄经定义与地域无关）；日期经验因纬度而异']
period: '现代天文学口径；日期实例取2017/2022/2024年机构发布'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  [
    'source-ihchina-qiufen-feature',
    'source-xinhua-qiufen-2022',
    'source-xinhua-qiufen-2024',
    'source-weather-com-cn-qiufen',
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
    'statement': '秋分是二十四节气中的第十六个节气，机构口径为"每年9月23日前后"交节（本轮直读实例：2017年9月23日、2022年9月23日、2024年9月22日）：此时太阳沿黄道运行到达黄经180°、直射地球赤道，全球昼夜均分、无极昼极夜；此后太阳直射位置转入南半球、北半球昼渐短夜渐长（南极极昼、北极极夜范围渐大）。',
    'exceptions': [
      '任务线索与百科类条目的通用区间"公历9月22日至24日"本轮未获机构直读稿逐字支持——直读口径为"9月23日前后"（中国天气网）与具体年份日期（2017/2022年9月23日、2024年9月22日），按直读口径书写',
      '节气时刻按东经120°北京时间计，与其他时区的"当天"可能相差一日',
      '秋分逐年精确时刻（如2022年9月23日9时4分，《中国天文年历》口径经新华社稿转引）以权威历表为准，本轮未直接建立《中国天文年历》Source',
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

# 秋分的天文定义：太阳黄经 180°

## 研究问题

秋分在现代天文与历法口径中的定义是什么？日期与昼夜状态如何表述才不超出证据？

## 证据

- **已直接读取**：非遗网秋分专题（[[04_sources/source-ihchina-qiufen-feature|source-ihchina-qiufen-feature]]）："秋分，农历二十四节气中的第16个节气，太阳在这一天到达黄经180°，直射地球赤道，因此这一天24小时昼夜均分，全球无极昼极夜现象。""秋分之后，北极附近极夜范围渐大，南极附近极昼范围渐大。""今年的秋分时间为2017年9月23日（农历丁酉年八月初四）。"
- **已直接读取**：新华网2022稿（[[04_sources/source-xinhua-qiufen-2022|source-xinhua-qiufen-2022]]，引中科院紫金山天文台科普部主任张旸）："太阳沿着黄道运行一周共360度，每'走过'15度，就迎来一个新节气。'秋分是指太阳沿着黄道走到180度的时刻。'""《中国天文年历》显示，9月23日9时4分迎来秋分节气。"
- **已直接读取**：新华网2024稿（[[04_sources/source-xinhua-qiufen-2024|source-xinhua-qiufen-2024]]，2024-09-22电）："太阳在这一天到达黄经180度，直射地球赤道，昼夜各12小时。""秋分后夜晚越来越长，冬至时到极限。"
- **已直接读取**：中国天气网（[[04_sources/source-weather-com-cn-qiufen|source-weather-com-cn-qiufen]]）："每年的9月23日前后，太阳到达黄经180度时，进入'秋分'节气。""此日后，阳光直射位置南移，北半球昼短夜长。"
- **机制引用（不复述）**：黄道划分与节/中气交替机制见 [[04_sources/source-hko-solar-terms|香港天文台]]（"12 major solar terms and 12 minor solar terms interlaced"，本轮重读）与共享卡 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]。

## 解释（Scientific Interpretation）

黄经180°是黄经刻度上与春分点（0°）正对的位置：太阳完成黄道上半周运行、回到赤道上方，但方向与春分相反——春分是自南向北穿越赤道，秋分是自北向南穿越，直射点此后进入南半球。这决定了秋分的两个可观测后果：全球昼夜近乎均分（见 [[03_notes/sci-qiufen-day-night-equal|昼夜均分解释卡]]），以及北半球自此昼短夜长、直至冬至极限。秋分在传统历法中为八月中气（机制见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]，此处不重复）。

## 适用条件与待核验

- 日期表述的边界已写入 exceptions："22日至24日"通用区间未获直读，不写入命题主体。
- 与春分卡的分工：春分卡（[[03_notes/sci-chunfen-longitude-0|黄经0°]]）命题为"黄经刻度原点"；本卡命题为"黄道半周点+直射点南移"，两组命题独立、无措辞复用。
- 待核验：《中国天文年历》原始历表入库；边缘年份（秋分落9月24日）是否存在及最近一次出现年份。

## 关联

[[01_terms/16_秋分|秋分索引]] · [[03_notes/sci-qiufen-day-night-equal|昼夜均分解释]] · [[03_notes/hist-yueling-qiufen-pentads|月令三候]] · [[03_notes/sci-chunfen-longitude-0|春分黄经0°（对偶卡）]] · [[02_topics/astronomy|天文维度]]

## 待人工确认

- "9月22日至24日"通用区间是否以《中国天文年历》逐年核算后统一全库口径（同春分"20日或21日"问题）。
- GB/T 33661-2017 正文条款（沿用立春轮结论，不重复建源）。

## 修改记录

- 2026-09-16（首轮批研究）：建卡。三个独立发布方直读（非遗网/新华网×2/中国天气网）互证黄经180°、直射赤道、昼夜均分、直射南移；日期按直读口径写"9月23日前后"+三个年份实例，LEAD 的"22-24日"区间移入 exceptions。
