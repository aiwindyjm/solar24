---
schema_version: '0.1.0'
id: 'hist-yueling-xiaoxue-pentads'
type: 'HistoricalRecord'
title: '《月令七十二候集解》小雪三候：虹藏不见、天气上升地气下降、闭塞而成冬'
solar_terms: ['xiaoxue']
season: 'winter'
dimensions: ['phenology', 'history', 'ecology']
region: ['文本经验锚定中国（黄河流域为核心的古典物候传统）；实际物候因纬度海拔而异']
period: '文本传统题名为元代；所承物候体系更早（《礼记·月令》《逸周书·时训》等）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-yueling-qishierhou-wikisource', 'source-ihchina-xiaoxue-feature']
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
    'statement': '《月令七十二候集解》将小雪列为十月中（与"立冬，十月節"同处一个农历月、居中气之位），命名定义"雨下而為寒氣所薄，故凝而為雪。小者，未盛之辭"，并以五日为一候记小雪三候：一候虹藏不见、二候天气上升地气下降、三候闭塞而成冬。',
    'exceptions': [
      '二候"天氣上升，地氣下降"在本直读版本中无注文，与一候三候体例不一，原因待考（或注文佚、或本无误）',
      '七十二候所述物候是古典文本经验，不等于当代中国各地的实际物候观测',
      '各版本注文文字可能存在异文，引用需注明版本（本卡以维基文库本为准）',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 小雪三候（古典文本记载）

## 研究问题

传统文献如何描述小雪时节的自然变化？"三候"体系的原始文本是什么？

## 证据（原文与定位）

已直接读取维基文库《月令七十二候集解》小雪节全文（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]），位于立冬（"十月節"）之后、大雪（"十一月節"）之前；非遗网小雪专题页（[[04_sources/source-ihchina-xiaoxue-feature|source-ihchina-xiaoxue-feature]]）独立载有同一段引文（简体转写，标点微异），与本直读逐字相合：

> 定义："小雪，十月中。雨下而為寒氣所薄，故凝而為雪。小者，未盛之辭。"
> 一候："虹藏不見。《禮記註》曰：陰陽氣交而為虹，此時陰陽極乎辨，故虹伏。虹非有質，而曰藏，亦言其氣之下伏耳。"
> 二候："天氣上升，地氣下降。"（本条无注文）
> 三候："閉塞而成冬。天地變而各正其位，不交則不通，不通則閉塞，而時之所以為冬也。"

同页直读对读材料：立冬条"立冬，十月節。立字解見前。冬，終也，萬物收藏也"；大雪条"大雪，十一月節。大者，盛也。至此而雪盛矣"；清明条三候之首"虹始見"注文起句"虹，虹蜺也……註疏曰：是陰陽交會之氣"。

## AI 摘要 / 解释

- 三候是一个"由显入隐"的收官叙事：**虹（天象）隐迹 → 天地之气停止交流 → 万物通道闭塞而成冬**。与立春三候（东风解冻→蛰虫始振→鱼陟负冰）的"由隐入显"恰成镜像——小雪是七十二候序列里"闭塞"叙事的起点。
- **"虹藏不见"与清明"虹始见"是同书内的对偶物候**：清明注"是陰陽交會之氣"释虹之现，小雪注"陰陽極乎辨，故虹伏"释虹之藏——一现一藏共用"阴阳交/辨"的解释框架，两句可互链对读（清明侧索引 [[01_terms/05_清明|清明]]）。
- "小雪，十月中"的"中"是节/中气分组的标签：小雪是农历十月的中气（立冬为十月节气），这一"节气/中气"交替结构正是农历置闰机制的基石（见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]，不在此复述命题）。
- 注文以阴阳二气的升降闭塞解释物候——这是**古典解释体系（Interpretation）**，与现象记录本身应分层引用；本卡正文只在证据区逐字保留原注，不在命题层采信其宇宙论。

## 适用条件、例外与分歧

- **版本异文（待校勘）**：非遗网专题页引文作"小者未盛之辞"（无逗号），与维基文库本"小者，未盛之辭"标点微异，文字实质一致；中华书局印本/《四库》本全面校勘待人工。
- 二候无注文是本直读本的显著体例缺口：是传本佚注还是原书如此，需比对《逸周书·时训》与《礼记·月令》系统的平行文本（后续课题）。
- 当代物候验证完全缺失——"虹在小雪后是否真的不再出现"取决于当地降水与气温，古典结论对现代中国各地不构成观测断言（七十二候体系背景见 [[02_shared/hist-solarterms-pentad-system|七十二候体系]]）。

## 关联

[[01_terms/20_小雪|小雪索引]] · [[03_notes/hist-xiaoxue-naming|小雪命名卡]] · [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]] · [[02_shared/hist-solarterms-pentad-system|七十二候体系]] · [[02_topics/phenology|物候维度]]

## 待人工确认

- 版本校勘（《逸周书·时训》《礼记·月令》平行记载比对；二候注文佚失问题）。
- 是否引入现代物候观测数据建立"传统物候 vs 现代观测"对照（虹的可见期、初雪日期）。

## 修改记录

- 2026-09-16（建卡）：逐字直读建卡；发现并记录二候无注文体例缺口与清明"虹始见"对偶。
- 2026-09-16（证据补强）：source_ids 补入非遗网小雪专题（页载同段引文经逐字比对相合），定义句与三候获第二个直读发布方支持。
