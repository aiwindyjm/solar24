---
schema_version: '0.1.0'
id: 'idea-lichun-interaction-sketches'
type: 'InteractionIdea'
title: '立春互动创意草案（AI 创意，非事实）'
solar_terms: ['lichun']
season: 'spring'
dimensions: ['interaction-ideas', 'visual-assets', 'audio-assets']
region: ['面向全球用户的数字体验']
period: null
language: 'zh-CN'
status: 'draft'
epistemic: 'opinion'
confidence: 'unknown'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
claim:
  {
    'statement': '创意提案（非文化事实）：基于已核验的立春知识节点，可设计"黄经315°""三候解冻""鞭春劝农"三类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 立春互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：黄经 315° · 太阳位置门厅

以黄道环为空间隐喻：用户进入立春模块即站在黄经 315° 刻度上，可拖动太阳沿黄道运行，感受"节气=太阳位置刻度"而非天气。依据 [[03_notes/sci-lichun-longitude-315|立春天文定义]]。风险：避免让用户误以为节气时刻=日出日落变化（需文案校准）。

## 创意 2：三候解冻 · 分层解冻动效

按"东风解冻→蛰虫始振→鱼陟负冰"的顺序做滚动/时间轴触发的分层动画：冰面开裂（视觉）、土壤下虫鸣渐起（声音）、鱼影上浮近冰层（视觉）。依据 [[03_notes/hist-yueling-lichun-pentads|立春三候]]（古典文本，应标注"传统物候记载"而非"科学观测"）。声音素材需另行研究授权（[[02_topics/audio-assets|声音维度]] 当前为空）。

## 创意 3：鞭春牛 · 劝农小交互

以九华立春祭"扮芒神鞭打春牛"为原型设计轻交互（如击打土牛、春牛破土出春芽），引导用户理解"迎春=劝农耕的开始"。依据 [[03_notes/region-jiuhua-lichun-ji|九华立春祭]]。红线：这是特定地域的活态非遗仪式，视觉呈现应注明地域与当代实践身份，避免泛化为"全国古俗"。

## 创意 4：两套春天 · 概念对照器

做一个"天文春 vs 气象春"的对照小工具：用户选择所在城市，展示立春时刻与当地常年气象入春日的差值，直观破除"立春=天气变暖"误解。依据 [[03_notes/sci-lichun-vs-meteorological-spring|立春与气象入春]]。数据依赖：各地常年入春日期需要可靠气象数据源（当前缺口）。

## 下一步

- 视觉/声音素材库仍为空（[[02_topics/visual-assets|视觉]]、[[02_topics/audio-assets|声音]]）：立春相关图像（春牛、句芒、春盘）需完成版权与授权研究后方可进入资产层。
- 每条创意进入开发前，走 modules/lichun 的内容审核流程。

[[01_terms/01_立春|立春索引]] · [[02_topics/interaction-ideas|互动创意维度]]
