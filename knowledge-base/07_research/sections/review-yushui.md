# 02 雨水（yushui）· 审核分节

研究摘要：本轮查清了雨水的天文定义（黄经330°、公历2月18-20日前后，新华网+非遗网+日本国立天文台三源直读）、三候古籍原文（维基文库直读，发现媒体层"鸿雁来"与正文"候雁北"的异文）与"由雪转雨、气温回升"的气象机制。最大的坑是"雨水拉保保"：广汉保保节实证锚定农历正月十六而非节气日、非遗身份为省级——流行节气叙事已按证据降权，需人工裁决表述口径。

路由统计：A 5 · B 1 · C 3 · D 0；日志：[[07_research/research-yushui-batch-log|研究日志]]

## C · 必须人工审核

### region-guanghan-yushui-baobaojie（RegionalExpression · risk=high · impact=regional）
- Claim：广汉"保保节"（核心"拉保保"为孩子认干爹）固定于农历正月十六举行（2025年2月13日房湖公园/金雁公园实证），2007年入选首批四川省非遗名录（省级）；非遗网雨水专题虽将拉保保列入雨水民俗，但活动日期锚定农历日而非雨水节气日。
- Exact Evidence（逐字）："农历正月十六，四川广汉市房湖公园和金雁公园迎来一年一度的保保节暨非遗文化周系列活动""'拉保保'，也就是'拜干爹''认干爹'，是保保节的核心环节""2003年被广汉市政府正式命名为'保保文化节'，2007年入选首批四川省非物质文化遗产名录。"（央广网）"2月13日，四川省德阳广汉市房湖公园举行'拉保保'民俗活动。"（新华网四川频道）
- Source / Type / Access：source-cnr-guanghan-baobao / institutional / direct-read（cross-checked）；source-xinhua-guanghan-baobao / institutional / direct-read（cross-checked）；source-ihchina-yushui-feature / institutional / direct-read（cross-checked）
- Scope / Period：四川德阳广汉市；当代活态实践，2003命名/2007入省级名录
- Why Review：高风险地域卡——"雨水日拉保保"流行叙事与日期实证存在系统性偏差，对外表述口径（"与雨水同期"vs"雨水习俗"）需人工裁决；非遗网"拉保保"段本轮读取不完整。
- What We Know / What We Don't Know：知——活动日期锚、地点、流程、省级非遗身份（两机构直读互证）。不知——清乾隆起源的方志依据、"四川一些地区"表述的确切范围、非遗网该段完整原文。
- Recommended Decision（建议，不代决）：按"农历正月十六、与雨水节气同期"的口径对外；"雨水日习俗"表述缓用。
- 链接：[[03_notes/region-guanghan-yushui-baobaojie|广汉保保节]]
- 审核问题：1) "与雨水节气同期、但按农历日定期"的表述是否准确传达了两套时间系统的关系？2) "清乾隆起源"媒体转述是否可入对外文案？3) 非遗身份是否必须在首次提及时区分省级/国家级？4) 该卡与雨水节气的主题关联（正月十六常落在雨水时节）是否需要更明确的统计说明？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### glob-yushui-usui-east-asia（GlobalExpression · risk=high · impact=global）
- Claim：待核验（Candidate）——"雨水"随汉字历法体系传播至日本（うすい，正月中・黄経330°，国立天文台现行解说）与朝鲜半岛（우수，正月中气・黄经330°・2月19/20日，韩国学中央研究院百科），韩国条目并收录本地化民谚"雨水惊蛰时分大同江解冻"。
- Exact Evidence（逐字）："二十四節気は日本や中国で伝統的に用いられる季節の目印で……雨水（うすい）正月中 330° 陽気がよくなり、雪や氷が溶けて水になり、雪が雨に変わる"（NAOJ）；"입춘과 경칩 사이에 들며……양력 2월 19일 또는 20일, 음력으로는 정월 중기이다. 태양의 황경이 330°의 위치에 올 때이다"（EncyKorea）
- Source / Type / Access：source-naoj-24sekki-yushui / institutional / direct-read（cross-checked）；source-encykorea-usui / institutional / direct-read（cross-checked）
- Scope / Period：日本、韩国的历法文化层；当代仍在机构发布中保留
- Why Review：GlobalExpression 类型+candidate 状态；引擎提示 global-candidate-hold（不构成已核实的文化对应）；民俗实践层零来源。
- What We Know / What We Don't Know：知——两地历法层定义与释名（机构直读）。不知——两地普通民众是否/如何"过"雨水、传入年代与途径。
- Recommended Decision（建议，不代决）：保持 Candidate，仅限"历法传播"框架内部使用；民俗层研究完成并经跨文化顾问审核前不进入对外内容。
- 链接：[[03_notes/glob-yushui-usui-east-asia|うすい/우수 Candidate]]
- 审核问题：1) "历法刻度的传播共享"框架是否足以避免"外国版节气"误读？2) 大同江民谚作为本地化证据使用是否恰当？3) 是否应补充传入年代后才可升级？4) 英文标题译名是否需本地化审校？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### yushui-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：面向普通读者的三层解释（一句话/约100字/展开版），每句回溯 supporting_knowledge_ids（本节气 7 卡+共享 3 卡）。
- Exact Evidence（逐字）：见卡内三层文本；关键句如"雨水是农历正月的'中气'"（[[02_shared/sci-solarterms-jieqi-zhongqi|共享卡]]置闰规则以雨水为例）、"四川广汉正月十六'拉保保'仍在举行"（region 卡直读证据）。
- Source / Type / Access：无独立来源（解释层），支撑卡证据见各 C/B/A 条目
- Scope / Period：解释层；zh-CN 完整、en 为机器草稿
- Why Review：HumanExplanation 类型；引擎 explanation-gated（支撑卡未 approved，Content Gate 正常门禁）；三层文本需人工逐句审。
- What We Know / What We Don't Know：知——三层文本已逐句对照支撑卡、零分布短语。不知——英文译文质量（机器草稿）、展开版四段叙事是否引入读者误解。
- Recommended Decision（建议，不代决）：Stage 1 知识卡 Decision 后再进入 Stage 2 Explanation Review；审核前不得对外引用。
- 链接：[[03_notes/yushui-human-explanation|雨水解释卡]]
- 审核问题：1) "正月的中气"对零基础读者的可懂度是否足够（是否需在展开版加图示）？2) "雪渐化雨"的黄河流域经验边界表述是否清楚？3) 拉保保句子是否会被误读为"雨水日习俗"？4) 英文机器草稿润色优先级？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核
### sci-yushui-longitude-330 — 雨水=黄经330°、公历2月18-20日前后（"第二个节气"），三源直读互证 — Why：pending-primary-source（GB/T 33661-2017 正文未直读）；日期存在"交节日"与"节气时段"两种口径需统一引用规范 — 链接：[[03_notes/sci-yushui-longitude-330|黄经330°定义]] · Decision：（留空）

## D · Needs Research
- "鸿雁来"表述的古籍直接出处：需直读《礼记·月令》孟春段并比对集解夹注（建议维基文库/中华书局本）。
- 雨水三候的现代物候验证：需中国物候观测网或竺可桢《物候学》类来源。
- 回娘家/接寿/罐罐肉的地域与断代：需川西或全国方志、民俗学文献；现状仅单源低置信。
- 雨水时节气候分布逐区核验：需中国天气网节气页或气候公报直读（"气温回升至0℃以上"类断言）。
- 《春夜喜雨》系年与作地：需《杜诗详注》/《全唐诗》注本核实（页面无系年，卡内如实留空）。
- 广汉保保节历史与名录文件：地方志（清乾隆起源说）+四川省政府2007年首批省级名录原文直读。
- 日本/朝鲜半岛雨水民俗实践层：岁时记、农谚、杂节文献；跨文化顾问审核。
- 元稹《咏廿四气诗》雨水篇：维基文库检索并直读后可作节气诗直咏体补充样本。
- 视觉/声音素材授权研究（春雨/雁阵/古柏场景；保保节在世人物肖像 consent）。

## A · Auto Candidate（仅链接）
- [[03_notes/hist-yueling-yushui-pentads|《月令》雨水三候原文]]（high）
- [[03_notes/sci-yushui-rain-transition|由雪转雨·气温回升]]（high）
- [[03_notes/lit-dufu-yushui-xiyu|杜甫《春夜喜雨》]]（medium）
- [[03_notes/trad-yushui-nongshi|雨水农事与农谚]]（medium）
- [[03_notes/trad-yushui-huijiajia|回娘家/接寿/罐罐肉]]（low）
