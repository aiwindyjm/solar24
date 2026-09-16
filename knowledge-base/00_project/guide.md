# 使用与审核规范

一个笔记表达一个命题、史料、传统、来源或创意；可跨维度，但不把矛盾观点融合成无条件结论。

编辑流程：draft → in-review → approved；纠错可回到 draft，失效/撤回为 withdrawn。AI 只能产出 draft 和待审建议。status 与模块 Prototype 等状态无关。

- 事实 / 科学解释：有来源和适用条件。
- 传统 / 传说：明确地域、时代及文本性质，不能作科学证据。
- 解释 / 观点：署名、依据和推论边界清楚。
- unverified：没证据或没读到原文；contested=true：有未解决分歧。

文件名可读，YAML id 稳定不随重命名改变。source_ids 链到 Source ID；正文用完整 Vault 相对路径 Wiki Links。每次有实质修改更新 updated，人审后再改正文须重新审核。

根目录执行 pnpm validate 校验 YAML、引用与链接。机器能发现漏字段，不能证明文化准确。对模板中的“待填写”、template-* 和 draft 内容不得声称审核完成。

[[README|返回知识库]]
