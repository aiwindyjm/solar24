---
schema_version: '0.1.0'
id: 'research-guyu-batch-log'
type: 'ResearchNote'
title: '谷雨批量研究 · 第一轮执行日志（2026-09-16）'
solar_terms: ['guyu']
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
    'task': '按 24 节气批量研究规范完成谷雨（06，spring）第一轮研究：天文/物候/命名/传说分层/习俗饮食/地域/农事/文学/全球表达/解释层/创意层',
    'queries': [
      '谷雨 太阳到达黄经30度 每年4月19日至21日 新华网 OR 中国政府网 OR 中国天气网',
      '元稹 咏廿四气诗 谷雨三月中 "谷雨春光晓" 全诗 古诗文网',
      '洛阳牡丹文化节 谷雨花 中国政府网 OR 新华网 OR 文旅局 牡丹花会',
      '"April showers bring May flowers" proverb origin 16th century April rain sowing',
      'site:ihchina.cn 洛阳牡丹花会',
      '维基文库API：srsearch=詠廿四氣詩 / 穀雨三月中 / "穀雨春光曉" / 倉頡作書 天雨粟 / intitle:淮南子（intitle:詠廿四氣詩 无命中）',
      '直接URL直读：ihchina.cn/solar_details/45.html（302→Article/Index/detail?id=10019）；un.org/zh/observances/chinese-language-day；mct.gov.cn/preview/special/3578/；m.gushiwen.cn/shiwenv_a99d905f9d84.aspx；zh.wikisource.org/wiki/月令七十二候集解 与 /淮南子/本經訓；news.cn/2022-04/19/c_1128573401.htm',
    ],
    'discovered_source_ids':
      [
        'source-ihchina-guyu-feature',
        'source-xinhua-guyu-2022',
        'source-un-zhongwenri-guyu',
        'source-wikisource-huainanzi-benjingxun-guyu',
        'source-ihchina-guyu-luoyang-mudan',
        'source-mct-guyu-luoyang-peony',
        'source-gushiwen-guyu-yuanzhen',
        'source-wikipedia-april-shower-guyu',
        'source-farmersalmanac-aprilshowers-guyu',
      ],
    'conflicts':
      [
        '"雨生百谷"四字在《月令七十二候集解》全书出现0次（直读全书检索），而机构/媒体普遍以其为谷雨释义——已立命名卡（hist-guyu-naming-yushengbaigu）记录"古籍定义句 vs 现代概括"分层，非错误冲突，属谱系澄清',
        '《淮南子·本经训》维基文库本"天雨粟" vs 非遗网转述"天雨谷"：一字异文，已在仓颉传说卡与本经训源卡登记，待与《论衡》引文及点校本比对',
        '洛阳花会档期：非遗网"每年4月15日至25日（谷雨时节）" vs 文旅部第30届"4月5日开幕"——档期与谷雨交节日不重合问题已写入洛阳卡红线（"谷雨时节办会"≠"谷雨日开幕"）',
        '联合国中文日：un.org 中文页两次抓取引文一致；curl 被 CloudFront 403 拦截无法取原始 HTML——单源直读状态，逐字复核列为人工待办',
      ],
    'conclusions':
      [
        '第一轮建立知识卡13张（4 high：sci-guyu-longitude-30 / hist-yueling-guyu-pentads / hist-guyu-naming-yushengbaigu / region-guyu-luoyang-mudan）、Source卡9张（7直读+2检索摘要级）；引用共享卡5张，全部仅链接不复述',
        '传说分层样本完成：仓颉传说（legend）/淮南子原文语境（fact）/白水祭祀（tradition线索）/联合国中文日（fact）四层各归各卡互链，"谷雨因仓颉得名"式因果在本库无立足点（命名卡为反锚点）',
        '非遗网 solar_details 编号确认：谷雨=45.html（页面302跳转 Article/Index/detail?id=10019，供后续波次：立春40、谷雨45，中间按序号排列）',
        '主要证据缺口：元稹组诗底本、茶史文献链、三候现代物候观测、气候统计、菏泽/白水直读源、南亚比较项、视觉声音素材',
      ],
    'human_questions':
      [
        '《咏廿四气诗》组诗底本与作者归属（敦煌写本系统 vs 传世本）采信哪一说？建议人工核对全唐诗/敦煌图像',
        '"雨生百谷"四字的文献溯源（明清农书/类书是否首出）需人工查四库或方志数据库',
        '联合国中文日页逐字复核（curl被拦，仅WebFetch双次一致引文）与2010年建议过程的一手档案',
        '白水仓颉庙谷雨祭祀的非遗名录身份与仪式细节（ihchina 项目页人工检索）',
        'GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）',
      ],
  }
---

# 谷雨批量研究 · 第一轮执行日志

## 执行摘要

2026-09-16 由 AI 研究代理执行（brief：`.batch-tmp/AGENT-BRIEF.md`）。顶层问题：**谷雨是什么？命名、传说、习俗、文学的证据边界在哪里？**

## 流程记录

1. **样例对齐**：读立春 9 张样例卡+2 源卡+索引，仿写结构。
2. **直读获取**（7 个页面直接读取）：
   - 维基文库《月令七十二候集解》全页（curl+正文切分，谷雨节逐字：定义句+三候+注文）；
   - 维基文库《淮南子/本經訓》（curl，"蒼頡作書，而天雨粟，鬼夜哭"及语境）；
   - 非遗网谷雨专题 solar_details/45.html（WebFetch/web reader 均不稳，最终本机直连 curl 跳转页全文读取）；
   - 非遗网洛阳牡丹花会项目页 project_details/15243（curl 直连直读，信息栏逐字）；
   - 新华社2022年谷雨稿（WebFetch 直读）；
   - 联合国官网中文日页（WebFetch 两次一致；curl 被 403）；
   - 文旅部第30届洛阳牡丹文化节专题页、古诗文网元稹诗页（WebFetch 直读）。
3. **检索但未直读**（search-excerpt）：Wikipedia "April shower"、Farmers' Almanac 谚语溯源（各建线索源卡）。
4. **成卡**：13 知识卡+9 源卡；传说/古籍/现代制度/习俗严格分层。
5. **路由**：运行 `npx tsx skills/solar24-cultural-research/workflows/route.ts guyu`（表见下），按入包规则定 status。

## 关键发现与纠错

- **"雨生百谷"非《月令》原文**：全书检索 0 次（唯一"百穀"在小满"麥秋至"注）。命名卡据此立"古籍定义句 vs 现代四字概括"分层——文案引用规范的关键证据。
- **非遗网谷雨页并无联合国中文日内容**：web reader 结果截断曾造成"页面含 UN 节"的误判，经 curl 全文直读纠正；UN 中文日单源建卡并降低置信。此为本轮最重要的防幻觉案例，已写入源卡"重要边界"。
- **《淮南子》仓颉句语境与谷雨无关**："天雨粟"原文论"能愈多而德愈薄"，未提任何节气——传说卡的文献学锚点。
- **非遗网专题页 45.html 跳转规则**：302 → `/Article/Index/detail?id=10019`，跳转页对代理 curl 504、对直连 curl 可读；后续波次可复用此经验。

## 12 项审计（§7）

| # | 审计项 | 结论 |
|---|---|---|
| 1 | Unsupported Distribution | 通过。茶/香椿按机构原粒度"南方/北方"照写并标注未逐省核验；荣成"北方沿海渔民过谷雨节两千多年"因断代无源未建卡；解释层三层文本无"大部/普遍/各地/全国"短语（引擎自查通过） |
| 2 | Regional Generalization | 通过。洛阳卡严格限洛阳（四要素齐）；未出现"中国人谷雨都赏牡丹"式泛化；白水祭祀标注为机构转述的地方实践 |
| 3 | Modern-as-Ancient | 通过。"雨生百谷"标为现代概括；联合国中文日立**现代事实卡**而非混入古籍叙事；牡丹花会以1982/1983为制度起点，唐宋部分明示转引待核 |
| 4 | Historical Leakage | 通过。现代概念（联合国日、现代概括用语）分别置于 CulturalFact 与命名卡的"现代用语"对比段，未混入 HistoricalRecord 命题 |
| 5 | Scientific Leakage | 通过。古籍卡（三候/命名）命题无黄经/气象学表述；"清明断雪，谷雨断霜"农谚留在 tradition 卡；机构气候定性在 sci 卡且注明非分区统计 |
| 6 | **Legend-as-Fact（重点样本）** | 通过+finding。仓颉传说独立 legend 卡（epistemic: legend，risk=high，C 区）；联合国卡明示"纪念性理由≠得名依据"；解释层明示"这是传说叙事与地方实践"；非遗网"自汉代以来流传千年"**未采信为事实**（标注断代无出处）。全链未出现"谷雨因仓颉得名"式因果 |
| 7 | Weak Source Inflation | 通过。glob 卡唯一由 search-excerpt 支撑且 confidence=low；无 low 源支撑 high/medium 卡 |
| 8 | Search Excerpt Misuse | 通过。两张 search-excerpt 源 verification 均 unverified；引擎未报 excerpt-as-read |
| 9 | Cross-source False Validation | 通过。新华社2021年同源稿不计独立交叉（源卡注明）；文旅部≠非遗网（不同主管）；非遗网谷雨页的月令引文与维基文库本互证（候名一致）方标 cross-checked |
| 10 | Creative-as-Fact | 通过。idea 卡开头性质声明，每条标依据卡与误导风险（含"严禁因果化仓颉叙事"红线） |
| 11 | Global Forced Correspondence | 通过。April showers 三要素齐备，relationship=seasonal-experience，全文无未否定的"对应/等同"，明写"不是外国版谷雨"；引擎仅 global-candidate-hold(info) |
| 12 | Shared Knowledge Duplication | 通过。中气机制/UNESCO/淮南子序列/七十二候体系/黄河起源均仅链接（02_shared/ 各卡）；引擎未报 shared-duplicate |

## 19 维覆盖矩阵

| 维度 | 状态 | 依据/缺口 |
|---|---|---|
| astronomy | complete | sci-guyu-longitude-30（high，双机构直读） |
| calendar | partial | 三月中气配对链接 sci-solarterms-jieqi-zhongqi；谷雨逐年交节时刻无权威数据源 |
| climate | partial | sci-guyu-rain-sowing-window（机构定性）；分区/年代气候统计缺 |
| phenology | partial | 古典三候 high；现代物候观测缺失 |
| agriculture | complete | trad-guyu-nongshi + sci-guyu-rain-sowing-window |
| ecology | missing | 三候物种（萍/布谷/戴胜/蚕）现代生态观测未建卡 |
| chinese-life | complete | 命名/茶香椿/传说/UN日覆盖生活与制度面 |
| customs | partial | 茶香椿/牡丹/仓颉已建；禁蝎、渔民节、侗寨谷雨节素材已直读未成卡（见素材边界） |
| food | complete | trad-guyu-tea-toon |
| history | complete | 命名+三候+传说+UN日四卡分层 |
| literature-art | partial | 元稹诗全诗单源（首联双源）；底本校勘待做 |
| regional-differences | partial | 洛阳一地双源；菏泽/白水缺直读源 |
| scientific-interpretation | complete | 黄经定义+降雨春播窗口两卡 |
| global-expressions | partial | 1 条 Candidate（线索级）+UN日卡；南亚比较项未成条 |
| visual-assets | missing | 无已授权素材（牡丹/仓颉字/浮萍意象候选未启动） |
| audio-assets | missing | 布谷鸟鸣、雨声素材未研究 |
| interaction-ideas | complete | idea 卡 3 条（含分层红线） |
| references | partial | 新增9源（7直读）；GB/T正文/气象统计/茶书缺 |
| ai-research-log | complete | 本日志+审核分节 |

小计：complete 8 / partial 8 / missing 3 / weak 0（N-A 0）。

## 素材边界审计

非遗网谷雨专题页已直读但**本轮未建卡**的素材（原文已存 [[04_sources/source-ihchina-guyu-feature|源卡]] excerpt/locator，防重复劳动）：

1. **禁蝎/谷雨帖**（清代，山西临汾/陕西凤翔/山东；引清乾隆六年《夏津县志》"谷雨，朱砂书符禁蝎"）——断代与方志原文均系页面转述，需方志直读后建 hist 卡。
2. **荣成渔民节**（"起源于谷雨节""两千多年历史""清代更名"皆无出处）——断代断言不可用，若建卡只保留"当代祭海仪式+机构表述"层。
3. **侗寨谷雨节**（肇兴侗寨吃乌米/打花脸/播稻种）——地域明确、素材完整，可作下轮 region 卡首选。
4. **养生节**（健脾祛湿、B族维生素等功效表述）——无医学来源，不采信、不建卡。

## 路由引擎输出（2026-09-16，全文粘贴）

```
# Routing report — guyu

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| fact-solarterms-unesco-2016 | CulturalFact | system | high | A(独立直读×2) | **human-review-required** | — |
| fact-solarterms-yellow-river-origin | CulturalFact | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-huainanzi-complete-24terms | HistoricalRecord | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-solarterms-pentad-system | HistoricalRecord | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-calendar-role | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-jieqi-zhongqi | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| fact-guyu-un-chinese-language-day | CulturalFact | global | high | B(独立直读×1) | **human-review-required** | — |
| glob-guyu-april-showers | GlobalExpression | global | high | D(独立直读×0) | **needs-research** | insufficient-evidence, global-candidate-hold |
| guyu-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |
| hist-guyu-naming-yushengbaigu | HistoricalRecord | term | medium | A(独立直读×3) | **auto-candidate** | — |
| hist-yueling-guyu-pentads | HistoricalRecord | term | medium | A(独立直读×2) | **auto-candidate** | — |
| legend-guyu-cangjie | CulturalFact | term | high | A(独立直读×3) | **human-review-required** | — |
| lit-guyu-yuanzhen | CulturalFact | term | low | A(独立直读×2) | **auto-candidate** | — |
| region-guyu-luoyang-mudan | RegionalExpression | regional | medium | A(独立直读×2) | **auto-candidate** | — |
| sci-guyu-longitude-30 | ScientificFact | term | medium | A(独立直读×2) | **auto-candidate** | — |
| sci-guyu-rain-sowing-window | ScientificFact | term | medium | A(独立直读×2) | **auto-candidate** | — |
| trad-guyu-nongshi | Tradition | term | medium | A(独立直读×2) | **auto-candidate** | — |
| trad-guyu-tea-toon | Tradition | term | medium | A(独立直读×2) | **human-review-required** | pending-primary-source |

## Findings 明细

- `glob-guyu-april-showers` **insufficient-evidence**（blocker）：没有正分证据来源（仅线索级或无来源）。
- `glob-guyu-april-showers` **global-candidate-hold**（info）：Global Expression 处于 candidate：不构成已核实的文化对应。
- `guyu-human-explanation` **explanation-gated**（major）：支撑卡或解释卡未 approved：按 Content Gate 禁止发布（Knowledge verified ≠ Explanation verified）。
- `trad-guyu-tea-toon` **pending-primary-source**（major）：存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。
```

入包处置（§8 规则）：human-review-required 的 claim 卡 status=in-review（legend-guyu-cangjie、fact-guyu-un-chinese-language-day、trad-guyu-tea-toon）；HumanExplanation/GlobalExpression 保持 draft；表中 6 张 02_shared 共享卡同为 human-review-required，属系统级既有卡，不入本节气审核包。

> 运行注记：本表为 2026-09-16 成功运行并存档的输出（.batch-tmp/guyu-route-output.txt）。其后一次复跑因**并行批次其他节气**新卡的 YAML 单引号错误（春分"安仁赶分社"卡）在全库加载时崩溃——与本节气 25 个文件无关（本节气文件 22/22 YAML 解析通过、链接 0 断裂），按铁律未代改他节气文件，留待该节气代理或人工修复。

## 修改记录

- 2026-09-16（第一轮建库）：建 13 知识卡+9 源卡，索引更新（补 calendar 维度与 links）；运行路由引擎并按入包规则定 status；完成 12 项审计与 19 维覆盖矩阵；修复本批次 4 处 YAML 单引号转义（fact-un-day/region/sci-rain/trad-nongshi/glob 各1处，共5处替换，全部复验通过）。

## 规范自检

- 未编造来源、引文或检索记录；未读原文一律标注；全部 human_review=null；无 approved 状态；仅写本节气文件（新建 24 文件 id 均含 guyu，编辑仅 01_terms/06_谷雨.md）；未运行 pnpm/git 命令；YAML 22/22 解析通过（修复 4 处单引号转义）；Wiki 链接目标均为已存在文件或本轮新建卡。

[[01_terms/06_谷雨|谷雨索引]] · [[07_research/sections/review-guyu|审核分节]] · [[04_sources/README|来源库]] · [[07_research/batch-24-solar-terms-plan|批量计划]]
