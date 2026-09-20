# Development Journey + Community Music · 历史交付记录

> 以下保留首次 Journey/社区规范交付时的状态。后续 V5 已上线；当前进度见 [V5 交付](v5-demo-release.md) 和 [制作过程](../development-journey/README.md)。

实现阶段记录日期：2026-09-20（下列16项为提交前快照；后续 Git 整理见文末）。范围为过程展示、社区参与规范、投稿表单、数据结构、校验与文档入口。本轮没有制作正式音乐、录入真实社区作品、虚构贡献者或改写文化人审状态；没有部署、发布或创建 Git commit/tag。

## 1. Development Journey 架构

[统一入口](../development-journey/README.md)覆盖 Research、Cultural Understanding、Story、Visual Direction、Color Language、Sound Direction、Interaction Design、Prototype、Implementation、Refinement、Release 共11阶段。一个节气先用一份 overview，有内容才拆阶段文件，未批量建立24套空目录。

[立春记录](../development-journey/lichun/00-overview.md)引用真实研究/模块文件；[V1–V4 演进](../development-journey/prototype-evolution.md)区分事实、原文反馈与整理者解释。统一使用“初版 / 问题 / 证据 / 调整 / 原因 / 取舍 / 验证结果 / 下一步”。保留六种成熟度与代表素材约定，不复制全部实验资产。

## 2. 新增文件

相对于本轮开始的工作区，新增29个文件，增量修改16个已有文件，共45个文件；统计不把既有未提交研究与原型算成本轮工作。

```text
.github/ISSUE_TEMPLATE/music-contribution.yml
COMMUNITY_GUIDELINES.md
docs/development-journey/
  README.md
  journey-template.md
  prototype-evolution.md
  lichun/00-overview.md
docs/decisions/
  README.md
  ADR-001-monorepo.md
  ADR-002-static-first.md
  ADR-003-cultural-evidence.md
  ADR-004-seasonal-color-system.md
  ADR-005-sound-language.md
  ADR-006-community-expression.md
docs/development/
  commit-convention.md
  release-process.md
  journey-community-delivery.md
docs/community/
  README.md
  music-contribution.md
  music-call-template.md
  music-metadata-template.json
  workflow.md
  credits.md
  global-expression.md
docs/protocol/
  community-expression.md
  schemas/music-submission.schema.json
  schemas/contributor-credit.schema.json
packages/protocol/src/community-music.ts
scripts/community-music.ts
tests/community-music.test.ts
```

修改的已有文件：

```text
README.md
CONTRIBUTING.md
.github/pull_request_template.md
docs/README.md
docs/architecture/overview.md
docs/architecture/decisions.md
docs/contributing/governance.md
docs/contributing/licensing.md
docs/protocol/global-expression.md
modules/_template/README.md
modules/lichun/README.md
packages/protocol/src/index.ts
scripts/export-schemas.ts
scripts/validate.ts
package.json
tsconfig.json
```

## 3. ADR 规范

[ADR 索引](../decisions/README.md)定义 Context / Problem / Options / Decision / Why / Trade-offs / Status。六份记录涵盖 Monorepo、静态优先、文化证据、色彩、声音和社区机制。既有决定、当前规范与生产提案明确分开；没有补造批准人或批准日期，色彩生产方案仍为 Proposed。

## 4. Commit Convention

[轻量约定](commit-convention.md)覆盖 feat、fix、docs、design、audio、visual、research、refactor、test、perf、release；scope 可选，中英文均可。非直观变化在正文说明原因并链接 Journey/ADR，不改写历史或添加强制 hook。

## 5. Release Convention

[发布流程](release-process.md)定义 concept/prototype/interactive/audio/stable 里程碑与 What changed / Experience / Research basis / Design changes / Known issues / Credits。单模块 tag 带 slug；现有 manifest.version 保持三段数字。文化、许可和发布必须真人核对，当前没有创建 Release。

## 6. Community Music Contribution Protocol

[音乐协议](../protocol/community-expression.md)记录 Who / Where / What / Why / How，以“为什么用这段声音表达这个节气”为核心。新增契约留在既有 protocol 包，不增新 package；不改变原 GlobalExpression 的字段与状态，不把研究候选变成真实社区作品。

## 7. Issue Form

[表单](../../.github/ISSUE_TEMPLATE/music-contribution.yml)包含24节气、三种可提交层级、作者/地点、文化关联、声音参数、原创/许可、AI、参考、Credits、联系与同意。核心字段 required；idea 无音频可写 N/A；公开联系避免私人信息。网站展示同意独立选择。未指定不存在的标签或远程地址；合入 GitHub 默认分支后才会出现表单。

## 8. Contribution Workflow

[流程](../community/workflow.md)：Discover → Submit → Automated Check → Community Review → Curator Review → Accepted → Published → Featured。九种投稿状态加独立 publication 记录，支持 needs-info、复核、取消精选与撤回。

新增 `pnpm community:check <metadata.json>`；真实元数据未来通过 PR 放入本节气 `community/music/<id>.json`。现有 validate/lint/build/CI 消费同一契约。当前没有 Issue 自动回复、音频下载、艺术排名或自动发布；人工整理表单到 JSON，自动检查声明值与结构，真实可播放性/文件属性仍需核验。

## 9. Music Metadata Schema

[音乐 schema](../protocol/schemas/music-submission.schema.json)覆盖请求的全部元数据，并增加文化范围、核心理由、审核轨迹、发布、精选与 Credits；[署名 schema](../protocol/schemas/contributor-credit.schema.json)支持五类贡献。Zod、JSON Schema 导出和本地/CI 消费者同步。

12项新增回归测试覆盖无音频 idea、必填解释、格式/体积、AI 信息、越级审核、权利门槛、展示同意、发布/精选、撤回与再次审核、重复提示、文件消费和表单/schema 一致性。测试中的合成身份只存在于测试夹具，不是社区名单。

## 10. License / AI disclosure

允许 CC0-1.0、CC-BY-4.0、CC-BY-NC-4.0、Other / Custom，逐项记录条款与署名。权利不明为 `rights.status=needs-review`；accepted 需要真实清权记录。AI yes 必须记录工具、模型（未知可 null）、日期、条款、参考与人工贡献；日期/条款未知不能清权。不假定 AI 输出可自由再授权。

## 11. Featured Expression 机制

Accepted ≠ Published ≠ Featured。精选必须是已发布音频，具有展示同意、权利审核、真实 Curator/date/reason 和完整署名。可同节气多首，不代表国家最佳作品。未来页面按官方文化解释 → 官方体验 → 社区表达 → 精选 → 其他解释 → 贡献者排列；[展示规则](../community/global-expression.md)明确过滤与空状态，本阶段不做网页播放器。

## 12. Community 文档

[社区入口](../community/README.md)、普通创作者音乐指南、活动模板、审核流程、Credits、全球展示和根社区规则已建立。Discussions 负责想法、交流、合作、主题；Issues 负责结构化投稿、任务和审核。Visual/Research 新社区入口只标规划，研究仍沿用现有严谨流程。

## 13. README 新增内容

根 README 增加 **How Solar24 Is Made**：Research ↓ Story ↓ Visual ↓ Sound ↓ Interaction ↓ Code ↓ Experience，链接 Journey、V1–V4、立春和 ADR；新增社区声音入口并如实说明线上启用条件。CONTRIBUTING、docs 索引、模块模板、立春 README 与 PR 模板同步链接。

## 14. Git 状态

工作分支仍为 `main`，HEAD 保持初始化提交 `7418d79`。开始时已有大量修改和未跟踪文件，本轮仅做上述增量；未删除任何基线文件，未修改知识笔记、原始 PRD、原型资产或锁文件，未暂存、提交、推送或改远程设置。

收尾核对时发现工作区另有并行新增的 `docs/design/solar24-v5/` 文件；它们不是本轮创建，未改动，也不计入上述45个文件或本轮验收。测试结果对应本轮命令运行时的状态，不声称验证了随后新增的 V5。

音乐源码通过真实 `.ts` 路径从 protocol 导出，noEmit 类型检查启用 allowImportingTsExtensions，兼容 Vite 配置的 Node 源码加载。依赖与 pnpm-lock.yaml 未改变。六份原有生成 schema 与本轮开始时逐字节一致，保留了之前已有的 schema 修改。

## 15. 测试结果

| 检查                            | 结果                                                                                                 |
| ------------------------------- | ---------------------------------------------------------------------------------------------------- |
| pnpm lint                       | 通过：ESLint、TypeScript、24模块/586知识实体/13模板及链接校验                                        |
| pnpm test                       | 7个文件、69项通过，其中新增社区测试12项                                                              |
| pnpm build                      | 通过；保留 Zod 依赖原有 PURE 注释警告                                                                |
| pnpm schemas                    | 通过，导出8份；仅两份新增，其余与工作区基线相同                                                      |
| pnpm community:check            | 对忽略目录的合成 idea 实跑通过，提示需权利人审；未写审核状态或访问网络                               |
| Git diff whitespace（本轮路径） | 通过                                                                                                 |
| 全仓 git diff --check           | 存量 knowledge-base/07_research/README.md 有文件尾空行提示；该文件本轮未改，不为通过检查清理他人改动 |
| pnpm test:e2e                   | 未运行：未修改导航、Host 或 module-runtime 行为；本轮已验证生产构建                                  |

最初构建发现新增 `.js` 重导出无法被 Node 源码加载，现已修为实际 `.ts` 路径并重跑 lint/test/build 全部通过。未把 GitHub 线上表单、音频审听或艺术/文化审核宣称为已测试。

## 16. 最推荐的下一阶段

用**立春的一次小规模真实声音征集**验证流程：维护者先确认 Curator、审核时间和联络渠道，补齐获审的立春说明；再由真实参与者提供少量 idea/demo，走一次补充信息、清权、人工评议、署名和撤回演练。原型继续用 Journey 记录为什么改变。根据真实参与体验再决定是否开发社区播放器或 Issue 自动检查服务，而不是扩大到24首正式音乐。

本阶段完成后暂停，等待下一轮明确任务。

## 后续 Git 整理与提交验证 · 2026-09-20

用户随后授权整理并提交 Git。本次按可独立检出的变更拆分为资产校验修复与 Journey/社区声音两项提交，具体 SHA 见 Git 日志。

- 共享文件只纳入本阶段增量：未将既有研究 schema、Three.js 依赖、研究脚本或 V1–V5 原型一并提交。
- Journey 中尚未进入 Git 的原型/研究来源保留明确路径与“工作区材料，尚未提交”标注，避免形成 GitHub 死链；待对应材料独立提交后恢复链接。
- 独立检出发现原有文档 SVG 的清单哈希/体积基于 CRLF，而 Git 存储 LF。现按 Git 中的真实字节更新 `assets/docs/manifest.json`；图像内容不变，严格哈希与体积校验保留。此修复额外涉及一个清单文件。
- 在独立检出目录按原锁文件离线安装，并运行 `pnpm lint`、`pnpm test`（4个文件、42项，含12项社区测试）、`pnpm build`、`pnpm schemas`，全部通过。这里不包含未提交的研究/原型测试，与前述完整工作区的69项结果属于不同范围。
- 六份原有 schema 在待提交版本中无改动；原工作区的研究修改继续保留。未创建 Release 或部署，未推送远程。
