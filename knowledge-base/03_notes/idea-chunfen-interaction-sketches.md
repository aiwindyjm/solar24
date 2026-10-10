---
schema_version: '0.1.0'
id: 'idea-chunfen-interaction-sketches'
type: 'InteractionIdea'
title: '春分互动创意草案（AI 创意，非事实）'
solar_terms: ['chunfen']
season: 'spring'
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
    'statement': '创意提案（非文化事实）：基于已核验的春分知识节点，可设计"黄经0°原点""昼夜天平""三候天空剧场"三类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 春分互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：黄经 0° 原点 · 黄道坐标系门厅

春分是二十四节气黄经刻度的**原点**（0°起算）——这与立春（315°）形成互补叙事：立春是序列之首，春分是坐标之零。可设计"黄道尺子"交互：用户从春分点出发沿黄道拖动太阳，每15°点亮一个节气，直观建立"节气=太阳位置"的心智模型。依据 [[03_notes/sci-chunfen-longitude-0|春分黄经定义]]。风险：需向用户说明"立春是第一个节气"与"春分是黄经0°"并不矛盾（起算点≠序列首位），文案要防止混淆。

## 创意 2：昼夜天平 · 近似与真实的双盘

以天平隐喻昼夜均分：两盘中放"白昼"与"黑夜"，默认平衡；切换"折射修正"开关后天平微微倾斜、显示北京实例（白昼12时8分/黑夜11时52分）。依据 [[03_notes/sci-chunfen-day-night-equal|昼夜均分解释]]。风险：必须标注"昼夜平分是理论说法"的来源口径，防止用户把"近似相等"误解为"完全不相等"。

## 创意 3：三候天空剧场 · 燕至、雷鸣、电闪

按"元鸟至→雷乃发声→始电"做滚动触发的天空动画：燕群飞入（视觉）、初雷（声音）、闪电（视觉）。依据 [[03_notes/hist-yueling-chunfen-pentads|月令三候]]（古典文本，应标注"传统物候记载"而非现代观测）；"燕飞犹个个"诗句（[[03_notes/lit-xuxuan-chunfenri|徐铉《春分日》]]）可作字幕层。风险：注文中的阴阳解释属古典解释体系，动效文案不得将其写成气象学成因；雷声素材需授权研究（[[02_topics/audio-assets|声音维度]] 当前为空）。

## 创意 4（备选）：竖蛋挑战 · 带诚实标签的平衡游戏

以竖蛋为原型的物理小游戏（重心/接触点提示），但界面须明确标注：竖蛋是现代流行的春分趣味习俗，起源说法未获文献证实，"春分更易竖蛋"无科学依据。依据 [[03_notes/trad-chunfen-shudan|竖蛋专卡]]。红线：游戏文案绝不能写成"4000年古俗"或"春分日更容易竖"。

## 下一步

- 视觉/声音素材库仍为空：日坛、燕子、春牛图、药市图像需完成版权与授权研究后方可进入资产层。
- 每条创意进入开发前，走 modules/chunfen 的内容审核流程。

[[01_terms/04_春分|春分索引]] · [[02_topics/interaction-ideas|互动创意维度]]
