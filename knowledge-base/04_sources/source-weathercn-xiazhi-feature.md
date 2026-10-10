---
schema_version: '0.1.0'
id: 'source-weathercn-xiazhi-feature'
type: 'Source'
title: '中国天气网：二十四节气之夏至'
solar_terms: ['xiazhi']
season: 'summer'
dimensions: ['astronomy', 'climate', 'chinese-life', 'references']
region: ['中国']
period: '当代机构科普稿（页面未署发布日期，内容为现行天文口径）'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'high'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
source:
  {
    'id': 'source-weathercn-xiazhi-feature',
    'title': '二十四节气之夏至（中国天气网）',
    'authors': ['中国天气网（中国气象局主办）'],
    'publisher': '中国天气网 weather.com.cn（天津频道转载页）',
    'published': null,
    'url': 'https://www.weather.com.cn/tianjin/tqyw/06/3473896.shtml',
    'citation': '中国天气网：《二十四节气之夏至》，2026-09-16 读取。',
    'source_type': 'institutional',
    'access': 'direct-read',
    'accessed': '2026-09-16',
    'original_excerpt': '夏至是二十四节气之一，每年公历6月21日或22日视太阳运行至黄经90度为夏至，此时太阳直射地面的位置到达一年的最北端，几乎直射北回归线，北半球的日照时间最长。……"不过夏至不热"，"夏至三庚数头伏"。夏至虽表示炎热的夏天已经到来，但还不是最热的时候，夏至后的一段时间内气温仍继续升高，大约再过二三十天，一般是最热的天气了。……中国古人将夏至分为三候：一候鹿角解，二候蝉始鸣，三候半夏生。',
    'locator': '页面首段定义句；"不过夏至不热""夏至三庚数头伏"气温段；三候段；习俗段（"夏至节"祭神祀祖、消夏避伏、吃面条、食粽子）。',
    'ai_summary': '中国气象局体系机构稿的夏至天文定义（黄经90°、公历6月21或22日、直射最北端近北回归线、北半球日照时间最长——本页措辞为"日照时间最长"）；气温机制（夏至非最热、再过二三十天到最热，即入伏铺垫）；三候；"夏至节"习俗概述（祭神祀祖/消夏避伏/吃面条/食粽子）。页面另含养生常识段（清淡饮食、苦味菜、绿豆汤），按养生建议对待不作文化事实。',
    'rights': '机构官网公开内容；仅引用要点与短摘录。',
    'verification': 'human-verified',
  }

# owner-authorized source upgrade 2026-09-28
---

# 中国天气网夏至稿 · Source

- 实际读取：是（2026-09-16，WebFetch 直读成功）。
- 交叉核对：黄经90°、6月21或22日、直射北回归线与非遗网夏至专题（[[04_sources/source-ihchina-xiazhi-feature|source-ihchina-xiazhi-feature]]）及新华社2026夏至稿（[[04_sources/source-xinhua-xiazhi-2026|source-xinhua-xiazhi-2026]]）两个直读来源相互印证，故标 cross-checked。
- 措辞注意：本页对极值表述为"北半球的**日照时间**最长"，非遗网页为"北半球的**白昼**最长，且越往北越长"——两页口径兼容（日照时间≈白昼时长），引用时按各页原文措辞引用，不作合并改写。

[[04_sources/README|来源入口]]
