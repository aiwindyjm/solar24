---
schema_version: '0.1.0'
id: 'research-shuangjiang-batch-log'
type: 'ResearchNote'
title: '霜降第一轮批研究 · 执行日志（2026-09-16）'
solar_terms: ['shuangjiang']
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
    'task': '按 24 节气批研究 brief 为霜降（shuangjiang，顺序18，autumn）完成第一轮知识库填充：13项交付物、12项审计、路由与审核分节',
    'queries': [
      'ihchina.cn solar_details 6978（按 wave 情报霜降预计6978；curl 直连读取，标题《万类霜天竞自由——二十四节气之霜降》确认）',
      'WebSearch site:ihchina.cn 壮族霜降节 → project_details/15066.html；另直读 solarname_details/6995.html（节气名录侧）',
      '月令七十二候集解 霜降 九月中 氣肅而凝 豺祭獸 蟄蟲咸俯（维基文库全页直读，寒露后立冬前切分）',
      '霜降 太阳到达黄经210度 新华网（WebSearch → news.cn 2021草地周刊霜降特稿直读）',
      '"霜降"的霜从哪"降" 新华网 20241023（WebSearch → news.cn/science 2024科普中国稿直读）',
      '霜的形成 凝华 辐射冷却 中国天气网（WebSearch → weather.com.cn 霜降谚语专题2008直读 + 天津站露和霜区别2021复取）',
      '霜降 赏红叶 香山 最佳观赏期 气象（WebSearch → 北京日报稿 via 人民网四川频道2025直读）',
      '维基文库 API：srsearch=山行 杜牧（→ 作品页《山行 (杜牧)》直读）',
      'first frost date gardening United States end of growing season almanac（WebSearch；almanac.com/farmersalmanac.com 抓取均被拒→search-excerpt 级）',
      '"霜打洼地" 霜 低洼 辐射冷却 冷空气 气象科普（WebSearch，命中已直读的天气网霜降谚语页，未另立源）',
      '人民网广西 gx.people.com.cn 2022 天等 壮族霜降节（WebSearch 线索 → 页面直读）',
      'NAOJ こよみ用語解説 二十四節気（eco.mtk.nao.ac.jp 经代理抓取，Shift-JIS 解码提取秋表霜降行）',
    ],
    'discovered_source_ids':
      [
        'source-ihchina-shuangjiang-feature',
        'source-ihchina-shuangjiangjie-project',
        'source-ihchina-shuangjiangjie-intro',
        'source-xinhua-shuangjiang-2021',
        'source-xinhua-shuangjiang-frost-2024',
        'source-weathercn-shuangjiang-proverbs',
        'source-people-shuangjiangjie-gx-2022',
        'source-people-shuangjiang-xiangshan',
        'source-naoj-24sekki-shuangjiang',
        'source-wikisource-shuangjiang-shanxing',
        'source-almanac-com-shuangjiang-frostdates',
      ],
    'conflicts':
      [
        '日期口径：任务LEAD"公历10月23-24日"；直读两机构措辞不同——非遗网"每年公历10月23日左右"、新华社2021"每年阳历10月24日前后"；2017/2021两年实例均为10月23日。命题按"10月23日至24日前后"合成，两处原文逐字登记于卡内',
        '《月令》引文断句：非遗网作"九月中，气肃而凝，露结为霜矣"，维基文库本作"霜降，九月中。氣肅而凝露結為霜矣"——以古籍页直读为准，差异登记',
        '三候首候文本层：维基文库正文作"豺祭獸"，注引《月令》作"豺乃祭獸戮禽"，今通行引用（含非遗网）作"豺乃祭兽"——三文本层并存登记，未混写',
        '"霜降=一年中昼夜温差最大时节"类流行说法本轮未获机构稿直读，未采（新华2024视频标题级线索不算）',
        '非遗网/项目页"农历霜降"表述欠精确（霜降属阳历成分，见共享历法卡），region卡按"霜降节气后9天"理解并保留页方原文',
        'almanac.com 与 farmersalmanac.com 页面抓取被拒（直连/代理均空响应）——全球表达卡降级为 search-excerpt 级 Candidate，引擎路由 needs-research，处置正确',
      ],
    'conclusions':
      [
        '第一轮建立知识卡10张（sci×2 / hist×1 / region×1 / trad×2 / lit×1 / glob×1 / idea×1 / explanation×1）、新来源11条（10 direct-read + 1 search-excerpt），全部为 draft/in-review，等待人工审核',
        '高可信锚点：黄经210°三源直读（非遗网+新华2021+NAOJ跨语言）、《月令》霜降段逐字直读（含两处版本异文与《周語》引文）、霜形成机制三独立发布方直读（"皆由地发，非从天降"+凝华+霜打洼地+霜冻之别）、壮族霜降节四要素两级非遗身份（非遗网著录+人民网2016 UNESCO组成部分/天等=10个代表性社区之一）',
        '四张 high 卡达成基线：sci-shuangjiang-longitude-210 / hist-yueling-shuangjiang-pentads / sci-shuangjiang-frost-formation / region-shuangjiangjie-tiandeng',
        '本轮最大收获是"霜不是降下来的"命题的直读闭环（气象局科普中心2024+中国天气网2008/2021三源）与霜降命名的分层呈现（古籍"露结为霜"古典认知 vs 现代凝华机制，两卡互指不倒灌）；最大坑是霜降习俗的古籍谱系为空——柿子/进补/红叶全部停留在机构汇编层，"自古"类断代一律未写',
        '主要证据缺口：元稹《咏廿四气诗》霜降篇可靠文本、霜降习俗方志源、头降/中降/尾降与拜囊海细节、初霜分布统计出处、NOAA/almanac 霜日页直读（glob 升级前置）',
      ],
    'human_questions':
      [
        '"10月23日至24日"区间与全库日期口径统一问题（《中国天文年历》逐年核算）是否随秋分/春分待决项一并裁决？',
        '《月令》正文"豺祭獸"与通行"豺乃祭兽"的版本层处理（引用时以哪个文本层为准）是否需要统一规范？',
        'region-shuangjiangjie-tiandeng 维持 high 是否接受（两独立发布方直读，但文旅部名录公告原文与"10个代表性社区"清单未复核）？',
        'glob 卡路径裁决：补读 almanac.com/NOAA 后升格，还是改以日语霜降（NAOJ已在库）作第二 Candidate？',
        '初霜分布段（大兴安岭8月底至华南1月上旬）是否要求下一轮补国家气候中心/气象灾害统计源后保留在科学卡正文？',
      ],
  }
---

# 霜降第一轮批研究 · 执行日志

## 执行摘要

2026-09-16 由 AI 研究代理执行。研究问题（顶层）：**霜降是什么？由哪些可靠来源支撑？证据边界在哪里？** 本轮完成 10 个页面的直接读取（非遗网×3：霜降专题6978/壮族霜降节项目页15066/节气名录页6995；新华社×2：2021特稿与2024霜形成科普稿；中国天气网×2：霜降谚语专题2008（新）与露霜区别2021（复取）；人民网×2：广西天等2022现场报道与北京日报香山红叶稿2025；NAOJ 二十四節気页；维基文库《山行》作品页）+1个检索线索（almanac.com），建卡 10 张、来源 11 条。

## 流程记录

1. **非遗网专题页**：按 wave 情报直取 solar_details/6978.html（curl 直连），标题《万类霜天竞自由——二十四节气之霜降》确认编号；全页文本提取（定义/气象/初霜分布/农事农谚/习俗四节/养生）。
2. **非遗锚点（壮族霜降节）**：WebSearch `site:ihchina.cn 壮族霜降节` 命中 project_details/15066.html（项目序号516、编号Ⅹ-68、2014第四批扩展项目、天等县申报）与 solarname_details/6995.html（天等县情+影响范围）；再直读人民网广西2022现场报道作独立交叉源——意外收获UNESCO身份直读句（"组成部分之一……天等县成为10个代表性社区之一"）与头降/中降/尾降三阶段。
3. **古籍直读**：维基文库《月令七十二候集解》全页抓取后按"霜降[编辑]"切分，定义句+三候+注文逐字提取；发现正文"豺祭獸"与注引《月令》"豺乃祭獸戮禽"的版本层差异、《淮南子》"俛"字异文、非遗网断句差异——三处异文如实登记。
4. **天文交叉源**：WebSearch 定位新华社2021草地周刊霜降特稿（"阳历10月24日前后……黄经210°"）直读；NAOJ 二十四節気页 Shift-JIS 解码提取霜降行（"霜降 (そうこう) 九月中 210° 霜が降りるころ"）——跨语言第三方。
5. **霜形成机制（本节气重点）**：WebSearch 命中新华网2024-10-23《"霜降"的霜从哪"降"？》（科普中国稿，作者=中国气象局气象宣传与科普中心高级工程师；"皆由地发，非从天降"+凝华机制）；中国天气网《古代霜降谚语中的有趣气象知识》（2008，霜打洼地冷空气下沉解释+"霜重见晴天"辐射霜解读）；天津站《露和霜的区别》复取验证霜段。三独立发布方闭环。
6. **文学**：维基文库 API 检索"山行 杜牧"命中作品页直读（全诗+白云生处/深处异文+三种收录书目）；元稹组诗按 wave 情报不再尝试，记 Needs Research。
7. **习俗**：吃柿子/贴秋膘/赏菊/送芋鬼/迎霜以非遗网专题著录（地域逐条限定）；赏红叶补北京日报稿（2025香山变色率25%-28%+叶绿素/花青素机制）作具名实例。
8. **全球表达**：选北美 first frost date（brief 推荐诚实选项）；almanac.com/farmersalmanac.com 抓取均被拒（直连/代理空响应）→ 建 search-excerpt 源（unverified），Candidate 三要素齐全，relationship=shared-nature（协议枚举）。
9. **成卡与自检**：所有新卡 id 含 shuangjiang、文件名==id、日期2026-09-16、risk/impact 必填、human_review=null；路由首跑发现我方一处 YAML 笔误（Source 卡 period 行多余括号致文件不可解析、region 卡连带误报 fake-cross-check）——修复并给三候卡补 NAOJ 第二独立源后复跑通过；YAML 全量 python 解析 21/21 通过。

## 12项审计（§7）

1. **Unsupported Distribution**：通过。解释卡三层逐句自查无"大部/普遍/各地/全国"；"北方秋收临近尾声/南方三秋大忙"与"初霜南北差异"两条分布性表述有本节气支撑卡（trad-nongshi / sci-frost-formation）背书；"很多地方菊花会""有些地方吃红柿子"保留非遗网页方泛述原状并归因，未转写为分布结论。
2. **Regional Generalization**：通过。习俗卡六条目逐条地域限定（泉州/闽台/山东烟台/广东高明/北京香山）；region 卡严格四要素（广西五县+天等典型）。
3. **Modern-as-Ancient**：通过且为本轮核心防线。习俗卡整体标注"机构汇编层、古籍源缺"，禁用"自古"类断代；香山红叶=2025年当代实例；壮族霜降节历史层（明嘉靖/清）按机构著录层对待并标注"未标注所据文献"。
4. **Historical Leakage**：通过。月令卡无"黄经/气象学/天文"现代概念，引文保持"氣肅而凝""駟見而隕霜"原语汇；"九月中"只作历法位相描述并链接共享卡。
5. **Scientific Leakage**：通过。命名与机制两卡分立：月令卡明写"露结为霜是古典认知命名……两层分卡分述，互不倒灌"；sci-frost 卡反向注明"命名中的降是古典语感，不是降水物理学"。
6. **Legend-as-Fact**：通过。"豺祭兽"按处暑"鹰乃祭鸟"同型标注为"祭而后食"古典叙事（非动物行为学）；"不会流鼻涕/嘴唇裂开"为民间说法（谚语层）；"送芋鬼/迎霜"机构著录层。
7. **Weak Source Inflation**：通过。search-excerpt 源仅 almanac 1条（verification=unverified），只支撑 confidence:low 的 Candidate；其余10条全部 direct-read；"壮语旦那/旦糍那""NOAA 8月31日前初霜"等检索线索一律未入卡。
8. **Search Excerpt Misuse**：通过。同上；WebSearch 摘要只用于定位页面（均后续直读）或明确降级（almanac）；百度百科/维基百科日期区间未采。
9. **Cross-source False Validation**：发现并已修复。①首跑引擎报 region 卡 fake-cross-check——根因是我方 Source 卡 YAML 笔误致人民网源未被加载（两非遗网同发布方凑不成独立交叉）；修复后复跑独立直读×2、无 finding。②新华网2024霜稿与人民网科普中国为同文转载（已注明不互为交叉，交叉走中国天气网两篇）。③非遗网两页（project/intro）同发布方已在源卡正文显式声明不构成独立交叉。
10. **Creative-as-Fact**：通过。idea 卡开头性质声明+每条依据卡与红线（纠偏不嘲讽古人、祭兽叙事标注、民族节庆地域限定与素材授权）。
11. **Global Forced Correspondence**：通过。glob 卡三要素齐全，relationship=shared-nature（协议枚举值），difference/relationship 明写"无传播关系，不得写成美国版的霜降"；引擎判 needs-research（insufficient-evidence blocker）+ candidate-hold——正确降级，未强推。
12. **Shared Knowledge Duplication**：通过。黄道24等分/节-中气分组/UNESCO/七十二候/淮南子序列均以 02_shared 链接引用（sci-solarterms-jieqi-zhongqi / sci-solarterms-calendar-role / fact-solarterms-unesco-2016 / hist-solarterms-pentad-system / hist-huainanzi-complete-24terms），未复述命题；引擎无 shared-duplicate finding。

## 19维覆盖矩阵

| 维度 | 状态 | 说明 |
|---|---|---|
| astronomy | complete | sci-shuangjiang-longitude-210（high，三源直读：非遗网/新华2021/NAOJ） |
| calendar | complete | "霜降，九月中"中气位（月令直读+NAOJ互证）+ [[02_shared/sci-solarterms-jieqi-zhongqi|节/中气分组]]链接 |
| climate | complete | sci-shuangjiang-frost-formation（high：凝华机制/霜打洼地/霜冻之别/初霜南北分布） |
| phenology | complete | hist-yueling-shuangjiang-pentads（high，逐字直读+两处异文）；香山红叶变色物候（customs卡） |
| agriculture | complete | trad-shuangjiang-nongshi（北收南忙+16条农谚+谚语气象解读分层） |
| ecology | weak | 三候现代物候验证（豺捕猎/落叶/虫眠周期观测）未建卡 |
| chinese-life | complete | trad-customs + shuangjiang-human-explanation |
| customs | complete | trad-customs（机构层六条目）+ region-shuangjiangjie-tiandeng（活态非遗） |
| food | partial | 吃柿子/贴秋膘/鸭条目在 trad-customs 内（机构汇编层，无独立饮食卡，古籍源缺） |
| history | complete | 月令卡（文本传统）+ region卡历史层（明嘉靖瓦氏夫人/清鼎盛/当代恢复） |
| literature-art | complete | lit-shuangjiang-dumu-shanxing（medium，单页直读+异文+"物候诗非节气诗"边界）；元稹组诗记 D |
| regional-differences | complete | region卡（广西五县）+ 初霜分布（大兴安岭→华南）+ 习俗地域限定 |
| scientific-interpretation | complete | sci-210 + sci-frost-formation（命名/机制分层为样本） |
| global-expressions | weak | glob-shuangjiang-firstfrost-dates 仅 search-excerpt 级，引擎路由 needs-research；日语霜降（NAOJ已直读）留作第二候选 |
| visual-assets | missing | 霜花微距/红叶/柿子/打榔舞影像均未授权（idea卡已列） |
| audio-assets | missing | 打榔节奏/风声素材待授权 |
| interaction-ideas | complete | idea-shuangjiang-interaction-sketches（3条创意+红线） |
| references | complete | 新增11条 Source（10 direct-read + 1 search-excerpt），复用2条既有直读源（月令维基文库/天气网天津站） |
| ai-research-log | complete | 本日志 + [[07_research/sections/review-shuangjiang|审核分节]] |

统计：complete 14 / partial 1 / weak 2 / missing 2。

## 素材边界审计

- 视觉：非遗网/人民网页面配图一律不用（版权稿件或页面声明整理自网络）；霜花、香山红叶、柿子、打榔舞影像均无授权，未建 VisualAsset。
- 声音：打榔舞榔声等素材待授权，idea 卡列为待办。
- 文本引用：古籍引文逐字带定位（含〈【《月令》作豺乃祭獸戮禽】〉〈【《淮南子》作俛】〉异文注）；新华社/人民网/中国天气网为版权稿件，仅短摘录并登记电头与作者署名。

## 路由引擎输出（2026-09-16，`npx tsx .batch-tmp/batch-route.mts shuangjiang`，tolerant 版·修复后复跑）

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| glob-shuangjiang-firstfrost-dates | GlobalExpression | global | high | D(独立直读×0) | **needs-research** | insufficient-evidence, global-candidate-hold |
| hist-yueling-shuangjiang-pentads | HistoricalRecord | term | medium | A(独立直读×2) | **auto-candidate** | — |
| lit-shuangjiang-dumu-shanxing | CulturalFact | term | low | B(独立直读×1) | **auto-candidate** | — |
| region-shuangjiangjie-tiandeng | CulturalFact | term | high | A(独立直读×2) | **human-review-required** | — |
| sci-shuangjiang-frost-formation | ScientificFact | term | medium | A(独立直读×4) | **human-review-required** | pending-primary-source |
| sci-shuangjiang-longitude-210 | ScientificFact | term | medium | A(独立直读×3) | **human-review-required** | pending-primary-source |
| shuangjiang-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |
| trad-shuangjiang-customs | Tradition | term | medium | A(独立直读×2) | **human-review-required** | pending-primary-source |
| trad-shuangjiang-nongshi | Tradition | term | medium | A(独立直读×2) | **auto-candidate** | — |

（引擎表中另有 6 张 02_shared 共享卡路由 human-review-required，属既有状态，不入本节气包。首跑跳过清单曾含本节气 source-people-shuangjiangjie-gx-2022（YAML 笔误），修复后复跑跳过清单仅剩其他节气代理的半成品文件 trad-lidong-budong-jiaozi / source-people-xiaoxue-pickling-2015，与本轮无关。）

Findings 明细：

- `glob-shuangjiang-firstfrost-dates` **insufficient-evidence**（blocker）：没有正分证据来源（仅线索级）——正确：search-excerpt 源只能支撑 low Candidate。
- `glob-shuangjiang-firstfrost-dates` **global-candidate-hold**（info）：Candidate 不构成已核实文化对应。
- `sci-shuangjiang-frost-formation` **pending-primary-source**（major）：初霜分布统计口径与霜冻业务标准等一手来源未直读。
- `sci-shuangjiang-longitude-210` **pending-primary-source**（major）：GB/T 33661-2017 正文与《中国天文年历》未直读（全库共性问题）。
- `shuangjiang-human-explanation` **explanation-gated**（major）：支撑卡未 approved，禁止发布。
- `trad-shuangjiang-customs` **pending-primary-source**（major）：习俗条目无古籍/方志一手源。

入包处置：region-shuangjiangjie-tiandeng（C，risk=high 活态非遗）→ in-review；shuangjiang-human-explanation（C，类型即 C）→ 保持 draft；sci-shuangjiang-longitude-210 / sci-shuangjiang-frost-formation / trad-shuangjiang-customs（B）→ in-review；hist-yueling-shuangjiang-pentads / lit-shuangjiang-dumu-shanxing / trad-shuangjiang-nongshi（A auto-candidate）与 glob（D）→ 保持 draft。

## Needs Research（汇总）

1. 元稹《咏廿四气诗·霜降九月中》可靠文本（点校本/图书馆途径；维基文库无组诗页，wave1 已确认）。
2. 霜降习俗古籍/方志源：泉州丁柿谚、闽台霜降进补、山东烟台迎霜、广东高明送芋鬼的地方文献。
3. 壮族霜降节细节源：头降/中降/尾降各阶段活动分工、拜囊海仪式内容、打榔舞形态、壮语名（线索称"旦那"，未直读）；瓦氏夫人史实融入节俗的方志链；文旅部2014年第四批名录公告原文与"10个代表性社区"清单。
4. 初霜期分布统计出处（国家气候中心/气象灾害统计）；霜冻预警业务标准（GB/QX）与"黑霜/白霜"术语官方文本；辐射霜完整分类。
5. 三候现代物候观测（豺科动物秋季捕猎、落叶物候、昆虫休眠）。
6. almanac.com / NOAA-NWS 霜日统计页直读（glob 卡升格前置）；日语霜降（そうこう）民俗实践层作第二 Candidate 候补。
7. 杜牧《山行》与《千家诗》/《樊川文集》印本核对与系年。
8. 视觉/声音素材授权研究（霜花微距、香山红叶、柿子、打榔舞影像与榔声）。

## 规范自检

- 未编造来源、引文或检索记录；未读原文一律标注（almanac/检索线索）；全部 human_review=null；无 approved 状态；无自动发布。
- 只新建/编辑本节气文件（03_notes×10、04_sources×11、07_research×2）与 01_terms/18_霜降.md 索引；未触碰 02_topics/02_shared/其他节气/scripts/packages/docs；本 brief 未改动。
- .batch-tmp 临时文件均以 shuangjiang- 前缀命名；未运行 pnpm/git 命令；路由引擎 tolerant 版只读运行两次。

[[01_terms/18_霜降|霜降索引]] · [[07_research/sections/review-shuangjiang|霜降审核分节]] · [[04_sources/README|来源库]]
