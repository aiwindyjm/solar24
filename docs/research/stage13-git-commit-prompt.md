# Solar24 第十三阶段提示词 · Git 提交与开源发布（2026-09-30）

> PRD 说"开源数字文化计划"、"用程序员的方法开发"。但 12 个阶段的 2,186 个文件全部未提交。这不是可选项，是项目的根基。

---

现在进入 Solar24【第十三阶段 · Git 提交与开源发布】。

## 目标

把 2,186 个未提交文件分批提交到 git，更新 README 反映当前状态，推送到 GitHub。

## 完成判据

1. `git status` clean（零未提交文件）
2. README.md 反映 24 模块上线状态
3. `git log --oneline` 显示 ≥5 个有意义的 commit
4. `git push origin main` 成功

## 提交策略（分 5 个逻辑 commit）

### Commit 1: 知识库与研究
```
feat(knowledge): complete 12-stage research pipeline

- 694 knowledge files (626 entities, 241 sources)
- Evidence pipeline: 4-layer model + 3 gates + AI pre-review
- 24/24 terms with book-layer evidence
- Batch ratification: 272 approved cards
- Content curation spec + source fetchability manual
```

### Commit 2: 协议与工具链
```
feat(protocol): add ai_review, risk/impact, calendar dimension

- KnowledgeSchema: ai_review field + assertAiReviewConsistency
- SourceSchema: access field (direct-read/search-excerpt)
- GlobalExpression: candidate status
- validate.ts: 6 evidence-confidence rules + ai_review consistency
- skills/solar24-cultural-research: routing engine + 8 regression cases
- 8 exported JSON schemas
```

### Commit 3: 生产模块内容
```
feat(modules): 24 solar term production modules with approved content

- 24 modules × 8 claims = 192 bilingual propositions
- All prose style (≤120 chars, zero unexplained terms)
- Evidence chain: claim → knowledge card → source
- Seasonal theme colors + MaShanZheng calligraphy headings
- Community share buttons + bibliography footnotes
```

### Commit 4: Host 与社区基础设施
```
feat(host): production host with community expression entry

- apps/host: 24-module navigation + production renderer
- packages/module-runtime: defineProduction (seasonal theming)
- .github/ISSUE_TEMPLATE: community-expression.md
- Community expression section in host
- V5 demo link + reader observation kit + sound co-creation plan
```

### Commit 5: 文档与 README
```
docs: update README, PRD audits, stage prompts, performance baseline

- README: reflect 24-module live status
- 12 stage prompts + 6 PRD audits
- Performance baseline (desktop)
- Content curation spec
- Source fetchability manual
```

## README 更新要点

在 "How Solar24 Is Made" 之后添加：

```markdown
## Production Content

All 24 solar terms now have approved bilingual content with evidence chains.
Each module includes 8 reader-friendly propositions across 4 sections:
what it is, its relation to nature, how people live with it, and why it matters.

Run `pnpm dev` and open `http://127.0.0.1:5173/#lichun` to read the first term.

Content pipeline: knowledge-base → human review → modules/content → host.
```

## 执行

1. `git add` 按上述分组分批添加
2. 每个 commit 用 conventional format
3. `pnpm validate && pnpm test` 确保每次 commit 后全绿
4. 最后 `git push origin main`
5. 确认 GitHub 上可见
