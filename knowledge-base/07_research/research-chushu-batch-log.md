---
schema_version: '0.1.0'
id: 'research-chushu-batch-log'
type: 'ResearchNote'
title: '处暑批量研究 · 第一轮执行日志（2026-09-16）'
solar_terms: ['chushu']
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
    'task': '按 24 节气批量研究规范完成处暑（14，autumn）第一轮研究：天文/物候/命名/气候（由热转凉+秋老虎，本节气知识锚）/中元节日期锚辨析/开渔节现代节庆分层（本节气重点）/农事农谚/文学（苏泂《长江二首》）/全球表达/解释层/创意层',
    'queries': [
      '非遗网编号试探（curl 直连 -L）：solar_details/6973.html（302→Article/Index/detail?id=9885，标题=立秋）、6974.html（302→id=9867，标题=最好新秋时——二十四节气之处暑，命中）、6975.html（id=9852，白露）——确认 6974=处暑，延续"立夏起 6968+ 编号段"波次情报（立秋6973/处暑6974/白露6975 连续）',
      'curl 直连机构稿：news.cn/2022-08/21/c_1128933126.htm（新华社2022处暑稿，成功）；weather.com.cn/life/2026/08/4770851.shtml（中国天气网2026气候稿，成功）；ihchina project_details/15091.html（渔民开洋谢洋节项目页，成功）；ihchina news_1_details/19156.html（中国文化报2019象山开渔节，成功）；zjnews.zjol.com.cn/zjxc/202309/t20230916_26224465.shtml（浙江宣传2023开渔节专稿，成功）',
      '维基文库API（走代理）：srsearch=長江二首（无苏泂作品页，命中皆贾岛长江集）；處暑無三日（命中田家占候集覽/卜歲恒言等农书类）；蘇泂；冷然齋 蘇泂（命中泠然齋詩集四庫全書本全覽）',
      '维基文库直读页（走代理 curl）：月令七十二候集解（全页抓取切处暑节，另取雨水节獭祭鱼注文作平行文本）；荊楚歲時記（七月十五日盂兰盆条）；燕京歲時記（七月：中元/荷叶灯蒿子灯莲花灯/法船/盂兰会/放河灯/江南城隍庙诸条）；泠然齋詩集_(四庫全書本)/全覽（卷四《长江二首》全诗+四库提要作者信息）',
      'WebSearch：处暑 节气 太阳黄经150° 8月22日至24日 新华网；象山开渔节 1998年 创办 中国开渔节 设立；site:ihchina.cn 开洋 谢洋节 渔民；处暑 黄经150度 秋老虎 中国天气网；Harvest Festival England church harvest thanksgiving tradition history date',
    ],
    'discovered_source_ids':
      [
        'source-ihchina-chushu-feature',
        'source-xinhua-chushu-2022',
        'source-weathercn-chushu-2026',
        'source-ihchina-kaiyang-xieyang',
        'source-ccd-xiangshan-kaiyu',
        'source-zjxc-kaiyu-2023',
        'source-wikisource-lingranzhai-shiji',
        'source-wikipedia-harvestfestival',
      ],
    'conflicts':
      [
        '开渔节日期锚（本轮最大冲突）：非遗网处暑专题页（2017）"每年处暑期间，浙江省沿海都要举行隆重的开渔节"（处暑=8月22-24日）vs 浙江宣传2023"每年的9月16日……结束了伏季休渔期"（约相差3周）——处理：region 卡并存两说不偏废，命题以"1998年创办的现代节庆、日期锚为伏休结束（近年9月16日）、与处暑仅时段邻近"分层表述，历届日期表列 Needs Research',
        '三候录文待校（非错误冲突，属传本/录文差异）：维基文库本"天地始肅秋者，陰之始"（通行标点多作"天地始肅。秋者……"）与"成熱曰登"（"熱"通行本多作"熟"）——照录并注 exceptions，校勘待做',
        '休渔制度口径：中国文化报2019"20世纪70年代，象山渔民提出了休渔的概念，并开始实施渔业3个月伏季休渔制度" vs 浙江宣传2023"从1995年开始，我国实施海洋伏季休渔制度"——两段制度史（地方先行/全国制度）并存不改写，均按直读原文引用',
        'brief LEAD 谚"处暑天不暑，炎热在中午"：本轮全部直读源均未见（新华社2022有近义表述"处暑时节的天气一般中午比较炎热，早晚会凉爽起来"）——LEAD 谚弃用不入卡，防幻觉样本+1',
        '公历日期范围：新华社"8月22日至24日" vs 非遗网专题页仅给2017年8月23日实例——黄经卡日期范围以新华社口径入命题、非遗网作黄经互证源，exceptions 注明',
      ],
    'conclusions':
      [
        '第一轮建立知识卡12张（10张知识卡+解释层+创意层；high 4张：sci-chushu-longitude-150 / hist-yueling-chushu-pentads / hist-chushu-naming / hist-chushu-zhongyuan-hedeng）、Source 卡8张（7直读+1检索摘要级）；复用既有源4张（月令/荆楚/燕京/GB-T）；引用共享卡6张全部仅链接不复述',
        '现代节庆辨析（本节气重点）成立且证据链最强：开渔节=1998年象山顺应1995年伏休制度创办的现代节庆（中国文化报×浙江宣传两发布方直读互证），日期锚为伏休结束日（近年9月16日）而非处暑；传统层"渔民开洋、谢洋节"（Ⅹ-72，2008）另卡分立且其山东锚点（谷雨/六月十三）与处暑无关——"处暑自古有开渔传统"在文献上不成立，三层分层（传统民俗/现代制度/现代节庆）齐备',
        '中元节日期锚辨析同型成立：6世纪荆楚（盂兰盆供）→清末燕京岁时记（"中元不為節，惟祭掃墳塋而已"+放河灯条）→2017非遗网专题页，三层文献日期锚一致指向农历七月十五，处暑仅时段邻近——与雨水"拉保保"辨析先例同型处理',
        '非遗网页面体系再确认：solar_details 编号 6973立秋/6974处暑/6975白露 连续递增，"6968+编号段"情报延伸至秋季成立；专题页（302→Article detail）与 project_details 均可 curl 直连读取',
        '文学卡主路径成功：苏泂《长江二首》经维基文库《泠然斋诗集》四库辑本卷四直读全诗（"處暑無三日，新凉直萬金"），新华社2022稿引文互证首联；brief 的"读不到就换"备选路径未触发；元稹组诗仍无直读文本（沿波次结论）',
        '主要证据缺口：三候现代物候观测、秋老虎气象统计判据、放河灯宋代文献起点（《东京梦华录》等）、《说文》"處"字训诂直读、嘉靖《象山县志》原文、开渔节历届日期表、吃鸭/巧云方志谱系、Harvest Festival 直读核验、GB/T 33661-2017 正文（继承立春待办）',
      ],
    'human_questions':
      [
        '开渔节"处暑期间"（2017专题页）与"9月16日"（2023浙江宣传）两说是否立项逐年核对（1998-2026历届开渔日期表），还是维持"时段邻近"从宽表述',
        '三候录文句读/用字两处的定版口径：对外文案主用维基文库本+括注通行本，还是反之',
        '中元民俗与处暑"时段常邻近"是否需要逐年历表定量背书后才可进入解释层 summary（当前措辞"常与…相邻"）',
        '处暑自有节俗（吃鸭/巧云）单源低置信，是否值得设方志专项（北京百合鸭谱系/江南送鸭说）',
        'Harvest Festival Candidate 的直读核验优先级（en.wikipedia+英国教会源）；若改选"日本処暑同名传播"方向另行建卡',
        'GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）',
      ],
  }
---

# 处暑批量研究 · 第一轮执行日志

## 执行摘要

2026-09-16 由 AI 研究代理执行（brief：`.batch-tmp/AGENT-BRIEF.md`）。顶层问题：**处暑的"止暑"是什么意思——命名宣告止暑之后，气候、农事、节俗各自如何错位展开？沿海开渔节到底是处暑古俗还是现代节庆？**

## 流程记录

1. **样例对齐**：读 brief + 立春 9 张样例卡 + 索引目标形态 + 小暑波次日志（邻波情报），仿写结构。
2. **非遗网定位（一次命中）**：按"6968+ 编号段"情报试探 6973-6975（curl -L 跟随 302 至 Article detail），6974 标题"最好新秋时——二十四节气之处暑"确认；立秋6973/白露6975 同批确认，秋季编号段情报供后续波次使用。
3. **机构稿直读（5页全部成功）**：新华社2022处暑稿（黄经150°/8月22-24日/秋老虎/苏泂引文/禾乃登释义）；中国天气网2026气候稿（分区入秋/秋老虎/华西秋雨/秋台风）；非遗网开洋谢洋节项目页15091（Ⅹ-72 四要素+山东锚点日期）；中国文化报2019象山开渔节（1998创办/伏休背景）；浙江宣传2023开渔节专稿（9月16日日期锚/1995全国伏休制度/"本因禁捕期而设置的区域性文化节庆"定性）。
4. **古籍直读（维基文库走代理，4书全中）**：月令七十二候集解处暑节（定义句+三候注文逐字，另取雨水"獭祭鱼"注文作"祭而后食"平行文本）；荆楚岁时记七月十五盂兰盆条；燕京岁时记七月诸条（中元"不为节"/荷叶灯/盂兰会/放河灯）；泠然斋诗集四库本卷四《长江二首》全诗+提要。
5. **检索级**：Harvest Festival（Wikipedia 摘要，Candidate 专用）。
6. **建卡与引擎**：12 卡 + 8 源卡 + 索引更新；首跑发现 3 个自有文件 YAML 串内直引号错误（hist-chushu-naming / trad-chushu-chiya-qiuyun / source-zjxc-kaiyu-2023），改弯引号后复跑全部通过；路由 human-review 6 张按 §8 校正 status（trad-chushu-nongshi draft→in-review，其余5张建卡时已设）。

## 12项审计（§7）

1. **Unsupported Distribution**：发现+已处理——"我国南方大部分地区这时也正是收获中稻的大忙时节"保留在源引文层且卡命题限定"南方中稻区"；气候命题全部分区化（长城以北/长江中下游/华西），无"全国转凉"类表述；解释层逐句自查无未背书分布短语。
2. **Regional Generalization**：通过——长城以北/长江中下游/华西/浙江象山/山东荣成日照即墨/清末北京/六世纪荆楚全部带地域与断代限定。
3. **Modern-as-Ancient**：发现+已处理——本节气最大风险点：开渔节按 Modern Popularization 三层分层（传统祭海民俗/1995伏休制度/1998开渔节），"处暑自古有开渔传统"显式否定；"处暑百合鸭"标注当代商品化形态；"出暑"标注现代白话层。
4. **Historical Leakage**：通过——三候卡/中元卡/命名卡无黄经、气象学等现代概念；黄经卡不载古典内容；"处暑，七月中"中气位仅链接共享机制卡。
5. **Scientific Leakage**：通过——"金氣肅殺/义禽"五行伦理解释只入古籍卡并标注古典解释体系（Interpretation）；气候卡命题只含气象机构表述；"命名止暑 vs 气候未尽"分层写入命名卡。
6. **Legend-as-Fact**：通过——"鹰乃祭鸟"注文按"古典祭而后食叙事"记录（与獭祭鱼平行），明示非动物学结论；妈祖/如意娘娘按当代信俗实践叙述（region 卡 current practice 层）。
7. **Weak Source Inflation**：发现+已处理——吃鸭/巧云单源机构汇编→confidence low；"据记载已千年""自古便有开捕祭海"降为机构转述层；农谚群无逐一出处→medium 以下；Ⅹ-72 编号细节注明仅一直读源。
8. **Search Excerpt Misuse**：通过——Harvest Festival 唯一摘要源 verification=unverified，仅支撑 low Candidate；引擎判 needs-research（insufficient-evidence）符合预期设计。
9. **Cross-source False Validation**：通过——黄经150°建立在非遗网（中国艺术研究院）×新华社两机构直读；1998年创办=中国文化报×浙江宣传两发布方；维基文库同托管方规则执行（泠然斋与月令同源不互标 cross，各自与机构源互证）。
10. **Creative-as-Fact**：通过——idea 卡三条全标性质声明+依据卡+红线（"祭鸟"拟人红线、开渔节三层同屏红线、秋老虎俗语层红线）。
11. **Global Forced Correspondence**：通过——Harvest Festival 三要素明确"不是对应、不是等同、不是西方版处暑"；relationship 取协议枚举 nearby-time（吸取小暑波次自造值教训）。
12. **Shared Knowledge Duplication**：通过——黄道24等分/节气阳历属性/中气机制/七十二候体系/UNESCO/黄河起源均只链接 02_shared 卡，本节气卡内不复述系统级命题。

## 19维覆盖矩阵

| 维度 | 状态 | 支撑卡 |
|---|---|---|
| astronomy | complete | sci-chushu-longitude-150（high，非遗网×新华社两独立直读+GB/T元数据） |
| calendar | partial | 中气位命题并入三候/黄经卡（"處暑，七月中"+2017闰六月落七月初二实例），机制靠 [[02_shared/sci-solarterms-jieqi-zhongqi|共享卡]]，无专卡 |
| climate | complete | sci-chushu-climate-autumn-transition（medium，3机构直读；气象数据/入秋判据缺） |
| phenology | complete（文本层） | hist-yueling-chushu-pentads（high，含獭祭鱼平行文本；现代物候验证 missing） |
| agriculture | partial | trad-chushu-nongshi（medium，机构汇编级；农书直读缺） |
| ecology | missing | 无卡（三候古典记载归 phenology；现代生态观测未建） |
| chinese-life | complete | hist-chushu-zhongyuan-hedeng（high）+ trad-chushu-chiya-qiuyun（low）+ region 卡 + 解释层 |
| customs | complete | 中元河灯 + 开渔节分层 + 巧云出游三线 |
| food | partial | trad-chushu-chiya-qiuyun（low 单源；方志谱系缺） |
| history | complete | 命名（high）+三候（high）+中元（high，六世纪-清末双古籍）+shared 淮南子链接 |
| literature-art | partial | lit-chushu-sujiiong-changjiang（medium，四库辑本直读；校本/系年未核） |
| regional-differences | partial | region-chushu-xiangshan-kaiyu（medium，含山东对照组锚点；区域锚点1个+对照组） |
| scientific-interpretation | complete | 黄经/气候两卡+共享机制卡 |
| global-expressions | weak | glob-chushu-harvest-festival（Candidate，search-excerpt） |
| visual-assets | missing | 无已授权素材 |
| audio-assets | missing | 无已授权素材 |
| interaction-ideas | complete | idea-chushu-interaction-sketches（3条创意，含防误导红线） |
| references | complete | 新增8源（7直读+1线索） |
| ai-research-log | complete | 本日志 |

统计：complete 10 / partial 5 / weak 1 / missing 3（calendar/agriculture/food/literature-art/regional-differences 为 partial；ecology/visual/audio 为 missing）。

## 素材边界审计

本轮未引入任何图片、音频、视频素材（非遗网页面配图一律不用，页脚版权声明已记录于源卡 rights）。全部引用为文本短摘录：古籍（公有领域）逐字摘录带定位（月令/荆楚/燕京/泠然斋）；机构稿件短引（新华社/中国天气网/浙江在线版权，仅要点级引用）；浙江宣传"未经许可不得转载"条款已在 rights 记录。临时文件仅写入 .batch-tmp/chushu-* 前缀。

## 引擎路由表（npx tsx .batch-tmp/batch-route.mts chushu，2026-09-16，YAML 修正后重跑）

> 跳过清单仅含其他节气代理的半成品（qiufen/bailu/liqiu 等 7 个文件），本节气 0 个文件被跳过。

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| fact-solarterms-unesco-2016 | CulturalFact | system | high | A(独立直读×2) | **human-review-required** | — |
| fact-solarterms-yellow-river-origin | CulturalFact | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-huainanzi-complete-24terms | HistoricalRecord | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-solarterms-pentad-system | HistoricalRecord | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-calendar-role | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-jieqi-zhongqi | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| chushu-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |
| glob-chushu-harvest-festival | GlobalExpression | global | high | D(独立直读×0) | **needs-research** | insufficient-evidence, global-candidate-hold |
| hist-chushu-naming | HistoricalRecord | term | medium | A(独立直读×3) | **human-review-required** | pending-primary-source |
| hist-chushu-zhongyuan-hedeng | HistoricalRecord | term | high | A(独立直读×2) | **human-review-required** | — |
| hist-yueling-chushu-pentads | HistoricalRecord | term | medium | A(独立直读×1) | **human-review-required** | evidence-below-confidence |
| lit-chushu-sujiiong-changjiang | CulturalFact | term | low | A(独立直读×2) | **auto-candidate** | — |
| region-chushu-xiangshan-kaiyu | CulturalFact | term | high | A(独立直读×3) | **human-review-required** | pending-primary-source |
| sci-chushu-climate-autumn-transition | ScientificFact | term | medium | A(独立直读×3) | **auto-candidate** | — |
| sci-chushu-longitude-150 | ScientificFact | term | medium | A(独立直读×3) | **human-review-required** | pending-primary-source |
| trad-chushu-chiya-qiuyun | Tradition | term | medium | A(独立直读×1) | **auto-candidate** | — |
| trad-chushu-nongshi | Tradition | term | medium | A(独立直读×2) | **human-review-required** | pending-primary-source |

Findings 明细：chushu-human-explanation explanation-gated(major)；glob-chushu-harvest-festival insufficient-evidence(blocker)+global-candidate-hold(info)；hist-chushu-naming / region-chushu-xiangshan-kaiyu / sci-chushu-longitude-150 / trad-chushu-nongshi 各 pending-primary-source(major)（命名卡=《说文》未直读；region卡=嘉靖县志与历届日期表未直读；黄经卡=GB/T 正文未直读；农事卡=农书未直读）；hist-yueling-chushu-pentads evidence-below-confidence(major)（单直读方撑 high，待与他本对校）。

本节气路由统计（不含6张系统级共享卡）：**A 3 · B 4 · C 3 · D 1**。

## 修改记录

- 2026-09-16（第一轮）：全部卡片、源卡、索引、解释层、创意层、日志一次完成。
- 2026-09-16（修正1）：3 个文件 YAML 串内直单引号未转义（hist-chushu-naming/trad-chushu-chiya-qiuyun/source-zjxc-kaiyu-2023），改中文弯引号后引擎复跑通过——印证 §10"YAML 是波内最大翻车点"。
- 2026-09-16（修正2）：文学卡自纠一处笔误（"放鶯"→原文"放鶴婆娑舞"），并删除据此误登记的异文 exceptions——引文一律以抓取原文为准。
- 2026-09-16（修正3）：按 §8 入包规则校正 status——trad-chushu-nongshi 升 in-review（human-review-required）；lit/sci-climate/trad-chiya 保持 draft（auto-candidate）；glob/explanation/idea 保持 draft。

[[01_terms/14_处暑|处暑索引]] · [[07_research/sections/review-chushu|审核分节]] · [[07_research/research-xiaoshu-batch-log|小暑日志（YAML教训与枚举红线来源）]]
