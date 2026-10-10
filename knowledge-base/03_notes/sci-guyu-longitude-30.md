---
schema_version: '0.1.0'
id: 'sci-guyu-longitude-30'
type: 'ScientificFact'
title: '谷雨的天文定义：太阳黄经 30°'
solar_terms: ['guyu']
season: 'spring'
dimensions: ['astronomy', 'scientific-interpretation']
region: ['全球（黄经定义与地域无关）；日期经验因纬度而异']
period: '现代天文学口径；2022年机构稿仍在沿用同一表述'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  ['source-ihchina-guyu-feature', 'source-xinhua-guyu-2022']
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
    'statement': '谷雨是二十四节气中的第六个、春季最后一个节气：太阳到达黄经30°时交节，出现在每年公历4月19日至21日之间（2022年交节时刻为北京时间4月20日10时24分）。',
    'exceptions': [
      '节气时刻按东经120°北京时间计，与其他时区的"当天"可能相差一日',
      '"每年公历4月19日、20日或21日"的日期范围语句本轮由新华社稿单独直读（非遗网页面只给出2017年交节为4月20日的实例）；两机构稿的黄经度数与节气序位表述一致',
      '谷雨逐年交节时刻的权威数据（紫金山天文台《中国天文年历》）本轮未纳入来源库',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 谷雨的天文定义：太阳黄经 30°

## 研究问题

谷雨在现代天文与历法口径中的定义是什么？这个定义有多可靠？

## 证据

- **已直接读取**：中国非遗网谷雨专题（[[04_sources/source-ihchina-guyu-feature|source-ihchina-guyu-feature]]，页面创建于2017年）："二十四节气的第六个节气是谷雨，也是春季的最后一个节气。此时太阳到达黄经30°"。
- **已直接读取**：新华社2022年谷雨交节报道（[[04_sources/source-xinhua-guyu-2022|source-xinhua-guyu-2022]]）："当太阳到达黄经30度时，'谷雨'节气到了。北京时间4月20日10时24分将迎来'谷雨'""每年公历的4月19日、20日或21日，为'谷雨'节气之始，它是二十四节气中第六个节气，也是春季最后一个节气"。
- 黄道24等分、每段15°的系统机制见共享卡 [[02_topics/astronomy|天文维度]] 与 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]，不在本卡复述。

## 解释（Scientific Interpretation）

谷雨继清明之后位于黄经30°，是春季六个节气的最后一个。因为定义绑定太阳位置而非天气，"谷雨=降雨增多"只是中国（尤其农区）的气候经验联想（见 [[03_notes/sci-guyu-rain-sowing-window|谷雨降雨与春播窗口]]）；雨水增多的经验表述由机构稿另行支撑，不混入天文命题。

## 适用条件与待核验

- 谷雨交节逐年时刻的精确数值以《中国天文年历》为准（本轮未建对应 Source）。
- GB/T 33661-2017 正文条款（立春卡已登记的同一待办）适用于全部节气定义，不单独构成本卡依赖。

## 关联

[[01_terms/06_谷雨|谷雨索引]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]（谷雨为三月中气） · [[02_topics/astronomy|天文维度]]

## 待人工确认

- 谷雨日期范围"4月19-21日"建议补第二个独立机构直读源（如中国气象局/中国天气网本节气稿）后并入长期命题。

## 修改记录

- 2026-09-16（第一轮）：建卡。两个独立机构直读（非遗网+新华社）支持黄经30°、第6个节气、春季最后一个；日期范围语句标注单源直读。
