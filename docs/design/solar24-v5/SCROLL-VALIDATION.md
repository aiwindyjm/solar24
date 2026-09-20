# 全幅手卷验收 · 2026-09-20

## 最新修订 · 五个独立主题卷

此次只调整第五版 `Book.tsx`、`ReadingScroll.tsx`、`main.tsx`、`scroll.css` 与设计说明，不改原始文化正文或审核状态。

- 五个入口逐个点击：每次只有一个 `.topic-reading`，卷名、正文和来源对应选中的自然／物候／农事／生活／意义；不再渲染五章列表。
- 每卷从顶部展开，来源说明默认收起，可单独打开。快速自然→生活→农事最终只显示农事卷；切换节气保留所选主题并更新内容。
- 年轮开卷前后几何位置完全相同。Escape 返回最近使用的主题入口，漫游收起阅读区；减少动态时不播放开卷动画。
- 1269×1066、1280×720、390×844 与中英文实测。手机阅读区下沿516，工具栏起于529，英文主题入口起于671、高77，均无遮挡；无水平溢出或 pageerror。
- 截图已查看：`solar24-v5-topic-agriculture.png`、`solar24-v5-topic-phenology.png`、`solar24-v5-topic-en-720.png`、`solar24-v5-topic-mobile.png`。浏览器脚本 `.tmp/v5-topic-check.js` 通过。
- 仓库 lint、74 项测试、build，第五版独立 tsc／build 与 Host E2E 2项通过。原有 Zod 注释及大 chunk 提示仍在。尚未进行真实手机和跨浏览器验收。

## 最新反馈修订 · 阅读区与场景一致

以下新结果替代旧的全幅覆盖及底栏 inert 描述。范围仅第五版组件、样式、字体子集与说明。

- 1269×1066：阅读区 x=57.09、y=110、width=1154.81、height=714，下沿 824；卦象／漫游按钮起于 y=845，主题入口起于 y=892，均无遮挡。年轮前后均 x=317.25、y=98、width=height=685.25。
- 1280×720：阅读区 y=86、height=402，下沿 488；工具栏起于 y=499，主题入口起于 y=546。
- 390×844：进入阅读后阅读区 y=16、height=500，工具栏 y=529，主题入口 y=663、高77，均在可见范围；无横向溢出。
- Playwright 实际点击外部主题可选章并定位；阅读时卦象按钮有效；漫游按钮收起阅读并从立春开始。日历仍可打开，底栏切换节气时题名与纸面颜色同步。立春与雨水的 computed background-image 不同，来自各自环境色。
- Escape 返回最后一次主题入口；减少动态立即展开；一个 canvas，无 pageerror。
- 截图：`solar24-v5-veil-closed.png`、`solar24-v5-veil-daxue.png`、`solar24-v5-veil-lichun.png`、`solar24-v5-veil-720.png`、`solar24-v5-veil-mobile.png`；脚本 `.tmp/v5-veil-check.js`。
- 仓库 lint、74 项测试、build，第五版独立 tsc 与 build 通过；Host E2E 桌面／手机 2 项通过（4183）。原有 Zod 注释与大 chunk 警告未隐藏。未声称跨浏览器或实机性能验收。

## 以下为上一轮全幅方案的历史记录

本记录替代此前“部分宽度手卷”的尺寸与交互描述；参考来源和范围见 [SCROLL-RESEARCH.md](SCROLL-RESEARCH.md)。

## 浏览器实测

Chromium / Playwright CLI，本地第五版端口 5176；检查脚本 `.tmp/v5-handscroll-check.js`，截图在 `output/playwright/`。

- 1269×1066：展开区域 x=0、y=86、width=1269、height=980，恰好覆盖顶栏以下全幅。打开前后年轮均为 x=317.25、y=98、width=685.25、height=685.25，未移动或缩放。
- 1280×720：短屏适配、固定收卷入口、卷内目录及正文滚动可用。
- 390×844：页面顶部展开区域 x=0、y=117、width=390、height=727，无水平溢出，年轮几何位置不变。从页面下方文化入口打开时自动按已滚出的顶栏定位，覆盖剩余可见画面。
- 右向左舒卷有中间帧（采样 clip-path 左侧 29.2565%）；快速开—关—开最终停在最新目标。减少动态时 transition-duration=0s。
- 卷内目录选择第五章、收起、重新选择打开、展开来源均通过。手机外部物候入口选中正确章节。
- 被盖住的场景、文化入口、节气条与日期栏禁用交互；阅读顶栏与关闭按钮不随正文滚走。键盘打开进入阅读区域，Escape 收起后焦点回到原入口。验收发现并修复了 inert 导致旧焦点恢复失效的问题。
- 顶部切至听人间后没有手卷或五章重复入口；浏览器返回时手卷保持收起。始终只有一个 canvas，无 pageerror。
- 中英与桌面、手机截图已查看。修正了卷内伪元素无法模糊背景的问题：背景模糊作用于整张展开表面，正文与题名保持清晰。

截图：`solar24-v5-handscroll-desktop.png`（中文）、`solar24-v5-handscroll-en.png`、`solar24-v5-handscroll-unrolling.png`、`solar24-v5-handscroll-720.png`、`solar24-v5-handscroll-mobile-en.png`、`solar24-v5-handscroll-mobile-zh.png`。

## 工程检查

- `pnpm lint` 通过；24 模块、586 知识实体、13 模板校验通过。
- `pnpm test`：8 文件、74 项通过。
- `pnpm build` 通过；既有 Zod Rollup 注释警告仍在。
- 第五版独立 TypeScript 检查及 Vite build 通过；仍有大于 500 kB 的 chunk 提示，未修改警告阈值。
- `pnpm test:e2e --config .tmp/solar24-v3-e2e.config.ts`：Host 桌面与手机 2 项通过，以 4183 避让已有服务。这不代替上面的第五版 UI 实测。
- 中文字体子集按新增题名文案重新生成；原始字体、素材和其他版本未改动。

本轮未进行实机低端手机性能、Safari/Firefox 或屏幕阅读器测试。半透明全幅手卷是艺术化网页设计，不声称复原某一件文物或某时代的装裱规格。文化审核状态保持原样。
