---
schema_version: '0.1.0'
id: 'hist-yueling-lichun-pentads'
type: 'HistoricalRecord'
title: '《月令七十二候集解》立春三候：东风解冻、蛰虫始振、鱼陟负冰'
solar_terms: ['lichun']
season: 'spring'
dimensions: ['phenology', 'history', 'ecology']
region: ['文本经验锚定中国（黄河流域为核心的古典物候传统）；实际物候因纬度海拔而异']
period: '文本传统题名为元代；所承物候体系更早（《礼记·月令》《吕氏春秋》等）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
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
    'statement': '《月令七十二候集解》将立春列为正月节，定义"立，建始也"，并以五日为一候记立春三候：一候东风解冻、二候蛰虫始振、三候鱼陟负冰。',
    'exceptions': [
      '各版本三候注文文字存在异文（本轮已发现一处），引用需注明版本',
      '七十二候所述物候是古典文本经验，不等于当代中国各地的实际物候观测',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': ['维基文库直读，独立直读方=1（全书唯一来源形态）；建议人审时对照中华书局点校本'],
    'notes': 'LC-5 依赖卡：一手古籍直读，文字忠实性已由引文复验确认（6/6逐字命中）；点校本核对列人审条件',
  }
---

# 立春三候（古典文本记载）

## 研究问题

传统文献如何描述立春时节的自然变化？"三候"体系的原始文本是什么？

## 证据（原文与定位）

已直接读取维基文库《月令七十二候集解》立春节全文（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]）：

> 定义："立春，正月節。立，建始也。五行之氣往者過來者續于此。而春木之氣始至，故謂之立也。立夏、秋、冬同。"
> 一候："東風解凍。凍結于冬，遇春風而解散……"
> 二候："蟄蟲始振。蟄，藏也；振，動也。密藏之蟲，因氣至，而皆蘇動之矣……"
> 三候："魚陟負冰。陟，升也。魚當盛寒伏水底而遂暖，至正月陽氣至，則上遊而近冰，故曰負。"

紧随其后即雨水节，全书以立春居首。

## AI 摘要 / 解释

- 三候构成一个连贯的初春叙事：**风变暖（冰融）→ 越冬虫苏醒 → 鱼上浮近冰**，观察对象是水、陆、动物三类自然信号，全部可在水体与土地直接目验，反映的是农耕社会的物候观察传统。
- "立，建始也"是"四立"（立春/立夏/立秋/立冬）命名的共同逻辑：节气标记的是**气的转折点**，而非气象学季节的到达。
- 注文引《吕氏春秋》"东方属木"释"东风"，显示五行方位框架对物候解释的渗透——这属于**古典解释体系（Interpretation）**，与现象记录本身应分层引用。

## 适用条件、例外与分歧

- **版本异文（待校勘）**：CText 检索摘要在"鱼陟负冰"注文中出现"陟，言积，升也，高也。魚當寒威之時，伏於水下……"等不同文字，与维基文库本不一致；说明传世各本注文有出入。本笔记以已直接读取的维基文库本为准，异文待人工比对中华书局印本或《四库》本。
- 七十二候体系与二十四节气是相关但**不同粒度**的两个体系（24×3候=72候），其定型过程（《逸周书·时训》等相关文献）待研究。
- 当代物候验证（如中国物候观测网数据）完全缺失——"今天这些物候是否仍按期出现"是气候变化维度的重要后续课题。

## 关联

[[01_terms/01_立春|立春索引]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[03_notes/sci-lichun-vs-meteorological-spring|立春与气象入春]] · [[02_topics/phenology|物候维度]]

## 待人工确认

- 版本校勘与《逸周书·时训》《礼记·月令》对三候的更早平行记载。
- 是否引入竺可桢《物候学》等现代物候学著作建立"传统物候 vs 现代观测"对照。
## 修改记录

- 2026-09-16（审核阶段）：列入 [[07_research/lichun-human-review-package|立春人工审核包]]，状态 draft → in-review（verified-candidate）。AI 不做最终审核，等待人工 Decision。
