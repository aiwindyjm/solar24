# Solar24 第六阶段提示词 · 立春垂直切片与 PRD 交付执行（2026-09-25）

> 定位：执行阶段。把第四阶段（产品对齐）、选材规范（content-curation-spec）、第五阶段（AI 拟审）串成一条交付链，对准 roadmap 前四项优先级（读者观察/生产内容核验/性能基线/生产模块接入），以立春为第一个完整垂直切片。**全阶段只有一个人工动作：签署批量批准包**；其余全部由 AI 执行。研究层维持冻结（R47-R110 = backlog-frozen，无产品服务需求不启动）。

---

现在进入 Solar24【第六阶段 · 立春垂直切片与 PRD 交付执行】。

PRD 锚点：roadmap（docs/architecture/roadmap.md）五项优先级；立春 MVP 简报（docs/product/lichun-mvp-brief.md，六个理解目标/LC-1~8/静态文字优先）；架构铁律（Host 永不读 knowledge-base；内容只经 modules/content + PR 进入产品）；选材规范（docs/research/content-curation-spec.md，槽位选卡法+防倾倒军规）。

## 全局纪律

1. 两条红线继承第五阶段：human_review 人真批前保持 null；AI 结论入 ai_review 如实署名。
2. 三道 Gate 不变；approve 建议 ≠ approved；模块内容落盘只发生在人签署批准包之后。
3. 每个节点完成跑 pnpm validate（涉代码加 test/lint）；v5 demo（已上线）一律不动。
4. 研究冻结生效：本阶段不新增研究卡，除 Track G 点名的选材缺口补证。

## Track A · AI 拟审执行（第五阶段落地，最高优先）

A1 按 stage5 提示词 P-1 扩展协议（ai_review 字段+validate 规则+2 个回归用例+schemas 导出）。
A2 执行四波拟审（shared+LC 依赖 20 张 → in-review 70 张 → auto-candidate 126 张 → 解释卡 24 张），每卡七查（引文复验/十问/跨源独立性/范围字段/分层/追溯/decision），四审校 persona 轮转+主编仲裁（分歧就低留档）。
A3 处置：revise 执行修改并复审；reject 回退 draft；hold 入证据缺口清单。
A4 产出《批量批准包》docs/research/batch-ratification-package-2026-09.md（approve 总表+必查清单[分歧卡全部+随机10+system全]+hold/reject 台账+LC 依赖就绪判定）。

## 【人工检查点 · 唯一】签署批量批准包

批准包就绪后停止 Track C/D 等待负责人逐组签署（名单+日期+decision）。等待期间并行推进不依赖批准的 Track E/F。

## Track B · 立春选材单与 LC 终稿（与 A 并行，批准包的一部分）

B1 按选材规范第六节生成立春《选材单》：19 张知识卡全清单（路由/置信/AI decision）→ 八槽位入选/落选台账（五分类原因）→ 证据缺口（无 approved 卡的槽位本期缺省）。
B2 LC-1~8 命题文本终稿校对：对照解释卡快照（scripts/lichun-snapshot.ts sha256 校验；漂移则出差异清单）；英文终稿仅采纳已润色文本，机器稿标注不入产品。
B3 选材单+LC 终稿并入批准包（人签署时一并确认）。

## Track C · 立春模块内容落盘（签署后执行）

C1 按审核包 §G 六步流程写入 modules/lichun/content/zh-CN.json（claims：knowledge_ids 链接 approved 卡、source_ids 链接 human-verified 来源、sections 按四段折叠）与 references.json；en.json 同步已润色英文。
C2 review_status 如实；pnpm validate 的 approved 链校验（assertPublishableNote+来源 human-verified）必须通过；快照测试更新。

## Track D · 生产模块接入（签署后执行，roadmap #4）

D1 按 docs/architecture/lichun-production-module-plan.md（若缺先补此设计）实现：module-runtime 静态骨架渲染 content sections、Host 路由到立春生产模块、双语切换与纯静态文字路径（无动画可完整阅读）。
D2 验收：pnpm build+test:e2e 通过；本地预览中立春模块显示的是生产内容（含审核链）而非 demo 占位；reduced-motion 路径可用。
D3 不做其余 23 个模块、不改 v5 demo 场景。

## Track E · 不依赖批准的并行项（随时可做）

E1 读者观察执行包（roadmap #1）：docs/research/lichun-reader-observation-kit.md——5 名读者筛选条件、六理解目标问题卡、静态纯文字阅读材料、记录表、结果回流模板；双语、不诱导。
E2 性能基线（roadmap #3）：本地 demo:build/preview 脚本化采集冷加载/内存方案/帧率采样/产物构成 → docs/development/v5-performance-baseline.md；只测不改；无真机处标注"桌面仿真待真机"。

## Track F · 声音共创准备（roadmap #5，仅组织设计）

F1 产出 docs/community/sound-co-creation-plan.md：投稿-署名-评审-发布-撤回五步流程、许可与授权条款草案、与音乐贡献 Issue Form 的衔接、小规模试点建议名单来源；不实现播放器。

## Track G · 收口

G1 PRD 对齐审计 docs/research/solar24-prd-alignment-2026-09.md：六个理解目标逐条（已具备待人审/审核中/缺口）；roadmap 五项完成度；剩余人工阻塞清单（预期仅：批准包签署、读者观察执行、真机测试、共创试点）。
G2 研究冻结台账确认（round2-progress.md R47-R110 保持 backlog-frozen）。
G3 更新跨会话记忆；一次性总汇报（垂直切片各节点状态/批准包统计/性能基线关键数字/下一里程碑建议）。

## 停止条件

- Track A/B/E/F 完成且 Track C/D 因等待签署而暂停=本阶段正常停点，报告"等待人工签署"。
- 签署后继续 C/D/G 至完成。任何时刻不得：代填 human_review、绕过 Content Gate 落盘、修改 v5 demo、重启研究扩张。
