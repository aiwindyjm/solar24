# 立春 · Development Journey

记录于 2026-09-20，由 AI 辅助整理已有仓库材料；不新增文化结论，不代填人工审核。模块为 [Prototype 静态骨架](../../../modules/lichun/module.manifest.json)，[生产文化内容](../../../modules/lichun/content/zh-CN.json)仍是 draft，sections/claims 为空。

## 阶段与现有证据

| 阶段                      | 工作状态    | 依据与下一步                                                                                                                                             |
| ------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01 Research               | in-progress | [知识索引](../../../knowledge-base/01_terms/01_立春.md)、最小审核包（工作区材料，尚未提交：`docs/research/lichun-minimum-content-review-package.md`）；存在研究候选，待真实审核 |
| 02 Cultural Understanding | in-progress | MVP 简报（工作区材料，尚未提交：`docs/product/lichun-mvp-brief.md`）列出理解目标和地域边界；简报不代替事实审核                                                                  |
| 03 Story                  | in-progress | 同一简报采用太阳刻度、地方生活案例与开放邀请；范围选择见下                                                                                               |
| 04 Visual Direction       | in-progress | [V1–V4 演进](../prototype-evolution.md)，均为共享原型探索                                                                                                |
| 05 Color Language         | in-progress | V3 五角色颜色（工作区材料，尚未提交：`docs/design/solar24-v3/README.md`）是创作配置，非历史标准色谱                                                      |
| 06 Sound Direction        | in-progress | [声音原则](../../design/audio-principles.md)与既有原型合成环境声；没有正式节气音乐                                                                       |
| 07 Interaction Design     | in-progress | V4 三尺度、原位日历、键盘/静态替代，尚未迁入生产 Host                                                                                                    |
| 08 Prototype              | in-progress | V4 说明（工作区材料，尚未提交：`docs/design/solar24-v4/README.md`）与验证记录；不等于立春完成版                                                                                 |
| 09 Implementation         | in-progress | [模块入口](../../../modules/lichun/src/index.ts)、共享 runtime 与原型分开                                                                                |
| 10 Refinement             | in-progress | 下述范围取舍与共享原型演进；仍需零背景读者验证                                                                                                           |
| 11 Release                | not-started | 本 Journey 不创建 tag，不声称已发布；正式素材与内容审核仍是前置条件                                                                                      |

## 已有取舍：缩小首版气候解释范围

记录 ID：LC-SCOPE-01。成熟度：Revision。原决定来源为 2026-09-18 的 MVP 简报第 4 节（工作区材料，尚未提交：`docs/product/lichun-mvp-brief.md`），本次仅整理，未补造口头反馈。

- 初版：研究层保留深圳平均入春日与判据资料，曾可作为城市锚点候选。
- 问题：单城数字增加审核负担，判据转写容易失真。
- 证据：简报的“深圳案例处置”明确记录这一问题与范围决定。
- 调整：首版只区分天文刻度与当地气象入春，具体数字留在知识层。
- 原因：先帮助零背景读者建立两种概念，不让单一城市案例抢走叙事。
- 取舍：少了具体城市的可感性，未来如需城市锚点应单独过审。
- 验证结果：范围决定已写入简报；本次没有读者理解测试，也未核验该气象数据。
- 下一步：由真实审核者处理最小内容审核包，再验证读者能否理解这个区别。

## 如何继续

新增决定按 [统一模板](../journey-template.md)追加，细节多时再拆阶段文件。这里链接的材料有部分仍在工作区未提交；当前可核对的 Git 初始化提交是 `7418d79`，不能将后续原型归到该提交。整理提交后补入真实 commit/PR 链接。
