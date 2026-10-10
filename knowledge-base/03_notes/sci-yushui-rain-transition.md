---
schema_version: '0.1.0'
id: 'sci-yushui-rain-transition'
type: 'ScientificFact'
title: '"由雪转雨、气温回升"：雨水时节的气象学解释'
solar_terms: ['yushui']
season: 'spring'
dimensions: ['climate', 'scientific-interpretation']
region: ['表述锚定东亚季风区（北半球中纬度）；页面级全国分布断言本轮未逐区核验']
period: '现代气象学口径（2022年机构科普稿表述）'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-xinhua-yushui-feature', 'source-ihchina-yushui-feature']
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
    'statement': '雨水时节，太阳直射点由南半球向赤道靠近，北半球日照时数与强度增加、气温回升较快；来自海洋的暖湿空气开始活跃并向北挺进，与冷空气相遇形成降雨——新华社与非遗网机构稿将此概括为"气温回升、雨量渐增""冰雪融化、降水增多"，日本国立天文台对同一节气的释名亦为"雪冰化水、雪转雨"。此时节天气多变，是全年寒潮过程出现最多的时节之一，乍暖还寒。',
    'exceptions': [
      '"由雪转雨"是黄河流域命名经验的概括，中国南北实际降水形态差异大（南方本以降雨为主），非遗网页面按区域分述农事，本轮未对其全国性气候分布断言逐区核验',
      '气象学"入春"按连续5天滑动平均气温稳定≥10℃判定（候温法），与雨水节气的天文时间不是一回事——两套系统对照框架见 [[04_sources/source-szmb-season-division|深圳气象局候温法]]',
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

# 由雪转雨、气温回升：雨水的气象学解释

## 研究问题

"雨水"这个名字对应的现代气象机制是什么？"气温回升、降水增多"的说法证据边界在哪里？

## 证据（原文与定位）

- **已直接读取**：新华社雨水稿（[[04_sources/source-xinhua-yushui-feature|source-xinhua-yushui-feature]]）："时至雨水节气，太阳的直射点由南半球逐渐向赤道靠近。这时的北半球，日照时数和强度都在增加，气温回升较快，来自海洋的暖湿空气开始活跃，并渐渐向北挺进与冷空气相遇，形成降雨。这个时节，天气变化不定，是全年寒潮过程出现最多的时节之一，忽冷忽热，乍暖还寒。"
- **已直接读取**：非遗网雨水专题（[[04_sources/source-ihchina-yushui-feature|source-ihchina-yushui-feature]]）："此时，气温回升、冰雪融化、降水增多，故而称为雨水。"（页面另按区域分述：黄河流域降雨开始雨量渐增，另含华南早稻育秧等农事要点，属农事卡范围）
- **已直接读取（跨语言旁证）**：日本国立天文台二十四節気表（[[04_sources/source-naoj-24sekki-yushui|source-naoj-24sekki-yushui]]）对"雨水（うすい）"的说明："陽気がよくなり、雪や氷が溶けて水になり、雪が雨に変わる"（阳气转好、雪冰化水、雪转雨）——同一节气名在另一历法传统中同样以"雪转雨"为释名。

## AI 摘要 / 解释

- 机制链条：**天文驱动（直射点北移→日照增强→气温回升）→ 季风响应（暖湿空气北上）→ 与冷空气相遇成雨**。这解释了为何节气名"雨水"在黄河流域经验中成立，也解释了"乍暖还寒"（冷空气仍活跃、寒潮多发）。
- "雨水=天气转暖"同样只是中纬度经验联想：气象学的季节划分按候温标准（连续5天滑动平均气温），中国多数地区气象入春晚于雨水——对照框架与立春卡同源，见 [[03_notes/sci-lichun-vs-meteorological-spring|立春≠气象入春]] 与 [[04_sources/source-szmb-season-division|候温法]]。
- 命名的地域性："由雪转雨"以冬季降水以雪为主的地区为前提；对冬季本无积雪的南方，该名称是历法传播的结果而非本地物候描述（参考 [[02_shared/fact-solarterms-yellow-river-origin|黄河流域起源与地域校准]]）。

## 适用条件、例外与分歧

无跨来源直接冲突：两机构直读源对"气温回升、降水增多"表述一致。分歧点在**分布范围**：非遗网页面含按区域的农事分述与全国性概括，本轮未逐区核验，故本卡 claim 只保留两源一致的机制表述，区域分布断言收窄进 exceptions 待研究。

## 关联

[[01_terms/02_雨水|雨水索引]] · [[03_notes/sci-yushui-longitude-330|黄经330°定义]] · [[03_notes/trad-yushui-nongshi|雨水农事农谚]] · [[02_topics/climate|气候维度]]

## 待人工确认

- "雨水时节全国大部分地区气温回升到0℃以上"一类分布断言的逐区气象数据核验（中国天气网/气候公报）。
- "全年寒潮过程出现最多的时节之一"的统计数据来源（新华社稿未给出处）。

## 修改记录

- 2026-09-16（建卡）：以新华社直读机制段为主干、非遗网与日本国立天文台互证建卡；全国性分布表述一律未写入 claim，留待逐区核验。
- 2026-09-16（路由）：引擎路由 auto-candidate（tier A/独立直读×2、无 finding），按入包规则保持 draft，列 A 区。
