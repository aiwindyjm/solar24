---
schema_version: '0.1.0'
id: 'sci-dashu-longitude-120'
type: 'ScientificFact'
title: '大暑的天文定义：太阳黄经 120°'
solar_terms: ['dashu']
season: 'summer'
dimensions: ['astronomy', 'scientific-interpretation']
region: ['全球（黄经定义与地域无关）；日期经验因纬度而异']
period: '现代天文学口径；2017年起有国家标准表述'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
contested: false
risk_level: 'medium'
impact_level: 'term'
source_ids:
  [
    'source-ihchina-dashu-feature',
    'source-xinhua-dashu-2022',
    'source-gbt-33661-openstd',
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
    'statement': '大暑为二十四节气的第十二个节气、夏季的最后一个节气：太阳到达黄经120°的时刻为大暑，出现在每年公历7月22日至24日之间。与小暑一样，大暑属于反映夏季炎热程度的节气（直读表述：大暑的湿热程度要甚于小暑）。',
    'exceptions': [
      'GB/T 33661-2017 正文条款仍未直读（继承立春以来各节气待办），法定表述待人工核读；"7月22-24日、黄经120°、第十二个节气"已获非遗网大暑专题（直读）与新华社2022稿（直读）两个相互独立的机构来源支持',
      '节气时刻按东经120°北京时间计，与其他时区的"当天"可能相差一日',
      '"夏季最后一个节气"的表述出自新华社2022稿；非遗网专题页作"二十四节气的第十二个节气"，两口径不矛盾',
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

# 大暑的天文定义：太阳黄经 120°

## 研究问题

大暑在现代天文与历法口径中的定义是什么？它的"第十二个、夏季最后一个"位置如何确认？

## 证据

- **已直接读取**：中国非遗网大暑专题（[[04_sources/source-ihchina-dashu-feature|source-ihchina-dashu-feature]]）："每年7月22—24日之间，太阳到达黄经120°时为大暑节气。大暑是二十四节气的第十二个节气，此时正值二伏前后，是一年中最热的时节。"
- **已直接读取**：新华社2022大暑稿（[[04_sources/source-xinhua-dashu-2022|source-xinhua-dashu-2022]]）："7月23日，当太阳到达黄经120度时，夏季的最后一个节气大暑如期而至。它与小暑一样，都是反映夏季炎热程度的节气。大暑的湿热程度要甚于小暑。"
- **元数据级**：GB/T 33661-2017（[[04_sources/source-gbt-33661-openstd|source-gbt-33661-openstd]]）为现行国家标准，正文条款待人工核读。
- 黄道24等分、每段黄经15°的系统机制见 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]] 与 [[04_sources/source-hko-solar-terms|香港天文台]]（既有直读源），本卡不重复。

## 解释（Scientific Interpretation）

大暑是夏至后的第二个节气（小暑105°→大暑120°），此时太阳视位置继续远离夏至点（90°）向立秋（135°）移动。它与"炎热至极"的绑定是中纬度经验的命名（"就熱之中分為大小……月中為大"，见 [[03_notes/hist-yueling-dashu-pentads|月令大暑三候卡]]），不是气象学定义——见 [[03_notes/sci-dashu-sanfu-zhongfu-heat|大暑与中伏、温湿指数卡]] 的分层讨论。大暑在传统历法中为**六月中**（中气），机制见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]。

## 适用条件与待核验

- 待核验1：GB/T 33661-2017 正文中节气定义条款原文（继承各节气共同待办）。
- 待核验2：逐年大暑时刻的权威数值（《中国天文年历》，紫金山天文台编算，尚未建 Source）。
- 两个直读机构源均为科普口径的日期范围表述，未附计算说明；具体到分的大暑时刻需天文年历级来源。

## 关联

[[01_terms/12_大暑|大暑索引]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[03_notes/sci-dashu-sanfu-zhongfu-heat|大暑与中伏]] · [[02_topics/astronomy|天文维度]]

## 待人工确认

- GB/T 标准正文条款引用；大暑时刻权威数据源的正式入库。

## 修改记录

- 2026-09-16（建卡）：以非遗网专题页+新华社2022稿双独立直读建卡，黄经120°/7月22-24日/第十二个+夏季最后一个三要点并入命题；GB/T 正文直读仍为待办，不因多源一致而免除。
- 2026-09-16（路由）：引擎路由 human-review-required（finding=pending-primary-source，GB/T 33661-2017 正文未直读，继承各节气共同待办），状态 draft → in-review。AI 不做最终审核。
