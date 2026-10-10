---
schema_version: '0.1.0'
id: 'trad-xiazhi-nongshi'
type: 'Tradition'
title: '夏至农事与农谚："不过夏至不热"与"夏至三庚数头伏"'
solar_terms: ['xiazhi']
season: 'summer'
dimensions: ['agriculture', 'climate', 'customs']
region: ['农谚流传地域未逐一标注（非遗网汇编）；气温机制表述为中国机构口径']
period: '农谚为传统流传（断代未核）；机制表述为当代机构稿'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-ihchina-xiazhi-feature', 'source-weathercn-xiazhi-feature', 'source-xinhua-xiazhi-2026', 'source-wikisource-suisizuanyao', 'source-wikisource-shoushitongkao']
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
    'statement': '夏至农谚围绕"夏至后更热、降水关键、田间大忙"展开：机构稿引"不过夏至不热""夏至三庚数头伏"（夏至后一段时间气温继续升高、约二三十天后进入最热，与三伏起点衔接）；非遗网汇记"夏至雨点值千金""夏至棉田草，胜如毒蛇咬""夏至不热，五谷不结""夏至有雷三伏热"等农谚群，并记"夏至三庚数头伏"的三伏起算口径（夏至后第三个庚日为初伏、第四个庚日为中伏、立秋后第一个庚日为末伏）与夏至农事（收小麦、锄棉田草、防雷雨冰雹等）。',
    'exceptions': [
      '农谚属传统经验知识层（tradition），不作科学论断引用；各谚流传地域与年代非遗页未标注',
      '"第三庚日起初伏"的干支纪日机制及其逐年推算本轮不展开（机制细节留给小暑/三伏专题卡），本卡只记谚语存在与机构口径',
      '"夏至期间正是江淮一带的梅雨时期"等气候区叙述为非遗网养生段内容，属区域经验概述，未逐区核验',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立4；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 夏至农事与农谚 · 数伏入口

## 研究问题

夏至在农事年中处于什么位置？围绕它的农谚说了什么？"数伏"从夏至说起的口径是什么？

## 证据

- **已直接读取**：中国天气网夏至稿（[[04_sources/source-weathercn-xiazhi-feature|source-weathercn-xiazhi-feature]]）：""不过夏至不热"，"夏至三庚数头伏"。夏至虽表示炎热的夏天已经到来，但还不是最热的时候，夏至后的一段时间内气温仍继续升高，大约再过二三十天，一般是最热的天气了。"——气温机制与三伏入口的机构表述（科学背景见 [[03_notes/sci-xiazhi-longest-day|真假"最"卡]]）。
- **已直接读取**：非遗网夏至专题农事农谚节（[[04_sources/source-ihchina-xiazhi-feature|source-ihchina-xiazhi-feature]]）："夏至后进入伏天""夏至三庚数头伏"——"从夏至后第三个庚日算起为初伏，第四个庚日算起为中伏，立秋后第一个庚日算起为末伏"；农谚"夏至雨点值千金""夏至棉田草，胜如毒蛇咬""夏至不热，五谷不结""夏至有雷三伏热""夏至有雨三伏热，重阳无雨一冬晴"等；农事段落记夏至前后正值"三夏"大忙收尾（收麦）转入田间管理（锄草、防雷雨大风冰雹）。
- **已直接读取**：新华社2026稿（[[04_sources/source-xinhua-xiazhi-2026|source-xinhua-xiazhi-2026]]）：热量收支机制——最热出现在夏至后，"直到处暑节气前后"热量收支才转折。

- **农书直读环（2026-09-25，R16）**：《四时纂要》五月（直读）：「夏至，五月中氣」；「夏至日次立八尺之表，得影一尺六寸，宜黍」——夏至圭表测影实践与"宜黍"占辞并载于农书（占辞属占候层，不作科学引用）；夏至在农书中的身份是"五月中气+测影基准点"。

- **农书直读环（2026-09-25，R42·第三阶段）**：《農桑通訣》夏至候应「初五日鹿角解次五日蜩始鳴後五日半夏生」（直读）；《四民月令》（经卷04辑录）「五月六月可菑麥田」——夏至前后麦田休闲整治的东汉农书指令（转引层）。

## AI 摘要 / 解释

- 农谚主题三类：①**热滞后**（"不过夏至不热"——与热量收支机制同构的经验表述）；②**降水窗口**（"夏至雨点值千金"——作物需水关键期）；③**田间管理**（"夏至棉田草，胜如毒蛇咬"——草害竞争）。谚语的"热滞后"直觉与现代解释吻合，但谚语本身按 tradition 层引用，不升级为科学命题。
- "夏至三庚数头伏"是夏至与小暑之间最重要的历法衔接：三伏起点由夏至后的庚日推算，这解释了为何"最热的三伏"总是落在小暑大暑之间——本卡只登记此衔接与机构口径，庚日干支机制细节不展开（留小暑卡）。
- 午后雷阵雨：非遗页养生段提"夏至期间……对流天气、午后雷阵雨"（概述级）；中国天气网稿未含雷阵雨专段——按机构概述登记，不做分区统计断言。

## 适用条件、例外与分歧

- 无跨来源冲突。农谚页自述汇编自网络且未标流传地域，一律按 tradition/medium 以下对待。
- "夏至有雷三伏热"等占验类谚语与现代农业气象统计的关系未核验，不做真伪判断。

## 关联

[[01_terms/10_夏至|夏至索引]] · [[03_notes/sci-xiazhi-longest-day|真假"最"]] · [[03_notes/trad-xiazhi-mian|夏至面]] · [[02_topics/agriculture|农业维度]] · [[02_topics/climate|气候维度]]

## 待人工确认

- 三伏干支机制专题卡（小暑波次）建立后回链本卡。
- 农谚的农书溯源（《农政全书》占候、《豹隐纪谈》"夏至谚"——《古今图书集成》夏至部彙考著录有此二条，正文未读）。

## 修改记录

- 2026-09-16（建卡）：机构稿机制表述与非遗网农谚群分账处理（science / tradition 两层不混排）。
- 2026-09-25（R16，第二轮·农书层）：新增农书直读环（唐末《四时纂要》逐月条目/北魏《齐民要术》/清《授时通考》辑录，均为其时代与地域口径，非现代全国农事）；source_ids 扩充。
- 2026-09-25（R42，第三阶段）：新增《授时通考》卷04-06辑录农书直读环；source_ids 扩充。
