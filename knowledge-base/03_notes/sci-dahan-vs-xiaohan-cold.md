---
schema_version: '0.1.0'
id: 'sci-dahan-vs-xiaohan-cold'
type: 'ScientificFact'
title: '小寒与大寒谁更冷：命名序位与气温统计的错位'
solar_terms: ['dahan']
season: 'winter'
dimensions: ['climate', 'scientific-interpretation']
region: ['中国（1991-2020年全国统计与南北分区）']
period: '现代气象统计口径（1991-2020年；媒体稿2016/2023）'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  ['source-weathercn-dahan-2023', 'source-rmrbhwb-dahan-2016', 'source-ihchina-dahan-feature']
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
    'statement': '按中国天气网1991-2020年节气大数据，小寒期间全国平均气温跌到全年最低（-5.1℃），大寒节气回升0.6℃至-4.5℃——即"名字更大"的大寒并非全国平均最冷的节气；但华东和华南沿海、新疆北部、山东半岛局地等部分地区在大寒达到全年最低，"南方冷在大寒的区域相对更多一些"。人民日报海外版（2016）同方向表述：按气象资料中国大部分地区小寒前后温度最低，大寒期间平均温度仅比小寒高出1℃-2℃，且有些年份大寒期间温度会比小寒还低。',
    'exceptions': [
      '两源温差数值口径不同（0.6℃ vs 1℃-2℃）：前者标注1991-2020年统计区间，后者未标统计区间与站点口径，引用时保留各自表述、不合并为单一数值',
      '"全国平均"掩盖南北差异：具体到某地某年，大寒完全可能更冷（两源均明示）',
      '原始终端数据（国家气象科学数据中心等）本轮未获取，数值以媒体稿转述层级为准',
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

# 小寒与大寒谁更冷

## 研究问题

命名上"大寒"比"小寒"更冷，气象统计支持吗？这个错位为什么值得公众知道？

## 证据

- **已直接读取**：中国天气网2023-01-20数据稿（[[04_sources/source-weathercn-dahan-2023|source-weathercn-dahan-2023]]）："中国天气网盘点1991年至2020年节气大数据发现，在小寒期间，全国平均气温跌到全年最低，仅有-5.1℃。……而到了大寒节气，气温开启反弹之旅，比小寒上升0.6℃，达到-4.5℃。"以及"也有不少地方是在大寒节气达到全年最低，比如华东和华南沿海、新疆北部、山东半岛局地部分地区""总体而言，南方冷在大寒的区域相对更多一些。"
- **已直接读取**：人民日报海外版2016物候篇（[[04_sources/source-rmrbhwb-dahan-2016|source-rmrbhwb-dahan-2016]]）："按气象资料，中国大部分地区都是小寒前后温度最低，但这并不是说，小寒之后天气就显著回暖了，实际上，大寒期间的平均温度仅仅是比小寒高出1℃—2℃而已……而且，在有些年份，大寒期间的温度确实会比小寒还低。"
- **对照（流行叙述）**：非遗网专题概说作"此时，寒潮南下频繁，是大部分地区一年中最冷的时期"（[[04_sources/source-ihchina-dahan-feature|source-ihchina-dahan-feature]]）——"大寒最冷"的通叙与上述统计口径存在表述张力，如实登记不裁定。

## 解释（Scientific Interpretation）

这是二十四节气里少见的**命名序位与统计实测错位**案例：寒命名的大小（古典观念上十二月内寒之进深，见 [[03_notes/hist-dahan-naming|命名卡]]）与全国平均气温的谷值位置（多在小寒前后）不完全重合。物理机制上，气温谷值滞后于冬至日照最短点，滞后的长度因纬度、海陆与下垫面而异——这解释了为什么"北方冷在小寒的更多、南方冷在大寒的相对更多"（中国天气网分区表述）。对公众的价值：**"大寒"的名字承诺了极值，气象数据给出的是分布**——把两者混为一谈就会得出"大寒天不冷=节气不准"的误解。

## 适用条件与待核验

- 待核验：原始终端数据（国家气象科学数据中心 data.cma.cn 或气候公报）的逐年逐站口径；"三九最冷（-5.14℃）"等数九口径数据本轮仅检索摘要级，未入 claim。
- 民谚"小寒大寒，无风自寒"（人民日报民俗篇直读）把两者并置不排序，与统计结论不构成冲突。

## 关联

[[01_terms/24_大寒|大寒索引]] · [[03_notes/sci-xiaohan-vs-dahan-temperature|小寒侧主数据卡（跨节气互链）]] · [[03_notes/hist-dahan-naming|命名卡]] · [[03_notes/sci-dahan-longitude-300|黄经300°定义]] · [[02_topics/climate|气候维度]] · [[02_topics/scientific-interpretation|现代科学解释]]

## 待人工确认

- 0.6℃与1-2℃两口径的原始出处核对（是否同一统计序列的不同年份切片）。
- 与小寒侧数据卡（[[03_notes/sci-xiaohan-vs-dahan-temperature|sci-xiaohan-vs-dahan-temperature]]）合并为单卡的取舍，由人工裁决。

## 修改记录

- 2026-09-16（第一轮）：建卡。两个独立机构直读（中国天气网2023带统计区间、人民日报海外版2016）方向一致故 confidence high；数值口径差异与"大寒最冷"流行叙述的张力显式登记，未做裁定。
- 2026-09-16（批处理协调）：与小寒侧并行产出形成跨节气命题重叠。分工裁定：**小寒侧卡（sci-xiaohan-vs-dahan-temperature，in-review）为主数据卡**（1991-2020逐省分布23省vs8沿海+北京个案）；本卡收窄为大寒侧视角——全国平均数值口径（-5.1℃/-4.5℃/0.6℃）与命名序位错位框架、流行叙述张力。两卡互链不复制；是否合并为单卡留人工决定。
