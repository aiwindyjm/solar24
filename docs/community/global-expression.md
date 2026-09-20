# Official Explanation + Community Expressions

一个中国节气可以邀请来自任何地点的多种解释；中国本地创作者也属于社区。国家是自述地点信息，不是分类优劣或代表权的依据。原有 [Global Expression Protocol](../protocol/global-expression.md)继续约束跨文化关系；音乐使用 [Community Expression Protocol](../protocol/community-expression.md)记录作品投稿，不把知识库 AI 候选变成社区作品。

## 未来页面顺序

```text
Lichun
↓ Chinese Cultural Explanation（项目维护、有证据和适用范围）
↓ Official Solar24 Experience
↓ Community Expressions（作者自己的解读）
↓ Featured Sound（可多件，附精选理由）
↓ Other Interpretations（已公开但未精选的表达）
↓ Contributors（各类贡献与许可）
```

“Official”表示项目编辑责任，不声称是中国各地区的唯一权威解释。社区卡必须明确显示 Community interpretation，不能继承官方文化审核徽标；文化正文仍走原有生产内容门槛。

## 数据选择与卡片规则

未来读取本节气 `community/music/` 内经审核的记录：仅 status 为 accepted 或 featured，且 publication 非 null、consent.publication=true、rights.status=cleared 时可进入作品列表。featured 另需有效的 curator/date/reason；其余公开表达放 Other Interpretations。needs-info、withdrawn、rejected、未公开的 accepted 全部不展示为作品。

卡片包含 title、creator、creator_location/country（自愿披露）、why_this_solar_term、music_description、duration/format、license、AI-assisted 标识与披露入口、credits；精选额外显示 curator/date/reason，信息不能只在音频里。contact 不展示，公开页面也不嵌入审核私人材料。外链音频先作为普通链接；将来播放器应遵守 [默认静音与替代路径](../design/audio-principles.md)，不自动请求第三方音频。

没有作品时说明“暂无已公开表达”，链接投稿指南；没有精选时不渲染虚构卡片。按策展主题、关联理由与时间组织，不做国家排行榜，不保证每国一首。撤回精选后可保留为普通已公开表达；版权/文化风险触发重新审核时先隐藏作品。

本阶段只规定结构、筛选与展示顺序，不实现网页、播放器或真实作品。真实发布前补齐对应消费者、审查与测试。
