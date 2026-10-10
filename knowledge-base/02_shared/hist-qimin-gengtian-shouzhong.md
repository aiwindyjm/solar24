---
schema_version: '0.1.0'
id: 'hist-qimin-gengtian-shouzhong'
type: 'HistoricalRecord'
title: '《齐民要术》耕田·收种：土壤耕作与选种的时机经验'
solar_terms: []
season: null
dimensions: ['agriculture']
region: ['中国北方黄河流域中下游（北魏农书经验范围）']
period: '北魏（约6世纪30-50年代成书）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'system'
contested: false
source_ids: ['source-wikisource-qiminyaoshu']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-25'
updated: '2026-09-25'
human_review:
  {
    'reviewer': 'aiwindyjm',
    'reviewed_at': '2026-09-28',
    'decision': 'approved',
    'notes': 'Owner-authorized batch approval based on AI pre-review',
  }
claim:
  {
    'statement': '《齐民要术》卷第一耕田第一、收種第二记载北魏黄河流域的农时经验：耕地讲究燥湿得所（宁燥不湿）、秋耕欲深春夏欲浅；种子须防浥郁、选好穗纯色者单收单藏以备来年。',
    'exceptions': ['"宁燥不湿"为旱作区经验；"谚曰湿耕泽锄不如归去"系引农谚'],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/B/独立1；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 《齐民要术》耕田·收种：土壤耕作与选种的时机经验

## 研究问题

6世纪农书如何表述耕与种的"时机"判断？

## 证据（原文与定位）

- 耕田第一（直读）："凡耕高下田，不問春秋，必須燥濕得所爲佳。若水旱不調，寧燥不濕。"／"凡秋耕欲深，春夏欲淺。犂欲廉，勞欲再。"／注引农谚"濕耕澤鋤，不如歸去。"
- 收種第二（直读）："凡五穀種子，浥鬱則不生，生者亦尋死。"／"選好穗純色者，劁刈高懸之。至春治取，別種，以擬明年種子。"

## AI 摘要 / 解释

时机判断已细化到**土壤湿度与季节组合**（春秋耕深浅有别），且形成农谚形态的经验口诀——"节气-农时"知识在农书中的颗粒度比机构汇编页细得多。选种单收制（好穗高悬、别种留种）是"收种"作为独立技术环节的证据。

## 适用条件、例外与分歧

- 地域时代红线：所引为**北魏黄河流域中下游**农书经验（贾思勰活动于山东河北一带），不可写成"中国农民都……"或当代农事。
- 版本与文字以维基文库本直读为准（卷第一 2026-09-25 逐字提取）；点校本（《齐民要术校释》）核对列入人工待办。

## 关联

[[02_shared/README|共享知识]] · [[02_shared/fact-solarterms-yellow-river-origin|黄河流域起源]] · [[02_topics/agriculture|农业维度]]

## 待人工确认

- 与缪启愉《齐民要术校释》核对文字与句读；"麻菩楊"等异文用字核点校本。

## 修改记录

- 2026-09-25（R04/R05，第二轮）：建卡，证据为维基文库卷第一逐字直读。
