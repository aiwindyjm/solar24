# 使用与审核规范

一个笔记表达一个命题、史料、传统、来源或创意；可跨维度，但不把矛盾观点融合成无条件结论。

编辑流程：draft → in-review → approved；纠错可回到 draft，失效/撤回为 withdrawn。AI 只能产出 draft 和待审建议。status 与模块 Prototype 等状态无关。

- 事实 / 科学解释：有来源和适用条件。
- 传统 / 传说：明确地域、时代及文本性质，不能作科学证据。
- 解释 / 观点：署名、依据和推论边界清楚。
- unverified：没证据或没读到原文；contested=true：有未解决分歧。

文件名可读，YAML id 稳定不随重命名改变。source_ids 链到 Source ID；正文用完整 Vault 相对路径 Wiki Links。每次有实质修改更新 updated，人审后再改正文须重新审核。

根目录执行 pnpm validate 校验 YAML、引用与链接。机器能发现漏字段，不能证明文化准确。对模板中的”待填写”、template-* 和 draft 内容不得声称审核完成。

## 内容分层与生产出口（2026-09-16 立春复盘引入）

知识库内容分四层，层间只能单向流动：

1. **Research Material 研究素材**：`04_sources/` 来源记录、直引原文的抽取笔记（如 HistoricalRecord 中的古籍段落）、`07_research/` 研究日志。允许线索级与未读来源，但必须如实标注。
2. **Verified Knowledge 已核验知识**：claim 类笔记（CulturalFact / ScientificFact / HistoricalRecord / Tradition / RegionalExpression）且 `status: approved` + `human_review.decision: approved` + 来源 `verification: human-verified`。协议已用 assertPublishableNote 强制此门槛；当前该层为空属正常状态。
3. **Human Explanation 面向普通人的解释**：`HumanExplanation` 类型笔记（三层：One Sentence / 约100字 / 展开版，加 why-it-matters 与证据标注的叙事链）。每句解释须可回溯到 supporting_knowledge_ids；其引用的节点未达 Verified 前，解释只能保持 draft，不得导出（validate 已机器强制：approved 的解释要求全部支撑卡 approved）。
4. **Experience Content 体验内容**：`modules/<slug>/` 的 content claims 与素材，是网站唯一读取层；approved 前不发布（validate.ts 已强制）。

规则：**网站与 README 只能使用第 2、3 层；ResearchNote / Source / InteractionIdea / GlobalExpression 永不直接成为用户可见内容。** GlobalExpression 的 `expression.status` 枚举已含 `candidate`——candidate ≠ verified cultural correspondence，只表示"存在值得研究的文化关联"，升级须经来源直读与相关社区/顾问确认。

## 三道发布门槛（Evidence Gate / Content Gate / Experience Gate）

**Evidence Gate（Research Material → Verified Knowledge）**——一张 claim 卡晋级必须同时满足：

1. **有来源**：source_ids 非空，且至少一条为 `access: direct-read`；
2. **来源可追溯**：作者/机构/URL/定位/访问时间齐备，摘录能复核；
3. **内容已核验**：AI 已对照至少一个独立来源（verification ≥ cross-checked；high 置信度强制要求）；
4. **人工审核**：真实审阅者填写 human_review（reviewer/date/decision/notes）；
5. **无明显冲突**：contested=false 或分歧已解决并留档；
6. **范围明确**：region 与 period 字段非泛化（"中国"级表述须有全国性证据）。

机器侧已由 validate.ts 强制：medium/high 置信度须有 direct-read 来源、high 须有 cross-checked 来源、search-excerpt-only 封顶 low、epistemic=unverified 封顶 low、approved 卡须全部来源 human-verified。机器能拦形式，拦不住内容错误——第 3、4 条仍须人。

**Content Gate（Verified Knowledge → Human Explanation 发布）**——解释卡对外可用必须满足：

1. 逐句可追溯：每句话映射到 supporting_knowledge_ids 中**已 approved** 的知识卡（Knowledge verified ≠ Explanation 自动 verified）；
2. 无 Unsupported 句：审计标记 Unsupported for publication 的句子已改写、删除或换用达标证据；
3. 解释性收束单独标注 interpretation，不伪装成事实；
4. 双语人工润色（机器译文不可发布）；
5. 跨文化误读复核（对国际读者的表述审查）。

**Experience Gate（Human Explanation → Experience Content）**——模块内容/素材发布必须满足：

1. 模块 content claims 为 approved 且其来源全部 human-verified（validate 已强制）；
2. 素材 rights_status=cleared（无授权素材不得进入资产层）；
3. 创意实现回溯 approved 知识，地域/时代/非遗身份框架终审无泛化；
4. 交互误导风险文案过审（如"节气≠天气"校准）。

## 共享知识（02_shared/）

凡不属于单一节气的体系级事实（UNESCO 认定、体系起源、历法机制、完整文献记载等）建在 `02_shared/`，`solar_terms` 为空，各节气以 links/Wiki Links 引用，**禁止在节气笔记里复制**。节气笔记只保留该节气特有命题。

[[README|返回知识库]]
