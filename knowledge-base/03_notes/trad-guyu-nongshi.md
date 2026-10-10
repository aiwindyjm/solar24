---
schema_version: '0.1.0'
id: 'trad-guyu-nongshi'
type: 'Tradition'
title: '谷雨农事："播种移苗、埯瓜点豆"的春播窗口与农谚群'
solar_terms: ['guyu']
season: 'spring'
dimensions: ['agriculture', 'chinese-life', 'climate']
region: ['中国农区（机构汇编口径；农谚流传地域未逐一标明）']
period: '农谚为传统积累（断代不明）；表述载体为当代机构/媒体汇编'
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
    'statement': '非遗网谷雨专题农事段："古人说‘雨生百谷’，这是播种移苗、埯瓜点豆的最佳时节。俗话说‘清明断雪，谷雨断霜’，谷雨节气天气温和，降雨增多，适量的雨水有利于越冬作物的返青拔节和春播作物的播种出苗"；并录农谚群："谷雨种棉家家忙""谷雨有雨棉花肥""谷雨时节种谷天，南坡北洼忙种棉""谷雨栽上红薯秧，一棵能收一大筐""谷雨前后栽地瓜，最好不要过立夏"等（流传地域未逐一标明）。新华社2022年稿对应表述为"此时节，降水日增，秧苗初插，作物新种，春茶采摘"。农谚属传统经验（tradition 层），不作为现代农业技术或气候规律的科学表述。',
    'exceptions': [
      '农谚的适用地域与作物结构（棉、薯、谷）对应传统农区，现代农业条件下按谚行事的实际范围未核验',
      '"清明断雪，谷雨断霜"是经验性农谚而非气象学断言（晚霜终止日的气候学统计未查）',
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

# 谷雨农事与农谚（tradition 层）

## 研究问题

谷雨在传统农事时间序中的功能是什么？农谚证据的边界在哪里？

## 证据（原文与定位）

1. **机构汇编直读**：非遗网谷雨专题"农事农谚"节（[[04_sources/source-ihchina-guyu-feature|source-ihchina-guyu-feature]]）：定义句（"播种移苗、埯瓜点豆的最佳时节"）、"清明断雪，谷雨断霜"、越冬作物返青拔节与春播作物播种出苗的雨量关系（含"雨水过量或严重干旱，会对作物造成危害"的反向提示）、农谚群十余条。
2. **媒体直读**：新华社2022年稿（[[04_sources/source-xinhua-guyu-2022|source-xinhua-guyu-2022]]）："此时节，降水日增，秧苗初插，作物新种，春茶采摘。"

## AI 摘要 / 解释

- 谷雨在农事序中的位置：**春播中段的行动窗口**——秧苗初插/移苗、瓜豆棉薯下种，与命名的"播种自上而下"（[[03_notes/hist-guyu-naming-yushengbaigu|命名卡]]）和三候的"趨農急矣"（[[03_notes/hist-yueling-guyu-pentads|三候卡]]）三层互证，构成谷雨"农事节气"的核心叙事链。
- 农谚按 tradition 层引用（"谷雨前后，种瓜种豆"式的经验规则），不得写成现代农业指南；棉、薯等作物的谚群本身携带传统农区结构信息，是农业史素材而非当代种植建议。
- "清明断雪，谷雨断霜"的气候学解释（寒潮频率、终霜期统计）属科学维度，本轮无数据源，未建卡——见 Needs Research。

## 适用条件、例外与分歧

无跨来源冲突。粒度警示：农谚未标地域，"南坡北洼"式表述是谚语内部的地方性想象，不代表已核验的适用范围。

## 关联

[[01_terms/06_谷雨|谷雨索引]] · [[03_notes/sci-guyu-rain-sowing-window|降雨与春播窗口（sci）]] · [[03_notes/hist-guyu-naming-yushengbaigu|命名卡]] · [[03_notes/hist-yueling-guyu-pentads|三候卡]] · [[02_topics/agriculture|农业维度]]

## 待人工确认

- 农谚的地域谱系（分省农谚汇编/《中国农谚》类文献直读）；"谷雨断霜"与气象终霜期统计的对照。

## 修改记录

- 2026-09-16（第一轮）：建卡。农事窗口两源直读；农谚显式标注 tradition 层与地域未标明。
