---
schema_version: '0.1.0'
id: 'sci-dongzhi-shortest-day-year-anchor'
type: 'ScientificFact'
title: '冬至的一个真"最"与历法锚：北半球白昼最短、日影最长，两个冬至之间为一个回归年'
solar_terms: ['dongzhi']
season: 'winter'
dimensions: ['astronomy', 'calendar', 'climate', 'scientific-interpretation']
region: ['北半球（极值命题为半球级表述）；"1月最冷"经验来自中国（除少数海岛和海滨局部地区外）']
period: '现代天文口径；2021年新华社稿含当年交节实例与专家口径'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  [
    'source-xinhua-dongzhi-2021',
    'source-pmo-almanac-qa',
    'source-ihchina-dongzhi-feature',
    'source-xinhuanet-dongzhi-2015',
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
    'statement': '冬至日北半球白昼最短、正午圭表日影最长，太阳直射南回归线（北极圈内极夜）；冬至后太阳直射点开始北移、白昼渐长。冬至是中国传统历法的基准点：两个冬至之间的时间间隔古称"岁"，即现代天文学的回归年（岁实约365.2422天）；现行农历规则把包含冬至的农历月固定为十一月。',
    'exceptions': [
      '"白昼最短"限北半球，南半球同日白昼最长',
      '冬至并非全年最冷：非遗网（2017）载"我国除少数海岛和海滨局部地区外，1月都是最冷的月份"——最冷滞后于冬至的机制（地面热量收支）本轮无直读来源，不展开；与夏至卡"夏至非最热"互为冬夏对偶',
      '"规定有冬至的月为子月"（新华网2015稿）与紫金山天文台"包含冬至在内的农历月固定为农历十一月"为同一历法事实的两种表述，本文按紫金山天文台口径表述',
      '岁实数值沿革（南朝大明历、宋统天历365.2425天）为新华社2021稿单源转述，未另核历法史文献',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立4；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 冬至的白昼极值与回归年锚

## 研究问题

"冬至白昼最短"之外，冬至为什么被称为"古代历法的基准点"？它是不是最冷的一天？

## 证据

- **已直接读取**：新华社2021稿（[[04_sources/source-xinhua-dongzhi-2021|source-xinhua-dongzhi-2021]]，紫金山天文台王科超口径）：
  - 极值："对北半球各地而言，在冬至这一天，正午时圭表测影所得的日影最长，这一天白昼最短，夜晚最长。冬至后太阳直射点开始北移，北半球白昼渐长，正午太阳高度渐高，日影渐短。"
  - 历法锚："冬至是古代历法的基准点。两个冬至间的时间间隔为'岁'，相当于现代天文术语的'回归年'，岁的长度被称为'岁实'，约365.2422天。"（并述南朝大明历岁实已相当精确、宋统天历365.2425天早于公历300多年——单源转述）
- **已直接读取**：紫金山天文台《历书科普问题解答》（[[04_sources/source-pmo-almanac-qa|source-pmo-almanac-qa]]）："包含冬至在内的农历月固定为农历十一月，如果从某个农历十一月开始到下一个农历十一月（不含）之间有13个农历月，则取其中最先出现的一个不包含中气……的农历月，作为前一个月的闰月。"——冬至是农历置闰规则的锚（中气概念见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]）。
- **已直接读取**：非遗网冬至专题（[[04_sources/source-ihchina-dongzhi-feature|source-ihchina-dongzhi-feature]]）："冬至这天，太阳直射地面的位置到达一年的最南端，几乎直射南回归线，这一天北半球的白昼最短，且越往北越短，黑夜最长。""我国除少数海岛和海滨局部地区外，1月都是最冷的月份，天文学上也把'冬至'定为北半球冬季的开始。"
- **已直接读取**：新华网2015稿（[[04_sources/source-xinhuanet-dongzhi-2015|source-xinhuanet-dongzhi-2015]]）："（北极圈以内则24小时都是黑夜）""在北京，太阳高度只有26°42′，因为这天中午的表影最长，故也称'长至日'。"

## AI 摘要 / 解释

- **为什么冬至能当历法锚**：回归年无法直接观测"一圈"，但冬至（日影最长）是二十四节气中**最容易用圭表精确测定的时刻**——古人以两次冬至的间隔定"岁实"，再以"含冬至之月=十一月"锚定农历月序并规则化置闰（PMO 直读）。这解释了为什么周历以含冬至之月为岁首（[[03_notes/hist-dongzhi-zhouzheng-year-start|周正岁首卡]]）、为什么冬至在二十四节气体系中具有特殊地位。
- **冬至≠最冷**：与 [[03_notes/sci-xiazhi-longest-day|夏至卡]]的"夏至非最热"构成冬夏对偶——北半球地面热量收支的转折滞后于日照极值，中国的经验是最冷落在1月（非遗网），随之产生"数九"习俗（[[03_notes/trad-dongzhi-shijiu-xiaohantu|数九与消寒图卡]]；冬夏对偶另见 [[03_notes/sci-xiaoshu-sanfu-gengday-mechanism|小暑三伏卡]]——三伏自夏至数庚、数九自冬至数九）。
- "天文学上也把冬至定为北半球冬季开始"（非遗网）为季节划分的一种口径，与候温法四季（[[04_sources/source-szmb-season-division|深圳气象局源]]）是不同划分体系，不得混用。

## 适用条件、例外与分歧

- 四个直读源在"黄经270°/直射南回归线/北半球白昼最短"上一致；"岁实/回归年"表述仅新华社2021稿直读（专家口径），历法史数值沿革未独立核验。
- "1月最冷"限中国经验表述；逐年极端最低气温出现的具体日期因年而异。

## 关联

[[01_terms/22_冬至|冬至索引]] · [[03_notes/sci-dongzhi-longitude-270|黄经270°定义]] · [[03_notes/hist-dongzhi-zhouzheng-year-start|周正以冬至月为岁首]] · [[03_notes/trad-dongzhi-shijiu-xiaohantu|数九与消寒图]] · [[02_topics/calendar|历法维度]] · [[02_topics/scientific-interpretation|现代科学解释]]

## 待人工确认

- 岁实数值沿革（大明历/统天历）补历法史文献直读；"冬至最早被测定"说的学术依据（土圭测影文献链）另立研究问题。

## 修改记录

- 2026-09-16（建卡）：以新华社2021稿+紫金山天文台问答为双主源建卡；"冬至非最冷"以非遗网单源直读写入 exceptions，机制解释不展开（无直读源）。
