---
schema_version: '0.1.0'
id: 'research-lixia-batch-log'
type: 'ResearchNote'
title: '立夏批量研究 · 第一轮执行日志（2026-09-16）'
solar_terms: ['lixia']
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
    'task': '按 24 节气批量研究规范完成立夏（07，summer）第一轮研究：天文/日期表述冲突/物候与四立命名/迎夏礼制/秤人与传说分层/食俗/地域非遗锚点/农事/文学/全球表达/解释层/创意层',
    'queries': [
      '立夏 太阳到达黄经45度 每年5月5日至7日 新华网 OR 中国政府网 OR 中国天气网',
      '中国天气网 OR 气象局 立夏 太阳黄经45度 夏季开始',
      'site:ihchina.cn 半山立夏习俗',
      'chinadaily 半山立夏节 第十二届 2023 杭州 拱墅',
      '立夏称人 由来 传说 阿斗 刘禅 三国 司马昭',
      'Beltane May Day beginning of summer tradition May 1 Gaelic',
      '维基文库API：srsearch=清嘉錄 / 帝京景物略 / 趙友直 / 小池 楊萬里 / 立夏 陸遊 / 四時天氣促相催',
      '直接URL直读：ihchina.cn/solar_details/46.html（302→Article/Index/detail?id=9999，直连curl 504，web_reader 读成）；ihchina.cn/project_details/23867.html（直连curl读成）；zh.wikisource.org/wiki/月令七十二候集解、/禮記/月令、/帝京景物略/2、/荊楚歲時記、/小池（curl走代理）；news.cn/tech/20260505/...（WebFetch）；tj.weather.com.cn/tqyw/05/3462166.shtml（WebFetch）；paper.people.com.cn/rmrb/pc/content/202505/03/content_30071111.html（WebFetch）；zj.chinadaily.com.cn/a/202305/07/WS64574227...（WebFetch）',
    ],
    'discovered_source_ids':
      [
        'source-ihchina-lixia-feature',
        'source-ihchina-lixia-banshan',
        'source-chinadaily-lixia-banshan',
        'source-xinhua-lixia-2026',
        'source-weather-com-cn-lixia',
        'source-people-lixia-chengren',
        'source-wikisource-lixia-liji-yueling',
        'source-wikisource-lixia-dijing',
        'source-wikisource-lixia-xiaochi',
        'source-wikipedia-beltane',
        'source-chinaqw-lixia-adou',
      ],
    'conflicts':
      [
        '立夏交节日期三种表述并存：新华网2026稿"通常只在公历5月4日、5日、6日之间变动"（引紫金山天文台年历口径） vs 中国天气网"一般在每年公历的5月5日或6日" vs 流行"每年5月5日至7日"（仅百科类搜索摘要，无直读机构来源）——命题采直读口径，"5月5-7日"记入 sci-lixia-longitude-45 的 exceptions 待人工裁定',
        '"立夏称人"溯源传说两版本互斥：孙夫人称阿斗（人民日报直读）vs 司马昭称阿斗（中国侨网，search-excerpt）——按 legend 层并列收录不选边，不作起源结论',
        '半山立夏节届数与首届年份：直读两源只写"第十二届/第十二个年头"，检索摘要的"2012年首届"无直读支持，未采信；非遗网项目页（2021国家级扩展项目）与中国日报（2016 UNESCO组成部分）分别表述两套名录身份，互补不冲突但易被混写',
      ],
    'conclusions':
      [
        '第一轮建立知识卡13张（4 high：sci-lixia-longitude-45 / hist-yueling-lixia-pentads / sci-lixia-vs-meteorological-summer / region-lixia-banshan；hist-lixia-yingxia-qibing 亦为 high）、Source卡11张（9直读+2检索摘要级）；引用共享卡6张全部仅链接不复述',
        '四立命名互证完成：立夏定义句"立字解見春"显式回指立春条"立，建始也……立夏、秋、冬同"，两卡互读坐实四立共用命名逻辑（跨节气文本证据，立春卡互链）',
        '非遗网 solar_details 编号确认：立夏=46.html（302跳转 Article/Index/detail?id=9999；直连 curl 对跳转页 504，web_reader 备用读成——读取路径与谷雨页不同，供后续波次）',
        '主要证据缺口：立夏题名诗（陆游《立夏》全诗、赵友直底本）、《清嘉录》《苏州府志》原书直读、食俗断代（疰夏文献史）、GB/T 与 QX/T 标准正文、三候现代物候观测、Beltane 词条直读、东亚立夏同名传播形态',
      ],
    'human_questions':
      [
        '交节日期表述采信哪一口径（"5月5日或6日" / "5月4-6日" / 维持流行"5月5-7日"待核）？建议以《中国天文年历》逐年数据为准后统一',
        '《清嘉录》《苏州府志》立夏条人工直读（方志/四库数据库），确认称人与食俗的清代原文及地域范围',
        '立夏题名诗选目：陆游《立夏》（"槐柳阴初密"篇）全诗与系年核验，或补赵友直《立夏》底本',
        '半山立夏节首届年份（"2012"说）与UNESCO申报文本中半山的具体位置，需官方档案核验',
        'GB/T 33661-2017 与 QX/T 152-2012 正文直读（继承共享待办，适用全部节气）',
      ],
  }
---

# 立夏批量研究 · 第一轮执行日志

## 执行摘要

2026-09-16 由 AI 研究代理执行（brief：`.batch-tmp/AGENT-BRIEF.md`）。顶层问题：**立夏是什么？天文定义、官方礼制、民间习俗与传说的证据边界在哪里？**

## 流程记录

1. **样例对齐**：读 brief + 立春 9 张样例卡 + 源卡 3 张 + 立春索引，并参考谷雨波次日志/审核分节格式。
2. **直读获取**（9 个页面/文本直接读取）：
   - 维基文库《月令七十二候集解》全页（curl 走代理，立夏节逐字：定义句+三候+注文；同页小满节作"苦菜秀"归属对照）；
   - 维基文库《禮記/月令》（curl 走代理，孟夏之月条：迎夏南郊+物候四项+农政）；
   - 维基文库《帝京景物略/卷2》（curl 走代理，立夏启冰赐冰条，全卷唯一命中）；
   - 维基文库《荊楚歲時記》全页（curl 走代理，**负面结果**：无"立夏"字样）；
   - 维基文库《小池》作品页（curl 走代理，全诗四句）；
   - 非遗网立夏专题 solar_details/46.html（直连 curl 与跳转页均 504，web_reader 备用读成全文）；
   - 非遗网半山立夏项目页 project_details/23867.html（直连 curl 读成，名录信息栏+四类活动清单）；
   - 新华网 2026-05-05 立夏测算稿（WebFetch）；中国天气网天津站立夏稿（WebFetch）；人民日报 2025-05-03 称人考据稿（WebFetch）；中国日报网 2023 第十二届半山立夏节报道（WebFetch）。
3. **检索但未直读**（search-excerpt）：Wikipedia "Beltane"（Candidate 卡线索源）、中国侨网 2008 称人传说稿（司马昭版线索源）。
4. **成卡**：13 知识卡 + 11 源卡；传说/古籍/机构汇编/名录页/媒体分层严格。
5. **路由**：运行 `npx tsx .batch-tmp/batch-route.mts lixia`（tolerant 版，表见下），按入包规则定 status；修复本批次 1 处 YAML 单引号转义后复跑成功。

## 关键发现与纠错

- **交节日期"5月5-7日"未获直读支持**：任务卡 LEAD 的"公历5月5-7日"在两个直读机构来源中均未出现（天气网"5月5日或6日"；新华网甚至含 5月4日）。按"宁可 missing 不可 fabricated"，命题采直读口径，流行三段式记入 exceptions 冲突项。这是本轮最重要的 LEAD 纠错。
- **非遗网立夏专题页称人段无三国故事**：页面以"避免疰夏"框架叙述；三国阿斗故事只在媒体层（人民日报孙夫人版直读、中国侨网司马昭版线索级），且两版互斥——legend 卡按多版本并存处理，绝不与清代文献层（转引级）混排。
- **《荆楚岁时记》无立夏条**（全页直读检索无命中）：立夏习俗不可上溯六世纪荆楚文献，作秤人卡负面证据。
- **四立命名逻辑拿到文本互证**：立夏定义句"立字解見春"回指立春"立，建始也……立夏、秋、冬同"，两卡互链（跨节气引用不复制命题）。
- **半山项目页读取路径**：project_details/23867.html 直连 curl 可读；solar_details/46.html 跳转页对直连 curl 也 504（与谷雨页不同），web_reader 为有效备选。

## 12 项审计（§7）

| # | 审计项 | 结论 |
|---|---|---|
| 1 | Unsupported Distribution | 通过。吃蛋"很多地方"、气温"全国大部分地区18—20℃"、入夏"福州至南岭一线以南"均按机构原口径归属（非遗网/中国天气网表述），卡内标注"机构概括，未附分区统计"；解释层分布句全部带"按气象机构口径/以南方为主"归属，limitations 登记 |
| 2 | Regional Generalization | 通过。半山卡严格限杭州拱墅（四要素齐+两直读源）；"三新"按南京/苏州/常熟三城实例并列并声明"不是统一定义"；无"中国人立夏都称人/吃蛋"式泛化 |
| 3 | Modern-as-Ancient | 通过。半山当代节庆（民间发起→区政府支持扩为节日）以当届报道口径写；娘娘庙南宋、泥猫南宋800年均标"相传/断言未给出处"；检索摘要"2012年首届"未采信 |
| 4 | Historical Leakage | 通过。UNESCO（2016）/国家级扩展项目（2021）两套现代制度身份只在 region 卡与共享卡分列；未混入古籍叙事 |
| 5 | Scientific Leakage | 通过。古籍卡（月令三候/礼记月令/帝京景物略）命题无黄经/气象学表述；22℃标准只在 sci 卡；农谚留 tradition 卡并声明不作气候断言 |
| 6 | **Legend-as-Fact（重点样本）** | 通过+finding。三国称人溯源独立 legend 卡（两版本并列、互斥性写入命题、人民日报"传说不同于史实"句内证据）；非遗网无三国故事的负面记录入源卡；解释层显式标注"那是传说不是史实"；全链无"起源于三国"式 fact 表述 |
| 7 | Weak Source Inflation | 通过。glob 卡唯一由 search-excerpt 支撑且 confidence=low；legend 卡的司马昭版线索仅作版本旁证不进命题主句；无 low 源支撑 high/medium 卡 |
| 8 | Search Excerpt Misuse | 通过。两张 search-excerpt 源 verification 均 unverified；引擎未报 excerpt-as-read |
| 9 | Cross-source False Validation | 通过。非遗网≠中国天气网≠新华网（三家独立机构）；《清嘉录》《苏州府志》引文如实标注"转引自人民日报"不冒充直读；同源转载未计入交叉（人民日报与人民网未并置） |
| 10 | Creative-as-Fact | 通过。idea 卡开头性质声明，每条标依据卡与红线（含"严禁配起源于三国叙事""不得写成科普正确答案"） |
| 11 | Global Forced Correspondence | 通过。Beltane 三要素齐备，relationship=seasonal-experience，全文无未否定的"对应/等同"，明写"不是外国版立夏、不是两套历法的对应刻度"；引擎仅 global-candidate-hold(info)+insufficient-evidence(blocker) |
| 12 | Shared Knowledge Duplication | 通过。UNESCO/淮南子序列/七十二候体系/节气中气/历法角色/黄河起源均仅链接（02_shared 各卡）；四立命名用立春卡互链不复制命题；引擎未报 shared-duplicate |

## 19 维覆盖矩阵

| 维度 | 状态 | 依据/缺口 |
|---|---|---|
| astronomy | complete | sci-lixia-longitude-45（high，双机构直读+PMO口径；日期三表述冲突已登记） |
| calendar | partial | 链接 sci-solarterms-calendar-role；立夏逐年交节时刻无权威数据源（《中国天文年历》未入库） |
| climate | complete | sci-lixia-vs-meteorological-summer（high；22℃标准/前汛期/机构概括南北差异） |
| phenology | partial | 古典三候 high（《礼记·月令》平行文本互证）；现代物候观测缺失 |
| agriculture | complete | trad-lixia-nongshi（"立夏看夏"+农谚群，tradition 层） |
| ecology | missing | 三候物种（蝼蝈/蚯蚓/王瓜）现代生态观测未建卡 |
| chinese-life | complete | 迎夏礼制赐冰+秤人+食俗三卡覆盖礼制/身体/餐桌 |
| customs | complete | 半山（high）+秤人+食俗+传说四卡分层 |
| food | complete | trad-lixia-dan-sanxin（蛋/斗蛋/三新/乌米饭，地域实例并列） |
| history | complete | 礼记月令/帝京景物略/月令三候/清代文献（转引级）四层 |
| literature-art | partial | 《小池》直读（medium，初夏物候诗边界明确）；立夏题名诗（陆游/赵友直）无直读源，Needs Research |
| regional-differences | partial | 半山一地双源；其他地域（闽湘赣立夏食俗、北方立夏实践）缺直读源 |
| scientific-interpretation | complete | 黄经定义+两套夏天两卡 |
| global-expressions | partial | 1 条 Candidate（Beltane，线索级）；东亚"立夏"同名传播形态未成条 |
| visual-assets | missing | 无已授权素材（小荷尖角/大木秤/冰盏意象候选未启动） |
| audio-assets | missing | 蝼蝈鸣/蛙鸣素材未研究 |
| interaction-ideas | complete | idea 卡 4 条（含传说红线与隐私审查提示） |
| references | partial | 新增11源（9直读）；GB/T、QX/T 正文与《清嘉录》原书缺 |
| ai-research-log | complete | 本日志+审核分节 |

小计：complete 9 / partial 6 / missing 3 / weak 0（N-A 0）。

## 素材边界审计

非遗网立夏专题页已直读但**本轮未建卡**的素材（原文已存 [[04_sources/source-ihchina-lixia-feature|源卡]]，防重复劳动）：

1. **节气养生段**（"暑易入心"等中医表述、饮食宜清淡）——无医学来源，不采信、不建卡（沿谷雨波次先例）。
2. **气候概述段**（"人们习惯上认为立夏之后温度会升高，暑热将至，雷雨增多"）——已在 sci-lixia-vs-meteorological-summer 卡以更权威的天气网/新华网口径覆盖，非遗网版未单独建卡。
3. **农谚群尾部**（"农时节令到立夏，查补齐全把苗挖"等五条）——已入农事卡证据区，逐条地域未标明的警示保留。
4. **新华网稿文首陆游"槐柳阴初密，帘栊暑尚微"**——文内引用未标出处，全诗未直读，只作文学卡 Needs Research 线索，不入卡命题。

## 路由引擎输出（2026-09-16，全文粘贴）

```
# Routing report — lixia（tolerant loader）

> 跳过 2 个无法解析的文件（并行批处理半成品，非本节气问题）：
> - knowledge-base\03_notes\glob-xiaoman-may-rain-grain-fill.md :: [
> - knowledge-base\04_sources\source-xinhua-xiaoman-2024.md :: Unexpected scalar at node end at line 32, column 171:

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| fact-solarterms-unesco-2016 | CulturalFact | system | high | A(独立直读×2) | **human-review-required** | — |
| fact-solarterms-yellow-river-origin | CulturalFact | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-huainanzi-complete-24terms | HistoricalRecord | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-solarterms-pentad-system | HistoricalRecord | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-calendar-role | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-jieqi-zhongqi | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| glob-lixia-beltane | GlobalExpression | global | high | D(独立直读×0) | **needs-research** | insufficient-evidence, global-candidate-hold |
| hist-lixia-yingxia-qibing | HistoricalRecord | term | medium | A(独立直读×2) | **auto-candidate** | — |
| hist-yueling-lixia-pentads | HistoricalRecord | term | medium | A(独立直读×3) | **auto-candidate** | — |
| legend-lixia-chengren-adou | CulturalFact | term | high | B(独立直读×1) | **human-review-required** | pending-primary-source |
| lit-lixia-yangwanli-xiaochi | CulturalFact | term | low | B(独立直读×1) | **auto-candidate** | — |
| lixia-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |
| region-lixia-banshan | RegionalExpression | regional | medium | A(独立直读×2) | **auto-candidate** | — |
| sci-lixia-longitude-45 | ScientificFact | term | medium | A(独立直读×5) | **human-review-required** | pending-primary-source |
| sci-lixia-vs-meteorological-summer | ScientificFact | term | medium | A(独立直读×3) | **human-review-required** | pending-primary-source |
| trad-lixia-chengren | Tradition | term | medium | A(独立直读×3) | **auto-candidate** | — |
| trad-lixia-dan-sanxin | Tradition | term | medium | A(独立直读×2) | **auto-candidate** | — |
| trad-lixia-nongshi | Tradition | term | medium | A(独立直读×2) | **auto-candidate** | — |

## Findings 明细

- `glob-lixia-beltane` **insufficient-evidence**（blocker）：没有正分证据来源（仅线索级或无来源）。
- `glob-lixia-beltane` **global-candidate-hold**（info）：Global Expression 处于 candidate：不构成已核实的文化对应。
- `legend-lixia-chengren-adou` **pending-primary-source**（major）：存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。
- `lixia-human-explanation` **explanation-gated**（major）：支撑卡或解释卡未 approved：按 Content Gate 禁止发布（Knowledge verified ≠ Explanation verified）。
- `sci-lixia-longitude-45` **pending-primary-source**（major）：存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。
- `sci-lixia-vs-meteorological-summer` **pending-primary-source**（major）：存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。
```

入包处置（§8 规则）：human-review-required 的 claim 卡 status=in-review（legend-lixia-chengren-adou、sci-lixia-longitude-45、sci-lixia-vs-meteorological-summer）；HumanExplanation（lixia-human-explanation）保持 draft、GlobalExpression（glob-lixia-beltane）保持 draft；表中 6 张 02_shared 共享卡同为 human-review-required，属系统级既有卡，不入本节气审核包。

> 运行注记：首次运行时本节气 source-chinadaily-lixia-banshan 卡一处 ASCII 单引号未转义导致 YAML 解析失败（连带 region 卡证据计数降为直读×1），已修复（单引号按规范写成两个）并复跑成功，上表为终版。跳过清单中的 xiaoman 两文件系并行批次其他节气半成品，与本节气 24 个文件无关，按铁律未代改。

## 修改记录

- 2026-09-16（第一轮建库）：建 13 知识卡+11 源卡，索引更新（补 calendar 维度与 links）；运行路由引擎（tolerant 版）并按入包规则定 status；完成 12 项审计与 19 维覆盖矩阵；修复本批次 1 处 YAML 单引号转义并复验。

## 规范自检

- 未编造来源、引文或检索记录；未读原文一律标注（清嘉录/苏州府志=转引级；Beltane/侨网=search-excerpt；GB/T、QX/T=未读）；全部 human_review=null；无 approved 状态；仅写本节气文件（新建 24 文件 id 均含 lixia，编辑仅 01_terms/07_立夏.md）；未运行 pnpm/git 命令；YAML 24/24 解析通过；Wiki 链接 181 条全部指向已存在文件或本轮新建卡（日志与审核分节建卡后复查 0 断裂）。

[[01_terms/07_立夏|立夏索引]] · [[07_research/sections/review-lixia|审核分节]] · [[04_sources/README|来源库]] · [[07_research/batch-24-solar-terms-plan|批量计划]]
