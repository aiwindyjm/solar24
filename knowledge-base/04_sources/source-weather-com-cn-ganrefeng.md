---
schema_version: '0.1.0'
id: 'source-weather-com-cn-ganrefeng'
type: 'Source'
title: '中国天气网（陕西站）：小满节气后注意防范干热风'
solar_terms: ['xiaoman']
season: 'summer'
dimensions: ['climate', 'agriculture', 'scientific-interpretation', 'references']
region: ['中国北方麦区（稿作为陕西站稿件，"我省"指陕西）']
period: '2010-05-22 发布；内容为现行农业气象科普口径'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'medium'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
source:
  {
    'id': 'source-weather-com-cn-ganrefeng',
    'title': '小满节气后注意防范干热风',
    'authors': ['吕红（陕西省专业气象台）'],
    'publisher': '中国天气网陕西站',
    'published': '2010-05-22',
    'url': 'https://www.weather.com.cn/shaanxi/tqxs/501034.shtml',
    'citation': '陕西省专业气象台（吕红）：《小满节气后注意防范干热风》，中国天气网陕西站，2010-05-22。',
    'source_type': 'institutional',
    'access': 'direct-read',
    'accessed': '2026-09-16',
    'original_excerpt': '初夏季节，我国一些地区经常会出现一种高热、低湿的风，这就是干热风，也叫"热风"、"火风"、"干旱风"等。……干热风常发生的初夏时节，正是我国北方小麦灌浆时期，碰上干热风，麦穗会被烤得不能灌浆，提前"枯熟"、麦粒干瘪，粒重下降，导致严重减产。……强烈的干热风，对当地小麦、棉花、瓜果可造成危害。我省夏粮也常受干热风的影响。……农谚有"小满不满，麦有一险"的说法。',
    'locator': '干热风定义段、发生时段与灌浆关系段、危害段、农谚引述。',
    'ai_summary': '气象机构科普稿：干热风=初夏高热低湿风（别称热风/火风/干旱风，一般持续3天左右）；发生期恰为北方小麦灌浆期；危害机制为"烤得不能灌浆、提前枯熟、粒重下降"；引农谚"小满不满，麦有一险"。定性描述，未给温湿风数值指标。',
    'rights': '气象机构公开科普稿；仅引用要点与短摘录。',
    'verification': 'human-verified',
  }

# owner-authorized source upgrade 2026-09-28
---

# 中国天气网干热风稿 · Source

- 实际读取：是（2026-09-16，WebFetch 直读）。
- 交叉核对："小满不满，麦有一险"及干热风-灌浆关系与非遗网小满专题（[[04_sources/source-ihchina-xiaoman-feature|source-ihchina-xiaoman-feature]]：黄河中下游小麦灌浆期"最怕干热风的袭击"）独立互证，两机构互不相源，故标 cross-checked。
- 注意：稿为陕西站语境（"我省"=陕西），地域泛化到"我国北方小麦灌浆时期"是原文自身的表述，引用时保留原文粒度。

[[04_sources/README|来源入口]]
