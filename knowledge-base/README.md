# Solar24 Cultural Knowledge Base

这里是 Solar24 的文化研究大脑，**不是最终网站数据**。在 Obsidian 选择“打开文件夹作为仓库”，选择本目录，不是整个项目目录。不需要第三方插件。

## 为什么存在

把研究问题、出处、原文、释义、地域差异、争议与人类审核保存在可连接的小颗粒笔记中。面向中国二十四节气，同时记录世界对同一时间的不同经验。草稿和创意不能自动成为文化事实。

## 从哪里开始

- [[00_project/guide|使用与审核规范]]
- [[07_research/solar24-batch-human-review-package|**24节气统一人工审核总包**]]（2026-09-16 批处理后的优先审核入口；发布放行仍须逐卡留审核记录）
- [[01_terms/README|24 个节气入口]]
- [[02_topics/README|19 个研究维度]]
- [[02_shared/README|系统级共享知识]]
- [[03_notes/README|小颗粒知识节点]]
- [[04_sources/README|来源与引用]]
- [[05_expressions/README|世界文化表达]]
- [[06_media/README|视觉与声音研究]]
- [[07_research/README|AI 研究记录]]
- [[90_templates/README|笔记模板]]

主索引→小颗粒笔记→Source；同一笔记可以连接多个节气，避免同一事实复制24次。Wiki Links 提供图谱导航，YAML ID 提供机器稳定引用。

## 如何写入

人类或 AI 先复制正确类型模板，更换 id/标题/日期/范围，再创建 draft。不要创建一篇完整百科填满所有栏目。AI 总是保留 human_review=null；人工审核实际来源后才填写审阅者和结论。来源原文、AI 摘要、人类解释分别记录。

## 隐私与发布

研究用的未授权原文、私人笔记和录音放被忽略的 private/ 或 attachments/raw/，不要提交。共享 Obsidian 仅跟踪最小 app/core-plugins/templates 配置，不共享 workspace、插件设置、同步凭据。完整审核到发布流程见项目 docs/research/ai-research-workflow.md；生产构建不会读取本 Vault。

立春先完成三轮试点工作（2026-09-16）：第一轮试点研究、模型复盘、证据补强与黄金模板定型。随后在同日 Batch Research Run 中完成其余 23 个节气的第一轮研究（见下节状态表与 [[07_research/solar24-batch-research-report|批量研究报告]]）。当前全库 586 实体、来源 231 条（206 直读）、[[02_shared/README|系统级共享知识]] 6 张、Candidate 全球表达 24 张。内容按[[00_project/guide|四层模型与 Verified 门槛]]分层；全部 draft/in-review、human_review=null——**Verified 层为空，等待 [[07_research/solar24-batch-human-review-package|统一人工审核总包]] 的 Decision**。

## 24节气知识生产状态（2026-09-16 批处理）

第一轮研究：24/24 完成（立春试点 + 批处理23节气）。下表反映真实状态：全部内容停在 Evidence Candidate 层，Verified 层为零（等待 [[07_research/solar24-batch-human-review-package|统一人工审核总包]] 的 Decision）。

| # | 节气 | 研究状态 | 来源 | 知识卡 | A/B/C/D 路由 | 全球候选 | 解释卡 | 覆盖 |
|---|---|---|---|---|---|---|---|---|
| 01 | [[01_terms/01_立春|立春]] | 试点完成 | 16 | 24 | 审核包5张待决 | 2 | draft（2句待处置） | 19维补强后达门槛 |
| 02 | [[01_terms/02_雨水|雨水]] | 批处理完成 | 7 | 10 | 5/1/3/0 | 1 | draft | 见 [[07_research/research-yushui-batch-log|日志]] |
| 03 | [[01_terms/03_惊蛰|惊蛰]] | 批处理完成 | 9 | 11 | 4/3/2/1 | 1 | draft | 见 [[07_research/research-jingzhe-batch-log|日志]] |
| 04 | [[01_terms/04_春分|春分]] | 批处理完成 | 9 | 11 | 5/3/2/0 | 1 | draft | 见 [[07_research/research-chunfen-batch-log|日志]] |
| 05 | [[01_terms/05_清明|清明]] | 批处理完成 | 9 | 12 | 7/2/2/0 | 1 | draft | 见 [[07_research/research-qingming-batch-log|日志]] |
| 06 | [[01_terms/06_谷雨|谷雨]] | 批处理完成 | 9 | 13 | 7/1/3/1 | 1 | draft | 见 [[07_research/research-guyu-batch-log|日志]] |
| 07 | [[01_terms/07_立夏|立夏]] | 批处理完成 | 11 | 13 | 7/2/2/1 | 1 | draft | 见 [[07_research/research-lixia-batch-log|日志]] |
| 08 | [[01_terms/08_小满|小满]] | 批处理完成 | 9 | 14 | 7/1/4/1 | 1 | draft | 见 [[07_research/research-xiaoman-batch-log|日志]] |
| 09 | [[01_terms/09_芒种|芒种]] | 批处理完成 | 9 | 12 | 6/2/2/1 | 1 | draft | 见 [[07_research/research-mangzhong-batch-log|日志]] |
| 10 | [[01_terms/10_夏至|夏至]] | 批处理完成 | 9 | 10 | 6/1/1/1 | 1 | draft | 见 [[07_research/research-xiazhi-batch-log|日志]] |
| 11 | [[01_terms/11_小暑|小暑]] | 批处理完成 | 10 | 13 | 7/3/1/1 | 1 | draft | 见 [[07_research/research-xiaoshu-batch-log|日志]] |
| 12 | [[01_terms/12_大暑|大暑]] | 批处理完成 | 11 | 11 | 5/3/1/1 | 1 | draft | 见 [[07_research/research-dashu-batch-log|日志]] |
| 13 | [[01_terms/13_立秋|立秋]] | 批处理完成 | 13 | 12 | 5/4/1/1 | 1 | draft | 见 [[07_research/research-liqiu-batch-log|日志]] |
| 14 | [[01_terms/14_处暑|处暑]] | 批处理完成 | 8 | 12 | 3/4/3/1 | 1 | draft | 见 [[07_research/research-chushu-batch-log|日志]] |
| 15 | [[01_terms/15_白露|白露]] | 批处理完成 | 11 | 14 | 9/2/1/1 | 1 | draft | 见 [[07_research/research-bailu-batch-log|日志]] |
| 16 | [[01_terms/16_秋分|秋分]] | 批处理完成 | 15 | 12 | 5/2/4/0 | 1 | draft | 见 [[07_research/research-qiufen-batch-log|日志]] |
| 17 | [[01_terms/17_寒露|寒露]] | 批处理完成 | 6 | 11 | 6/2/2/0 | 1 | draft | 见 [[07_research/research-hanlu-batch-log|日志]] |
| 18 | [[01_terms/18_霜降|霜降]] | 批处理完成 | 11 | 10 | 3/3/2/1 | 1 | draft | 见 [[07_research/research-shuangjiang-batch-log|日志]] |
| 19 | [[01_terms/19_立冬|立冬]] | 批处理完成 | 8 | 11 | 3/3/3/1 | 1 | draft | 见 [[07_research/research-lidong-batch-log|日志]] |
| 20 | [[01_terms/20_小雪|小雪]] | 批处理完成 | 7 | 11 | 4/3/3/0 | 1 | draft | 见 [[07_research/research-xiaoxue-batch-log|日志]] |
| 21 | [[01_terms/21_大雪|大雪]] | 批处理完成 | 7 | 14 | 7/2/3/1 | 1 | draft | 见 [[07_research/research-daxue-batch-log|日志]] |
| 22 | [[01_terms/22_冬至|冬至]] | 批处理完成 | 12 | 16 | 5/3/4/1 | 1 | draft | 见 [[07_research/research-dongzhi-batch-log|日志]] |
| 23 | [[01_terms/23_小寒|小寒]] | 批处理完成 | 7 | 13 | 3/5/3/1 | 1 | draft | 见 [[07_research/research-xiaohan-batch-log|日志]] |
| 24 | [[01_terms/24_大寒|大寒]] | 批处理完成 | 10 | 13 | 6/2/3/0 | 1 | draft | 见 [[07_research/research-dahan-batch-log|日志]] |

全库：586 实体 · 来源 231（直读 206）· 共享知识 6 · A125/B57/C55/D16（23节气）· HumanExplanation 24 张全 draft · Verified 0。详见 [[07_research/solar24-batch-research-report|批量研究报告]]。
