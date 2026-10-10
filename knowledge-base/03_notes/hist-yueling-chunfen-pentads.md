---
schema_version: '0.1.0'
id: 'hist-yueling-chunfen-pentads'
type: 'HistoricalRecord'
title: '《月令七十二候集解》春分三候：玄鸟至、雷乃发声、始电'
solar_terms: ['chunfen']
season: 'spring'
dimensions: ['phenology', 'history', 'ecology']
region: ['文本经验锚定中国（黄河流域为核心的古典物候传统）；实际物候因纬度海拔而异']
period: '文本传统题名为元代（吴澄）；所承物候体系更早（《礼记·月令》《吕氏春秋》等）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-yueling-qishierhou-wikisource']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review:
  {
    'reviewer': 'aiwindyjm',
    'reviewed_at': '2026-09-28',
    'decision': 'approved',
    'notes': 'Owner-authorized batch approval based on AI pre-review',
  }
claim:
  {
    'statement': '《月令七十二候集解》以"春分，二月中。分者，半也。此当九十日之半，故谓之分。秋同義"定义春分（二月中气），并以五日为一候记春分三候：一候元鸟至（"元鳥，燕也"，注引高诱"春分而來，秋分而去也"）、二候雷乃发声、三候始电；注文以阴阳、四阳渐盛等观念解释雷声与电光，属古典解释体系。',
    'exceptions': [
      '七十二候所述物候是古典文本经验，不等于当代中国各地的实际物候观测',
      '注文中的阴阳四阳解释是古典自然哲学（interpretation 层），与现象记录本身应分层引用',
      '本卡所引为维基文库本文字，各本注文存在异文可能，引用需注明版本',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': ['高置信但独立直读方=1；需第二独立来源或点校本核对'],
    'notes': 'REVISE→APPROVE：一手古籍维基文库直读，独立性=1是该来源形态固有；点校本核对列为人审条件',
  }
---

# 春分三候（古典文本记载）

## 研究问题

传统文献如何定义"春分"之名？春分三候的原始文本与注文是什么？

## 证据（原文与定位）

已直接读取维基文库《月令七十二候集解》春分节全文（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]，位于惊蛰节之后、清明节之前）：

> 定义："春分，二月中。分者，半也。此當九十日之半，故謂之分。秋同義。夏、冬不言分者，蓋天地閒二氣而已。方氏曰：陽生于子，終于午，至卯而中分，故春為陽中，而仲月之節為春分，正陰陽適中，故晝夜無長短云。"
> 一候："元鳥至。元鳥，燕也。高誘曰：春分而來，秋分而去也。"
> 二候："雷乃發聲。陰陽相薄為雷，至此，四陽漸盛，猶有陰焉，則相薄乃發聲矣。乃者，《韻會》曰：象氣出之難也。註疏曰：發，猶出也。"
> 三候："始電。電，陽光也，四陽盛長，值氣泄時而光生焉，故《歷解》曰：凡聲陽也，光亦陽也。《易》曰：雷電合而章。《公羊傳》曰：電者，雷光是也。《徐氏》曰：雷陽陰電，非也。蓋盛夏無雷之時，電亦有之，可見矣。"

"春分，二月中"的"中"即中气标签：春分为农历二月之中气，节/中气分组与月序配对机制见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]（共享卡，此处不复述）；七十二候体系源流见 [[02_shared/hist-solarterms-pentad-system|七十二候体系]]。

## AI 摘要 / 解释

- 三候构成仲春的候鸟与天气叙事：**燕归（元鸟至）→ 初雷（雷乃发声）→ 闪电（始电）**。与前两候"风、虫、鱼"不同，春分三候的观察对象转向天空信号（候鸟、雷电），与"春分到清明气温上升最快"的经验时段（见非遗网专题卡）相呼应。
- "元鳥，燕也"是"玄鸟=燕"训释的直接文本依据；注引高诱"春分而来，秋分而去"描述燕的迁徙节律——这属于古籍注家的经验归纳。
- 注文以"阴阳相薄""四阳渐盛"解释雷与电，并引《易》《公羊传》互证，是古典阴阳自然哲学的典型样例；其中"《徐氏》曰：雷陽陰電，非也"还保留了古籍内部的辨驳。这些解释属古典解释体系（Interpretation），不是现代气象学。

## 适用条件、例外与分歧

- 非遗网春分专题（[[04_sources/source-ihchina-chunfen-feature|source-ihchina-chunfen-feature]]）转述三候与《月令》引文逐字一致，可作第二旁证（机构汇编层）。
- 该专题页另载"春分花信：一候海棠、二候梨花、三候木兰"——花信风不出自《月令七十二候集解》本文，其文献源头（"二十四番花信风"谱系）待另考，本卡不将其记为《月令》内容。
- 当代物候验证（燕子实际到达日期、初雷日期的现代观测）未建卡，属生态维度后续课题。

## 关联

[[01_terms/04_春分|春分索引]] · [[03_notes/sci-chunfen-longitude-0|春分黄经定义]] · [[03_notes/lit-xuxuan-chunfenri|徐铉《春分日》]]（"燕飞犹个个"与元鸟至相应） · [[02_topics/phenology|物候维度]]

## 待人工确认

- 版本校勘（中华书局印本/《四库》本比对）；《礼记·月令》《逸周书·时训》对春分三候的更早平行记载。

## 修改记录

- 2026-09-16（首轮批研究）：建卡，维基文库直读逐字摘录；定义句与三候注文齐备；花信风明确标注为非遗网转述、非《月令》本文。
- 2026-09-16（审核阶段）：路由 human-review-required（finding：evidence-below-confidence——high 置信但独立直读方仅1；古籍原文直读本为单一来源的正常形态，按立春卡先例保留 high 待人工裁决），状态 draft → in-review。见 [[07_research/sections/review-chunfen|春分审核分节]]。
