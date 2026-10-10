---
schema_version: '0.1.0'
id: 'sci-solarterms-jieqi-zhongqi'
type: 'ScientificFact'
title: '节气与中气：二十四节气的两组划分与置闰功能'
solar_terms: []
season: null
dimensions: ['calendar', 'astronomy', 'scientific-interpretation']
region: ['中国（传统历法编算规则）']
period: '现行农历编算口径；GB/T 33661-2017 为现行国家标准（正文条款待人工核读）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'high'
impact_level: 'system'
contested: false
source_ids: ['source-pmo-almanac-qa', 'source-yueling-qishierhou-wikisource', 'source-hko-solar-terms']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-17'
human_review:
  {
    'reviewer': 'aiwindyjm',
    'reviewed_at': '2026-09-28',
    'decision': 'approved',
    'notes': 'Owner-authorized batch approval based on AI pre-review',
  }
claim:
  {
    'statement': '传统历法编算中，二十四节气按与农历月的配位分为两组：冬至、大寒、雨水、春分、谷雨、小满、夏至、大暑、处暑、秋分、霜降、小雪十二个为"中气"；小寒、立春、惊蛰、清明、立夏、芒种、小暑、立秋、白露、寒露、立冬、大雪十二个为"节气"。农历月序由中气锚定：紫金山天文台口径，冬至所在农历月为十一月，《月令七十二候集解》全书按"立春，正月節""雨水，正月中"式逐气标注节/中配位（大寒为十二月中、雨水为正月中、春分为二月中，依此类推）。置闰规则（紫金山天文台）：两个冬至之间若含十三个朔望月，则该年置闰，取其中最先出现的不包含中气的农历月为闰月。',
    'exceptions': [
      '完整二十四对配位表辑自《月令七十二候集解》维基文库本全书"X月節/X月中"标注（批处理各节气已分别直读同一页面的对应节气段，辑表本身未再逐条回原书复核）；日本国立天文台二十四节气页可与其中六个节气（雨水/秋分/寒露/霜降/小雪/大寒）的节/中标签交叉印证',
      'GB/T 33661-2017 正文条款仍未直读（在线预览有验证码），法定表述待人工核读',
      '"相邻中气的平均间隔约30.44日、大于朔望月平均约29.53日，故中气在农历月内逐月后移、无中气之月周期性出现"——注意：约30.44日是**相邻两个中气**（或同组相邻两个节气）的平均间隔（回归年约365.24日÷12），相邻两个二十四节气（不分节/中）的平均间隔约为它的一半（约15.2日，与黄道每段15°对应）；这些天数为天文常数的算术换算，回归年/朔望月常数的权威历法文献直读后本条可升级',
      '无中气置闰必须以"两冬至之间含十三个朔望月"为前提，并非任何无中气之月一律置闰',
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

# 节气与中气：两组划分与置闰功能

## 研究问题

为什么立春是"正月节"而雨水是"正月中"？节气与中气的区分在历法中起什么作用？

## 证据

- **直读**：紫金山天文台《历书科普问题解答》（[[04_sources/source-pmo-almanac-qa|source-pmo-almanac-qa]]）：节气属阳历成分；"取其中最先出现的一个不包含中气（即雨水……）的农历月为闰月"；页面同时说明朔日定初一、**冬至定十一月**、两冬至间含十三个朔望月则置闰。
- **直读**：《月令七十二候集解》（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]）全书逐气"X月節/X月中"标注（批处理中各节气段已分别直读：立春"正月節"、雨水"正月中"、谷雨"三月中"、小满"四月中"、芒种"五月節"、夏至"五月中"、大暑"六月中"、处暑"七月中"、秋分"八月中"、寒露"九月節"、霜降"九月中"、立冬"十月節"、小雪"十月中"、大雪"十一月節"、冬至"十一月中"、小寒"十二月節"、大寒"十二月中"等）。
- **直读（部分交叉）**：日本国立天文台二十四节气页（[[04_sources/source-naoj-24sekki-dahan|NAOJ 大寒]]等六张同页源卡）以表格列出各节气"X月節/X月中"，与月令标签一致。
- **直读（机制）**：香港天文台（[[04_sources/source-hko-solar-terms|source-hko-solar-terms]]）："The 24 solar terms divide the ecliptic into 24 equal segments, with 15 degrees of the Sun's longitude between the terms."——相邻节气黄经差15°。

## AI 摘要 / 解释

- **两组的来历与作用**：节气（月首之节）与中气（月中之气）交替出现，每个农历月正常情形下含一个节气与一个中气；**月序由中气锚定**——冬至所在月为十一月，向前推大寒所在月为十二月、雨水所在月为正月……这就是"雨水是正月的代表中气"的含义。
- **为什么会有无中气之月**：相邻两个中气的平均间隔（回归年÷12≈30.44日）大于朔望月平均长度（≈29.53日），中气在农历月里的日期逐月后移；累积到某月，整个月落在两个中气之间——该月不含中气。
- **置闰**：仅当两个冬至之间包含十三个朔望月（说明该年"多出"一个月）时才置闰，且取**最先出现**的无中气之月为闰月。置闰月不占中气月名，月序在其处"停顿"一月后继续。
- **与漂移现象的关系**：这一机制解释了节气在农历中日期不固定、但始终与月序近似绑定——见 [[03_notes/sci-lichun-calendar-position|立春与春节相互独立]]。

## 适用条件、例外与分歧

- 无跨来源直接冲突。"月名由中气决定"在有闰月的年份存在例外（闰月无中气、不启用中气月名——由置闰规则直接导出）。
- 历史上置闰方法（平气→定气）的演变本轮未研究；本卡命题限于现行编算口径与月令文本体例。

## 关联

[[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]] · [[02_shared/hist-solarterms-pentad-system|七十二候体系]] · [[03_notes/sci-lichun-calendar-position|立春在历法中的位置]] · [[02_topics/calendar|历法维度]]

## 待人工确认

- GB/T 33661-2017 正文中节气/中气定义与置闰条款原文。
- 回归年/朔望月常数的权威来源直读（天文年历或历算著作）。

## 修改记录

- 2026-09-16（批处理预研）：为 24 节气批量研究建立共享锚点。
- 2026-09-17（质量修正 F01，见 docs/research/knowledge-base-quality-remediation-2026-09-17.md 修复报告）：①废除"从小寒起奇数位/从冬至起偶数位"奇偶口令——原表述两处口径互相矛盾且"从冬至起偶数位为中气"方向写反（冬至本身是中气，位于从冬至起算第1位），改为明确的两组名称配对表；②更正"节气间隔约30.44日"的概念混用——30.44日是相邻中气平均间隔，相邻二十四节气平均间隔约15.2日；③AI摘要补全置闰前提条件（两冬至间含十三朔望月+最先出现），原摘要"当一个月里只剩节气没有中气时就定为闰月"省略前提，过强；④"月名由中气决定"补闰年例外说明；⑤补 NAOJ 六节气交叉印证与天文常数待核标注。引用者中已发现并修复同类传播：[[03_notes/sci-lichun-calendar-position|sci-lichun-calendar-position]]（"单数位"表述）、[[02_shared/sci-solarterms-calendar-role|sci-solarterms-calendar-role]]（两处奇偶表述）。
