---
schema_version: '0.1.0'
id: 'research-dongzhi-batch-log'
type: 'ResearchNote'
title: '冬至批量研究 · 第一轮执行日志（2026-09-16）'
solar_terms: ['dongzhi']
season: 'winter'
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
    'task': '按 24 节气批量研究规范完成冬至（22，winter）第一轮研究：天文定义（黄经270°/第22个/日期区间）/白昼最短+回归年锚（岁实、冬至定十一月）/月令三候直读（含麋角解互见注文）/周正岁首（史记历书直读）+产气始萌误引否证/贺冬与郊天汉-宋-明三段古籍直读链（后汉书礼仪志/东京梦华录/帝京景物略）/数九与消寒图（帝京景物略直读+荆楚归引直读否定）/食俗五项分层（赤豆粥六世纪直读）/张仲景传说 legend 卡/三门祭冬非遗地域卡（名录+人民日报海外版双直读）/白居易《邯郸冬至夜思家》直读/Yalda夜 Candidate/解释层/创意层',
    'queries': [
      'ihchina 编号确认：curl 直连 -L solar_details/6982.html，页面标题"冬至阳生春又来——二十四节气之冬至"命中（brief 预计编号正确；本节气编号=6982，供后续波次）',
      '维基文库（curl 走代理 127.0.0.1:7897）：月令七十二候集解全页切冬至节（得定义句+三候+夏至鹿角解互见注文）；荊楚歲時記全页（冬至条"作赤豆粥以禳疫量日影"直读；九九/数九零命中=负面证据）；史記三家註/卷026历书（"夏正以正月殷正以十二月周正以十一月"+韦昭注"若十一月朔旦冬至"；注：条目名"史記/卷26"为空页，正确页名带前导零）；後漢書/卷95礼仪中（冬至条+八能之士+蔡邕独断注+白虎通注）；東京夢華錄/卷十（冬至条"更易產衣"异文+驾诣郊坛行礼）；帝京景物略/2（春场：贺冬+九九消寒图+明版数九歌全首）；邯鄲冬至夜思家（全诗直读，标题注一作至除）',
      '维基文库检索 API：君子安身静體/邯鄲冬至夜/冬至大如年/intitle清嘉錄（totalhits=0，确认无《清嘉录》→冬至大如年出处记 Needs Research）/產氣始萌（无史记命中→LEAD 引文否证）/周正以十一月（命中史記/卷026与三正考等）/帝京景物略（命中卷子页）；欽定古今圖書集成歲功典冬至部（目录页直读，卷88子页无内容=死路如实记录）',
      'WebSearch：冬至 太阳到达黄经270° 新华网 OR 中国天气网 OR 中国气象局（命中新华社2021稿/新华网点位2015稿/人大农发学院等）；curl 直读 news.cn/2021（成功，紫金山天文台王科超口径+数九+岁实）与 xinhuanet.com/2015（成功，人民日报海外版稿+元稹诗转引+馄饨+亚岁）',
      'WebSearch：site:ihchina.cn 三门祭冬（命中 project_details/15063.html）；curl 直连（成功，名录字段Ⅹ-68/2014第四批/扩展项目+方志转引+仪式链）；WebSearch 另命中人民日报海外版2022-12-14稿，curl 直读（成功，700余年+拜天祭祖祝寿老人宴社戏+冬至圆几岁吃几个）——地域卡双独立直读源齐',
      'PMO 重读：curl 直连 pmo.cas.cn 历书科普问题解答（成功，逐字取得"包含冬至在内的农历月固定为农历十一月"置闰规则）',
      'WebSearch：Yalda night winter solstice Iran（命中 Wikipedia/Mehr News 等）；WebFetch en.wikipedia.org/wiki/Yalda_Night ECONNRESET 失败一次→curl 走代理直读成功（冬至夜/12月21日/家庭守夜读哈菲兹/石榴西瓜/2022 UNESCO/Mithra 词源警示框）',
    ],
    'discovered_source_ids':
      [
        'source-ihchina-dongzhi-feature',
        'source-xinhua-dongzhi-2021',
        'source-xinhuanet-dongzhi-2015',
        'source-ihchina-sanmen-jidong',
        'source-rmrbhwb-sanmen-jidong',
        'source-wikisource-shiji-lishu',
        'source-wikisource-houhanshu-liyizhong',
        'source-wikisource-djmhl-juan10',
        'source-wikisource-dijing-jingwulue',
        'source-wikisource-handan-dongzhi',
        'source-wikipedia-yalda-night',
      ],
    'conflicts':
      [
        '日期口径：非遗网"每年12月22日左右" vs 新华网点位2015"一般12月22-23日" vs 新华社2021"2021年12月21日23时59分"实例——claim 采用合成区间"12月21日至23日"并显式声明合成性质；2015稿"22-23日"与其姊妹稿2021实例的张力入 exceptions',
        '《东京梦华录》异文：维基文库本"更易產衣" vs 非遗网引文"更易新衣"（產/新）——以直读为准，登记待校勘',
        '汉代假期天数：非遗网"官府放假七天" vs 《后汉书》原文仅"絕事""擇吉辰而後省事"、蔡邕《独断》注"迎送五日"——"七天"为现代转述放大，不得写成原文',
        '数九归引：流行说法"《荆楚岁时记》：俗用冬至日数及九九八十一日，为寒尽" vs 维基文库《荆楚岁时记》全文九九/数九零命中——归引不成立（佚文/辑本可能），负面证据立卡',
        '"冬至大如年"出处：非遗网/三门名录/人民日报均作"民间素有/民间流传"说法 vs 无任何一手文献直读（维基文库无《清嘉录》，totalhits=0）——按 brief 红线绝不写"出自清嘉录"，记 Needs Research',
        '史记引文：LEAD"以冬至日，产气始萌"维基文库检索无命中——否证，不得引用；周正岁首改以"夏正以正月，殷正以十二月，周正以十一月"直读句支撑',
        '子月表述：新华网2015"规定有冬至的月为子月" vs 紫金山天文台"包含冬至在内的农历月固定为农历十一月"——同一历法事实两种表述，命题按 PMO 口径、差异登记',
      ],
    'conclusions':
      [
        '天文定义获三独立机构直读（非遗网/新华社2021/人民日报海外版2015）互证：黄经270°、第22个、直射南回归线、北半球白昼最短；日期区间为合成口径并显式声明',
        '冬至的科学独特点=历法锚：两冬至间隔定岁实/回归年（365.2422天，新华社专家口径）、含冬至之月=农历十一月（PMO 逐字）、周正以此为岁首（史记直读）——天文卡与历法锚卡分立',
        '贺冬与郊天形成汉-宋-明三段全直读链（后汉书礼仪志+东京梦华录卷十+帝京景物略卷二），是本轮最硬的历史成果；蔡邕"冬至阳气起君道长故贺"给出贺冬的古典礼义逻辑',
        '数九：明末帝京景物略直读确证消寒图实践+明版数九歌；新华社2021给出"从冬至日起每9天为一九"机构规则句；荆楚归引直读否定——三层证据结构完整',
        '食俗分层完成：赤豆粥六世纪直读（荆楚）为最早层；冬至圆有清代方志转引；饺子/馄饨/冬酿酒为机构层；张仲景传说单独立 legend 卡（非遗网自己用"有一种说法"措辞）',
        '三门祭冬地域卡双独立直读（非遗名录条目+人民日报海外版现场报道）四要素齐备；"700余年"为报道级断代、方志为转引级，分层登记',
        '文学卡白居易《邯郸冬至夜思家》直读成立；元稹《咏廿四气诗·冬至十一月中》因维基文库无组诗页（沿 wave1-2 结论）降为机构转引，不作文学卡主源',
        '全球表达取 Yalda 夜 Candidate（same-time+shared-nature、词条直读但无交叉源、三要素齐备、显式否定传播关系与 Mithra 词源故事）；东亚冬至传播（NAOJ/日本冬至俗）留 Needs Research',
      ],
    'human_questions':
      [
        '"冬至大如年"四字的文献首出（《清嘉录》卷十一说无法直读核验）：是否安排纸本对校或承认"民间说法无首出可考"的表述方式？',
        '汉代"放假七天"与蔡邕"迎送五日"的口径差：对外内容按哪个表述？（建议按后汉书原文"绝事"模糊表述，不写具体天数）',
        '数九归引《荆楚岁时记》的辑本源流（守山阁/说郛）是否值得专项核查，还是统一按"佚文待考"处理？',
        'legend 卡（张仲景）与食俗卡的分工表述是否清楚（机构层食俗可证 vs 起源传说无据）？对外页面呈现权重请人工裁量',
        'Yalda 卡的"家庭团聚/敬老"相似点仅有词条级来源，是否保留在 similarity 字段？（已标注待核，倾向保留但请确认）',
      ],
  }
---

# 冬至批量研究 · 第一轮执行日志

## 执行摘要

冬至（22，winter）第一轮完成：14 张知识卡（sci×2 / hist×3 / trad×3 / legend×1 / region×1 / lit×1 / glob×1 / explanation×1 + idea 不计路由）+ 11 张新 Source 卡（11 直读 + 0 纯线索；其中维基文库 6、机构 5）+ 索引更新。ihchina 专题页编号实测 **6982**（标题"冬至阳生春又来——二十四节气之冬至"，curl 直连一次成功）。本轮最有价值的研究性发现：(1) **贺冬与郊天的汉-宋-明三段全直读链**——东汉百官绝事、北宋"京师最重此节……一如年节"、明末红笺互拜，三段文献全部维基文库直读，是全库断代链最完整的节气之一；(2) **两处流行说法被直读否证**——"数九出自荆楚岁时记"（直读全文九九零命中）与"史记：以冬至日，产气始萌"（检索无命中），另有"汉代放假七天"（原文仅"绝事"、蔡邕注"迎送五日"）与"冬至大如年出自清嘉录"（维基文库无此书）两处直读缺口如实登记；(3) 帝京景物略卷二直读意外获得**明版数九歌全首**与消寒图商品化（"刻而市之"）记载。YAML 翻车两处（串内 ASCII 单引号）当场修复并全量复验通过。

## 流程记录

1. 读 brief §0-§10 与全部样例卡（sci/hist/trad/lit/glob/explanation/idea/Source×3/立春索引/大雪全套近期卡片）。
2. 情报核验：ihchina solar_details/6982 = 冬至（标题确认，2017-12-22 创建）。
3. 直读（成功 13 页）：ihchina 6982 与 project_details/15063（curl 直连）；月令七十二候集解、荊楚歲時記、史記三家註卷026、後漢書卷95、東京夢華錄卷十、帝京景物略/2、邯鄲冬至夜思家（以上 curl 走代理）；新华社2021、新华网点位2015、人民日报海外版2022三门稿、PMO问答（curl 直连）；Yalda（WebFetch ECONNRESET 后 curl 走代理成功）。直读未成：古今图书集成冬至部卷88子页（子页空）；《清嘉录》（维基文库无此书）。
4. 复用既有直读源：source-yueling-qishierhou-wikisource（重抓全页逐字摘冬至节+夏至鹿角解互见注文）、source-wikisource-jingchu-suishiji（重抓全页取冬至条+九九负面证据）、source-pmo-almanac-qa（重抓取冬至定十一月逐字）。
5. 写卡 → python YAML 全量校验（发现 2 处串内 ASCII 单引号，修复）→ batch-route 路由（本节气文件无解析错误；跳过清单仅含其他代理的 2 个小寒源卡）→ 按 §8 入包规则调状态（7 卡 in-review：sci-longitude / hist-yueling / hist-hedong / legend / region / trad-shisu + explanation 保持 draft 入 C 区）→ 写审核分节与索引。

## 12项审计（§7）

1. **Unsupported Distribution**：通过。解释层无"大部/普遍/各地/全国"；食俗句全部地域限定（北方饺子/江南赤豆粥/台州冬至圆/苏州冬酿酒）+层级标注（"机构记载""传说"）；数九歌"南北各异"为非遗网原话转述。
2. **Regional Generalization**：通过。三门卡限"三门县聚族而居村落（三镇三村）"；潮汕祭祖条目只留证据区不进命题；"南汤圆北饺子"分布概括显式标注未核验。
3. **Modern-as-Ancient**：通过。饺子食俗断代停在机构层（2015-2017），传说剥离；冬酿酒"传统的姑苏人家"按机构层措辞引用并登记断代缺口。
4. **Historical Leakage**：通过。古籍卡（三候/周正/贺冬链）无黄经、气象学等现代概念；阴阳框架标注"古典解释体系（Interpretation）"；岁实/回归年等现代表述只在 sci 卡。
5. **Scientific Leakage**：通过。农谚卡纯 tradition 层，占验谚语显式声明无科学背书；"1月最冷"滞后机制无直读源不展开；三候动物学核验缺口登记。
6. **Legend-as-Fact**：通过（且为本轮重点）。张仲景传说独立 legend 卡（低置信、机构"有一种说法"措辞、史实人物与传说断言分离）；赤豆粥"疫鬼畏赤小豆"注文解释标注传说层；三门"冬至大如年"按民间说法对待。
7. **Weak Source Inflation**：通过。检索摘要级信息（中新网700余年、新华网浙江同稿、Mehr News、人大农发学院日期口径）全部未进命题；Yalda 单词条直读也只撑 low Candidate。
8. **Search Excerpt Misuse**：通过。本轮 0 个 search-excerpt 源（Yalda 为 curl 直读、verification=unverified）；所有 search-excerpt 线索只入日志不入卡。
9. **Cross-source False Validation**：发现+处置。非遗网与新华网点位2015在"亚岁/馄饨"等段疑有同源互引，longitude 卡互证仅取"黄经270°/直射南回归线/白昼最短"三要素且与新华社2021（独立采访）三角验证；三门卡名录条目与人民日报海外版为不同性质来源（登记 vs 现场报道），断代口径分层不合并；子月/十一月两种表述不合并取 PMO。
10. **Creative-as-Fact**：通过。idea 卡带性质声明与红线标注（三候动画不得作科学解说词、三门场景须注明地域非遗身份）。
11. **Global Forced Correspondence**：通过。Yalda 卡 relationship 用枚举 same-time、三要素齐备、显式写明"平行响应不是传播关系""UNESCO 两个独立条目不构成等同"、Mithra 词源故事禁用；东亚冬至传播方向留 Needs Research 不并入。
12. **Shared Knowledge Duplication**：通过。黄道24等分/UNESCO/七十二候体系/节中气/淮南子序列/黄河起源/历法角色全部链接 02_shared；本节气卡只写特有内容（270°、三候、周正、贺冬链、数九等）；"冬至定十一月"在 sci 卡只作 PMO 逐字引用+节中气共享卡链接，不复述机制。

## 19维覆盖矩阵

| 维度 | 状态 | 说明 |
|---|---|---|
| astronomy | complete | 黄经270°/直射南回归线/白昼最短（high，三机构直读） |
| calendar | complete | 回归年锚卡（岁实+冬至定十一月 PMO 逐字）+周正岁首卡+节中气共享卡链接 |
| climate | complete | "冬至非最冷、1月最冷"入回归年锚卡（单源直读+exceptions 声明） |
| phenology | complete | 三候原文+互见注文直读（high，单直读方待校） |
| agriculture | complete | 农事+占验农谚+江苏农事版数九歌（medium，tradition 层） |
| ecology | partial | 三候动物学（麋角脱落）核验缺口；无现代物候观测卡 |
| chinese-life | complete | 贺冬链+数九+食俗+解释层覆盖"冬至大如年"生活线 |
| customs | complete | 贺冬/郊天（high）、数九消寒图（high）、三门祭冬（high）三线 |
| food | complete | 食俗五项分层卡（medium）+legend 卡分离 |
| history | complete | 周正岁首+贺冬郊天链+三候+共享淮南子/UNESCO；汉代假期与清嘉录两缺口如实登记 |
| literature-art | complete | 白居易《邯郸冬至夜思家》直读（medium）；杜甫《小至》/元稹组诗待读 |
| regional-differences | complete | 三门祭冬地域卡+食俗南北分层+黄河起源共享卡 |
| scientific-interpretation | complete | 黄经定义+回归年锚+冬夏对偶链接（夏至/三伏）三卡 |
| global-expressions | partial | Yalda Candidate（low，needs-research 路由）；东亚冬至传播留白 |
| visual-assets | missing | 无已授权素材（消寒图/圭表/冬至圆已在创意卡列需求） |
| audio-assets | missing | 同上（三候动画声音设计仅为创意线索） |
| interaction-ideas | complete | 4条创意（idea 卡） |
| references | complete | 11 新直读源+3 复用源（月令/荆楚/PMO）登记 |
| ai-research-log | complete | 本日志+审核分节 |

小计：complete 15 / partial 2 / weak 0 / missing 2（visual/audio 为全库共性缺口，非本节气特有）。

## 素材边界审计

- 配图零使用：ihchina 页图1-9（水彩冬至/三门祭冬摄影×4/消寒图×2/赤豆粥/饺子）与人民日报海外版版面图均仅作文字信息源，图片版权未清一律不引用。
- 文本引用长度：古籍引文限于冬至相关条目原文与必要注文（蔡邕独断/白虎通/韦昭注）；《帝京景物略》数九歌全首（91字，公有领域）完整引用合理；机构文摘录为定位所需短段；白居易诗 28 字完整引用（公有领域）。
- 未读内容不引：非遗网"节气养生"段、《周礼》"致天神人鬼"与大司乐圜丘条（未直读，转引级登记）、新华网2015所引元稹诗全文（转引级）、古今图书集成冬至部正文（子页空）、Mehr News Yalda 稿、中新网/新华网浙江三门稿（检索摘要级）均未进入任何卡的证据区命题。
- .batch-tmp 只写了 dongzhi- 前缀临时文件（dongzhi-ihchina-6982 / dongzhi-yueling / dongzhi-houhanshu-95 / dongzhi-shiji3-026 / dongzhi-djmhl / dongzhi-dijing-2 / dongzhi-jingchu / dongzhi-handan / dongzhi-gjts-88 / dongzhi-pmo / dongzhi-xinhua-2021 / dongzhi-xinhuanet-2015 / dongzhi-ihchina-proj15063 / dongzhi-rmrbhwb-sanmen / dongzhi-yalda 各 .html/.txt 及 dongzhi-wssearch-*.json / dongzhi-yamlcheck.py / dongzhi-route-output.txt）。

## 引擎路由表（npx tsx .batch-tmp/batch-route.mts dongzhi，2026-09-16，YAML 修正后）

```
# Routing report — dongzhi（tolerant loader）

> 跳过 2 个无法解析的文件（并行批处理半成品，非本节气问题）：
> - knowledge-base\04_sources\source-ihchina-laba-2017.md :: Unexpected scalar at node end at line 34, column 426:
> - knowledge-base\04_sources\source-people-xiaohan-dahan-2026.md :: Unexpected scalar at node end at line 34, column 207:

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| fact-solarterms-unesco-2016 | CulturalFact | system | high | A(独立直读×2) | **human-review-required** | — |
| fact-solarterms-yellow-river-origin | CulturalFact | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-huainanzi-complete-24terms | HistoricalRecord | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-solarterms-pentad-system | HistoricalRecord | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-calendar-role | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-jieqi-zhongqi | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| dongzhi-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |
| glob-dongzhi-yalda-night | GlobalExpression | global | high | C(独立直读×1) | **needs-research** | weak-source-low-confidence, global-candidate-hold |
| hist-dongzhi-hedong-jiaotian | HistoricalRecord | term | high | A(独立直读×2) | **human-review-required** | pending-primary-source |
| hist-dongzhi-zhouzheng-year-start | HistoricalRecord | term | medium | A(独立直读×3) | **auto-candidate** | — |
| hist-xiaohan-xiaohantu | HistoricalRecord | term | medium | B(独立直读×1) | **human-review-required** | pending-primary-source |
| hist-yueling-dongzhi-pentads | HistoricalRecord | term | medium | A(独立直读×1) | **human-review-required** | evidence-below-confidence |
| legend-dongzhi-zhangzhongjing-jiaozi | CulturalFact | term | high | A(独立直读×1) | **human-review-required** | pending-primary-source |
| lit-baijuyi-handan-dongzhi | CulturalFact | term | low | B(独立直读×1) | **auto-candidate** | — |
| region-dongzhi-sanmen-jidong | CulturalFact | term | medium | A(独立直读×2) | **human-review-required** | pending-primary-source |
| sci-dongzhi-longitude-270 | ScientificFact | term | medium | A(独立直读×4) | **human-review-required** | pending-primary-source |
| sci-dongzhi-shortest-day-year-anchor | ScientificFact | term | medium | A(独立直读×4) | **auto-candidate** | — |
| trad-dongzhi-nongshi | Tradition | term | medium | A(独立直读×1) | **auto-candidate** | — |
| trad-dongzhi-shijiu-xiaohantu | Tradition | term | medium | A(独立直读×3) | **auto-candidate** | — |
| trad-dongzhi-shisu-fenceng | Tradition | term | high | A(独立直读×3) | **human-review-required** | — |
| trad-xiaohan-sanjiu | Tradition | term | medium | A(独立直读×4) | **human-review-required** | pending-primary-source |

## Findings 明细

- `dongzhi-human-explanation` **explanation-gated**（major）：支撑卡或解释卡未 approved：按 Content Gate 禁止发布（Knowledge verified ≠ Explanation verified）。
- `glob-dongzhi-yalda-night` **weak-source-low-confidence**（blocker）：弱来源+低置信度的占位卡，应继续研究而非进入审核。
- `glob-dongzhi-yalda-night` **global-candidate-hold**（info）：Global Expression 处于 candidate：不构成已核实的文化对应。
- `hist-dongzhi-hedong-jiaotian` **pending-primary-source**（major）：存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。
- `hist-xiaohan-xiaohantu` **pending-primary-source**（major）：存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。
- `hist-yueling-dongzhi-pentads` **evidence-below-confidence**（major）：置信度 high 高于证据支撑（tier A，独立直读方 1）。
- `legend-dongzhi-zhangzhongjing-jiaozi` **pending-primary-source**（major）：存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。
- `region-dongzhi-sanmen-jidong` **pending-primary-source**（major）：存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。
- `sci-dongzhi-longitude-270` **pending-primary-source**（major）：存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。
- `trad-xiaohan-sanjiu` **pending-primary-source**（major）：存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。
```

注：表中另有 6 张 02_shared 共享卡（unesco/yellow-river/huainanzi/pentad-system/calendar-role/jieqi-zhongqi）同为 human-review-required，属系统级既有卡，不在本节气审核包内（沿大雪波次口径）；hist-xiaohan-xiaohantu / trad-xiaohan-sanjiu 为并行小寒代理半成品，与本节气无关。idea-dongzhi-interaction-sketches（InteractionIdea）不参与 claim 路由。本节气 13 张 claim 卡路由统计：**A 5 · B 3 · C 4 · D 1**。

## 修改记录

- 2026-09-16（第一轮）：建本日志；14 知识卡+11 源卡+索引更新；YAML 两处修复（legend-zhangzhongjing / trad-shisu-fenceng 串内 ASCII 单引号改双写）；6 卡按路由升 in-review（sci-longitude-270 / hist-yueling-pentads / hist-hedong-jiaotian / legend-zhangzhongjing / region-sanmen-jidong / trad-shisu-fenceng），HumanExplanation 与 GlobalExpression 按规则保持 draft。
