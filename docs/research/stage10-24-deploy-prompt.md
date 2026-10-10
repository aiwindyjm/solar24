# Solar24 第十阶段提示词 · 目标模式（Goal: 24 Terms Live · 2026-09-28）

> 目标只有一个：**24 个节气全部有生产内容、全部部署到公网、至少 1 个真实读者看到。** 不是研究阶段，不是审核阶段，是交付阶段。

---

现在进入 Solar24【第十阶段 · 目标模式】。

**目标**：24 个节气全部有生产内容 → 部署到公网 → 截图确认。

**完成判据**：
1. `modules/<每个slug>/content/zh-CN.json` 均有 approved claims（≥4/8 槽位）
2. `pnpm validate && pnpm test && pnpm build && pnpm test:e2e` 全绿
3. `pnpm demo:deploy`（或项目部署命令）成功
4. 线上 URL 逐一点击 24 个节气均可显示内容

**关键解锁**：S6 槽位放宽——Tradition 卡（含地域信息的习俗/饮食/农事卡）可替代 RegionalExpression 卡。24/24 已有 Tradition 卡，这不是数据缺口而是类型限制。

## 执行方法

### 第一步 · 批量生成剩余 16 个节气的内容

用与第九阶段相同的脚本方法，对剩余 16 个节气（惊蛰/立夏/芒种/夏至/小暑/大暑/处暑/白露/秋分/寒露/霜降/立冬/小雪/大雪/小寒/大寒）：

1. 从知识库中为每个节气提取 8 槽位卡（S6 用 Tradition 卡）
2. 生成命题文本（zh-CN 先行，en 简译）
3. 写入 content/zh-CN.json + references.json + src/index.ts
4. 批量 validate

**注意**：Trition 卡可能涉及多个节气，取最相关的一张即可。

### 第二步 · 全量验收

`pnpm validate && pnpm test && pnpm lint && pnpm build && pnpm test:e2e`

### 第三步 · 部署

使用项目现有的部署命令（检查 package.json 中的 deploy script）。

### 第四步 · 确认

逐一点击 24 个节气 URL，确认内容显示。

### 第五步 · 汇报

一句话汇报：24/24 上线确认 + 线上 URL。

## 不要做的事

- 不启动新研究
- 不修改 v5 Demo
- 不做性能优化（部署后测）
- 不做读者观察（另行安排）
- 不做声音共创（另行安排）
- 不写新文档/规范/审计报告

## 估时

第一步 ~2 小时（16 节气 × 8 分钟） + 第二三四五步 ~30 分钟 = **~2.5 小时**
