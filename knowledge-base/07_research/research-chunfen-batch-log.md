---
schema_version: '0.1.0'
id: 'research-chunfen-batch-log'
type: 'ResearchNote'
title: '春分第一轮批研究 · 执行日志（2026-09-16）'
solar_terms: ['chunfen']
season: 'spring'
dimensions: ['ai-research-log', 'references']
region: []
period: null
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'unknown'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
research:
  {
    'task': '按 24 节气批研究 brief 为春分（chunfen，顺序04，spring）完成第一轮知识库填充：13项交付物、12项审计、路由与审核分节',
    'queries': [
      'ihchina.cn solar_details 春分 专题（直接访问 43.html）',
      '月令七十二候集解 春分 二月中 元鸟至 雷乃发声 始电（维基文库全文直读）',
      '春分 太阳到达黄经0度 3月20日 22日 新华网 OR 中国天气网 OR 中国气象局',
      'site:ihchina.cn 安仁赶分社 / ihchina.cn project_details 安仁赶分社 二十四节气',
      '维基文库检索：詠廿四氣詩 / 春分二月中 / 雨來看電影，雲過聽雷聲 / 春分日 仲春初四日 / 癸丑春分後雪',
      'un.org "International Day of Nowruz" March 21 spring equinox observance',
      '春分立蛋 习俗 起源 何时 流行 / 春分竖蛋 起源 争议 4000年前',
      '中国天气网 OR 气象局 春分 农谚 春分麦起身 农事',
      '清嘉錄 立蛋 / 豎蛋 / 清嘉錄 春分（维基文库API全文检索）',
    ],
    'discovered_source_ids':
      [
        'source-ihchina-chunfen-feature',
        'source-xinhuanet-chunfen-2021',
        'source-xinhuanet-chunfen-2022',
        'source-ihchina-anren-ganfenshe',
        'source-gmw-anren-ganfenshe',
        'source-wikisource-xuxuan-chunfenri',
        'source-un-nowruz-day',
        'source-chinanews-shudan-2013',
        'source-weather-com-cn-chunfen',
      ],
    'conflicts':
      [
        '日期范围口径：任务LEAD称"公历3月20-22日"，两个直读机构稿（新华网2021/2022）均为"3月20日或21日"，非遗网专题页只给当年日期（3月20日）——按直读口径写"20日或21日"，"20-22日"记为未获直读支持的通行说法',
        '竖蛋起源："4000年前"说（中新网2013稿，无史料出处）、《清嘉录》"竖蛋斗巧"说（检索摘要，维基文库全文检索未见）与非遗网"古老习俗"定性（无出处）互不相同且均无一手文献——整组按 Modern Popularization 层处理，不采任何一说为史实',
        '联合国诺鲁孜页内部不一致：同页先称2009年列入UNESCO名录、后文称2016年列入（实际为2009列入、其后多国扩展联合申报）——卡内只取导语级事实并登记差异',
        '非遗网春分专题"今年"实指丁酉年（2017）语境（3月20日=农历二月廿三），与页面无发布日期一并构成断代模糊——引用时只取定义性表述，不取"今年"句',
      ],
    'conclusions':
      [
        '第一轮建立知识卡11张（sci×2 / hist×1 / region×1 / trad×3 / lit×1 / glob×1 / idea×1 / explanation×1）、新来源9条（全部 direct-read），全部为 draft/in-review，等待人工审核',
        '高可信锚点：黄经0°定义（新华网2021紫台稿+新华网2022稿+非遗网专题，tier A 独立直读×3）、月令春分段逐字直读、安仁赶分社（名录页+央视网/光明网2024双源）、昼夜均分与折射修正（紫台稿）',
        '四张 high 卡达成基线：sci-chunfen-longitude-0 / hist-yueling-chunfen-pentads / sci-chunfen-day-night-equal / region-chunfen-anren-ganfenshe',
        '主要证据缺口：元稹《咏廿四气诗·春分二月中》无直读文本（维基文库无独立页）、《清嘉录》竖蛋条、竖蛋流行时间线、equilux量化、祭日礼制会典文献、花信风文献源头、Nowruz UNESCO档案',
      ],
    'human_questions':
      [
        '"3月20日至22日"的日期范围说法是否需要以《中国天文年历》逐年核算后专门订正（涉及全库日期口径一致性）？',
        '竖蛋卡是否值得人工去图书馆核对中华书局本《清嘉录》与《中华全国风俗志》类文献，以决定 Modern Popularization 定级是否改写？',
        '元稹《咏廿四气诗》组诗（敦煌写本P.3329系统）是否引入影印/校录本作为库级来源？',
        '诺鲁孜卡的跨文化顾问审阅（波斯历法机制表述）何时安排？',
        '非遗网春分专题页无发布日期、且自称"图文整理自网络"，其习俗条目可否作为长期 medium 级汇编源，还是应逐条回溯后降级为线索源？',
      ],
  }
---

# 春分第一轮批研究 · 执行日志

## 执行摘要

2026-09-16 由 AI 研究代理执行。研究问题（顶层）：**春分是什么？由哪些可靠来源支撑？证据边界在哪里？** 本轮完成 10 个页面的直接读取（非遗网专题页+名录页、维基文库月令+全唐诗、新华网×2、光明网（转央视网）、联合国官网、中新网、中国天气网），建卡 11 张、来源 9 条。

## 流程记录

1. **直读获取**：WebFetch 对 ihchina.cn 两次 504 → 按手册改用备用阅读器（solar_details/43.html，标题《春色正中分——二十四节气之春分》确认为本节气页）；非遗网项目页 curl 直取成功（project_details/15064.html）；维基文库用 curl 拉全页后按节气切分（月令春分段、全唐诗卷751徐铉诗）。
2. **文学卡选源**：元稹《咏廿四气诗·春分二月中》——维基文库 API 全文检索"詠廿四氣詩/春分二月中/雨來看電影，雲過聽雷聲"均无独立作品页（仅《協紀辨方書》历表等假命中）→ 按 brief 备选顺序改用徐铉《春分日》（全唐诗卷751直读成功）；苏轼《癸丑春分後雪》有维基文库页，留作后续。
3. **竖蛋处理**：按 Modern Popularization 层——当代实践三直读（非遗网/新华社2021/中新网2013），起源诸说（4000年前说、《清嘉录》说、"古老习俗"定性）逐条标注无一手文献；《清嘉录》在维基文库全文检索"豎蛋/立蛋"未见条目。
4. **全球表达**：un.org/observances/nowruz-day 404 → 检索确认正确 URL /international-nowruz-day → 备用阅读器直读成功（导语级事实可用；页面内部 2009/2016 表述不一致已登记）。
5. **成卡与自检**：所有新卡 id 含 chunfen、文件名==id、accessed/created/updated=2026-09-16、risk_level/impact_level 必填、human_review=null；YAML 单引号纪律（三轮修复嵌套引号转义问题：\'→''或改用中文引号，全部 20 文件通过 yaml 解析）。
6. **诚实留空**：三候现代物候验证、equilux、花信风源头、祭日会典、视觉/声音素材等无可靠直读来源的维度不建卡，记 Needs Research。

## 12项审计（§7）

1. **Unsupported Distribution**：通过。解释卡三层文本逐句自查无"大部/普遍/各地/全国/更多地方"类分布断言（地域只写安仁/岭南/北京/江南等具名地点）；trad-chunfen-customs 的"大部分客家地区"为非遗网页方原文转述、在 claim 内以"该页称"归因并在 exceptions 声明"页方汇编口径"。
2. **Regional Generalization**：通过。安仁卡 exceptions 明确"不能表述为中国人在春分都赶分社"；引擎无 national-claim-on-regional-note finding。
3. **Modern-as-Ancient**：通过且为本轮重点记录。竖蛋卡整卡即谱系警示：当代流行（直读×3）与起源未证分层书写；非遗网"古老习俗"定性被标注为无出处表述而非沿用。
4. **Historical Leakage**：通过。hist-yueling-chunfen-pentads 的 claim 与正文无"黄经/气象学/天文学"现代概念；月令注文以"古典解释体系（interpretation 层）"标注。
5. **Scientific Leakage**：通过。古籍卡无科学倒灌；花信风明确标注非遗网转述、非《月令》本文。
6. **Legend-as-Fact**：通过。炎帝传说在安仁卡标"传说层叙事，不作为历史事实引用"；epistemic=tradition 而非 fact，无引擎 legend-as-fact finding。
7. **Weak Source Inflation**：通过。检索摘要级信息（《清嘉录》说、2009/2016 UNESCO 说）均未建 search-excerpt 来源卡，只作"线索级"记录在直读卡的待核区与日志；引擎无 insufficient-evidence/weak-source finding。
8. **Search Excerpt Misuse**：通过。本轮 0 张 search-excerpt Source 卡（全部 direct-read）；不存在摘要标 cross-checked 情形（引擎无 excerpt-as-read finding）。
9. **Cross-source False Validation**：通过。cross-checked 标记均基于异发布方直读互证（ihchina×维基文库月令引文、ihchina×新华网天文口径、ihchina名录×央视网/光明网、新华网2021×2022同社但另有ihchina第三方）；新华网两稿同社稿仅作同源旁证、未单独构成独立交叉。
10. **Creative-as-Fact**：通过。idea 卡开头性质声明+每条依据卡与误导风险；无事实性表述。
11. **Global Forced Correspondence**：通过。Nowruz 卡三要素齐全，relationship=shared-nature，明示"并不是同一个节日，也无传播同源关系的证据"；引擎无 global-forced-correspondence finding（仅 info 级 candidate-hold）。
12. **Shared Knowledge Duplication**：通过。黄道24等分/节中气机制/UNESCO/七十二候体系均以 02_shared 卡链接引用（如 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]、[[02_shared/fact-solarterms-unesco-2016|UNESCO事实卡]]），未在节气卡内复述命题；引擎无 shared-duplicate finding。

## 19维覆盖矩阵

| 维度 | 状态 | 说明 |
|---|---|---|
| astronomy | complete | sci-chunfen-longitude-0（high，黄经0°=全库锚点） |
| calendar | complete | 二月中气引 sci-solarterms-jieqi-zhongqi；日期口径冲突已登记（partial→complete 以共享卡补齐，本节气无独立历法卡需求） |
| climate | partial | 昼夜均分+气温上升最快（sci-chunfen-day-night-equal / 专题页）；无独立气候统计卡 |
| phenology | complete | hist-yueling-chunfen-pentads（high，逐字直读+注文分层） |
| agriculture | complete | trad-chunfen-nongshi（"春分麦起身"双源）+安仁"吃药开耕" |
| ecology | weak | 三候现代物候验证未建卡（Needs Research） |
| chinese-life | complete | trad-chunfen-customs + trad-chunfen-shudan + 解释卡 |
| customs | complete | customs/shudan/region 三卡覆盖（机构汇编层已标注） |
| food | partial | 春菜/春汤条目在 trad-chunfen-customs 内（无独立饮食卡，非遗网转述级） |
| history | complete | 月令卡（元题名传统）+祭日（明清，页载）+名录页同治县志引文 |
| literature-art | complete | lit-xuxuan-chunfenri（全唐诗卷751直读）；元稹组诗缺直读页已记 D |
| regional-differences | complete | region-chunfen-anren-ganfenshe（四要素齐） |
| scientific-interpretation | complete | sci-chunfen-day-night-equal（含折射修正）；equilux 记 D |
| global-expressions | complete | glob-chunfen-nowruz（Candidate，un.org 直读） |
| visual-assets | missing | 无已授权素材（日坛/燕子/春牛图待版权研究） |
| audio-assets | missing | 雷声/燕鸣素材待授权研究（idea 卡已提示） |
| interaction-ideas | complete | idea-chunfen-interaction-sketches（4条创意含风险标注） |
| references | complete | 新增 9 条 Source（全 direct-read），复用 4 条既有直读源 |
| ai-research-log | complete | 本日志+审核分节 |

统计：complete 14 / partial 2 / weak 1 / missing 2。

## 素材边界审计

- 视觉：非遗网页面配图一律不用（页面声明整理自网络）；日坛、燕子、春牛图、药市影像均未授权，未建 VisualAsset。
- 声音：初雷/燕鸣无授权素材，idea 卡列为待办。
- 文本引用：所有古籍引文逐字带定位；机构稿引文限短摘录并注明版权属性（新华社/中新网为版权稿件）。

## 路由引擎输出（2026-09-16，`npx tsx skills/solar24-cultural-research/workflows/route.ts chunfen`）

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| fact-solarterms-unesco-2016 | CulturalFact | system | high | A(独立直读×2) | **human-review-required** | — |
| fact-solarterms-yellow-river-origin | CulturalFact | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-huainanzi-complete-24terms | HistoricalRecord | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-solarterms-pentad-system | HistoricalRecord | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-calendar-role | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-jieqi-zhongqi | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| chunfen-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |
| glob-chunfen-nowruz | GlobalExpression | global | high | B(独立直读×1) | **human-review-required** | global-candidate-hold |
| hist-yueling-chunfen-pentads | HistoricalRecord | term | medium | A(独立直读×1) | **human-review-required** | evidence-below-confidence |
| lit-xuxuan-chunfenri | CulturalFact | term | low | B(独立直读×1) | **auto-candidate** | — |
| region-chunfen-anren-ganfenshe | RegionalExpression | regional | medium | A(独立直读×2) | **auto-candidate** | — |
| sci-chunfen-day-night-equal | ScientificFact | term | medium | A(独立直读×2) | **auto-candidate** | — |
| sci-chunfen-longitude-0 | ScientificFact | term | medium | A(独立直读×3) | **auto-candidate** | — |
| trad-chunfen-customs | Tradition | term | medium | A(独立直读×2) | **auto-candidate** | — |
| trad-chunfen-nongshi | Tradition | term | medium | A(独立直读×2) | **human-review-required** | pending-primary-source |
| trad-chunfen-shudan | Tradition | term | medium | A(独立直读×3) | **human-review-required** | pending-primary-source |

Findings 明细：

- `chunfen-human-explanation` **explanation-gated**（major）：支撑卡或解释卡未 approved：按 Content Gate 禁止发布。
- `glob-chunfen-nowruz` **global-candidate-hold**（info）：Global Expression 处于 candidate：不构成已核实的文化对应。
- `hist-yueling-chunfen-pentads` **evidence-below-confidence**（major）：置信度 high 高于证据支撑（tier A，独立直读方 1）。
- `trad-chunfen-nongshi` **pending-primary-source**（major）：存在未直读的一手/标准来源，需人工核读后才能 verified。
- `trad-chunfen-shudan` **pending-primary-source**（major）：存在未直读的一手来源，需人工核读后才能 verified。

入包处置：hist-yueling-chunfen-pentads / trad-chunfen-nongshi / trad-chunfen-shudan → status 改 in-review；chunfen-human-explanation / glob-chunfen-nowruz → 保持 draft；5 张 auto-candidate 保持 draft。共享卡路由为既有状态，不处置。

## Needs Research（汇总）

1. 元稹《咏廿四气诗·春分二月中》直读文本（敦煌写本系统/点校集合集）。
2. 《清嘉录》竖蛋条目人工核查（中华书局点校本）。
3. 竖蛋现代流行时间线（媒体数据库溯源）与"春分更易竖蛋"的物理验证科普源。
4. equilux（真昼夜等长日）随纬度变化的权威解释与数据。
5. 春分逐年时刻权威数据源（《中国天文年历》）入库。
6. 祭日礼制（《大明会典》《大清会典》日坛朝日条）。
7. 花信风（海棠/梨花/木兰）文献源头（"二十四番花信风"谱系）。
8. 三候现代物候观测（中国物候观测网/竺可桢《物候学》）。
9. Nowruz UNESCO 名录档案（2009列入/2014、2016扩展）核对。
10. 视觉/声音素材授权研究（日坛、燕子、春牛图、雷声）。

## 规范自检

- 未编造来源、引文或检索记录；未读原文一律标注；全部 human_review=null；无 approved 状态；无自动发布。
- 只新建/编辑本节气文件（03_notes×11、04_sources×9、07_research×2）与 01_terms/04_春分.md 索引；未触碰 02_topics/02_shared/其他节气/scripts/packages/docs。
- 本日志本身也待人工复核。

[[01_terms/04_春分|春分索引]] · [[07_research/sections/review-chunfen|春分审核分节]] · [[04_sources/README|来源库]]
