---
schema_version: '0.1.0'
id: 'hist-solarterms-pentad-system'
type: 'HistoricalRecord'
title: '七十二候体系：五日为候、三候为气（古典文献记载）'
solar_terms: []
season: null
dimensions: ['phenology', 'history', 'calendar']
region: ['中国（古典文本传统；物候经验本身锚定黄河流域为核心的传统农区）']
period: '《黄帝内经·素问》成书传统题为战国至汉；《月令七十二候集解》传统题名为元代吴澄（学界有异说）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'high'
impact_level: 'system'
contested: false
source_ids: ['source-wikisource-suwen-liujie', 'source-yueling-qishierhou-wikisource']
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
    'statement': '古典文献给出"候—气—时—岁"的时间分级：《素问·六节藏象论》"五日謂之候，三候謂之氣，六氣謂之時，四時謂之歲"；据此二十四节气之"气"各分三候、全年七十二候。《月令七十二候集解》按此体例逐节气记载三候物候。',
    'exceptions': [
      '本卡命题限于"文献如此记载"；《素问》该段是医学经典中的历法表述，七十二候体系的定型过程（《逸周书·时训》等更早平行文献）本轮未研究',
      '《素问》维基文库本未与通行印本（人卫校注本等）比对校勘',
      '七十二候所述物候是古典文本经验，不等于当代各地的实际物候观测',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=high/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 七十二候体系：五日为候、三候为气

## 研究问题

二十四节气下的"七十二候"粒度从何而来？古典文献如何定义候与气的关系？

## 证据（原文与定位）

- **直读**：《黄帝内经·素问·六节藏象论》（[[04_sources/source-wikisource-suwen-liujie|source-wikisource-suwen-liujie]]）："五日謂之候，三候謂之氣，六氣謂之時，四時謂之歲，而各從其主治焉。……時立氣布，如環無端，候亦同法。"同段有"積氣餘而盈閏""三百六十五日而成歲"等历法语句。
- **直读（体例印证）**：《月令七十二候集解》（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]）全书按二十四节气逐条记载每气三候（如立春"东风解冻/蛰虫始振/鱼陟负冰"），是"一气三候"体例的成型文本。

## AI 摘要 / 解释

- "候"（五日）与"气"（十五日、即节气）的分级给出七十二候的数学骨架：24 气 × 3 候 = 72 候。各节气卡记载的"三候"都从属于这个体系。
- 《素问》语境是医经（"不知年之所加……不可以為工"），说明该时间分级在古典知识体系中是医学、历法共享的基础框架——这属于解释性概括，标注 interpretation。

## 适用条件、例外与分歧

- 无跨来源直接冲突；但《素问》成书年代与《月令七十二候集解》作者归属在学界均有异说，引用时不做断代言断。
- 七十二候的更早源流（《逸周书·时训》五十二候残文、易纬等）未研究，属后续课题。

## 关联

[[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_topics/phenology|物候维度]] · [[02_topics/calendar|历法维度]]

## 待人工确认

- 与《素问》通行印本（人民卫生出版社校注本）核对"五日谓之候"段文字。
- 七十二候体系源流（是否补《逸周书·时训》直读）。

## 修改记录

- 2026-09-16（批处理预研）：为 24 节气批量研究建立共享锚点，避免每个节气卡重复解释"三候从何而来"。
