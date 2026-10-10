---
schema_version: '0.1.0'
id: 'research-liqiu-batch-log'
type: 'ResearchNote'
title: '立秋批量研究 · 第一轮执行日志（2026-09-16）'
solar_terms: ['liqiu']
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
    'task': '按 24 节气批量研究规范完成立秋（13，autumn）第一轮研究：天文黄经135°/物候三候/立秋≠入秋气候辨析（本节气知识锚）/苗族赶秋区域非遗/贴秋膘断代核验/迎秋礼制/农谚/刘翰诗与一叶知秋典故/全球表达Candidate/解释层/创意层',
    'queries': [
      '非遗网专题页定位：curl 直连与走代理 solar_details/6973 均返回空响应 → web_reader MCP 成功直读（标题"木叶动秋声——二十四节气之立秋"确认）；另与并行波次下载的同 URL HTML 比对文字一致；project_details/15065.html（苗族赶秋名录页）与 9514.html（苗族赶秋专题报道）curl 直连成功',
      '维基文库 API（走代理）：srsearch=清嘉录 / 帝京歲時紀勝 / 貼秋膘（前两者无书、贴秋膘无命中——确认断代路径失败）；乳鴉啼散玉屏空 / 劉翰 立秋 / 梧桐葉上月如霜（命中作品页"立秋"+千家詩/卷三+歲功典立秋部/第064卷）',
      '维基文库直读页（走代理 curl）：月令七十二候集解（全页抓取切立秋节，逐字含注文）；禮記/月令（孟秋之月条）；淮南子/說山訓（"見一葉落"段）；燕京歲時記（全页重抓，检索立秋/稱人/秤人/貼——负面证据）；欽定古今圖書集成/曆象彙編/歲功典/第064卷（立秋部彙考/藝文/選句/紀事/雜錄全节）',
      'WebSearch：立秋 节气 太阳黄经135° 8月7日至9日 新华网；立秋 "8月7日至9日" 黄经135 气象局 OR 中国天气网；新华网 节令之美 立秋 7日立秋 由国庆；苗族赶秋 2014 第四批 国家级非物质文化遗产 扩展项目 花垣县；Lammas August 1 first harvest festival loaf mass tradition Britain；site:ihchina.cn 苗族赶秋 project_details',
      'WebFetch 直读机构稿：news.cn/local/2022-08/05/c_1128893416.htm（2022由国庆稿，成功）；news.cn/20260807/94b76d755e104be8a62086da80ab0cc9/c.html（2026声动稿，成功）；news.cn/local/20260807/8fd0d085ff9644df84160e776b8faffb/c.html（2026立秋三问，成功）；xinhuanet.com/2021-08/05/c_1127733185.htm（2021罗澍伟稿，成功）；mct.gov.cn/whzx/bnsj/dwwhllj/201612/t20161214_773196.html（文旅部2016 UNESCO通报，成功）',
    ],
    'discovered_source_ids':
      [
        'source-ihchina-liqiu-feature',
        'source-xinhua-liqiu-2021',
        'source-xinhua-liqiu-2022',
        'source-xinhua-liqiu-shengdong-2026',
        'source-xinhua-liqiu-sanwen-2026',
        'source-wikisource-liji-yueling',
        'source-wikisource-huainanzi-shanshun',
        'source-wikisource-liuhan-liqiu',
        'source-gjts-suigong-liqiu',
        'source-ihchina-liqiu-ganqiu',
        'source-ihchina-liqiu-ganqiu-topic',
        'source-mct-liqiu-ganqiu',
        'source-wikipedia-lammas',
      ],
    'conflicts':
      [
        '日期范围口径：非遗网概说"8月7—9日"vs 同页习俗节"8月7日或8日"vs 新华社2021"通常8月8日前后"vs 2022"8月7日至9日"——页内与机构间宽窄不一；处理：黄经卡取最宽"8月7日至9日"并逐条登记于 exceptions',
        '刘翰《立秋》首句异文：千家诗系统"乳鴉啼散玉屏空" vs 古今图书集成本（题《立秋日》）"亂鴉啼散玉屏空"；后三句两系统一致；任务线索句"梧桐叶上月如霜"两直读系统均无——按防幻觉红线显式排除，登记于 lit-liuhan-liqiu',
        '月令集解"涼風至"夹注"禮記作盲風至" vs 直读《礼记·月令》孟秋作"涼風至"、仲秋作"盲風至"——夹注与通行本不一致，作为版本异文登记于三候卡 exceptions，不裁定',
        '贴秋膘断代：流行叙述"清代流行" vs 可直读清末《燕京岁时记》无立秋条无贴秋膘字样、《清嘉录》《帝京岁时纪胜》维基文库无书——按"现代流行+文献待考"分层（《清嘉录》立秋复秤句仅存人民日报转引，沿立夏卡）',
        '苗族赶秋断言：名录页"自三苗时期便已存在逾五千年"、专题页"八人秋是秦汉遗制"均无出处——不入事实层，与"4000年竖蛋"同型防幻觉处理',
        '占候农谚内部张力："雷打秋，冬半收"（雷凶）与"立秋雨淋淋，遍地是黄金"（雨吉）表面相反——按占候系统内部逻辑登记（雷暴与阵雨之分），不做科学裁定',
      ],
    'conclusions':
      [
        '第一轮建立知识卡12张（high 4：sci-liqiu-longitude-135 / hist-yueling-liqiu-pentads / sci-liqiu-vs-meteorological-autumn / region-liqiu-miao-ganqiu，另 hist-liqiu-yingqiu-ritual 亦为 high——共5张）、Source卡13张（12直读+1检索摘要级）；引用共享卡4张链接级（sci-solarterms-calendar-role / fact-solarterms-unesco-2016 / hist-solarterms-pentad-system / fact-solarterms-yellow-river-origin，另 hist-huainanzi-complete-24terms 仅链接）',
        '立秋≠入秋（知识锚）成立且证据链最强：气象学入秋标准"连续5天日平均气温稳定降至22℃及以下"获新华社2026立秋三问（气象局重点实验室+国家气候中心受访）与深圳气象局（候温≥22℃为夏）两机构直读互证；"大多数地方仍处于夏季"保持专家表述级；"秋老虎"按民间称谓+机构使用记录分层，成因不入卡',
        '断代核验路径完整执行且结论为负：贴秋膘的清代一手文献缺环（燕京岁时记直读无载+清嘉录/帝京岁时纪胜无书）成为 trad-liqiu-tieqiubiao 的核心记录点；复秤系统经《清嘉录》转引句挂接立夏秤人卡（跨节气闭环，不重复建源）',
        '岁功典第064卷（立秋部）是本轮最大增量：一类书同时供給迎秋礼制辑文（礼记/淮南子时则训/后汉书/唐书/宋史）、梧桐报秋辑文（陶朱公书/群芳谱）、"一叶落知天下秋"（文录引唐人诗）、占候农谚（纪历撮要）、刘翰诗异文与明代戴楸叶（熙朝乐事）六条线索；全部按"类书转引级"登记，已直读原典者（礼记/淮南子说山训）以原典为准',
        '文学卡以双系统直读落地：刘翰《立秋》千家诗系统+古今图书集成本（首句异文乳鸦/乱鸦）+新华社2022稿引文印证后三句；"梧桐叶上月如霜"流行版本无直读支持被显式排除——又一例"流行文本≠定本"',
        '非遗网专题页编号确认：立秋=solar_details/6973（供后续波次；夏至6970/小暑6971/立秋6973，6972应为大暑——未试探，留待大暑波次确认）；project_details 15065（名录）/9514（专题）双页结构再次验证',
        '主要证据缺口：GB/T 33661-2017 正文（继承立春待办）、《清嘉录》《帝京岁时纪胜》点校本、正史礼志立秋条（后汉书/新唐书/宋史）、三候现代物候观测、"立秋十天遍地黄"类高产农谚原始出处、秋老虎气象学定义、Lammas直读、苗族赶秋当届活动独立报道',
      ],
    'human_questions':
      [
        '"大多数地方仍处于夏季"（气象专家受访，单一媒体转述）能否升格为已证命题——建议以气候统计常年后核',
        '贴秋膘"清代流行"说：是立项逐书核验（清嘉录/帝京岁时纪胜点校本+近代报刊），还是对外文案直接采用"当代流行的养生叙事"框架',
        '刘翰诗定版口径：主用千家诗系统"乳鸦"还是古今图书集成"乱鸦"（建议主用千家诗+括注异文）',
        '月令集解"禮記作盲風至"夹注与直读礼记的矛盾：按传本差异搁置还是提请版本校勘专项',
        '苗族赶秋与立春两个节气非遗锚点的叙事分工（春劝农/秋庆收）是否进入全局叙事框架',
        'Lammas 直读核验优先级（en.wikipedia 词条+不列颠民俗权威源）',
        'GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）',
      ],
  }
---

# 立秋批量研究 · 第一轮执行日志

## 执行摘要

2026-09-16 由 AI 研究代理执行（brief：`.batch-tmp/AGENT-BRIEF.md`）。顶层问题：**立秋是什么？"秋"从何说起？天文秋、气象秋与人文秋三套"秋"如何分辨？**

## 流程记录

1. **样例对齐**：读 brief + 立春 9 张样例卡 + 索引目标形态 + 小暑日志/审核分节（前波次情报）。
2. **非遗网定位（较顺）**：从并行波次已下载 HTML 标题确认 6973=立秋（brief 线索"6968+段"验证）；自取该页时 curl 直连/走代理均空响应 → webReader 备用读取成功（含概说/农谚/习俗/养生全节，逐字摘录入源卡）。
3. **古籍直读**：月令七十二候集解立秋节（逐字含注文）；《礼记·月令》孟秋条；《淮南子·说山训》"见一叶落"段；《燕京岁时记》全页重抓（负面证据：无立秋条/无贴秋膘，立秋仅作赐冰终点）；《古今图书集成·岁功典》第064卷立秋部（彙考/藝文/選句/紀事/雜錄，六条线索入库）。
4. **断代核验**：贴秋膘的古籍路径（清嘉录/帝京岁时纪胜）API 检索无书 → 按 brief 预案分层处理。
5. **机构稿直读**：新华社2021（罗澍伟）/2022（由国庆）/2026声动/2026立秋三问（气象局实验室+国家气候中心）四稿 + 文旅部2016 UNESCO通报 + 非遗网苗族赶秋两页（名录15065+专题9514）。
6. **检索级**：Lammas（Wikipedia 摘要，Candidate 专用）。
7. **建卡与引擎**：12卡+13源+索引更新；首跑发现自建两张源卡 YAML 单引号未转义（2021/2022 original_excerpt）与两处 finding 误触发（解释层"各地"、贴秋膘卡"自古"字样）——修复后复跑通过；按 §8 校正 status（auto-candidate 回 draft、human-review 卡 in-review）。

## 12项审计（§7）

1. **Unsupported Distribution**：发现+已处理——解释层首跑被引擎标记一处（物候句"不等于现代各地实测"含"各地"），改写为"不等于当代实际物候观测结果"后通过；"大多数地方仍处于夏季"有气候卡命题背书保留。
2. **Regional Generalization**：通过——贴秋膘（北方尤其盛行）、啃秋（城市/农人分述）、食秋桃（浙江杭州）、苗族赶秋（湖南湘西花垣+流传县名清单）全部带地域限定；解释层逐句自查无未背书的全国性短语。
3. **Modern-as-Ancient**：发现+已处理——首跑 trad-liqiu-tieqiubiao 因引用"不写''自古''"字样误触发，改写为"谱系警示：不作久远古俗断代"后通过；实质内容（断代缺环警示）贯穿全卡。
4. **Historical Leakage**：通过——三候卡/迎秋礼卡/一叶知秋卡无黄经/气象学概念；黄经卡不载古典内容；淮南子时则训辑文仅作历史印证。
5. **Scientific Leakage**：通过——"秋金之白色""盛德在金"等五行解释只以引文形态留在历史卡并标注属古典解释体系；气候卡命题只含候温标准与专家分布表述；"秋老虎"不写成因。
6. **Legend-as-Fact**：通过——苗族赶秋两个起源传说仅作"页面记载两个起源传说"的事实性登记于 exceptions；"五千年/秦汉遗制"断言不入卡。
7. **Weak Source Inflation**：发现+已处理——农谚（非遗网汇编+类书辑文）confidence medium 且占候标注"非科学命题"；刘翰诗因同托管方规则封顶 medium；"梧桐叶上月如霜"版本显式排除。
8. **Search Excerpt Misuse**：通过——Lammas 唯一 search-excerpt 源（verification=unverified），仅支撑 low Candidate，引擎路由 needs-research 符合预期设计。
9. **Cross-source False Validation**：通过——黄经135°的 high 建立在非遗网×新华社两组独立直读（新华社三稿互证计一发布方）；苗族赶秋2014批次由非遗网×文旅部两机构独立确认；岁功典辑文一律注明"未回原典"。
10. **Creative-as-Fact**：通过——idea 卡三条全部带性质声明+依据卡+误导风险红线（梧桐报秋文案标"古籍记载的物候意象"、八人秋标"特定民族活态非遗"）。
11. **Global Forced Correspondence**：通过——Lammas 卡三要素明确"不是对应、不是等同、不是英国版立秋"；relationship=nearby-time（协议枚举），relationship_reason 说明两套历法基础独立。
12. **Shared Knowledge Duplication**：通过——黄道24等分/历法机制/淮南子序列/UNESCO/七十二候体系均只链接 02_shared；四立迎气系统命题未复述（仅立秋单点+转引级沿袭链）。

## 19维覆盖矩阵

| 维度 | 状态 | 支撑卡 |
|---|---|---|
| astronomy | complete | sci-liqiu-longitude-135（high，4独立直读：非遗网/新华社×3稿/GB元数据） |
| calendar | partial | sci-liqiu-longitude-135（2017年立秋落农历闰六月十六实例）+ shared 历法角色链接；无置闰专门卡 |
| climate | complete | sci-liqiu-vs-meteorological-autumn（high，22℃标准两机构互证+秋老虎+高温实例） |
| phenology | complete（文本层） | hist-yueling-liqiu-pentads（high，含礼记平行记载与夹注异文；现代物候验证 missing） |
| agriculture | partial | trad-liqiu-nongshi（medium，机构汇编+类书辑文双层；"立秋十天遍地黄"未获直读） |
| ecology | missing | 无卡（三候古典记载归 phenology；现代生态观测未建） |
| chinese-life | complete | trad-liqiu-tieqiubiao（medium）+ hist-liqiu-yingqiu-ritual（high）+ region 卡 |
| customs | complete | region-liqiu-miao-ganqiu（high）+ hist-liqiu-yingqiu-ritual（high）+ 戴楸叶辑文（岁功典源） |
| food | partial | trad-liqiu-tieqiubiao 内含贴秋膘/啃秋/食秋桃（未单独建食俗卡） |
| history | complete | 迎秋礼（high，礼记直读+三方一致）+ 三候（high）+ shared 淮南子链接 |
| literature-art | partial | lit-liuhan-liqiu（medium 待校勘）+ hist-liqiu-yiye-zhiqiu（medium 典故链）；岁功典立秋诗池未扩展 |
| regional-differences | partial | region-liqiu-miao-ganqiu（high）+ shared 黄河起源；区域锚点仅一个 |
| scientific-interpretation | complete | 黄经/立秋≠入秋/农谚占候分层三卡 |
| global-expressions | weak | glob-liqiu-lammas（Candidate，search-excerpt） |
| visual-assets | missing | 无已授权素材 |
| audio-assets | missing | 无已授权素材（寒蝉鸣声音线索在三候卡与创意卡） |
| interaction-ideas | complete | idea-liqiu-interaction-sketches（3条创意） |
| references | complete | 新增13源（12直读+1线索） |
| ai-research-log | complete | 本日志 |

统计：complete 10 / partial 5 / weak 1 / missing 3（calendar部分、agriculture部分、food部分、literature-art部分、regional部分；ecology/visual/audio missing）。

## 素材边界审计

本轮未引入任何图片、音频、视频素材（非遗网页面配图一律不用；苗族赶秋页活动照片不复制）。全部引用为文本短摘录：古籍（公有领域）逐字摘录带定位；机构稿件（新华社/文旅部/非遗网）仅要点短引。临时文件仅写入 .batch-tmp/liqiu-* 前缀（liqiu-ihchina-6973.html 为空文件——curl 失败残留；ihchina-6973 立秋页全文取自 webReader 与并行波次同 URL HTML 比对）。

## 引擎路由表（npx tsx .batch-tmp/batch-route.mts liqiu，2026-09-16，YAML修复后复跑）

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| fact-solarterms-unesco-2016 | CulturalFact | system | high | A(独立直读×2) | **human-review-required** | — |
| fact-solarterms-yellow-river-origin | CulturalFact | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-huainanzi-complete-24terms | HistoricalRecord | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-solarterms-pentad-system | HistoricalRecord | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-calendar-role | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-jieqi-zhongqi | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| glob-liqiu-lammas | GlobalExpression | global | high | D(独立直读×0) | **needs-research** | insufficient-evidence, global-candidate-hold |
| hist-liqiu-yingqiu-ritual | HistoricalRecord | term | medium | A(独立直读×2) | **human-review-required** | pending-primary-source |
| hist-liqiu-yiye-zhiqiu | HistoricalRecord | term | low | B(独立直读×1) | **auto-candidate** | — |
| hist-yueling-liqiu-pentads | HistoricalRecord | term | medium | A(独立直读×3) | **auto-candidate** | — |
| liqiu-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |
| lit-liuhan-liqiu | CulturalFact | term | low | A(独立直读×2) | **auto-candidate** | — |
| region-liqiu-miao-ganqiu | RegionalExpression | regional | medium | A(独立直读×3) | **auto-candidate** | — |
| sci-liqiu-longitude-135 | ScientificFact | term | medium | A(独立直读×4) | **human-review-required** | pending-primary-source |
| sci-liqiu-vs-meteorological-autumn | ScientificFact | term | medium | A(独立直读×4) | **human-review-required** | pending-primary-source |
| trad-liqiu-nongshi | Tradition | term | low | A(独立直读×3) | **auto-candidate** | — |
| trad-liqiu-tieqiubiao | Tradition | term | medium | A(独立直读×4) | **human-review-required** | pending-primary-source |

Findings 明细：glob-liqiu-lammas insufficient-evidence(blocker)+global-candidate-hold(info)；hist-liqiu-yingqiu-ritual / sci-liqiu-longitude-135 / sci-liqiu-vs-meteorological-autumn / trad-liqiu-tieqiubiao 各 pending-primary-source(major)（GB/T 正文未直读、正史礼志未直读、QX/T标准未直读、清代岁时文献未直读）；liqiu-human-explanation explanation-gated(major)。

本节气路由统计（不含6张系统级共享卡）：**A 5 · B 4 · C 1 · D 1**。

## 修改记录

- 2026-09-16（第一轮）：全部卡片、源卡、索引、解释层、创意层、日志一次完成。
- 2026-09-16（修正1）：source-xinhua-liqiu-2021/2022 两张源卡 original_excerpt 串内单引号未按 YAML 规则转义（'' ），被容错路由器跳过后修复，独立直读计数恢复（黄经卡×4）。
- 2026-09-16（修正2）：两处 finding 误触发修复——解释层物候句"现代各地实测"改"当代实际物候观测结果"（unsupported-distribution 消除）；贴秋膘卡引用规则原文含"自古"字样改写为"谱系警示：不作久远古俗断代"（modern-as-ancient 消除，警示实质不变）。
- 2026-09-16（修正3）：按 §8 入包规则校正 status——hist-yueling-liqiu-pentads、region-liqiu-miao-ganqiu 由 in-review 回 draft（auto-candidate）；trad-liqiu-tieqiubiao 升 in-review（human-review-required）。

[[01_terms/13_立秋|立秋索引]] · [[07_research/sections/review-liqiu|审核分节]] · [[07_research/research-xiaoshu-batch-log|小暑日志（前波次）]]
