---
schema_version: '0.1.0'
id: 'idea-dongzhi-interaction-sketches'
type: 'InteractionIdea'
title: '冬至互动创意草案（AI 创意，非事实）'
solar_terms: ['dongzhi']
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
    'statement': '创意提案（非文化事实）：基于已核验的冬至知识节点，可设计"数九倒计时""白昼最短的天平""一阳生物候转折"三类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 冬至互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：数九消寒图 · 八十一瓣倒计时

以《帝京景物略》素梅染瓣为原型做数字消寒图：冬至日起每日点亮/染红一瓣（或一笔描红），每过一九瓣成一丛，九九八十一日尽则"春深矣"——把"冬至交节即数九"的民俗计时器变成用户的每日仪式。依据 [[03_notes/trad-dongzhi-shijiu-xiaohantu|数九与消寒图卡]]。风险：数九歌存在多版本（明版与今通行版用词不同），界面文案不得只录一版而标"古歌原文"；"庭前垂柳珍重待春風"描红式为机构层记载，若采用须标注来源层级。

## 创意 2：白昼最短的天平 · 极值与滞后对照器

冬至模块首页做一个"白昼时长天平/曲线"：拖动时间轴看本城市白昼时长在冬至触底、其后逐日回升，再叠加"1月才是最冷"的经验层，直观破除"冬至=最冷"误解。依据 [[03_notes/sci-dongzhi-shortest-day-year-anchor|白昼最短与回归年锚卡]]（日影最长、岁实365.2422天）、[[03_notes/sci-dongzhi-longitude-270|黄经270°定义卡]]。数据依赖：各纬度城市白昼时长/日出日落数据源（当前缺口）；与夏至模块的"最长白昼"页面对偶呈现（[[03_notes/sci-xiazhi-longest-day|夏至卡]]同族交互）。

## 创意 3：一阳生 · 三候转折动画

按"蚯蚓结（阴之极）→麋角解（阳始感）→水泉动（一阳生）"的顺序做滚动触发的分层动画：冻土蜷结的蚯蚓（近景）→ 麋角脱落（中景）→ 冰下泉水初动（远景+声音设计），讲"终藏之气至此而极"与"一阳生"的转折叙事。依据 [[03_notes/hist-yueling-dongzhi-pentads|冬至三候卡]]。红线：三候是古典文本经验非现代观测，动画须标注"传统物候记载"；"六阴寒极""一阳初生"是古典阴阳解释框架，不得作为科学解说词。

## 创意 4（备选）：三门祭冬 · 敬老宴场景速写

以三门祭冬"老人宴吃冬至圆（几岁吃几个）"为原型设计轻交互（用户替家中长辈盛冬至圆），传递冬至的敬老维度。依据 [[03_notes/region-dongzhi-sanmen-jidong|三门祭冬卡]]。红线：这是特定地域的活态国家级非遗（2014扩展项目），视觉呈现须注明"浙江三门"地域身份与当代实践，不得泛化为"全国冬至古俗"。

## 下一步

- 视觉/声音素材库仍为空（[[02_topics/visual-assets|视觉]]、[[02_topics/audio-assets|声音]]）：梅花消寒图、圭表日影、冬至圆等图像需完成版权与授权研究。
- 每条创意进入开发前，走 modules/dongzhi 的内容审核流程。

[[01_terms/22_冬至|冬至索引]] · [[02_topics/interaction-ideas|互动创意维度]]
