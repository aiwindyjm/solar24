---
schema_version: '0.1.0'
id: 'sci-xiaoman-grainfill-dryhotwind'
type: 'ScientificFact'
title: '小满与北方小麦灌浆期：干热风灾害的时间耦合'
solar_terms: ['xiaoman']
season: 'summer'
dimensions: ['climate', 'agriculture', 'scientific-interpretation']
region: ['中国北方麦区（稿源为陕西站气象科普，泛指"我国北方"；农谚条非遗网标注黄河中下游）']
period: '现行农业气象口径（2010年机构稿）；农谚流传年代未考'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  [
    'source-weather-com-cn-ganrefeng',
    'source-ihchina-xiaoman-feature',
    'source-xinhua-xiaoman-2024',
  ]
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
    'statement': '小满时节（5月下旬前后）正值中国北方冬小麦灌浆期：籽粒灌浆充实、将熟未熟；干热风（初夏高热低湿的风，别称热风/火风/干旱风，一般持续3天左右）恰多发于此时，会使麦穗"不能灌浆、提前枯熟、麦粒干瘪、粒重下降，导致严重减产"。农谚"小满不满，麦有一险"中的"一险"即指此期干热风对灌浆的威胁（非遗网标注为黄河中下游农谚）。',
    'exceptions': [
      '两源均为机构科普定性表述（未给温湿风数值指标与分区统计）；干热风的气象学指标体系（高温低湿型/雨后青枯型/旱风型等分类）本轮未建来源',
      '陕西站稿件语境含陕西（"我省夏粮也常受干热风的影响"），泛北方表述保留原文粒度',
      '农谚本身归 tradition 层（见 [[03_notes/trad-xiaoman-nongshi|农谚卡]]），本卡只引其机构释义',
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

# 小满与小麦灌浆期、干热风

## 研究问题

小满"将满未满"的农事物候在现代农业气象学中对应什么？这个节气最实质的气候风险是什么？

## 证据

- **已直接读取**：中国天气网陕西站《小满节气后注意防范干热风》（[[04_sources/source-weather-com-cn-ganrefeng|source-weather-com-cn-ganrefeng]]，陕西省专业气象台，2010-05-22）："干热风常发生的初夏时节，正是我国北方小麦灌浆时期，碰上干热风，麦穗会被烤得不能灌浆，提前'枯熟'、麦粒干瘪，粒重下降，导致严重减产。""初夏季节，我国一些地区经常会出现一种高热、低湿的风，这就是干热风，也叫'热风'、'火风'、'干旱风'等。"
- **已直接读取**：非遗网小满专题（[[04_sources/source-ihchina-xiaoman-feature|source-ihchina-xiaoman-feature]]）：农谚"小满不满，麦有一险"（"此时黄河中下游地区小麦刚进入灌浆期，最怕干热风的袭击"）。
- **已直接读取**：新华社稿（[[04_sources/source-xinhua-xiaoman-2024|source-xinhua-xiaoman-2024]]）："这时北方地区的小麦等夏熟作物正籽粒灌浆饱满、将熟未熟。"

## 解释（Scientific Interpretation）

- 古典命名（"小得盈满"、[[03_notes/hist-xiaoman-naming-xiaodeyingman|命名卡]]）与现代作物学**灌浆期**（grain filling，籽粒充实阶段）在同一时间窗重合——这是"小满"作为农事物候命名的现代科学对应物：命名描述的生物过程真实存在，且此时籽粒含水高、"将熟未熟"正与"小得盈满"吻合。
- 干热风是这个过程的主要气象风险：高温低湿加速蒸发，灌浆被迫提前终止（"逼熟"），粒重下降。农谚"小满不满，麦有一险"是对这一风险的经验表达——"不满"既可指籽粒不满，也可指雨水不满（南方义，见命名卡），农谚双关属 tradition 层解释。
- 此卡是"古典物候命名×现代农业气象"衔接样本：机制表述（烤/不能灌浆）保留机构原话粒度，未升级为未读过的植物生理学细节。

## 适用条件与待核验

- 干热风数值指标（气温≥30℃、湿度≤30%、风力≥3级之类）见检索摘要但**未直读机构原文**，不写入命题；待补中国气象局标准/《小麦干热风》气象行业标准直读。
- 分区气候统计（历年小满期干热风频率）缺；现代灌溉/品种变化对该风险的影响缺。

## 关联

[[01_terms/08_小满|小满索引]] · [[03_notes/hist-xiaoman-naming-xiaodeyingman|小满命名]] · [[03_notes/trad-xiaoman-nongshi|小满农事农谚]] · [[02_topics/climate|气候维度]] · [[02_topics/scientific-interpretation|现代科学解释]]

## 待人工确认

- 中国气象局干热风等级标准直读（数值指标入卡前置条件）。
- 小满期与冬小麦灌浆期的逐年物候数据（中国物候观测网）。

## 修改记录

- 2026-09-16（第一轮）：建卡。机构双源直读（中国天气网+非遗网，交叉一致）；干热风数值指标因未直读明确排除出命题。
