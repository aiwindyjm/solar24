---
schema_version: '0.1.0'
id: 'source-wikisource-huainanzi-benjingxun-guyu'
type: 'Source'
title: '《淮南子·本经训》"蒼頡作書，而天雨粟，鬼夜哭" · 维基文库直读'
solar_terms: ['guyu']
season: 'spring'
dimensions: ['history', 'references']
region: ['中国（西汉文本）']
period: '西汉（《淮南子》，刘安主持编纂）；维基文库校录本'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'medium'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
source:
  {
    'id': 'source-wikisource-huainanzi-benjingxun-guyu',
    'title': '淮南子/本經訓（维基文库）',
    'authors': ['（西汉）刘安等撰'],
    'publisher': 'Wikisource（维基文库）',
    'published': null,
    'url': 'https://zh.wikisource.org/wiki/淮南子/本經訓',
    'citation': '《淮南子·本经训》，维基文库本，2026-09-16 读取（谷雨研究：仓颉"天雨粟"句）。',
    'source_type': 'historical',
    'access': 'direct-read',
    'accessed': '2026-09-16',
    'original_excerpt': '昔者蒼頡作書，而天雨粟，鬼夜哭；伯益作井，而龍登玄雲，神棲昆侖；能愈多而德愈薄矣。',
    'locator': '《本经训》中段（论"朴散为器""能愈多而德愈薄"一节）。',
    'ai_summary': '仓颉传说最常被援引的古籍出处在《淮南子·本经训》直读核验完成。关键发现：原文语境是论述智巧兴起而德性转薄（与伯益作井对举），**通篇未提"谷雨"、未提降粟与节气或日期的任何关联**——"天雨粟"到"谷雨得名"之间是后世传说的再创作，不存在文献链条。异文提示：非遗网转述作"天雨谷，鬼夜哭"（谷/粟一字之差）；检索另见《论衡》多卷引"仓颉作书……天雨粟，鬼夜哭"句式，可作后续校勘旁证。',
    'rights': '古籍原文属公有领域；维基文库文本依其站点许可提供。仅记录元数据与短摘录。',
    'verification': 'human-verified',
  }

# owner-authorized source upgrade 2026-09-28
---

# 《淮南子·本经训》仓颉句 · Source

- 实际读取：是（2026-09-16，curl 拉取维基文库《淮南子/本經訓》全文页后按"蒼頡"定位逐字摘录；页面标题已核对）。
- 交叉核对：非遗网谷雨专题（[[04_sources/source-ihchina-guyu-feature|source-ihchina-guyu-feature]]）转述"天雨谷，鬼夜哭"与本文"天雨粟"存在一字异文（谷/粟），句子的存在与位置获第二来源印证，故标 cross-checked；异文本身已如实登记，待与《论衡》诸卷及通行点校本比对。
- 与既有 [[04_sources/source-huainanzi-tianwenxun-wikisource|《淮南子·天文训》源]] 分属两篇：《天文训》载二十四节气序列，《本经训》载仓颉句，互不覆盖。

[[04_sources/README|来源入口]]
