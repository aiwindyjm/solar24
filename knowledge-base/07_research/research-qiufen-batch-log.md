---
schema_version: '0.1.0'
id: 'research-qiufen-batch-log'
type: 'ResearchNote'
title: '秋分第一轮批研究 · 执行日志（2026-09-16）'
solar_terms: ['qiufen']
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
    'task': '按 24 节气批研究 brief 为秋分（qiufen，顺序16，autumn）完成第一轮知识库填充：13项交付物、12项审计、路由与审核分节',
    'queries': [
      'ihchina.cn solar_details 秋分（编号试探：6972-6976 段，最终 solar_details/6976.html 经302至 Article/Index/detail?id=9827，标题《桂子飘香远——二十四节气之秋分》确认）',
      '月令七十二候集解 秋分 八月中 雷始收聲 蟄蟲坏戶 水始涸（维基文库全文直读，白露后寒露前切分）',
      '秋分 太阳到达黄经180度 9月23日 新华网 OR 中国天气网（WebSearch+直读）',
      '维基文库检索：天子春朝日 秋夕月 / 秋分者 阴阳相半 / 夕月壇 秋分 / 金氣秋分 / intitle:秋分',
      '古籍直读：春秋繁露/卷12、禮記/祭義、文獻通考/卷七十九、欽定大清會典/卷四十四、靖康緗素雜記/卷一、燕京歲時記（八月中秋条）、監祠夕月壇書事、秋分日祭百神文',
      '中国农民丰收节 设立 秋分 2018 农业农村部 国新办 发布会（WebSearch+直读 xinhuanet/people/scio）',
      '谢逸 点绛唇 金气秋分 / 李朴 中秋（维基文库 API 检索，无页；中文网页搜索被内容过滤拦截）',
      '日本国立天文台 二十四節気 秋分 八月中 180°（NAOJ 页 Shift-JIS 解码提取秋表与雑节表）',
      '香港天文台 24 solar terms 机制页重读（HKO）',
    ],
    'discovered_source_ids':
      [
        'source-ihchina-qiufen-feature',
        'source-xinhua-qiufen-2024',
        'source-xinhua-qiufen-2022',
        'source-weather-com-cn-qiufen',
        'source-xinhuanet-fengshoujie-2018',
        'source-people-fengshoujie-2025',
        'source-wikisource-chunqiufanlu-yinyang',
        'source-wikisource-liji-jiyi',
        'source-wikisource-wxtk-jiriyue',
        'source-wikisource-qinghuidian-xiyue',
        'source-wikisource-jingkang-xiyue',
        'source-wikisource-liuyuxi-xiyuetan',
        'source-wikisource-yuanzhen-jibaishen',
        'source-naoj-24sekki-qiufen',
      ],
    'conflicts':
      [
        '日期范围口径：任务LEAD称"公历9月22-24日"，本轮直读机构口径为"每年9月23日前后"（中国天气网）+具体实例（2017年9月23日非遗网、2022年9月23日新华/中国天文年历、2024年9月22日新华电头）——按直读口径写"9月23日前后"，"22-24日"区间未获机构直读、记入 exceptions',
        '《春秋繁露》引文异文：非遗网作"阴阳相半也"（与维基文库直读一致），中国天气网作"阴阳相伴也"（转写异文）——以古籍直读为准',
        '非遗网引《月令》"八月中……分者平也，此当九十日之半"：维基文库秋分条仅"秋分，八月中。解見春分"，"分者，半也……秋同義"在春分条且作"半"不作"平"——非遗网系拼合转写',
        '非遗网"《礼记》载：天子春朝日，秋夕月……"：直读《礼记·祭义》无此句（只有祭日於東祭月於西）；该句早期可查形态为应劭注《汉书》（《靖康缃素杂记》转引）；"天子常春分朝日，秋分夕月"出自《周礼》注疏（《文献通考》辑）——机构汇编出处标注不精确',
        '"秋分无生田"农谚（任务线索）未在任何直读来源出现，未录入',
      ],
    'conclusions':
      [
        '第一轮建立知识卡12张（sci×2 / hist×2 / interp×1 / fact×1 / trad×2 / lit×1 / glob×1 / idea×1 / explanation×1）、新来源14条（全部 direct-read），全部为 draft/in-review，等待人工审核',
        '高可信锚点：黄经180°（非遗网+新华2022紫台口径+新华2024+天气网四源）、月令秋分三候逐字直读（含"解見春分"回指与"雷始收声/雷乃发声"对偶）、秋分祭月礼制谱系（礼记祭义+文献通考+清会典+靖康+元稹五段古籍直读）、丰收节2018（新华2018+人民日报2025+新华2024）',
        '四张 high 卡达成基线：sci-qiufen-longitude-180 / hist-yueling-qiufen-pentads / hist-qiufen-xiyue-sacrifice / sci-qiufen-day-night-equal（fact-qiufen-harvest-festival-2018 亦为 high）',
        '本轮最大收获是"秋分祭月"命题的古籍直读链完整落地（含清会典"歲以秋分迎月出祀夜明"明文与刘禹锡、元稹两个唐代文本）；最大坑是"中秋源于秋分祭月"流行叙事——已按 interpretation 层建卡（contested=true），两个日期锚（秋分漂移 vs 八月十五固定）的证据齐而"演变"中间环节无文献',
        '主要证据缺口：明代夕月坛建制典籍、谢逸《点绛唇·金气秋分》可靠文本、折射/equilux秋分侧机构稿、民间习俗古籍源头、秋分专属国家级非遗锚点（本轮未发现）',
      ],
    'human_questions':
      [
        '"9月22日至24日"日期区间是否以《中国天文年历》逐年核算后统一全库口径（与春分"20日或21日"同一待决问题）？',
        'sci-qiufen-day-night-equal 引擎提示 assertion-above-evidence（exceptions 留待核验而 confidence=high）——命题主体四源直读，是否维持 high？',
        '"中秋源于秋分祭月"interp 卡是否需要请民俗学审阅人专项裁决（contested-open）？',
        '《大明会典》/《明史·礼志》夕月坛条是否安排下一轮直读（补齐"明清"合称的明半边）？',
        '元稹《秋分日祭百神文》与刘禹锡《监祠夕月坛书事》是否引入《全唐文》/《全唐诗》印本核对（同托管方规则已按 medium 处理文学卡）？',
      ],
  }
---

# 秋分第一轮批研究 · 执行日志

## 执行摘要

2026-09-16 由 AI 研究代理执行。研究问题（顶层）：**秋分是什么？由哪些可靠来源支撑？证据边界在哪里？** 本轮完成 17 个页面的直接读取（非遗网专题页、维基文库×9、新华网×3、中国天气网、人民日报、日本国立天文台、香港天文台），建卡 12 张、来源 14 条（全部 direct-read）。

## 流程记录

1. **非遗网专题页定位**：依前波次情报在 6968+ 编号段试探，确认**秋分=6976**（标题《桂子飘香远——二十四节气之秋分》）；curl 不走代理但本机直连返回空，改用 `curl -sL` 跟随 302 至 `Article/Index/detail?id=9827` 成功读取全文（页载创建时间2017-09-22，故"今年"=2017年）。
2. **礼制文献链（本轮重点）**：从非遗网"秋分祭月/《礼记》引文/北京月坛"叙事出发回溯古籍——维基文库 API 检索"夕月壇"命中《文献通考·卷79》《钦定大清会典·卷44》等；逐一直读《礼记·祭义》（无"春朝日秋夕月"句，发现出处标注问题）、《文献通考》（"天子常春分朝日，秋分夕月"+"夜明，祭月也"）、《钦定大清会典》（"凡夕月之禮……歲以秋分……祀夜明"明文）、《靖康缃素杂记》（应劭注原句）、《燕京岁时记》（清末民间供月锚定八月十五）。注意：欽定大清會典 URL 必须用繁体编码，简体落到"标题无效"页。
3. **唐代双文本（意外收获）**：维基文库 intitle 检索"秋分"命中元稹《秋分日祭百神文》（821年祭文）与刘禹锡《监祠夕月坛书事》（夕月坛诗）两个公有领域作品页，逐字直读——文学卡与礼制卡各得一个唐代直读文本。
4. **天文交叉源**：WebSearch 定位新华社2024诗意节令稿/2022《秋分说"分"》（引紫金山天文台张旸：秋分=黄道180度时刻）、中国天气网由来稿（"9月23日前后"）；与非遗网互证黄经180°/直射赤道/昼夜均分。
5. **丰收节**：新华社2018-06-21设立通稿（韩长赋国新办发布会，含官方选期理由）+人民日报2025-09-06专文（异发布方，表述逐字一致）+新华社2024稿三重直读；严格按"2018年设立的现代国家节日"分层建卡。
6. **文学备选落选**：谢逸《点绛唇·金气秋分》维基文库无页；中文检索被内容过滤拦截，返回文本为 AI 转述不能作直读；李朴《中秋》未再尝试（中秋题材与秋分字面更远）。以刘禹锡诗+元稹文建卡，谢逸记 Needs Research。
7. **全球表达**：NAOJ 二十四節気页 Shift-JIS 解码——秋分（しゅうぶん）八月中180°、"秋の彼岸の中日、昼がほぼ等しくなる"、雑節彼岸以秋分前后各3日定义；建 same-time 传播关系 Candidate。因该 URL 已有雨水侧卡，新建秋分侧源卡并在两卡互注（内容不重叠）。
8. **成卡与自检**：所有新卡 id 含 qiufen、文件名==id、日期2026-09-16、risk/impact 必填、human_review=null；YAML 三轮修复（4个文件：1个杂散 `']`、3个串内 ASCII 单引号改『』）后 27 个文件全部通过解析。

## 12项审计（§7）

1. **Unsupported Distribution**：通过。解释卡三层逐句自查无"大部/普遍/各地/全国"断言（习俗只写具名地点：北京/岭南/南京/华北/江南）；非遗网"各地都会有人做竖蛋游戏"在 trad-qiufen-customs 中以"页方断言"归因且未采入解释卡。
2. **Regional Generalization**：通过。礼制卡明确区分"国家祀典"与"民间形态"；interp 卡 exceptions 声明清末北京记载不得外推全国。
3. **Modern-as-Ancient**：通过且为本轮核心防线。丰收节卡整卡即分层样本（2018现代设立 vs 古代礼制红线写入 claim）；竖蛋沿用春分卡"现代流行"结论不复制起源叙事。
4. **Historical Leakage**：通过。hist-yueling / hist-xiyue / lit 卡无"黄经/气象学/天文学"现代概念；清会典引文保持原文语汇（"歲以秋分迎月出祀夜明"）。
5. **Scientific Leakage**：通过。古籍卡无科学倒灌；《春秋繁露》"阴阳相半"在 sci 卡中标为古典解释层，与几何解释分层。
6. **Legend-as-Fact**：通过。无传说入 fact 卡；丰收节"秋社创造性转化"表述归因为人民日报2025稿阐释。
7. **Weak Source Inflation**：通过。本轮 0 张 search-excerpt Source 卡（14条全部 direct-read）；谢逸诗文本因只有 AI 转述级线索，未建源未入卡（记 Needs Research）。
8. **Search Excerpt Misuse**：通过。同上，无 search-excerpt 源；检索摘要级信息（百度百科日期区间、2025/2026丰收节主场活动地点）一律未入卡。
9. **Cross-source False Validation**：通过。cross-checked 均基于异发布方直读互证（非遗网×维基文库×新华×天气网×人民日报）；新华社两稿同社只作旁证（另有非遗网/天气网第三方）；NAOJ 页为同 URL 双卡但卡内互注且引用内容各侧独立（雨水侧内容未用于秋分卡交叉）。
10. **Creative-as-Fact**：通过。idea 卡开头性质声明+每条依据卡与红线（双层时间轴明确禁止"演变"叙事连接）。
11. **Global Forced Correspondence**：通过。glob 卡三要素齐全，relationship=same-time 且 reason 明写"传播关系……不得表述为日本'自己的秋分节'"；引擎仅 info 级 candidate-hold。
12. **Shared Knowledge Duplication**：通过。黄道24等分/节中气/UNESCO/七十二候均以 02_shared 链接引用（sci-solarterms-jieqi-zhongqi / sci-solarterms-calendar-role / fact-solarterms-unesco-2016 / hist-solarterms-pentad-system），未复述命题；引擎无 shared-duplicate finding。

## 19维覆盖矩阵

| 维度 | 状态 | 说明 |
|---|---|---|
| astronomy | complete | sci-qiufen-longitude-180（high，黄经180°+四源直读） |
| calendar | complete | "秋分，八月中"中气位引 sci-solarterms-jieqi-zhongqi + 月令卡；农历漂移双实例（821/2017）入 interp 卡 |
| climate | complete | 昼夜均分+极昼极夜范围变化（sci-day-night-equal）+长江中下游入秋/一场秋雨一场寒（nongshi 卡证据3） |
| phenology | complete | hist-yueling-qiufen-pentads（high，逐字直读+注文+春分对偶） |
| agriculture | complete | trad-qiufen-nongshi（三秋大忙+农谚群+秋分寒，四源） |
| ecology | weak | 三候现代物候验证未建卡（Needs Research） |
| chinese-life | complete | 丰收节卡+习俗卡+解释卡 |
| customs | complete | hist-xiyue（祭月礼制）+trad-customs（六项汇编层）+interp（中秋关系） |
| food | partial | 秋菜/秋汤/桂花鸭/汤圆条目在 trad-customs 内（机构汇编层，无独立饮食卡） |
| history | complete | 礼制谱系卡（礼记→注疏→清会典）+月令卡+丰收节卡（现代层） |
| literature-art | complete | lit-liuyuxi（刘禹锡诗+元稹文双直读）；谢逸词缺直读已记 D |
| regional-differences | partial | 习俗卡内具名地点（岭南/南京/华北/江南）；未发现秋分专属国家级非遗锚点，无 region 卡 |
| scientific-interpretation | complete | sci-day-night-equal（第二次均分+古典对照）；折射/equilux 记 D |
| global-expressions | complete | glob-qiufen-shuubun-east-asia（Candidate，NAOJ 直读+彼岸要素） |
| visual-assets | missing | 无已授权素材（月坛/夕月坛图/秋牛图待版权研究） |
| audio-assets | missing | 远雷/虫鸣素材待授权（idea 卡已提示） |
| interaction-ideas | complete | idea-qiufen-interaction-sketches（3条创意含红线） |
| references | complete | 新增 14 条 Source（全 direct-read），复用 4 条既有直读源（月令/HKO/燕京/NAOJ雨水侧不重复计入） |
| ai-research-log | complete | 本日志+审核分节 |

统计：complete 14 / partial 2 / weak 1 / missing 2。

## 素材边界审计

- 视觉：非遗网页面配图一律不用（页面声明整理自网络）；月坛/夕月坛影像、秋牛图、竖蛋照片均未授权，未建 VisualAsset。
- 声音：远雷收声/虫鸣无授权素材，idea 卡列为待办。
- 文本引用：古籍引文逐字带定位（含音注〈【音培】〉与异文注）；新华社/人民日报/中国天气网为版权稿件，仅短摘录。

## 路由引擎输出（2026-09-16，`npx tsx .batch-tmp/batch-route.mts qiufen`，tolerant 版）

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| fact-qiufen-harvest-festival-2018 | CulturalFact | term | medium | A(独立直读×2) | **human-review-required** | pending-primary-source |
| glob-qiufen-shuubun-east-asia | GlobalExpression | global | high | A(独立直读×1) | **human-review-required** | global-candidate-hold |
| hist-qiufen-xiyue-sacrifice | HistoricalRecord | term | high | A(独立直读×3) | **human-review-required** | pending-primary-source |
| hist-yueling-qiufen-pentads | HistoricalRecord | term | medium | A(独立直读×2) | **auto-candidate** | — |
| interp-qiufen-zhongqiu-origin-narrative | CulturalFact | term | high | A(独立直读×3) | **human-review-required** | pending-primary-source, contested-open |
| lit-liuyuxi-qiufen-xiyuetan | CulturalFact | term | low | A(独立直读×2) | **auto-candidate** | — |
| qiufen-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |
| sci-qiufen-day-night-equal | ScientificFact | term | medium | A(独立直读×4) | **human-review-required** | pending-primary-source, assertion-above-evidence |
| sci-qiufen-longitude-180 | ScientificFact | term | medium | A(独立直读×3) | **auto-candidate** | — |
| trad-qiufen-customs | Tradition | term | medium | A(独立直读×2) | **auto-candidate** | — |
| trad-qiufen-nongshi | Tradition | term | medium | A(独立直读×3) | **auto-candidate** | — |

（引擎表中另有 6 张 02_shared 共享卡路由 human-review-required，属既有状态，不入本节气包。）

Findings 明细：

- `fact-qiufen-harvest-festival-2018` **pending-primary-source**（major）：设立文件原件未直读（所据为权威通稿层）。
- `glob-qiufen-shuubun-east-asia` **global-candidate-hold**（info）：Candidate 不构成已核实文化对应。
- `hist-qiufen-xiyue-sacrifice` **pending-primary-source**（major）：明代会典、应劭注原书等一手文献未直读。
- `interp-qiufen-zhongqiu-origin-narrative` **pending-primary-source** + **contested-open**（major）：contested=true 须人工裁决。
- `qiufen-human-explanation` **explanation-gated**（major）：支撑卡未 approved，禁止发布。
- `sci-qiufen-day-night-equal` **pending-primary-source** + **assertion-above-evidence**（major）：exceptions 留待核验而 confidence=high（命题主体四源直读，请裁决）。

入包处置：hist-qiufen-xiyue-sacrifice / interp-qiufen-zhongqiu-origin-narrative / fact-qiufen-harvest-festival-2018 / sci-qiufen-day-night-equal → status 改 in-review；qiufen-human-explanation / glob-qiufen-shuubun-east-asia → 保持 draft；5 张 auto-candidate 保持 draft。

## Needs Research（汇总）

1. 明代夕月坛建制（《大明会典》/《明史·礼志》直读）与月坛（夕月坛）明代沿革。
2. 谢逸《点绛唇·金气秋分》可靠文本直读（全宋词点校本/图书馆途径）；李朴《中秋》同类。
3. 昼夜"近乎均分"的折射修正与 equilux 秋分侧机构科普稿。
4. 秋分逐年时刻权威数据源（《中国天文年历》）入库；"9月22日至24日"区间逐年核算。
5. 民间习俗古籍源头：秋社/走社、送秋牛、吃秋菜、粘雀子嘴（《帝京岁时纪胜》《清嘉录》检索直读）。
6. 三候现代物候观测（终雷日期、虫类封穴、沼泽干涸；中国物候观测网）。
7. 秋分专属国家级非遗锚点排查（本轮 ihchina 专题页无项目链接，未发现）。
8. 日本"秋分の日"法定节假日与彼岸参拜实践（权威来源直读后扩展 glob 卡）；朝鲜半岛추분条目。
9. 刘禹锡诗系年与唐代夕月坛建置（《大唐开元礼》）；元稹祭文与《全唐文》印本核对。
10. 视觉/声音素材授权研究（月坛、夕月坛图、秋牛图、远雷、虫鸣）。

## 规范自检

- 未编造来源、引文或检索记录；未读原文一律标注；全部 human_review=null；无 approved 状态；无自动发布。
- 只新建/编辑本节气文件（03_notes×12、04_sources×14、07_research×2）与 01_terms/16_秋分.md 索引；未触碰 02_topics/02_shared/其他节气/scripts/packages/docs。
- .batch-tmp 临时文件均以 qiufen- 前缀命名；本日志本身也待人工复核。

[[01_terms/16_秋分|秋分索引]] · [[07_research/sections/review-qiufen|秋分审核分节]] · [[04_sources/README|来源库]]
