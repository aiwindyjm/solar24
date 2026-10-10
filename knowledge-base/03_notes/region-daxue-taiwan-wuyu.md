---
schema_version: '0.1.0'
id: 'region-daxue-taiwan-wuyu'
type: 'CulturalFact'
title: '台湾西部沿海乌鱼汛："小雪小到，大雪大到"的节气渔谚（地域卡）'
solar_terms: ['daxue']
season: 'winter'
dimensions: ['regional-differences', 'customs', 'ecology']
region: ['台湾西部沿海（乌鱼汛海域）；渔谚流传地域未逐一标注']
period: '机构汇编层记载：非遗网2017、光明网2023；乌鱼汛本身为黑潮水温和季节驱动的年度渔汛（当代仍在）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-ihchina-daxue-feature', 'source-gmw-ruixue-daxue']
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
    'statement': '两个直读机构源记载台湾西部沿海的大雪时节乌鱼汛：非遗网大雪专题（2017）"俗谚「小雪小到，大雪大到」是指从小雪时节，乌鱼群就慢慢进入台湾海峡，到了大雪时节因为天气越来越冷，乌鱼群沿水温线向南回游，汇集的乌鱼也越来越多，整个台湾西部沿海都可以捕获乌鱼，产量非常高"；光明网学者文（2023）收录同一渔谚。这是大雪节气在华南沿海的生计型地域锚点——节气被用作渔汛时刻表，与北方封河恰成南北对照。',
    'exceptions': [
      '"产量非常高"为2017机构页转述，当代乌鱼汛年际波动与渔获量趋势未核（检索提示近年资源变动议题存在，本轮无直读源，不写）',
      '渔谚本身无更早文献出处（方志/渔业史）可考，"自古以节气捕乌鱼"不可写',
      '乌鱼（鲻鱼）洄游的海洋学机制（水温线南移的具体数值）无机构直读，不展开',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 台湾乌鱼汛：节气作渔汛时刻表（地域卡）

## 研究问题

大雪节气在华南沿海有没有地域性的生计锚点？

## 证据（四要素）

**Location**：台湾西部沿海（台湾海峡南侧越冬洄游终点海域）；渔谚流传地未标注，据叙述锚定闽台沿海渔业社会。

**Tradition**：以节气标记渔汛的渔谚"小雪小到，大雪到大"——乌鱼群随水温下降沿水温线向南回游，小雪起进入台湾海峡、大雪时汇集量增（非遗网2017直读：乌鱼群"沿水温线向南回游，汇集的乌鱼也越来越多，整个台湾西部沿海都可以捕获乌鱼"）。乌鱼子（乌鱼卵巢干制品）为该渔汛的标志性加工品——此点本轮两源未直读提及，不展开。

**Period**：机构记载层为2017（非遗网专题）与2023（光明网学者文）；乌鱼汛作为年度冬季渔汛是持续的生态现象（洄游周期），但"以节气记汛"的口传起点无从断代。

**Current Practice**：非遗网（2017）载"产量非常高"；当代台湾海峡乌鱼汛仍在（每年冬至前后为汛期高峰的通行叙述本轮无直读，不写具体日期），渔获量年际变化与资源管理议题待核。

## AI 摘要 / 解释

- **南北对照的结构价值**：同一个"大雪"，黄河流域的经验是封河（[[03_notes/trad-daxue-fenghe|封河卡]]）、冬麦区是雪被丰年（[[03_notes/trad-daxue-ruixue|农谚卡]]），而台湾海峡是渔汛高峰——节气体系作为太阳位置刻度（[[03_notes/sci-daxue-longitude-255|黄经255°]]）被不同纬度、不同生计方式的地方社会各自"翻译"为本地时刻表。这是 regional-differences 维度最干净的例证之一。
- 与处暑开渔节（[[03_notes/region-chushu-xiangshan-kaiyu|象山开渔节卡]]，现代节庆锚）不同，乌鱼汛锚是**生态节律+生计知识**，不是现代制度创设——但两者都提示：沿海节气的"农事"叙述应扩为"农渔事"。

## 适用条件、例外与分歧

- 两机构源文本高度同源（非遗网2017→光明网2023 疑似转载链），谚语互证成立但"两独立直读升 high"不成立——confidence 维持 medium。
- 渔汛的海洋学参数（水温阈值、汛期与节气日的逐年偏差）与当代渔获统计均无源，留待渔业部门数据。

## 关联

[[01_terms/21_大雪|大雪索引]] · [[03_notes/trad-daxue-fenghe|封河与冰上活动（北方对照）]] · [[03_notes/trad-daxue-ruixue|大雪农谚]] · [[02_topics/regional-differences|地域差异]] · [[02_topics/ecology|生态维度]]

## 待人工确认

- 台湾方志/渔业史中"乌鱼汛系于节气"的更早记载；当代乌鱼汛渔获与资源变动数据（渔业署/水产试验所口径）。
- 乌鱼子加工谱系（如需展开，另立 food 维度卡）。

## 修改记录

- 2026-09-16（第一轮）：建卡。四要素齐备；两源疑似同源已降权处理；乌鱼子等扩展点显式留白。
