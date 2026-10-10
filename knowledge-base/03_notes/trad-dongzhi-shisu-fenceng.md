---
schema_version: '0.1.0'
id: 'trad-dongzhi-shisu-fenceng'
type: 'Tradition'
title: '冬至食俗的地域与断代分层：赤豆粥（六世纪直读）·馄饨·饺子·汤圆/冬至圆·冬酿酒'
solar_terms: ['dongzhi']
season: 'winter'
dimensions: ['food', 'customs', 'chinese-life', 'regional-differences']
region: ['分地域：赤豆粥可确证六世纪荆楚（直读）；馄饨为北方历史线索（机构层）；饺子为北方当代流行（机构层）；冬至圆/汤圆可确证清代方志转引层（浙江台州）；冬酿酒限苏州（机构层）']
period: '六世纪（荆楚岁时记）→ 清代方志（转引）→ 当代机构汇编（2015-2017）'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'medium'
risk_level: 'high'
impact_level: 'term'
contested: false
source_ids:
  ['source-wikisource-jingchu-suishiji', 'source-ihchina-dongzhi-feature', 'source-xinhuanet-dongzhi-2015', 'source-ihchina-sanmen-jidong']
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
    'statement': '冬至食俗须逐项分层：(1) 赤豆粥——最早可直读文献为六世纪《荆楚岁时记》："冬至日，作赤豆粥，以禳疫。量日影"（注："共工氏有不才之子，以冬至死，為疫鬼，畏赤小豆，故冬至日作赤豆粥以禳之"），后世延续为江南冬至赤豆饭/赤豆粥（非遗网：浙江嘉兴冬至夜吃赤豆糯米饭）。(2) 馄饨——新华网2015稿："有很多地方在冬至吃馄饨……后来有''冬至馄饨夏至面''的说法"，释为"阳气上升……象征打破混沌"。(3) 饺子——非遗网（2017）："冬至饺子夏至面"，北方有冬至吃饺子风俗，俗话"冬至不端饺子碗，冻掉耳朵没人管"；张仲景舍药传说明确标注为"有一种说法"（传说层另立卡）。(4) 冬至圆/汤圆——三门祭冬名录条目转引康熙《临海县志》"冬至，粉秫米为丸，谓之冬至圆。设牲醴食馔荐之祖先"、光绪《宁海县志》"冬至屑糯米粉作汤圆，以赤小豆作馅礼神及祖考"（方志未直读，转引级）。(5) 冬酿酒——非遗网：姑苏人家冬至夜喝冬酿酒（米酒加桂花）。',
    'exceptions': [
      '"南汤圆北饺子"的现代分布概括为流行叙述，本轮两直读源（非遗网/新华网2015）分别落点"北方饺子""很多地方馄饨"与江南/台州汤圆，未获逐地核验，不得写成"全国普遍"',
      '馄饨→饺子的谱系演变（是否同源、何时分化）无文献链，不写',
      '张仲景"祛寒娇耳汤"传说单独立 legend 卡（[[03_notes/legend-dongzhi-zhangzhongjing-jiaozi|张仲景传说卡]]），不得混入食俗事实',
      '苏州冬酿酒仅机构汇编层记载，其断代（"传统的姑苏人家"）与酿造史无古籍直读',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=high/A/独立3；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 冬至食俗：地域与断代分层

## 研究问题

"冬至吃什么"的答案如何按地域与时代分层？哪一项有最早的直读文献？

## 证据（按证据等级排列）

1. **直读一手文献（最早层）**：《荆楚岁时记》冬至条（[[04_sources/source-wikisource-jingchu-suishiji|source-wikisource-jingchu-suishiji]]，六世纪荆楚）："冬至日，作赤豆粥，以禳疫。量日影。"——冬至食俗（赤豆粥禳疫）与冬至量日影实践并记；注文给出驱疫鬼的传说解释（legend 层，见 exceptions 分层）。
2. **转引层（清代方志，经非遗名录条目）**：康熙《临海县志·卷一·风俗》"冬至，粉秫米为丸，谓之冬至圆。设牲醴食馔荐之祖先"；光绪《宁海县志》"冬至屑糯米粉作汤圆，以赤小豆作馅礼神及祖考"（[[04_sources/source-ihchina-sanmen-jidong|source-ihchina-sanmen-jidong]] 综述转引，方志原书未直读）。
3. **机构层（当代）**：非遗网冬至专题（[[04_sources/source-ihchina-dongzhi-feature|source-ihchina-dongzhi-feature]]）：北方饺子（"冬至不端饺子碗，冻掉耳朵没人管"+张仲景"有一种说法"）、江南赤豆糯米饭（嘉兴）、潮汕祭祖三牲与午餐团聚、姑苏冬酿酒；新华网2015稿（[[04_sources/source-xinhuanet-dongzhi-2015|source-xinhuanet-dongzhi-2015]]）：北方馄饨（"冬至馄饨夏至面"）、"亚岁"之称。

## AI 摘要 / 解释

- 分层结论：**冬至食俗中文献最硬的一环是六世纪赤豆粥（直读），其后是清代台州方志的冬至圆（转引），"北方饺子/馄饨"与"苏州冬酿酒"目前为机构汇编层**。同一节气的餐桌在六世纪荆楚是粥、在清代台州是圆子、在当代北方是饺子——食俗不是"全国自古统一"，而是地域社会各自的地方化（regional-differences 维度的典型样本）。
- 馄饨与饺子两个"北方系"并行：2015稿记馄饨（混沌初开辟象征），非遗网记饺子（配张仲景传说）——两者关系（替代/并存/地域）无文献链，如实并列。
- 赤豆粥的"驱疫鬼"解释（共工氏不才子传说）与三门"清明吃苦燕，冬至吃甜圆"等民谚均为传说/谚语层，食用行为（tradition）与解释叙事（legend）分层引用。

## 适用条件、例外与分歧

- 无跨来源直接冲突；主要风险是把机构层的"北方吃饺子"泛化为"中国冬至吃饺子"——已用分地域命题结构防范。
- 潮汕冬至祭祖（三牲/祠堂/饶平海山渔民晨祭）为非遗网单源叙述，未逐地核，只作地域条目保留在证据区不进命题。

## 关联

[[01_terms/22_冬至|冬至索引]] · [[03_notes/legend-dongzhi-zhangzhongjing-jiaozi|张仲景娇耳汤传说（legend）]] · [[03_notes/region-dongzhi-sanmen-jidong|三门祭冬（冬至圆）]] · [[03_notes/hist-dongzhi-hedong-jiaotian|贺冬与郊天]] · [[02_topics/food|饮食维度]]

## 待人工确认

- 康熙《临海县志》、光绪《宁海县志》原书直读（方志库/影印本）。
- "冬至馄饨"的古籍谱系（《燕京岁时记》等冬至条直读）；苏州冬酿酒（桂花冬酿）的断代文献。
- "南汤圆北饺子"分布的逐地核验（方志与民俗志汇编）。

## 修改记录

- 2026-09-16（建卡）：以荆楚直读为最早层、方志转引与机构层依次降权建分层卡；张仲景传说显式剥离至 legend 卡。
- 2026-09-16（YAML修复）：claim 串内 ASCII 单引号（''冬至馄饨夏至面''）按规范双写修复。
- 2026-09-16（审核阶段）：路由判 human-review-required（risk=high 食俗泛化高危防范卡），status draft → in-review，入审核分节 C 区。
