---
schema_version: '0.1.0'
id: 'idea-daxue-interaction-sketches'
type: 'InteractionIdea'
title: '大雪互动创意草案（AI 创意，非事实）'
solar_terms: ['daxue']
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
    'statement': '创意提案（非文化事实）：基于已核验的大雪知识节点，可设计"同词异义开关""雪被保温实验""释义链探案""南北时刻表"四类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 大雪互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：同词异义开关 · "今天的大雪是哪个大雪"

用户在"节气大雪"与"天气预报大雪"之间拨动开关：同一词卡翻转出两套定义（黄经255°的气候时段 vs 24小时降雪量5.0～9.9毫米的强度等级），配"大雪节气当天预报'无雪'"的反直觉实例。依据 [[03_notes/sci-daxue-jieqi-vs-tianqi|节气大雪≠天气大雪]]。风险：避免让用户以为节气错了——文案强调"两套系统各说各事"。

## 创意 2：雪被小实验 · 给麦田盖被子

滑动改变积雪厚度，实时显示地温曲线与开春土壤墒情的变化，把"麦盖三层被"的农谚隐喻变成可操作的隔热机制演示。依据 [[03_notes/sci-daxue-snow-agronomy|积雪农艺机制]]（科学层）+ [[03_notes/trad-daxue-ruixue|农谚层]]。风险：两层必须分屏标注（农谚是经验归纳、机制是现代解释）；"氮化物5倍"未核不得入交互文案。

## 创意 3：释义链探案 · 寒号鸟是谁

以三张"证物卡"（毅鸟注文／机构科普的寒号虫／动物学的复齿鼯鼠）让用户自己发现流行链条的断点（古典注家早就驳过"寒号虫"）。依据 [[03_notes/hist-daxue-hanhaoniao-bianxi|鹖鴠释义流变]]。风险：不得把辨析结论写成定论戏说；复齿鼯鼠形象素材需授权，且明确"这是《辍耕录》寒号虫的现代对应，不是鹖鴠定论"。

## 创意 4：大雪时刻表 · 同一天的中国

横向地图条：同一节气日，北端河面封冻（溜冰场开放）、冬麦区雪被护田、台湾海峡乌鱼汛高峰——三种"大雪的用法"并列，用户点击切换生计场景。依据 [[03_notes/trad-daxue-fenghe|封河卡]]、[[03_notes/sci-daxue-snow-agronomy|农艺机制卡]]、[[03_notes/region-daxue-taiwan-wuyu|乌鱼汛卡]]。风险：地图呈现易诱导"全国同步"错觉——需以"地方经验锚点"而非"普遍现象"标注每个场景。

## 下一步

- 视觉/声音素材库仍为空（[[02_topics/visual-assets|视觉]]、[[02_topics/audio-assets|声音]]）：雪被/寒号鸟/冰场/渔汛图像需完成版权与授权研究后方可进入资产层。
- 每条创意进入开发前，走 modules/daxue 的内容审核流程。

[[01_terms/21_大雪|大雪索引]] · [[02_topics/interaction-ideas|互动创意维度]]
