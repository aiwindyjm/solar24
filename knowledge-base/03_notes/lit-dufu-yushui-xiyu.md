---
schema_version: '0.1.0'
id: 'lit-dufu-yushui-xiyu'
type: 'CulturalFact'
title: '杜甫《春夜喜雨》："好雨知时节"的春雨名篇'
solar_terms: ['yushui']
season: 'spring'
dimensions: ['literature-art']
region: ['中国']
period: '唐（作者杜甫，712-770）；作品页未载创作系年'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-chunye-xiyu']
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
    'statement': '杜甫五律《春夜喜雨》全诗为"好雨知時節，當春乃發生。隨風潛入夜，潤物細無聲。野徑雲俱黑，江船火獨明。曉看紅溼處，花重錦官城。"（"乃"一作"及"）收录于《全唐诗·卷226》与《千家诗》；诗题与首联直接以"当春之雨"为主题，末句出现地名"锦官城"。维基文库作品页未提供创作年份与写作背景信息，系年待考。',
    'exceptions': ['"锦官城"通常释为成都别称，但该释义与"作于成都春夜"的系年叙述均不在本轮直读的页面信息内，引用前需核对注本'],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=low/B/独立1；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 杜甫《春夜喜雨》

## 研究问题

哪一首诗是雨水节气"春雨"主题最可靠的文学样本？文本证据是什么？

## 证据（原文与定位）

已直接读取维基文库作品页（[[04_sources/source-wikisource-chunye-xiyu|source-wikisource-chunye-xiyu]]）：

> "好雨知時節，當春乃發生。隨風潛入夜，潤物細無聲。野徑雲俱黑，江船火獨明。曉看紅溼處，花重錦官城。"

页面标注：五言律诗，作者杜甫（唐）；收录于《千家诗》，姊妹项目链接《全唐诗·卷226》；夹注一处："當春"一作"及"；公有领域。

## AI 摘要 / 解释

- 为什么适合作为雨水节气的文学样本：首联"好雨知時節，當春乃發生"把**降雨与时节的对位**写成诗眼——"知时节"的雨正是"雨水"命名逻辑（应时而降的春雨）的文学表达；"潤物細無聲"已成为汉语形容春雨滋养的标准意象。
- 观察结构（夜雨之"潜"—云黑船明之视觉—晓看花重之结果）是一种完整的物候叙事：从过程到验证，与七十二候"以自然信号定时"的认知方式同构。
- **边界**：诗写"当春"夜雨而非"雨水节气"本身（诗内无节气名）；其与雨水的关联是主题关联（早春应时之雨），不是节气诗（对比元稹《咏廿四气诗》组诗的直咏体，该组诗本轮未直读、待后续节气研究建立来源）。系年与写作地（流行叙述多系于成都草堂时期）不在直读页面信息内，未写入本卡事实。

## 适用条件、例外与分歧

文本无分歧（直读+收录信息明确）；异文一处（乃/及）已注明。系年、作地、是否写于成都春夜——全部待注本核验后再补。

## 关联

[[01_terms/02_雨水|雨水索引]] · [[03_notes/hist-yueling-yushui-pentads|雨水三候]] · [[03_notes/sci-yushui-rain-transition|由雪转雨]] · [[02_topics/literature-art|文学艺术]]

## 待人工确认

- 与《全唐诗》《杜诗详注》（中华书局）核对文本与系年（上元二年成都说）后再用于对外内容。
- "锦官城=成都"的注本出处。

## 修改记录

- 2026-09-16（建卡）：维基文库作品页直读全文；系年/作地信息页面未载，如实留空并写入 exceptions。
