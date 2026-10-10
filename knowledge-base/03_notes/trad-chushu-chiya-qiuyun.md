---
schema_version: '0.1.0'
id: 'trad-chushu-chiya-qiuyun'
type: 'Tradition'
title: '处暑吃鸭与"出游迎秋、看巧云"：机构汇编层记载，古籍直读待补'
solar_terms: ['chushu']
season: 'autumn'
dimensions: ['food', 'customs', 'chinese-life']
region: ['机构汇编叙述（北京保留至今为重点标注）；无古籍直读，地域谱系未核']
period: '当代机构汇编（2017）；古籍层缺'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'low'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-ihchina-chushu-feature']
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
    'statement': '处暑食俗与赏秋习俗的当前证据层为机构汇编：非遗网处暑专题（2017）记"民间有处暑吃鸭子的习俗。老鸭味甘性凉，做法多样，有白切鸭、柠檬鸭、烤鸭、荷叶鸭等。北京至今还保留着这一习俗，处暑时节，人们会到店里去买处暑百合鸭"；又记"处暑过，暑气止……民间素有『七月八月看巧云』之说，就是『出游迎秋』之意"。两项习俗在《荆楚岁时记》《燕京岁时记》等已直读书目的处暑/七月条中均未见记载，谱系（起于何时、流行于哪些地域）本轮无古籍证据，如实记为待考。',
    'exceptions': [
      '单一机构汇编源（非遗网专题页，无逐条出处标注），confidence 定 low',
      '"处暑百合鸭"为北京当代老字号商品名与节令食俗的复合现象（Modern Popularization 成分），不宜写成"古俗"',
      '"看巧云/出游迎秋"是大暑后云形变化的观赏经验与大段暑热结束后的郊游行为的概括表述，无古籍出处',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立1；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 处暑吃鸭与出游迎秋

## 研究问题

处暑"吃鸭子""出游迎秋看巧云"两项流行说法的文献状态如何？

## 证据

1. **直读机构汇编**：非遗网处暑专题习俗段（[[04_sources/source-ihchina-chushu-feature|source-ihchina-chushu-feature]]）吃鸭子、出游迎秋两条全文（见 claim 引文）。
2. **古籍排查（阴性结果）**：本轮已直读的《荆楚岁时记》七月条（盂兰盆/七夕，见 [[03_notes/hist-chushu-zhongyuan-hedeng|中元卡]]）与《燕京岁时记》七月诸条（中元/荷叶灯/法船/盂兰会/放河灯/江南城隍庙/金钟儿/菱角鸡头）中**无**处暑食鸭、无"看巧云"记载——谱系起点不明。

## AI 摘要 / 解释

- 处暑吃鸭的当前可述层：**当代民俗实践真实存在（北京百合鸭为商品化形态），但"自古吃鸭"无文献支撑**；鸭"味甘性凉"是食疗话语（中医养生层，非遗网养生段另有"滋阴润燥"表述），与节气绑定的时间深度未知。
- "七月八月看巧云"作为俗谚被机构页引用：云形疏散（"不像大暑时浓云成块"）与处暑后天空通透的经验观察相合，但谚语流传地域与起点未核。
- 与中元民俗卡互参：处暑专题页内的"确凿日期锚民俗"其实都锚在中元（见 [[03_notes/hist-chushu-zhongyuan-hedeng|中元卡]]）；吃鸭/巧云两项则是**无固定日期锚的时段性习俗**——这提示"处暑自己的节俗"在文献层相当稀薄，多为时段归并。

## 适用条件、例外与分歧

- 无冲突；核心风险是单源撑"习俗存在"，已按 low 定级并在解释层从轻处理（"北京保留"为源文明示的地域限定）。
- 需要方志与近现代民俗志（如《中华全国风俗志》）补证后方可升 confidence。

## 关联

[[01_terms/14_处暑|处暑索引]] · [[03_notes/hist-chushu-zhongyuan-hedeng|中元节日期锚辨析]] · [[02_topics/food|饮食维度]]

## 待人工确认

- 方志/民俗志中处暑食鸭记载排查（北京"百合鸭"老字号谱系、江南"处暑送鸭"说法）。
- "七月八月看巧云"谚语的地域来源。

## 修改记录

- 2026-09-16（第一轮）：建卡。机构单源+古籍阴性排查，confidence low；明确"处暑自有节俗文献稀薄"的结构性发现。
