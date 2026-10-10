---
schema_version: '0.1.0'
id: 'research-xiazhi-batch-log'
type: 'ResearchNote'
title: '夏至批量研究 · 第一轮执行日志（2026-09-16）'
solar_terms: ['xiazhi']
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
    'task': '按 24 节气批量研究规范完成夏至（10，summer）第一轮研究：天文（本节气天文锚最重）/物候/礼制/食俗/农事/文学/全球表达/解释层/创意层',
    'queries': [
      'curl 直连：ihchina.cn/solar_details/49.html（结果为班春劝农——编号假设失败）；solar_terms.html 枚举全表定位夏至=6970.html；6970.html（两次 504 后 webReader 成功）；solar_name.html 与 /p/2.html（查非遗锚点）',
      '维基文库API：srsearch=帝京歲時紀勝 / 帝京歲時 / 清嘉錄 / 夏至避暑北池 / 封禪書 / 方澤 夏至日 祭 / intitle:大清典則例 卷077（題名正字"㑹"经API解析）',
      '维基文库直读页：月令七十二候集解（重抓全页切夏至节）；燕京歲時記（重抓全页取冬至条）；史記/卷028；欽定大清㑹典則例_(四庫全書本)/卷077；夏至避暑北池；欽定古今圖書集成/曆象彙編/歲功典/夏至部（目录页）；春明夢餘錄_(四庫全書本)/卷16（空页）',
      'WebSearch：夏至 太阳黄经90° 6月21日 新华网 OR 中国天气网 OR 中国气象局；Midsummer St John''s Eve June 23 24 Europe bonfire；Inti Raymi June 24 Cusco winter solstice southern hemisphere',
      'WebFetch 直读：weather.com.cn/tianjin/tqyw/06/3473896.shtml（成功）；news.cn/20260620/…（成功，星空有约真假最稿）；xinhuanet.com/politics/2021-06/19/c_1127579121.htm（返回空文本，未重试成）',
    ],
    'discovered_source_ids':
      [
        'source-ihchina-xiazhi-feature',
        'source-weathercn-xiazhi-feature',
        'source-xinhua-xiazhi-2026',
        'source-wikisource-shiji-fengshan',
        'source-wikisource-qinghuidian-fangze',
        'source-wikisource-xiazhi-beichi',
        'source-wikisource-tushu-xiazhi-bu',
        'source-wikipedia-midsummer',
        'source-wikipedia-intiraymi',
      ],
    'conflicts':
      [
        '非遗网引《史记·封禅书》"夏至日，祭地，皆用乐舞"为转写：经卷28直读原文作"夏日至，祀天於南郊……夏至日，祭地祗。皆用樂舞"——引用一律回原书，差异已在源卡与祭地卡登记（非错误冲突，属机构转写校准）',
        '三候第二候：《月令七十二候集解》维基文库本正文"蜩始鳴"（自注《月令》註疏本作"蟬始鳴"），非遗网/中国天气网均作"蝉始鸣"——古已有之的异文，两读法并存，卡片按"蜩始鸣（蝉始鸣）"处理',
        '"冬至馄饨夏至面"（清末京师谚原文作"餛飩"）vs 今日流行语"冬至饺子夏至面"——传播漂移已作谱系记录，不算来源冲突',
        '极值措辞：中国天气网"北半球的日照时间最长" vs 非遗网"北半球的白昼最长，且越往北越长"——兼容口径，按各页原文引用不合并改写；赤道适用性两页均未论述，留待核',
    ],
    'conclusions':
      [
        '第一轮建立知识卡10张（含解释层/创意层；4 high：sci-xiazhi-longitude-90 / sci-xiazhi-longest-day / hist-yueling-xiazhi-pentads / hist-xiazhi-diji-sacrifice）、Source卡9张（7直读+2检索摘要级）；引用共享卡2张（sci-solarterms-jieqi-zhongqi / fact-solarterms-unesco-2016），全部仅链接不复述',
        '礼制谱系是本轮最强证据链：史记（西汉追记周制）→古今图书集成著录明皇甫汸方丘诗题→清会典"著為定例"官书原文，三层直读；同时以燕京岁时记按语"夏至陰氣起，故不賀"确立"国家祀典有、民间贺节无"的双层结构，防止"古人夏至都过节祭地"泛化',
        '重要编号情报：非遗网 solar_details 在立夏（46）后切换为 6968+ 编号——小满6968、芒种6969、夏至6970、小暑6971、大暑6972、立秋6973……大寒6984（solar_terms.html 全表枚举确认），此前波次"按序递增"假设仅适用于 40-46',
        '夏至无专属国家级非遗锚点：solar_name 名录 12 项（九华立春祭/班春劝农/石阡说春/苗族赶秋/安仁赶分社/壮族霜降节/三门祭冬/内乡打春牛/梅源芒种开犁节/送大暑船/半山立夏习俗）逐一核对，无夏至项——地域卡按 brief #5 的条件规则不做，地域素材（山东/绍兴/无锡/漠河）入 trad/sci 卡并标单源',
        '主要证据缺口：地坛建置文献（春明夢餘錄卷16维基文库为空页）、帝京岁时纪胜/清嘉录（维基文库无书）、唐宋祭地中间环节、三候现代物候观测、午后雷阵雨分区统计、欧洲仲夏/Inti Raymi 直读源',
    ],
    'human_questions':
      [
        '"蜩始鸣（蝉始鸣）"双读法在对外文案中的定版口径（建议主用原书正文"蜩始鸣"括注"蝉始鸣"）',
        'lit-xiazhi-beichi 的 confidence：单发布方（维基文库）双页互证是否可升回 high（引擎口径判同发布方，已按先例降 medium）',
        '地坛=方泽坛对应关系与建置文献：《日下旧闻考》/《大清会典图》/地坛管理方官方资料，建议人工浏览器或点校本核读',
        '"夏至尝黍""夏至曾是民间节日（夏节）"等流行叙事是否立项追证（当前零一手文献）',
        '真太阳时/平太阳时机制是否补天文台口径独立源后即可对外（当前新华社单源直读）',
        'GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）',
      ],
  }
---

# 夏至批量研究 · 第一轮执行日志

## 执行摘要

2026-09-16 由 AI 研究代理执行（brief：`.batch-tmp/AGENT-BRIEF.md`）。顶层问题：**夏至是什么？天文极值、国家祀典、民间食俗的证据边界在哪里？**

## 流程记录

1. **样例对齐**：读立春 9 张样例卡+2 源卡+索引，仿写结构。
2. **定位本节气专题页**：brief 情报"49.html"实测为《班春劝农》（302 至项目页）——编号假设失效；经 solar_terms.html 全表枚举确认 **夏至=6970.html**，并取得 6968+ 新编号段全表（入 conclusions，供后续小暑~大寒波次）。
3. **直读抓取**（7 成功 / 1 空页 / 1 空文本，详见素材边界）。
4. **建卡**：Source 9 张 → 知识卡 8 张 → 解释层/创意层 2 张。
5. **引擎路由**（容错版）：两轮。第一轮 lit 卡触发 fake-cross-check + evidence-below-confidence（两源同托管方），修正 confidence high→medium 后 findings 清零；终版路由见下表。

## 路由表（引擎输出全文粘贴，tolerant 版 2026-09-16 终跑）

> 跳过 2 个无法解析的文件（并行批处理半成品，非本节气问题）：
> - knowledge-base\04_sources\source-chinadaily-lixia-banshan.md :: Unexpected scalar at node end
> - knowledge-base\04_sources\source-xinhua-xiaoman-2024.md :: Unexpected scalar at node end
> （跳过清单不含本节气文件）

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| fact-solarterms-unesco-2016 | CulturalFact | system | high | A(独立直读×2) | **human-review-required** | — |
| fact-solarterms-yellow-river-origin | CulturalFact | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-huainanzi-complete-24terms | HistoricalRecord | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-solarterms-pentad-system | HistoricalRecord | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-calendar-role | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-jieqi-zhongqi | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| glob-xiazhi-midsummer | GlobalExpression | global | high | D(独立直读×0) | **needs-research** | insufficient-evidence, global-candidate-hold |
| hist-xiazhi-diji-sacrifice | HistoricalRecord | term | medium | A(独立直读×3) | **human-review-required** | pending-primary-source |
| hist-yueling-xiazhi-pentads | HistoricalRecord | term | medium | A(独立直读×2) | **auto-candidate** | — |
| lit-xiazhi-beichi | CulturalFact | term | low | A(独立直读×1) | **auto-candidate** | — |
| sci-xiazhi-longest-day | ScientificFact | term | medium | A(独立直读×3) | **auto-candidate** | — |
| sci-xiazhi-longitude-90 | ScientificFact | term | medium | A(独立直读×3) | **auto-candidate** | — |
| trad-xiazhi-mian | Tradition | term | medium | A(独立直读×3) | **auto-candidate** | — |
| trad-xiazhi-nongshi | Tradition | term | medium | A(独立直读×3) | **auto-candidate** | — |
| xiazhi-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |

Findings 明细（终版）：
- `glob-xiazhi-midsummer` **insufficient-evidence**（blocker）：没有正分证据来源（仅线索级或无来源）。
- `glob-xiazhi-midsummer` **global-candidate-hold**（info）：Global Expression 处于 candidate：不构成已核实的文化对应。
- `hist-xiazhi-diji-sacrifice` **pending-primary-source**（major）：存在未直读的一手/标准来源，需人工核读后才能 verified。
- `xiazhi-human-explanation` **explanation-gated**（major）：支撑卡或解释卡未 approved：按 Content Gate 禁止发布。

路由统计（本节气 10 张可路由卡）：**A 6 · B 1 · C 1 · D 1**；idea-xiazhi-interaction-sketches 不在引擎路由范围（InteractionIdea 非 claim 卡）。6 张共享卡 human-review-required 属系统级既有卡，不在本包。状态处理：hist-xiazhi-diji-sacrifice（human-review）→ in-review；其余按规则保持 draft。

## 12 项审计（逐项结论）

1. **Unsupported Distribution** — 通过。解释层与食俗卡有意规避"各地/普遍/全国"级短语；"多地面食"仅以"清末北京文献+当代机构汇编口径"双限定表述。
2. **Regional Generalization** — 通过+finding。山东/绍兴/无锡/漠河条目全部出非遗网单源汇编，卡片逐条标注"未逐一方志核验"；漠河极昼另获新华社稿印证（17小时）。
3. **Modern-as-Ancient** — 通过+finding。"冬至**饺子**夏至面"（今语）与"冬至**餛飩**，夏至麵"（清末原文）的漂移已作谱系记录，未把今语写成古谚；"夏至节"仅按机构稿概述级提及。
4. **Historical Leakage** — 通过。古籍卡（三候/祭地）无"黄经/气象学/昼长数据"等现代概念；韦应物诗卡的诗句解读与天文卡互链但分层。
5. **Scientific Leakage** — 通过。三候注文"夏至一陰生"标注为古典解释体系；农谚卡 science（机构机制表述）/tradition（谚语）分账，未互相升级。
6. **Legend-as-Fact** — 通过。本轮无传说入卡；"夏至尝黍""夏至曾是重大节日（夏节）"等流行叙事零一手文献，未入任何命题（Needs Research）。
7. **Weak Source Inflation** — 通过+finding。lit-xiazhi-beichi 首轮被引擎判 fake-cross-check（两源同为维基文库托管）+evidence-below-confidence，已降级 medium 并复核清零——本轮自纠样本。
8. **Search Excerpt Misuse** — 通过。仅 glob 卡用 search-excerpt 源（confidence low、candidate、verification unverified）；两张 Wikipedia 源卡 access 均如实标 search-excerpt。
9. **Cross-source False Validation** — 通过+finding。非遗网对《史记》的转写（"夏至日，祭地"）未用来冒充交叉验证，而是回原书直读并登记差异；"蜩/蝉"异文同理（原书自注即承认，非遗网采"蝉"读法）。
10. **Creative-as-Fact** — 通过。idea 卡开头性质声明，4 条创意全部标依据卡与误导风险/红线。
11. **Global Forced Correspondence** — 通过。glob 卡三要素齐全，relationship=nearby-time，明确"不是传播关系、不是同一节日"；Inti Raymi 作对照线索强调**同日相反半球**，反"全球仲夏=夏至"合并叙事。
12. **Shared Knowledge Duplication** — 通过。黄道24等分/UNESCO/中气置闰/七十二候体系/淮南子序列均链接共享卡，本节气卡内无复述命题。

## 19 维覆盖矩阵

| 维度 | 状态 | 支撑 |
|---|---|---|
| astronomy | complete | sci-xiazhi-longitude-90（high）、sci-xiazhi-longest-day（high） |
| calendar | partial | sci-solarterms-jieqi-zhongqi（shared，五月中气）、trad-xiazhi-nongshi（三伏入口，机制留小暑） |
| climate | partial | sci-xiazhi-longest-day（非最热+热量收支）；午后雷阵雨/梅雨仅机构概述，Needs Research |
| phenology | complete | hist-yueling-xiazhi-pentads（high，含异文） |
| agriculture | partial | trad-xiazhi-nongshi（medium） |
| ecology | weak | 三候卡挂 ecology 维度；现代物候/鹿角蝉半夏观测未建卡 |
| chinese-life | partial | trad-xiazhi-mian、hist-xiazhi-diji-sacrifice |
| customs | partial | hist-xiazhi-diji-sacrifice（礼制）、非遗页"夏至节"概述 |
| food | complete | trad-xiazhi-mian（medium，文献+汇编分层） |
| history | complete | hist-xiazhi-diji-sacrifice（high，三层直读谱系）+ shared 淮南子 |
| literature-art | complete | lit-xiazhi-beichi（medium）+古今图书集成夏至诗序列线索 |
| regional-differences | weak | 无专属非遗锚点（名录12项核对）；地域素材单源入 trad/sci 卡 |
| scientific-interpretation | complete | sci 两张（黄经/真假最） |
| global-expressions | partial | glob-xiazhi-midsummer（Candidate，search-excerpt）+ Inti Raymi 对照线索 |
| visual-assets | missing | 无已授权素材（方泽坛/蝉/半夏图像待版权研究） |
| audio-assets | missing | "蜩始鸣"音景候选待授权 |
| interaction-ideas | complete | idea-xiazhi-interaction-sketches（4条） |
| references | complete | 新源9张（7直读+2线索）+复用2张 |
| ai-research-log | complete | 本日志 |

统计：complete 9 / partial 6 / weak 2 / missing 2（N-A 0）。

## 素材边界审计

- **逐字来源**：本节气全部引文（月令夏至节、燕京岁时记冬至条、史记封禅书周官引文、清会典顺治十四年谕、韦应物全诗、古今图书集成夏至部目录、非遗网/中国天气网/新华社关键句）均来自 2026-09-16 实际抓取页面，引文保留繁体原样、标点情况在源卡注明。
- **读取失败如实登记**：《春明夢餘錄》卷16（维基文库空页）、xinhuanet 2021稿（WebFetch 空返回，未重试成）、《帝京歲時紀勝》《清嘉錄》（维基文库 API 无命中）、solar_details/49.html（编号假设失败）。
- **零使用**：检索摘要未进入任何命题正文；配图零使用；ctext.org 未访问（前波次已知拦截）。
- **仅用自有 slug 前缀临时文件**（.batch-tmp/xiazhi-*）。

## 修改记录

- 2026-09-16：全量建卡（Source 9、知识卡 8、解释层 1、创意层 1）；引擎两轮路由，lit 卡降级自纠；本日志、审核分节、索引更新一次成形。
