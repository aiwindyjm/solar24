---
schema_version: '0.1.0'
id: 'research-xiaoman-batch-log'
type: 'ResearchNote'
title: '小满批量研究 · 第一轮执行日志（2026-09-16）'
solar_terms: ['xiaoman']
season: 'summer'
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
    'task': '按 24 节气批量研究规范完成小满（08，summer）第一轮研究：天文/物候/命名与现代阐释分层/动三车古籍溯源/祈蚕/农事农谚/地域/文学/全球表达/解释层/创意层',
    'queries': [
      '小满 太阳到达黄经60度 每年5月20日至22日 新华网 OR 中国政府网 OR 中国天气网 OR 气象局',
      '新华网 诗意节令 小满 小得盈满胜万全 2024',
      '小满 干热风 小麦 灌浆 中国天气网 OR 气象局 干热风灾害',
      '盛泽 先蚕祠 小满戏 非遗 吴江',
      'site:ihchina.cn 小满 节气',
      '维基文库API：srsearch=小滿動三車 / 農車油車絲車 / 翁卷 鄉村四月 / intitle:清嘉錄 / 吳郡歲華紀麗 / 祈蠶節',
      'winter wheat grain filling milk stage May Europe proverb "grain filling" agronomy calendar；European farming proverb wheat milk ripening May weather folklore',
      '直接URL直读：ihchina.cn/solar_details/47.html（否，实为项目页）→ 6968.html（→Article/Index/detail?id=9977，web_reader）；ihchina.cn/art/detail/id/9602.html；ihchina.cn/news_1_details/10320.html；zh.wikisource.org/wiki/月令七十二候集解 与 /欽定古今圖書集成/曆象彙編/歲功典/第045卷 与 /鄉村四月；news.cn/local/20240520/…c.html；weather.com.cn/shaanxi/tqxs/501034.shtml；zhuanti.mct.gov.cn/xcss2024_xcygj/jiangsu/detail/7257.html',
    ],
    'discovered_source_ids':
      [
        'source-ihchina-xiaoman-feature',
        'source-ihchina-xiaoman-nongsu',
        'source-ihchina-xiaoman-zheli-2015',
        'source-xinhua-xiaoman-2024',
        'source-gjts-suigongdian-045',
        'source-wikisource-xiangcun-siyue',
        'source-weather-com-cn-ganrefeng',
        'source-mct-shengze-canfa',
        'source-cozasadit-may-rain-proverb',
      ],
    'conflicts':
      [
        '先蚕祠建年两说：《中国文化报》2015"清道光七年（1827年）"vs 文旅部专题页"清道光二十年（1840）"——两直读源冲突，未定谳，盛泽卡/源卡两处登记，待吴江县志/盛泽镇志',
        '《月令》小满定义句异文：维基文库本与非遗网"物至于此"（至）vs 新华社稿"物致于此"（致）——版本转写异文，命名卡以直读维基文库本为准并登记',
        '动三车出处线索修正：任务线索猜《清嘉录》五月条/《吴郡岁华纪丽》——维基文库 intitle 检索两书均无文本；实际古籍锚点为《古今图书集成·岁功典》卷045嘉兴县条（非错误冲突，属线索纠偏）',
        '非遗网专题页编号线索修正：brief 称 47.html，实测 47=九华立春祭项目页、46→Article?id=9999 持续504、48=博览会新闻、49=班春劝农、50=三门祭冬、51+全404；小满专题真实地址 solar_details/6968.html（→Article/Index/detail?id=9977，curl/WebFetch 均504，web_reader 可读）',
      ],
    'conclusions':
      [
        '第一轮建立知识卡12张+Source卡9张（8直读+1检索摘要级）；引用共享卡4张（sci-solarterms-jieqi-zhongqi、hist-solarterms-pentad-system、sci-solarterms-calendar-role、hist-huainanzi-complete-24terms），全部仅链接不复述',
        '命名/阐释两分是本节气核心分层样本：古籍层只有"物至于此小得盈滿"物候定义；"满而不损/独缺大满/人生小满足矣"为2015-2024现代阐释（interp卡risk=high进C区）；"为何无大满"的古文献回答=无，如实标Needs Research',
        '"小满动三车"古籍溯源成功：清代类书《古今图书集成·岁功典》卷045嘉兴县条"小滿動油車、絲車、水車，謂之「動三車」"直读（+海宁蚕月"放蠶忙"条）；祭车神/白龙/抢水细节为现代机构汇编层（三文本疑同源），与古籍层分卡',
        'high卡3张：sci-xiaoman-longitude-60（非遗网+新华社双直读）/ hist-yueling-xiaoman-pentads（维基文库+非遗网互证）/ hist-xiaoman-naming-xiaodeyingman（×3直读）；sci-xiaoman-grainfill-dryhotwind 为 medium（×3直读但均为机构科普定性表述）',
        '主要证据缺口：祈蚕节古籍溯源、先蚕祠建年定谳、三候现代物候观测、干热风数值指标、翁卷诗作者异说校勘、中欧农谚原句直读',
      ],
    'human_questions':
      [
        '"为何无大满"古文献层面是否有任何直接讨论（清代札记/《月令辑要》类）？现代阐释最早文本是否早于2015（报刊数据库）？',
        '先蚕祠建年1827/1840定谳：吴江县志/盛泽镇志人工核验；"演戏三天/祥瑞戏/私死-丝谐音禁忌"的原始出处',
        '祭车神/抢水（海宁）的方志源头；非遗网三文本共同源头考（是否同一路现代汇编）',
        'GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）',
        '省级非遗"小满习俗"项目页直读（江苏/吴江官方名录），决定盛泽卡身份句升级',
      ],
  }
---

# 小满批量研究 · 第一轮执行日志

## 执行摘要

2026-09-16 由 AI 研究代理执行（brief：`.batch-tmp/AGENT-BRIEF.md`）。顶层问题：**小满是什么？"小得盈满"的古籍本义与现代"人生哲学"阐释的边界在哪里？动三车、祈蚕这些习俗的证据等级如何？**

## 流程记录

1. **样例对齐**：读立春 9 张样例卡+3 源卡+索引，谷雨批量日志+审核分节+2 张本波次格式基准卡。
2. **直读获取**（8 个页面直接读取）：
   - 维基文库《月令七十二候集解》全页（curl 走代理，小满节逐字：定义句+三候+注文）；
   - 维基文库《欽定古今圖書集成·歲功典》卷045（curl 走代理，嘉兴"動三車"条+海宁"放蠶忙"条）；
   - 维基文库《鄉村四月》作品页（curl 走代理，全诗+收录注+异署注）；
   - 非遗网小满专题（solar_details/6968→Article?id=9977：curl 直连/代理均504、WebFetch 504，最终 web_reader 读取成功）；
   - 非遗网《小满农俗》9602（curl 直连直读）；
   - 非遗网转载《中国文化报》小满哲理文 10320（curl 直连直读）；
   - 新华社2024小满稿（WebFetch 直读）；
   - 中国天气网陕西站干热风稿（WebFetch 直读）；文旅部盛泽先蚕祠页（WebFetch 直读）。
3. **检索但未直读**（search-excerpt）：CozaSadit 中欧五月雨农谚页（glob 卡唯一线索源）。
4. **成卡**：12 知识卡+9 源卡+解释卡+创意卡；古籍/机构/阐释严格分层。
5. **路由**：运行 `npx tsx .batch-tmp/batch-route.mts xiaoman`（表见下），按入包规则定 status。

## 关键发现与纠错

- **非遗网小满专题页编号纠偏（供后续波次）**：solar_details 编号 40-45 连续段在谷雨后中断——46→Article?id=9999（持续504，疑立夏，未证）、47=九华立春祭、48=博览会新闻、49=班春劝农、50=三门祭冬、51+ 全 404；**小满专题页真实地址为 solar_details/6968.html（302→Article/Index/detail?id=9977）**，读取路径：curl 与 WebFetch 均 504 → web_reader 成功。芒种及之后波次请勿假设 48+ 连续。
- **"动三车"古籍锚点**：任务线索猜测《清嘉录》/《吴郡岁华纪丽》均无维基文库文本（intitle 0 命中，无法证伪原书但本轮不可用）；实际命中《古今图书集成·岁功典》卷045嘉兴县条——"春末夏初浸穀種，小滿動油車、絲車、水車，謂之「動三車。」芒種刈菜麥"。三车名目与非遗网/文化报现代转述完全一致。
- **防幻觉自纠**：非遗网专题页在 curl/WebFetch 双 504 期间一度仅存在于检索摘要中，研究过程中明确区分"已直读/仅摘要"，web_reader 读取成功后才建 direct-read 源卡；非遗网两个补充页（9602/10320）与 9977 习俗段高度一致，已标注"疑同源汇编、互不构成独立交叉"，非遗网三页间不互相标 cross-checked。
- **先蚕祠建年冲突**：1827（文化报2015）vs 1840（文旅部2024）两直读源正面冲突，如实两说并存入卡，源卡 verification 不标 cross-checked。

## 12 项审计（§7）

| # | 审计项 | 结论 |
|---|---|---|
| 1 | Unsupported Distribution | 通过。农谚按机构原粒度标注地域（长江中下游/华南/黄河中下游/江南）；习俗限江南/江浙/海宁/盛泽；解释层三层文本无"大部/普遍/各地/全国"短语（自查） |
| 2 | Regional Generalization | 通过。盛泽卡四要素齐备且显式"不得泛化为江浙普遍过小满节"；动三车古籍条明确嘉兴；解释层写"江南/江浙相传"而非"中国人都" |
| 3 | Modern-as-Ancient | **通过+finding（重点样本）**。"满而不损/独缺大满/人生小满足矣"全部锚定 2015/2024 一手文本，interp 卡（epistemic: interpretation）+命名卡（fact 层）互为反锚点；干热风卡农谚与科学分层；"人生最好是小满"类流行语未混入任何 fact/古籍卡 |
| 4 | Historical Leakage | 通过。现代概念（干热风/灌浆气象学/UNESCO 体系）不出现在古籍卡命题；月令/古今图书集成卡无科学词汇；祈蚕卡把"亲蚕礼"明确标为转述层 |
| 5 | Scientific Leakage | 通过。三候卡/命名卡命题无黄经/气象表述（"四月中"仅记原文标签+链接共享卡）；干热风数值指标因未直读明确排除出命题 |
| 6 | Legend-as-Fact | 通过。"车神为白龙""蚕神诞辰"均保留"相传"措辞且注明无古籍直接证据；祈蚕卡三层证据（方志蚕月/相传层/具名史实）显式分列 |
| 7 | Weak Source Inflation | 通过。glob 卡唯一 search-excerpt 源+confidence low；无 low 源支撑 medium 以上卡；三张非遗网同机构页不互为交叉（源卡明示） |
| 8 | Search Excerpt Misuse | 通过。CozaSadit 源 verification=unverified、access=search-excerpt；"省级非遗小满习俗""北美 A wet May 谚语"等摘要级信息未建源卡、未入命题（正文线索提及处均标注"检索摘要"） |
| 9 | Cross-source False Validation | 通过。非遗网三页高度一致疑同源→不标 cross-checked；中国天气网与非遗网（不同主管）干热风互证→标 cross-checked；文旅部与文化报建年冲突→不标 cross-checked 并登记冲突 |
| 10 | Creative-as-Fact | 通过。idea 卡开头性质声明，三条创意各标依据卡+误导风险红线（"两层翻牌"的物理隔离设计防倒灌） |
| 11 | Global Forced Correspondence | 通过。glob 卡 relationship=seasonal-experience，reason 明写"非外国版小满、农业阶段平行"；三要素齐；引擎仅 global-candidate-hold(info)+insufficient-evidence（Candidate 定位预期内） |
| 12 | Shared Knowledge Duplication | 通过。中气机制/七十二候体系/黄道等分/淮南子序列均仅链接 02_shared；月令卡"四月中"只记原文标签不复述置闰机制；引擎未报 shared-duplicate |

## 19 维覆盖矩阵

| 维度 | 状态 | 依据/缺口 |
|---|---|---|
| astronomy | complete | sci-xiaoman-longitude-60（high，非遗网+新华社双直读） |
| calendar | partial | 四月中气标签直读（pentads 卡）+链接 sci-solarterms-jieqi-zhongqi；小满逐年交节时刻无权威数据源 |
| climate | partial | sci-xiaoman-grainfill-dryhotwind（干热风+灌浆）；分区统计与数值指标缺 |
| phenology | partial | 古典三候 high；现代物候观测缺失 |
| agriculture | complete | trad-xiaoman-nongshi + hist-gjts-xiaoman-sanche + sci-grainfill |
| ecology | missing | 苦菜/靡草（葶苈）/小麦现代生态观测未建卡 |
| chinese-life | complete | 动三车/祈蚕/食苦菜/现代阐释四层覆盖 |
| customs | complete | trad-sanche-customs + trad-qican + region-shengze |
| food | partial | 食苦菜并入 trad-nongshi（证据为机构汇编层，未独立成卡）；"尝新麦"仅一句 |
| history | complete | 命名+三候+动三车古籍+现代阐释四卡分层 |
| literature-art | partial | 翁卷《乡村四月》单页直读；作者异说（千家诗署范成大）待校勘 |
| regional-differences | partial | 盛泽一地双直读（建年冲突未决）；海宁/嘉兴为古籍条目级；江浙其他蚕区缺直读 |
| scientific-interpretation | complete | 黄经定义+灌浆干热风两卡 |
| global-expressions | partial | 1 条 Candidate（线索级，引擎 needs-research 属预期）；仅中欧方向 |
| visual-assets | missing | 无已授权素材（麦穗/水车/蚕茧意象候选未启动） |
| audio-assets | missing | 缫丝声/水车声/子规啼素材未研究 |
| interaction-ideas | complete | idea 卡 3 条（含两层翻牌防倒灌设计） |
| references | partial | 新增9源（8直读+1摘要）；GB/T正文/气象标准/方志缺 |
| ai-research-log | complete | 本日志+审核分节 |

小计：complete 8 / partial 8 / missing 3 / weak 0（N-A 0）。

## 素材边界审计

已直读但**本轮未建卡**的素材（原文存各源卡 excerpt/locator，防重复劳动）：

1. **养生段**（非遗网9977：皮肤病/风疹/清淡素食）——无医学来源，沿谷雨先例不采信不建卡。
2. **亲蚕礼/先蚕坛**（非遗网9602：天子亲耕/皇后亲蚕、北海先蚕坛、西陵氏）——清代礼制重要线索，但原典（《大清会典》等）未直读，已并入祈蚕卡转述层；值得下轮独立 hist 卡（先蚕坛祭祀史）。
3. **农谚群明细**（好蚕不吃小满叶/小满见新茧/小满桑葚黑等）——已并入农事卡命题，但逐条方志溯源未做；下轮可做农谚溯源专卡。
4. **"三夏"跨节气属性**——小满至夏至的农事框架，涉芒种，本轮只在农事卡带过，芒种波次应接管。
5. **北美英语农谚**（"A wet May will find a barn full of hay"，检索摘要）——未建源卡未入命题，glob 卡若扩展北美方向需先补 search-excerpt 源卡。

## 路由引擎输出（2026-09-16，全文粘贴）

```
# Routing report — xiaoman（tolerant loader）

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| fact-solarterms-unesco-2016 | CulturalFact | system | high | A(独立直读×2) | **human-review-required** | — |
| fact-solarterms-yellow-river-origin | CulturalFact | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-huainanzi-complete-24terms | HistoricalRecord | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-solarterms-pentad-system | HistoricalRecord | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-calendar-role | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-jieqi-zhongqi | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| glob-xiaoman-may-rain-grain-fill | GlobalExpression | global | high | D(独立直读×0) | **needs-research** | insufficient-evidence, global-candidate-hold |
| hist-gjts-xiaoman-sanche | HistoricalRecord | term | medium | B(独立直读×2) | **auto-candidate** | — |
| hist-xiaoman-naming-xiaodeyingman | HistoricalRecord | term | medium | A(独立直读×3) | **auto-candidate** | — |
| hist-yueling-xiaoman-pentads | HistoricalRecord | term | medium | A(独立直读×2) | **auto-candidate** | — |
| interp-xiaoman-modern-philosophy | CulturalFact | term | high | A(独立直读×2) | **human-review-required** | — |
| lit-wengjuan-xiangcunsiyue | CulturalFact | term | low | B(独立直读×1) | **auto-candidate** | — |
| region-shengze-xiaoman-xi | RegionalExpression | regional | medium | B(独立直读×2) | **human-review-required** | pending-primary-source |
| sci-xiaoman-grainfill-dryhotwind | ScientificFact | term | medium | A(独立直读×3) | **auto-candidate** | — |
| sci-xiaoman-longitude-60 | ScientificFact | term | medium | A(独立直读×2) | **auto-candidate** | — |
| trad-xiaoman-nongshi | Tradition | term | medium | A(独立直读×2) | **auto-candidate** | — |
| trad-xiaoman-qican | Tradition | term | high | B(独立直读×3) | **human-review-required** | pending-primary-source |
| trad-xiaoman-sanche-customs | Tradition | term | high | A(独立直读×2) | **human-review-required** | — |
| xiaoman-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |

## Findings 明细

- `glob-xiaoman-may-rain-grain-fill` **insufficient-evidence**（blocker）：没有正分证据来源（仅线索级或无来源）。
- `glob-xiaoman-may-rain-grain-fill` **global-candidate-hold**（info）：Global Expression 处于 candidate：不构成已核实的文化对应。
- `region-shengze-xiaoman-xi` **pending-primary-source**（major）：存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。
- `trad-xiaoman-qican` **pending-primary-source**（major）：存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。
- `xiaoman-human-explanation` **explanation-gated**（major）：支撑卡或解释卡未 approved：按 Content Gate 禁止发布（Knowledge verified ≠ Explanation verified）。
```

入包处置（§8 规则）：human-review-required 的 claim 卡 status=in-review（interp-modern-philosophy、trad-qican、trad-sanche-customs、region-shengze）；HumanExplanation/GlobalExpression/auto-candidate 保持 draft；表中前 6 张 02_shared 共享卡同为 human-review-required，属系统级既有卡，不入本节气审核包。最终路由统计：A 7 · B 1 · C 4 · D 1（见 [[07_research/sections/review-xiaoman|审核分节]]）。

> 运行注记（三轮）：第一次运行 glob-xiaoman-may-rain-grain-fill.md 因 relationship_to_solar_term 使用协议枚举外的值 'agricultural-parallel' 被 tolerant loader 跳过（brief 规定：跳过清单出现自己的文件必须修复重跑）——已改为合法枚举 'seasonal-experience'（reason 内保留"农业阶段平行"语义）。第二次运行 hist-gjts-sanche 报 evidence-below-confidence（tier B×2 不足以支撑 high），confidence high→medium。第三次（最终）运行：跳过清单为空，本节气 12 张路由卡全部入表，gjts 卡转 auto-candidate、保持 draft，路由表以上为最终版。

## 修改记录

- 2026-09-16（第一轮建库）：建 12 知识卡+9 源卡+解释卡+创意卡，索引更新（补 calendar 维度与 links）；运行路由引擎并按入包规则定 status；完成 12 项审计与 19 维覆盖矩阵；修复 1 处 YAML 引号错误（xinhua 源卡）与 1 处协议枚举错误（glob 卡）。

## 规范自检

- 未编造来源、引文或检索记录；未读原文一律标注（非遗网三页疑同源关系显式登记）；全部 human_review=null；无 approved 状态；仅写本节气文件（新建 23 文件 id 均含 xiaoman/相关命名，编辑仅 01_terms/08_小满.md）；未运行 pnpm/git 命令；YAML 23/23 解析通过（含 1 处修复复验）；Wiki 链接目标均为已存在文件或本轮新建卡。

[[01_terms/08_小满|小满索引]] · [[07_research/sections/review-xiaoman|审核分节]] · [[04_sources/README|来源库]] · [[07_research/batch-24-solar-terms-plan|批量计划]]
