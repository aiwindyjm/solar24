# 初始化决策与 PRD 对照

本表保留初始化历史。后续重大设计/技术/社区决定使用 [独立 ADR](../decisions/README.md)，其中 ADR-001–003 记录既有边界，ADR-004–006 说明色彩方向、声音与社区机制；不把整理日期写成历史批准日期。

| 旧方案或问题                             | 当前决定                                                                    | 不采用其他方案的原因                                  |
| ---------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------- |
| Core + 24 仓库                           | 单仓库、24 个 workspace 模块                                                | 避免版本、设计和 AI 修改漂移                          |
| 世界参与被后置为附加功能                 | 从 README 与模块入口发出双向邀请，投稿后续开放                              | 不扩大首版工程范围，也不丢失双向使命                  |
| 研究 Markdown 与网页数据混用             | Vault → 人工审核 → 显式生产内容 PR                                          | 草稿、争议、私人材料不能自动发布                      |
| 预建 content/ui/scene/audio/config 多包  | 当前仅 protocol、module-runtime；配置集中根目录                             | 避免空壳和无真实需求的抽象                            |
| mount/pause/resize/getAccessibleView     | mount → pause/resume/updatePreferences → dispose                            | 可访问内容就是默认 DOM；响应式 CSS 无需空 resize 接口 |
| skeleton/draft/review/published 模块状态 | Planned / Researching / Prototype / In Development / Interactive / Released | 与当前要求统一；内容审核状态另设                      |
| 一模块多个重叠文化 JSON                  | 单个聚合 content + 独立 references/assets 清单                              | 更容易追溯、审阅及避免重复                            |
| 任意网页远程插件                         | 构建期本地注册、按需 import                                                 | 避免远程执行和版本隔离成本                            |
| README 以媒体数量衡量                    | 解释图＋明确占位＋事实引用                                                  | 不伪造未完成 Demo、素材、文化结论                     |
| 代码和文化媒体同一许可                   | 代码 MIT；文化/媒体逐项授权                                                 | 不能替第三方或社群授予版权                            |

原始项目简述及 01–12 文档保留，不删除历史表述；当前 docs 和可执行 schema 替代其中接口与目录建议。初始化不启用数据库、CMS、账户、分析追踪或微服务。
