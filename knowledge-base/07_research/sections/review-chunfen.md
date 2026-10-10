# 04 春分（chunfen）· 审核分节

研究摘要：本轮查清春分的现代天文定义（黄经0°=黄经刻度原点、公历3月20日或21日、太阳直射赤道昼夜近乎均分且折射使其不严格相等）、《月令》"春分，二月中"定义句与三候逐字文本、安仁赶分社非遗锚点（四要素齐）与徐铉《春分日》直读文本。最大的坑是竖蛋：媒体"起源于4000年前"与"《清嘉录》记载"两说均无一手文献，已按 Modern Popularization 层整卡降级处理；另一个坑是日期范围——任务线索称"3月20-22日"而全部直读来源口径为"20日或21日"。

路由统计：A 5 · B 3 · C 2 · D 0（引擎表中本节气另有6张共享卡路由 human-review，属既有状态不入包）；日志：[[07_research/research-chunfen-batch-log|研究日志]]

## C · 必须人工审核

### chunfen-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释（一句话/约100字/展开版）+ why it matters，逐句回溯 11 张支撑卡。
- Exact Evidence（逐字）：见卡 frontmatter `explanation`；关键支撑句如"太阳到达黄经0°、直射赤道，南北半球昼夜几乎等长"（[[03_notes/sci-chunfen-longitude-0|黄经卡]]）、"白昼约12时8分、黑夜约11时52分"（[[04_sources/source-xinhuanet-chunfen-2021|新华网2021稿]]）。
- Source / Type / Access：无独立来源（解释层），支撑卡均为 direct-read 机构/古籍源。
- Scope / Period：全球天文事实+中国（安仁/岭南/北京等具名地点）习俗；现代口径+古典文本标注。
- Why Review：HumanExplanation 类型一律人工审核（Content Gate：解释≠知识已核）；引擎 finding=explanation-gated（支撑卡未 approved，禁止发布）。
- What We Know / What We Don't Know：三层文本无分布性断言（逐句自查）；不知道英文译文质量与"3月20日或21日"口径是否被编辑接受。
- Recommended Decision（建议，不代决）：待 Stage 1 知识卡 Decision 后进入 Stage 2 Explanation Review；此前不得对外引用。
- 链接：[[03_notes/chunfen-human-explanation|春分解释卡]]
- 审核问题：1) "严格说并不恰好相等"的折射表述是否保留在100字版？2) 竖蛋句"现代流行的趣味习俗"表述是否足够防误读？3) 日期口径"3月20日或21日"与站内其他节气卡（如立春"2月3日至5日"）体例是否需要统一？4) 英文机器草稿如何处置？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### glob-chunfen-nowruz（GlobalExpression · risk=high · impact=global）
- Claim：诺鲁孜节以天文春分为历法参照（联合国页直读：celebrated on the day of the astronomical vernal equinox, usually 21 March；3亿人；逾3000年；2010年联大设国际日）；与中国春分仅"同以春分点为自然参照"，并不是同一个节日。
- Exact Evidence（逐字）："Nowruz, meaning 'new day', marks the first day of spring and is celebrated on the day of the astronomical vernal equinox, which usually occurs on 21 March. It is celebrated by more than 300 million people all around the world and has been celebrated for over 3,000 years in the Balkans, the Black Sea Basin, the Caucasus, Central Asia, the Middle East and other regions."
- Source / Type / Access：source-un-nowruz-day / institutional / direct-read（verification=unverified）。
- Scope / Period：伊朗及中亚、高加索、中东、巴尔干等地区；逾3000年（联合国页口径）。
- Why Review：GlobalExpression 一律 C；跨文化比较为全库最高敏区（防"外国版节气"叙事）；另源页内部 UNESCO 年代表述不一致（2009/2016并见）。
- What We Know / What We Don't Know：直读联合国页导语级事实；不知道仪式细节（页未载）、UNESCO列入/扩展年份、波斯历法机制表述是否经专业审校。
- Recommended Decision（建议，不代决）：保持 Candidate；请跨文化顾问审三要素表述后再议。
- 链接：[[03_notes/glob-chunfen-nowruz|诺鲁孜节卡]]
- 审核问题：1) shared-nature 关系定性是否恰当（vs same-time）？2) "并不是同一个节日"的防对应表述是否足够？3) UNESCO 2009/2016 表述如何落笔？4) 是否补波斯历法机制专卡？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核

### hist-yueling-chunfen-pentads — 《月令》春分定义句+三候逐字直读（含注文），confidence=high · Why：引擎 evidence-below-confidence（tier A 但独立直读方1；古籍单源直读为正常形态，是否维持 high 请裁决） · [[03_notes/hist-yueling-chunfen-pentads|链接]] · Decision：（留空）
### trad-chunfen-shudan — 竖蛋=现代流行习俗、起源诸说无一手文献 · Why：pending-primary-source（《清嘉录》条目未核，正是卡核心待办）；Modern-as-Ancient 高风险样本 · [[03_notes/trad-chunfen-shudan|链接]] · Decision：（留空）
### trad-chunfen-nongshi — "春分麦起身"双源+谚语群（tradition层） · Why：pending-primary-source（"夜半饭牛呼妇起"诗句出处未直读） · [[03_notes/trad-chunfen-nongshi|链接]] · Decision：（留空）

## D · Needs Research

- 元稹《咏廿四气诗·春分二月中》直读文本：需敦煌写本影印/点校集合集，建议图书馆或专业数据库途径。
- 《清嘉录》竖蛋条目核查：需中华书局点校本实物/影印。
- 竖蛋现代流行时间线与"春分更易竖蛋"物理验证：需媒体数据库溯源+可靠科普源直读。
- equilux 随纬度变化的权威解释：需天文台/天文年历级材料。
- 春分逐年时刻权威数据源（《中国天文年历》）入库。
- 祭日礼制文献（《大明会典》《大清会典》日坛朝日条）直读。
- 花信风（海棠/梨花/木兰）文献源头（"二十四番花信风"谱系）。
- 三候现代物候观测数据（中国物候观测网/《物候学》）。
- Nowruz UNESCO 名录档案核对（2009列入/2014、2016扩展）。
- 视觉/声音素材授权研究（日坛、燕子、春牛图、雷声）。

## A · Auto Candidate（仅链接）

- [[03_notes/sci-chunfen-longitude-0|春分黄经0°定义]]（high）
- [[03_notes/sci-chunfen-day-night-equal|昼夜均分与折射解释]]（high）
- [[03_notes/region-chunfen-anren-ganfenshe|安仁赶分社]]（high）
- [[03_notes/trad-chunfen-customs|春分习俗综览]]（medium）
- [[03_notes/lit-xuxuan-chunfenri|徐铉《春分日》]]（medium）
