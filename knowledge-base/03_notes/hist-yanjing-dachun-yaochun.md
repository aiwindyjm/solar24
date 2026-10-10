---
schema_version: '0.1.0'
id: 'hist-yanjing-dachun-yaochun'
type: 'HistoricalRecord'
title: '《燕京岁时记》打春条：清代北京的官方迎春礼与咬春'
solar_terms: ['lichun']
season: 'spring'
dimensions: ['customs', 'chinese-life', 'history', 'food']
region: ['中国北京']
period: '清光绪年间成书（记19世纪末北京岁时）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
contested: false
source_ids: ['source-wikisource-yanjingsuishiji', 'source-ihchina-lichun-feature']
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
    'statement': '《燕京岁时记》"打春"条记载清末北京立春的制度化实践：立春前一日顺天府官员至东直门外一里春场迎春；立春日礼部呈进春山宝座、顺天府呈进春牛图，礼毕引春牛而击之曰"打春"；当日"富家多食春饼，妇女等多买罗卜而食之，曰咬春，谓可以卻春困也"。',
    'exceptions': ['记载限清末北京；咬春不独立成条，系于打春条内，且明确限"富家""妇女"等群体'],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=low/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 《燕京岁时记》打春条

## 研究问题

立春习俗在清代晚期的都城是什么形态？官方与民间如何分工？

## 证据（原文与定位）

已直接读取维基文库《燕京歲時記》"打春"条（[[04_sources/source-wikisource-yanjingsuishiji|source-wikisource-yanjingsuishiji]]）：

> "打春即立春，在正月者居多。立春先一日，順天府官員至東直門外一里春場迎春。立春日，禮部呈進春山寶座，順天府呈進春牛圖。禮畢回署，引春牛而擊之，曰打春。……是日富家多食春餅，婦女等多買羅卜而食之，曰咬春，謂可以卻春困也。"

条后"謹按"引《禮部則例》述官方迎春礼仪（府尹率僚属朝服迎春、芒神土牛进呈等）。非遗网立春专题所引文字与此一致（交叉核对成立）。

## AI 摘要 / 解释

- **制度史价值**：立春在清末仍是国家礼制——礼部/顺天府两级参与、有固定地点（东直外春场）、固定器物（春山宝座、春牛图、芒神土牛）。这为"官方迎春劝农礼制"提供了直读的一手记载，与九华立春祭（民间延续形态）构成官方/民间两极样本。
- **生活史价值**：咬春在同一份文本中与官方礼仪并置出现——春饼（富家）、生萝卜（妇女），且给出当时人的解释（"却春困"）。这是 [[03_notes/trad-lichun-yaochun|咬春食俗卡]] 的关键证据升级。
- 表述红线依旧：这是北京一地的记载，不能外推全国。

## 适用条件、例外与分歧

无实质分歧。"打春即立春，在正月者居多"一句本身即承认立春常不在正月（与 [[03_notes/sci-lichun-calendar-position|历法位置卡]] 互证）。

## 关联

[[01_terms/01_立春|立春索引]] · [[03_notes/trad-lichun-yaochun|咬春食俗]] · [[03_notes/region-jiuhua-lichun-ji|九华立春祭]] · [[03_notes/hist-jingchu-lichun-customs|荆楚立春条]] · [[02_topics/customs|民俗维度]]

## 待人工确认

与北京出版社点校本《燕京岁时记》核对文字；《礼部则例》原文条目（謹按所引）待调阅。
