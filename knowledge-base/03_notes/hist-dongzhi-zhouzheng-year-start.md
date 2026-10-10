---
schema_version: '0.1.0'
id: 'hist-dongzhi-zhouzheng-year-start'
type: 'HistoricalRecord'
title: '周正以含冬至之月为岁首：《史记·历书》"夏正以正月，殷正以十二月，周正以十一月"'
solar_terms: ['dongzhi']
season: 'winter'
dimensions: ['history', 'calendar']
region: ['中国（周代及后世追述的三正体系，属历法制度叙述）']
period: '《史记·历书》为西汉追述；三正（夏正/殷正/周正）为三代历法用月的传统说法'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  ['source-wikisource-shiji-lishu', 'source-xinhuanet-dongzhi-2015', 'source-pmo-almanac-qa']
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
    'statement': '《史记·历书》直读："夏正以正月，殷正以十二月，周正以十一月。蓋三王之正若循環，窮則反本。"——周历以十一月（建子之月，即含冬至之月；《月令七十二候集解》"冬至，十一月中"）为岁首正月。这是"冬至所在月曾被作为一年的起点"的文献根据；现行农历不再以十一月为岁首（正月建寅），但保留"含冬至之月为十一月"的锚定规则。',
    'exceptions': [
      '流行引文"（《史记》）以冬至日，产气始萌"经维基文库全文检索未见于《史记》，本轮无法证实，不得作为史记原文引用——此为本研究的重要防幻觉发现',
      '"三正"为三代历法的传统叙述（夏商周用月不同），周代历法实施细节（是否严格以朔旦冬至为岁首）属历法史专门问题，本轮未核',
      '元稹《咏廿四气诗·冬至十一月中》"周家正立年"句及新华网2015稿"周历以冬至月为正月"释读为机构转引层（维基文库无该组诗页，沿 wave1-2 结论）',
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

# 周正岁首与冬至

## 研究问题

"周人以冬至所在月为岁首"有无可直读的文献根据？"冬至曾是新年"的说法证据几何？

## 证据（原文与定位）

- **直读一手文献**：《史记·历书》（三家注本，[[04_sources/source-wikisource-shiji-lishu|source-wikisource-shiji-lishu]]）："夏正以正月，殷正以十二月，周正以十一月。蓋三王之正若循環，窮則反本。"又同篇"先王之正時也，履端於始"，集解韦昭曰："謂正曆必先稱端始也，若十一月朔旦冬至也。"——以"十一月朔旦冬至"为历法理想端点。
- **直读机构源**：新华网2015稿（[[04_sources/source-xinhuanet-dongzhi-2015|source-xinhuanet-dongzhi-2015]]）："中国古代非常重视冬至，规定有冬至的月为'子月'，是十二地支序的首位"；其元稹诗释读句"'周家'句指周历以冬至月为正月"。
- **直读机构源**：紫金山天文台问答（[[04_sources/source-pmo-almanac-qa|source-pmo-almanac-qa]]）："包含冬至在内的农历月固定为农历十一月"——现代农历仍以冬至锚定月序（机制见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]）。

## AI 摘要 / 解释

- 文献链分层：**《史记·历书》原文（直读）→ 机构释读（"周历以冬至月为正月"）→ 媒体概括（"在上古就是新年、岁首"）**。可确证的核心是"周正以十一月"+冬至为十一月中，两者合成"周历岁首月含冬至"；"冬至曾是全民新年"的节俗叙事不能仅凭三正制度直接推出（制度岁首≠后世民俗年节），后者另有贺冬习俗链（[[03_notes/hist-dongzhi-hedong-jiaotian|贺冬与郊天卡]]）支撑。
- 韦昭注"若十一月朔旦冬至也"显示古历以"朔旦冬至"（初一恰逢冬至）为理想历元——冬至的天文可测性（[[03_notes/sci-dongzhi-shortest-day-year-anchor|日影最长/回归年锚]]）是它成为历法锚的根本原因。

## 适用条件、例外与分歧

- "产气始萌"句查无出处（维基文库全文检索），已在 exceptions 显式否证——同类流行误引（对照 brief 防幻觉样本："雨生百谷"非《月令》原文）。
- 三正的历史真实性（殷历/夏历的实际形态）为学术争议议题，本卡不涉。

## 关联

[[01_terms/22_冬至|冬至索引]] · [[03_notes/sci-dongzhi-shortest-day-year-anchor|白昼最短与回归年锚]] · [[03_notes/hist-dongzhi-hedong-jiaotian|贺冬与郊天]] · [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]] · [[02_topics/history|历史维度]]

## 待人工确认

- 《汉书·律历志》三统历"冬至"历元条直读（升 high 的第二直读方）。
- "产气始萌"句的误引源头考（是否出自《汉书》或纬书佚文）。

## 修改记录

- 2026-09-16（建卡）：史记历书直读建卡；confidence 取 medium（单一古籍直读方+机构释读层），升 high 待《汉书·律历志》第二直读。
