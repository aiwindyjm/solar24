# 立春 · Development Journey

记录于 2026-09-20，由 AI 辅助整理已有仓库材料；不新增文化结论，不代填人工审核。模块为 [Prototype 静态骨架](../../../modules/lichun/module.manifest.json)，[生产文化内容](../../../modules/lichun/content/zh-CN.json)仍是 draft，sections/claims 为空。

## 两个可以明确区分的入口

- [立春共享 Demo](https://solar24-demo.solar24.workers.dev/?lang=zh#lichun/seasons)：已经上线，包含蝴蝶年轮、五个阅读主题、太阳周年与地球近观，以及待芽、聆听和个人记忆。
- [生产立春模块](../../../modules/lichun/README.md)：仍为 Host 骨架，后续接入内容须遵守协议与审核门槛。共享 Demo 不改变 manifest 的 Prototype 状态。

## 阶段与现有证据

| 阶段                      | 当前成果与边界                                       | 证据                                                                                                                  |
| ------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 01 Research               | 已有原始研究索引与 Demo 的选编来源，生产审核独立推进 | [知识索引](../../../knowledge-base/01_terms/01_立春.md)、[引用快照](../../design/solar24-v5/src/book-provenance.json) |
| 02 Cultural Understanding | 区分立春、春节与当地天气；地方生活保留地域           | [双语正文](../../design/solar24-v5/src/book-copy.ts)                                                                  |
| 03 Story                  | 由太阳与时间进入自然观察，再靠近日常生活             | [V5 体验](../../design/solar24-v5/README.md)                                                                          |
| 04 Visual Direction       | 写意山水、完整蝴蝶、留白与连续场景已实现             | [设计演进](../prototype-evolution.md)                                                                                 |
| 05 Color Language         | 立春五角色环境色已经用于画面                         | [节气数据](../../design/solar24-v5/src/data.ts)                                                                       |
| 06 Sound Direction        | 可选合成环境音已实现，无地方唱词或社区曲目           | [声音实现](../../design/solar24-v5/src/Audio.ts)                                                                      |
| 07 Interaction Design     | 独立手卷、原位日历、待芽动作与记忆问题               | [生活配置](../../design/solar24-v5/src/life-data.ts)                                                                  |
| 08 Prototype              | V5 可公开体验，V1–V4 为早期探索记录                  | [演进](../prototype-evolution.md)                                                                                     |
| 09 Implementation         | 共享 Demo 独立构建与部署；生产模块未迁入             | [部署指南](../../design/solar24-v5/DEPLOYMENT.md)                                                                     |
| 10 Refinement             | 工程交互检查已做，真实读者理解观察待开展             | [验证范围](../../design/solar24-v5/DEPLOYMENT-VALIDATION.md)                                                          |
| 11 Release                | 共享 Demo 已发布，生产立春模块未声明 Released        | [交付记录](../../development/v5-demo-release.md)                                                                      |

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

## 下一轮：以立春验证读者理解

让首次接触节气的读者在不额外讲解的情况下体验立春，观察三个问题：能否区分立春与春节；能否理解太阳位置与本地冷暖的区别；能否在阅读、天文与参与之间找到自己的路径。记录真实反馈后再确定优先调整，不预填结论。

生产接入先选择待审核的最小正文与素材范围，再按模块生命周期整理实现。新增决定按[统一模板](../journey-template.md)追加，链接可复查代码与提交。上述 LC-SCOPE-01 保留原有历史依据；未提交的早期研究简报不充当读者必须打开的页面。
