# Architecture & Design Decision Records

重大设计、技术、文化边界和社区治理决定记录在这里。沿用 [初始化决策表](../architecture/decisions.md)，不复制或改写原始 PRD；它保留历史对照，本目录记录可链接、可演进的单项取舍。

命名 `ADR-NNN-short-topic.md`，编号只增不复用。小修写 Journey 即可；影响跨模块契约、文化语义、许可或长期维护的改变写 ADR。先写 Proposed，再由真实负责人确认；AI 可整理既有决定或提出方案，不能编造批准人与批准日期。修改既有决定时新增 ADR 并相互注明 Superseded by / Supersedes，保留旧上下文。

## 模板

每份必须含 `Context / Problem / Options / Decision / Why / Trade-offs / Status`。Context 附证据/任务、记录日期与作者；Status 使用 Proposed / Accepted / Rejected / Superseded，或明确标 Recorded existing decision / Documented policy。Accepted 必须有真实负责人和决定记录；文档整理时间不是历史批准时间。

## 索引

- [ADR-001 单一 Monorepo](ADR-001-monorepo.md)
- [ADR-002 Static first](ADR-002-static-first.md)
- [ADR-003 文化证据与创作表达分层](ADR-003-cultural-evidence.md)
- [ADR-004 季节色彩角色](ADR-004-seasonal-color-system.md)
- [ADR-005 声音语言与无声路径](ADR-005-sound-language.md)
- [ADR-006 社区投稿、发布与精选分离](ADR-006-community-expression.md)
