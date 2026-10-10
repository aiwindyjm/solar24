---
schema_version: '0.1.0'
id: 'research-xiaoxue-batch-log'
type: 'ResearchNote'
title: '小雪第一轮批研究 · 执行日志（2026-09-16）'
solar_terms: ['xiaoxue']
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
    'task': '按 24 节气批研究 brief 为小雪（xiaoxue，顺序20，winter）完成第一轮知识库填充：13项交付物、12项审计、路由与审核分节',
    'queries': [
      'ihchina.cn solar_details 6980（前波次情报推算小雪=6980，curl 直连 -L 读取，标题《清寒小雪前——二十四节气之小雪》确认）',
      '月令七十二候集解 小雪 十月中 雨下而為寒氣所薄 虹藏不見（维基文库全文直读，立冬后大雪前切分；另直读清明"虹始見"、立冬、大雪条作对偶与中气位证据）',
      '小雪 太阳到达黄经240度 11月22日 新华网（WebSearch+curl 直读 xinhua 2022/2019 两稿）',
      '小雪节气 并不表示一定降雪 气象 中国天气网（WebSearch；视频页未直读，未采）',
      '小雪腌菜 大雪腌肉 雪里蕻 酸菜 习俗 人民网（WebSearch+curl 直读人民日报海外版2015）',
      '维基文库 API：intitle:小雪 / 花雪隨風 / 清嘉錄（含淸变体）/ 帝京歲時紀勝 / 真州竹枝詞 / 地寒未甚 / 廣群芳譜（titles 存在性检查）',
      '维基文库直读：小雪 (戴叔倫) 作品页（全唐诗卷274）+ 文苑英華 (四庫全書本)/卷0155 小雪条（归属注与异文）',
      '燕京歲時記 十月/十二月段直读（添火、大白菜=鹽酸白菜条）',
      '日本国立天文台 二十四節気 24sekki.html（Shift-JIS 解码提取小雪行：十月中 240° 寒くなって雨が雪になる）',
      'site:ihchina.cn 小雪 project_details（非遗项目锚点排查，无命中）',
    ],
    'discovered_source_ids':
      [
        'source-ihchina-xiaoxue-feature',
        'source-xinhua-xiaoxue-2022',
        'source-xinhua-xiaoxue-2019',
        'source-people-xiaoxue-pickling-2015',
        'source-wikisource-daishulun-xiaoxue',
        'source-wikisource-wenyuan-xiaoxue',
        'source-naoj-24sekki-xiaoxue',
      ],
    'conflicts':
      [
        '任务LEAD"公历11月22-23日"与三个机构直读口径"11月22日或23日"一致，无冲突；个别年份是否可能落在21日/24日无直读依据，记入 sci 卡 exceptions 不作断言',
        '非遗网引《月令》作"小者未盛之辞"（无逗号），维基文库本作"小者，未盛之辭"——标点微异、文字实质一致，以古籍直读为准',
        '新华社2022"从南方到北方，有腌咸菜……等习俗" vs 人民日报2015"南京有谚语"——腌菜谚语的概括尺度两级并存，腌藏卡按"南京锚+南北通行口径"并列处理，不作全国断言',
        '"小雪节气是一年中下雪量最小的节气（时段）"类流行断言：本轮全部直读来源均未出现，无源不写（D 项记录）',
        '中国天气网"常年统计小雪节气是黄河流域初雪日期"来自视频页检索摘要（search-excerpt 未直读），未采入任何卡',
        '《群芳谱》"小雪气寒而将雪矣，地寒未甚而雪未大也"：仅中新社2019稿转引，维基文库无《群芳谱》（有清代增辑《广群芳谱》，未定位到该句），按媒体转引级处理不入证据主链',
      ],
    'conclusions':
      [
        '第一轮建立知识卡11张（sci×2 / hist×2 / trad×3 / lit×1 / glob×1 / idea×1 / explanation×1）、新来源7条（全部 direct-read），全部为 draft/in-review，等待人工审核',
        '高可信锚点：黄经240°与11月22日或23日（非遗网+新华社2022+中新社2019三发布方直读）、月令小雪段逐字直读（定义句+三候含注文，二候无注文为版本现象已记录）、命名原文与大雪"大者盛也"同页对偶、戴叔伦《小雪》双文本直读（全唐诗系作品页+文苑英华四库本）',
        '四张 high 卡达成基线：sci-xiaoxue-longitude-240 / hist-yueling-xiaoxue-pentads / hist-xiaoxue-naming / sci-xiaoxue-not-necessarily-snow',
        '本轮最大坑有二：①腌腊习俗古籍层完全落空（《清嘉录》《帝京岁时纪胜》《真州竹枝词引》维基文库均无书），全部依赖机构/媒体层+《燕京岁时记》十二月酸菜条的时序旁证，卡内已按南北分节+证据分级处理；②"小雪"字面诗稀缺——直读到的唯一一首即戴叔伦《小雪》，且带归属异说（《文苑英华》注"類詩作釋清晝"），已如实入卡',
        '主要证据缺口：《真州竹枝词引》原书直读、环流机制的第二机构源、初雪气候统计、小雪专属国家级非遗锚点（未发现）、三候现代物候验证',
      ],
    'human_questions':
      [
        '腌藏习俗卡的 medium 置信度是否可接受（机构层三源一致但古籍锚为转引级），还是必须等《真州竹枝词引》直读后升级？',
        'sci-xiaoxue-not-necessarily-snow 的环流机制表述仅新华社一稿口径（另有中新社"不一定下雪"互证结论但不含机制），是否需要气象局第二源？',
        '文学卡作者归属（戴叔伦/释清昼）对外表述采用"题戴叔伦（一说释清昼）"是否恰当？',
        '"小雪节气降雪量最小"类流行断言是否安排下一轮专门排查（气候数据源）？',
        '糍粑/晒鱼干/刨汤两机构来源疑同源汇编，是否需要田野/方志级证据才能保留在正式内容？',
      ],
  }
---

# 小雪第一轮批研究 · 执行日志

## 执行摘要

2026-09-16 由 AI 研究代理执行。研究问题（顶层）：**小雪是什么？由哪些可靠来源支撑？证据边界在哪里？** 本轮完成 10 个页面的直接读取（非遗网专题页6980、维基文库×4：月令/戴叔伦诗/文苑英华/燕京岁时记、新华社2022、新华网转中新社2019、人民日报海外版2015、日本国立天文台24sekki），建卡 11 张、来源 7 条（全部 direct-read）。

## 流程记录

1. **非遗网专题页定位**：依前波次情报（立冬=6979 推算）直接请求 solar_details/6980.html，curl 直连 -L 一次命中，标题《清寒小雪前——二十四节气之小雪》确认。页载创建时间 2017-11-22（"今年"=2017，交节实例：2017年11月22日=农历丁酉年十月初五）。
2. **《月令》直读**：维基文库全页拉取后按"小雪[编辑]"切分，逐字摘得定义句+三候+注文；**同页顺带直读**立冬条（"十月節"）、大雪条（"大者，盛也"）、清明条（"虹始見"注"是陰陽交會之氣"）——命名对偶、节/中气成对、虹物候对偶三组跨节气证据一次拿到，均入卡并写明页内定位。
3. **天文与科学解释交叉源**：WebSearch 定位新华社2022"节气里的中国"稿与新华网2019转中新社稿，均 curl 直读全文。两稿+非遗网构成三发布方直读（240°/11月22日或23日/第20个），且新华社稿给出"节气小雪与天气小雪没有必然联系"的完整辨析+环流机制——科学解释卡核心命题落地。
4. **腌腊习俗（本节气重点）**：古籍路径全部落空——维基文库 API 检索《清嘉錄》（含变体）、《帝京歲時紀勝》均 MISSING，《真州竹枝詞》MISSING；改读《燕京歲時記》十月/十二月段（十月无腌条，十二月"大白菜=鹽酸白菜"条作北方酸菜时序旁证，明确标注非小雪日锚）。机构层：人民日报海外版2015民俗专版（南京谚语锚+真州竹枝词引转引+杭州+包头+台湾+土家族）与新华社2022、中新社2019（北方储菜腌菜雪里红+王娟审慎引语）三稿直读，南北分节建卡。
5. **文学**：维基文库 intitle 检索"小雪"被现代判决书污染（PD-China 文本灌入），改用诗句首句"花雪隨風"命中作品页《小雪 (戴叔倫)》（全唐诗卷274，含两处异文注）；又读《文苑英華 (四庫全書本)/卷0155》同诗条，获"類詩作釋清晝"归属注与"失/蔽"异文——同托管方规则下 confidence 定 medium。"小雪字面诗稀缺"如实记录。
6. **全球表达**：NAOJ 二十四節気页 Shift-JIS 解码，小雪行"十月中 240° 寒くなって雨が雪になる"，与立冬/大雪释名构成冬季递进；建 same-time 传播关系 Candidate（沿用雨水/秋分东亚卡框架）。日本民俗层零来源如实留白。
7. **非遗项目锚点排查**：site:ihchina.cn project_details 无小雪专属项目命中——region 卡不建，地域内容进 trad 卡具名条目，D 项记录。
8. **成卡与自检**：所有新卡 id 含 xiaoxue、文件名==id、日期2026-09-16、risk/impact 必填、human_review=null；解释卡完成分布性短语逐句自查。

## 12项审计（§7）

1. **Unsupported Distribution**：通过。解释卡三层逐句自查无"大部/普遍/各地/全国"断言（习俗句均带地域锚：南京/仪征/杭州/北方/台湾嘉义/土家族）；新华社"我国大部分地区"、人民日报"家家户户"在 trad 卡中以"稿方概括措辞"归因，未采入解释卡。
2. **Regional Generalization**：通过且为本轮核心防线。腌藏卡南北分节（南方腌腊/北方储菜腌菜分列证据），claim 明写"不得合并为'中国人小雪腌肉'式的全国断言"；王娟审慎引语入卡作反方证据。
3. **Modern-as-Ancient**：通过。腌藏断代写实：当代机构口径（2015-2022）+古籍锚缺失如实声明；糍粑"祭牛神起源说"标页方转述；"电商寄腊味"现代语境不混入传统层。
4. **Historical Leakage**：通过。hist-yueling / hist-naming / lit 卡无"黄经/气象学/环流"现代概念；《月令》注文保持阴阳语汇原文；现代辨析全部指向 sci 卡分层。
5. **Scientific Leakage**：通过。古籍卡无科学倒灌；"瑞雪兆丰年"机理解释标为非遗网机构科普层，与农谚分层（trad-nongshi）。
6. **Legend-as-Fact**：通过。无传说入 fact 卡；糍粑祭牛神、土家"吃活肉"天性论均归因页方表述。
7. **Weak Source Inflation**：通过。本轮 0 张 search-excerpt Source 卡（7条全部 direct-read）；中国天气网视频页、华东师大/北京日报等仅检索摘要级信息一律未建源未入卡。
8. **Search Excerpt Misuse**：通过。同上；search-excerpt 级信息只在研究日志 conflicts 中作为"未采"记录。
9. **Cross-source False Validation**：通过。cross-checked 均基于异发布方直读互证（非遗网×新华社×中新社×人民日报海外网系）；维基文库两页（戴叔伦+文苑英华）同托管方不互证，verification 保持 unverified、卡 confidence 压 medium；非遗网与人民日报腌腊段"高度平行疑同源"已在卡内声明不充作独立交叉。
10. **Creative-as-Fact**：通过。idea 卡开头性质声明+每条依据卡与误导风险/红线（虹年历标注古典文本非观测、南北腌藏地图禁全国叙事）。
11. **Global Forced Correspondence**：通过。glob 卡三要素齐全，relationship=same-time（协议枚举值），reason 明写传播关系与"不得表述为日本自己的小雪节"；日本民俗层"本轮未获"留白而非断言。
12. **Shared Knowledge Duplication**：通过。黄道24等分/节中气/UNESCO/七十二候/淮南子序列均以 02_shared 链接引用（sci-solarterms-jieqi-zhongqi / sci-solarterms-calendar-role / fact-solarterms-unesco-2016 / hist-solarterms-pentad-system），本节气卡不复述命题。

## 19维覆盖矩阵

| 维度 | 状态 | 说明 |
|---|---|---|
| astronomy | complete | sci-xiaoxue-longitude-240（high，三发布方直读） |
| calendar | complete | "小雪，十月中"中气位引 sci-solarterms-jieqi-zhongqi + 月令卡（立冬=十月節/小雪=十月中成对直读）；2017年交节农历十月初五实例 |
| climate | complete | sci-xiaoxue-not-necessarily-snow（high，气候趋势名+环流机制+南北同节气差异） |
| phenology | complete | hist-yueling-xiaoxue-pentads（high，逐字直读+注文+清明"虹始见"对偶） |
| agriculture | complete | trad-xiaoxue-nongshi（越冬管理/冬修水利/储菜/鱼塘，四源） |
| ecology | weak | 三候现代物候验证未建卡（Needs Research） |
| chinese-life | complete | 腌藏卡+习俗卡+解释卡（储与聚的生活主题） |
| customs | complete | trad-pickling-curing（南北分节）+trad-winter-customs（糍粑/晒鱼干/刨汤） |
| food | complete | 腌菜腊肉/糍粑/鱼干/刨汤/涮羊肉条目分布于两张 trad 卡（机构汇编层，无独立饮食古籍锚） |
| history | complete | 月令卡+命名卡（含大雪对偶）+戴叔伦诗（唐）+文苑英华（北宋）+燕京岁时记（清末，旁证） |
| literature-art | complete | lit-daishulun-xiaoxue（medium，唯一字面题名诗+归属异说）；"小雪字面诗稀缺"如实记录 |
| regional-differences | partial | trad 卡内具名地点（南京/仪征/杭州/台湾嘉义/包头/土家族）；无 region 卡（未发现小雪专属国家级非遗锚点） |
| scientific-interpretation | complete | sci-not-necessarily-snow（"节气名≠天气事件"澄清+两套小雪概念区分） |
| global-expressions | complete | glob-xiaoxue-shousetsu-east-asia（Candidate，NAOJ直读+释名相承） |
| visual-assets | missing | 无已授权素材（初雪/腌腊/糍粑/水彩《小雪》图待版权研究；非遗网配图一律不用） |
| audio-assets | missing | 雪落/风声素材待授权（idea 卡已提示） |
| interaction-ideas | complete | idea-xiaoxue-interaction-sketches（3条创意含红线） |
| references | complete | 新增 7 条 Source（全 direct-read），复用 2 条既有直读源（月令、燕京岁时记，本轮重新抓取提取本节气段落） |
| ai-research-log | complete | 本日志+审核分节 |

统计：complete 15 / partial 1 / weak 1 / missing 2。

## 素材边界审计

- 视觉：非遗网页面配图（水彩画《小雪》、打糍粑、布依村寨腌腊肉等）一律不用（页面声明整理自网络）；新华社稿配图（武夷山围炉煮茶、东阳晚稻等）为版权新闻图片不使用。
- 声音：无授权素材，idea 卡列为待办。
- 文本引用：古籍引文逐字带定位（含《文苑英华》夹注与异形字说明）；新华社/中新社/人民日报海外版为版权稿件，仅短摘录并归因记者。

## 路由引擎输出（2026-09-16，`npx tsx .batch-tmp/batch-route.mts xiaoxue`，tolerant 版）

> 跳过清单仅含他节气半成品（trad-lidong-budong-jiaozi.md，非本节气问题；本节气全部文件通过解析）。首轮运行曾暴露本节气 source-people-xiaoxue-pickling-2015.md 一处 YAML 错误（串内 ASCII 单引号），已改为与原页面一致的全角引号后重跑通过。

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| glob-xiaoxue-shousetsu-east-asia | GlobalExpression | global | high | A(独立直读×1) | **human-review-required** | global-candidate-hold |
| hist-xiaoxue-naming | HistoricalRecord | term | medium | A(独立直读×2) | **human-review-required** | pending-primary-source |
| hist-yueling-xiaoxue-pentads | HistoricalRecord | term | medium | A(独立直读×2) | **auto-candidate** | — |
| lit-daishulun-xiaoxue | CulturalFact | term | low | B(独立直读×2) | **auto-candidate** | — |
| sci-xiaoxue-longitude-240 | ScientificFact | term | medium | A(独立直读×4) | **human-review-required** | pending-primary-source |
| sci-xiaoxue-not-necessarily-snow | ScientificFact | term | medium | A(独立直读×3) | **human-review-required** | pending-primary-source |
| trad-xiaoxue-nongshi | Tradition | term | medium | A(独立直读×4) | **auto-candidate** | — |
| trad-xiaoxue-pickling-curing | Tradition | term | high | A(独立直读×5) | **human-review-required** | pending-primary-source |
| trad-xiaoxue-winter-customs | Tradition | term | medium | A(独立直读×2) | **auto-candidate** | — |
| xiaoxue-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |

（引擎表中另有 6 张 02_shared 共享卡路由 human-review-required，属既有状态，不入本节气包。）

Findings 明细：

- `glob-xiaoxue-shousetsu-east-asia` **global-candidate-hold**（info）：Candidate 不构成已核实文化对应。
- `hist-xiaoxue-naming` **pending-primary-source**（major）：《群芳谱》原书未直读（媒体转引级）。
- `sci-xiaoxue-longitude-240` **pending-primary-source**（major）：GB/T 33661-2017 正文未直读。
- `sci-xiaoxue-not-necessarily-snow` **pending-primary-source**（major）：环流机制仅新华社一稿口径；初雪气候统计未直读。
- `trad-xiaoxue-pickling-curing` **pending-primary-source**（major）：《真州竹枝词引》《清嘉录》等古籍未直读。
- `xiaoxue-human-explanation` **explanation-gated**（major）：支撑卡未 approved，禁止发布。

入包处置：hist-xiaoxue-naming / sci-xiaoxue-longitude-240 / sci-xiaoxue-not-necessarily-snow / trad-xiaoxue-pickling-curing → status 改 in-review；xiaoxue-human-explanation / glob-xiaoxue-shousetsu-east-asia → 保持 draft；4 张 auto-candidate 保持 draft。

## Needs Research（汇总）

1. 《真州竹枝词引》原书直读（腌菜"寒菜"条的清人一手文本）；《清嘉录》卷十、《帝京岁时纪胜》十月条的腌腊记载（图书馆/古籍库途径）。
2. "小雪节气是黄河流域初雪常见时段"的气候统计文本版机构源（中国天气网视频页未直读）；"小雪节气降雪量最小"类断言的数据排查。
3. 环流机制（东亚经向环流/西伯利亚低槽）的气象机构第二直读源。
4. 《群芳谱》（明·王象晋）原书直读核对"小雪气寒而将雪矣"句；《广群芳谱·天时谱》平行文本。
5. 小雪专属国家级非遗锚点排查（本轮 site:ihchina.cn 无命中；土家族杀年猪、各地腌菜技艺是否在国家级/省级名录待查）。
6. 三候现代物候观测（虹的可见期、初雪日期；中国物候观测网）。
7. 小雪文学谱系：全唐诗/全宋诗系统内其他"小雪"题名诗；戴叔伦/释清昼归属的版本学考证；戴叔伦生卒年复核。
8. 日本小雪民俗实践（俳句季语"小雪"、农事历）与朝鲜半岛소설条目权威源直读。
9. 东北酸菜、雪里蕻腌制的方志级地域核验；糍粑"祭牛神"文献源头；台湾乌鱼汛渔业志。
10. 《中国天文年历》小雪逐年交节时刻入库；GB/T 33661-2017 正文直读。
11. 视觉/声音素材授权研究（初雪、腌腊场景、雪落声）。

## 规范自检

- 未编造来源、引文或检索记录；未读原文一律标注；全部 human_review=null；无 approved 状态；无自动发布。
- 只新建/编辑本节气文件（03_notes×11、04_sources×7、07_research×2）与 01_terms/20_小雪.md 索引；未触碰 02_topics/02_shared/04_sources/README/scripts/packages/docs/其他节气/本 brief。
- .batch-tmp 临时文件均以 xiaoxue- 前缀命名；本日志本身也待人工复核。

[[01_terms/20_小雪|小雪索引]] · [[07_research/sections/review-xiaoxue|小雪审核分节]] · [[04_sources/README|来源库]]
