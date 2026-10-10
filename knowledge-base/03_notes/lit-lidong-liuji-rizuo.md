---
schema_version: '0.1.0'
id: 'lit-lidong-liuji-rizuo'
type: 'CulturalFact'
title: '刘基《立冬日作》：立冬温风反常的古典物候感知（兼记传李白《立冬》真伪问题）'
solar_terms: ['lidong']
season: 'winter'
dimensions: ['literature-art', 'climate', 'phenology']
region: ['中国']
period: '元末明初（刘基，1311-1375）；收录于《列朝诗集/甲前03》'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-lidong-liuji', 'source-gjts-suigong-lidong']
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
    'statement': '元末明初刘基七律《立冬日作》全诗为"忽見桃花出小紅，因驚十月起溫風。歲功不得歸顓頊，冬令何堪付祝融。未有星辰能好雨，轉添雲氣漫成虹。蝦蟆蛺蝶偏如意，旦夕蜚鳴白露叢。"（维基文库作品页直读，页注收录于《列朝诗集/甲前03》）。诗写立冬日桃花开、温风起、虹现、蟾蝶活跃——诸象皆违背《礼记·月令》孟冬"水始冰/虹藏不見"的节令预期，以"冬令失序"为立冬文学提供物候反常感知样本。另：网络流传题名李白的《立冬》（"冻笔新诗懒写……"）本轮在维基文库检索无作品页，《古今图书集成》立冬部艺文诗目亦无李白——该诗文本无法直读，真伪存疑，不得作为李白作品引用。',
    'exceptions': [
      '本诗系年（作于何年何地）与《诚意伯文集》校本核对待做；仅据维基文库作品页+页注《列朝诗集》收录',
      '"十月小阳春"（立冬前后回暖）作为气象俗语的名称与机制未另建卡，本诗只作文学证据，不作气候统计证据',
      '传李白《立冬》"未找到"限于本轮检索范围（维基文库检索API+岁功典立冬部），不等于全文献世界不存在——结论仅"无法直读、不得引用"，不是"已证伪托"',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=low/A/独立1；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 刘基《立冬日作》

## 研究问题

古典诗歌如何表达立冬的物候感知？网络流传的"李白《立冬》"可靠吗？

## 证据（原文与定位）

已直接读取维基文库作品页（[[04_sources/source-wikisource-lidong-liuji|source-wikisource-lidong-liuji]]）：

> "忽見桃花出小紅，因驚十月起溫風。歲功不得歸顓頊，冬令何堪付祝融。未有星辰能好雨，轉添雲氣漫成虹。蝦蟆蛺蝶偏如意，旦夕蜚鳴白露叢。"

页面标注：作者刘基（元末明初），收录于《列朝诗集/甲前03》，公有领域。

**同题文献旁证（古籍汇编层）**：《古今图书集成》立冬部艺文收晋代夏侯湛《寒苦谣》（[[04_sources/source-gjts-suigong-lidong|source-gjts-suigong-lidong]]）："惟立冬之初夜，天慘懍以降寒。霜皚皚以被庭，冰溏瀩於井幹……"——恰与刘基诗构成**寒/暖两极**：夏侯湛写立冬肃杀，刘基写立冬温风，一节令两种物候经验的文学并置。

**负面证据（传李白说）**：以"凍筆""寒爐美酒""醉看墨花""雪滿前村"等检索维基文库，无题名李白的《立冬》作品页或古籍卷页命中；《古今图书集成》立冬部艺文二诗目仅收晉夏侯湛《寒苦謠》、宋唐庚《立冬後作》、明王穉登《立冬》三家。紫金霜《立冬》同样无页。

## AI 摘要 / 解释

- 本诗价值在**以节令失常写物候感知**：桃花、温风、虹、蟾蝶全是"冬所不当有"；"歲功不得歸顓頊（冬帝顓頊），冬令何堪付祝融（夏神祝融）"直接调用《礼记·月令》孟冬"其帝顓頊"与"虹藏不見"（见 [[03_notes/hist-lidong-yingdong-beijiao|礼记月令卡]]）的礼制—物候框架，是文学与月令体系互文的直接样本。
- 今日气候语境下，这首诗也提示"立冬≠一定冷"（十月小阳春现象），与 [[03_notes/sci-lidong-vs-meteorological-winter|两套冬天卡]] 可做解释层联动——但诗是文学证据，不作气候统计证据。
- 传李白《立冬》的处理示范了文学样本的准入纪律：**直读到哪个建哪个**；直读不到的流行文本记 Needs Research，不因其流传度而引用。

## 适用条件、例外与分歧

- 刘基诗文本无版本分歧（单页直读）；但同托管方规则下（作品页+页注《列朝诗集》），无独立交叉，confidence 保持 medium。
- 王起《北郊迎冬赋》（唐）在岁功典录文不完整，未单独建卡（见 [[03_notes/hist-lidong-yingdong-beijiao|迎冬卡]] 相关链接线索）。

## 关联

[[01_terms/19_立冬|立冬索引]] · [[03_notes/hist-lidong-yingdong-beijiao|礼记月令（顓頊/虹藏互文）]] · [[03_notes/sci-lidong-vs-meteorological-winter|立冬≠气象入冬]] · [[02_topics/literature-art|文学艺术维度]]

## 待人工确认

- 《列朝诗集/甲前03》卷页直读核对；系年与《诚意伯文集》校本。
- 传李白《立冬》的最早出处排查（若需确证伪托，查《全唐诗》李白卷与明清选本）。

## 修改记录

- 2026-09-16（第一轮）：建卡。LEAD 指向的李白/紫金霜两路均无直读文本，按"直读哪个建哪个"以刘基诗建卡；李白真伪问题连同负面证据如实入卡。
