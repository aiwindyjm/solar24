---
schema_version: '0.1.0'
id: 'trad-lichun-yaochun'
type: 'Tradition'
title: '"咬春"：立春食俗的文献证据与南北差异'
solar_terms: ['lichun']
season: 'spring'
dimensions: ['food', 'customs', 'chinese-life']
region: ['文献确证限清末北京（春饼、生萝卜）；"北方春饼/南方春卷"的现代分布为待核验概括']
period: '可确证记载：清末（19世纪）；更早谱系（春盘/五辛盘）待考'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'medium'
contested: false
source_ids:
  [
    'source-wikisource-yanjingsuishiji',
    'source-wikisource-jingchu-suishiji',
    'source-ihchina-lichun-feature',
    'source-bjnews-yaochun',
  ]
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-18'
human_review:
  {
    'reviewer': 'aiwindyjm',
    'reviewed_at': '2026-09-28',
    'decision': 'approved',
    'notes': 'Owner-authorized batch approval based on AI pre-review',
  }
claim:
  {
    'statement': '"咬春"为立春食俗：可确证的文献记载出自《燕京岁时记》"打春"条（清末北京）——"是日富家多食春饼，妇女等多买罗卜而食之，曰咬春，谓可以卻春困也"；六世纪《荆楚岁时记》立春条无食俗记载，"五辛盘"属正月一日条，故"立春吃五辛盘自古如此"的说法缺乏文本支持。',
    'exceptions': [
      '清末北京记载限"富家""妇女"群体，非全民实践',
      '唐宋"春盘"与立春的关系（杜甫诗为旁证）到清末咬春的完整演变链条文献未齐',
      '春卷与春饼的现代南北分布、以及餐饮商业对立春食俗的再包装，均待地域化与古今分层核验（该子命题已从正式 claim 移出，保留于研究正文与本条，2026-09-18 审计 R03）',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=low/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 咬春：立春食俗

## 研究问题

"咬春" earliest 可靠文献记载是什么？春饼/春卷/五辛盘的谱系如何？

## 证据（按证据等级排列）

1. **直读一手文献**：《燕京岁时记》"打春"条（[[04_sources/source-wikisource-yanjingsuishiji|source-wikisource-yanjingsuishiji]]，清末北京）："是日富家多食春餅，婦女等多買羅卜而食之，曰咬春，謂可以卻春困也。"——咬春之名、食物（春饼+生萝卜）、当时解释（却春困）齐备。
2. **直读一手文献**：《荆楚岁时记》立春条（[[04_sources/source-wikisource-jingchu-suishiji|source-wikisource-jingchu-suishiji]]，6世纪）仅有剪彩为燕/帖宜春，**无食俗**；五辛盘在正月一日条——谱系警示（详见 [[03_notes/hist-jingchu-lichun-customs|荆楚立春条卡]]）。
3. **直读机构汇编**：非遗网立春专题（[[04_sources/source-ihchina-lichun-feature|source-ihchina-lichun-feature]]）综述当代咬春食俗（含引《燕京岁时记》与《北平风俗类征》）。
4. 线索级：新京报报道（[[04_sources/source-bjnews-yaochun|source-bjnews-yaochun]]，未读原文）提供"北方春饼/南方春卷"现代分布的流行说法。

## AI 摘要 / 解释

- 谱系结论（当前证据下）：**咬春之名与清末北京实践有直接文献；唐以前立春条目无食俗记载；五辛盘属元日谱系**。把三者捏合成"自古以来的全国立春传统"是现代流行叙事，不是文献事实。
- 唐代春盘（杜甫"春日春盘细生菜"，[[03_notes/lit-dufu-lichun-shimpan|杜甫卡]]，low 待校勘）提示立春食俗在唐代宫廷与士大夫层存在，但"春盘→春饼→春卷"的演变链各环节仍缺直接文献。

## 适用条件、例外与分歧

无跨来源直接冲突；流行叙事与文献证据之间的差距是本卡核心记录点。现代商业营销对立春食俗的再包装（"Modern Popularization"）需专门分辨，未建卡。

## 关联

[[01_terms/01_立春|立春索引]] · [[03_notes/hist-yanjing-dachun-yaochun|燕京岁时记打春条]] · [[03_notes/hist-jingchu-lichun-customs|荆楚立春条]] · [[03_notes/lit-dufu-lichun-shimpan|杜甫春盘]] · [[02_topics/food|饮食维度]]

## 待人工确认

- 《北平风俗类征》相关条目直读；唐宋春盘文献链（《四时宝鉴》等引文核验）。
- "南方春卷"分布的方志级证据；现代 vs 传统的分层表述。

## 修改记录

- 2026-09-18（审计 R03）：正式 claim 收窄——"当代北方春饼/南方春卷分布概括（逐地核验未完成）"从 statement 移入 exceptions 与研究正文：整卡 single human_review 只能对 statement 生效，未核子命题不再占用正式命题位；引用本卡时仅可使用文献确证与谱系警示部分，现代分布表述须另行核证。

- 2026-09-16（证据补强）：新增《燕京岁时记》《荆楚岁时记》两个直读一手来源与非遗网汇编来源，命题由"待核验的流行说法"升级为"清末北京有直接文献+谱系警示"；confidence low→medium。"北方春饼/南方春卷"现代分布仍为待核验概括，保留在新京报线索来源中。
