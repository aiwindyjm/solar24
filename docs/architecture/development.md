# 开发、检查和静态部署

要求 Node 22.13+（22.x）或 24+（本次使用 Node 24）与 pnpm 10.34.5，根 packageManager 固定版本。执行目录为仓库根。

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm --filter @solar24/module-lichun dev
pnpm --filter @solar24/module-lichun test
pnpm --filter @solar24/module-lichun build
pnpm lint
pnpm test
pnpm build
pnpm exec playwright install chromium
pnpm test:e2e
pnpm schemas
```

`lint` = ESLint + TypeScript + 数据/链接校验。`test` 包含 24 模块合同、生命周期和审核门槛；独立模块 test 使用 SOLAR24_MODULE 过滤相同合同。build 输出 `apps/host/dist`；单模块 build 输出对应 `modules/<slug>/dist`，复用 Host。Host 仅展示骨架，尚不渲染已审核文化正文。

`schemas` 从 Zod 生成 docs/protocol/schemas，提交时同时检查更新。JSON Schema 约束字段形状，引用、类型专属载荷和审核规则由 validate 补充。CI 使用 frozen-lockfile，并验证 schema 导出无漂移。

## 共享 Demo 与生产 Host

| 目标         | 开发                    | 构建              | 输出                          |
| ------------ | ----------------------- | ----------------- | ----------------------------- |
| V5 共享 Demo | `pnpm demo:dev`（5176） | `pnpm demo:build` | `docs/design/solar24-v5/dist` |
| 生产 Host    | `pnpm dev`              | `pnpm build`      | `apps/host/dist`              |

Demo 构建包含独立类型检查。`pnpm demo:preview` 在 5177 预览构建结果；`pnpm demo:deploy` 构建后通过 Wrangler 上传到 Cloudflare Workers Static Assets。使用锁文件中的本地 Wrangler，部署前完成账号授权。配置、验证和回退说明见[部署指南](../design/solar24-v5/DEPLOYMENT.md)。

[英文站点](https://solar24-demo.solar24.workers.dev/?lang=en#lichun/seasons) / [中文站点](https://solar24-demo.solar24.workers.dev/?lang=zh#lichun/seasons)已上线，源码在 [GitHub](https://github.com/aiwindyjm/solar24)。只上传 Demo 的 dist，不上传仓库或知识库。相对资源路径与 hash 路由保持静态托管能力。

生产 Host 的审核门槛保持不变；未来迁入模块的正文与素材独立审核。当前 Demo 需要 JavaScript，完整的无 JavaScript 阅读输出仍在路线中。GitHub CI 执行检查，不自动部署；修改说明文档不会触发线上内容更新。
