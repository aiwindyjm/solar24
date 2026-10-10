---
schema_version: '0.1.0'
id: 'sci-mangzhong-longitude-75'
type: 'ScientificFact'
title: '芒种的天文定义：太阳黄经 75°'
solar_terms: ['mangzhong']
season: 'summer'
dimensions: ['astronomy', 'scientific-interpretation']
region: ['全球（黄经定义与地域无关）；日期经验因纬度而异']
period: '现代天文学口径；2017/2024年机构稿沿用同一表述'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-ihchina-mangzhong-feature', 'source-xinhua-mangzhong-2024']
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
    'statement': '芒种是二十四节气中的第九个节气、夏季的第三个节气：太阳到达黄经75°时交节，出现在每年公历6月5日至7日之间。',
    'exceptions': [
      '节气时刻按东经120°北京时间计，与其他时区的"当天"可能相差一日',
      '"每年6月5日至7日之间"的日期范围语句本轮由新华社2024年稿单独逐字直读（非遗网专题页作"每年6月6日前后"，并给出2017年交节为6月5日的实例）；两机构的黄经度数与节气序位表述一致',
      '芒种逐年交节时刻的权威数据（紫金山天文台《中国天文年历》）本轮未纳入来源库；GB/T 33661-2017 正文条款直读为继承立春的待办',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 芒种的天文定义：太阳黄经 75°

## 研究问题

芒种在现代天文与历法口径中的定义是什么？这个定义有多可靠？

## 证据

- **已直接读取**：中国非遗网芒种专题（[[04_sources/source-ihchina-mangzhong-feature|source-ihchina-mangzhong-feature]]，页面创建于2017年）："二十四节气的第九个节气是芒种，每年6月6日前后，太阳到达黄经75°时芒种节气开始，今年的芒种时间是2017年6月5日（农历丁酉年五月十一日）。"
- **已直接读取**：新华社2024年芒种稿（[[04_sources/source-xinhua-mangzhong-2024|source-xinhua-mangzhong-2024]]）："芒种是二十四节气中的第九个节气。每年6月5日至7日之间，当太阳位于黄经75度时，芒种如约而至，仲夏至此开启。"
- 黄道24等分、每段15°的系统机制见共享卡 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]，不在本卡复述。

## 解释（Scientific Interpretation）

芒种继小满之后位于黄经75°，与小满相隔一个节气位（[[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整序列]]中的"芒种"）。因为定义绑定太阳位置而非天气，"芒种=进入农忙高温多雨"只是中国东部季风区的经验联想（见 [[03_notes/sci-mangzhong-sanxia-meiyu|三夏与梅雨]]）；该农时经验由机构稿另行支撑，不混入天文命题。芒种在节气/中气分组中属五月"节气"（非中气），机制见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]。

## 适用条件与待核验

- 芒种交节逐年时刻的精确数值以《中国天文年历》为准（本轮未建对应 Source）。
- 日期范围建议补第三个机构直读源（如中国气象局/中国天气网本节气稿）后并入长期命题；当前为"一逐字直读+一同义直读（6月6日前后）"格局。

## 关联

[[01_terms/09_芒种|芒种索引]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]] · [[02_topics/astronomy|天文维度]]

## 待人工确认

- 芒种日期范围"6月5-7日"的第二逐字机构源（现有两源一为范围句、一为"前后"句）。
- GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）。

## 修改记录

- 2026-09-16（第一轮）：建卡。两个独立机构直读（非遗网+新华社）支持黄经75°、第九个节气、夏季第三个；日期范围语句标注新华社单源逐字直读。
