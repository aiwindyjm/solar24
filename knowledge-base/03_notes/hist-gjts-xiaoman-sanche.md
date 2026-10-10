---
schema_version: '0.1.0'
id: 'hist-gjts-xiaoman-sanche'
type: 'HistoricalRecord'
title: '"小满动三车"的古籍锚点：《古今图书集成》嘉兴县条与海宁蚕月条'
solar_terms: ['xiaoman']
season: 'summer'
dimensions: ['history', 'agriculture', 'customs']
region: ['中国江南（浙江嘉兴、海宁；条目自注"浙西皆然"）']
period: '清代类书《钦定古今图书集成》（康熙年间编成）汇录的浙江方志条；所引方志修年待考'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-gjts-suigongdian-045', 'source-ihchina-xiaoman-nongsu']
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
    'statement': '"小满动三车"（油车榨油、丝车缫丝、水车灌溉）的所见最早类书记载出于《钦定古今图书集成·历象汇编·岁功典》卷045汇录的《浙江志书》嘉兴县条："春末夏初浸穀種，小滿動油車、絲車、水車，謂之「動三車。」芒種刈菜麥。"同卷海宁县条另载四月蚕月风俗："四月為蠶月，育蠶之家各閉戶，親鄰無得輕入官府，暫停訟，謂之「放蠶忙」，浙西皆然。"',
    'exceptions': [
      '《古今图书集成》为清代类书转引方志，原始方志（何部《浙江志书》、修于何年）未核，"最早记载"仅为本轮所见，不排除更早文献',
      '维基文库单一直读本，未与四库/铜活字印本比对',
      '条目是农历四月风俗统记：蚕月闭户条并非小满日专属仪式记录，只证江浙四月蚕事之盛',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/B/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# "小满动三车"的古籍锚点

## 研究问题

现代民俗汇编盛传的"小满动三车，动的是水车、油车、丝车"，能否找到古籍直接出处？

## 证据（原文与定位）

已直接读取维基文库《欽定古今圖書集成·曆象彙編·歲功典》卷045（[[04_sources/source-gjts-suigongdian-045|source-gjts-suigongdian-045]]）：

> 《浙江志書》嘉興縣："春末夏初浸穀種，小滿動油車、絲車、水車，謂之「動三車。」芒種刈菜麥。"
> 《浙江志書》海寧縣："四月為蠶月，育蠶之家各閉戶，親鄰無得輕入官府，暫停訟，謂之「放蠶忙」，浙西皆然。"

**现代存续旁证**（第二直读方）：非遗网《小满农俗》（[[04_sources/source-ihchina-xiaoman-nongsu|source-ihchina-xiaoman-nongsu]]，2018）：'江南地区有农谚："小满动三车"，它是对江南小满农事的形象总结。"三车"指的是油车、丝车、水车'——谚语名目与三车次序（油/丝/水）与古籍条一致，证该记载的现代存续；此源不证古籍文本本身（版本校勘仍以类书本为基准）。

## AI 摘要 / 解释

- **出处核验结论**：任务线索曾猜测《清嘉录》五月条或《吴郡岁华纪丽》——经维基文库检索 API 核验，两书均无专页（intitle 检索 0 命中）；实际命中的古籍锚点是《古今图书集成·岁功典》卷045嘉兴县条。三车内容（油车/丝车/水车）与非遗网、中国文化报的现代转述完全一致（见 [[03_notes/trad-xiaoman-sanche-customs|现代民俗卡]]），构成"清类书→现代汇编"的传承链。
- 嘉兴条把"动三车"嵌在完整农事链里：浸谷种→小满动三车→芒种刈菜麦——三车是**四月末五月初江南农事节奏的一环**（油车榨油菜籽、丝车缫春蚕茧、水车灌稻田），不是孤立仪式。
- 海宁"放蠶忙"条：蚕月闭户、停讼——官府给蚕事让路的制度性风俗，"浙西皆然"说明地域范围。此条是江浙四月蚕事繁盛的方志旁证，支撑 [[03_notes/trad-xiaoman-qican|祈蚕卡]] 的地域背景（但不是"小满=蚕神诞辰"的证据）。

## 适用条件、例外与分歧

- 《清嘉录》（顾禄，清苏州人）是否有小满条目本轮无法证伪（维基文库无该书文本≠原书无记载），若后世核查请以印本为准。
- 原始方志层未核：嘉兴县条出自何时所修《浙江志书》待查（影响断代精度：现存文本不早于清代类书编成）。

## 关联

[[01_terms/08_小满|小满索引]] · [[03_notes/trad-xiaoman-sanche-customs|动三车习俗（现代记录）]] · [[03_notes/trad-xiaoman-qican|祈蚕节]] · [[03_notes/lit-wengjuan-xiangcunsiyue|《乡村四月》（蚕桑+插田）]] · [[02_topics/history|历史维度]]

## 待人工确认

- 《清嘉录》《吴郡岁华纪丽》印本小满条目核查（维基文库无此二书文本）。
- 嘉兴县条原始方志溯源与断代。

## 修改记录

- 2026-09-16（第一轮）：建卡。古今图书集成卷045直读，逐字摘嘉兴/海宁两条；否定清嘉录/吴郡岁华纪丽猜测（维基文库无本），出处锚定类书层。
- 2026-09-16（证据补强）：新增非遗网《小满农俗》为第二直读方（现代机构页转述同一谚语、三车名目一致，证存续），独立直读方 1→2。
- 2026-09-16（路由处置）：路由引擎 finding evidence-below-confidence（tier B×2 不足以支撑 high），confidence high→medium；复跑后 finding 消除、路由 auto-candidate，按入包规则保持 draft。
