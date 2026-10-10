---
schema_version: '0.1.0'
id: 'hist-yueling-qiufen-pentads'
type: 'HistoricalRecord'
title: '《月令七十二候集解》秋分三候：雷始收声、蛰虫坯户、水始涸'
solar_terms: ['qiufen']
season: 'autumn'
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
source_ids: ['source-yueling-qishierhou-wikisource', 'source-ihchina-qiufen-feature']
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
    'statement': '《月令七十二候集解》以"秋分，八月中。解見春分"定义秋分（八月中气；"分者，半也……秋同義"的定义语在春分条），并以五日为一候记秋分三候：一候雷始收声（注引鲍氏"雷二月陽中發聲，八月陰中收聲入地，則萬物隨入也"）、二候蛰虫坯户（"淘瓦之泥曰坏，細泥也"，注引《禮記註》"坏益其蟄穴之戶，使通明處稍小，至寒甚乃墐塞之也"）、三候水始涸（注引《禮記註》"水本氣之所為，春夏氣至故長，秋冬氣返故涸也"）。"雷始收声"与春分二候"雷乃发声"构成同书内的对偶条目。',
    'exceptions': [
      '七十二候所述物候是古典文本经验，不等于当代中国各地的实际物候观测',
      '注文以阴阳、气之消长解释雷声与水涸，属古典解释体系（interpretation 层），与现象记录分层引用',
      '非遗网专题转写《月令》作"八月中……分者平也，此当九十日之半"，与维基文库本"分者，半也"（且该语在春分条、秋分条仅注"解見春分"）不合——汇编转写，以古籍直读为准',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 秋分三候（古典文本记载）

## 研究问题

传统文献如何定义"秋分"之名？秋分三候的原始文本与注文是什么？与春分三候如何对偶？

## 证据（原文与定位）

已直接读取维基文库《月令七十二候集解》秋分节全文（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]，位于白露节之后、寒露节之前，本轮重新抓取）：

> 定义："秋分，八月中。解見春分。"
> 一候："雷始收聲。鮑氏曰：雷二月陽中發聲，八月陰中收聲入地，則萬物隨入也。"
> 二候："蟄蟲坏〈【音培】〉戶。淘瓦之泥曰坏，細泥也。按《禮記註》曰：坏益其蟄穴之戶，使通明處稍小，至寒甚乃墐塞之也。"
> 三候："水始涸。《禮記註》曰：水本氣之所為，春夏氣至故長，秋冬氣返故涸也。"

"秋分，八月中"的"中"即中气标签：秋分为农历八月之中气，节/中气分组与月序配对机制见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]（共享卡，此处不复述）；七十二候体系源流见 [[02_shared/hist-solarterms-pentad-system|七十二候体系]]。定义语"分者，半也。此當九十日之半，故謂之分。秋同義"在春分条（[[03_notes/hist-yueling-chunfen-pentads|春分三候卡]]已逐字直读），秋分条以"解見春分"回指——两卡互链即定义全文。

## AI 摘要 / 解释

- 三候构成一个"收束"叙事，与春分三候的"生发"叙事同构对偶：**雷声收止（对春分"雷乃发声"，鲍氏注明言"二月陽中發聲，八月陰中收聲"）→ 虫封户（对春分类虫物的苏动，坏=细泥封穴）→ 水干涸（对春分东风解冻的水象反转）**。声、虫、水三类自然信号在一书内春↔秋镜像成对，是七十二候体系对称结构的直接样例。
- 注文框架是阴阳消长：雷收声因"八月陰中"，水涸因"秋冬氣返"——古典自然哲学，与现象记录（雷暴季节结束、降水减少、虫类封穴越冬的物候观察）应分层引用。
- "蟄蟲坏戶"的"坏"（音培，细泥）今多写作"坯"：非遗网与新华社稿均作"蛰虫坯户"，属用字转写。

## 适用条件、例外与分歧

- **转写分歧（已登记日志）**：非遗网引《月令》"八月中……分者平也"与维基文库本不合（"半也"且在春分条）；新华社2024稿引"分者，半也。此当九十日之半，故谓之分"与维基文库春分条一致。引用《月令》一律以本卡直读为准。
- 当代物候验证（终雷日期、虫类封穴、沼泽干涸的现代观测）未建卡，属生态维度后续课题。

## 关联

[[01_terms/16_秋分|秋分索引]] · [[03_notes/hist-yueling-chunfen-pentads|春分三候（对偶卡）]] · [[03_notes/sci-qiufen-longitude-180|秋分黄经定义]] · [[02_topics/phenology|物候维度]]

## 待人工确认

- 版本校勘（中华书局印本/《四库》本比对，与立春卡同一缺口）；《礼记·月令》《逸周书·时训》对秋分三候的更早平行记载。

## 修改记录

- 2026-09-16（首轮批研究）：建卡，维基文库直读逐字摘录（含注文与"坏"音注）；"解見春分"回指关系与"雷始收声/雷乃发声"对偶均已落卡；非遗网转写分歧写入 exceptions。
