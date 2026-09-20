# ADR-002 · Static first

## Context

当前 Host 使用 Vite 静态构建、构建期本地模块注册。 记录日期：2026-09-20；AI 辅助文档整理，未代填人类批准。

依据：[既有决策](../architecture/decisions.md)、[总架构](../architecture/overview.md)、[Journey](../development-journey/README.md)。

## Problem

社区机制需要可审阅入口，但当前没有后端需求。

## Options

数据库/CMS/账号服务；静态文件 + GitHub Issue/PR。

## Decision

本阶段沿用静态优先；音乐表单收集信息，文件 PR 管理元数据，构建不拉取音频。

## Why

现有协作空间即可起步，过程和授权可追溯。

## Trade-offs

无法实时展示投稿；人工录入与审核有成本，未来有真实规模再设计服务。

## Status

Recorded existing decision + current scope。没有补写虚构 reviewer；未来变更按 [ADR 规则](README.md)处理。
