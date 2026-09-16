# Contributing to Solar24

先读 [README](README.md) 与 [项目原则](PRINCIPLES.md)。你可以贡献研究、翻译、声音、视觉、交互、代码或当地的季节经验。当前正式社区作品收录尚未开放，邀请与协议已经存在。

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
