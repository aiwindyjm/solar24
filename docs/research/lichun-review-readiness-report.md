# 立春审核就绪执行报告 · Lichun Review Readiness Report · 2026-09-18

本轮执行"立春最小文化内容样本与审核闭环"准备阶段：处理 [PRD 回归审计](knowledge-base-prd-audit-2026-09-18.md) R01–R05、回归 PRD 确定首版范围、形成可直接审阅的立春内容包与理解测试方案。未重新批量研究、未开发 Web/3D、未填任何人工审核字段（approved 仍为 0，human_review 全 null）、未提交 Git。

## 1. R01–R05 实际处理状态及证据

### R01 清明中英不一致 — 已修复

- [修复] `qingming-human-explanation.md`：英文一句话的 `the only one ... that also grew into a major traditional festival`（中文已于 09-17 收窄、英文漏同步的历史排他断言）改为与中文同构表述；"法定节假日"补管辖区与时间限定（**中国内地、2008 年起**；港澳另有公众假日制度，显式排除出断言范围；依据为新华网关于全国法定节假日的直读）。
- [回归] 新增 **Case 11（bilingual-assertion-alignment）**：中英双层同时出现唯一性断言时强制列入人工对齐核对——这正是清明漏检的形态（两层各有 only/唯一，旧规则因"双方都有强量词"而静默）。规则明确声明其边界：**关键词规则不能判定双语限定的是否同一命题，命题级对齐永远属于人工验收**；单语出现唯一性断言时不触发（防噪声，附负例测试）。
- [诚实声明] 本修复不是替换 only 关键词完成的：英文新句重写了命题结构（statutory public holiday in mainland China since 2008），中文侧补齐了管辖区。

### R02 立春解释未收口 — 已修复

`lichun-human-explanation.md` 按 2026-09-18 版整体收口（修改记录七项）：

1. **S3"此时中国大部仍然寒冷"**（无同域背书的分布断言）→ 改为定义层表述"气象学的入春要按当地气温另行判定"；展开版"中国多数地区入春要等……"同步收窄为口径说明。**未强行找支持，直接删除断言。**
2. **S7"更多地方吃春饼或春饼类食物"** → 历史化+机构层（清代《燕京岁时记》记载；现代分布未核不写）。
3. **九华/石阡拆开分述**：九华=以农历立春日为祭祀日；石阡=**"从春节或立春开始、春分结束"**（恢复来源原口径，修正原"仍按立春日举行"的合并表述——审计 09-18 外部直读同页复核一致）。
4. **yachun → yǎochūn**（普通话声调，术语表同步）。
5. **权威文本位置确立**：frontmatter `explanation` 为权威，正文为投影（正文各段显式标注"见 frontmatter …（投影）"）。
6. **四层分层**：展开版按"现代天文定义/传统历法/古典物候文本/现代气象口径"显式标注。
7. 引擎复跑：unsupported-distribution 与 modern-spread-over-historical-scope **清零**（仅剩 explanation-gated 正常门禁）。

### R03 同源证据与复合命题 — 已处理（最小改动，非全库重构）

- [路由] 新增 **same-source-evidence-declared** 规则：卡内 YAML exceptions 声明同源结构（转写核对/传承渠道标记）→ high 卡升 major 保守送审。六张三候卡（小满/白露/寒露/霜降/大寒/谷雨）的 exceptions 已补机器可读标记。**回归 Case 12**：复现"小满三候卡正文写'独立证据方仍为 1'、引擎却报 independence 2 / auto-candidate"的真实漏检——现在该类卡路由 human-review-required。
- [语义] `independence` 显式定义并改标签为"**发布方直读×N**"（route.ts 注释+SKILL.md+CLI 输出）：它是发布方多样性近似，不得表述为"已确认的独立证据数"。
- [复合卡] `trad-lichun-yaochun`（立春首版实际依赖）正式 claim 收窄：未核的"当代北方春饼/南方春卷分布"子命题从 statement 移入 exceptions 与研究正文——整卡 human_review 只对 statement 生效，局部批准不再放大为整卡批准。先例写入 SKILL.md。

### R04 审核操作说明 — 已修复

` solar24-batch-human-review-package.md`：①删除"A 区无需逐卡审核，抽检即可"“不必逐卡审”两处旧句（frontmatter human_questions 与 §0）；②新增明确规则——**抽检 A/B 区仅用于库存质量评估；任何选入正式发布内容的卡（无论何层）必须逐卡完成发布审核；未选入首版的库存卡不阻塞发布**；③新增 **Decision→Schema 映射**：approve→human_review.decision: approved+status in-review（发布前还需来源 human-verified）；revise→changes-requested+回 draft；hold→保持 in-review 并在 Notes 记录；reject→withdrawn。**对应版本=卡片 frontmatter `updated`+修改记录；表格与 YAML 不一致时以 YAML 为准；AI 不得代填。**

### R05 共享知识生产契约 — 已修复（含纯夹具测试）

- [协议] 新增 `assertKnowledgeUsableForTerm(note, slug)`（packages/protocol）：引用卡必须整体可发布（assertPublishableNote 前置）且属于本节气**或**为系统级共享知识（solar_terms 为空）。
- [validate] `scripts/validate.ts`：approved 内容的 knowledge_ids 检查改用上述函数，并对空 solar_terms 卡加**目录约束（必须位于 02_shared/）**——防止把任意清空 solar_terms 的私有卡当共享绕过；跨节气私有卡仍拒绝（错误信息明确）。
- [测试] `tests/protocol.test.ts` 新增 R05 describe（3 组纯夹具，改造 90_templates/CulturalFact 模板，**不修改任何真实研究记录**）：①合法已审核共享卡可引用；②本节气卡通过、他节气私有卡被拒；③draft/withdrawn/contested/无 human_review 均被拒。
- [文档] `docs/protocol/content.md` 补共享知识引用规则与"已批准解释→生产文案"的人工 PR 路径说明（明确不开发自动导出器）。
- [Schema] 本轮只增函数未改 zod schema；`pnpm schemas` 运行后 docs/protocol/schemas/ 的 diff 为此前批处理轮累积（risk_level/explanation 等字段），非本轮新增。

## 2. 立春首版选用与暂缓

**选用**（[MVP 简报](../product/lichun-mvp-brief.md) §4 → [内容审核包](lichun-minimum-content-review-package.md) LC-1…LC-8）：太阳刻度机制+立春位置、黄经教学比喻、立春≠春节、立春≠同时变暖（含深圳单城数据）、三候（古典文本标注）、九华立春祭（立春日）与石阡说春（春节或立春起、春分止）分述、interpretation 收束、开放邀请。

**暂缓**（非首版前置）：置闰算法细节、三候现代考证、饮食地图、UNESCO 身份叙述、全球候选补证、音频/3D。

## 3. 新核读来源

本轮**零新增外部抓取**。审计轮（09-18）已直读石阡项目页并复核时间口径，本轮直接采用其结论修正立春解释；其余全部基于库内既有直读来源（HKO/非遗网/PMO/维基文库/深圳气象局等，摘录与定位已在审核包逐条列出）。

## 4. 尚未解决（需要真实人工决定）

| # | 事项 | 性质 |
|---|---|---|
| 1 | 审核包 LC-1…LC-8 + 解释卡整卡（Stage 2）的 Decision | **发布阻塞项**——负责人填写 |
| 2 | 英文 one_sentence/summary/why 润色与 expanded 全文翻译 | 真实译者/双语读者 |
| 3 | 术语定名终审（yǎochūn、Lichun、农历译名等） | 负责人+译者 |
| 4 | GB/T 33661-2017 正文核读 | 人工下载 PDF |
| 5 | 理解测试（5 人形成性）的执行 | 内容获准后 |
| 6 | 六张三候卡同源结构的独立第二版本（印本校勘） | 人审时对照 |
| 7 | 石阡说春逐年实际起讫 | 非首版必需 |

## 5. 验证结果

| 命令 | 结果 |
|---|---|
| `pnpm validate` | 通过（24 模块、586 实体、13 模板、引文与本地链接；含修复后的共享知识契约检查） |
| `pnpm test` | 通过：4 文件 **47 用例**（路由回归 10→**12 Case** 新增 R01/R03 真实漏检复现；protocol 新增 R05 夹具 3 组） |
| `pnpm lint` | 通过（ESLint+tsc+validate） |
| `pnpm build` | 通过（Zod PURE 警告为既有现象） |
| `pnpm schemas` | 已运行；无本轮新增差异（仅函数新增） |

一致性检查：立春解释卡与审核包 B 节快照同源（快照标注失效条件=卡片 updated 晚于 2026-09-18）；审核包 LC 条目与知识卡 Wiki 链接全部可解析；MVP 简报/审核包/执行报告三文件互链路径已验证。

## 6. 进入体验开发前必须满足的条件

1. 审核包全部选用条目获真实 Decision（revise 项完成修改并复审）。
2. 对应知识卡 human_review 落盘（按审核包映射表）；选入内容的来源升级 human-verified。
3. 英文层人工润色完成（或首版只发布中文+英文标注"翻译审核中"）。
4. 显式内容 PR：approved 内容写入 `modules/lichun/content/zh-CN.json` 与 `references.json`（R05 通路已就绪并通过夹具测试），本地可审阅 diff。
5. 轻交互原型（太阳位置示意）走 Experience Gate：文案过审、静态替代就绪。

---

## 追加 · 2026-09-18 复核收口（lichun-review-readiness-verification 三项 P1 + 小范围后续）

依据：docs/research/lichun-review-readiness-verification-2026-09-18.md。本轮只修复复核发现，未重新审计、未批量研究、未开发体验；approved 仍为 0。

### P1-1 权威文本与快照统一 — 已解决

采用"解释卡 frontmatter 为唯一首版文本"方案：①删除首版暂缓的 UNESCO 句（fact-solarterms-unesco-2016 移出 supporting_knowledge_ids，审核包无对应条目）；②深圳入春数字与候温算法移出故事（三处同步：解释卡/审核包 LC-4/MVP 简报，处置记录在案）；③"不是所有中国人统一自然观"限定写入权威 why_it_matters（不再只是审核包改写）；④审核包 §B 改为**脚本生成快照**：`scripts/lichun-snapshot.ts` 从权威字段渲染并记 sha256，`tests/snapshot.test.ts` 四用例持续校验（权威变化/快照单独改写/哈希不符均失败——不以 updated 日期判断）。**快照覆盖全部拟发布字段（含 why_it_matters 中英）**。本轮自纠：初版哈希函数用 JSON.stringify replacer 数组导致嵌套文本被过滤（只哈希了结构），测试"权威字段变化会被发现"立即抓住，已改递归稳定序列化。

### P1-2 气象表述忠实化 — 已解决

复读深圳气象局原页（2026-09-18）：确认更新时间 2025-02-20 10:02:14、判据原句"入春，五天滑动平均气温>10度，最后那天起"、"入春和入夏均需稳定达到……即达到标准后没有再出现低于标准的情况"、深圳 1991-2020 平均入春日 2 月 3 日。处置：①`source-szmb-season-division` 补全逐字摘录+页面更新时间（显式标注"更新时间≠首次发布日期"，published 仍为 null）；②`sci-lichun-vs-meteorological-spring` 订正不忠实转写（>变≥、起算规则含糊化），claim 按原句逐字引述并标注深圳本地口径边界；③故事层按建议只写"气象入春按当地气温另行判定"，无算法、无城市数字；④LC-4 省略号 URL 替换为真实地址。人工核验状态保持 pending。

### P1-3 群体概括收窄 — 已解决

删除无证据判断："全社会共同的时间信号""两千多年里……服务于庞大人口的农事协作""今天多数人不再务农"及英文 "though few farm today"；summary "官府劝农、民间迎春"收窄为"清代北京有官方迎春礼……的记载"。why_it_matters 与展开版④改为**从案例出发**（清代北京记载+九华立春祭+石阡说春→"节气如何连接自然观察、农事准备与地方生活"），项目解释以〔项目解释〕/[Project interpretation] 显式标注且中英同范围。事实例子与项目解释分开；interpretation 标签不替代证据——被删句子不是因为有了标签才保留，而是因为没有证据才删除。引擎复跑：立春解释仅剩 explanation-gated（正常门禁）；新表述中"各地"字样触发的分布检查被引擎拦截两次，均按"删除无背书分布断言"处置（拦截行为正确）。

### 小范围后续三项 — 已完成

- **R05 调用方校验**：validate.ts 的完整关联检查抽为 `scripts/content-checks.ts` 纯函数 `knowledgeReferenceProblem`（协议层+02_shared/ 目录约束），新增 3 组夹具测试：合法共享卡通过；**非共享目录中清空 solar_terms 的卡被拒**（含 Windows 反斜杠路径）；他节气私有卡/未审核卡走协议层拒绝。未改任何真实记录。
- **审核落盘流程**：审核包新增 §G 六步流程（表格 Decision → 知识卡 human_review → 来源 human-verified → status approved → 解释卡 Stage 2 → 显式内容 PR），每步标明执行人；AI 不执行任何批准性写入。
- **LC-3 归属更正**："2018 实例两处独立直读"改为"实例句来自非遗网（直读原句）；历法机制由 PMO 支持（该页不含该日期句）"——同步修正 sci-lichun-calendar-position 与解释卡 limitations。

### 本轮验证

validate（586 实体）/ test（**54** 用例：协议 11、路由 14、快照 4、模块 24、运行时 1）/ lint / build 全绿。快照哈希 `803640fa098f476ae523a383736b2ebbc315f23eed5e08e6c9ecc54b1665306b`。
