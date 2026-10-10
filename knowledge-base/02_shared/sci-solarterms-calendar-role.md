---
schema_version: '0.1.0'
id: 'sci-solarterms-calendar-role'
type: 'ScientificFact'
title: '节气在中国传统历法中的角色：阴阳合历中的太阳成分'
solar_terms: []
season: null
dimensions: ['calendar', 'astronomy']
region: ['中国']
period: '现行口径（GB/T 33661-2017 时代）；机制承自传统历法'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
contested: false
source_ids: ['source-pmo-almanac-qa', 'source-hko-solar-terms']
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
    'statement': '中国传统农历是阴阳合历：月份按月相（朔日为初一），年按太阳回归年对齐；二十四节气反映地球绕太阳轨道位置，属阳历成分。农历以冬至所在月为十一月，两个冬至之间若含13个朔望月则置闰，取其中最先出现的不含中气的月份为闰月。因此节气在公历中日期变化不大（每个节气约15°黄经间隔），而在农历中的日期很不固定。',
    'exceptions': [
      '紫金山天文台说明"闰月安排是人为的规定"，无中气置闰是现行与清代以来的规则，历史上置闰方法有变化',
      '置闰完整条件是"两冬至之间含十三个朔望月时，取最先出现的无中气之月为闰月"，见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]（含两组完整配对表）',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=high/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 节气在传统历法中的角色

## 研究问题

二十四节气与"农历""阴历"是什么关系？为什么节气日期在公历中稳定、在农历中漂移？

## 证据（原文与定位）

已直接读取紫金山天文台《历书科普问题解答》（[[04_sources/source-pmo-almanac-qa|source-pmo-almanac-qa]]）：

> "一年的二十四节气，反映了地球在绕太阳运行轨道上的不同位置，属于阳历范畴。在阳历中节气日期变化不大，但在农历中节气日期却非常不固定。"
> "农历闰月的安排是人为的规定……取其中最先出现的一个不包含中气的农历月为闰月。"

香港天文台页面（[[04_sources/source-hko-solar-terms|source-hko-solar-terms]]）："The 24 solar terms divide the ecliptic into 24 equal segments, with 15 degrees of the Sun's longitude between the terms."（已读）

## AI 摘要 / 解释（面向研究者的层次说明）

对中国历法必须区分四个概念，不可混用：

- **Solar Term 节气**：太阳黄经刻度（阳历成分），黄道24等分、每段15°。二十四节气按与农历月的配位分"节气""中气"两组（冬至、大寒、雨水、春分……为中气；小寒、立春、惊蛰……为节气），完整配对表见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]。
- **Chinese Calendar 农历**：阴阳合历——朔望月定月（朔=初一），回归年定年框架，用"无中气置闰"协调两者（"十九年七闰"为传统近似说法，本轮未直读来源，见适用条件）。
- **Lunar Calendar 纯阴历**：只按月相（如伊斯兰历）；农历不是纯阴历，"阴历"是常见误称。
- **Gregorian Calendar 公历**：纯太阳历，与节气同属太阳框架，故节气公历日期稳定（±1天量级）。

节气的功能角色：它是农历里"锚定太阳"的那一半——置闰规则直接依赖中气分布，节气把农业所需的太阳年节奏嵌入按月相编排的历法。这就是"农历不是阴历"的机制性解释。

## 适用条件、例外与分歧

历史置闰规则（平气/定气、清以前做法）的演变细节本轮未研究；"十九年七闰"为平均近似（严格按定气无中气置闰的周期与此略有出入，见数学讨论线索，未核）。

## 关联

[[01_terms/01_立春|立春索引]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[03_notes/sci-lichun-calendar-position|立春在历法中的位置]] · [[02_topics/calendar|历法维度]]

## 待人工确认

GB/T 33661-2017 正文条款人工核读后补充法定表述；历史置闰演变可后续建专卡。

## 修改记录

- 2026-09-17（质量修正 F01）：①删除两处奇偶口令——例外中"单数位为节气、双数位为中气（从冬至起算）、逢双为中气"与摘要中"从冬至起单数位称节气、双数位称中气"方向均写反（冬至本身是中气，位于从冬至起算第1位），改为指向 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]] 的明确配对表；②"十九年七闰"标注为传统近似且未直读来源（原文仅在适用条件提示，现摘要内同步标注）。详见 docs/research/knowledge-base-quality-remediation-2026-09-17.md 修复报告。
