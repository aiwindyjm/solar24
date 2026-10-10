---
schema_version: '0.1.0'
id: 'solar24-batch-research-report'
type: 'ResearchNote'
title: 'Solar24 24节气批量研究报告（Batch Research Run · 2026-09-16）'
solar_terms: []
season: null
dimensions: ['ai-research-log']
region: []
period: null
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
    'task': '记录 24 节气 Batch Research Run 的整体统计、覆盖矩阵、共性发现、Skill 修订与剩余人工工作量',
    'queries': [],
    'discovered_source_ids': [],
    'conflicts':
      [
        '小寒/大寒"谁更冷"跨节气命题重叠已协调（小寒侧为主数据卡，大寒侧收窄视角，合并取舍留人工）',
        '机构层三候录文与《月令》直读原文存在多处异文（雉雊/雉始鸲、豺祭獸/豺乃祭獸、蝉始鸣/蜩始鸣等），均已按直读为准登记',
      ],
    'conclusions':
      [
        '24节气第一轮研究全部完成：23节气本批新增 + 立春试点；全部产出停留在 verified-candidate 及以下，Verified 层为 0（待人工）',
        '总规模：586 知识实体、231 Source（206 direct-read / 25 search-excerpt）、引擎路由 A125/B57/C55/D16（23节气）',
      ],
    'human_questions': ['从系统级共享卡开始按 [[07_research/solar24-batch-human-review-package|审核总包]] 优先级队列处理'],
  }
---

# Solar24 24 Solar Terms Batch Research Report

## 0. 运行概况

- 执行日：2026-09-16（单日 Batch Run）。模式：项目负责人批准的 Batch Research Mode（Skill 修订 #B1，序列门槛替换为"每节气≥4张高证据卡进入统一审核包"）。
- 组织方式：预研（共享卡+计划+简报）→ 四波并行研究代理（春5/初夏5/秋始5/秋冬5/冬末3，实跑五波）→ 波间 validate → 协调修复 → 统一审核包 → 本报告。
- 停止条件未触发：无 Schema 阻塞、无知识库损坏；所有资料缺口按规范转 Needs Research。

## 1. 整体统计（全库）

| 指标 | 数值 |
|---|---|
| 知识实体总数 | 586（批前 69） |
| Source 总数 | 231（批前 18；按 URL 去重 223——不等于 223 份独立证据，见 §4） |
| direct-read / search-excerpt | 206 / 25 |
| 来源 verification | cross-checked 161 · unverified 70 · human-verified 0 |
| 知识卡（claim 类） | CulturalFact 44 · ScientificFact 54 · HistoricalRecord 60 · Tradition 59 · RegionalExpression 10 · GlobalExpression 24（全 candidate）· HumanExplanation 24 · InteractionIdea 24 |
| claim 五类高置信卡（high） | **113**（Sci 47 + Hist 49 + Cult 6 + Trad 2 + Region 9）。口径：只计五类 claim 知识卡的 confidence，不含 Source 自身 confidence 字段（Source 另有 high 84 条，属来源记录自评） |
| 共享知识（02_shared） | 6 张（批前 4，新增七十二候体系、节气/中气分组） |
| 状态分布 | in-review 91 · draft 495 · approved 0（Verified 层为零，符合"AI 不代审"边界） |
| 研究日志 | 23 份 batch-log + 试点 4 份 + 模型复盘 1 份 + 计划/审核包/本报告 |

每节气平均：知识卡约 11 张、来源约 9 条（直读约 8 条）。批处理门槛（每节气≥4张 claim 五类 high 卡）23 节气中 22 个达标；**例外：小满 3 张**（xiaoman 批处理日志已如实记录 lit 卡降级过程——证据不足以支撑第 4 张 high，按"宁缺不凑数"保留缺口，不回调置信度；补强任务见 §9）。立春试点 6 张。

> 统计口径与复算：以上数字由 `pnpm tsx scripts/kb-stats.ts` 从落盘文件生成（2026-09-17 质量修正引入，替代手工汇总）。

## 2. 引擎路由分布（23个新节气，253张可路由卡）

| 路由 | 数量 | 说明 |
|---|---|---|
| A auto-candidate | 125 | 证据达标无 major finding；**仍非 verified**，Evidence Gate 人工审核后才晋级 |
| B recommended review | 57 | GB/T 正文待读、单源撑 high 的三候卡、机构转引级统计等 |
| C mandatory review | 55 | HumanExplanation（23）+ 全球表达中被路由为 human-review 的部分 + 高风险 claim 卡。注意：全球候选并不同构地全在 C——24 张 GlobalExpression 中 17 张被引擎路由为 **needs-research**（23 节气 16 张 + 立春节分 1 张），须补证或收窄后才能进入 Decision，见 §10 |
| D needs-research | 16 | 引擎级证据不足（含大雪萨米 Candidate、立冬 Samhain Candidate 等零直读项） |

立春试点另有 5 张 verified-candidate 在 [[07_research/lichun-human-review-package|试点审核包]] 待决。

## 3. 覆盖矩阵（24节气 × 19维）

各节气覆盖矩阵全文见其 batch-log。汇总印象值（23节气自报）：

- **astronomy / calendar / phenology / history / climate**：complete-partial 全覆盖（黄经卡+三候卡+专题卡三件套每节气齐备）——启动门槛 100% 达标。
- **agriculture / customs / chinese-life**：partial 为主（农谚与习俗证据链机构级占多数，方志级谱系普遍留缺口）。
- **food**：partial/weak 为主——食俗是最容易被现代流行叙事污染的维度，本轮普遍采用"古籍锚+地域限定+宁缺"策略（贴秋膘/立冬饺子/冬至饺子汤圆/尾牙/腊八等全部完成日期锚与断代辨析）。
- **literature-art**：complete-partial（每节气≥1首直读诗；元稹《咏廿四气诗》组诗维基文库无页，为全库共性缺口）。
- **regional-differences**：10 张地域卡 + 非遗锚点 7 项全部项目页直读（九华/石阡〔试点〕、安仁赶分社、半山立夏、苗族赶秋、送大暑船、壮族霜降节、三门祭冬）。
- **ecology / visual-assets / audio-assets**：missing 为主（现代物候观测、授权素材——按计划允许，全库共性 Needs Research）。
- **global-expressions**：24 张全部 candidate，无一"等同/对应"式表述（引擎 global-forced-correspondence 零命中）。

## 4. 来源结构

- **古籍直读（维基文库为主）**：月令七十二候集解（24节气三候+节/中标签）、淮南子（天文训/本经训/说山训）、素问·六节藏象论、荆楚岁时记、燕京岁时记、帝京景物略、史记、后汉书·礼仪志、春秋繁露、礼记（月令/祭义）、文献通考、钦定大清会典、清嘉录（无书，如实记录）、古今图书集成·岁功典（立秋064/立冬084/夏098等卷，为本轮意外增量来源）、红楼梦二十七回、诗经·蒹葭、全唐诗/千家诗作品页。
- **机构直读**：非遗网（24个专题页+7个项目页，编号链 40-46 与 6969-6984 全部贯通）、新华社/新华网（每节气≥1）、中国天气网、人民日报/人民日报海外版、紫金山天文台、香港天文台、日本国立天文台24sekki（多节气）、韩国学中央研究院（雨水）、un.org（诺鲁孜节/中文日）、深圳气象局、港府站点（惊蛰打小人）、科普中国、地方媒体（央广网/浙江在线/湖南日报等）。
- **search-excerpt（25条）**：全部 verification=unverified、只支撑 low 卡（全球表达候选与个别线索），无一冒充直读（excerpt-as-read 引擎零命中）。

## 5. 证据等级 · 风险 · 影响分布

- **证据等级**：claim 五类 high 卡 113 张。其中 106 张为双独立直读或古籍直读+机构交叉；**7 张例外为单一发布方（维基文库）直读的古籍文本卡**——hist-yueling-{lichun,chunfen,qingming,chushu,daxue,dongzhi}-pentads 与 hist-jingchu-lichun-customs：其命题范围限于"该文本如何记载"（单原典即充分），不依赖第二来源成立，但**不得用于支撑文本之外的历史/现实断言**（如"该物候当时普遍出现"），审核时按此边界处理。medium 卡机构单源或转引级为主；low 卡集中于 GlobalExpression（设计如此）。
- **风险分布**：high 集中在——系统级共享卡（6）、全国性气象统计（小寒vs大寒、秋分昼夜）、历史断代公案（启蛰改名、贴秋膘、祭月/中秋起源、迎冬礼制）、Legend 层（仓颉、张仲景、阿斗秤人、寒号鸟辨析）、现代节庆辨析（开渔节、丰收节2018、尾牙商业史）、全球表达与解释层。
- **影响分布**：system 6 · term 为主 · regional 10 · creative 24（InteractionIdea）· global 24。

## 6. 跨节气共性发现（第一轮研究的真实结构）

1. **"节气名≠当天天气"是全国性公众误解，也是全库最重要的教学点**：立春/立夏/立秋/立冬四张"天文季节 vs 气象季节"卡同构成立；小寒vs大寒"名实倒挂"（23省小寒更冷）为最典型案例。
2. **日期锚辨析模式反复出现**：按农历日定期的地方节俗被流行叙事归入邻近节气（拉保保=正月十六、尾牙=腊月十六、中元=七月十五、重阳=九月初九、腊八=十二月初八、中秋=八月十五）——共6组，全部完成"两套日期系统"的分层登记。
3. **食俗断代普遍落空**：贴秋膘（清末文献无载）、立冬饺子（岁功典方志层零命中）、"冬至不端饺子碗"（张仲景传说=legend）——"流行食俗≠古俗"需要逐卡的历史化表述。
4. **机构层转写污染**：非遗网等机构页对古籍的转写存在嫁接引文（大暑"今则热气犹大也"实为小暑条）、异文（雉雊→雉始鸲、豺祭獸→豺乃祭獸、候雁北→鸿雁来）、虚构归名（"礼记载天子春朝日秋夕月"实出应劭注）——本轮全部回维基文库原文直读校准，并作为 Skill 回归认知沉淀。
5. **"自古/起源于X朝"叙事是最大幻觉源**：雨生百谷（非月令原文）、竖蛋4000年/清嘉录（零一手文献）、数九出自荆楚岁时记（零命中）、史记"产气始萌"（无命中）——防幻觉清单已随简报传递并在各日志留档。
6. **礼制直读链可复原**：夏至祭地（史记→清会典）、秋分夕月（礼记·祭义→文献通考→钦定大清会典）、冬至贺冬（后汉书→东京梦华录→帝京景物略）三链全程古籍直读成立——这是本轮最扎实的历史增量。
7. **全球表达的结构**：汉字历法文化圈传播（日本NAOJ/韩国，多为机构直读级）+ 独立平行项（Nowruz、Yalda、Lammas、仲夏、犬日、Samhain、Plough Monday、萨米雪知识、寒中修行、收获月）——传播关系与平行关系严格分记。

## 7. 各节气独有内容（摘要）

立春=试点；雨水=正月中气首例+保保节日期锚；惊蛰=启蛰改名公案+鹰化为鸠；春分=黄经0°锚+安仁赶分社+竖蛋现代流行；清明=寒食融合四点断代链+清明节非遗；谷雨=仓颉传说分层+UN中文日；立夏=半山立夏+秤人传说；小满=命名哲学的现代阐释分层+动三车；芒种=红楼梦饯花神+双抢；夏至=祭地三层直读+"一真最三假最"；小暑=三伏干支机制+出梅入伏；大暑=送大暑船+俞樾原书+腐草为萤古今分层；立秋=贴秋膘断代落空+苗族赶秋+岁功典064卷；处暑=开渔节现代节庆辨析+中元双锚；白露=蒹葭源头+露形成机制+五地习俗版图；秋分=夕月直读链+丰收节2018+中秋起源说contested；寒露=重阳双锚+鸿雁来宾主宾注文；霜降=壮族霜降节+辐射霜科学分层；立冬=迎冬礼+立冬饺子词源倒灌；小雪=腌藏南北分节+虹藏对偶；大雪=寒号鸟释义链断裂+瑞雪兆丰年农谚/科学分层；冬至=贺冬郊天三段链+三门祭冬+张仲景legend+数九；小寒=名实倒挂主数据卡+腊八双锚+九九消寒图；大寒=尾牙日期锚+寒中修行+节气循环闭环。

## 8. Skill 在批处理过程中的修订与缺陷记录

- **#B1（流程修订）**：Batch Research Mode——序列门槛替换、A/B/C/D 审核四层、共享优先、批量终点。已写入 SKILL.md；未改路由引擎代码，tests/research 不受影响（全绿验证）。
- **#B2（工程缺陷·已绕行）**：route.ts 全库加载无容错，并行批处理时被其他代理半成品 YAML 弄崩。解决方案：.batch-tmp/batch-route.mts 容错运行器（同源逻辑，打印跳过清单）。**未修官方 route.ts**（避免与并行写冲突）；建议批处理结束后评估是否将容错加载合入官方引擎（若合入需按修改规则走回归测试）。
- **#B3（协议执行发现）**：GlobalExpression 的 relationship_to_solar_term 枚举是隐性红线（小暑代理自造值被引擎拦截后修正）；维基文库同托管方双页不构成独立交叉（夏至文学卡降级先例）。两者均为简报级传递，未改代码。
- **未新增机器回归测试**：本轮缺陷均为流程/工程层（B1-B3），路由规则本身零改动、零误报退化——8个固定 Regression Cases 与立春回放结论均未被触碰，无需新增 case（若后续将 B2 合入官方引擎，须补"容错加载"回归）。

## 9. 尚未确认的关键问题（第一轮边界）

1. GB/T 33661-2017 正文条款（全库继承待办——24张黄经卡的法定表述核读）。
2. 元稹《咏廿四气诗》组诗可靠文本（维基文库无书；24节气文学卡的最大共性缺口）。
3. 《清嘉录》《帝京岁时纪胜》点校本直读（贴秋膘/竖蛋/冬至大如年断代的最后缺口）。
4. 各三候的现代物候观测验证（生态维度整体空白）。
5. 逐省气候统计的原始数据源（国家气候中心/中国气候公报级）。
6. UNESCO 官方页比对（试点起待办）+ 壮族霜降节 UNESCO 子项身份的第二独立源。
7. 视觉/音频素材授权研究（资产层整体空白，属 Experience Gate 前置）。
8. 小满第 4 张 claim 五类 high 卡缺口（当前 3 张，详见 [[07_research/research-xiaoman-batch-log|小满日志]] 降级记录——候选：动三车古籍链《清嘉录》/《吴郡岁华纪丽》直读、祈蚕习俗文献链）。

## 10. 剩余人工工作量（进入发布前的两条并行轨道）

- **优先审核队列（工作量估计，不是发布放行清单）**：C 级 55 项（HumanExplanation 23 张=Stage 2、全球候选中被路由为 human-review 的部分、高风险 claim 卡）+ B 级 57 项 + 立春 5 张 verified-candidate + 系统共享卡 6 张。A 级 125 项建议抽检 10-15% 用于评估整体质量——**抽检不等于放行**：任何卡进入发布内容前仍须逐卡留下人工审核记录（Evidence/Content/Experience Gate 继续生效）。
- **补证轨道（无法靠一次 Decision 解决）**：24 张 GlobalExpression 中 17 张被引擎路由为 needs-research（23 节气 16 张 + 立春节分 1 张），须补直读来源或收窄断言后再审；小满第 4 张 high 卡缺口；GB/T 正文、元稹组诗、清嘉录点校本等 §9 缺口。
- 审核入口：[[07_research/solar24-batch-human-review-package|统一人工审核总包]]（含优先级队列 Q0-Q6 与逐 ID 清单）。
- 审核完成前：Verified 层保持为零，任何内容不得进入网站/README/模块。

## 11. 项目状态声明（真实状态）

- Research Complete：24/24 第一轮完成 ✔
- Evidence Candidate Complete：24/24（586 实体，机器校验全绿；证据质量修正与补证仍在进行，见 docs/research/knowledge-base-quality-remediation-2026-09-17.md）✔
- Human Review Pending：全部待人工（91 in-review + 495 draft 中受影响部分）✖
- Explanation Pending：24 张解释卡全部 draft（支撑卡未 approved，Content Gate 锁定）✖
- Experience Pending：未开始（按边界，正确状态）✖

[[07_research/batch-24-solar-terms-plan|批量研究计划]] · [[07_research/solar24-batch-human-review-package|统一审核总包]] · [[07_research/lichun-human-review-package|立春试点包]] · [[00_project/guide|规范]]

## 修改记录

- 2026-09-16：批量研究报告初版（随批处理收官生成）。
- 2026-09-17（质量修正 F02/F06，依据 docs/research/knowledge-base-quality-remediation-2026-09-17.md）：①高置信卡 157→**113**（原数字把 Source 自身 confidence 混入且加总错误，审计 F02 指出）；②补小满 3 张 high 的门槛例外登记（不凑数回调）；③补 7 张单一发布方（维基文库）high 古籍卡的独立性例外与使用边界；④585/90→586/91 统计漂移修正，统计改由 scripts/kb-stats.ts 可复算；⑤§2 C 级组成说明更正（17 张 GlobalExpression 引擎路由为 needs-research，不能表述为全在 C）；⑥§10 "当前唯一阻塞项"改为"审核+补证两条并行轨道"，明确 A 级抽检≠放行、"约66项"是优先队列工作量而非发布认证总量。
