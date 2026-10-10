---
schema_version: '0.1.0'
id: 'research-daxue-batch-log'
type: 'ResearchNote'
title: '大雪批量研究 · 第一轮执行日志（2026-09-16）'
solar_terms: ['daxue']
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
    'task': '按 24 节气批量研究规范完成大雪（21，winter）第一轮研究：天文/物候与命名（月令直读+异文登记）/节气大雪≠天气大雪（本节气知识锚）/瑞雪兆丰年农谚与科学解释两层分卡/腌肉与封河习俗（机构汇编层）/寒号鸟释义链辨析/台湾乌鱼汛地域卡/文学（柳宗元《江雪》）/全球表达（萨米雪知识 Candidate）/解释层/创意层',
    'queries': [
      'ihchina 编号确认：curl 直连 -L solar_details/6981.html，页面标题"千里冰封 万里雪飘——二十四节气之大雪"命中（brief 预计编号正确；本节气编号=6981，供后续波次）',
      'WebSearch：大雪 节气 太阳到达黄经255° 12月6日至8日 新华网 OR 中国天气网 OR 中国气象局（命中新华网专题/中国天气网专题）',
      'WebFetch 直读：news.cn/culture/topic/zhuanti/201712/617.html（新华网专题导语，成功）；weather.com.cn/zt/tqzt/08dxzt/12/62670.shtml（中国天气网2008专题，成功，全文含等级标准与分区气候）；kepu.gmw.cn/2023-12/07/content_37013768.htm（光明网萧放/郑艳学者文，成功）',
      '维基文库直读（curl 走代理 127.0.0.1:7897）：月令七十二候集解（全页抓取切大雪节，得定义句+三候全文注文；发现"至此而雪盛矣"与机构引文"至此而雪盛也"异文）；江雪（柳宗元作品页全文直读）',
      'WebSearch：寒号鸟 复齿鼯鼠 科普中国 OR 中国天气网 OR 中科院（命中科普时报/浙江在线/中国国家地理/人民网）；WebFetch 直读：digitalpaper.stdaily.com 科普时报文（404 未读成）；zjnews.zjol.com.cn 都市快报考据稿（成功）',
      'WebSearch：Sámi reindeer herders snow terminology traditional ecological knowledge Eira（命中 UiT 博士论文 PDF/Septentrio 期刊/Springer 章节，均留线索未直读）；日本 二十四節気 大雪 たいせつ 気象庁 大雪警報 おおゆき（命中 tenki.jp/气象厅页面，留线索未直读）',
    ],
    'discovered_source_ids':
      [
        'source-ihchina-daxue-feature',
        'source-weathercn-daxue-2008',
        'source-xinhua-daxue-topic',
        'source-gmw-ruixue-daxue',
        'source-zjol-hanhaoniao',
        'source-wikisource-jiangxue',
        'source-eira-sami-snow',
      ],
    'conflicts':
      [
        '《月令》大雪定义句：维基文库直读"大雪，十一月節。大者，盛也。至此而雪盛矣" vs 非遗网2017/光明网2023引文"大雪，十一月节，至此而雪盛也"（也/矣异文+中间句省略）——以直读为准，登记待校勘',
        '初候物种：非遗网"寒号虫（一种鸟名）" vs 《月令》注文驳斥鹖鴠=寒号虫 vs 都市快报动物学考据寒号鸟=复齿鼯鼠（啮齿类）——三层释义流变立辨析卡（contested=true），不取任何一层为定论',
        '三候录文：中国天气网"一候鹃鸥不呜"且"荔挺=兰草" vs 《月令》"鶡鴠不鳴""荔=馬薤"——另一录文/释义系统，登记不合并',
        '农谚异文："今年麦盖三层被"（非遗网/中国天气网）vs"冬天麦盖三层被"（光明网）首二字异；"大雪纷纷是旱年"（非遗网正文）vs"大雪纷纷是丰年"（同页列表）语义相反——口传异文两存',
        '日期范围："12月7日或8日"（中国天气网直读）vs"12月6-8日"（百度百科/人大农发学院，检索摘要级）——claim 采用直读口径，12月6日入待核验',
      ],
    'conclusions':
      [
        '天文定义获三独立机构直读（ihchina/中国天气网/新华网）互证：黄经255°、第21个、冬季第三个、仲冬开始；日期按直读写12月7日或8日',
        '节气大雪≠天气大雪（同词异义）+大雪后降水反而减少——本节气最有公众价值的去误解知识，已立 high 卡',
        '瑞雪兆丰年按 brief 要求两层分卡：trad（农谚层）与 sci（保温/增墒/减虫机制层）互链不混排；"雪水氮化物5倍"单源降入待核',
        '寒号鸟释义链（鹖鴠→寒号虫→复齿鼯鼠）存在古典注家已驳的第一环断裂——本节气最重要的防幻觉发现，与"雨生百谷"样本同级',
        '腌肉/封河均为机构汇编层可确证的当代叙述，古籍锚缺失显式记录；东北西北冰嬉、清代冰嬉典制无直读不写',
        '台湾乌鱼汛是华南沿海的生计型地域锚点，与北方封河构成同一节气的南北对照（region 卡）',
        '《江雪》直读可用，但以"咏雪诗非节气诗"如实标注关联方式；高骈《对雪》未直读记 Needs Research',
        '全球表达取萨米雪知识 Candidate（search-excerpt 级、seasonal-experience 关系、三要素齐备）；日语"大雪"同形异义（taisetsu 节气 vs oyuki 灾害）作镜像素材记入 difference 并留 Needs Research',
      ],
    'human_questions':
      [
        '《月令》"也/矣"异文是否需要本轮内完成中华书局印本对校，还是统一留给版本校勘专项？',
        'trad-daxue-yanrou 的 modern-as-ancient finding 系否定式警示语触发字面匹配（卡内写""大雪腌肉自古如此"不可写"）——此类 finding 是否需要在引擎侧识别否定语境？',
        '寒号鸟辨析卡（contested）建议人工裁决三层释义在对外内容中的呈现权重：释义史讲法 vs 直接采用机构科普口径',
        '小雪节气侧腌腊卡（另一波次）建成后，"小雪腌菜，大雪腌肉"跨节气链接的归属规则：俗语本体归小雪还是大雪？',
        '日语"大雪"同形异义镜像是否值得单独建 Candidate 卡（与本节气"节气大雪≠天气大雪"的中国同词异义互为镜像）？',
      ],
  }
---

# 大雪批量研究 · 第一轮执行日志

## 执行摘要

大雪（21，winter）第一轮完成：14 张知识卡（sci×3 / hist×3 / trad×3 / region×1 / lit×1 / glob×1 / idea×1 / explanation×1）+ 7 张新 Source 卡（6 直读 + 1 线索）+ 索引更新。ihchina 专题页编号实测 **6981**（标题"千里冰封 万里雪飘——二十四节气之大雪"，curl 直连一次成功）。四个研究性发现最有价值：(1) 《月令》定义句"至此而雪盛**矣**"与两机构引文"雪盛**也**"异文；(2) 初候鹖鴠的释义链（鹖鴠→寒号虫→复齿鼯鼠）第一环正是《集解》注文本人驳斥过的一环，而当代机构科普普遍沿用被驳的释法；(3) 中国天气网页三候作"鹃鸥不呜"、释荔挺为兰草，属另一录文系统；(4) 节气"大雪"与降雪等级"大雪"同词异义是本节气独有的高发公众误解，已立知识锚卡。YAML 两次翻车（串内 ASCII 单引号，region/trad-yanrou 两卡）已修复并用 python 全量复验通过。

## 流程记录

1. 读 brief §0-§10 与全部样例卡（sci/hist/trad/lit/glob/explanation/idea/Source×3/立春索引）。
2. 情报核验：ihchina solar_details/6981 = 大雪（标题确认，2017-12-07 创建）。
3. 直读（成功 8 页）：ihchina 6981（curl 直连）；月令七十二候集解（curl 代理全页切大雪节）；江雪（curl 代理）；中国天气网大雪专题、新华网专题导语、光明网学者文、都市快报寒号鸟稿（WebFetch）。直读未成：科普时报寒号鸟文（404）。检索摘要级：百度百科、人大农发学院、tenki.jp、日本气象厅、UiT/Septentrio/Springier 萨米文献、人民网鼯鼠稿。
4. 复用既有直读源：source-yueling-qishierhou-wikisource（重抓全页、逐字摘大雪节）。
5. 写卡 → python YAML 全量校验 → 首跑 batch-route（发现本节气 2 卡 YAML 错误，修复）→ 复跑 → 按 §8 入包规则调状态（4 卡 in-review）→ 写审核分节与索引。

## 12项审计（§7）

1. **Unsupported Distribution**：通过。解释层无"大部/普遍/各地/全国"；"南方不少人家"（按非遗网"南方很多人家"降格）、"黄河以北谚称"（谚语地域锚）均为有卡背书的限定表述。研究发现：中国天气网"我国辽阔大地已披上冬日盛装"类文学化分布句未引入卡内命题。
2. **Regional Generalization**：通过。封河卡明确"黄河以北"锚+"长江流域对照"；乌鱼汛卡限定"台湾西部沿海"；瑞雪机制卡标注"无冬区不适用"。
3. **Modern-as-Ancient**：发现+finding。trad-daxue-yanrou 被引擎判 modern-as-ancient（risk=high）——卡内命题本身是否定式警示（""大雪腌肉自古如此"不可写"），疑似否定语境字面匹配，交人工判读；卡的实质内容（机构汇编层可确证、古籍锚缺失）已如实分层。
4. **Historical Leakage**：通过。三候卡、命名卡无现代概念倒灌（黄经/气象学表述只出现在 sci 卡）；阴阳框架标注为"古典解释体系"。
5. **Scientific Leakage**：通过。农谚卡（trad）无农学机制内容，机制全部在 sci-daxue-snow-agronomy；两卡互链分层。
6. **Legend-as-Fact**：通过（且为本轮核心成果）。寒号鸟故事以 contested 辨析卡承载，三层释义各归其层，无一层写成物候事实。
7. **Weak Source Inflation**：通过。检索摘要级信息（12月6日、乌鱼子、复齿鼯鼠第二源、日语同形异义）全部降入 exceptions/待核/Needs Research，未撑任何卡命题。
8. **Search Excerpt Misuse**：通过。唯一 search-excerpt 源（source-eira-sami-snow）verification=unverified，仅支撑 low 的 Candidate 卡。
9. **Cross-source False Validation**：发现+处置。非遗网与光明网在农谚/习俗段高度同源（疑转载链），乌鱼汛卡已注明"互证谚语文本成立、升 high 不成立"维持 medium；月令引文两机构一致但与维基文库本异文，未被用来抵消直读。
10. **Creative-as-Fact**：通过。idea 卡带性质声明与误导风险标注；创意不引用未核内容（氮化物5倍已排除出交互文案）。
11. **Global Forced Correspondence**：通过。萨米卡三要素齐备、relationship 用枚举 seasonal-experience、明示"不是外国版大雪节气"；日语镜像记 difference 不立对应。
12. **Shared Knowledge Duplication**：通过。黄道24等分/UNESCO/七十二候体系/节中气/淮南子序列/黄河起源全部链接引用（02_shared），本节气卡不复述命题；卡内只写本节气特有内容（255°、三候、异文等）。

## 19维覆盖矩阵

| 维度 | 状态 | 说明 |
|---|---|---|
| astronomy | complete | 黄经255°/日期/序位三机构直读（high） |
| calendar | partial | 节气/中气与历法角色以共享卡承载+链接（"十一月節"身份已写），本节气无独立 calendar 卡 |
| climate | complete | 节气大雪≠天气大雪+分区气候（high） |
| phenology | complete | 三候原文+注文直读（high，单直读方待校） |
| agriculture | complete | 农谚层+机制层两卡（medium/high） |
| ecology | partial | 寒号鸟物种辨析（medium·contested）+乌鱼汛生态锚；现代物候观测未建卡 |
| chinese-life | complete | 腌肉/封河/解释层三卡覆盖备冬生活线 |
| customs | complete | 腌肉、封河、乌鱼汛三线机构层（均 medium） |
| food | partial | 腌肉卡（含腌雪菜线索）；养生进补段未建卡（Needs Research） |
| history | complete | 命名卡+三候卡+释义流变卡+共享淮南子/UNESCO |
| literature-art | complete | 《江雪》直读（medium）；高骈《对雪》待读 |
| regional-differences | complete | 乌鱼汛 vs 封河南北对照+黄河起源共享卡 |
| scientific-interpretation | complete | 同词异义+雪被机制+黄经定义三卡 |
| global-expressions | partial | 萨米 Candidate（low，needs-research 路由）；日语镜像留白 |
| visual-assets | missing | 无已授权素材（创意卡已列需求清单） |
| audio-assets | missing | 同上（"雪寂"声音线索只在三候卡文字层） |
| interaction-ideas | complete | 4条创意（idea 卡） |
| references | complete | 7 新源（6直读+1线索）+7复用源登记 |
| ai-research-log | complete | 本日志+审核分节 |

小计：complete 14 / partial 4 / weak 0 / missing 2（visual/audio 为全库共性缺口，非本节气特有）。

## 素材边界审计

- 配图零使用：ihchina 页图1-10（长城雾凇/壶口流凌/腊肉/什刹海冰场等）仅作文字信息源，图片版权未清，一律不引用；页面自述"部分图文内容来自网络"。
- 文本引用长度：古籍引文限于大雪节原文与必要注文；机构文摘录为定位所需短段；《江雪》全诗 20 字（公有领域）完整引用合理。
- 未读内容不引：ihchina"节气养生"段、高骈《对雪》、科普时报 404 文、萨米文献 PDF 均未进入任何卡的证据区。
- .batch-tmp 只写了 daxue- 前缀临时文件（daxue-ihchina-6981 / daxue-yueling / daxue-jiangxue 各 .html/.txt）。

## 引擎路由表（npx tsx .batch-tmp/batch-route.mts daxue，2026-09-16，YAML 修正后复跑）

```
# Routing report — daxue（tolerant loader）

> 跳过 2 个无法解析的文件（并行批处理半成品，非本节气问题）：
> - knowledge-base\04_sources\source-people-shuangjiangjie-gx-2022.md :: Unexpected flow-seq-end token in YAML stream: "]" at line 9, column 54:
> - knowledge-base\04_sources\source-people-xiaoxue-pickling-2015.md :: Unexpected scalar at node end at line 34, column 176:

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| daxue-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |
| glob-daxue-sami-snow-knowledge | GlobalExpression | global | high | C(独立直读×0) | **needs-research** | weak-source-low-confidence, global-candidate-hold |
| hist-daxue-hanhaoniao-bianxi | HistoricalRecord | term | high | A(独立直读×4) | **human-review-required** | contested-open |
| hist-daxue-naming | HistoricalRecord | term | medium | A(独立直读×3) | **auto-candidate** | — |
| hist-yueling-daxue-pentads | HistoricalRecord | term | medium | A(独立直读×1) | **human-review-required** | evidence-below-confidence |
| lit-liuzongyuan-jiangxue | CulturalFact | term | low | B(独立直读×1) | **auto-candidate** | — |
| region-daxue-taiwan-wuyu | CulturalFact | term | medium | A(独立直读×2) | **auto-candidate** | — |
| sci-daxue-jieqi-vs-tianqi | ScientificFact | term | medium | A(独立直读×2) | **auto-candidate** | — |
| sci-daxue-longitude-255 | ScientificFact | term | medium | A(独立直读×4) | **human-review-required** | pending-primary-source |
| sci-daxue-snow-agronomy | ScientificFact | term | medium | A(独立直读×3) | **auto-candidate** | — |
| trad-daxue-fenghe | Tradition | term | medium | A(独立直读×2) | **auto-candidate** | — |
| trad-daxue-ruixue | Tradition | term | medium | A(独立直读×3) | **auto-candidate** | — |
| trad-daxue-yanrou | Tradition | term | high | A(独立直读×2) | **human-review-required** | modern-as-ancient |

## Findings 明细

- `daxue-human-explanation` **explanation-gated**（major）：支撑卡或解释卡未 approved：按 Content Gate 禁止发布（Knowledge verified ≠ Explanation verified）。
- `glob-daxue-sami-snow-knowledge` **weak-source-low-confidence**（blocker）：弱来源+低置信度的占位卡，应继续研究而非进入审核。
- `glob-daxue-sami-snow-knowledge` **global-candidate-hold**（info）：Global Expression 处于 candidate：不构成已核实的文化对应。
- `hist-daxue-hanhaoniao-bianxi` **contested-open**（major）：contested=true：存在未解决分歧，必须人工裁决。
- `hist-yueling-daxue-pentads` **evidence-below-confidence**（major）：置信度 high 高于证据支撑（tier A，独立直读方 1）。
- `sci-daxue-longitude-255` **pending-primary-source**（major）：存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。
- `trad-daxue-yanrou` **modern-as-ancient**（major）：传统卡使用"自古/古已有之"式断代断言，需逐环文献。
```

注：另有 6 张 02_shared 共享卡（unesco/yellow-river/huainanzi/pentad-system/calendar-role/jieqi-zhongqi）同为 human-review-required，属系统级既有卡，不在本节气审核包内（沿处暑波次口径）。idea-daxue-interaction-sketches（InteractionIdea）不参与 claim 路由。

## 修改记录

- 2026-09-16（第一轮）：建本日志；14 知识卡+7 源卡+索引更新；YAML 两处修复（region-daxue-taiwan-wuyu / trad-daxue-yanrou 串内 ASCII 单引号改「」）；4 卡按路由升 in-review（hist-hanhaoniao / hist-yueling-pentads / sci-longitude-255 / trad-yanrou）。
