---
schema_version: '0.1.0'
id: 'idea-lixia-interaction-sketches'
type: 'InteractionIdea'
title: '立夏互动创意草案（AI 创意，非事实）'
solar_terms: ['lixia']
season: 'summer'
dimensions: ['interaction-ideas', 'visual-assets', 'audio-assets']
region: ['面向全球用户的数字体验']
period: null
language: 'zh-CN'
status: 'draft'
epistemic: 'opinion'
confidence: 'unknown'
risk_level: 'medium'
impact_level: 'creative'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
claim:
  {
    'statement': '创意提案（非文化事实）：基于已核验的立夏知识节点，可设计"黄经45°入夏刻度""三候地气""秤人年检"三类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 立夏互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：黄经 45° · 入夏门厅

延续立春"黄道门厅"的空间隐喻：用户沿黄道拖动太阳跨过45°刻度线，触发"夏季第一个节气"状态切换，直观传达"立夏=太阳位置刻度，不是气温开关"。依据 [[03_notes/sci-lixia-longitude-45|立夏天文定义]]。风险与校准：页面文案不得使用"从这天起天气变热"表述（见两套夏天卡）；日期表述采用"公历5月5日前后（常见5月5日或6日）"口径，禁用未核验的"5月5-7日"。

## 创意 2：三候地气 · 蛙鸣启动的分层动效

按"蝼蝈鸣→蚯蚓出→王瓜生"顺序做声音+视觉双触发的层进体验：入夜穴土的虫鸣渐起（音频）、土层剖面中蚯蚓拱出（动效）、野地王瓜藤蔓延时生长（动效）。依据 [[03_notes/hist-yueling-lixia-pentads|立夏三候]]（古典文本，须标注"传统物候记载"而非"科学观测"）。两个红线：(1) 一候"蝼蝈"是什么动物在古典注释里本有分歧（蛙/土狗），动效形象不得写成"科普正确答案"，可做"古人吵了六百年"的注脚彩蛋；(2) 蛙鸣声音素材需授权研究（[[02_topics/audio-assets|声音维度]] 当前为空）。

## 创意 3：秤人年检 · 立夏-立秋两次称重对照

以清代文献"至立秋日又秤之，以验夏中之肥瘠"为原型设计轻交互：立夏"记基数"、立秋"复秤验消长"，把苦夏健康焦虑转译为跨节气的回访机制（可选接入用户自己的体重记录，默认匿名）。依据 [[03_notes/trad-lixia-chengren|秤人卡]]。红线：这是南方流传、杭州半山有官方认定锚点的习俗（[[03_notes/region-lixia-banshan|半山卡]]），文案须注明地域与清代文献起点，**严禁**配"起源于三国"叙事（传说层见 [[03_notes/legend-lixia-chengren-adou|阿斗传说卡]]）；涉及体重数据需隐私设计与健康表述合规审查。

## 创意 4（备选）：尝三新 · 物产窗口盲盒

以"樱桃/青梅/新麦/蚕豆"的时新物产做当季内容位（非交易功能），按用户所在地域提示不同的"当地时新"。依据 [[03_notes/trad-lixia-dan-sanxin|食俗卡]]。风险：三城"三新"清单是地域实例不是统一定义，算法推荐不得输出"江南三新=樱桃青梅鲥鱼"的定式；物产图片版权全未解决。

## 下一步

- 视觉/声音素材库仍为空：立夏相关意象（荷尖、蜻蜓、大木秤、乌米饭、冰盏）需完成版权与授权研究后方可进入资产层。
- 每条创意进入开发前，走 modules/lixia 的内容审核流程（模块当前 Planned）。

[[01_terms/07_立夏|立夏索引]] · [[02_topics/interaction-ideas|互动创意维度]]
