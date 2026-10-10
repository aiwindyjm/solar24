---
schema_version: '0.1.0'
id: 'idea-dashu-interaction-sketches'
type: 'InteractionIdea'
title: '大暑互动创意草案（AI 创意，非事实）'
solar_terms: ['dashu']
season: 'summer'
dimensions: ['interaction-ideas', 'visual-assets', 'audio-assets']
region: ['面向全球用户的数字体验']
period: null
language: 'zh-CN'
status: 'draft'
epistemic: 'opinion'
confidence: 'unknown'
contested: false
risk_level: 'low'
impact_level: 'term'
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
claim:
  {
    'statement': '创意提案（非文化事实）：基于已核验的大暑知识节点，可设计"腐草为萤双层卡""热在中伏双刻度""送大暑船时间线"三类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 大暑互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：腐草为萤 · 双层知识卡交互

以一候"腐草为萤"做一个可翻面的双层卡片：正面是古籍文本（《月令七十二候集解》"腐草為螢。曰丹良，曰丹鳥……"逐字排版），翻面是现代昆虫学要点（完全变态生活史、发光求偶、栖息地与腐草环境的重叠）。翻面动效为微光萤火从草丛间升起。依据 [[03_notes/hist-yueling-dashu-pentads|大暑三候卡]] + [[03_notes/sci-dashu-firefly-entomology|萤火虫科学解释卡]]。**误导风险**：两面切换必须保留"古籍记载 / 现代科学"的显式标签，不得融合成一个叙事（既不能写成古人已懂昆虫学，也不能把化生说当作可笑错误展示）。

## 创意 2：热在中伏 · 双刻度时间轴

以"节气刻度（黄经105°→120°→135°）×三伏刻度（初伏/中伏/末伏）"双轨时间轴展示大暑：用户拖动日期，看中伏与大暑15天的重叠区，配合"冷在三九，热在中伏"与温湿指数达峰的说明。依据 [[03_notes/sci-dashu-sanfu-zhongfu-heat|大暑与中伏卡]] + [[03_notes/sci-xiaoshu-sanfu-gengday-mechanism|三伏机制卡（跨节气引用）]]。**数据依赖**：逐年三伏与节气日期需权威历表数据源（当前缺口）；文案保留"大多数省会城市温湿指数达峰"的统计限定，不得写成"所有地方最热"。

## 创意 3：送大暑船 · 节气仪式时间线

以台州椒江送大暑船为原型的滚动叙事时间线：四月备料→五月造船→小暑迎圣→请酒→大暑日巡游送船出海，收在"2021年入选国家级非遗"。依据 [[03_notes/region-dashu-taizhou-dashuchuan|送大暑船地域卡]]。**红线**：这是特定地域的活态非遗，视觉呈现必须注明"浙江台州椒江"与当代实践身份，不得泛化为"浙江沿海人人过""全国古俗"；明代退倭传说与灵异叙事不进入体验内容。

## 下一步

- 视觉/声音素材库仍为空（[[02_topics/visual-assets|视觉]]、[[02_topics/audio-assets|声音]]）：萤火（夏夜微光）、雷雨（三候"大雨时行"）等意象需完成版权与授权研究后方可进入资产层；[[03_notes/lit-zengji-dashu-poem|曾几《大暑》]]"螢火亂更深"可作声音场景的文学锚。
- 每条创意进入开发前，走 modules/dashu 的内容审核流程。

[[01_terms/12_大暑|大暑索引]] · [[02_topics/interaction-ideas|互动创意维度]]
