---
schema_version: '0.1.0'
id: 'research-yushui-batch-log'
type: 'ResearchNote'
title: '雨水第一轮批处理研究 · 执行日志（2026-09-16）'
solar_terms: ['yushui']
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
    'task': '雨水（yushui，第2个节气）第一轮完整研究：12阶段Pipeline压缩执行，产出10张知识卡+7张来源卡并更新索引',
    'queries':
      [
        '雨水 节气 黄经330度 新华网 OR 中国政府网 OR 中国天气网 OR 气象局',
        '月令七十二候集解 雨水 正月中 獭祭鱼 候雁北 草木萌动（维基文库直读）',
        '春夜喜雨 杜甫 好雨知时节（维基文库 API: srsearch=春夜喜雨）',
        '广汉保保节 雨水 拉保保 非物质文化遗产 四川',
        'site:ihchina.cn 保保节 OR 拉保保；ihchina.cn 广汉 保保节 国家级非物质文化遗产 名录',
        '广汉市人民政府 保保节 正月十六 省级非物质文化遗产',
        'Wikipedia 雨水 節気 2月18日ごろ 太陽黄経330度 日本 二十四節気',
        '雨水 うすい 国立天文台 暦計算室 こよみ用語解説 二十四節気（直读）',
        '우수 雨水 24절기 한국천문연구원 절기 태양황경 330도（命中 EncyKorea 后直读）',
        'ihchina.cn solar_details 41.html（非遗网雨水专题页确认）',
      ],
    'discovered_source_ids':
      [
        'source-ihchina-yushui-feature',
        'source-xinhua-yushui-feature',
        'source-wikisource-chunye-xiyu',
        'source-cnr-guanghan-baobao',
        'source-xinhua-guanghan-baobao',
        'source-naoj-24sekki-yushui',
        'source-encykorea-usui',
      ],
    'conflicts':
      [
        '三候二候异文：维基文库《月令七十二候集解》正文作"候鴈北"（夹注《月令》《漢書》作"鴻鴈北"），新华网与非遗网均作"鸿雁来"——已登记于 hist-yueling-yushui-pentads，"鸿雁来"的直接古籍出处待查',
        '《月令》雨水定义句异文：维基文库本"散而為雨水矣"，新华网/非遗网引文作"散而为雨矣"——同卡登记，待版本校勘',
        '拉保保日期锚定冲突：非遗网雨水专题把拉保保列入雨水民俗，但央广网/新华网直读证实广汉保保节固定农历正月十六——已作为 region-guanghan-yushui-baobaojie 核心记录点（节气同期 vs 农历日定期）',
        '非遗网雨水专题页"雨水拉保保"段三次读取均不完整（仅标题与配图），逐字引文缺失——如实标注，不引用',
      ],
    'conclusions':
      [
        '本轮建立 10 张知识卡（4 high / 4 medium / 2 low）、7 张新 Source（7 直读、0 检索摘要级），全部 draft/in-review，human_review=null',
        '高可信锚点：黄经330°定义（新华网+非遗网+日本国立天文台三源跨语言直读）、雨水三候古籍原文（维基文库直读）、广汉保保节（央广网+新华网互证）、由雪转雨气象机制（两机构直读）',
        'ihchina solar_details 雨水=41.html（页面标题"东风解冻散为雨——二十四节气之雨水"确认），供后续波次编号推算参考',
        '主要证据缺口：GB/T 正文、"鸿雁来"出处、回娘家地域断代、《春夜喜雨》系年、雨水时节气候分布逐区核验、日本/朝鲜半岛雨水民俗实践层',
      ],
    'human_questions':
      [
        'GB/T 33661-2017 正文 PDF 人工核读（与立春共用待办）；"雨水=农历正月初四（2018）"实例可与《中国天文年历》核对',
        '"鸿雁来"表述的古籍出处（建议核《礼记·月令》孟春平行记载）与集解版本校勘（中华书局印本）',
        '广汉保保节地方志核验（清乾隆起源说）与四川省2007年首批省级名录原始文件直读',
        '《春夜喜雨》系年（通行"上元二年成都"说）需注本核实后方可写入对外内容',
        '全球表达 Candidate 需跨文化顾问审核后方可脱离 candidate',
      ],
  }
---

# 雨水第一轮批处理研究 · 执行日志

## 执行摘要

2026-09-16 由 AI 研究代理执行（12阶段Pipeline压缩）。顶层研究问题：**雨水是什么？由哪些可靠来源支撑？"雨水拉保保"一类流行叙述与证据的差距在哪里？**

产出：10 张知识卡（sci×2、hist×1、trad×2、region×1、lit×1、glob×1、idea×1、explanation×1）、7 张 Source 卡（全部直读）、索引更新（补 calendar 维度）、审核分节。共享知识卡引用 3 张（[[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气]]、[[02_shared/sci-solarterms-calendar-role|历法角色]]、[[02_shared/hist-solarterms-pentad-system|七十二候体系]]），机制不复述。

## 流程记录（12阶段压缩）

1. **样例对齐**：完整读取 brief §1 全部样例卡与立春索引；对齐 frontmatter 字段、flow 风格、证据区写法。
2. **线索核验（LEAD→事实/待核）**：
   - 黄经330°/2月18-20日：新华网直读证实 ✅
   - 非遗网专题页=41.html：页面标题证实 ✅
   - 三候=獭祭鱼/候雁北/草木萌动：维基文库直读证实 ✅（且发现媒体层"鸿雁来"异文）
   - 降水由雪转雨、气温回升：两机构直读支撑 ✅（分布断言收窄）
   - 广汉"雨水拉保保/保保节"：直读证实**活动锚定正月十六而非节气日**，省级非遗（非国家级），流行节气叙事降权 ⚠️
   - 杜甫《春夜喜雨》：维基文库全文直读 ✅（页面无系年，如实留空）
   - 日本/朝鲜半岛"雨水"节气名：NAOJ+EncyKorea 双机构直读（超出预期的 search-excerpt 级）✅
3. **直读来源 7 个**：非遗网41.html（WebFetch 504→备用阅读器）、新华网news.cn、维基文库（月令全书页、春夜喜雨作品页，curl 抓取+本地提取）、央广网、新华网四川频道、日本国立天文台（Shift-JIS 解码）、韩国学中央研究院百科。
4. **未读/降级**：ihchina"拉保保"段（三次读取不完整，逐字引文弃用）；人民网四川频道/中国日报/封面新闻（保保节旁证，仅检索摘要级，写入 Source 卡说明但不作为独立证据）；中国天气网（未用）。
5. **成卡**：每卡一命题、事实分层（fact/scientific-explanation/tradition/unverified 各归各卡）、断代地域写清、risk/impact 必填。
6. **路由**：见下表。

## 12项审计（逐项结论）

| # | 审计项 | 结论 |
|---|---|---|
| 1 | Unsupported Distribution | **发现并规避**：非遗网"全国大部分地区气温回升"类分布断言未逐区核验，一律不入 claim（sci-yushui-rain-transition 收窄进 exceptions）；HumanExplanation 三层逐句自查零分布短语 |
| 2 | Regional Generalization | **发现**：拉保保流行叙事有泛化为"四川/中国雨水习俗"倾向；region 卡严格限定广汉市+正月十六，并显式禁止表述为普遍习俗 |
| 3 | Modern-as-Ancient | **通过**：回娘家/接寿卡明确"当代机构汇编记载、历史谱系未建立"；农谚卡标 tradition 层；保保节"清乾隆起源"标注为媒体转述 |
| 4 | Historical Leakage | **通过**：hist 卡（月令三候）无黄经/气象学等现代概念表述；农历机制引用共享卡而非倒灌古籍卡 |
| 5 | Scientific Leakage | **通过**：科学解释全部在 sci 卡；三候卡的"报本/知时/气交为泰"注文标注为古典解释体系（Interpretation） |
| 6 | Legend-as-Fact | **通过**：无传说类内容入 fact；拉保保"寓意"类表述保持 tradition/媒体引语层 |
| 7 | Weak Source Inflation | **通过**：回娘家卡单源→confidence low 如实标注；媒体旁证（人民网等）仅记入 Source 卡说明，不升独立证据 |
| 8 | Search Excerpt Misuse | **通过**：本轮 0 张 search-excerpt Source（保保节旁证明确标注"未直读、不作独立证据"）；全部 search-excerpt 使用均 verification: unverified |
| 9 | Cross-source False Validation | **发现并规避**：新华网与非遗网互证时明确两源独立（不同发布方）；央广网与新华网四川频道互证同一事件属真实交叉；非遗网与新华网引《月令》同段不算对古籍的独立校勘（以维基文库直读为正文依据） |
| 10 | Creative-as-Fact | **通过**：idea 卡开头性质声明，4条创意均标依据卡与误导风险 |
| 11 | Global Forced Correspondence | **发现并修正**：glob 卡 relationship_reason 初稿"不能说成'同一个节日'"触发引擎 global-forced-correspondence（否定识别不含"不能"），改写后复跑通过（仅余 info 级 candidate-hold） |
| 12 | Shared Knowledge Duplication | **通过**：节气/中气机制、置闰规则、黄道24等分、七十二候体系均链接共享卡不复述；本节气卡仅承载"雨水，正月中"定义句与置闰例证的节气侧引用 |

## 19维覆盖矩阵

| 维度 | 状态 | 说明 |
|---|---|---|
| astronomy | complete | 黄经330°/日期范围，三源直读（sci-yushui-longitude-330, high） |
| calendar | complete | 正月中定义句直读+中气机制引用共享卡（hist-yueling-yushui-pentads + sci-solarterms-jieqi-zhongqi） |
| climate | complete | 由雪转雨/气温回升机制两源直读（sci-yushui-rain-transition, high）；逐区分布核验留待研究 |
| phenology | complete | 三候古籍原文直读+异文登记（hist-yueling-yushui-pentads, high）；现代物候观测 missing（见 D 区） |
| agriculture | partial | 农事农谚两源（trad-yushui-nongshi, medium）；农谚地域归属未校 |
| ecology | weak | 仅古典物候文本承载；现代生态观测无来源未建卡 |
| chinese-life | partial | 回娘家/接寿单源低置信（trad-yushui-huijiajia）+广汉拉保保（region 卡） |
| customs | partial | 同上两卡；雨水日全国性习俗证据不足，未硬造 |
| food | weak | 仅"罐罐肉"作为礼品出现在习俗记载内，未单独建卡（证据不足以成卡） |
| history | partial | 《月令》文本层 high；《淮南子》雨水句未单独核读（序列已在共享卡）；断代史未展开 |
| literature-art | complete（单样本） | 《春夜喜雨》全文直读（lit-dufu-yushui-xiyu, medium）；元稹咏廿四气诗组诗未建（待来源） |
| regional-differences | complete | 广汉保保节（high）+黄河流域命名经验提示（shared 卡链接） |
| scientific-interpretation | complete | sci×2（黄经定义、气象机制） |
| global-expressions | partial | 中日韩历法层 Candidate（双机构直读）；民俗实践层零来源 |
| visual-assets | missing | 无已授权素材（创意卡列需求） |
| audio-assets | missing | 无已授权素材（创意卡列需求） |
| interaction-ideas | complete | 4条创意（idea-yushui-interaction-sketches） |
| references | complete | 新增 7 Source 全直读并交叉标注 |
| ai-research-log | complete | 本日志 |

统计：complete 10 / partial 5 / weak 2 / missing 2。

## 素材边界审计

- 逐字引文 12 处（月令四段、新华社气象段与定义段、非遗网定义段与三候段、央广网四段、新华网图集图注、NAOJ 表行与总定义、EncyKorea 定义段、春夜喜雨全诗），全部来自 2026-09-16 直读。
- 主动弃用的素材：ihchina"拉保保"段（读取不完整）、"七九河开八九雁来"（无法确证出自哪个页面）、ihchina 页面多数农谚条目（仅引可确证的两条）、人民网等保保节旁证（摘要级）。
- 无一处把检索摘要当原文；无一处虚构"已读"。

## 引擎路由表（2026-09-16 实跑，容错加载器）

> 环境说明：官方 `npx tsx skills/solar24-cultural-research/workflows/route.ts yushui` 因**其他节气并行代理的 3 个文件**（hist-jingzhe-qizhe-renaming / region-hkg-ngokengkiu-daxiaoren / source-ihchina-chenguangzhong-ordering，含未转义引号）YAML 解析失败而中断；本表用同逻辑容错运行器（`.batch-tmp/yushui-route-runner.mts`，逐文件 try/catch）生成，评估规则与官方脚本一致。共享卡行（solar_terms 为空者）一并列出供参照。

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| fact-solarterms-unesco-2016 | CulturalFact | system | high | A(独立直读×2) | **human-review-required** | — |
| fact-solarterms-yellow-river-origin | CulturalFact | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-huainanzi-complete-24terms | HistoricalRecord | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-solarterms-pentad-system | HistoricalRecord | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-calendar-role | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-jieqi-zhongqi | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| glob-yushui-usui-east-asia | GlobalExpression | global | high | A(独立直读×2) | **human-review-required** | global-candidate-hold |
| hist-yueling-yushui-pentads | HistoricalRecord | term | medium | A(独立直读×3) | **auto-candidate** | — |
| lit-dufu-yushui-xiyu | CulturalFact | term | low | B(独立直读×1) | **auto-candidate** | — |
| region-guanghan-yushui-baobaojie | RegionalExpression | regional | high | A(独立直读×3) | **human-review-required** | — |
| sci-yushui-longitude-330 | ScientificFact | term | medium | A(独立直读×3) | **human-review-required** | pending-primary-source |
| sci-yushui-rain-transition | ScientificFact | term | medium | A(独立直读×2) | **auto-candidate** | — |
| trad-yushui-huijiajia | Tradition | term | medium | A(独立直读×1) | **auto-candidate** | — |
| trad-yushui-nongshi | Tradition | term | medium | A(独立直读×2) | **auto-candidate** | — |
| yushui-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |

Findings 明细：

- `glob-yushui-usui-east-asia` **global-candidate-hold**（info）：Global Expression 处于 candidate：不构成已核实的文化对应。
- `sci-yushui-longitude-330` **pending-primary-source**（major）：存在未直读的一手/标准来源（GB/T 正文），需人工核读后才能 verified。
- `yushui-human-explanation` **explanation-gated**（major）：支撑卡或解释卡未 approved：按 Content Gate 禁止发布。

路由统计（本节气新卡）：A auto-candidate 5 · B human-review 1 · C human-review 3（glob/explanation/region）· D 0。

## 未解决与下一步（按优先级）

1. GB/T 33661-2017 正文人工核读（与立春共用）；雨水交节逐年时刻权威数据入库。
2. "鸿雁来"古籍出处核读（《礼记·月令》）；集解版本校勘（中华书局印本/《四库》本）。
3. 广汉保保节方志与省级名录原始文件直读；非遗网"拉保保"段完整正文人工读取。
4. 回娘家/罐罐肉的地域与断代（川西方志/民俗学文献）。
5. 《春夜喜雨》系年注本核实；元稹《咏廿四气诗》雨水篇来源建立。
6. 雨水时节气候分布逐区核验（中国天气网/气候公报）；现代物候观测数据。
7. 日本/朝鲜半岛雨水民俗实践层研究（跨文化顾问参与）。
8. 视觉/声音素材版权研究（春雨、雁阵、古柏拉保保场景；在世人物肖像 consent）。

## 修改记录

- 2026-09-16：初版（第一轮批处理）。

[[01_terms/02_雨水|雨水索引]] · [[07_research/sections/review-yushui|审核分节]] · [[04_sources/README|来源库]] · [[07_research/research-lichun-pilot-log|立春试点日志（对照）]]
