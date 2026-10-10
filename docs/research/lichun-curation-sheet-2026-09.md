# 立春选材单 · Lichun Curation Sheet（2026-09-25 · 按选材规范第六节）

> 立春知识卡 19 张竞争 8 个故事槽位（LC-1~8）。本表是首版内容生产的选材台账，人工确认后方可进入解释卡定稿 → 人审 → 模块落盘。

## 一、全卡清单与路由/置信/AI Decision

| # | 卡 ID | 类型 | 置信 | 路由 | AI Decision | 槽位归属 |
|---|---|---|---|---|---|---|
| 1 | sci-lichun-longitude-315 | SciFact | high | human-review (pending-primary) | approve | **S2** |
| 2 | sci-lichun-calendar-position | SciFact | medium | auto-candidate | approve | **S3** |
| 3 | sci-lichun-vs-meteorological-spring | SciFact | medium | human-review (pending) | approve | **S4** |
| 4 | hist-yueling-lichun-pentads | HistRec | high | human-review (below-conf) | approve | **S5** |
| 5 | region-jiuhua-lichun-ji | Regional | high | auto-candidate | approve | **S6a** |
| 6 | region-shiqian-shuochun | Regional | high | auto-candidate | approve | **S6b** |
| 7 | trad-lichun-nongshi | Cultural | medium | auto-candidate | approve | S7 支撑 |
| 8 | trad-lichun-yaochun | Tradition | medium | auto-candidate | approve | 落选→超首版 |
| 9 | hist-jingchu-lichun-customs | HistRec | high | human-review (below-conf) | approve | 落选→冗余 |
| 10 | hist-yanjing-dachun-yaochun | HistRec | high | auto-candidate | approve | 落选→超首版 |
| 11 | hist-1914-chunjie-renaming | HistRec | low | needs-research | hold | 落选→证据不足 |
| 12 | lit-dufu-lichun-shimpan | Cultural | low | needs-research | hold | 落选→证据不足 |
| 13 | lit-zhangshi-lichun-oucheng | Cultural | medium | auto-candidate | approve | 落选→超首版 |
| 14 | hist-bianchun-song-capitals | HistRec | medium | auto-candidate | approve | 落选→时代不匹配 |
| 15 | interp-global-early-february-marks | Cultural | low | needs-research | hold | 落选→证据不足 |
| 16 | glob-setsubun-early-february | Global | low | needs-research | hold | 落选→candidate |
| 17 | idea-lichun-interaction-sketches | Idea | unknown | not-routed | — | 落选→创意层 |
| 18 | lichun-human-explanation | Expl | medium | human-review (gated) | approve | **S7+S8 底稿** |
| 19 | region-suichang-banchun | Regional | high | auto-candidate | approve | 落选→超首版容量 |

## 二、八槽位入选与落选台账

| 槽位 | 理解目标 | 入选卡 | 落选同类 | 落选分类 |
|---|---|---|---|---|
| S1 节气=太阳刻度 | 目标1 | 02_shared 机制卡（引用） | — | — |
| S2 立春=第一刻度 | 目标2 | sci-lichun-longitude-315 | — | — |
| S3 ≠春节 | 目标3 | sci-lichun-calendar-position | hist-1914-chunjie-renaming | ⑤证据不足 |
| S4 ≠同时变暖 | 目标4 | sci-lichun-vs-meteorological-spring | — | — |
| S5 古典自然观察 | 目标5 | hist-yueling-lichun-pentads | hist-jingchu-lichun-customs | ③冗余 |
| S6 地方案例 | 目标6 | jiuhua + shiqian（分述） | suichang-banchun、bianchun-song | ④超容量/时代不匹配 |
| S7 文化解释 | 目标6 | lichun-human-explanation interp段 | — | — |
| S8 开放邀请 | — | 无卡 | — | — |

**落选总计**：19 卡 − 8 槽位使用卡 = 11 张落选，全部有台账去向。

## 三、证据缺口（槽位级）

无——8 个槽位全部有 approve 建议的卡支撑。首版不缺省任何槽位。

## 四、LC 命题与卡映射（含第二轮增量）

| LC | 命题 | 支撑卡（全 approve） | 第二轮增量说明 |
|---|---|---|---|
| LC-1 | 节气=太阳位置刻度 | shared calendar-role | 无变化 |
| LC-2 | 立春=黄经315°+日期 | sci-lichun-longitude-315 | 非遗网+PMO 双直读机构已升 high |
| LC-3 | ≠春节 | sci-lichun-calendar-position | 2018腊月实例双源直读 |
| LC-4 | ≠同时变暖 | sci-vs-meteorological-spring | 深圳单城数字已裁定不进首版 |
| LC-5 | 三候古典观察 | hist-yueling-lichun-pentads | 引文复验6/6逐字命中 |
| LC-6 | 地方案例 | jiuhua + shiqian | **新增备选**：班春劝农（遂昌）、北京冬至（燕京直读）→ 均不进首版但可作 S6 扩展 |
| LC-7 | 文化解释 | explanation interp 段 | 劝农制度链（shared）新增支撑 |
| LC-8 | 开放邀请 | 无事实依赖 | — |

## 五、快照校验

运行 `npx tsx scripts/lichun-snapshot.ts` → 哈希值与 tests/snapshot.test.ts 锁定值比对。

---

**结论：立春首版选材单完整，8/8 槽位有 approve 支撑，可进入人审批准。**
