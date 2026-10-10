---
schema_version: '0.1.0'
id: 'idea-chushu-interaction-sketches'
type: 'InteractionIdea'
title: '处暑互动创意草案（AI 创意，非事实）'
solar_terms: ['chushu']
season: 'autumn'
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
    'statement': '创意提案（非文化事实）：基于已研究的处暑知识节点，可设计"止"的转折交互、三候收获叙事、开渔节时间轴分层三类体验隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 处暑互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1："止"的温度曲线 · 暑气刹车交互

以《月令》"處，止也。暑氣至此而止矣"（依据 [[03_notes/hist-chushu-naming|命名卡]]）为核心隐喻：用户拖动时间轴，看一条"暑热强度曲线"在处暑刻度出现明显转折——但曲线按分区分裂成北方（急降）与南方（回落后再翘起的"秋老虎"尾巴）。依据 [[03_notes/sci-chushu-climate-autumn-transition|气候卡]]。风险：命名宣告止暑与南方气候不同步必须在同一画面呈现，否则会强化"处暑=全国转凉"误解；"秋老虎"为俗语层，UI 文案不得写成气象学术语。

## 创意 2：三候 · 由天到田的收获三联画

按"鹰乃祭鸟→天地始肃→禾乃登"做滚动触发的三联叙事：高空猛禽剪影（天）、草木转肃的色调变化（地）、稻穗低垂成熟（田）。依据 [[03_notes/hist-yueling-chushu-pentads|三候卡]]。红线：第一联的"祭鸟"若做动画，只能呈现"捕猎"的观察层并明确注文"祭"是古人伦理化叙事（卡内 Interpretation 分层），不得做成"鹰在举行仪式"的拟人事实；三候标注"古典物候记载"而非科学观测。

## 创意 3：开渔节 · 三层时间轴对照器

做一个可切换三层的开渔节时间轴：传统层（出海祭海民俗，日期锚多元：谷雨/六月十三/渔汛，依据 [[03_notes/region-chushu-xiangshan-kaiyu|开渔节卡]]）→ 制度层（1995伏季休渔）→ 节庆层（1998开渔节、9月16日开船）。用户滑动可见"处暑"节气标尺仅与第三层时段交叠而非绑定。依据同卡。红线：这是防止"处暑自古有开渔节"倒灌的关键交互——三层必须同屏对照，缺一层都会造成错误归因；伏休制度年份表述以直读源为准。

## 下一步

- 视觉/声音素材库仍空（[[02_topics/visual-assets|视觉]]、[[02_topics/audio-assets|声音]]）：猛禽剪影、稻穗、渔港开船影像均需版权与授权研究后方可进入资产层。
- 每条创意进入开发前，走 modules/chushu 的内容审核流程。

[[01_terms/14_处暑|处暑索引]] · [[02_topics/interaction-ideas|互动创意维度]]
