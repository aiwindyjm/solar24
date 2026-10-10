---
schema_version: '0.1.0'
id: 'idea-xiazhi-interaction-sketches'
type: 'InteractionIdea'
title: '夏至互动创意草案（AI 创意，非事实）'
solar_terms: ['xiazhi']
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
    'statement': '创意提案（非文化事实）：基于已核验的夏至知识节点，可设计"昼长曲线""真假最对照""夏至面谚语""晷漏对读"四类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 夏至互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：昼长曲线 · 纬度滑杆

以夏至日北半球昼长随纬度变化为交互主轴：用户拖动纬度滑杆（北京≈15小时、漠河≈17小时、北极圈内极昼），看到昼长曲线爬升直至"太阳不落"。依据 [[03_notes/sci-xiazhi-longest-day|昼长极值卡]]（2026年机构数据）。风险：数值为2026年例证，交互须接入逐年/常年数据源，不得把"北京15小时"写成恒定值；文案保持"北半球"限定，避免半球倒灌。

## 创意 2：一个真"最"三个假"最" · 误区对照器

四张卡片式对照："白昼最长（真）／日出最早（假）／日落最晚（假）／全年最热（假）"，展开显示机制（真太阳时 vs 平太阳时；热量收支到处暑）。依据 [[03_notes/sci-xiazhi-longest-day|真假"最"卡]]。风险：机制表述当前仅单一直读源（已在卡内声明），对外呈现前需补独立天文源；避免把"一般最早日出在夏至前"简化成绝对规律。

## 创意 3：夏至面 · 谚语拆字

以《燕京岁时记》"冬至餛飩，夏至麵"京师谚为文本对象：逐字拆开，展示"餛飩→饺子"的传播漂移与"一天短一线"的昼长绑定。依据 [[03_notes/trad-xiazhi-mian|夏至面卡]]。红线：清末北京文献与当代多地面食习俗必须分层呈现，不做"全国吃面"泛化；谚语引用一律用原文"餛飩"并注明今常作"饺子"。

## 创意 4：晷与漏 · 古今计时对读

以韦应物"晝晷已云極，宵漏自此長"为入口：左半屏日晷影子推到极长，右半屏漏刻水位开始转涨，中间横贯黄经90°刻度条。依据 [[03_notes/lit-xiazhi-beichi|韦应物诗卡]] + [[03_notes/sci-xiazhi-longitude-90|黄经定义卡]]。风险：日晷/漏刻形象须避免戏说化（器制说明待考）；诗文本已直读公有领域，可用。

## 下一步

- 视觉/声音素材库仍为空（[[02_topics/visual-assets|视觉]]、[[02_topics/audio-assets|声音]]）：夏至相关图像（方泽坛、蝉、半夏、夏至面）需完成版权与授权研究后方可进入资产层；"蜩始鸣"的声音素材可作夏季音景候选（需授权）。
- 三候动效（鹿角解/蜩始鸣/半夏生）本轮未单列创意：待 [[03_notes/hist-yueling-xiazhi-pentads|三候卡]] 的版本异文（蜩/蝉）审核定稿后再做，避免异文固化进视觉。
- 每条创意进入开发前，走 modules/xiazhi 的内容审核流程。

[[01_terms/10_夏至|夏至索引]] · [[02_topics/interaction-ideas|互动创意维度]]
