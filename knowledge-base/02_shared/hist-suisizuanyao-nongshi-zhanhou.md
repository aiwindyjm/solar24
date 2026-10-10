---
schema_version: '0.1.0'
id: 'hist-suisizuanyao-nongshi-zhanhou'
type: 'HistoricalRecord'
title: '《四时纂要》的农事-占候-节令混编结构（含七夕乞巧、腊日庭燎原文）'
solar_terms: []
season: null
dimensions: ['agriculture', 'customs', 'history']
region: ['中国北方（唐末成书，宋初刊行）']
period: '唐末（10世纪初）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'system'
contested: false
source_ids: ['source-wikisource-suisizuanyao']
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
    'statement': '《四时纂要》每月卷由三类内容混编：农事操作（正月至十二月从耕地、种谷、造酱到腊酒）、阴阳占候避忌（朔日占、立春雨伤五禾、占风占雨）、节令习俗（七月七日乞巧、腊日祀灶、岁除庭燎守岁）——节气知识在其中同时承担农时指令与择日禁忌双重功能。',
    'exceptions': ['占候类条目属传统占卜层；"朔日立冬，雨血，地生毛"等怪异占文只作文本事实收录'],
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

# 《四时纂要》的农事-占候-节令混编结构（含七夕乞巧、腊日庭燎原文）

## 研究问题

节气知识在唐末逐月文献中承担哪些功能？

## 证据（原文与定位）

逐字直读（维基文库全本）：
- 农事例：二月"種穀、種大豆、區種法"；八月"種大麥、種小麥、漬麥種"；九月"收五穀種、備冬藏"；十二月"造臘酒、造醬"
- 占候例：正月"立春雨，傷五禾""朔日立春，民不安"；五月"朔夏至，米大貴"；十一月"朔日冬至，朔日蝕……並年飢，有疾，有災，凶""冬至後一日得壬，炎旱千里"（逐日占壬）
- 节令例：七月"七日乞巧"条首句"是夕於家庭內設筵席，伺河鼓、織女二星見天河中有奕奕白氣光明五色者，便拜，乞貴子"；十二月腊日条"臘日取水一石，置不津器中"、庭燎条"歲除夜，積柴於庭，燎火，辟災而助陽氣"、除夜条"除夜四更，取麻子、小豆各二七粒……投井中"
- 逸文引《歲時廣記》："梅熟而雨曰梅雨。"（四月）

## AI 摘要 / 解释

功能分层对 Solar24 的价值：同一部书里"农时指令（fact层）／择日占候（tradition层）／节令仪式（custom层）"三类知识并存——这是向国际用户解释"节气是知识体系**及其实践**"时最好的结构样本：不只指导种田，也组织信仰与家庭仪式。七夕乞巧条同时是七夕节俗的唐末一手文本（供未来"邻近节令"维度引用）。

## 适用条件、例外与分歧

- 地域时代红线：唐末北方农书；占候/阴阳避忌条目属**传统占卜层**（Tradition/Legend 层级），不得当作科学观测或史实断言引用。
- 版本：维基文库本直读；"自小雪即得十二月節"异文如实登记。

## 关联

[[02_shared/README|共享知识]] · [[02_shared/hist-qimin-zhonggu-shixu|齐民要术种谷时序]] · [[02_shared/sci-solarterms-jieqi-zhongqi|节气/中气机制]] · [[02_topics/agriculture|农业维度]]{extra}

## 待人工确认

- 与《四时纂要》辑校本（缪启愉辑校）核对文字与"小雪/小寒"异文。

## 修改记录

- 2026-09-25（R07-R09，第二轮）：建卡，证据为维基文库全本分段逐字直读。
