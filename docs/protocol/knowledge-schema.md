# Obsidian Knowledge Schema · 0.1.0

[JSON Schema](schemas/knowledge.schema.json) / [可执行类型](../../packages/protocol/src/index.ts) / [模板目录](../../knowledge-base/90_templates/README.md)

## 通用 YAML

所有实体有 schema_version、稳定 id、type、title、solar_terms 数组、season（可空）、dimensions 数组、region 数组、period（可空）、language、status、epistemic、confidence、contested、source_ids、author、created、updated、human_review。日期为引号包裹的 ISO YYYY-MM-DD 字符串。空值用 null，不用编造日期/地域；数组不用逗号分隔字符串。

status：draft / in-review / approved / withdrawn；与模块状态独立。epistemic：fact / interpretation / opinion / tradition / legend / scientific-explanation / unverified。争议用 contested=true，与事实类型正交；confidence 为 unknown/low/medium/high，不能充当审核结果。

human_review 默认 null；仅真实人工可填写 reviewer、reviewed_at、decision、notes。AI author 可写工具/Agent 名称，不得冒充文化专家。正文包含摘录和讨论，YAML 仅存结构及关键 claim，避免整篇文章进入元数据。

| 类型                          | 专属字段与粒度                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| SolarTerm                     | 单一 solar_terms、season、links；只做索引，不塞百科                                  |
| CulturalFact / ScientificFact | claim.statement + exceptions；一条可审核命题                                         |
| HistoricalRecord              | claim + source_ids；一个历史记录，时期、页码见 Source                                |
| Tradition                     | claim；必须标记地域和流传条件，非科学因果                                            |
| RegionalExpression            | claim、region、period；个人/地域经验说明代表范围                                     |
| GlobalExpression              | expression 完整协议载荷；保留差异、关联依据、社区身份                                |
| VisualAsset / AudioAsset      | asset.creator/license/source/media_type/ai_generated/generation_record；一项素材记录 |
| InteractionIdea               | 创意正文、epistemic=opinion；不作事实导出                                            |
| ResearchNote                  | research.task/queries/discovered_source_ids/conflicts/conclusions/human_questions    |
| Source                        | source：书目、原文、定位、许可和验证状态；source.id 与笔记 id 相同                   |

一个节点可关联多个节气/主题，避免复制。source_ids/links 用稳定 id；正文 Wiki Links 用完整 Vault 相对路径，文件可中文命名。模板中的 template-*、待填写文本不能作为正式资料使用。

## 来源字段

Source 包含 title、authors、publisher、published、url、citation、source_type、accessed、original_excerpt、locator、ai_summary、rights、verification。未知值明确 null，原文与 AI 摘要分开。必须保留页码/卷章/网页段落定位；URL 不能替代引文。source_type 区分 historical/scientific/cultural/institutional/fieldwork/personal-observation，verification 区分 unverified/cross-checked/human-verified。

## 文件与验证

pnpm validate 校验全部索引和模板、类型专属载荷、ID 唯一性、来源链接与 Wiki Links。机器形状约束不证明事实正确；导出还需明确人工许可与内容审阅。笔记 approved 不表示所有原文摘录获公开转载权。
