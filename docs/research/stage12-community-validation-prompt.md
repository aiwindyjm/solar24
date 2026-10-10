# Solar24 第十二阶段提示词 · 用户验证与社区启动（2026-09-30）

> 前提：AI 已完成所有可独立执行的工作。本阶段把项目从"AI 完成"推向"人参与"——目标不是更多代码，而是**第一批真实用户反馈和第一批社区表达**。

---

现在进入 Solar24【第十二阶段 · 用户验证与社区启动】。

## 目标

1. **5 名真实读者**对立春模块给出"懂了/没懂"反馈
2. **永久部署**到你的 Cloudflare 账号
3. **首批社区表达**至少 1 条（你自己或你认识的人）
4. 基于反馈**迭代 1 轮**（不是完美，是第一次真实改进）

## 完成判据

| # | 判据 | 证据 |
|---|---|---|
| ① | ≥5 份读者观察记录表 | docs/research/reader-observation-results.md |
| ② | 永久 URL 可访问 | 你的 workers.dev 子域名 |
| ③ | ≥1 条社区表达 | GitHub Issue 或 content/community-expressions.json |
| ④ | ≥1 条 LC 命题基于反馈修改 | 修改记录留档 |

## 你需要做的事（~3 小时）

### 第一步 · 永久部署（5 分钟）

```bash
npx wrangler login
cd apps/host && npx wrangler deploy
```

记下你的 URL（如 `https://solar24.your-name.workers.dev`）。

### 第二步 · 找读者并执行观察（2 小时）

使用 [lichun-reader-observation-kit.md](../research/lichun-reader-observation-kit.md)：
- 从你的社交圈找 5 人（筛选条件见 kit §一）
- 每人独立阅读立春模块（线上 URL 或本地 `pnpm dev`）
- 用 kit §三 的 9 题记录（每人 ~15 分钟）
- 填 kit §四 的记录表

**可以远程做**：发链接+问卷表（Google Form/腾讯问卷），不需要面对面。

### 第三步 · 提交第一条社区表达（10 分钟）

你自己成为第一位分享者：
1. 打开任一节气模块 → 底部"分享你的经验"
2. 或直接到 https://github.com/aiwindyjm/solar24/issues/new?template=community-expression.md
3. 写你在的地方、这个时间对你意味着什么

### 第四步 · 回传结果给我（10 分钟）

把以下信息发给我：
- 5 份观察记录（或链接）
- 永久部署 URL
- 社区表达 Issue 链接

## 我收到后会做的事

1. 逐条分析观察记录 → 对应 LC-1~8 → 不合格项修改命题
2. 修改后的内容重走审核链 → 重新部署
3. 把社区表达纳入 Host 首页展示
4. 输出《第一次真实用户反馈报告》

## 为什么现在停

因为继续 AI 独立工作（补研究/做优化/写文档）不会改变一个事实：**没有人告诉你"讲明白了没有"**。六个理解目标全部是 AI 写→AI 审→Owner 批的闭环——这个闭环需要被真实读者打破一次，项目的可信度才从"自我声明"变为"外部验证"。

---

审计详见 [prd-audit-2026-09-30.md](prd-audit-2026-09-30.md)。
