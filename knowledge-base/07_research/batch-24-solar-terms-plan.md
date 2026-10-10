---
schema_version: '0.1.0'
id: 'batch-24-solar-terms-plan'
type: 'ResearchNote'
title: '24节气批量研究计划（Batch Research Run · 2026-09-16）'
solar_terms: []
season: null
dimensions: ['ai-research-log', 'references']
region: ['中国（各节气卡另行地域限定）']
period: '2026-09-16 批处理运行'
language: 'zh-CN'
status: 'in-review'
epistemic: 'unverified'
confidence: 'unknown'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
research:
  {
    'task': '以立春试点与 Solar24 Cultural Research Skill v1.0 为基准，一次性完成其余23个节气的第一轮研究、结构化、证据审计、风险路由与人工审核包生成',
    'queries': [],
    'discovered_source_ids': ['source-wikisource-suwen-liujie'],
    'conflicts': [],
    'conclusions':
      [
        '批处理模式启动：逐节气门槛（上一节气≥4卡人审通过）在 Batch 模式下替换为"每节气≥4张高证据卡进入统一审核包"，序列门槛保留给未来的单节气增量研究',
        '批处理前新增共享卡两张（七十二候体系、节气/中气分组），全部节气引用不复制',
      ],
    'human_questions':
      [
        '批处理产出的统一审核包（A/B/C/D分层）是否取代逐节气审核节奏——本计划按"是"执行，若项目负责人要求恢复逐节气门槛请回退本条',
      ],
  }
---

# 24节气批量研究计划（Batch Research Run）

## 0. 模式变更声明（重要）

- 本批次由项目负责人于 2026-09-16 指示启动：**不再采用"一个节气研究完→等待人工审核→再启动下一个"的模式**，改为一次性完成其余 23 个节气的第一轮研究。
- 黄金模板中的序列门槛（"上一节气≥4张高证据卡人审通过才启动下一节气"）在 Batch 模式下替换为：**每节气必须产出≥4张高证据卡（confidence≥high，direct-read+cross-checked）并进入统一人工审核包**。序列门槛保留，适用于未来的单节气增量研究。此变更为 Skill 修订 #B1，已记入 SKILL.md「Batch Research Mode」节与回归说明。
- 终点边界不变：本批次终点 = 24节气研究数据库 + 统一人工审核总包。**不进入 Web 开发、不生成网页/视觉/音乐**。
- 诚实原则不变：宁可 missing 不可 fabricated；所有产出最多到 verified-candidate（status=in-review），`human_review` 一律为 null，Decision 一律留空。

## 1. 输入与复用

- **参照数据集**：立春试点（20张知识卡、18条来源、5份研究日志、人工审核包、黄金模板 A-L）。
- **可复用直读来源（全节气共享，节气卡直接引用 source_ids，不得重建）**：
  - `source-yueling-qishierhou-wikisource`（月令七十二候集解全文：各节气三候+节/中标签）
  - `source-huainanzi-tianwenxun-wikisource`（淮南子·天文训：完整序列）
  - `source-pmo-almanac-qa`（紫金山天文台：历法机制/置闰/中气）
  - `source-hko-solar-terms`（香港天文台：黄道24等分每段15°）
  - `source-gbt-33661-openstd`（GB/T 33661-2017，元数据级）
  - `source-szmb-season-division`（深圳气象局：候温法四季划分）
  - `source-xinhua-unesco-solarterms`（新华社UNESCO通稿）
  - `source-wikisource-suwen-liujie`（素问·六节藏象论：五日为候三候为气）【本批次新增】
- **共享知识卡（引用不复制）**：UNESCO认定、黄河流域起源、淮南子完整记载、历法角色、七十二候体系、节气/中气分组（后两张为本批次新增）。
- **已知非遗锚点（国家级非遗Ⅹ-68"二十四节气"扩展项目，需逐一经 ihchina.cn 项目页直读核验）**：安仁赶分社（春分）、半山立夏习俗（立夏）、苗族赶秋（立秋）、送大暑船（大暑）、壮族霜降节（霜降）、三门祭冬（冬至）。另有立春三项（九华/遂昌/石阡，已建卡）。

## 2. 每节气统一研究维度与产出下限

19维（astronomy…references，含 calendar）。产出下限（黄金模板 B 段启动门槛的批处理版本）：

| 文件 | 类型 | 要求 |
|---|---|---|
| `sci-<slug>-longitude` | ScientificFact | 黄经+公历日期；≥2独立直读机构源；high |
| `hist-yueling-<slug>-pentads` | HistoricalRecord | 月令三候原文直读（复用 wikisource 源）；high |
| `sci-<slug>-<气候/科学主题>` | ScientificFact | 该节气气候/天文意义；direct-read ≥1 |
| `hist-*/trad-*`（习俗/生活） | HistoricalRecord/Tradition | 古籍直读优先（维基文库）；无证据→needs-research 不硬凑 |
| `trad-*/region-*`（地域/非遗） | Tradition/RegionalExpression | 有非遗锚点用项目页直读；无则古籍或机构源，或标缺 |
| `lit-*`（文学） | CulturalFact | 1首节气诗，维基文库直读 |
| `<slug>-human-explanation` | HumanExplanation | 三层+why+支撑ids；无支撑句标 Unsupported |
| `glob-<slug>-*` | GlobalExpression | 1条 Candidate；三要素齐；search-excerpt 可 |
| `idea-<slug>-interaction-sketches` | InteractionIdea | 标注 AI 创意非事实 |
| `research-<slug>-batch-log` | ResearchNote | 12阶段执行记录+覆盖矩阵+审计 |
| `sections/review-<slug>.md` | 片段（无frontmatter） | A/B/C/D 审核分层素材 |

维度缺资料：Coverage Matrix 标 weak/missing + Needs Research，不编造。ecology/visual/audio 允许 missing。

## 3. 审核分层（引擎路由 → 批处理四层）

引擎四路（route.ts）映射到本批次人工审核四层：

| 层 | 引擎路由 | 含义 | 审核包呈现 |
|---|---|---|---|
| A Auto Candidate | auto-candidate | 证据达标、无 major finding、risk≤medium | 仅摘要+链接 |
| B Recommended Review | human-review-required 且 risk≤medium、impact=term/regional | 表达边界问题，不阻塞 | 中等展开 |
| C Mandatory Review | human-review-required 且（risk=high 或 impact=system/global 或类型=GlobalExpression/HumanExplanation 或命中泛化/强行对应/历史归属类 finding） | 系统级/高风险/解释/全球表达 | 全卡展开+审核问题 |
| D Needs Research | needs-research / reject | 证据不足 | 列缺口 |

## 4. 24节气清单与计划状态

立春（01）为已完成试点，本批次只引用不重做。每节气按春→夏→秋→冬顺序处理；Status 列由各节气日志回填。

| # | 节气 | slug | 黄经 | 公历范围 | 特有研究重点 | 高风险区 | Status |
|---|---|---|---|---|---|---|---|
| 01 | 立春 | lichun | 315° | 2/3-5 | （试点已完成） | — | done（试点） |
| 02 | 雨水 | yushui | 330° | 2/18-20 | 正月中气（首个中气样本）；春夜喜雨文学；"拉保保"地方习俗核验 | 地方习俗泛化 | done |
| 03 | 惊蛰 | jingzhe | 345° | 3/5-6 | 启蛰→惊蛰改名公案（避讳说）；初雷与春耕；桃始华 | 改名断代=历史归属高危 | done |
| 04 | 春分 | chunfen | 0° | 3/20-22 | 黄经0°定义锚；昼夜均分；安仁赶分社（非遗）；竖蛋现代流行辨析 | 竖蛋起源=现代流行说法；Nowruz对应=跨文化 | done |
| 05 | 清明 | qingming | 15° | 4/4-6 | 唯一节气兼重大节日（寒食融合史）；扫墓/踏青文献链 | 节日与节气关系断代；青团地域 | done |
| 06 | 谷雨 | guyu | 30° | 4/19-21 | "雨生百谷"命名；仓颉传说（legend层）；谷雨茶 | 仓颉传说冒充事实 | done |
| 07 | 立夏 | lixia | 45° | 5/5-7 | 四立之二；半山立夏习俗（非遗）；秤人/见三新文献核验 | 秤人断代与地域 | done |
| 08 | 小满 | xiaoman | 60° | 5/20-22 | "无大满"文化解释（interpretation层）；小满动三车；麦秋至 | 哲理化解释冒充命名本义 | done |
| 09 | 芒种 | mangzhong | 75° | 6/5-7 | "有芒之谷可稼种"；麦收插秧双忙；煮梅/送花神（文学） | 送花神断代 | done |
| 10 | 夏至 | xiazhi | 90° | 6/21-22 | 北半球白昼最长（天文锚）；夏至面；"夏至一阴生" | 白昼最长表述限定北半球；midsummer对应 | done |
| 11 | 小暑 | xiaoshu | 105° | 7/6-8 | 出梅入伏；三伏与夏至三庚（历法机制）；温风至 | 三伏机制需权威源 | done |
| 12 | 大暑 | dashu | 120° | 7/22-24 | 三伏酷热；送大暑船（非遗）；腐草为萤的科学解释 | 萤火虫科学解释倒灌 | done |
| 13 | 立秋 | liqiu | 135° | 8/7-9 | 四立之三；苗族赶秋（非遗）；贴秋膘断代 | 贴秋膘地域与时代 | done |
| 14 | 处暑 | chushu | 150° | 8/22-24 | "处，止也"命名；暑气止息与开渔（现代节庆辨析） | 开渔节=现代节庆非古俗 | done |
| 15 | 白露 | bailu | 165° | 9/7-9 | 露凝而白；蒹葭文学锚；白露茶/米酒地域 | 米酒地域限定 | done |
| 16 | 秋分 | qiufen | 180° | 9/22-24 | 黄经180°；昼夜再均；2018中国农民丰收节（现代国家节日，须标现代） | 丰收节≠古俗；祭月迁移说核验 | done |
| 17 | 寒露 | hanlu | 195° | 10/8-9 | 露寒欲凝；与重阳关系；菊有黄华 | 重阳≠寒露（时间邻近勿混） | done |
| 18 | 霜降 | shuangjiang | 210° | 10/23-24 | 气肃而霜降；壮族霜降节（非遗+UNESCO子项）；豺祭兽 | 柿子食俗地域 | done |
| 19 | 立冬 | lidong | 225° | 11/7-8 | 四立之四；补冬地域；水始冰物候 | 饺子俗地域泛化 | done |
| 20 | 小雪 | xiaoxue | 240° | 11/22-23 | 虹藏不见；腌腊文献（清嘉录等） | 腌菜南北泛化 | done |
| 21 | 大雪 | daxue | 255° | 12/6-8 | 瑞雪兆丰年（农谚层）；鹖鴠不鸣 | 农谚≠预测科学 | done |
| 22 | 冬至 | dongzhi | 270° | 12/21-23 | 白昼最短+数九+冬至大如年（清嘉录）；三门祭冬（非遗）；饺子/汤圆地域 | "冬至大如年"地域限定；Yule/Yalda对应 | done |
| 23 | 小寒 | xiaohan | 285° | 1/5-7 | 数九寒天；腊八邻近（分清界限）；鹊始巢 | 腊八≠小寒；梅花系年 | done |
| 24 | 大寒 | dahan | 300° | 1/20-21 | 岁末迎年；尾牙地域（闽南）；水泽腹坚 | 尾牙地域与"年味"泛化 | done |

（Status 列 done = 该节气研究日志已回填并经本计划负责人核对，见各 `research-<slug>-batch-log`。）

## 5. 执行顺序与波次

春（02-06）→ 夏（07-12）→ 秋（13-18）→ 冬（19-24），每波多节气并行处理，波次间运行 `pnpm validate` 修复。全部节气完成后：统一审核总包（`07_research/solar24-batch-human-review-package.md`）→ 批量研究报告（`07_research/solar24-batch-research-report.md`）→ 总览更新 → `pnpm validate / test / lint`。

## 6. 停止条件（沿用 Skill，另加批处理两条）

1. Schema 无法表示某类研究结果（工程阻塞）；
2. Skill 出现无法自动控制的严重错误（多节气同型错误且修正规则会改变已回填结论）；
3. 知识库损坏（validate 无法恢复）。
普通情况（来源打不开、维度缺资料、某断言无法核验）→ 记 Needs Research / unread，继续。

[[07_research/golden-term-template|黄金模板]] · [[07_research/lichun-human-review-package|立春审核包（试点）]] · [[00_project/guide|规范]]
