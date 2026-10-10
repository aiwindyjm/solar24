---
schema_version: '0.1.0'
id: 'hist-yueling-lixia-pentads'
type: 'HistoricalRecord'
title: '《月令七十二候集解》立夏三候：蝼蝈鸣、蚯蚓出、王瓜生'
solar_terms: ['lixia']
season: 'summer'
dimensions: ['phenology', 'history', 'ecology']
region: ['文本经验锚定中国（黄河流域为核心的古典物候传统）；实际物候因纬度海拔而异']
period: '文本传统题名为元代；所承物候体系更早（《礼记·月令》《逸周书》等）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-yueling-qishierhou-wikisource', 'source-wikisource-lixia-liji-yueling', 'source-ihchina-lixia-feature']
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
    'statement': '《月令七十二候集解》将立夏列为四月节，定义"立夏，四月節。立字解見春。夏，假也。物至此時皆假大也"，并记立夏三候：一候螻蟈鳴、二候蚯蚓出、三候王瓜生，各附注文（螻蟈"今人謂之土狗"、一名螻蛄；蚯蚓"即地龍也"；王瓜"又名土瓜，一名落鵶瓜"）。定义句以"立字解見春"回指立春条"立，建始也……立夏、秋、冬同"，即四立共用同一命名逻辑；三候候名与《礼记·月令》孟夏之月物候序列（螻蟈鳴、蚯蚓出、王瓜生、苦菜秀）前三项逐字一致。',
    'exceptions': [
      '注文本身记录了古典注释分歧：螻蟈为何物，"陸德明、鄭康成以為蛙"而本书注者斥"皆非也"（以为土狗/蝼蛄类）——引用时不得把任一说写成定论',
      '各版本三候注文文字可能存在异文，引用需注明版本（本卡以维基文库本为准）',
      '七十二候所述物候是古典文本经验，不等于当代中国各地的实际物候观测',
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

# 立夏三候（古典文本记载）

## 研究问题

传统文献如何描述立夏时节的自然变化？三候的原始文本、注文与命名逻辑是什么？

## 证据（原文与定位）

已直接读取维基文库《月令七十二候集解》立夏节全文（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]，2026-09-16 重抓全页提取本节气段）：

> 定义："立夏，四月節。立字解見春。夏，假也。物至此時皆假大也。"
> 一候："螻蟈鳴。螻蟈，小蟲，生穴土中，好夜出，今人謂之土狗是也；一名螻蛄，一名石鼠，一名螜〈【音斛】〉，各地方言之不同也。《淮南子》曰：螻蟈鳴，邱螾出，陰氣始而二物應之。……《埤雅》《本草》俱以為臭蟲，陸德明、鄭康成以為蛙，皆非也。"
> 二候："蚯蚓出。蚯蚓即地龍也〈【一名曲蟺】〉，《歷解》曰：陰而屈者，乘陽而伸見也。"
> 三候："王瓜生。《圖經》云：王瓜處處有之，生平野、田宅及牆垣，葉似栝樓、烏藥，圓無丫缺，有毛如刺，蔓生，五月開黃花，花下結子如彈丸，生青熟赤，根似葛，細而多糝，又名土瓜，一名落鵶瓜，今藥中所用也。"

紧随其后即小满节（"小滿，四月中。……苦菜秀"）。候名另与非遗网立夏专题页所引《礼记·月令》"蝼蝈鸣，蚯蚓出，王瓜生，苦菜秀"对照一致（[[04_sources/source-ihchina-lixia-feature|source-ihchina-lixia-feature]]；《礼记·月令》孟夏条本代理亦已直读，见 [[04_sources/source-wikisource-lixia-liji-yueling|礼记月令源]]）。

## AI 摘要 / 解释

- 三候构成初夏地气叙事：**虫鸣于穴土（听）→ 蚯蚓出土（视）→ 王瓜蔓生（视）**，观察对象从动物活动转向植物生长，与"物至此時皆假大也"（万物至此皆盛大）的定义句互文。
- **四立命名逻辑的文本互证**：立夏定义句"立字解見春"是显式回指——立春条（[[03_notes/hist-yueling-lichun-pentads|立春三候卡]]）"立，建始也……立夏、秋、冬同"预先收录了四立共用的"立"义。两条互读可证"立=建始/转折"是四立一体的命名设计，而非各节气独立取义。
- 注文的知识史价值：一候注文保留了"螻蟈=蛙（陆德明、郑康成）还是=土狗/蝼蛄（本书注者）"的注释分歧，是七十二候解释传统内部多样性的直接样本（Interpretation 层，与物候记录本身分层）。
- 体系对照：《礼记·月令》以月为单位列物候四项（孟夏：螻蟈鳴/蚯蚓出/王瓜生/苦菜秀），七十二候体系按五日一候重新分配——立夏取前三项，"苦菜秀"移作小满首候（本页小满节直读可证）。两体系相关但不同粒度，七十二候体系总述见 [[02_shared/hist-solarterms-pentad-system|七十二候体系]]，本卡不复述。

## 适用条件、例外与分歧

- "夏，假也"之"假"取"大"义（《尔雅》"夏，大也"一系的训诂传统），非遗网页面亦释"假"意为"大"——这是训诂解释，属古典解释框架。
- 当代物候验证（蛙类始鸣日、蚯蚓出土日、王瓜萌发日的现代观测）本轮无数据，见 Needs Research。
- 版本异文：本卡以维基文库本逐字为准；人民日报2025年稿引作"立，建始也。夏，假也，物至此时皆假大也"（节引合并本卡定义句与立春条），属文内节引而非异书，不构成冲突。

## 关联

[[01_terms/07_立夏|立夏索引]] · [[03_notes/hist-yueling-lichun-pentads|立春三候（"立，建始也"原句互证）]] · [[02_shared/hist-solarterms-pentad-system|七十二候体系]] · [[02_topics/phenology|物候维度]]

## 待人工确认

- 三候注文与《礼记·月令》郑玄注、《逸周书·时训》平行文本比对（螻蟈物种之争的源流）。
- 是否引入现代物候观测（中国物候观测网）建立"传统三候 vs 现代观测"对照。

## 修改记录

- 2026-09-16（第一轮建库）：建卡。维基文库本逐字摘录定义句与三候全文；候名与《礼记·月令》孟夏条、非遗网专题页两路互证；螻蟈注释分歧写入 exceptions。
