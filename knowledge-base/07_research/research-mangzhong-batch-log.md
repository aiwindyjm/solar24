---
schema_version: '0.1.0'
id: 'research-mangzhong-batch-log'
type: 'ResearchNote'
title: '芒种批量研究 · 第一轮执行日志（2026-09-16）'
solar_terms: ['mangzhong']
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
    'task': '按 24 节气批量研究规范完成芒种（09，summer）第一轮研究：天文/物候/命名/农事农谚/梅雨古今分层/饯花神文学层/地方习俗/文学/全球表达/解释层/创意层',
    'queries': [
      'ihchina.cn 芒种 节气（site 限定与去限定各一次）→ 定位 solar_details/6969.html',
      '新华网 芒种 太阳到达黄经75度 6月5日 交节',
      '古诗文网 陆游 时雨 "时雨及芒种" 全诗',
      '中国天气网 OR 中央气象台 芒种 梅雨 入梅 长江中下游 6月',
      'Mediterranean Spain Italy wheat harvest "June" ripens earliest grain harvest timing Europe regional',
      'Europe wheat harvest June festival "harvest home" midsummer southern Europe early summer harvest tradition',
      '维基文库API：srsearch=紅樓夢 第二十七回 / 時雨 芒種 / 四野皆插秧 / 時雨及芒種 / 家家麥飯美 / intitle:紅樓夢 第二十七（148命中，确认子页用汉字数字"二十七"）',
      '直接URL直读：ihchina solar_details/6969（curl 三路+WebFetch+web_reader，最终 web_reader 全文）；zh.wikisource 月令七十二候集解、紅樓夢（程甲本）/二十七、廣羣芳譜/卷004、欽定古今圖書集成/曆象彙編/歲功典/第049卷；news.cn 2024-06-05 芒种稿；m.gushiwen.cn 时雨页；news.weather.com.cn 2024-06-19 入梅稿',
    ],
    'discovered_source_ids':
      [
        'source-ihchina-mangzhong-feature',
        'source-xinhua-mangzhong-2024',
        'source-wikisource-hongloumeng-chengjia-ch27',
        'source-gushiwen-luyou-shiyu',
        'source-wikisource-suigongdian-049',
        'source-wikisource-guangqunfangpu-c4',
        'source-weathercn-meiyu-2024',
        'source-britannica-harvesthome-leads',
        'source-medgrain-june-leads',
      ],
    'conflicts':
      [
        '非遗网芒种页三候作"二候鹏始鸣"，《月令》维基文库本与新华网稿均作"鵙始鸣"，且非遗网自己的释义段写"伯劳鸟"——判定为"鹏"系"鵙"之形近讹字，已在三候卡立异文警示（引用以《月令》为准）',
        '日期表述粒度：非遗网"每年6月6日前后"（并给2017年6月5日实例） vs 新华社"每年6月5日至7日之间"——非冲突，是同一事实的粗细两种表述，sci 卡 exceptions 已注明各自直读来源',
        '《红楼梦》程甲本与非遗网引文的虚字差异（"每一颗樹/每一颗树上"、"打扮的/打扮得"）——版本差异记录于程甲本源卡，不构成内容冲突',
        '入梅口径古今分立：古籍"芒種後遇壬則入梅"（历注推步） vs 现代国家气候中心监测"常年6月14日入梅"——两卡分立（hist vs sci），未互证、未混排',
      ],
    'conclusions':
      [
        '第一轮建立知识卡12张（10张claim卡+创意卡+解释卡；5 high：sci-mangzhong-longitude-75 / hist-yueling-mangzhong-pentads / hist-mangzhong-naming / sci-mangzhong-sanxia-meiyu / hist-mangzhong-jianhuashen）、Source卡9张（7直读+2检索摘要级）；引用共享卡3张（calendar-role、jieqi-zhongqi、pentad-system）+链接 huainanzi/unesco/yellow-river，全部仅链接不复述',
        '芒种的灵魂="收与种同节"的农时结构：命名卡（月令双关+宋人"说者不一"）、农谚卡（"芒种芒种，连收带种"新华逐字）、sci三夏卡（麦收赶梅雨）三卡从三个证据层闭合同一命题',
        '饯花神按 brief 要求立"文学文本记载"卡：程甲本第二十七回逐字直读+非遗网"此习俗今已不存"互证，明确文学描写≠风俗志，清代流行度待考（风俗志排查列为待办）',
        '非遗网 solar_details 编号情报：芒种=6969.html（非顺序48！）——40立春…45谷雨之后编号断裂（46空/47九华立春祭/48默认文章/49班春劝农/50三门祭冬），后续节气（夏至起）必须检索定位，不能按 40+n 试探',
        '主要证据缺口：安苗/打泥巴仗/煮梅第二源、陆游诗底本校勘、风俗志饯花神排查、三候现代物候观测、梅雨监测规范直读、《嬾真子錄》《風土記》原书直读',
      ],
    'human_questions':
      [
        '饯花神"仅见小说"判定是否维持？需人工排查《清嘉录》《燕京岁时记》《帝京岁时纪胜》五月卷有无花神条目',
        '《嬾真子錄》原书直读（核类书转引）与《周礼》稻人注经学脉络是否立卡',
        '晋《風土記》辑本直读（"夏至前芒種後雨為黃梅雨"句）',
        '安苗"始于明初"的断代出处（皖南方志）与非遗名录身份（ihchina project_details 人工检索）',
        '"芒种芒种，连收带种"异文谱系（vs"忙收忙种"）与最早收录文献',
        'GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）',
      ],
  }
---

# 芒种批量研究 · 第一轮执行日志

## 执行摘要

2026-09-16 由 AI 研究代理执行（brief：`.batch-tmp/AGENT-BRIEF.md`）。顶层问题：**芒种是什么？"收与种同节"的农时结构、命名、三候、梅雨、习俗与文学的证据边界在哪里？**

## 流程记录

1. **样例对齐**：读立春 9 张样例卡+3 源卡+索引与谷雨全套（含批量日志/审核分节），仿写结构。
2. **直读获取**（7 个页面直接读取）：
   - 维基文库《月令七十二候集解》全页（curl+代理，芒种节逐字：定义句+三候+注文）；
   - 维基文库《紅樓夢（程甲本）/二十七》（curl+代理，饯花神段逐字；页面路径情报：子页用汉字数字）；
   - 维基文库《廣羣芳譜/卷004》（curl+代理，《嬾真子錄》命名异说+《風土記》黄梅雨句）；
   - 维基文库《欽定古今圖書集成/曆象彙編/歲功典/第049卷》（curl+代理，152KB，入梅出梅规则+松江府/烏程縣/諸暨縣条）；
   - 非遗网芒种专题 solar_details/6969.html（curl 直连/WebFetch 均 504，最终 web_reader MCP 全文读取：概说/物候/农事农谚/习俗四节）；
   - 新华社2024年芒种稿（WebFetch 直读：黄经75°/6月5-7日/三候/农谚/陆游两诗）；
   - 古诗文网陆游《时雨》页、中国天气网2024入梅稿（WebFetch 直读）。
3. **检索但未直读**（search-excerpt）：Britannica "Harvest Home"（403）、Ercoli 2014/JRC 地中海六月麦收时序（各建线索源卡）。
4. **成卡**：12 知识卡（10 claim+创意+解释）+9 源卡；文学/风俗史/农谚/传说性内容严格分层（芒种无 legend 卡——未发现需要独立传说层的叙事，饯花神按文学层处理）。
5. **路由**：`npx tsx .batch-tmp/batch-route.mts mangzhong`（tolerant 版，表见下），按入包规则定 status（3 张 claim 卡 draft→in-review）。

## 关键发现与纠错

- **非遗网三候讹字**：页面作"二候**鹏**始鸣"，《月令》原文与新华社稿均作"鵙"，页面自己的释义段亦写"伯劳鸟"——机构页也有形近致误，引用必须校回"鵙"。此为本轮最重要的文本校勘发现。
- **命名自古有争**：《嬾真子錄》（经《广群芳谱》转引）"二十四氣其名皆可解，獨小滿、芒種說者不一"——宋人已记录命名之争，其"麥至是而始可收，稻過是而不可種"解正是"双抢"观念的文献源头。命名卡据此立"古籍定义+宋人异说+现代转写"三层。
- **文学≠风俗志**：饯花神唯一可靠依托是《红楼梦》第二十七回（程甲本直读），小说自称"尙古風俗"但无典出；非遗网亦明言"此习俗今已不存"。卡内红线：可写"小说记载"，不得写"清代通行风俗"。
- **古今梅雨两套口径**：古籍以"芒种后逢壬入梅"推步（历注系统），现代以国家气候中心监测"常年6月14日入梅"——两卡分立互不混排，是防"科学倒灌进古籍卡"的样本。
- **引擎纠错一例**：glob 卡首跑命中 global-forced-correspondence（"六月收获节等于芒种"句中"等于"未被否定词表覆盖），改写为"不得……画等号"后复跑通过——否定语境不豁免触发词，写作时避免在警示句里复述"等于/等同"字样。
- **非遗网编号断裂**：45（谷雨）之后 solar_details 不再按节气顺序（48=默认文章），芒种实为 6969——夏至及后续节气代理必须检索定位。

## 12 项审计（§7）

| # | 审计项 | 结论 |
|---|---|---|
| 1 | Unsupported Distribution | 通过。解释层三层文本无"大部/普遍/各地/全国"短语；"长江中下游/皖南/黔东南/南方"均为有卡背书的区域粒度；非遗网九条农谚标注"流传地域未逐一标注" |
| 2 | Regional Generalization | 通过。安苗限皖南、打泥巴仗限黔东南侗族、煮梅限南方，region 字段与命题双重限定；"山農喜湖農忌"保留原语境 |
| 3 | Modern-as-Ancient | 通过。"谐音忙种"标为现代通俗层；"三夏"作为现代农事制度术语只作机构稿用语；安苗"始于明初"降为"页面说法" |
| 4 | Historical Leakage | 通过。红楼梦卡（18世纪小说）与饯花神当代传播层分开表述；联合国 UNESCO 等现代制度只出现在共享卡链接 |
| 5 | Scientific Leakage | 通过。古籍卡（三候/命名/入梅）命题无黄经/气象学表述；"逢壬入梅"与现代监测明确分卡；农谚占验全部留在 tradition 卡 |
| 6 | Legend-as-Fact | 通过（无 legend 卡）。饯花神未被当作实俗：卡内三处红线（"尚古风俗"是小说家言/今已不存/不得写成清代通行风俗），risk=high 入 C 区 |
| 7 | Weak Source Inflation | 通过。glob 卡唯一由 search-excerpt 支撑且 confidence=low；anmiao 卡单源机构直读定为 low；无 low 源支撑 high/medium 卡 |
| 8 | Search Excerpt Misuse | 通过。两张 search-excerpt 源 verification 均 unverified，access 均 search-excerpt；引擎未报 excerpt-as-read |
| 9 | Cross-source False Validation | 通过。非遗网/新华网为不同主管机构（文旅系统 vs 国家通讯社）；月令引文在非遗网与维基文库《月令》间互证方标 cross-checked；weathercn 的"常年6月14日"标注为单页直读+时序印证而非数值互证 |
| 10 | Creative-as-Fact | 通过。idea 卡开头性质声明，每条标依据卡与误导风险（"鹏讹字""占验不得游戏化""文学场景不得复原式呈现"三红线） |
| 11 | Global Forced Correspondence | 通过（复跑）。三要素齐备且 relationship=seasonal-experience；"harvest home 在八九月"作反锚点；首跑曾命中（"等于"字样），改写后引擎复跑无此 finding |
| 12 | Shared Knowledge Duplication | 通过。黄道24等分/中气机制/七十二候体系/UNESCO/淮南子序列均仅链接（02_shared 各卡）；引擎未报 shared-duplicate |

## 19 维覆盖矩阵

| 维度 | 状态 | 依据/缺口 |
|---|---|---|
| astronomy | complete | sci-mangzhong-longitude-75（high，双机构直读） |
| calendar | partial | 五月"节气"身份链接 sci-solarterms-jieqi-zhongqi；历年交节时刻无权威数据源 |
| climate | complete | sci-mangzhong-sanxia-meiyu（high，三机构直读）+ hist-mangzhong-rumei-chumei（medium，古籍层）古今双卡 |
| phenology | partial | 古典三候 high（含讹字校勘）；现代物候观测缺失 |
| agriculture | complete | trad-mangzhong-nongshi + sci-mangzhong-sanxia-meiyu + lit-mangzhong-luyou-shiyu |
| ecology | missing | 三候物种（螳螂/伯劳/反舌）现代生态观测未建卡；"反舌"物种争议待解 |
| chinese-life | complete | 农谚/安苗煮梅/饯花神覆盖农时-食俗-文学三面 |
| customs | partial | 饯花神（文学层 high）+安苗/打泥巴仗（机构单源 low）；断代与第二源缺失 |
| food | partial | 煮梅/安苗面塑并卡处理（trad-mangzhong-anmiao-zhumei）；未独立成食俗史卡 |
| history | complete | 命名（含宋人异说）+三候+入梅规则+饯花神文学记载四卡分层 |
| literature-art | complete | 陆游《时雨》（medium，前四句双源）+红楼梦第二十七回（high）双样本 |
| regional-differences | partial | 皖南/黔东南/江南府县（岁功典）/南北方麦收差有时空标注；逐地核验未做 |
| scientific-interpretation | complete | 黄经定义+三夏梅雨两卡 |
| global-expressions | partial | 1 条 Candidate（线索级，引擎 needs-research）；无第二比较方向 |
| visual-assets | missing | 无已授权素材（麦田/梅雨/轿马旌幢意象候选未启动） |
| audio-assets | missing | 伯劳鸣声、"反舌无声"声音素材未研究（idea 卡有创意占位） |
| interaction-ideas | complete | idea 卡 3 条（含分层红线） |
| references | partial | 新增9源（7直读）；GB/T正文/梅雨监测规范/农谚手册缺 |
| ai-research-log | complete | 本日志+审核分节 |

小计：complete 9 / partial 7 / missing 3 / weak 0（N-A 0）。

## 素材边界审计

非遗网芒种专题页已直读但**本轮未建卡**的素材（原文已存 [[04_sources/source-ihchina-mangzhong-feature|源卡]]，防重复劳动）：

1. **节气养生段**（"芒种夏至天，走路要人牵……"谚+孙思邈引文+清淡饮食建议）——无医学来源，保健表述不采信；谚语本身若引用需标 tradition 层，未建卡。
2. **青梅保健功效**（"降血脂、消除疲劳、调节酸碱平衡、增强人体免疫力"）——无医学来源，已在 anmiao 卡 exceptions 明示不采信。
3. **"东风染尽三千顷，折鹭飞来无处停"诗句**（页面引作田野景色描写，未标作者）——出处未核，未建卡；若核得作者可补田园诗样本。
4. **芒种高考季**（新华社稿"芒种恰逢高考"及田兆元点评）——现代时序巧合，属当代生活层，未建卡；如做"节气当代化"课题可用。
5. **白居易《观刈麦》节句**（新华社稿引四句未标篇名）——唐诗平行样本线索，已记入 lit 卡待办，未独立建卡。

## 路由引擎输出（2026-09-16，全文粘贴）

```
# Routing report — mangzhong（tolerant loader）

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| fact-solarterms-unesco-2016 | CulturalFact | system | high | A(独立直读×2) | **human-review-required** | — |
| fact-solarterms-yellow-river-origin | CulturalFact | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-huainanzi-complete-24terms | HistoricalRecord | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-solarterms-pentad-system | HistoricalRecord | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-calendar-role | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-jieqi-zhongqi | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| glob-mangzhong-june-grain-harvest | GlobalExpression | global | high | C(独立直读×0) | **needs-research** | weak-source-low-confidence, global-candidate-hold |
| hist-mangzhong-jianhuashen | HistoricalRecord | term | high | A(独立直读×2) | **human-review-required** | — |
| hist-mangzhong-naming | HistoricalRecord | term | medium | A(独立直读×3) | **human-review-required** | pending-primary-source |
| hist-mangzhong-rumei-chumei | HistoricalRecord | term | medium | A(独立直读×1) | **human-review-required** | pending-primary-source |
| hist-yueling-mangzhong-pentads | HistoricalRecord | term | medium | A(独立直读×3) | **auto-candidate** | — |
| lit-mangzhong-luyou-shiyu | CulturalFact | term | low | A(独立直读×2) | **auto-candidate** | — |
| mangzhong-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |
| sci-mangzhong-longitude-75 | ScientificFact | term | medium | A(独立直读×2) | **auto-candidate** | — |
| sci-mangzhong-sanxia-meiyu | ScientificFact | term | medium | A(独立直读×3) | **auto-candidate** | — |
| trad-mangzhong-anmiao-zhumei | Tradition | term | medium | A(独立直读×1) | **auto-candidate** | — |
| trad-mangzhong-nongshi | Tradition | term | medium | A(独立直读×3) | **auto-candidate** | — |

## Findings 明细

- `glob-mangzhong-june-grain-harvest` **weak-source-low-confidence**（blocker）：弱来源+低置信度的占位卡，应继续研究而非进入审核。
- `glob-mangzhong-june-grain-harvest` **global-candidate-hold**（info）：Global Expression 处于 candidate：不构成已核实的文化对应。
- `hist-mangzhong-naming` **pending-primary-source**（major）：存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。
- `hist-mangzhong-rumei-chumei` **pending-primary-source**（major）：存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。
- `mangzhong-human-explanation` **explanation-gated**（major）：支撑卡或解释卡未 approved：按 Content Gate 禁止发布（Knowledge verified ≠ Explanation verified）。
```

入包处置（§8 规则）：human-review-required 的 claim 卡 status=in-review（hist-mangzhong-jianhuashen、hist-mangzhong-naming、hist-mangzhong-rumei-chumei）；HumanExplanation/GlobalExpression 保持 draft；表中 6 张 02_shared 共享卡同为 human-review-required，属系统级既有卡，不入本节气审核包。路由统计（本节气卡）：A 6 · B 2 · C 2 · D 1。

## 修改记录

- 2026-09-16（第一轮建库）：建 12 知识卡+9 源卡+审核分节，索引更新（补 calendar 维度与 links）；运行路由引擎（tolerant 版）并按入包规则定 status；完成 12 项审计与 19 维覆盖矩阵；修复 glob 卡 global-forced-correspondence finding 一处（"等于"字样改写）后复跑通过。

## 规范自检

- 未编造来源、引文或检索记录；未读原文一律标注（2 张 search-excerpt 源、婴真子录/風土記转引层级）；全部 human_review=null；无 approved 状态；仅写本节气文件（新建 23 文件：12 知识卡+9 源卡+日志+审核分节，id 均含 mangzhong 或 source- 可识别命名，编辑仅 01_terms/09_芒种.md）；未运行 pnpm/git 命令；YAML 22/22 解析通过（12知识卡+9源卡+本日志，id 与文件名一致）；Wiki 链接目标均为已存在文件或本轮新建卡（含审核分节）。

[[01_terms/09_芒种|芒种索引]] · [[07_research/sections/review-mangzhong|审核分节]] · [[04_sources/README|来源库]] · [[07_research/batch-24-solar-terms-plan|批量计划]]
