---
schema_version: '0.1.0'
id: 'sci-xiaoman-longitude-60'
type: 'ScientificFact'
title: '小满的天文定义：太阳黄经 60°'
solar_terms: ['xiaoman']
season: 'summer'
dimensions: ['astronomy', 'scientific-interpretation']
region: ['全球（黄经定义与地域无关）；日期经验因纬度而异']
period: '现代天文学口径；2017年机构专题与2024年机构稿沿用同一表述'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  ['source-ihchina-xiaoman-feature', 'source-xinhua-xiaoman-2024']
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
    'statement': '小满是二十四节气中的第八个节气、夏季第二个节气：太阳到达黄经60°时交节，出现在每年公历5月20日至22日之间（2017年交节为5月21日，当日为农历丁酉年四月廿六）。',
    'exceptions': [
      '节气时刻按东经120°北京时间计，与其他时区的"当天"可能相差一日',
      '小满逐年交节时刻的权威数据（紫金山天文台《中国天文年历》）本轮未纳入来源库',
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

# 小满的天文定义：太阳黄经 60°

## 研究问题

小满在现代天文与历法口径中的定义是什么？这个定义有多可靠？

## 证据

- **已直接读取**：中国非遗网小满专题（[[04_sources/source-ihchina-xiaoman-feature|source-ihchina-xiaoman-feature]]，页面创建于2017年）："每年5月20日至22日，太阳到达黄经60°时，是二十四节气之小满节气的开始，今年的小满时间是2017年5月21日（农历丁酉年四月廿六）。"
- **已直接读取**：新华社2024年小满稿（[[04_sources/source-xinhua-xiaoman-2024|source-xinhua-xiaoman-2024]]）："每年公历5月20日至22日，太阳到达黄经60度，人们迎来节气——小满。""小满是二十四节气的第八个节气，也是夏季第二个节气。"
- 黄道24等分、每段15°的系统机制见共享卡 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]] 与 [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]]，不在本卡复述。

## 解释（Scientific Interpretation）

小满继立夏之后位于黄经60°，是夏季六个节气的第二个。因为定义绑定太阳位置而非天气，"小满=麦粒渐满/雨水渐丰"只是中国农区的物候与气候经验联想（分别见 [[03_notes/trad-xiaoman-nongshi|小满农事农谚卡]]、[[03_notes/sci-xiaoman-grainfill-dryhotwind|灌浆与干热风卡]]），不混入天文命题。小满在农历中的位置是**四月中气**，古典文本证据见 [[03_notes/hist-yueling-xiaoman-pentads|月令三候卡]]，节/中气机制链接 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]。

## 适用条件与待核验

- 小满交节逐年时刻的精确数值以《中国天文年历》为准（本轮未建对应 Source）。
- GB/T 33661-2017 正文条款（立春卡已登记的同一待办）适用于全部节气定义，不单独构成本卡依赖。

## 关联

[[01_terms/08_小满|小满索引]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]] · [[02_topics/astronomy|天文维度]]

## 待人工确认

- 黄经60°/5月20-22日已获非遗网、新华社两个独立机构直读互证；如需升 long-term 表述，可再补中国气象局/中国天气网本节气定义稿。

## 修改记录

- 2026-09-16（第一轮）：建卡。两个独立机构直读（非遗网2017专题+新华社2024稿）支持黄经60°、5月20-22日、第8个节气/夏季第二个；confidence high。
