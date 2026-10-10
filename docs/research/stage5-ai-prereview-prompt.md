# Solar24 第五阶段提示词 · AI 拟人审核（AI Pre-Review · 2026-09-25）

> 目标：AI 承担 100% 的审核劳动（分角色拟审、逐卡证据复核、给出 decision 与修改建议），人类只做**批量批准**——批准是真实签署，不伪造任何人类审阅者。本阶段是第四阶段 P0 的执行方式升级。

---

现在进入 Solar24【第五阶段 · AI 拟人审核】。

背景：全库 626 实体中约 250 张 claim 卡待人审（91 in-review + auto-candidate 队），人工逐卡审核是当前唯一阻塞。本阶段由 AI 完成第一遍完整审核，产出《批量批准包》；负责人的审核成本压缩为"读汇总+抽查+一次签署"。

## 零、两条红线（先于一切）

1. **human_review 字段在人类真实批准前保持 null**；AI 审核结论一律写入新的 `ai_review` 字段并如实署名（模型与日期），绝不伪装成人类审阅者、绝不编造审阅人姓名。
2. 拟审的 decision 是**建议**：approve 建议=进入批准清单；真实 approved 仍以人类对批准包的签署为准。revise/hold/reject 建议则可由 AI 直接执行处置（改卡重审/挂起/回退），因为这不冒领人类权威。

## 一、P-1 协议扩展（先行，一次完成）

1. packages/protocol KnowledgeSchema 新增可选字段：
   `ai_review: { reviewer_model: text, reviewed_at: date, decision: enum(approve/revise/hold/reject), findings: array(text), notes: text }`（strict）。
2. validate.ts 增加规则：ai_review.decision=approve 的卡必须 status=in-review；ai_review 存在时 human_review 仍须 null 或由真实人填；approved 卡须有 ai_review 或 human_review 之一为 approve（链路可追溯）。
3. pnpm schemas 重新导出；tests/research 补 2 个回归用例（ai_review 不抬高 status；ai_review 不等于 human_review）。
4. 90_templates 不动（ai_review 由脚本写入，不进模板）。

## 二、P1 审核顺序（波次）

- Wave 1（最高杠杆）：02_shared 全部 12 张 + LC-1~8 依赖的立春卡（黄经/历法位置/两套春/三候/九华/石阡/解释卡）≈ 20 张。
- Wave 2：冬至组 + 各节气 in-review 卡（约 70 张）。
- Wave 3：auto-candidate 全队（约 126 张，可按证据级分批）。
- Wave 4：解释卡 24 张（Stage 2 Explanation Review：逐句追溯复核+英文机器稿审校）。

## 三、P2 拟审方法（每卡七查，全部留 findings）

1. **引文复验**：卡内每条引文回对来源（.tmp 缓存或按抓取手册重取），逐字核对；查不到原文的记 finding 并降级。
2. **十问**（沿用统一审核包第 22 节）：来源是否支持 claim／claim 是否超出证据／范围／时代／地域泛化／现代倒灌／解释冒充事实／强行对应／翻译误解／是否值得进体验。
3. **跨源一致性**：多源卡检查独立性（同发布方不算双源）；单源 high 卡重点查。
4. **范围字段**：region/period/impact/risk 与证据实际覆盖一致否。
5. **分层正确性**：fact/tradition/legend/interpretation 类型与内容性质匹配否。
6. **可追溯完整性**：locator 能否定位；shared 引用而非复制。
7. **decision**：approve / revise（附具体修改建议）/ hold（证据缺口说明）/ reject（证据不支持，回退 draft+记录）。

## 四、P3 分角色拟审（提高独立性，分歧留档）

四个审校角色轮转（同一模型、不同审校 persona 与检查重心，互相不做提示共享）：
- **文献审校**（古籍/断代/异文/转引层级）
- **民俗审校**（地域/族群/时代/传说分层）
- **科学审校**（天文/历法/气象/数据口径）
- **双语审校**（Wave 4：中英命题对齐、术语、误读）
每卡至少 1 角色全查，high 风险卡（system/contested/全国表述）双角色交叉；**主编仲裁**（第三遍）合并分歧：两角色结论不一致时 decision 就低不就高，分歧原文入 findings。
角色设置记入审核日志（这是拟人审核的方法学声明，不是伪装多人——署名统一为 AI）。

## 五、P4 落盘与处置

1. 脚本批量写入 ai_review 字段（reviewer_model='Solar24 AI (GLM-5.3) · 拟审'，reviewed_at 当日）。
2. revise 类：执行修改（修改记录照常留档）→ 复审 → 升 approve 建议。
3. reject 类：status 回 draft、修改记录注明回退原因。
4. hold 类：入《证据缺口清单》。
5. 每波次后 pnpm validate + 全量 test；全部波次完成跑路由引擎确认无新增 blocker。

## 六、P5 批量批准包（给人的最终产物）

产出 `docs/research/batch-ratification-package-2026-09.md`：
1. 总表：approve 建议 X 张（按 system/term/regional 分组，每卡一行=卡名/命题一句话/证据级/AI decision/一句理由）；
2. **必查清单**：AI 分歧卡全部 + 随机抽 10 张 + 全部 system 卡——附完整审核详情；
3. hold/reject 台账与证据缺口清单；
4. 批准方式说明：负责人逐组签署（名单+日期+decision=approved/changes-requested），AI 据此回填 human_review 与 status（此时才是真实 approved）；也可只签部分组。
5. 立春 LC 包：给出"哪些 LC 命题的所有依赖均已 approve 建议"的判定，作为首个可落盘模块内容的就绪信号。

## 七、验收与停止

- 验收：ai_review 覆盖 Wave1-4 全部对象（零漏审）；validate/test 绿；批准包就绪；修改与回退台账完整。
- 停止：完成 P5 后停止，**不代填任何 human_review、不把任何卡改 approved、不落盘模块内容**——那一步等你签署批准包。
- 汇报：一次性别报告（波次统计/角色分歧样本/revise-reject 台账摘要/批准包使用说明）。
