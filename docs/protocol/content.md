# 从知识到产品内容

- `knowledge-base/`：原始摘录、争议、研究记录、小颗粒知识。永不由 Host 直接扫描。
- `modules/<slug>/content/zh-CN.json`：显式编辑的聚合生产内容，当前均 draft 且 claims/sections 为空。
- `modules/<slug>/references.json`：引用的 Source 快照；不是另一套研究笔记。
- `modules/<slug>/assets/manifest.json`：该模块有权使用的产物清单。
- `content/`：未来跨模块词汇、说明性文案；不复制各节气文化事实。
- `data/`：未来可重建索引，记录生成输入与版本，禁止手工改派生输出。

Claim 记录 kind、双语文本、region、period、source_ids、knowledge_ids、真实 reviewer/reviewed_at。Section 通过 claim_ids 引用，不能悄悄写无来源事实。生产草稿与知识审核独立；approved 必须有正文、可解析引用及人审来源。尚无导出器：当前 validator 检查关联与审核门槛，不能自动判断一段文字是否被证据支持。

只导出人工选择的 approved 笔记和获授权的小段表述。Contested/Unverified 不进入确定性事实；若未来展示争议，需要明确并列解释和额外审核。地域、时代和适用条件必须随文本走。简体中文为首轮编辑语言；英译作为独立人工复核任务，不因机器翻译自动 approved。

数据文件以 [content schema](schemas/content.schema.json)、[source schema](schemas/source.schema.json) 校验；未来发布还需内容审阅与授权，CI 不是文化权威。
