---
schema_version: '0.1.0'
id: 'hist-chushu-naming'
type: 'HistoricalRecord'
title: '处暑的命名："处，止也，暑气至此而止矣"的古典定义与现代"出暑"白话'
solar_terms: ['chushu']
season: 'autumn'
dimensions: ['history', 'chinese-life', 'scientific-interpretation']
region: ['中国（命名取义于暑热休止，文本传统锚定黄河-江淮经验）']
period: '《月令七十二候集解》传统题名为元代；"出暑"为当代机构白话释义'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-yueling-qishierhou-wikisource', 'source-xinhua-chushu-2022', 'source-ihchina-chushu-feature']
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
    'statement': '《月令七十二候集解》对处暑命名的定义句为"處，止也。暑氣至此而止矣"——"处"取"止住"义，谓暑气至此而止。当代机构白话"处暑，即为『出暑』，是炎热离开的意思"（新华社2022）是对该定义句的谐音式转写，与古籍定义方向一致但属现代传播层，引用时应注明层次。',
    'exceptions': [
      '"出暑"之解出自新华社2022稿（受访民俗专家表述），为现代白话释义，不是古籍原文',
      '"处"作"止"义的训诂（《说文》"處，止也"一系）本轮未直读字书，待补',
      '处暑后南方暑热常延续（"秋老虎"），故"暑气至此而止"是命名取义而非气候事实——两卡分层（见气候卡）',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': ['一手来源（GB/T正文/标准全文）未直读，已在exceptions登记；降级处理'],
    'notes': 'REVISE→APPROVE：pending-primary-source不影响命题正确性（已有多独立直读源），待核来源列入人审条件',
  }
---

# 处暑的命名：古籍定义句与现代白话

## 研究问题

"处暑"这个名字在原始文献中的定义是什么？现代流行的"出暑"解释是什么性质？

## 证据（原文与定位）

1. **直读一手文献**：《月令七十二候集解》处暑定义句（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]，2026-09-16 重抓）："處暑，七月中。處，止也。暑氣至此而止矣。"——命名逻辑：处=止，暑气到此时节止住。
2. **现代机构白话（直读）**：新华社2022稿（[[04_sources/source-xinhua-chushu-2022|source-xinhua-chushu-2022]]）："处暑，即为'出暑'，是炎热离开的意思。"
3. **机构专题转述（直读）**：非遗网处暑专题（[[04_sources/source-ihchina-chushu-feature|source-ihchina-chushu-feature]]）引《月令》同句并释"处暑意味着炎热的夏天即将结束，气温逐渐下降"。

## AI 摘要 / 解释

- 命名谱系（当前证据下）：**古籍定义="处，止也"的休止义**；"出暑"是现代以谐音（处/出）作的通俗记忆钩子，方向与古籍一致但字面非古义。两者并行不冲突，引用时分层标注即可。
- "处暑"与"小暑/大暑"构成"暑"字三节气：小大暑言热之**程度**（月初为小、月中为大），处暑言热之**休止**——从"量"到"止"的命名序列本身是古人给暑热划段的方法论（小大暑定义句见小暑卡谱系，此处不重复命题）。
- 注意与气候事实分层："暑气至此而止"是命名取义；机构气象稿同时指出南方"秋老虎"常延续到此后（见 [[03_notes/sci-chushu-climate-autumn-transition|气候卡]]）——**命名宣告止暑，气候上南方暑热未尽**，正是本节气古今两层最容易混写之处。

## 适用条件、例外与分歧

- 无跨来源冲突（三源方向一致）；唯一要守住的是"出暑=现代白话"的层次标注。
- "处"字训诂的字书依据（《说文解字》"處，止也，得几而止"）未直读，本卡不引。

## 关联

[[01_terms/14_处暑|处暑索引]] · [[03_notes/hist-yueling-chushu-pentads|处暑三候]] · [[03_notes/sci-chushu-climate-autumn-transition|处暑气候]] · [[02_topics/history|历史维度]]

## 待人工确认

- 《说文解字》"處"字段训直读，补齐训诂链。
- 唐宋类书（《岁华纪丽》等）中处暑释名条目是否另有异说。

## 修改记录

- 2026-09-16（第一轮）：建卡。核心记录点：古籍定义句直读成立；"出暑"明确标为现代白话层；"命名止暑 vs 气候未尽"分层。
- 2026-09-16（审核阶段）：路由引擎判 human-review-required（finding: pending-primary-source——《说文》字书未直读），列入处暑审核包 B 区，状态 draft → in-review。
