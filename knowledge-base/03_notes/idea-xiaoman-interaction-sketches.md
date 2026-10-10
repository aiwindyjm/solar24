---
schema_version: '0.1.0'
id: 'idea-xiaoman-interaction-sketches'
type: 'InteractionIdea'
title: '小满互动创意草案（AI 创意，非事实）'
solar_terms: ['xiaoman']
season: 'summer'
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
    'statement': '创意提案（非文化事实）：基于已核验的小满知识节点，可设计"麦粒进度条""动三车机关""为何无大满两层翻牌"三类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 小满互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：麦粒进度条 · "小得盈满"可视化

把灌浆过程做成一粒麦子的截面进度条：小满时节籽粒乳汁状、半饱（约 60% 视觉量），到芒种前全熟——用户拖动时间轴看胚乳从清水状→乳状→蜡状的变化。依据 [[03_notes/sci-xiaoman-grainfill-dryhotwind|灌浆与干热风卡]]、[[03_notes/hist-xiaoman-naming-xiaodeyingman|命名卡]]。风险：①灌浆各阶段的百分比是视觉隐喻，不是农学数据，文案须标"示意"；②避免让用户以为"小满=50%成熟"的精确对应（命名是"小得盈满"的形容，非度量）。

## 创意 2：动三车机关 · 水车/油车/丝车三联互动

三台古农机的小交互：踩水车引水入田、推油车榨菜籽、摇丝车缫茧抽丝，各完成一次解锁"三夏大忙"图景。依据 [[03_notes/hist-gjts-xiaoman-sanche|动三车古籍锚点]]（清代类书·嘉兴）、[[03_notes/trad-xiaoman-sanche-customs|习俗层记录]]。红线：①出处与地域标注为"清代文献记载的江南（嘉兴一带）农事"，不得写成全国性古俗；②"祭车神/白龙"传说元素若使用，必须带"相传"标识（依据卡为机构汇编层）。

## 创意 3："为何无大满"两层翻牌

一屏翻牌交互：正面是**事实层**——二十四节气序列图（小暑对大暑/小雪对大雪/小寒对大寒，小满的配对位是空的，后接芒种）；翻面是**阐释层**——"人生最好是小满"的现代解读引文（2015媒体/2024学者访谈，注明年代与身份）。依据 [[03_notes/hist-xiaoman-naming-xiaodeyingman|命名卡]]、[[03_notes/interp-xiaoman-modern-philosophy|现代阐释卡]]。红线：两层**物理隔离**（翻牌前后），绝不允许在同一屏把现代哲学写成古人智慧；这是本节气最重要的防倒灌设计。

## 下一步

- 视觉/声音素材库为空（[[02_topics/visual-assets|视觉]]、[[02_topics/audio-assets|声音]]）：麦穗、水车/丝车图像、蚕茧、缫丝声、水车声需完成版权与授权研究后方可进入资产层。
- 每条创意进入开发前，走 modules/xiaoman 的内容审核流程。

[[01_terms/08_小满|小满索引]] · [[02_topics/interaction-ideas|互动创意维度]]
