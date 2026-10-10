---
schema_version: '0.1.0'
id: 'lit-dumu-qingming'
type: 'CulturalFact'
title: '杜牧《清明》："清明时节雨纷纷"的文本与传播'
solar_terms: ['qingming']
season: 'spring'
dimensions: ['literature-art', 'climate']
region: ['中国']
period: '杜牧（803-852，晚唐）；维基文库页面未标注创作系年'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
contested: false
risk_level: 'medium'
impact_level: 'term'
source_ids: ['source-wikisource-dumu-qingming']
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
    'statement': '传为杜牧所作七绝《清明》全诗为"清明時節雨紛紛，路上行人欲斷魂。借問酒家何處有？牧童遙指杏花村。"维基文库作品页标注本作品收录于《千家诗·卷三》；页面未载任何作者归属争议或创作系年的说明。',
    'exceptions': [
      '《樊川文集》（杜牧自编集）是否收录此诗本轮未核——作者归属争议（有学者疑非杜牧作）的说法未获任何直接来源，既不能证实也不能排除，引用时建议标注"传为杜牧作"',
      '诗中"杏花村"地望（汾阳/池州/黄州诸说）本轮无来源，不涉',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/B/独立1；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 杜牧《清明》

## 研究问题

作为流传最广的清明诗，其文本、收录与归属状态如何？

## 证据（原文与定位）

已直接读取维基文库作品页（[[04_sources/source-wikisource-dumu-qingming|source-wikisource-dumu-qingming]]）：

> "清明時節雨紛紛，路上行人欲斷魂。借問酒家何處有？牧童遙指杏花村。"

页面标注：本作品收录于《千家诗·卷三》（蒙学经典，因此成为流传最广的节气诗之一）。页面无作者注、无系年、无异文说明。

## AI 摘要 / 解释

- 文学价值：四句完成"时节（雨纷纷）—人情（欲断魂）—问答（借问酒家）—画面（牧童遥指）"的叙事闭环，是"节气+节日情绪"叠加表达的最小样本：首句写节气天气，次句写祭扫语境中的人情（"欲斷魂"与扫墓哀思的解读是后世通行解读，诗本身未点明扫墓）。
- 与 [[03_notes/sci-qingming-jiangnan-rain|江南春雨卡]] 互证：中国天气网数据稿以本诗为引，讨论杜牧842-852年行迹（江淮南部到江南北部）与诗句的气候背景——"雨纷纷"是可被气象统计部分检验的区域气候经验。
- 传播谱系：经《千家诗》进入传统蒙学（页面标注）；系年与归属问题见 exceptions，按"传为杜牧作"处理。

## 适用条件、例外与分歧

文本无分歧（单一直读源，未与《千家诗》页核对）。归属与系年是真实的学术讨论点，但本轮零直接来源，故只以 exceptions 与待人工确认承载，不做任何断言。

## 关联

[[01_terms/05_清明|清明索引]] · [[03_notes/sci-qingming-jiangnan-rain|江南春雨（诗的气候核验）]] · [[02_topics/literature-art|文学艺术]]

## 待人工确认

- 与维基文库《千家詩/卷三》页及通行《樊川文集》核对该诗收录与归属；作者争议（如"王禹偁说"等）需读学术文献后再建独立卡。

## 修改记录

- 2026-09-16（建卡）：作品页直读建立；归属争议因无来源仅记待核，不采信任何检索级传言。
