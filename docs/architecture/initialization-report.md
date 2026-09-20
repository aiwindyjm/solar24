# Solar24 初始化交付记录 · 2026-09-16

> 历史记录：以下为初始化时的交付快照。当前 V5 Demo、GitHub 与部署状态见 [版本交付](../development/v5-demo-release.md)。

## 1. 读取的既有材料

完整扫描当前目录（含隐藏项），阅读 `Solar24-24节气项目简述.md` 与 `01-project-understanding.md` 至 `12-open-source-guidelines.md` 共13份既有规划文档；读取中断留下的 Host 源码、CSS、Vite 配置、protocol、module-runtime、24模块 manifest/content/references/assets/README/package/src/test 占位、根构建/lint/test/format/workspace 配置与脚本。扫描时已有 .git 和部分骨架，未把目录当空目录覆盖。

## 2. 对旧 PRD 的整合

坚持单仓库24模块；世界分享邀请从第一版存在，后续实现投稿。新增独立研究层，明确人工审核到生产内容边界。统一六种模块状态；单独管理知识/生产/社区审核状态。暂仅保留有实际代码的两个共享包，不预建 scene/audio/ui/config 空系统。保留原始简述，给12份历史方案增加当前规范入口，避免旧接口误导后续 Agent。

## 3. 最终架构

一个 React/Vite Host 加载本地 module manifest，通过动态 import 加载模块。各节气拥有自己的生产内容、资产和来源，protocol 管机器契约，runtime 管共享挂载。未来 Three.js/GSAP/音频按故事需要接入。本轮无后端、无完整节气体验。

## 4. 最终目录

```text
24节气/
├── apps/host/
├── packages/{protocol,module-runtime}/
├── modules/{lichun,yushui,jingzhe,chunfen,qingming,guyu,
│            lixia,xiaoman,mangzhong,xiazhi,xiaoshu,dashu,
│            liqiu,chushu,bailu,qiufen,hanlu,shuangjiang,
│            lidong,xiaoxue,daxue,dongzhi,xiaohan,dahan}/
├── modules/_template/
├── content/                    # 共享编辑内容边界
├── data/                       # 派生数据边界
├── assets/docs/                # 3张真实本地SVG与清单
├── docs/{architecture,protocol,design,research,contributing}/
├── scripts/content-pipeline/   # 转换契约，未实现同步
├── knowledge-base/
│   ├── .obsidian/              # 仅3项可共享核心配置
│   ├── 00_project/
│   ├── 01_terms/               # 24主索引
│   ├── 02_topics/              # 18主题导航
│   ├── 03_notes/
│   ├── 04_sources/
│   ├── 05_expressions/
│   ├── 06_media/
│   ├── 07_research/
│   └── 90_templates/           # 12类模板
├── tests/                      # 30单元/契约测试 + 2浏览器场景
├── .github/                    # CI、贡献和研究任务模板
└── README / AGENTS / CONTRIBUTING / PRINCIPLES / LICENSE 等
```

## 5. Monorepo 原因

共享依赖、版本、构建与规范；模块仍可通过 package scripts 独立 dev/test/build。单模块模式复用 Host 而非复制24份应用配置，避免跨模块代码复制和 AI 漂移。

## 6. Knowledge Base 与产品分离

两者同在一个 Git 工作区，逻辑和发布边界分离，不是两个仓库。Vault 研究笔记可包含草稿、争议、短摘录；只将人工挑选、核验、授权后的内容通过未来显式转换/PR 写入 modules。Host 不扫描 Vault，部署只上传 dist。私人附件/插件/工作区配置忽略。

## 7–8. 模块与立春状态

24模块均是骨架；立春 Prototype 只指可运行参考挂载，其他23为 Planned。所有文化正文 draft、claims/sections/references/媒体清单为空。立春有一份待执行研究任务，没有伪造 Researching 进度或已完成互动。源代码使用共享静态 renderer。

## 9. Module Protocol

protocolVersion 0.1.0；manifest 包含身份、双语名称、四季、序号、模块版本、六种状态、本地 entry、capabilities、content/assets/references 和 locales。接口 mount(context) 返回 pause/resume/updatePreferences/dispose；销毁幂等，Host 管导航和偏好，默认可访问 DOM。schema、目录、唯一性、链接、引用及哈希有校验。

## 10. README V0.1

Hero→双向项目定位→What/Why/文化理解→四季/顺序环→明确体验占位→世界邀请→24模块表→开源→架构/模块结构→路线→技术与安装→来源和许可。3张原创代码绘制SVG，Mermaid架构图，24模块均有指定叙事栏目和 TODO；无虚假 Demo 或现成视觉作品。

## 11. Obsidian Schema

26实体：24 SolarTerm 索引、1未执行 ResearchNote、1实际读取但未人工审核的 Source。另有12种模板：SolarTerm/CulturalFact/ScientificFact/HistoricalRecord/Tradition/RegionalExpression/GlobalExpression/VisualAsset/AudioAsset/InteractionIdea/ResearchNote/Source。

通用 frontmatter 包含稳定 ID、类型、节气、维度、地点/时代/语言、状态、知识性质、confidence、contested、source_ids、作者、日期、human_review；各类型有专属载荷。机器可读 JSON Schema 由 Zod 导出，语义与引用校验另行执行。

## 12. AI Research Workflow

Task→Research→Source Discovery→Classification→Extraction→Cross-check→Conflict Detection→Draft→Citation→Human Review→Approved→显式生产内容。AI 可写草稿/摘要/创意；断言有来源，审批、授权和文化准确性由真实人类确认。没有自动同步或批量文化采集。

## 13. Global Expression

显式 community 层，记录地点、文化自述、作者、时期、自然背景、相近关系、相似与差异、来源、媒体和许可。允许同一时刻不同季节，不强行对应节日。Featured 有推荐人/理由/日期。当前只提供 schema/模板/指南，没有投稿平台或真实收录作品。

## 14. 安装与工程验证

环境：Node v24.18.0、pnpm 10.34.5；最低工具链要求 Node 22.13+（22.x）或24+。

| 命令/检查                             | 结果                                              |
| ------------------------------------- | ------------------------------------------------- |
| pnpm install                          | 成功，28 workspace projects，生成 lockfile        |
| pnpm install --frozen-lockfile        | 成功，lockfile 一致                               |
| pnpm lint                             | 成功：ESLint 10 + TypeScript + 内容/引用/链接校验 |
| pnpm test                             | 30/30 通过                                        |
| pnpm build                            | 成功，apps/host/dist                              |
| 立春独立 test                         | 1/1 模块合同通过                                  |
| 立春独立 build                        | 成功，modules/lichun/dist，包含同一内容校验       |
| pnpm exec playwright install chromium | 成功                                              |
| pnpm test:e2e                         | 桌面和移动端2/2通过                               |
| pnpm schemas                          | 6份Schema导出，重复生成哈希一致                   |
| pnpm format:check                     | 通过                                              |
| Git ignore / 常见凭据模式检查         | 指定敏感/缓存路径被忽略，候选文件无匹配           |

浏览器覆盖24入口数量、立春/雨水切换、刷新深链接、键盘跳转、reduced-motion、错误路由恢复和窄屏横向溢出；并不等于完整无障碍审计或全部节气内容验证。顺序SVG已实际渲染检查。

## 15. Git 状态

扫描时已经存在 .git，保留原有 main 分支；尚无任何 commit，也没有 remote。当前文件未提交，未创建GitHub远程仓库、未push、未部署。忽略 node_modules/dist/缓存/凭据/私人笔记/Obsidian插件和工作区；只共享三份安全核心配置。

## 16. 发现并处理的问题及剩余限制

修复脚本 URL 的 lint 声明、根测试 React 依赖、Host 跳过导航与 hash 路由冲突、嵌套 React root 清理方式、Markdown格式化破坏Wiki表格的问题。过期 ESLint 9 已升级10。

剩余非阻断工具提示：Zod 上游注释的 PURE 标记被 Rollup 忽略；whatwg-encoding 为传递依赖弃用提示；Playwright 的环境颜色变量提示。没有掩盖这些警告。

正式网页文化内容、自动导出、无JS阅读预渲染、完整视觉/音频与全球投稿尚未实现。README 的基础定义参考实际读到的香港天文台资料，Source 明确未人工批准；本轮不声称其成为正式审核数据集。维护者联络/远程仓库/线上Demo仍待真实设置。

代码与原创工程文档/示意图采用MIT；文化资料与第三方媒体按条目授权，推荐未来原创文化文本经权利人同意采用CC BY 4.0，不追溯授予第三方版权。

## 17. 下一阶段

先执行立春天文学背景这一小任务，保存真实资料、引文定位与地域/日期边界，完成一次人工审核；再用获批内容验证“知识→生产内容→可读故事→一个解释性轻交互”流程。通过参考模块再批次扩展。初始化到此暂停，不继续完整内容生产和视觉开发。
