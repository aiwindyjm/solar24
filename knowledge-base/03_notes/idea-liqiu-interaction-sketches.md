---
schema_version: '0.1.0'
id: 'idea-liqiu-interaction-sketches'
type: 'InteractionIdea'
title: '立秋互动创意草案（AI 创意，非事实）'
solar_terms: ['liqiu']
season: 'autumn'
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
    'statement': '创意提案（非文化事实）：基于已核验的立秋知识节点，可设计"一叶落而知秋""两套秋对照""八人秋千"三类交互隐喻。',
    'exceptions': ['本笔记为 AI 创意，不进入事实体系；实现前需设计评审与素材授权'],
  }
---

# 立秋互动创意草案

**性质声明**：以下全部为 AI 创意提案（InteractionIdea），不是文化事实；每条创意所依赖的知识点单独标注依据笔记，事实错误应在来源笔记中修正，而不是在创意中硬改。

## 创意 1：一片梧桐叶 · 立秋时刻指示器

以"立秋之刻，必脱一叶"（类书辑文，见 [[03_notes/hist-liqiu-yiye-zhiqiu|一叶知秋卡]]）为原型：页面在用户本地时间到达立秋时刻的瞬间，一片梧桐叶从枝头脱落、飘落阶前（对应刘翰诗"满阶梧叶月明中"，[[03_notes/lit-liuhan-liqiu|刘翰卡]]）。用户也可以拨动时间轴看"叶落→阶满"的进程。风险：梧桐报秋是古典文献记载（且为转引级），文案须标"古籍记载的物候意象"而非植物学事实；"一叶知秋"成语出处（淮南子作"知岁之将暮"）若入文案须按典故卡分层表述，不能写"古人说见一叶落而知秋"。

## 创意 2：两套秋 · 立秋≠入秋对照器

做一个"天文秋 vs 气象秋"的滑块对照：左侧立秋（黄经135°，8月7-9日），右侧气象入秋（连续5天日均温稳定≤22℃），用户选择所在城市查看两个"秋"的到达差值，直观破除"立秋=凉快"误解；残暑段用"秋老虎"民间称谓标注（无气象学定义，文案须注明）。依据 [[03_notes/sci-liqiu-vs-meteorological-autumn|立秋≠入秋]] 与 [[03_notes/sci-liqiu-longitude-135|黄经定义]]。数据依赖：各城市常年入秋日期需可靠气候数据源（当前缺口，同立春"两套春"创意）。

## 创意 3：八人秋千 · 苗族赶秋小交互

以湘西苗族赶秋的"八人秋"为原型设计轻交互：秋公秋婆唱开秋歌后秋千转动，停下时"停在最上面的人唱歌"变成用户侧的答题/对歌环节，引导用户理解"立秋日在少数民族地区是欢庆秋收的大节"。依据 [[03_notes/region-liqiu-miao-ganqiu|苗族赶秋卡]]。红线：这是特定民族的活态国家级非遗，视觉与音乐素材需授权且注明"湖南湘西花垣·国家级非遗扩展项目"身份；严禁泛化为"全国立秋古俗"，严禁使用"五千年历史"类页面断言。

## 下一步

- 视觉/声音素材库仍为空（[[02_topics/visual-assets|视觉]]、[[02_topics/audio-assets|声音]]）：梧桐叶、秋千、苗鼓、蝉声等素材需完成版权与授权研究后方可进入资产层（蝉声与三候"寒蝉鸣"关联但录制来源待定）。
- 每条创意进入开发前，走 modules/liqiu 的内容审核流程。

[[01_terms/13_立秋|立秋索引]] · [[02_topics/interaction-ideas|互动创意维度]]
