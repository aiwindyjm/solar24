---
schema_version: '0.1.0'
id: 'hist-shoushitongkao-quanke-juan42'
type: 'HistoricalRecord'
title: '《授时通考》劝课门：从经书劝农训到朱熹劝农文'
solar_terms: []
season: null
dimensions: ['history', 'agriculture']
region: ['中国（官修全国视野；所引前代文献各有地域）']
period: '清乾隆敕撰（1742）；所引文献自先秦至明'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'system'
contested: false
source_ids: ['source-wikisource-shoushitongkao']
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
    'statement': '《授时通考》卷四十二（劝课门首卷）以《易》井卦「勞民勸相」、《詩》「教民稼穡務農急也」、《禮記·月令》孟春「祈穀於上帝…躬耕帝耤」等经书文本确立劝农的经典依据，继而按时代辑录历代劝农举措，至宋代收录州县劝农记事与朱熹劝农文（「職在勸農…勸課不勤」及冬耕、粪种、及时栽插等具体农事指令）。',
    'exceptions': ['卷42为经书训+记事辑录结构，汉代诏令部分本轮未逐条读毕'],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立1；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 《授时通考》劝课门：从经书劝农训到朱熹劝农文

## 研究问题

清官修农书如何组织「劝农」知识？有无宋代地方劝农的一手文本？

## 证据（原文与定位）

逐字直读（卷42，curl代理raw）：
- 经书层：《易》「井君子以勞民勸相」；《詩·鄘風》「靈雨既零…説于桑田…教民稼穡務農急也」；《禮記·月令》「孟春之月天子乃以元日祈穀於上帝…帥三公九卿諸大夫躬耕帝耤」「仲秋之月乃勸種麥毋或失時」
- 记事层：《宋史·高宗本紀》「頒諸農書於郡邑…立州縣墾田增虧賞罰格」；朱文公文集劝农文：「當職久處田間習知穡事兹忝郡寄職在勸農…皆緣長吏勸課不勤…一大凡秋間收成之後須趁冬月以前便將户下所有田段一例犁翻凍令酥脆…一秧苖既長便須及時趁早栽插莫令遲緩」

## AI 摘要 / 解释

劝课门的编纂结构本身就是「劝农作为国家制度」的证据：经典依据（经）→历史举措（史）→操作指令（地方劝农文）三层。朱熹劝农文证明宋代劝农已落到县级具体农事指令——与立春鞭春民俗、九华立春祭（当代遗存）构成同一条制度的古代文本端与当代实践端。

## 适用条件、例外与分歧

- 《授时通考》为清代官修汇编：引用既保存前代文献，也体现清代官方知识框架；「引某书曰」的文字与所引原书逐条核对（已发现齐民要术引文异文一处，见种谷时序卡）。
- 朱熹劝农文为南宋地方官劝农实例，地域时代限定明确。

## 关联

[[02_shared/README|共享知识]] · [[02_shared/hist-nongshu-shiyi-concept|农书时宜概念]] · [[02_topics/history|历史维度]] · [[02_topics/agriculture|农业维度]]

## 待人工确认

- 与《授时通考》整理本核对；朱熹劝农文与《朱文公文集》原卷核对。

## 修改记录

- 2026-09-25（R10-R12，第二轮）：建卡，证据为维基文库卷03/卷42直读。
