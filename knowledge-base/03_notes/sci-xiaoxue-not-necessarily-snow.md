---
schema_version: '0.1.0'
id: 'sci-xiaoxue-not-necessarily-snow'
type: 'ScientificFact'
title: '小雪节气≠必然降雪：气候趋势名与天气事件的区分'
solar_terms: ['xiaoxue']
season: 'winter'
dimensions: ['climate', 'scientific-interpretation']
region: ['中国（机构稿为全国性口径，气候描述因地域而异：东北封冻/西北大雪/黄河以北初雪/江南初冬/华南少雪）']
period: '现代气象学口径；机构稿2019/2022/2017（非遗网）'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  [
    'source-xinhua-xiaoxue-2022',
    'source-xinhua-xiaoxue-2019',
    'source-ihchina-xiaoxue-feature',
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
    'statement': '"小雪"是反映降水、气温等气候现象的节气名：它表示此期寒潮和强冷空气活动频繁、（黄河流域经验中）降水形式开始由雨转雪的气候趋势；节气小雪与天气学意义上的"小雪"（强度较小的降雪）没有必然联系，小雪节气当天不一定降雪。新华社2022稿述其机制：此时东亚地区确立较稳定的经向环流，西伯利亚低压或低槽东移带来大规模冷空气南下与大范围大风降温，"这时候如果出现降水，基本上就是雪夹雨、雪化雨了"。',
    'exceptions': [
      '"小雪节气是一年中下雪量最小的节气（时段）"之类的统计断言，本轮所有直读来源均未出现——无源不写，记 Needs Research',
      '中国天气网"常年统计来看小雪节气往往是黄河流域初雪出现日期"的表述来自视频页检索摘要（search-excerpt 级未直读），未采入命题；"黄河以北地区会出现初雪"仅以非遗网专题直读为据',
      '环流机制表述（经向环流、西伯利亚低槽）为新华社稿口径，本轮未获气象局/天文台机构页的独立第二直读源',
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

# 小雪节气≠必然降雪

## 研究问题

"小雪"节气的名字与实际降雪是什么关系？为什么说它是一个"气候趋势名"？

## 证据

- **已直接读取**：新华社2022稿（[[04_sources/source-xinhua-xiaoxue-2022|source-xinhua-xiaoxue-2022]]）："小雪会下雪吗？不一定。作为反映降水、气温等气候现象的节气，小雪节气与天气的小雪没有必然联系。天气中的小雪，是指强度较小的降雪；小雪节气，表明东亚地区已确立比较稳定的经向环流，西伯利亚低压或低槽东移，就会有大规模冷空气南下，从而带来大范围大风降温天气。这时候如果出现降水，基本上就是雪夹雨、雪化雨了。"
- **已直接读取**：中新社2019稿（[[04_sources/source-xinhua-xiaoxue-2019|source-xinhua-xiaoxue-2019]]）："小雪节气虽然叫'小雪'，但和气象学意义上的小雪却没有必然关联。……小雪节气反应了气候特征，期间寒潮和冷空气一般活动比较频繁，但不一定下雪。"
- **已直接读取**：非遗网小雪专题（[[04_sources/source-ihchina-xiaoxue-feature|source-ihchina-xiaoxue-feature]]）："此时寒潮和强冷空气活动较为频繁。黄河以北地区会出现初雪……南方江淮地区开始呈现初冬景象"；同页南北分述："东北大地封冻……西北已经开始出现大雪；黄河以北……很多地区出现初雪"（此段亦见新华社2022稿："我国领土广袤，南北跨度大，小雪节气各地会有明显的差异"）。

## 解释（Scientific Interpretation）

两套"小雪"必须分开：**天气学的小雪**是降雪强度等级（雪量较小的降雪事件）；**节气的小雪**是太阳黄经240°上的一个刻度（[[03_notes/sci-xiaoxue-longitude-240|黄经定义]]），其名字承载的是黄河流域古典经验对"此期降水由雨转雪、雪尚不大"的概括（[[03_notes/hist-xiaoxue-naming|命名卡]]）。现代降雪需要冷空气与水汽条件同时具备——机构稿的表述是"这时候如果出现降水，基本上就是雪夹雨、雪化雨"（冷空气使相态转雪的条件成立，但是否有降水另论）；同一节气在东北（封冻）、西北（大雪）、黄河以北（初雪）、江南（初冬景象）、华南（降雪机会极少）表现为完全不同的天气现实。这一"节气名≠当日天气"的模式与 [[03_notes/sci-lichun-vs-meteorological-spring|立春≠气象入春]] 同构，是面向公众解释二十四节气时最重要的一类澄清。

## 适用条件与待核验

- 待核验1："黄河流域初雪常年落在小雪节气"的气候统计口径（中国天气网视频页未直读；建议下轮找文本版机构稿或气候公报）。
- 待核验2：环流机制（经向环流、西伯利亚低槽东移）的气象机构第二直读源。
- 本卡不写"小雪节气降雪量全年最小"：无直读来源（见 exceptions 与研究日志 Needs Research）。

## 关联

[[01_terms/20_小雪|小雪索引]] · [[03_notes/sci-xiaoxue-longitude-240|黄经240°定义]] · [[03_notes/hist-xiaoxue-naming|命名卡]] · [[02_topics/scientific-interpretation|现代科学解释]] · [[02_topics/climate|气候维度]]

## 待人工确认

- 气象局/中国天气网文本版科普稿直读（初雪统计与环流机制）；"小雪时节黄河流域初雪"表述是否需要常年数据背书。

## 修改记录

- 2026-09-16（建卡）：两机构直读+非遗网直读建卡；刻意排除"下雪量最小"类无源断言与 search-excerpt 级初雪统计。
- 2026-09-16（路由入包）：引擎路由 human-review-required（finding: pending-primary-source——环流机制仅新华社一稿口径、初雪统计未直读），status draft → in-review。AI 不做最终审核。
