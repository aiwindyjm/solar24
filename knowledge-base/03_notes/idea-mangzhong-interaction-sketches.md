---
schema_version: '0.1.0'
id: 'idea-mangzhong-interaction-sketches'
type: 'InteractionIdea'
title: '芒种互动创意草案（AI 创意，非事实）'
solar_terms: ['mangzhong']
season: 'summer'
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
    'statement': '创意提案（非文化事实）：基于已核验的芒种知识节点，可设计"收与种的赛跑""三候声音渐隐""饯花神（文学场景）"三类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 芒种互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：收与种的赛跑 · 双任务计时交互

以芒种"麦收要赶在梅雨前、插秧要赶在夏至前"的双任务结构为机制隐喻：用户在同一屏同时操作"收"（滑动割麦）与"种"（点击插秧），倒计时是逼近的雨云（依据 [[03_notes/sci-mangzhong-sanxia-meiyu|三夏与梅雨]]、[[03_notes/hist-mangzhong-naming|命名卡]]的"麦始可收、稻过不可种"）。风险：避免把占验农谚做成"预测游戏"（农谚属 tradition 层，见 [[03_notes/trad-mangzhong-nongshi|农谚卡]]）；气候机制表述需文案校准，不得写成"芒种必下雨"。

## 创意 2：三候声音渐隐 · "反舌无声"声音设计

以三候为声音时间轴：螳螂破壳（细碎沙沙）→ 伯劳始鸣（清亮鸟鸣）→ 反舌无声（众鸟声渐次退场，只留环境声）（依据 [[03_notes/hist-yueling-mangzhong-pentads|芒种三候]]，古典文本，标注"传统物候记载"而非科学观测）。"声音的消失"是罕见的声音设计母题，也自然衔接 [[02_topics/audio-assets|声音维度]] 的空白。风险：三候候名用字必须用"鵙"并附注音（非遗网页"鹏"为讹字）；不得把"反舌无声"解释为现代鸟类行为规律。

## 创意 3：饯花神 · 文学场景化页面

以《红楼梦》第二十七回文本为唯一依据做一个"文学场景"页：满园彩线系花枝的视觉意象 + 原文段落呈现，明确标注"18世纪小说描写，此俗今已不存"（依据 [[03_notes/hist-mangzhong-jianhuashen|饯花神卡]]）。红线：不得复原式呈现为"清代风俗体验"、不得与安苗等地方习俗混排成"芒种民俗大观"；素材授权与视觉呈现需经内容审核。

## 下一步

- 视觉/声音素材库仍为空（[[02_topics/visual-assets|视觉]]、[[02_topics/audio-assets|声音]]）：麦田、梅雨、伯劳鸣声等素材需完成版权与授权研究。
- 每条创意进入开发前，走 modules/mangzhong 的内容审核流程。

[[01_terms/09_芒种|芒种索引]] · [[02_topics/interaction-ideas|互动创意维度]]
