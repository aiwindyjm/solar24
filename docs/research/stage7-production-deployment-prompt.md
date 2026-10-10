# Solar24 第七阶段提示词 · 立春生产模块上线（Post-Signature Execution · 2026-09-25）

> 前提：批量批准包已签署（或本阶段先催签再执行）。跑通 PRD 管线全链：签署回填→模块内容落盘→Host 接入→性能基线→PRD 对齐审计。**这是第一个产出用户可见产品的阶段。**

---

现在进入 Solar24【第七阶段 · 立春生产模块上线】。

当前状态：626 实体全绿；299 卡 ai_review 完成（263 approve / 36 hold）；批量批准包/选材单/读者观察包/共创设计全部就绪。阻塞点=人工签署。本阶段分两段：S1=签署前可做的事（性能/审计/催签材料）；S2=签署后执行（回填→落盘→接入→验收）。

## 全局纪律

1. human_review 只在真实签署后回填；AI 不伪造。
2. Host 永不读 knowledge-base；内容只经 modules/lichun/content。
3. v5 Demo 不动；生产模块是独立产物。
4. 每节点 pnpm validate+test（涉代码加 lint）。

## S1 · 签署前可做（无阻塞）

### S1-P 性能基线（Roadmap #3，上阶段漏掉）

1. 本地 `pnpm demo:build && pnpm demo:preview`，脚本化采集：
   - 冷加载：资源清单/总体积/请求数/关键路径瀑布
   - 产物构成：Three.js/字体/音频/图片占比
   - 帧率采样：Seasons 漫游+Cosmos 两机位（如无 GPU 加速标注"软件渲染"）
   - 内存：长时运行 heap 快照方案（含定时器）
2. 产出 `docs/development/v5-performance-baseline.md`：只测不改，优化假设列后端。
3. 无真机部分标注"桌面仿真待真机"。

### S1-A PRD 对齐审计（Roadmap 完成度盘点）

4. 产出 `docs/research/solar24-prd-alignment-2026-09.md`：
   - 六个理解目标逐条：已具备（approve 建议待签）/审核中/缺口
   - Roadmap 五项完成度表格
   - 剩余人工阻塞清单（预期：签署/读者观察执行/真机测试/共创试点）
   - 24 节气 × 8 槽位覆盖矩阵（哪些节气像立春一样具备首版条件）

### S1-C 催签材料

5. 生成一页纸签署摘要（可打印/可转发）：批准包核心数字+LC 就绪判定+签署入口链接+预计签署耗时（<15 分钟），贴在项目沟通渠道。

## S2 · 签署后执行（人工检查点通过后）

### S2-R 签署回填

6. 按批准包第六节签署结果逐组处理：
   - approved 组：逐卡回填 `human_review: {reviewer: '<你的名字>', reviewed_at: '<签署日期>', decision: 'approved', notes: '<备注>'}`，status 改 approved。
   - changes-requested 组：逐卡列出修改清单，等你确认后执行。
   - 未签署的组：保持 in-review 不动。
7. 跑 pnpm validate 确认 approved 链校验通过（assertPublishableNote：approved 卡须 human_review approved + sources human-verified）。

### S2-L 立春模块内容落盘（Roadmap #4）

8. 按选材单八槽位写入 `modules/lichun/content/zh-CN.json`：
   - claims：每槽位 1 条，id=`lichun-c<N>`，kind 按 LC 类型，text 双语（zh-CN 先行），region/period 按卡填写，source_ids/reviewer 填真实值
   - sections：四段折叠（它是什么/它与自然/它与人们的生活/为什么值得理解），每段 claim_ids 引用
   - review_status：approved
   - 验证：pnpm validate 全链（content.claims→knowledge_ids→approved notes→human-verified sources）
9. `references.json`：从 8 槽位支撑卡的 source_ids 展开为完整 SourceSchema 数组（verification 须 human-verified——如来源仍是 unverified/cross-checked，**不落盘**，列出待升级来源清单）。
10. `assets/manifest.json`：首版纯文字，`[]`。
11. 更新 `module.manifest.json`：status 保持 Prototype（待接入后升 In Development）。

### S2-H Host 接入

12. 检查 apps/host 现有路由：立春模块如何被发现？是否需要注册？
13. module-runtime 静态骨架渲染：content sections → React 组件（标题+折叠段+claim 文本+来源脚注）。
14. 纯静态文字路径：不依赖 JS 即可完整阅读（noscript/SSG 备选）。
15. 验收：`pnpm build && pnpm test:e2e`；本地预览立春模块显示生产内容（含审核链）。

### S2-V 验收与收口

16. 全量门禁：validate+test+lint+test:e2e。
17. 更新跨会话记忆。
18. 一次性汇报：签署统计/落盘内容预览/Host 接入截图或路径/性能基线关键数字/PRD 对齐结论/下一节气建议。

## 停止条件

- S1 全部完成+签署未发生=正常停点，报告"等待签署"并附催签材料。
- S2-S2_V 完成后停止。不做其余 23 模块、不改 v5 Demo。
- 任何时刻：不伪造 human_review、不绕过 Content Gate、不启动新研究。
