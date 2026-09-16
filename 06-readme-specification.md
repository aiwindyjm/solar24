> 前期方案记录：初始化后的当前目录、接口、状态与研究层规范见 [docs/README.md](docs/README.md)。原建议保留供追溯。

# README 规范

README 是文化入口和开放邀请，不是安装手册。根 README 与模块 README 均采用“先理解中国表达，再邀请读者分享自己的时间与自然经验，最后进入技术”的顺序。

## 根 README
Hero/一句话定位 → 为什么存在 → 二十四节气与太阳/季节图 → 中国表达 → “你的文化如何理解这个时间？”邀请 → 进入体验 → 项目原则 → 当前状态 → 技术概览 → 贡献角色 → 资料与许可证 → 本地开发。

## 模块 README
1. 主视觉（带 alt 文本、来源和许可证）
2. 一句话回答 What is this?
3. Why：太阳、季节、农业和生活关系
4. Nature / People / Culture
5. Experience：Demo、静态替代、声音和交互说明
6. Sources / Research status
7. Community Expressions / Share Your Expression（即使首版暂无投稿，也展示规则和入口）
8. How it is built
9. 开发、测试、贡献和许可证

图像、动图和视频是“有依据的解释媒介”，不是硬性堆数量。没有合适素材时，宁可用清晰图表和文字。README 中的链接由 CI 检查，文化事实引用必须指向 `SOURCES.md` 或数据记录。

## 文档关系
根 README 讲项目；模块 README 讲一个节气；Protocol 讲机器和贡献者遵守的格式；Contributor 讲工作流；Culture Research 讲证据和审核。任何文档只引用单一事实源，避免 README 与 JSON 漂移。
