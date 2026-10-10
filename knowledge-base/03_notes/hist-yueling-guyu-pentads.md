---
schema_version: '0.1.0'
id: 'hist-yueling-guyu-pentads'
type: 'HistoricalRecord'
title: '《月令七十二候集解》谷雨三候：萍始生、鸣鸠拂其羽、戴胜降于桑'
solar_terms: ['guyu']
season: 'spring'
dimensions: ['phenology', 'history', 'ecology']
region: ['文本经验锚定中国（黄河流域为核心的古典物候传统）；实际物候因纬度海拔而异']
period: '文本传统题名为元代；所承物候体系更早（《礼记·月令》《逸周书》等）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  ['source-yueling-qishierhou-wikisource', 'source-ihchina-guyu-feature']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-18'
human_review:
  {
    'reviewer': 'aiwindyjm',
    'reviewed_at': '2026-09-28',
    'decision': 'approved',
    'notes': 'Owner-authorized batch approval based on AI pre-review',
  }
claim:
  {
    'statement': '《月令七十二候集解》将谷雨列于清明之后，标注"穀雨，三月中"，定义句为"自雨水後，土膏脉動，今又雨其穀于水也"，并按五日一候记谷雨三候：一候萍始生、二候鳴鳩拂其羽、三候戴勝降于桑，各附注文（萍为水草；鸠即布谷，"趨農急矣，鳩乃追逐而鳴"；戴勝"此時恆在于桑，蓋蠶將生之候矣"）。',
    'exceptions': [
      '同源证据结构已声明（转写核对/同体系传承渠道，非独立来源互证）——independence 字段仅指发布方多样性，证据独立性须人工判定',
      '各版本三候注文文字可能存在异文，引用需注明版本（本卡以维基文库本为准）',
      '七十二候所述物候是古典文本经验，不等于当代中国各地的实际物候观测',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'hold',
    'findings': ['same-source-evidence-declared'],
    'notes': '未分类findings，保守hold',
  }
---

# 谷雨三候（古典文本记载）

## 研究问题

传统文献如何描述谷雨时节的自然变化？三候的原始文本与注文是什么？

## 证据（原文与定位）

已直接读取维基文库《月令七十二候集解》谷雨节全文（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]，2026-09-16 重抓全页提取本节气段）：

> 定义："穀雨〈【去聲】〉，三月中。自雨水後，土膏脉動，今又雨其穀于水也。雨讀作去聲，如'雨我公田'之雨，蓋穀以此時播種自上而下也。故《說文》云雨本去聲，今風雨之雨在上聲，雨下之雨在去聲也。"
> 一候："萍始生。萍，水草也，與水相平，故曰萍。漂流隨風，故又曰漂。《歷解》曰：萍陽物，靜以承陽也。"
> 二候："鳴鳩拂其羽。鳩，即鷹所化者，布穀也。拂，過擊也；《本草》云：拂羽飛而翼拍其身，氣使然也。蓋當三月之時，趨農急矣，鳩乃追逐而鳴，鼓羽直刺上飛，故俗稱布穀。"
> 三候："戴勝降于桑。戴勝一名戴鵀，《爾雅註》曰：頭上有勝毛。此時恆在于桑，蓋蠶將生之候矣。言降者，重之若天而下，亦氣使之然也。"

三候候名另与非遗网谷雨专题页所引一致（[[04_sources/source-ihchina-guyu-feature|source-ihchina-guyu-feature]]："第一候萍始生；第二候鸣鸠拂其羽；第三候为戴胜降于桑"）。

## AI 摘要 / 解释

- 三候构成暮春农时叙事：**浮萍生于泽（水暖）→ 布谷鸣而拂羽（催耕）→ 戴胜落于桑（蚕事将起）**——注文自己点明"趨農急矣"，物候信号直接服务于耕织时序，与谷雨的农事命名（见 [[03_notes/hist-guyu-naming-yushengbaigu|谷雨命名卡]]）同一逻辑。
- "穀雨，三月中"的"中"表明谷雨是其所在农历月的三月**中气**（与清明"三月节"相对）——节气/中气分组机制见共享卡 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]，本卡不复述。
- 注文中"鳩，即鷹所化者"（鹰化为鸠）属古典转化观念，是《月令》系统的解释框架（Interpretation 层），与物候现象记录本身应分层引用。

## 适用条件、例外与分歧

- 版本异文：本卡以维基文库本逐字为准；非遗网引"天雨谷"式异文已在仓颉卡登记（[[03_notes/legend-guyu-cangjie|谷雨祭仓颉传说卡]]），三候注文是否也有通行本异文待与中华书局印本比对。
- 元稹谷雨诗（[[03_notes/lit-guyu-yuanzhen|元稹诗卡]]）中"叶间鸣戴胜，泽水长浮萍"与三候同名物候呼应，可作文学平行样本。
- 当代物候验证（浮萍初生日、布谷始鸣日、戴胜落桑日的现代观测）本轮无数据，见 Needs Research。

## 关联

[[01_terms/06_谷雨|谷雨索引]] · [[02_shared/hist-solarterms-pentad-system|七十二候体系]] · [[03_notes/hist-guyu-naming-yushengbaigu|谷雨命名]] · [[02_topics/phenology|物候维度]]

## 待人工确认

- 三候注文与《礼记·月令》《逸周书·时训》平行文本的比对（化鹰、布谷诸注的来源）。
- 是否引入现代物候观测（中国物候观测网）建立"传统三候 vs 现代观测"对照。

## 修改记录

- 2026-09-16（第一轮）：建卡。维基文库本逐字摘录定义句与三候全文；候名获非遗网专题页转写核对（同一《月令》文本的机构转写，非独立来源互证——2026-09-17 质量修正 F03 改定性）。
- 2026-09-18（审计 R03）：exceptions 补机器可读同源声明标记（正文定性已在前轮完成，本条使其可被路由器识别）。
