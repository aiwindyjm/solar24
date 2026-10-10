# Solar24 Cultural Research Skill v1.0

文化研究**质量控制**技能：一次设计研究方法，经立春回放验证，复制到雨水→惊蛰→……→大寒。完整宪法见 [SKILL.md](SKILL.md)。

## 目录

```
skills/solar24-cultural-research/
├── SKILL.md                      # 宪法：身份/边界/12阶段Pipeline/风险模型/路由规则
├── README.md                     # 本文件
├── schemas/
│   └── routing.md                # 路由输出数据结构与 finding 代码表
├── workflows/
│   └── route.ts                  # 机器路由引擎（可CLI/可import）
├── templates/
│   ├── research-task-template.md # 研究任务模板（输入term→输出计划）
│   └── solar-term-research-template.md # 节气19维研究模板
├── checklists/
│   └── research-checklist.md     # 六项审计+十项异常+终审13问
└── examples/
    └── lichun-replay-report.md   # 立春回放测试报告（S3/S7验证）
```

## 快速使用

```bash
# 对某节气执行路由回放（仓库根目录）
npx tsx skills/solar24-cultural-research/workflows/route.ts lichun

# 全部知识路由
npx tsx skills/solar24-cultural-research/workflows/route.ts

# 回归测试（8个固定Case，改规则不得退化）
pnpm test -- tests/research/routing.test.ts
```

## 与仓库其他部分的关系

| 层 | 位置 | 职责 |
|---|---|---|
| 协议 | packages/protocol | Schema 权威（含 risk_level/impact_level/access/candidate） |
| 知识库 | knowledge-base/ | 四层内容 + 三道 Gate（00_project/guide.md） |
| 机器校验 | scripts/validate.ts | 结构与证据-置信度硬规则 |
| 本技能 | skills/solar24-cultural-research | 研究方法 + 审核路由 + 回放回归 |
| 黄金模板 | knowledge-base/07_research/golden-term-template.md | 节气研究流程（A–L） |
