# 22 冬至（dongzhi）· 审核分节

研究摘要：本轮查清冬至的天文定义（黄经270°、第22个、直射南回归线、北半球白昼最短，非遗网6982×新华社2021×人民日报海外版2015三独立直读）、它作为历法锚的独特地位（两冬至间隔=岁实/回归年约365.2422天；含冬至之月=农历十一月，PMO 逐字；周正以此为岁首，史记历书直读）、月令三候及"麋角解"互见注文、贺冬与郊天的汉-宋-明三段全直读链（后汉书礼仪志"百官絕事不聽政"+蔡邕"冬至陽氣起君道長故賀"、东京梦华录"京師最重此節……一如年节"并南郊祭昊天上帝、帝京景物略"红笺互拜一如元旦"）、数九与消寒图（帝京景物略直读含明版数九歌全首+新华社机构规则句）、食俗五项分层（赤豆粥六世纪荆楚直读为最早层）、三门祭冬非遗地域卡（名录+人民日报海外版双直读）、白居易《邯郸冬至夜思家》直读与 Yalda 夜 Candidate。最大的坑有四个：一是两处流行说法被直读否证——"数九出自荆楚岁时记"（直读全文零命中）与"史记：以冬至日，产气始萌"（检索无命中）；二是"汉代放假七天"不在后汉书原文（蔡邕注作"迎送五日"）、"冬至大如年"无文献首出可直读（维基文库无清嘉录）；三是日期区间"12月21日至23日"为三源合成口径（无单一来源逐字给出全区间）；四是两处 YAML 串内 ASCII 单引号翻车（已修，复验通过）。

路由统计：A 5 · B 3 · C 4 · D 1（本节气 13 张 claim 卡；另有6张共享卡 human-review-required 属系统级既有卡，不在本包）；日志：[[07_research/research-dongzhi-batch-log|研究日志]]

## C · 必须人工审核

### hist-dongzhi-hedong-jiaotian（HistoricalRecord · risk=high · impact=term）
- Claim：冬至官方礼制链三段直读——(1) 东汉《后汉书·礼仪志》"冬至前後，君子安身靜體，百官絕事，不聽政，擇吉辰而後省事"，蔡邕《独断》注"冬至陽氣起，君道長，故賀"；(2) 北宋《东京梦华录》"京師最重此節……享祀先祖……慶賀往來，一如年節"+冬至前三日驾宿大庆殿、三更驾诣郊坛祭昊天上帝；(3) 明末《帝京景物略》"百官賀冬畢，吉服三日，具紅箋互拜……一如元旦"。
- Exact Evidence（逐字）："冬至前後，君子安身靜體，百官絕事，不聽政，擇吉辰而後省事。絕事之日，夜漏未盡五刻，京都百官皆衣絳，至立春。"（《后汉书·礼仪中》）／"冬至陽氣起，君道長，故賀。夏至陰氣起，君道衰，故不賀。"（蔡邕《独断》注引）／"十一月冬至。京師最重此節，雖至貧者，一年之間，積累假借，至此日更易產衣……慶賀往來，一如年節。"（《东京梦华录》卷十）／"十一月冬至日，百官賀冬畢，吉服三日，具紅箋互拜，朱衣交于衢，一如元旦。"（《帝京景物略》卷二）。
- Source / Type / Access：source-wikisource-houhanshu-liyizhong（historical·direct-read·cross-checked）、source-wikisource-djmhl-juan10（historical·direct-read·cross-checked）、source-wikisource-dijing-jingwulue（historical·direct-read·cross-checked）、source-ihchina-dongzhi-feature（institutional·direct-read）。
- Scope / Period：东汉京都官制→北宋东京（南宋追记）→明末北京；官方与城市精英视角，乡村实践不在证据内。
- Why Review：引擎 finding=pending-primary-source（卡内显式登记《周礼》圜丘条未直读、《清嘉录》"冬至大如年"无直读）；risk=high（"汉代放假七天""冬至大如年出自清嘉录"两处流行转述的直读缺口是本节气最高危的断代雷区）；"產衣/新衣"异文待校。
- What We Know / What We Don't Know：知：三段原文直读、蔡邕贺冬逻辑、"一如年节"三连证、明末民间履长之俗。不知：汉代绝事的具体天数制度（七天为现代转述、五日为蔡邕注）、"冬至大如年"四字文献首出、《周礼》圜丘原文、天坛祭天的历代沿革文献。
- Recommended Decision（建议，不代决）：按三段直读链采纳；对外表述用"绝事/贺冬"不写具体假期天数；"冬至大如年"只作"民间流传说法"引用（非遗网/三门名录/人民日报三处均为'民间素有/流传'措辞）。
- 链接：[[03_notes/hist-dongzhi-hedong-jiaotian|贺冬与郊天链卡]]
- 审核问题：1) "放假七天"是否需要在对外 FAQ 中显式纠偏（vs 仅内部不写）？2) "產衣/新衣"异文按哪个字面呈现？3) 蔡邕《独断》为注引转引，是否需《独断》原书直读升格？4) "冬至大如年"保持"民间说法无首出"表述是否可接受？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### trad-dongzhi-shisu-fenceng（Tradition · risk=high · impact=term）
- Claim：冬至食俗五项分层——赤豆粥（六世纪《荆楚岁时记》"冬至日，作赤豆粥，以禳疫。量日影"直读为最早层；后世江南赤豆饭，非遗网嘉兴例）／馄饨（新华网2015"冬至馄饨夏至面"）／饺子（非遗网2017北方风俗+谚"冬至不端饺子碗"，张仲景说为"有一种说法"）／冬至圆（三门名录转引康熙《临海县志》"粉秫米为丸，谓之冬至圆"、光绪《宁海县志》汤圆条）／冬酿酒（非遗网姑苏）。
- Exact Evidence（逐字）："冬至日，作赤豆粥，以禳疫。量日影。"（荆楚岁时记直读）／"冬至，粉秫米為丸，謂之冬至圓。設牲醴食饌薦之祖先。"（康熙临海县志，名录转引）／"冬至不端饺子碗，冻掉耳朵没人管"（非遗网谚语）。
- Source / Type / Access：source-wikisource-jingchu-suishiji（historical·direct-read，复用源重读）、source-ihchina-dongzhi-feature（institutional·direct-read）、source-xinhuanet-dongzhi-2015（institutional·direct-read）、source-ihchina-sanmen-jidong（institutional·direct-read）。
- Scope / Period：六世纪荆楚→清代台州方志（转引）→当代机构汇编；地域逐项标注（北方/江南/台州/苏州）。
- Why Review：risk=high 食俗泛化高危卡（"全国冬至吃饺子"式泛化是冬至传播最高频错误）；方志为转引级、饺子馄饓冬酿酒为机构层，"南汤圆北饺子"分布未逐地核。
- What We Know / What We Don't Know：知：最早直读层（六世纪赤豆粥）、清代台州冬至圆方志转引、当代机构层各项。不知：方志原书、馄饨→饺子谱系、冬酿酒断代、"南汤圆北饺子"的逐地分布。
- Recommended Decision（建议，不代决）：按分层结构采纳；对外食俗表述一律带地域+层级限定词。
- 链接：[[03_notes/trad-dongzhi-shisu-fenceng|食俗分层卡]]
- 审核问题：1) "北方吃饺子"的地域限定粒度是否够（省/方言区/以秦岭淮河为界）？2) 方志转引是否安排原书直读补强？3) 潮汕祭祖条目保留在证据区不进命题的处理是否恰当？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### legend-dongzhi-zhangzhongjing-jiaozi（CulturalFact · risk=high · impact=term）
- Claim：传说层记载（非史实）："冬至吃饺子为纪念张仲景舍祛寒娇耳汤"无任何汉代文献依据；非遗网（2017）自己以"有一种说法"措辞引出；张仲景为真实医史人物但"舍娇耳汤"故事最早成文载体未查明。
- Exact Evidence（逐字）："有一种说法，称这一习俗是为纪念'医圣'张仲景冬至舍药医治人们冻疮的善举。"（非遗网冬至专题"包饺子"节）。
- Source / Type / Access：source-ihchina-dongzhi-feature（institutional·direct-read）。
- Scope / Period：传说叙事无信史断代；载体为当代机构汇编与媒体。
- Why Review：引擎 finding=pending-primary-source（传说最早载体未直读）；risk=high（Legend-as-Fact：每年冬至媒体大规模重复此说，本卡为防混排锚点）；唯一直读源为机构汇编。
- What We Know / What We Don't Know：知：机构用"有一种说法"措辞、谚语独立存在、张仲景医史身份。不知：传说成文首出（近代报刊/民国民俗读物）、"祛寒娇耳汤"名目的文献源。
- Recommended Decision（建议，不代决）：按 legend 层采纳；对外内容中该传说必须显式标注"传说"，与饺子食俗（机构层）分开呈现。
- 链接：[[03_notes/legend-dongzhi-zhangzhongjing-jiaozi|张仲景传说卡]]
- 审核问题：1) 对外页面呈现该传说时的措辞模板（"有一个流传的说法……但无文献依据"）是否可接受？2) 是否值得专项考据其首出（近代报刊库）？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### dongzhi-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释+why_it_matters，全部回溯 supporting_knowledge_ids（16张：本节气12张+共享4张）。
- Exact Evidence（逐字）：见卡内三层文本（引擎 explanation-gated：Content Gate，支撑卡未 approved 禁止发布）。
- Source / Type / Access：解释层（无独立来源，逐句依赖支撑卡）。
- Scope / Period：面向零前提全球读者。
- Why Review：HumanExplanation 类型按规则必入 C；解释层含日期合成口径、汉代贺冬文献链、数九规则、食俗地域限定句、张仲景"只是传说"标注等多处需与支撑卡逐句对表；分布性短语已自查（食俗句全部地域限定，无"全国/普遍/各地"）。
- What We Know / What We Don't Know：知：三层文本逐句可回溯、"放假七天""冬至大如年出自清嘉录"两处流行说法未写入（limitations 声明）、Yalda 未写入正文。不知：英文译文质量（机器草稿）、支撑卡全部未经人工审核。
- Recommended Decision（建议，不代决）：Stage 1 知识卡 Decision 后再进入 Stage 2 解释层审核（沿立春/大雪流程）。
- 链接：[[03_notes/dongzhi-human-explanation|冬至解释卡]]
- 审核问题：1) 一句话版"古人以两次冬至间隔定回归年、以含冬至之月锚定农历十一月"两处历法断言并列是否过密？2) summary"今天浙江三门的祭冬大典仍是国家级非遗"表述与名录卡对齐吗？3) 展开版"北方吃饺子（……'纪念张仲景'只是传说）"的括注方式是否可接受？4) 日期"12月21日至23日之间（以12月22日前后最常见）"合成口径表述是否可接受？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核
### sci-dongzhi-longitude-270 — 冬至=黄经270°、第22个、12月21-23日（合成口径） · Why：pending-primary-source（GB/T 33661-2017 正文未直读，继承立春待办；日期区间为三源合成无单一逐字源） · 链接：[[03_notes/sci-dongzhi-longitude-270|黄经270°定义]] · Decision：（留空）
### hist-yueling-dongzhi-pentads — 冬至三候原文+注文（蚯蚓结/麋角解[注文互见于夏至鹿角解条]/水泉动，"十一月中"中气位） · Why：evidence-below-confidence（单直读方维基文库撑 high，与立春/大雪同类卡同因） · 链接：[[03_notes/hist-yueling-dongzhi-pentads|冬至三候]] · Decision：（留空）
### region-dongzhi-sanmen-jidong — 三门祭冬国家级非遗（Ⅹ-68扩展项目2014第四批）四要素卡 · Why：pending-primary-source（康熙临海县志/光绪宁海县志为名录转引未直读，"700余年"为报道级断代）；名录+人民日报海外版双独立直读互证 · 链接：[[03_notes/region-dongzhi-sanmen-jidong|三门祭冬地域卡]] · Decision：（留空）

## D · Needs Research
- Yalda 夜 UNESCO 条目直读（ich.unesco.org 已知拦截，需换途径）：直读后 glob-dongzhi-yalda-night 方可评估脱离 Candidate；伊朗文化机构/Encyclopædia Iranica "Yalda"条
- 《清嘉录》卷十一"冬至大如年"条直读（维基文库无此书，需纸本或其他录文源）——"冬至大如年"文献首出
- 《荆楚岁时记》"数九"佚文辑本源流（守山阁丛书本/说郛本/敦煌九九歌写本研究）
- 汉代冬至假期的制度表述溯源（"放假七天"现代转述从何而来；《独断》原书直读）
- "以冬至日，产气始萌"误引源头考（本轮已否证其非史记原文）
- 《汉书·律历志》三统历冬至历元条直读（周正岁首卡升 high 的第二直读方）
- 《周礼·春官·大司乐》"冬日至，于地上之圜丘奏之"直读；历代天坛冬至祭天沿革文献
- 康熙《临海县志》、光绪《宁海县志》原书直读（三门祭冬方志层）
- 麋角冬季脱落的现代动物学核验（麋鹿 vs 鹿脱角周期）；三候现代物候观测
- 苏州冬酿酒断代文献；"冬至馄饨"古籍谱系（《燕京岁时记》冬至条）
- 杜甫《小至》《冬至》维基文库直读（备选文学样本）；《白氏长庆集》卷十三校本
- 古籍农书冬至条（《农政全书》占候卷）；占验农谚的气候统计学检验
- GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）
- 东亚冬至传播方向（NAOJ 冬至页/日本冬至柚子汤南瓜俗/朝鲜冬至팥죽）可另立 Candidate，与 Yalda 卡分列
- 元稹《咏廿四气诗·冬至十一月中》直读源（沿 wave1-2 结论仍无组诗页，全波次待办）

## A · Auto Candidate（仅链接）
- [[03_notes/hist-dongzhi-zhouzheng-year-start|周正以含冬至之月为岁首（史记历书直读）]]（medium）
- [[03_notes/sci-dongzhi-shortest-day-year-anchor|白昼最短与回归年锚]]（high）
- [[03_notes/trad-dongzhi-shijiu-xiaohantu|数九与九九消寒图]]（high）
- [[03_notes/trad-dongzhi-nongshi|冬至农事与农谚]]（medium）
- [[03_notes/lit-baijuyi-handan-dongzhi|白居易《邯郸冬至夜思家》]]（medium）
