# Research Checklist（研究检查单）

## Phase 07 六项审计（每张卡过一遍）

1. **Scope Audit 范围**：claim 的地域/人群/时代范围是否≤证据覆盖范围？有无"中国人都"？
2. **Historical Audit 历史**：断代理据是否可回溯？古代/近代/现代是否分层记录？有无以今释古？
3. **Regional Audit 地域**：地域卡是否带 Location？全国性表述是否有全国性证据？
4. **Cultural Audit 文化**：是否把解释写成事实？是否文化刻板印象？涉及真实社群是否需要顾问？
5. **Modern-knowledge Leakage Audit 倒灌**：现代概念（黄经/气象学）是否被塞进历史命题？传统经验是否被伪装成科学？
6. **AI Hallucination Audit 幻觉**：每条引文是否真实存在于已读来源？检索记录是否原样？有没有"我记得"？

## 十项异常检测（发现即标记，机器可查项已入引擎）

1. 全国泛化（national-claim-on-regional-note）
2. 地域泛化（regional-evidence-national-claim）
3. 历史时代混淆（modern-spread-over-historical-scope）
4. 现代习俗冒充古代传统（modern-as-ancient）
5. 科学解释倒灌（modern-concept-in-historical-claim）
6. 传说变事实（legend-as-fact）
7. 单一弱来源支撑重大 Claim（insufficient-evidence / weak-source）
8. 搜索摘要冒充原文（excerpt-as-read）
9. 同源转载假交叉验证（fake-cross-check）
10. AI 自行补全（assertion-above-evidence / no-source）

## 终审 13 问（每节气完成时回答）

1. 新节气从哪开始？→ 先读 shared 四卡 + 本模板 + 上一节气日志。
2. 研究哪些维度？→ 19 维矩阵，评级目标见模板。
3. 来源优先级？→ 机构/古籍直读 > 学术 > 权威媒体 > 百科（仅线索）。
4. 何时交叉验证？→ 重大断言/系统级/有分歧时 ≥2 独立直读。
5. 如何识别地域泛化？→ 引擎两规则 + Scope Audit。
6. 如何识别历史混淆？→ 断代理据回溯 + 引擎 modern-spread 规则。
7. 何时不能确认？→ 原文未读/来源冲突/地域不明 → needs-research。
8. 普通 vs 高风险分流？→ 引擎四路路由，risk=high 永远人审。
9. 什么内容需要人工？→ 全部 verified 的最终确认 + 高风险/跨文化/系统级。
10. 如何用 02_shared 避免重复？→ 只链接不复制，引擎查 shared-duplicate。
11. 如何转 HumanExplanation？→ 逐句依赖 + 引擎过 Content Gate 检查。
12. 全球表达保持 candidate？→ 引擎 global-candidate-hold，升级需三要素+顾问。
13. 回放通过？→ 本节气路由无 blocker、解释无 Unsupported 句（或已登记处置方案）。

## 提交前最后检查

- [ ] `pnpm validate` 通过
- [ ] `pnpm test` 通过（含 tests/research/ 回归）
- [ ] 引擎回放结果贴入日志
- [ ] human_review 全部 null（AI 不代审）
- [ ] 新增 shared 卡已在 research-task-template 登记
