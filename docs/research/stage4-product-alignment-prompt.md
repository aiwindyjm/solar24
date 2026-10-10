# Solar24 第四阶段提示词 · 产品对齐（Product Alignment · 2026-09-25）

> 依据：docs/architecture/roadmap.md（2026-09-20 五项优先级）、docs/product/lichun-mvp-brief.md（LC-1~8 与六个理解目标）、docs/architecture/overview.md（Vault→人审→approved→modules→Host 管线，Host 永不读 Vault）。本阶段**取代**剩余研究轮（R47-R110 转入冻结清单），把全部产能对准 PRD 路线图。

---

现在进入 Solar24【第四阶段 · 产品对齐】。

研究层已完成两轮（626 实体：24/24 节气书证、断代链、解释卡 24 张、统一审核包），**但产品层的下一步不是更多研究**——roadmap 明确的顺序是：①立春读者观察 ②生产内容与素材核验 ③真实设备性能优化 ④生产模块接入。本阶段目标：走通"知识库→人工审核→modules/lichun 生产内容→Host"的第一个垂直切片，并把研究长任务收敛为产品服务。

## 全局纪律（继承且加严）

1. 三道 Gate（Evidence/Content/Experience）不变；**AI 永不代填 human_review 与 Decision**——人工审核是本阶段的核心瓶颈，AI 的职责是把人的审核成本降到最低，不是绕过它。
2. Host/生产模块**绝不读取 knowledge-base**（架构铁律）；内容进入 modules/lichun 只走 content/references JSON + PR。
3. 研究冻结：round2-progress.md 的 R47-R110 全部标记 `backlog-frozen`；仅允许本提示词 P4 节点名的三个产品服务性研究小任务。
4. 每个节点产出后跑 `pnpm validate`（涉代码另跑 test/lint）；工程改动先测后改。

## P0 · 立春生产内容闭环（最高优先，分两段）

**P0-A 审核就绪复核（AI 可立即做）**：
1. 读 docs/research/lichun-minimum-content-review-package.md（LC-1~8）与 docs/product/lichun-mvp-brief.md，逐条核对 LC 命题在第二轮研究后的证据变化：黄经卡已 high（双机构直读）、班春劝农/北京冬至两张新地域卡对 LC-6 的增补选项、劝农制度链对 LC-7 解释收束的支撑——产出《LC 命题证据增量说明》附入审核包，供人审时一并决断（新增卡默认**不进首版**，只作备选，遵守简报"数量服从故事需要"）。
2. 校验快照：跑 scripts/lichun-snapshot.ts 确认 sha256 与测试锁定的首版文本一致；若第二轮修改过解释卡导致哈希漂移，如实报告差异清单（不擅改回落）。

**P0-B 人审结果落盘（人审完成后才执行）**：
3. 按审核包 §G 六步落盘流程，把 approved 命题写入 modules/lichun/content/zh-CN.json（claims：id/kind/text 双语/region/period/source_ids/knowledge_ids/media_types=["text"]；sections 按简报四段折叠结构）与 references.json（仅 human-verified 来源）；review_status 与 human_review 字段如实；`pnpm validate` 的 approved 链校验必须通过。
4. 英文：仅落盘已人工润色的文本；机器草稿只留在知识层，不进模块。

**P0 的完成依据（对齐 roadmap #2）**：modules/lichun 具有真实审核记录的正文、译文与来源；validate 全绿。

## P1 · 立春读者观察执行包（roadmap #1，AI 制备、人执行）

5. 按 mvp-brief §5 方案产出 docs/research/lichun-reader-observation-kit.md：5 名不同背景读者的筛选条件、测试问题卡（严格对应六个理解目标：太阳刻度/第一刻度/≠春节/≠同时变暖/一个地方案例/识别解释层）、静态纯文字阅读路径材料（不依赖动画音频）、观察记录表（读者能否复述三尺度等）、结果回流模板（问题→具体调整项）。
6. 材料双语；问题措辞不得诱导答案；执行与记录由人完成，AI 只做制备与后续整理分析。

## P2 · 真实设备性能基线（roadmap #3，工程可先行）

7. 本地 `pnpm demo:build && demo:preview`，脚本化采集首轮基线：冷加载（资源清单/体积/请求数）、内存（长时运行前后 heap 对比方案）、帧率（Seasons 漫游/Cosmos 两机位两场景采样）、构建产物构成（Three.js/字体/音频占比）。产出 docs/development/v5-performance-baseline.md：只测不改，优化建议列为待验证假设。
8. 无真实移动设备的部分如实标注"桌面仿真数据，待真机复测"，不冒充实测。

## P3 · 生产模块接入设计（roadmap #4，设计先行不抢跑）

9. 产出 docs/architecture/lichun-production-module-plan.md：modules/lichun 从 Prototype→静态生产模块的最小改动面（module-runtime 静态骨架渲染 content sections、Host 路由与"手卷→生产内容"的衔接或不衔接的取舍、双语与静态文字路径映射）；明确"不依赖 P0 完成不开工实现"。

## P4 · 研究收敛（只做三个产品服务小任务）

10. a) 解释卡英文 expanded 机器草稿（24 张，limitations 注明不可发布）——服务 P0 双语审校供给；
11. b) 统一审核包追加第二轮新增 in-review 卡（按既有分节结构；Auto Candidate 仅摘要行）；
12. c) 全库路由重跑一次，产出《人审优先级队列 v2》（按 system>high-risk>历史>地域>解释排序，标注哪些卡被 LC 命题依赖=审核杠杆最大）。
13. 然后在 round2-progress.md 把 R47-R110 标 `backlog-frozen`（附一句恢复条件："生产内容闭环完成且负责人重启研究扩张"）。

## P5 · PRD 对齐审计收尾

14. 产出 docs/research/solar24-prd-alignment-2026-09.md：对照 PRD V0.2 与六个理解目标逐条给"已具备（待人审）/审核中/缺口"；对照 roadmap 五项给当前完成度；列出仅剩的人工阻塞清单（预计集中于：LC 包 Decision、读者观察执行、真机测试、声音共创组织）。

## 停止条件

- P0-A/P1/P2/P3/P4/P5 为顺序推进，P0-B 必须等人审 Decision——到该点即停并报告"等待人工审核"，不自行推进模块接入实现。
- 完成后一次性汇报：各节点产出与位置、LC 证据增量摘要、性能基线关键数字、研究冻结台账、剩余人工阻塞清单。不启动 P3 的实现编码。
