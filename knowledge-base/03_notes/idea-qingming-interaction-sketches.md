---
schema_version: '0.1.0'
id: 'idea-qingming-interaction-sketches'
type: 'InteractionIdea'
title: '清明互动创意草案（AI 创意，非事实）'
solar_terms: ['qingming']
season: 'spring'
dimensions: ['interaction-ideas', 'visual-assets', 'audio-assets']
region: ['面向全球用户的数字体验']
period: null
language: 'zh-CN'
status: 'draft'
epistemic: 'opinion'
confidence: 'unknown'
contested: false
risk_level: 'low'
impact_level: 'creative'
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
claim:
  {
    'statement': '创意提案（非文化事实）：基于已核验的清明知识节点，可设计"黄经15°交节日历""雨纷纷·气候对照""寒食→清明融合时间线"三类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 清明互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：黄经 15° · 交节三日历

以"4月4日/5日/6日"三张日历签为入口：用户拖动太阳沿黄道从春分0°走到15°，交节时刻落进哪一天即翻出哪张签，直观解释"清明为何三天浮动、由紫金山天文台编算发布"。依据 [[03_notes/sci-qingming-longitude-15|清明天文定义]]。风险：避免暗示"每年必是4月5日"；避免把节气时刻等同于天气变化。

## 创意 2：雨纷纷 · 南北气候对照器

以杜牧诗句为题，让用户选择"江南/华北/西北"角色卡：江南出示春雨概率统计（长沙、南昌1951-2010年清明降水超30次），北方出示"干燥多风、沙尘时段"的另一面——破除"清明=全国下雨"的单调想象。依据 [[03_notes/sci-qingming-jiangnan-rain|江南春雨卡]]、[[03_notes/lit-dumu-qingming|杜牧《清明》]]。红线：统计口径（清明节当天、部分省会城市）必须随图注明，不得做成逐市预报。

## 创意 3：寒食→清明 · 融合时间线

可拖动的时间轴，五个证据锚点：六世纪"去冬节一百五日……禁火三日"（荆楚岁时记）→ 662年诏已见寒食上墓 → 732年敕"編入禮典" → 唐代假宁令"寒食通清明四日" → 清末"清明即寒食"（燕京岁时记）→ 当代2006年国家级非遗/2008年法定假日。每个锚点弹出来自古籍的直读原文截图式卡片。依据 [[03_notes/hist-qingming-hanshi-merger|融合史卡]]、[[03_notes/region-qingming-national-ich|非遗项目卡]]。红线：介子推故事只能以"传说"标签出现（六世纪注者已辨正史无据）；时间轴上宋元明段必须显示为"证据留白"，不得用插画脑补。

## 下一步

- 视觉/声音素材库为空（[[02_topics/visual-assets|视觉]]、[[02_topics/audio-assets|声音]]）：杏花、柳圈、青团、纸鸢等图像需版权与授权研究后方可进入资产层。
- 每条创意进入开发前，走 modules/qingming 的内容审核流程。

[[01_terms/05_清明|清明索引]] · [[02_topics/interaction-ideas|互动创意维度]]
