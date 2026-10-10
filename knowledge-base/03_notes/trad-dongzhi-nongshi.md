---
schema_version: '0.1.0'
id: 'trad-dongzhi-nongshi'
type: 'Tradition'
title: '冬至农事与农谚：兴修水利、积肥防冻，以冬至日占验一冬'
solar_terms: ['dongzhi']
season: 'winter'
dimensions: ['agriculture', 'chinese-life', 'climate']
region: ['中国（非遗网分气候带叙述：东北冰封/黄淮银装/大江南北5℃以上冬作物继续生长；农谚流传地域未逐一标注）']
period: '机构汇编层（非遗网2017）；农谚为口传传统，首出与流传史未考'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-ihchina-dongzhi-feature', 'source-wikisource-suisizuanyao']
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
    'statement': '非遗网冬至专题（2017）载冬至农事要点：冬至前后是"兴修水利、大搞农田基本建设、积肥造肥的大好时机，同时要做好防冻工作"；江南加强冬作物管理（清沟排水、培土壅根、消灭越冬害虫），已开始春种的南部沿海地区做好水稻秧苗防寒。并录以冬至日天气占验后期天气的农谚群（"冬至晴，正月雨；冬至雨，正月晴""冬至冷，春节暖；冬至暖，春节冷"等）与数九歌农事版（江苏："一九二九，背起粪篓……九九八十一，犁耙一起出"）——"冬至期间主要是为开春后的农事活动做准备"。',
    'exceptions': [
      '农谚为口传经验归纳（tradition 层），无科学验证表述——占验类农谚（晴雨/冷暖对冲）的气候学解释本轮无直读来源，不作科学性背书',
      '农谚流传地域未逐一标注，"各地气候景观差异较大"的分区叙述（东北/黄淮/大江南北）为机构页概括',
      '"水国过冬至，风光春已生"诗句为机构页引，未核出处',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 冬至农事与农谚

## 研究问题

冬至在传统农事历上处于什么位置？农谚如何使用冬至这个时间点？

## 证据

- **直读机构汇编**：非遗网冬至专题"农事农谚"节（[[04_sources/source-ihchina-dongzhi-feature|source-ihchina-dongzhi-feature]]）：
  - 农事段："冬至前后是兴修水利、大搞农田基本建设、积肥造肥的大好时机，同时要做好防冻工作。江南地区更应加强冬作物的管理，清沟排水、培土壅根……消灭越冬害虫。已经开始春种的南部沿海地区，则需要认真做好水稻秧苗的防寒工作。"
  - 占验农谚群（逐字）："冬至多风，寒冷年丰。／冬至在月头，要冷在年底；冬至在月尾，要冷在正月；冬至在月中，无雪也没霜。／冬至三九则冰坚，冬至有霜年有雪。／立冬无雨看冬至，冬至无雨一冬晴。／冬至晴，正月雨；冬至雨，正月晴。／冬至冷，春节暖；冬至暖，春节冷。／冬至西北风，来年干一春。"
  - 江苏农事版数九歌（"一九二九，背起粪篓……九九八十一，犁耙一起出"）与结论句"冬至期间主要是为开春后的农事活动做准备"。

- **农书直读环（2026-09-25，R18）**：《四时纂要》十一月（直读）：「冬至，十一月中氣」；「冬至日，先立一丈表，得影一尺…」；「冬至後一日得壬，炎旱千里」逐日占壬；条目「試穀種、貯雪水」——冬至在农书中同时是中气、圭表测影基准与冬藏备种节点（占壬属占候层，不作科学引用）。

## AI 摘要 / 解释

- 冬至的农事身份是**农闲中的建设期+备耕起点**：北方大地封冻转入水利/积肥等基建，江南冬作物仍长需管护，华南沿海已有春种须防寒——同一节气三种农情（分区叙述），与"冬至阳生春又来"的转折叙事一致（见 [[03_notes/hist-yueling-dongzhi-pentads|三候卡]]、[[03_notes/trad-dongzhi-shijiu-xiaohantu|数九卡]]的"九九加一九耕牛遍地走"）。
- 占验农谚的两种结构：**空间对冲**（冬至晴↔正月雨）与**时间对冲**（冬至冷↔春节暖），以及"冬至在月头/月尾/月中"的月内位置占验——后者依赖冬至在农历十一月中的位置（冬至是中气、所在月被固定为十一月，见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]），是天文定义向占验民俗的转用。此类占验无科学机制背书（exceptions 已声明）。

## 适用条件、例外与分歧

- 单一机构汇编源（非遗网），农谚无逐地标注与文献首出——按 medium 以下对待；与数九卡共用该页但命题不重复。
- 古籍农书（《四时纂要》《农政全书》冬至条）未直读，传统农书层的冬至农事待补。

## 关联

[[01_terms/22_冬至|冬至索引]] · [[03_notes/trad-dongzhi-shijiu-xiaohantu|数九与消寒图]] · [[03_notes/sci-dongzhi-shortest-day-year-anchor|白昼最短与回归年锚]] · [[02_topics/agriculture|农业维度]]

## 待人工确认

- 古籍农书冬至条直读（《农政全书》授时/占候卷）；占验农谚的气候统计学检验文献（气象部门农谚研究）。
- "水国过冬至，风光春已生"诗句出处。

## 修改记录

- 2026-09-16（建卡）：非遗网农事农谚段直读建卡；占验农谚全录作 tradition 层证据，科学性不作背书。
- 2026-09-25（R18，第二轮·农书层）：新增农书直读环（唐末《四时纂要》十一月条目）；source_ids 扩充。
