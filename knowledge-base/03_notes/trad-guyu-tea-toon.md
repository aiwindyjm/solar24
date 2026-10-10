---
schema_version: '0.1.0'
id: 'trad-guyu-tea-toon'
type: 'Tradition'
title: '谷雨茶与食香椿："南方摘茶、北方食香椿"的习俗表述及其证据边界'
solar_terms: ['guyu']
season: 'spring'
dimensions: ['food', 'customs', 'chinese-life']
region: ['机构表述为"南方"（摘茶）与"北方"（食香椿）；未逐省核验，具体茶区（如江南/西南）待地域化研究']
period: '当代机构汇编表述；历史谱系（"雨前茶"术语何时定型）未建文献链'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-ihchina-guyu-feature', 'source-xinhua-guyu-2022']
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
    'statement': '据非遗网谷雨专题页："南方有谷雨摘茶的习俗"，谷雨时节采制的春茶称谷雨茶/雨前茶，有一芽一嫩叶称"旗枪"、一芽两嫩叶称"雀舌"的品级区分，页面并录"真正的谷雨茶是谷雨这天采的鲜茶叶做的干茶，而且要上午采的，茶农一般留下自用或招待贵客"之说；同页："北方有谷雨食香椿的习俗"，有"雨前香椿嫩如丝"之说。新华社2022年稿亦以"春茶采摘"概括此时节农事。地域均只到"南方/北方"粒度，未逐省核验；页面所录"喝了会清火、辟邪、明目"为民间说法（传说层），香椿"提高免疫力、抗菌消炎"等功效表述为页面养生文案（未经医学来源核验），均不作事实引用。',
    'exceptions': [
      '"南方/北方"为机构汇编的粗粒度地域表述，茶区分布与香椿食俗的实际地理范围未核验',
      '"谷雨茶"术语与采制实践的历史文献（明清茶书是否言及雨前茶）本轮未直读，现代商业语境对"谷雨茶"的再包装未研究',
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

# 谷雨茶与食香椿（习俗/饮食）

## 研究问题

谷雨的饮食习俗有什么可靠的当代表述？粒度和分层边界在哪里？

## 证据（原文与定位）

1. **机构汇编直读**：非遗网谷雨专题"谷雨茶"条（[[04_sources/source-ihchina-guyu-feature|source-ihchina-guyu-feature]]）："南方有谷雨摘茶的习俗。谷雨茶也就是雨前茶，是谷雨时节采制的春茶。……传说谷雨这天的茶喝了会清火、辟邪、明目。……一芽一嫩叶的茶称为'旗枪'，一芽两嫩叶的称为'雀舌'……据茶农介绍，真正的谷雨茶是谷雨这天采的鲜茶叶做的干茶，而且要上午采的，茶农一般留下自用或招待贵客。"
2. **机构汇编直读**：同页"食香椿"条："谷雨前后香椿上市，北方有谷雨食香椿的习俗。……有'雨前香椿嫩如丝'之说。"
3. **媒体直读**：新华社2022年稿（[[04_sources/source-xinhua-guyu-2022|source-xinhua-guyu-2022]]）以"春茶采摘"列入谷雨时节农事，与茶俗互证。

## AI 摘要 / 解释

- 证据结构：习俗存在性=机构/媒体两源一致（medium）；内部细节（旗枪/雀舌、上午采、自用待客）=单源转述"据茶农介绍"，按俗说引用。
- 分层警示：同一页面里"清火、辟邪、明目"是**民间说法**（页面自用"传说"一词）、香椿功效是**养生文案**——引用时必须留在俗说/养生语境，不得转成事实陈述（本卡 claim 已作隔离）。
- "雨前茶"商业概念（vs 明前茶）与现代茶叶营销的互动是 Modern Popularization 课题，未建卡。

## 适用条件、例外与分歧

无跨来源冲突。主要风险是粒度泛化："南方摘茶"不得写成"中国人都喝谷雨茶"；茶区（江南龙井语境的"雨前"与该术语在其他茶区的适用性）待地域化研究。

## 关联

[[01_terms/06_谷雨|谷雨索引]] · [[03_notes/trad-guyu-nongshi|谷雨农事与农谚]] · [[03_notes/lit-guyu-yuanzhen|元稹谷雨诗（"喧风引麦葶"农景）]] · [[02_topics/food|饮食维度]]

## 待人工确认

- "雨前茶"术语的茶书源头（明代茶书直读）；谷雨茶习俗的省域样本（湖南/江西/浙江等地民俗志）。

## 修改记录

- 2026-09-16（第一轮）：建卡。习俗存在性两源；功效与辟邪表述显式隔离为俗说。
- 2026-09-16（审核阶段）：路由引擎报 pending-primary-source（"雨前茶"明清茶书文献链未直读）→ human-review-required，status draft → in-review，列入 [[07_research/sections/review-guyu|谷雨审核分节]] B 区。
