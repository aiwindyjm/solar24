# How Solar24 Is Made · 制作过程

这里记录一个文化数字体验怎样从问题、研究、原型走向作品，以及**为什么改变**。尚未完成的阶段如实标注；原型、文化审核、正式发布是不同状态。

Research → Culture → Story → Experience → Community → Global Expression

## 从哪里开始

- [统一 Journey 模板](journey-template.md)：复制到 `docs/development-journey/<slug>/00-overview.md`，有内容才拆分。
- [立春 Journey](lichun/00-overview.md)：已有研究与工程入口、当前缺口。
- [V1–V4 设计演进](prototype-evolution.md)：共享原型真实记录，不冒充 24 个已完成模块。
- [重大决策 ADR](../decisions/README.md)、[Commit 约定](../development/commit-convention.md)、[Release 约定](../development/release-process.md)。

## 统一阶段

| 阶段                                     | 需要回答的问题           | 最小记录                             |
| ---------------------------------------- | ------------------------ | ------------------------------------ |
| 01 Research · 文化研究                   | 我们实际知道什么？       | 问题、来源/知识 ID、地域时代、待核项 |
| 02 Cultural Understanding · 核心文化理解 | 希望读者理解什么？       | 事实与解释边界、依赖的审核状态       |
| 03 Story · 故事设计                      | 用什么顺序让人理解？     | 叙事路径、删减理由                   |
| 04 Visual Direction · 视觉方向           | 图像如何支持主题？       | 构图、参考、创作与史料边界           |
| 05 Color Language · 色彩设计             | 颜色承担什么角色？       | 角色与数值、对比度、变化理由         |
| 06 Sound Direction · 声音设计            | 声音表达什么？           | 声音意图、静音替代、授权/AI 状态     |
| 07 Interaction Design · 交互设计         | 行动如何帮助理解？       | 用户任务、键盘/静态路径              |
| 08 Prototype · 原型                      | 哪个假设需要试验？       | 可复现入口、版本、实验局限           |
| 09 Implementation · 工程实现             | 怎样把方案可靠实现？     | 代码/commit、边界、测试              |
| 10 Refinement · 迭代                     | 为什么改变？改变有效吗？ | 下述统一变更记录及证据               |
| 11 Release · 发布                        | 到底发布了什么？         | 范围、审核、许可、已知问题、Credits  |

阶段可以往返，不是必须顺序勾完的仪式。每阶段记录工作状态 `not-started / in-progress / blocked / complete`；这不等同于文化审核状态。版本成熟度用 `Concept / Sketch / Prototype / Experiment / Revision / Final`。Final 仅指这项设计已定稿，不自动表示获审或已发布。

## 每次改变都用同一结构

`初版 / 问题 / 证据 / 调整 / 原因 / 取舍 / 验证结果 / 下一步`

记录 ID、日期、阶段、成熟度、前后版本链接、实际作者和 AI 参与方式；重大取舍链接 ADR。反馈原话需可追溯；没有用户测试就写“待验证”。不要倒填决定日期、commit 或 reviewer。

**写法示例（虚构教学例，不是项目历史）**：初版把蝴蝶放在中央；问题是季节环境不明显；证据待观察；调整提案为把蝴蝶放入环境；原因为文化主题先于品牌主体；取舍是标志辨识可能下降；验证计划是检查读者能否先感知季节变化。不能把这段例子写成已经验证的结论。

## 文件与素材

一个节气先用一份 overview，阶段内容用标题组织；单阶段确有多次迭代才拆成 `01-research.md`、`08-prototype.md`、`10-refinement.md` 等，对齐上表编号。当前不生成其余 23 套空文件。

版本用 `P01 / P02` 等局部 ID，不等同于 release。可附图片、GIF、视频、设计链接、Issue、PR 和代码 commit。记录说明、作者、许可、日期、替代文字，以及它验证了什么。commit 未产生时写“工作区快照，未提交”；合并后补真实 SHA。

仓库只收每个关键转折的代表成果；优先链接既有文件，不复制 V1–V4 资产。新增文档图片建议压缩到 1 MiB 内，GIF/视频优先使用获授权的外部版本化链接；大文件、原始工程和失败素材留在忽略目录或授权的外部存储。外链记录失效时仍能读懂的文字摘要；不可发布的图像只留权利允许的说明，不因“教学展示”自动获得许可。

## 本阶段范围与验收

修改范围：本目录、`docs/decisions/`、`docs/development/`、`docs/community/`、社区协议/schema、`packages/protocol/`、校验脚本/测试、根贡献入口、`.github/`、`package.json`、`tsconfig.json` 和模块模板/立春文档入口。

验收：11 阶段可复用；真实原型可追溯且每次迭代说明原因；音乐表单覆盖 Who/Where/What/Why/How；数据能校验；接收、发布、精选有人工门槛；没有真实音频生产、虚构贡献者或自动发布；完成仓库要求的检查。
