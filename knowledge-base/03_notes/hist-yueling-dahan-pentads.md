---
schema_version: '0.1.0'
id: 'hist-yueling-dahan-pentads'
type: 'HistoricalRecord'
title: '《月令七十二候集解》大寒三候：鸡乳、征鸟厉疾、水泽腹坚'
solar_terms: ['dahan']
season: 'winter'
dimensions: ['phenology', 'history', 'ecology']
region: ['文本经验锚定中国（黄河流域为核心的古典物候传统）；实际物候因纬度海拔而异']
period: '文本传统题名为元代（吴澄）；所承物候体系更早（《礼记·月令》《吕氏春秋》等）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  ['source-yueling-qishierhou-wikisource', 'source-ihchina-dahan-feature', 'source-rmrbhwb-dahan-2016']
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
    'statement': '《月令七十二候集解》将大寒列为十二月中，定义仅作"大寒，十二月中。解見前"（命名解释见前条小寒），并以五日为一候记大寒三候：一候鸡乳、二候征鸟厉疾、三候水泽腹坚。注文以"育"释乳、以鹰隼释征鸟、以"上下皆凝"释腹坚。',
    'exceptions': [
      '同源证据结构已声明（转写核对/同体系传承渠道，非独立来源互证）——independence 字段仅指发布方多样性，证据独立性须人工判定',
      '首候维基文库直读作"雞乳"（非遗网、人民日报海外版转录亦作"鸡乳"）；项目线索与部分现代出版物作"雞始乳"，异文待校勘（引用需注明版本）',
      '小寒条与大寒条的关系是"解見前"指向：命名逻辑写在小寒条（"月初寒尚小，故云。月半則大矣"），不在大寒条内',
      '七十二候所述物候是古典文本经验，不等于当代中国各地的实际物候观测',
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

# 大寒三候（古典文本记载）

## 研究问题

传统文献如何描述大寒时节的自然变化？"解见前"这种特殊的定义方式说明什么？

## 证据（原文与定位）

已直接读取维基文库《月令七十二候集解》大寒节全文（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]，位于小寒之后、全书之末）：

> 定义："大寒，十二月中。解見前。"
> 一候："雞乳。育也，馬氏曰：雞木畜，麗于陽而有形，故乳在立春節也。"
> 二候："征鳥厲疾。征，伐也；殺伐之鳥，乃鷹隼之屬；至此而猛厲迅疾也。"
> 三候："水澤腹堅。陳氏曰：冰之初凝，水面而已，至此則徹，上下皆凝。故云腹堅。腹，猶內也。"

所引"前"即小寒条（同页直读）："小寒，十二月節。月初寒尚小，故云。月半則大矣。"

另，非遗网专题（[[04_sources/source-ihchina-dahan-feature|source-ihchina-dahan-feature]]）与人民日报海外版物候篇（[[04_sources/source-rmrbhwb-dahan-2016|source-rmrbhwb-dahan-2016]]）均转录"一候鸡乳，二候征鸟厉疾，三候水泽腹坚"，与维基文库本一致；非遗网页并记江南一带以二十四番花信风"一候瑞香，二候兰花，三候山矾"为判断大寒的标志（机构汇编层，花信谱系未直读）。

## AI 摘要 / 解释

- 三候构成一个"寒极而萌动"的收束叙事：**家鸡孵育（鸡乳）→ 猛禽捕猎极盛（征鸟厉疾）→ 冰冻至水体核心（水泽腹坚）**。前两候是动物信号（一育一杀），第三候是水的信号——"腹坚"注文把结冰过程写成由表及里（"水面而已"→"上下皆凝"），是全书七十二候中最具"极值"色彩的水文观察。
- 首候注文有一个值得注意的解释张力：注文一面记"鸡乳"，一面引马氏说"故乳在立春節也"——即按此说法孵育当发生在立春，注家以阴阳框架把它安放进大寒。这属于**古典解释体系（Interpretation）**，与物候记录本身应分层引用。
- "解見前"的定义方式：大寒的命名理由不写在自己条目里，而由小寒条的"月初寒尚小……月半則大矣"承担——十二月前半月（小寒）寒尚小、月中（大寒）则大。文本结构本身就是"小寒/大寒成对"的证据（另见 [[03_notes/hist-dahan-naming|命名卡]]）。

## 适用条件、例外与分歧

- **异文登记**：维基文库本"雞乳"、两机构转录"鸡乳"；项目线索所记"鸡始乳"（亦见于部分现代出版物与转引）本轮无古籍直读支持——以直读为准，异文待对校中华书局印本或《四库》本。
- 机构转录的三候白话释义（"孵小鸡""补充能量抵御严寒""冰最坚实最厚"）为现代转述，本卡证据区只保留原文。
- 当代物候验证（鸡冬季孵育的实际分布、冰厚观测）完全缺失——"今天这些物候是否仍按期出现"是气候变化维度的重要后续课题。
- 花信风（瑞香/兰花/山矾）仅机构汇编层记载，二十四番花信风的古籍谱系（《荆楚岁时记》以降）未直读，不并入本卡 claim。

## 关联

[[01_terms/24_大寒|大寒索引]] · [[03_notes/hist-dahan-naming|"寒气之逆极"命名卡]] · [[02_shared/hist-solarterms-pentad-system|七十二候体系]] · [[02_topics/phenology|物候维度]]

## 待人工确认

- "雞乳/鸡始乳"异文对校（中华书局印本、《四库》本、《授时通考》引文）。
- 二十四番花信风大寒三信（瑞香/兰花/山矾）的古籍首出处直读（如另立花信卡）。

## 修改记录

- 2026-09-16（第一轮）：建卡。月令全页重抓直读大寒节+小寒节（"解見前"所指），登记"雞乳/鸡始乳"异文线索。
- 2026-09-16（路由）：引擎按三直读源记 A(独立直读×3)，路由 auto-candidate——按入包规则保持 draft（机构转录层与维基文库录文不构成版本学独立互证，已记入例外）。
- 2026-09-18（审计 R03）：exceptions 补机器可读同源声明标记（正文定性已在前轮完成，本条使其可被路由器识别）。
