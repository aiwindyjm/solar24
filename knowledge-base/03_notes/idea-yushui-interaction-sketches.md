---
schema_version: '0.1.0'
id: 'idea-yushui-interaction-sketches'
type: 'InteractionIdea'
title: '雨水互动创意草案（AI 创意，非事实）'
solar_terms: ['yushui']
season: 'spring'
dimensions: ['interaction-ideas', 'visual-assets', 'audio-assets']
region: ['面向全球用户的数字体验']
period: null
language: 'zh-CN'
status: 'draft'
epistemic: 'opinion'
confidence: 'unknown'
risk_level: 'medium'
impact_level: 'creative'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
claim:
  {
    'statement': '创意提案（非文化事实）：基于已核验的雨水知识节点，可设计"雪转雨相变""三候水鸟草木""正月中气置闰锚""润物细无声声景"四类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审、内容审核与素材授权'],
  }
---

# 雨水互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：雪转雨 · 相变门厅

以降水形态的渐变为空间隐喻：用户进入雨水模块，天空粒子从雪缓慢过渡为雨，伴随气温刻度回升，直观传达"雨水=由雪转雨、气温回升的时节"。依据 [[03_notes/sci-yushui-rain-transition|由雪转雨卡]]。风险：该命名经验源自黄河流域，需在文案中避免让南方用户误以为"本地冬天一定下雪"。

## 创意 2：三候时间轴 · 水→鸟→草木

按"獭祭鱼→候雁北→草木萌动"做滚动触发的时间轴动画：水獭陈鱼（如祭）、雁阵北归、新芽萌发。依据 [[03_notes/hist-yueling-yushui-pentads|雨水三候卡]]（古典文本，应标注"传统物候记载"而非"科学观测"；注意二候以古籍正文"候雁北"为准、媒体层"鸿雁来"为异文）。声音素材需另行研究授权（[[02_topics/audio-assets|声音维度]] 当前为空）。

## 创意 3：正月中 · 置闰锚点小交互

以"雨水是正月的'中气'"为题做一个小演示：展示农历月序如何由中气"锚定"、无中气之月如何成为闰月（紫金山天文台置闰规则原文即以雨水为例）。依据 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]（共享卡）。红线：机制表述必须复用共享卡口径，本模块不复述、不改写。

## 创意 4：润物细无声 · 春夜声景

以杜甫《春夜喜雨》为脚本的夜间声景页：随风细雨声渐起，"野径云俱黑，江船火独明"的微光画面，结尾"晓看红湿处，花重锦官城"的破晓花影。依据 [[03_notes/lit-dufu-yushui-xiyu|春夜喜雨卡]]。风险：系年与"成都"释义尚未核注本，文案不得添加诗意以外的背景断言；音频需授权或原创。

## 下一步

- 视觉/声音素材库仍为空：雨水相关图像（春雨、雁阵、水獭、古柏拉保保场景）需完成版权与授权研究后方可进入资产层；广汉保保节影像涉及在世人物肖像与地方非遗呈现，另需 consent 评估。
- 每条创意进入开发前，走 modules/yushui 的内容审核流程。

[[01_terms/02_雨水|雨水索引]] · [[02_topics/interaction-ideas|互动创意维度]]
