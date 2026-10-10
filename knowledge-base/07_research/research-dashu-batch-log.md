---
schema_version: '0.1.0'
id: 'research-dashu-batch-log'
type: 'ResearchNote'
title: '大暑批量研究 · 第一轮执行日志（2026-09-16）'
solar_terms: ['dashu']
season: 'summer'
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
    'task': '按 24 节气批量研究规范完成大暑（12，summer）第一轮研究：天文/物候（腐草为萤古今分层为本节气重点）/中伏与气候/习俗（伏茶伏姜食俗）/农事/区域非遗锚点（送大暑船）/文学/全球表达/解释层/创意层',
    'queries': [
      'curl 直连：ihchina.cn/solar_details/6972.html（按波次编号段情报试探，302 至 Article/Index/detail?id=9896，首页 0 字节后 -L 重试成功；页面标题确认为"忽若秋气生——二十四节气之大暑"——大暑专题页=6972）；solarname_details/24760.html（送大暑船名录页）；Article/Index/detail?id=15059（农历二十四节气母项目页，列出各扩展项目）；project_details/23868.html（送大暑船专属项目页，含Ⅹ-68/2021第五批/扩展项目名录字段）',
      '维基文库API（走代理）：srsearch=大暑 曾几（命中 茶山集(四庫全書本)/卷4）；srsearch=右臺仙館筆記 大暑船（命中 右臺仙館筆記/卷12）；srsearch="大暑船"（精确，确认卷12+清稗類鈔/084）',
      '维基文库直读页（走代理 curl）：月令七十二候集解（全页抓取切大暑节+小暑节定义回指）；茶山集_(四庫全書本)/卷4（曾几《大暑》《参云亭晚坐》《似贤斋竹》三诗）；右臺仙館筆記/卷12（大暑船条全文）；欽定古今圖書集成/曆象彙編/歲功典/第098卷（寒暑部，含曹植/刘桢/王粲《大暑赋》全文）',
      'curl 直连机构稿：news.cn/politics/2022-07/23/c_1128856826.htm（新华社2022大暑稿：黄经120°/中伏重合/气象局温湿指数/三候/伏茶伏姜/暑羊）；news.cn/politics/20250722/8f07c9da8af54eabbe73157f481d318d/c.html（新华社2025送大暑船现场稿）；forestry.gov.cn/lyj/1/zhzs/20260722/678505.html（国家林草局萤火虫科普，2026-07-22发布）；cas.cn/cm/202405/t20240530_5016302.shtml（中科院转载人民日报萤火虫科普，李学燕访谈）',
      'WebSearch：大暑 黄经120° 新华网 今日大暑；site:ihchina.cn 送大暑船；ihchina.cn project_details 农历二十四节气 送大暑船 国家级非遗；萤火虫 腐草为萤 科学（首轮触发内容过滤后改词）；土用の丑の日 eel Japan Doyō no Ushi no Hi midsummer day of the ox unagi solar terms（glob Candidate 线索）',
    ],
    'discovered_source_ids':
      [
        'source-ihchina-dashu-feature',
        'source-xinhua-dashu-2022',
        'source-xinhua-dashuchuan-2025',
        'source-ihchina-dashuchuan-project',
        'source-ihchina-dashuchuan-intro',
        'source-wikisource-dashu-yutai',
        'source-wikisource-dashu-chashanji',
        'source-gujintushu-dashu-hanshu',
        'source-cas-dashu-firefly',
        'source-forestry-dashu-firefly',
        'source-wikipedia-dashu-oxday',
      ],
    'conflicts':
      [
        '"大暑定义句"异文（本轮最大防幻觉发现）：非遗网专题页引《月令七十二候集解》"六月中，……今则热气犹大也"——原书大暑条仅"大暑，六月中。解見小暑"七字，"今則熱氣猶小也"句属小暑条；机构引文系嫁接小暑条训诂并改末句"小→大"；处理：三候卡以维基文库直读为准，异文记录于 exceptions，"今则热气犹大也"不得作为月令原文引用',
        '纪年精度：非遗网"文字记载至迟可追溯至清代"（引俞樾） vs 新华社"当地史料记载清同治年间" vs 俞樾原文"同治中"——三口径兼容；处理：地域卡命题用"清同治年间（俞樾）"，"上百年"受访表述单独标注',
        'IHCHINA 专题页日期范围"7月22—24日之间" vs 新华社"7月23日（2022年实例）"——无冲突（范围 vs 实例），黄经卡命题取范围',
        '土用丑日与大暑的重合：检索摘要称土用=季节前18天、2026年丑日7月26日（落大暑内），但无逐年历表核验；处理：glob 卡 relationship 取 same-time 但在 reason 中明示"不排除个别年份落小暑末、逐年核验未做"',
        '萤火虫"70%种群下降"数据：林草局稿转述《中国萤火虫生态研究报告》——报告原文未直读；处理：降级为 exceptions 转述级，不进命题',
      ],
    'conclusions':
      [
        '第一轮建立知识卡11张（high 4张：sci-dashu-longitude-120 / hist-yueling-dashu-pentads / sci-dashu-firefly-entomology / sci-dashu-sanfu-zhongfu-heat + region-dashu-taizhou-dashuchuan 共5张 high）、Source 卡11张（10直读+1检索摘要级）；引用共享卡3张（sci-solarterms-jieqi-zhongqi / fact-solarterms-unesco-2016 / fact-solarterms-yellow-river-origin，另 sci-solarterms-calendar-role 与 hist-huainanzi-complete-24terms 仅链接），跨节气引用小暑波次2张（sci-xiaoshu-sanfu-gengday-mechanism 链接+引用、region-xiaoshu-xuzhou-fuyang 对照链接），全部仅链接不复述',
        '非遗锚点（本轮最强证据链）：送大暑船=项目页名录字段直读（Ⅹ-68/2021第五批扩展/台州市椒江区/保护中心）+俞樾《右台仙馆笔记》卷12原书直读（同治疫病起源+逐字流程，早于非遗网引文的"文献记载"级）+新华社2025现场稿——三发布方互证，四要素卡 high',
        '"腐草为萤"分层完成：古籍卡只记《月令》文本与注文（含阴阳解释标注为古典解释体系）；sci 卡以中科院（分类/发光机理/物种数）+林草局（生活史/栖息地/求偶闪光）两独立机构直读；衔接表述（栖息地与腐草环境重叠→化生解释框架）写入 sci 卡解释层并设红线（不得写成古人已有昆虫学知识，不得嘲笑古人）',
        '中伏卡：新华社"大暑大部分时段与中伏重合""冷在三九，热在中伏"+气象局温湿指数统计（转述级标注）+非遗网"正值二伏前后"；三伏机制本体复用小暑知识锚卡（跨节气引用合法）',
        '文学卡：brief 优选曾几《大暑》在维基文库《茶山集》卷4直读成功（四库本全文）；意外收获=《古今图书集成》岁功典098卷寒暑部艺文含曹植/刘桢/王粲《大暑赋》全文（建安大暑赋传统+王粲"潤土之溽暑"与月令"土潤溽暑"同源）——两源同为维基文库托管，按同托管方规则 confidence 上限 medium',
        '主要证据缺口：GB/T 33661-2017 正文（继承）、伏茶/伏姜/烧伏香的古籍文献链（烧伏香未获机构直读源，不建卡）、三候现代物候验证、《中国萤火虫生态研究报告》原文、台州地方志大暑船条、季节滞后物理机理、土用丑日权威直读源',
      ],
    'human_questions':
      [
        '"今则热气犹大也"式嫁接引文是否需要全库排查（各节气机构稿普遍存在同类改写风险，建议列入引用文化研究）',
        '俞樾条"同治中癘疾"起源语境可否作为送大暑船的规范叙事起点（还是仅作"最早文献记载"处理，起源叙事留白）',
        '萤火虫卡的古今分层表述（观察真实+解释框架）是否达到产品文案可复用的清晰度',
        '温湿指数卡按机构转述级 confidence=high 是否成立（原始统计未直读；建议气象局原始发布页核读后终审）',
        '土用丑日 Candidate 的直读核验优先级（日本历法权威源+逐年重合率计算）',
        'GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）',
      ],
  }
---

# 大暑批量研究 · 第一轮执行日志

## 执行摘要

2026-09-16 由 AI 研究代理执行（brief：`.batch-tmp/AGENT-BRIEF.md`）。顶层问题：**大暑作为"极热"节气，其"最热"命题的天文、气候与民俗证据分别是什么？"腐草为萤"如何做古今分层？大暑的非遗锚点有多硬的文献链？**

## 流程记录

1. **样例对齐**：读 brief + 立春 9 张样例卡 + 小暑波次成品（索引/日志/审核分节/glob 卡）。
2. **非遗网定位（一次命中）**：按 §10 编号段情报（夏至=6970、小暑=6971）试探 solar_details/6972 → 302 至 Article/Index/detail?id=9896，页面标题《忽若秋气生——二十四节气之大暑》确认（供后续波次：**大暑=6972**）。送大暑船：WebSearch 定位 solarname_details/24760 → 母项目页 15059 相关项目表内发现专属 project_details/23868.html（含批次名录字段）。
3. **古籍直读**：月令七十二候集解大暑节（含"解見小暑"回指与小暑条原文比对）；茶山集卷4（曾几三处大暑诗）；右台仙馆笔记卷12（大暑船条——非遗网引文的原书核对，逐字一致且多出疫病起源语境）；古今图书集成岁功典098卷（建安《大暑赋》三篇全文）。
4. **机构稿直读**：新华社2022大暑稿、新华社2025送大暑船现场稿、国家林草局2026萤火虫科普（恰在大暑日发布）、中科院转载人民日报萤火虫访谈——四个页面 curl 全部成功。
5. **检索级**：土用丑日（Wikipedia 摘要+多家英文站点摘要，glob Candidate 专用）；萤火虫科学首轮检索触发内容过滤，换词后获得机构源。
6. **建卡与引擎**：11 卡 + 11 源卡 + 索引更新。首跑发现两张卡 YAML 断裂（claim 摘录内含未转义的 ASCII 单引号 '三伏'/'大暑船'），按 `''` 转义修复；三候卡补新华社为第二独立发布方（清 evidence-below-confidence finding）；解释层分布性短语按引擎 finding 改为机构归因表述；重跑通过。按 §8 入包规则：三张 sci 卡（引擎 human-review-required）升 in-review，其余保持 draft。

## 12项审计（§7）

1. **Unsupported Distribution**：发现+已处理——解释层首跑被引擎标记"大暑大部分时段与中伏重合"句，改为"机构稿表述为……"归因表述；"不少地方有喝伏茶""我国大部分地区一年中最热"等源文泛称一律保留在引文层并注明"未列举具体地域"，未进入任何卡命题。
2. **Regional Generalization**：通过——台州椒江（送大暑船）、粤东南（仙草）、台湾（凤梨）、莆田（荔枝羊肉米糟）、湘中北（童子鸡）、湘东南（姜）、山东（暑羊）、苏浙（伏雨谚语）、长江中下游（伏旱谚语）、北方（七下八上）全部带地域限定；非遗网"浙江沿海地区"泛称未被推广为送大暑船的地域（命题限椒江葭沚）。
3. **Modern-as-Ancient**：通过——伏茶/伏姜/仙草/凤梨/暑羊均为当代机构汇编口径，卡内明确"历史谱系未核"；三伏贴按"非遗网专题养生节记录"呈现。
4. **Historical Leakage**：通过——月令三候卡无黄经/气象学概念（中气标签用"六月中"原文+链接共享卡）；黄经卡不载古籍内容（仅引"反映夏季炎热程度"的现代转述）。
5. **Scientific Leakage**：通过——萤火虫现代昆虫学全部在 sci 卡，月令卡的"离明之極…化而為明"标注为古典解释体系；两卡互链不互写。
6. **Legend-as-Fact**：发现+已处理——明代"大暑船"退倭故事（新华社受访者口述，原文自带"传说"限定）与俞樾笔下的海盗灵异叙事均入 region 卡 exceptions 并标注层级；"与傩戏有传承关系"标注为当地文史专员个人观点。
7. **Weak Source Inflation**：发现+已处理——温湿指数统计（气象局工作的媒体转述）与"70%种群下降"（林草局转述《中国萤火虫生态研究报告》）均降级为转述级；农谚/食俗机构汇编无逐一出处→medium 以下。
8. **Search Excerpt Misuse**：通过——土用丑日唯一 search-excerpt 源 verification=unverified，仅支撑 low Candidate；引擎 finding=insufficient-evidence 路由 needs-research，符合预期设计。
9. **Cross-source False Validation**：通过——黄经120° 的 high 建立在非遗网×新华社两个不同机构直读上；送大暑船 high 建立在非遗网（两页同源只计一个）×新华社×维基文库原书三个发布方；茶山集+岁功典同为维基文库托管，按同托管方规则 confidence 压 medium。
10. **Creative-as-Fact**：通过——idea 卡三条全部带性质声明+依据卡+误导风险红线（腐草为萤双层卡的红线是"不得融合叙事"）。
11. **Global Forced Correspondence**：通过——土用丑日卡三要素明确写"不是对应、不是等同、不是日本的大暑节"；relationship 取枚举 same-time 且 reason 中明示漂移与未逐年核验；similarity 只写"同为伏天以食抗暑的历法绑定食俗"。
12. **Shared Knowledge Duplication**：通过——黄道24等分/节气中气分组/淮南子序列/UNESCO/七十二候体系均只链接 02_shared 卡；三伏干支机制本体不复述（链接小暑知识锚卡）。

## 19维覆盖矩阵

| 维度 | 状态 | 支撑卡 |
|---|---|---|
| astronomy | complete | sci-dashu-longitude-120（high，2独立直读机构+GB/T元数据） |
| calendar | partial | sci-dashu-sanfu-zhongfu-heat（中伏叠合，high）+ 链接 sci-solarterms-jieqi-zhongqi / sci-xiaoshu-sanfu-gengday-mechanism；本节气无独立历法机制卡（大暑=六月中仅标签级） |
| climate | complete | sci-dashu-sanfu-zhongfu-heat（high，含温湿指数统计+七下八上） |
| phenology | complete（文本层） | hist-yueling-dashu-pentads（high；现代物候验证 missing） |
| agriculture | partial | trad-dashu-nongshi（medium，机构汇编级） |
| ecology | complete | sci-dashu-firefly-entomology（high，现代昆虫学两机构直读） |
| chinese-life | partial | trad-dashu-fucha-shushi（medium）+ region 卡；伏茶谱系/烧伏香缺 |
| customs | complete | region-dashu-taizhou-dashuchuan（high）+ trad-dashu-fucha-shushi |
| food | partial | trad-dashu-fucha-shushi（凉热两路线，地域标注；文献链缺） |
| history | partial | 三候（high）+送大暑船俞樾文献链（high）+shared 淮南子链接；大暑名称史/月令嫁接引文溯源待做 |
| literature-art | partial | lit-zengji-dashu-poem（medium，四库本直读+汉魏大暑赋；校勘未做） |
| regional-differences | partial | region-dashu-taizhou-dashuchuan（high）+ shared 黄河起源；区域锚点一个 |
| scientific-interpretation | complete | 黄经/萤火虫/中伏三卡（high×3） |
| global-expressions | weak | glob-dashu-doyo-oxday（Candidate，search-excerpt） |
| visual-assets | missing | 无已授权素材 |
| audio-assets | missing | 无已授权素材（"螢火亂更深"文学锚已记） |
| interaction-ideas | complete | idea-dashu-interaction-sketches（3条创意，含分层红线） |
| references | complete | 新增11源（10直读+1线索） |
| ai-research-log | complete | 本日志 |

统计：complete 9 / partial 6 / weak 1 / missing 3（visual/audio + 无）/ N-A 0（19维中 calendar 记 partial）。

## 素材边界审计

本轮未引入任何图片、音频、视频素材（非遗网页面配图一律不用；页脚"部分图文来自网络"声明已记录于源卡 rights；新华社现场稿的两张署名照片（翁忻旸/冯源摄）仅在源卡 locator 中作为报道属性提及，图像本身未获取）。全部引用为文本短摘录：古籍（公有领域）逐字摘录带定位；机构稿件短引（新华社/林草局/中科院/人民日报版权，仅要点级引用）。临时文件仅写入 .batch-tmp/dashu-* 前缀。

## 引擎路由表（npx tsx .batch-tmp/batch-route.mts dashu，2026-09-16，YAML 修复+证据补强后重跑）

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| fact-solarterms-unesco-2016 | CulturalFact | system | high | A(独立直读×2) | **human-review-required** | — |
| fact-solarterms-yellow-river-origin | CulturalFact | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-huainanzi-complete-24terms | HistoricalRecord | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-solarterms-pentad-system | HistoricalRecord | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-calendar-role | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-jieqi-zhongqi | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| dashu-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |
| glob-dashu-doyo-oxday | GlobalExpression | global | high | D(独立直读×0) | **needs-research** | insufficient-evidence, global-candidate-hold |
| hist-yueling-dashu-pentads | HistoricalRecord | term | medium | A(独立直读×2) | **auto-candidate** | — |
| lit-zengji-dashu-poem | CulturalFact | term | low | B(独立直读×2) | **auto-candidate** | — |
| region-dashu-taizhou-dashuchuan | Tradition | term | medium | A(独立直读×3) | **auto-candidate** | — |
| sci-dashu-firefly-entomology | ScientificFact | term | medium | A(独立直读×3) | **human-review-required** | pending-primary-source |
| sci-dashu-longitude-120 | ScientificFact | term | medium | A(独立直读×3) | **human-review-required** | pending-primary-source |
| sci-dashu-sanfu-zhongfu-heat | ScientificFact | term | medium | A(独立直读×2) | **human-review-required** | pending-primary-source |
| trad-dashu-fucha-shushi | Tradition | term | medium | A(独立直读×2) | **auto-candidate** | — |
| trad-dashu-nongshi | Tradition | term | low | A(独立直读×2) | **auto-candidate** | — |

Findings 明细：dashu-human-explanation explanation-gated(major)；glob-dashu-doyo-oxday insufficient-evidence(blocker)+global-candidate-hold(info)；sci-dashu-firefly-entomology / sci-dashu-longitude-120 / sci-dashu-sanfu-zhongfu-heat 各 pending-primary-source(major)（分别为《中国萤火虫生态研究报告》原文未直读、GB/T 33661-2017 正文未直读、气象局温湿指数原始统计未直读）。

idea-dashu-interaction-sketches（InteractionIdea）不参与路由（无 claim 证据分），status 保持 draft。

本节气路由统计（不含6张系统级共享卡）：**A 5 · B 3 · C 1 · D 1**。

## 修改记录

- 2026-09-16（第一轮）：11 卡 + 11 源卡 + 索引 + 解释层 + 创意层 + 日志 + 审核分节一次完成。
- 2026-09-16（修正1）：sci-dashu-sanfu-zhongfu-heat 与 source-xinhua-dashuchuan-2025 的 frontmatter 内 ASCII 单引号（'三伏'/'大暑船'/'送大暑船'）导致 YAML 断裂，按 `''` 转义修复（引擎首跑发现，波次情报预警命中）。
- 2026-09-16（修正2）：hist-yueling-dashu-pentads 补新华社2022稿为第二独立发布方（三候名异文校验），清除 evidence-below-confidence finding，high 置信站稳。
- 2026-09-16（修正3）：dashu-human-explanation 展开版"气候统计与它高度耦合"句按引擎 unsupported-distribution finding 改为机构归因表述（首跑 minor finding，重跑消除）。
- 2026-09-16（修正4）：按 §8 入包规则校正 status——sci-longitude-120 / sci-firefly-entomology / sci-sanfu-zhongfu-heat 升 in-review（human-review-required），其余保持 draft。

[[01_terms/12_大暑|大暑索引]] · [[07_research/sections/review-dashu|审核分节]] · [[07_research/research-xiaoshu-batch-log|小暑日志（三伏知识锚来源）]]
