---
schema_version: '0.1.0'
id: 'glob-dahan-kanchu-shugen-japan'
type: 'GlobalExpression'
title: '日本"大寒（だいかん）"与寒中修行：以最冷时节为坐标的冷水净化实践（Candidate）'
solar_terms: ['dahan']
season: 'winter'
dimensions: ['global-expressions', 'customs']
region: ['日本（茨城/东京/千叶/山口/长崎/富山/新潟等地神社寺院）']
period: '二十四节气体系随汉字历法传入日本（传入史待核）；寒中禊/寒修行为延续至今的定期实践（当代活动页线索）'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'low'
risk_level: 'high'
impact_level: 'global'
contested: false
source_ids: ['source-naoj-24sekki-dahan', 'source-kanchu-misogi-leads']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
claim:
  {
    'statement': '待核验：日本沿用汉字节气"大寒（だいかん）"，日本国立天文台暦計算室列其为"十二月中、太陽黄経300°"，说明文字"冷気が極まって、最も寒さがつのる"（寒气至极、寒意最盛）；并发展出"寒（かん）"时段框架（小寒"寒の入り"起约30天至節分，大寒居中，线索级）。日本多地神社寺院在这一时段、尤其大寒当日举行寒中禊/寒修行（冷水或瀑布下净身，祈无病息灾），如鹿岛神宫"大寒禊"、铁炮洲稻荷神社"寒中水浴大会"、大岩山日石寺"寒修行"。',
    'exceptions': ['历法定义部分（十二月中/300°/释名）为NAOJ直读；"寒"时段框架与各社寺寒中修行实践均为检索摘要级线索，具体页面未直接读取'],
  }
expression:
  {
    'schema_version': '0.1.0',
    'id': 'glob-dahan-kanchu-shugen-japan',
    'editorial_layer': 'community',
    'term_ids': ['dahan'],
    'title': { 'zh-CN': '寒中禊与寒修行：日本大寒时分的冷水净化实践', 'en': 'Kanchu misogi and kan training: cold-water purification around Daikan in Japan' },
    'location': '日本各地神社寺院（茨城鹿岛神宫、东京铁炮洲稻荷神社、千叶玉前神社、山口防府、长崎、富山大岩山日石寺、新潟八海山尊神社等，线索级）',
    'country': '日本',
    'region': '东亚',
    'culture': '神道/修验道/佛教混合的修行传统；节气历法为汉字文化圈传入',
    'creators': [{ 'name': '日本各社寺修行传统（无个人作者）', 'url': null, 'role': 'community' }],
    'time_period': '起源与定型期待核；延续至今的年度定期实践（当代活动预告多标注大寒当日）',
    'natural_context': '北半球深冬极寒时段：小寒至節分之间的"寒の内"，大寒为其极值点',
    'cultural_expression': '寒中禊（冷水净身）、寒修行/滝行（瀑布下修行）、寒中水泳（海中/池中游泳）；参加者祈愿无病息灾与精神锻炼',
    'relationship_to_solar_term': 'same-time',
    'relationship_reason': '历法关系是传播：日本二十四节气（含大寒=黄経300°、十二月中）随汉字历法体系由中国传入（NAOJ页面自述"日本や中国で伝統的に用いられる"）；而寒中禊/寒修行是把传入的"寒"时段框架用于本土净化修行实践的**日本发展**，中国大寒节气本身无对应的全国性冷水修行习俗——这是传播后的在地再造，不是平行发明，更不是"同一个节日"。',
    'difference': '实践形态不同：日本以冷水/瀑布净身为核心（神道禊祓与修验道苦行传统），中国大寒的实践重心是备年与食俗（糯米饭/消寒糕/尾牙宴，见 trad 卡）与农事收尾；时段框架不同：日本显式命名"寒の内"约30天时段并衍生"寒の入り/寒明け"边界，中国以节气单日+农谚占验为主；地理气候不同：日本寒中修行多与神社寺院年度仪轨绑定，中国无此宗教组织形态。',
    'similarity': '都以"大寒=一年中最冷极值点"为时间坐标并赋予其文化实践意义；都体现"在极寒处锻炼/净化身心"的观念取向（中国侧的对应物是"冬藏"养生与"寒极而暖将至"的岁末期待，见命名卡与三候卡）。',
    'source_ids': ['source-naoj-24sekki-dahan', 'source-kanchu-misogi-leads'],
    'license': 'pending（习俗本身为民俗传统；描述文本的来源许可待核）',
    'media_types': ['text'],
    'asset_ids': [],
    'consent': 'pending',
    'status': 'candidate',
    'featured': null,
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'hold',
    'findings': ['全球候选保持candidate，不入首版'],
    'notes': 'GlobalExpression按Content Gate规程维持hold',
  }
---

# 寒中禊与寒修行 · GlobalExpression（Candidate）

> **状态：Candidate（候选表达）**——表达层草稿，实践部分来源未直读、consent=pending。三要素：**Similarity** 同以"大寒=极寒极值"为时间坐标并赋予文化实践（日本：冷水净化修行；中国：备年食俗与冬藏）；**Difference** 实践形态（冷水/瀑布修行 vs 备年食俗农事）、时段框架（显式"寒の内"30天 vs 节气单日+农谚）、组织载体（社寺仪轨 vs 家户/市井）均不同；**Relationship** 是汉字历法**传播后的在地再造**（节气框架传入，修行实践为日本本土发展），不是平行发明，更不得写成"日本版大寒节气习俗"或"同一个节日"。不得进入正式对外内容。

## 研究问题

同一套节气刻度传入日本后，"大寒"被发展出什么中国没有的实践形态？

## 证据与状态

- **直读（历法层）**：日本国立天文台暦計算室（[[04_sources/source-naoj-24sekki-dahan|source-naoj-24sekki-dahan]]）：大寒"十二月中 300° 冷気が極まって、最も寒さがつのる"；前行小寒标注"寒の入り"。
- **线索级（实践层）**：寒中禊/寒修行/寒中水泳的当代实践仅检索摘要（[[04_sources/source-kanchu-misogi-leads|source-kanchu-misogi-leads]]，未读原文）——"大寒当日举办""约30天寒时段""祈无病息灾"等断言必须直读社寺活动页或权威介绍后才能用于正式内容。

## 待人工确认

- 直读鹿岛神宫"大寒禊"、铁炮洲稻荷神社"寒中水浴大会"等活动页，确认"大寒当日"设定；直读"寒の入り-寒明け"时段框架的历法解说（NAOJ雑節页或暦便覧类）。
- 寒修行与修验道/禊祓的谱系（学术来源）；"寒中水泳"的学校/海滨形态与神社形态的区分。
- 按 vault 规范获得跨文化顾问确认后才可脱离 Candidate。

## 修改记录

- 2026-09-16（第一轮）：建卡。relationship 用协议枚举 same-time（大寒当日举行，线索级）并在 reason 内显式区分"历法传播"与"实践在地再造"两条线；与中国侧"备年食俗"的对照写进 difference，避免"外国版大寒"叙事。

[[01_terms/24_大寒|大寒索引]] · [[02_topics/global-expressions|世界文化表达]]
