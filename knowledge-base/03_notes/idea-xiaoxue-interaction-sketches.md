---
schema_version: '0.1.0'
id: 'idea-xiaoxue-interaction-sketches'
type: 'InteractionIdea'
title: '小雪互动创意草案（AI 创意，非事实）'
solar_terms: ['xiaoxue']
season: 'winter'
dimensions: ['interaction-ideas', 'visual-assets', 'audio-assets']
region: ['面向全球用户的数字体验']
period: null
language: 'zh-CN'
status: 'draft'
epistemic: 'opinion'
confidence: 'unknown'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
claim:
  {
    'statement': '创意提案（非文化事实）：基于已核验的小雪知识节点，可设计"虹的年历""节气名≠天气预报""南北腌藏地图"三类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 小雪互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：虹的年历 · "虹始见"到"虹藏不见"

以彩虹为小雪模块的视觉主角：一条横跨全年的"虹可见窗口"时间轴，从清明"虹始见"点亮，到小雪"虹藏不见"缓缓隐没（两端各配古籍原文直读片段）。依据 [[03_notes/hist-yueling-xiaoxue-pentads|小雪三候]]（含与清明"虹始见"的同书对偶）。误导风险：必须标注这是古典物候文本经验，不是现代气象观测规律（现代彩虹可见性取决于降水与光照，各地差异大——此对照数据当前无来源，不做成实时/统计功能）；注文中的阴阳理论属古典解释体系，呈现时与现象记录分层。

## 创意 2：节气名≠天气预报 · "今天会下雪吗？"

做一个轻交互澄清器：用户在小雪页面看到"小雪=雪还不大"的命名解释后，交互问"那么今天会下雪吗？"——答案是"不一定：节气名说的是气候趋势，不是当日天气预报"，配新华社口径的环流机制一句话与南北同日差异（东北封冻/江南初冬/华南少雪）。依据 [[03_notes/sci-xiaoxue-not-necessarily-snow|小雪≠必然降雪]]、[[03_notes/hist-xiaoxue-naming|命名卡]]。误导风险：避免让用户觉得节气"失灵"或"不科学"——叙事重点是两套概念（天文刻度 vs 天气事件）的分层，不是否定节气。

## 创意 3：南北腌藏地图 · "冬腊风腌"的地域分镜

以"储与聚"为主题的分地域卡片流：南京腌菜谚语、（江苏仪征）"寒菜"清人记载（标注"转引级"）、杭州酱鸭腊肉、北方大白菜深沟储藏、台湾嘉义晒鱼干、土家族刨汤——每个条目显式标注地域与证据层级（机构汇编层）。依据 [[03_notes/trad-xiaoxue-pickling-curing|腌藏习俗]]、[[03_notes/trad-xiaoxue-winter-customs|糍粑/晒鱼干/刨汤]]。红线：严禁合并为"中国人小雪腌肉"的全国叙事；页面需提示现代冰箱/电商已改变实践形态（新华社2022稿有电商语境句），避免怀旧化。

## 下一步

- 视觉/声音素材库为空（[[02_topics/visual-assets|视觉]]、[[02_topics/audio-assets|声音]]）：初雪、腌腊、糍粑图像与雪落声均需版权与授权研究后方可进入资产层。
- 每条创意进入开发前，走 modules/xiaoxue 的内容审核流程；引用古籍句一律用已直读文本并注版本。

[[01_terms/20_小雪|小雪索引]] · [[02_topics/interaction-ideas|互动创意维度]]
