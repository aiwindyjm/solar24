# Solar24 第九阶段提示词 · 批量复制与部署（Scale & Deploy · 2026-09-28）

> 立春管线已验证（选材→内容→渲染→e2e 全绿）。本阶段把管线复制到剩余 7 个首版就绪节气，部署到 Cloudflare，完成 PRD 使命的第一步："讲明白二十四节气"（先 8 个）。

---

现在进入 Solar24【第九阶段 · 批量复制与部署】。

立春已完成全链：选材单→owner 授权→approved→content JSON→HTML 渲染器→e2e 通过。本阶段对 雨水/春分/清明/谷雨/小满/立秋/冬至 重复执行同一管线，然后部署 8 个模块到 Cloudflare。

## 纪律

- 不启动新研究；不修改 v5 Demo；不做其余 16 个节气（S6 地域缺口，等解冻）。
- 每个节气完成后跑 pnpm validate+test；全部完成后跑全量门禁+e2e。
- 每个节气沿用立春模板：8 槽位→选材单（简化版，利用现有 approve 卡）→content JSON→index.ts 纯 HTML 渲染器。

## 第一步 · 批量选材（每节气 10 分钟）

对 7 个节气各生成简化选材单（直接从 PRD 对齐矩阵已有数据提取，不需重新分析）：

| 节气 | S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 |
|---|---|---|---|---|---|---|---|---|
| 雨水 | shared | sci-yushui-330 | sci-jieqi-zhongqi | sci-rain-transition | hist-yushui-pentads | region-guanghan | yushui-explanation | open |
| 春分 | shared | sci-chunfen-0 | sci-jieqi-zhongqi | sci-day-night | hist-chunfen-pentads | region-anren | chunfen-explanation | open |
| 清明 | shared | sci-qingming-15 | — | sci-jiangnan-rain | hist-qingming-pentads | region-jiexiu + region-gd | qingming-explanation | open |
| 谷雨 | shared | sci-guyu-30 | — | sci-rain-sowing | hist-guyu-pentads | region-luoyang | guyu-explanation | open |
| 小满 | shared | sci-xiaoman-60 | — | — | hist-xiaoman-pentads | region-shengze | xiaoman-explanation | open |
| 立秋 | shared | sci-liqiu-135 | — | — | hist-liqiu-pentads | region-miao-ganqiu | liqiu-explanation | open |
| 冬至 | shared | sci-dongzhi-270 | sci-dongzhi-year-anchor | sci-shortest-day | hist-dongzhi-pentads | region-sanmen + region-hkg | dongzhi-explanation | open |

缺 S3/S4 的节气用 shared 卡或省略该槽位（选材单注明"本期缺省"）。

## 第二步 · 批量内容落盘（每节气 15 分钟）

对每个节气：
1. 从选材单提取 8 个命题 → 写入 `modules/<slug>/content/zh-CN.json`
2. 从支撑卡 source_ids 展开 → 写入 `modules/<slug>/references.json`
3. 复制立春 `src/index.ts` 模板 → 修改 manifest import → 写入 `modules/<slug>/src/index.ts`
4. 更新 manifest：status='In Development'
5. 跑 `pnpm validate`

## 第三步 · 全量验收

1. `pnpm validate && pnpm test && pnpm lint && pnpm build && pnpm test:e2e`
2. 确认 8 个模块的 e2e 全通过

## 第四步 · 部署 Cloudflare

1. 确认 `pnpm build` 产物完整
2. 部署到 Cloudflare Workers（`pnpm demo:deploy` 或项目现有部署命令）
3. 确认线上 URL 可访问所有 8 个节气模块

## 第五步 · 收口汇报

1. 更新跨会话记忆
2. 一次性汇报：
   - 8 个节气模块 URL
   - 选材覆盖统计（8×8=64 槽位，填了几个，缺了几个）
   - 线上可访问确认
   - 剩余 16 个节气的阻塞（S6 地域缺口）
   - 建议下一阶段

## 估时

| 步骤 | 每节气 | 7 节气合计 |
|---|---|---|
| 选材 | 10 min | 70 min |
| 内容+渲染器 | 15 min | 105 min |
| 验收 | — | 15 min |
| 部署 | — | 10 min |
| **合计** | | **~3.5 小时** |
