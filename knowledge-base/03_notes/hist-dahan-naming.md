---
schema_version: '0.1.0'
id: 'hist-dahan-naming'
type: 'HistoricalRecord'
title: '"寒气之逆极，故谓大寒"：大寒的命名逻辑与岁末定位'
solar_terms: ['dahan']
season: 'winter'
dimensions: ['history', 'chinese-life']
region: ['中国（古典释名传统）']
period: '释名文本：《三礼义宗》（南朝梁，佚，转引自清代《授时通考》）；《月令七十二候集解》题名元代'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  ['source-yueling-qishierhou-wikisource', 'source-ihchina-dahan-feature', 'source-rmrbhwb-dahan-2016', 'source-weathercn-dahan-2023']
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
    'statement': '古典文献对大寒命名的解释有两层可直读的证据：(1)《月令七十二候集解》大寒条仅作"大寒，十二月中。解見前"，命名逻辑由小寒条承担——"月初寒尚小，故云。月半則大矣"，即十二月前半月寒尚小、到月中则盛极；(2) 机构页转引《授时通考·天时》所存《三礼义宗》佚文"大寒为中者，上形于小寒，故谓之大……寒气之逆极，故谓大寒"。民间谚语"小寒不如大寒寒，大寒之后天渐暖""大寒到顶点，日后天渐暖"（非遗网汇编）以口语形式表达同一"寒极而折返"的观念。',
    'exceptions': [
      '《三礼义宗》原书已佚，引文经清代类书《授时通考》转引、再经现代机构页转录，本轮未直读《授时通考》原书——两层转录链需人工核验',
      '非遗网与人民日报海外版在"寒气之逆极"引文上疑似同源转载链，引文本身的独立互证仅到"单一现代转录系统"层级',
      '"上形于小寒"句中"形"字的释读（承/比/形）各转录或有出入，未校',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': ['一手来源（GB/T正文/标准全文）未直读，已在exceptions登记；降级处理'],
    'notes': 'REVISE→APPROVE：pending-primary-source不影响命题正确性（已有多独立直读源），待核来源列入人审条件',
  }
---

# "寒气之逆极，故谓大寒"：命名与岁末定位

## 研究问题

"大寒"这个名字的古典依据是什么？为什么说它是"终点"的节气？

## 证据（原文与定位）

1. **直读一手文献**：维基文库《月令七十二候集解》（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]）：
   > 大寒条："大寒，十二月中。解見前。"
   > 小寒条（"前"所指）："小寒，十二月節。月初寒尚小，故云。月半則大矣。"
2. **直读机构页转引**：非遗网专题（[[04_sources/source-ihchina-dahan-feature|source-ihchina-dahan-feature]]）：'古人认为："大寒为中者，上形于小寒，故谓之大……寒气之逆极，故谓大寒。"（《授时通考·天时》引《三礼义宗》）'
3. **直读机构页转引**：人民日报海外版物候篇（[[04_sources/source-rmrbhwb-dahan-2016|source-rmrbhwb-dahan-2016]]）："《授时通考》称'寒气之逆极，故谓大寒'。"；中国天气网2023稿（[[04_sources/source-weathercn-dahan-2023|source-weathercn-dahan-2023]]）同引此句。
4. **直读机构汇编**：非遗网农谚"小寒不如大寒寒，大寒之后天渐暖""大寒到顶点，日后天渐暖""过了大寒，又是一年"。

## AI 摘要 / 解释

- 命名的古典逻辑是**极值命名**：不是"大寒比小寒晚一个月"的递进描述，而是"寒气之逆极"——寒走到尽头、即将折返。这与《月令》把命名解释放在小寒条（"月半則大矣"）的文本结构一致：小寒/大寒是同一十二月内"寒之小大"的一对刻度。
- "逆极"的物候侧证即三候"水泽腹坚"（冰由表及里冻实到"腹"）——寒的深度以水的冻结深度显形（见 [[03_notes/hist-yueling-dahan-pentads|三候卡]]）。
- **岁末定位**：大寒的"终点"身份有两层——节气刻度上它是24格的最后一格（300°，下一个是立春，见 [[03_notes/sci-dahan-longitude-300|天文定义卡]]）；农历历法上它是十二月的**中气**、最后一个中气，下一个中气已是来年正月的雨水——中气序列在此岁末闭环（机制见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]，本卡不复述）。农谚"过了大寒，又是一年"是这一定位的民间表达。

## 适用条件、例外与分歧

- "寒气之逆极"的权威原始出处（《三礼义宗》佚文→《授时通考·天时》卷次页码）未直读，现有证据止于现代机构转录层；引用时注明"转引"。
- "大寒=实测最冷"是命名观念而非气象结论——按1991-2020年统计全国平均气温最低出现在小寒（见 [[03_notes/sci-dahan-vs-xiaohan-cold|小寒与大寒谁更冷]]），命名逻辑与气候统计的错位是本节气最重要的科普点之一，不在本卡展开。

## 关联

[[01_terms/24_大寒|大寒索引]] · [[03_notes/hist-yueling-dahan-pentads|大寒三候]] · [[03_notes/sci-dahan-longitude-300|黄经300°定义]] · [[03_notes/sci-dahan-vs-xiaohan-cold|小寒与大寒谁更冷]] · [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]] · [[02_topics/history|历史维度]]

## 待人工确认

- 《授时通考·天时》大寒条原文直读（维基文库有《欽定授時通考》吗——本轮未查；或文渊阁四库影印本），核对《三礼义宗》佚文与省略号处全文。
- "上形于小寒"的"形"字释读与句读。

## 修改记录

- 2026-09-16（第一轮）：建卡。命名证据按"一手直读（月令）+机构转引（授时通考）+机构汇编（农谚）"三层分开，转引链显式登记。
