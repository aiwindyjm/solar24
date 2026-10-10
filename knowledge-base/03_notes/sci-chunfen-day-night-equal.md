---
schema_version: '0.1.0'
id: 'sci-chunfen-day-night-equal'
type: 'ScientificFact'
title: '春分昼夜均分的天文解释：太阳直射赤道，"昼夜平分"是近似而非严格相等'
solar_terms: ['chunfen']
season: 'spring'
dimensions: ['scientific-interpretation', 'climate', 'astronomy']
region: ['全球（昼夜相对长度规律与纬度相关，直射赤道事件全球同时）']
period: '现代天文学口径'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-xinhuanet-chunfen-2021', 'source-ihchina-chunfen-feature']
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
    'statement': '春分时太阳直射地球赤道，南北两半球获得等量的光和热，太阳从正东升起、正西落下，地球上各地昼夜等长（近乎）；"昼夜平分"是理论表述而非严格相等——以北京为例，2021年春分日白昼实际长约12时8分、黑夜约11时52分。春分之后阳光直射位置逐渐北移，北半球开始昼长夜短。',
    'exceptions': [
      '昼夜严格相等并不成立于春分当日：白昼略长于黑夜，新华社稿的解释是阳光穿过大气层发生折射、太阳尚在地平线下时即可见其升起（该折射成因表述目前仅见单一来源）',
      '北京12时8分/11时52分为2021年单城实例，逐地逐年数值未核算',
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

# 春分昼夜均分的天文解释

## 研究问题

"春分昼夜平分"科学上如何解释？它严格成立吗？

## 证据

- **已直接读取**：新华网2021稿（[[04_sources/source-xinhuanet-chunfen-2021|source-xinhuanet-chunfen-2021]]，引紫金山天文台科普部主管胡方浩）："此时，太阳位于地心视黄经零度，直射赤道，南北两半球获得等量的光和热。""太阳从正东升起，在正西落下，地球上各地昼夜等长。""但所谓'昼夜平分'只是理论说法。""以北京地区为例，春分这天'白天'准确时长为12时8分，'黑夜'长11时52分。"（成因解释：阳光穿过大气层发生折射，太阳尚在地平线下时即可见其升起。）
- **已直接读取**：非遗网春分专题（[[04_sources/source-ihchina-chunfen-feature|source-ihchina-chunfen-feature]]）："这一天太阳直射地球赤道，南北半球昼夜平分。""从春分到清明，正是一年中气温上升最快的时段。春分之后阳光直射位置逐渐北移，开始昼长夜短。"
- 新华网2022稿（[[04_sources/source-xinhuanet-chunfen-2022|source-xinhuanet-chunfen-2022]]）同口径："这一天，阳光几乎直射赤道，南北半球昼夜相平，此后阳光直射位置逐渐北移，北半球开始昼长夜短。"

## 解释（Scientific Interpretation）

太阳直射赤道的瞬间，晨昏线恰好通过两极，把纬圈近似对称地分为昼夜两半——这就是"春分昼夜平分"的几何来源。但"12小时白昼"只在忽略两件事时成立：大气折射（把太阳"抬"到地平线之上）与太阳是一个圆面（上半轮露出即算日出）。两者都让白昼偏长，所以实际的"昼=夜"之日（昼夜平分日/equilux）略早于春分且随纬度不同——该量化结论本轮无直读来源，只作待研究方向，不断言。

## 适用条件、例外与分歧

无跨来源直接冲突；"理论说法 vs 实测时长"的区分全部来自新华社2021单稿，采用时保留其专家口径。equilux 与 equinox 的区分未在任何本轮来源中直读，列为 Needs Research。

## 关联

[[01_terms/04_春分|春分索引]] · [[03_notes/sci-chunfen-longitude-0|春分黄经定义]] · [[03_notes/hist-yueling-chunfen-pentads|月令三候]] · [[02_topics/scientific-interpretation|现代科学解释]] · [[02_topics/climate|气候维度]]

## 待人工确认

- 大气折射+太阳视圆面的完整量化解释（引天文台/天文年历正式材料）；equilux（真昼夜等长日）随纬度变化的数据源。

## 修改记录

- 2026-09-16（首轮批研究）：建卡。核心命题两机构直读互证（新华社紫台稿+非遗网专题），折射解释单源如实标注。
