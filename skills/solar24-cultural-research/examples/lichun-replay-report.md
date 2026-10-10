# 立春回放测试报告 · Lichun Replay Report（2026-09-16）

> 测试问题：**如果今天第一次把"研究：立春"这个任务交给 Skill v1.0，路由引擎对现有知识库会输出什么？输出是否与人工审计结论一致？**
> 方法：不新增任何检索；仅用 `workflows/route.ts` 对 knowledge-base 现有立春与共享知识执行路由。

## Input

```
npx tsx skills/solar24-cultural-research/workflows/route.ts lichun
```

作用域：solar_terms 含 lichun 的知识卡 + solar_terms 为空的共享卡（20 张进入路由；Source/SolarTerm/ResearchNote/创意三类型按设计 not-routed）。

## Actual Routing

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| fact-solarterms-unesco-2016 | CulturalFact | system | high | A(独立直读×2) | **human-review-required** | — |
| fact-solarterms-yellow-river-origin | CulturalFact | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-huainanzi-complete-24terms | HistoricalRecord | system | high | A(独立直读×1) | **human-review-required** | — |
| sci-solarterms-calendar-role | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| glob-setsubun-early-february | GlobalExpression | global | high | D | **needs-research** | insufficient-evidence, global-candidate-hold |
| hist-1914-chunjie-renaming | HistoricalRecord | term | low | D | **needs-research** | no-source, insufficient-evidence |
| hist-jingchu-lichun-customs | HistoricalRecord | term | low | A(独立直读×1) | **human-review-required** | evidence-below-confidence |
| hist-yanjing-dachun-yaochun | HistoricalRecord | term | low | A(独立直读×2) | **auto-candidate** | — |
| hist-yueling-lichun-pentads | HistoricalRecord | term | medium | A(独立直读×1) | **human-review-required** | evidence-below-confidence |
| interp-global-early-february-marks | CulturalFact | term | low | D | **needs-research** | insufficient-evidence |
| lichun-human-explanation | HumanExplanation | term | low | D | **human-review-required** | explanation-gated, **unsupported-distribution(S3)**, **modern-spread(S7)**, unsupported-distribution(minor) |
| lit-dufu-lichun-shimpan | CulturalFact | term | low | C | **needs-research** | weak-source-low-confidence |
| lit-zhangshi-lichun-oucheng | CulturalFact | term | low | A(独立直读×1) | **auto-candidate** | — |
| region-jiuhua-lichun-ji | RegionalExpression | regional | medium | A(独立直读×2) | **auto-candidate** | — |
| region-shiqian-shuochun | RegionalExpression | regional | medium | A(独立直读×2) | **auto-candidate** | — |
| sci-lichun-calendar-position | ScientificFact | term | low | A(独立直读×3) | **auto-candidate** | — |
| sci-lichun-longitude-315 | ScientificFact | term | low | A(独立直读×4) | **human-review-required** | pending-primary-source |
| sci-lichun-vs-meteorological-spring | ScientificFact | term | low | B | **auto-candidate** | — |
| trad-lichun-nongshi | CulturalFact | term | low | A(独立直读×1) | **auto-candidate** | — |
| trad-lichun-yaochun | Tradition | term | low | A(独立直读×2) | **auto-candidate** | — |

路由分布：auto-candidate ×8，human-review-required ×8，needs-research ×4，reject ×0。

## Expected vs Actual（逐项核对回放检查单）

| 回放检查项 | 结果 |
|---|---|
| 自动找到已有知识（shared 复用） | ✅ 四张 shared 卡全部进入路由且被立春侧引用，无 shared-duplicate 误报 |
| 正确识别来源（直读/线索分级） | ✅ 杜甫卡 C 档、两条全球线索 D 档被压到 needs-research |
| 正确识别地域 | ✅ 九华/石阡 impact=regional、risk=medium；无地域泛化漏网 |
| 正确识别历史时期 | ✅ 咬春（清末北京）未触发 modern-as-ancient（否定守卫生效）；S7 被 modern-spread 规则捕获 |
| HumanExplanation 未被提前发布 | ✅ explanation-gated（major）：Content Gate 机器拦截 |
| 高风险内容自动分流 | ✅ 系统级四卡 risk=high → 全部 human-review-required，无一自动通过 |
| Global Expression 保持 Candidate | ✅ setsubun：candidate-hold + 证据不足 → needs-research；未检测到强行对应（否定剥离后无匹配） |
| 发现已知问题：S3"此时中国大部仍然寒冷" | ✅ **unsupported-distribution（major）**——与人工审核包结论一致 |
| 发现已知问题：S7"更多地方吃春饼或春卷" | ✅ **modern-spread-over-historical-scope（major）**——与人工审核包结论一致 |
| 发现其他已知问题 | ✅ 黄经卡 pending-primary-source（GB/T 未读）；三候/荆楚卡 evidence-below-confidence（独立直读方仅 1，对应"建议对照印本"）；1914 卡 no-source；杜甫卡弱来源——全部与人工判断吻合 |

## False Positives（误报）

- 初版曾误报 `modern-as-ancient` 于咬春卡（卡内**引用并否定**"自古如此"的流行说法被字面匹配）→ 已加否定语境守卫（v1.1）。
- 初版曾把节分卡的"**不是**同一个节日"判为强行对应 → 已加否定剥离（v1.1）。
- 修复后本轮回放零误报。

## False Negatives（漏报，及修复过程）

1. **S3 首轮漏报**：农事卡"大部分地区陆续进入春耕"给"中国大部仍然寒冷"做了跨域假背书 → v1.1 改为同域关键词共现 → 仍漏（农事句里"雨雪天气"跨界共现）→ v1.2 改为**分句级共现**（分布短语与同域关键词必须在支撑卡同一分句）→ S3 捕获。
2. **"入春"正则跨界误配**：农事句"进**入春**耕"匹配了天气关键词 → 从关键词表移除"入春"，保留 寒冷/温暖/气温/天气/降温/气候/冰霜 → S3 正确捕获且无误报。
3. 展开版"多数地区入春要等…"被捕获为 minor —— 与人工审计"建议软化"一致，属正确检出而非误报。

## Missed Issues（引擎当前确实抓不到的，如实声明）

- 文字校勘级错误（异体字、脱文）——需人工对印本。
- GB/T 315° 条款与非遗网表述的**内容级**一致性（引擎只知"未读"，不知"读了是否吻合"）。
- 石阡"春官=周代职官"这类已降层的解释是否被正文恰当呈现（正文级语义审计超出规则能力）。
- 英文译文质量。

## Suggested Rule Changes（本轮已实施）

1. `unsupported-distribution` v1.2：分句级共现 + 同域关键词对称判定（两次回放修正）。
2. `modern-as-ancient` / `global-forced-correspondence` 增加否定语境守卫与否定剥离。
3. 新增 `pending-primary-source`（例外含"未读/待人工核读"→ 人审）。
4. CLI 过滤 not-routed 类型；main() 守卫改为 `/route.ts` 后缀精确匹配。

## 结论

**Skill v1.0 通过立春回放**：人工审计发现的全部关键问题（S3、S7、GB/T 未读、单一来源高置信、无来源占位卡、弱来源文学卡、全球候选证据不足）均被引擎自动复现，且无误报。回放过程中暴露并修复了 3 处规则缺陷——这正是回放测试的目的。

回归测试 `tests/research/routing.test.ts`（8 Case）全绿；本报告的 S3/S7 捕获行为已由 Case 08 与 replay 双重锁定，未来规则修改不得退化。

---

## 追加记录 · 2026-09-17（质量修正 F04 后复跑）

规则变更：HumanExplanation 检查层扩展——why_it_matters（zh/en）纳入分布断言检查；新增 `translation-strengthening`（英文层 only/always/everywhere/throughout China/all of China 而中文层无对应绝对化措辞，复现大寒卡真实问题"only some southern regions"）。回归测试增至 10 Case（新增 Case 09 translation-strengthening、Case 10 why_it_matters 分布断言），全部通过。

复跑结果：立春解释卡 findings 与原回放完全一致（explanation-gated、S3 unsupported-distribution、S7 modern-spread-over-historical-scope、expanded ②段 minor），无新增命中、无退化；全库 24 张解释卡在新规则下零新增 finding（大寒/小寒等真实问题已在修复报告中先行修正）。**立春回放结论不变：Skill 仍通过。**
