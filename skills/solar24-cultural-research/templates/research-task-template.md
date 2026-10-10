# Research Task Template（研究任务模板）

> 复制本模板，填入目标节气后交给研究代理。任务粒度铁律：**1 节气 × 1 维度 × 1 可核查问题**。

## 输入

- **solar_term**: `<slug>`（如 yushui）
- **研究目标**：一句话，说明这轮要回答什么（不是"研究X"，而是"X 的天文定义是什么"）
- **研究维度**：19 维中本轮覆盖哪些（见 solar-term-research-template.md）
- **已有 shared knowledge**（先读，避免重复研究）：
  - `02_shared/sci-solarterms-calendar-role` 节气在历法中的角色
  - `02_shared/hist-huainanzi-complete-24terms` 《淮南子》完整记载
  - `02_shared/fact-solarterms-unesco-2016` UNESCO 2016
  - `02_shared/fact-solarterms-yellow-river-origin` 黄河流域起源
  - （新增共享卡在此登记）
- **需要避免的重复**：上表 shared 命题只准链接，不准复制。

## 输出（Research Plan）

| 项 | 内容 |
|---|---|
| Research Questions | 3-8 个可证伪的问题（含地域/时代限定） |
| Search Queries | 原样搜索词清单（记入 ResearchNote.queries） |
| Required Sources | 期望来源类型与最低门槛（如：机构直读≥1；一手古籍直读） |
| Expected Knowledge Nodes | 预计产出卡片清单（id、类型、维度、预计风险级） |
| Risk Areas | 本轮最可能出错的地方（泛化点/时代混点/谱系点） |
| Review Criteria | 何时算完成（覆盖矩阵评级目标 + 引擎路由目标） |

## 执行纪律

1. 每个 Source 必填 access；读不到就记未读，不得从标题推断。
2. 引擎跑一遍：`npx tsx skills/solar24-cultural-research/workflows/route.ts <slug>`，路由结果贴回任务笔记。
3. 目标路由：核心事实卡 ≥ human-review-required 且无 blocker；不允许为凑 auto-candidate 放宽证据。
4. 完成后生成/更新该节气的 HumanExplanation 草稿（逐句依赖），并跑回放确认无 Unsupported 句（或如实登记）。
