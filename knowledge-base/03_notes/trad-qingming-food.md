---
schema_version: '0.1.0'
id: 'trad-qingming-food'
type: 'Tradition'
title: '青团与冷食：清明食俗的地域证据（江南及多地）'
solar_terms: ['qingming']
season: 'spring'
dimensions: ['food', 'customs', 'chinese-life']
region: ['文献确证：上海（青团）、山东即墨（冷食）、山西晋南（子福）、浙江湖州（粽子）——均为非遗网专题页逐地条目，非全国概括']
period: '可确证记载为当代机构汇编中的地域条目；历史谱系（寒食冷食→青团）仅有机构解释与检索级线索'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'medium'
contested: false
risk_level: 'medium'
impact_level: 'regional'
source_ids: ['source-ihchina-qingming-feature']
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
    'statement': '清明食俗有明确地域限定的文献证据：非遗网清明专题页记上海清明吃青团（雀麦草汁和糯米舂合、包豆沙枣泥馅、芦叶垫底蒸制），并明言"青团可以冷食，这与寒食节的传统一脉相承"；同页记山东即墨清明吃鸡蛋和冷饽饽、山西晋南蒸"子福"上坟、浙江湖州清明裹粽子、浙江桐乡有"清明大似年"之说。冷食遗俗与寒食禁火的关联是该机构页给出的解释。',
    'exceptions': [
      '"清明果"名称及相关地区分布本轮未获直接文献，留白',
      '青团的历史谱系（检索线索称"青团"之名明清才流行）未直读任何古籍，不写入命题',
      '六世纪《荆楚岁时记》寒食条记的是"禁火三日，造餳大麥粥"（甜粥类冷食），与青团之间无已证演变链',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': ['一手来源（GB/T正文/标准全文）未直读，已在exceptions登记；降级处理'],
    'notes': 'REVISE→APPROVE：pending-primary-source不影响命题正确性（已有多独立直读源），待核来源列入人审条件',
  }
---

# 青团与冷食：清明食俗

## 研究问题

清明"吃青团/冷食"的证据边界在哪里？能否把青团写成全国性或古老习俗？

## 证据

- **直读机构汇编**：非遗网清明专题页"饮食民俗"节（[[04_sources/source-ihchina-qingming-feature|source-ihchina-qingming-feature]]）：
  > "上海清明节时有吃青团的风俗。将雀麦草汁和糯米一起舂合……蒸熟出笼的青团色泽鲜绿，香气扑鼻，是本地清明节最有特色的节令食品。另外，青团可以冷食，这与寒食节的传统一脉相承。"
  同页另记：山东即墨"吃鸡蛋和冷饽饽"、此类食俗"与寒食节传统一脉相承"；晋南蒸"子福"（上坟用）；浙江湖州清明裹粽子。
- **直读古籍（旁证寒食冷食源头）**：《荆楚岁时记》寒食条："禁火三日，造餳大麥粥"（见 [[03_notes/hist-qingming-hanshi-merger|融合史卡]]）——冷食传统的六世纪文本形态是麦粥/醴酪类，非青团。

## AI 摘要 / 解释

- 本卡结论：**青团是江南（页面记上海）地域限定食俗，直接证据为当代机构汇编；其"冷食"属性被机构页与寒食传统挂钩，属解释层**。从"寒食麦粥"到"青团"之间两千年的演变链无直读文献。
- 地域差异价值：山东冷饽饽、晋南子福、湖州粽子同页并列，展示同一节气日不同地域的食俗分化——这正是"地域差异"维度的证据材料，不能合并成"中国人清明吃青团"。

## 适用条件、例外与分歧

无跨源冲突。流行文本常把青团写作"江南青团/清明果全国通吃"，超出本卡证据；"清明果"及闽台"草仔粿"、客家"艾粄"等名称谱系为检索线索（维基百科等），未直读，不立命题。

## 关联

[[01_terms/05_清明|清明索引]] · [[03_notes/hist-qingming-hanshi-merger|寒食清明融合史]] · [[03_notes/trad-qingming-customs|扫墓戴柳习俗]] · [[02_topics/food|饮食维度]]

## 待人工确认

- 青团/清明团子的方志与古籍源（《随园食单》等线索需直读）；"清明果"分布地域的权威来源；各地方扩展子项（如介休寒食）的食俗条目。

## 修改记录

- 2026-09-16（建卡）：以非遗网专题页地域条目+荆楚岁时记寒食冷食源头建立；"清明果"与青团谱系留白。
- 2026-09-16（审核阶段）：路由引擎检出 pending-primary-source（青团谱系未直读古籍，exceptions 已如实声明），列入 [[07_research/sections/review-qingming|清明审核分节]] B 组；状态 draft → in-review。AI 不做最终审核，等待人工 Decision。
