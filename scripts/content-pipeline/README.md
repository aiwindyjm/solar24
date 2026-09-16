# Future explicit content pipeline

当前只预留转换契约，不实现自动同步。

1. 人工选择知识 ID，确认 approved、人审记录、未争议、引用和授权。
2. 校验 schema/引用/类型/地域，生成候选 production claims；绝不导出全文 Source 摘录、AI log、私人目录。
3. 通过 knowledge_ids + source_ids + reviewed_at + 源文件哈希记录谱系；未来记录导出工具与 schema 版本。
4. 生成 candidate JSON/Markdown/search index 到临时区，审阅 diff，翻译单独复核。
5. 通过 PR 写入 modules content/references；构建只读这些显式发布数据。
6. 源笔记变更或撤回时标记影响，要求重新审核，不静默覆盖线上内容。

现有 pnpm validate 是关联检查，不是导出器；assertPublishableNote 拒绝未审核、争议、无来源及不适合转换为 claim 的节点。出版许可仍需人审。
