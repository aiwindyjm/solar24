---
schema_version: '0.1.0'
id: 'hist-daxue-naming'
type: 'HistoricalRecord'
title: '"大者，盛也。至此而雪盛矣"：大雪的命名定义句'
solar_terms: ['daxue']
season: 'winter'
dimensions: ['history', 'climate']
region: ['命名经验锚定黄河流域古典气候；"雪盛"是时段概率叙述而非当日实况']
period: '文本传统题名为元代（吴澄《月令七十二候集解》）；"大雪"作为节气名更早见于《淮南子·天文训》序列'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-yueling-qishierhou-wikisource', 'source-ihchina-daxue-feature', 'source-weathercn-daxue-2008']
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
    'statement': '《月令七十二候集解》大雪命名定义句为"大雪，十一月節。大者，盛也。至此而雪盛矣"：以"大/小"对举（与小雪相对）表示降雪盛于小雪之时。机构解释层（中国天气网直读）明确"大雪的意思是天气更冷，降雪的可能性比小雪时更大了，并不指降雪量一定很大"——命名是古典的概率性时段描述，不是降雪量等级。',
    'exceptions': [
      '机构页引文作"至此而雪盛也"（省略"大者，盛也"句），与维基文库直读本存在异文，以直读为准',
      '"大雪"名称与小雪的对举结构（如"小雪→大雪"与"小寒→大寒"、"小暑→大暑"同型）属体系观察，非单卡命题，此处不展开',
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

# 大雪的命名：大者，盛也

## 研究问题

"大雪"这个名字在原始文献中的定义是什么？"雪盛"指什么？

## 证据（原文与定位）

1. **直读一手文本**：维基文库《月令七十二候集解》大雪节（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]）："大雪，十一月節。大者，盛也。至此而雪盛矣。"
2. **直读机构引文**：非遗网大雪专题（[[04_sources/source-ihchina-daxue-feature|source-ihchina-daxue-feature]]）引作"大雪，十一月节，至此而雪盛也"（2017）；光明网学者文（[[04_sources/source-gmw-ruixue-daxue|source-gmw-ruixue-daxue]]）同引（2023）——两机构引文一致，但与维基文库本有"也/矣"之异并省"大者，盛也"句。
3. **直读机构解释**：中国天气网专题（[[04_sources/source-weathercn-daxue-2008|source-weathercn-daxue-2008]]）：""大雪"节气在每年的12月7日或8日……大雪的意思是天气更冷，降雪的可能性比小雪时更大了，并不指降雪量一定很大。"

## AI 摘要 / 解释

- 命名逻辑：**"大"是程度副词性的强调，指向"雪（降雪之势）至此更盛"**，参照对象是前一个节气小雪——这是二十四节气中"小/大"对举命名（小暑大暑、小寒大寒、小雪大雪）的一例；机制性叙述（对举结构全表）属共享知识范畴，不在本卡展开。
- **命名≠天气等级**：中国天气网的直读解释非常关键——"降雪的可能性比小雪时更大"而非"降雪量一定很大"；天气预报里的"大雪"是降雪强度等级（24小时降雪量5.0～9.9毫米等标准），两者同词异义，详见 [[03_notes/sci-daxue-jieqi-vs-tianqi|节气大雪与天气大雪]]。把节气"大雪"读成"这天必下大雪"是常见的公众误解。
- 命名所述"雪盛"的经验背景是黄河流域古典气候（见 [[02_shared/fact-solarterms-yellow-river-origin|黄河流域起源与地域校准]]）；在华南与云南南部无冬区，大雪时节本无雪可盛（中国天气网直读："除华南和云南南部无冬区外"）。

## 适用条件、例外与分歧

- 定义句文本以维基文库直读本为准；机构引文异文已在 [[03_notes/hist-yueling-daxue-pentads|三候卡]] 登记，两卡共用该 finding，不重复展开。
- "雪盛"是否可量化为降雪日数/概率的现代统计（大雪节气 vs 小雪节气降雪频次对比），本轮无气象数据源，不写。

## 关联

[[01_terms/21_大雪|大雪索引]] · [[03_notes/hist-yueling-daxue-pentads|大雪三候]] · [[03_notes/sci-daxue-jieqi-vs-tianqi|节气大雪≠天气大雪]] · [[03_notes/sci-daxue-longitude-255|黄经255°定义]] · [[02_topics/history|历史维度]]

## 待人工确认

- "也/矣"异文校勘（中华书局印本/《四库》本）。
- 《淮南子·天文训》序列中"大雪"名目的直接对读（共享卡已载其序列存在，本节气字样核对待做）。

## 修改记录

- 2026-09-16（第一轮）：建卡。定义句直读 + 机构解释层（"可能性更大、不指降雪量"）分层表述；异文发现转引三候卡。
