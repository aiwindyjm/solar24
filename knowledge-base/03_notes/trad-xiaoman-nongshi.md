---
schema_version: '0.1.0'
id: 'trad-xiaoman-nongshi'
type: 'Tradition'
title: '小满农事："三夏"大忙、分域农谚与食苦菜'
solar_terms: ['xiaoman']
season: 'summer'
dimensions: ['agriculture', 'food', 'chinese-life']
region: ['中国（农谚分域标注：长江中下游/华南/黄河中下游/江南；食苦菜条目含宁夏/陕西）']
period: '机构汇编为2015-2018年表述；农谚与食俗的流传年代未考'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-ihchina-xiaoman-feature', 'source-ihchina-xiaoman-nongsu', 'source-ihchina-xiaoman-zheli-2015', 'source-wikisource-shoushitongkao']
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
    'statement': '小满农事的核心是"三夏"（夏收、夏种、夏管）大忙的开端：小春作物（小麦/大麦/油菜/豌豆等）即将收获、中稻全面栽插，"晴天抢收，雨天抢栽"（非遗网）。农谚分域流传：长江中下游"小满不下，黄梅偏少""小满无雨，芒种无水"；华南"小满大满江河满"；黄河中下游"小满不满，麦有一险"（机构释为灌浆期怕干热风，见 [[03_notes/sci-xiaoman-grainfill-dryhotwind|干热风卡]]）；江南另有"小满不起蒜，留在地里烂""小满桑葚黑，芒种小麦割""小满有雨豌豆收，小满无雨豌豆丢""好蚕不吃小满叶""小满见新茧"等蚕果菜谚。食俗：旧时有小满吃苦菜、尝新麦之俗；苦菜为中国人最早食用的野菜之一，过去青黄不接时百姓以之充饥，宁夏人称"苦苦菜"，李时珍称"天香草"。',
    'exceptions': [
      '农谚均为机构汇编转述，各条原始文献与实际流传范围未逐一核验——引用时保留机构的地域标注粒度',
      '农谚是经验性押韵总结，不作科学命题使用（其气象学对应仅干热风一条有机构科学稿支撑）',
      '"三夏"时段跨度（小满至夏至前后）与小满节气日本身不等同',
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

# 小满农事、农谚与食苦菜

## 研究问题

小满在农事年历中的位置是什么？围绕它的农谚如何体现南北差异？食苦菜之俗的证据如何？

## 证据（原文与定位）

- **已直接读取**：非遗网小满专题（[[04_sources/source-ihchina-xiaoman-feature|source-ihchina-xiaoman-feature]]）农事农谚节：三夏大忙（"晴天抢收，雨天抢栽"）、分域农谚（长江中下游/华南/黄河中下游三组+江南蔬果蚕蜂谚群）、南北"满"双义。
- **已直接读取**：非遗网《小满农俗》（[[04_sources/source-ihchina-xiaoman-nongsu|source-ihchina-xiaoman-nongsu]]）："小满时节，小春作物（指前一年播种第二年初夏收获的作物，如小麦、大麦、油菜、豌豆等）即将收获，中稻（指半晚熟稻）全面栽插，农事繁忙。"
- **已直接读取**：《中国文化报》2015（[[04_sources/source-ihchina-xiaoman-zheli-2015|source-ihchina-xiaoman-zheli-2015]]）："小满小满，麦粒渐满。"及"旧时有在小满吃苦菜和尝新麦的习俗，吃'苦'尝'新'。"

**子命题 → 证据映射（2026-09-17 质量修正 F03 补）**：

| 子命题 | 支持来源 | 支持层级 |
|---|---|---|
| 三夏大忙（晴天抢收雨天抢栽） | 非遗网专题农事节 | 机构汇编（2017） |
| 长江中下游/华南/黄河中下游三组农谚 | 非遗网专题农谚节 | 机构汇编，地域粒度按页面标注 |
| 江南蚕果菜谚群（起蒜/桑葚黑/豌豆/蚕叶/新茧） | 非遗网专题农谚节 | 同上 |
| 小春作物定义、中稻栽插 | 非遗网《小满农俗》 | 机构汇编（与专题页同机构，不构成独立交叉） |
| "麦粒渐满"、吃苦菜尝新麦之俗 | 《中国文化报》2015（ihchina 转载） | 媒体表述（"旧时有…习俗"） |
| 李时珍"天香草"、苦菜食用史 | 非遗网专题（转述） | 转述级，原典未读——不得单独引用为史实 |

三处来源均属非遗网体系（同发布方），本卡内部多源一致性仅为同机构互证；confidence=medium 以机构汇编层为限。

- **农书直读环（2026-09-25，R42·第三阶段）**：《農桑通訣》（经卷04辑录，直读）「小滿中氣初五日苦菜秀次五日靡草死後五日麥秋至」——「麥秋至」把麦收季直接编入小满三候，是"小满=麦子灌浆将熟"的农书层对应物。

## AI 摘要 / 解释

- 南北"满"义的农谚分布（机构汇编层）：**北方麦区**——"满"指籽粒（麦粒渐满/麦有一险）；**南方水乡**——"满"指雨水（江河满/黄梅雨的前兆占验）；同一节气名在两大农区各押一套农谚，是"小满"语义双层性（[[03_notes/hist-xiaoman-naming-xiaodeyingman|命名卡]]）的民间实践基础。
- 食苦菜与一候"苦菜秀"（[[03_notes/hist-yueling-xiaoman-pentads|三候卡]]）物候对应：苦菜当令而食，逻辑同"尝新麦"（麦秋将至）——"吃苦尝新"是青黄不接月末的食物策略。李时珍"天香草"、《毛诗》"誰謂荼苦"（三候注文已引）为机构转述，原典核对待做。
- 蚕果菜谚（桑葚黑/见新茧/不吃小满叶）与 [[03_notes/trad-xiaoman-qican|祈蚕卡]]、[[03_notes/hist-gjts-xiaoman-sanche|动三车卡]] 同窗互证：小满=江南蚕麦两忙的关键节点。

## 适用条件、例外与分歧

无跨来源冲突。所有农谚按机构原粒度标注地域；未做逐省核验。

## 关联

[[01_terms/08_小满|小满索引]] · [[03_notes/sci-xiaoman-grainfill-dryhotwind|灌浆与干热风]] · [[03_notes/hist-xiaoman-naming-xiaodeyingman|命名双义]] · [[03_notes/hist-yueling-xiaoman-pentads|三候：苦菜秀]] · [[02_topics/agriculture|农业维度]] · [[02_topics/food|饮食维度]]

## 待人工确认

- 各农谚的方志/农书源头（《农政全书》月令类、江南府县志）；"小满见三新"类食谣的地域样本。
- 苦菜食用史原典（《诗经》荼、《救荒本草》）直读。

## 修改记录

- 2026-09-16（第一轮）：建卡。三夏农事+分域农谚+食苦菜合并成卡（食俗证据同为机构汇编层，不单列）；农谚显式标注不作科学命题。
- 2026-09-17（质量修正 F03）：补子命题→证据映射表与同发布方说明（三源均非遗网体系）；李时珍条目降为"转述级不得单独引用"。不拆卡——各子命题已可独立追溯，审核时可分项 Decision。
- 2026-09-25（R42，第三阶段）：新增《授时通考》卷04-06辑录农书直读环；source_ids 扩充。
