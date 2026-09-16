> 前期方案记录：初始化后的当前目录、接口、状态与研究层规范见 [docs/README.md](docs/README.md)。原建议保留供追溯。

# Solar24 Module Protocol

## 模块职责
模块是一个可独立运行、可被 Host 挂载的数字文化体验单元。它同时提供内容、体验声明、资源清单和可访问降级版本。

## Manifest（概念）
```ts
type ModuleManifest = {
  id: string; slug: string; term: string; season: 'spring'|'summer'|'autumn'|'winter';
  version: string; status: 'skeleton'|'draft'|'review'|'published';
  entry: string; content: string; capabilities: ('scene'|'audio'|'interaction')[];
  locales: string[]; assets: string[]; sources: string[];
};
```

## 运行时接口
```ts
interface Solar24Module {
  mount(context: ModuleContext): Promise<ModuleHandle>;
}
interface ModuleHandle {
  pause(): void; resume(): void; resize(size: Viewport): void;
  dispose(): Promise<void>; getAccessibleView(): AccessibleView;
}
```
`context` 提供容器、内容、主题、用户设置、资源加载器和日志接口；模块不得直接操作 Host 路由或全局 DOM。`dispose` 必须释放 RAF、事件、音频、WebGL 和纹理。

## 生命周期与能力
初始状态只渲染文本和静态媒体；用户进入后再加载重资产。能力缺失时回退到静态图、字幕和可读叙事。模块不得把音频自动播放或动画作为理解前提。

## 完成标准
内容字段完整、来源可追溯、体验至少解释一个事实、键盘可用、有 reduced-motion 版本、移动端可读、独立构建成功，并通过模块契约测试。
