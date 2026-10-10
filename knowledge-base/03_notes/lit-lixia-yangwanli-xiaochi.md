---
schema_version: '0.1.0'
id: 'lit-lixia-yangwanli-xiaochi'
type: 'CulturalFact'
title: '杨万里《小池》："小荷才露尖尖角"的初夏物候感知'
solar_terms: ['lixia']
season: 'summer'
dimensions: ['literature-art', 'phenology']
region: ['中国']
period: '南宋（杨万里，1127-1206）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-lixia-xiaochi']
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
    'statement': '南宋杨万里七绝《小池》全诗为"泉眼無聲惜細流，樹陰照水愛晴柔。小荷纔露尖尖角，早有蜻蜓立上頭。"（维基文库本，简体通行作"小荷才露尖尖角，早有蜻蜓立上头"）。诗题"小池"而非"立夏"，所咏为初夏池塘的微观物候——新荷初露、蜻蜓初立，与立夏时节"万物至此皆假大"的初夏物候叙事同期相应，是面向公众的初夏物候文学样本；不宜表述为"立夏诗"。',
    'exceptions': [
      '诗歌文本与维基文库收录已直读；系年（《诚斋集》原集）与创作背景核对待做',
      '维基文库本轮检索无"立夏"字面题名诗作品页（赵友直《立夏》、陆游《立夏》均无命中），立夏题名诗留作 Needs Research',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=low/B/独立1；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 杨万里《小池》

## 研究问题

古典诗歌中初夏物候的感知如何被表达？哪一首适合作为立夏时节的文学样本？

## 证据（原文与定位）

已直接读取维基文库作品页（[[04_sources/source-wikisource-lixia-xiaochi|source-wikisource-lixia-xiaochi]]）：

> "泉眼無聲惜細流，樹陰照水愛晴柔。小荷纔露尖尖角，早有蜻蜓立上頭。"

页面标注：七言绝句，作者杨万里（宋），公有领域。

## AI 摘要 / 解释

- 为什么值得作为初夏样本：(1) **"小荷纔露尖尖角"是对"初"的极限捕捉**——不是荷花开，而是荷叶初卷未展的一角，配"早有蜻蜓立上头"的抢先到场，写的正是立夏"物至此時皆假大也"（[[03_notes/hist-yueling-lixia-pentads|三候卡]]）的前一刻：盛大生长刚刚启动；(2) 四句全部是微观凝视（泉眼、树阴、小荷、蜻蜓），与七十二候"就近观察自然信号"的认知方式同构；(3) 经蒙学与语文教材流传，公众认知度在初夏诗中最高。
- **边界（重要）**：本诗无"立夏"字样、无历法指涉，属**初夏时节诗**而非立夏题名诗；产品文案若需"立夏的诗"，应如实标注"初夏物候诗，常被用于立夏时节"而非冒称立夏诗。新华网2026年立夏稿文首引陆游"槐柳阴初密，帘栊暑尚微"（《立夏》），系文内引用未标出处，本轮未直读该诗全篇，不入卡。

## 适用条件、例外与分歧

- 无文本分歧（直读+公有领域定本）。系年、作地（常州/建康诸说）本轮未核。
- 检索记录：维基文库 API 检索"趙友直""小池 楊萬里""立夏 陸遊""四時天氣促相催"，仅《小池》有作品页；赵友直《立夏》与陆游立夏诗无维基文库页面（《咏廿四气诗》组诗无页面，与前波次情报一致）。

## 关联

[[01_terms/07_立夏|立夏索引]] · [[03_notes/hist-yueling-lixia-pentads|立夏三候]] · [[02_topics/literature-art|文学艺术]]

## 待人工确认

- 陆游《立夏》("槐柳阴初密"篇)全诗直读与系年（可作立夏题名诗首选，本轮缺口）；赵友直《立夏》"四时天气促相催"的底本来源。
- 《诚斋集》原集校核。

## 修改记录

- 2026-09-16（第一轮建库）：建卡。《小池》为维基文库唯一可直读的初夏物候诗作品页；"非立夏题名诗"边界写入命题与正文。
