---
schema_version: '0.1.0'
id: 'hist-ml-dongzhi-suijie'
type: 'HistoricalRecord'
title: '南宋临安的冬至："嵗節…加於常節"与君王腊（卷六直读）'
solar_terms: ['dongzhi', 'xiaohan', 'dahan']
season: 'winter'
dimensions: ['customs', 'history', 'calendar', 'food']
region: ['中国（南宋临安，今杭州）']
period: '南宋咸淳年间'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-ml-juan146']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-25'
updated: '2026-09-25'
human_review:
  {
    'reviewer': 'aiwindyjm',
    'reviewed_at': '2026-09-28',
    'decision': 'approved',
    'notes': 'Owner-authorized batch approval based on AI pre-review',
  }
claim:
  {
    'statement': '《夢粱錄》卷六（直读）：①冬至的岁节地位——「冬至正當小雪大雪氣候…最是冬至嵗節，士庶所重，如送饋節儀及舉杯相慶，祭享宗姻，加於常節」，此日「宰臣以下行朝賀禮…太廟行薦黍之典，朝廷命宰執祀於圜丘」，且「一陽後日晷漸長，比孟月則添一線之功，杜甫詩曰愁日愁隨一線長正謂此也」；②腊日干支定义——「自冬至後戌日數至第三戌便是臘日，謂之君王臘」；③腊月节物链——腊八「大刹等寺俱設五味粥，名曰臘八粥」、二十四「備食餳豆祀竈」、二十五「煮赤豆粥祀食神，名曰人口粥，有猫狗者亦與焉」。',
    'exceptions': [
      '「冬至嵗節…加於常節」是"冬至重于常节"的直接文本，但《梦粱录》未用"冬至大如年"四字——后者出处仍 needs-research',
      '人口粥"不知出於何典"为吴自牧原文自注，如实保留',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立1；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 南宋临安的冬至岁节与腊月链

## 研究问题

"冬至大如年"类流行表述的一手文本根基是什么？冬至-腊日如何衔接？

## 证据（原文与定位）

《夢粱錄》卷六（直读）如 claim；另：太史观云气卜休祥、官放公私僦金三日、雪后"塑雪獅裝雪山"宴集。

## AI 摘要 / 解释

- 本卡提供"冬至=岁节级"的**南宋直读文本**（送节仪、相庆、祭享宗姻"加於常節"+朝贺+圜丘祀），与 [[03_notes/hist-dongzhi-zhouzheng-year-start|周正岁首]]（历法层）、[[03_notes/region-dongzhi-sanmen-jidong|三门祭冬]]（当代实践）构成"历法地位-宋都实践-当代遗存"三层。
- **计时衔接公式**：「冬至後戌日數至第三戌便是臘日（君王腊）」——冬至（节气）作为腊日（干支序列）的起算点，是"节气锚定后续节令"的机制性文本。
- 腊月链（腊八粥→祀灶→人口粥）首次在同卷闭合，冬至-小寒-大寒时段的农历节令序列完整。
- 防幻觉：流行语"冬至大如年"四字**未在本轮任何直读文本中出现**（临安文本作"嵗節…加於常節"），出处继续 needs-research（疑出清人辑述，候选《清嘉录》）。

## 适用条件、例外与分歧

临安个案；占候（观云气）属占验层。

## 关联

[[01_terms/22_冬至|冬至索引]] · [[03_notes/hist-dongzhi-hedong-jiaotian|冬至郊天]] · [[03_notes/hist-laba-zhou-song|腊八粥（岁时广记辑）]] · [[02_topics/customs|民俗维度]]

## 待人工确认

- "冬至大如年"出处专查（清人文献）；腊日三戌说与《说文》腊祭冬至后三戌的对照。

## 修改记录

- 2026-09-25（R35，第二轮）：建卡（梦粱录卷六直读）。
