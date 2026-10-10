---
schema_version: '0.1.0'
id: 'research-hanlu-batch-log'
type: 'ResearchNote'
title: '寒露批量研究 · 第一轮执行日志（2026-09-16）'
solar_terms: ['hanlu']
season: 'autumn'
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
    'task': '按 24 节气批量研究规范完成寒露（17，autumn）第一轮研究：天文定义/三候主宾注文与转化叙事（本节气知识锚）/命名对偶/由凉转寒气候层/重阳双锚之辨/种麦谚地域版图/习俗食俗地域限定/白居易《池上》/日本かんろ全球表达/解释层/创意层',
    'queries':
      [
        'ihchina：curl -sL 直连 https://www.ihchina.cn/solar_details/6977.html（按 §10 预计编号试探，一次命中；页面标题"气收天地广——二十四节气之寒露"确认 6977=寒露）',
        '维基文库（curl 走代理）：月令七十二候集解全页（切寒露节三段注文+白露节"鸿雁来"对照段）；荊楚歲時記全页（切九月九日条含杜公瞻注）；燕京歲時記全页（切重陽/花糕/九花山子条）；API srsearch="寒露零 白居易" → 池上_(白居易) 作品页全文直读',
        '机构稿（curl 直连）：news.cn/politics/2022-10/07/c_1129053970.htm（新华社2022寒露稿）；news.cn/science/2021-10/06/c_1127932546.htm（新华社2021寒露稿）；sard.ruc.edu.cn/essjq/faad49f476374d81b7cfeb9b21b2b705.htm（人大农业与农村发展学院"今天是秋分"，取小麦播期段）',
        'NAOJ（curl 走代理，Shift-JIS 解码）：eco.mtk.nao.ac.jp/koyomi/faq/24sekki.html（寒露かんろ条+白露/霜降对照）',
        'WebSearch：寒露 黄经195° 新华网（定位两篇新华稿URL）；寒露 种麦 黄淮 农谚 "秋分早霜降迟"（定位人大页URL；检索摘要只用于定位，未入卡为证据）；site:ihchina.cn 寒露 项目（非遗锚点排查：无寒露专属 project_details 页，仅二十四节气整体项目与已读专题页——region 卡必做条件未触发）',
      ],
    'discovered_source_ids':
      [
        'source-ihchina-hanlu-feature',
        'source-xinhua-hanlu-2022',
        'source-xinhua-hanlu-2021',
        'source-ruc-agri-qiufen-wheat',
        'source-naoj-24sekki-hanlu',
        'source-wikisource-baijuyi-chishang',
      ],
    'conflicts':
      [
        '公历日期范围两系：非遗网"公历10月8日或9日" vs 新华社2021"每年公历的10月7日、8日或9日"/2022"公历每年10月7日至9日"——两机构口径并见，未获逐年《中国天文年历》裁决，按并流传本登记于 sci-hanlu-longitude-195',
        '新华社2021/2022两稿定义段句式高度平行（"当太阳到达黄经195度时为寒露之始"）且均发自天津——疑共享通稿模板，两稿按一个独立发布方（新华社）计，跨源印证不重复计数（源卡警示）',
        '非遗网三候今译"菊花普遍开放"与古籍注"草木皆華于陽，獨菊華于陰"口径不同（现代白话 vs 五行解释）——按古今分层登记于 pentads 卡，不判冲突',
        'LEAD 防幻觉核对：brief 线索"露寒欲凝"式命名概括未见于月令直读原文（原文为"露氣寒冷，將凝結也"）——卡内以直读原文为准；"袅袅凉风动"直读原文作"褭褭"（异体字），已在文学卡标注',
      ],
    'conclusions':
      [
        '第一轮建立笔记11张（9知识卡+解释层+创意层）与Source卡6张（全部direct-read，其中5张cross-checked、1张unverified）；复用已有直读源5个（月令/荆楚/燕京/GB-T/PMO引用级），全部只引用不复制命题',
        '本节气知识锚成立：①三候"鴻鴈來賓"注文的主宾语义（仲秋先至為主/季秋後至為賓）与白露"鴻鴈來"构成雁行先后两批，逐字直读；②"雀入大水為蛤"注文自证为古典转化叙事（"此飛物化為潛物也"，引《國語》）；③命名对偶（白露"露凝而白"→寒露"露氣寒冷將凝結"→霜降）跨卡成立；④重阳与寒露双日期锚之辨（荆楚九月九日条+燕京重阳条直读，历法机制引共享卡）',
        'solar_details 编号：6977=寒露 确认（"气收天地广"专题，创建2017-10-09），延续 6968+ 递增段；霜降波次试探起点 6978',
        '习俗地域版图（直读源明标）：斗蟋蟀（北京、杭州等地）、秋钓边（南方）、菊花酒（一些地区，重阳锚）、寒露茶（老南京）；种麦谚三组（华北/河南陕西关中/鄂湘赣闽，人大页明标）；芝麻与蟹按机构养生建议层处理，宁缺不立食俗命题',
        '非遗锚点排查：非遗网寒露专题习俗节未挂任何国家级非遗项目，site 检索亦无寒露专属 project_details 页（登高/赏菊系重阳锚，不属寒露）——region 卡"有锚点必做"条件未触发，本轮不建',
        '文学卡成立：白居易《池上》全诗直读（维基文库单发布方，medium 封顶，同名异诗警示）；元稹《咏廿四气诗》组诗维基文库无页（wave1 已确认），未寻替代组诗',
        '全球表达走 NAOJ 机构直读（雨水/秋分先例）：かんろ=九月節/195°/冷露释名三项跨语言与中国口径一致；民俗实践层零直读，Candidate 保持',
        '主要证据缺口：GB/T 33661-2017 正文（继承全节气待办）、三候现代物候验证（雁类分批迁徙/菊花花期）、斗蟋蟀与寒露茶断代文献、重阳寒露逐年相对位置核算、日期范围两系裁决、七十二候日本承用层',
      ],
    'human_questions':
      [
        '日期范围两系（非遗网"10月8日或9日" vs 新华"10月7日至9日"）对外主用哪版（建议主用新华两稿的7-9日，括注非遗网口径）',
        '"二十四节气中第一个带寒字的节气"（新华社2021独家表述）是否采信入正式内容（依节气名序列成立，建议引语层使用）',
        '燕京岁时记重阳登高地名单（天宁寺/陶然亭/西山八刹等）是否可作寒露模块的地域素材——属重阳锚内容，需先定双锚呈现口径',
        '斗蟋蟀/秋钓边/寒露茶三项非遗网单源条目的第二源检索优先级（方志/茶业文献/蟋蟀谱系）',
        '机构养生建议层（芝麻/蟹/润燥食物）的对外呈现边界：完全不呈现，还是标注"当代机构养生建议"保留',
        'GB/T 33661-2017 正文直读（继承待办，适用全部节气定义）',
      ],
  }
---

# 寒露批量研究 · 第一轮执行日志

## 执行摘要

2026-09-16 由 AI 研究代理执行（brief：`.batch-tmp/AGENT-BRIEF.md`）。顶层问题：**寒露是什么？同样是露，为什么白露之后还要一个"寒露"？"鸿雁来宾"的"宾"字在说什么？重阳节是寒露的习俗吗？**

## 流程记录

1. **样例对齐**：读 brief + 立春 9 张样例卡 + 白露波次全套（索引/日志/审核分节/命名卡/黄经卡/三候卡）+ 秋分 glob 卡与 NAOJ 源卡（东亚先例），仿写结构。
2. **非遗网定位（顺利）**：按 §10 情报直取 6977 → 一次命中，标题"气收天地广——二十四节气之寒露"，curl 直连成功。
3. **古籍直读（维基文库，curl 走代理）**：月令七十二候集解寒露节三段注文+白露"鸿雁来"对照段；荆楚岁时记九月九日条（含杜公瞻注引《续齐谐记》桓景传说）；燕京岁时记重阳/花糕/九花山子条（清末北京登高地名单）；白居易《池上》作品页全文（API 搜索"寒露零 白居易"定位）。
4. **机构稿直读（curl 直连）**：新华社2022（定义+由凉转寒+菊花+养生）、新华社2021（定义+第一个带寒字+遍地冷露+三候+脚不露）、人大农学院"今天是秋分"（小麦播期南北两套谚+气候变暖推迟+《四民月令》转引）。
5. **NAOJ 直读（走代理，Shift-JIS）**：二十四節気一览秋表（寒露かんろ=九月節195°"秋が深まり野草に冷たい露がむすぶ"+白露/霜降对照）。
6. **建卡与引擎**：11 笔记 + 6 源卡 + 索引更新。首跑即无本节气翻车项（跳过清单仅他节气半成品 trad-lidong）；trad-hanlu-nongshi 因 exceptions 含"《四民月令》原书未直读"判 pending-primary-source（预期内，如实保留），按 §8 升 in-review。无二跑修正。

## 12项审计（§7）

1. **Unsupported Distribution**：发现+已处理——"我国大部分地区"级表述全部为机构稿原文逐字引用并标注口径（新华社"我国大部分地区气温下降速度逐渐加快"、非遗网"我国大部分地区已进入秋季"）；解释层唯一分布句由 sci-hanlu-cooling-transition 同域命题背书（分句级共现：大部分+气温）；无自行发明的分布断言。
2. **Regional Generalization**：通过——种麦谚按人大页明标三组（华北/河南陕西关中/鄂湘赣闽）登记，非遗网谚群无地域标注者整体明示"不作地域外推"；习俗条目地域逐条标注（北京杭州等地/南方/一些地区/老南京/淮北）。
3. **Modern-as-Ancient**：通过——重阳节俗全部锚定古籍九月九日条（六世纪+清末），无"自古/起源于X代"式断言；斗蟋蟀断代明示未考（"南宋贾似道"类流行说法未直读不采）；养生层明示为当代机构建议。
4. **Historical Leakage**：通过——三张 HistoricalRecord（三候/命名/重阳）claim 均无黄经/气象学/天文学概念词（重阳卡双锚表述用"太阳位置/公历10月上旬"措辞）；黄经卡不载古典内容；古今分层互相链接不混排。
5. **Scientific Leakage**：通过——"菊有黄华"注文五行解释（季秋土旺色黄）只在古籍卡登记并标注解释层；sci 卡命题只含机构气候口径与机制引用；"长寿酒""养肝明目"等功效表述明示为页面原文照录、不作科学背书。
6. **Legend-as-Fact**：通过——桓景《续齐谐记》故事按传说层登记（六朝志怪，杜公瞻注引述时即俗传溯源）；"雀入大水为蛤"按古典转化叙事登记（注文"此飛物化為潛物也"自证文本性质，非遗网今译"以为是雀鸟变成的"同口径）；解释层沿用"古籍的转化叙事（不是物候观察）"口径。
7. **Weak Source Inflation**：发现+已处理——新华社2021/2022两稿同发布方且定义段句式平行，按一个独立方计（源卡互链警示）；非遗网汇编页整体降权（自述网络汇编，农谚习俗未逐一标源）；人大页《四民月令》引文为转引、隔离照录；芝麻食俗无地域锚宁缺不立。
8. **Search Excerpt Misuse**：通过——本轮零 search-excerpt 来源；两次 WebSearch 均只用于定位 URL（新华稿/人大页），摘要内容未入任何卡为证据；glob 卡用 NAOJ 机构直读而非检索摘要。
9. **Cross-source False Validation**：发现+已处理——新华社两稿与非遗网润燥食物清单高度重合，按"同域科普口径一致"表述、不作独立互证；白居易诗仅维基文库单发布方（verification=unverified，confidence 封顶 medium）；黄经195°的独立交叉为三个发布方（中国艺术研究院×新华社×国立天文台，跨语言）。
10. **Creative-as-Fact**：通过——idea 卡三条全带性质声明+依据卡+红线（主宾注文不得写成鸟类学结论/三部曲不得写成物理实验/双锚演示不得暗示重阳=寒露，数据依赖缺口登记）。
11. **Global Forced Correspondence**：通过——glob 卡三要素经引擎 stripNegated 校验通过（无未否定的"等同/等于/相同/完全对应/同一个节日/同源发明"）；"外国版寒露节"禁令与"不是平行发明"明示入卡；same-time 枚举值合法。
12. **Shared Knowledge Duplication**：通过——黄道24等分/节气阳历属性与置闰机制/UNESCO/七十二候体系/黄河流域起源/《淮南子》序列全部链接 02_shared 卡；本节气卡内不复述系统级命题（引语级短句均标注出处）。

## 19维覆盖矩阵

| 维度 | 状态 | 支撑卡 |
|---|---|---|
| astronomy | complete | sci-hanlu-longitude-195（high，3直读2发布方+GB/T元数据级） |
| calendar | partial | 无专属卡；历法机制链接 sci-solarterms-calendar-role（shared）、双锚之辨入 hist-hanlu-chongyang-adjacent |
| climate | complete | sci-hanlu-cooling-transition（high，新华两稿+非遗网，两个独立发布方） |
| phenology | complete（文本层） | hist-yueling-hanlu-pentads（high，主宾注文+转化叙事+五行注分层；现代物候验证 missing） |
| agriculture | complete | trad-hanlu-nongshi（medium，两套种麦谚地域明标+秋收+干旱/雪害风险） |
| ecology | missing | 无卡（三候归 phenology；雁类迁徙与菊花花期现代观测未建） |
| chinese-life | complete | trad-hanlu-customs-food（地域习俗+着衣谚+养生建议层）+ trad-hanlu-nongshi（农忙节律） |
| customs | complete | hist-hanlu-chongyang-adjacent（high，双锚辨析）+ trad-hanlu-customs-food（medium） |
| food | partial | 习俗卡内条目（寒露茶/菊花酒有地域锚；芝麻/蟹按机构建议层，未立确证食俗命题） |
| history | complete | hist-hanlu-naming（high，命名对偶）+ hist-yueling-hanlu-pentads（high）+ hist-hanlu-chongyang-adjacent（high）+ shared 链接 |
| literature-art | complete | lit-baijuyi-hanlu-chishang（medium，全诗直读+同名异诗警示） |
| regional-differences | complete | 种麦谚南北两套时窗 + 习俗条目地域版图 + fact-solarterms-yellow-river-origin（shared） |
| scientific-interpretation | complete | 黄经定义+由凉转寒气候层+命名古今分层（三卡分工） |
| global-expressions | partial | glob-hanlu-kanro-japan（Candidate/low：历法层机构直读三项跨语言一致；民俗实践层零直读，不得对外） |
| visual-assets | missing | 无已授权素材（非遗网页面水彩画《菊韵》/摄影图一律不用，页脚声明已记源卡） |
| audio-assets | missing | 无已授权素材（"促织鸣"文字线索在习俗卡） |
| interaction-ideas | complete | idea-hanlu-interaction-sketches（3条创意，各带红线） |
| references | complete | 新增6源（全直读：5 cross-checked+1 unverified）+ 复用共享源5个 |
| ai-research-log | complete | 本日志 |

统计：complete 13 / partial 3（calendar、food、global-expressions）/ weak 0 / missing 3（ecology、visual-assets、audio-assets）。

## 素材边界审计

本轮未引入任何图片、音频、视频素材（非遗网页面配图——图1雁南飞、图2坝上秋色〔江晓雯摄影〕、图3农谚配图、图4水彩画《菊韵》〔广舆〕、图5斗蟋蟀、图6葡萄丰收季——一律不用，页脚"部分图文来自网络"声明记录于源卡 rights）。全部引用为文本短摘录：古籍（公有领域）逐字摘录带定位；新华社版权稿仅要点级引用；NAOJ/人大页机构公开内容仅元数据与短摘录。临时文件仅写入 .batch-tmp/hanlu-* 前缀。

## 引擎路由表（npx tsx .batch-tmp/batch-route.mts hanlu，2026-09-16，首跑即过；trad-nongshi 升 in-review 后复核结论不变）

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| fact-solarterms-unesco-2016 | CulturalFact | system | high | A(独立直读×2) | **human-review-required** | — |
| fact-solarterms-yellow-river-origin | CulturalFact | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-huainanzi-complete-24terms | HistoricalRecord | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-solarterms-pentad-system | HistoricalRecord | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-calendar-role | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-jieqi-zhongqi | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| glob-hanlu-kanro-japan | GlobalExpression | global | high | A(独立直读×1) | **human-review-required** | global-candidate-hold |
| hanlu-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |
| hist-hanlu-chongyang-adjacent | HistoricalRecord | term | medium | A(独立直读×2) | **auto-candidate** | — |
| hist-hanlu-naming | HistoricalRecord | term | medium | A(独立直读×2) | **auto-candidate** | — |
| hist-yueling-hanlu-pentads | HistoricalRecord | term | medium | A(独立直读×2) | **auto-candidate** | — |
| lit-baijuyi-hanlu-chishang | CulturalFact | term | low | B(独立直读×1) | **auto-candidate** | — |
| sci-hanlu-cooling-transition | ScientificFact | term | medium | A(独立直读×2) | **auto-candidate** | — |
| sci-hanlu-longitude-195 | ScientificFact | term | medium | A(独立直读×3) | **human-review-required** | pending-primary-source |
| trad-hanlu-customs-food | Tradition | term | medium | A(独立直读×2) | **auto-candidate** | — |
| trad-hanlu-nongshi | Tradition | term | medium | A(独立直读×2) | **human-review-required** | pending-primary-source |

Findings 明细：glob-hanlu-kanro-japan global-candidate-hold(info)；hanlu-human-explanation explanation-gated(major)（Content Gate，支撑卡未 approved 禁止发布）；sci-hanlu-longitude-195 pending-primary-source(major)（GB/T 正文未直读，继承全节气待办）；trad-hanlu-nongshi pending-primary-source(major)（《四民月令》转引未回原书、种麦谚方志溯源未做）。

本节气路由统计（不含6张系统级共享卡）：**A 6 · B 2 · C 2 · D 0**。（A=auto-candidate 6张；B=human-review 非C类 2张〔sci-longitude、trad-nongshi〕；C=human-review 且命中 C 条件 2张〔HumanExplanation、GlobalExpression〕；D=needs-research 0张。idea 卡不参与 claim 路由。）

## 修改记录

- 2026-09-16（第一轮）：全部卡片、源卡、索引、解释层、创意层、日志一次完成；引擎首跑无本节气修正项。
- 2026-09-16（status 校正）：hist-yueling-hanlu-pentads 初稿误预置 in-review——引擎实判 auto-candidate，改回 draft；sci-hanlu-longitude-195、trad-hanlu-nongshi 按 §8 入包规则升 in-review（human-review-required）；HumanExplanation/glob 保持 draft。

[[01_terms/17_寒露|寒露索引]] · [[07_research/sections/review-hanlu|审核分节]] · [[07_research/research-bailu-batch-log|白露日志（对偶节气先例）]]
