# 开发、检查和静态部署

要求 Node 22.13+（22.x）或 24+（本次使用 Node 24）与 pnpm 10.34.5，根 packageManager 固定版本。执行目录为仓库根。

```sh
pnpm install
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

## 发布

Cloudflare Pages：根目录构建 `pnpm build`，输出 `apps/host/dist`，Node 22.13+（22.x）或 24+。GitHub Pages：构建后通过官方 Pages artifact/deploy action 发布同一目录；仓库发布地址尚未设置，本轮不部署。Vite base 为 `./`、hash 路由支持 `/repository/` 前缀。不要上传整个工作区或知识库。

公开发布前补齐：仓库 URL、维护者联络、文化审核、授权；正式内容需静态预渲染/无 JS 阅读路径，当前 SPA 骨架不宣称已经实现。独立模块链接只限该模块；线上正式版本和 Demo 地址均未创建。
