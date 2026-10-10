---
schema_version: '0.1.0'
id: 'source-szmb-season-division'
type: 'Source'
title: '深圳市气象局：四季是如何划分的'
solar_terms: ['lichun']
season: null
dimensions: ['climate', 'scientific-interpretation', 'references']
region: ['中国（深圳市气象局业务科普，含全国通用口径）']
period: '现行口径；页面标示更新时间 2025-02-20 10:02:14（更新时间非首次发布日期，发布日期未知）'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'medium'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-18'
human_review: null
source:
  {
    'id': 'source-szmb-season-division',
    'title': '四季是如何划分的？（深圳市气象局业务知识库）',
    'authors': ['深圳市气象局'],
    'publisher': '深圳市气象局',
    'published': null,
    'url': 'https://weather.sz.gov.cn/mobile/hudongjiaoliu/yewuzhishiku/qixiangfuwulei/content/post_12009684.html',
    'citation': '深圳市气象局：《四季是如何划分的？》，业务知识库科普页（页面更新时间2025-02-20），2026-09-16 首读、2026-09-18 复读。',
    'source_type': 'institutional',
    'access': 'direct-read',
    'accessed': '2026-09-18',
    'original_excerpt': '气候上采用候温(五天平均温度)来划分，即候温低于或等于10℃为冬季，候温在10~22℃之间为春、秋季，候温大于或等于22℃为夏季。……深圳的划分标准如下：入春，五天滑动平均气温>10度，最后那天起；……需要说明的是：入春和入夏均需稳定达到相应的气温标准，即达到标准后没有再出现低于标准的情况，入秋和入冬则一达到相应气温标准就算入季。按此标准，深圳最新三十年（1991-2020年）平均入冬、入春、入夏、入秋日期分别为：1月21日、2月3日、4月20日、11月8日。',
    'locator': '页面正文（标题下标示"更新时间：2025-02-20 10:02:14 来源：深圳市气象局"）；气候学通说段+深圳判据段+1991-2020平均日期段。',
    'ai_summary': '地方气象机构科普页，两层内容：①气候学通说——候温（五天平均）划分四季（≤10℃冬、10-22℃春秋、≥22℃夏）；②深圳本地判据——入春为"五天滑动平均气温>10度，最后那天起"，且入春/入夏需"稳定达到"（达标后不再低于标准），另给深圳1991-2020年平均入春日2月3日。注意：严格大于（>）与起算日规则是深圳口径，不等同于全国统一判据（QX/T 152-2012 标准原文未直读）。',
    'rights': '政府网站公开内容；仅引用短摘录。',
    'verification': 'human-verified',
  }

# owner-authorized source upgrade 2026-09-28
---

# 深圳市气象局四季划分 · Source

- 实际读取：是（2026-09-16 首读；2026-09-18 复读并补全摘录——复核发现原摘录漏存深圳判据原句与统计句，且未登记页面更新时间）。
- 页面更新时间 2025-02-20 10:02:14 系页面自标**更新**时间，不冒充首次发布日期（发布日期未知）。
- 行业标准 QX/T 152-2012《气候季节划分》在检索摘要中与此口径方向一致，但**标准原文未直接读取**；引用标准条款须另行核验（待研究）。深圳判据的">10度、最后那天起、稳定达标"是本页口径，不得扩写为全国统一算法。
- 该页未讨论"天文划分 vs 气温划分"对比与南北入春差异，相关内容不在本 Source 范围内。
- 2026-09-18 修订教训登记：此前下游卡片把深圳口径转写为"连续五天滑动平均气温稳定≥10℃"——改变了比较符号（>→≥）并把起算规则含糊化，属不忠实转写，已随知识卡修正（见 sci-lichun-vs-meteorological-spring 修改记录）。

[[04_sources/README|来源入口]]
