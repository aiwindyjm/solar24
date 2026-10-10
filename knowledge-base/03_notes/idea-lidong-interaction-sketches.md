---
schema_version: '0.1.0'
id: 'idea-lidong-interaction-sketches'
type: 'InteractionIdea'
title: '立冬互动创意草案（AI 创意，非事实）'
solar_terms: ['lidong']
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
    'statement': '创意提案（非文化事实）：基于已核验的立冬知识节点，可设计"北郊迎冬方位门厅""水始冰三候动效""两套冬天对照器"三类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 立冬互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：北郊迎冬 · 方位门厅

以四迎礼的空间隐喻做入口：进入立冬模块即"出北郊"——界面以北方、水行、玄色（黑）为视觉母题，太史"某日立冬，盛德在水"作为引导文案。依据 [[03_notes/hist-lidong-yingdong-beijiao|迎冬礼卡]]。红线：这是**礼经与正史所载国家祀典**（非民间节日），呈现须标注文本出处与"祀典层"身份，避免用户理解为"全民过的节"；"賞死事，恤孤寡"环节应保持庄重表述，不做游戏化。

## 创意 2：水始冰 · 三候进程动效

按"水始冰（水面初凝未坚）→ 地始冻（土气凝寒未拆）→ 雉入大水为蜃"做滚动触发的三段动效：水面薄冰纹理渐生（视觉）、土地冻裂纹（视觉）、雉影入水化蛤影的古典转化想象（视觉+文字注）。依据 [[03_notes/hist-yueling-lidong-pentads|立冬三候卡]]。红线：注文自己写"始""未至于堅"——动效应表达**进程开端**而非冰封深冬；第三候是古典博物叙事（化生框架），必须标注"古典文本记载+古人解释"，不得呈现为动物学事实。

## 创意 3：两套冬天 · 入冬日历对照器

"天文冬（黄经225°，全国同刻）vs 气象冬（候温≤10℃，各地异日）"双时间轴：用户选择城市，展示立冬时刻与当地常年入冬日（漠河9月上旬→北京10月28日→石家庄11月7日→南京11月19日→深圳1月21日）的跨度。依据 [[03_notes/sci-lidong-vs-meteorological-winter|两套冬天卡]]。数据依赖：各地常年入冬日期需气象部门权威数据源（当前缺口，仅有媒体转述清单）；文案须防"立冬=冷"暗示。

## 创意 4：藏 · 收纳隐喻小交互

以"冬，終也，萬物收藏也"为概念做"藏"的交互：秋物收仓、水面封藏、虫兽入蛰的收纳动画，扣合秋收冬藏关口（[[03_notes/trad-lidong-nongshi|农事卡]]、[[03_notes/hist-lidong-fangzhi-customs|方志卡]]）。红线：饮食习俗（饺子/补冬）刻意不入交互主线——其地域限定（北方/台闽/南京）在轻交互中极易被泛化误读，若未来加入必须带地域标签（依据 [[03_notes/trad-lidong-budong-jiaozi|食俗卡]] 谱系警示）。

## 下一步

- 视觉/声音素材库仍为空（[[02_topics/visual-assets|视觉]]、[[02_topics/audio-assets|声音]]）：立冬相关图像（北郊、薄冰、雉、菊花）需完成版权与授权研究后方可进入资产层。
- 每条创意进入开发前，走 modules/lidong 的内容审核流程。

[[01_terms/19_立冬|立冬索引]] · [[02_topics/interaction-ideas|互动创意维度]]
