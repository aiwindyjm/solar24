# ADR-007 · 共享 Demo 独立构建与静态发布

## Context

记录日期：2026-09-20。项目负责人在本次任务中明确要求把第五版部署到 Cloudflare，并在 GitHub 分开呈现中英文 Demo 和操作动图。实施记录见 [V5 交付](../development/v5-demo-release.md)。本文由 Codex 整理实际已实施选择，不新增审批人。

## Problem

共享 V5 已有完整的视觉与交互路径，但它与生产 Host 的模块组织及文化审核状态不同。直接把整个工作区作为站点上传，会混入研究材料；把 Demo 发布当作所有生产模块完成，也会使状态失真。

## Options

1. 立即把 V5 迁入生产 Host：需要同时完成模块边界、生命周期与内容接入，超出此次展示发布的范围。
2. 继续只在本地预览：无法满足公开体验和 GitHub 展示要求。
3. 独立构建并发布共享 Demo，保留生产架构：已采用。

## Decision

`docs/design/solar24-v5/` 使用 `pnpm demo:build` 构建，Wrangler 仅上传该目录的 `dist` 到 Cloudflare Workers Static Assets。没有应用后端或知识库运行时读取。`pnpm build` 仍构建生产 Host。

中英文用 `?lang=en` / `?lang=zh` 独立分享；正文、字体、图像和书目本地打包。GitHub 展示分为两份 README，动图来源于实际操作录像。账号凭据、私人配置和未提交的研究工作不随展示发布。

## Why

让读者立即体验验证过的设计，同时保留未来模块化接入的明确边界。双语链接便于分享，本地引用减少对外部网络的依赖；记录与源码让发布可以复查。

## Trade-offs

短期有共享 Demo 与生产 Host 两个构建入口，需要文档保持一致。V5 不自动享有生产内容的审核状态；其资源体积、真机性能与无 JavaScript 阅读仍有改进空间。当前 CI 检查项目，不自动部署 Cloudflare。

## Status

Recorded existing decision。部署在 `5efbf31` 所记录的版本实施，后续 `404793b` 优化动图展示。未修改生产协议、审核规则或模块成熟度。
