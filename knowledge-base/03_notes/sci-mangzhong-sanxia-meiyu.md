---
schema_version: '0.1.0'
id: 'sci-mangzhong-sanxia-meiyu'
type: 'ScientificFact'
title: '芒种农时的科学底色：夏收夏种夏管"三夏"大忙与长江中下游梅雨'
solar_terms: ['mangzhong']
season: 'summer'
dimensions: ['climate', 'agriculture', 'scientific-interpretation']
region: ['中国东部季风区（机构稿为全国综述，梅雨段限长江中下游）']
period: '现代气象口径；2024年国家气候中心监测为数据样本'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-ihchina-mangzhong-feature', 'source-xinhua-mangzhong-2024', 'source-weathercn-meiyu-2024']
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
    'statement': '芒种至夏至是中国多数农区的"三夏"大忙时节（夏收、夏种、夏管重叠：冬小麦成熟需抢收，水稻等秋熟作物需抢栽抢管）；同期长江中下游进入梅雨季——国家气候中心的现代监测口径为长江中下游常年6月14日前后入梅（2024年为6月17日），即在芒种交节（6月5-7日）之后、夏至之前的窗口内。芒种农时压力的气候本质是：麦收要赶在连绵阴雨前完成，插秧又依赖这场雨的水源。',
    'exceptions': [
      '"常年6月14日"来自中国天气网2024年报道所引国家气候中心口径，逐年入梅日期以国家气候中心当年监测为准（早至6月上旬、晚至6月下旬均出现过）',
      '非遗网"芒种后……华南东南季风雨带稳定，是一年中降水最多的时节"为机构综述表述，分省降水统计本轮未纳入',
      '"空梅"（梅雨异常偏少）年份的干旱风险与梅雨过强的洪涝风险均由非遗网稿定性提及，无量化数据',
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

# 芒种农时的科学底色：三夏大忙与梅雨窗口

## 研究问题

为什么芒种被称为"一年中最忙的节气"？这个"忙"有什么气象学根据？现代梅雨监测与古籍记载如何对照？

## 证据

- **已直接读取**：非遗网芒种专题农事段（[[04_sources/source-ihchina-mangzhong-feature|source-ihchina-mangzhong-feature]]）："芒种至夏至是秋熟作物播种、移栽、苗期管理和全面进入夏收、夏种、夏管这'三夏'的大忙时节"；"芒种后，华南东南季风雨带稳定，是一年中降水最多的时节，长江中下游地区先后进入梅雨季节……适中的梅雨对农业生产十分有利；梅雨过迟或过少，甚至'空梅'的年份，作物会受到干旱的威胁"。
- **已直接读取**：中国天气网2024年入梅报道（[[04_sources/source-weathercn-meiyu-2024|source-weathercn-meiyu-2024]]）："根据国家气候中心最新监测和未来预测的综合分析研判，我国长江中下游梅雨已于6月17日开始，较常年（6月14日）偏晚3天。"
- **已直接读取**：新华社2024年稿（[[04_sources/source-xinhua-mangzhong-2024|source-xinhua-mangzhong-2024]]）对麦收与插秧并行的描述（麦子抢收入仓以免阴雨、抢种秋粮抢插稻秧）。
- 古籍中的入梅/出梅规则（"芒種後遇壬則入梅"）另卡分层处理：[[03_notes/hist-mangzhong-rumei-chumei|古籍入梅出梅规则]]。

## 解释（Scientific Interpretation）

芒种的"忙"不是习俗性忙碌，而是**气候窗口期的双重挤压**：冬小麦在6月上中旬自南向北成熟，而长江中下游的梅雨（现代监测：常年6月14日前后开始）恰在同一窗口逼近——收麦必须赶在雨前，插秧又需要雨水的蓄积。这就是"收与种在同一节气里赛跑"的气象学根据，也是农谚"春争日，夏争时"（见 [[03_notes/trad-mangzhong-nongshi|农谚卡]]）的经验内核。古籍把同一现象表述为"芒种后逢壬入梅"的推步规则（[[03_notes/hist-mangzhong-rumei-chumei|见历史卡]]），两者是不同时代的两套表述，不混排。

## 适用条件与待核验

- "三夏"大忙的地域差异（华北麦区以夏收为主、江南稻区以夏种为主、华南已过麦收）在非遗网稿内有表述（"南方地区麦收季节已过"），但逐省农事历未核。
- 梅雨的气候学机制（副热带高压北跳与季风雨带）本轮未纳入机构直读源，暂不作为已证内容。

## 关联

[[01_terms/09_芒种|芒种索引]] · [[03_notes/hist-mangzhong-rumei-chumei|古籍入梅出梅规则]] · [[03_notes/trad-mangzhong-nongshi|农事与农谚]] · [[03_notes/lit-mangzhong-luyou-shiyu|陆游《时雨》]] · [[02_topics/climate|气候维度]]

## 待人工确认

- 国家气候中心/中国气象局梅雨监测的专门科普页（入梅标准、常年统计）直读后可把"常年6月14日"升级为标准引用。
- 分区气候统计（华北麦收期降水概率、长江中下游梅雨量年际变化）需气象数据源。

## 修改记录

- 2026-09-16（第一轮）：建卡。三个独立机构直读（非遗网+新华社+中国天气网/国家气候中心口径）；古今梅雨表述分卡处理，本卡只承载现代口径。
