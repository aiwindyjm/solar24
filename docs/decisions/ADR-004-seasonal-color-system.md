# ADR-004 · 季节色彩角色

## Context

V3 原型已有 Sky/Mist/Accent/Water/Light；尚无获审生产色谱。 记录日期：2026-09-20；AI 辅助文档整理，未代填人类批准。

依据：[既有决策](../architecture/decisions.md)、[总架构](../architecture/overview.md)、[Journey](../development-journey/README.md)。

## Problem

仅替换标题不能表达环境变化；直接宣称历史标准色会制造文化依据。

## Options

每模块随意选色；一个固定主题；按环境角色配置。

## Decision

记录五角色原型方向，生产采用仍为 Proposed；色值与地方差异在 Journey 解释。

## Why

稳定角色便于比较原型，并可单独验证文字对比与环境层次。

## Trade-offs

角色并不代表古代色彩标准；数值、性能、无障碍仍需验证，不新建 design-system 包。

## Status

Proposed for production（原型存在不代表正式批准）。没有补写虚构 reviewer；未来变更按 [ADR 规则](README.md)处理。
