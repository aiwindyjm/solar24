# V5 Demo 性能基线 · Performance Baseline（2026-09-25 · 桌面仿真）

> Roadmap #3：建立加载、内存、帧率与长时运行基线，再验证拆包或降级的效果。**只测不改**。

## 构建环境

- Node 24.18.0 / Vite 生产构建 / 1.59s 构建时间
- 部署目标：Cloudflare Workers（静态）
- 本文档为桌面仿真数据；**真机复测待做**。

## 一、产物构成（dist/ 总体积 7.7 MB / 65 文件）

| 类别 | 体积 | 文件数 | 占比 | 备注 |
|---|---|---|---|---|
| JS 主包 | 1,142 KB (gzip 346 KB) | 1 | 14.8% | 含 Three.js+React+全场景；超 500KB 警告 |
| 字体 | 1,424 KB | 6 | 18.5% | 中英双语 6 套 woff2 |
| WebP 节气图 | 5,188 KB | 48 | 67.3% | 24 节气 × 中英两张，平均 216 KB/张 |
| CSS | 41 KB (gzip 10 KB) | 1 | 0.5% | |
| HTML+其他 | ~35 KB | 9 | 0.5% | |

### 字体明细

| 字体 | 体积 | 用途 |
|---|---|---|
| MaShanZheng-Regular | 604 KB | 中文标题书法 |
| LXGWWenKai-Regular | 344 KB | 中文正文 |
| CormorantGaramond | 208 KB | 英文标题衬线 |
| SourceSans3 | 168 KB | 英文正文 |
| LibreBaskerville | 64 KB | 英文备选 |
| LXGWSeal-Regular | 36 KB | 中文印章 |

### 关键发现

1. **WebP 节气图占总体积 2/3**（5.2 MB）——但为懒加载（按需请求当前节气），首屏实际不下载全部
2. **JS 主包 1.14 MB（gzip 346 KB）** 超 Vite 500 KB 警告阈值——Three.js 是主因
3. 字体总量 1.4 MB，单页面按 locale 只用 2 套（~950 KB），但 CSS 未做 font-display 优化确认

## 二、冷加载估算（桌面仿真）

假设首次访问立春场景（中/英各一次）：

| 场景 | 首屏必需资源 | 估算总量 |
|---|---|---|
| HTML + CSS + JS | 1 + 1 + 1 | ~1.18 MB (gzip ~356 KB) |
| 中文字体 × 2 | MaShanZheng + LXGWWenKai | ~950 KB |
| 立春 WebP × 1 | lichun-*.webp | ~230 KB |
| **首屏合计** | | **~2.36 MB (gzip ~1.3 MB 估)** |

- Cloudflare Workers 边缘缓存后，实际感知取决于网络
- 非首屏节气图按需加载（Vite 资产命名含 hash，浏览器可缓存）

## 三、优化假设（待验证，不实施）

| 假设 | 预期收益 | 验证方式 |
|---|---|---|
| Three.js 拆包（dynamic import Cosmos 场景） | JS 从 1.14→~400 KB（首屏） | build 后比较 chunk 体积 |
| WebP 转 AVIF 或降质量 80→70 | 每张省 30-50% | 视觉对比+体积测量 |
| 字体子集化（中文字符按需） | MaShanZheng 604→~100 KB | fonttools 子集化后对比 |
| manualChunks 分割 React/Three/字体加载器 | 并行加载+缓存友好 | Lighthouse 对比 |

## 四、帧率与内存（待真机测量）

桌面仿真无法替代真机。建议测试矩阵：

| 场景 | 设备 | 测量 |
|---|---|---|
| Seasons 漫游（24 蝴蝶+调色板） | 桌面+手机 | requestAnimationFrame 帧率 |
| Cosmos（Three.js 日地场景） | 桌面+手机 | 同上 + GPU 内存 |
| Human life（写意绘画+本地存储） | 桌面+手机 | 交互延迟 |
| 长时运行（10 分钟漫游） | 桌面 | heap 快照前后对比 |

**此处不填数字——等真机测。**

## 五、结论

V5 Demo 构建产物结构清晰，最大的优化空间在 Three.js 拆包与字体子集化。但按 Roadmap 排序，性能优化在生产模块接入之后——当前目标是**先让生产内容上线**，再针对真实用户设备做优化。

---

*基线数据采集于 2026-09-25，构建环境 Windows 11 / Node 24.18.0 / Vite 6.x。真机数据待补。*
