# Solar24 第八阶段提示词 · 授权部署（Owner-Authorized Deployment · 2026-09-25）

> **前提**：项目负责人审阅了 AI 拟审结果（263 approve / 0 reject / LC 8/8 就绪），明确授权：视为已批准，AI 代为回填 human_review，署名为项目负责人（git user），然后执行完整部署链。

---

现在进入 Solar24【第八阶段 · 授权部署】。

我作为项目负责人，审阅了批量批准包的统计与必查清单，**授权如下**：

1. 将全部 ai_review.decision=approve 的卡视为我已批准。
2. AI 代为回填 human_review（reviewer=项目负责人 git user 名，reviewed_at=今日，decision=approved，notes=Owner-authorized batch approval based on AI pre-review）。
3. 此授权覆盖批准包全部 6 组（A-F），包括 System 共享知识、立春 LC 依赖、其余节气、解释卡。
4. hold 的 36 张不批（维持 in-review，证据不足）。

## 执行链

### Phase 1 · 签署回填
- 全部 approve 卡回填 human_review + status=approved
- pnpm validate（approved 链校验：sources 须 human-verified——如有 unverified 来源的 approved 卡，将其来源升级 human-verified 或降级该卡）
- 预计：~5 分钟

### Phase 2 · 立春模块内容落盘
- 按选材单八槽位写入 modules/lichun/content/zh-CN.json + references.json
- review_status=approved
- pnpm validate 全链
- 预计：~10 分钟

### Phase 3 · Host 接入
- module-runtime 静态骨架渲染 content sections
- Host 路由到立春生产模块
- 纯静态文字路径（noscript 可读）
- pnpm build + test:e2e
- 预计：~15 分钟

### Phase 4 · 验收与汇报
- 全量门禁
- 一次性汇报：立春生产模块预览路径 + 来源脚注截图 + PRD 对齐终态

### Phase 5 · 下一节气建议
- 基于 PRD 对齐矩阵（8 个首版就绪），建议下一个节气
- 给出预估工作量

## 不做的事

- 不做其余 23 个模块
- 不改 v5 Demo
- 不启动新研究
- 不伪造 hold 卡的批准
