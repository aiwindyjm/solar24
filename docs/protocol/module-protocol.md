# Solar24 Module Protocol · 0.1.0

权威类型：[protocol source](../../packages/protocol/src/index.ts)。机器格式：[manifest schema](schemas/manifest.schema.json)。当前接口属于 0.x，破坏性变更须更新 protocolVersion、文档、所有消费者和测试。

## Manifest

id/slug 使用稳定拼音，name/name_en 为中英身份；season 为中国传统四季编组，不声称全球或中国各地气候同步。order 为立春起的编辑顺序，不是每年公历第一个节气。version 属于模块；protocolVersion 属于契约。

status 使用六种项目状态；entry 仅本地 src/index.ts，capabilities 当前只有 static。content/references/assets 是模块内固定相对路径，locales 表示已支持的内容语种；英文名称不意味着全文英译完成。

## 接口与所有权

```ts
interface ModuleDefinition {
  manifest: ModuleManifest;
  mount(context: { container: HTMLElement; preferences: Preferences }): ModuleHandle;
}
interface ModuleHandle {
  pause(): void;
  resume(): void;
  updatePreferences(preferences: Preferences): void;
  dispose(): void;
}
```

mount 返回已挂载的句柄，无额外 start；pause/resume 可重复调用，恢复不能绕过 muted/reducedMotion。dispose 幂等、终止事件/RAF/音频并释放纹理；销毁后其他方法无效。失败必须释放已申请资源并抛出，由 Host 展示恢复入口。未来异步资产加载须可取消，不能在用户离开后写回 DOM。

Host 管 hash 导航、动态加载、取消过期响应、页面可见性和用户偏好；模块仅操作获得的容器。CSS 响应式布局，未来 Canvas 才引入 ResizeObserver；不提前提供空 resize API。静态语义 HTML 是最低能力，不能以 WebGL/声音作为阅读前提。

## 独立性

每模块 package 提供 dev/test/build，复用同一 Host 和根配置。全站构建采用本地 manifest 注册表和动态 import；单模块构建只包含所选模块。禁止共享隐式全局状态、跨节气 src import、远程 JS entry。验证目录、序号、引用和资产哈希后再构建。
