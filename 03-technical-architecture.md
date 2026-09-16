> 前期方案记录：初始化后的当前目录、接口、状态与研究层规范见 [docs/README.md](docs/README.md)。原建议保留供追溯。

# 技术架构

## 技术栈
TypeScript、React、Vite、pnpm workspace、Three.js（按需）、GSAP（按需）、Web Audio API、Vitest、Playwright、ESLint/Prettier。默认静态输出，可部署 GitHub Pages 或 Cloudflare Pages。

## 分层
- `apps/host`：路由、导航、模块发现、主题、错误边界和性能预算。
- `packages/content`：schema、解析、引用状态和本地化工具。
- `packages/module-runtime`：模块生命周期、资源预加载、暂停/恢复和能力协商。
- `packages/ui`：文字、时间轴、卡片、媒体控件、提示和无障碍组件。
- `packages/scene`：Canvas/WebGL 抽象；WebGL 不是必选项。
- `packages/audio`：用户手势解锁、音量、静音、降级和资源释放。
- `packages/config`：TS、Lint、构建和测试共享配置。

## 模块加载
构建时读取 `modules/*/module.manifest.json`，生成静态索引。Host 按 manifest 的 `entry` 和 `capabilities` 加载模块；首版使用编译期注册，不引入运行时远程代码。每个模块必须支持独立 dev/build/test，同时可被 Host 挂载。

## 质量门槛
每个模块必须通过 schema、TypeScript、单元测试、关键路径 E2E、键盘导航、prefers-reduced-motion、移动端布局和资源许可证检查。建议首屏静态内容可用时间 <2s（普通移动网络目标），WebGL/音频失败时仍可完成文化阅读。

## 推荐方案与取舍
采用单体 Host + workspace packages，而不是微前端：共享状态和视觉规范更可靠，部署简单。采用静态内容文件而非数据库：版本可审计、PR 可评审、适合开源；未来需要投稿审核时再增加服务，不预留空洞 API。
