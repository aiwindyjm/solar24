---
schema_version: '0.1.0'
id: 'source-weathercn-lidong-225'
type: 'Source'
title: '中国天气网（北京站）：今日"立冬"冬天即将开始'
solar_terms: ['lidong']
season: 'winter'
dimensions: ['astronomy', 'climate', 'scientific-interpretation', 'references']
region: ['中国（全国季节分布叙述，含北京数据）']
period: '2012年发布（页面日期待核）；内容为气象业务口径'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'medium'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
source:
  {
    'id': 'source-weathercn-lidong-225',
    'title': '今日"立冬"冬天即将开始（中国天气网北京站）',
    'authors': ['中国天气网北京站'],
    'publisher': '中国天气网（中国气象局主办）',
    'published': null,
    'url': 'https://www.weather.com.cn/beijing/sygdt/11/2000040.shtml',
    'citation': '中国天气网北京站：《今日"立冬"冬天即将开始》，2026-09-16 读取。',
    'source_type': 'institutional',
    'access': 'direct-read',
    'accessed': '2026-09-16',
    'original_excerpt': '今天（11月7日）是"立冬"节气，太阳已到达黄经225°，它是农历冬季的第一个节气，民间习惯以"立冬"为冬季的开始。……在下半年若连续5天的平均气温低于10℃时，其首日即为冬季的开始日。……北京……常年入冬约在10月28日前后……东北、西北、华北北部及西藏、川西已入冬；华北南部至江南及西南大部为秋季；两广、闽南和台湾仍是夏季。',
    'locator': '正文首段（定义）+ 气候学入冬标准段 + 全国季节分布段 + 北京常年入冬数据段。',
    'ai_summary': '气象机构立冬稿：黄经225°、11月7日实例、"农历冬季第一个节气"、民间习惯以立冬为冬季开始；气候学入冬标准（连续5天平均气温低于10℃首日）；全国季节版图（东北/西北/华北北部/西藏/川西已入冬，华北南部至江南为秋，两广闽南台湾仍为夏）；北京常年入冬约10月28日（早于立冬约10天）。',
    'rights': '气象机构公开科普稿；仅短摘录。',
    'verification': 'human-verified',
  }

# owner-authorized source upgrade 2026-09-28
---

# 中国天气网立冬稿 · Source

- 实际读取：是（2026-09-16，WebFetch 读取成功）。
- 交叉核对：黄经225°/11月上旬与非遗网立冬专题（[[04_sources/source-ihchina-lidong-feature|非遗网立冬专题]]）一致；候温≤10℃入冬口径与深圳市气象局业务知识库（[[04_sources/source-szmb-season-division|深圳气象局四季划分]]）一致。
- 注意：文称"农历冬季的第一个节气"——按节气在农历中的季节编组口径（非"属农历历法"），引用时按原句转录，不转写。

[[04_sources/README|来源入口]]
