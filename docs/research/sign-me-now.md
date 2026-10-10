# 签署批准包 · 一页纸摘要（<15 分钟）

## 你需要做的事

打开 [批量批准包](batch-ratification-package-2026-09.md) 第六节，逐组填 Decision + 你的名字 + 日期。

## 核心数字

| 项 | 值 |
|---|---|
| AI 拟审覆盖 | 299 张 claim/解释卡 |
| approve 建议 | **263** 张（证据已核、范围明确、AI 未发现内容错误） |
| hold | 36 张（全球候选证据不足，不阻塞） |
| reject | **0** 张 |
| 立春 LC 依赖 | **8/8 全部 approve** → 签署后立即可落盘 |

## 必查建议（5 分钟）

批准包第四节列了 17 张建议抽查的卡。**最低限度看前 3 张**：
1. `fact-solarterms-unesco-2016`（system 级，影响全库）
2. `sci-lichun-longitude-315`（LC-2 依赖：黄经 315°）
3. `hist-yueling-lichun-pentads`（LC-5 依赖：三候原文）

每张看 claim 是否超出证据（30 秒/张）。

## 签署后会发生什么

AI 将立即执行：
1. 回填 human_review（你的名字/日期）
2. 落盘 modules/lichun/content/zh-CN.json（8 命题+4 折叠段+来源脚注）
3. Host 接入（本地预览立春生产模块）
4. 全量 validate+test 验证

**预计完成时间：签署后 30 分钟内。**

## 如果不签

项目停在"626 个研究实体+0 个用户可见产品"状态。研究已完成但未转化为任何用户价值。

---

签署入口：[batch-ratification-package-2026-09.md](batch-ratification-package-2026-09.md) § 第六节签署区
