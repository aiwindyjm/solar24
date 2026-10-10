---
schema_version: '0.1.0'
id: 'hist-yueling-shuangjiang-pentads'
type: 'HistoricalRecord'
title: '《月令七十二候集解》霜降三候：豺祭兽、草木黄落、蛰虫咸俯（"霜降，九月中"中气位）'
solar_terms: ['shuangjiang']
season: 'autumn'
dimensions: ['phenology', 'history', 'calendar', 'ecology']
region: ['文本经验锚定中国（黄河流域为核心的古典物候传统）；实际物候因纬度海拔而异']
period: '文本传统题名为元代；所承物候体系更早（《礼记·月令》《吕氏春秋》等）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-yueling-qishierhou-wikisource', 'source-naoj-24sekki-shuangjiang']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-18'
human_review:
  {
    'reviewer': 'aiwindyjm',
    'reviewed_at': '2026-09-28',
    'decision': 'approved',
    'notes': 'Owner-authorized batch approval based on AI pre-review',
  }
claim:
  {
    'statement': '《月令七十二候集解》将霜降列为九月中（中气位），定义"霜降，九月中。氣肅而凝露結為霜矣"，并引《周語》"駟見而隕霜"；三候为"豺祭獸"（注：《月令》作"豺乃祭獸戮禽"；"祭獸，以獸而祭天，報本也。方鋪而祭，秋金之義"）、"草木黃落"（"色黃而搖落也"）、"蟄蟲咸俯"（注：《淮南子》作"俛"；"咸，皆也；俯，垂頭也。此時寒氣肅凜，蟲皆垂頭而不食矣"）。今通行引文"豺乃祭兽"与该书注所引《月令》文本同形，与本书正文"豺祭獸"为版本层面的差异；"豺祭兽"叙事与处暑"鹰乃祭鸟"、雨水"獺祭魚"同属古典"祭而后食"解释传统，不是动物行为学结论。',
    'exceptions': [
      '同源证据结构已声明（转写核对/同体系传承渠道，非独立来源互证）——independence 字段仅指发布方多样性，证据独立性须人工判定',
      '维基文库本正文作"豺祭獸"，而注文明引《月令》作"豺乃祭獸戮禽"——今人常引的"一候豺乃祭兽"（非遗网亦如此转写）与本书正文不同源层，引用需注明版本',
      '非遗网专题页引文断句作"九月中，气肃而凝，露结为霜矣"，与维基文库本"霜降，九月中。氣肅而凝露結為霜矣"标点有差——以直读古籍页为准',
      '七十二候所述物候是古典文本经验，不等于当代各地的实际物候观测',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'hold',
    'findings': ['same-source-evidence-declared'],
    'notes': '未分类findings，保守hold',
  }
---

# 霜降三候（古典文本记载）

## 研究问题

传统文献如何描述霜降时节的自然变化？"霜降，九月中"的历法身份与三候原始文本是什么？

## 证据（原文与定位）

已直接读取维基文库《月令七十二候集解》霜降节全文（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]，寒露之后、立冬之前切分）：

> 定义："霜降，九月中。氣肅而凝露結為霜矣。《周語》曰：駟見而隕霜。"
> 一候："豺祭獸〈【《月令》作豺乃祭獸戮禽】〉。祭獸，以獸而祭天，報本也。方鋪而祭，秋金之義。"
> 二候："草木黃落。色黃而搖落也。"
> 三候："蟄蟲咸俯〈【《淮南子》作俛】〉。咸，皆也；俯，垂頭也。此時寒氣肅凜，蟲皆垂頭而不食矣。"

**月序标签跨渠道核对（同一历法传统的另一传承渠道，非版本学独立互证）**：日本国立天文台二十四節気页秋表（[[04_sources/source-naoj-24sekki-shuangjiang|source-naoj-24sekki-shuangjiang]]，直读）霜降行作"霜降 (そうこう) 九月中 210°"——"九月中"的月序/中气位标签获跨语言第三方印证；三候原文与注文仍以维基文库本为唯一直读来源（异文状态见 exceptions）。

## AI 摘要 / 解释

- 三候构成深秋收束叙事：**猛兽储食（豺祭兽）→ 植物凋零（草木黄落）→ 虫类入眠（蛰虫咸俯）**，与立春三候（解冻/虫振/鱼陟）方向相反——一个是阳气初至的"启动"，一个是寒气肃凛的"关闭"，七十二候体系在霜降处写下秋的收尾。
- "九月中"为**中气位**标签：霜降是农历九月的中气（九月中），与寒露（九月节）同月成对——节/中气分组与置闰意义见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]，不再复述。
- **"祭兽"的文本性质**：注文以"以獸而祭天，報本也""秋金之義"把豺的捕猎纳入人间祭祀伦理与五行框架——与处暑"鷹乃祭鳥"（"必先祭之，猶人飲食祭先代為之者也"，见 [[03_notes/hist-yueling-chushu-pentads|处暑三候卡]]）及雨水"獺祭魚"同一"祭而后食"古典解释模式。这是古典解释传统（Interpretation 层）的文本事实，不得写成"豺真的先祭后食"的动物行为学结论。
- 定义句"氣肅而凝，露結為霜"是**古典认知命名**：古人以"露结为霜"解释霜的来历，与现代气象学的凝华机制（见 [[03_notes/sci-shuangjiang-frost-formation|霜的形成机制卡]]，霜非露冻结、更非天降）不是同一解释体系——两层分卡分述，互不倒灌。

## 适用条件、例外与分歧

- **版本异文（待校勘）**：正文"豺祭獸"vs 注引《月令》"豺乃祭獸戮禽"；"蟄蟲咸俯"vs《淮南子》"俛"；今通行读物与非遗网专题页作"豺乃祭兽"，属《月令》文本层的转写。本卡以已直读的维基文库本为准，异文待比对中华书局印本或《四库》本。
- 三候的当代物候验证（豺的秋季捕猎峰值、落叶物候、昆虫休眠周期）完全缺失，为 ecology 维度待研究项。

## 关联

[[01_terms/18_霜降|霜降索引]] · [[03_notes/hist-yueling-chushu-pentads|处暑三候（祭鸟平行文本）]] · [[02_shared/hist-solarterms-pentad-system|七十二候体系]] · [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]] · [[02_topics/phenology|物候维度]]

## 待人工确认

- 版本校勘：《礼记·月令》"豺乃祭兽戮禽"原文直读；《淮南子·时则训》霜降段"俛"字原文。
- 《周语》"駟見而隕霜"出处原文（《国语·周语》）直读。

## 修改记录

- 2026-09-16（第一轮）：建卡。定义句+三候+注文逐字直读；登记两处版本异文（豺祭獸/豺乃祭獸、俯/俛）与非遗网转写的断句差异；"祭而后食"叙事按处暑卡同型分层处理。
- 2026-09-16（路由自纠）：引擎提示 evidence-below-confidence（单一直读方撑 high）——补 NAOJ 霜降行（"九月中"标签跨语言互证）为第二独立源，对齐秋分三候卡先例；三候原文本身仍单源，异文待校勘条目保留。
- 2026-09-18（审计 R03）：exceptions 补机器可读同源声明标记（正文定性已在前轮完成，本条使其可被路由器识别）。
