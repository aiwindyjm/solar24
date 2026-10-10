---
schema_version: '0.1.0'
id: 'trad-qiufen-nongshi'
type: 'Tradition'
title: '三秋大忙：秋分农事节奏与农谚群（"白露早，寒露迟，秋分种麦正当时"）'
solar_terms: ['qiufen']
season: 'autumn'
dimensions: ['agriculture', 'climate', 'chinese-life']
region: ['农谚含地域指向：华北（冬麦）、江南（稻作）、南方双季稻区；页方未逐条标注流传地域']
period: '机构汇编页2017年；农谚为口头传统（tradition 层），个别获2025年党报转引'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  [
    'source-ihchina-qiufen-feature',
    'source-xinhua-qiufen-2024',
    'source-xinhua-qiufen-2022',
    'source-people-fengshoujie-2025',
    'source-wikisource-suisizuanyao',
    'source-wikisource-shoushitongkao',
  ]
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
    'statement': '秋分至寒露半月是"秋收、秋耕、秋种"三秋大忙时段（非遗网："秋分至寒露这半个月是秋熟作物灌浆和产量形成的最后关键时期""秋季降温快的特点使秋收、秋耕、秋种的『三秋大忙』显得格外紧张"；新华社2024："秋分时节还是收获稻谷、玉米、大豆等农作物的重要时期"；人民日报2025引谚"白露过秋分，农事忙纷纷"）。农谚层（tradition，不作科学断言）：华北种麦"白露早，寒露迟，秋分种麦正当时"（非遗网与人民日报2025两处同载）；江南稻作"秋分天气白云来，处处好歌好稻栽"；南方双季晚稻"秋分不露头，割了喂老牛"；气象谚语群"秋分天晴必久旱""秋分日晴，万物不生""秋分有雨来年丰""秋分有雨寒露凉""秋分东风来年旱""秋分西北风，冬天多雨雪"；不利因素为"干旱少雨或连绵阴雨"及双季晚稻抽穗扬花期遇低温阴雨的"秋分寒"。',
    'exceptions': [
      '农谚是口头传统经验概括（tradition 层），其经验有效性与地域适用范围未经农业气象数据核验，不作科学命题引用',
      '各谚语流传地域多由上下文推断（华北/江南/双季稻区），页方未逐条标注；"秋分寒"（冷空气致低温）为页方对农灾的经验命名，与气象学"寒露风"术语的关系未核',
      '任务线索提到的"秋分无生田"类农谚本轮未在任何直读来源出现，不录入',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立4；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 三秋大忙：秋分农事与农谚

## 研究问题

秋分在农事历上的位置是什么？"三秋大忙"与农谚群记载到什么层级？

## 证据

1. **直读机构汇编**：非遗网秋分专题"农事农谚"节（[[04_sources/source-ihchina-qiufen-feature|source-ihchina-qiufen-feature]]）：三秋大忙、华北冬麦谚语、江南与双季稻谚语、六条气象谚语、"秋分寒"防御——全部原文见 claim 摘录。
2. **直读机构稿印证**：新华社2024稿（[[04_sources/source-xinhua-qiufen-2024|source-xinhua-qiufen-2024]]）："秋分时节还是收获稻谷、玉米、大豆等农作物的重要时期。"
3. **直读专家口径（气候衔接）**：新华社2022稿（[[04_sources/source-xinhua-qiufen-2022|source-xinhua-qiufen-2022]]，南信大江晓东）："此时我国大部分地区气温相较白露时明显降低，长江中下游地区开始进入气象学上的秋天。"——与非遗网"长江流域及以北的广大地区，此时的日平均气温都降到了22℃以下，是真正气候意义上的秋天"相印证（候温口径背景见 [[04_sources/source-szmb-season-division|深圳气象局候温法]]，共享机制不复述）。
4. **直读党报转引**：人民日报2025稿（[[04_sources/source-people-fengshoujie-2025|source-people-fengshoujie-2025]]）："白露过秋分，农事忙纷纷""白露早，寒露迟，秋分种麦正当时"——华北种麦谚获异发布方同载。

- **农书直读环（2026-09-25，R17）**：《四时纂要》八月（直读）：「秋分，八月中氣」；「秋分先立一丈表」（八尺表得影七尺三寸七分，宜麻）；八月条目「種大麥、種小麥、漬麥種」。《授时通考》卷42辑《禮記·月令》「仲秋之月乃勸種麥毋或失時」——秋分所在仲秋=经典劝种麦+麦作播种窗口（占影尺寸属占候层）。

## AI 摘要 / 解释

- 秋分的农事结构是"收获与播种叠加"（秋收作物归仓+冬作物播种同窗），这与春分（备耕）、芒种（收种衔接）都不同，是官方为丰收节选期的主要农事依据（[[03_notes/fact-qiufen-harvest-festival-2018|丰收节卡]]直读："秋收作物是大头""收获与播种的黄金交汇点"）。
- 谚语群按内容分三类：农时指令（种麦/栽稻）、产量预期（"秋分不露头"）、天气预测（六条气象谚）——第三类与"一场秋雨一场寒"的降温经验同属民间气象经验，与三候"水始涸"（降水减少的古典观察，[[03_notes/hist-yueling-qiufen-pentads|三候卡]]）形成古今两个层面的"秋分少雨"记录。

## 适用条件、例外与分歧

无来源冲突。使用红线：谚语不写成"科学规律"或"全国通行"；"秋分寒"与气象学概念不做未核证的等同。

## 关联

[[01_terms/16_秋分|秋分索引]] · [[03_notes/fact-qiufen-harvest-festival-2018|丰收节卡]] · [[03_notes/hist-yueling-qiufen-pentads|三候卡]] · [[03_notes/sci-qiufen-day-night-equal|昼夜均分卡]] · [[02_topics/agriculture|农业维度]]

## 待人工确认

- 农谚的方志与农书源头（《农政全书》《授时通考》等是否收录同类）；"秋分寒"与"寒露风"的气象学定义核对。
- "三秋"一词的文献出处（古农书语境 vs 现代农业术语化）。

## 修改记录

- 2026-09-16（首轮批研究）：建卡。四源直读；农谚整体标 tradition 层并保留页方语境；"秋分无生田"按未直读处理不录入。
- 2026-09-25（R17，第二轮·农书层）：新增农书直读环（唐末《四时纂要》八月条目/清《授时通考》辑《礼记·月令》仲秋劝种麦）；source_ids 扩充。
