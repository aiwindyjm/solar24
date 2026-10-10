---
schema_version: '0.1.0'
id: 'source-weathercn-tianjin-lushuang'
type: 'Source'
title: '中国天气网天津站：露和霜的区别'
solar_terms: ['bailu']
season: 'autumn'
dimensions: ['climate', 'scientific-interpretation', 'references']
region: ['中国（通用气象科普）']
period: '2021-09-09 发布（白露前后）'
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
    'id': 'source-weathercn-tianjin-lushuang',
    'title': '露和霜的区别',
    'authors': ['中国天气网天津站（编辑：李津）'],
    'publisher': '中国天气网（天津市气象局）',
    'published': '2021-09-09',
    'url': 'https://www.weather.com.cn/tianjin/tqyw/09/3491865.shtml',
    'citation': '中国天气网天津站：《露和霜的区别》，2021-09-09。',
    'source_type': 'scientific',
    'access': 'direct-read',
    'accessed': '2026-09-16',
    'original_excerpt': '露是空气中水汽凝结在地物上的液态水；霜是贴近地面的空气受地面辐射冷却的影响而降温到霜点以下，在地面或物体上凝华而成的白色冰晶。……露的形成原因为傍晚或夜间，地面或地物由于辐射冷却，使贴近地表面的空气层也随之降温，当其温度降到露点以下，空气中水汽含量过饱和时，在地面或地物的表面就会有水汽的凝结，如果此时的露点温度在0℃以上，在地面或地物上就出现微小的水滴。',
    'locator': '"1、状态不同""2、形成原因不同""3、水汽液化速度不同"三节。',
    'ai_summary': '气象部门科普短文，以三条对比区分露与霜：状态（液态水滴/白色冰晶）、成因（辐射冷却降温至露点以下凝结/降温至霜点以下凝华）、温度门槛（露点高于冰点/霜点低于冰点）。露的定义句与科普中国专文一致。',
    'rights': '页面要求转载注明"来源：中国天气网"；仅要点级短引。',
    'verification': 'human-verified',
  }

# owner-authorized source upgrade 2026-09-28
---

# 中国天气网天津站·露和霜的区别 · Source

- 实际读取：是（2026-09-16，curl 直连）。
- 交叉核对：辐射冷却—露点—凝结链条与科普中国专文（[[04_sources/source-kpzg-dew-formation|科普中国露形成]]）一致，发布方独立，故标 cross-checked。

[[04_sources/README|来源入口]]
