---
schema_version: '0.1.0'
id: 'fact-qiufen-harvest-festival-2018'
type: 'CulturalFact'
title: '中国农民丰收节：2018年设立的现代国家节日（每年农历秋分）'
solar_terms: ['qiufen']
season: 'autumn'
dimensions: ['chinese-life', 'customs', 'history']
region: ['中国（国家层面设立）']
period: '2018年6月21日公布设立，自2018年起施行（现代）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  [
    'source-xinhuanet-fengshoujie-2018',
    'source-people-fengshoujie-2025',
    'source-xinhua-qiufen-2024',
  ]
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
    'statement': '中国农民丰收节是2018年设立的现代国家节日：设立标准表述为"经党中央批准、国务院批复，自2018年起我国将每年农历秋分设立为『中国农民丰收节』"（新华社2018-06-21国新办发布会通稿，农业农村部部长韩长赋介绍；人民日报2025年稿同口径）。官方对"选在秋分"的理由（韩长赋，2018年发布会）：各地收获时节不同但"多数地方都在秋季，秋收作物是大头"，"兼顾南北方把秋分定为『中国农民丰收节』，便于城乡群众、农民群众参与，也利于展示农业的丰收成果"，具有鲜明的农事特点。',
    'exceptions': [
      '**分层红线：这是2018年设立的现代节日，与古代秋分礼制（夕月祭月）、传统秋社是不同层的事实**——"丰收节是传统秋社的创造性转化"是人民日报2025年稿的阐释性表述（interpretation 层），不是历史命题',
      '设立文件原文（国务院批复文号）本轮未直读，所据为设立当日权威通稿与七年后党报回溯稿（异发布方逐字一致）',
      '"兼顾民族传统（畲族、藏族望果节等在下半年）"的论证为人民日报2025年稿表述，2018年通稿未载',
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

# 中国农民丰收节（2018年起，每年农历秋分）

## 研究问题

"秋分=中国农民丰收节"是现代设立还是古已有之？官方为何选在秋分？

## 证据

- **已直接读取（设立时通稿）**：新华社2018-06-21（[[04_sources/source-xinhuanet-fengshoujie-2018|source-xinhuanet-fengshoujie-2018]]，记者董峻、张弛）："经党中央批准、国务院批复，自2018年起我国将每年农历秋分设立为'中国农民丰收节'。""21日，农业农村部部长韩长赋在国务院新闻办举行的新闻发布会上介绍了相关情况。"及选期理由两句（见 claim）。
- **已直接读取（回溯稿）**：人民日报2025-09-06（[[04_sources/source-people-fengshoujie-2025|source-people-fengshoujie-2025]]，文馨、唐嘉跃）：设立表述逐字一致；另给"综合考虑了气候、农事、文化传承等因素""秋分，是气候与农事、收获与播种的'黄金交汇点'""是对传统'秋社'文化习俗的创造性转化与创新性发展""兼顾民族传统"等阐释。
- **已直接读取（节气稿互证）**：新华社2024秋分稿（[[04_sources/source-xinhua-qiufen-2024|source-xinhua-qiufen-2024]]）："自2018年起，我国将每年农历秋分设立为'中国农民丰收节'。"

## AI 摘要 / 解释

- **现代节日身份明确**：设立时间（2018-06-21公布）、设立程序（党中央批准+国务院批复）、发布场合（国新办发布会）齐全，是当代国家行为，不是民俗自然演化。这是二十四节气相关联的当代节日中制度文本最清晰的一个。
- **"为何是秋分"的官方逻辑**（直读归因）：农事依据（多数地区秋收为大头、收获与秋播同期）+ 参与便利（兼顾南北）。2025年稿补充的文化阐释（秋社转化、少数民族节期兼顾）属媒体阐释层。
- **与古代层的严格分界**：古代秋分侧可直读的是夕月祀典与秋分日农祀报祈（[[03_notes/hist-qiufen-xiyue-sacrifice|礼制卡]]）；"自古庆丰收"的连续叙事不成立，丰收节是现代创制——本卡存在本身就是 Modern-as-Ancient 风险的解药。

## 适用条件、例外与分歧

无来源间冲突（三稿表述逐字一致）。注意"每年农历秋分"的官方措辞：秋分按太阳黄经定义、在公历9月下旬，"农历秋分"指农历纪年下的秋分日（即每年秋分节气当天），引用时保留官方原句不加解释性改写。

## 关联

[[01_terms/16_秋分|秋分索引]] · [[03_notes/trad-qiufen-nongshi|三秋大忙与农谚]] · [[03_notes/hist-qiufen-xiyue-sacrifice|古代夕月祀典（分层对照）]] · [[02_topics/chinese-life|中国人的生活]]

## 待人工确认

- 设立文件的正式文本（国务院批复原件/农业农村部通知）直读入库，替换"通稿转述"层。
- 历年（2018-2026）主场活动地点与主题的逐年核对（2025烟台招远、2026湖北襄阳来自检索摘要，未直读，不入卡）。

## 修改记录

- 2026-09-16（首轮批研究）：建卡。新华社2018设立通稿+人民日报2025回溯稿（异发布方）+新华社2024稿三重直读；"现代国家节日"分层红线写入 claim 与正文；阐释性表述（秋社转化）单独归因不混入事实层。
- 2026-09-16（审核阶段）：路由 human-review-required（finding：pending-primary-source——设立文件原件未直读，所据为权威通稿层），状态 draft → in-review。见 [[07_research/sections/review-qiufen|秋分审核分节]]。
