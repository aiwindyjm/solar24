# Solar24 第十一阶段提示词 · 验证与桥接（Validate & Bridge · 2026-09-28）

> Phase 1 内容层完成。本阶段验证"讲明白了吗"（真实用户）并打通 Demo↔Production 的形式断层，启动 Phase 2 最小入口。

---

现在进入 Solar24【第十一阶段 · 验证与桥接】。

Phase 1（讲明白 24 个节气）的内容层已完成——24/24 模块有 approved 双语内容。但项目存在三个断层（审计详见 docs/research/prd-audit-phase-transition.md）：

1. **形式断层**：V5 Demo 丰富交互 ↔ 生产模块纯文字
2. **验证断层**：零真实用户反馈
3. **社区断层**：PRD Phase 2"邀请世界"完全未启动

本阶段目标：**验证 Phase 1 效果 + 消除形式断层 + 启动 Phase 2 最小入口。**

## Track V · 真实用户验证（最高优先，需人执行）

### V1 读者观察执行

使用已备好的 [lichun-reader-observation-kit.md](../research/lichun-reader-observation-kit.md)：
- 找 5 名不同背景的读者（筛选条件见 kit §一）
- 每人阅读立春模块（`http://localhost:5173/#lichun` 或线上 URL）
- 用 9 题测试卡（对应六理解目标）记录结果
- 填写记录表并回流到 LC 命题修订

**这是唯一能回答"讲明白了吗"的行动。AI 不能替代。**

### V2 结果回流处理

收到读者反馈后：
- 逐条对应到 LC-1~8 命题
- 不合格目标 → 修改命题文本 → 重走审核链
- 合格目标 → 确认效果

## Track B · 形式桥接（AI 可执行）

### B1 生产模块视觉升级

把生产模块从"纯文字"升级为"有节气的视觉语言"：
- 每个节气一个主题色（春=嫩绿/夏=深绿/秋=金橙/冬=靛蓝，24 个渐变）
- 标题区加大节气名称书法字体（复用 Demo 的 MaShanZheng 字体）
- 段落折叠保持（内容不变），但折叠标题有节气编号+图标
- 底部"来源脚注"样式化为 bibliography 卡片

### B2 与 Demo 导航打通

- Host 导航从纯文字链接 → 加节气中文名+英文名（当前已有）
- 添加"体验版"链接到 V5 Demo（两个入口并存：文字版 for 内容 / Demo for 体验）

### B3 静态文字路径确保

- 所有内容在 `noscript` 或无 JS 环境下仍可完整阅读（当前已实现，验证后确认）

## Track P2 · Phase 2 最小入口（AI 可执行）

### P2-1 社区表达提交入口

在每个节气模块底部添加：
```
"这个时间在你生活的地方意味着什么？"
[分享你的经验] ← GitHub Issue 链接（预填节气标签）
```

- 链接到 `https://github.com/aiwindyjm/solar24/issues/new?template=community-expression.md`
- 创建 `.github/ISSUE_TEMPLATE/community-expression.md` 模板
- 模板包含：节气名/你的所在地/这个时间在你的地方/可选照片描述
- 提交后成为 GitHub Issue → 人工审核后纳入 05_expressions/

### P2-2 表达展示（最简版）

- 在 Host 首页添加"来自世界的表达"区块
- 展示已收集的 community expressions（初始为空，显示"成为第一位分享者"）
- 数据来源：`content/community-expressions.json`（手动维护，从 GitHub Issues 提取）

## 执行顺序

1. B1-B3 视觉升级（AI，~1 小时）
2. P2-1-P2-2 社区入口（AI，~30 分钟）
3. 全量门禁 + 重新部署
4. **暂停：等待用户执行 V1 读者观察**
5. 收到反馈后 V2 回流处理

## 不做的事

- 不启动新研究（R47-R110 维持冻结）
- 不做 3D/动画（Demo 已有，生产模块保持轻量）
- 不做性能优化（等真机数据）
- 不做声音共创（另行启动）

## 完成判据

1. 24 个模块有视觉主题色+书法标题
2. 每个模块底部有社区分享入口
3. 全量门禁全绿+部署
4. 读者观察 kit 分发到至少 1 人（人或 AI 协助）
