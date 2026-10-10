---
schema_version: '0.1.0'
id: 'lit-shuangjiang-dumu-shanxing'
type: 'CulturalFact'
title: '杜牧《山行》："霜叶红于二月花"——深秋经霜之叶的物候感知（非霜降节气专咏）'
solar_terms: ['shuangjiang']
season: 'autumn'
dimensions: ['literature-art', 'phenology']
region: ['中国']
period: '唐（杜牧，803-852）；文本载体：樊川文集外集、万首唐人绝句、古今合璧事类备要（页面标注）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-shuangjiang-shanxing']
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
    'statement': '杜牧（唐，803-852）七绝《山行》全诗为"遠上寒山石徑斜，白雲生處有人家。停車坐愛楓林晚，霜葉紅於二月花。"（维基文库作品页直读；"白雲生處"句另有《古今合璧事類備要》及《古今事文類聚》作"白雲深處"的异文）。该诗咏深秋寒山枫林经霜之叶，是"霜叶"物候感知与霜降时节赏红叶文化最常被引用的文学文本，但诗中并无"霜降"节气字面——它是深秋物候诗，不是节气诗；将其直接标注为"霜降诗"属于节气挪用，应表述为"写霜降前后经霜红叶物候的唐诗"。',
    'exceptions': [
      '仅单页直读（维基文库），未与《千家诗》通行印本或《樊川文集》原书页核对；系年与作地未核',
      '页面标注三种收录书目为维基文库编辑信息，书目层待印本核对',
    ],
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

# 杜牧《山行》与霜叶物候

## 研究问题

哪一首诗是霜降时节"霜叶/红叶"文化最可靠的文学样本？它与节气的关系应如何表述？

## 证据（原文与定位）

已直接读取维基文库作品页（[[04_sources/source-wikisource-shuangjiang-shanxing|source-wikisource-shuangjiang-shanxing]]）：

> "遠上寒山石徑斜，白雲生處有人家。停車坐愛楓林晚，霜葉紅於二月花。"
> 页脚注："白雲生處：《古今合璧事類備要》及《古今事文類聚》均作「白雲深處」"

页面标注：七言绝句，收录于《樊川文集（四部叢刊本）/外集一卷》《萬首唐人絶句（四庫全書本）/七言卷26》《古今合璧事類備要（四庫全書本）/别集卷52》，公有领域；分类含"詠秋詩"。

## AI 摘要 / 解释

- 为什么适合作为霜降的文学样本：末句"霜葉紅於二月花"把**经霜之叶**设为深秋之美的核心意象——"霜"在此是叶子变红的环境条件（低温/温差促使叶色变化，见 [[03_notes/trad-shuangjiang-customs|香山红叶的机制段]]），诗人以"红于二月花"完成秋对春的反转，这是霜降赏红叶文化最常引用的句子（非遗网霜降专题页图3图题即用"霜叶红于二月花"）。
- 边界（本卡核心）："寒山""霜葉"指向晚秋物候，但诗题《山行》与全诗无任何节气历法信息；霜降在农历九月中、公历10月下旬，与"枫林晚"的深秋时窗重合，属**时物候重合而非节气指称**。引用规范：写"深秋经霜红叶"的物候诗，不写"霜降节气诗"。
- 同题补充线索：新华社2021霜降特稿以《诗经·蒹葭》"蒹葭苍苍，白露为霜"概括白露—寒露—霜降三节气的水形态递进（[[04_sources/source-xinhua-shuangjiang-2021|直读]]），是机构层"霜降选诗"的另一路径；元稹《咏廿四气诗》霜降诗维基文库无页（前波次已确认组诗不在库），记 Needs Research。

## 适用条件、例外与分歧

- 文本主体无分歧；异文一处（生處/深處）已登记。单页直读、未校印本，confidence 按 medium。
- 诗与本节气的绑定只能是"物候窗口重合+文化引用层"双重弱绑定，任何"杜牧写霜降"表述都会越界。

## 关联

[[01_terms/18_霜降|霜降索引]] · [[03_notes/trad-shuangjiang-customs|霜降习俗（香山红叶）]] · [[03_notes/sci-shuangjiang-frost-formation|霜的形成机制]] · [[02_topics/literature-art|文学艺术]]

## 待人工确认

- 与《千家诗》《樊川文集》印本核对正文与异文；系年考订。
- 元稹《咏廿四气诗·霜降九月中》可靠文本（点校本/图书馆途径）。

## 修改记录

- 2026-09-16（第一轮）：建卡。全诗逐字直读+异文登记；"物候重合而非节气诗"的边界写入 claim；组诗备选按 wave 情报记 Needs Research。
