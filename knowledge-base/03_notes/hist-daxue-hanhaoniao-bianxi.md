---
schema_version: '0.1.0'
id: 'hist-daxue-hanhaoniao-bianxi'
type: 'HistoricalRecord'
title: '大雪初候"鹖鴠不鸣"的释义流变：从毅鸟，到寒号虫，到复齿鼯鼠（辨析卡）'
solar_terms: ['daxue']
season: 'winter'
dimensions: ['history', 'ecology', 'scientific-interpretation']
region: ['文献层：中国古典注疏传统；动物学层：复齿鼯鼠分布中国南北山地（河北/山西/陕西/湖北/四川/云南/西藏等，据直读媒体页）']
period: '元（吴澄集解、陶宗仪《南村辍耕录》）→ 当代（机构科普2017-2023；人教版课文2017修订版在册）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'high'
impact_level: 'term'
contested: false
source_ids: ['source-yueling-qishierhou-wikisource', 'source-ihchina-daxue-feature', 'source-zjol-hanhaoniao', 'source-gmw-ruixue-daxue']
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
    'statement': '大雪初候"鹖鴠不鸣"的物种释义存在三层流变且互相冲突：(1)《月令七十二候集解》注文以鹖为"毅鸟"（似雉、有毛角），并明确反驳"鹖鴠=寒号虫/求旦之鸟"的通行释法（"夜既鳴，何為不鳴耶"）；(2) 当代机构科普普遍把鹖鴠解作"寒号虫/寒号鸟"（非遗网2017作"寒号虫（一种鸟名）"，光明网2023引郑玄注"夜鸣求旦之鸟"）；(3) 现代动物学考据（都市快报2017直读）指出"寒号鸟"实为啮齿目松鼠科的复齿鼯鼠（"四足，有肉翅，不能飞"，名出陶宗仪《南村辍耕录》卷十五），并非鸟。三层链条"鹖鴠→寒号鸟→复齿鼯鼠"中第一环正是古典注家本人否定的一环。',
    'exceptions': [
      '复齿鼯鼠定性的直读源仅省级媒体考据稿一家（引用教学参考书与自然博物馆专家），科普时报/人民网等印证仅检索摘要级——物种层结论待第二直读机构源',
      '"鹖"是否即褐马鸡（现代鸟类学的一种流行对应）本轮无直读源，不写',
      '光明网所引郑玄注《礼记·坊记》"夜鸣求旦之鸟"未与原书直读核对，按学者转引对待',
      'contested=true：同题三层释义并存且互斥，属真实文献分歧而非研究缺口',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'hold',
    'findings': ['contested-open'],
    'notes': '待补证',
  }
---

# 鹖鴠不鸣：一条释义链的三层断裂

## 研究问题

"大雪初候鹖鴠不鸣"里的鹖鴠到底是什么？为什么各处说法不一样？

## 证据（三层分列）

**层一：古典注疏（直读）**——《月令七十二候集解》大雪节注文（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]）："鶡，毅鳥也。似雉而大，有毛角，鬬死方休……據此，本陽鳥，感六陰之極不鳴矣。若郭璞《方言》：似雞，冬無毛，晝夜鳴，即寒號蟲。陳澔與方氏亦曰求旦之鳥，皆非也。夜既鳴，何為不鳴耶？"——**吴澄把"鹖鴠=寒号虫"定性为错误**，理由是逻辑性的：一种昼夜鸣叫的鸟，怎么会以"不鸣"为物候特征？

**层二：当代机构科普（直读）**——非遗网大雪专题（[[04_sources/source-ihchina-daxue-feature|source-ihchina-daxue-feature]]，2017）："此时天气寒冷，寒号虫（一种鸟名）停止鸣叫"；光明网学者文（[[04_sources/source-gmw-ruixue-daxue|source-gmw-ruixue-daxue]]，2023）引郑玄注承"夜鸣求旦之鸟"线，释初候为"此鸟感知冬至日近、阳生气暖而停止啼叫"。两页均沿用层一注文中被驳的"寒号虫/求旦鸟"一系，且非遗网把寒号虫直接定性为"一种鸟名"。

**层三：现代动物学考据（直读）**——都市快报/浙江在线（[[04_sources/source-zjol-hanhaoniao|source-zjol-hanhaoniao]]，2017）：教学参考书与专家解释"寒号鸟是一种啮齿动物，学名叫复齿鼯鼠"；其名出陶宗仪《南村辍耕录》卷十五："五台山有鸟、名寒号虫，四足，有肉翅，不能飞。其粪即五灵脂。"专家据"四足""肉翅"判定非鸟，而是"哺乳动物中的鼯鼠一类"。

## AI 摘要 / 解释

- **链条诊断（本卡核心）**：流行科普叙事"大雪节气寒号鸟（复齿鼯鼠）冷得不再叫"把三个时代的文本焊成一条链，但链条的第一环（鹖鴠=寒号虫）恰是《集解》注文以逻辑理由明确否定的一环；第二环（寒号虫是"鸟"）又被现代动物学否定（啮齿类）。**每一层在自己的时代都讲得通，拼起来却是断层**——这是"传说当事实"审计的经典样本，与 brief 登记的防幻觉样本（"雨生百谷"四字不在原文）同级。
- 对内容生产的含义：面向公众写大雪三候时，"寒号鸟不叫了"只能作为**释义史**呈现（谁这么解释过、被谁反驳过），不能作为物候事实陈述；如需动物学彩蛋，复齿鼯鼠（会滑翔的"假鸟"）本身是优质科普素材，但必须标注它是《辍耕录》"寒号虫"的现代对应，而非"鹖鴠"的定论。
- 注文的"似雉而大，有毛角，鬬死方休"为后世"鹖冠=勇士冠"意象的来源（"古人取為勇士，冠名可知矣"），属武人文化史的旁支，本卡不展开。

## 适用条件、例外与分歧

- 分歧登记：层一 vs 层二（注文驳斥 vs 机构沿用）、层二 vs 层三（鸟 vs 啮齿类）——非同源分歧，contested=true。
- 直读孤本风险：层三仅一家直读；复齿鼯鼠（Trogopterus xanthipes）的学名、保护等级（检索摘要提及"中国生物多样性红色名录易危"）等细节均待第二直读源。

## 关联

[[01_terms/21_大雪|大雪索引]] · [[03_notes/hist-yueling-daxue-pentads|大雪三候（原文卡）]] · [[03_notes/hist-daxue-naming|大雪命名]] · [[02_topics/history|历史维度]] · [[02_topics/ecology|生态维度]]

## 待人工确认

- 复齿鼯鼠定性的第二直读机构源（中科院/国家林草局口径页面）；"鹖=褐马鸡"说的来源核验。
- 郑玄注《礼记·坊记》原文直读；《南村辍耕录》卷十五维基文库对读。

## 修改记录

- 2026-09-16（第一轮）：建卡。三层证据各归其层（古典注疏/机构科普/动物学考据），链条断裂点显式标注；contested=true。
- 2026-09-16（审核阶段）：路由引擎判 human-review-required（finding=contested-open，risk=high），列入大雪审核包 C 区，状态 draft → in-review。AI 不做最终审核，等待人工 Decision。
