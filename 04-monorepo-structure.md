> 前期方案记录：初始化后的当前目录、接口、状态与研究层规范见 [docs/README.md](docs/README.md)。原建议保留供追溯。

# Monorepo 结构

```text
solar24/
├─ apps/host/                 # 用户入口与完整 Solar24 体验
├─ modules/
│  ├─ _template/              # 模块模板与示例
│  ├─ lichun/                 # 立春参考实现
│  └─ {23 terms}/             # 内容和体验模块
├─ packages/
│  ├─ content/                # schema、解析、本地化
│  ├─ module-runtime/         # 生命周期和能力协商
│  ├─ ui/                     # 共享 UI 与可访问性
│  ├─ scene/                  # Canvas/WebGL 能力
│  ├─ audio/                  # 音频控制与降级
│  └─ config/                 # 工具链配置
├─ content/                  # 可复用术语、季节、来源索引
├─ assets/                   # 按模块分区的受许可资产与 manifest
├─ docs/                     # 协议、研究方法、决策记录
├─ scripts/                  # 校验、索引生成、资产报告
├─ package.json / pnpm-workspace.yaml
├─ README.md / PRINCIPLES.md
└─ LICENSE
```

模块内建议：`module.manifest.json`、`content/`、`experience/`、`assets/`、`src/`、`tests/`、`README.md`、`SOURCES.md`。模块拥有内容和特有代码；共享包拥有可复用能力，禁止从一个节气直接复制到另一个节气。

`content/` 不应成为无主的大仓库：每条共享事实必须有稳定 ID、来源和审核状态。`assets/` 不存无来源的生成结果；原始大文件可放 Git LFS 或外部发布，仓库保存 manifest、缩略图、许可证和哈希。
