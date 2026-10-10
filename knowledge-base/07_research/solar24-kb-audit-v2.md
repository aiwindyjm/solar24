---
schema_version: '0.1.0'
id: 'solar24-kb-audit-v2'
type: 'ResearchNote'
title: '知识库专业化审计 v2（621 实体 · 2026-09-25 第二轮中期后）'
solar_terms: []
season: null
dimensions: ['ai-research-log', 'references']
region: []
period: null
language: 'zh-CN'
status: 'draft'
epistemic: 'interpretation'
confidence: 'high'
risk_level: 'low'
impact_level: 'system'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-25'
updated: '2026-09-25'
human_review: null
research:
  {
    'task': '复审"表面/不专业/不完整"三项判断在 621 实体状态下是否成立，并导出第三阶段任务参数',
    'queries': ['全库统计（240源/215直读/8书源/地域11/全球24/英文24待译）', '引文忠实性抽查：6条关键引文对缓存原文逐字核对 6/6 命中'],
    'discovered_source_ids': [],
    'conflicts': [],
    'conclusions':
      [
        '不专业→不成立（强化）：书籍层引文抽查6/6逐字命中，转引链显式分层，防幻觉修正与负面证据持续产出',
        '流于表面→显著改善但未除：人文学深度达标（history99/customs88+农书断代）；科学数据面（天文31中24为定义卡/历法20/数据0）、国际面（全球24候选0直读源）、输出面（英文expanded 24/24 pending）仍是浅区',
        '不完整→仍成立：RegionalExpression 11/48（华北0/闽台0/西北0/东北0）、8节气无书证、Verified=0（91卡待人审）',
      ],
    'human_questions': ['地域层允许地方党报二级源（如实标注）是否追认', '第三阶段69轮（R42-R110）是否批准启动'],
  }
---

# 知识库专业化审计 v2（621 实体）

对照 v1（[[07_research/solar24-kb-professional-audit|同日上午·前次审计]]）：第二轮 R01-R41 后的复审。

## 一、三项判断的 v2 裁定

| 判断 | v1 裁定 | v2 裁定 | 变化 |
|---|---|---|---|
| 不专业 | 不成立 | **不成立（强化）** | 书籍层落地：8 书源+21 卷次引用；6 条关键引文对缓存原文逐字核对全部命中；转引链（岁时广记引三统历）显式分层；负面证据与防幻觉修正持续 |
| 流于表面 | 部分成立 | **结构性浅区收窄但仍在** | 深区：history 99/life 89/customs 88（农书+断代链+两宋都城对读）；浅区集中三面：科学数据面（天文31卡中24张黄经定义卡、历法约20、数据集0）、国际面（全球24候选**零直读源**）、输出面（解释卡英文 expanded 24/24 pending） |
| 不完整 | 成立（首要） | **仍成立** | 见下节量化清单 |

## 二、不完整清单 v2（量化）

1. **地域层**：RegionalExpression 11 张 / 目标≥48；**华北=0（京津冀晋蒙全空）、闽台=0、西北=0、东北=0**、岭南仅 1；浙2/湘2/川/黔/豫/苏/粤/港。
2. **书证盲区**：8 节气无书籍层证据（立夏/小暑/大暑/立秋/处暑/寒露/霜降/大寒）——《授时通考》卷4-6 两轮可补齐。
3. **全球层空壳**：24 张 candidate 全部无 direct-read 源（16 张已被路由 needs-research、8 张弱源人审）。
4. **英文层**：解释卡 expanded EN 24/24 未产（机器草稿可批量产、人审后用）。
5. **数据层**：0 数据集（时刻表/气候态/物候观测均未建）。
6. **Verified 层**：0（91 张 in-review 无人审）——与 v1 相同，仍是全库第一约束。
7. C 类现代学术书（竺可桢/萧放/张培瑜/省民俗志/清嘉录）采获 0——人工待办未动。

## 三、质量抽检记录（v2 新增）

- 引文忠实性：齐民要术种谷二句、梦粱录冬至二句、东京梦华录子推燕、岁时广记谷雨释名——对缓存原文逐字核对 **6/6 命中**。
- 路由健康（上次全库跑）：新增卡 22 auto-candidate / 1 human-review / 0 blocker。
- validate 621 实体、test 74 项全绿。

## 四、第三阶段任务参数（由本审计导出）

优先级：①地域广度（华北零的破除最优先）②书证补齐 8 节气 ③全球候选直读战役 ④数据层 ⑤英文机器草稿 ⑥Verified 启动包。已固化为第三阶段长任务提示词（仓库 `docs/research/stage3-long-task-prompt.md`，R42-R110，69 轮，取代此前的 R42-R100 续跑版：吸收其全部内容并按本审计重排优先级）。

[[07_research/round2-progress|进度真相源]] · [[07_research/round2-mid-audit|第二轮中期审计]] · [[07_research/solar24-kb-professional-audit|审计 v1]]
