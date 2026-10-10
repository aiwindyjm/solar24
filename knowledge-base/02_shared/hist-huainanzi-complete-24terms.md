---
schema_version: '0.1.0'
id: 'hist-huainanzi-complete-24terms'
type: 'HistoricalRecord'
title: '《淮南子·天文训》：二十四节气的最早完整文献序列'
solar_terms: []
season: null
dimensions: ['history', 'astronomy']
region: ['中国（西汉淮南国，今安徽一带成书）']
period: '西汉（体系定型于《淮南子》成书时代，公元前2世纪）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
contested: false
source_ids: ['source-huainanzi-tianwenxun-wikisource']
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
    'statement': '《淮南子·天文训》以北斗斗柄方位"加十五日"为一节，依次列出与今日名称相同的完整二十四节气序列；其中立春条作"距日冬至四十六日而立春，陽氣凍解，音比南呂"（维基文库本）。',
    'exceptions': [
      '不同版本"四十五日/四十六日"存在文字差异，校勘结论待研究（见正文）',
      '"最早完整记载"的断代判断需天文史学界文献支撑，本轮仅核对文本本身',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=high/A/独立1；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 《淮南子·天文训》的二十四节气完整序列

## 研究问题

二十四节气名称何时第一次被完整、按序记载？当时如何定义立春？

## 证据（原文与定位）

已直接读取维基文库《淮南子·天文训》（[[04_sources/source-huainanzi-tianwenxun-wikisource|source-huainanzi-tianwenxun-wikisource]]）：

> "斗指子則冬至，音比黃鐘；加十五日指癸則小寒……加十五日指報德之維，則越陰在地，故曰**距日冬至四十六日而立春，陽氣凍解，音比南呂**；加十五日指寅則雨水，音比夷則……"

段落以"兩維之間，九十一度十六分度之五……十五日為一節，以生二十四時之變"引出，此后逐一排到小雪、大雪。

## AI 摘要 / 解释

- 西汉文本已用"斗柄方位+十五日"的机制给出全部24名，说明**成体系的二十四节气至迟在公元前2世纪已经定型**；立春被描述为冬至后约45-46日、"阳气冻解"之时。
- 每节气配十二音律（立春"音比南吕"），提示节气与律历、音律的古典知识框架嵌套关系——这是未来"声音研究"维度的一条可靠线索。
- 注意：这是"距冬至计数+斗柄指向"，与今日"太阳黄经315°"是**不同的描述系统**，两者数值近似相等但不等同（古代无黄经坐标概念）。

## 适用条件、例外与分歧

- **版本差异（已记录，待校勘）**：维基文库本立春句作"四十六日"；检索中发现国学网等版本及部分转述作"四十五日"，另有八风段"距日冬至四十五日條風至"易与之混淆。差异或与"报德之维"计数方式有关（淮南子研究学者陈广忠在中国非遗网有专文讨论，本轮未读全文）。**在人工校勘前，引用时应注明版本**。
- 新华网2017年《〈淮南子〉与二十四节气的创立》称"完整、科学记载出自天文训"（检索摘要级，未读全文）。

## 关联

[[01_terms/01_立春|立春索引]] · [[03_notes/sci-lichun-longitude-315|立春天文定义]] · [[02_shared/fact-solarterms-yellow-river-origin|黄河流域起源]] · [[02_topics/history|历史维度]]

## 待人工确认

- "最早完整记载"断代的学术依据（刘安卒年、成书年代与出土文献对照）。
- 版本校勘：中华书局点校本《淮南子集释》相关校记。

## 修改记录

- 2026-09-16（模型复盘）：在"证据"部分明确直读范围——本轮直接读取的原文段落为冬至至雨水及段落收尾说明（小雪、大雪），"其余节气名与今名完全相同"依据维基文库本的段落完整性陈述与未读全文的新华网转述，整体置信度维持 medium 不变；此处显式标注以防"全部24名已逐一亲验"的误读。
