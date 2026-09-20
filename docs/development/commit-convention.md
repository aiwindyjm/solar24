# Git Commit Convention

让 Git History 解释演进，保持简短，不加 commit hook 或强制工具。建议 `type(scope): action`，scope 可省略；中英文均可，使用清楚的动作和对象。

| Type     | 用途                     |
| -------- | ------------------------ |
| feat     | 新能力                   |
| fix      | 修复错误                 |
| docs     | 文档与流程               |
| design   | 设计取舍与原型           |
| audio    | 声音作品、音景或元数据   |
| visual   | 图像与视觉资产           |
| research | 研究草稿、证据与审核材料 |
| refactor | 保持行为的代码整理       |
| test     | 测试                     |
| perf     | 性能改进                 |
| release  | 发布准备与记录           |

既有 `chore:` 等历史可保留，不为规范改写历史。示例只是标题写法，不声称已经完成：

```text
research(lichun): define cultural narrative questions
design(lichun): prototype seasonal palette
feat(lichun): add scene shell
audio(lichun): document spring wind soundscape intent
feat(lichun): add butterfly emergence interaction
perf(lichun): reduce mobile particle cost
release(lichun): prepare v0.1.0-concept
```

一个提交围绕一个可解释的变化。非直观改动在正文记录“原问题 → 改变 → 为什么 → 验证”，链接 Journey 变更 ID、ADR、Issue/PR；人工审核记录由真人提交，不能用 `research:` 冒充已批准。破坏性契约注明 `BREAKING CHANGE:`，同时更新 schema 导出、文档与消费者。

commit 不自动发布；本约定不要求 AI 代替用户提交或推送。合并前记录实际测试结果，不把失败改写为通过。
