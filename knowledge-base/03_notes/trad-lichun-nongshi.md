---
schema_version: '0.1.0'
id: 'trad-lichun-nongshi'
type: 'CulturalFact'
title: '立春农事：备耕的开始与"一年之计在于春"'
solar_terms: ['lichun']
season: 'spring'
dimensions: ['agriculture']
region: ['中国（全国大部；具体农时因地域而异）']
period: '传统农事框架延续至当代；现代机械农业下的实践形态待研究'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
contested: false
source_ids: ['source-ihchina-lichun-feature', 'source-wikisource-suisizuanyao', 'source-wikisource-shoushitongkao']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review:
  {
    'reviewer': 'aiwindyjm',
    'reviewed_at': '2026-09-28',
    'decision': 'approved',
    'notes': 'Owner-authorized batch approval based on AI pre-review',
  }
claim:
  {
    'statement': '在传统农事框架中，立春标示备耕阶段的开始：白昼增长、大部分地区陆续进入春耕大忙季节，同时农业生产仍需预防低温雨雪（倒春寒）的不利影响；"一年之计在于春"使立春成为最受农民重视的节气之一。',
    'exceptions': [
      '"春耕大忙"的时间表南北差异极大——华南可能已实际耕作，东北尚未化冻，本卡只陈述框架性表述，各地具体农时待地域化研究',
      '来源为非遗网汇编页（自述部分内容整理自网络），农谚条目未逐一标注流传地域与出处',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=low/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 立春农事与农谚

## 研究问题

为什么农业社会需要立春这样一个时间节点？它在农事上对应什么？

## 证据（原文与定位）

已直接读取非遗网立春专题（[[04_sources/source-ihchina-lichun-feature|source-ihchina-lichun-feature]]）：

> "立春以后，白天逐渐增长，大部分地区陆续进入春耕大忙季节，农业生产仍要预防低温和雨雪天气带来的不利影响。'一年之计在于春'，立春是最受农民重视的节气之一。"

页面并收录大量立春农谚（如预兆春耕、天气经验的谚语群），但**未逐一标注流传地域与原始出处**，故农谚本身只作线索、不入本卡命题。

- **农书直读环（2026-09-25，R13）**：《四时纂要》正月（直读）：「自立春即得正月節，凡陰陽避忌，宜依正月法」；正月条目首列「耕地、鋤麥…備種子、揀耕牛法」——唐末农书的正月清单以备耕与冬麦管理为主，与"备耕动员"主线吻合。《授时通考》卷42辑《禮記·月令》「孟春之月天子乃以元日祈穀於上帝…躬耕帝耤」——立春所在孟春的国家农事礼（制度层见 [[02_shared/hist-quannong-institutional-chain|劝农制度链]]）。

## AI 摘要 / 解释

农业社会需要立春的机制性原因（Interpretation，由证据支撑的框架）：

1. 农时有硬约束：播种窗口由温度/降水决定，误期直接损失收成——需要一个**全社会同步的启动信号**；
2. 立春提供的不是"今天该种什么"，而是"备耕阶段开始"的框架性提醒（检修农具、选种、翻土、防倒春寒）；
3. 该信号与官方劝农制度结合（见 [[03_notes/region-jiuhua-lichun-ji|九华立春祭]]、[[03_notes/region-shiqian-shuochun|石阡说春]]、[[03_notes/hist-yanjing-dachun-yaochun|燕京岁时记打春条]]），从礼制到村社层层落实。

**地域红线**：不存在"中国人在立春都开始春耕"的事实——农事永远是地域函数。正确表述是"立春启动了因地而异的备耕时间表"。

## 适用条件、例外与分歧

- 古代/近代/现代三分：本卡证据为当代机构对传统框架的描述；现代农业实践（机械化、大棚、气候带北移）中立春的实际作用是独立研究问题，未建卡。
- 农谚需要逐条地域标注后才能入库，当前整体保持线索状态。

## 关联

[[01_terms/01_立春|立春索引]] · [[03_notes/region-jiuhua-lichun-ji|九华立春祭]] · [[03_notes/region-shiqian-shuochun|石阡说春]] · [[02_topics/agriculture|农业维度]]

## 待人工确认

- 替换或补充更硬的农史来源（中国农业博物馆展陈资料、农史研究文献）。
- 华北/江南/华南/东北四个区域的立春农事分卡（待研究）。
- 2026-09-25（R13，第二轮·农书层）：新增农书直读环（唐末《四时纂要》逐月条目/北魏《齐民要术》/清《授时通考》辑录，均为其时代与地域口径，非现代全国农事）；source_ids 扩充。
