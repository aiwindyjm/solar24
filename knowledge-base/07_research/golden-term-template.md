---
schema_version: '0.1.0'
id: 'golden-term-template'
type: 'ResearchNote'
title: '节气黄金研究模板（立春试点定型，可复制到其余23个节气）'
solar_terms: ['lichun']
season: 'spring'
dimensions: ['ai-research-log']
region: []
period: null
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'unknown'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
research:
  {
    'task': '把立春试点定型为可复制的节气研究与内容生产模板（A-L十二段）',
    'queries': [],
    'discovered_source_ids': [],
    'conflicts': [],
    'conclusions': ['模板以四层内容模型为骨架，每段均有立春实例可对照'],
    'human_questions': ['模板投产前需人工审核立春首批卡片，验证门槛设置是否合适'],
  }
---

# 节气黄金研究模板（A–L）

复制顺序：先读 [[00_project/guide|规范]]，再按段推进；每段标注完成度，未达标不得跳段。立春为对照实例。

## A. Research Questions（研究问题清单）

每节气启动时固定生成，先审后搜。最少覆盖：天文定义是什么？在历法中的位置？古典物候文献？农业功能？生活/饮食/习俗的证据链（含谱系辨析）？文学样本1-2件？地域差异样本≥2？现代延续形态？全球表达（Candidate 封存）。
*立春对照：11组检索问题见 [[07_research/research-lichun-pilot-log|第一轮日志]]。*

## B. Required Dimensions（必需维度）

19 维中度量评级（complete/partial/weak/missing/N-A）。**启动门槛**：astronomy、calendar、phenology、history、customs、climate 六维至少 partial（各≥1张 direct-read 来源的卡）；agriculture、chinese-life、food、literature-art 至少 weak+（有卡或明确记录 Needs Research）；ecology、visual、audio 允许 missing（记录原因）；global-expressions 一律 Candidate 不扩张。

## C. Source Requirements（来源要求）

- 优先级：政府/国家级机构 > 学术 > 权威媒体 > 百科（仅线索）。
- 每 Source 必填 `access`（direct-read / search-excerpt）；search-excerpt 只能支撑 low 置信度。
- 古籍必须读到原文（维基文库/CText/点校本），转引不算直读；版本异文如实记录。
- 反爬/超时未读一律记"未读"，不得从标题推断。

## D. Evidence Standards（证据标准）

- FACT/SCIENTIFIC/HISTORICAL/TRADITION/LEGEND/INTERPRETATION/OPINION/UNVERIFIED 八层不混排；传统经验与现代科学分卡。
- confidence=证据质量：high 须 direct-read + cross-checked（机器强制）；medium 须 direct-read；地域与时代字段非泛化。
- 冲突不合并：Claim A / Claim B / 来源 / 差异原因 / 当前评估。
- 修改必留"修改记录"（What/Why/Date），不删研究历史。

## E. Knowledge Note Template（知识卡模板）

沿用 90_templates/*，一张卡一个命题；正文段落：研究问题→证据（原文+定位）→AI摘要/人工解释→适用条件、例外与分歧→关联→待人工确认→修改记录。系统级事实进 [[02_shared/README|02_shared]]，节气卡只留本节气特有命题。

## F. Human Explanation Template（解释层模板）

每节气一张 `HumanExplanation` 卡：audience / one_sentence（一句）/ summary（约100字）/ expanded（四段式：是什么·与自然·与生活·为何今天仍值得理解）/ why_it_matters / supporting_knowledge_ids / limitations。规则：每句可回溯；支撑卡未全 approved 前解释保持 draft 不得导出（validate 强制）；不塞100字牺牲准确性。

## G. Narrative Chain Template（叙事链模板）

六环：Astronomy→Time→Nature→Agriculture→Human Life→Culture。每环标注支撑卡与置信度；**无 ≥medium 证据的环标 Needs Research，禁止强行闭合**；跨环叙述里的解释性语句单独标 interpretation。

## H. Visual Opportunity Template（视觉机会）

Creative Proposal 层。记录：视觉母题（来自哪张证据卡）、呈现形式、红线（地域/时代/非遗身份不得泛化）、素材版权状态。无授权素材时只写母题不写资产。

## I. Audio Opportunity Template（声音机会）

同 H。额外记录：声音类型/来源/地区/版权；古籍中的声音线索（如节气配律）只能作为史料引用，不得写成音频资产。

## J. Interaction Opportunity Template（互动机会）

Creative Proposal 层。记录：交互隐喻、依赖的证据卡、数据/素材缺口、误导风险与文案校准点（如"节气≠天气"）。

## K. Global Expression Template（全球表达）

`expression.status: candidate` 起步；三要素 Similarity / Difference / Relationship 必填；relationship 明确"传播/平行/同源"性质；**candidate ≠ verified correspondence**。升级条件：来源直读 + 跨文化顾问/社区确认。第一轮研究不主动扩张。

## L. Review Checklist（审核清单）

人工审核每张卡过十一问：有来源？来源可靠？原始出处？转载识别？历史/现代区分？整体/地方区分？事实/解释区分？传统/科学区分？争议记录？未确认标注？链接真实？+ 三条终审：民俗是否被写成全国传统？现代商业是否被写成古俗？科学解释是否倒灌成古人知识？

---

## 24 节气统一研究流程（浓缩版）

```
0 复制本模板 → 1 研究问题（A）→ 2 定向检索（少量高价值）
→ 3 Source（access 分级）→ 4 知识卡（D/E，系统级入 shared）
→ 5 覆盖矩阵评级（B）→ 6 HumanExplanation（F）+ 叙事链（G）
→ 7 创意层（H/I/J，标注 Proposal）→ 8 Global candidate（K）
→ 9 validate 通过 → 10 提交人工审核（L）→ 11 人审通过后 Verified→内容出口
```

前置条件：单节气增量研究模式下，启动新节气前，上一节气须完成至少 4 张高证据卡的人审（Verified 层非零）；**Batch Research Mode（2026-09-16 修订 #B1）下**改为"每节气≥4张高证据卡进入统一人工审核包"，详见 [[07_research/batch-24-solar-terms-plan|批量研究计划]] 与 skills/solar24-cultural-research/SKILL.md。

[[01_terms/01_立春|立春索引]] · [[07_research/research-lichun-model-review|模型复盘]] · [[00_project/guide|规范]]
