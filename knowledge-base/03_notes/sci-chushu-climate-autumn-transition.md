---
schema_version: '0.1.0'
id: 'sci-chushu-climate-autumn-transition'
type: 'ScientificFact'
title: '处暑气候：由热转凉的转折点与"秋老虎"（分区图景）'
solar_terms: ['chushu']
season: 'autumn'
dimensions: ['climate', 'scientific-interpretation']
region: ['中国分区（长城以北/华北中南部黄淮/南方/华西/东南沿海）；概述级，未附逐年气象数据']
period: '"常年"口径（中国天气网2026）；谚语层为民闲传统'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-weathercn-chushu-2026', 'source-xinhua-chushu-2022', 'source-ihchina-chushu-feature']
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
    'statement': '处暑是中国由热转凉的转折期，但"由热转凉"不同步：常年处暑节气，北方多地高温几乎不见、昼夜温差加大，长城以北多地在此时段陆续进入秋高气爽期，新疆、内蒙古西部、陕西关中、山西南部、辽宁、河北部分地区开启入秋进程；华北中南部、黄淮和南方大部地区仍处夏季，南方高温最盛阶段已过但副热带高压不时西伸，长江中下游高温仍频（"秋老虎"）；华西地区开启以绵绵阴雨为特征的华西秋雨。谚语"处暑天还暑，好似秋老虎""处暑十八盆，白露勿露身""一场秋雨一场寒（凉）"表达同一转折经验的民间层。',
    'exceptions': [
      '分区图景为气象机构科普概述（"常年"口径），无逐年数据出处；入秋判据（候温法）未在源页说明，见 [[02_topics/scientific-interpretation|科学解释]] 分层',
      'brief 线索谚"处暑天不暑，炎热在中午"本轮未在任何直读源中读到，不入命题（新华社稿有近义表述"处暑时节的天气一般中午比较炎热，早晚会凉爽起来"）',
      '处暑与出伏的相对位置逐年变动（2022年处暑在末伏第九天，新华社实例），"三伏已过或接近尾声"为逐年差异项',
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

# 处暑气候：由热转凉的转折点与秋老虎

## 研究问题

处暑前后中国气候的真实图景是什么？"暑气至此而止"的命名与实际气温进程是否一致？

## 证据

- **已直接读取**：中国天气网2026处暑气候稿（[[04_sources/source-weathercn-chushu-2026|source-weathercn-chushu-2026]]，中国气象局公共气象服务中心）："常年此时，北方多地昼夜温差加大，长城以北多地陆续进入秋高气爽的时节；南方则暑热未消，长江中下游一带高温余威尚存，小心'秋老虎'出没""新疆、内蒙古西部、陕西关中、山西南部、辽宁、河北部分地区将会开启入秋进程""对于华北中南部、黄淮和南方大部地区来说，处暑节气期间依然处于夏季""副热带高压还会不时西伸，长江中下游一带高温天气依然频繁"。
- **已直接读取**：同稿华西秋雨成因："冷空气频繁南下，与滞留在西部地区的暖湿气流相遇，往往会给甘肃东南部、陕西南部、四川、重庆、贵州、云南等地带来长时间的阴雨天气"；秋台风："处暑节气处在夏秋之交，台风依然活跃……秋台风路径更加复杂多变"。
- **已直接读取**：新华社2022稿（[[04_sources/source-xinhua-chushu-2022|source-xinhua-chushu-2022]]）："处暑时节的天气一般中午比较炎热，早晚会凉爽起来"＋谚语"处暑天还暑，好似秋老虎""处暑十八盆，白露勿露身"。
- **已直接读取**：非遗网处暑专题农事段（[[04_sources/source-ihchina-chushu-feature|source-ihchina-chushu-feature]]）："风雨过后，人们会感到明显的降温，故有'一场秋雨一场寒'之说""处暑节气之后，长江以北地区气温逐渐下降，早晚已有浓重的凉意，白昼时间减少"。

## 解释（Scientific Interpretation）

- 处暑的气候本质是**转折而非到达**：北方率先入秋（昼夜温差拉大、高温收场），南方仍处夏季但最热阶段已过、转为间歇性高温（副高西伸的"秋老虎"），华西转入冷暖气流对峙的绵绵秋雨——一个节气名下三种区域节奏，这正是"命名宣告止暑（见 [[03_notes/hist-chushu-naming|命名卡]]）而全国气候远未同步"的原因。
- 谚语群（处暑天还暑/十八盆/一场秋雨一场寒）是民间对同一转折经验的口语化表达，属 tradition 层（见 [[03_notes/trad-chushu-nongshi|农事农谚卡]]），不作科学命题引用。

## 适用条件与待核验

- 待核验1：入秋进程的判据（连续5天滑动平均气温稳定<22℃或≥10℃起算等口径）需以气象行业标准直读替换"开启入秋进程"的媒体表述（候温法共享源 [[04_sources/source-szmb-season-division|source-szmb-season-division]] 可复用）。
- 待核验2：逐年秋老虎频次/强度的气候统计数据（国家气候中心）未建源。
- 2026年台风活跃与冷空气时段为当年天气个例，不外推。

## 关联

[[01_terms/14_处暑|处暑索引]] · [[03_notes/hist-chushu-naming|处暑命名]] · [[03_notes/trad-chushu-nongshi|处暑农事农谚]] · [[02_topics/climate|气候维度]]

## 待人工确认

- 入秋判据权威口径直读；"秋老虎"的气象学定义是否存在标准表述（现为俗语层）。
- 华西秋雨的气象学机制（副高撤退、印缅槽等）是否值得另立机制卡。

## 修改记录

- 2026-09-16（第一轮）：建卡。命题取分区结构（北/南/华西），避免"全国转凉"泛化；brief 线索谚"处暑天不暑，炎热在中午"未读到原文，弃用并记录。
