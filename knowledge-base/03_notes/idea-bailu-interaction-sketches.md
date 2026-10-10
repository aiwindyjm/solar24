---
schema_version: '0.1.0'
id: 'idea-bailu-interaction-sketches'
type: 'InteractionIdea'
title: '白露互动创意草案（AI 创意，非事实）'
solar_terms: ['bailu']
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
    'statement': '创意提案（非文化事实）：基于已核验的白露知识节点，可设计"露珠晨昏模拟""三候来归方向图""蒹葭三章露态推移"三类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 白露互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：露珠晨昏模拟器 · 一滴露的一生

以时间轴滑块驱动：日落→地面辐射冷却（物体表面温度曲线下降穿过露点）→水汽凝结成露珠逐帧长大→日出升温→露珠蒸发消失。让用户亲手"制造"一次成露，理解"露不是从天降"。依据 [[03_notes/sci-bailu-dew-formation|露的形成机制]]。风险：避免让用户误以为露只出现在白露节气（机制全年通用，白露只是温差拉大后变得常见——文案须写清）；温度曲线数据需气象数据源（当前缺口）。

## 创意 2：三候"来"与"归" · 雁燕方向语义图

以黄河中下游为观察原点的示意地图：白露一候"鸿雁来"（雁自北来南）、二候"玄鸟归"（注文：燕北方之鸟故曰归）、三候"群鸟养羞"（留鸟储食动画）；并置雨水"候雁北"（雁自彭蠡北归）形成一年往返闭环。依据 [[03_notes/hist-yueling-bailu-pentads|白露三候注文]]。红线：注文"玄鸟北归"与现代机构稿"南飞避寒"口径分歧必须并列标注（"古籍注文如此解释/现代稿件如此转述"），不得替用户裁决；示意图是古典文本可视化，不是鸟类学迁徙图（现代观测数据未建卡）。

## 创意 3：蒹葭三章 · 露的三种时刻

滚动触发的水岸场景：三章诗句依次点亮，露的状态从"为霜"（凝白近霜的清晨）→"未晞"（日照未干）→"未已"（将尽未尽）渐变，芦苇、水湄、伊人意象随章推移。依据 [[03_notes/lit-shijing-jianjia|蒹葭直读文本]]。风险：诗中"白露"是先秦物候语汇而非节气名，界面须标注"此诗早于节气体系定型，白露节气后来以此诗入题"的时间方向，防止倒灌。

## 下一步

- 视觉/声音素材库仍为空（[[02_topics/visual-assets|视觉]]、[[02_topics/audio-assets|声音]]）：芦苇/晨露/雁群图像与秋晨声景需完成版权与授权研究后方可进入资产层。
- 每条创意进入开发前，走 modules/bailu 的内容审核流程；文案中涉及的谚语（"白露身不露"等）按传统层标注，不作健康建议表述。

[[01_terms/15_白露|白露索引]] · [[02_topics/interaction-ideas|互动创意维度]]
