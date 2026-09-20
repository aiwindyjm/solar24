# Contributing to Solar24

先读 [README](README.md) 与 [项目原则](PRINCIPLES.md)。你可以贡献研究、翻译、声音、视觉、交互、代码或当地的季节经验。音乐投稿规范与 Issue Form 已建立，合入默认分支后可在 GitHub New issue 使用；尚无真实社区作品或精选名单。

## 创作者与制作过程

- 音乐先看 [简单贡献指南](docs/community/music-contribution.md)，回答“为什么用这段声音表达这个节气？”；一句想法也欢迎。
- [社区入口](docs/community/README.md)区分 Discussions 的讨论与 Issues 的结构化投稿；[流程](docs/community/workflow.md)区分接受、发布、精选与撤回。
- 代码/设计改动同时记录 [Development Journey](docs/development-journey/README.md)，不仅写做了什么，也写为什么改变；重大取舍写 [ADR](docs/decisions/README.md)。
- Git 提交遵循轻量 [Commit Convention](docs/development/commit-convention.md)，发布遵循 [Release Process](docs/development/release-process.md)。
- GitHub Releases 只记录经过验证的版本里程碑；普通提交、PR 合并和 CI 通过不会自动生成 Release。准备发布时必须按 [GitHub Releases 策略](docs/development/release-process.md#github-releases-策略)创建唯一的 SemVer tag、Release Notes，并核验发布页。
- 贡献者保留 [Credits](docs/community/credits.md)，遵守 [社区规则](COMMUNITY_GUIDELINES.md)，公开许可与 AI 参与。

元数据 PR 使用 [Community Expression Protocol](docs/protocol/community-expression.md)；先运行 `pnpm community:check <metadata.json>`，目录记录由 `pnpm validate` 接入现有 CI。机器通过只表示结构有效，不能代替文化、艺术或授权审核。

## 一个可审阅的贡献

1. 在任务中说明节气、问题、涉及路径和完成条件，避免一次覆盖 24 个模块。
2. 研究先提交 knowledge-base 中的 draft 笔记，附来源、引文定位、地域、时代、分歧和研究记录。
3. 人工审核后，再以独立 PR 提交生产内容；不要把私人摘录或完整受限文章复制到网站。
4. 代码改动附检查结果；媒体附来源、创作者、许可、哈希、替代文本以及 AI 生成记录（如有）。
5. 文化审阅者检查证据，工程审阅者检查接口与测试。审核者真实署名，不由 AI 代填。

## 本地检查

```sh
pnpm install
pnpm lint
pnpm test
pnpm build
pnpm test:e2e
```

E2E 首次需 `pnpm exec playwright install chromium`。详见 [开发与部署](docs/architecture/development.md)。

- [研究流程](docs/research/ai-research-workflow.md)
- [贡献角色和审核](docs/contributing/governance.md)
- [许可证边界](docs/contributing/licensing.md)
- [全球表达](docs/protocol/global-expression.md)
- [行为准则](CODE_OF_CONDUCT.md)
