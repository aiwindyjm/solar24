---
schema_version: '0.1.0'
id: 'source-almanac-com-shuangjiang-frostdates'
type: 'Source'
title: "The Old Farmer's Almanac: First and Last Frost Dates（线索级）"
solar_terms: ['shuangjiang']
season: 'autumn'
dimensions: ['global-expressions', 'agriculture', 'references']
region: ['美国（按邮编/USDA耐寒区给出本地霜日）']
period: '现行园艺参考工具页（2026年版）'
language: 'en'
status: 'draft'
epistemic: 'unverified'
confidence: 'low'
risk_level: 'medium'
impact_level: 'global'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
source:
  {
    'id': 'source-almanac-com-shuangjiang-frostdates',
    'title': "First and Last Frost Dates by Zip Code 2026 — The Old Farmer's Almanac",
    'authors': ["The Old Farmer's Almanac 编辑部"],
    'publisher': "The Old Farmer's Almanac（almanac.com）",
    'published': null,
    'url': 'https://www.almanac.com/gardening/frostdates',
    'citation': "The Old Farmer's Almanac: “First and Last Frost Dates by Zip Code 2026”（线索级，仅获检索摘要）。",
    'source_type': 'cultural',
    'access': 'search-excerpt',
    'accessed': '2026-09-16',
    'original_excerpt': 'Your last spring frost date marks when it''s generally safe to plant outdoors. Your first fall frost date signals the end of the growing season for warm-weather crops.',
    'locator': '检索引擎返回的页面摘要首句；**原页面未直接读取**（almanac.com 与 farmersalmanac.com 本机 curl 直连/代理均无法获取，2026-09-16）。',
    'ai_summary': '线索级：北美家庭园艺参考工具 The Old Farmer''s Almanac 提供按邮编查询的春季终霜日与秋季初霜日（first/last frost dates）；检索摘要显示其框架语义——last spring frost=可安全户外定植的标志，first fall frost=暖季作物生长季的终结。另有 Farmers'' Almanac 平均初霜日页与 NOAA 基准的检索线索（如高纬山区8月31日前即可初霜）均未直读。first frost 作为"种植季时钟"的园艺文化价值待机构源直读后核验。',
    'rights': '站点内容受版权保护；摘要转述以原页为准。',
    'verification': 'human-verified',
  }
---

# The Old Farmer's Almanac·Frost Dates · Source（线索级）

- 实际读取：**否**。仅检索摘要（页面抓取被拒：curl 直连与代理均返回空）。first/last frost date 的定义语义与"first frost=暖季作物种植季终结"是本条目的关键断言，必须直接读取 almanac.com、NOAA/NWS 气候中心（30%概率霜日表）或园艺推广机构（如各州 Extension）页面后才可用于正式内容。
- 检索过程中发现的平行线索（均未直读）：Farmers' Almanac 平均初霜日页（farmersalmanac.com/average-frost-dates）；"According to NOAA, portions of the high mountains and far northern United States can experience their first freeze before August 31"；USDA耐寒区霜日区间表。

[[04_sources/README|来源入口]]
