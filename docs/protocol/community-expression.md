# Community Expression Protocol · Music 0.1.0

目标：贡献一种有解释、有作者、有授权的文化表达。Who / Where / What / Why / How 是作品元数据的一部分。当前新增音乐投稿契约，不修改既有模块协议、文化生产内容或 GlobalExpression 0.1.0 的字段和状态。

权威实现为 [packages/protocol](../../packages/protocol/src/community-music.ts)，由 [公共入口](../../packages/protocol/src/index.ts)导出；机器结构见 [Music Submission JSON Schema](schemas/music-submission.schema.json)与 [Contributor Credit JSON Schema](schemas/contributor-credit.schema.json)。JSON Schema 检查字段形状；`assertMusicSubmission` 补充跨字段、审核状态和发布门槛。消费者必须同时使用，不能只验证 JSON Schema 就发布。

## Metadata 字典与 Issue Form 对应

所有下列字段必须存在；nullable 表示可以明确未知/无，不表示任意删除字段。字符串不能只填空格。国别可以 null，地点可以自愿填写“未披露”；联系仅用公开句柄。表单多行文字由维护者显式整理，不用不可靠的自由文本自动解析。

| 数据字段                           | 含义 / 单位                                                                     | 表单 ID                   |
| ---------------------------------- | ------------------------------------------------------------------------------- | ------------------------- |
| solar_term                         | 24 个稳定模块 slug 之一                                                         | solar-term                |
| title                              | 作品名/暂定名                                                                   | title                     |
| creator                            | 主提交者公开署名                                                                | creator                   |
| creator_location / creator_country | 宽泛地点 / 自述国家或 null                                                      | location / country        |
| creator_description                | 谁在创作，不要求职业                                                            | creator-description       |
| music_description                  | 声音内容及可读替代描述                                                          | description               |
| cultural_inspiration               | 文化、自然或个人灵感                                                            | inspiration               |
| creative_intention                 | 想让别人理解或感受什么                                                          | intention                 |
| why_this_solar_term                | 为什么用这段声音表达这个节气，核心必填                                          | why                       |
| interpretation_basis               | 中国研究 / 本地季节 / 自然 / 记忆 / 传统音乐 / 现代作曲 / other，多选           | basis                     |
| cultural_scope                     | 地点、时代、个人/社群范围及差异                                                 | scope                     |
| instrumentation                    | 乐器/人声/合成/环境材料数组，无则 []                                            | instrumentation           |
| duration / format                  | 秒数 >0 / mp3, ogg, flac, wav, m4a, webm；无音频均 null                         | audio-details             |
| audio                              | HTTPS url、bytes、sha256；idea 可 null                                          | audio / audio-details     |
| source_or_generation_method        | 采集、作曲、设计或生成方式                                                      | method                    |
| ai_assisted / ai_tool              | yes/no → boolean；无 AI 时工具 null                                             | ai / ai-details           |
| ai_disclosure                      | model、generation_date、terms_reference、human_contribution、reference_material | ai-details                |
| original_work                      | 是否原创 boolean；不是权利结论                                                  | original                  |
| references                         | citation / url（可 null）/ usage 数组；纯个人表达可 []                          | references                |
| license                            | id / reference / attribution                                                    | license / license-details |
| contact                            | GitHub handle 或公开主页；未来作品卡不展示                                      | contact                   |
| consent                            | public_submission、rights_declaration 必须 true；publication 自愿               | consent / publication     |
| layer                              | sound-idea / sound-sketch / seasonal-track                                      | layer                     |
| credits                            | 所有真实参与者与各自许可                                                        | credits                   |

维护元数据另有 `schema_version=0.1.0`、稳定 `id`、`editorial_layer=community`、`status`、`rights`、`review_history`、`publication`、`featured`。这些不能由投稿者勾选“通过”代替人工决定。`review_history.reason` 保留对应 Issue/PR/人工决定链接，日期为 ISO YYYY-MM-DD。

## 层级与状态

Layer 1 Sound Idea 允许 audio/duration/format 全 null；Layer 2/3 必须有音频、时长与格式。Featured Expression 是人工精选结果，保留原 layer，不让投稿者直接选 Layer 4。无音频 idea 可被 accepted，但不能成为 Featured Sound。

投稿 status：`submitted / screening / needs-info / community-review / curator-review / accepted / featured / rejected / withdrawn`。**Published 不在此枚举**，而是非 null 的 publication 记录；accepted 可以未发布，published 可以未 featured。完整转移规则见 [workflow](../community/workflow.md)。

rights.status：`needs-review / cleared`。cleared 必须有真实人类 `reviewer / date / reason`；未明确的 AI 条款或生成日期不可 cleared。accepted/featured 必须 cleared、包含主创 Music credit，改编作品还需非空 references。publication 必须有真实发布者、URL、日期与展示同意，且状态为 accepted/featured。featured 必须有已发表音频和与最后 Curator 决定一致的 reviewer/date/reason。

任何自动工具只可报告问题，不得创建接受、权利审核或精选记录。字段校验不能证明身份真实、授权充足或审查实际发生；这些仍由维护者核对。

## License 与 AI

许可证值：`CC0-1.0 / CC-BY-4.0 / CC-BY-NC-4.0 / Other / Custom`（最后一项是一个字符串）。reference 给出明确版本和链接/条款，attribution 给出署名要求。标准参考：[CC0](https://creativecommons.org/publicdomain/zero/1.0/)、[CC BY](https://creativecommons.org/licenses/by/4.0/)、[CC BY-NC](https://creativecommons.org/licenses/by-nc/4.0/)。引用这些条款不证明创作者有权授予许可；对工具、样本、第三方录音分别核对。

AI yes 必须有 ai_tool、ai_disclosure；模型未知可 null。generation_date 与 terms_reference 初始未知可 null，但清权前补齐；human_contribution 必填，reference_material 无输入材料时 []。记录当时适用的工具条款、账户/使用限制与输入授权（不记录私人账户信息）。AI no 时 ai_tool/ai_disclosure 都为 null。不因 AI 使用而拒绝参与，不把 AI 音频自动当公版。

## 文件与当前消费者

复制 [JSON 模板](../community/music-metadata-template.json)，替换占位后运行 `pnpm community:check <file.json>`。模板中的布尔值、灵感依据和层级只是起点，必须按真实回答修改；日期不自动生成，审核字段不自动补齐。

真实记录通过人工 PR 放入本节气 `modules/<slug>/community/music/<id>.json`，一个文件一份表达。同一节气允许多个创作者、多件作品。`pnpm validate` 扫描可选目录并运行同一 schema/语义检查，现有 CI 的 lint/build 自动消费；无作品时不建目录。重复 ID 阻断，重复 URL/已知哈希只提示。体积上限为 50 MiB 的审听文件，bytes/sha256 未知允许 null；实际网络与文件检查交人工，当前校验不下载远程音频。

Host 尚不读取该目录；未来生产显示必须显式实现 [展示筛选规则](../community/global-expression.md)。不增加新 package、不接入后端、不从 knowledge-base 自动拉取社区作品。

## 与 GlobalExpression 的兼容

GlobalExpression 记录广义跨文化表达和研究候选，状态不能直接替换成音乐状态。音乐投稿可以先独立存在；未来确需档案转换时用显式 PR：solar_term → term_ids、creator → creators、cultural_scope/inspiration/intention → 描述层，并补齐原协议所需的 region/culture/time_period/natural_context/relationship/difference/similarity、授权 asset_ids、审核与翻译。未经人工确认不能推断这些字段。

同一作品以稳定 ID 关联，避免两份独立编辑的事实源。研究候选不自动成为真实作者投稿；音乐 accepted 也不自动获得知识库 approved。当前不开发转换器，原有消费者与 JSON Schema 保持兼容。
