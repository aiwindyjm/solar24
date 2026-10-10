---
schema_version: '0.1.0'
id: 'lit-baijuyi-hanlu-chishang'
type: 'CulturalFact'
title: '白居易《池上》："褭褭涼風動，淒淒寒露零"——寒露入诗的直接文本'
solar_terms: ['hanlu']
season: 'autumn'
dimensions: ['literature-art']
region: ['中国']
period: '唐代（白居易，772-846）；作品系年本轮未考'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-baijuyi-chishang']
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
    'statement': '唐代白居易五律《池上》全诗为"褭褭涼風動，淒淒寒露零。蘭衰花始白，荷破葉猶青。獨立棲沙鶴，雙飛照水螢。若為寥落境，仍值酒初醒。"（维基文库作品页直读；底本"褭褭"为通行选本"袅袅"的异体字）。首联以"寒露"二字直接入诗并置于韵脚位置，写凉风吹动、寒露降落的深秋池上；颔联兰衰荷破的物候描述与机构稿对寒露时节"蝉噤荷残"的概括同构。',
    'exceptions': [
      '作品系年与创作地点未考；《全唐诗》卷448、《白氏长庆集》卷25的收录记录来自检索结果，本轮未逐字比对异文',
      '底本用字（褭褭/淒淒）与通行选本（袅袅/凄凄）有异体差异，引用时须标注版本；诗题"池上"与白居易另一首"小娃撑小艇"《池上》同名异诗，引用时以首句区分',
      '"寒露"入诗是否即指节气（而非泛指寒冷的露水）属解读层：诗写凉风、兰荷凋残的深秋场景与寒露节气时段相合，但诗人未必依节气历日写作，本卡不作断言',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=low/B/独立1；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 白居易《池上》：寒露入诗

## 研究问题

"寒露"二字入诗的最可靠直接文本是哪一首？它与节气的关系如何界定？

## 证据（原文与定位）

已直接读取维基文库作品页（[[04_sources/source-wikisource-baijuyi-chishang|source-wikisource-baijuyi-chishang]]）：

> "褭褭涼風動，淒淒寒露零。
> 蘭衰花始白，荷破葉猶青。
> 獨立棲沙鶴，雙飛照水螢。
> 若為寥落境，仍值酒初醒。"

页面：五言律诗，分类"唐朝/白居易/詩/唐诗"，公有领域。检索另命中《全唐诗》卷448与《白氏长庆集》卷25收有此诗（同为维基文库托管，按同发布方规则不构成独立交叉）。

## AI 摘要 / 解释

- **为什么值得作文学样本**：(1) "淒淒寒露零"把节气名嵌进对仗首联并押韵（零，青韵），"寒露"由时间词转为眼前物象——零落的露本身；(2) 颔联"蘭衰花始白，荷破葉猶青"两句写两种植物的不同凋零进度（兰已衰而荷犹青），与寒露三候"菊有黄华"同时段的物候观察互文（[[03_notes/hist-yueling-hanlu-pentads|三候卡]]）；(3) 尾联以"酒初醒"收束，深秋池上的寥落感与"由凉转寒"的体感转折（[[03_notes/sci-hanlu-cooling-transition|气候卡]]）在情绪层同构。
- **同名异诗警示**：白居易名下另有一首妇孟能诵的《池上》（"小娃撑小艇，偷采白莲回"），与本诗无关，对外引用须以首句区分，防止张冠李戴。
- **节气解读的边界**：诗题与诗中均无历日信息，"寒露"亦兼有"寒冷的露水"字面义；本卡只确证文本与物候场景的相合，不主张"为寒露节气而作"。

## 适用条件、例外与分歧

无文本分歧（直读单源）；系年、地 点与异文比对待人工。新华社2021寒露稿标题所引"风入蒹葭秋色晚，气冷露凝雁南归"（另诗）与2022稿"萧疏桐叶上，月白露初团"（戴察句）均为媒体选诗，与本卡无涉。

## 关联

[[01_terms/17_寒露|寒露索引]] · [[03_notes/hist-yueling-hanlu-pentads|寒露三候]] · [[03_notes/lit-shijing-jianjia|蒹葭（白露入诗之源）]] · [[02_topics/literature-art|文学艺术]]

## 待人工确认

- 与《全唐诗》卷448、《白氏长庆集》卷25通行印本核对用字；作品系年考证（朱金城笺注本等）。
- 唐人"寒露"入诗的其他文本（元稹《咏廿四气诗》组诗维基文库无页，已知待研究）。

## 修改记录

- 2026-09-16（第一轮）：建卡。全诗本轮逐字直读；节气关联按"物候场景相合"的弱口径登记，不作创作意图断言。
