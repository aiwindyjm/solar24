---
schema_version: '0.1.0'
id: 'lit-guyu-yuanzhen'
type: 'CulturalFact'
title: '元稹《咏廿四气诗·谷雨三月中》：唐人谷雨组诗的物候全录'
solar_terms: ['guyu']
season: 'spring'
dimensions: ['literature-art', 'phenology']
region: ['中国']
period: '唐（元稹，779-831）；组诗系年与底本系统待考'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: ['source-gushiwen-guyu-yuanzhen', 'source-xinhua-guyu-2022']
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
    'statement': '传为元稹所作《咏廿四气诗》组诗的谷雨篇《谷雨三月中》全诗八句："谷雨春光晓，山川黛色青。叶间鸣戴胜，泽水长浮萍。暖屋生蚕蚁，喧风引麦葶。鸣鸠徒拂羽，信矣不堪听。"（古诗文网作品页直读，标注〔唐代〕、五言律诗；首联与新华社2022年谷雨稿开篇引文一致）。诗中"鸣戴胜""长浮萍""鸣鸠拂羽"与《月令七十二候集解》谷雨三候（戴胜降于桑/萍始生/鸣鸠拂其羽）同物候同名，全诗构成三候的文学化重述。',
    'exceptions': [
      '全诗文本仅古诗文网单页直读（首联有新华社稿互证，后六句单源）；底本出处页面未注明，敦煌写本系统与通行本的异文、组诗作者归属的学界讨论均待核',
      '维基文库本轮未检得《咏廿四气诗》组诗文本（题名检索与"穀雨春光曉"全文检索均无命中），无法以维基文库本作校勘底本',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=low/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 元稹《咏廿四气诗·谷雨三月中》

## 研究问题

哪一首诗最适合作为谷雨的文学样本？它与三候体系的文本关系如何？

## 证据（原文与定位）

已直接读取古诗文网作品页（[[04_sources/source-gushiwen-guyu-yuanzhen|source-gushiwen-guyu-yuanzhen]]）：

> "谷雨春光晓，山川黛色青。叶间鸣戴胜，泽水长浮萍。暖屋生蚕蚁，喧风引麦葶。鸣鸠徒拂羽，信矣不堪听。"

页面标注：〔唐代〕元稹；简析称五言律诗。首联"谷雨春光晓，山川黛色青"与新华社2022年谷雨稿开篇引文（[[04_sources/source-xinhua-guyu-2022|source-xinhua-guyu-2022]]）逐字一致。

## AI 摘要 / 解释

- 这首诗的价值在于**物候的文学全录**：八句中五句直接对应谷雨三候——叶间鸣戴胜（戴胜降于桑）、泽水长浮萍（萍始生）、鸣鸠徒拂羽（鸣鸠拂其羽），另补"暖屋生蚕蚁"（蚕事将起，与三候注文"蠶將生之候"同义）与"喧风引麦葶"（麦田暮春风物）。它证明三候物候在唐代诗歌语境中已是可调用的公共知识（若系年与文本归属核实，则可作三候体系唐代已流行的旁证——此推论依赖底本核验，暂不展开）。
- "鸣鸠徒拂羽，信矣不堪听"的收束把催耕鸟声写成聒耳的紧迫感，与《月令》"趨農急矣"同一农时心理，是"文学×农时"交叉样本。

## 适用条件、例外与分歧

文本层面无分歧（两源首联一致）；系年（一说作于长庆四年前后）、组诗真伪与底本异文均未核，引用时标"传为元稹作《咏廿四气诗》"为宜。

## 关联

[[01_terms/06_谷雨|谷雨索引]] · [[03_notes/hist-yueling-guyu-pentads|谷雨三候]] · [[02_topics/literature-art|文学艺术]]

## 待人工确认

- 组诗底本核验（《全唐诗》/敦煌写本 P.5521 等卷子图像）；作者与系年结论采信哪一说。

## 修改记录

- 2026-09-16（第一轮）：建卡。维基文库无组诗文本（检索留痕于 Source 卡），改以古诗文网直读+新华社互证首联；confidence 取 medium 留校勘余地。
