# Music Contribution Workflow

Discover → Submit → Automated Check → Community Review → Curator Review → Accepted → Published → Featured

主路径不是自动流水线：没有系统从 Issue 自动写入仓库、批准作品或发布音频。

## 审核与发布分开

| 步骤 / status                 | 谁做                 | 进入下一步的依据                                                                  |
| ----------------------------- | -------------------- | --------------------------------------------------------------------------------- |
| Discover                      | 任何人               | 阅读征集、讨论意义；可以只提想法                                                  |
| submitted                     | 提交者               | Issue Form、真实公开署名；许可不明确可说明                                        |
| screening                     | 维护者 + 自动检查    | 维护者将表单显式整理为 JSON，保留 Issue 链接与真实提交人；运行校验                |
| needs-info                    | 维护者 / Curator     | 说明缺项、问题与如何补充；补齐回 screening                                        |
| community-review              | 社区，维护者记录流转 | 就关联理由、可访问性、差异和来源给建设性反馈；不做点赞竞赛                        |
| curator-review                | 真实 Curator         | 综合交流、文化/权利/AI 披露；涉及文化归属请相应研究者或社群协助                   |
| accepted                      | 真实 Curator         | 写决定理由；rights 已 cleared；Credits 完整；可接受 idea，未必可公开播放          |
| Published（独立 publication） | 维护者               | 已 accepted、展示同意、实际授权场景及链接核验；记录 URL / date / published_by     |
| featured                      | 真实 Curator         | 已发布的音频表达，单独记录 reviewer / date / reason；可以多首共存                 |
| rejected                      | 真实 Curator         | screening 或 curator-review 后写具体原因，允许作者补证请求复核                    |
| withdrawn                     | 作者请求或维护者执行 | 从任何非终态撤回，隐藏展示并清空当前 publication/featured，保留必要且无隐私的记录 |

`rights.status` 只有 `needs-review / cleared`，不与投稿 `status` 混用。机器可检查记录存在，不能验证某字符串背后的真人身份；维护者必须核对 GitHub 身份、决定链接和原始授权，不把 schema 通过当真人审核证据。

`review_history` 从 submitted 开始，记录每次状态、actor、role、date、reason（含 Issue/PR/决定链接）。提交者或 AI 不能填写虚构 Curator。允许的转移由 protocol 单点定义：

```text
submitted → screening
screening → needs-info | community-review | rejected
needs-info → screening
community-review → needs-info | curator-review
curator-review → needs-info | accepted | rejected
accepted → featured | needs-info
featured → accepted | needs-info
rejected → screening（复核）
以上任意非 withdrawn 状态 → withdrawn
withdrawn 为终态；再次投稿使用新 ID 并链接旧记录
```

移除精选用 featured → accepted 并清空 featured；重新审核用 needs-info，同时移除公开展示。拒绝或撤回不能继续显示为作品。通过 Git/Issue 历史保留旧决定，不保留不应公开的个人资料。选用作品发生音频、许可、文化说明或 AI 输入变化时回 needs-info，重新核查，不能沿用旧接受决定；发布记录重新填写。

## 现在能自动检查什么

`pnpm community:check path/to/metadata.json`：不改文件、不访问网络；失败返回非零退出码。字段必须含节气、作者、文化解释、许可、AI yes/no、联系与同意。真实节气 slug 必须存在；非 idea 需要音频；校验声明格式、正时长、50 MiB 体积上限（未知可 null）、审核状态顺序、接受/发布/精选门槛。重复 ID 为错误；相同音频 URL/已知 SHA-256 为“可能重复”提示，人工确认，不自动拒绝或排名。

未来有真实记录时放 `modules/<slug>/community/music/<id>.json`，`pnpm validate`、lint、build 和现有 CI 自动检查，验证路径与节气/ID 一致。不创建24个空目录。初始 rights 必须 needs-review、publication/featured 为 null；人工署名只在对应的人实际决定后加入。JSON 模板有尖括号占位，填完才会通过，模板不属于投稿数据。

自动检查只看到声明值，**没有验证外链可播放、真实 MIME/体积、哈希真实性、版权、语言质量或艺术价值**。人工审听先核对普通公开链接，不需要登录或索取他人凭据；实际文件检查与许可证据写入审查理由。缺材料进入 needs-info；AI 日期/条款缺失不得 cleared。结构检查可以失败，但不擅自把作品标 rejected。

## 人工评议至少回答

意义是否说明清楚？个人经验与文化事实是否分开？传统归属是否有足够依据、必要社群同意？参考、改编、采样、人声与 AI 输入是否获权？贡献者是否能理解许可与展示范围？文字描述能否帮助不听声音的人？有分歧记录理由并给补充机会。

Featured 的理由说明这件作品提供了什么独特视角、为何适合当下专题、还有什么局限，不宣称“最好”或代表全国。Accepted 可以长期保持未精选；Published 也不自动精选。
