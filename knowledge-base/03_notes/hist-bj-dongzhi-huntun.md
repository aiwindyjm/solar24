---
schema_version: '0.1.0'
id: 'hist-bj-dongzhi-huntun'
type: 'HistoricalRecord'
title: '清末北京的冬至：郊天贺表、"冬至餛飩夏至麵"谚与消寒图双版本（燕京岁时记冬至条直读）'
solar_terms: ['dongzhi', 'xiazhi']
season: 'winter'
dimensions: ['customs', 'history', 'food', 'chinese-life']
region: ['中国北京']
period: '清末（《燕京岁时记》成书于19世纪末）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'low'
impact_level: 'regional'
contested: false
source_ids: ['source-wikisource-yanjingsuishiji']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-25'
updated: '2026-09-25'
human_review:
  {
    'reviewer': 'aiwindyjm',
    'reviewed_at': '2026-09-28',
    'decision': 'approved',
    'notes': 'Owner-authorized batch approval based on AI pre-review',
  }
claim:
  {
    'statement': '《燕京岁时记》冬至条（直读）：官方层「冬至郊天令節，百官呈遞賀表」；民间层「民間不為節，惟食餛飩而已。與夏至之食麵同。故京師諺曰：冬至餛飩，夏至麵」；馄饨释义引《漢書》「冬至陽氣起，君道長，故賀」并驳《演繁露》姓氏说——「餛飩之形有如雞卵，頗似天地渾沌之象，故於冬至日食之」；消寒图双版本并录：本书「九格八十一圈，自冬至起，日塗一圈，上陰下晴，左風右雨，雪當中」，又引《帝京景物略》素梅八十一瓣版并自注「此事予兒時曾為之，不謂與古暗合也」；同卷十一月另有翻褂子（初一著貂裘）、月當頭（十五验塔影人影）、拖床（冬至后什刹海冰床）诸条。',
    'exceptions': ['清末北京个案；馄饨"混沌之象"义为清人释义层，非汉代原义'],
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

# 清末北京的冬至（燕京岁时记冬至条）

## 研究问题

"冬至馄饨夏至面"京师谚的一手出处与语境？官方-民间两层在冬至如何并行？

## 证据

《燕京岁时记》冬至条逐字直读（[[04_sources/source-wikisource-yanjingsuishiji|source-wikisource-yanjingsuishiji]]，2026-09-25 复读）如 claim。

## AI 摘要 / 解释

- 本卡补齐三条链：①谚语链——"冬至馄饨夏至面"清末京师直读文本（对"夏至面"侧另见 [[03_notes/trad-xiazhi-mian|夏至面卡]] 的当代叙述，历史端在此）；②释义链——馄饨=天地混沌之象（阴阳转换的食俗表达，与 [[03_notes/hist-dongzhi-zhouzheng-year-start|周正岁首]] 的"阳生"观念同构）；③消寒图双版本——**圈格记天气版（本书）与染梅版（帝京景物略）**并存，且作者童年实践自述提供了"19世纪北京儿童实际执行"的微观证据。
- 官民分层精确表述：官方郊天贺表（对应 [[03_notes/hist-dongzhi-hedong-jiaotian|郊天卡]]）vs"民間不為節，惟食餛飩而已"——清末北京冬至的民间规格低于江南"岁节"（[[03_notes/hist-ml-dongzhi-suijie|临安冬至加於常節]]），南北冬至地位差异的又一实证。

## 适用条件、例外与分歧

清末北京；消寒图两版本如实并存不调和。

## 关联

[[01_terms/22_冬至|冬至索引]] · [[03_notes/trad-dongzhi-shijiu-xiaohantu|数九消寒图卡（补本书圈格版）]] · [[03_notes/hist-ml-dongzhi-suijie|临安冬至（南北对照）]] · [[03_notes/trad-xiazhi-mian|夏至面]] · [[02_topics/customs|民俗维度]]

## 待人工确认

《汉书》"冬至阳气起"句的出处卷次核读。

## 修改记录

- 2026-09-25（R46，第三阶段）：建卡（燕京岁时记冬至条 curl 直读，华北第 2 卡）。
