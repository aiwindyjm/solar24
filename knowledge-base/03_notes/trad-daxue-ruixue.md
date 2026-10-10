---
schema_version: '0.1.0'
id: 'trad-daxue-ruixue'
type: 'Tradition'
title: '"瑞雪兆丰年"：大雪农谚群（传统经验层）'
solar_terms: ['daxue']
season: 'winter'
dimensions: ['agriculture', 'chinese-life', 'history']
region: ['农谚流传地域：机构页均未逐条标注（黄河流域冬麦区经验为底色，待逐地核验）']
period: '机构汇编层：非遗网2017、光明网2023（学者文）；农谚的口传谱系与文献首出待考'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-ihchina-daxue-feature', 'source-gmw-ruixue-daxue', 'source-weathercn-daxue-2008']
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
    'statement': '"瑞雪兆丰年"与"今年麦盖三层被，来年枕着馒头睡"（又作"冬天麦盖三层被"）是大雪时节流传最广的丰年农谚，三个直读机构页（非遗网2017、中国天气网2008、光明网2023）均有收录并附机制解释；非遗网另收录一组大雪节气预测类农谚（"大雪不冻倒春寒""大雪不寒明年旱""大雪下雪，来年雨不缺""大雪河封住，冬至不行船"等九条），均未标注流传地域与出处。农谚属传统经验归纳层，其气象预测效力未经验证，与科学解释层（积雪农艺机制）分卡分层。',
    'exceptions': [
      '各谚语流传地域未逐条标注——"麦盖三层被"指向冬麦区经验，华南无冬区不适用，引用时不得写成"中国农谚普遍称"',
      '农谚的文献首出（农书/方志收录史）本轮未查，"自古如此"不可写',
      '预测类农谚（倒春寒/明年旱）的验证率无文献，本卡只录谚不背书',
      '非遗网"今年麦盖三层被"与光明网"冬天麦盖三层被"首二字不同，系口传异文，两存',
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

# 瑞雪兆丰年：大雪农谚群（传统经验层）

## 研究问题

大雪时节的农谚说了什么？它们以什么身份进入知识库？

## 证据（机构直读收录）

1. **非遗网大雪专题"农事农谚"节**（[[04_sources/source-ihchina-daxue-feature|source-ihchina-daxue-feature]]，2017）："正所谓'瑞雪兆丰年'，'今年麦盖三层被，来年枕着馒头睡'等农谚所表达的，也是这个含义。"同节另列九条："大雪不冻倒春寒。／大雪纷纷是丰年。／大雪不寒明年旱。／大雪晴天，立春雪多。／大雪不冻，惊蛰不开。／大雪下雪，来年雨不缺。／大雪河封住，冬至不行船。／寒风迎大雪，三九天气暖。／今年的雪水大，明年的麦子好。"（页面自述"大雪节气的寒、暖、风、雪等现象，均对未来的天气有影响，有关这方面的谚语有……"）
2. **光明网学者文**（[[04_sources/source-gmw-ruixue-daxue|source-gmw-ruixue-daxue]]，2023）："瑞雪兆丰年""冬天麦盖三层被，来年枕着馒头睡""大雪兆丰年，无雪要遭殃""腊雪盖地，年岁加倍""雪多见丰年""大雪不寒明年旱""大雪下雪，来年雨不缺""大雪不冻倒春寒"。
3. **中国天气网专题**（[[04_sources/source-weathercn-daxue-2008|source-weathercn-daxue-2008]]，2008）："瑞雪兆丰年"；"今年麦盖三层被，来年枕着馒头睡"。

## AI 摘要 / 解释

- 农谚群分两类：**①丰年归纳类**（瑞雪兆丰年、麦盖三层被、腊雪盖地年岁加倍）——表达积雪与来年收成的正相关经验；**②天气预测类**（大雪不冻倒春寒、大雪不寒明年旱等）——以节气当日征兆预测后续天气。两类性质相同：都是**前工业社会的经验概率归纳**，不是现代气象预报。
- 分层纪律：本卡是 tradition 层。机构页所附的机制解释（保温/增墒/杀虫）已析出至科学解释层 [[03_notes/sci-daxue-snow-agronomy|积雪农艺机制]]，本卡不重复排布科学内容；反过来，科学解释卡不把农谚写成"被科学证实的古代预报"。
- "麦盖三层被"的意象（雪被=棉被）是农谚与科学解释共享的隐喻接口——"被子"既是修辞也是隔热机制的通俗表达，体验设计可用（见 [[03_notes/idea-daxue-interaction-sketches|创意卡]]）。

## 适用条件、例外与分歧

- 机构页对农谚均未标流传地域与出处（非遗网页面自述汇编自网络内容），谱系（农书首出）待考——本卡按"机构汇编收录的口传农谚"对待，confidence medium。
- "大雪纷纷是旱年，造塘修仓莫等闲"（非遗网正文引）与"大雪纷纷是丰年"（同页农谚列表）字面相反——"纷纷"释为雪多还是雪乱、两条是否异文互斥，待考，两存不改写。

## 关联

[[01_terms/21_大雪|大雪索引]] · [[03_notes/sci-daxue-snow-agronomy|科学解释层：积雪农艺机制]] · [[03_notes/trad-daxue-yanrou|腌肉习俗]] · [[02_topics/agriculture|农业维度]] · [[02_topics/chinese-life|中国人的生活]]

## 待人工确认

- 农谚的农书/方志文献首出（《齐民要术》以降的农书检索）与流传地域逐条核验。
- "大雪纷纷是旱年/丰年"两条的异文关系。

## 修改记录

- 2026-09-16（第一轮）：建卡。三机构直读收录互证谚语文本；与科学解释层分卡互链；登记"旱年/丰年"异文与地域缺失两项待考。
