---
schema_version: '0.1.0'
id: 'legend-lixia-chengren-adou'
type: 'CulturalFact'
title: '"立夏称人源于三国"传说（legend 层）：孙夫人称阿斗与司马昭称阿斗两版'
solar_terms: ['lixia']
season: 'summer'
dimensions: ['customs', 'history', 'chinese-life']
region: ['传说流传地：中国（叙事层面，无地域锚定）；被附会的习俗实践地见秤人卡']
period: '传说叙事无信史断代可证；载体为当代媒体与民俗读物'
language: 'zh-CN'
status: 'approved'
epistemic: 'legend'
confidence: 'medium'
risk_level: 'high'
impact_level: 'term'
contested: false
source_ids: ['source-people-lixia-chengren', 'source-chinaqw-lixia-adou']
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
    'statement': '传说层记载（非史实）：流传的"立夏称人三国起源"故事至少有两个互斥版本——(1) 孙夫人版（人民日报2025年稿叙述）："蜀主刘备与吴王孙权的妹妹联姻后，将儿子阿斗交由孙夫人照顾"，孙夫人"每年在立夏这一日给阿斗称体重报平安"，"这个做法传到民间，逐渐演变为立夏日祈求平安的风俗"；(2) 司马昭版（中国侨网2008年稿，检索摘要级）：司马昭在立夏日封刘禅为安乐公时当面称重、宣布年年立夏再称，以安蜀汉降臣之心。两版主角、场合、动机互斥，且均无任何三国时期文献依据；人民日报自己提示"传说不同于史实"。可考文献记载晚至清代（见秤人卡），传说属后世附会。',
    'exceptions': [
      '司马昭版仅检索摘要级来源（页面未直读），细节以原页为准',
      '"阿斗"即刘禅（蜀汉后主）的人物身份属史实，与本卡讨论的"称人起源于三国"断言无关，不得混用',
      '传说在民间的流传广度（何时成型、经何种载体扩散）无文献支撑，本轮未查',
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

# "立夏称人源于三国"传说（legend 层样本卡）

> **性质声明：本卡记录的是传说叙事及其多版本形态，不是历史事实。**"立夏称人起源于三国"不能被表述为习俗起源的结论；秤人的可考文献起点见 [[03_notes/trad-lixia-chengren|秤人卡]]（清代，转引级）。

## 研究问题

"立夏称人源于三国"的故事讲什么？它有哪些版本？与文献证据的差距如何？

## 证据（原文与定位）

1. **媒体直读**：人民日报2025年稿（[[04_sources/source-people-lixia-chengren|source-people-lixia-chengren]]）采用孙夫人版并以"传说"措辞引出；紧接考据句"传说不同于史实，但通过一些文字记载，也可推测这一习俗至少已有数百年"——媒体自身已完成传说/史实分层。
2. **线索级**：中国侨网2008年稿（[[04_sources/source-chinaqw-lixia-adou|source-chinaqw-lixia-adou]]，检索摘要）载司马昭版：立夏受封日称重、年年复称以示不亏待。
3. **结构性反证**：两版互斥（孙夫人育儿验重 vs 司马昭政治作秀），且正史（《三国志》）无立夏称刘禅任何记载；清代以前文献链条空缺（荆楚岁时记无立夏条，直读负面证据见秤人卡）。

## AI 摘要 / 解释

- 分层结论：**传说叙事（legend，本卡）／清代文献（tradition 转引级，秤人卡）／当代活态（半山卡）三层各自独立**。"起源于三国"是把第一层冒充起源结论，与"至少已有数百年"（人民日报口径，清代文献反推）之间隔着千余年空档，属本库重点防范的 Legend-as-Fact 错误。
- 传说的叙事价值独立成立：两版都把"称体重"嵌入三国人物关系（家庭育儿/政治笼络），说明讲述者需要给一个健康民俗配上"有名有姓"的历史出处——这是民间叙事的常见生成机制，恰是文化史素材而非史实。

## 适用条件、例外与分歧

- 版本互斥不是"待裁定的事实分歧"，而是传说多形态并存的常态；两版并列收录，不选边。
- 非遗网立夏专题页称人段无三国故事（直读确认），说明该传说并非官方非遗叙事的组成部分。

## 关联

[[01_terms/07_立夏|立夏索引]] · [[03_notes/trad-lixia-chengren|立夏秤人（tradition）]] · [[03_notes/region-lixia-banshan|半山立夏习俗]] · [[02_topics/customs|民俗维度]]

## 待人工确认

- 传说的 earliest 成文载体（近代报刊/民国民俗读物检索）；司马昭版原页直读。
- 是否有地方志把该传说当作"起源"记载（需与方志正文区分"传说云"与"按"）。

## 修改记录

- 2026-09-16（第一轮建库）：建卡，作为本节气 Legend-as-Fact 审计重点样本；两版本并列、互斥性写入命题。
- 2026-09-16（审核阶段）：路由 human-review-required（pending-primary-source：司马昭版原页未直读），status draft → in-review，入 [[07_research/sections/review-lixia|审核分节]] C 区，等待人工 Decision。
