---
schema_version: '0.1.0'
id: 'hist-yueling-liqiu-pentads'
type: 'HistoricalRecord'
title: '《月令七十二候集解》立秋三候：凉风至、白露降、寒蝉鸣'
solar_terms: ['liqiu']
season: 'autumn'
dimensions: ['phenology', 'history', 'ecology']
region: ['文本经验锚定中国（黄河流域为核心的古典物候传统）；实际物候因纬度海拔而异']
period: '文本传统题名为元代（吴澄）；所承物候体系更早（《礼记·月令》等）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  ['source-yueling-qishierhou-wikisource', 'source-wikisource-liji-yueling', 'source-ihchina-liqiu-feature']
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
    'statement': '《月令七十二候集解》将立秋列为七月节，定义句为"立秋，七月節。立字解見春。秋，揫也。物于此而揫斂也"，并以五日为一候记立秋三候：一候涼風至、二候白露降、三候寒蟬鳴（各带注文）。"揫敛"（收敛、聚集）是该文本对立秋的核心定义。《礼记·月令》孟秋之月同记"涼風至，白露降，寒蟬鳴"，为其更早平行记载。',
    'exceptions': [
      '"立字解見春"指"立"字定义见立春条（"立，建始也……立夏、秋、冬同"），本条不重复释义——四立命名逻辑互证见立春卡',
      '"涼風至"注文中夹注"禮記作盲風至"，而直读《礼记·月令》孟秋条实作"涼風至"、"盲風至"在其仲秋条——夹注所据《礼记》版本或篇次与通行本有出入，异文待校勘',
      '七十二候所述物候是古典文本经验，不等于当代中国各地的实际物候观测',
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

# 立秋三候（古典文本记载）

## 研究问题

传统文献如何描述立秋时节的自然变化？"三候"体系的原始文本是什么？"秋，揫也"的定义如何理解？

## 证据（原文与定位）

已直接读取维基文库《月令七十二候集解》立秋节全文（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]）：

> 定义："立秋，七月節。立字解見春。秋，揫也。物于此而揫斂也。"
> 一候："涼風至〈【禮記作盲風至】〉。西方淒清之風曰涼風，溫變而涼氣始肅也。《周語》曰火見而清風戒寒是也。"
> 二候："白露降。大雨之後，清涼風來，而天氣下降，茫茫而白者，尚未凝珠，故曰白露。降示秋金之白色也。"
> 三候："寒蟬鳴。寒蟬，《爾雅》曰寒螿，蟬小而青紫者。馬氏曰：物生于暑者，其聲變之矣。"

已直接读取《礼记·月令》孟秋之月条（[[04_sources/source-wikisource-liji-yueling|source-wikisource-liji-yueling]]）："涼風至，白露降，寒蟬鳴。鷹乃祭鳥，用始行戮。"

已直接读取非遗网立秋专题（[[04_sources/source-ihchina-liqiu-feature|source-ihchina-liqiu-feature]]）引文："根据《月令七十二候集解》所记：'七月节，立字解见春。秋，揫也，物于此而揫敛也。'立秋三候为：'初候凉风至，二候白露降，三候寒蝉鸣'。"——与维基文库原书逐字一致。

紧随其后即处暑节（"處暑，七月中。處，止也。暑氣至此而止矣"）。

## AI 摘要 / 解释

- 三候构成一个连贯的入秋叙事：**风向转凉（风）→ 晨露初白（水汽）→ 寒蝉变声（动物）**，观察对象为气、水、虫三类可直接目验的自然信号；与立春三候（解冻/虫振/鱼陟）恰成镜像——春三候言"解与动"，秋三候言"肃与敛"。
- "秋，揫也。物于此而揫斂也"：揫敛即收敛、聚集，指天地之气由夏之发散转为收敛，万物开始向成熟收藏过渡——与三候"凉气始肃"同一框架。
- 注文引《周语》"火見而清風戒寒"、以"秋金之白色"释白露，属**古典解释体系（Interpretation）**，与现象记录分层引用（五行框架不复述，见共享卡 [[02_shared/hist-solarterms-pentad-system|七十二候体系]]）。
- "寒蟬鳴"注引马氏"物生于暑者，其聲變之矣"：生于暑天的蝉至立秋声调改变——古人对声音物候的观察与刘翰诗"睡起秋聲無覓處"（[[03_notes/lit-liuhan-liqiu|刘翰卡]]）同一线索。

## 适用条件、例外与分歧

- **异文（待校勘）**：月令集解"涼風至"夹注称"禮記作盲風至"，而直读《礼记·月令》孟秋条作"涼風至"、仲秋条作"盲風至"——夹注与通行本《礼记》不一致，或出传本系统差异，待人工比对（中华书局点校本/四库本）。
- 七十二候与二十四节气是相关但**不同粒度**的体系（24×3=72），定型过程归共享卡；本卡只记立秋单点文本。
- 当代物候验证（蝉鸣期、初凉风日期的现代观测）完全缺失，是 climate/ecology 维度的重要后续课题。

## 关联

[[01_terms/13_立秋|立秋索引]] · [[03_notes/hist-yueling-lichun-pentads|立春三候（"立，建始也"四立命名互证）]] · [[03_notes/lit-liuhan-liqiu|刘翰《立秋》]] · [[02_topics/phenology|物候维度]]

## 待人工确认

- "盲風至"夹注异文的版本校勘；《逸周书·时训解》立秋条平行记载直读。
- 现代物候观测对照（寒蝉鸣期、白露初现日的当代数据）。

## 修改记录

- 2026-09-16（第一轮建库）：建卡。月令集解维基文库直读（逐字含注文）+《礼记·月令》直读平行记载 + 非遗网引文核对三方一致；夹注异文作为 exception 显式登记。
