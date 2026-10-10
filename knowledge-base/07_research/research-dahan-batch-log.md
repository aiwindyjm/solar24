---
schema_version: '0.1.0'
id: 'research-dahan-batch-log'
type: 'ResearchNote'
title: '大寒批量研究 · 第一轮执行日志（2026-09-16）'
solar_terms: ['dahan']
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
    'task': '按 24 节气批量研究规范完成大寒（24，winter，最后一个节气）第一轮研究：天文定义与循环闭环（黄经300°+最后一个中气）/月令直读（含"解見前"结构发现与雞乳异文）/命名（寒气之逆极，两层转引链）/小寒大寒谁更冷（命名与统计错位，本节气知识锚）/尾牙日期锚辨析（农历十二月十六 vs 节气日，重点卡）/农事农谚/食俗地域标本/文学双卡（陆游直读+元稹报纸转录）/全球表达（日本大寒与寒中修行 Candidate）/解释层/创意层',
    'queries': [
      'ihchina 编号确认：curl 直连 -L solar_details/6984.html，页面标题"岁有大寒知——二十四节气之大寒"命中（brief 预计编号正确；本节气编号=6984，供后续波次）',
      'WebSearch：大寒 节气 太阳到达黄经300° 1月20日 新华网 OR 中国天气网 OR 中国气象局（命中新华网专题导语，WebFetch 直读成功）',
      '维基文库直读（curl 走代理 127.0.0.1:7897）：月令七十二候集解（全页抓取切大寒节+小寒节，"解見前"所指条目一并直读）；劎南詩槀（四庫全書本）卷02（API 搜索"大寒出江陵西门"定位，全诗直读）',
      'WebSearch：尾牙 农历十二月十六 土地公 闽南 台湾 习俗 新华网 OR 人民网 OR 中国新闻网（命中人民日报海外版2016-01-19第07版"二十四节气·大寒"专版；curl 直连抓取专版四篇中的民俗篇+物候篇全文）',
      'WebSearch：小寒比大寒更冷 气象数据 全国平均气温 中国天气网 OR 中国气象局（命中中国天气网2023-01-20数据稿，WebFetch 直读成功，1991-2020年-5.1℃/-4.5℃数据）',
      'curl 走代理：NAOJ こよみ用語解説 24sekki 页（Shift-JIS 解码，大寒行"十二月中 300° 冷気が極まって"与小寒行"寒の入り"直读）',
      'WebSearch：寒中水泳 寒修行 大寒 神社 水行 日本 冬の行事（多社寺活动页摘要，建 search-excerpt 线索源）',
    ],
    'discovered_source_ids':
      [
        'source-ihchina-dahan-feature',
        'source-xinhua-dahan-topic',
        'source-rmrbhwb-dahan-2016',
        'source-weathercn-dahan-2023',
        'source-naoj-24sekki-dahan',
        'source-wikisource-jiannan-shigao-dahan',
        'source-kanchu-misogi-leads',
      ],
    'conflicts':
      [
        '同源转载链（本轮最重要发现）：非遗网大寒专题（创建2018-01-19）与人民日报海外版大寒专版（出版2016-01-19）在尾牙段/捉田鼠段/开篇谚语"大寒年年有，不在三九在四九"处高度同文（仅"农历二月二/二月二"级微差）——两页疑似同一素材链，尾牙/捉田鼠/农谚相关命题按单源对待，trad 卡 confidence 封顶 medium',
        '首候录文：维基文库《月令》"雞乳"（两机构转录同作"鸡乳"）vs 项目线索与部分现代出版物流传"鸡始乳"——以直读为准，异文登记待校勘',
        '"最冷"归属：非遗网概说"是大部分地区一年中最冷的时期" vs 人民日报物候篇"按气象资料，中国大部分地区都是小寒前后温度最低" vs 中国天气网1991-2020统计"小寒-5.1℃/大寒-4.5℃"——命名观念与统计口径的张力立 sci 卡（错位命题），不做裁定',
        '温差数值口径：人民日报物候篇"大寒比小寒高1℃—2℃"（无统计区间）vs 中国天气网"上升0.6℃"（1991-2020）——两源方向一致数值不同，分卡各自保留不合并',
        '日期宽度："1月20日前后"（三机构直读）vs"1月19-21日"（百度百科等检索摘要级）——claim 采用直读口径',
    ],
    'conclusions':
      [
        '天文定义获四个独立机构直读（ihchina/新华网/人民日报海外版/NAOJ 跨语言）互证：黄经300°、1月20日前后、第24个/最后一个；"节气轮回下一个是立春"（ihchina 原文）支持循环闭环表述',
        '"大寒是腊月的代表节气（即中气）"（人民日报物候篇直读）为 calendar 维度提供本节气专属锚点：最后一个中气、下一中气为来年雨水——与共享卡 sci-solarterms-jieqi-zhongqi 链接不重复',
        '《月令》大寒条"解見前"结构发现：命名逻辑写在小寒条（"月初寒尚小，故云。月半則大矣"），大寒条仅"十二月中"身份+三候——命名卡据此分层（一手直读/授时通考转引/农谚汇编）',
        '小寒大寒谁更冷（命名与统计错位）为本节气知识锚：两独立机构直读（人民日报2016+中国天气网2023带统计区间）方向一致，high；"南方冷在大寒区域相对更多"保留源文限定',
        '尾牙卡按四要素建卡，核心是日期锚辨析（农历十二月十六属做牙阴历体系 vs 大寒属黄经太阳历体系）与时段重叠表述（人民日报直读"大寒至立春……有时甚至连春节也处于这一节气中"）；现代企业年会分层无直读源，留 Needs Research 不入事实',
        '食俗地域标本卡：糯米饭（广东，人民日报详文+非遗网佛山瓦锅）、南京鸡汤"一九一只鸡"、消寒糕（老北京，单源线索级、宁缺毋滥）、安庆春卷（单句单源）',
        '文学双卡：陆游《大寒出江陵西門》维基文库四庫本直读（同托管方规则 confidence 封顶 medium，逺/乆/㸃异体字校读登记）；元稹《咏廿四气诗·大寒十二月中》获人民日报海外版全诗转录（报纸直读、非古籍直读，wave1-2 已确认维基文库无组诗页，归属与校勘待核）',
        '全球表达取日本大寒与寒中修行 Candidate：历法层 NAOJ 直读（300°/十二月中/释名同构）+实践层 search-excerpt（寒中禊/寒修行/大寒当日设定待直读）；relationship=same-time 且 reason 区分"历法传播"与"实践在地再造"两条线，三要素齐备',
        '无本节气专属国家级非遗项目页发现（尾牙/做牙未检得 project_details 锚点）——region 卡未建，Needs Research 挂账',
      ],
    'human_questions':
      [
        '非遗网-人民日报同源转载链的认定（尾牙/捉田鼠/农谚段高度同文）是否成立？若成立，同类"机构页+央媒专版"组合在后续波次应默认降权为单源吗？',
        '尾牙卡 risk=high 的定性与呈现：日期锚辨析是否需要在大寒对外内容中显式出现，还是仅作内部知识层？',
        '元稹组诗报纸转录本可否作为 lit 卡证据层长期存在，还是必须升级为古籍直读后才可进入对外内容（当前卡内已标"据人民日报海外版2016年转录"）？',
        '"大寒最冷"流行叙述与气象统计的张力卡（sci-dahan-vs-xiaohan-cold）与小寒侧（另一波次）的归属协调：谁更冷命题两侧共建时的互链规则？',
        '小寒侧（23）与冬至侧（22）由并行代理处理中，"小寒大寒"并称谚语（"小寒大寒，无风自寒""小寒不如大寒寒"）的归属与互引需要跨波次约定',
      ],
  }
---

# 大寒批量研究 · 第一轮执行日志

## 执行摘要

大寒（24，winter，最后一个节气）第一轮完成：12 张知识卡（sci×2 / hist×2 / trad×3 / lit×2 / glob×1 / idea×1 / explanation×1）+ 7 张新 Source 卡（6 直读 + 1 线索）+ 索引更新。ihchina 专题页编号实测 **6984**（标题"岁有大寒知——二十四节气之大寒"，curl 直连一次成功；至此 40-46 与 6969-6984 两段编号链全部贯通）。五个研究性发现最有价值：(1) 非遗网页与人民日报文系**同源转载链**（尾牙/捉田鼠/农谚段高度同文，创建日期同为1月19日相隔两年）——已按单源降权，是本轮最重要的防伪交叉发现；(2)《月令》大寒条"解見前"结构：命名逻辑在小寒条，大寒条只有身份+三候；(3) 首候直读作"雞乳"，与流传的"鸡始乳"存在异文；(4) "大寒最冷"命名观念与1991-2020年统计（小寒-5.1℃/大寒-4.5℃）错位，构成"名字大≠更冷"的知识锚；(5) 人民日报海外版2016专版物候篇全诗转录元稹《咏廿四气诗·大寒十二月中》，为组诗在维基文库缺页（wave1-2 结论）情况下提供了报纸层文本源。YAML 无翻车（单引号规避+写后 python 全量复验通过）。

## 流程记录

1. 读 brief §0-§10 与全部样例卡（sci/hist/trad/lit/glob/explanation/idea/Source×3/立春索引）+ daxue 波次日志与审核分节（最近 winter 参照）。
2. 情报核验：ihchina solar_details/6984 = 大寒（标题确认，2018-01-19 创建）。
3. 直读（成功 9 页）：ihchina 6984（curl 直连）；月令七十二候集解（curl 代理全页，切大寒节+小寒节）；劎南詩槀四庫本卷02（curl 代理）；人民日报海外版大寒专版民俗篇+物候篇（curl 直连，另浏览同版"大寒过了就是年"/《元沙院》两篇）；NAOJ 24sekki 页（curl 代理，Shift-JIS）；新华网大寒专题导语、中国天气网2023数据稿（WebFetch）。检索摘要级：百度百科、台湾农试所、周到新闻、福建日报、お宮キッズ、各社寺寒中修行活动页。
4. 复用既有直读源：source-yueling-qishierhou-wikisource（重抓全页、逐字摘大寒节与小寒节"解見前"所指）。
5. 写卡（12 知识卡+7 源卡）→ python YAML 全量校验 → 首跑 batch-route（tolerant 版）→ 按 §8 入包规则核状态 → 写审核分节与索引。

## 12项审计（§7）

1. **Unsupported Distribution**：通过。解释层无"大部/普遍/各地/全国"独立断言——"全国平均气温低点在小寒"系带统计区间的机构源背书表述；"南方部分地区"沿用源文限定；"闽南、台湾等地"为尾牙卡地域锚。
2. **Regional Generalization**：通过。尾牙卡地域限"中国福建沿海、台湾等地"；食俗卡逐条地域限定（广东/南京/老北京/安庆）；捉田鼠限"广东岭南"；农谚明确"流传地域未标明"。
3. **Modern-as-Ancient**：通过。尾牙卡显式写"做牙体系的古籍谱系本轮未直读，'自古如此'不可写"；食俗卡消寒糕单源线索级并注明方志未检得；企业年会定为"现代商业再造、无直读源不入事实"。
4. **Historical Leakage**：通过。三候卡/命名卡无现代概念倒灌（黄经/气象学表述只在 sci 卡）；"上形于小寒"释读异文登记；马氏"乳在立春節"说标注为古典解释体系。
5. **Scientific Leakage**：通过。农谚卡（trad）无农学机制内容，占验逻辑标"民间知识、非现代气候学结论"；雪的丰年机制明确指向大雪侧科学卡不混入；食俗功效表述划入传统解释层。
6. **Legend-as-Fact**：通过。尾牙"鸡头朝谁解雇谁"保留媒体原"据说"标记并标注俗说层；祭灶灶王爷叙事未建卡（属腊月/祭灶谱系，非本节气命题）。
7. **Weak Source Inflation**：通过。检索摘要级信息（1月19-21日、三九-5.14℃、台湾尾牙宴社会学研究、社寺寒修行详情）全部降入 exceptions/待核/Needs Research，未撑任何卡命题。
8. **Search Excerpt Misuse**：通过。唯一 search-excerpt 源（source-kanchu-misogi-leads）verification=unverified，仅支撑 low 的 Candidate 卡；元稹诗文本明确标"报纸转录本"层级而非古籍直读。
9. **Cross-source False Validation**：发现+处置（本轮核心成果）。非遗网与人民日报海外版疑似同源转载链（尾牙/捉田鼠/农谚段高度同文）——两源在重叠段不构成独立互证，trad-dahan-weiya/nongshi/food 全部按单源对待、confidence 封顶 medium，两源卡正文均登记警示；300°/日期两机构页与新华网/NAOJ 为独立链，sci 卡 high 成立。另：人民日报物候篇与中国天气网在气温结论上为两独立表述（口径不同未合并）。
10. **Creative-as-Fact**：通过。idea 卡带性质声明与误导风险标注（轮回渲染禁令、三候"传统物候记载"标注、双轨时间轴的地域限定标签要求、温度工具的数据源依赖）。
11. **Global Forced Correspondence**：通过。寒中修行卡三要素齐备、relationship 用协议枚举 same-time、reason 显式区分"历法传播"与"实践在地再造"、difference 含"中国大寒无对应全国性冷水修行习俗"；开篇禁令"不得写成日本版大寒节气习俗"。
12. **Shared Knowledge Duplication**：通过。黄道24等分/UNESCO/七十二候体系/节中气/淮南子序列/黄河起源全部链接引用（02_shared），本节气卡不复述命题；"最后一个中气、下一中气为雨水"为本节气专属日历事实（有人民日报直读锚），以链接+专属事实方式呈现不越界。

## 19维覆盖矩阵

| 维度 | 状态 | 说明 |
|---|---|---|
| astronomy | complete | 黄经300°/1月20日前后/第24个，四独立机构直读（high） |
| calendar | complete | 大寒=腊月中气/最后一个中气/下一中气雨水（人民日报直读+共享卡链接；本节气有专属 calendar 锚点，较 daxue 的 partial 提升） |
| climate | complete | 命名与统计错位（-5.1℃/-4.5℃/南北分区，high） |
| phenology | complete | 三候原文+注文直读（high，"雞乳"异文登记；单直读方待校） |
| agriculture | complete | 积肥堆肥/田间管理/捉田鼠+农谚12条（medium） |
| ecology | partial | 捉田鼠（岭南生态治理）与三候动物信号入卡；现代物候观测未建卡 |
| chinese-life | complete | 尾牙（日期锚辨析）/食俗/农事/解释层四线覆盖岁末生活 |
| customs | complete | 尾牙四要素卡（medium·单源封顶）+祭灶/除夕仅作时段背景不建卡 |
| food | complete | 糯米饭/鸡汤/消寒糕/春卷地域标本卡（medium；消寒糕单源线索级） |
| history | complete | 命名卡（转引链分层）+三候卡+1914改名卡互链+共享淮南子/UNESCO |
| literature-art | complete | 陆游直读（medium）+元稹报纸转录（medium）；《元沙院》诗登记未建卡 |
| regional-differences | complete | 尾牙（闽台）/食俗（粤/宁/京/皖）/捉田鼠（岭南）/南北冷差四组对照+黄河起源共享卡 |
| scientific-interpretation | complete | 错位卡+黄经卡两线（high×2） |
| global-expressions | partial | 寒中修行 Candidate（low，needs-research 预期路由）；NAOJ 历法层直读 |
| visual-assets | missing | 无已授权素材（创意卡已列需求清单） |
| audio-assets | missing | 同上（全库共性缺口） |
| interaction-ideas | complete | 4条创意（idea 卡，含备选） |
| references | complete | 7 新源（6直读+1线索）+复用源登记（月令/GB/T/PMO 等） |
| ai-research-log | complete | 本日志+审核分节 |

小计：complete 15 / partial 2 / weak 0 / missing 2（visual/audio 为全库共性缺口）。

## 素材边界审计

- 配图零使用：ihchina 页图1-11（字体设计/瑞香/雪乡/尾牙祭/腊八童谣图等）仅作文字信息源，图片版权未清，一律不引用；两页均自述"部分图文内容来自网络"。
- 文本引用长度：古籍引文限于大寒节+小寒节原文与必要注文（月令）；陆游诗56字（公有领域）全诗引用合理；元稹诗40字为报纸转录本，引一句入解释层、全诗入 lit 卡证据区并标层级；人民日报/非遗网摘录为定位所需短段。
- 未读内容不引：人民日报专版另两篇（"大寒过了就是年"/《元沙院》）仅浏览未建卡；ihchina"节气养生"段中医内容未入事实卡；社寺寒修行各活动页、台湾尾牙宴社会学研究、百度百科1月19-21日、三九-5.14℃数据均未进入任何卡的证据区。
- .batch-tmp 只写了 dahan- 前缀临时文件（dahan-extract.py / dahan-ihchina-6984 / dahan-yueling / dahan-luyou / dahan-naoj / dahan-rmrbhwb-* / dahan-wssearch-luyou.json 各 .html/.txt）。

## 引擎路由表（npx tsx .batch-tmp/batch-route.mts dahan，2026-09-16，YAML 全量校验后首跑）

```
# Routing report — dahan（tolerant loader）

> 跳过 4 个无法解析的文件（并行批处理半成品，非本节气问题）：
> - knowledge-base\03_notes\legend-dongzhi-zhangzhongjing-jiaozi.md :: Unexpected scalar at node end at line 24, column 68:
> - knowledge-base\03_notes\trad-dongzhi-shisu-fenceng.md :: Unexpected scalar at node end at line 25, column 187:
> - knowledge-base\04_sources\source-ihchina-laba-2017.md :: Unexpected scalar at node end at line 34, column 426:
> - knowledge-base\04_sources\source-people-xiaohan-dahan-2026.md :: Unexpected scalar at node end at line 34, column 207:

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| dahan-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |
| glob-dahan-kanchu-shugen-japan | GlobalExpression | global | high | A(独立直读×1) | **human-review-required** | global-candidate-hold |
| hist-dahan-naming | HistoricalRecord | term | medium | A(独立直读×4) | **human-review-required** | pending-primary-source |
| hist-yueling-dahan-pentads | HistoricalRecord | term | medium | A(独立直读×3) | **auto-candidate** | — |
| lit-luyou-dahan-jiangling | CulturalFact | term | low | B(独立直读×1) | **auto-candidate** | — |
| lit-yuanzhen-dahan-shierzhong | CulturalFact | term | medium | A(独立直读×1) | **auto-candidate** | — |
| sci-dahan-longitude-300 | ScientificFact | term | medium | A(独立直读×5) | **human-review-required** | pending-primary-source |
| sci-dahan-vs-xiaohan-cold | ScientificFact | term | medium | A(独立直读×3) | **auto-candidate** | — |
| trad-dahan-food | Tradition | term | medium | A(独立直读×2) | **auto-candidate** | — |
| trad-dahan-nongshi | Tradition | term | medium | A(独立直读×2) | **auto-candidate** | — |
| trad-dahan-weiya | Tradition | term | high | A(独立直读×2) | **human-review-required** | pending-primary-source |

## Findings 明细

- `dahan-human-explanation` **explanation-gated**（major）：支撑卡或解释卡未 approved：按 Content Gate 禁止发布（Knowledge verified ≠ Explanation verified）。
- `glob-dahan-kanchu-shugen-japan` **global-candidate-hold**（info）：Global Expression 处于 candidate：不构成已核实的文化对应。
- `hist-dahan-naming` **pending-primary-source**（major）：存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。
- `sci-dahan-longitude-300` **pending-primary-source**（major）：存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。
- `trad-dahan-weiya` **pending-primary-source**（major）：存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。
```

注1：另有 6 张 02_shared 共享卡（unesco/yellow-river/huainanzi/pentad-system/calendar-role/jieqi-zhongqi）同为 human-review-required，属系统级既有卡，不在本节气审核包内（沿处暑/大雪波次口径）。idea-dahan-interaction-sketches（InteractionIdea）不参与 claim 路由。
注2：引擎计"独立直读"时不识别同源转载链——trad-dahan-weiya/nongshi/food 的 A(独立直读×2) 在卡内已按"非遗网与人民日报疑似同源"降权为单源对待，人工复核时以卡内警示为准。
注3：入包处置：human-review-required 的 claim 卡中 hist-dahan-naming、sci-dahan-longitude-300、trad-dahan-weiya 状态改 in-review；dahan-human-explanation（HumanExplanation）与 glob-dahan-kanchu-shugen-japan（GlobalExpression）按规则保持 draft；auto-candidate 6 卡保持 draft（hist-yueling-dahan-pentads 曾预置 in-review，按实际路由回调 draft，见该卡修改记录）。

## 修改记录

- 2026-09-16（第一轮）：建本日志；12 知识卡+7 源卡+索引更新；同源转载链发现并全卡降权处置。
- 2026-09-16（路由）：粘贴路由表；按入包规则 3 卡升 in-review（hist-dahan-naming / sci-dahan-longitude-300 / trad-dahan-weiya），hist-yueling-dahan-pentads 回调 draft。
