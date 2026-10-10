---
schema_version: '0.1.0'
id: 'research-lidong-batch-log'
type: 'ResearchNote'
title: '立冬第一轮批研究 · 执行日志（2026-09-16）'
solar_terms: ['lidong']
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
    'task': '按 24 节气批研究 brief 为立冬（lidong，顺序19，winter）完成第一轮知识库填充：13项交付物、12项审计、路由与审核分节',
    'queries':
      [
        'ihchina.cn solar_details/6979.html（按前波次情报预测立冬=6979，curl 直连 -sL 读取，标题《秋冬气始交——二十四节气之立冬》确认）',
        '月令七十二候集解 立冬 十月節 水始冰 地始凍 雉入大水為蜃（维基文库全文 curl 走代理，霜降后小雪前切分；同页立春条"立，建始也……立夏、秋、冬同"回读互证）',
        '禮記/月令 孟冬之月 迎冬於北郊（维基文库直读；維基文庫《呂氏春秋/孟冬紀》页为空壳未转录）',
        '欽定古今圖書集成/曆象彙編/歲功典/立冬部 与 第084卷（维基文库直读：礼记/淮南子时则训/后汉书/唐书/宋史辑文+各省方志立冬习俗+夏侯湛寒苦谣）',
        '立冬 黄经225 新华网 OR 中国天气网（WebSearch 定位 weather.com.cn 北京站稿+新华网2023稿，均直读）',
        '维基文库检索：凍筆/寒爐美酒/醉看墨花/雪滿前村/立冬日作/紫金霜（传李白《立冬》无命中；命中刘基《立冬日作》作品页直读）',
        '立冬 南京 吃生葱 习俗（WebSearch 定位中国天气网江苏站稿，直读）',
        '深圳气象局四季划分页重抓（候温≤10℃+深圳常年入冬1月21日）',
        'Samhain Celtic festival November 1 winter beginning（WebSearch 摘要级，en.wikipedia + almanac 线索）',
        'site:ihchina.cn 立冬 project_details（非遗项目锚点排查：无立冬专属项目页）',
      ],
    'discovered_source_ids':
      [
        'source-ihchina-lidong-feature',
        'source-wikisource-lidong-liji-yueling',
        'source-gjts-suigong-lidong',
        'source-weathercn-lidong-225',
        'source-xinhua-lidong-2023',
        'source-weathercn-lidong-shengcong',
        'source-wikisource-lidong-liuji',
        'source-wikipedia-samhain',
      ],
    'conflicts':
      [
        'LEAD"天子亲率三公九卿大夫"vs 维基文库《礼记》直读作"親帥"（帥/率通假）：以直读"親帥"入卡，异文记 exceptions',
        '非遗网"古时此日天子有出郊迎冬之礼，并赐群臣冬衣"："赐群臣冬衣"句不见于本轮《礼记·月令》直读原文（原文仅"賞死事，恤孤寡"），出处待查、记入卡 exceptions',
        '《淮南子·时则训》（岁功典辑）作"迎歲於北郊"，《礼记·月令》作"迎冬於北郊"：同叙事异文，两卡分列不改写',
        '入冬阈值口径：深圳气象局"五天滑动平均≤10℃且日平均气温≤10℃那天起"vs 中国天气网"连续5天的平均气温低于10℃首日"：滑动平均算法细节两稿不一，以 exceptions 并记、待 QX/T 152-2012 正文',
        '非遗网页内自相矛盾："全国各地在立冬日纷纷进行补冬"（泛化句）vs 同页补冬实例仅台湾/闽南——按具名地域采信，泛化句弃用',
        '"交子之时"吃饺子解释：非遗网自身列为"两种说法"之一；本轮古籍直读（礼记/月令/岁功典）零命中——按 Modern Popularization 层处理，未写成"古人认为"',
      ],
    'conclusions':
      [
        '第一轮建立知识卡11张（sci×2 / hist×3 / trad×2 / lit×1 / glob×1 / idea×1 / explanation×1）、新来源8条（7 direct-read + 1 search-excerpt），全部为 draft/in-review，等待人工审核',
        '高可信锚点：黄经225°/第19个（非遗网+中国天气网双机构直读+新华2023日期实例）、月令立冬定义与三候逐字直读（含"立字解見前"与立春条回指互证、雉入大水为蜃注文全文）、迎冬礼制谱系（礼记月令直读+岁功典辑淮南子/后汉书/唐书/宋史，礼记句两处独立直读逐字一致）、立冬≠气象入冬（四机构源直读含常年入冬日期梯度与深圳1月21日实例）',
        '四张 high 卡达成基线：sci-lidong-longitude-225 / hist-yueling-lidong-pentads / hist-lidong-yingdong-beijiao / sci-lidong-vs-meteorological-winter',
        '本轮最大收获：①《古今图书集成》岁功典第084卷立冬部整卷直读——汉代黑郊迎气/祭黑帝元冥/八佾舞育命、唐宋祀黑帝以颛頊配的祀典链与清代方志立冬习俗（杭州菊浴/歸安祭灶/宿松上冢修塘堰/安化婚嫁冰泮乃止/石城禳火災）一次到位；②方志层与当代食俗层几乎零重叠（无饺子无泛化补冬），是"立冬食俗现代流行化"的关键谱系证据',
        '文学卡按"直读哪个建哪个"处理：LEAD 指向的传李白《立冬》维基文库无文本、岁功典立冬部艺文诗目无李白，真伪存疑如实记 D；改以刘基《立冬日作》全诗直读建卡（立冬温风反常叙事，与礼记月令顓頊/虹藏不見直接互文）',
        '主要证据缺口：《吕氏春秋·孟冬纪》直读（维基文库空壳）、冬灌机构源、传李白诗源头排查、《帝京岁时纪胜》《清嘉录》立冬条、三候现代物候观测、QX/T 152-2012 标准正文、Samhain 词条直读',
      ],
    'human_questions':
      [
        '"亲率/親帥"与"赐群臣冬衣"两处流行转写与直读原文的差异，对外文案采用哪个口径（建议引直读原文+注通假）？',
        '"交子之时"词源维持 Modern Popularization 层是否可接受？若需确证/证伪，是否安排明清笔记与民国报刊专项排查？',
        '岁功典方志条目（杭州菊浴等）断代"清代类书所辑"是否需要进一步回溯原方志修纂年代才能用于对外内容？',
        'trad-lidong-budong-jiaozi 的 risk=high 由地域泛化+词源倒灌风险触发，引擎无 finding——C 类入包是否合适？',
        'glob-samhain 的 relationship=nearby-time（11月1日 vs 11月7-8日）定性是否接受？"同为冬始界标但历法文化不同"的表述边界？',
      ],
  }
---

# 立冬第一轮批研究 · 执行日志

## 执行摘要

2026-09-16 由 AI 研究代理执行。研究问题（顶层）：**立冬是什么？由哪些可靠来源支撑？证据边界在哪里？** 本轮完成 11 个页面的直接读取（非遗网专题页、维基文库×4、中国天气网×2、新华网、深圳气象局重读）+1 个检索摘要级线索（Wikipedia: Samhain），建卡 11 张、来源 8 条（7 直读/1 线索）。

## 流程记录

1. **非遗网专题页**：按前波次情报直接命中 solar_details/6979（标题《秋冬气始交——二十四节气之立冬》，创建2017-11-07，故"今年"=2017年立冬11月7日）；curl 直连 -sL 一次成功，全页文本化入源卡。
2. **月令七十二候集解**：curl 走代理抓全页切分立冬节，定义句+三候+注文逐字直读；"立字解見前"以同页立春条回读确证（与立春卡"立，建始也……立夏、秋、冬同"互证链落地）。
3. **礼记·月令**：孟冬之月节直读（迎冬北郊+賞死事恤孤寡+其帝顓頊其神玄冥+水始冰地始凍雉入大水為蜃虹藏不見）。注意：LEAD 所引《吕氏春秋·孟冬》维基文库页为空壳（未转录），未能直读。
4. **岁功典立冬部（本轮最大增量）**：从检索"立冬日作"发现《古今图书集成·岁功典》立冬部与第084卷；整卷直读获得：礼记/淮南子时则训（"迎歲"异文）/后汉书礼仪志+祭祀志（黑郊/黑帝元冥/育命舞）/唐书礼乐志/宋史礼志的迎冬祀典链、《孝经纬》"斗指西北維為立冬"、《农政全书》立冬占候、清代九省方志立冬习俗、夏侯湛《寒苦谣》与王起《北郊迎冬赋》。艺术文二诗目（宋唐庚/明王穉登）正文未转录，记 D。
5. **机构交叉源**：WebSearch 定位中国天气网北京站稿（黄经225°+候温标准+全国季节版图+北京10月28日）与新华网2023稿（立冬≠入冬+降温3.77℃+六省会常年入冬日期+南北食俗）；深圳气象局页重抓（深圳常年入冬1月21日/入秋11月8日——立冬日在深圳常年是深秋）。
6. **文学**：维基文库 API 检索"凍筆""寒爐美酒""醉看墨花""雪滿前村""紫金霜"均无李白诗页；命中刘基《立冬日作》作品页全诗直读（PD，页注列朝诗集甲前03）。按"直读哪个建哪个"建刘基卡，李白真伪问题入卡+记 D。
7. **习俗**：非遗网（饺子/补冬/交子说法层）+新华2023（南北限定）双机构直读；南京生葱中国天气网江苏站直读（单源口传层）；岁功典方志层无食俗记载——三层对照构成谱系警示主证据。
8. **全球表达**：Samhain 检索摘要级（en.wikipedia + almanac cross-quarter day 线索）；relationship 用协议枚举 nearby-time，三要素显式否定"对应/等同/传播"。词条未直读，Candidate 保持。
9. **成卡与自检**：所有新卡 id 含 lidong、文件名==id、日期2026-09-16、risk/impact 必填、human_review=null；YAML 一处翻车（trad 卡串内 ASCII 单引号未双写，引擎跳过后即改 `''` 修复，重跑全表通过）。

## 12项审计（§7）

1. **Unsupported Distribution**：通过。解释卡三层逐句自查无"大部/普遍/各地/全国"断言（气候与食俗全部具名地域）；非遗网"全国各地纷纷补冬"泛化句在 trad 卡中显式标注"页方断言，不采信"。
2. **Regional Generalization**：通过且为本轮核心防线。饺子限"北方"（两机构稿原文限定）、补冬限台湾/闽南+泛"南方"（新华原句）、生葱限南京且标单源口传；解释卡同口径。
3. **Modern-as-Ancient**：通过。"交子之时"词源标 Modern Popularization 层（古籍零命中）；冬泳（哈尔滨/商丘/宜春/武汉）仅非遗网汇编提及、未入卡；方志习俗断代"清代类书所辑"不回推今制。
4. **Historical Leakage**：通过。hist 卡（月令/迎冬/方志）无"黄经/气象学/天文学"现代概念；"候温法"只出现在 sci 卡。
5. **Scientific Leakage**：通过。农谚占候（立冬晴一冬晴）全部标 tradition 层并注明"无气候统计验证"；三候注文考辨标"古典博物分类体系"。
6. **Legend-as-Fact**：通过。"雉入大水为蜃"以古籍原文+注文性质注明（古典转化叙事，非生物学结论）；刘基诗只作文学证据不作气候统计证据。
7. **Weak Source Inflation**：通过。南京生葱单源直读但标 verification=unverified 且卡内标"单一来源、口传层"，confidence 不升 medium 以上；新华2023"第三印证"角色在 sci 卡 exceptions 写明。
8. **Search Excerpt Misuse**：通过。唯一 search-excerpt 源（Wikipedia: Samhain）verification=unverified，仅支撑 confidence=low 的 Candidate 卡；引擎 blocker（insufficient-evidence）如实入 D。
9. **Cross-source False Validation**：通过。cross-checked 均基于异发布方直读互证（非遗网×维基文库礼记×岁功典礼记辑文三处一致；黄经225°非遗网×天气网；候温口径深圳×天气网）；维基文库同托管方规则执行（刘基卡单页+页注属同托管方，confidence 压 medium）。
10. **Creative-as-Fact**：通过。idea 卡开头性质声明+每条依据卡与红线（创意4显式说明饺子不入交互主线的原因）。
11. **Global Forced Correspondence**：通过。glob 卡三要素齐全，relationship=nearby-time 且 reason/差异两处显式否定"对应节日/欧洲版立冬"；日期差异（11月1日 vs 11月7-8日）写明。
12. **Shared Knowledge Duplication**：通过。黄道24等分/节中气/UNESCO/七十二候体系均以 02_shared 链接引用，未复述命题；引擎无 shared-duplicate finding。

## 19维覆盖矩阵

| 维度 | 状态 | 说明 |
|---|---|---|
| astronomy | complete | sci-lidong-longitude-225（high，黄经225°+双机构直读） |
| calendar | complete | "立冬，十月節"节位引 sci-solarterms-jieqi-zhongqi + 月令卡；2017年农历九月十九实例入 sci 卡 |
| climate | complete | sci-lidong-vs-meteorological-winter（high，候温标准+入冬梯度+深圳反例） |
| phenology | complete | hist-yueling-lidong-pentads（high，逐字直读+注文全文+立春回指互证） |
| agriculture | complete | trad-lidong-nongshi（南北农时梯度+农谚群+农政全书占候层） |
| ecology | weak | 三候现代物候观测未建卡（Needs Research） |
| chinese-life | complete | 方志习俗卡+食俗卡+解释卡 |
| customs | complete | 迎冬礼制（high）+方志习俗+非遗网汇编层 |
| food | complete | trad-lidong-budong-jiaozi（地域限定+"交子"词源辨析+南京生葱单源） |
| history | complete | 迎冬祀典链（礼记→汉→唐宋）+月令卡+淮南子（shared） |
| literature-art | complete | lit-lidong-liuji-rizuo（刘基诗直读）；传李白/唐庚/王穉登缺直读记 D |
| regional-differences | complete | 食俗南北分布+方志九省条目+入冬日期梯度 |
| scientific-interpretation | complete | 黄经定义+两套冬天（双 high）；QX/T 标准正文记 D |
| global-expressions | partial | glob-lidong-samhain-november（Candidate，仅 search-excerpt，引擎 needs-research） |
| visual-assets | missing | 无已授权素材（北郊/薄冰/雉/菊花待版权研究） |
| audio-assets | missing | 冰裂/北风素材待授权（idea 卡已提示） |
| interaction-ideas | complete | idea-lidong-interaction-sketches（4条创意含红线） |
| references | complete | 新增 8 条 Source（7直读/1线索），复用既有直读源 4 条（月令集解/深圳气象局/GB-T 元数据级/未重复计） |
| ai-research-log | complete | 本日志+审核分节 |

统计：complete 14 / partial 1 / weak 1 / missing 2 / N-A 0（19维计）。

## 素材边界审计

- 视觉：非遗网页面配图一律不用（页面声明整理自网络）；北郊迎冬、薄冰、雉、菊花、饺子影像均未授权，未建 VisualAsset。
- 声音：冰面初凝/北风素材无授权，idea 卡列为待办。
- 文本引用：古籍引文逐字带定位（含"迎歲/迎冬"异文与方志七条全录）；新华网/中国天气网为版权稿件，仅短摘录。

## 路由引擎输出（2026-09-16，`npx tsx .batch-tmp/batch-route.mts lidong`，tolerant 版）

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| glob-lidong-samhain-november | GlobalExpression | global | high | D(独立直读×0) | **needs-research** | insufficient-evidence, global-candidate-hold |
| hist-lidong-fangzhi-customs | HistoricalRecord | term | medium | A(独立直读×1) | **human-review-required** | pending-primary-source |
| hist-lidong-yingdong-beijiao | HistoricalRecord | term | high | A(独立直读×2) | **human-review-required** | — |
| hist-yueling-lidong-pentads | HistoricalRecord | term | medium | A(独立直读×2) | **auto-candidate** | — |
| lidong-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |
| lit-lidong-liuji-rizuo | CulturalFact | term | low | A(独立直读×1) | **auto-candidate** | — |
| sci-lidong-longitude-225 | ScientificFact | term | medium | A(独立直读×4) | **human-review-required** | pending-primary-source |
| sci-lidong-vs-meteorological-winter | ScientificFact | term | medium | A(独立直读×4) | **human-review-required** | pending-primary-source |
| trad-lidong-budong-jiaozi | Tradition | term | high | A(独立直读×3) | **human-review-required** | — |
| trad-lidong-nongshi | Tradition | term | medium | A(独立直读×3) | **auto-candidate** | — |

（引擎表中另有 6 张 02_shared 共享卡路由 human-review-required，属既有状态，不入本节气包。首次运行时 trad-lidong-budong-jiaozi 因 YAML 串内单引号未双写被跳过，修复后重跑全表如上，无本节气文件被跳过。）

Findings 明细：

- `glob-lidong-samhain-november` **insufficient-evidence**（blocker）：没有正分证据来源（仅线索级或无来源）。
- `glob-lidong-samhain-november` **global-candidate-hold**（info）：Candidate 不构成已核实的文化对应。
- `hist-lidong-fangzhi-customs` **pending-primary-source**（major）：原方志未直读（当前为岁功典转引）。
- `lidong-human-explanation` **explanation-gated**（major）：支撑卡未 approved，禁止发布。
- `sci-lidong-longitude-225` **pending-primary-source**（major）：GB/T 正文未直读（继承立春待办）。
- `sci-lidong-vs-meteorological-winter` **pending-primary-source**（major）：QX/T 152-2012 标准正文未直读。

入包处置：hist-lidong-yingdong-beijiao / trad-lidong-budong-jiaozi / hist-lidong-fangzhi-customs / sci-lidong-longitude-225 / sci-lidong-vs-meteorological-winter → status 改 in-review；lidong-human-explanation / glob-lidong-samhain-november → 保持 draft；3 张 auto-candidate（月令三候/刘基诗/农事）保持 draft。

## Needs Research（汇总）

1. 《吕氏春秋·孟冬纪》直读（维基文库该页未转录，寻其他录文源）；"赐群臣冬衣"句出处。
2. 传李白《立冬》（"冻笔新诗懒写"）源头排查：《全唐诗》李白卷、明清选本、民国报刊；紫金霜《立冬》同。
3. 《帝京岁时纪胜》《清嘉录》立冬条直读（清末世俗节俗与食俗源头，"交子"词源文献排查的优先入口）。
4. 岁功典藝文二诗正文：宋唐庚《立冬後作》、明王穉登《立冬》（本卷录文未转录）。
5. 冬灌技术的机构科普源（LEAD 线索，本轮机构页未提及）。
6. 三候现代物候观测（初冰日期、土壤始冻、雉类迁徙；中国物候观测网）。
7. QX/T 152-2012《气候季节划分》标准正文；常年入冬日期逐年数据源入库。
8. GB/T 33661-2017 正文条款（继承全库待办）。
9. Samhain 词条与学术来源直读（Wikipedia/en 词条 + Ronald Hutton《Stations of the Sun》；"凯尔特新年"学界定论程度需分层）。
10. 立冬专属国家级非遗锚点（本轮 ihchina 排查未发现）；台湾/闽南补冬、南京生葱的第二来源与方志/民族志源头。
11. 视觉/声音素材授权研究（北郊、薄冰、雉、菊花、菊花茶）。

## 规范自检

- 未编造来源、引文或检索记录；未读原文一律标注；全部 human_review=null；无 approved 状态；无自动发布。
- 只新建/编辑本节气文件（03_notes×11、04_sources×8、07_research×2）与 01_terms/19_立冬.md 索引；未触碰 02_topics/02_shared/其他节气/scripts/packages/docs。
- .batch-tmp 临时文件均以 lidong- 前缀命名；本日志本身也待人工复核。

[[01_terms/19_立冬|立冬索引]] · [[07_research/sections/review-lidong|立冬审核分节]] · [[04_sources/README|来源库]]
