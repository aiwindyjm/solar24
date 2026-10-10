---
schema_version: '0.1.0'
id: 'sci-qiufen-day-night-equal'
type: 'ScientificFact'
title: '秋分昼夜均分的科学解释：第二次均分与"阴阳相半"的古典对应'
solar_terms: ['qiufen']
season: 'autumn'
dimensions: ['scientific-interpretation', 'climate', 'astronomy']
region: ['全球（直射赤道事件全球同时；昼夜相对长度随纬度而异）']
period: '现代天文学口径；汉代文本为对照层'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  [
    'source-ihchina-qiufen-feature',
    'source-xinhua-qiufen-2022',
    'source-weather-com-cn-qiufen',
    'source-wikisource-chunqiufanlu-yinyang',
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
    'statement': '秋分日太阳直射地球赤道，全球昼夜均分（各约12小时）、无极昼极夜，是继春分之后一年中第二次昼夜均分；紫金山天文台专家口径称"春分日、秋分日仍是一年中昼夜最均分的两天"。此后阳光直射位置南移，北半球昼短夜长、南极附近极昼与北极附近极夜范围渐大。汉代《春秋繁露》以"秋分者，陰陽相半也，故晝夜均而寒暑平"表述同一现象（古典阴阳解释，非现代天文学）。',
    'exceptions': [
      '"昼夜均分"是几何近似而非严格相等（大气折射与太阳视圆面使白昼偏长）——该修正机制本轮秋分来源未直读，春分卡的折射解释（新华社2021稿）不跨节气复用，仅作待研究提示',
      'equilux（真昼夜等长日）随纬度偏移的量化结论本轮无直读来源，不断言',
      '"24小时昼夜均分"（非遗网口径）与"昼夜各12小时"（新华社2024口径）为同义表述',
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

# 秋分昼夜均分的科学解释

## 研究问题

"秋分昼夜平分"科学上如何解释？与春分的均分有何异同？"阴阳相半"的古代表述处于什么层？

## 证据

- **已直接读取**：非遗网秋分专题（[[04_sources/source-ihchina-qiufen-feature|source-ihchina-qiufen-feature]]）："这一天24小时昼夜均分，全球无极昼极夜现象。""秋分之后，北极附近极夜范围渐大，南极附近极昼范围渐大。"
- **已直接读取**：新华网2022稿（[[04_sources/source-xinhua-qiufen-2022|source-xinhua-qiufen-2022]]，引紫金山天文台科普部主任张旸）："春分日、秋分日仍是一年中昼夜最均分的两天。""秋分时，太阳直射赤道，昼夜平分。"
- **已直接读取**：中国天气网（[[04_sources/source-weather-com-cn-qiufen|source-weather-com-cn-qiufen]]）："此时一天24小时昼夜均分，各12小时。""此日后，阳光直射位置南移，北半球昼短夜长。"
- **已直接读取（古典对照层）**：《春秋繁露·阴阳出入上下篇》（[[04_sources/source-wikisource-chunqiufanlu-yinyang|source-wikisource-chunqiufanlu-yinyang]]）："至於中秋之月，陽在正西，陰在正東，謂之秋分，秋分者，陰陽相半也，故晝夜均而寒暑平，陽日損而隨陰，陰日益而檻，故至於季秋而始霜，至於孟冬而始寒。"
- **机制引用（不复述）**：节气按太阳黄经定义、节/中气交替见 [[04_sources/source-hko-solar-terms|香港天文台]]（本轮重读："12 major solar terms and 12 minor solar terms interlaced"，黄道以360度计）与 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]。

## 解释（Scientific Interpretation）

太阳直射赤道的瞬间，晨昏线通过两极，纬圈被近似对称地分为昼夜两半——秋分与春分共享这一几何成因，差别在穿越方向：秋分是直射点自北向南退回赤道，此后北半球进入昼短夜长的半年，故古人称之为"阳日損而隨陰"（损减的是日照时长，与现代"直射南移"对同一现象的不同框架表述）。《春秋繁露》"阴阳相半"是汉代阴阳学说的解释体系（interpretation 层），其"昼夜均"的观察内核与现代几何解释一致，但"陽在正西，陰在正東"的方位机制不是现代天文学表述——两层在引用时必须分开标注。

## 适用条件、例外与分歧

- 与 [[03_notes/sci-chunfen-day-night-equal|春分昼夜均分卡]] 命题独立：春分卡含"折射使白昼偏长"的量化实例（北京12时8分），本卡无秋分侧折射来源，不复制该数据，仅在 exceptions 提示机制同构待研究。
- "秋分之后南极极昼/北极极夜范围渐大"（非遗网表述）与"直射南移"（天气网/新华）为同一因果的两种说法，无冲突。

## 关联

[[01_terms/16_秋分|秋分索引]] · [[03_notes/sci-qiufen-longitude-180|秋分黄经定义]] · [[03_notes/hist-yueling-qiufen-pentads|月令三候]] · [[03_notes/sci-chunfen-day-night-equal|春分昼夜均分（对偶卡）]] · [[02_topics/scientific-interpretation|现代科学解释]]

## 待人工确认

- 秋分侧昼夜实测时长与折射修正的机构科普稿直读；equilux 随纬度数据（与春分卡共用缺口）。
- 《春秋繁露》版本校勘（四部丛刊本与其他版本异文比对）。

## 修改记录

- 2026-09-16（首轮批研究）：建卡。三机构直读（非遗网/新华2022/天气网）+《春秋繁露》古籍直读对照；古典阴阳解释明确标注为 interpretation 层，与几何解释分层书写。
- 2026-09-16（审核阶段）：路由 human-review-required（findings：pending-primary-source + assertion-above-evidence——exceptions 留有折射/equilux 待核验而 confidence=high；命题主体四源直读，是否维持 high 请人工裁决），状态 draft → in-review。见 [[07_research/sections/review-qiufen|秋分审核分节]]。
