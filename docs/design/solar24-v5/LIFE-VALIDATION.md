# 听人间节气细化 · 验证记录

日期：2026-09-20。本轮范围为 `docs/design/solar24-v5/`，预览端口 5176。

## 浏览器交互

使用 Playwright CLI 在 Chromium 中检查：

- 24 节气 × 3 场景入口全部打开；24 个动作标题与 24 个记忆问题分别不同，覆盖 14 类 SVG 动作。
- 各节气滑杆从起点到终点确实改变图形，阶段文案随进度变化。冬至计数上限 81，重置与逐次增加有效。
- 背景、地域和来源可以展开，保留待人工核验状态；不会打开观四时手卷。
- 退一步后焦点返回原入口；页面只有一个环境 canvas，常规遍历无未捕获页面异常。
- 声音默认关闭，用户开启后 AudioContext 运行，暂停后挂起，恢复后继续，关闭后释放。切换节气复用同一个上下文。大雪与雨水的滤波频率在渐变过程中分别约 289 Hz 与 1415 Hz，验证音色参数确实变化。这不是音质测评或现场录音真实性验证。
- 记忆保存后刷新仍保留，不同节气分别存储；测试结束恢复原存储值。
- 1269×1066、1280×720、390×844 检查布局，手机没有页面横向溢出。大雪覆护、冬至计数、谷雨舒茶和记忆背景均保存截图。
- 强制 WebGL 上下文创建失败后，静态山水、三个入口、覆护滑杆与记忆输入仍可使用，无未捕获页面异常。控制台出现预期的 Three.js 上下文创建错误。

本轮未做真实手机性能或帧率基准测量。

## 工程检查

全部通过：

- 第五版独立 TypeScript 检查、Vite 构建。
- 本轮修改的 TS/TSX/CSS 文件 Prettier 检查。
- `pnpm lint`：包括 24 个模块、586 个知识实体和 13 个模板的验证。
- `pnpm test`：8 个文件，74 个测试通过。
- `pnpm build`。
- `pnpm test:e2e --config .tmp/solar24-v3-e2e.config.ts`：生产 Host 桌面、移动端 2 个测试通过，使用端口 4183。这两项不代替上面的第五版交互检查。

构建仍有 Zod 依赖注释警告、第五版单个 JS 包超过 500 kB 的警告；第五版主 JS 约 1142 kB，gzip 约 346 kB。没有放宽检查或隐藏警告。

## 截图

文件位于仓库 `output/playwright/`：

- `solar24-v5-life-season-daxue.png`：大雪三个入口。
- `solar24-v5-life-season-shelter.png`：大雪覆护动作。
- `solar24-v5-life-season-dongzhi-720.png`：短桌面冬至计数。
- `solar24-v5-life-season-memory-mobile.png`：手机记忆与地域背景（含临时 QA 输入，存储已恢复）。
- `solar24-v5-life-season-tea-mobile.png`：手机谷雨舒茶。
- `solar24-v5-life-season-fallback.png`：无 WebGL 的动作与背景阅读。

复现脚本保存在本地 `.tmp/v5-life-24-check.js`、`.tmp/v5-life-extras.js`、`.tmp/v5-life-fallback.js`，不作为生产页面依赖。
