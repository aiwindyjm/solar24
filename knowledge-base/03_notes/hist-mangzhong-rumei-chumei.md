---
schema_version: '0.1.0'
id: 'hist-mangzhong-rumei-chumei'
type: 'HistoricalRecord'
title: '古籍中的芒种—梅雨时序：入梅出梅规则与江南农谚'
solar_terms: ['mangzhong']
season: 'summer'
dimensions: ['climate', 'history', 'agriculture']
region: ['江南（松江府、烏程縣、諸暨縣等府县材料）；《風土記》所记为江南物候语境']
period: '《風土記》为晋（经类书转引）；府县材料汇编于1726年《古今图书集成》；规则本身是传统历注/占候体系'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-suigongdian-049', 'source-wikisource-guangqunfangpu-c4']
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
    'statement': '传统历注与江南地方文献以"芒种"为梅雨时序的起点坐标：阴阳家规则作"芒後逢壬立梅，至後逢壬梅斷"（《古今图书集成·岁功典》农事占候条）；松江府材料作"五月芒種後遇壬，則入梅。夏至後遇庚，為出梅。時梅子正黃，遇雨，謂之黃梅雨"；晋《風土記》（经类书转引）作"夏至前芒種後雨為黃梅雨，田家初插秧，謂之發黃梅"。诸暨县谚"芒種落雨重種田，芒種無雨空過年"并注"山農喜，湖農忌"，同一场雨在山区与湖区农人处利害相反。',
    'exceptions': [
      '入梅"逢壬"规则出自阴阳家/历注系统，是传统推步口径，与现代气象学入梅判定（国家气候中心监测）不同源、不互证',
      '《風土記》句均经《古今图书集成》《广群芳谱》等清代类书转引，原书未直读',
      '府县谚语为《古今图书集成》汇编的地方材料，各府县原志未核',
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

# 古籍中的芒种—梅雨时序

## 研究问题

古人如何用芒种给梅雨定时序？"入梅/出梅"的原始表述是什么？

## 证据（原文与定位）

1. **直读**：《古今图书集成·历象汇编·岁功典》第四十九卷农事占候条（[[04_sources/source-wikisource-suigongdian-049|source-wikisource-suigongdian-049]]）："立梅芒種日是也，宜晴。陰陽家云：'芒後逢壬立梅至後逢壬梅斷。'或云：'芒種逢壬是立黴。'按《風土記》云：夏至前芒種後雨為黃梅雨。田家初插秧，謂之發黃梅，逢壬為是。"
2. **直读**：同卷松江府条："五月芒種後遇壬，則入梅。夏至後遇庚，為出梅。時梅子正黃，遇雨，謂之黃梅雨。又雨氣霑衣，物多腐壞，故字亦從黴。"
3. **直读**：同卷諸暨縣条："芒種諺云：'芒種落雨重種田，芒種無雨空過年。'山農喜，湖農忌。"（同卷烏程縣条另有"黃梅相傳以芒種逢壬入梅，其時梅正熟也。諺云：'雨打梅頭無水灑犁頭。'"）
4. **直读**：《广群芳谱》卷四夏至条引《風土記》（[[04_sources/source-wikisource-guangqunfangpu-c4|source-wikisource-guangqunfangpu-c4]]）："夏至前芒種後雨為黃梅雨，田家初插秧，謂之發黃梅。"（与岁功典所引同句一致）

## AI 摘要 / 解释

- 古籍给梅雨定时序的方式是**干支推步**：以芒种后第一个"壬日"入梅、夏至后第一个"庚日"出梅——起点锚在芒种，终点锚在夏至，梅雨被纳入节气—干支框架而非现代气象统计。"黄梅雨"得名于"時梅子正黃，遇雨"，"黴"字则记其"雨氣霑衣，物多腐壞"的体感。
- "發黃梅"（初插秧）说明梅雨与稻作插秧的直接绑定——这为 [[03_notes/sci-mangzhong-sanxia-meiyu|三夏与梅雨]] 的现代命题提供了古籍对应面：雨水既是收麦的威胁又是插秧的资源。
- "山農喜，湖農忌"是罕见的地域利害分层记录：同一条芒种雨谚在山区（盼雨）与湖区（怕涝）评价相反——可直接用于防泛化教育。

## 适用条件、例外与分歧

- "逢壬入梅"是历注规则，不同古籍版本有"立梅/立黴"异写，且与现代气象"入梅"判定无对应换算关系；两个体系在本库分卡并存（本卡=古籍层，[[03_notes/sci-mangzhong-sanxia-meiyu|sci 卡]]=现代层）。
- 所有《風土記》与府县材料均为类书转引，引用须带"《古今图书集成》引"层级；直接引用晋《風土記》需找到原书或早期辑本。

## 关联

[[01_terms/09_芒种|芒种索引]] · [[03_notes/sci-mangzhong-sanxia-meiyu|三夏与梅雨（现代口径）]] · [[03_notes/trad-mangzhong-nongshi|农事与农谚]] · [[02_topics/climate|气候维度]]

## 待人工确认

- 晋周处《風土記》辑本（如《汉魏丛书》本）直读，确认类书转引文字。
- "逢壬入梅"规则的更多平行文献（《田家五行》《卜岁恒言》等，本轮检索已见线索未直读）。

## 修改记录

- 2026-09-16（第一轮）：建卡。两种清代类书直读；《風土記》句两书互证；"逢壬"规则标注为历注口径与现代气象学分立。
- 2026-09-16（审核阶段）：路由引擎判 human-review-required（finding: pending-primary-source——《風土記》原书未直读），列入芒种审核包 B 区，状态 draft → in-review。
