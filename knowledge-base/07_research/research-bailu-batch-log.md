---
schema_version: '0.1.0'
id: 'research-bailu-batch-log'
type: 'ResearchNote'
title: '白露批量研究 · 第一轮执行日志（2026-09-16）'
solar_terms: ['bailu']
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
    'task': '按 24 节气批量研究规范完成白露（15，autumn）第一轮研究：天文定义/物候与雁行方向注文（本节气知识锚）/命名/露形成机制/着衣与农事谚/食俗地域版图/太湖禹王祭/文学（蒹葭+杜甫）/全球表达/解释层/创意层',
    'queries': [
      'ihchina：curl 直连试探 solar_details 6972-6976（302 跟随后页面标题确认：6972大暑/6973立秋/6974处暑/6975白露/6976秋分——白露=6975，final Article/Index/detail?id=9852）；站内检索"太湖 祭禹王 项目"（project_details 无命中）',
      '维基文库（curl 走代理）：月令七十二候集解全页（切白露节+雨水节对照段）；API srsearch=蒹葭 → 詩經/蒹葭 全文页；API srsearch=月夜憶舍弟 → 作品页全文；禮記/月令 全页（切孟秋之月段）',
      '机构稿（curl 直连）：news.cn/2022-09/06/c_1128980104.htm（新华社2022白露稿）；kpzg.people.com.cn/n1/2022/0905/c404214-32519357.html（科普中国·露形成，GBK解码）；weather.com.cn/tianjin/tqyw/09/3491865.shtml（中国天气网天津站·露和霜）；paper.people.com.cn/rmrbhwb/html/2016-09/10/content_1711459.htm（人民日报海外版，UTF-8重解码）；news.cau.edu.cn/zhxwnew/584965.htm（农大2018汇编稿）；dili360.com/ch/article/p5a5ef8b3b517f64.htm（中华遗产·十样白，部分直读）；fjdaily.com/app/content/2025-09/07/content_3544271.html（福建日报·福州龙眼）',
      'WebSearch：白露 黄经165° 9月7日至9日 新华网；白露 露水形成 辐射冷却 气象局 中国天气网；白露 福州 龙眼 习俗；白露 十样白 温州；site:ihchina.cn 太湖 祭禹王；Issa haiku world of dew tsuyu no yo impermanence',
    ],
    'discovered_source_ids':
      [
        'source-ihchina-bailu-feature',
        'source-xinhua-bailu-2022',
        'source-rmrbhwb-bailu-2016',
        'source-kpzg-dew-formation',
        'source-weathercn-tianjin-lushuang',
        'source-cau-bailu-2018',
        'source-dili360-shiyangbai',
        'source-fjdaily-bailu-longyan-2025',
        'source-wikisource-shijing-jianjia',
        'source-wikisource-dufu-yueye-shedi',
        'source-lionsroar-issa-dew',
      ],
    'conflicts':
      [
        '转凉谚异文：非遗网/农大稿"白露秋风夜，一夜凉一夜" vs 新华社"白露秋分夜，一夜凉一夜"——两系并流传本，登记于 trad-bailu-shenbulu，不裁决',
        '着衣谚异文："处暑十八盆，白露勿露身"（非遗网/农大/人民海外版）vs"白露身不露，寒露脚不露"（新华社）vs"白露节气勿露身，早晚要叮咛"（农大）——同卡并存',
        '燕向口径分歧：月令集解注文"元鳥歸……此時自南而往北也。燕乃北方之鳥，故曰歸"（北归说）vs 非遗网/人民海外版"燕子等候鸟南飞避寒/迁移避寒"（南飞说）——按古今分层登记于 hist-yueling-bailu-pentads，未裁决',
        '"十样白"清单分歧：中华遗产给全十味（白芍…白晒参）vs 农大稿"如白木模、白毛苦等等"+"三样白"异说——清单无定本，并存登记',
        '人民日报海外版禹王段"在山西沿黄河一带，人们在祭禹王的同时，也要祭土地神……"与非遗网/农大稿无地域平行文本不合，疑"（太湖）西山"倒文排印讹——按异文登记于 region-bailu-taihu-yuwang',
        'LEAD 防幻觉命中：任务线索命名引文"水土湿氣凝而為露……白者露之色"未见于月令集解直读原文（原文为"秋屬金，金色白，陰氣漸重，露凝而白也"）——不采信，卡内明示（hist-bailu-naming）',
        '农大稿页脚自述"根据百度百科等网络知识综合整理"，且与非遗网/人民海外版白露段文字高度平行（"旧时南京人都十分青睐白露茶"逐字同句）——三源疑共享汇编源，按同源汇编族处理，跨源印证不重复计数（源卡已警示）',
      ],
    'conclusions':
      [
        '第一轮建立笔记14张（12知识卡+解释层+创意层）与Source卡11张（10直读+1检索摘要级）；引用共享卡（sci-solarterms-calendar-role / fact-solarterms-unesco-2016 实引；hist-solarterms-pentad-system / sci-solarterms-jieqi-zhongqi / hist-huainanzi-complete-24terms / fact-solarterms-yellow-river-origin 链接级引用），全部仅链接不复述',
        '本节气知识锚成立：①三候全鸟类+"来/归"方向语义（鸿雁来=自北来南 vs 雨水候雁北=自彭蠡北归，注文逐字直读）；②命名双分层（观察层"陰氣漸重露凝而白"+五行解释层"秋屬金金色白"）；③露形成现代机制（科普中国+中国天气网双机构直读）与古籍观察互证不混排',
        'solar_details 编号体系再扩展：6972大暑/6973立秋/6974处暑/6975白露/6976秋分 连续确认（6968+段秋季延续递增），供寒露/霜降波次试探起点 6977-6978',
        '习俗地域版图（全部直读源明标地域）：太湖西山祭禹王（非遗网+人民海外版）、南京白露茶（非遗网+人民海外版，同源警示）、湖南资兴米酒（非遗网）、福州龙眼（福建日报2025当日稿+央视转述）、温州十样白（中华遗产2018，部分直读）；brief 线索的"苏南米酒"仅农大汇编稿一句、"吃番薯"无地域标注——均未立卡，记 Needs Research',
        '文学双卡成立：蒹葭三章全文+毛诗序+安大简异文（维基文库直读；"诗句早于节气体系"的时间方向已在解释层标注）；杜甫《月夜忆舍弟》全文直读+新华社引文交叉（两不同发布方）',
        '主要证据缺口：GB/T 33661-2017 正文（继承全节气待办）、三候现代物候验证、太湖香会当代现状与非遗产权归属、资兴米酒/程酒方志、十样白温州方志、蒹葭与杜甫注本系年、露の世直读源、"温差最大节气"第二源',
      ],
    'human_questions':
      [
        '"昼夜温差最大的节气——白露"（新华社2022独家表述）是否采信入正式内容（建议找国家气候中心第二源，否则只留引文层）',
        '燕向分歧的对外口径：主用古籍注文（北归说）还是机构通说（南飞避寒），还是双注并列（现卡处理）',
        '太湖祭禹王的非遗产权核查（江苏省级/苏州市级名录）与2016年后香会现状——region 卡升 high 的前提',
        '"秋风夜/秋分夜"两版谚语对外主用哪版（建议主用"秋风夜"——非遗网+农大两源，括注新华社"秋分夜"）',
        '农大稿作为"机构渠道+网络汇编"的使用边界（本轮仅作线索级与旁证，是否维持此定位）',
        '露の世 Candidate 的直读核验优先级（一茶句集日文原典）与跨文化顾问确认流程',
        'GB/T 33661-2017 正文直读（继承待办，适用全部节气定义）',
      ],
  }
---

# 白露批量研究 · 第一轮执行日志

## 执行摘要

2026-09-16 由 AI 研究代理执行（brief：`.batch-tmp/AGENT-BRIEF.md`）。顶层问题：**白露是什么？为什么一个露水现象能成为一个节气的名字？三候里的雁为什么"来"、燕为什么"归"？**

## 流程记录

1. **样例对齐**：读 brief + 立春 9 张样例卡 + 索引目标形态 + 小暑日志（波次情报），仿写结构。
2. **非遗网定位（顺利）**：按 §10 情报从 6971+1 起试探——6972/6973/6974/6975/6976 全部 302→200，标题确认 **白露=6975**（"蒹葭苍苍 白露为霜——二十四节气之白露"），curl 直连一次成功，无需 web_reader 备援。
3. **古籍直读（维基文库，curl 走代理）**：月令七十二候集解白露节三候+注文、雨水节"候雁北"对照段；礼记·月令孟秋"涼風至，白露降"；詩經/蒹葭全页（API 搜索定位）；月夜憶舍弟作品页（API 搜索定位）。
4. **机构稿直读（curl 直连为主）**：新华社2022（定义+成因段+谚语+三候鸟类特征）、科普中国（露机制全文，GBK 解码）、中国天气网天津站（露霜对比）、人民日报海外版2016（UTF-8 重解码）、农大2018（网络汇编，降权）、中华遗产2018（十样白，部分直读）、福建日报2025（龙眼当日报道）。
5. **检索级**：Issa 露の世（Lion's Roar 摘要，Candidate 专用）；太湖祭禹王项目页排查（site: 检索无命中，确认无独立 project_details 页）。
6. **建卡与引擎**：14 笔记 + 11 源卡 + 索引更新。首跑发现 3 个问题并修复：①lit-dufu period 行残留 `]`（YAML 崩，自纠）；②hist-yueling 单直读源撑 high 判 evidence-below-confidence（补非遗网旁证为第二源）；③glob 卡"而非传播或等同"未命中引擎否定词表被判强行对应（改写为"不是传播关系，也不是等同关系"）。二跑通过；按 §8 将 sci-longitude-165、trad-tea-rice-wine 两张 human-review 卡升 in-review。

## 12项审计（§7）

1. **Unsupported Distribution**：发现+已处理——农大稿"我国图古人将白露分为三候"类全称表述、"十样白""龙眼"等条目按地域逐条落卡；解释层逐句自查无未背书的"全国/各地/普遍"（习俗均写南京/资兴/福州/温州/太湖西山）。
2. **Regional Generalization**：通过——五组习俗全部带直读源明标地域；谚语类（身不露/农谚组）地域未标者已在卡内明示"流传地域未标注"并禁外推。
3. **Modern-as-Ancient**：通过——"旧时南京""历来（资兴）"均机构表述照录并标注断代未考；无任何"自古/起源于X朝"式断言入卡。
4. **Historical Leakage**：通过——三候卡、命名卡无黄经/辐射冷却/气象学概念；黄经卡不载古典内容；露机制卡与命名卡互相分层链接而非混排。
5. **Scientific Leakage**：通过——"秋屬金，金色白"五行解释只入 HistoricalRecord 并明标古典解释体系；sci 卡命题只含辐射冷却/露点机制本身；"白露白迷迷"占验留 trad 卡。
6. **Legend-as-Fact**：通过——禹王"治水英雄、与尧舜并称"按传说层叙述处理（region 卡 exceptions 明示其历史性不在命题内）；"一颗顶只鸡"按民间观念框架记录。
7. **Weak Source Inflation**：发现+已处理——农大稿（网络汇编）降为线索级/旁证，程酒古籍引文全部隔离未用；中华遗产仅部分直读已在源卡标注；"温差最大节气"单源表述降格 exceptions；三源同源汇编族警示（非遗网/人民海外版/农大）写入两张源卡。
8. **Search Excerpt Misuse**：通过——露の世唯一 search-excerpt 源（Lion's Roar），verification=unverified，仅支撑 low Candidate；引擎路由 needs-research（insufficient-evidence），符合预期设计。
9. **Cross-source False Validation**：发现+已处理——非遗网、人民海外版、农大三源文字高度平行（同源汇编族），已在源卡互链警示且跨源印证不重复计数；黄经/日期的独立直读为非遗网×新华社（不同发布方）。
10. **Creative-as-Fact**：通过——idea 卡三条全部带性质声明+依据卡+误导风险红线（含"露非白露独有""注文方向分歧不得裁决""诗句早于节气"三处专属红线）。
11. **Global Forced Correspondence**：发现+已处理——首跑引擎判 glob 卡 relationship_reason 存在未否定"等同"（"而非传播或等同"未入否定词表），改写后复核通过；三要素以"不是对应、不是等同、不是传播关系"明示。
12. **Shared Knowledge Duplication**：通过——黄道24等分/节气阳历属性/置闰/UNESCO/七十二候体系/黄河起源均只链接 02_shared 卡；本节气卡内不复述系统级命题。

## 19维覆盖矩阵

| 维度 | 状态 | 支撑卡 |
|---|---|---|
| astronomy | complete | sci-bailu-longitude-165（high，3机构直读：非遗网/新华社/人民海外版） |
| calendar | partial | 无专属卡；节/中气与"八月节"月序标签链接共享卡（sci-solarterms-jieqi-zhongqi）与命名卡 |
| climate | complete | sci-bailu-dew-formation（high，露机制+温差成因，4源直读） |
| phenology | complete（文本层） | hist-yueling-bailu-pentads（high，含方向注文+机构稿分歧；现代物候验证 missing） |
| agriculture | partial | trad-bailu-nongshi（medium，机构汇编级农谚组+分区域风险） |
| ecology | missing | 无卡（三候归 phenology；露的生态农学意义仅科普定性段） |
| chinese-life | complete | trad-bailu-shenbulu（着衣节律）+ trad-bailu-tea-rice-wine + trad-bailu-longyan-shiyangbai |
| customs | complete | region-bailu-taihu-yuwang（香会四要素）+ 三张 trad 卡 |
| food | complete | trad-bailu-tea-rice-wine（南京茶/资兴酒）+ trad-bailu-longyan-shiyangbai（福州龙眼/温州十样白） |
| history | complete | hist-bailu-naming（high，月令+礼记双古籍直读）+ hist-yueling-bailu-pentads（high）+ shared 链接 |
| literature-art | complete | lit-shijing-jianjia（蒹葭全文直读）+ lit-dufu-bailu-yueye（杜甫直读+新华交叉） |
| regional-differences | complete | 五地习俗（太湖西山/南京/资兴/福州/温州）分卡落位 + longyan 卡 regional 维度 |
| scientific-interpretation | complete | 黄经/露机制两卡 + 命名卡的古今解释分层 |
| global-expressions | weak | glob-bailu-issa-dew-world（Candidate，search-excerpt，路由 needs-research） |
| visual-assets | missing | 无已授权素材（非遗网页面水彩画《蒹葭苍苍》作者施颖、摄影图均不用） |
| audio-assets | missing | 无已授权素材 |
| interaction-ideas | complete | idea-bailu-interaction-sketches（3条创意） |
| references | complete | 新增11源（10直读+1线索）+ 复用共享源2个（月令/礼记） |
| ai-research-log | complete | 本日志 |

统计：complete 12 / partial 2 / weak 1 / missing 4（calendar/ecology/visual/audio）。

## 素材边界审计

本轮未引入任何图片、音频、视频素材（非遗网页面配图——施颖水彩画、赵宁朝露摄影、褚超禹王祭摄影、徐志强米酒制作摄影——一律不用，页脚"部分图文来自网络"声明已记录于源卡 rights）。全部引用为文本短摘录：古籍（公有领域）逐字摘录带定位；新华社/人民日报/福建日报/中国天气网/科普中国版权稿仅要点级引用；《中华遗产》网络版按其版权声明仅引用已开放段落。临时文件仅写入 .batch-tmp/bailu-* 前缀。

## 引擎路由表（npx tsx .batch-tmp/batch-route.mts bailu，2026-09-16，修正后二跑；status 校正后三跑结论不变）

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| fact-solarterms-unesco-2016 | CulturalFact | system | high | A(独立直读×2) | **human-review-required** | — |
| fact-solarterms-yellow-river-origin | CulturalFact | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-huainanzi-complete-24terms | HistoricalRecord | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-solarterms-pentad-system | HistoricalRecord | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-calendar-role | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-jieqi-zhongqi | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| bailu-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |
| glob-bailu-issa-dew-world | GlobalExpression | global | high | D(独立直读×0) | **needs-research** | insufficient-evidence, global-candidate-hold |
| hist-bailu-naming | HistoricalRecord | term | medium | A(独立直读×2) | **auto-candidate** | — |
| hist-yueling-bailu-pentads | HistoricalRecord | term | medium | A(独立直读×2) | **auto-candidate** | — |
| lit-dufu-bailu-yueye | CulturalFact | term | low | A(独立直读×2) | **auto-candidate** | — |
| lit-shijing-jianjia | CulturalFact | term | low | A(独立直读×1) | **auto-candidate** | — |
| region-bailu-taihu-yuwang | CulturalFact | term | medium | A(独立直读×3) | **auto-candidate** | — |
| sci-bailu-dew-formation | ScientificFact | term | medium | A(独立直读×4) | **auto-candidate** | — |
| sci-bailu-longitude-165 | ScientificFact | term | medium | A(独立直读×4) | **human-review-required** | pending-primary-source |
| trad-bailu-longyan-shiyangbai | Tradition | term | medium | B(独立直读×3) | **auto-candidate** | — |
| trad-bailu-nongshi | Tradition | term | medium | A(独立直读×3) | **auto-candidate** | — |
| trad-bailu-shenbulu | Tradition | term | medium | A(独立直读×4) | **auto-candidate** | — |
| trad-bailu-tea-rice-wine | Tradition | term | medium | A(独立直读×3) | **human-review-required** | pending-primary-source |

Findings 明细：bailu-human-explanation explanation-gated(major)；glob-bailu-issa-dew-world insufficient-evidence(blocker)+global-candidate-hold(info)；sci-bailu-longitude-165 pending-primary-source(major)（GB/T 正文未直读）；trad-bailu-tea-rice-wine pending-primary-source(major)（程酒/资兴方志等一手文献未直读）。

本节气路由统计（不含6张系统级共享卡）：**A 9 · B 2 · C 1 · D 1**。（A=auto-candidate 9张；B=human-review 非C类 2张〔sci-longitude、trad-tea-rice-wine〕；C=human-review 且命中 C 条件 1张〔HumanExplanation〕；D=needs-research 1张〔glob〕。idea 卡不参与 claim 路由。）

## 修改记录

- 2026-09-16（第一轮）：全部卡片、源卡、索引、解释层、创意层、日志一次完成。
- 2026-09-16（修正1）：lit-dufu period 行残留 `]` 致 YAML 解析失败（引擎跳过清单命中本节气文件）——删除后恢复。
- 2026-09-16（修正2）：hist-yueling-bailu-pentads 单直读源撑 high 判 evidence-below-confidence——补非遗网白露专题为第二独立直读源（候名旁证），两源两发布方。
- 2026-09-16（修正3）：glob 卡 relationship_reason"而非传播或等同"未命中引擎否定词表（不是/并非/不构成/没有/无/不同于）判 global-forced-correspondence——改写为"不是传播关系，也不是等同关系"后消除。
- 2026-09-16（修正4）：按 §8 入包规则校正 status——sci-bailu-longitude-165、trad-bailu-tea-rice-wine 由 draft 升 in-review（human-review-required）；HumanExplanation/glob/auto-candidate 卡保持 draft。

[[01_terms/15_白露|白露索引]] · [[07_research/sections/review-bailu|审核分节]] · [[07_research/research-xiaoshu-batch-log|小暑日志（§10情报来源）]]
