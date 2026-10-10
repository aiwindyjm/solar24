---
schema_version: '0.1.0'
id: 'idea-qiufen-interaction-sketches'
type: 'InteractionIdea'
title: '秋分互动创意草案（AI 创意，非事实）'
solar_terms: ['qiufen']
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
    'statement': '创意提案（非文化事实）：基于已核验的秋分知识节点，可设计"昼夜天平""声收三候""祭月-丰收双层时间轴"三类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 秋分互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：昼夜天平 · 黄经180°半程点

以"半程"为空间隐喻：用户沿黄道环从春分0°走到秋分180°，环上点亮已走的180°；到达秋分时昼夜两个色块在天平两端等长，此后向冬至拖动则夜色块持续加长。依据 [[03_notes/sci-qiufen-longitude-180|秋分黄经定义]] 与 [[03_notes/sci-qiufen-day-night-equal|昼夜均分解释]]。风险：昼夜"均分"是近似（折射偏长），交互文案不得显示"严格12小时整"；与春分模块若共用组件需避免命题复用感。

## 创意 2：声收三候 · 从"雷乃发声"到"雷始收声"

声音向交互：春分模块若已有初雷声音素材，秋分做"收声"对偶——用户滚动三候时间轴（雷始收声→蛰虫坯户→水始涸），环境音从远雷渐弱至寂静、虫鸣藏于土层之下、水面纹理收干。依据 [[03_notes/hist-yueling-qiufen-pentads|秋分三候]]（古典文本，标注"传统物候记载"而非科学观测）与 [[03_notes/hist-yueling-chunfen-pentads|春分三候（对偶）]]。风险：标注《月令》注文出处与"古典经验≠现代观测"提示；声音素材授权是前置条件（[[02_topics/audio-assets|声音维度]] 当前为空）。

## 创意 3：双层时间轴 · 夕月祀典与丰收节

把秋分的"国家时间"做成上下两层轨道：上层为礼制层（礼经坛坎对偶→唐祭文→清会典夕月坛，古籍卡片式节点），下层为现代层（2018年设立丰收节，官方理由三条卡片）。两层在视觉上明确断开，中间标注"不同层：古代礼制/现代国家节日"。依据 [[03_notes/hist-qiufen-xiyue-sacrifice|祭月礼制卡]]、[[03_notes/fact-qiufen-harvest-festival-2018|丰收节卡]]。红线：不得把两层连成"从祭月到丰收节的延续演变"叙事（[[03_notes/interp-qiufen-zhongqiu-origin-narrative|中秋起源叙事辨析]] 同款风险）；月坛相关图像需授权与地称核对（"夕月坛/月坛"双名并存）。

## 下一步

- 视觉素材（月坛、夕月坛图、秋牛图、秋菜）与声音素材（远雷、虫鸣）均无已授权资产，先完成版权研究再进入资产层。
- 每条创意进入开发前，走 modules/qiufen 的内容审核流程。

[[01_terms/16_秋分|秋分索引]] · [[02_topics/interaction-ideas|互动创意维度]]
