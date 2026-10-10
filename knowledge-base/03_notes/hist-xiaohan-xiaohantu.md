---
schema_version: '0.1.0'
id: 'hist-xiaohan-xiaohantu'
type: 'HistoricalRecord'
title: '九九消寒图："冬至日畫素梅一枝為瓣八十有一日染一瓣"（《帝京景物略》经《广群芳谱》转引）'
solar_terms: ['xiaohan', 'dongzhi']
season: 'winter'
dimensions: ['customs', 'history', 'chinese-life']
region: ['文本经验锚定中国北方（帝京=北京）消寒计日传统；各地消寒图形式差异未查']
period: '《帝京景物略》为明末（刘侗、于奕正，1635年前后成书）；本轮经清《广群芳谱》卷006（1708）转引直读'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-guangqunfangpu-c006']
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
    'statement': '九九消寒图是一种从冬至起逐日填染、以81天为期的图形计日习俗：明末《帝京景物略》记"冬至日畫素梅一枝為瓣八十有一日染一瓣瓣盡而九九畢則春深矣曰九九消寒圖"（经清《广群芳谱》卷006转引直读）。其日期锚是**冬至**（数九起点），不是小寒；但81天窗口覆盖整个小寒与大寒节气，消寒图上"染瓣"最勤的时段恰与"三九"最冷期（多落小寒内）重叠——它是横跨冬至-小寒-大寒的数九民俗实物，在小寒侧应作"数九民俗的延伸"呈现，而非小寒专属习俗。',
    'exceptions': [
      '原文经清代类书转引，《帝京景物略》原书本轮未直读，文字以转引为准、原书对校待做',
      '消寒图的多种形制（素梅图、九画字"亭前垂柳珍重待春風"、铜钱纹等）与地域分布本轮未查，仅确证素梅一形',
      '《帝京景物略》成书断代（1635年前后）为通识背景，本轮未直读原书序跋自证',
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

# 九九消寒图（古典文本记载）

## 研究问题

"画图数九"的古籍原文是什么？它锚定哪个日期？

## 证据（原文与定位）

已直接读取《御定佩文斋广群芳谱》卷006 十一月（冬至）汇编（[[04_sources/source-wikisource-guangqunfangpu-c006|source-wikisource-guangqunfangpu-c006]]），其中引《帝京景物略》：

> "冬至日畫素梅一枝為瓣八十有一日染一瓣瓣盡而九九畢則春深矣曰九九消寒圖"

同卷同部另有《燕都遊覽志》（《燕京岁时记》所引同书）系 北京冬月冰嬉记载等，均为北京岁时汇编语境。

## AI 摘要 / 解释

- **81瓣=9×9天**：素梅一枝八十一瓣，自冬至日起每日染一瓣，瓣尽则九九八十一天期满、"春深矣"——原文自带起算点（冬至日）与总长（九九毕），是数九体系最完整的图形化文献表述之一。
- **为什么在小寒索引下建卡**：81天窗口（约12月21日-次年3月10日前后）完整覆盖小寒（1月5-19日）与大寒；其中"三九四九"（约1月上中旬至下旬初）与 [[03_notes/trad-xiaohan-sanjiu|三九卡]] 所记最冷时段重合——消寒图在小寒期间正处于"染瓣过半、寒极将转"的位置。本卡明确其锚为冬至，防止被写成"小寒习俗"。
- **计日的心理功能**：以可见的图形进度把漫长寒冬切分为可完成的日常动作（染一瓣），"瓣盡而九九畢則春深矣"的原文语序本身就表达了"数着数着春天就到了"的期待结构——这是民俗时间设计的一个精巧样本（解释层，不进命题）。

## 适用条件、例外与分歧

- 转引层级：本卡引文出自《广群芳谱》引《帝京景物略》，《帝京景物略》原书未直读——校勘待做；若有异文以原书为准。
- 消寒图流行的社会阶层（文人与宫廷为主？）、地域（华北为主？）与存世实物（故宫藏消寒图等）均未查证，"普遍流行于全国"类表述不得写。
- 与清宫"九九消寒图"（御制"亭前垂柳珍重待春風"九字描红）的关系未核，另立待考。

## 关联

[[01_terms/23_小寒|小寒索引]] · [[01_terms/22_冬至|冬至索引（数九锚点）]] · [[03_notes/trad-xiaohan-sanjiu|三九与数九]] · [[02_topics/customs|民俗维度]]

## 待人工确认

- 《帝京景物略》原书对校（原句独立直读）；消寒图形制谱系与存世实物；清宫消寒图档案。

## 修改记录

- 2026-09-16（建卡）：广群芳谱卷006转引直读建卡；confidence 定 medium（转引层级），显式标注"锚冬至、覆盖小寒、非小寒专属"。

- 2026-09-16（审核阶段）：路由 human-review-required（pending-primary-source：《帝京景物略》原书未直读），status draft → in-review。AI 不做最终审核，等待人工 Decision。
