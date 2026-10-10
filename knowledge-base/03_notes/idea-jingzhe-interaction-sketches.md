---
schema_version: '0.1.0'
id: 'idea-jingzhe-interaction-sketches'
type: 'InteractionIdea'
title: '惊蛰互动创意草案（AI 创意，非事实）'
solar_terms: ['jingzhe']
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
    'statement': '创意提案（非文化事实）：基于已研究的惊蛰知识节点，可设计"名称考古""三候时序""初雷时差"三类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 惊蛰互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：名称考古 · "启蛰→惊蛰"时间轴

用户拖动一条从先秦到东汉的时间轴，看同一个节气在文献中的名字与位置变化：《夏小正》"正月启蛰" → 《淮南子》"雷惊蛰（雨水之后）" → 《三统历》惊蛰居正月中 → 《后汉书》恢复二月节。每次变化弹出原文引文卡。依据 [[03_notes/hist-jingzhe-qizhe-renaming|改名公案卡]]。误导风险：避讳动因是学界通说而非一手定案——界面必须显示"通说+待核"标签，防止用户以为看到了"定论史实"。

## 创意 2：三候时序 · 桃花、黄鹂与"化"的叙事

按"桃始华→仓庚鸣→鹰化为鸠"做滚动触发的分层动画：桃花渐开（视觉+花瓣粒子）、黄鹂鸣声渐起（声音）、第三段用"古典转化叙事"特殊视觉语言（如水墨互变）并明确弹出"这是古人的'化'的解释框架，不是生物学"提示。依据 [[03_notes/hist-yueling-jingzhe-pentads|三候卡]]。声音素材需另行研究授权（黄鹂鸣声录音，[[02_topics/audio-assets|声音维度]] 当前为空）。

## 创意 3：初雷时差 · "雷在哪儿"地图

以惊蛰日为基准做一张可交互的初雷日期地图：云南南部（1月底）、长江流域（3月初）、北京（4月下旬）三个已核实坐标点依次点亮雷声，直观破除"惊蛰=全国同日闻雷"误解。依据 [[03_notes/sci-jingzhe-thunder-climate|初雷卡]]。数据依赖：地图上其余地区的初雷日期需要权威气候数据源（当前缺口，只有三个科普稿坐标点，不能内插成"全国初雷地图"）。

## 红线（不做的交互）

- **"打小人"不做游戏化交互**：鹅颈桥打小人是特定地域的活态民俗+商业档摊业态（[[03_notes/region-hkg-ngokengkiu-daxiaoren|region 卡]]），港府明确定位其为商业活动而非节气社会实践正式内容。做成"打小人小游戏"会把他人地域民俗矮化为猎奇玩具，只可在文化解读层以图文严肃呈现。
- 吃梨传说不做"养生功效"类表述（谱系不明，见 [[03_notes/trad-jingzhe-chili-pears|吃梨卡]]）。

## 下一步

- 视觉/声音素材库为空（[[02_topics/visual-assets|视觉]]、[[02_topics/audio-assets|声音]]）：桃花、黄鹂、惊雷相关素材需完成版权与授权研究后方可进入资产层。
- 每条创意进入开发前，走 modules/jingzhe 的内容审核流程。

[[01_terms/03_惊蛰|惊蛰索引]] · [[02_topics/interaction-ideas|互动创意维度]]
