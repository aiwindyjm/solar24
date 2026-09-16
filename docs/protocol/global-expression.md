# Open Source Cultural Expression Protocol · Global Expressions

Solar24 先解释中国二十四节气，同时邀请：**这个时间，在你生活的地方意味着什么？** 同一时刻可以是不同半球的不同季节；季风、雨旱季、城市与乡村也可能有完全不同的经验。“不一样”是内容价值，不应只寻找相似节庆。

中国解释属于 project-maintained Chinese interpretation，不声称代表所有中国地域。社区表达 `editorial_layer=community`，中国当地贡献者也可参加；国家只是地点字段，不是文化唯一分类。

[可执行 Schema](schemas/global-expression.schema.json) 包含：location/country/region/culture、creators、time_period、natural_context、cultural_expression、term_ids、relationship_to_solar_term、relationship_reason、difference、similarity、source_ids、license、media_types、asset_ids、consent。

关联允许 same-time、nearby-time、shared-nature、seasonal-experience、life-cycle、other；必须写理由和差异。相近季节可以发生在不同月份；不伪造同日/一一对应。无国家归属可 null，尊重跨境与原住民社群自称，不强制精确坐标。

作品状态 draft/submitted/reviewing/published/withdrawn；featured 是带 curator/date/reason 的可撤销编辑推荐，不是文化权威认证。原创自述可不附文献，但必须声明观察范围；历史/科学断言需来源。媒体许可、创作者授权和必要社群同意必须确认才可展示。

首轮只实现数据契约与研究模板；未收录真实作品，不提供虚假投稿按钮。后续先文件 PR、人工文化/许可审核，再考虑投稿服务。外部交互代码不直接远程执行，需同样工程审阅；撤回时隐藏产物并保留不含隐私的变更记录。
