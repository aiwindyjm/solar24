# Solar24 V5 · Demo 与制作过程交付

记录日期：2026-09-20。范围：共享 V5 Demo、双语仓库展示和制作过程文档。此记录是已部署版本的交付说明，不为协议或独立节气模块修改版本号。

## 已发布成果

- [英文 Demo](https://solar24-demo.solar24.workers.dev/?lang=en#lichun/seasons) / [中文 Demo](https://solar24-demo.solar24.workers.dev/?lang=zh#lichun/seasons)
- [English README](../../README.md) / [中文 README](../../README.zh-CN.md)，各自包含操作动图。
- [English making guide](../development-journey/README.en.md) / [中文制作过程](../development-journey/README.md)，连接研究、故事、视觉、声音、交互、实现、验证与发布。
- [V1–V5 演进](../development-journey/prototype-evolution.md)、[立春记录](../development-journey/lichun/00-overview.md)、[当前路线](../architecture/roadmap.md)和[部署指南](../design/solar24-v5/DEPLOYMENT.md)。

## 真实版本依据

| 提交                                                           | 内容                                 |
| -------------------------------------------------------------- | ------------------------------------ |
| [8f9304c](https://github.com/aiwindyjm/solar24/commit/8f9304c) | 初次建立 Journey 与社区声音协作规范  |
| [5efbf31](https://github.com/aiwindyjm/solar24/commit/5efbf31) | 发布 V5 源码、静态部署配置和双语展示 |
| [404793b](https://github.com/aiwindyjm/solar24/commit/404793b) | 缩小操作 GIF，增加直接查看入口       |

Cloudflare 版本：`4229f26e-b592-4b47-8505-a1667e22fc18`。后续文档同步不改变线上构建；对应文档提交可从此文件的 Git 历史查看，不预填尚未产生的 SHA。

## 体验范围

三个尺度保持所选节气；24 蝴蝶年轮切换环境，五卷独立展开，参考日历逐日漫游。太阳—地球场景解释黄经与地轴倾角。听人间提供 24 套提示和记忆问题、14 类写意动作，合成声音默认关闭。记忆只保存在本机；无账号、数据库、上传接口或在线知识库读取。

## 本次文档同步

制作过程从 V4 更新到 V5 上线；增加英文完整入口、已交付证据表、下一轮优先级和独立生产模块的状态说明。开发与部署说明明确两个构建出口。历史初始化与社区交付记录保留当时事实，并指向最新进展，避免将历史“未上线”误读为当前状态。

## 内容、素材与署名

项目负责人提供方向、蝴蝶素材和逐轮体验反馈，并明确要求公开 Demo。Codex 辅助实现、编辑、验证和整理文档；不编造其他作者、审阅者或社区作品。字体使用本地 OFL 文件，动图录自实际网页，声音为合成环境音。详见[媒体说明](../../assets/demo/README.md)与[来源组织](../design/solar24-v5/READING-REFERENCES.md)。

发布与文化内容审核是不同记录；知识库、生产 Host 门槛及其审核状态未修改。完整研究工作区未随此次展示全部发布。

## 验证与已知边界

本次文档同步检查了 256 个本地文件链接，目标均存在；发布工作区的 `pnpm lint`、47 项测试和 `pnpm build` 通过。改动仅涉及文档，没有修改线上代码、生产协议或文化审核状态。根目录概览与初始化交付加上历史提示，保留原有内容。

上线版本的语言、刷新、前后退、阅读、三维切换与移动布局已检查，见[部署验证](../design/solar24-v5/DEPLOYMENT-VALIDATION.md)。GitHub 两种动图已检查实际加载与帧变化。

真实低性能设备的性能基准、跨文化读者理解测试、无 JavaScript 的完整阅读版本仍属于后续工作。当前 JS 包体积存在构建提醒。外部来源不保证所有网络可达，核心正文和书目不依赖这些请求。社区规范已公开，但没有声称已收录或精选音乐。

需要撤回线上 Demo 时，通过 Cloudflare 管理现有部署；修改内容后重新构建部署。仓库提交与 Cloudflare 版本分别记录，推送文档不会自动替换线上站点。
