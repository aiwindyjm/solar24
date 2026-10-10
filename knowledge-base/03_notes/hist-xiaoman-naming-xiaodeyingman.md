---
schema_version: '0.1.0'
id: 'hist-xiaoman-naming-xiaodeyingman'
type: 'HistoricalRecord'
title: '小满命名："物至于此小得盈滿"的古籍定义句与"无大满"序列事实'
solar_terms: ['xiaoman']
season: 'summer'
dimensions: ['history', 'phenology', 'agriculture']
region: ['文本经验锚定中国北方麦作区（定义句）；"满"的雨水义见于江南农谚（现代机构汇编）']
period: '定义句出自题名元代的《月令七十二候集解》；现代机构双义对照为2015-2024年表述'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  [
    'source-yueling-qishierhou-wikisource',
    'source-ihchina-xiaoman-feature',
    'source-xinhua-xiaoman-2024',
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
    'statement': '《月令七十二候集解》小满命名定义句为："小滿，四月中。小滿者，物至于此小得盈滿"——万物（承上下文指麦类等夏熟作物）至此小得盈满，即籽粒开始饱满而未全熟。二十四节气序列中有小暑必有大暑、有小雪必有大雪、有小寒必有大寒，而小满之后是芒种、无"大满"——这是可直读核验的命名序列事实。现代机构给出南北双义转述：北方指作物籽粒渐饱满，南方农谚中"满"另指雨水盈缺。',
    'exceptions': [
      '机构引文存在"物至于此/物致于此"异文：维基文库本与非遗网专题作"至于此"，新华社稿作"致于此"；本卡以直读的维基文库本为准',
      '"为何无大满"的古籍直接回答本轮未找到——古文献层面该问题没有已读答案，现代哲学解读全部归入 [[03_notes/interp-xiaoman-modern-philosophy|现代阐释卡]]，不得混入本卡',
      '"满"的雨水双义来自现代机构汇编（非遗网2017/2018），其农谚文献源头待查',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立3；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 小满命名：定义句与"无大满"

## 研究问题

"小满"二字在古籍中的原始定义是什么？"有小满而无大满"是确凿的序列事实，还是流行说法？

## 证据（原文与定位）

1. **古籍直读**：《月令七十二候集解》小满节（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]）："小滿，四月中。小滿者，物至于此小得盈滿。"——命名直接绑定"盈满"程度："小得盈满"（开始饱满、未至全满）。三候全文另见 [[03_notes/hist-yueling-xiaoman-pentads|三候卡]]。
2. **序列事实核验**：《月令》全书节气依次为立春/雨水/惊蛰/春分/清明/谷雨/立夏/**小满**/芒种/夏至/小暑/大暑/立秋/处暑/白露/秋分/寒露/霜降/立冬/小雪/大雪/小寒/大寒/立春（同页直读；序列亦见共享卡 [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]]）——小暑对大暑、小雪对大雪、小寒对大寒，唯小满之后为芒种，**序列中确无"大满"**。
3. **现代机构双义转述**：非遗网小满专题（[[04_sources/source-ihchina-xiaoman-feature|source-ihchina-xiaoman-feature]]）："南方地区的农谚赋予小满另一番寓意，'满'不仅指农作物的饱满度，也用来形容雨水的盈缺"；新华社稿（[[04_sources/source-xinhua-xiaoman-2024|source-xinhua-xiaoman-2024]]）："这时北方地区的小麦等夏熟作物正籽粒灌浆饱满、将熟未熟。"

## AI 摘要 / 解释

- 命名逻辑（古籍层）：与"麦秋至"（麦的成熟季，见 [[03_notes/hist-yueling-xiaoman-pentads|三候卡]]）互证——小满命名描述的正是**夏熟作物籽粒从灌浆到蜡熟前的"将满未满"阶段**，是一个农事物候命名，不是哲学命题。
- "无大满"的分层（本节气核心辨析）：
  - **事实层（本卡）**：序列中确无大满；小满后为芒种。"芒种"义为"有芒之谷可种"（其定义句本轮未直读，待补）。
  - **阐释层（另卡）**："为何无大满"的哲学/中庸解读是**现代文化阐释**（2015年文化报、2024年学者访谈），见 [[03_notes/interp-xiaoman-modern-philosophy|现代阐释卡]]。古文献中对该问题的直接回答本轮**未找到**，如实记 Needs Research。
- 与谷雨命名卡（[[03_notes/hist-guyu-naming-yushengbaigu|谷雨命名]]）同构：机构四字概括/哲理发挥≠古籍定义句，两层分卡。

## 适用条件、例外与分歧

- 异文：定义句"物至于此"（维基文库本、非遗网）vs"物致于此"（新华社稿）——一字之差，引用时注明所据版本。
- "小得盈满"的主语：《月令》原文未明写"麦"，"物"泛指万物/作物；"北方夏熟作物"的具体化来自现代机构释义，本卡在命题中已分层标注。

## 关联

[[01_terms/08_小满|小满索引]] · [[03_notes/hist-yueling-xiaoman-pentads|小满三候]] · [[03_notes/interp-xiaoman-modern-philosophy|现代阐释（interpretation 层）]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_topics/history|历史维度]]

## 待人工确认

- "芒种"定义句直读（"有芒之谷可种"义的原文核验，属下一节气任务）。
- "物至于此/物致于此"异文的版本源流（四库本/其它传本比对）。
- 南方"满=雨水"农谚的文献源头（方志/农书检索）。

## 修改记录

- 2026-09-16（第一轮）：建卡。定义句直读+序列事实直读核验+机构双义分层；"无大满"哲学解读显式排除到 interpretation 卡。
