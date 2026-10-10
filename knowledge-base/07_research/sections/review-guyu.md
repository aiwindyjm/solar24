# 06 谷雨（guyu）· 审核分节

研究摘要：本轮查清谷雨的天文定义（黄经30°、4月19-21日，双机构直读）、三候原文（《月令七十二候集解》逐字）、命名谱系（"雨生百谷"经全书检索确认**非**古籍原文，系现代概括）与洛阳牡丹花会（国家级非遗双源）。最大的坑是仓颉传说：非遗网页面与联合国中文日页都复述"仓颉造字—天降谷雨—得名谷雨"叙事，本轮以《淮南子·本经训》原文语境（不论谷雨）+月令命名定义句建立反锚点，传说/古籍/地方实践/现代制度四层分卡，杜绝"谷雨因仓颉得名"式因果。
路由统计：A 7 · B 1 · C 3 · D 1（本节气卡；另有6张共享卡 human-review-required 属系统级既有卡，不在本包）；日志：[[07_research/research-guyu-batch-log|研究日志]]

## C · 必须人工审核

### legend-guyu-cangjie（CulturalFact · risk=high · impact=term）
- Claim："谷雨祭仓颉"为传说叙事（仓颉造字、天雨粟、天帝降谷子雨→"把仓颉造字这天叫做谷雨"的说法）；非遗网以"传说……有种说法"措辞转述并称白水县至今有祭祀；被援引的《淮南子·本经训》原文语境论"能愈多而德愈薄"、未提谷雨，不构成得名依据；联合国中文日（4月20日）为该传说的当代制度性引用。
- Exact Evidence（逐字）："昔者蒼頡作書，而天雨粟，鬼夜哭；伯益作井，而龍登玄雲，神棲昆侖；能愈多而德愈薄矣。"（《淮南子·本經訓》维基文库直读）；""谷雨祭仓颉"，是自汉代以来流传千年的民间传统。传说仓颉造字后'天雨谷，鬼夜哭'，于是有种说法，把仓颉造字这天叫做谷雨，陕西渭南白水县至今流传着谷雨祭祀文祖仓颉的习俗。"（非遗网专题页）
- Source / Type / Access：source-wikisource-huainanzi-benjingxun-guyu（historical/direct-read）；source-ihchina-guyu-feature（institutional/direct-read）；source-un-zhongwenri-guyu（institutional/direct-read）
- Scope / Period：传说层无信史断代；"自汉代以来"为机构断言（未给出处）；白水祭祀为当代地方实践（机构转述）
- Why Review：本节气 Legend-as-Fact 审计重点样本；risk=high（传说是最易被 downstream 当史实误用的内容）；异文（天雨粟/天雨谷）待校勘
- What We Know / What We Don't Know：知：传说内容与流传载体、古籍原文语境、当代引用链。不知：断代（汉代说起无文献支撑）、白水仪式细节与非遗身份、异文定谳
- Recommended Decision（建议，不代决）：维持 legend 分层与四层互链结构；文案使用必须带"传说"标识并链接命名卡
- 链接：[[03_notes/legend-guyu-cangjie|谷雨祭仓颉传说（legend）]]
- 审核问题：1) "自汉代以来流传千年"是否保留为"机构说法"引用（现处理）还是删除？2) 传说卡是否需要进一步压缩叙事细节以防被整段摘用？3) 《淮南子》异文（谷/粟）校勘策略？4) 白水祭祀"至今流传"的独立来源是否列为发布前置条件？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### fact-guyu-un-chinese-language-day（CulturalFact · risk=high · impact=global）
- Claim：联合国中文日定于每年4月20日（与谷雨同日）；2010年联合国新闻部启动语言日；日期由中国常驻联合国代表团建议、纪念理由援引仓颉造字贡献；首届活动2010-11-12纽约总部。
- Exact Evidence（逐字）："联合国中文日　4月20日"（页面标题）；"2010年，联合国新闻部（现全球传播部）宣布启动联合国语言日。"；"将中文日定为每年4月20日中国传统节气'谷雨'这一天，以纪念'中华文字始祖'仓颉造字的贡献。"（un.org 中文页，两次抓取引文一致）
- Source / Type / Access：source-un-zhongwenri-guyu（institutional/direct-read，单源；curl 被 CloudFront 403，未获原始 HTML）
- Scope / Period：联合国 observance，2010年起，现行有效
- Why Review：单源机构直读；且是"UN中文日 vs UNESCO非遗"两体系高混淆点；日期缘由句与传说叙事同页并存，易被误写成得名依据
- What We Know / What We Don't Know：知：日期、启动年份、建议方、纪念理由（机构自述）。不知：逐字标点级原文（未获原始HTML）、2010年建议过程档案
- Recommended Decision（建议，不代决）：人工浏览器复核原文后可作 auto-candidate；对外表述锁定"纪念性选择，非得名依据"
- 链接：[[03_notes/fact-guyu-un-chinese-language-day|联合国中文日]]
- 审核问题：1) 单源+引文经两次独立抓取一致，是否足以支撑 medium？2) "与UNESCO非遗两体系"的防混淆提示是否随卡发布？3) 首届活动日期（2010-11-12）是否保留在命题内？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### guyu-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释+why_it_matters，全部回溯 supporting_knowledge_ids（12张：本节气11张+UNESCO共享卡）
- Exact Evidence（逐字）：见卡内三层文本（引擎 explanation-gated：Content Gate，支撑卡未 approved 禁止发布）
- Source / Type / Access：解释层（无独立来源，逐句依赖支撑卡）
- Scope / Period：面向零前提全球读者
- Why Review：HumanExplanation 类型按规则必入 C；解释层含仓颉叙事句（已明示传说层）与日期范围句（单源）
- What We Know / What We Don't Know：知：三层文本逐句可回溯。不知：英文译文质量（机器草稿）、支撑卡全部未经人工审核
- Recommended Decision（建议，不代决）：Stage 1 知识卡 Decision 后再进入 Stage 2 解释层审核（沿立春流程）
- 链接：[[03_notes/guyu-human-explanation|谷雨解释卡]]
- 审核问题：1) 一句话版"联合国也把中文日定在同一天，纪念传说中造字的仓颉"是否足够防误读？2) summary 中"此四字并非古籍原文"的括注去留？3) 日期范围（4月19-21日）单源是否需要在解释层降为"4月20日前后"？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核
### trad-guyu-tea-toon — "南方摘茶/北方食香椿"习俗存在性双源、内部细节单源；引擎 finding：pending-primary-source（"雨前茶"明清茶书文献链未直读，exceptions 已注明）· Why：历史谱系断链+地域粒度粗 · 链接：[[03_notes/trad-guyu-tea-toon|谷雨茶与食香椿]] · Decision：（留空）

## D · Needs Research
- 元稹《咏廿四气诗》底本校勘：敦煌写本/《全唐诗》图像人工核验（lit-guyu-yuanzhen 现仅古诗文网单页直读）
- "雨生百谷"文献溯源：四库/农书数据库人工检索（命名卡核心边界）
- 禁蝎（谷雨帖/夏津县志）、荣成渔民节、侗寨谷雨节：素材已直读存于 source-ihchina-guyu-feature，需方志/项目页直读后分层建卡
- 三候现代物候观测：中国物候观测网/竺可桢《物候学》数据源
- 气候统计：终霜期、4月下旬降水的分区量化（气象局/国家气候中心直读）
- 菏泽牡丹"谷雨花"、白水仓颉祭祀非遗身份：地域扩展直读源
- 南亚春播窗口比较项（rabi/zaid 换茬）：glob 卡南亚方向未成条
- 联合国六语言日框架与中文日确定过程第二源（新闻稿/档案）
- 视觉/声音素材授权（布谷鸟鸣、雨声、牡丹、仓颉字）
- GB/T 33661-2017 正文直读（继承立春待办）

## A · Auto Candidate（仅链接）
- [[03_notes/sci-guyu-longitude-30|谷雨天文定义：黄经30°]]（high）
- [[03_notes/hist-yueling-guyu-pentads|谷雨三候原文]]（high）
- [[03_notes/hist-guyu-naming-yushengbaigu|谷雨命名：古籍定义vs现代概括]]（high）
- [[03_notes/region-guyu-luoyang-mudan|洛阳牡丹花会]]（high）
- [[03_notes/sci-guyu-rain-sowing-window|降雨与春播窗口]]（medium）
- [[03_notes/trad-guyu-nongshi|谷雨农事与农谚]]（medium）
- [[03_notes/lit-guyu-yuanzhen|元稹谷雨诗]]（medium）
