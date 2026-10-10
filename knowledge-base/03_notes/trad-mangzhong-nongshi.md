---
schema_version: '0.1.0'
id: 'trad-mangzhong-nongshi'
type: 'Tradition'
title: '芒种农事与农谚："芒种芒种，连收带种"与"三夏"口诀'
solar_terms: ['mangzhong']
season: 'summer'
dimensions: ['agriculture', 'chinese-life']
region: ['中国麦稻产区（农谚流传地域未逐一标注；诸暨县谚限浙江）']
period: '当代流传口诀（机构稿汇编）；诸暨县谚为清代类书所收地方谚'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-xinhua-mangzhong-2024', 'source-ihchina-mangzhong-feature', 'source-wikisource-suigongdian-049', 'source-wikisource-suisizuanyao', 'source-wikisource-shoushitongkao']
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
    'statement': '芒种农谚的核心母题是"收与种同节"：新华社2024年稿直读农谚"芒种芒种，连收带种"（另有俗话"春争日，夏争时"）；非遗网专题汇编九条农谚（"芒种忙，麦上场""麦到芒种谷到秋，豆子寒露用镰钩"等）；清代《古今图书集成》收諸暨縣谚"芒種落雨重種田，芒種無雨空過年"（注：山農喜，湖農忌）。农谚属传统经验口诀层，不作科学命题引用。',
    'exceptions': [
      '"芒种芒种"句有异文流传（另有"忙收忙种"等表述见于媒体稿，本轮未逐字直读），引用以新华社稿"连收带种"为准并注明出处',
      '非遗网九条农谚流传地域未逐一标注，不能写成"全国农谚"',
      '农谚的占验内容（如"芒种火烧天，夏至雨涟涟"）是经验性押韵口诀，无气象统计验证，一律标 tradition 层',
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

# 芒种农事与农谚

## 研究问题

芒种农谚的原句是什么？"双抢/三夏"的经验如何被口诀化？

## 证据（按证据等级排列）

1. **直读（机构稿逐字）**：新华社2024年芒种稿（[[04_sources/source-xinhua-mangzhong-2024|source-xinhua-mangzhong-2024]]）：农谚"芒种芒种，连收带种"；俗话"春争日，夏争时"；"有芒的麦子快收，有芒的稻子可种"式释义。
2. **直读（机构汇编逐字）**：非遗网芒种专题农事农谚段（[[04_sources/source-ihchina-mangzhong-feature|source-ihchina-mangzhong-feature]]）："芒种忙，麦上场。""麦到芒种谷到秋，豆子寒露用镰钩，骑着霜降收芋头。""芒种有雨豌豆收，夏至有雨豌豆丢。""芒种火烧天，夏至雨涟涟。""芒种打雷年成好。""芒种刮北风，旱情会发生。""芒种日晴热，夏天多大水。""大旱小旱，不过五月十三。""五月十三，不雨直干。"（流传地域未标）
3. **直读（古籍地方谚）**：《古今图书集成·岁功典》四十九卷諸暨縣条（[[04_sources/source-wikisource-suigongdian-049|source-wikisource-suigongdian-049]]）："芒種落雨重種田，芒種無雨空過年。山農喜，湖農忌。"

- **农书直读环（2026-09-25，R15）**：《四时纂要》五月（直读）：「自芒種即得五月節」；五月条目有「暵麥地」（晒麦地）及種苴麻、種麻良日等——五月上旬麦收晾地与麻类播种的结构，是"芒种收麦种麻"经验的唐末北方农书对应物（口径：唐末北方，非现代全国农事）。

- **农书直读环（2026-09-25，R42·第三阶段）**：梅雨起算第三说（异文登记）：《瑣碎錄》（经卷04辑录，直读）「立夏後逢庚日爲入梅，芒種後逢辰日爲出梅」——出梅干支与《岁时广记》卷二所录"逢壬"说不同，入梅出梅诸说再+1（另见 [[03_notes/hist-meiyu-song-texts|梅雨文本卡]]）。

## AI 摘要 / 解释

- 农谚系统把芒种的农时压力压缩成节奏口诀：**命名即农令**（"连收带种"直接复述 [[03_notes/hist-mangzhong-naming|命名卡]] 的古籍双关）、**收获死线**（"麦到芒种谷到秋"——麦收以芒种为界）、**天气占验**（火烧天/打雷/刮北风各主一占）、**耐心界限**（"大旱小旱，不过五月十三"）。
- "山農喜，湖農忌"与非遗网未标地域的占验谚形成方法论对照：地方谚有明确利害语境，泛传谚无——引用农谚时应优先找得到语境的版本。

## 适用条件、例外与分歧

- 无跨来源冲突；主要风险是**地域匿名化**（把某地农谚写成通用规律）与**占验科学化**（把押韵占验当气候结论）。两条红线已在卡内分层。
- "三夏"（夏收、夏种、夏管）作为现代农事制度术语的推广史（何时成为农业生产惯用语）未考证，本轮只作机构稿用语引用（见 [[03_notes/sci-mangzhong-sanxia-meiyu|sci 卡]]）。

## 关联

[[01_terms/09_芒种|芒种索引]] · [[03_notes/hist-mangzhong-naming|芒种命名]] · [[03_notes/sci-mangzhong-sanxia-meiyu|三夏与梅雨]] · [[03_notes/hist-mangzhong-rumei-chumei|古籍入梅出梅]] · [[02_topics/agriculture|农业维度]]

## 待人工确认

- "芒种芒种，连收带种"异文谱系（连收带种/忙收忙种/样样都忙）与最早收录文献。
- 九条非遗网农谚的分省归属核验（农谚手册/方志数据库）。

## 修改记录

- 2026-09-16（第一轮）：建卡。核心谚句"芒种芒种，连收带种"以新华社稿逐字直读为准；异文风险写入 exceptions。
- 2026-09-25（R15，第二轮·农书层）：新增农书直读环（唐末《四时纂要》逐月条目/北魏《齐民要术》/清《授时通考》辑录，均为其时代与地域口径，非现代全国农事）；source_ids 扩充。
- 2026-09-25（R42，第三阶段）：新增《授时通考》卷04-06辑录农书直读环；source_ids 扩充。
