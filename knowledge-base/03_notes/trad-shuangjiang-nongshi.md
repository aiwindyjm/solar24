---
schema_version: '0.1.0'
id: 'trad-shuangjiang-nongshi'
type: 'Tradition'
title: '霜降农事与农谚："霜降见霜，米谷满仓"与北收南忙的三秋收尾'
solar_terms: ['shuangjiang']
season: 'autumn'
dimensions: ['agriculture', 'chinese-life', 'climate']
region: ['北方大部分地区（秋收尾声）与南方（三秋大忙）分述；农谚流传地域非遗网未逐一标明']
period: '农谚为传统层（流传断代不可考）；农事概况为非遗网2017专题著录；谚语气象解读为中国天气网2008科普'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-ihchina-shuangjiang-feature', 'source-weathercn-shuangjiang-proverbs', 'source-wikisource-shoushitongkao']
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
    'statement': '非遗网霜降专题（2017）著录的霜降农事格局："霜降见霜，米谷满仓"——霜降时节北方大部分地区已接近秋收尾声（"霜降不起葱，越长越要空"，耐寒的葱也停止生长）；南方还处在"三秋"大忙之中（单季杂交稻、晚稻收割，种早茬麦、栽早茬油菜，摘棉花、拔棉秸、耕翻整地），并提醒收获后及时收回秸秆根茬（"满地秸秆拔个尽，来年少生虫和病"）与干季护林防火。同页另著录农谚16条（"霜降前，薯刨完""霜后暖，雪后寒""晚稻就怕霜来早""秋雨透地，降霜来迟""秋雁来得早，霜也来得早""风大夜无露，阴天夜无霜""一夜孤霜，来年有荒；多夜霜足，来年丰收""霜降前降霜，挑米如挑糠；霜降后降霜，稻谷打满仓""迎伏种豆子，迎霜种麦子""霜降播种，立冬见苗""寒露种菜，霜降种麦""霜降摘柿子，立冬打软枣""霜降萝卜，立冬白菜，小雪蔬菜都要回来"等）。农谚属民间经验传承层，不构成气象学结论；其中部分谚语已有气象学解读（中国天气网2008：辐射霜与冷高压——"霜重见晴天。霜打红日晒""一朝有霜晴不久，三朝有霜天晴久"）。',
    'exceptions': [
      '农谚流传地域与辑录出处非遗网均未标注，按"民间谚语层"整体对待，不逐条断代',
      '"一夜孤霜，来年有荒；多夜霜足，来年丰收"类年景预测谚语是经验关联表述，无统计验证，不得写成科学规律',
      '南方"三秋大忙"的作物清单为2017年机构稿概况，当代种植结构变化未核',
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

# 霜降农事与农谚

## 研究问题

霜降在农事年历中的位置是什么？代表性农谚及其可气象学化的部分如何分层？

## 证据

- **直读机构汇编**：非遗网霜降专题"农事农谚"节（[[04_sources/source-ihchina-shuangjiang-feature|source-ihchina-shuangjiang-feature]]）——北方秋收尾声/南方三秋大忙的格局、"霜降见霜，米谷满仓"主谚与16条谚语清单、"霜降不起葱"解释、秸秆收回与护林防火提醒（原文摘录见 Source 卡）。
- **直读气象科普**：中国天气网《古代霜降谚语中的有趣气象知识》（[[04_sources/source-weathercn-shuangjiang-proverbs|source-weathercn-shuangjiang-proverbs]]，2008）——对"霜重见晴天/霜打红日晒""一朝有霜晴不久/三朝有霜天晴久"的辐射霜—冷高压解读（机制详见 [[03_notes/sci-shuangjiang-frost-formation|霜的形成机制卡]]）。
- 霜冻作为农业气象灾害与"危害作物的是冻不是霜"的辨析已入科学卡，本卡不重复展开。

- **农书直读环（2026-09-25，R42·第三阶段）**：《詩·豳風》箋（经卷05辑录，直读）「九月霜降始寒，蠶績之功成，可以授衣矣」——霜降与授衣的经学注释链；《農政全書》霜降信条「後來信必嚴毒」为占候层。

## AI 摘要 / 解释

- 霜降的农事意义是**收与种的交接**：北方收尾（薯、葱、萝卜进场，"霜降萝卜，立冬白菜"的冬储序列）、南方边收边种（收稻—种麦栽油菜的轮作窗口），谚语群高度围绕"霜的时间早晚↔收成年景"（"霜降前降霜，挑米如挑糠；霜降后降霜，稻谷打满仓"）——霜来太早伤晚稻（"晚稻就怕霜来早"，实为霜冻风险，见科学卡霜冻之辨）、霜期正常则秋收顺利。
- 分层：农谚=tradition 层民间经验；其中"霜重见晴天"一类已被气象学吸收解释（冷高压晴夜辐射霜）；"孤霜/霜足↔荒/丰"一类年景关联无验证，保留谚语原状。
- 与壮族霜降节的关系：霜降=晚稻收获完成后的酬谢节点（[[03_notes/region-shuangjiangjie-tiandeng|壮族霜降节]]），农事节律是节庆的地基——南方"晚稻收割"与节庆"庆祝丰收"在同一时间窗口。

## 适用条件、例外与分歧

- 谚语清单为整页转录级著录，无逐条地域标注；北方/南方农事格局为2017年概况，引用时注明时点。
- 无跨来源冲突。

## 关联

[[01_terms/18_霜降|霜降索引]] · [[03_notes/sci-shuangjiang-frost-formation|霜的形成机制]] · [[03_notes/region-shuangjiangjie-tiandeng|壮族霜降节]] · [[02_topics/agriculture|农业维度]]

## 待人工确认

- 《农谚》类辑本（如中国农业出版社农谚集）对"霜降见霜，米谷满仓"的辑录源头。
- 各条农谚的地域标注（华北/江南/华南分属）。

## 修改记录

- 2026-09-16（第一轮）：建卡。农谚整体按 tradition 层著录并保留谚语原文；可气象学化的两条（霜重见晴天/一朝三朝）链接科学卡；年景类谚语显式标注"无统计验证"。
- 2026-09-25（R42，第三阶段）：新增《授时通考》卷04-06辑录农书直读环；source_ids 扩充。
