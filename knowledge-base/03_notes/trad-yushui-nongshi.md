---
schema_version: '0.1.0'
id: 'trad-yushui-nongshi'
type: 'Tradition'
title: '雨水农事与农谚：备耕由南向北展开、"春雨贵如油"（tradition 层）'
solar_terms: ['yushui']
season: 'spring'
dimensions: ['agriculture', 'chinese-life']
region: ['农谚流传地域未逐一标注（非遗网汇编）；农事叙述含南北分述（新华社稿）']
period: '当代机构汇编与报道表述；农谚为传统经验层，不标科学断言'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-ihchina-yushui-feature', 'source-xinhua-yushui-feature', 'source-wikisource-suisizuanyao', 'source-wikisource-qiminyaoshu']
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
    'statement': '雨水时节的农事叙述（非遗网专题与新华社稿）：黄河流域降雨开始、雨量渐增，越冬作物（如小麦）返青进入需水需肥期，春耕备耕由南向北次第展开；新华社稿引民谚"人勤春来早，雨水润春耕"，非遗网页汇编农谚"春雨贵如油""尺麦怕寸水"等并分述区域农事（华北西北春灌、淮河以南防湿害、华南早稻育秧）。农谚与农时经验属 tradition 层的传统知识，不是现代农业科学结论。',
    'exceptions': [
      '非遗网农谚群流传地域未逐一标明，"尺麦怕寸水"等条目为页面摘引、异文未校',
      '各区域农事要点的现代农学依据（如"倒春寒"防御标准）未核验',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立3；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 雨水农事与农谚（tradition 层）

## 研究问题

雨水在传统农事知识中的角色是什么？农谚证据的地域边界在哪里？

## 证据（原文与定位）

- **已直接读取**：新华社雨水稿（[[04_sources/source-xinhua-yushui-feature|source-xinhua-yushui-feature]]）："田野间，越冬作物返青，春耕备耕由南向北次第展开。""俗话说'人勤春来早，雨水润春耕'。"——农时推进方向与民谚表述。
- **已直接读取**：非遗网雨水专题"农事农谚"节（[[04_sources/source-ihchina-yushui-feature|source-ihchina-yushui-feature]]）：黄河流域降雨开始雨量渐增、小麦返青需水需肥需及时施肥灌溉以防春旱；页面按区域分述农事（华北、西北春灌，淮河以南防湿害烂根，华南双季早稻育秧抓"冷尾暖头"）；汇编农谚含"春雨贵如油""尺麦怕寸水"等，流传地域未逐一标明。

- **农书直读环（2026-09-25，R14）**：《四时纂要》正月（直读）：「雨水為正月中氣」。《齐民要术》种谷第三（直读）：「二月上旬及麻、菩楊生種者爲上時」——北魏黄河流域谷子播种的上时窗口起于二月上旬（雨水至惊蛰之间），与"春耕备耕由南向北展开"的现代叙述在农书层有对应物（口径为北魏黄河流域，非现代全国）。

## AI 摘要 / 解释

- 雨水农事知识的主线：**越冬作物进入返青期+春耕备耕动员**。"春雨贵如油"概括早春降水对返青作物的价值；"尺麦怕寸水"反映南方麦田湿害经验——两句谚语方向相反，正好体现南北方对雨水时节"盼雨/怕涝"的不同经验。
- 与立春"备耕动员"（劝农礼制）相比，雨水农事叙述更偏技术性农时（施肥、灌溉、育秧），是节气知识体系里"农事日历"功能的直接样本。
- **分层提醒**：农谚是传统经验知识（tradition），其现代有效性需农学检验；"倒春寒"的气象学定义与统计另属科学层（见 [[03_notes/sci-yushui-rain-transition|由雪转雨卡]] 的寒潮多发记载）。

## 适用条件、例外与分歧

无跨来源直接冲突；新华社"由南向北次第展开"与非遗网按区域分述相互吻合。农谚逐条的地域归属是最大缺口。

## 关联

[[01_terms/02_雨水|雨水索引]] · [[03_notes/sci-yushui-rain-transition|由雪转雨]] · [[02_topics/agriculture|农业维度]] · [[03_notes/trad-lichun-nongshi|立春农事（对照）]]

## 待人工确认

- 农谚原始出处与地域版本校勘（《中国农谚》类汇编）；华南"冷尾暖头"育秧经验的农业气象依据。

## 修改记录

- 2026-09-16（建卡）：农谚按 tradition 层建卡；区域农事分述如实标注"页面未逐一标明地域"。
- 2026-09-25（R14，第二轮·农书层）：新增农书直读环（唐末《四时纂要》逐月条目/北魏《齐民要术》/清《授时通考》辑录，均为其时代与地域口径，非现代全国农事）；source_ids 扩充。
