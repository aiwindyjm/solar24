---
schema_version: '0.1.0'
id: 'sci-xiaoshu-sanfu-gengday-mechanism'
type: 'ScientificFact'
title: '三伏的历法机制："夏至三庚数头伏"——干支计日而非节气'
solar_terms: ['xiaoshu']
season: 'summer'
dimensions: ['calendar', 'scientific-interpretation', 'chinese-life']
region: ['中国（干支纪日传统；入伏日期全国同一历法日）']
period: '机制为古代历法传统；表述为现代天文科普口径（2024）'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
contested: false
source_ids:
  [
    'source-xinhua-sanfu-2024',
    'source-gujintushu-suigong-furi',
    'source-xinhua-xiaoshu-2022',
    'source-ihchina-xiaoshu-feature',
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
risk_level: 'medium'
impact_level: 'system'
claim:
  {
    'statement': '三伏不是二十四节气之一，而是按干支纪日法推算的传统时段：天干十日一循环，每隔10天出现一个"庚日"；自夏至日起第三个庚日为初伏（头伏）第一天、第四个庚日为中伏第一天，立秋日起第一个庚日为末伏第一天。初伏、末伏各10天，中伏10天或20天。因公历年天数不是10的倍数，庚日在公历中逐年漂移，入伏日期逐年变动（直读实例：2022年7月16日、2023年7月11日、2024年7月15日）。三年实例的入伏日均落在小暑节气（约7月6-8日交节至7月22-23日交大暑）之内，故民间以小暑为"进伏"的节气坐标（农谚"节到小暑进伏天"）。',
    'exceptions': [
      '"入伏日总落小暑节气内"在本卡只是三个直读年份的观察+机制推算（夏至后第三个庚日最早7月11日、最晚约7月20日出现，落在小暑时段内），逐百年天文年历核验未做，表述保留"实例+机制推算"层级',
      '中伏长短（10/20天）取决于夏至到立秋间庚日个数，本卡未逐年列表',
      '三伏的历史起源与"庚金伏藏"五行解释属历史层，见 [[03_notes/hist-xiaoshu-furi-origins|伏日起源卡]]，不在本卡展开',
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

# 三伏机制："夏至三庚数头伏"

## 研究问题

三伏如何推算？它与二十四节气是什么关系？为什么入伏日期逐年不同？

## 证据

- **已直接读取**：新华网2024三伏科普稿（[[04_sources/source-xinhua-sanfu-2024|source-xinhua-sanfu-2024]]，天文科普专家杨婧——中国天文学会会员、天津市天文学会理事）：
  > "民间有'夏至三庚数头伏''夏至三庚便数伏'等说法，意思是说，从夏至日开始数起，数到第三个'庚日'就进入初伏。"
  > "'三伏'的日期是按照我国古代历法的'干支纪日法'确定的。……由于天干是10个，所以每隔10天就出现一个带有'庚'字的日子，称为'庚日'。每年自夏至日起第三个'庚日'为初伏第一天、第四个'庚日'为中伏第一天，立秋日起第一个'庚日'为末伏第一天，合起来叫'三伏'。初伏、末伏持续的时间均为10天，但中伏的日期不固定，有的年份是10天，有的年份是20天。"
  > 2024年推演实例："今年夏至是6月21日。从夏至日算起，第一个'庚日（庚申日）'是6月25日；第二个'庚日（庚午日）'是7月5日；第三个'庚日（庚辰日）'是7月15日。"
  > "由于'庚日'的变化不定，所以每年入伏的日期不尽相同，如2022年的入伏时间是7月16日，2023年的入伏时间是7月11日。"
- **已直接读取（古今互证）**：《古今图书集成·岁功典》伏日部（[[04_sources/source-gujintushu-suigong-furi|source-gujintushu-suigong-furi]]）所引《阴阳书》《事物纪原》："夏至後第三庚為初伏，四庚為中伏，立秋後初庚，為末伏。"
- **已直接读取**：新华网2022小暑稿（[[04_sources/source-xinhua-xiaoshu-2022|source-xinhua-xiaoshu-2022]]）："在小暑节气中，7月16日开始进入'三伏'中的头伏（初伏），今年的'三伏'长达40天。"——2022年头伏始于小暑节气内的直接表述。
- **已直接读取**：非遗网小暑资讯（[[04_sources/source-ihchina-xiaoshu-feature|source-ihchina-xiaoshu-feature]]）农谚："节到小暑进伏天，天变无常雨连绵。"

## 解释（Scientific Interpretation）

- **三伏与节气是两套时间刻度的组合**：节气按太阳黄经每15°一刻（见 [[03_notes/sci-xiaoshu-longitude-105|小暑黄经定义]]），三伏按干支纪日（10日一庚）锚定在夏至/立秋两个节气上推算。因此三伏**没有固定的公历日期**，也**不是**"最热日的天文定义"——它是传统历法对"最热时段"的制度化标记。
- **入伏落小暑期内的机制推算**（解释层，非直读断言）：夏至在公历6月21日前后一两天之内（新华网2024稿直读表述），夏至后第一个庚日必在其后10日内（约6月22日-7月1日），第三个庚日即落在约7月11日-20日之间；而小暑节气约为7月6-8日至7月22-23日。两者区间嵌套，故入伏几乎总在小暑节气中——这与农谚"节到小暑进伏天"及三年直读实例（2022/7/16、2023/7/11、2024/7/15）一致。
- 三伏总长30或40天由中伏是否"双庚"决定（同上直读："有的年份是10天，有的年份是20天"）。

## 适用条件与待核验

- 待核验1：以《中国天文年历》逐百年核验"入伏日与小暑节气的相对位置"是否存在例外年份。
- 待核验2：2025/2026年入伏日的权威口径（本轮未建源；检索摘要称2026年7月15日，未直读不入卡）。
- 三伏"最热"的气象学验证（三伏期与气温极值的关系）未做，属气候统计课题。

## 关联

[[01_terms/11_小暑|小暑索引]] · [[03_notes/hist-xiaoshu-furi-origins|伏日起源与五行解释]] · [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]] · [[03_notes/region-xiaoshu-xuzhou-fuyang|徐州伏羊食俗]] · [[02_topics/calendar|历法维度]]

## 待人工确认

- "入伏常落小暑期内"的机制推算段（解释层标注）是否可升格为命题；逐百年天文年历抽验。

## 修改记录

- 2026-09-16（建卡）：作为小暑波次的知识锚卡（夏至波次日志曾预告"三伏干支机制专题建议小暑波次建卡"）；现代权威口径+清代类书古今互证+三年入伏实例；三伏≠节气的分层表述置于命题首句；status=draft（引擎路由 auto-candidate）。
