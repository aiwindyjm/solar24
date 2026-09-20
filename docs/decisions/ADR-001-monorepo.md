# ADR-001 · 单一 Monorepo

## Context

既有初始化决定，整理为 ADR；依据 architecture/decisions.md。 记录日期：2026-09-20；AI 辅助文档整理，未代填人类批准。

依据：[既有决策](../architecture/decisions.md)、[总架构](../architecture/overview.md)、[Journey](../development-journey/README.md)。

## Problem

24 模块若各自维护仓库，协议、设计与 AI 修改容易漂移。

## Options

24 独立仓库；单仓库 workspace。

## Decision

沿用 pnpm workspace，一个 Host、24 个 modules、protocol 与 module-runtime。

## Why

共同维护接口和校验，模块仍能独立预览。

## Trade-offs

共享 CI 需要严格边界；不允许跨模块源码导入。

## Status

Recorded existing decision（记录既有实现，不补造批准人）。没有补写虚构 reviewer；未来变更按 [ADR 规则](README.md)处理。
