---
schema_version: '0.1.0'
id: 'idea-hanlu-interaction-sketches'
type: 'InteractionIdea'
title: '寒露互动创意草案（AI 创意，非事实）'
solar_terms: ['hanlu']
season: 'autumn'
dimensions: ['interaction-ideas', 'visual-assets', 'audio-assets']
region: ['面向全球用户的数字体验']
period: null
language: 'zh-CN'
status: 'draft'
epistemic: 'opinion'
confidence: 'unknown'
risk_level: 'low'
impact_level: 'creative'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
claim:
  {
    'statement': '创意提案（非文化事实）：基于已核验的寒露知识节点，可设计"雁行主宾""露的三部曲""双锚时间轴"三类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 寒露互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：雁行主宾 · 两批南迁的可视时间轴

以白露至寒露的雁阵为主角做一个时间轴动画：白露时先到的雁群标为"主"，寒露时后到的标为"宾"（注文原文："鴈以仲秋先至者為主，季秋後至者為賓"），用户拖动时间看雁群分批抵达。依据 [[03_notes/hist-yueling-hanlu-pentads|寒露三候]]（+白露卡对照）。风险红线：主宾分层是古籍注文的解释口径，文案必须标注"古籍注文记载"，不得写成现代鸟类学结论；雁类迁徙的现代观测数据未建卡，不做"验证"式呈现。

## 创意 2：露的三部曲 · 白露—寒露—霜降凝结核

做一个以"露珠"为主体的物态渐进交互：同一株草上的露珠从白露（凝而白）→寒露（寒冷将凝、欲凝未凝的临界颤动）→霜降（凝为霜晶）三个状态滑动切换，配清晨草叶微距视觉。依据 [[03_notes/hist-hanlu-naming|寒露命名]]（+白露命名卡构成三部曲）。风险红线：三段命名是古典观察的语言递进，不是同一天的物理实验；文案避免"气温=露温"的伪定量，温度数据依赖未建（[[02_topics/visual-assets|视觉素材]]为空，露珠素材需授权研究）。

## 创意 3：双锚时间轴 · 寒露与重阳的漂移演示

做一个"太阳锚 vs 月亮锚"的双轨年轮：上轨标寒露（太阳黄经195°，公历10月上旬几乎不动），下轨标重阳（农历九月初九，公历落点逐年漂移），让用户翻年页直观看到两轨的相对漂移与"邻近而非同一日"。依据 [[03_notes/hist-hanlu-chongyang-adjacent|重阳辨析]]（+[[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气]]机制卡）。风险红线：逐年漂移数据需权威历表支撑（紫金山天文台数据源未入库，数据依赖登记为缺口）；演示不得给用户"重阳就是寒露"的暗示，默认文案写明两个日期锚。

## 下一步

- 视觉/声音素材库仍为空（[[02_topics/visual-assets|视觉]]、[[02_topics/audio-assets|声音]]）：雁阵、露珠微距、蟋蟀鸣（促织意象见 [[03_notes/trad-hanlu-customs-food|习俗卡]]）需完成版权与授权研究后方可进入资产层。
- 每条创意进入开发前，走 modules/hanlu 的内容审核流程。

[[01_terms/17_寒露|寒露索引]] · [[02_topics/interaction-ideas|互动创意维度]]
