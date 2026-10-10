---
schema_version: '0.1.0'
id: 'research-lichun-model-review'
type: 'ResearchNote'
title: '立春研究模型复盘与校准（2026-09-16）'
solar_terms: ['lichun']
season: 'spring'
dimensions: ['ai-research-log']
region: []
period: null
language: 'zh-CN'
status: 'draft'
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
    'task': '复盘立春知识模型能否支撑 Solar24 使命（让完全不了解中国文化的人真正理解二十四节气），并校准为可复制到其余23个节气的模板',
    'queries': [],
    'discovered_source_ids': [],
    'conflicts': [],
    'conclusions':
      [
        '覆盖矩阵：2 complete / 8 partial / 6 weak / 2 missing / 1 candidate-capped（19维度，无 N/A）',
        '已建立四层内容模型并写入 00_project/guide.md；Verified 层当前为空（所有人审未发生），这是流程瓶颈而非模型缺陷',
        '审计发现并修正 4 处问题（1 处证据等级混排、1 处直读范围模糊、1 处时代推断倒灌、2 张全球卡未标 Candidate），全部留修改记录，未删研究历史',
        '核心理解/why-it-matters/叙事链已入立春索引，每句带依赖节点与置信度标注',
      ],
    'human_questions':
      [
        'Calendar（历法）是否升为独立研究维度（当前协议18维无 calendar）？',
        'HumanExplanation 是否作为协议新笔记类型在后续 PR 中立项（当前存放于 SolarTerm 索引章节）？',
        '系统级事实（UNESCO/黄河流域）是否改为跨节气共享节点，避免复制24份？',
        '两条 2026-09-16 修正（黄经卡日期降级、黄河流域卡时代修正）请复核确认',
      ],
  }
---

# 立春研究模型复盘与校准

## 一、Lichun Knowledge Coverage Matrix（2026-09-16）

评级标准：complete=该维度对"外行人理解立春"已够用且证据≥medium；partial=有可靠骨架但有明确缺口；weak=仅有线索级/单薄覆盖；missing=无笔记；not applicable=不适用（本表无）。

| # | 维度 | 评级 | 依据与缺口 |
|---|---|---|---|
| 1 | Identity | complete | 索引/顺序/季节编组/双语名为项目约定，机器校验；无文化断言风险 |
| 2 | Astronomy | partial | 黄经定义卡（medium）+《淮南子》机制（已读）；缺 GB/T 正文、逐年精确时刻、公转不均→间隔不等解释 |
| 3 | Calendar | **weak** | 协议无独立 calendar 维度；"正月节"位置、节气/中气之分、与农历年关系仅有 unverified 的 1914 卡间接触及 |
| 4 | Climate | partial | 两套春之分（medium）+候温标准原文（直读）+深圳常年值个案；缺全国气候态分布、QX/T 原文 |
| 5 | Phenology | partial | 三候原文（high，直读）；缺七十二候体系源流（《逸周书·时训》等）、现代物候观测对照、地域效度 |
| 6 | Agriculture | **weak** | 仅由两条非遗民俗间接覆盖"劝农"；无农史/农技直接来源（立春备耕的具体农事内容为零） |
| 7 | Ecology | **missing** | 无笔记（现代生态观测为有意延后，但维度为空） |
| 8 | Human Life | weak | 咬春（线索级）+1914（unverified）；现代中国人如何过立春无覆盖 |
| 9 | Customs | partial | 两条 high 地域活态样本 + 咬春线索；缺官方迎春礼制史、"班春劝农"专卡 |
| 10 | Food | weak | 单条 low 线索卡（咬春），文献谱系未回溯 |
| 11 | History | partial | 西汉定型（medium）+UNESCO（high）+1914（unverified）；缺先秦源头文献链（尧典/夏小正等） |
| 12 | Literature & Art | weak | 单条杜甫卡（low，未校勘）；说春春词属口头艺术线索未展开 |
| 13 | Regional Differences | partial | 地域校准原则（medium）+两个地域样本；无系统南北对照 |
| 14 | Scientific Interpretation | partial | 天文定义+气象春辨析；缺轨道力学（间隔不等）、岁差、气候变化对物候节气的影响 |
| 15 | Global Expressions | **candidate-capped** | 按本次决策政策性封存为 Candidate（比较框架+节分两张卡），证据均线索级，禁止扩展 |
| 16 | Visual | **missing** | 无素材、无版权研究（有意留空，未越界） |
| 17 | Audio | missing | 同上；仅《淮南子》"音比南吕"文字线索 |
| 18 | Interaction | partial | 4 条创意提案齐备且证据锚定；实现被素材/数据缺口阻塞（创意属提案层，非知识缺口） |
| 19 | References | partial | 12 来源/8 直读；两份标准正文与 UNESCO 官方页未读是最大证据缺口 |

小结：骨架维度（Identity/Astronomy/Phenology/Customs/History 的"是什么"层）可用；**解释"为什么"的深层链路（Agriculture/Human Life/Food/Literature）与历法维度最薄**——恰好是"让外行人真正理解"最需要的部分。

## 二、四层内容模型（已写入 [[00_project/guide|vault 规范]]）

- **Research Material 研究素材**：`04_sources/`、直引原文的抽取笔记（如《淮南子》《月令》卡）、`07_research/` 日志。允许线索级，必须如实标注。→ 现有 12 Source + 2 张直引 HistoricalRecord。
- **Verified Knowledge 已核验知识**：claim 类笔记 + status=approved + human_review + 来源 human-verified。协议 `assertPublishableNote` 已强制门槛。→ **当前为 0 条**（所有人审未发生）。这是当前体系最诚实也最重要的事实：第一轮产出全部处于"已结构化待核验"状态。
- **Human Explanation 面向普通人的解释**：立春索引新增"核心理解/why-it-matters/叙事链"章节，每句标注依赖节点。规则：依赖节点未达 Verified 前解释不导出。
- **Experience Content 体验内容**：`modules/<slug>/` content claims + 素材，网站唯一读取层（validate 已强制 approved 门槛）。

关系示例（立春）：《月令七十二候集解》维基文库本（素材）→ hist-yueling-lichun-pentads 三候卡（待核验知识）→ 人审通过后 → 索引"核心理解"第1句与互动创意2（解释/体验），创意2 本身永远是 Creative Proposal 不升为事实。

## 三、现有知识的三层落位

- Research Material：12 Source；hist-huainanzi / hist-yueling（含直引原文段）；研究日志×3
- Verified Knowledge（pending 人工）：其余 12 张 claim 卡全部 draft 待审——UNESCO 卡、三候卡、九华/说春卡是人审优先级最高的四张（证据已双源/直读）
- Human Explanation（draft）：立春索引新增章节；当前依赖节点均未 Verified，故按规则**不可导出**

## 四、Visual / Audio / Interaction 素材边界审计

逐条检查结论：当前**无边界违规**，且防线已在文本中：

- Visual / Audio 素材数为 0（无版权风险面）；"音比南吕"仅作为《淮南子》卡内的**历史文本事实**存在，未被写成音频资产。
- idea-lichun-interaction-sketches 全卡 epistemic=opinion、开头有性质声明，四条创意分别锚定知识卡；创意3 对九华非遗的呈现红线（不得泛化为全国古俗）已写明。
- 已修正的边界风险：跨文化比较框架此前仅"线索级"标注，存在被内容生产误读为"文化对应关系"的可能——已降级 Candidate 并加三要素声明块。
- 结论：**"三候=文化/历史资料，冰裂动画=Creative Proposal"这类分层在本库可执行**；建议后续在 validate 中加机器规则（见第九节建议4）。

## 五、Global Expressions 当前状态

统一 **Candidate**（正文标注承载，协议枚举暂无 candidate 值）：

- interp-global-early-february-marks：候选比较框架（Imbolc/Candlemas/Groundhog/节分），全部来源未直读
- glob-setsubun-early-february：候选表达，Similarity（同以立春为季节标记）/ Difference（仪式内容与农事绑定形态不同）/ Relationship（汉字历法圈传播关系，非平行发明、非同一节日）已显式声明

升级条件：来源直读 + 跨文化顾问/社区确认。本轮起不扩展全球研究。

## 六、审计发现与修正（未删除任何研究历史）

| 节点 | 问题类型 | 修正 | 修改记录 |
|---|---|---|---|
| sci-lichun-longitude-315 | 证据等级混排（"2月3-5日"无直读来源却入命题） | 日期移入 exceptions 待核验 | 已留档 |
| hist-huainanzi-complete-24terms | 直读范围模糊（仅冬至→雨水段亲验） | 证据节显式标注直读范围 | 已留档 |
| fact-solarterms-yellow-river-origin | 时代推断倒灌（"先秦逐步形成"无文献依据） | period 改为"西汉定型；先秦待研究" | 已留档 |
| interp-global / glob-setsubun | 全球卡未标 Candidate | 标题+声明块降级 | 已留档 |

未发现：重复节点（各卡命题互斥）、地域泛化（每张传统卡均限定地域）、传统/科学混淆（三候卡已分"现象记录 vs 五行解释"两层）、现代解释倒灌（除已修正的黄河流域卡时代字段）。

## 七、当前知识库模型存在的问题

1. **Verified 层为空**：瓶颈是人工审核资源，不是 AI 产出量。在至少 4 张高证据卡完成人审前，"研究→解释→体验"的流水线无法真正流通。
2. **协议缺 Calendar 维度**：节气与农历的关系（正月节/中气/置闰）是外行人最大困惑点之一，目前无家可归。
3. **缺 HumanExplanation 类型**：核心理解暂存索引章节，可维护性与 24 节气规模化后的一致性受限。
4. **GlobalExpression 无 candidate 枚举值**：降级只能靠正文标注，机器不可校验。
5. **系统级事实的归属**：UNESCO/黄河流域卡挂在 lichun 下，复制到 23 个节气时要么重复要么断链。
6. **线索级证据的机器约束缺失**：validate 不阻止"只引用 unverified 来源的卡自标 medium"。

## 八、内容生产出口（设计）

```
Research Material（sources/原文卡/日志）
   ↓ 人审（human_review + 来源 human-verified）
Verified Knowledge（approved claim 卡）
   ↓ 每句可回溯
Human Explanation（索引"核心理解"章节，draft 封存至依赖全 Verified）
   ↓ 显式选择 + 素材授权
Experience Content（modules/<slug> content claims + assets，approved 才发布）
```

网站只读第 2、4 层；第 3 层随模块内容进入；ResearchNote/Source/InteractionIdea/GlobalExpression 永不直接可见。此规则已写入 [[00_project/guide|vault 规范]]，且大部分已被 validate.ts 机器强制。

## 九、对 24 节气统一研究模板的修改建议

1. **每个节气的 ResearchNote 增加三段固定结构**：覆盖矩阵（本表19维度评级）、素材边界审计、修改记录——本轮已在本日志示范。
2. **每节气索引固定章节**：核心理解（约100字）/ why-it-matters / 叙事链（逐环证据评级，弱链标候选）。
3. **系统级事实抽为共享节点**：UNESCO、黄河流域起源、国标定义等建为 solar_terms 为空或多值的系统卡，由各节气链接而非复制（需协议允许后执行）。
4. **validate 增强（后续 PR）**：(a) 只引用 unverified 来源的 claim 卡 confidence 不得高于 low；(b) GlobalExpression 增加 candidate 状态枚举；(c) 标题含"（线索级）"的 Source 被非 Candidate 笔记引用时告警。
5. **协议 PR（需契约变更流程）**：新增 calendar 维度或明确其归属；新增 HumanExplanation 笔记类型。
6. **试点门槛**：复制到下一个节气前，立春需先完成：4 张高证据卡人审 → Verified 层非零 → 核心理解依赖全部达标 → Calendar 维度决策落地。

## 十、本轮自检

- 未新增任何网络检索；未触碰其他节气；未产出网页/视觉/宣传文案。
- 修正仅调整状态与表述层级，全部留修改记录，研究历史完整。
- 本复盘本身为 draft，结论待人工确认。

[[01_terms/01_立春|立春索引]] · [[07_research/research-lichun-pilot-log|第一轮执行日志]] · [[00_project/guide|vault 规范]]
