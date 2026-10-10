---
schema_version: '0.1.0'
id: 'research-qingming-batch-log'
type: 'ResearchNote'
title: '清明第一轮批量研究 · 执行日志（2026-09-16）'
solar_terms: ['qingming']
season: 'spring'
dimensions: ['ai-research-log', 'references']
region: []
period: null
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'unknown'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
research:
  {
    'task': '按批次规范完成节气05清明的第一轮完整研究：天文/物候/气候/寒食融合史/非遗锚点/习俗饮食/农谚/文学/全球Candidate/解释层',
    'queries':
      [
        '清明 太阳到达黄经15度 每年4月4日至6日 新华网 OR 中国天气网 OR 中国气象局 OR 中国政府网（WebSearch）',
        'site:ihchina.cn 清明节 国家级非物质文化遗产 项目（WebSearch）',
        '中国天气网 清明时节雨纷纷 江南 春雨 气候 4月（WebSearch）',
        '青团 清明节 江南 食俗 艾草 寒食 由来（WebSearch）',
        'Malaysia Singapore Chinese Qingming festival tomb sweeping Overseas Chinese 清明节 东南亚华人 扫墓（WebSearch）',
        '维基文库API：清明時節雨紛紛 / 唐六典 假寧 / 唐會要 寒食 上墓 / 燕京歲時記 清明 / 清嘉錄 清明 / 詠廿四氣詩',
        '直接URL：ihchina solar_details/44 与 project_details/14907、news.cn 2024清明稿、weather.com.cn 数据帝31期、singaporeccc.org.sg 清明页',
      ],
    'discovered_source_ids':
      [
        'source-ihchina-qingming-feature',
        'source-ihchina-qingming-project',
        'source-xinhua-qingming-2024',
        'source-weather-com-qingming-rain',
        'source-qingming-tangliudian-juan2',
        'source-qingming-tanghuiyao-juan23',
        'source-wikisource-dumu-qingming',
        'source-qingming-sccc-singapore',
        'source-ecnu-qingming-nanyang-leads',
      ],
    'conflicts':
      [
        '非遗网清明专题页物候段把"萍始生"并入清明三候，与《月令七十二候集解》不符（萍始生为谷雨初候，同页谷雨节原文已直读核对）——按古籍直读为准，冲突登记于 hist-yueling-qingming-pentads',
        '"万物生长此时"释名句：非遗网专题页归《燕京岁时记》且文字作"清洁而明净"；《燕京岁时记》维基文库本作"清淨明潔"且按语注明引自《岁时百问》；非遗网项目页亦归《岁时百问》——归属与文字双重出入，登记于 hist-qingming-hanshi-merger',
        '农谚异文：非遗网专题页"种瓜点豆" vs 项目页"点瓜种豆"（同一发布方两页），登记于 trad-qingming-nongshi',
        '杜牧《清明》作者归属：维基文库作品页无任何争议说明，学界讨论零直接来源——无法证实也无法排除，仅记 Needs Research',
        '工程冲突：并行批次中春分等节气的7个源卡存在YAML解析错误，官方 route.ts 全库加载即崩溃；本轮以容错包装脚本（跳过损坏文件）完成路由，未改动任何他节气文件',
      ],
    'conclusions':
      [
        '建立12张知识卡（sci×2/hist×2/region×1/trad×3/lit×1/glob×1/idea×1/explanation×1）与9张新Source卡（8直读+1检索摘要），复用既有直读源4张（月令/荆楚/燕京/淮南子）',
        '核心命题（唯一双身份+寒食融合）首次获得四点直读断代链：六世纪荆楚寒食条（含"曆合在清明前二日"注）→《唐六典》假宁令"寒食通清明四日"→《唐会要》开元二十年敕"寒食上墓…編入禮典"→清末"清明即寒食"；宋元明中段缺口如实保留',
        '高可信锚点：黄经15°/4月4-6日（非遗网+新华网双直读）、三候原文（月令直读+非遗网页混排冲突已证）、国家级非遗Ⅹ-2/2006（项目页信息栏直读）、江南春雨统计（中国天气网直读）',
        '主要证据缺口：扫墓重心转入清明的中段文献、青团/清明果谱系、杜牧诗归属、农谚地域与古籍源、三候现代物候验证、南洋实践第二源',
      ],
    'human_questions':
      [
        '《唐六典》"寒食通清明四日"的句读与唐代各朝给假天数变化，需文献学核读（《唐六典》点校本/《唐会要》相关条）',
        '扫墓由寒食转入清明的宋元明环节，建议从《东京梦华录》、方志系统补链后升级融合卡',
        '杜牧《清明》归属与系年：请人工对核《樊川文集》与《千家诗》版本',
        '南洋清明卡（Candidate）需直读"东西问"原稿+本地权威来源并获社区确认后方可升级',
        'route.ts 需对损坏YAML文件容错（单文件错误导致全库路由崩溃），建议报skill维护者',
      ],
  }
---

# 清明第一轮批量研究 · 执行日志

## 执行摘要

2026-09-16 由 AI 研究代理执行。研究问题（顶层）：**清明是什么？"唯一既是节气又是节日"的证据链完整到哪一步？寒食融合史各环能否文献直读？** 本轮完成 11 个页面的直读（非遗网2页、新华网、中国天气网、维基文库6页、新加坡华族文化中心1页）+2 组检索线索，产出 12 张知识卡、9 张新来源卡。非遗网 solar_details 编号确认：**清明=44.html**（供后续波次）。

## 流程记录

1. 样例卡与规范阅读（brief §1 十件套）。
2. 天文定义：非遗网44页直读（备用阅读器）+新华网2024稿直读（WebFetch），日期范围双源互证。
3. 物候：月令维基文库页 curl 直读，清明节段逐字摘录；**同步直读谷雨节段**证实"萍始生"归属，发现非遗网页混排。
4. 融合史：荆楚岁时记寒食条（含辨伪注）、唐六典卷二假宁令、唐会要卷二十三寒食拜扫（开元二十年敕全文）、燕京岁时记清明条四点直读；淮南子天文训"指乙則清明風至"复核。
5. 非遗锚点：ihchina 搜索页→project_details/14907.html 直读，Ⅹ-2/2006第一批/民俗类全部为信息栏原文字段。
6. 气候：中国天气网数据帝31期直读（1951-2010统计）。
7. 文学：杜牧《清明》维基文库作品页直读；咏廿四气诗检索不可用（维基文库无）。
8. 全球：SCCC 新加坡页直读 + 华东师大"东西问"检索线索；未采用墨西哥亡灵节方向（避免跨文化强行对应，南洋传播线证据更直接）。
9. 建卡→路由（容错包装）→按入包规则定 status→审核分节→索引更新。

## 12 项审计（brief §7）

1. **Unsupported Distribution**：通过。解释层三层文本零分布短语（大部分/普遍/各地/全国/更多地方均未出现）；气象命题限定"江南/北方"两域+具体统计口径。
2. **Regional Generalization**：通过（含处置记录）。非遗网"全国汉族和部分少数民族地区过此节日"仅作引文存于 region 卡证据区，未入命题；青团卡命题限定上海/江南；戴柳/佛多限定清末北京、寒食诸俗限定六世纪荆楚。
3. **Modern-as-Ancient**：通过。"网络祭扫"排除于传统卡外（exceptions 明记）；青团未写成古俗（谱系留白，检索线索"明清才流行"未直读故不采信）；秋千在清末文献明记"前明以來久革"。
4. **Historical Leakage**：发现 2 处（非遗网页面质量）：物候混排"萍始生"、释名句归属与文字改写——均已证据化登记进卡，内容以古籍直读为准，非遗网汇编按 medium 以下对待。
5. **Scientific Leakage**：通过。古籍卡（pentads/fusion/customs）无黄经/气象学现代概念；月令"雲薄漏日，日照雨滴則虹生焉"标注为古典解释体系；日期浮动机制只写入 sci 卡。
6. **Legend-as-Fact**：通过。介子推叙事标传说层，且六世纪杜公瞻注"據《左傳》及《史記》，並無介子推被焚之事"辨伪句已逐字入卡；SCCC 页同叙事亦标"据说/传说"。
7. **Weak Source Inflation**：通过。lit-dumu（单源 tier B）confidence=medium；glob（B+search-excerpt）low/unverified；无弱源标 high。
8. **Search Excerpt Misuse**：通过。ECNU leads 源 access=search-excerpt、verification=unverified，仅支撑 Candidate（low）；其余引用均为 direct-read。
9. **Cross-source False Validation**：通过。trad-nongshi 两源同属非遗网（ind=1）故仅 medium；sci/region/hist-fusion 的 cross-checked 均为真实独立发布方互证（非遗网/新华网/维基文库古籍）。
10. **Creative-as-Fact**：通过。idea 卡 opinion/creative+性质声明；三创意均标注依据卡与红线。
11. **Global Forced Correspondence**：通过。南洋卡三要素齐全，relationship 明示"传播延续、不是平行发明、不得写成外国对应节日"；引擎仅 global-candidate-hold(info)。
12. **Shared Knowledge Duplication**：通过。黄道24等分/UNESCO2016/节气属阳历/七十二候体系/淮南子序列/节气-中气分组全部链接 02_shared，未复述；本节气卡仅含清明专属命题。

## 19 维覆盖矩阵

| 维度 | 状态 | 依据/缺口 |
|---|---|---|
| astronomy | complete | sci-qingming-longitude-15（high，双机构直读） |
| calendar | partial | 日期浮动+官方编算在 sci 卡内；清明农历位置无专卡（共享卡承载机制） |
| climate | complete | sci-qingming-jiangnan-rain（high，统计口径明确） |
| phenology | complete | hist-yueling-qingming-pentads（high，古籍直读+混排冲突已证）；现代物候验证缺 |
| agriculture | partial | trad-qingming-nongshi（medium，tradition 层）；农谚地域未标注、农事科学口径未核 |
| ecology | missing | 无现代物候/生态观测卡 |
| chinese-life | complete | 融合史（high）+习俗（medium）+食俗（medium） |
| customs | complete | trad-qingming-customs + region 卡 |
| food | partial | 青团卡地域限定完备；"清明果"/草仔粿谱系留白 |
| history | complete | 四点直读断代链；中段缺口如实记录 |
| literature-art | partial | 杜牧《清明》一卡；咏廿四气诗不可用、归属未核 |
| regional-differences | partial | 国家级项目+三子项清单（页内"相关项目"）；子项详情页未逐个直读 |
| scientific-interpretation | complete | 黄经+江南春雨两卡 |
| global-expressions | weak | Candidate 一张（单直读源+检索线索） |
| visual-assets | missing | 无已授权素材 |
| audio-assets | missing | 无素材 |
| interaction-ideas | complete | idea 卡 3 条创意 |
| references | partial | 新增9源+复用4源；GB/T 正文等历轮缺口仍在 |
| ai-research-log | complete | 本日志+审核分节 |

统计：complete 9 / partial 6 / weak 1 / missing 3。

## 素材边界审计

本轮零素材入库：无图片/音频/视频引用；所有古籍引文均为短摘录+定位（locator）；未复制整书；.batch-tmp 仅作抓取工作区不入知识库；未改动任何他节气文件、02_topics、02_shared、scripts、packages。

## 路由引擎运行记录

官方命令 `npx tsx skills/solar24-cultural-research/workflows/route.ts qingming` 因**并行批次中春分等节气 7 个源卡 YAML 解析错误**（他者文件，未改动）崩溃；改用容错包装（跳过损坏文件后调用同一 routeTerm），输出如下（本节气 12 卡 + 被 term 过滤器纳入的 6 张共享卡）：

```markdown
# Routing report — qingming

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| fact-solarterms-unesco-2016 | CulturalFact | system | high | A(ind=2) | human-review-required | — |
| fact-solarterms-yellow-river-origin | CulturalFact | system | high | A(ind=1) | human-review-required | — |
| hist-huainanzi-complete-24terms | HistoricalRecord | system | high | A(ind=1) | human-review-required | — |
| hist-solarterms-pentad-system | HistoricalRecord | system | high | A(ind=2) | human-review-required | — |
| sci-solarterms-calendar-role | ScientificFact | system | high | A(ind=2) | human-review-required | — |
| sci-solarterms-jieqi-zhongqi | ScientificFact | system | high | A(ind=2) | human-review-required | — |
| glob-qingming-nanyang-chinese | GlobalExpression | global | high | B(ind=1) | human-review-required | global-candidate-hold(info) |
| hist-qingming-hanshi-merger | HistoricalRecord | term | medium | A(ind=2) | auto-candidate | — |
| hist-yueling-qingming-pentads | HistoricalRecord | term | medium | A(ind=1) | human-review-required | evidence-below-confidence(major) |
| lit-dumu-qingming | CulturalFact | term | medium | B(ind=1) | auto-candidate | — |
| qingming-human-explanation | HumanExplanation | term | medium | D(ind=0) | human-review-required | explanation-gated(major) |
| region-qingming-national-ich | RegionalExpression | regional | medium | A(ind=2) | auto-candidate | — |
| sci-qingming-jiangnan-rain | ScientificFact | term | medium | A(ind=2) | auto-candidate | — |
| sci-qingming-longitude-15 | ScientificFact | term | medium | A(ind=4) | auto-candidate | — |
| trad-qingming-customs | Tradition | regional | medium | A(ind=2) | auto-candidate | — |
| trad-qingming-food | Tradition | regional | medium | A(ind=1) | human-review-required | pending-primary-source(major) |
| trad-qingming-nongshi | Tradition | term | medium | A(ind=1) | auto-candidate | — |

## Findings 明细

- `glob-qingming-nanyang-chinese` **global-candidate-hold**（info）：Global Expression 处于 candidate：不构成已核实的文化对应。
- `hist-yueling-qingming-pentads` **evidence-below-confidence**（major）：置信度 high 高于证据支撑（tier A，独立直读方 1）。
- `qingming-human-explanation` **explanation-gated**（major）：支撑卡或解释卡未 approved：按 Content Gate 禁止发布（Knowledge verified ≠ Explanation verified）。
- `trad-qingming-food` **pending-primary-source**（major）：存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。
```

本节气 12 卡路由统计：A（auto-candidate）7 · B（human-review，非C组）2 · C（human-review，GE/HE 类型）2 · D（needs-research/reject）0。共享卡 6 张路由为既有状态（human-review-required），非本轮产物，不计入。

入包规则执行：hist-yueling-qingming-pentads、trad-qingming-food 两张 claim 卡 status 已置 in-review；GlobalExpression/HumanExplanation/auto-candidate 卡保持 draft。

## 修改记录

- 2026-09-16（第一轮）：建卡12张+源卡9张；引擎容错运行；审核分节 [[07_research/sections/review-qingming|review-qingming]]；索引 [[01_terms/05_清明|05_清明]] 更新（补 calendar 维度）。
