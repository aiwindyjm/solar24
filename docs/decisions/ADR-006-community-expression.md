# ADR-006 · 社区投稿、发布与精选分离

## Context

用户授权建立 Journey 与 Community Music Contribution System；尚无真实投稿。 记录日期：2026-09-20；AI 辅助文档整理，未代填人类批准。

依据：[既有决策](../architecture/decisions.md)、[总架构](../architecture/overview.md)、[Journey](../development-journey/README.md)。

## Problem

上传文件不说明意义；accepted 易与 published/featured 混淆。

## Options

自动收录与排行榜；结构化投稿 + 人工分层审核。

## Decision

Who/Where/What/Why/How 元数据 + Issue Form + 文件校验；review status、rights status、publication 分开；Featured 必须人工写理由。

## Why

邀请多种解释并保留文化与授权边界，公开为什么选择或改变。

## Trade-offs

需要真实 curator 和联络渠道；机器不排名、不选优；先规范/模板/校验，不新增网站播放器。

## Status

Documented policy for this phase（上线前仍需真实维护角色）。没有补写虚构 reviewer；未来变更按 [ADR 规则](README.md)处理。
