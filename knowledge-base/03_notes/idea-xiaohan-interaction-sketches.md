---
schema_version: '0.1.0'
id: 'idea-xiaohan-interaction-sketches'
type: 'InteractionIdea'
title: '小寒互动创意草案（AI 创意，非事实）'
solar_terms: ['xiaohan']
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
    'statement': '创意提案（非文化事实）：基于已核验的小寒知识节点，可设计"小寒vs大寒对照""消寒图染瓣""腊八粥拼配"三类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 小寒互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：小寒 vs 大寒 · 名实对照器

以"名字小的反而更冷"为核心反差做对照交互：用户选择省份，展示该省1991-2020年小寒/大寒期间平均气温孰低（23省小寒更冷、8沿海省市区大寒更冷），并并列《月令》"月初寒尚小，故云。月半則大矣"的命名原文——让用户自己发现"命名的尺度是农历月内进程，不是温度计"。依据 [[03_notes/sci-xiaohan-vs-dahan-temperature|气温对照卡]]（high）+ [[03_notes/hist-xiaohan-naming|命名卡]]（high）。风险：逐省数值表未随新闻稿发布，开发前须接入国家气候中心级数据源，不得以新闻稿数字伪造逐省地图；文案不得写成"小寒处处比大寒冷"。

## 创意 2：九九消寒图 · 染瓣计日

以《帝京景物略》"冬至日畫素梅一枝為瓣八十有一日染一瓣瓣盡而九九畢則春深矣"为原型做81瓣素梅染瓣交互：用户从冬至日起每日染一瓣，界面标注当前所处的"九"（一九…九九）与小寒所在区间（通常二九末至三九/四九），三九处设"最冷时节"标记与谚语卡片（"冷在三九""小寒时处二三九"）。依据 [[03_notes/hist-xiaohan-xiaohantu|消寒图卡]]（medium）+ [[03_notes/trad-xiaohan-sanjiu|三九卡]]（medium）。红线：消寒图锚定**冬至**不是小寒——交互入口若放在小寒模块，必须显式标注"数九自冬至起算"（防锚点挪移）；梅花图形素材需授权研究。

## 创意 3：腊八粥 · 日期锚小测

一个轻量的"哪天喝粥？"小测：给用户看"小寒=1月5日或6日""腊八=农历十二月初八"两个日期锚，让用户拖动年份滑杆，观察腊八在公历中的落点逐年漂移、有时落小寒时段有时落大寒时段（如2018年落大寒时段），从而理解"农历节庆×节气"两套锚的独立关系；结尾链接腊八粥古籍配方（燕京岁时记食材单）。依据 [[03_notes/hist-xiaohan-laba|腊八卡]]（high）。风险：逐年日期数据需可靠万年历源；不得出现"腊八就是小寒"的选项暗示。

## 下一步

- 视觉/声音素材库仍为空（[[02_topics/visual-assets|视觉]]、[[02_topics/audio-assets|声音]]）：消寒图素梅、菜饭/糯米饭、雉鹊雁三候鸟图像需完成版权与授权研究后方可进入资产层。
- 每条创意进入开发前，走 modules/xiaohan 的内容审核流程。

[[01_terms/23_小寒|小寒索引]] · [[02_topics/interaction-ideas|互动创意维度]]
