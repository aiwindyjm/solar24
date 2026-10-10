---
schema_version: '0.1.0'
id: 'hist-meiyu-song-texts'
type: 'HistoricalRecord'
title: '宋代梅雨文本群：入梅出梅诸说并存与迎梅送梅'
solar_terms: ['xiaoman', 'mangzhong', 'xiazhi']
season: 'summer'
dimensions: ['climate', 'history', 'regional-differences']
region: ['中国江淮以南（江湘二浙）']
period: '宋（《岁时广记》卷二辑录）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-suiguangji']
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
    'statement': '《岁时广记》卷二（直读）保存宋代梅雨知识的多样表述：入梅出梅日期诸说并存（「立夏後逢庚日為入梅，芒種後逢壬日為出梅」与「芒種後逢壬入梅」两说，辑者明言「數説未知孰是」）；《埤雅》「江湘二浙四五月間，梅欲黄落則水潤土溽…蒸鬱成雨謂之梅雨，自江以南三月雨謂之迎梅，五月雨謂之送梅」；并载梅雨与农事（「農人以得梅雨乃宜耕稼」谚「雨不梅無米炊」）、梅雨水性（「入醬令易熟沾衣便腐」）、杜甫/欧阳修/苏轼诗证。',
    'exceptions': ['诸说并存是本卡核心内容，不得择一说为"标准答案"', '迎梅送梅为《埤雅》一说'],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=low/B/独立1；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 宋代梅雨文本群（岁时广记卷二）

## 研究问题

梅雨概念在宋代文献中如何定义？入梅出梅的日期口径是否统一？

## 证据（原文与定位）

《岁时广记》卷二（直读）：入梅出梅两说并录+「數説未知孰是」；《埤雅》迎梅送梅说；谚「雨不梅無米炊」；另同卷《風土記》濯枝雨、《風俗通》落梅風（「五月有落梅風，江南以為信風」）、《水衡記》黄河水四月「麥黄水」、五月「蔓水」、六月「山礬水」。

## AI 摘要 / 解释

- 本卡与 [[03_notes/sci-mangzhong-sanxia-meiyu|梅雨科学卡]] 构成古今对照：宋人已把梅雨定义为**物候（梅黄）+时段（立夏/芒种起算的干支日）+地域（江淮以南）**三要素，且诚实记录口径分歧——本库"争议不合并"原则的古典同款。
- 落梅风/信风条把"风"纳入梅雨季知识；黄河月水名（麦黄水/蔓水/山矾水）是北方河流物候历。

## 适用条件、例外与分歧

地域限定江淮以南与江湘二浙；宋代口径非现代气象学入梅标准。

## 关联

[[01_terms/09_芒种|芒种索引]] · [[03_notes/sci-mangzhong-sanxia-meiyu|梅雨（科学层）]] · [[02_topics/climate|气候维度]] · [[02_topics/regional-differences|地域差异]]

## 待人工确认

- 《埤雅》原文核对；现代气象"入梅"标准与诸说的对应研究。

## 修改记录

- 2026-09-25（R24，第二轮）：建卡（岁时广记卷二直读）。
