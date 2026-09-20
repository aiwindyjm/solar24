# 第五版验收记录 · 2026-09-20

最新的介绍书与漫游修复验收见 [BOOK-VALIDATION.md](BOOK-VALIDATION.md)。以下保留第五版最初的字体、罗盘与天文迭代记录。

本轮实现全部位于 `docs/design/solar24-v5/`。第四版保留在 5175，第五版服务端口 5176。现有仓库中其他任务的修改未纳入本轮。

## 工程检查

- 第五版独立 TypeScript：通过。
- 第五版 Vite 构建：通过；JS 955.42 KB / gzip 284.03 KB，仍有大于 500 KB 的构建提醒，没有隐藏该提醒。
- 根目录 `pnpm lint`：通过。
- 根目录 `pnpm test`：7 文件、69 项通过（包括工作区原有测试，并非全部为第五版新增）。
- 根目录 `pnpm build`：通过，Zod 有已有的注释警告。
- `pnpm test:e2e --config .tmp/solar24-v3-e2e.config.ts`：Host 桌面、手机共 2 项通过。沿用临时配置仅为使用 4183 避让已有预览服务；这两项不等同第五版页面验收。

## 第五版浏览器检查

使用 Playwright CLI 在 Chromium 实测：

- 首次进入英文；切换中文和英文、刷新恢复语言。
- 英文 3 款、中文 3 款字体菜单可选，本地字体正常载入；三款英文标题的 computed font-family 分别验证。中英文选择独立记忆。
- 修复旧版 `.english .poem h1` 的高优先级 Georgia 覆盖，防止菜单改变而标题不变。
- 六款字体各附 OFL，中文子集更换内部名称；实际 cmap 覆盖全部印章用字。字体许可原文与来源记录出现在 `dist/font-licenses/`。
- 1258×1066、1280×720、390×844 画面检查；雨水长英文标题在独立区域内换行。手机无页面横向溢出。
- 圆环真实鼠标悬停加深，键盘 Enter 切换选中；手机布局可见环层和说明。键盘高亮改为环线，移除 SVG 默认方形外框。
- 天文周年及近观功能沿用连续场景，新增太阳／地球／二分二至标记、日地连线与双语说明；手机标签调整为较小尺寸并移入轨道内避免出屏。
- 三种视角切换仍仅一个 canvas；减少动态模式帧计数停止。
- 禁用 WebGL 后没有 canvas，天文说明和生活故事仍可访问。
- 普通浏览器会话控制台最终记录无错误、无警告。

## 截图

保存于工作区 `output/playwright/`：

- `solar24-v5-final-en.png`、`solar24-v5-final-zh.png`
- `solar24-v5-final-ring.png`、`solar24-v5-final-720.png`
- `solar24-v5-final-cosmos.png`
- `solar24-v5-final-mobile.png`、`solar24-v5-final-mobile-cosmos.png`
- `solar24-v5-font-menu.png`

## 未宣称完成的内容

甲骨文、隶书字体尚未确认合适的再分发授权和字符覆盖，因此未作为可用选项。小篆不是完整正文字库，缺字回退文楷。天文模型不是真实比例、实时星历或交节计算器。尚未进行真实低端手机性能和跨浏览器字体渲染验收；文化与英文翻译保持研究草稿，未自动发布。
