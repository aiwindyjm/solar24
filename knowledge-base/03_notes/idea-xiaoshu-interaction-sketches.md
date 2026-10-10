---
schema_version: '0.1.0'
id: 'idea-xiaoshu-interaction-sketches'
type: 'InteractionIdea'
title: '小暑互动创意草案（AI 创意，非事实）'
solar_terms: ['xiaoshu']
season: 'summer'
dimensions: ['interaction-ideas', 'visual-assets', 'audio-assets']
region: ['面向全球用户的数字体验']
period: null
language: 'zh-CN'
status: 'draft'
epistemic: 'opinion'
confidence: 'unknown'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
risk_level: 'low'
impact_level: 'term'
claim:
  {
    'statement': '创意提案（非文化事实）：基于已核验的小暑知识节点，可设计"三庚入伏推演""三候热风分层""三轨时间轴""蒸笼体感"四类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 小暑互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：三庚入伏 · 庚日推演器

以干支环（六十甲子）为空间隐喻：用户拖动时间轴，从当年夏至起逐个点亮"庚日"，数到第三个庚日即"入伏"，直观呈现"夏至三庚数头伏"的干支计日机制与入伏日期逐年漂移（2022年7月16日/2023年7月11日/2024年7月15日三个已核验实例可做对照）。依据 [[03_notes/sci-xiaoshu-sanfu-gengday-mechanism|三伏机制卡]]。红线：必须显式标注"三伏不是节气、入伏日不等于最热日"；"入伏总落小暑节气内"在卡内为实例+机制推算层级，文案不得写成铁律。

## 创意 2：三候热风 · 分层盛夏动效

按"温风至→蟋蟀居壁→鹰始击"做滚动触发的分层动画：风中热浪粒子（视觉）、蟋蟀移向墙根鸣声渐起（声音）、鹰影升空盘旋（视觉）。依据 [[03_notes/hist-yueling-xiaoshu-pentads|小暑三候卡]]（古典文本，须标注"传统物候记载"而非科学观测）。特色机会：做一个**异文切换器**（居壁/居宇、始击/始鸷），让用户亲眼看到古籍传本的文字差异——把校勘学变成可玩体验。声音素材授权另行研究（[[02_topics/audio-assets|声音维度]] 为空）。

## 创意 3：三轨时间轴 · 小暑为什么这么挤

小暑前后是"三重时间系统叠加"的时段：太阳黄经刻度（小暑105°）+ 干支计日（初伏）+ 农历重日（六月六）。做一个三轨并行时间轴，用户选择年份，看三条轨上的事件（交节/入伏/六月六）如何靠近或错开。依据 [[03_notes/sci-xiaoshu-sanfu-gengday-mechanism|三伏机制]]、[[03_notes/hist-xiaoshu-liuyueliu-sunning|六月六晾晒]]。风险：农历/干支的换算复杂度需防错；六月六习俗证据限清末北京与徐州，呈现须带地域标签。

## 创意 4：上蒸下煮 · 湿热体感隐喻

以"蒸笼"为核心视觉（对应《释名》"暑，煮也，热如煮物也"）：温度与湿度两个滑杆联动蒸笼内景（蒸汽密度、水珠、食物状态），表达"暑=湿热交蒸"区别于干热。依据 [[03_notes/sci-xiaoshu-climate-heat-humid|气候卡]]、[[03_notes/trad-xiaoshu-nongshi|农谚卡]]。风险：体感描述须避免全国泛化（气候卡证据以南方为主）；不得把"三伏大热冬必多雨雪"类占验谚语做成"预测"功能。

## 下一步

- 视觉/声音素材库为空（[[02_topics/visual-assets|视觉]]、[[02_topics/audio-assets|声音]]）：蒸笼、蟋蟀、鹰、庚日环等图像需完成版权与授权研究后方可进入资产层。
- 每条创意进入开发前，走 modules/xiaoshu 的内容审核流程（本节气模块状态 Planned，见 [[01_terms/11_小暑|小暑索引]]）。

[[01_terms/11_小暑|小暑索引]] · [[02_topics/interaction-ideas|互动创意维度]]
