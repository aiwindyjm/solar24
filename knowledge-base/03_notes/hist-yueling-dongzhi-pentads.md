---
schema_version: '0.1.0'
id: 'hist-yueling-dongzhi-pentads'
type: 'HistoricalRecord'
title: '《月令七十二候集解》冬至三候：蚯蚓结、麋角解、水泉动'
solar_terms: ['dongzhi']
season: 'winter'
dimensions: ['phenology', 'history', 'ecology']
region: ['文本经验锚定中国（黄河流域为核心的古典物候传统）；实际物候因纬度海拔而异']
period: '文本传统题名为元代；所承物候体系更早（《礼记·月令》《吕氏春秋》《逸周书·时训》等）'
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
    'statement': '《月令七十二候集解》将冬至列为十一月中（中气位），定义"終藏之氣至此而極也"，并记冬至三候：一候蚯蚓结、二候麋角解、三候水泉动。"麋角解"注文以互见方式写在夏至"鹿角解"条下："夏至一陰生，感陰氣而鹿角解……冬至一陽生，麋感陽氣而角解矣，是夏至陽之極，冬至陰之極也。"',
    'exceptions': [
      '本条注文极简（"麋角解。說見鹿角解下"），完整注文在夏至鹿角解条——引用时须注明互见结构，不得把夏至条的注文直接当作冬至条原文',
      '七十二候所述物候是古典文本经验，不等于当代中国各地的实际物候观测',
      '"冬至，十一月中"的"中"指中气位（节气/中气分组见共享卡）；麋角冬季脱落（而非鹿角）的现代动物学核验本轮无直读来源',
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

# 冬至三候（古典文本记载）

## 研究问题

传统文献如何描述冬至时节的自然变化？"三候"的原始文本与注文怎么说？

## 证据（原文与定位）

已直接读取维基文库《月令七十二候集解》冬至节全文（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]，位于大雪之后、小寒之前）：

> 定义："冬至，十一月中。終藏之氣至此而極也。"
> 一候："蚯蚓結。六陰寒極之時，蚯蚓交相結而如繩也。"
> 二候："麋角解。說見鹿角解下。"
> 三候："水泉動。水者，天一之陽所生，陽生而動，今一陽初生故云耳。"

互见注文（夏至"鹿角解"条，同书直读）："鹿，形小山獸也，屬陽，角支向前與黃牛一同；麋，形大澤獸也，屬陰，角支向後與水牛一同。夏至一陰生，感陰氣而鹿角解。解，角退落也。冬至一陽生，麋感陽氣而角解矣，是夏至陽之極，冬至陰之極也。"

## AI 摘要 / 解释

- 三候叙事：**蚯蚓蜷结（阴之极）→ 麋角脱落（阳始感）→ 泉水初动（一阳生）**——前一个信号标记"终藏之气至此而极"，后两个信号标记"冬至一阳生"的转折。冬至三候是七十二候体系中阴阳转折叙事最完整的一节（与夏至三候"鹿角解/蜩始鸣/半夏生"构成夏冬对偶，注文自己点明"夏至陽之極，冬至陰之極也"）。
- "六陰寒極""天一之陽所生""一陽初生"是阴阳数术的古典解释框架（Interpretation 层），与现象记录本身应分层引用；"冬至一阳生"由此成为后世贺冬、数九等习俗的经典理论根据（见 [[03_notes/hist-dongzhi-hedong-jiaotian|贺冬与郊天卡]]）。
- "十一月中"的中气身份：冬至是农历十一月的**中气**，与十一月节（大雪）配对——节气/中气分组与置闰机制见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]，现代农历"含冬至之月=十一月"规则见 [[03_notes/sci-dongzhi-shortest-day-year-anchor|回归年锚卡]]。

## 适用条件、例外与分歧

- 非遗网冬至专题引三候名（"一候蚯蚓结，二候麋角解，三候水泉动"）与维基文库本一致；其对"麋与鹿同科，却阴阳不同……糜感阴气渐退而解角"的解说为机构白话转述（"糜/麋"用字亦有繁简之别），属汇编层解释。
- 麋（Elaphurus，麋鹿）角冬季脱落、鹿（Cervus）角夏季脱落的现代动物学对照，本轮无直读来源，记 Needs Research。
- 当代物候验证（蚯蚓冬季蜷结、泉水初动是否按期可验）完全缺失——气候变化维度后续课题。

## 关联

[[01_terms/22_冬至|冬至索引]] · [[02_shared/hist-solarterms-pentad-system|七十二候体系]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[03_notes/sci-dongzhi-shortest-day-year-anchor|白昼最短与回归年锚]] · [[02_topics/phenology|物候维度]]

## 待人工确认

- 版本校勘（中华书局印本/《四库》本对读）；《逸周书·时训解》《礼记·月令》仲冬条的平行记载直读。
- 是否引入竺可桢《物候学》等现代物候学著作建立"传统物候 vs 现代观测"对照。

## 修改记录

- 2026-09-16（第一轮）：建卡。维基文库直读冬至节全文+夏至鹿角解互见注文；"麋角解注文互见"结构写入命题与 exceptions。
- 2026-09-16（审核阶段）：路由判 human-review-required（evidence-below-confidence：单直读方维基文库撑 high），status draft → in-review，入审核分节 B 区；与立春/大雪同类卡同因。
