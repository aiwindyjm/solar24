---
schema_version: '0.1.0'
id: 'hist-qimin-zhonggu-shixu'
type: 'HistoricalRecord'
title: '《齐民要术》种谷三时："清明节+桃始花"双锚与闰岁调整'
solar_terms: []
season: null
dimensions: ['agriculture', 'calendar']
region: ['中国北方黄河流域中下游（北魏农书经验范围）']
period: '北魏（约6世纪30-50年代成书）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'system'
contested: false
source_ids: ['source-wikisource-qiminyaoshu']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-25'
updated: '2026-09-25'
human_review:
  {
    'reviewer': 'aiwindyjm',
    'reviewed_at': '2026-09-28',
    'decision': 'approved',
    'notes': 'Owner-authorized batch approval based on AI pre-review',
  }
claim:
  {
    'statement': '《齐民要术》种谷第三以"上时/中时/下时"三级表述谷子播种窗口，其锚点同时使用月份物候（麻菩杨生/枣叶生桑花落）与节气名（"三月上旬及清明節、桃始花爲中時"）；并明言闰年对农时的系统调整："有閏之歲，節氣近後，宜晚田"。',
    'exceptions': ['"節氣近後"指闰年节气对应农历日期偏晚；"麻、菩楊"用字从维基文库本，点校本或作异文'],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/B/独立1；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 《齐民要术》种谷三时："清明节+桃始花"双锚与闰岁调整

## 研究问题

节气名与物候在6世纪农书里如何共同锚定农时？闰月-节气-农时的关系有无一手文献？

## 证据（原文与定位）

- 種穀第三（curl代理raw逐字直读）："二月上旬及麻、菩楊生種者爲上時，三月上旬及清明節、桃始花爲中時，四月上旬及棗葉生、桑花落爲下時。歲道宜晚者，五月、六月初亦得。"
- 同篇："凡穀成熟有早晚……順天時，量地利，則用力少而成功多。任情返道，勞而無獲。"
- 同篇："有閏之歲，節氣近後，宜晚田。"

## AI 摘要 / 解释

本卡是"节气如何进入农事"的一手核心证据链：①节气名（清明）与物候（桃始花）**并列双锚**——同一时点用两套观测语言表述，正是节气体系与物候体系关系的原型样本；②"順天時，量地利"是农书时宜观的总纲句；③闰岁调整句直接证明古人知道节气相对农历漂移（与 [[02_shared/sci-solarterms-jieqi-zhongqi|节气/中气与置闰]] 的历法机制互证），并据此修改农事——"历法机制→农事实践"闭环的文献实证。

## 适用条件、例外与分歧

- 地域时代红线：所引为**北魏黄河流域中下游**农书经验（贾思勰活动于山东河北一带），不可写成"中国农民都……"或当代农事。
- 版本与文字以维基文库本直读为准（卷第一 2026-09-25 逐字提取）；点校本（《齐民要术校释》）核对列入人工待办。

## 关联

[[02_shared/README|共享知识]] · [[02_shared/fact-solarterms-yellow-river-origin|黄河流域起源]] · [[02_topics/agriculture|农业维度]]

## 待人工确认

- 与缪启愉《齐民要术校释》核对文字与句读；"麻菩楊"等异文用字核点校本。

## 修改记录

- 2026-09-25（R04/R05，第二轮）：建卡，证据为维基文库卷第一逐字直读。
