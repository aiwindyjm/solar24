---
schema_version: '0.1.0'
id: 'hist-suisizuanyao-jieqi-zhongqi-pairing'
type: 'HistoricalRecord'
title: '《四时纂要》逐月"节/中气"配对：唐末农书直接使用节气历法框架'
solar_terms: []
season: null
dimensions: ['calendar', 'agriculture']
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
    'statement': '《四时纂要》五卷逐月开篇均以节气定位月序："自立春即得正月節，……雨水為正月中氣""自驚蟄即得二月節……春分為二月中氣"直至"大寒，十二月中氣"，十二对节/中气配对与今一致；并载立表测影实践（"立夏日，立一丈表占影""冬至日，先立一丈表，得影一尺……"）。',
    'exceptions': ['十二月条原文作"自小雪即得十二月節"，与配对通则不符（当为小寒），系原文如此或传抄异文，未擅改'],
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

# 《四时纂要》逐月"节/中气"配对：唐末农书直接使用节气历法框架

## 研究问题

节气/中气的逐月配对在唐末实用文献中是什么形态？

## 证据（原文与定位）

逐字直读（春冬五卷各月，维基文库全本）：
- 正月"自立春即得正月節""雨水為正月中氣"；二月"自驚蟄即得二月節""春分為二月中氣"；三月"自清明即得三月節""穀雨為三月中氣"
- 四月"自立夏即得四月節""小滿，四月中氣"；五月"自芒種即得五月節""夏至，五月中氣"；六月"自小暑即得六月節""大暑，六月中氣"
- 七月"自立秋即得七月節""處暑，七月中氣"；八月"自白露即得八月節""秋分，八月中氣"；九月"自寒露即得九月節""霜降，九月中氣"
- 十月"自立冬即得十月節""小雪為十月中氣"；十一月"自大雪即得十一月節""冬至，十一月中氣"；十二月"大寒，十二月中氣"（该月"節"句作"自小雪"，异文已登记）
- 立表：五月"夏至日次立八尺之表，得影一尺六寸，宜黍"；八月"秋分先立一丈表"（八尺表得影七尺三寸七分，宜麻）；十一月"冬至日，先立一丈表，得影一尺"

## AI 摘要 / 解释

本卡把"节气/中气体系被实际使用"的文献证据从类书（《月令》）扩展到**逐月实用农书**：唐末农书不是引用节气概念，而是直接以"本月节+本月中气"为每卷开篇的编纂单位。与 [[02_shared/sci-solarterms-jieqi-zhongqi|置闰机制卡]]（现代口径）和 [[02_shared/hist-qimin-zhonggu-shixu|齐民要术种谷时序]]（北魏实践）构成"机制—实践—编纂"三点互证。立表测影句为圭表实践在农书层的直接记载。

## 适用条件、例外与分歧

- 地域时代红线：唐末北方农书；占候/阴阳避忌条目属**传统占卜层**（Tradition/Legend 层级），不得当作科学观测或史实断言引用。
- 版本：维基文库本直读；"自小雪即得十二月節"异文如实登记。

## 关联

[[02_shared/README|共享知识]] · [[02_shared/hist-qimin-zhonggu-shixu|齐民要术种谷时序]] · [[02_shared/sci-solarterms-jieqi-zhongqi|节气/中气机制]] · [[02_topics/agriculture|农业维度]]{extra}

## 待人工确认

- 与《四时纂要》辑校本（缪启愉辑校）核对文字与"小雪/小寒"异文。

## 修改记录

- 2026-09-25（R07-R09，第二轮）：建卡，证据为维基文库全本分段逐字直读。
