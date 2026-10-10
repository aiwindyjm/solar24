---
schema_version: '0.1.0'
id: 'hist-yueling-yushui-pentads'
type: 'HistoricalRecord'
title: '《月令七十二候集解》雨水：正月中与三候獭祭鱼、候雁北、草木萌动'
solar_terms: ['yushui']
season: 'spring'
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
source_ids:
  [
    'source-yueling-qishierhou-wikisource',
    'source-xinhua-yushui-feature',
    'source-ihchina-yushui-feature',
  ]
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
    'statement': '《月令七十二候集解》将雨水列为"正月中"（正月的"中气"），释义"天一生水，春始屬木，然生木者，必水也，故立春後繼之雨水"，并以五日为一候记雨水三候：一候獭祭鱼、二候候雁北（维基文库本正文；夹注云《月令》《漢書》作"鴻鴈北"）、三候草木萌动。',
    'exceptions': [
      '正文"候雁北"与现代媒体及非遗网通行表述"鸿雁来"不同（后者未见于本轮直读的集解正文），引用需注明版本层次',
      '维基文库本定义句作"散而為雨水矣"，新华网与非遗网引文作"散而为雨矣"——存在"雨/雨水"异文',
      '七十二候所述物候是古典文本经验，不等于当代各地的实际物候观测',
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

# 雨水三候（古典文本记载）

## 研究问题

传统文献如何定义雨水？"三候"的原始文本是什么？现代通行表述与古籍正文有何差异？

## 证据（原文与定位）

已直接读取维基文库《月令七十二候集解》雨水节全文（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]，2026-09-16 重读全书页提取本节气段落）：

> 定义："雨〈【去聲】〉水，正月中。天一生水，春始屬木，然生木者，必水也，故立春後繼之雨水，且東風既解凍，則散而為雨水矣。"
> 一候："獺祭魚。獺，一名水狗，賊魚者也。祭魚，取魚以祭天也。所謂豺獺知報本，歲始而魚上遊，則獺初取以祭。徐氏曰：獺祭圓鋪，圓者，水象也；豺祭方鋪，方者，金象也。"
> 二候："候鴈北〈【《月令》、《漢書》作鴻鴈北】〉。鴈，知時之鳥。熱歸塞北，寒來江南，沙漠乃其居也。孟春陽氣既達，候鴈自彭蠡而北矣。"
> 三候："草木萌動。天地之氣交而為泰，故草木萌生發動矣。"

雨水节紧随立春节之后，位于全书第二节。

## AI 摘要 / 解释

- 定义句给出雨水的两层古典逻辑：**五行相生（春属木、生木者必水）** 与 **气象经验（东风解冻、散而为雨）**——命名既是历法排序（继立春之后）也是降水观察的概括。
- 三候构成水→鸟→植物的初春序列：**水獭捕鱼陈列如祭 → 候雁北归 → 草木萌动**，注文以"报本""知时""气交为泰"作解，属古典解释体系（Interpretation 层），引用时应与现象记录分开。
- **重要异文**：正文作"候鴈北"且夹注《月令》《汉书》作"鴻鴈北"；而本轮直读的新华网稿与非遗网专题均作"二候鸿雁来"。"鸿雁来"不见于本轮直读的集解正文，其直接出处待查（可能是《礼记·月令》孟春"鸿雁来"系统或现代转写），引用三候时**以集解正文"候雁北"为准并注明媒体层差异**。
- "正月中"标签即雨水为正月"中气"的传统文本体例；紫金山天文台置闰规则原文即以雨水为中气之例，机制见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]（共享卡，本卡不复述）。

## 适用条件、例外与分歧

- 版本异文两处（候雁北/鸿雁来；为雨/为雨水），本卡以已直读的维基文库本为准，异文待人工比对中华书局印本或《四库》本。
- 韩国民族文化大百科事典"우수"条（[[04_sources/source-encykorea-usui|直读]]）转述的三候（水獭摆鱼、雁北飞、草木萌芽）与集解正文一致，且条目自陈此细分法为"古时中国人"所创——三候体系汉字文化圈传播的旁证。
- 当代物候验证完全缺失，"今天这些物候是否仍按期出现"待研究。

## 关联

[[01_terms/02_雨水|雨水索引]] · [[02_shared/hist-solarterms-pentad-system|七十二候体系]] · [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]] · [[03_notes/hist-yueling-lichun-pentads|立春三候（前节）]] · [[02_topics/phenology|物候维度]]

## 待人工确认

- "鸿雁来"表述的直接古籍出处（《礼记·月令》孟春平行记载核读）。
- 版本校勘与《逸周书·时训》平行记载。

## 修改记录

- 2026-09-16（建卡）：直读维基文库全书页雨水节；发现并登记两处异文（候雁北 vs 媒体层"鸿雁来"；为雨 vs 为雨水）。
- 2026-09-16（路由）：引擎路由 auto-candidate（tier A/独立直读×3、无 finding），按入包规则保持 draft，列 A 区。
