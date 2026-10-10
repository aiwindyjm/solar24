---
schema_version: '0.1.0'
id: 'lichun-human-review-package'
type: 'ResearchNote'
title: '立春人工审核包 · Evidence Review Package（2026-09-16）'
solar_terms: ['lichun']
season: 'spring'
dimensions: ['ai-research-log']
region: []
period: null
language: 'zh-CN'
status: 'in-review'
epistemic: 'unverified'
confidence: 'unknown'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
research:
  {
    'task': '把立春 5 个高证据节点从 Research Draft 整理为可人工审核的 Verified Candidate，并完成解释层逐句可追溯审计',
    'queries': [],
    'discovered_source_ids': [],
    'conflicts': [],
    'conclusions':
      [
        '5 张卡列入审核（状态已置 in-review / verified-candidate）；解释层审计发现 1 句 Unsupported for publication（"此时中国大部仍然寒冷"）、1 句需改写（"更多地方吃春饼或春卷"）',
        '黄经315° 与 2月3-5日 已拆分为两个独立命题分别定证据链',
      ],
    'human_questions':
      [
        '黄经卡：GB/T 33661-2017 正文未读，是否接受以非遗网+PMO双直读机构来源先行 verified，还是等待标准正文人工核读？',
        'UNESCO 卡：是否安排人工访问 ich.unesco.org 官方页做最终比对？',
        '解释卡 S3/S7 两句如何处置：改写、降格为历史表述、还是等待新来源？',
      ],
  }
---

# 立春人工审核包 · Evidence Review Package

## 0. 使用说明（给审核人）

- 本包是**证据审查材料**，不是宣传文档。共 5 张知识卡（第二节起），每张含：Claim / Exact Evidence / Source / Source Type / Access / Scope / What We Know / What We Do Not Know / Current Status / Review Questions。
- **Decision 选项**：`approve`（核验通过→verified）/ `revise`（改后复审）/ `hold`（证据不足挂起）/ `reject`（证据不支持，回退）。
- **两阶段设计**：Stage 1 = Knowledge Verification（本包 5 卡：证据是否支持命题、范围是否准确）；Stage 2 = Explanation Review（[[03_notes/lichun-human-explanation|解释卡]]：表述、语义、跨文化误读）。**Stage 1 未完成的卡，其支撑的解释句不得发布**——Knowledge verified ≠ Explanation 自动 verified。
- 三道发布门槛（Evidence Gate / Content Gate / Experience Gate）定义见 [[00_project/guide|vault 规范]]。
- AI 声明：本包只做证据整理、风险与冲突提示、建议排序；**最终 Decision 必须由人类审核人在第十二节表格中填写**。5 张卡当前状态为 verified-candidate（笔记 status=in-review），不是 verified。

---

## 1. 审核卡一：sci-lichun-longitude-315（已拆分为两个命题）

> **特别程序（黄经315°）**：按审核要求，"立春=太阳到达黄经315°"与"每年2月3日至5日"拆分为命题 A / B 分别审查。

### 命题 A：立春为太阳到达黄经315°的时刻，是二十四节气之首

- **Claim**：二十四节气按太阳黄经等分黄道24段、每段15°；立春对应315°，为第一个节气。
- **Exact Evidence**：
  1. 香港天文台（直读）："The 24 solar terms divide the ecliptic into 24 equal segments, with 15 degrees of the Sun's longitude between the terms."（页面正文，"From the Earth's perspective"段）——支持机制（24等分/15°），**未在此句给出315°数值**。
  2. 中国非遗网立春专题（直读）："每年2月3日至5日，太阳到达黄经315°时为立春。"（"节气概说"首段）——315°的直接机构表述。
  3. 紫金山天文台《历书科普问题解答》（直读）：节气属阳历范畴、反映地球绕太阳轨道位置（机制印证）。
  4. GB/T 33661-2017：**仅读了官方信息页元数据，正文条款未读**（在线预览有验证码）。
- **Source**：source-hko-solar-terms；source-ihchina-lichun-feature；source-pmo-almanac-qa；source-gbt-33661-openstd（元数据级）。
- **Source Type**：Government observatory（HKO、PMO）；Official Heritage（非遗网）；National standard（GB/T，未读正文）。
- **Access**：direct-read ×3；GB/T 元数据页 direct-read（但正文 unread）。
- **Scope**：全球（黄经定义与地域无关）；现代天文口径；具体日期经验因纬度而异。
- **What We Know**：24等分15°机制有三个独立直读来源；315°数值有一个直读机构来源（非遗网）+ 多来源一致转述；国家标准存在且主管部门为中科院。
- **What We Do Not Know**：GB/T 正文的法定措辞（是否写明315°、如何表述立春）；《中国天文年历》逐年时刻数据未入库。
- **Current Status**：verified-candidate（in-review）。**GB/T 正文 = Needs Human Verification**：请审核人决定接受"双直读机构先行"或下载标准全文核读后 approve。
- **Review Questions**：① 315°数值仅一个直读来源+标准未读，是否达到 verified？② "二十四节气之首"的"首"是序列事实还是文化表述（大寒后/冬至起算两种序列叙述并存，本卡按现行标准序列）？③ 英译 "celestial longitude 315°" 是否需要配黄道图防误读？④ 是否遗漏"按北京时间计"限定？

### 命题 B：立春出现在每年公历2月3日至5日

- **Exact Evidence**：非遗网立春专题（直读）："每年2月3日至5日"；紫金山天文台（直读）："立春在公历2月4日左右"。两个独立直读机构来源。
- **Source / Type / Access**：同上；direct-read ×2。
- **Scope**：公历日期范围；不涉及具体时刻（时刻逐年不同）。
- **What We Do Not Know**：逐年边界年份（如2100年之类远期日历变动）不在证据内；"至5日"端点由非遗网单一来源明确给出，PMO只说"左右"。
- **Current Status**：verified-candidate（in-review），证据强于命题 A。
- **Review Questions**：① 端点"3日/5日"是否需要天文年历逐年核对后才能 approve？② 与命题 A 是否分别记录 Decision？

---

## 2. 审核卡二：fact-solarterms-unesco-2016

- **Claim**：2016年11月30日，"二十四节气——中国人通过观察太阳周年运动而形成的时间知识体系及其实践"列入 UNESCO 人类非物质文化遗产代表作名录（第十一届政府间委员会常会，亚的斯亚贝巴）；2006年列入第一批国家级非遗名录；2011年九华立春祭、班春劝农、石阡说春列入扩展名录。
- **Exact Evidence**：新华社通稿（直读）：届会（11届常会、2016-11-28至12-02、亚的斯亚贝巴）、日期（11月30日通过）、项目全称、非遗领域分类（第四类"有关自然界和宇宙的知识和实践"）。非遗网项目页（直读×2）：2011年第三批扩展项目、编号Ⅹ-68，与新华社时间线互证。
- **Source**：source-xinhua-unesco-solarterms；source-ihchina-jiuhua-lichunji；source-ihchina-shiqian-shuochun。
- **Source Type**：Government news agency（新华社）；Official Heritage（非遗网）。
- **Access**：direct-read ×3。**UNESCO 官网（ich.unesco.org，编号00647）与决议 11.COM/10.B.6 未读取**（验证码拦截）。
- **Scope**：认定事实（时间线与名录归属）属全国性/国际性事实；**不涉及**对节气历史价值、科学性、传播范围的认定。
- **What We Know**：时间线（2006/2011/2014/2016）双源互证；项目全称逐字来自新华社。
- **What We Do Not Know**：UNESCO 官方页的英文正式名称与描述原文（当前全称为新华社中译）；决议文本细节。
- **特别审查（防过度推导）**：卡内已排除"中国的第五大发明"（引述评价）。请审核人确认以下推导**均未出现**在卡内：UNESCO认定→"节气科学"（UNESCO认定的是文化实践，非科学性）；UNESCO认定→"全球认可的中国古代智慧"（超出名录文本的营销化表述）。如发现任何此类表述，revise。
- **Current Status**：verified-candidate（in-review）；UNESCO 官方页比对 = Needs Human Verification（建议人工浏览器访问）。
- **Review Questions**：① 是否接受"新华社+非遗网"先行 verified，官方页后补？② 项目全称以中文通稿为准还是等官方英文/法文页？③ "人类非物质文化遗产代表作名录"译名是否统一（Representative List of the ICH of Humanity）？

---

## 3. 审核卡三：region-jiuhua-lichun-ji（Regional Expression）

- **Claim**：浙江衢州柯城区九华以农历立春日为祭祀日，在梧桐祖殿举行立春祭（祭春神句芒、扮芒神、扎春牛、鞭春牛、演戏酬神等）；鞭春牛由人扮芒神鞭打，是核心环节，象征劝农春耕开端。2011年列入第三批国家级非遗扩展项目（Ⅹ-68）。
- **Exact Evidence**：非遗网项目页（直读）："以农历立春日为祭祀日，九华梧桐祖殿是立春祭主要活动场所""祭拜春神句芒、迎春接福赐求五谷丰登、供祭品、扮芒神、焚香迎奉、扎春牛、演戏酬神、踏青、鞭春牛等""鞭春牛是整个立春祭活动的重要环节，由选定的人装扮成芒神鞭打春牛"。
- **Source**：source-ihchina-jiuhua-lichunji（主）+ source-xinhua-unesco-solarterms（批次互证）。
- **Source Type**：Official Heritage（国家级非遗中心项目页）。
- **Access**：direct-read。
- **Scope（必须按此执行表述）**：**Location**=浙江省衢州市柯城区九华乡外陈村；**Tradition**=立春祭祀+鞭春牛劝农；**Historical Period**=延续至今的当代活态实践（页面未给出肇始朝代——不得写成"千年古俗"）；**Current Practice**=按立春日运转、保护单位柯城区文化馆。
- **What We Know**：项目身份、仪式构成、核心环节、批次编号（双源）。
- **What We Do Not Know**：习俗肇始年代、仪式细节流程（时间表/器物/唱词）、传承谱系。
- **红线检查**：卡内已限定地域；**任何"中国人在立春都举行立春祭"式表述违规**。其意义表述为"节气如何进入现实生活"的实证样本（官方礼制-民间实践两极中的民间极），此为 interpretation 层，已标注。
- **Current Status**：verified-candidate（in-review）。
- **Review Questions**：① 页面描述是否足以支撑"象征劝农春耕的开端"（页面原话为"象征劝农春耕的开端"——是页面语言还是AI归纳？答：页面语，直读摘录在案）；② 仪式细节如未来用于视觉/互动，是否需要田野补充授权？③ "梧桐祖殿"等专名英译策略？

---

## 4. 审核卡四：region-shiqian-shuochun（Regional Expression）

- **Claim**：贵州石阡侗族在立春时节由扮装"春官"走村说唱歌谣、劝农劳作；一般从春节或立春开始、春分结束；分"说正春"（固定春词，含二十四个农事节气）与"说野春"；2011年列入第三批国家级非遗扩展项目（Ⅹ-68）。
- **Exact Evidence**：非遗网项目页（直读）："'说春'是石阡侗族人民世代流传下来的一种在立春时节扮装'春官'说唱歌谣、劝农劳作的民俗表演活动""说春一般在每年春节或立春时开始，春分时结束""说正春"讲"二十四个农事节气"；传承人封武（侗族）、封万明在列。
- **Source**：source-ihchina-shiqian-shuochun（主）+ source-xinhua-unesco-solarterms（批次互证）。
- **Source Type**：Official Heritage。
- **Access**：direct-read。
- **Scope**：**Location**=贵州省石阡县（侗族社区）；**Tradition**=春官说唱劝农；**Historical Period**=清乾隆方志已有记载（**此为页面转述，方志原文未调阅=Needs Human Verification**）；"春官是周代职官"=页面历史解释，非直接史料，卡内已降层处理；**Current Practice**=活态、有在册传承人。
- **What We Know**：项目身份、活动内容、时间跨度（立春-春分）、类别分支、传承人。
- **What We Do Not Know**：乾隆《石阡府志》原条目、春词文本全文、当代执行频度。
- **红线检查**：地域与族群双限定已到位；"说正春含二十四个农事节气"是该卡对"节气知识以口头艺术传播"的关键证据，限于石阡样本。
- **Current Status**：verified-candidate（in-review）。
- **Review Questions**：① 乾隆方志线索 approve 时是否标注"待调阅"？② 侗族社区的族称表述是否需文化顾问复核？③ 春词如引用需文本授权，是否现在声明？

---

## 5. 审核卡五：hist-yueling-lichun-pentads（Primary Text Review）

- **Claim**：《月令七十二候集解》将立春列为正月节（"立，建始也"），立春三候为：一候东风解冻、二候蛰虫始振、三候鱼陟负冰。
- **Exact Evidence**（维基文库本，直读，立春为全书第一节）：
  > 定义："立春，正月節。立，建始也。五行之氣往者過來者續于此。而春木之氣始至，故謂之立也。立夏、秋、冬同。"
  > 一候："東風解凍。凍結于冬，遇春風而解散……"
  > 二候："蟄蟲始振。蟄，藏也；振，動也。密藏之蟲，因氣至，而皆蘇動之矣……"
  > 三候："魚陟負冰。陟，升也。魚當盛寒伏水底而遂暖，至正月陽氣至，則上遊而近冰，故曰負。"
- **Source**：source-yueling-qishierhou-wikisource。
- **Source Type**：Primary Text（古籍，公有领域；载体为维基文库校本性质文本）。
- **Access**：direct-read（cross-checked：CText 检索摘要显示注文存在异文，如"魚陟負冰"注文两种传本文字不同）。
- **Scope**：**这是 Historical Text / Traditional Phenomenology**——命题范围仅是"该文本如此记载"；**不是 Modern Scientific Observation**，也**不声称**三候现象在今天全国范围内严格对应（现代物候验证未做）。
- **What We Know**：文本内容（该版本直读）、立春居全书之首的编排、"立"与四立共用定义。
- **What We Do Not Know**：作者归属与成书年代（传统题名元代吴澄，学界有异说）；各本注文全文校勘；七十二候体系源流（《逸周书·时训》平行文本未读）。
- **Current Status**：verified-candidate（in-review）；**版本校勘 = 建议人审时对照一部印本（中华书局或四库本）**。
- **Review Questions**：① 维基文库本可否作为审核基准本，异文以校勘注形式保留？② 对外表述时"三候"是否必须永远携带"传统物候记载"标签？③ 注文中五行解释（东方属木）是否需要在引用时与现象描述剥离展示？

---

## 6. Human Explanation 逐句可追溯审计（Evidence Traceability Audit）

对象：[[03_notes/lichun-human-explanation|lichun-human-explanation]]。方法：把 One Sentence / 100 Words / Expanded 逐句拆开，映射支撑 Knowledge ID；无明确依赖 → **Unsupported for publication**（不强行补来源，等人工处置）。

### One Sentence（4 句）

| # | 句子（缩写） | 依赖 Knowledge ID | 状态 |
|---|---|---|---|
| S1 | 立春是二十四节气的第一个 | sci-lichun-longitude-315（in-review） | Supported |
| S2 | 太阳到达黄经315°的时刻 | sci-lichun-longitude-315 命题A（in-review） | Supported（随卡审核） |
| S3 | 中国古人把它作为春耕准备开始的信号 | trad-lichun-nongshi（medium）+ hist-yanjing-dachun-yaochun（high·限清末北京）+ region-jiuhua/shiqian（high） | Supported，附注："官民动员"跨朝代表述以清代+当代样本为据 |
| S4 | 至今部分地区仍在这一天举行迎春习俗 | region-jiuhua-lichun-ji + region-shiqian-shuochun（high） | Supported |

### 100 Words（7 句）

| # | 句子（缩写） | 依赖 Knowledge ID | 状态 |
|---|---|---|---|
| S1 | 第一个，每年2月3日至5日 | sci-315 命题B（双直读机构） | Supported |
| S2 | 天文时刻——黄经315° | sci-315 命题A | Supported |
| S3 | **不是天气转折：此时中国大部仍然寒冷** | sci-lichun-vs-meteorological-spring——该卡的"全国大部仍冬"**分布断言本身标记待核验，无直读来源** | **Unsupported for publication**：建议改写为定义层表述（"天文春天≠气象入春，入春按各地气温另行判定"）或补气候来源后再发布 |
| S4 | 古人用太阳位置把一年分成二十四段安排农事 | sci-solarterms-calendar-role（high）+ hist-huainanzi（medium） | Supported |
| S5 | 立春表示备耕开始，官府劝农、民间迎春 | trad-lichun-nongshi（medium）+ hist-yanjing（high·清北京）+ jiuhua/shiqian（high） | Supported |
| S6 | 今天浙江衢州、贵州石阡仍按立春日祭祀劝农 | jiuhua/shiqian（high） | Supported |
| S7 | **更多地方吃春饼或春卷"咬春"** | trad-lichun-yaochun（medium）：文献确证限清末北京；现代分布未逐地核验 | **Revise 建议**：改为历史化表述（"清代北京已有…的记载"）或地域留白表述，避免未核验的现代泛化 |

### Expanded（4 段）

| 段 | 依赖 | 状态 |
|---|---|---|
| ① 是什么（24段/15°/315°/与春节独立/双立春） | sci-315 + sci-solarterms-calendar-role + sci-lichun-calendar-position（2018腊月实例为直读） | Supported |
| ② 与自然（候温标准/三候） | source-szmb（直读·定义）+ hist-yueling-lichun-pentads（high·已标"古典观察"） | Supported，附注："多数地区入春晚于立春"的量化分布无直读来源，建议人审决定保留或软化 |
| ③ 与生活（清代北京礼俗/九华/石阡/UNESCO） | yanjing + jiuhua + shiqian + unesco | Supported（各自带范围标签） |
| ④ 为何值得理解 | 无新事实，收束为 interpretation | OK（须保持 interpretation 标注） |

**审计结论**：三层解释共 15 句，13 句有明确依赖；**S3（100词）Unsupported for publication**、**S7（100词）需 Revise**；Expanded ②段一处建议软化。解释卡 limitations 已同步登记。

---

## 7. Knowledge Verification 与 Explanation Review 的两阶段流程

- **Stage 1（本包 5 卡）**：证据支持性、范围准确性、推导边界。产出：每卡 Decision。
- **Stage 2（解释卡，在 Stage 1 至少核心卡 approve 后进行）**：表述准确、语义清楚、无过度推断、无文化刻板印象、面向国际用户无误读（如 "Beginning of Spring" 与 "still cold" 的表面矛盾其实是教学点；黄经概念需要可视化辅助）。
- Stage 2 的通过条件见 [[00_project/guide|Content Gate]]：逐句可追溯 + 无 Unsupported 句 + 英文润色 + 跨文化复核。

---

## 8. 三道发布门槛（摘要，全文见 vault 规范）

1. **Evidence Gate**（Research Material → Verified）：来源非空且≥1 direct-read；可追溯；≥1 独立交叉；人工审核（human_review）；无未解冲突；地域/时代字段非泛化。
2. **Content Gate**（Verified → Human Explanation 发布）：解释每句可追溯到 approved 知识卡；无 Unsupported 句；interpretation 收束单标；中英双语人工润色；跨文化误读复核。
3. **Experience Gate**（Explanation → Experience Content）：模块 content claims approved 且来源 human-verified；素材 rights cleared；创意提案回溯 approved 知识；地域/时代框架终审。

---

## 9. 审核表（请人工填写）

| ID | Claim（缩写） | Evidence | Scope | Source | Reviewer | Decision | Notes |
|---|---|---|---|---|---|---|---|
| sci-lichun-longitude-315/A | 立春=太阳黄经315° | HKO直读(机制)+非遗网直读(315°)+PMO直读(机制)；GB/T正文未读 | 全球·现代口径 | 4条（见卡） | 待填 | 待填 | GB/T 正文核读与否请明示 |
| sci-lichun-longitude-315/B | 立春在2月3-5日 | 非遗网直读+PMO直读 | 公历日期范围 | 2条 | 待填 | 待填 | — |
| fact-solarterms-unesco-2016 | 2016列入UNESCO代表作名录（时间线+全称） | 新华社直读+非遗网项目页×2直读；UNESCO官网未读 | 全国/国际·认定事实 | 3条 | 待填 | 待填 | 官方页比对建议补做 |
| region-jiuhua-lichun-ji | 九华立春祭：立春日祭祀/鞭春牛 | 非遗网项目页直读+新华社互证 | 浙江衢州柯城·当代活态 | 2条 | 待填 | 待填 | 不得泛化为全国 |
| region-shiqian-shuochun | 石阡说春：春官说唱劝农（立春-春分） | 非遗网项目页直读+新华社互证 | 贵州石阡·侗族·活态 | 2条 | 待填 | 待填 | 乾隆方志待调阅 |
| hist-yueling-lichun-pentads | 《月令》立春三候原文 | 维基文库直读（全书首节） | 文本事实·古典物候 | 1条（cross-checked） | 待填 | 待填 | 建议对照印本 |
| lichun-human-explanation | 三层解释（Stage 2） | 逐句审计：13/15 Supported；S3 Unsupported、S7 Revise | 解释层·全球读者 | 支撑卡14张 | 待填 | 待填 | 须在Stage 1后审 |

## 10. 建议审核顺序（AI 建议，最终由人决定）

1. **sci-lichun-longitude-315（命题A+B）**——它是全库最高频引用的锚点，解释卡、日历数据、未来所有节气都以"黄经定义"为第一事实；它的 Decision 决定 GB/T 待办是否阻塞。
2. **hist-yueling-lichun-pentads**——一手古籍直读、证据最干净，适合作为第一张快速通过项，同时校准"Primary Text Review"的尺度。
3. **fact-solarterms-unesco-2016**——系统级共享卡，approve 后立即服务全部 24 个节气（shared 引用），杠杆最大；需顺带决定 UNESCO 官方页比对的处理方式。
4. **region-jiuhua-lichun-ji / region-shiqian-shuochun**——两张地域卡结构相同，可连续审；审它们等于同时校准"Regional Expression 表述红线"的尺度。
5. **lichun-human-explanation**——最后审（Stage 2）：处置 S3/S7 两句，做英文润色与跨文化复核。

## 11. AI 边界声明

本包由 AI 整理；未进行最终审核；未将任何卡标记 verified；human_review 全部为 null；Decision 列全部留空待人工填写。若人工审核发现证据问题，按规范回退 draft/withdrawn 并留修改记录。

[[01_terms/01_立春|立春索引]] · [[00_project/guide|三道门槛]] · [[07_research/research-lichun-phase3-log|第三阶段日志]]
