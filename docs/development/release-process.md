# Release Process

发布是一次明确的人工作品选择，不能由构建成功、投稿 accepted 或设计 Final 自动触发。本文是持续适用的发布约定。V5 共享 Demo 已部署，见[实际交付记录](v5-demo-release.md)；本轮文档同步不创建新的应用版本号或 GitHub Release。

## 版本与范围

建议里程碑：`v0.1.0-concept` → `v0.2.0-prototype` → `v0.3.0-interactive` → `v0.4.0-audio` → `v1.0.0`。按实际范围选用，不强迫每个节气制作声音。前四项是预发布，v1.0.0 表示该范围达到完整发布标准，不意味着24节气全部完成。

整站 tag 可用上述形式；单模块建议 `lichun/v0.2.0-prototype`，避免与整站或其他模块混淆。重复预发布用 `.1`、`.2`。现有 manifest.version 只接受三段数字（如 `0.2.0`）；里程碑后缀属于 Git tag/发布记录，不直接写入 manifest。protocolVersion 与作品版本独立。

## 发布步骤

1. 确定范围、Journey、关联 ADR 和真实 commit；核对依赖材料也已进入可审阅提交。
2. 文化正文由真实审核者核验来源、地域、表述与译文。原型明确标草稿；不能将未审资料包装为正式文化解释。
3. 核对媒体许可、AI 披露、署名、第三方输入及社区展示同意；CC BY-NC / Custom 核对实际使用场景。原型的公开传播同样需要媒体授权。
4. 用锁文件安装；运行 `pnpm lint`、`pnpm test`、`pnpm build`。schema 变更运行 `pnpm schemas` 并检查 diff；导航/runtime 变更构建后运行 `pnpm test:e2e`。独立原型另跑其 README 中的构建检查。
5. 写下方 Release Notes，人工核对已知问题、无障碍、Credits、回退版本与审核记录。维护者在明确授权后创建 tag/Release/部署；当前 CI 只检查，不自动发布。
6. 发布后核验实际链接。发现文化/版权问题时先隐藏相关内容、记录更正与受影响版本；撤回精选不删除原有审计理由。

## Release Notes 模板

```markdown
# <scope> <version>

Commit / Journey / ADR / release URL: <真实链接>
Stage: <concept / prototype / interactive / audio / stable>

## What changed

变化、之前的问题与改变原因。

## Experience

现在能做什么；静态/静音/键盘路径；仍未实现什么。

## Research basis

知识/来源 ID、适用地域与时代、真实审核记录；草稿明确标注。

## Design changes

关键前后版本、选择原因、代表成果与授权。

## Known issues

问题、影响、测试范围、回退或撤回方式。

## Credits

Name / Location / Contribution / License；AI 工具与人工贡献。

## Validation

实际命令、结果、日期；发布操作者与授权记录由真人填写。
```
