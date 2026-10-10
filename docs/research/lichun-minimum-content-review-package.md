# 立春最小内容审核包 · Lichun Minimum Content Review Package

状态：待人工审核（2026-09-18 准备）。配套：[MVP 简报](../../docs/product/lichun-mvp-brief.md) · [立春解释卡](../../knowledge-base/03_notes/lichun-human-explanation.md)（权威文本=frontmatter `explanation`，本包引用其中句子时标注 LC-N）· [统一审核包决策映射](../../knowledge-base/07_research/solar24-batch-human-review-package.md) 第 0 节。

**给审核人的话**：本包是立春首版故事的全部事实依赖。每条含拟用双语、证据定位与来源实际支持范围。请逐条填 Decision（approve / revise / hold / reject）——**这是发布审核，不是库存抽检**；未过审的条目将从首版移除。AI 已标注疑点，不代填任何决定。

---

## A. 拟用命题清单（LC-1 至 LC-8）

### LC-1 · 二十四节气按太阳周年位置划分；立春为第一个刻度

- **类型**：事实（现代天文口径）
- **拟用中文**：二十四节气是中国传统历法中按太阳位置划分的一年二十四段：太阳在天球上运行的圆周（黄道）被等分为24份，每份15°；立春对应315°，是第一个节气，交节通常在公历2月3日至5日（时刻按北京时间计）。
- **拟用英文**：The 24 solar terms divide the Sun's annual path (the ecliptic) into 24 equal segments of 15 degrees each. Lichun corresponds to 315° of celestial longitude, is the first of the 24 terms, and usually falls on February 3-5 in the Gregorian calendar (times reckoned in Beijing time).
- **支撑知识**：[[../../knowledge-base/03_notes/sci-lichun-longitude-315|sci-lichun-longitude-315]]（high，in-review）；[[../../knowledge-base/02_shared/sci-solarterms-calendar-role|sci-solarterms-calendar-role]]（high·shared，机制部分）
- **来源**：
  - `source-hko-solar-terms`（香港天文台，直读）：https://www.hko.gov.hk/en/gts/time/24solarterms.htm — "The 24 solar terms divide the ecliptic into 24 equal segments, with 15 degrees of the Sun's longitude between the terms."（"From the Earth's perspective"段）→ 支持 24 等分/15° 机制
  - `source-ihchina-lichun-feature`（非遗网立春专题，直读）：https://www.ihchina.cn/solar_details/40.html — "每年2月3日至5日，太阳到达黄经315°时为立春。"（节气概说首段）→ 支持 315° 与日期范围
  - `source-pmo-almanac-qa`（紫金山天文台，直读）：节气属阳历范畴、立春2月4日左右 → 机制印证
- **适用条件**：全球（黄经定义与地域无关）；现代天文口径；日期经验因时区而异（按东经120°北京时间计）。
- **来源支持**：机制（24等分/15°）、315°数值、日期范围。**不支持**："立春=天气转暖"（任何地域）；逐年具体时刻（需天文年历）。
- **未解决**：GB/T 33661-2017 正文条款未直读（元数据级来源在卡）；"二十四节气之首"的"首"按现行标准序列（大寒后起算的序列叙述并存，已在知识卡登记）。
- **Decision**：＿＿＿ **Reviewer**：＿＿＿ **Notes**：＿＿＿

### LC-2 · 黄经的直观解释（面向零背景读者）

- **类型**：解释（教学性，依附 LC-1 的事实）
- **拟用中文**：可以想象太阳在一年里绕天空走一个大圆（古人从地球看太阳的路线，叫黄道）；把这个圆像切蛋糕一样等分成24块，每块15°——太阳走到每一块的起点，就是一个节气。立春是太阳走到315°那一块起点的时刻。
- **拟用英文**：Picture the Sun tracing one big circle through the sky over a year (its apparent path, called the ecliptic). Slice that circle like a cake into 24 equal arcs of 15 degrees: the moment the Sun reaches the start of each arc is a solar term. Lichun is the moment it reaches the 315° mark.
- **支撑知识**：同 LC-1（HKO 机制原文是本比喻的事实基础）
- **来源**：同 LC-1。
- **适用条件**：教学比喻；"绕天空走"是从地球观察的视运动（英文已写 apparent path；中文版以"古人从地球看"限定）。
- **来源支持**：黄道/等分/15°。"不支持"：蛋糕比喻本身（呈现层修辞，无事实断言）。
- **未解决**：无。比喻是否达到最佳可理解性，请审核人判断。
- **Decision**：＿＿＿ **Reviewer**：＿＿＿ **Notes**：＿＿＿

### LC-3 · 立春与春节是两套规则的日子

- **类型**：事实（历法结构）
- **拟用中文**：立春与农历正月初一（春节）不是同一个概念：农历月份按月亮圆缺编排，二十四节气按太阳位置运转，两套规则只近似同步。所以有的农历年有两个立春，有的没有；立春也可能落在腊月——2018年2月4日的立春，就是丁酉年腊月十九。
- **拟用英文**：Lichun and Chinese New Year (lunar January 1st) are not the same thing: lunar months follow the Moon's phases, while the solar terms follow the Sun's position, and the two only roughly align. So some lunar years contain two Lichuns and some none; Lichun can even fall in the twelfth lunar month — on February 4, 2018, Lichun occurred on the 19th day of the 12th lunar month.
- **支撑知识**：[[../../knowledge-base/03_notes/sci-lichun-calendar-position|sci-lichun-calendar-position]]（medium）；[[../../knowledge-base/02_shared/sci-solarterms-calendar-role|sci-solarterms-calendar-role]]（high·shared）
- **来源**：
  - `source-ihchina-lichun-feature`（直读）：https://www.ihchina.cn/solar_details/40.html — "2018年的立春时间是2月4日（农历丁酉年腊月十九）。"（"节气概说"首段）→ **2018 实例句的唯一来源**
  - `source-pmo-almanac-qa`（直读）：http://www.pmo.cas.cn/xwdt2019/kpdt2019/202203/t20220317_6399980.html — 朔日定初一、节气属阳历范畴、双立春/无立春年成因 → **历法机制**（该页未含 2018 年具体日期句）
- **适用条件**：现行农历编算口径；"两套规则"是结构表述，不涉及历史沿革。
- **来源支持**：实例句（非遗网一处直读）；历法机制（PMO）。**不支持**：逐年历表（建议人审时以《中国天文年历》抽查该实例）。**归属更正（2026-09-18 复核）**：此前写"两处独立直读"不准确——PMO 页只支持机制，不包含该日期实例。
- **未解决**：历表逐项核验建议人审时以《中国天文年历》抽查该实例；如需第二独立来源支撑实例句，属后续补证（非首版阻塞）。
- **Decision**：＿＿＿ **Reviewer**：＿＿＿ **Notes**：＿＿＿

### LC-4 · 立春不等于所有地方同时变暖

- **类型**：事实（定义对照）
- **拟用中文**：立春是天文刻度，不是天气转折。气象学上的"入春"要按当地气温另行判定——立春这天是否已经暖和，取决于你在哪里。
- **拟用英文**：Lichun is an astronomical mark, not a weather turn. Meteorological spring is judged separately from local temperatures — whether it has actually warmed where you are depends on where you are.
- **支撑知识**：[[../../knowledge-base/03_notes/sci-lichun-vs-meteorological-spring|sci-lichun-vs-meteorological-spring]]（medium）
- **来源**：`source-szmb-season-division`（深圳市气象局，直读，2026-09-18 复读）：https://weather.sz.gov.cn/mobile/hudongjiaoliu/yewuzhishiku/qixiangfuwulei/content/post_12009684.html — "气候上采用候温(五天平均温度)来划分……"（气候学通说段，支持"按气温另行判定"的口径）
- **适用条件**：本条只做定义对照，不写具体算法与任何城市的入春日期，也不写"各地标准/日期"类分布断言（与故事快照措辞一致）。
- **来源支持**："气象入春按当地气温判定"的机构口径。**不支持**：全国入春分布；算法细节（深圳判据"五天滑动平均气温>10度，最后那天起"是该局本地口径，不等同全国统一判据——原"连续五天滑动平均气温稳定≥10℃"系不忠实转写，已订正并从故事移除）。
- **深圳数字处置（2026-09-18 决定）**：深圳 1991-2020 年平均入春日 2 月 3 日为已核真实数据，但**首版故事不使用**（保留在知识卡层，未来需要具体城市锚点时另行过审后采用）——本包、解释卡与 MVP 简报三处已同步。
- **未解决**：全国入春日期分布需国家气候中心级数据源（非首版必需）。
- **Decision**：＿＿＿ **Reviewer**：＿＿＿ **Notes**：＿＿＿

### LC-5 · 一个传统自然观察（古典文本，明示分层）

- **类型**：历史记载（古典物候文本）
- **拟用中文**：传统文献《月令七十二候集解》记立春时节的三个物候信号："东风解冻"（暖风化解冻结）、"蛰虫始振"（越冬的虫开始苏动）、"鱼陟负冰"（鱼上浮到近冰面）。这是古典文本对自然观察的记载，不是现代科学观测——但它显示古人如何用身边的水、土、动物读取季节。
- **拟用英文**：The traditional compilation "Collected Explanations of the 72 Pentads" records three signs of nature at Lichun: "the east wind thaws the frost," "hibernating insects begin to stir," and "fish rise near the ice." These are classical textual observations, not modern measurements — yet they show how people once read the season from water, soil and animals close at hand.
- **支撑知识**：[[../../knowledge-base/03_notes/hist-yueling-lichun-pentads|hist-yueling-lichun-pentads]]（high，in-review；单原典直读+CText异文登记）
- **来源**：`source-yueling-qishierhou-wikisource`（维基文库本，直读）：https://zh.wikisource.org/wiki/月令七十二候集解 — 立春节为全书首节："東風解凍。凍結于冬，遇春風而解散……""蟄蟲始振。蟄，藏也；振，動也……""魚陟負冰。陟，升也……"
- **适用条件**：命题=该文本如此记载；**不是**现代物候观测，也不断言今天各地仍按期出现（卡内例外已声明）。
- **来源支持**：文本内容（维基文库本直读）。**不支持**：三候的现代发生情况；文本作者归属（传统题名元代吴澄，学界有异说——首版不写作者名，只称"传统文献"）。
- **未解决**：版本校勘（与印本对照）属人审建议项；现代物候验证非首版必需。
- **Decision**：＿＿＿ **Reviewer**：＿＿＿ **Notes**：＿＿＿

### LC-6 · 地方生活案例（两个，分别描述）

- **类型**：事实（地域非遗实践，两条子命题）
- **拟用中文（6a 九华）**：在浙江衢州柯城区的九华，人们至今**以农历立春日为祭祀日**举行立春祭：在梧桐祖殿祭拜春神句芒、扎春牛、演戏酬神，核心环节"鞭春牛"由人扮成芒神鞭打春牛，象征劝农耕的开始。
- **拟用英文（6a）**：In Jiuhua, Kecheng District, Quzhou, Zhejiang, people still hold the Lichun rites **on the day of Lichun itself**: at the Wutong ancestral hall they honor the spring deity Goumang, build a spring ox, and perform operas; the centerpiece, "whipping the spring ox," has a performer dressed as the spring deity lash the ox to mark the start of farming.
- **拟用中文（6b 石阡）**：而在贵州石阡，侗族的"说春"是另一种形态：扮装成"春官"的人走村串户说唱歌谣、劝农劳作——活动一般在**春节或立春时开始，到春分时结束**，不是只在这一天举行。
- **拟用英文（6b）**：In Shiqian, Guizhou, the Dong people's "Shuochun" takes another form: performers dressed as "Chun Guan" (spring officials) walk from village to village, chanting and urging farmers on — the season typically runs **from around Chinese New Year or Lichun to the spring equinox**, not a single day.
- **支撑知识**：[[../../knowledge-base/03_notes/region-jiuhua-lichun-ji|region-jiuhua-lichun-ji]]（high，in-review）；[[../../knowledge-base/03_notes/region-shiqian-shuochun|region-shiqian-shuochun]]（high，in-review）
- **来源**：
  - `source-ihchina-jiuhua-lichunji`（非遗网项目页，直读）：https://www.ihchina.cn/project_details/15060.html — "以农历立春日为祭祀日，九华梧桐祖殿是立春祭主要活动场所……鞭春牛是整个立春祭活动的重要环节，由选定的人装扮成芒神鞭打春牛。"
  - `source-ihchina-shiqian-shuochun`（非遗网项目页，直读）：https://www.ihchina.cn/project_details/15062.html — ""说春"是石阡侗族人民世代流传下来的一种在立春时节扮装"春官"说唱歌谣、劝农劳作的民俗表演活动……说春一般在每年春节或立春时开始，春分时结束。"（2026-09-18 审计轮独立直读同页复核一致）
- **适用条件**：6a 地域=浙江衢州柯城九华，日期锚=立春日；6b 地域=贵州石阡（侗族社区），时段=春节或立春起至春分。两者**不得合并**为"按立春日祭祀劝农"（2026-09-18 R02 修正的原错误）；非遗批次身份（Ⅹ-68 扩展项目）首版故事不使用，不构成依赖。
- **来源支持**：活动内容、地点、时间口径、核心环节。**不支持**：习俗肇始年代（页面未给，不得写"千年古俗"）；仪式完整流程与唱词（未采集）。
- **未解决**：石阡逐年实际起讫未核（保留"一般在"的来源口径）；若未来用于视觉呈现需田野授权。
- **Decision（6a）**：＿＿＿ **Decision（6b）**：＿＿＿ **Reviewer**：＿＿＿ **Notes**：＿＿＿

### LC-7 · 文化解释（项目解释，从案例出发）

- **类型**：解释（interpretation·项目解释）
- **拟用中文**：在传统农业社会，何时开始准备耕作直接关系一年收成，立春因此被当作一个重要的备耕时间信号。从清代北京的官方迎春与"咬春"记载，到今天九华的立春祭、石阡的说春，可以看到节气如何把太阳位置、农事准备与地方生活连接起来。〔项目解释〕这份"跟着自然节奏安排生活"的时间感，是这些具体实践留给今天的启发——它是我们基于上述证据形成的解释，不是对所有中国人统一自然观的概括。
- **拟用英文**：In a traditional agrarian society, when to start preparing the fields could decide the year's harvest, so Lichun was treated as an important signal for spring preparations. From the official rites and "yǎochūn" records of late-Qing Beijing to today's Lichun festival at Jiuhua and the Shuochun chanting of Shiqian, the solar terms linked the Sun's position, farm preparation and local life. [Project interpretation] This sense of living by nature's rhythm is what these specific practices offer today — an interpretation we draw from the evidence above, not a claim about a uniform Chinese view of nature.
- **支撑知识**：[[../../knowledge-base/03_notes/hist-yanjing-dachun-yaochun|hist-yanjing-dachun-yaochun]]（high）；[[../../knowledge-base/03_notes/region-jiuhua-lichun-ji|region-jiuhua-lichun-ji]]（high）；[[../../knowledge-base/03_notes/region-shiqian-shuochun|region-shiqian-shuochun]]（high）；[[../../knowledge-base/03_notes/trad-lichun-yaochun|trad-lichun-yaochun]]（medium·claim 已收窄）
- **来源**：`source-wikisource-yanjingsuishiji`（维基文库，直读）"打春"条："是日富家多食春餅，婦女等多買羅卜而食之，曰咬春，謂可以卻春困也。"；九华/石阡项目页（同 LC-6）。
- **适用条件**：事实例子（清代北京、九华、石阡）与项目解释显式分开（〔项目解释〕标注）；中英地域/时间/群体/语义强度一致。
- **来源支持**：三个案例的事实层。**不支持**："全社会""两千多年""庞大人口""多数人不再务农"等群体性判断——**已删除（2026-09-18 复核收口）**；英文同步删除 "though few farm today"。
- **未解决**：无新增。
- **Decision**：＿＿＿ **Reviewer**：＿＿＿ **Notes**：＿＿＿

### LC-8 · 开放邀请（无事实依赖）

- **类型**：编辑性提问
- **拟用中文**：同一个太阳时刻，在你生活的地方意味着什么？是还在下雪，还是已经开花？你的家乡有没有自己的"春天从哪天开始"的说法？
- **拟用英文**：What does this same moment of the Sun mean where you live? Still snowing, or already blooming? Does your hometown have its own way of saying when spring begins?
- **支撑知识**：无（编辑文案，不承载事实断言；与 PRD"双向邀请"使命一致，非社区投稿入口本身）。
- **Decision**：＿＿＿ **Reviewer**：＿＿＿ **Notes**：＿＿＿

---

## B. 首版权威文本快照（脚本生成，禁止手改）

权威位置：立春解释卡 frontmatter `explanation`。本节由 `npx tsx scripts/lichun-snapshot.ts --write` 生成，含内容哈希；`tests/snapshot.test.ts` 持续校验"审核人读到的＝批准对应的＝生产使用的"三方一致。权威字段任何变化都会使校验失败并要求重新过审（不以 updated 日期判断——同日修改同样被发现）。

<!-- SNAPSHOT:BEGIN -->
<!-- 权威文本内容哈希 sha256: 803640fa098f476ae523a383736b2ebbc315f23eed5e08e6c9ecc54b1665306b -->
<!-- 生成：npx tsx scripts/lichun-snapshot.ts --write ；校验：npx tsx scripts/lichun-snapshot.ts 或 tests/snapshot.test.ts -->
<!-- 本节由脚本从解释卡 frontmatter 生成，禁止手改；权威字段变化后须重写并重新过审 -->

### 一句话 One Sentence（one_sentence）

**zh-CN**：

```text
立春是二十四节气的第一个：太阳到达黄经315°的时刻，中国古人把它作为春耕准备开始的信号，一些地方至今仍在立春时节举行迎春劝农的习俗。
```

**en**：

```text
Lichun (Beginning of Spring) is the first of China's 24 solar terms: the moment the Sun reaches celestial longitude 315°, traditionally treated as the signal to prepare for spring farming, with welcoming-spring customs still practiced in some places around this time.
```

### 短摘要 Summary（summary）

**zh-CN**：

```text
立春是二十四节气的第一个，每年公历2月3日至5日太阳到达黄经315°。它是天文时刻，不是天气转折——气象学的"入春"要按当地气温另行判定。古人用太阳位置把一年分成二十四段安排农事，立春表示备耕开始：清代北京有官方迎春礼与吃春饼、生萝卜"咬春"的记载。今天浙江衢州九华仍以立春日为祭祀日举行立春祭；贵州石阡的"说春"则从春节或立春开始、到春分结束。
```

**en**：

```text
Lichun, the first of the 24 solar terms, falls on February 3-5 each year, when the Sun reaches celestial longitude 315°. It is an astronomical moment, not a weather turn — meteorological spring is judged separately from local temperatures. Ancient Chinese used the Sun's position to divide the year into 24 segments for farming; Lichun marked the start of preparations. Late-Qing Beijing records describe official spring-welcoming rites and the custom of eating spring pancakes and raw radish as "yǎochūn" (biting the spring). Today Jiuhua in Quzhou, Zhejiang, still holds its Lichun rites on the day of Lichun itself, while the "Shuochun" chanting in Shiqian, Guizhou runs from around Chinese New Year or Lichun to the spring equinox.
```

### 展开故事 Expanded（expanded）

**zh-CN**：

```text
【它是什么·现代天文定义】立春是二十四节气之首。按现代天文口径，太阳在天球上运行的圆周（黄道）被等分为24份、每份15°，立春对应315°，交节通常落在公历2月3日至5日（时刻按东经120°北京时间计）。【它是什么·传统历法层】中国传统农历是阴阳合历：月份按月亮圆缺编排，年按太阳回归年对齐，二十四节气是其中的太阳成分。因此立春与农历正月初一（春节）是两套规则的日子——有的农历年有两个立春，有的没有，立春也可能落在腊月（如2018年2月4日=丁酉年腊月十九，此实例来自非遗网立春专题的记载）。【它与自然·古典物候文本】《月令七十二候集解》记立春三候："东风解冻、蛰虫始振、鱼陟负冰"——风变暖、越冬虫苏动、鱼上浮近冰。这是古典文本的物候记载，不是现代观测记录。【它与自然·现代气象口径】气象学的"入春"要按当地气温另行判定（算法与日期细节不在首版展开）。立春作为太阳位置刻度，不保证任何地方此刻已经入春——"立春了没有变暖"不是节气失准，而是两套"春"的定义不同。【它与人们的生活】在传统农业社会，何时备耕关系全年收成，立春被当作重要的备耕时间信号：清代北京有官方迎春礼与"打春"（鞭打春牛），民间吃春饼、生萝卜"咬春"（《燕京岁时记》"打春"条）。今天的地方实践各有自己的时间表：浙江衢州柯城九华以农历立春日为祭祀日，在梧桐祖殿举行立春祭（祭春神句芒、鞭春牛等）；贵州石阡的"说春"则是一种由扮装"春官"走村说唱劝农的民俗，一般在春节或立春时开始、春分时结束——两者的形式、地点与起讫并不相同。【为什么今天仍值得理解·项目解释】从清代北京的记载，以及九华、石阡的实践，可以看到同一套太阳刻度如何把自然观察、农事准备与地方生活连接起来。〔项目解释〕这种"跟着自然节奏安排生活"的时间感，是这些实践留给今天的启发——本段为基于上述证据形成的项目解释，不是对所有中国人统一自然观的概括。
```

**en**：

```text
Pending translation review.
```

### Why it matters（why_it_matters）

**zh-CN**：

```text
在传统农业社会，何时开始准备耕作直接关系一年收成，立春因此被当作一个重要的备耕时间信号。从清代北京的官方迎春与"咬春"记载，到今天九华的立春祭、石阡的说春，可以看到节气如何把太阳位置、农事准备与地方生活连接起来。〔项目解释〕这份"跟着自然节奏安排生活"的时间感，是这些具体实践留给今天的启发——它是我们基于上述证据形成的解释，不是对所有中国人统一自然观的概括。
```

**en**：

```text
In a traditional agrarian society, when to start preparing the fields could decide the year's harvest, so Lichun was treated as an important signal for spring preparations. From the official rites and "yǎochūn" records of late-Qing Beijing to today's Lichun festival at Jiuhua and the Shuochun chanting of Shiqian, the solar terms linked the Sun's position, farm preparation and local life. [Project interpretation] This sense of living by nature's rhythm is what these specific practices offer today — an interpretation we draw from the evidence above, not a claim about a uniform Chinese view of nature.
```
<!-- SNAPSHOT:END -->

## C. 关键术语表

| 术语 | 拼音/原文 | 英译（待译者终审） | 说明 |
|---|---|---|---|
| 立春 | Lìchūn | Lichun (Beginning of Spring) | 首次出现附音标 |
| 二十四节气 | èrshísì jiéqì | the 24 solar terms | 首版统一此译名 |
| 黄经 | — | celestial longitude | LC-2 用切蛋糕比喻先行解释 |
| 黄道 | — | the ecliptic | 同上 |
| 农历 | — | the traditional Chinese calendar (lunar-solar) | 避免只写 lunar calendar（防"纯阴历"误读） |
| 腊月 | làyuè | the twelfth lunar month | LC-3 |
| 咬春 | yǎochūn | "biting the spring" | 2026-09-18 修订声调标注；原 yachun 废弃 |
| 春官/说春 | Chūnguān / Shuōchūn | spring officials / Shuochun chanting | LC-6b |
| 候温 | — | pentad mean temperature | LC-4 |
| 三候 | sānhòu | the three pentads (traditional phenology) | LC-5 |

## D. 逐句证据映射（展开故事 → LC 条目 → 知识卡）

| 故事句（缩写） | LC | 知识卡 | 状态 |
|---|---|---|---|
| 黄道24等分/15°/315°/2月3-5日 | LC-1/2 | sci-lichun-longitude-315 | Supported（随 LC-1 审核） |
| 农历阴阳合历/立春≠春节/双立春/2018腊月 | LC-3 | sci-lichun-calendar-position + calendar-role | Supported |
| 三候原文 | LC-5 | hist-yueling-lichun-pentads | Supported（古典文本标注） |
| "入春按当地气温另行判定" | LC-4 | sci-lichun-vs-meteorological-spring | Supported（口径级；算法与深圳数据不进故事） |
| 清代北京官方迎春/打春/咬春 | LC-7 | hist-yanjing-dachun-yaochun, trad-lichun-yaochun | Supported |
| 九华立春祭（立春日） | LC-6a | region-jiuhua-lichun-ji | Supported |
| 石阡说春（春节或立春起、春分止） | LC-6b | region-shiqian-shuochun | Supported |
| "两套春的定义不同" | LC-4 | 定义对照表述 | Supported（口径级） |
| 2018 腊月实例 | LC-3 | 实例句=非遗网；机制=PMO | Supported（归属已更正） |
| 末段项目解释（从案例出发） | LC-7 | interpretation·项目解释 | 已标注；群体性判断已删除 |

（原 Unsupported 句"此时中国大部仍然寒冷"与"更多地方吃春饼"已删除/收窄——见解释卡 2026-09-18 修改记录。）

## E. 英文翻译待审说明

one_sentence / summary / why 与本包各 LC 英文为**机器草稿**，未经人工润色；expanded 英文在解释卡中为 'Pending translation review.'。英文审核责任与流程见 MVP 简报 §5；双语唯一性断言对齐（如 LC-1 "first"、无唯一性断言条目）已由引擎 `bilingual-assertion-alignment` 规则标记人工核对项。

## F. 审核记录表（汇总）

| 条目 | 命题（缩写） | Decision | Reviewer | Notes |
|---|---|---|---|---|
| LC-1 | 节气=太阳刻度+立春第一 | | | |
| LC-2 | 黄经切蛋糕比喻 | | | |
| LC-3 | 立春≠春节 | | | |
| LC-4 | 立春≠同时变暖（含深圳数据） | | | |
| LC-5 | 三候（古典文本） | | | |
| LC-6a | 九华立春祭（立春日） | | | |
| LC-6b | 石阡说春（春节或立春起） | | | |
| LC-7 | 文化解释（interpretation） | | | |
| LC-8 | 开放邀请 | | | |
| 整卡 | lichun-human-explanation（Stage 2） | | | |

## G. 审核决定落盘流程（2026-09-18 补）

从"表格 approve、卡片仍 in-review"到最终 approved 的完整顺序（每步由谁执行）：

1. **表格 Decision**（负责人）：在本包 F 表填写 approve/revise/hold/reject 与 Reviewer/Notes。
2. **知识卡 human_review**（负责人本人，或其确认下由操作者按其明确指示执行并署真实审核人姓名）：把 Decision 落到对应知识卡 YAML（approve → `human_review.decision: approved`；revise → `changes-requested` + status 回 draft 修改后重审）。此时卡片仍为 `status: in-review`——**这不是发布状态**。
3. **来源核验升级**（负责人或指定核验人）：对选入首版的来源逐条实际核验后，把 Source 的 `verification` 升为 `human-verified`（Evidence Gate 条件：approved 卡须全部来源 human-verified）。
4. **status → approved**（负责人或其确认的操作者）：全部门槛满足（human_review.approved + 来源全 human-verified + 无未解冲突）后，把知识卡 `status` 改为 `approved`，并在修改记录注明依据的表格 Decision。
5. **解释卡 Stage 2**（负责人）：支撑卡 approved 后审解释卡整卡（同 1-4 流程）。
6. **显式内容 PR**（操作者，依据已 approved 的卡）：写入 modules/lichun/content 与 references，diff 可审阅、可回退。

AI 在全流程中的角色限于准备材料与提示缺口，不执行 2-6 中任何批准性写入，不冒充审核人。
