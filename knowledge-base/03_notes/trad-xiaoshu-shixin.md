---
schema_version: '0.1.0'
id: 'trad-xiaoshu-shixin'
type: 'Tradition'
title: '"食新"：小暑尝新米习俗的地域范围与两稿分歧'
solar_terms: ['xiaoshu']
season: 'summer'
dimensions: ['food', 'customs', 'chinese-life']
region: ['地域限定待核：新华社2024稿与非遗网均指向稻作区/南方；新华社2022稿称"我国各地"（分歧未决）']
period: '当代民俗表述（2021-2024机构稿）；历史渊源未溯源'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'medium'
contested: false
source_ids:
  [
    'source-xinhua-xiaoshu-poetic-2024',
    'source-xinhua-xiaoshu-2022',
    'source-ihchina-xiaoshu-huashuo-2021',
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
risk_level: 'medium'
impact_level: 'term'
claim:
  {
    'statement': '"食新"是小暑前后品尝新收稻米（及新麦）的习俗，机构表述为：新米做成饭食/面饼，先祭祀谷神（五谷神）与祖先、再乡邻分享，寓"吃辛""祈丰收"之意。地域范围存在机构口径分歧：新华社2024稿与非遗网将食新系于南方稻作区（"南方有食新的习俗""南方"），而新华社2022稿（民俗专家由国庆受访）称"我国各地有食新的习俗"——本卡按地域限定（南方稻作区）表述，"各地"说不予采信为分布断言。',
    'exceptions': [
      '食新的历史渊源（何时成型、与"尝新节"谱系的关系）未建古籍链——《荆楚岁时记》等岁时文献的小暑/六月食俗条目本轮未检索',
      '徐州伏羊页称当地最早吃伏羊叫"尝新节"又叫"姑姑节"（六月六），提示"尝新"概念的地域变体复杂，待方志核验',
      '非遗网所记食新细节（磨粉制面饼面条、分享乡邻）未标原始出处，按机构汇编级对待',
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

# 食新：小暑尝新米

## 研究问题

"食新"习俗的内容、地域范围与文献证据如何？

## 证据（按证据等级排列）

1. **直读机构稿（限南方）**：新华社2024稿（[[04_sources/source-xinhua-xiaoshu-poetic-2024|source-xinhua-xiaoshu-poetic-2024]]）："南方有'食新'的习俗，人们会品尝新收获的稻米，以祈风调雨顺。"
2. **直读机构稿（称各地）**：新华社2022稿（[[04_sources/source-xinhua-xiaoshu-2022|source-xinhua-xiaoshu-2022]]，民俗专家由国庆受访）："我国各地有'食新'的习俗，即吃新米、喝新酒。'农民将新割的稻谷碾成米后，做好美食祭祀谷神和祖先，然后众人再品尝。民俗中的"吃新"有"吃辛"之意，即把辛苦全都吃下去，期盼来年少受劳苦，风调雨顺。'"
3. **直读机构汇编**：非遗网"画"说小暑资讯（[[04_sources/source-ihchina-xiaoshu-huashuo-2021|source-ihchina-xiaoshu-huashuo-2021]]）："'食新'是将新打的米、麦等磨成粉，制成各种面饼、面条，邻居乡亲分享来吃，表达对丰收的祈愿。同时，这些新货也要准备一份祭祀五谷神和祖先，恳求保佑风调雨顺。"

## AI 摘要 / 解释

- 三源内容一致的部分：**食新=尝新米+祭谷神祖先+分享**，寓意"吃辛/祈丰"。分歧只在地域范围："南方/稻作区"（2024稿、非遗网语境）vs"我国各地"（2022稿专家语）。
- 处理原则：内容采纳、范围从窄——新米食俗以稻作收获期为前提（南方早稻7月前后登场），"各地"说缺乏逐地证据，按分布性短语审计降级为"待核验的宽泛表述"。
- 食新的农时逻辑与小暑"出梅入伏、盛夏开始"衔接：早稻收获与伏天开始同步的稻作区经验（该衔接为解释层，非直读断言）。

## 适用条件、例外与分歧

- 两稿地域分歧已如实登记（contested 未置 true，因分歧仅范围表述、核心内容一致）；若后续方志证明北方麦作区亦有"食新/尝新"形态（如徐州"尝新节"系新麦），应改写为分地域谱系卡。
- 无古籍直读——"食新"之名的文献首见待考（《清嘉录》六月条、南方方志为候选）。

## 关联

[[01_terms/11_小暑|小暑索引]] · [[03_notes/region-xiaoshu-xuzhou-fuyang|徐州伏羊食俗（新麦馍馍形态）]] · [[03_notes/trad-xiaoshu-nongshi|农事农谚]] · [[02_topics/food|饮食维度]]

## 待人工确认

- "食新"文献溯源（南方方志/《清嘉录》）；"各地"说的逐地核验或废弃；与"尝新节"（苗族等民族节庆同名现象，本轮未研究）的边界。

## 修改记录

- 2026-09-16（建卡）：三机构直读源；范围按"从窄"原则处理并登记两稿分歧；status=draft。
- 2026-09-16（源卡重组）：非遗网源由 25570 资讯页改挂 huashuo-2021 新源卡（食新为该页特有条目；2017 专题页 6971 无食新条目，经核）。
