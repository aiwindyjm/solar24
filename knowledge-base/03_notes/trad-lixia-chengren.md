---
schema_version: '0.1.0'
id: 'trad-lixia-chengren'
type: 'Tradition'
title: '立夏秤人：清代文献可考的江南习俗与当代活态'
solar_terms: ['lixia']
season: 'summer'
dimensions: ['customs', 'history', 'chinese-life']
region: ['可考记载与当代机构表述均限南方（人民日报"江苏、浙江、上海等南方地区"；非遗网"南方民间"；杭州半山为国家级非遗项目传承地）']
period: '可考文献记载：清代（同治元年《苏州府志》、道光十年初刻《清嘉录》，均经人民日报转引，原书未直读）；当代延续（杭州半山）'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-people-lixia-chengren', 'source-ihchina-lixia-feature', 'source-ihchina-lixia-banshan', 'source-wikisource-jingchu-suishiji']
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
    'statement': '立夏秤人（称人）为南方流传习俗：可考文献依据为清代两书——同治元年《苏州府志》记立夏日"以大秤衡人而记其轻重"、道光十年初刻《清嘉录》"家户以大秤权人轻重，至立秋日又秤之，以验夏中之肥瘠"（两引文均转引自人民日报2025年稿，原书本轮未直读）；操作形态为"挂起一杆大木秤，秤钩悬凳子或竹筐，大家轮流坐到上面秤人，主要称老人和小孩"（非遗网），目的表述为"意在避免疰夏"；人民日报明确提示"传说不同于史实，但通过一些文字记载，也可推测这一习俗至少已有数百年"。六世纪《荆楚岁时记》全文本轮直读检索无"立夏"字样，立夏无独立条目，秤人不可上溯至六世纪。杭州半山当代仍在立夏节庆中实践称人（见半山卡）。',
    'exceptions': [
      '"南方"是三个机构来源各自的概括口径，未逐省核验分布',
      '《苏州府志》《清嘉录》引文系媒体转引，原书直读（维基文库无《清嘉录》页面）与断代细节待人工核验',
      '三国阿斗溯源传说与传说多版本形态另卡处理（legend 层），与本卡文献层不得混排',
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

# 立夏秤人（tradition 层）

## 研究问题

立夏秤人的可考文献起点在哪里？流行叙事（三国起源）与文献证据的差距是什么？

## 证据（按证据等级排列）

1. **媒体直读（转引清代文献）**：人民日报2025年稿（[[04_sources/source-people-lixia-chengren|source-people-lixia-chengren]]）：场景表述"在江苏、浙江、上海等南方地区，立夏日常能看到这样的场景"；考据句"传说不同于史实，但通过一些文字记载，也可推测这一习俗至少已有数百年"；《苏州府志》（清同治元年编辑）"以大秤衡人而记其轻重"、《清嘉录》（清道光十年初刻）"家户以大秤权人轻重，至立秋日又秤之，以验夏中之肥瘠"；另引周作人诗"新装扛秤好称人，却喜今年重几斤。吃过一株健脚笋，更加蹦跳有精神"作近代江南旁证。
2. **机构汇编直读**：非遗网立夏专题（[[04_sources/source-ihchina-lixia-feature|source-ihchina-lixia-feature]]）："南方民间流传着立夏秤人的习俗。中午吃过立夏饭，人们挂起一杆大木秤，秤钩悬凳子或竹筐，大家轮流坐到上面秤人，主要称老人和小孩。……此举意在避免疰夏，反映了人们祈求夏日清静安乐的美好愿望。"——注意：页面以"避免疰夏"框架叙述，**无三国故事**。
3. **名录页直读**：非遗网半山项目页（[[04_sources/source-ihchina-lixia-banshan|source-ihchina-lixia-banshan]]）将"称人"列入节令游艺习俗；中国日报2023年立夏节报道现场有"称人"环节（[[04_sources/source-chinadaily-lixia-banshan|中国日报源]]）——当代活态证据。
4. **负面文献证据（直读）**：《荆楚岁时记》维基文库全页（[[04_sources/source-wikisource-jingchu-suishiji|source-wikisource-jingchu-suishiji]]，本代理2026-09-16重抓检索）无"立夏"字样——六世纪荆楚岁时文献中立夏无独立条目，秤人食俗类习俗无从上溯。

## AI 摘要 / 解释

- 谱系结论（当前证据下）：**立夏秤人的可考文本记录在清代苏州地区文献（转引级），当代活态在杭州半山（直读级）**；"三国起源"是传说附会（见 [[03_notes/legend-lixia-chengren-adou|阿斗传说卡]]），早于清代的记载链条本轮完全缺失。
- 功能解读（Interpretation 层）："至立秋日又秤之，以验夏中之肥瘠"——秤人是一套**体重年检制度**：立夏记基数、立秋复秤验损耗，对应"苦夏"消瘦的健康焦虑。这比"祈求好运"的泛化说法更贴近清代文献自己的表述。

## 适用条件、例外与分歧

- 无跨来源直接冲突；风险集中在：(1) 媒体转引的清代文献未经原书核验；(2) "南方"概括被下游放大成"全国古俗"；(3) 传说层被当作起源写入科普文案（本轮防幻觉重点，见 legend 卡）。
- 秤人的器具史（大木秤、"秤花只往外打"等讲究）来自检索摘要级线索，本轮未建卡。

## 关联

[[01_terms/07_立夏|立夏索引]] · [[03_notes/legend-lixia-chengren-adou|三国溯源传说（legend）]] · [[03_notes/region-lixia-banshan|半山立夏习俗（当代活态）]] · [[02_topics/customs|民俗维度]]

## 待人工确认

- 《清嘉录》《苏州府志》原书直读（四库/方志数据库），确认引文与断代。
- 称人分布的方志级核验（湖南、江西、安徽等地有无平行记载）；半山老秤杆（检索摘要称"150年秤杆"）实物口径。

## 修改记录

- 2026-09-16（第一轮建库）：建卡。清代文献（转引级）+机构汇编+名录页+荆楚负面证据四层分开；三国溯源单独 legend 卡。
