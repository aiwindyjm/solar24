---
schema_version: '0.1.0'
id: 'hist-yueling-chushu-pentads'
type: 'HistoricalRecord'
title: '《月令七十二候集解》处暑三候：鹰乃祭鸟、天地始肃、禾乃登'
solar_terms: ['chushu']
season: 'autumn'
dimensions: ['phenology', 'history', 'ecology']
region: ['文本经验锚定中国（黄河流域为核心的古典物候传统）；实际物候因纬度海拔而异']
period: '文本传统题名为元代；所承物候体系更早（《礼记·月令》《吕氏春秋》等）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-yueling-qishierhou-wikisource']
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
    'statement': '《月令七十二候集解》将处暑列为七月中（中气位），定义"處，止也。暑氣至此而止矣"，并以五日为一候记处暑三候：一候鹰乃祭鸟、二候天地始肃、三候禾乃登。注文以五行肃杀之气释"鹰乃祭鸟"（"鷹感其氣始捕擊諸鳥，然必先祭之，猶人飲食祭先代為之者也"），与雨水"獺祭魚"同属古典"祭而后食"叙事——这是古典解释传统的文本事实，不是动物行为学结论。',
    'exceptions': [
      '维基文库本录文存在句读与用字待校处："天地始肅秋者，陰之始"通行标点多作"天地始肅。秋者，陰之始"；"成熱曰登"之"熱"通行本多作"熟"（成熟）——引用需注明所据录文',
      '"鹰乃祭鸟"的"祭"是古人以人间礼仪类比猛禽捕猎行为的叙事框架（"先祭后食""不击有胎之禽谓之义"），现代鸟类学不使用此解释',
      '七十二候所述物候是古典文本经验，不等于当代中国各地的实际物候观测',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': ['高置信但独立直读方=1；需第二独立来源或点校本核对'],
    'notes': 'REVISE→APPROVE：一手古籍维基文库直读，独立性=1是该来源形态固有；点校本核对列为人审条件',
  }
---

# 处暑三候（古典文本记载）

## 研究问题

传统文献如何描述处暑时节的自然变化？"祭鸟"叙事在古典解释体系中的性质是什么？

## 证据（原文与定位）

已直接读取维基文库《月令七十二候集解》处暑节全文（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]，2026-09-16 重抓全页）：

> 定义："處暑，七月中。處，止也。暑氣至此而止矣。"
> 一候："鷹乃祭鳥，鷹，義禽也。秋令屬金，五行為義，金氣肅殺，鷹感其氣始捕擊諸鳥，然必先祭之，猶人飲食祭先代為之者也。不擊有胎之禽，故謂之義。"
> 二候："天地始肅秋者，陰之始，故曰天地始肅。"
> 三候："禾乃登。禾者。穀連藁秸之總名。又，稻秫苽粱之屬皆禾也。成熱曰登。"

前为立秋节（"涼風至/白露降/寒蟬鳴"），后为白露节（"鴻鴈來/元鳥歸/羣鳥養羞"），处暑居七月中。

**平行文本（同页直读）**：雨水节"獺祭魚"注文："獺，一名水狗，賊魚者也。祭魚，取魚以祭天也。所謂豺獺知報本，歲始而魚上遊，則獺初取以祭。"——"鹰祭鸟/獭祭鱼"同出一套"祭而后食"的古典叙事。

## AI 摘要 / 解释

- 三候构成一个由天及地及人的秋收叙事：**猛禽捕猎（天/动物信号）→ 天地肃杀（气候氛围）→ 五谷成熟（农事结果）**，第三候直接落在"禾乃登"的收获节点上，是三候序列中少见的以农事收成为候者（释义见 [[03_notes/trad-chushu-nongshi|处暑农事农谚]]）。
- "七月中"表明处暑在节气/中气分组中是**中气**（与"立秋，七月节"相对），置闰机制背景见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]；七十二候体系总述见 [[02_shared/hist-solarterms-pentad-system|七十二候体系]]。
- **"祭鸟"的文本性质**：注文把鹰的捕猎纳入"祭先代""知报本""义"的人间伦理框架，并以"秋令屬金，金氣肅殺"作五行解释——这与獭祭鱼"知报本"同一解释模式，属**古典解释体系（Interpretation）**，记录时应与动物行为现象分层引用，不得写成"鹰真的先祭后食"。

## 适用条件、例外与分歧

- **录文待校**：本卡引文以维基文库本为据；"天地始肅秋者"句读、"成熱曰登"用字两处与通行标点/印本可能不同，校勘待做（对照中华书局印本或《四库》本）。
- 当代物候验证缺失："鹰类捕猎高峰/作物成熟期是否对应处暑"无现代观测数据，属气候变化维度后续课题。
- 《礼记·月令》《逸周书·时训》等更早平行记载本轮未直读，谱系断点如实保留。

## 关联

[[01_terms/14_处暑|处暑索引]] · [[03_notes/hist-chushu-naming|处暑命名]] · [[03_notes/trad-chushu-nongshi|处暑农事农谚]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_topics/phenology|物候维度]]

## 待人工确认

- 版本校勘（句读两处、熱/熟用字）与《逸周书·时训》《礼记·月令》平行记载。
- 是否引入现代物候学对照（鹰类秋季捕猎行为、水稻玉米成熟期的物候观测）。

## 修改记录

- 2026-09-16（第一轮）：建卡。发现并登记"祭鸟=古典祭而后食叙事"的分层要点与獭祭鱼平行文本；录文待校两处如实入 exceptions。
- 2026-09-16（审核阶段）：路由引擎判 human-review-required（finding: pending-primary-source——录文未与他本对校），列入处暑审核包 B 区，状态 draft → in-review。
