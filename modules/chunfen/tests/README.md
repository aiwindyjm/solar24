# chunfen tests

共享骨架合同由 [tests/modules.test.ts](../../../tests/modules.test.ts) 使用真实 manifest/入口验证。根目录 `pnpm --filter @solar24/module-chunfen test` 只运行本模块合同。

添加本模块实际交互后，在此新增 *.test.ts，根测试和单模块命令会自动发现；不要用空 smoke test 冒充测试。公共生命周期测试位于 tests/runtime.test.ts，Host 路径由 Playwright 验证。
