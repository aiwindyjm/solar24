---
schema_version: '0.1.0'
id: 'hist-bailu-naming'
type: 'HistoricalRecord'
title: '白露的命名：《月令七十二候集解》"陰氣漸重，露凝而白"与五行释"白"两个层次'
solar_terms: ['bailu']
season: 'autumn'
dimensions: ['history', 'phenology', 'scientific-interpretation']
region: ['文本经验锚定中国（黄河流域为核心的古典文本传统）']
period: '《月令七十二候集解》传统题名元代；《礼记·月令》编定于汉代（月令素材更早）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  ['source-yueling-qishierhou-wikisource', 'source-wikisource-lixia-liji-yueling']
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
    'statement': '《月令七十二候集解》白露定义句为"白露，八月節。秋屬金，金色白，陰氣漸重，露凝而白也"——命名的观察层是"陰氣漸重，露凝而白"（阴气渐重、露水凝结呈白色），"秋屬金，金色白"则是以四时配五行的古典解释层。更早的《礼记·月令》已把"白露降"列为孟秋之月物候："涼風至，白露降，寒蟬鳴。"现代流传达式"水土湿气凝而为露"未见于本轮直读的《月令七十二候集解》原文，不予采信。',
    'exceptions': [
      '五行配属（秋属金、金色白）属古典解释体系，非现象记录，引用时须与观察层分层标注',
      '"白"字来源因此有两解并存：露凝色白（观察描述）与金白之色（五行配属），古籍内部两种逻辑叠在同一句中，不代表现代物理解释',
      '《礼记·月令》"白露降"系于孟秋之月（月份体系），非白露节气（节气体系），粒度不同，不能混引',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 白露的命名（古籍直读）

## 研究问题

"白露"这个名字在古籍原文中如何解释？哪些是观察、哪些是古典解释体系？

## 证据（原文与定位）

1. **已直接读取**：《月令七十二候集解》白露节首句（[[04_sources/source-yueling-qishierhou-wikisource|月令七十二候源]]，维基文库本）：

   > "白露，八月節。秋屬金，金色白，陰氣漸重，露凝而白也。"

   同一句被非遗网白露专题、人民日报海外版、农大稿转引时省略为"八月节……阴气渐重，露凝而白也"（省略号处即"秋屬金，金色白"——五行解释在当代转引中常被略去，但它在原文中与观察句连写）。

2. **已直接读取**：《礼记·月令》孟秋之月（[[04_sources/source-wikisource-lixia-liji-yueling|礼记月令源]]，维基文库本，本代理重读）：

   > "孟秋之月，日在翼，昏建星中，旦畢中。……涼風至，白露降，寒蟬鳴。鷹乃祭鳥，用始行戮。"

## AI 摘要 / 解释

- 命名的**观察层**："陰氣漸重，露凝而白也"——天气转凉（阴气渐重是古典表达）、夜间水汽凝为白色露珠。这一观察与露形成的现代气象解释（辐射冷却、露点凝结，见 [[03_notes/sci-bailu-dew-formation|露的形成机制]]）指向同一现象，但解释框架不同（阴阳之气 vs 辐射冷却），两卡分层互引、不混排。
- 命名的**解释层**："秋屬金，金色白"——四时配五行框架下秋属金、金主白，故以"白"形容秋露。这是古典宇宙论解释，非遗网等机构稿也保留此句并明确标"古人以四时配五行"。
- 《礼记·月令》证明"白露"作为自然现象名（"白露降"）先于节气名存在于月令传统中——先有孟秋见白露的观察，后有以其命名的节气（节气体系定型参见 [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]]）。

## 适用条件、例外与分歧

- 防幻觉警示：任务线索中的命名引文"水土湿氣凝而為露……白者露之色"未在直读原文中出现，本卡不采信；若该句另有出典（待人工考订），须找到原书直读后方可立说。
- "八月節"的"八月"是农历月序标签（白露与农历八月的对应关系随置闰漂移），不是公历8月；节/中气分组机制见共享卡 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气]]。

## 关联

[[01_terms/15_白露|白露索引]] · [[03_notes/hist-yueling-bailu-pentads|白露三候]] · [[03_notes/sci-bailu-dew-formation|露的形成机制]] · [[03_notes/sci-bailu-longitude-165|黄经165°定义]] · [[02_topics/history|历史维度]]

## 待人工确认

- "水土湿气凝而为露"式引文的真实出典考订（若存在）。
- 《吕氏春秋·十二纪》与《礼记·月令》孟秋段的平行文本比对（本轮未读《吕氏春秋》对应卷）。

## 修改记录

- 2026-09-16（第一轮）：建卡。命名句与《礼记·月令》孟秋段均为本轮逐字直读；线索引文与直读原文不符处已在卡内明示。
