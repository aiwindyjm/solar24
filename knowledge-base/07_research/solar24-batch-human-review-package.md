---
schema_version: '0.1.0'
id: 'solar24-batch-human-review-package'
type: 'ResearchNote'
title: '24节气统一人工审核总包（Batch Research Run · 2026-09-16）'
solar_terms: []
season: null
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
updated: '2026-09-17'
human_review: null
research:
  {
    'task': '把23个节气批量研究成果与立春试点合并为一次性人工审核入口',
    'queries': [],
    'discovered_source_ids': [],
    'conflicts': [],
    'conclusions':
      [
        '23节气共路由 253 张本节气 claim 卡：A 125 / B 57 / C 55 / D 16；立春沿用试点审核包（5张 verified-candidate）',
        '全部卡 status≤in-review，human_review=null，Decision 一律留空',
        '2026-09-17 质量修正：Q4 改为逐 ID 双轨表（needs-research 17 + human-review 7）；共享历法两卡已按审计 F01 修正，审核前先读其修改记录；A 区抽检不等于发布放行',
      ],
    'human_questions': ['按优先级队列从系统级共享卡开始审核；A 区抽检仅用于库存质量评估——任何选入正式发布内容的卡（无论 A/B/C）必须逐卡完成发布审核'],
  }
---

# Solar24 24节气统一人工审核总包

## 0. 给审核人的使用说明

- 本包是 24 节气 Batch Research Run（2026-09-16）的**一次性审核入口**：23 个节气的分节在此按序排列，立春沿用试点审核包（见第一节）。
- **四层分层**：A = Auto Candidate（证据达标、无 major finding）；B = Recommended Review（表达边界问题）；C = Mandatory Review（高风险/系统级/全球表达/解释层——**本包审核重点**）；D = Needs Research（证据缺口清单，决定第二轮研究任务）。**抽检与阻塞的关系（2026-09-18 审计 R04 澄清）：抽检 A/B 区只用于评估库存整体质量；一张卡无论属于哪层，只要被选入正式发布内容（如立春首版），就必须逐卡完成发布审核并留下记录。反之，未被选入首版的库存卡不阻塞发布。**
- **Decision 选项**：approve / revise / hold / reject。**所有 Decision/Reviewer/Notes 列留空**，由审核人填写；AI 不代审。
- **表格 Decision → 正式数据的映射（2026-09-18 审计 R04 明确）**：审核人在本包表格填 Decision 后，还须把决定落到对应知识卡的 YAML（由审核人本人或在其确认下由操作者执行，记录真实审核人姓名）——`approve` → `human_review.decision: approved` + `status: in-review`（发布前还需来源 verification 升级 human-verified，见 Evidence Gate）；`revise` → `human_review.decision: changes-requested` + `status` 回 `draft`（修改后重审）；`hold` → 保持 `status: in-review`、human_review 暂空，在 Notes 记录挂起原因；`reject` → `status: withdrawn`（或在 Notes 说明回退 draft）。**对应版本 = 知识卡 frontmatter 的 `updated` 日期 + 修改记录条目**；表格 Decision 与卡片数据不一致时以卡片 YAML 为准。HumanExplanation 卡的 Stage 2 同理。AI 不得代填 reviewer、decision 或 approved。
- 两阶段：Stage 1 = 知识卡证据审（本包）；Stage 2 = 解释卡表述审（各节气 HumanExplanation，在支撑卡 Decision 后进行）。
- 三道发布门槛（Evidence / Content / Experience Gate）定义见 [[00_project/guide|vault 规范]]。**本包任何内容通过审核前不得进入网站/README/模块内容。**
- 每张 C 卡的审核问题已随卡列出（来源支持性/范围/断代/泛化/倒灌/跨文化）。每节末尾有该节气的研究日志链接（检索词、冲突、审计记录）。

## 1. 总览表（23节气 + 立春试点）

| # | 节气 | A | B | C | D | 研究摘要入口 |
|---|---|---|---|---|---|---|
| 01 | 立春 | — | — | 5 | — | [[07_research/lichun-human-review-package|立春试点审核包（5张 verified-candidate，含解释层逐句审计）]] |
| 02 | 雨水 | 5 | 1 | 3 | 0 | 本包第 2 节 · [[07_research/research-yushui-batch-log|研究日志]] |
| 03 | 惊蛰 | 4 | 3 | 2 | 1 | 本包第 3 节 · [[07_research/research-jingzhe-batch-log|研究日志]] |
| 04 | 春分 | 5 | 3 | 2 | 0 | 本包第 4 节 · [[07_research/research-chunfen-batch-log|研究日志]] |
| 05 | 清明 | 7 | 2 | 2 | 0 | 本包第 5 节 · [[07_research/research-qingming-batch-log|研究日志]] |
| 06 | 谷雨 | 7 | 1 | 3 | 1 | 本包第 6 节 · [[07_research/research-guyu-batch-log|研究日志]] |
| 07 | 立夏 | 7 | 2 | 2 | 1 | 本包第 7 节 · [[07_research/research-lixia-batch-log|研究日志]] |
| 08 | 小满 | 7 | 1 | 4 | 1 | 本包第 8 节 · [[07_research/research-xiaoman-batch-log|研究日志]] |
| 09 | 芒种 | 6 | 2 | 2 | 1 | 本包第 9 节 · [[07_research/research-mangzhong-batch-log|研究日志]] |
| 10 | 夏至 | 6 | 1 | 1 | 1 | 本包第 10 节 · [[07_research/research-xiazhi-batch-log|研究日志]] |
| 11 | 小暑 | 7 | 3 | 1 | 1 | 本包第 11 节 · [[07_research/research-xiaoshu-batch-log|研究日志]] |
| 12 | 大暑 | 5 | 3 | 1 | 1 | 本包第 12 节 · [[07_research/research-dashu-batch-log|研究日志]] |
| 13 | 立秋 | 5 | 4 | 1 | 1 | 本包第 13 节 · [[07_research/research-liqiu-batch-log|研究日志]] |
| 14 | 处暑 | 3 | 4 | 3 | 1 | 本包第 14 节 · [[07_research/research-chushu-batch-log|研究日志]] |
| 15 | 白露 | 9 | 2 | 1 | 1 | 本包第 15 节 · [[07_research/research-bailu-batch-log|研究日志]] |
| 16 | 秋分 | 5 | 2 | 4 | 0 | 本包第 16 节 · [[07_research/research-qiufen-batch-log|研究日志]] |
| 17 | 寒露 | 6 | 2 | 2 | 0 | 本包第 17 节 · [[07_research/research-hanlu-batch-log|研究日志]] |
| 18 | 霜降 | 3 | 3 | 2 | 1 | 本包第 18 节 · [[07_research/research-shuangjiang-batch-log|研究日志]] |
| 19 | 立冬 | 3 | 3 | 3 | 1 | 本包第 19 节 · [[07_research/research-lidong-batch-log|研究日志]] |
| 20 | 小雪 | 4 | 3 | 3 | 0 | 本包第 20 节 · [[07_research/research-xiaoxue-batch-log|研究日志]] |
| 21 | 大雪 | 7 | 2 | 3 | 1 | 本包第 21 节 · [[07_research/research-daxue-batch-log|研究日志]] |
| 22 | 冬至 | 5 | 3 | 4 | 1 | 本包第 22 节 · [[07_research/research-dongzhi-batch-log|研究日志]] |
| 23 | 小寒 | 3 | 5 | 3 | 1 | 本包第 23 节 · [[07_research/research-xiaohan-batch-log|研究日志]] |
| 24 | 大寒 | 6 | 2 | 3 | 0 | 本包第 24 节 · [[07_research/research-dahan-batch-log|研究日志]] |
| 合计 | 23节气 | 125 | 57 | 55 | 16 | 另：6张系统共享卡（02_shared）自试点起即为 human-review-required，见优先级队列 Q0 |

## 2. 人工审核优先级队列（AI 建议，最终由人决定）

**Q0 系统级共享卡（最高杠杆，approve 后服务全部节气）**
- [[02_shared/fact-solarterms-unesco-2016|UNESCO 2016 认定]]（high·全国性）
- [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]（high）
- [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]]（medium·版本异文）
- [[02_shared/fact-solarterms-yellow-river-origin|黄河流域起源]]（medium·申报表述）
- [[02_shared/hist-solarterms-pentad-system|七十二候体系]]（medium·本轮新增）
- [[02_shared/sci-solarterms-jieqi-zhongqi|节气/中气分组]]（high·本轮新增，置闰命题）
- 连带：GB/T 33661-2017 正文人工核读（全库继承待办，见立春包）

**Q1 高风险 claim 卡（High Risk / 重大范围问题）**——按节气顺序：

- 02 雨水：region-guanghan-yushui-baobaojie
- 03 惊蛰：hist-jingzhe-qizhe-renaming
- 06 谷雨：legend-guyu-cangjie；fact-guyu-un-chinese-language-day
- 07 立夏：legend-lixia-chengren-adou
- 08 小满：interp-xiaoman-modern-philosophy；trad-xiaoman-sanche-customs；trad-xiaoman-qican
- 09 芒种：hist-mangzhong-jianhuashen
- 14 处暑：region-chushu-xiangshan-kaiyu；hist-chushu-zhongyuan-hedeng
- 16 秋分：hist-qiufen-xiyue-sacrifice；interp-qiufen-zhongqiu-origin-narrative
- 18 霜降：region-shuangjiangjie-tiandeng
- 19 立冬：hist-lidong-yingdong-beijiao；trad-lidong-budong-jiaozi
- 20 小雪：trad-xiaoxue-pickling-curing
- 21 大雪：hist-daxue-hanhaoniao-bianxi；trad-daxue-yanrou
- 22 冬至：hist-dongzhi-hedong-jiaotian；trad-dongzhi-shisu-fenceng；legend-dongzhi-zhangzhongjing-jiaozi
- 23 小寒：sci-xiaohan-vs-dahan-temperature；trad-xiaohan-caifan-nuomifan
- 24 大寒：trad-dahan-weiya

**Q2 历史断代与文献归属类（Historical）**——重点卡：
- 惊蛰：hist-jingzhe-qizhe-renaming（启蛰改名公案·避讳说为学界通说）
- 清明：寒食→清明四点直读链（唐六典/唐会要）+宋元明缺口
- 谷雨：legend-guyu-cangjie（仓颉传说分层）
- 立冬：hist-lidong-yingdong-beijiao（迎冬礼·类书转引正史未直读）
- 夏至：hist-xiazhi-diji-sacrifice（祭地三层直读）
- 秋分：hist-qiufen-xiyue-sacrifice（夕月直读链）+ interp-qiufen-zhongqiu-origin-narrative（中秋起源说·contested）
- 冬至：hist-dongzhi-hedong-jiaotian（汉-宋-明贺冬链）+ legend-dongzhi-zhangzhongjing-jiaozi（张仲景传说=legend层）

**Q3 地域/非遗卡（Regional，红线=不得泛化）**——逐卡四要素已入分节：
- 雨水：region-guanghan-yushui-baobaojie（正月十六≠雨水日）
- 春分：region-chunfen-anren-ganfenshe
- 立夏：region-lixia-banshan
- 大暑：region-dashu（送大暑船Ⅹ-68/2021+俞樾原书直读）
- 立秋：region-liqiu 苗族赶秋（2014扩展）
- 霜降：region-shuangjiangjie-tiandeng（壮族霜降节+UNESCO子项身份单源警示）
- 冬至：region-dongzhi-sanmen-jidong
- 处暑：region-chushu-xiangshan-kaiyu（开渔节=1998现代节庆）

**Q4 全球表达 Candidate（全部 status=candidate、consent=pending；逐 ID 可追踪，2026-09-17 F06 补全）**

24 张 GlobalExpression = 23 个批处理节气各 1 张 + 立春 1 张（节分）。分两条轨道处理——**needs-research 轨（16 张批处理 + 立春 1 张 = 17 张，引擎判证据不足，须补直读/收窄断言后才能进入 Decision）**与 **human-review 轨（7 张，证据形态完整，可直接做跨文化定性 Decision）**。candidate ≠ 已核实对应；禁止"等同/外国版本"表述（引擎 global-forced-correspondence 监控中）。

needs-research 轨（补证优先级：标◆的为跨文化定性价值较高项）：

| ID | 节气 | 比较对象 | 阻塞原因（引擎） | 建议动作 |
|---|---|---|---|---|
| ◆[[03_notes/glob-dongzhi-yalda-night|glob-dongzhi-yalda-night]] | 冬至 | Yalda 夜（伊朗） | 唯一直读源为 Wikipedia（第三层） | 直读 UNESCO Yalda 页或权威学术/媒体源 |
| ◆[[03_notes/glob-xiazhi-midsummer|glob-xiazhi-midsummer]] | 夏至 | 欧洲仲夏/St. John''s Eve | search-excerpt 级 | 直读民俗学或国家旅游局级来源 |
| [[03_notes/glob-lixia-beltane|glob-lixia-beltane]] | 立夏 | Beltane/五朔节 | search-excerpt 级 | 同上 |
| [[03_notes/glob-liqiu-lammas|glob-liqiu-lammas]] | 立秋 | Lammas 收获节 | search-excerpt 级 | 同上 |
| [[03_notes/glob-xiaoshu-dog-days|glob-xiaoshu-dog-days]] | 小暑 | 欧洲犬日 | search-excerpt 级 | 直读天文/民俗来源（天狼星偕日升） |
| [[03_notes/glob-mangzhong-june-grain-harvest|glob-mangzhong-june-grain-harvest]] | 芒种 | 六月麦收季 | search-excerpt 级 | 直读收获节民俗来源 |
| [[03_notes/glob-xiaoman-may-rain-grain-fill|glob-xiaoman-may-rain-grain-fill]] | 小满 | 五月雨/灌浆期 | search-excerpt 级 | 直读农谚/农业史来源 |
| [[03_notes/glob-guyu-april-showers|glob-guyu-april-showers]] | 谷雨 | April showers | search-excerpt 级 | 直读英语世界农谚来源 |
| [[03_notes/glob-jingzhe-keichitsu-japan|glob-jingzhe-keichitsu-japan]] | 惊蛰 | 日本啓蟄 | 证据不足 | 直读 NAOJ 啓蟄页（传播系，可复用同 URL 先例） |
| [[03_notes/glob-lidong-samhain-november|glob-lidong-samhain-november]] | 立冬 | Samhain/诸圣节前夜 | 零直读 | 直读民俗学来源 |
| [[03_notes/glob-dashu-doyo-oxday|glob-dashu-doyo-oxday]] | 大暑 | 土用丑日 | search-excerpt 级 | 直读日本历法/民俗来源 |
| [[03_notes/glob-chushu-harvest-festival|glob-chushu-harvest-festival]] | 处暑 | Harvest Festival | search-excerpt 级 | 直读英国民俗来源 |
| [[03_notes/glob-bailu-issa-dew-world|glob-bailu-issa-dew-world]] | 白露 | 一茶露の世 | search-excerpt 级 | 直读俳句文库/学术来源 |
| [[03_notes/glob-shuangjiang-firstfrost-dates|glob-shuangjiang-firstfrost-dates]] | 霜降 | 北美初霜日文化 | 抓取被拒（almanac 系） | 直读 NOAA/园艺推广级来源 |
| [[03_notes/glob-xiaohan-plough-monday|glob-xiaohan-plough-monday]] | 小寒 | Plough Monday | search-excerpt 级 | 直读英国民俗来源 |
| [[03_notes/glob-daxue-sami-snow-knowledge|glob-daxue-sami-snow-knowledge]] | 大雪 | 萨米雪知识 | search-excerpt 级 | 直读 UiT/Septentrio 学术原文（涉真实社群，还须 consent 评估） |
| [[03_notes/glob-setsubun-early-february|glob-setsubun-early-february]] | 立春（试点） | 日本节分 | search-excerpt（试点遗留） | 见立春审核包，同步补直读 |

human-review 轨（7 张，多数已达机构直读级）：

| ID | 节气 | 比较对象 | 备注 |
|---|---|---|---|
| [[03_notes/glob-yushui-usui-east-asia|glob-yushui-usui-east-asia]] | 雨水 | 日本·朝鲜半岛雨水 | NAOJ+学中央研究院双机构直读 |
| [[03_notes/glob-qiufen-shuubun-east-asia|glob-qiufen-shuubun-east-asia]] | 秋分 | 日本秋分·彼岸 | NAOJ 直读 |
| [[03_notes/glob-xiaoxue-shousetsu-east-asia|glob-xiaoxue-shousetsu-east-asia]] | 小雪 | 日本小雪 | NAOJ 直读 |
| [[03_notes/glob-hanlu-kanro-japan|glob-hanlu-kanro-japan]] | 寒露 | 日本寒露 | NAOJ 直读 |
| ◆[[03_notes/glob-chunfen-nowruz|glob-chunfen-nowruz]] | 春分 | Nowruz | un.org 直读；页面内部年代表述不一致已登记 |
| ◆[[03_notes/glob-qingming-nanyang-chinese|glob-qingming-nanyang-chinese]] | 清明 | 南洋华人清明 | 单直读源，涉真实社群表述 |
| ◆[[03_notes/glob-dahan-kanchu-shugen-japan|glob-dahan-kanchu-shugen-japan]] | 大寒 | 日本寒中修行 | 同形异义镜像（大寒=节气/灾害用语） |

> 边界重申：以上全部是 **AI 研究提出的关联候选**（candidate、consent=pending），不是相关社区提交的作品，也不是已核实的跨文化对应；creators 字段中的文化群体/历史作者身份不构成本项目投稿者身份。升级路径：来源直读 → 三要素复核 → 相关社区/跨文化顾问确认。

**Q5 Human Explanation（23+1张，Stage 2，支撑卡 Decision 后再审）**——逐句可追溯审计已随各节气日志留档；审核重点：分布性断言、现代流行措辞、英文机器草稿、跨文化参照句。

**Q6 B 区（Recommended Review，不阻塞）**——共性主题：GB/T 正文待核（各黄经卡）、单源撑 high 的三候卡（建议统一尺度）、机构转引级气候统计、方志级食俗谱系。

---

# 01 立春（lichun）· 试点（不重复入包）

立春沿用试点成果：[[07_research/lichun-human-review-package|立春人工审核包]]（5张 verified-candidate：黄经315°A/B、UNESCO2016、九华立春祭、石阡说春、月令三候）+ [[03_notes/lichun-human-explanation|解释卡]]（15句中13句Supported，S3/S7处置待决）。**该包仍是立春的权威审核入口**，Decision 在该包表格填写。

---

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

---

# 03 惊蛰（jingzhe）· 审核分节

研究摘要：本轮查清了惊蛰的天文定义（黄经345°/3月5-6日，三机构直读互证）、月令三候原文（含注文逐字直读，"鹰化为鸠"确认为古典转化叙事）与春雷叙事的气候边界（初雷南北差约三个月）。最大的坑是"启蛰避讳改名"公案：文献层（名称与次序变化）可直读确证，避景帝讳为学界通说但一手动因文献未读，已按三层组织并列为C级重点审核；其次"吃梨"仅机构汇编层、地域谱系不明。
路由统计：A 4 · B 3 · C 2 · D 1（来自引擎表）；日志：[[07_research/research-jingzhe-batch-log|研究日志]]

## C · 必须人工审核
### hist-jingzhe-qizhe-renaming（HistoricalRecord · risk=high · impact=term）
- Claim：文献层可直读确证"启蛰→惊蛰"及次序往返（《夏小正》启蛰→《淮南子》雷惊蛰（雨水后）→《三统历》正月中→《后汉书》恢复）；两篇直读学术文章均陈述改名系避汉景帝刘启讳（学界通说，一手动因文献未读）；网络细化情节（唐代恢复说等）不采信。
- Exact Evidence（逐字）：《月令七十二候集解》（维基文库直读）："驚蟄，二月節。《夏小正》曰：正月啟蟄，言發蟄也。"《淮南子·天文训》（维基文库直读）："加十五日指寅則雨水，音比夷則；加十五日指甲則雷驚蟄，音比林鐘。"陈广忠（ihchina直读）："其中的'启'字，为了避开汉景帝刘启的'启'字讳，《淮南子·天文训》改为'惊'。"中国历史研究院刊文（直读）："惊蛰本名启蛰，避汉景帝刘启之名讳而改称惊蛰。"
- Source / Type / Access：source-yueling-qishierhou-wikisource（historical/direct-read）、source-huainanzi-tianwenxun-wikisource（historical/direct-read）、source-ihchina-chenguangzhong-ordering（institutional/direct-read）、source-cass-history-jingzhe-renaming（institutional/direct-read）。
- Scope / Period：中国文献传统，先秦至东汉；学术陈述为当代。
- Why Review：改名动因（避讳）只有当代学术文章的一致陈述与用字差异旁证，汉代当世说明动因的一手文献未直读（finding: pending-primary-source）；此为本节气最高风险点，科普语境极易写成定论。
- What We Know / What We Don't Know：知道旧名启蛰、西汉已用惊蛰、次序曾往返；不知道避讳改字的汉代一手记载原文、唐代恢复说真伪、《周髀算经》《周礼注疏》中启蛰存留的原书面貌（本轮经学术文章转引）。
- Recommended Decision（建议，不代决）：确认三层组织合格后按"文献层=事实、通说层=带限定表述"放行；若可补一手文献再升级confidence。
- 链接：[[03_notes/hist-jingzhe-qizhe-renaming|"启蛰"改名"惊蛰"公案]]
- 审核问题：1) "学界通说"的分寸是否恰当（两篇文章能否支撑"通说"措辞）？2) exceptions中四项限制是否足以防止被下游引用成"汉武帝改的名"式简化叙事？3) 是否要求补读《汉书·律历志》原文后再定？4) 两位学者评价层分歧（错序vs有理）的呈现是否中立？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### jingzhe-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释+why_it_matters，10个支撑卡（8本节气+2共享），六环叙事链闭合。
- Exact Evidence（逐字）：一层句"惊蛰是二十四节气中的第三个：太阳到达黄经345°的时刻（公历3月5-6日），古人以春雷惊醒蛰虫、桃花初开为物候标志，把它当作春耕大忙开始的信号。"；改名句"学界通说与避汉景帝名讳有关"（带"汉代一手动因文献尚待核读"限定）。
- Source / Type / Access：无直接来源（解释层），支撑卡见 supporting_knowledge_ids。
- Scope / Period：解释层，无地域断言；初雷句限云南南部/北京两点。
- Why Review：HumanExplanation类型规则强制人工审核（finding: explanation-gated：支撑卡全部未approved）；解释的分寸（避讳"通说"、打小人"商业活动"定位）需人文编辑判断。
- What We Know / What We Don't Know：所有事实句可回溯支撑卡；英文译文质量、面向零背景读者的可读性未验证。
- Recommended Decision（建议，不代决）：Stage 1 知识卡 Decision 后再做 Stage 2 解释层逐句审（沿立春流程）。
- 链接：[[03_notes/jingzhe-human-explanation|惊蛰解释卡]]
- 审核问题：1) 一句话版把"古人以…为物候标志"与"春耕信号"并置是否会让读者以为是天气事件？2) "改过名字的节气"的表述是否越出改名卡证据？3) 初雷两点坐标（云南/北京）是否需要"科普转述"标注？4) 英文草稿可否进入润色？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核
### sci-jingzhe-longitude-345 — 惊蛰=黄经345°/公历3月5-6日，三机构直读互证 · Why: GB/T 33661-2017 正文条款未直读（沿立春同款例外） · [[03_notes/sci-jingzhe-longitude-345|链接]] · Decision：（留空）
### sci-jingzhe-thunder-climate — 初雷南北时差（云南南部1月底/北京4月下旬）与"昆虫听不见雷"解释 · Why: 分布数字转述自机构科普稿，气候观测数据原文未直读 · [[03_notes/sci-jingzhe-thunder-climate|链接]] · Decision：（留空）
### region-hkg-ngokengkiu-daxiaoren — 鹅颈桥打小人四要素+港府"商业活动"定位 · Why: 两源同属港府体系；"驚蟄祭白虎"非遗清单条目页未直读 · [[03_notes/region-hkg-ngokengkiu-daxiaoren|链接]] · Decision：（留空）

## D · Needs Research
- 避讳动因一手文献：需汉代文献或避讳学专著（陈垣《史讳举例》）直读；途径=图书馆电子资源/古籍库。
- GB/T 33661-2017 正文条款：需人工下载PDF核读（在线预览含验证码）。
- 初雷气候统计原始数据：需气象局数据集或气候图集，升级 thunder 卡数字。
- 香港非遗清单"驚蟄祭白虎"条目页直读：确认条目分类与年代。
- 日本啓蟄/72微季节权威来源直读：当前仅Nippon.com摘要级，Candidate卡被引擎判insufficient-evidence。
- 农书证据链（齐民要术/授时通考惊蛰农事）与吃梨地域谱系（山西梨乡传说）：补唐→清链条与方志证据。
- 观田家系年与《全唐诗》点校本异文核对；元稹《咏廿四气诗》惊蛰篇有无核验。
- 三候现代物候验证数据（桃花始花期/黄鹂初鸣现代观测）。

## A · Auto Candidate（仅链接）
- [[03_notes/hist-yueling-jingzhe-pentads|月令惊蛰三候直读]]（high）
- [[03_notes/lit-weiyingwu-guantianjia|韦应物《观田家》]]（high）
- [[03_notes/trad-jingzhe-chili-pears|惊蛰吃梨记录层]]（medium）
- [[03_notes/trad-jingzhe-nongyan-chungeng|惊蛰农谚与春耕动员]]（medium）

---

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

---

# 05 清明（qingming）· 审核分节

研究摘要：本轮查清了清明的天文定义（黄经15°、4月4-6日双机构直读）、三候原文（含非遗网页"萍始生"混排的证伪）、江南春雨的气象统计，并以四点古籍直读（荆楚岁时记寒食条→唐六典假宁令→唐会要开元敕→燕京岁时记）建立寒食-清明融合断代链；非遗锚点（Ⅹ-2，2006第一批）项目页直读确认。最大的坑：非遗网汇编页存在物候混排与释名句归属/文字出入两处质量问题，全部卡片内容已改以古籍直读为准；扫墓由寒食转入清明的宋元明中段文献仍缺。
路由统计：A 7 · B 2 · C 2 · D 0（来自引擎表）；日志：[[07_research/research-qingming-batch-log|研究日志]]

## C · 必须人工审核

### glob-qingming-nanyang-chinese（GlobalExpression · risk=high · impact=global）
- Claim：待核验：新加坡及南洋华人社会延续清明祭扫（扫墓/骨灰塔祭祀/"三宝"祭品；新马印尼社团清理义塚后"上山"扫墓），系清明节随移民传播的海外延续形态。
- Exact Evidence（逐字）："和从前南来的华人一样，现在的新加坡华人还是保留了清明节的传统习俗。……其中最常见的习俗属扫墓，去除杂草，把墓碑清洗干净。……即使在新加坡随着火葬的普及，每逢清明节，人们依然扶老携幼到骨灰塔祭祀，以纪念过世的亲人。"（SCCC 直读）；义塚/"上山"句仅检索摘要。
- Source / Type / Access：source-qingming-sccc-singapore（institutional / direct-read / unverified）+ source-ecnu-qingming-nanyang-leads（cultural / search-excerpt / unverified）。
- Scope / Period：新加坡为中心，及马来西亚、印尼；当代实践，传入年代未核验。
- Why Review：类型为 GlobalExpression（Candidate）；单一直读机构源；"关系"表述（传播延续/同一节日的海外形态）是跨文化边界的关键判断，AI 不得自决。
- What We Know / What We Don't Know：已证新加坡华人清明扫墓与骨灰塔祭祀的当代存在（机构自述）；不知传入年代、新马细则差异、社区对本卡表述的认可。
- Recommended Decision（建议，不代决）：先补读"东西问"原稿与本地权威来源（义山管理机构/会馆）后再审；在此之前保持 candidate。
- 链接：[[03_notes/glob-qingming-nanyang-chinese|南洋华人清明祭扫（Candidate）]]
- 审核问题：1) "传播延续的同一节日"这一定性是否会被误读为对等复制？2) 义塚/"上山"细节是否必须升级为直读后才能保留在 expression 字段？3) 是否需要跨文化顾问/南洋社区确认（vault 规范）？4) 墨西哥亡灵节方向的比较是否另立 interpretation 卡而非并入本卡？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### qingming-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释（一句话/约100字/展开版）表述清明"唯一双身份+寒食融合+江南春雨+祭扫春嬉"的核心叙事，逐句可回溯 supporting_knowledge_ids（9张本节气卡+3张共享卡）。
- Exact Evidence（逐字）：一句话版："清明是二十四节气中唯一同时演变为重大传统节日的成员：太阳到达黄经15°（公历4月4-6日交节），既是春耕春种的时候，也是中国人祭祖扫墓、踏青插柳的日子。"（其余见卡）
- Source / Type / Access：无独立 source（解释层）；全部支撑卡中 2 张 in-review、10 张 draft。
- Scope / Period：面向零前提全球读者；内容跨古今，历史表述均已断代。
- Why Review：类型为 HumanExplanation（Content Gate：支撑卡未 approved 禁止发布）；且展开版末段"随移民传播到南洋等海外华人社会"仅由 Candidate 级全球卡支撑（limitations 已声明）。
- What We Know / What We Don't Know：每句可回溯至支撑卡；不知支撑卡人工审核结果、英文机器译文质量。
- Recommended Decision（建议，不代决）：Stage 2 流程——先完成 Stage 1 知识卡 Decision，再逐句复核解释层；南洋句随 glob 卡一并处置。
- 链接：[[03_notes/qingming-human-explanation|清明解释卡]]
- 审核问题：1) "唯一同时演变为重大传统节日"的"唯一"表述是否接受新华社直读作为唯一级断言来源？2) 展开版"扫墓由此成为清明的核心活动"的地域/群体范围是否需要弱化？3) 南洋半句保留、删除还是等 Candidate 升级？4) 英文机器草稿是否合格？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核
### hist-yueling-qingming-pentads — 《月令七十二候集解》清明三候逐字（定义句+三候+注文）· 引擎检出 evidence-below-confidence：confidence high 但单一直读古籍源（维基文库本，ind=1），版本校勘未做 · 链接：[[03_notes/hist-yueling-qingming-pentads|清明三候]] · Decision：（留空）
### trad-qingming-food — 青团/冷食地域食俗（非遗网专题页直读，地域限定上海/山东/晋南/湖州）· 引擎检出 pending-primary-source：青团历史谱系未直读任何古籍（exceptions 已声明，"清明果"留白）· 链接：[[03_notes/trad-qingming-food|青团与冷食]] · Decision：（留空）

## D · Needs Research
- 扫墓由寒食转入清明的宋元明中段文献：需要《东京梦华录》、宋元方志、明清地方文献的直接条目；建议维基文库+古籍库检索"清明上墓/寒食掃墓"。
- 杜牧《清明》作者归属与系年：需对核《樊川文集》与《千家诗》诸本；若确认争议，建独立 unverified 卡。
- 青团/清明果谱系：需《随园食单》等古籍直读+方志；"明清才流行"检索线索待证。
- 农谚"清明前后，种瓜点豆"的古籍/农书首见与流传地域：查《氾胜之书》《齐民要术》及农谚集。
- 咏廿四气诗组诗（元稹系）：维基文库无；可查敦煌写卷影印或他本，若可用可补第二张文学卡。
- 三候现代物候验证、南洋第二独立源、介休寒食清明习俗子项详情页：均待直读/核验。
- 工程：route.ts 需对损坏 YAML 文件容错（并行批次单文件错误导致全库路由崩溃）。

## A · Auto Candidate（仅链接）
- [[03_notes/sci-qingming-longitude-15|清明天文定义：黄经15°]]（high）
- [[03_notes/sci-qingming-jiangnan-rain|江南春雨气候核验]]（high）
- [[03_notes/hist-qingming-hanshi-merger|寒食清明融合断代链]]（high）
- [[03_notes/region-qingming-national-ich|清明节国家级非遗Ⅹ-2]]（high）
- [[03_notes/trad-qingming-customs|扫墓戴柳春嬉习俗]]（medium）
- [[03_notes/trad-qingming-nongshi|清明农谚]]（medium）
- [[03_notes/lit-dumu-qingming|杜牧《清明》]]（medium）

---

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

---

# 07 立夏（lixia）· 审核分节

研究摘要：本轮查清立夏的天文定义（黄经45°，双机构直读；交节日期三种表述并存，流行"5月5-7日"未获直读支持——最大的坑）、三候原文（《月令七十二候集解》逐字，"立字解见春"与立春卡互证四立命名）、礼制谱系（《礼记·月令》南郊迎夏+《帝京景物略》立夏赐冰双古籍直读）与半山立夏习俗（国家级非遗扩展项目双直读源）。称人习俗按"清代文献（转引级）／当代活态／三国传说（legend，两版本互斥）"三层分卡，杜绝"起源于三国"式因果混入 fact。
路由统计：A 7 · B 2 · C 2 · D 1（本节气卡；另有6张共享卡 human-review-required 属系统级既有卡，不在本包）；日志：[[07_research/research-lixia-batch-log|研究日志]]

## C · 必须人工审核

### legend-lixia-chengren-adou（CulturalFact · risk=high · impact=term）
- Claim：立夏称人的"三国起源"传说至少有孙夫人称阿斗（人民日报2025稿直读叙述）与司马昭称阿斗（中国侨网2008稿，检索摘要级）两个互斥版本，均无三国时期文献依据；人民日报自身提示"传说不同于史实"；可考文献晚至清代（另卡处理）。
- Exact Evidence（逐字）："蜀主刘备与吴王孙权的妹妹联姻后，将儿子阿斗交由孙夫人照顾""每年在立夏这一日给阿斗称体重报平安""这个做法传到民间，逐渐演变为立夏日祈求平安的风俗""传说不同于史实，但通过一些文字记载，也可推测这一习俗至少已有数百年。"（人民日报）；"阿斗受封那天，正是立夏，司马昭当着一群随阿斗来洛阳的蜀汉降臣之面给阿斗称了体重……"（中国侨网，search-excerpt）
- Source / Type / Access：source-people-lixia-chengren（cultural/direct-read）；source-chinaqw-lixia-adou（cultural/search-excerpt）
- Scope / Period：传说层无信史断代；载体为当代媒体（2008/2025）
- Why Review：本节气 Legend-as-Fact 审计重点样本；risk=high（"起源于三国"是最易被 downstream 当史实误用的内容）；司马昭版仅线索级（引擎 finding：pending-primary-source）
- What We Know / What We Don't Know：知：两版传说内容与载体、媒体自身的传说/史实分层意识、非遗网页面无此故事。不知：传说成文最早载体（近代报刊/民国民俗读物）、司马昭版原页全文、流传广度
- Recommended Decision（建议，不代决）：维持 legend 分层与两版本并列；对外引用必须带"民间传说"标识并链接秤人卡（清代文献起点）
- 链接：[[03_notes/legend-lixia-chengren-adou|立夏称人三国传说（legend）]]
- 审核问题：1) 孙夫人版（直读）与司马昭版（线索级）并列是否妥当，还是等原页直读后再收司马昭版？2) 传说卡是否需要压缩叙事细节防整段被摘用？3) "刘禅人物身份属史实、起源断言属传说"的区分句是否随卡发布？4) 民国报刊溯源列入下轮是否必要？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### lixia-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释+why_it_matters，逐句回溯 11 张支撑卡（本节气10张+共享历法卡1张）
- Exact Evidence（逐字）：见卡内三层文本（引擎 explanation-gated：Content Gate，支撑卡未 approved 禁止发布）
- Source / Type / Access：解释层（无独立来源，逐句依赖支撑卡）
- Scope / Period：面向零前提全球读者
- Why Review：HumanExplanation 类型按规则必入 C；解释层含分布性表述（"多数地区18—20℃""以南方为主"，均已归属化为机构口径）与传说标注句（"那是传说不是史实"）
- What We Know / What We Don't Know：知：三层文本逐句可回溯、limitations 六条登记。不知：英文译文质量（机器草稿）、支撑卡全部未经人工审核
- Recommended Decision（建议，不代决）：Stage 1 知识卡 Decision 后再进入 Stage 2 解释层审核（沿立春/谷雨流程）
- 链接：[[03_notes/lixia-human-explanation|立夏解释卡]]
- 审核问题：1) 日期表述"5月5日前后（常见5月5日或6日）"是否采信（对应 B 区黄经卡的冲突裁定）？2) "按气象机构口径多数地区尚未入夏"的归属化措辞是否足以放行分布句？3) 一句话版"国家级非物质文化遗产"（不提UNESCO）是否准确传达半山身份？4) 英文 one_sentence/summary 的 "national intangible heritage" 译法复核？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核
### sci-lixia-longitude-45 — 黄经45°双机构直读+紫金山天文台年历口径 · Why：交节日期三种表述并存（"5月5日或6日"/"5月4-6日"/流行"5月5-7日"无直读支持），GB/T 33661-2017 正文未读（引擎 finding：pending-primary-source），日期口径需人工统一 · 链接：[[03_notes/sci-lixia-longitude-45|立夏天文定义]] · Decision：（留空）
### sci-lixia-vs-meteorological-summer — 天文夏≠气象夏三源直读一致 · Why：行业标准 QX/T 152-2012 原文未直读；"全国大部分地区18—20℃"等南北分布表述为机构概括口径（引擎 finding：pending-primary-source） · 链接：[[03_notes/sci-lixia-vs-meteorological-summer|立夏与气象入夏]] · Decision：（留空）

## D · Needs Research
- 立夏题名诗：陆游《立夏》（"槐柳阴初密"篇）全诗直读与系年；赵友直《立夏》"四时天气促相催"底本（维基文库均无作品页）
- 《清嘉录》《苏州府志》立夏条原书直读（称人/食俗的清代原文与地域，现为人民日报转引级）
- 疰夏概念的文献史；立夏食俗（吃蛋/三新）的古籍出处链
- 三候现代物候观测（蝼蝈即蛙类的始鸣观测、蚯蚓、王瓜）；生态维度整体缺失
- 立夏交节时刻逐年权威数据（《中国天文年历》入库）；GB/T 33661-2017 与 QX/T 152-2012 正文直读（共享待办）
- 闽湘赣等地立夏食俗、北方立夏实践的地域扩展直读源；乌米饭多地域谱系（含四月初八系统）
- Beltane 词条与权威民俗学来源直读；东亚"立夏"同名传播形态（same-time 方向 Candidate）
- 半山立夏节首届年份（"2012"说）与UNESCO申报文本中半山的位置；娘娘庙/泥猫南宋说的方志依据
- 视觉/声音素材授权（小荷尖角、蜻蜓、大木秤、冰盏、蝼蝈鸣/蛙鸣）

## A · Auto Candidate（仅链接）
- [[03_notes/hist-yueling-lixia-pentads|立夏三候原文]]（high）
- [[03_notes/hist-lixia-yingxia-qibing|南郊迎夏与立夏赐冰]]（high）
- [[03_notes/region-lixia-banshan|半山立夏习俗（国家级非遗）]]（high）
- [[03_notes/trad-lixia-chengren|立夏秤人]]（medium）
- [[03_notes/trad-lixia-dan-sanxin|吃蛋/斗蛋/尝三新/乌米饭]]（medium）
- [[03_notes/trad-lixia-nongshi|"立夏看夏"农事与农谚]]（medium）
- [[03_notes/lit-lixia-yangwanli-xiaochi|杨万里《小池》]]（medium）

---

# 08 小满（xiaoman）· 审核分节

研究摘要：本轮查清小满的天文定义（黄经60°、5月20-22日，非遗网+新华社双直读）、三候原文（《月令七十二候集解》逐字，含"麦秋=成熟"注文义）、"小满动三车"的古籍锚点（《古今图书集成·岁功典》卷045嘉兴县条，纠正了清嘉录/吴郡岁华纪丽的线索猜测）与盛泽小满戏（文旅部+文化报双直读，建年1827/1840冲突待地方志）。最大的坑是"人生最好是小满"式现代阐释：古籍只有"物至于此小得盈滿"的物候定义，"满而不损/独缺大满"哲学是2015年以来的当代文本——本轮以命名事实卡与阐释卡互为反锚点，两层物理隔离。
路由统计：A 7 · B 1 · C 4 · D 1（本节气卡；另有6张共享卡 human-review-required 属系统级既有卡，不在本包）；日志：[[07_research/research-xiaoman-batch-log|研究日志]]

## C · 必须人工审核

### interp-xiaoman-modern-philosophy（CulturalFact · risk=high · impact=term）
- Claim："小满蕴含中庸/知足哲学"是当代媒体与学者的文化阐释（一手样本不早于2015年），不是古籍命题；其论证方式是用儒家格言（满招损/物极必反）回填命名动机；古文献未回答"为何无大满"。
- Exact Evidence（逐字）："小满者，满而不损也，满而不盈也，满而不溢也。……有小满却独缺大满。人生小满，足矣。"（中国文化报2015，非遗网转载页直读）；"华东师范大学民俗学研究所教授田兆元说，小满的命名体现了哲学智慧。……小满，不疾不徐，虽为节气，亦是人生。"（新华社2024-05-20直读）
- Source / Type / Access：source-ihchina-xiaoman-zheli-2015（cultural/direct-read）；source-xinhua-xiaoman-2024（institutional/direct-read）
- Scope / Period：当代中国媒体/学界表述（2015、2024两个样本）；非地域民俗、非古籍
- Why Review：本节气 Modern-as-Ancient 审计重点样本；该阐释传播力极强、倒灌风险最高（"古人以小满告诫世人"式误写）；epistemic=interpretation 的边界需人工确认表述妥当性
- What We Know / What We Don't Know：知：两份一手文本逐字、阐释内容的完整表述、序列无大满是可核验事实。不知：该阐释的最早文本（是否早于2015）、古文献是否存在对命名动机的任何直接讨论
- Recommended Decision（建议，不代决）：维持 interpretation 分层与命名卡互链；对外文案强制"现代阐释"标注（卡内红线）
- 链接：[[03_notes/interp-xiaoman-modern-philosophy|小满现代阐释（interpretation）]]
- 审核问题：1) "当代阐释"的时间起点（2015）是否需要在命题中弱化为"本轮所见最早样本"？2) 卡内"格言真≠归因真"辨析是否足以防倒灌，还是需要更显著的提示框？3) 田兆元身份表述（华东师范大学民俗学研究所教授）是否随卡发布？4) 是否需要补检索（报刊数据库）找更早样本后才可定稿？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### trad-xiaoman-sanche-customs（Tradition · risk=high · impact=term）
- Claim："动三车"农谚有清代类书直读；祭车神（白龙车神、白水泼田）与海宁抢水仪式细节只见于现代机构汇编（2015/2017/2018三文本高度一致、疑同源、均无原始出处）。
- Exact Evidence（逐字）："祭三神"指的是祭祀掌管这三车的神灵……相传，"车神"为白龙。……祭品中会有一杯白水，祭拜时将白水泼入田中，有祈愿水源涌旺的意思。……（抢水）这一习俗流行于浙江海宁一带……众水车一齐踏动，把河水引灌入田。（非遗网《小满农俗》2018直读；文化报2015"抢水"节文字几乎逐句相同）
- Source / Type / Access：source-ihchina-xiaoman-nongsu、source-ihchina-xiaoman-feature（均 institutional/direct-read）、source-ihchina-xiaoman-zheli-2015（cultural/direct-read）
- Scope / Period：机构记录限江南（抢水特指浙江海宁）；仪式断代未标注
- Why Review：活态民俗+民间信仰（车神/白龙）内容，risk=high；三机构文本疑同源，独立交叉不足；仪式细节最易被 downstream 写成"古俗定论"
- What We Know / What We Don't Know：知：机构记录的仪式细节全貌、与古籍农谚的传承链。不知：仪式的方志源头、白龙传说的出处、三文本的共同源头
- Recommended Decision（建议，不代决）：维持"古籍层/汇编层"分卡引用；文案使用须带"现代机构记录+相传"标识
- 链接：[[03_notes/trad-xiaoman-sanche-customs|祭车神与抢水]]
- 审核问题：1) "疑同源"判断是否需要在正文更显著标注？2) 白龙/泼白水等仪式细节是否允许进入对外内容（带标识），还是仅限知识层？3) 海宁抢水是否有可核的地方文献（海宁州志）值得下轮补证？4) 与古籍卡（hist-gjts-xiaoman-sanche）的分工边界是否清晰？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### trad-xiaoman-qican（Tradition · risk=high · impact=term）
- Claim：江浙小满蚕俗分三层——古籍方志层（海宁蚕月闭户停讼，类书直读，未言小满日祭祀）、"相传"层（小满为蚕神诞辰、祈蚕节，机构汇编无古籍出处）、具名史实层（盛泽先蚕祠道光年间建、小满演戏三天，"据记载"且建年两说）。另有清代皇室亲蚕礼转述（原典未读）。
- Exact Evidence（逐字）："四月為蠶月，育蠶之家各閉戶，親鄰無得輕入官府，暫停訟，謂之「放蠶忙」，浙西皆然。"（《古今图书集成》卷045直读）；"相传小满是蚕神生日……举行'祈蚕节'"（非遗网《小满农俗》直读）；"据记载，清道光七年（1827年），江南盛泽丝业公所在江苏吴江兴建了先蚕祠……小满前后三天由丝业公所出资，筵请各班登台唱大戏。"（文化报2015直读）
- Source / Type / Access：source-gjts-suigongdian-045（historical/direct-read）、source-ihchina-xiaoman-nongsu（institutional/direct-read）、source-ihchina-xiaoman-zheli-2015（cultural/direct-read）
- Scope / Period：江浙；蚕月条为清代类书汇录方志；祈蚕节断代无据；盛泽建年1827/1840冲突
- Why Review：引擎 finding pending-primary-source（蚕神诞辰=小满的古籍出处、先蚕祠方志均未读）；"蚕神诞辰定于小满"最易被写成"自古如此"；三层证据的分层表述需人工确认无滑移
- What We Know / What We Don't Know：知：三层文本与各自证据等级、盛泽演戏有实体祠与官方页。不知：蚕神诞辰=小满的文献源头、亲蚕礼原典、建年定谳
- Recommended Decision（建议，不代决）：维持三层分层；"相传""据记载"措辞保留；下轮补蚕书/方志溯源
- 链接：[[03_notes/trad-xiaoman-qican|祈蚕节与蚕神诞辰]]
- 审核问题：1) "相传"层是否允许出现在解释层（当前解释层仅保留动三车+盛泽，是否过轻或恰当）？2) 亲蚕礼转述段是否应删除直至原典直读？3) 蚕神身份谱系（嫘祖/西陵氏/蚕花娘娘）是否需要在本卡内初判？4) 与盛泽 region 卡的分工是否清晰？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### xiaoman-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释+why_it_matters，全部回溯 supporting_knowledge_ids（13张：本节气11张+2共享）
- Exact Evidence（逐字）：见卡内三层文本（引擎 explanation-gated：Content Gate，支撑卡未 approved 禁止发布）
- Source / Type / Access：解释层（无独立来源，逐句依赖支撑卡）
- Scope / Period：面向零前提全球读者
- Why Review：HumanExplanation 类型按规则必入 C；解释层含现代阐释段（已显式标注"当代阐释"）与机构汇编层习俗（有意轻描）；英文为机器草稿
- What We Know / What We Don't Know：知：三层文本逐句可回溯、无分布性短语（自查）。不知：英文译文质量、支撑卡全部未经人工审核
- Recommended Decision（建议，不代决）：Stage 1 知识卡 Decision 后再进入 Stage 2 解释层审核（沿立春/谷雨流程）
- 链接：[[03_notes/xiaoman-human-explanation|小满解释卡]]
- 审核问题：1) 一句话版"名字形容夏熟作物的籽粒开始饱满、将熟未熟"是否足够防"雨水义"误读（summary 已补南方雨水义）？2) 展开版"中文互联网上流行"的表述是否合适（该说法也见于传统媒体）？3) 现代阐释段的"需要说明："插入式标注是否清晰？4) summary 中"江浙相传小满为蚕神诞辰"的"相传"保留是否足够？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核
### region-shengze-xiaoman-xi — 盛泽小满戏文旅部+文化报双直读 · 引擎 finding：pending-primary-source（先蚕祠建年1827/1840两说冲突、演戏三天出处为"据记载"、省级非遗身份仅检索摘要）；risk=medium/impact=regional 按谷雨先例归 B · 链接：[[03_notes/region-shengze-xiaoman-xi|盛泽小满戏]] · Decision：（留空）

> 附注：[[03_notes/hist-gjts-xiaoman-sanche|"动三车"古籍锚点]] 初次路由为 human-review（finding evidence-below-confidence），confidence high→medium 后复跑转 auto-candidate、status 回 draft，移出 B 区；其原始方志层（何部《浙江志书》/修年）未核的问题保留在 Needs Research。

## D · Needs Research
- "为何无大满"的古文献直接讨论：清代札记/《月令辑要》/类书节气总论人工检索；现代阐释最早文本溯源（报刊数据库，是否早于2015）
- 祈蚕节与"小满=蚕神诞辰"的古籍源头：蚕书（《吴兴蚕书》类）/吴越方志；嫘祖-西陵氏-蚕花娘娘谱系
- 先蚕祠建年定谳（吴江县志/盛泽镇志）；"演戏三天/祥瑞戏/私死-丝谐音禁忌"原始出处；省级非遗"小满习俗"项目页直读
- 祭车神/白龙车神/海宁抢水的方志源头；非遗网三机构文本共同源头考
- 三候现代物候观测（中国物候观测网/竺可桢《物候学》：苦菜/葶苈/小麦）
- 干热风数值指标与分区统计（气象行业标准/国家气候中心直读）
- 翁卷《乡村四月》作者异说校勘（《西巖集》四库本 vs 《千家诗》署范成大）；"白满川"旧注
- 《月令》"物至于此/物致于此"异文版本源流；芒种定义句直读（下一节气）
- 农谚逐条方志溯源（"小满不下黄梅偏少"等）；南方"满=雨水"义的文献源头
- 中欧五月雨农谚原句直读（德语/捷克语农谚集）；北美"A wet May"谚语如纳入需先补 search-excerpt 源卡
- 视觉/声音素材授权（麦穗、水车/丝车、蚕茧、缫丝声、子规啼）
- GB/T 33661-2017 正文直读（继承立春待办）

## A · Auto Candidate（仅链接）
- [[03_notes/sci-xiaoman-longitude-60|小满天文定义：黄经60°]]（high）
- [[03_notes/hist-yueling-xiaoman-pentads|小满三候原文]]（high）
- [[03_notes/hist-xiaoman-naming-xiaodeyingman|小满命名：定义句与无大满序列事实]]（high）
- [[03_notes/sci-xiaoman-grainfill-dryhotwind|灌浆期与干热风]]（medium）
- [[03_notes/hist-gjts-xiaoman-sanche|"动三车"古籍锚点]]（medium）
- [[03_notes/trad-xiaoman-nongshi|小满农事、农谚与食苦菜]]（medium）
- [[03_notes/lit-wengjuan-xiangcunsiyue|翁卷《乡村四月》]]（medium）

---

# 09 芒种（mangzhong）· 审核分节

研究摘要：本轮查清芒种的天文定义（黄经75°、6月5-7日，双机构直读）、三候原文（《月令七十二候集解》逐字，并发现非遗网页"鹏始鸣"系"鵙"之讹）、命名谱系（月令双关定义句+宋人《嬾真子錄》"说者不一"异说）、"三夏"与梅雨的古今双轨（古籍"逢壬入梅"规则 vs 国家气候中心"常年6月14日"监测，分卡不混排）、饯花神（《红楼梦》程甲本第二十七回逐字直读，按"文学文本≠风俗志"分层，非遗网亦称此俗今已不存）与陆游《时雨》。最大的坑有两个：一是机构页的讹字（"鹏/鵙"）与无出处断代（安苗"始于明初"），二是饯花神最易被下游写成"清代通行风俗"。另确认非遗网 solar_details 编号在45之后断裂，芒种实为6969.html。
路由统计：A 6 · B 2 · C 2 · D 1（本节气卡；另有6张共享卡 human-review-required 属系统级既有卡，不在本包）；日志：[[07_research/research-mangzhong-batch-log|研究日志]]

## C · 必须人工审核

### hist-mangzhong-jianhuashen（HistoricalRecord · risk=high · impact=term）
- Claim："芒种饯花神"的可确证记载是文学文本：《红楼梦（程甲本）》第二十七回开篇（"至次日乃是四月二十六日，原來這日未時交芒種節。尙古風俗：凡交芒種節的這日，都要設擺各色禮物，祭餞花神……"及轿马旌幢描写）；这是18世纪小说转述，不是风俗志记载；非遗网亦以本回为该俗唯一依托并明言"此习俗今已不存"；清代实际流行地域与阶层无风俗志级证据。
- Exact Evidence（逐字）："至次日乃是四月二十六日，原來這日未時交芒種節。尙古風俗：凡交芒種節的這日，都要設擺各色禮物，祭餞花神，言芒種一過，便是夏日了，衆花皆卸，花神退位，須要餞行。閨中更興這件風俗……"（程甲本直读）；"此习俗今已不存，但曹雪芹在《红楼梦》第二十七回中提到了芒种送花神"（非遗网专题页）。
- Source / Type / Access：source-wikisource-hongloumeng-chengjia-ch27（historical/direct-read，维基文库程甲本）；source-ihchina-mangzhong-feature（institutional/direct-read）
- Scope / Period：18世纪小说叙事场景；程甲本1791年刊行；不构成地域风俗证据
- Why Review：本节气最易误用样本——"小说记载"与"风俗史"的边界；risk=high（下游易写成"清代人芒种都送花神/自古有之"）；程甲本与通行本虚字差异待校
- What We Know / What We Don't Know：知：一手文本逐字、非遗网"今已不存"表述、引文互证。不知：清代实俗是否存在（风俗志未排查）、脂本系统异文、红学界对该俗实存基础的讨论
- Recommended Decision（建议，不代决）：维持"文学文本记载"定位与三红线；文案使用必须带"小说描写"标识并链接本卡
- 链接：[[03_notes/hist-mangzhong-jianhuashen|红楼梦饯花神（文学层）]]
- 审核问题：1) "仅见小说"判定是否维持（《清嘉录》《燕京岁时记》《帝京岁时纪胜》五月卷需人工排查）？2) 叙事日期"四月二十六日未时交芒种"是否写入命题（现仅在证据区）？3) 程甲本/脂本异文校勘策略？4) 是否需要红学二手研究作为第二层？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### mangzhong-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释+why_it_matters，逐句回溯 supporting_knowledge_ids（10张：本节气9张+共享历法角色卡）
- Exact Evidence（逐字）：见卡内三层文本（引擎 explanation-gated：Content Gate，支撑卡未 approved 禁止发布）
- Source / Type / Access：解释层（无独立来源，逐句依赖支撑卡）
- Scope / Period：面向零前提全球读者
- Why Review：HumanExplanation 类型按规则必入 C；解释层含"常年6月14日入梅"（新闻转述口径）与安苗等单源习俗句（已按"机构汇编页记载"粒度表述）
- What We Know / What We Don't Know：知：三层文本逐句可回溯，无分布性短语。不知：英文译文质量（机器草稿）、支撑卡全部未经人工审核
- Recommended Decision（建议，不代决）：Stage 1 知识卡 Decision 后再进入 Stage 2 解释层审核（沿立春流程）
- 链接：[[03_notes/mangzhong-human-explanation|芒种解释卡]]
- 审核问题：1) 一句话版"麦收与插秧在这一节气里同时赶到"是否足够准确（"同时"是否会被读成同日完成）？2) summary 中《红楼梦》句的篇幅去留？3) "常年6月14日前后入梅"是否降为"六月中期"以减新闻源依赖？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核
### hist-mangzhong-naming — 命名双关定义句三源直读（月令+广群芳谱+非遗网）；引擎 finding：pending-primary-source（《嬾真子錄》原书未直读，现经清代类书转引）· Why：宋人异说引文的转引层级+《周礼》注未核 · 链接：[[03_notes/hist-mangzhong-naming|芒种命名]] · Decision：（留空）
### hist-mangzhong-rumei-chumei — 入梅出梅规则双类书直读、《風土記》句两书互证；引擎 finding：pending-primary-source（《風土記》原书未直读）· Why：历注口径与现代气象监测分立的表述是否到位 · 链接：[[03_notes/hist-mangzhong-rumei-chumei|古籍入梅出梅]] · Decision：（留空）

## D · Needs Research
- 饯花神风俗志排查：《清嘉录》《燕京岁时记》《帝京岁时纪胜》五月卷有无花神条（决定"仅见小说"判定）
- 安苗第二源与"始于明初"断代出处（皖南方志/安徽省文旅）；打泥巴仗第二源（黔东南州志/侗学研究）；两者非遗名录身份（ihchina project_details）
- 陆游《时雨》与《剑南诗稿》卷次校勘（Wikisource 有《劎南詩槀》四库本）；系年"庆元说"出处
- 《嬾真子錄》《風土記》原书直读（核类书转引文字）
- 三候现代物候观测（螳螂孵化/伯劳鸣期/百舌静默；"反舌"物种争议）
- 梅雨监测规范直读（国家气候中心入梅判定标准，替代新闻转述）
- "芒种芒种，连收带种"异文谱系与最早收录文献（vs"忙收忙种"）
- 芒种日期范围"6月5-7日"第二逐字机构源；GB/T 33661-2017 正文直读（继承待办）
- 全球比较第二方向与现有 Candidate 直读（Ercoli 2014/JRC/Britannica 页面均未读）
- 视觉/声音素材授权（麦田、梅雨、伯劳鸣声、轿马旌幢意象）

## A · Auto Candidate（仅链接）
- [[03_notes/sci-mangzhong-longitude-75|芒种天文定义：黄经75°]]（high）
- [[03_notes/hist-yueling-mangzhong-pentads|芒种三候原文（含讹字校勘）]]（high）
- [[03_notes/hist-mangzhong-naming|芒种命名：古籍定义与宋人异说]]（high）
- [[03_notes/sci-mangzhong-sanxia-meiyu|三夏大忙与梅雨窗口]]（high）
- [[03_notes/trad-mangzhong-nongshi|芒种农事与农谚]]（medium）
- [[03_notes/lit-mangzhong-luyou-shiyu|陆游《时雨》]]（medium）
- [[03_notes/trad-mangzhong-anmiao-zhumei|安苗·打泥巴仗·煮梅]]（low，单源机构直读）

---

# 10 夏至（xiazhi）· 审核分节

研究摘要：本轮查清夏至的天文定义（黄经90°、6月21-22日、直射北回归线，非遗网/中国天气网/新华社三直读）、三候原文（《月令七十二候集解》逐字，"蜩/蝉"异文登记）、"一个真最三个假最"（白昼最长但非日出最早/日落最晚/全年最热，含真太阳时机制与2026年例证）与夏至祭地礼制谱系（《史记》"夏日至，祭地祗"→明皇甫汸方丘诗题→清会典"著為定例"三层直读，配燕京岁时记"夏至陰氣起，故不賀"确立官方祀典与民间不贺的双层结构）。最大的坑有两个：一是非遗网对《史记》的转写措辞（"夏至日，祭地"）与原书不同，且三候"蝉始鸣"采异文读法——全部回原书直读校准；二是"冬至饺子夏至面"今语与清末京师谚原文"冬至餛飩，夏至麵"的漂移，已作谱系警示。另查明非遗网专题页编号在立夏后切换为 6968+ 段（夏至=6970）。
路由统计：A 6 · B 1 · C 1 · D 1（本节气卡；另有6张共享卡 human-review-required 属系统级既有卡，不在本包）；日志：[[07_research/research-xiazhi-batch-log|研究日志]]

## C · 必须人工审核

### xiazhi-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释+why_it_matters，全部回溯 supporting_knowledge_ids（10张：本节气8张+共享2张）
- Exact Evidence（逐字）：见卡内三层文本（引擎 explanation-gated：Content Gate，支撑卡未 approved 禁止发布）
- Source / Type / Access：解释层（无独立来源，逐句依赖支撑卡）
- Scope / Period：面向零前提全球读者
- Why Review：HumanExplanation 类型按规则必入 C；解释层含 Candidate 级全球参照句（欧洲仲夏/南半球冬至，已在 limitations 标注）与单源机制表述（真太阳时，仅现象级陈述）
- What We Know / What We Don't Know：知：三层文本逐句可回溯、分布性短语自查通过。不知：英文译文质量（机器草稿）、支撑卡全部未经人工审核
- Recommended Decision（建议，不代决）：Stage 1 知识卡 Decision 后再进入 Stage 2 解释层审核（沿立春/谷雨流程）
- 链接：[[03_notes/xiazhi-human-explanation|夏至解释卡]]
- 审核问题：1) 一句话版"长期是中国国家祀典中祭地的日子"的时间跨度表述是否过宽（证据链为周制理想+明清，唐宋中缺）？2) summary 中"清代把夏至祭地写入国家祀典定例"是否需括注顺治十四年？3) 展开版"南半球的秘鲁库斯科在同一日期庆祝的则是他们的冬至"（Candidate 级）保留还是删除？4) "吃过夏至面，一天短一线"进入 why 段是否需要谚语出处标注？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核
### hist-xiazhi-diji-sacrifice — "夏至祭地"三层直读谱系（史记→明方丘诗题→清会典定例）+民间不贺对照 · Why：引擎 finding=pending-primary-source（地坛建置与唐宋中间环节文献未直读，已在 exceptions 声明）；"地坛=方泽坛"对应关系留白待补证 · 链接：[[03_notes/hist-xiazhi-diji-sacrifice|夏至祭地谱系]] · Decision：（留空）

## D · Needs Research
- 地坛建置文献：《春明夢餘錄》卷16维基文库为空页；需《日下旧闻考》《大清会典图》或地坛管理方官方资料人工核读（"地坛=方泽坛、安定门外嘉靖九年建"级断言目前无直读）
- 《帝京岁时纪胜》《清嘉录》夏至条：维基文库无书（API 检索无命中），需点校本/影印本人工核读——"清代北京夏至祀典的岁时记记述"缺口
- 唐宋夏至祭地中间环节：《大唐开元礼》、宋北郊议等礼典文献
- "夏至尝黍"与"夏至曾是民间重大节日（夏节）"流行说法：零一手文献，禁止入卡直至直读
- 三候现代物候验证：鹿角脱落期、蝉初鸣日期、半夏出苗期的观测数据（中国物候观测网/竺可桢《物候学》）
- 午后雷阵雨/江淮梅雨的分区气候统计（气象局/国家气候中心直读）
- 欧洲仲夏与 Inti Raymi：直读 en.wikipedia 词条+各国权威民俗来源后核验 Candidate（glob-xiazhi-midsummer 现仅 search-excerpt）
- 真太阳时/平太阳时机制独立天文源（现仅新华社2026单源）
- 农谚农书溯源：《农政全书》占候、《豹隐纪谈》"夏至谚"（《古今图书集成》夏至部著录，正文未读）
- 三伏干支机制专题（建议小暑波次建卡后回链 trad-xiazhi-nongshi）

## A · Auto Candidate（仅链接）
- [[03_notes/sci-xiazhi-longitude-90|夏至的天文定义：黄经90°]]（high）
- [[03_notes/sci-xiazhi-longest-day|一个真"最"与三个假"最"]]（high）
- [[03_notes/hist-yueling-xiazhi-pentads|夏至三候原文]]（high）
- [[03_notes/trad-xiazhi-mian|冬至馄饨夏至面]]（medium）
- [[03_notes/trad-xiazhi-nongshi|农事农谚与数伏入口]]（medium）
- [[03_notes/lit-xiazhi-beichi|韦应物《夏至避暑北池》]]（medium，引擎同发布方口径降级后入 A）

---

# 11 小暑（xiaoshu）· 审核分节

研究摘要：本轮查清小暑的天文定义（黄经105°、公历7月6-8日、新华社/国家林草局/非遗网专题页6971三独立直读）、三候原文与三方异文（月令集解"居壁/始击"vs 机构稿"居宇/始鸷"vs 时训解"乃学习"，并获《诗经·七月》"八月在宇"互文线索）、三伏机制（本节气知识锚："夏至三庚数头伏"干支计日，新华网2024专家稿与《古今图书集成》伏日部古今互证，2022/2023/2024三年入伏日均落小暑期内）、伏日起源（《史记》秦德公二年初伏+庚金伏藏解释传统）、六月六晾晒（《燕京岁时记》"抖晾衣服书籍"，"晒伏"之名与文献的差距）、徐州伏羊食俗（国家级非遗Ⅹ-179区域锚点）。最大的坑有三个：一是非遗网页面体系（brief 线索 50.html 实为三门祭冬，真正专题页 6971 三次 504 后经 web_reader 补读，"画"说资讯页 25570 与之同源需分立源卡）；二是食新地域范围两稿打架（2022"我国各地"vs 2024"南方"，取从窄）；三是三首候选诗在维基文库均无可直读页，文学卡以新华社引文建卡、元稹组诗仍无文本。
路由统计：A 7 · B 3 · C 1 · D 1（本节气卡；另有6张共享卡 human-review-required 属系统级既有卡，不在本包）；日志：[[07_research/research-xiaoshu-batch-log|研究日志]]

## C · 必须人工审核

### xiaoshu-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释+why_it_matters，全部回溯 supporting_knowledge_ids（14张：本节气11张+共享3张）
- Exact Evidence（逐字）：见卡内三层文本（引擎 explanation-gated：Content Gate，支撑卡未 approved 禁止发布）
- Source / Type / Access：解释层（无独立来源，逐句依赖支撑卡）
- Scope / Period：面向零前提全球读者
- Why Review：HumanExplanation 类型按规则必入 C；解释层含"实例+机制推算"级表述（入伏落小暑期内，已用"通常/常"弱化）与科普稿概述级气温数值（南方28-30℃）；三候异文首次出现处仅括注未展开
- What We Know / What We Don't Know：知：三层文本逐句可回溯、分布性短语自查通过（南方/清末北京/徐州/鲁南苏北均限定）。不知：英文译文质量（机器草稿）、支撑卡全部未经人工审核
- Recommended Decision（建议，不代决）：Stage 1 知识卡 Decision 后再进入 Stage 2 解释层审核（沿立春/夏至流程）
- 链接：[[03_notes/xiaoshu-human-explanation|小暑解释卡]]
- 审核问题：1) 一句话版"其后不久……进入一年中最热的三伏天"是否需要再加"中国传统认为"限定？2) summary"梅雨结束、雷暴增多"未分区域（证据是江淮/华南分区），是否改为"江淮出梅、华南雷暴渐多"？3) 展开版"三重时间系统叠合"收束段是解释性框架还是可保留的文化概括？4) 秦德公"公元前676年"系年是否保留（通行系年未独立核验）？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核
### sci-xiaoshu-longitude-105 — 小暑=黄经105°、公历7月6-8日（第11个节气、夏季第5个） · Why：引擎 finding=pending-primary-source（GB/T 33661-2017 正文未直读，继承立春待办；日期范围两口径"6-8日 vs 7-8日"已在 exceptions 并集处理） · 链接：[[03_notes/sci-xiaoshu-longitude-105|黄经105°定义]] · Decision：（留空）
### region-xiaoshu-xuzhou-fuyang — 徐州伏羊食俗四要素（Ⅹ-179/2021第五批/初伏起点/六月六尝新节） · Why：引擎 finding=pending-primary-source（"据历代地方志载"的方志原文与《汉书》"伏日诏赐从官肉"未直读，按机构转述对待） · 链接：[[03_notes/region-xiaoshu-xuzhou-fuyang|徐州伏羊食俗]] · Decision：（留空）
### lit-yangwanli-xiaoshu-zhuiliang — 杨万里《夏夜追凉》全诗（新华社2024稿引文）+"倏忽温风至"元稹线索不建卡 · Why：引擎 finding=pending-primary-source（诗文本未校《诚斋集》；元稹作者归属仅检索摘要级，卡内已明确不标作者） · 链接：[[03_notes/lit-yangwanli-xiaoshu-zhuiliang|杨万里夏夜追凉]] · Decision：（留空）

## D · Needs Research
- 元稹《咏廿四气诗·小暑六月节》全诗文本：敦煌写本系统校录本/影印件人工核读（维基文库无组诗页，wave1+本轮双确认；机构稿高频引用"倏忽温风至"而不署名的现象值得记入引用文化研究）
- 《帝京岁时纪胜》《清嘉录》六月条：维基文库无书（API 检索无命中），需点校本人工核读——"晒伏"之名的文献链与六月六南方形态（"晒红绿"类谚语）
- 三候现代物候验证：蟋蟀移居墙垣期、鹰行为观测数据（中国物候观测网/竺可桢《物候学》）
- 出梅的气象学判据与江淮逐年出梅日期（气象局/国家气候中心直读）；小暑气温数值的气候统计权威源替换
- 《史记》秦本纪/封禅书伏日条中华书局点校本逐字核对；《阴阳书》《历忌释》辑本溯源
- 徐州历代方志中伏羊/尝新节/六月六条目；徐州伏羊节当代活动事实核查
- 犬日（Dog Days）直读核验：en.wikipedia 词条+天文馆/古典学权威源（偕日升定义、diēs caniculārēs、传统时段），核验后 glob-xiaoshu-dog-days 方可脱离 Candidate
- GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）
- 2025/2026年入伏日权威口径（本轮检索摘要称2026年7月15日，未直读不入卡）
- 湘西苗族封斋（小暑前辰日至小暑后巳日）、"小暑黄鳝赛人参"、蜜汁藕等食俗的文献溯源（本轮仅机构汇编级，未建独立卡）

## A · Auto Candidate（仅链接）
- [[03_notes/hist-yueling-xiaoshu-pentads|小暑三候原文（含三方异文）]]（high）
- [[03_notes/sci-xiaoshu-sanfu-gengday-mechanism|三伏机制：夏至三庚数头伏]]（high）
- [[03_notes/hist-xiaoshu-furi-origins|伏日起源与庚金伏藏]]（high）
- [[03_notes/hist-xiaoshu-liuyueliu-sunning|六月六晾晒（燕京岁时记）]]（high）
- [[03_notes/sci-xiaoshu-climate-heat-humid|小暑气候：高温高湿出梅入伏]]（medium）
- [[03_notes/trad-xiaoshu-nongshi|农事农谚与上蒸下煮]]（medium）
- [[03_notes/trad-xiaoshu-shixin|食新：地域范围与两稿分歧]]（medium）

---

# 12 大暑（dashu）· 审核分节

研究摘要：本轮查清大暑的天文定义（黄经120°、公历7月22-24日、第十二个且夏季最后一个节气，非遗网专题页6972+新华社2022稿双独立直读）、三候原文（月令"大暑，六月中。解見小暑"+腐草为萤/土润溽暑/大雨时行逐字注文；最大防幻觉发现=机构稿流传的"今则热气犹大也"定义句在原书中不存在，系小暑条训诂的嫁接改写）、"腐草为萤"的古今双层（古籍卡只记文本，现代昆虫学由中科院+林草局两机构直读支撑，分层红线=不写成古人已有昆虫学、不嘲笑化生说）、中伏叠合与温湿指数（"冷在三九，热在中伏"，气象局30余省会城市1991-2020统计为机构转述级）、非遗锚点送大暑船（项目页Ⅹ-68/2021第五批扩展项目名录直读+俞樾《右台仙馆笔记》卷12原书直读"同治中…癘疾"起源+新华社2025现场稿三发布方互证）、文学（曾几《大暑》茶山集四库本直读+意外收获建安曹植/刘桢/王粲《大暑赋》）。最大的坑有三个：一是两张卡 frontmatter 摘录内的 ASCII 单引号导致 YAML 断裂（首跑被跳过，按 '' 转义修复）；二是月令引文的嫁接异文（若不核对原书会把现代编述当古籍原文）；三是萤火虫科学卡与古籍卡的内容互渗风险（已用互链+红线控制，仍需人工终审表述）。
路由统计：A 5 · B 3 · C 1 · D 1（本节气卡；另有6张共享卡 human-review-required 属系统级既有卡，不在本包）；日志：[[07_research/research-dashu-batch-log|研究日志]]

## C · 必须人工审核

### dashu-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释+why_it_matters，全部回溯 supporting_knowledge_ids（11张：本节气10张+跨节气小暑三伏机制卡+共享3张）
- Exact Evidence（逐字）：见卡内三层文本（引擎 explanation-gated：Content Gate，支撑卡未 approved 禁止发布）
- Source / Type / Access：解释层（无独立来源，逐句依赖支撑卡）
- Scope / Period：面向零前提全球读者
- Why Review：HumanExplanation 类型按规则必入 C；引擎首跑曾标 unsupported-distribution（"大暑大部分时段与中伏重合"句），已改为机构归因表述，重跑消除——修改后的归因表述是否足够仍需人工判断；"腐草为萤"段的古今分层表述是本卡的审核重点
- What We Know / What We Don't Know：知：三层文本逐句可回溯、分布性短语自查通过（台州椒江/粤东南/山东/莆田/湘中北均限定，无"全国各地"）。不知：英文译文质量（机器草稿）、支撑卡全部未经人工审核
- Recommended Decision（建议，不代决）：Stage 1 知识卡 Decision 后再进入 Stage 2 解释层审核（沿立春/小暑流程）
- 链接：[[03_notes/dashu-human-explanation|大暑解释卡]]
- 审核问题：1) 一句话版"中国传统把它视为一年中最热时段的开始信号"的"开始信号"是否准确（大暑本身即在最热时段内，非其开始）？2) summary"闷热体感才是'最热'的实质"是否超出温湿指数统计的支撑范围？3) 展开版对俞樾"疫病起源"一句话带过是否需要加"（笔记记载）"限定？4) 三层均提及送大暑船，权重是否恰当？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核
### sci-dashu-longitude-120 — 大暑=黄经120°、公历7月22-24日（第十二个、夏季最后一个） · Why：引擎 finding=pending-primary-source（GB/T 33661-2017 正文未直读，继承各节气共同待办） · 链接：[[03_notes/sci-dashu-longitude-120|黄经120°定义]] · Decision：（留空）
### sci-dashu-sanfu-zhongfu-heat — 大暑大部分时段与中伏重合、"冷在三九热在中伏"、多数省会城市温湿指数中伏达峰 · Why：引擎 finding=pending-primary-source（气象局公共气象服务中心原始统计未直读，仅新华社转述；"最热"表述已按源文限定收窄） · 链接：[[03_notes/sci-dashu-sanfu-zhongfu-heat|大暑与中伏]] · Decision：（留空）
### sci-dashu-firefly-entomology — 萤火虫生活史/发光机理/栖息地（两机构直读）与"腐草为萤"的分层衔接 · Why：引擎 finding=pending-primary-source（《中国萤火虫生态研究报告》原文未直读）；古今分层的解释段措辞（"真实且可重复的观察+化生解释框架"）需人工把关，防止产品文案二创时滑向两个极端 · 链接：[[03_notes/sci-dashu-firefly-entomology|萤火虫科学解释]] · Decision：（留空）

## D · Needs Research
- 月令"今则热气犹大也"嫁接引文的全库溯源：是否存在收此句的别本（四库本/中华书局点校本比对），以及该改写在机构稿中的传播起点——建议列入"引用文化"专题
- 伏茶/伏姜的古籍文献链：《清嘉录》伏茶条等点校本核读（维基文库无书）；温州伏茶施茶公益的口述史核验；烧伏香未获机构直读源，本轮未建卡
- 三候现代物候验证：萤火虫出现期、雷暴频发期与大暑节气的逐地对应（中国物候观测网/专项研究）
- 气象局公共气象服务中心温湿指数统计原始发布页直读（数据口径与城市清单）
- 《中国萤火虫生态研究报告》原文与付新华团队文献（"近三十年超70%种群下降"）
- 台州/临海地方志大暑船条目；"五圣"信仰谱系与五圣庙史；大暑船建造技艺传承名单
- 曾几《大暑》与《茶山集》点校本校勘；曹丕《与朝歌令吴质书》"浮瓜沉李"、陶侃惜分阴典源直读
- 土用の丑の日 Candidate 直读核验：日本历法权威源（土用=四立前18.6天的规定、十二支计日）、江户起源说文献、与大暑交节的逐年重合率历表计算
- GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）
- 季节滞后（夏至后最热）的物理机理机构源；现代农业中的大暑农事与"双抢"现状

## A · Auto Candidate（仅链接）
- [[03_notes/hist-yueling-dashu-pentads|大暑三候原文（含嫁接异文记录）]]（high）
- [[03_notes/region-dashu-taizhou-dashuchuan|送大暑船（台州椒江）]]（high）
- [[03_notes/trad-dashu-fucha-shushi|伏茶伏姜与大暑食俗]]（medium）
- [[03_notes/trad-dashu-nongshi|大暑农事农谚]]（medium）
- [[03_notes/lit-zengji-dashu-poem|曾几《大暑》与《大暑赋》传统]]（medium）
- [[03_notes/idea-dashu-interaction-sketches|大暑互动创意草案]]（AI创意，不参与路由）

---

# 13 立秋（liqiu）· 审核分节

研究摘要：本轮查清立秋的天文定义（黄经135°、公历8月7-9日、第13个节气/秋季第一个，非遗网6973专题页+新华社2021/2022/2026三稿直读）、三候原文（凉风至/白露降/寒蝉鸣，月令集解逐字直读+《礼记·月令》孟秋条平行记载+夹注异文登记）、立秋≠入秋（气象入秋22℃标准两机构互证+秋老虎+常年分布专家表述）、苗族赶秋（湖南湘西花垣，国家级非遗扩展项目Ⅹ-68/2014第四批，非遗网双页+文旅部通报独立交叉）、迎秋于西郊礼制（礼记直读，三方一致）、贴秋膘断代缺环（燕京岁时记直读无载+清嘉录/帝京岁时纪胜无书，按现代流行+文献待考分层）、刘翰《立秋》双系统异文（乳鸦/乱鸦；流行版"梧桐叶上月如霜"无直读支持被排除）、一叶知秋典故链（淮南子"知岁之将暮"直读+文录"知天下秋"辑文）。最大的坑有三个：一是贴秋膘"清代流行"的流行叙事在可直读文献中完全落空（连清末北京岁时权威《燕京岁时记》立秋都只有赐冰终点）；二是刘翰诗首句两系统打架且任务线索给的末句版本不存在于任何直读文本；三是苗族赶秋页面的"五千年/秦汉遗制"断言需整层隔离。
路由统计：A 5 · B 4 · C 1 · D 1（本节气卡；另有6张共享卡 human-review-required 属系统级既有卡，不在本包）；日志：[[07_research/research-liqiu-batch-log|研究日志]]

## C · 必须人工审核

### liqiu-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释+why_it_matters，全部回溯 supporting_knowledge_ids（11张：本节气10张+共享2张其中历法角色为链接级）
- Exact Evidence（逐字）：见卡内三层文本（引擎 explanation-gated：Content Gate，支撑卡未 approved 禁止发布）
- Source / Type / Access：解释层（无独立来源，逐句依赖支撑卡）
- Scope / Period：面向零前提全球读者
- Why Review：HumanExplanation 类型按规则必入 C；解释含专家表述级的分布断言（"大多数地方仍处于夏季"，有气候卡背书但底层是单一媒体转述机构人员）；贴秋膘断代缺环在解释中以"文献依据尚未核实"呈现——分寸需人工把关
- What We Know / What We Don't Know：知：三层文本逐句可回溯、分布性短语自查通过（北方尤其盛行/湖南湘西/专家表述均限定）。不知：英文译文质量（机器草稿）、支撑卡全部未经人工审核
- Recommended Decision（建议，不代决）：Stage 1 知识卡 Decision 后再进入 Stage 2 解释层审核（沿立春/小暑流程）
- 链接：[[03_notes/liqiu-human-explanation|立秋解释卡]]
- 审核问题：1) summary"中国大多数地方仍是夏天"是否需加"据气象部门常年统计口径"限定？2) 展开版苗族赶秋句同时给2014国家级与2016 UNESCO两套身份，表述是否过载？3) "贴秋膘……文献依据尚未核实"是否足以防止读者倒推为"清代习俗"？4) "春劝农、秋厉兵是同一时间制度的两面"属解释性框架还是可保留的文化概括？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核
### sci-liqiu-longitude-135 — 立秋=黄经135°、公历8月7-9日（第13个/秋季第1个） · Why：引擎 finding=pending-primary-source（GB/T 33661-2017 正文未直读，继承立春待办）；机构间日期口径宽窄不一（8月7日或8日/8月8日前后/8月7-9日）已在 exceptions 并集处理 · 链接：[[03_notes/sci-liqiu-longitude-135|黄经135°定义]] · Decision：（留空）
### sci-liqiu-vs-meteorological-autumn — 立秋≠入秋（22℃候温标准+秋老虎+常年分布） · Why：finding=pending-primary-source（QX/T 152-2012 标准原文未直读；"大多数地方仍处于夏季"为单一媒体转述气象机构人员的专家表述级） · 链接：[[03_notes/sci-liqiu-vs-meteorological-autumn|立秋与气象入秋]] · Decision：（留空）
### hist-liqiu-yingqiu-ritual — 《礼记·月令》迎秋于西郊礼制（直读）+汉唐宋沿袭（转引级） · Why：finding=pending-primary-source（《后汉书》礼仪/祭祀志、《新唐书》礼乐志、《宋史》礼志立秋条未直读，沿袭链以类书辑文+机构页引文两级转引呈现） · 链接：[[03_notes/hist-liqiu-yingqiu-ritual|迎秋礼制]] · Decision：（留空）
### trad-liqiu-tieqiubiao — 贴秋膘/啃秋/食秋桃：当代记录完整、清代一手文献缺环 · Why：finding=pending-primary-source（《清嘉录》《帝京岁时纪胜》维基文库无书未直读；立秋复秤句系人民日报转引《清嘉录》沿立夏卡不升级） · 链接：[[03_notes/trad-liqiu-tieqiubiao|贴秋膘与啃秋]] · Decision：（留空）

## D · Needs Research
- 《清嘉录》《帝京岁时纪胜》立秋/七月条点校本直读：贴秋膘之名与悬秤称人的清代原始形态（本轮断代路径完整执行但原书不可得）；近代报刊"贴秋膘"用例检索
- 正史礼志立秋条直读（《后汉书》礼仪志/祭祀志貙刘、《新唐书》礼乐志、《宋史》礼志祀白帝）：迎秋礼沿袭链升级为一手
- "立秋十天遍地黄"类高产农谚原始出处（本轮两个直读源均无此句，未入卡）；《纪历撮要》《陶朱公书》《群芳谱》《文录》原书溯源
- 三候现代物候验证：寒蝉鸣期、凉风初至、白露初现日的当代观测数据（中国物候观测网）
- 秋老虎的气象学定义与成因（副热带高压）机构直读源；QX/T 152-2012 标准正文；各城市常年入秋日期气候统计
- 刘翰诗定版校勘（千家诗各刻本/南宋别集）；"梧桐叶上月如霜"版本来源普查（本轮无直读支持）
- 苗族赶秋当届活动（十八洞村等）独立媒体报道直读；UNESCO申报文本中苗族赶秋的位置；"八人秋"地方文献
- Lammas（8月1日面包收获节）直读核验：en.wikipedia 词条+不列颠民俗权威源（词源 hlaf-mas、定日机制、Lughnasadh关系），核验后 glob-liqiu-lammas 方可脱离 Candidate
- GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）
- 岁功典立秋部艺文诗池扩展（杜甫/白居易/范成大/朱熹立秋诗，本轮仅取刘翰一首）

## A · Auto Candidate（仅链接）
- [[03_notes/hist-yueling-liqiu-pentads|立秋三候原文（含礼记平行与夹注异文）]]（high）
- [[03_notes/sci-liqiu-vs-meteorological-autumn|立秋≠入秋与秋老虎]]（high）
- [[03_notes/region-liqiu-miao-ganqiu|苗族赶秋（国家级非遗扩展项目）]]（high）
- [[03_notes/hist-liqiu-yingqiu-ritual|迎秋于西郊礼制]]（high）
- [[03_notes/lit-liuhan-liqiu|刘翰《立秋》与乳鸦/乱鸦异文]]（medium）
- [[03_notes/hist-liqiu-yiye-zhiqiu|一叶知秋典故链]]（medium）
- [[03_notes/trad-liqiu-nongshi|立秋农事与占候农谚]]（medium）

---

# 14 处暑（chushu）· 审核分节

研究摘要：本轮查清处暑的天文定义（黄经150°、公历8月22-24日、第十四个节气，非遗网专题页6974×新华社两独立直读）、三候原文（月令集解直读，"鹰乃祭鸟"注文确认为古典"祭而后食"叙事并与雨水"獭祭鱼"平行）、命名定义句（"处，止也"直读+"出暑"现代白话分层）、气候分区图景（北方入秋/南方秋老虎/华西秋雨，中国天气网直读）、中元节日期锚辨析（6世纪荆楚→清末燕京→当代机构页，三层锚均为农历七月十五而非处暑）、开渔节分层（本节气最大坑：1998年创办的现代节庆，日期锚为9月16日伏休结束，非遗网2017页"处暑期间"说与之冲突约3周，"处暑自古有开渔"显式否定）、苏泂《长江二首》全诗直读（泠然斋诗集四库辑本卷四）。最大的坑有三个：一是开渔节的节气归属倒灌风险（专题页"每年处暑期间"是宽泛表述）；二是中元民俗被随手写成处暑习俗（日期锚在七月十五）；三是三处 YAML 串内直引号翻车（已修，引擎复跑通过）。
路由统计：A 3 · B 4 · C 3 · D 1（本节气卡；另有6张共享卡 human-review-required 属系统级既有卡，不在本包）；日志：[[07_research/research-chushu-batch-log|研究日志]]

## C · 必须人工审核

### region-chushu-xiangshan-kaiyu（CulturalFact · risk=high · impact=term）
- Claim：中国（象山）开渔节为1998年创办的现代节庆（顺应1995年海洋伏季休渔制度），日期锚为伏休结束日（近年9月16日）；与处暑仅时段邻近而非制度绑定；传统出海祭海民俗另立为国家级非遗"渔民开洋、谢洋节"（Ⅹ-72，2008），其山东锚点（谷雨/六月十三）与处暑无关；"处暑自古有开渔传统"于文献不成立。
- Exact Evidence（逐字）："1998年，浙江象山将渔民的自发仪式上升为海洋文化的盛大典礼，创办了中国（象山）开渔节。"（中国文化报2019）／"每年的9月16日……'蛰伏'约四个半月的东海结束了伏季休渔期……中国（象山）开渔节"（浙江宣传2023）／"每年处暑期间，浙江省沿海都要举行隆重的开渔节"（非遗网处暑专题2017）／"从1995年开始，我国实施海洋伏季休渔制度"（浙江宣传2023）。
- Source / Type / Access：source-ccd-xiangshan-kaiyu（institutional·direct-read）、source-zjxc-kaiyu-2023（institutional·direct-read）、source-ihchina-kaiyang-xieyang（institutional·direct-read）、source-ihchina-chushu-feature（institutional·direct-read）。
- Scope / Period：浙江象山；制度层1995起、节庆层1998起、非遗认定2008；对照组山东三地（明清以降叙述）。
- Why Review：risk=high（Modern-as-Ancient 高危区）；引擎 finding=pending-primary-source（嘉靖《象山县志》与历届开渔日期表未直读）；两机构对开渔日期锚表述冲突（处暑期间 vs 9月16日）已并存登记。
- What We Know / What We Don't Know：知：1998创办（两独立发布方直读互证）、1995全国伏休制度、Ⅹ-72项目存在与五申报地、山东锚点与处暑无关。不知：1998-2026历届开渔节确切日期、"据记载千年"所据方志、"江川开渔节"等其他名目、Ⅹ-72编号细节第二源。
- Recommended Decision（建议，不代决）：按 Modern Popularization 分层卡直接采纳命题主干；日期锚写"伏休结束（近年9月16日）"并保留2017专题页分歧注记；历届日期表核补后再固化"时段邻近"量化表述。
- 链接：[[03_notes/region-chushu-xiangshan-kaiyu|象山开渔节分层卡]]
- 审核问题：1) "处暑以后是渔业收获的时节"这类宽松表述可否用于解释层（当前未用）？2) 2017专题页"处暑期间"与2023"9月16日"冲突，对外口径如何统一？3) "20世纪70年代象山渔民提出休渔概念"（中国文化报）与"1995年全国实施"（浙江宣传）两段制度史是否需要合并为一句？4) Ⅹ-72"据记载已有一千年"机构转述是否保留在卡内（当前保留并降权）？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### hist-chushu-zhongyuan-hedeng（HistoricalRecord · risk=high · impact=term）
- Claim：处暑前后的祭祖、普渡、放河灯民俗日期锚是农历七月十五中元节（及七月初一起的七月序列），不是处暑节气日；处暑与中元仅时段常邻近，属两套日期系统。
- Exact Evidence（逐字）："七月十五日，僧尼道俗，悉營盆供諸仙。"（《荆楚岁时记》）／"中元不為節，惟祭掃墳塋而已。""至中元日例有盂蘭會……晚間沿河燃燈，謂之放河燈。"（《燕京岁时记》）／"处暑节气前后的民俗多与祭祖及迎秋有关。农历七月十五日是古代传统节日中元节。"（非遗网处暑专题2017）。
- Source / Type / Access：source-wikisource-jingchu-suishiji（historical·direct-read）、source-wikisource-yanjingsuishiji（historical·direct-read）、source-ihchina-chushu-feature（institutional·direct-read）。
- Scope / Period：六世纪荆楚（盆供）、清末北京（灯俗/河灯）、2017机构汇编；地域断代均限定。
- Why Review：risk=high（民俗归属误写高危：中元民俗易被倒灌为"处暑习俗"）；与雨水"拉保保"辨析先例同型，方法需人工确认沿用。
- What We Know / What We Don't Know：知：三层文献锚一致指向七月十五；清末北京"中元不为节"的低调口径。不知：中元与处暑逐年相对位置定量表、宋代及更早河灯记载（谱系起点）、"诸仙/诸佛"录文版本差异。
- Recommended Decision（建议，不代决）：采纳辨析结构；补逐年历表后升 summary 层措辞强度。
- 链接：[[03_notes/hist-chushu-zhongyuan-hedeng|中元节日期锚辨析]]
- 审核问题：1) "时段常邻近"未定量，可否接受？2) 燕京"中元不为节"与当代中元叙述的时代差是否另立卡？3) 放河灯谱系起点（宋代《东京梦华录》）核补优先级？4) 解释层已写"常与农历七月十五中元节相邻"是否够严谨？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### chushu-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释+why_it_matters，全部回溯 supporting_knowledge_ids（14张：本节气10张+共享4张）。
- Exact Evidence（逐字）：见卡内三层文本（引擎 explanation-gated：Content Gate，支撑卡未 approved 禁止发布）。
- Source / Type / Access：解释层（无独立来源，逐句依赖支撑卡）。
- Scope / Period：面向零前提全球读者。
- Why Review：HumanExplanation 类型按规则必入 C；解释层含"1998年创办""近年日期锚9月16日"等现代节庆硬事实与"机构汇编记载、古籍出处待考"的从轻表述；分布性短语已自查（分区限定）。
- What We Know / What We Don't Know：知：三层文本逐句可回溯、Candidate 全球对照句未写入正文。不知：英文译文质量（机器草稿）、支撑卡全部未经人工审核。
- Recommended Decision（建议，不代决）：Stage 1 知识卡 Decision 后再进入 Stage 2 解释层审核（沿立春/小暑流程）。
- 链接：[[03_notes/chushu-human-explanation|处暑解释卡]]
- 审核问题：1) 一句话版"北方转凉与南方的'秋老虎'并不同步"是否需要"常年"限定？2) summary"长江中下游仍可能有'秋老虎'"是否改为"高温仍频"？3) 展开版三套时间系统收束段是解释性框架还是可保留？4) 2017年闰六月落"七月初二"实例是否保留（单年实例）？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核
### sci-chushu-longitude-150 — 处暑=黄经150°、公历8月22-24日（第14个、秋季第2个） · Why：引擎 finding=pending-primary-source（GB/T 33661-2017 正文未直读，继承立春待办；日期范围下限22日仅新华社口径） · 链接：[[03_notes/sci-chushu-longitude-150|黄经150°定义]] · Decision：（留空）
### hist-yueling-chushu-pentads — 处暑三候原文+注文（"祭鸟"=古典叙事，獭祭鱼平行） · Why：引擎 finding=evidence-below-confidence（单直读方撑 high：维基文库一个录文系统，句读两处+"熱/熟"用字待校） · 链接：[[03_notes/hist-yueling-chushu-pentads|处暑三候]] · Decision：（留空）
### hist-chushu-naming — "处，止也"古籍定义句+"出暑"现代白话分层 · Why：引擎 finding=pending-primary-source（《说文》"處"字训诂未直读） · 链接：[[03_notes/hist-chushu-naming|处暑命名]] · Decision：（留空）
### trad-chushu-nongshi — 秋收序幕（中稻收获/蓄水防连旱）+农谚群 · Why：引擎 finding=pending-primary-source（古农书处暑段未直读，机构汇编级） · 链接：[[03_notes/trad-chushu-nongshi|处暑农事农谚]] · Decision：（留空）

## D · Needs Research
- Harvest Festival 直读核验：en.wikipedia 词条+Church of England/CPRE 等权威源（1843/Hawker/Lammas/收获月周日诸锚），核验后 glob-chushu-harvest-festival 方可脱离 Candidate
- 开渔节历届日期表（1998-2026）：逐年核对"处暑期间 vs 9月16日"分歧；嘉靖《象山县志》渔户条原文直读；"开洋祭海千年"方志链
- 中元-处暑逐年相对位置历表：为"时段常邻近"提供定量背书
- 放河灯文献谱系起点：《东京梦华录》《帝京岁时纪胜》中元条直读
- 三候现代物候验证：鹰类秋季捕猎行为、水稻/玉米成熟期观测（中国物候观测网/竺可桢《物候学》）
- 秋老虎气象判据与华西秋雨机制卡（国家气候中心；副高撤退/印缅槽）
- 《说文解字》"處"字段训直读；唐宋类书处暑释名异说
- 吃鸭/巧云方志谱系（北京百合鸭老字号谱系、江南"处暑送鸭"说、"七月八月看巧云"谚源）
- 三候录文校勘：中华书局印本/《四库》本对校"天地始肅"句读与"成熱/成熟"用字；《逸周书·时训》《礼记·月令》平行记载
- 苏泂《长江二首》校本比对（《全宋诗》/《永乐大典》残卷）与系年考证
- GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）
- 元稹《咏廿四气诗》组诗文本（沿 wave1-2 结论仍无直读页，全波次待办）

## A · Auto Candidate（仅链接）
- [[03_notes/lit-chushu-sujiiong-changjiang|苏泂《长江二首》"新凉直万金"]]（medium）
- [[03_notes/sci-chushu-climate-autumn-transition|处暑气候：由热转凉与秋老虎（分区）]]（medium）
- [[03_notes/trad-chushu-chiya-qiuyun|处暑吃鸭与出游迎秋（机构层）]]（low）

---

# 15 白露（bailu）· 审核分节

研究摘要：本轮查清白露的天文定义（黄经165°、公历9月7-9日，非遗网6975/新华社2022/人民日报海外版2016三机构直读）、露的形成机制（科普中国+中国天气网双机构直读：夜间辐射冷却至露点以下凝结，0°C以下为霜）、命名双分层（月令集解"陰氣漸重，露凝而白也"观察层+"秋屬金，金色白"五行解释层，另有礼记月令"涼風至，白露降"更早平行文本）、三候全鸟类特征与"来/归"方向注文（鸿雁来=自北来南 vs 雨水候雁北=自彭蠡北归；玄鸟归注文北归说与现代稿"南飞避寒"分歧登记）、五地习俗版图（太湖西山祭禹王/南京白露茶/资兴米酒/福州龙眼/温州十样白）与文学双卡（蒹葭三章全文、杜甫《月夜忆舍弟》）。最大的坑有三个：一是非遗网、人民日报海外版、农大三源白露段文字高度平行疑共享汇编源（跨源印证已按同源族处理不重复计数）；二是谚语多版本异文（秋风夜/秋分夜、身不露/勿露身）与"十样白"清单无定本，均按并流传本登记不裁决；三是brief线索的命名引文"水土湿气凝而为露"未见于直读原文（防幻觉命中，未采信）。路由统计：A 9 · B 2 · C 1 · D 1（本节气卡；另有6张共享卡 human-review-required 属系统级既有卡，不在本包）；日志：[[07_research/research-bailu-batch-log|研究日志]]

## C · 必须人工审核

### bailu-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释+why_it_matters，全部回溯 supporting_knowledge_ids（13张：本节气12张+共享1张实引）
- Exact Evidence（逐字）：见卡内三层文本（引擎 explanation-gated：Content Gate，支撑卡未 approved 禁止发布）
- Source / Type / Access：解释层（无独立来源，逐句依赖支撑卡）
- Scope / Period：面向零前提全球读者
- Why Review：HumanExplanation 类型按规则必入 C；解释层含谚语（"处暑十八盆，白露勿露身"）、民间观念（"一颗顶只鸡"未入正文已隔离）与古典解释体系（五行释"白"）等非科学层表述的措辞风险；燕向分歧用"燕子离去"中性表述回避裁决
- What We Know / What We Don't Know：知：三层文本逐句可回溯、五地习俗全部地域限定、分布性短语自查通过。不知：英文译文质量（机器草稿）、支撑卡全部未经人工审核
- Recommended Decision（建议，不代决）：Stage 1 知识卡 Decision 后再进入 Stage 2 解释层审核（沿立春/小暑流程）
- 链接：[[03_notes/bailu-human-explanation|白露解释卡]]
- 审核问题：1) summary 版五地习俗罗列（南京茶/资兴酒/福州龙眼/温州十样白/太湖禹王）是否过密，是否保留"因地域而异"框架句即可？2) 展开版"白露是少数用看得见的天气现象命名的节气"的"少数"是否有全节气对照支撑（仅本卡论证，建议人工判读）？3) 燕向中性表述"燕子离去"是否可接受，还是应双注并列？4) why_it_matters"三套语言并存不悖"是解释性收束还是需要弱化？5) "温差明显拉大"（多源）与"温差最大"（单源，已隔离）的边界是否维持现处理？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核
### sci-bailu-longitude-165 — 白露=黄经165°、公历9月7-9日（第十五个、秋季第三个） · Why：引擎 finding=pending-primary-source（GB/T 33661-2017 正文未直读，继承立春待办；非遗网2017页仅给当年实例+黄经，日期范围由新华社/人民海外版直读支撑） · 链接：[[03_notes/sci-bailu-longitude-165|黄经165°定义]] · Decision：（留空）
### trad-bailu-tea-rice-wine — 南京白露茶+湖南资兴白露米酒（地域明标；苏南线索未独立核验） · Why：引擎 finding=pending-primary-source（程酒《水经注》《九域志》《兴宁县志》均农大稿转引未回原典；南京茶两直读源文字逐字平行疑同源） · 链接：[[03_notes/trad-bailu-tea-rice-wine|白露茶与米酒]] · Decision：（留空）

## D · Needs Research
- 元稹《咏廿四气诗·白露八月节》全诗文本：维基文库无组诗页（wave1+小暑波双确认），机构稿高频引用不署名——敦煌写本校录本人工核读
- 太湖祭禹王的非遗产权：江苏省级/苏州市级名录核查 + 2016年后香会现状（地方志年鉴/苏州当地报道）+《打渔杀家》戏目传统与禹王香会关系的田野资料
- 资兴白露米酒/程酒方志溯源：光绪《兴宁县志》原书、《水经注》卷三十九程水条直读；"白露米酒"是否列入湖南省级非遗
- 苏南/浙江白露米酒俗的第二独立源；"吃番薯"条目地域归属（农大稿无标注，未立卡）
- "十样白"温州方志与民俗志定本；《中华遗产》2018全文阅读（网络版仅开放数段）
- 三候现代物候验证：鸿雁南迁期、燕科离境期的观测数据（中国物候观测网）；"昼夜温差最大的节气"的国家气候中心第二源
- 《月令七十二候集解》版本校勘（《逸周书·时训解》白露三候平行记载）；"水土湿气凝而为露"式命名引文的真实出典考订
- 露の世 Candidate 直读核验：一茶句集日文原典或权威译注（Lion's Roar 摘要级不可升级）；跨文化顾问确认
- 禹王祭"山西沿黄河一带祭诸神"异文判读（疑"西山"倒文）；蒹葭/杜甫注本系年（乾元二年秦州说文献依据）
- GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）

## A · Auto Candidate（仅链接）
- [[03_notes/sci-bailu-longitude-165|白露天文定义：黄经165°]]（high）
- [[03_notes/hist-yueling-bailu-pentads|白露三候与雁行方向注文]]（high）
- [[03_notes/hist-bailu-naming|白露命名：观察层与五行解释层]]（high）
- [[03_notes/sci-bailu-dew-formation|露的形成机制与白露温差]]（high）
- [[03_notes/region-bailu-taihu-yuwang|太湖祭禹王香会（四要素）]]（medium）
- [[03_notes/trad-bailu-shenbulu|"白露身不露"着衣节律谚群]]（medium）
- [[03_notes/trad-bailu-nongshi|白露农事农谚]]（medium）
- [[03_notes/trad-bailu-longyan-shiyangbai|福州龙眼与温州十样白]]（medium）
- [[03_notes/lit-shijing-jianjia|蒹葭：白露入诗之源]]（medium）
- [[03_notes/lit-dufu-bailu-yueye|杜甫《月夜忆舍弟》]]（medium）

---

# 16 秋分（qiufen）· 审核分节

研究摘要：本轮查清秋分的现代天文定义（黄经180°、直射赤道、昼夜第二次均分、此后北半球昼短夜长；机构口径"9月23日前后"）、《月令》"秋分，八月中。解見春分"与三候逐字文本（雷始收声/蛰虫坯户/水始涸，与春分镜像对偶）、"秋分祭月"的完整古籍直读链（《礼记·祭义》→《周礼》注疏（文献通考辑）→应劭注→《钦定大清会典》"歲以秋分……祀夜明"明文，另获元稹821年祭文与刘禹锡夕月坛诗两个唐代文本）、2018年设立中国农民丰收节的官方文件层表述。最大的坑是两个：①"中秋节由秋分祭月演变而来"流行叙事——两端正证齐备而"演变"中间环节零文献，已按 interpretation 层建卡（contested）；②非遗网对《礼记》《月令》的两处引文均有转写/出处问题（"天子春朝日秋夕月"不在《祭义》；"分者平也"应为春分条"分者，半也"），本轮全部以古籍直读纠偏。

路由统计：A 5 · B 2 · C 4 · D 0（引擎表中另有6张共享卡路由 human-review，属既有状态不入包）；日志：[[07_research/research-qiufen-batch-log|研究日志]]

## C · 必须人工审核

### hist-qiufen-xiyue-sacrifice（HistoricalRecord · risk=high · impact=term）
- Claim：秋分祭月（夕月）礼制谱系五级直读：礼经坛坎东西对偶→注疏"天子常春分朝日，秋分夕月"与"夜明"坛名→应劭注原句→清会典"歲以秋分迎月出祀夜明"现行祀典→唐821年秋分日祭百神实例（分立）。
- Exact Evidence（逐字）：《钦定大清会典》卷四十四："凡夕月之禮兆陰位於西郊其制一成嵗以秋分迎月出祀夜明以北斗五星二十八宿周天星辰配丑辰未戍年皇帝親夕月"；《文献通考》卷79："天子常春分朝日，秋分夕月""夜明者，祭月壇名也"；《礼记·祭义》："祭日於壇，祭月於坎……祭日於東，祭月於西"；应劭注（靖康缃素杂记转引）："天子春朝日，秋夕月，朝日以朝，夕月以夕"；元稹祭文："秋序始肅，時將順成，且報且祈，用舉常祀。"
- Source / Type / Access：5个维基文库古籍页 + 非遗网专题 / historical+institutional / 全部 direct-read。
- Scope / Period：礼经文本（先秦至汉定型）→唐（821实例）→清（会典）；国家祀典层，不含民间形态。
- Why Review：risk=high（礼制归属类命题）；finding=pending-primary-source（明代典籍与应劭注原书未直读）；"明清皇帝祭月"的"明"半边靠非遗网转述。
- What We Know / What We Don't Know：清代祀典细节（坛位、祭器、亲祀年份规则）逐字可查；不知道明代建坛沿革、唐代夕月礼全貌、民国废止时间。
- Recommended Decision（建议，不代决）：补读《大明会典》后可升 verified；当前建议 approve-with-notes（古籍链自洽）或 hold 待明代直读。
- 链接：[[03_notes/hist-qiufen-xiyue-sacrifice|秋分祭月礼制卡]]
- 审核问题：1) "祭百神"与"夕月"两条祭祀线的分立表述是否稳妥？2) 非遗网"《礼记》载"出处错误是否需要在公开内容中显式纠正？3) 清会典"丑辰未戍年皇帝親夕月"的干支年规则是否需要额外核对释读？4) 刘禹锡诗作为旁证的边界是否恰当？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### interp-qiufen-zhongqiu-origin-narrative（CulturalFact · risk=high · impact=term · contested）
- Claim："中秋节由秋分祭月演变而来"是推断性叙事：秋分夕月祀典（古籍直读）与清末八月十五供月（《燕京岁时记》直读）两锚并行可考，但"演变"中间环节无文献；秋分在农历八月内逐年漂移（821年八月十八/2017年八月初四），与固定八月十五的中秋不是同一日。
- Exact Evidence（逐字）：《燕京岁时记》："至十五月圓時，陳瓜果於庭以供月……惟供月時男子多不叩拜。故京師諺曰：『男不拜月，女不祭灶。』"；非遗网："秋分曾是传统的'祭月节'……但那时的'中秋'只是单纯的月令时间，并无节日之意"；元稹祭文纪日"八月甲子朔十八日辛巳"+题"秋分日"；非遗网"2017年9月23日（农历丁酉年八月初四）"。
- Source / Type / Access：非遗网（institutional/direct-read）+ 燕京岁时记维基文库页（historical/direct-read）+ 元稹文（historical/direct-read）。
- Scope / Period：叙事流通层（当代）+清末北京文献+唐/当代两个漂移实例。
- Why Review：findings=contested-open（contested=true 必须人工裁决）+pending-primary-source（《周礼》原文、《帝京景物略》原书未直读）；epistemic=interpretation 命题，按铁律3不得混入 fact。
- What We Know / What We Don't Know：两个日期锚的直读证据与漂移实例齐备；不知道"移锚"过程是否真有文献记载、学界主流论证为何。
- Recommended Decision（建议，不代决）：保持 interpretation 层与 contested 标记；若审核人认为"演变说"有学界权威文献支撑，可增加对立观点卡而非改写本卡。
- 链接：[[03_notes/interp-qiufen-zhongqiu-origin-narrative|中秋起源叙事辨析]]
- 审核问题：1) "并行可考+演变无文献"的表述是否中立？2) 821年"秋分=八月十八"的文本内证推读是否接受？3) 《周礼》"中秋"原始条目是否必须补读后本卡才能用？4) 对外文案的推荐句式是否足够防误读？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### glob-qiufen-shuubun-east-asia（GlobalExpression · risk=high · impact=global）
- Claim：待核验（Candidate）："秋分"随汉字历法体系传播至日本沿用至今——NAOJ 现行解说明记秋分（しゅうぶん）八月中、黄経180°（并以秋分为定义示例），释名"秋の彼岸の中日、昼夜がほぼ等しくなる"，雑節彼岸定义为秋分前后各3日共7日；与中国秋分同一黄经刻度。
- Exact Evidence（逐字）："二十四節気は日本や中国で伝統的に用いられる季節の目印で、各節気は太陽黄経（視黄経）の値によって定義されています。たとえば、春分は太陽黄経が0°となる瞬間、秋分は太陽黄経が180°となる瞬間です。""秋分 (しゅうぶん) 八月中 180° 秋の彼岸の中日、昼夜がほぼ等しくなる""彼岸 (ひがん) - 春分または秋分の前3日から後3日まで、それぞれ計7日間。"
- Source / Type / Access：source-naoj-24sekki-qiufen / institutional / direct-read（verification=cross-checked，与紫台180°、《月令》"八月中"跨语言一致）。
- Scope / Period：日本历法文化（现行机构发布）；民俗实践层零来源。
- Why Review：GlobalExpression 一律 C；跨文化最高敏区（防"外国版秋分节"叙事）；finding=global-candidate-hold。
- What We Know / What We Don't Know：历法刻度层三要素（名称/定义/月序标签）机构直读齐备；不知道日本秋分之日节假日、彼岸参拜实态、朝鲜半岛추분。
- Recommended Decision（建议，不代决）：保持 Candidate；补日本民俗实践权威源后由跨文化顾问审。
- 链接：[[03_notes/glob-qiufen-shuubun-east-asia|日本しゅうぶん卡]]
- 审核问题：1) same-time+传播关系定性是否恰当？2) "彼岸中日"要素的呈现是否会误导为宗教对应？3) 是否仿雨水卡扩展韩国추분？4) NAOJ 同 URL 双源卡（雨水侧/秋分侧）的处理是否接受？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### qiufen-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释（一句话/约100字/展开版）+ why it matters，逐句回溯 12 张支撑卡；叙事链六环。
- Exact Evidence（逐字）：见卡 frontmatter `explanation`；关键支撑如"太阳到达黄经180°、直射赤道"（sci-longitude）、"清代《大清会典》明文规定岁以秋分在西郊夕月坛祀'夜明'"（hist-xiyue）、"2018年，经党中央批准、国务院批复……设立为'中国农民丰收节'"（fact-harvest）。
- Source / Type / Access：无独立来源（解释层），支撑卡均为 direct-read。
- Scope / Period：全球天文事实+中国礼制/农事/习俗（具名地点）；古典文本标注经验层。
- Why Review：HumanExplanation 一律人工审核；finding=explanation-gated（支撑卡未 approved 禁止发布）。
- What We Know / What We Don't Know：三层无分布性断言（逐句自查）；不知道英文译文质量、竖蛋轻描程度是否合编辑预期。
- Recommended Decision（建议，不代决）：待 Stage 1 知识卡 Decision 后进入 Stage 2 Explanation Review；此前不得对外引用。
- 链接：[[03_notes/qiufen-human-explanation|秋分解释卡]]
- 审核问题：1) 一句话版同时装下"祭月礼制+丰收节"两个古今信息是否过载？2) 展开版中秋句（"并行可考+推断"）的措辞是否保留？3) "三秋大忙"只写华北谚语是否需要补江南例？4) 英文机器草稿处置方式？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核

### fact-qiufen-harvest-festival-2018 — 2018年设立（每年农历秋分），官方选期理由直读，现代分层红线 · Why：pending-primary-source（设立文件原件未直读，所据为新华社2018通稿+人民日报2025+新华社2024三重权威稿） · [[03_notes/fact-qiufen-harvest-festival-2018|链接]] · Decision：（留空）
### sci-qiufen-day-night-equal — 第二次昼夜均分+直射南移+《春秋繁露》古典对照 · Why：pending-primary-source + assertion-above-evidence（exceptions 留折射/equilux 待核验而 confidence=high；命题主体四源直读，维持 high 请裁决） · [[03_notes/sci-qiufen-day-night-equal|链接]] · Decision：（留空）

## D · Needs Research

- 明代夕月坛建制（《大明会典》/《明史·礼志》）：补齐"明清皇帝祭月"的明半边，维基文库有明史可试。
- 谢逸《点绛唇·金气秋分》/李朴《中秋》可靠文本：需全宋词点校本或图书馆途径（本轮维基文库无页、中文检索被过滤）。
- 折射修正与 equilux 秋分侧机构稿：与春分卡共用缺口。
- 《中国天文年历》入库与"9月22日至24日"区间逐年核算：全库日期口径统一问题。
- 民间习俗古籍源头（秋社/送秋牛/吃秋菜/粘雀子嘴）：《帝京岁时纪胜》《清嘉录》检索直读。
- 三候现代物候观测数据（终雷/虫封穴/水涸）。
- 秋分专属国家级非遗锚点排查（本轮未发现）。
- 日本"秋分の日"节假日与彼岸参拜实践源；朝鲜半岛추분条目。
- 刘禹锡诗系年、唐代夕月坛建置；元稹祭文《全唐文》印本核对。
- 视觉/声音素材授权研究（月坛/夕月坛图、秋牛图、远雷、虫鸣）。

## A · Auto Candidate（仅链接）

- [[03_notes/sci-qiufen-longitude-180|秋分黄经180°定义]]（high）
- [[03_notes/hist-yueling-qiufen-pentads|月令秋分三候]]（high）
- [[03_notes/trad-qiufen-nongshi|三秋大忙与农谚]]（medium）
- [[03_notes/trad-qiufen-customs|秋分习俗综览]]（medium）
- [[03_notes/lit-liuyuxi-qiufen-xiyuetan|刘禹锡《监祠夕月坛书事》]]（medium）

---

# 17 寒露（hanlu）· 审核分节

研究摘要：本轮查清寒露的天文定义（黄经195°、公历10月上旬，非遗网6977/新华社2021/2022直读；日期范围两系并见——非遗网"10月8日或9日"vs新华"10月7日至9日"，未裁决）、命名对偶（月令"寒露，九月節。露氣寒冷，將凝結也"与白露"陰氣漸重，露凝而白也"构成露之三部曲中段）、三候知识锚（"鴻鴈來賓"注文主宾语义=白露先至为主/寒露后至为宾；"雀入大水為蛤"注文自证为古典转化叙事"此飛物化為潛物也"；"菊有黃華"五行注分层）、气候层（白露=炎热向凉爽转折、寒露=凉爽向寒冷过渡，气温更低，霜冻边界留给霜降）、重阳双锚之辨（登高/茱萸/菊花酒古籍锚定农历九月九日，与寒露太阳锚是两套日期，荆楚/燕京直读）、种麦谚地域版图（华北"秋分种麦正当时"vs河南/陕西关中"寒露种麦正当时"，人大页明标+气候变暖推迟）与白居易《池上》"淒淒寒露零"全诗直读。最大的坑有三个：一是新华社两稿定义段句式高度平行疑共享通稿模板（已按单一独立发布方计）；二是习俗叙述里混着重阳节俗（已按双日期锚拆卡，未拆前极易把重阳写成"寒露习俗"）；三是芝麻/蟹等养生内容无地域无断代（按宁缺原则只登记机构建议层，未立食俗命题）。路由统计：A 6 · B 2 · C 2 · D 0（本节气卡；另有6张共享卡 human-review-required 属系统级既有卡，不在本包）；日志：[[07_research/research-hanlu-batch-log|研究日志]]

## C · 必须人工审核

### hanlu-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释+why_it_matters，全部回溯 supporting_knowledge_ids（10张：本节气8张+共享2张）
- Exact Evidence（逐字）：见卡内三层文本（引擎 explanation-gated：Content Gate，支撑卡未 approved 禁止发布）
- Source / Type / Access：解释层（无独立来源，逐句依赖支撑卡）
- Scope / Period：面向零前提全球读者
- Why Review：HumanExplanation 类型按规则必入 C；解释层含古典转化叙事（"雀入大水为蛤不是物候观察"）、双日期锚（重阳农历锚vs寒露太阳锚）、民谚（"寒露种麦正当时"带地域括注）等分层表述的措辞风险；唯一分布句（"我国大部分地区气温下降速度加快"）已由 sci-hanlu-cooling-transition 同域命题背书
- What We Know / What We Don't Know：知：三层文本逐句可回溯、分布性短语自查通过、转化叙事与双锚口径全程一致。不知：英文译文质量（机器草稿）、支撑卡全部未经人工审核
- Recommended Decision（建议，不代决）：Stage 1 知识卡 Decision 后再进入 Stage 2 解释层审核（沿立春/白露流程）
- 链接：[[03_notes/hanlu-human-explanation|寒露解释卡]]
- 审核问题：1) summary 版把三候候名直接罗列（含"雀入大水为蛤"）而无转化叙事注解，是否需要在中长文本补一句性质标注（展开版已有）？2) "露之三部曲"（白露→寒露→霜降）是跨卡对照的归纳表述，是否保留此修辞还是改为平实列举？3) 重阳段"邻近而非同一日"的双锚表述是否足够防误读，还是需加逐年漂移示例？4) why_it_matters"把温度变化写进语言"的解释性收束是否越界？5) 日期异文以"10月上旬"回避的处理是否可接受？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### glob-hanlu-kanro-japan（GlobalExpression · risk=high · impact=global）
- Claim：待核验（Candidate）——"寒露（かんろ）"随汉字历法体系传入日本并沿用：NAOJ现行一览列九月節/195°/冷露释名
- Exact Evidence（逐字）：'寒露 (かんろ) 九月節 195° 秋が深まり野草に冷たい露がむすぶ'（NAOJ二十四節気页）
- Source / Type / Access：source-naoj-24sekki-hanlu / institutional / direct-read（cross-checked，与中国三源跨语言一致）
- Scope / Period：日本历法文化层（机构现行发布）；民俗实践层零直读
- Why Review：GlobalExpression 类型按规则必入 C；risk=high；防"外国版寒露节"式强行对应是本卡红线（三要素已明示否定）
- What We Know / What We Don't Know：知：历法刻度层三项（名/黄经/月序标签）机构直读成立、释名冷露意象与中国命名句同构。不知：日本寒露相关民俗实践（若有）、传入年代、日本七十二候（鴻雁来賓等）在寒露段的承用细节
- Recommended Decision（建议，不代决）：保持 Candidate；民俗实践层直读（日本七十二候权威源）后再议是否扩展
- 链接：[[03_notes/glob-hanlu-kanro-japan|日本かんろ候选卡]]
- 审核问题：1) "冷露释名跨语言同构"是否会被读者误读为"日本承用了中国命名的全部语义"？2) same-time 关系值+传播框架的表述是否与雨水/秋分东亚卡口径一致？3) 是否应在扩展前先读日本七十二候源（鴻雁来/菊花開）？4) consent/license 两个 pending 字段的处置流程？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核
### sci-hanlu-longitude-195 — 寒露=黄经195°、公历10月上旬（第17个、秋季第五个；日期范围两系并见未裁决） · Why：引擎 finding=pending-primary-source（GB/T 33661-2017 正文未直读，继承立春待办）；日期范围"10月8日或9日"（非遗网2017页）vs"10月7日至9日"（新华两稿）的裁决需逐年天文年历 · 链接：[[03_notes/sci-hanlu-longitude-195|黄经195°定义]] · Decision：（留空）
### trad-hanlu-nongshi — 种麦谚地域版图（华北/河南陕西关中两套时窗+气候变暖推迟+秋收农事） · Why：引擎 finding=pending-primary-source（人大页《四民月令》引文为转引未回原书；两套种麦谚的方志级溯源未做）；非遗网谚群多数字条未标流传地 · 链接：[[03_notes/trad-hanlu-nongshi|寒露农事]] · Decision：（留空）

## D · Needs Research
- 日期范围两系裁决：逐年《中国天文年历》寒露交节日核算（10月7日是否实际出现），主用口径待定
- 三候现代物候验证：雁类分批南迁（先至/后至）的鸟类学观测、黄雀秋季动态、菊花花期观测（中国物候观测网）
- 斗蟋蟀断代文献：《促织》谱系与南宋蟋蟀文化史（"贾似道"类流行说法须直读一手）；北京/杭州斗蟋蟀的地方文献与当代实践
- 老南京"寒露茶/正秋茶"的茶业与地方志源；菊花酒酿造地方民俗志；饮菊花酒与重阳菊花酒的同异
- 唐宋重阳文献直读（《東京夢華錄》重阳条等），补荆楚（六世纪）→燕京（清末）之间的谱系中段
- 重阳与寒露逐年相对位置核算表（历表数据源紫金山天文台数据未入库）
- 元稹《咏廿四气诗·寒露九月节》全诗文本：维基文库无组诗页（wave1 确认），敦煌写本校录本人工核读
- 白居易《池上》系年与《全唐诗》卷448异文比对；唐人其他寒露字面诗（戴察《月夜梧桐叶上见寒露》全文）
- 日本かんろ民俗实践层与日本七十二候（寒露段候名）权威源直读；东亚双地比较（朝鲜半岛한로）
- 高原雪害与寒露干旱的气象机构源回溯（非遗网未标原始出处）
- GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）

## A · Auto Candidate（仅链接）
- [[03_notes/hist-yueling-hanlu-pentads|寒露三候：主宾注文与转化叙事]]（high）
- [[03_notes/hist-hanlu-naming|寒露命名：与白露的对偶递进]]（high）
- [[03_notes/sci-hanlu-cooling-transition|由凉转寒的过渡与霜冻边界]]（high）
- [[03_notes/hist-hanlu-chongyang-adjacent|重阳节邻近辨析（双日期锚）]]（high）
- [[03_notes/trad-hanlu-customs-food|寒露习俗与食俗地域版图]]（medium）
- [[03_notes/lit-baijuyi-hanlu-chishang|白居易《池上》：寒露入诗]]（medium）

---

# 18 霜降（shuangjiang）· 审核分节

研究摘要：本轮查清霜降的现代天文定义（第18个节气、秋季最后一个，太阳黄经210°，公历10月23日至24日前后——非遗网"10月23日左右"与新华社"10月24日前后"两口径并存，2017/2021实例均10月23日）、《月令》"霜降，九月中。氣肅而凝露結為霜矣"与三候逐字文本（正文作"豺祭獸"，注引《月令》作"豺乃祭獸戮禽"，今通行"豺乃祭兽"为后者文本层）、霜的形成机制三源直读闭环（"皆由地发，非从天降"、晴夜辐射冷却至0℃以下水汽凝华、霜打洼地=冷空气下沉积聚、霜≠霜冻）、壮族霜降节四要素与两级非遗身份（2014国家级扩展项目Ⅹ-68；人民网直读称其随"二十四节气"2016年列入UNESCO、天等县为10个代表性社区之一）。最大的坑是两个：①霜降习俗（柿子/进补/红叶/送芋鬼等）古籍谱系为空，全部停留在机构汇编层，"自古"类断代一律未写；②"霜降=昼夜温差最大"等流行说法未获直读未采。

路由统计：A 3 · B 3 · C 2 · D 1（引擎表中另有6张共享卡路由 human-review，属既有状态不入包）；日志：[[07_research/research-shuangjiang-batch-log|研究日志]]

## C · 必须人工审核

### region-shuangjiangjie-tiandeng（CulturalFact · risk=high · impact=term）
- Claim：壮族霜降节为壮族节令民俗（广西天等、大新、德保、靖西、那坡等县，天等最典型），节期=每年霜降后9天内（头降/中降/尾降三阶段），数万人参加；非遗身份两级——国家级"农历二十四节气"（Ⅹ-68）2014年第四批扩展项目（天等县申报/保护）+人民网称其随"二十四节气"2016年列入UNESCO名录、天等县为10个代表性社区之一；节俗=稻作酬谢庆丰收、明嘉靖融入纪念瓦氏夫人、清鼎盛官民共祭+边贸、当代唱山歌/打榔舞/拜囊海/戏剧/体育/走亲访友。
- Exact Evidence（逐字）：项目页："壮族霜降节在每年农历霜降后的9天内举行，每年参加人数有数万人之多""项目序号：516；项目编号：Ⅹ-68；公布时间：2014(第四批)；类型：扩展项目；申报地区或单位：广西壮族自治区天等县"；人民网2022："壮族霜降节作为'二十四节气——中国人通过观察太阳周年运动而形成的时间知识体系及其实践'的组成部分之一，于2016年被联合国教科文组织列入人类非物质文化遗产代表作名录，广西壮族自治区崇左市天等县成为10个代表性社区之一。……分为头降、中降、尾降三个阶段。唱山歌，打榔舞、拜囊海等特色民俗活动，是霜降节必不可少的重头戏"。
- Source / Type / Access：非遗网项目页+节气名录页（institutional/direct-read）+ 人民网广西2022现场报道（institutional/direct-read）——两独立发布方。
- Scope / Period：广西西南部五县；节期锚霜降后9天；历史层明嘉靖/清/改革开放后（机构著录，未附文献）。
- Why Review：risk=high（活态非遗+民族叙事+英雄人物瓦氏夫人）；"明嘉靖融入"等断代无文献标注；UNESCO"组成部分/10社区"表述仅人民网一源。
- What We Know / What We Don't Know：节期/地域/两级身份/核心活动名有直读；不知道瓦氏夫人节俗化的方志依据、头降中降尾降分工、拜囊海内容、文旅部公告原文字段。
- Recommended Decision（建议，不代决）：approve-with-notes（四要素与两级身份双源直读）；建议补文旅部名录公告与UNESCO申报文本层后升 verified。
- 链接：[[03_notes/region-shuangjiangjie-tiandeng|壮族霜降节卡]]
- 审核问题：1) "10个代表性社区之一"是否需要UNESCO申报文本第二源？2) 明嘉靖断代按机构著录层处理是否足够，还是标注待方志？3) "农历霜降"页方欠精确表述的处理（按"霜降节气后9天"转写）是否接受？4) 民族叙事（瓦氏夫人抗倭）对外表述的边界？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### shuangjiang-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释（一句话/约100字/展开版）+ why it matters，逐句回溯9张支撑卡；叙事链六环（天文→时间→自然→农业→生活→文化）。
- Exact Evidence（逐字）：见卡 frontmatter `explanation`；关键支撑如"太阳到达黄经210°"（sci-210）、"皆由地发，非从天降……水汽直接凝华成白霜，洼地最容易结霜"（sci-frost）、"泉州有'霜降吃丁柿，不会流鼻涕'的老人说法（民间谚语，非健康建议）"（trad-customs）、"它是'农历二十四节气'2014年新增的国家级非遗扩展项目，并随'二十四节气'于2016年列入UNESCO"（region+shared）。
- Source / Type / Access：无独立来源（解释层），支撑卡均 direct-read。
- Scope / Period：全球天文事实+中国农事/习俗（具名地点：泉州/闽台/北京香山/广西天等等县）；三候与"露结为霜"标注古典层。
- Why Review：HumanExplanation 一律人工审核；finding=explanation-gated（支撑卡未 approved 禁止发布）。
- What We Know / What We Don't Know：三层无未背书的分布断言（逐句自查：仅"北方收尾/南方三秋""初霜南北差异"两条有支撑卡）；不知道英文机器草稿质量、展开版四段的信息密度是否合适。
- Recommended Decision（建议，不代决）：待 Stage 1 知识卡 Decision 后进入 Stage 2 Explanation Review；此前不得对外引用。
- 链接：[[03_notes/shuangjiang-human-explanation|霜降解释卡]]
- 审核问题：1) 一句话版同时容纳"黄经定义+霜非天降"是否过载？2) 展开版对"祭兽"只一句带过（古典叙事标注）是否恰当？3) "两千年后依然成立"的时间表述（why it matters）是否需要软化？4) 英文机器草稿处置方式？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核

### sci-shuangjiang-longitude-210 — 第18个节气/秋季最后/黄经210°/10月23日至24日前后（两机构口径逐字登记） · Why：pending-primary-source（GB/T 33661-2017 正文与《中国天文年历》未直读；日期区间由"23日左右/24日前后"两口径合成） · [[03_notes/sci-shuangjiang-longitude-210|链接]] · Decision：（留空）
### sci-shuangjiang-frost-formation — 霜=地表凝华非天降、辐射霜、霜打洼地、霜≠霜冻、初霜南北分布（三独立发布方直读闭环） · Why：pending-primary-source（初霜分布统计出处、霜冻业务标准未直读；机制本身三源齐） · [[03_notes/sci-shuangjiang-frost-formation|链接]] · Decision：（留空）
### trad-shuangjiang-customs — 柿子（泉州丁柿谚）/贴秋膘/赏菊/送芋鬼/迎霜/香山红叶，地域逐条限定 · Why：pending-primary-source（全部条目机构汇编层，古籍方志源缺——谱系空缺本身是记录重点） · [[03_notes/trad-shuangjiang-customs|链接]] · Decision：（留空）

## D · Needs Research

- glob-shuangjiang-firstfrost-dates（北美 first frost date Candidate）：almanac.com/NOAA 霜日页直读（本轮抓取被拒）后升格；或改以日语霜降（NAOJ已直读）作第二 Candidate。三要素已备，relationship=shared-nature。
- 元稹《咏廿四气诗·霜降九月中》可靠文本：点校本/图书馆途径（维基文库无组诗页）。
- 霜降习俗古籍/方志源：泉州丁柿谚、闽台进补、烟台迎霜、高明送芋鬼。
- 壮族霜降节细节：头降/中降/尾降分工、拜囊海仪式、打榔舞形态、壮语名；文旅部2014公告原文与"10个代表性社区"清单。
- 初霜分布统计出处（国家气候中心）；霜冻预警业务标准与"黑霜/白霜"官方术语；辐射霜完整分类。
- 三候现代物候观测（豺科捕猎/落叶/虫眠）。
- 杜牧《山行》印本核对（千家诗/樊川文集）与系年。
- 视觉/声音素材授权（霜花、香山红叶、柿子、打榔舞影像与榔声）。

## A · Auto Candidate（仅链接）

- [[03_notes/hist-yueling-shuangjiang-pentads|月令霜降三候]]（high）
- [[03_notes/trad-shuangjiang-nongshi|霜降农事与农谚]]（medium）
- [[03_notes/lit-shuangjiang-dumu-shanxing|杜牧《山行》]]（medium）

---

# 19 立冬（lidong）· 审核分节

研究摘要：本轮查清立冬的现代天文定义（黄经225°、第19个节气、公历11月7日或8日）、《月令》"立冬，十月節。冬，終也，萬物收藏也"定义句与三候逐字文本（含"雉入大水为蜃"注文全文与"立字解見前"→立春条回指互证）、"迎冬于北郊"国家祀典谱系（《礼记·月令》直读+《古今图书集成》岁功典第084卷辑《淮南子》"迎歲"异文/《后汉书》黑郊黑帝元冥/唐宋祀黑帝以顓頊配）、立冬≠气象入冬（候温≤10℃标准+入冬日期漠河9月上旬至南京11月19日梯度+深圳常年1月21日反例）、清代九省方志立冬习俗与当代食俗的地域谱系。最大的坑是三个：①"立冬吃饺子因'交子之时'"词源——非遗网自身即标为"说法"，古籍直读零命中，按 Modern Popularization 层处理并警示"北方吃饺子"不得写成"中国人立冬吃饺子"；②传李白《立冬》"冻笔新诗懒写"在维基文库无文本、岁功典立冬部艺文诗目亦无李白，真伪存疑，文学卡改以刘基《立冬日作》直读建卡；③"天子亲率"实为《礼记》直读"親帥"、"赐群臣冬衣"不见于直读原文——两处流行转写均如实记异文。

路由统计：A 3 · B 3 · C 3 · D 1（引擎表中另有6张共享卡路由 human-review，属既有状态不入包）；日志：[[07_research/research-lidong-batch-log|研究日志]]

## C · 必须人工审核

### hist-lidong-yingdong-beijiao（HistoricalRecord · risk=high · impact=term）
- Claim：迎冬于北郊的国家祀典谱系：《礼记·月令》孟冬"先立冬三日太史告'盛德在水'→天子斋→立冬之日親帥三公九卿大夫迎冬于北郊→還反賞死事恤孤寡"；《淮南子·时则训》同载作"迎歲"（异文）；汉代百官衣皂迎气黑郊、祭黑帝元冥歌《元冥》舞《育命》；唐宋祀黑帝以顓頊（高阳氏）配。
- Exact Evidence（逐字）：《礼记·月令》（维基文库直读）："立冬之日，天子親帥三公、九卿、大夫以迎冬於北郊，還反，賞死事，恤孤寡。"；岁功典第084卷辑《淮南子》时则训："立冬之日，天子親帥三公九卿、大夫以迎歲於北郊，還，乃賞死事，存孤寡。"；辑《后汉书》祭祀志："立冬之日，迎冬於北郊，祭黑帝元冥。車旗服飾皆黑，歌《元冥》，八佾舞《育命》之舞。"；辑《宋史》礼志："立冬祀黑帝，以帝高陽氏配，元冥、辰星、三辰、七宿從祀。"
- Source / Type / Access：source-wikisource-lidong-liji-yueling / historical / direct-read；source-gjts-suigong-lidong / historical / direct-read；source-ihchina-lidong-feature / institutional / direct-read（现代转述层）。
- Scope / Period：礼经文本（先秦至汉定型）→汉→唐宋正史；国家祀典层，不含民间形态；断代只断"文献所载"。
- Why Review：risk=high（礼制归属类命题）；《后汉书》《唐书》《宋史》诸条为清代类书转引（原书未直读）；"赐群臣冬衣"句不见于直读原文。
- What We Know / What We Don't Know：《礼记·月令》迎冬句两处独立直读逐字一致；不知道《吕氏春秋·孟冬纪》平行文本（维基文库空壳）、迎冬礼废止时间、明清实践形态。
- Recommended Decision（建议，不代决）：approve-with-notes（礼记直读扎实+类书辑文链自洽）；或 hold 待《吕氏春秋》与正史礼志原书直读。
- 链接：[[03_notes/hist-lidong-yingdong-beijiao|迎冬于北郊礼制卡]]
- 审核问题：1) "親帥"（直读）vs 流行转写"亲率"，对外文案采用口径？2) "赐群臣冬衣"是否必须在补源前从对外内容中剔除？3) 类书转引的正史条目在何种层级可用（直接引用 or 仅线索）？4) "祀典层≠民间形态"的分层表述是否足够防误读？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### trad-lidong-budong-jiaozi（Tradition · risk=high · impact=term）
- Claim：当代立冬食俗地域分布——北方吃饺子（两机构稿均作地域限定）；台湾羊肉炉/姜母鸭、闽南麻油鸡/四物鸡（非遗网）；南京"一日半根葱，入冬腿带风"吃生葱（中国天气网江苏站，单源口传层）。"交子之时"解释非遗网自身列为"两种说法"之一，本轮古籍直读零命中——按 Modern Popularization 层处理。"全国各地纷纷补冬"为页方泛化断言，未采信。
- Exact Evidence（逐字）：非遗网："北方吃饺子……为什么吃饺子？有两种说法：一是'立冬不端饺子碗，冻掉耳朵没人管'；二是'交子之时'吃饺子。"；新华网2023："民间有'立冬食补'的习俗，北方吃饺子，南方通常吃萝卜炖羊肉、姜母鸭、鲫鱼豆腐汤等进补菜品"；中国天气网江苏站："南京有句谚语，'一日半根葱，入冬腿带风'……按老人的讲法，葱性温味辛……"；负面证据：岁功典立冬部所辑九省方志无任何饺子/馄饨/进补食俗记载。
- Source / Type / Access：source-ihchina-lidong-feature / institutional / direct-read；source-xinhua-lidong-2023 / institutional / direct-read；source-weathercn-lidong-shengcong / institutional / direct-read（verification=unverified）。
- Scope / Period：当代流行实践（机构稿2000s-2023）；"交子"词源断代不可考；方志对照层为清代。
- Why Review：risk=high（地域泛化+现代词源倒灌双高危区）；引擎无 finding 但属泛化红线卡；南京生葱单源。
- What We Know / What We Don't Know：当代地域分布两机构直读一致；不知道"交子"词源有无文献源头、北方饺子俗的起始年代、南京生葱第二来源。
- Recommended Decision（建议，不代决）：approve-with-notes（地域限定与词源分层已落实）；"交子"表述在对外内容中保持"一种流行的民间解释"措辞。
- 链接：[[03_notes/trad-lidong-budong-jiaozi|立冬吃饺子与补冬卡]]
- 审核问题：1) "北方吃饺子"的"北方"边界（东北/华北/西北？）是否需进一步限定？2) "交子之时"维持 Modern Popularization 层是否可接受？3) 南京生葱单源是否允许进入解释卡（当前已进入，标"口传说法"）？4) 非遗网泛化句的弃用处理是否同意？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### lidong-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释（一句话/约100字/展开版）+ why it matters，逐句回溯 11 张支撑卡；叙事链六环。
- Exact Evidence（逐字）：见卡 frontmatter `explanation`；关键支撑如"太阳到达黄经225°"（sci-longitude）、"冬，终也，万物收藏也"（月令卡）、"气候学以连续5天平均气温低于10℃为入冬标准……南京的11月19日"（两套冬天卡）、"北方吃饺子……台湾、闽南……补冬"（食俗卡，地域限定）。
- Source / Type / Access：无独立来源（解释层），支撑卡均 direct-read（含1张单源口传层）。
- Scope / Period：全球天文事实+中国礼制/农事/习俗（具名地域/朝代）；古典文本标注经验层。
- Why Review：HumanExplanation 一律人工审核；finding=explanation-gated（支撑卡未 approved 禁止发布）。
- What We Know / What We Don't Know：三层无分布性断言（逐句自查，气候食俗全部具名）；不知道英文机器草稿质量、"今天最广为人知"编辑判断措辞是否合规范。
- Recommended Decision（建议，不代决）：待 Stage 1 知识卡 Decision 后进入 Stage 2 Explanation Review；此前不得对外引用。
- 链接：[[03_notes/lidong-human-explanation|立冬解释卡]]
- 审核问题：1) 一句话版同时装"迎冬礼+饺子+补冬"三个信息是否过载？2) "今天最广为人知的立冬食俗有明确地域"句的"最广为人知"是否需删或换证据表述？3) 展开版清代方志段（杭州菊浴/归安祭灶/安化婚嫁）的详略是否合适？4) 英文机器草稿处置方式？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核

### sci-lidong-longitude-225 — 黄经225°/第19个/11月7日或8日（2017、2023双实例） · Why：pending-primary-source（GB/T 33661-2017 正文未直读，继承立春待办；黄经由非遗网+中国天气网双机构直读支持） · [[03_notes/sci-lidong-longitude-225|链接]] · Decision：（留空）
### sci-lidong-vs-meteorological-winter — 立冬≠气象入冬，候温≤10℃标准+常年入冬梯度（漠河9月上旬→南京11月19日→深圳1月21日） · Why：pending-primary-source（QX/T 152-2012 标准正文未直读；两机构阈值表述存在算法口径差已记 exceptions） · [[03_notes/sci-lidong-vs-meteorological-winter|链接]] · Decision：（留空）
### hist-lidong-fangzhi-customs — 清代九省方志立冬习俗（杭州菊浴/归安祭灶/宿松上冢修塘堰/安化婚嫁冰泮乃止/石城禳火災） · Why：pending-primary-source（原方志未直读，全部为岁功典转引；修纂年代未考订） · [[03_notes/hist-lidong-fangzhi-customs|链接]] · Decision：（留空）

## D · Needs Research

- glob-lidong-samhain-november（引擎 needs-research，insufficient-evidence）：Samhain 词条与学术来源（Ronald Hutton 等）直读后核验"冬始界标/cross-quarter day/凯尔特新年争议"，三要素已备但零直读。
- 传李白《立冬》文本源头（《全唐诗》李白卷、明清选本）；紫金霜《立冬》同。
- 《吕氏春秋·孟冬纪》直读（维基文库空壳）；"赐群臣冬衣"出处。
- 《帝京岁时纪胜》《清嘉录》立冬条（清末食俗与"交子"词源排查入口）。
- 岁功典藝文二诗正文（宋唐庚《立冬後作》、明王穉登《立冬》）。
- 冬灌机构科普源；三候现代物候观测（初冰/土壤始冻/雉类迁徙）。
- QX/T 152-2012 与 GB/T 33661-2017 标准正文；常年入冬逐年数据源。
- 立冬专属国家级非遗锚点（本轮排查未发现）；台湾/闽南补冬与南京生葱第二来源。
- 视觉/声音素材授权研究（北郊、薄冰、雉、菊花、菊花茶）。

## A · Auto Candidate（仅链接）

- [[03_notes/hist-yueling-lidong-pentads|月令立冬三候]]（high）
- [[03_notes/lit-lidong-liuji-rizuo|刘基《立冬日作》]]（medium）
- [[03_notes/trad-lidong-nongshi|秋收冬藏关口与农谚]]（medium）

---

# 20 小雪（xiaoxue）· 审核分节

研究摘要：本轮查清小雪的现代天文定义（黄经240°、公历11月22日或23日、第20个/冬季第二个，非遗网+新华社+中新社三发布方直读）、《月令》"小雪，十月中。雨下而為寒氣所薄，故凝而為雪。小者，未盛之辭"与三候逐字文本（虹藏不见/天气上升地气下降/闭塞而成冬；与清明"虹始见"同书对偶、与大雪"大者，盛也"命名对偶、与立冬"十月節"构成节/中气对——三组跨节气证据均同页直读）、"节气小雪≠天气小雪/当日不一定降雪"的机构口径澄清（含新华社环流机制表述）、南北腌藏习俗的证据分级（南京谚语锚+清人《真州竹枝词引》媒体转引+北方储菜腌菜+王娟审慎引语）、戴叔伦（一说释清昼）《小雪》诗双文本直读（本轮唯一节气字面题名诗）。最大的坑有二：①腌腊习俗古籍层完全落空（《清嘉录》《帝京岁时纪胜》《真州竹枝词引》维基文库均无书），只能以机构/媒体层+《燕京岁时记》十二月酸菜旁证支撑，卡内南北分节+证据分级处理；②"小雪"字面诗稀缺且带归属异说，已如实入卡不作定论。

路由统计：A 4 · B 3 · C 3 · D 0（引擎表中另有6张共享卡路由 human-review，属既有状态不入包）；日志：[[07_research/research-xiaoxue-batch-log|研究日志]]

## C · 必须人工审核

### trad-xiaoxue-pickling-curing（Tradition · risk=high · impact=term）
- Claim："小雪腌菜，大雪腌肉"是流传的小雪节令俗谚（人民日报海外版2015稿明确标注为"南京有谚语"；新华社2022稿作为南北通行节气俗语引用）；南方（南京/仪征线索/杭州）腌菜腌腊、北方储大白菜腌菜（雪里红）、包头"小雪杀猪，大雪宰羊"分记，不得合并为全国断言。
- Exact Evidence（逐字）：人民日报海外版2015："南京有谚语：'小雪腌菜，大雪腌肉。'小雪之后，家家户户开始腌制、风干各种蔬菜……"；"清人著作《真州竹枝词引》中记载：'小雪后，人家腌菜，曰'寒菜'……蓄以御冬。'真州在今天江苏仪征。杭州人往往也会趁着这个节气开始腌制酱鸭、腊肉。"；新华社2022："'小雪腌菜，大雪腌肉。'小雪节气，从南方到北方，有腌咸菜、尝糍粑、晒鱼干等习俗。"；中新社2019："冬天的新鲜蔬菜没有那么多，所以，小雪腌菜的习俗也是由来已久……'雪里红'等也颇受青睐。"；王娟："小雪更多的是一个表示气候的节气，在习俗上没什么特别之处，'北方就会开始储存大白菜，准备过冬了。'"；《燕京岁时记》："大白菜者，乃鹽酸白菜也。"（十二月段）
- Source / Type / Access：人民日报海外版2015 + 新华社2022 + 中新社2019 + 非遗网专题 + 燕京岁时记（维基文库）/ institutional+historical / 全部 direct-read。
- Scope / Period：当代机构口径（2015-2022）；古籍锚仅清人《真州竹枝词引》（转引级）与清末北京十二月酸菜条（时序旁证）；地域：南京/仪征/杭州/北方/包头分记。
- Why Review：risk=high（民俗归属类命题+南北泛化高危区）；finding=pending-primary-source（腌腊古籍层零直读锚）。
- What We Know / What We Don't Know：谚语的南京锚、南北储藏差异、腊肉流程的机构级一致性；不知道"小雪腌菜"的清以前文献谱系、东北酸菜与雪里蕻的方志级分布。
- Recommended Decision（建议，不代决）：approve-with-notes（地域分记+层级标注已内建）或 hold 待《真州竹枝词引》原书直读。
- 链接：[[03_notes/trad-xiaoxue-pickling-curing|腌藏习俗卡]]
- 审核问题：1) "南京有谚语"与"从南方到北方"两级口径并列的写法是否稳妥？2) 《真州竹枝词引》转引级证据是否允许出现在正式内容（标注"据人民日报海外版转引"）？3) 《燕京岁时记》十二月酸菜条作"时序旁证"的降权用法是否接受？4) 王娟"习俗上没什么特别之处"的审慎引语与习俗卡的张力如何对外表述？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### glob-xiaoxue-shousetsu-east-asia（GlobalExpression · risk=high · impact=global）
- Claim：待核验（Candidate）："小雪"随汉字历法体系传播至日本沿用至今——NAOJ 现行解说明记小雪（しょうせつ）为十月中、太陽黄経240°，释名"寒くなって雨が雪になる"（天渐寒，雨转为雪），与《月令》"雨下而为寒气所薄"语义相承。
- Exact Evidence（逐字）："二十四節気は日本や中国で伝統的に用いられる季節の目印で、各節気は太陽黄経（視黄経）の値によって定義されています。""小雪 (しょうせつ) 十月中 240° 寒くなって雨が雪になる"。
- Source / Type / Access：source-naoj-24sekki-xiaoxue / institutional / direct-read（verification=cross-checked：240°与中方三源、"十月中"与维基文库《月令》跨语言一致）。
- Scope / Period：日本历法文化（现行机构发布）；民俗实践层零来源。
- Why Review：GlobalExpression 一律 C；跨文化最高敏区（防"外国版小雪节"叙事）；finding=global-candidate-hold。
- What We Know / What We Don't Know：历法刻度层三要素（名称/定义/月序标签）机构直读齐备；不知道日本小雪的任何民俗实践、朝鲜半岛소설条目。
- Recommended Decision（建议，不代决）：保持 Candidate；补日本民俗实践权威源后由跨文化顾问审。
- 链接：[[03_notes/glob-xiaoxue-shousetsu-east-asia|日本しょうせつ卡]]
- 审核问题：1) same-time+传播关系定性是否恰当？2) "释名语义相承"的观察（interpretation 层）与"日方释名译自《月令》"的界限是否守住？3) 是否仿雨水卡扩展朝鲜半岛소설？4) NAOJ 同 URL 多节气侧源卡（雨水/秋分/小雪）的处理是否接受？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### xiaoxue-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释（一句话/约100字/展开版）+ why it matters，逐句回溯 11 张支撑卡；分布性短语逐句自查完成。
- Exact Evidence（逐字）：见卡 frontmatter `explanation`；关键支撑如"太阳到达黄经240°"（sci-longitude）、"古籍说'小者，未盛之辞'"（hist-naming）、"小雪节气当天不一定下雪，也不等于气象学上'小雪'这个降雪等级"（sci-not-necessarily-snow）、"南京有'小雪腌菜，大雪腌肉'的谚语"（trad-pickling）。
- Source / Type / Access：无独立来源（解释层），支撑卡均为 direct-read。
- Scope / Period：全球天文事实+中国习俗（具名地点）；古典文本标注经验层。
- Why Review：HumanExplanation 一律人工审核；finding=explanation-gated（支撑卡未 approved 禁止发布）。
- What We Know / What We Don't Know：三层无分布性断言（自查清单入卡）；不知道英文机器草稿质量、《真州竹枝词引》转引级在解释中的弱化程度是否合编辑预期。
- Recommended Decision（建议，不代决）：待 Stage 1 知识卡 Decision 后进入 Stage 2 Explanation Review；此前不得对外引用。
- 链接：[[03_notes/xiaoxue-human-explanation|小雪解释卡]]
- 审核问题：1) 一句话版同时装下"气候趋势名+南北储备习俗"是否过载？2) 展开版"比冰箱早了一千多年"的表述（why-it-matters）是否需要文献背书或软化？3) "北方习惯储存大白菜"由机构稿+学者引语支撑的强度是否足够？4) 英文机器草稿处置方式？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核

### sci-xiaoxue-longitude-240 — 黄经240°/11月22日或23日定义，三发布方直读（非遗网+新华社+中新社） · Why：pending-primary-source（GB/T 33661-2017 正文未直读） · [[03_notes/sci-xiaoxue-longitude-240|链接]] · Decision：（留空）
### sci-xiaoxue-not-necessarily-snow — "节气名≠天气事件"澄清+环流机制+南北同节气差异 · Why：pending-primary-source（环流机制仅新华社一稿口径；初雪气候统计未直读；"降雪量最小"类断言无源已排除） · [[03_notes/sci-xiaoxue-not-necessarily-snow|链接]] · Decision：（留空）
### hist-xiaoxue-naming — 《月令》"小者，未盛之辭"与大雪"大者，盛也"同页对偶 · Why：pending-primary-source（《群芳谱》句为媒体转引级已入 exceptions，不入证据主链） · [[03_notes/hist-xiaoxue-naming|链接]] · Decision：（留空）

## D · Needs Research

- 《真州竹枝词引》原书直读（腌菜"寒菜"条）；《清嘉录》卷十、《帝京岁时纪胜》十月条腌腊记载：图书馆/古籍库途径。
- 初雪气候统计文本版机构源（中国天气网视频页未直读）；"小雪节气降雪量最小"类流行断言的数据排查。
- 环流机制（东亚经向环流/西伯利亚低槽东移）的气象机构第二直读源。
- 《群芳谱》（明·王象晋）原书直读核对"小雪气寒而将雪矣"句。
- 小雪专属国家级非遗锚点排查（本轮 site:ihchina.cn 无命中；土家族杀年猪、腌菜技艺的名录归属待查）。
- 三候现代物候观测（虹的可见期、初雪日期；中国物候观测网）。
- 小雪文学谱系：全唐诗/全宋诗其他"小雪"题名诗；戴叔伦/释清昼归属的版本学考证。
- 日本小雪民俗实践（俳句季语"小雪"）与朝鲜半岛소설权威源。
- 东北酸菜、雪里蕻腌制的方志级地域核验；糍粑"祭牛神"文献源头；台湾乌鱼汛渔业志。
- 《中国天文年历》小雪逐年交节时刻入库；GB/T 33661-2017 正文直读。
- 视觉/声音素材授权研究（初雪、腌腊场景、雪落声）。

## A · Auto Candidate（仅链接）

- [[03_notes/hist-yueling-xiaoxue-pentads|月令小雪三候]]（high）
- [[03_notes/trad-xiaoxue-nongshi|越冬管理与冬修水利]]（medium）
- [[03_notes/trad-xiaoxue-winter-customs|糍粑/晒鱼干/刨汤]]（medium）
- [[03_notes/lit-daishulun-xiaoxue|戴叔伦〈一说释清昼〉《小雪》]]（medium）

---

# 21 大雪（daxue）· 审核分节

研究摘要：本轮查清大雪的天文定义（黄经255°、12月7日或8日、第21个/冬季第三个/仲冬开始，非遗网6981×中国天气网×新华网三独立直读）、三候原文与注文（月令集解直读，发现"至此而雪盛矣"与机构引文"雪盛也"的也/矣异文）、节气"大雪"与降雪等级"大雪"的同词异义知识锚（中国天气网直读含等级标准）、瑞雪兆丰年的农谚/科学机制两层分卡、腌肉与封河习俗（机构汇编层，古籍锚缺失如实记录）、台湾乌鱼汛地域卡、柳宗元《江雪》直读（咏雪诗身份声明）。最大的坑有三个：一是寒号鸟释义链——"鹖鴠→寒号虫→复齿鼯鼠"的第一环恰是《集解》注文本人驳斥过的一环，当代机构科普却普遍沿用被驳释法（contested 卡待裁决）；二是腌肉断代高危（机构层可证、古籍层空白，引擎判 modern-as-ancient）；三是两处 YAML 串内 ASCII 单引号翻车（已修，复跑通过）。

路由统计：A 7 · B 2 · C 3 · D 1（本节气卡；另有6张共享卡 human-review-required 属系统级既有卡，不在本包）；日志：[[07_research/research-daxue-batch-log|研究日志]]

## C · 必须人工审核

### hist-daxue-hanhaoniao-bianxi（HistoricalRecord · risk=high · impact=term）
- Claim：大雪初候"鹖鴠不鸣"的物种释义三层流变且互斥——(1)《集解》注文以鹖为"毅鸟"（似雉、有毛角）并明确反驳"鹖鴠=寒号虫/求旦之鸟"（"夜既鳴，何為不鳴耶"）；(2) 当代机构科普普遍沿用寒号虫线（非遗网2017"寒号虫（一种鸟名）"、光明网2023引郑玄注）；(3) 现代动物学考据寒号鸟=复齿鼯鼠（啮齿目，《南村辍耕录》"四足，有肉翅，不能飞"）。
- Exact Evidence（逐字）："鶡，毅鳥也。似雉而大，有毛角，鬬死方休……若郭璞《方言》：似雞，冬無毛，晝夜鳴，即寒號蟲。陳澔與方氏亦曰求旦之鳥，皆非也。夜既鳴，何為不鳴耶？"（《月令七十二候集解》维基文库本）／"此时天气寒冷，寒号虫（一种鸟名）停止鸣叫"（非遗网2017）／"五台山有鸟、名寒号虫，四足，有肉翅，不能飞。其粪即五灵脂。"（都市快报引《南村辍耕录》卷十五）。
- Source / Type / Access：source-yueling-qishierhou-wikisource（historical·direct-read）、source-ihchina-daxue-feature（institutional·direct-read）、source-zjol-hanhaoniao（cultural·direct-read）、source-gmw-ruixue-daxue（institutional·direct-read）。
- Scope / Period：古典注疏（元题名文本）→ 当代机构科普（2017/2023）→ 动物学考据（2017）；复齿鼯鼠分布中国南北山地。
- Why Review：引擎 finding=contested-open（contested=true，三层释义未决）；risk=high（Legend-as-Fact 高危：流行科普把断层链焊成"大雪寒号鸟不叫"）；物种层直读源仅省级媒体一家（第二源仅检索摘要级）。
- What We Know / What We Don't Know：知：注文原文与驳斥逻辑、《辍耕录》"寒号虫"条、复齿鼯鼠动物学定性（单直读源）、机构科普采用寒号虫线的事实。不知：鹖的现代鸟类学对应（褐马鸡说未核）、复齿鼯鼠定性的第二直读机构源、郑玄注原文直读。
- Recommended Decision（建议，不代决）：按释义史分层卡采纳（三层各归其层）；对外内容中"寒号鸟不叫"只作释义史呈现；复齿鼯鼠第二源补读后可加强层三。
- 链接：[[03_notes/hist-daxue-hanhaoniao-bianxi|鹖鴠释义流变辨析卡]]
- 审核问题：1) 三层释义在解释层仅一笔带过（"寒号鸟说法本身在古籍注文中就被反驳过"），措辞是否可接受？2) contested=true 保持还是按"文献分歧已如实登记"改 false？3) 复齿鼯鼠定性单直读源是否足以支撑层三叙述（当前 medium）？4) 郑玄注转引是否需在卡内降权标注更醒目？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### trad-daxue-yanrou（Tradition · risk=high · impact=term）
- Claim："大雪腌肉"可确证于两个直读机构源（非遗网2017"老南京有句俗语，叫做「小雪腌菜，大雪腌肉」……南方很多人家忙着腌制「咸货」"；光明网2023同录并附"未曾过年，先肥屋檐"）；腌腊技艺的古籍谱系本轮无一手文献直读，"自古如此"不可写；与小雪节气侧腌腊卡分工待协调。
- Exact Evidence（逐字）："老南京有句俗语，叫做"小雪腌菜，大雪腌肉"。大雪节气一到，南方很多人家忙着腌制"咸货"。大雪节气天气寒冷，在不易保鲜的古时，人们发现此时腌制肉类食品不易变质，于是大雪节气一到，家家户户就忙着腌制咸肉，以迎接新年。"（非遗网大雪专题"节气习俗·腌肉"，2017）。
- Source / Type / Access：source-ihchina-daxue-feature（institutional·direct-read）、source-gmw-ruixue-daxue（institutional·direct-read）。
- Scope / Period：机构汇编层 2017/2023；地域叙述"老南京俗语+南方很多"；古籍层空白。
- Why Review：引擎 finding=modern-as-ancient（risk=high 断代高危）。注：卡内命题是否定式警示（""大雪腌肉自古如此"不可写"），疑似否定语境字面匹配触发；实质风险（机构层可证内容被上推为古俗）已在卡内显式防范——需人工确认这一定性。
- What We Know / What We Don't Know：知：两机构直读的谚语文本与当代实践叙述、动机解释（低温防腐）。不知：俗语的方志/俗语集出处、腌腊食品史谱系（腊日→腊味）、北方腌腊地域谱系、"南方很多"的逐地分布。
- Recommended Decision（建议，不代决）：采纳为"机构汇编层可确证的当代节气食俗"卡；维持"古籍锚缺失"警示；小雪侧腌腊卡建成后改为引用分工。
- 链接：[[03_notes/trad-daxue-yanrou|腌肉卡]]
- 审核问题：1) finding 系否定语境误报还是实质风险，请判读；2) "南方很多"是否需要进一步收缩为"机构页叙述"；3) 跨节气（小雪）俗语归属：俗语本体归小雪卡还是本卡？4) 腌雪菜线索保留在本卡还是移入 food 维度后续卡？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### daxue-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释+why_it_matters，全部回溯 supporting_knowledge_ids（16张：本节气11张+共享5张）。
- Exact Evidence（逐字）：见卡内三层文本（引擎 explanation-gated：Content Gate，支撑卡未 approved 禁止发布）。
- Source / Type / Access：解释层（无独立来源，逐句依赖支撑卡）。
- Scope / Period：面向零前提全球读者。
- Why Review：HumanExplanation 类型按规则必入 C；解释层含同词异义、三候阴阳框架、雪被机制、腌肉/封河/乌鱼汛地域限定句等多处需要与支撑卡逐句对表的表述；分布性短语已自查（"南方不少人家""黄河以北谚称"为有背书限定）。
- What We Know / What We Don't Know：知：三层文本逐句可回溯、Candidate 全球对照句未写入正文、待核内容（氮化物5倍/12月6日/养生）已排除。不知：英文译文质量（机器草稿）、支撑卡全部未经人工审核。
- Recommended Decision（建议，不代决）：Stage 1 知识卡 Decision 后再进入 Stage 2 解释层审核（沿立春/处暑流程）。
- 链接：[[03_notes/daxue-human-explanation|大雪解释卡]]
- 审核问题：1) 一句话版已自查修正"自古"超权（改为"当作……的时钟"，见修改记录），修正后措辞是否可接受？2) summary"机构记载此时……"句式是否可保留？3) 展开版"中国多数地区恰处降水稀少的时段"是否需要"常年"限定？4) 台湾乌鱼汛句在解释层的表述（"西部沿海迎来捕乌鱼的好时节"）与卡内"产量为2017转述"是否对齐？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核
### hist-yueling-daxue-pentads — 大雪三候原文+注文（鹖鴠不鸣/虎始交/荔挺出） · Why：引擎 finding=evidence-below-confidence（单直读方维基文库撑 high）；另登记"也/矣"异文与"鹃鸥不呜/荔挺=兰草"平行录文系统 · 链接：[[03_notes/hist-yueling-daxue-pentads|大雪三候]] · Decision：（留空）
### sci-daxue-longitude-255 — 大雪=黄经255°、12月7日或8日（第21个、冬季第三个、仲冬开始） · Why：引擎 finding=pending-primary-source（GB/T 33661-2017 正文未直读，继承立春待办；"12月6日"下限仅检索摘要级） · 链接：[[03_notes/sci-daxue-longitude-255|黄经255°定义]] · Decision：（留空）

## D · Needs Research
- 萨米雪知识直读核验：UiT 博士论文 PDF / Septentrio 论文直读后，glob-daxue-sami-snow-knowledge 方可脱离 Candidate；萨米社区 consent 流程
- 日语"大雪"同形异义镜像（节气 taisetsu vs 气象警报 oyuki）：日本气象厅/历法权威页直读后可另立 Candidate 卡，与中国"节气大雪≠天气大雪"互为镜像
- 《月令》"也/矣"异文校勘：中华书局印本/《四库》本对校；三候平行文献（《逸周书·时训》《礼记·月令》仲冬条）直读
- 鹖的现代鸟类学对应（褐马鸡说）与复齿鼯鼠第二直读机构源（中科院/林草局口径）；郑玄注《礼记·坊记》原文直读
- 高骈《对雪》维基文库直读（备选文学样本）；《江雪》校本与系年
- 大雪养生进补（非遗网"节气养生"段）建卡评估；中医养生内容是否入知识库的政策边界
- 清代冰嬉典制与东北西北冰上民俗直读（《钦定日下旧闻考》冰嬉条等）后另立 hist 卡
- "大雪不见雪"逐年降雪概率南北分布（国家气候中心/气候公报数据源）
- 雪水氮化物含量5倍说溯源（农业气象文献第二源）；雪被保温量化数据
- 腌腊食品史谱系（腊日→腊味）与"小雪腌菜，大雪腌肉"俗语出处（南京地方文献）
- 农谚文献首出与流传地域逐条核验；"大雪纷纷是旱年/丰年"异文关系
- 台湾乌鱼汛渔获统计与渔业史文献；乌鱼子加工谱系（如另立 food 卡）
- 12月6日交节年份实例与逐年时刻（紫金山天文台《中国天文年历》入库）
- GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）
- 元稹《咏廿四气诗》组诗文本（沿 wave1-2 结论仍无直读页，全波次待办）

## A · Auto Candidate（仅链接）
- [[03_notes/hist-daxue-naming|"大者，盛也。至此而雪盛矣"命名卡]]（high）
- [[03_notes/sci-daxue-jieqi-vs-tianqi|节气大雪≠天气大雪]]（high）
- [[03_notes/sci-daxue-snow-agronomy|瑞雪兆丰年的农艺机制（科学层）]]（high）
- [[03_notes/trad-daxue-ruixue|大雪农谚群（传统层）]]（medium）
- [[03_notes/trad-daxue-fenghe|"小雪封地，大雪封河"封河与冰上活动]]（medium）
- [[03_notes/region-daxue-taiwan-wuyu|台湾乌鱼汛地域卡]]（medium）
- [[03_notes/lit-liuzongyuan-jiangxue|柳宗元《江雪》]]（medium）

---

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

---

# 23 小寒（xiaohan）· 审核分节

研究摘要：本轮查清小寒的天文定义（黄经285°、公历1月5日或6日、第23个/冬季第五个/公历新年第一个，非遗网×新华网双直读）、三候原文与注文（月令直读，发现机构页"雉始鸲"与《月令》"雉雊"异文）、命名的"进程尺度"（月令+孝经纬+诗含神雾双古典源）、本节气科学锚"小寒常比大寒冷"（中国天气网1991-2020盘点：23省份小寒平均气温低于大寒、仅8沿海省市区例外、全国平均最低-5℃；人民日报北京个案；新华网定性句）、三九数九与九九消寒图（锚冬至辨析+帝京景物略原文经广群芳谱转引）、腊八日期锚辨析（农历十二月初八非节气日，荆楚-宋代-清末三段谱系，2018年腊八落大寒时段实例）、南京菜饭/广州糯米饭/天津黄芽菜地域食俗（单源机构层如实降权）、陆游《腊月》诗（元稹/黄庭坚两首选直读失败后的诚实降级）。最大的坑有三个：一是"名实倒挂"命题的地域边界必须钉死（23省/8沿海，全国泛化即翻车）；二是食俗卡的"古时"断代触发 modern-as-ancient finding（否定语境字面匹配，沿大雪腌肉卡先例）；三是文学首选全失败，改用腊月诗需身份声明防"陆游写小寒"式转述。

路由统计：A 3 · B 5 · C 3 · D 1（本节气卡；另有6张共享卡 human-review-required 属系统级既有卡，不在本包）；日志：[[07_research/research-xiaohan-batch-log|研究日志]]

## C · 必须人工审核

### sci-xiaohan-vs-dahan-temperature（ScientificFact · risk=high · impact=term）
- Claim：气象统计上"小寒比大寒冷"是多数情况——按1991至2020年30年平均气温，中国23个省份在小寒期间平均气温低于大寒，仅江苏、上海、浙江、福建、江西、广东、广西、海南8个沿海地区大寒更冷；我国平均气温在小寒达全年最低（约-5℃，同口径）；北京小寒平均约-5至-10℃、大寒略高1-2℃。
- Exact Evidence（逐字）："从1991至2020年的平均气温来看，23个省份在小寒期间平均气温低于大寒，仅有江苏、上海、浙江、福建、江西、广东、广西、海南等8个沿海地区大寒节气更冷。正所谓'小寒胜大寒，常见不稀罕'。""到小寒节气达到全年最低，仅有-5℃"（中国天气网2025盘点）；"以北京为例，小寒期间的平均气温约为零下5至零下10摄氏度，大寒期间则略高1至2摄氏度""北方小寒胜大寒，南方大寒冷小寒"（人民日报2026-01-03）；"从气象记录观察，小寒往往是全年最冷的时节"（新华网2023）。
- Source / Type / Access：source-weathercn-xiaohan-2025（institutional·direct-read）、source-people-xiaohan-dahan-2026（institutional·direct-read）、source-xinhua-xiaohan-2023（institutional·direct-read）、source-ihchina-xiaohan-feature（institutional·direct-read）。
- Scope / Period：1991-2020年30年气候平均；地域边界=23省 vs 8沿海省市区（命题内显式列出）；"期间"=15天节气时段口径非交节日。
- Why Review：risk=high（本节气最反直觉命题，泛化为"全国小寒最冷"即翻车——8沿海例外必须随行）；"我国平均气温-5℃"的统计口径页内无方法说明；"热量亏空峰值"机制仅媒体转述（已降入待核未入命题）。
- What We Know / What We Don't Know：知：三机构直读同向、23/8分省结论、北京个案、谚语层（小寒胜大寒常见不稀罕）。不知：逐省数值表（未随稿发布）、-5℃口径方法、机制一手文献、极端最低气温纪录日期归属（另一命题未查）。
- Recommended Decision（建议，不代决）：采纳为 high 数据锚卡；对外表述强制带"23省份/8沿海例外"限定；逐省地图化前须接国家气候中心级数据。
- 链接：[[03_notes/sci-xiaohan-vs-dahan-temperature|小寒与大寒谁更冷]]
- 审核问题：1) risk=high 是否维持（命题有30年数据背书，风险主在表述边界）？2) "-5℃"保留原句引用是否足够，还是需删除数值？3) 民间归纳"北方小寒胜大寒，南方大寒冷小寒"与23/8统计并列呈现的方式是否妥当？4) 解释层引用此卡时的最简合规表述是什么（"多数省份"还是必须带例外清单）？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### trad-xiaohan-caifan-nuomifan（Tradition · risk=medium · impact=term）
- Claim：非遗网小寒专题以地域条目记载：南京"老南京人一般还会煮菜饭吃"（矮脚黄青菜、咸肉片、香肠片或板鸭丁、生姜粒与糯米同煮）；广州"小寒这天……早餐吃糯米饭"（六成糯米四成香米，拌腊肉腊肠花生葱白）；天津引《津门杂记》载旧时小寒吃黄芽菜。均限各自地域，不构成全国性小寒食俗；古籍谱系层（"自古"）无一手文献。
- Exact Evidence（逐字）："古时南京人对小寒很重视，现在虽然有些淡化，但老南京人一般还会煮菜饭吃。菜饭的内容多样，有矮脚黄青菜、咸肉片、香肠片或是板鸭丁，再加上一些生姜粒，与糯米一起煮，香鲜可口。""小寒这天，广州人有早餐吃糯米饭的习惯。为避免过于软糯，配比一般是六成糯米、四成香米……广东俗语说：'小寒大寒，无风自寒。'""据《津门杂记》记载，旧时天津地区有小寒吃黄芽菜的习俗。"（非遗网小寒专题2018）。
- Source / Type / Access：source-ihchina-xiaohan-feature（institutional·direct-read，单源）。
- Scope / Period：机构汇编层2018；南京/广州/天津三地域条目；《津门杂记》经转引未直读。
- Why Review：引擎 finding=modern-as-ancient（触发词为卡内登记的页内原话"古时"，exceptions 已明示不采信其断代含义——否定语境字面匹配，沿大雪腌肉卡先例）；另有单源机构层被外推为全国古俗的实质风险。
- What We Know / What We Don't Know：知：三条地域条目原文与页内自述"汇编自网络"。不知：《津门杂记》原文、南京菜饭/广东糯米饭的方志层、俗语"小寒大寒，无风自寒"源流。
- Recommended Decision（建议，不代决）：采纳为"机构汇编层地域食俗"卡；对外仅以地域名方式叙述；页内"古时""受欢迎的程度甚至可与腊八粥媲美"不引用。
- 链接：[[03_notes/trad-xiaohan-caifan-nuomifan|南京菜饭与广州糯米饭]]
- 审核问题：1) modern-as-ancient finding 系否定语境误报还是实质风险，请判读；2) 单源机构层维持 medium 是否合适；3) "古时南京人对小寒很重视"连否定式登记是否必要保留（还是删除该原话）？4) 北方涮羊肉"冬季食俗不属小寒专属"的排除处理是否认可？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### xiaohan-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释+why_it_matters，全部回溯 supporting_knowledge_ids（14张：本节气12张+共享2张…实为本节气11张+共享3张，见卡）。
- Exact Evidence（逐字）：见卡内三层文本（引擎 explanation-gated：Content Gate，支撑卡未 approved 禁止发布）。
- Source / Type / Access：解释层（无独立来源，逐句依赖支撑卡）。
- Scope / Period：面向零前提全球读者。
- Why Review：HumanExplanation 类型按规则必入 C；"23个省份/8沿海省市区"句首跑曾判 unsupported-distribution（压缩转述），已改写为与 sci 卡命题逐字对齐并复跑清除——此句是全卡最需逐字对表处；三候古典/现代分层、食俗地域限定、腊八锚差表述均需人工复核。
- What We Know / What We Don't Know：知：三层文本逐句可回溯、传说层（成道说）与机制转述（热量亏空）已排除出正文、文学记忆句用已直读的陆游诗。不知：英文译文质量（机器草稿）、支撑卡全部未经人工审核。
- Recommended Decision（建议，不代决）：Stage 1 知识卡 Decision 后再进入 Stage 2 解释层审核（沿立春/处暑/大雪流程）。
- 链接：[[03_notes/xiaohan-human-explanation|小寒解释卡]]
- 审核问题：1) 一句话版"它才是常常更冷的那一个"的口语化表述是否可接受？2) summary 版"腊八节也多落在这段日子里"是否足够防"腊八=小寒"误读（还是需加"逐年变动"）？3) 展开版"北京小寒期间平均约零下5至10℃"简写（原数据"零下5至零下10摄氏度"）是否保留？4) 三套时间锚（黄经/数九/月序）的收束段是否引入了超出支撑卡的概括？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核
### hist-xiaohan-laba — 腊八日期锚=农历十二月初八非节气日；荆楚（六世纪腊鼓逐疫）→宋代粥层（转引）→清末北京（燕京直读）三段谱系；2018年腊八落大寒时段实例 · Why：pending-primary-source（《武林旧事》《释迦谱》《风俗通义》诸环转引未直读）；传说层分层是审核重点 · 链接：[[03_notes/hist-xiaohan-laba|腊八节与小寒]] · Decision：（留空）
### sci-xiaohan-longitude-285 — 小寒=黄经285°、1月5日或6日、第23个/冬季第五个/公历新年第一个（非遗网×新华网双直读） · Why：pending-primary-source（GB/T 33661-2017 正文未直读，继承立春待办；"1月7日"下限仅摘要级） · 链接：[[03_notes/sci-xiaohan-longitude-285|黄经285°定义]] · Decision：（留空）
### trad-xiaohan-sanjiu — 数九锚冬至非小寒；小寒"时处二三九"；燕京打冰条"冬至三九則冰堅"直读+四机构谚语层 · Why：pending-primary-source（数九体系首出文献未直读，"数九始于某代"类断言未写） · 链接：[[03_notes/trad-xiaohan-sanjiu|三九与数九]] · Decision：（留空）
### hist-xiaohan-xiaohantu — 消寒图古籍原文（帝京景物略经广群芳谱转引直读）；锚冬至、覆盖小寒、非小寒专属 · Why：pending-primary-source（原书未直读，转引层级；confidence 已按 medium 定级） · 链接：[[03_notes/hist-xiaohan-xiaohantu|九九消寒图]] · Decision：（留空）
### lit-luyou-xiaohan-layue — 陆游《腊月》五律全诗直读（广群芳谱集藻）；"腊月诗非节气诗"身份声明 · Why：pending-primary-source（《剑南诗稿》原集未核、系年未核）；身份声明的边界需人工确认 · 链接：[[03_notes/lit-luyou-xiaohan-layue|陆游腊月诗]] · Decision：（留空）

## D · Needs Research
- Plough Monday 直读核验：Historic UK 页与学术来源（JSTOR Daily/民俗学文献）直读后，glob-xiaohan-plough-monday 方可脱离 Candidate；断代（中世纪晚期起）与当代复兴范围待核
- 元稹《咏廿四气诗·小寒十二月节》全诗直读（敦煌写本/《全唐诗补编》路径；维基文库无页已再确认）；黄庭坚《驻舆遣人寻访後山陈德方家》文本（山谷集诸本）；机构稿引句两句已登记线索
- "雉雊/雉始鸲"异文校勘（《四库》本与中华书局印本；机构页"鸲"字来源追查——多机构同误建议普查）
- 逐省30年平均气温数值表与统计口径（国家气候中心/《中国气候公报》）；"热量亏空峰值"机制一手气象文献；极端最低气温纪录日期归属
- 腊八逐年公历日期 vs 小寒/大寒窗口对照核算表；《武林旧事》《释迦谱》《东京梦华录》原书直读补全粥层谱系；汉代"冬至后第三个戌日为腊"原典
- 数九体系首出文献（《帝京景物略》原书全条、更早九九歌文本）；九九歌主要地域版本谱系；清宫消寒图档案（"亭前垂柳珍重待春風"九字描红与素梅图关系）
- 《津门杂记》黄芽菜条原书；南京菜饭/广东糯米饭方志层；"小寒大寒，无风自寒"粤语源流
- 三候鸟类的现代物候/生态验证（雁北迁、鹊营巢、雉鸣起始期；中国物候观测网）
- 兴修水利"小寒农闲窗口"的华南地方志层；跨节气预测谚（小寒→立春/惊蛰/清明）验证率
- 日语"小寒"（しょうかん）传播 Candidate（NAOJ 24節気页直读；大寒侧已有 source-naoj-24sekki-dahan 先例，建议与小寒配对建卡）
- GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）

## A · Auto Candidate（仅链接）
- [[03_notes/hist-xiaohan-naming|"月初寒尚小"命名卡（月令+孝经纬+诗含神雾）]]（high）
- [[03_notes/hist-yueling-xiaohan-pentads|小寒三候原文+注文]]（high）
- [[03_notes/trad-xiaohan-nongshi|小寒农事与农谚（机构汇编层）]]（medium）

---

# 24 大寒（dahan）· 审核分节

研究摘要：本轮查清大寒的天文定义与循环闭环（黄经300°、1月20日前后、第24个/最后一个/腊月中气，非遗网6984×新华网×人民日报海外版×日本国立天文台四独立直读）、三候原文（月令直读，"解見前"结构发现+首候"雞乳"异文登记）、命名两层证据（月令一手直读+"寒气之逆极"机构转引）、小寒大寒谁更冷的命名-统计错位（1991-2020年小寒-5.1℃/大寒-4.5℃，两独立机构直读）、尾牙日期锚辨析（农历十二月十六 vs 节气日，时段重叠表述直读）、农事农谚、食俗地域标本、文学双卡（陆游维基文库直读+元稹报纸转录本）。最大的坑有三个：一是非遗网页与人民日报海外版文系**同源转载链**（尾牙/捉田鼠/农谚段高度同文，两页日期同为1月19日相隔两年）——trad 类命题全部按单源封顶 medium；二是元稹组诗文本只有报纸转录层（维基文库无组诗页），古籍直读缺口如实挂账；三是"大寒最冷"流行叙述与气象统计的方向性张力需人工确认呈现口径。

路由统计：A 6 · B 2 · C 3 · D 0（本节气卡，无 needs-research 路由；另有6张共享卡 human-review-required 属系统级既有卡，不在本包）；日志：[[07_research/research-dahan-batch-log|研究日志]]

## C · 必须人工审核

### trad-dahan-weiya（Tradition · risk=high · impact=term）
- Claim：尾牙是岁末最后一次"做牙"（拜土地公），日期锚是**农历十二月十六**（二月二头牙起、逢初二与十六做牙），不是大寒节气日；地域限定"中国福建沿海、台湾等地"；进入大寒语境的原因是时段重叠（大寒至立春含尾牙祭/祭灶/除夕，"有时甚至连中国最大的节庆春节也处于这一节气中"）；鸡头俗说为传说层（源文自带"据说"）；现代企业年会=商业再造，本轮无直读源不入事实。
- Exact Evidence（逐字）："尾牙源自于拜土地公做'牙'的习俗。所谓二月二为头牙，以后每逢初二和十六都要做'牙'，到了农历十二月十六正好是尾牙。……据说鸡头朝谁，就表示老板第二年要解雇谁。……时至今日，尾牙祭已经慢慢退出了大寒习俗，但中国福建沿海、台湾等一些地方仍保留着尾牙祭的传统。"（人民日报海外版2016）／"在大寒至立春这段时间，有很多重要的民俗和节庆。如尾牙祭、祭灶和除夕等，有时甚至连中国最大的节庆春节也处于这一节气中。"（同版）。
- Source / Type / Access：source-rmrbhwb-dahan-2016（institutional·direct-read）、source-ihchina-dahan-feature（institutional·direct-read）。
- Scope / Period：地域=福建沿海、台湾等地；时段=做牙体系（阴历初二/十六）；媒体层2016/2018。古籍/方志层未核。
- Why Review：引擎 finding=pending-primary-source（risk=high：日期锚与地域是高发误写点——"大寒=尾牙""全国性大寒习俗"两种泛化风险）；且两直读源疑似同源转载链，独立互证不成立；"现代企业年会"分层仅停留在 Needs Research。
- What We Know / What We Don't Know：知：做牙体系结构、尾牙农历十二月十六锚、闽台留存表述、时段重叠的权威表述、鸡头俗说的传说层身份。不知：做牙/尾牙的方志谱系与形成史、台湾当代尾牙宴实践的权威源、企业年会借用"尾牙"之名的商业史。
- Recommended Decision（建议，不代决）：采纳为"机构层可确证的岁末民俗+日期锚辨析"卡；对外内容中尾牙必须带"农历十二月十六、闽台地域"双限定；企业年会层在补源前不进入任何表述。
- 链接：[[03_notes/trad-dahan-weiya|尾牙卡]]
- 审核问题：1) "尾牙祭已经慢慢退出了大寒习俗"的媒体表述是否可用于对外内容（隐含"曾属大寒习俗"的历史判断）？2) 日期锚辨析的呈现深度：内部知识层 vs 用户可见层？3) 同源转载链认定是否成立（请比对两源尾牙段原文）？4) 鸡头俗说是否保留（传说层标记已加）？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### glob-dahan-kanchu-shugen-japan（GlobalExpression · risk=high · impact=global）
- Claim：待核验：日本沿用汉字节气"大寒（だいかん，十二月中/黄経300°，NAOJ直读）"，并发展出"寒の内"时段框架（线索级）与寒中禊/寒修行实践（大寒当日冷水/瀑布净化修行，祈无病息灾，检索摘要级）。
- Exact Evidence（逐字）："大寒 (だいかん) 十二中 300° 冷気が極まって、最も寒さがつのる……小寒 (しょうかん) 十二月節 285° 寒の入りで、寒気がましてくる"（NAOJ直读）／"每年大寒之日举办「大寒禊」，2026年预定于1月20日举行（鹿岛神宫，检索摘要）"。
- Source / Type / Access：source-naoj-24sekki-dahan（institutional·direct-read）、source-kanchu-misogi-leads（cultural·search-excerpt·unverified）。
- Scope / Period：日本多地社寺（当代定期实践）；历法层为现行暦法口径。
- Why Review：GlobalExpression 类型按规则必入 C（global-candidate-hold）；实践层全部为 search-excerpt 线索，"大寒当日"设定与"寒の内"框架未直读。
- What We Know / What We Don't Know：知：日本大寒的历法定义与释名（NAOJ直读）、"寒の入り"标注。不知：寒中禊/寒修行的谱系（修验道/禊祓）、各社寺"大寒当日"设定的具体页、寒中水泳的学校形态。
- Recommended Decision（建议，不代决）：维持 Candidate；直读至少一个社寺活动页+寒の内历法解说页后再评估升级。
- 链接：[[03_notes/glob-dahan-kanchu-shugen-japan|寒中修行 Candidate]]
- 审核问题：1) relationship=same-time 是否恰当（实践在大寒当日 vs 寒の内时段，线索层两种表述并存）？2) "历法传播+实践在地再造"的 reason 措辞是否足以防止"日本版大寒"误读？3) 立春侧 Imbolc 线索卡与欧洲 Candlemas 选项的差异化是否需要在本卡说明？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

### dahan-human-explanation（HumanExplanation · risk=medium · impact=term）
- Claim：三层解释+why_it_matters，全部回溯 supporting_knowledge_ids（13张：本节气9张+共享4张）。
- Exact Evidence（逐字）：见卡内三层文本（引擎 explanation-gated：Content Gate，支撑卡未 approved 禁止发布）。
- Source / Type / Access：解释层（无独立来源，逐句依赖支撑卡）。
- Scope / Period：面向零前提全球读者。
- Why Review：HumanExplanation 类型按规则必入 C；含命名-统计错位、尾牙日期锚辨析、元稹报纸转录本引文、消寒糕单源轻描等多处需与支撑卡逐句对表的表述；分布性短语已自查（"全国平均气温低点在小寒"系带统计区间机构源背书）。
- What We Know / What We Don't Know：知：三层文本逐句可回溯、Candidate 全球对照未写入正文、待核内容（消寒糕单源/元稹归属/祭灶日期）已降格或排除。不知：英文译文质量（机器草稿）、支撑卡全部未经人工审核。
- Recommended Decision（建议，不代决）：Stage 1 知识卡 Decision 后再进入 Stage 2 解释层审核（沿立春/大雪流程）。
- 链接：[[03_notes/dahan-human-explanation|大寒解释卡]]
- 审核问题：1) 一句话版"寒走到尽头，下一个节气又回到立春"的循环表述是否需要"同一轮刻度"限定？2) summary 中"全国平均气温的低点其实多在小寒期间"的"多"字是否必要（源数据为确定性均值排序）？3) 尾牙句"闽南、台湾等地按农历十二月十六做尾牙"是否充分隔离了"大寒习俗"暗示？4) 元稹一句引文"冬与春交替，明朝换新律"以报纸转录本为源进入解释层，可否接受？
- Decision：（留空） Reviewer：（留空） Notes：（留空）

## B · 建议复核
### hist-dahan-naming — "寒气之逆极"命名两层证据（月令"解見前"一手直读+《授时通考》引《三礼义宗》机构转引；最后一个中气定位） · Why：引擎 finding=pending-primary-source（《授时通考》原书未直读，转引链两层；"上形于小寒"句读待核） · 链接：[[03_notes/hist-dahan-naming|命名卡]] · Decision：（留空）
### sci-dahan-longitude-300 — 大寒=黄经300°、1月20日前后、第24个/最后一个、循环闭环（四独立机构直读互证） · Why：引擎 finding=pending-primary-source（GB/T 33661-2017 正文未直读，继承立春待办；2016年交节时刻为唯一具体时刻直读值） · 链接：[[03_notes/sci-dahan-longitude-300|黄经300°定义]] · Decision：（留空）

## D · Needs Research
- 尾牙/做牙的方志与学术谱系直读（闽南地方文献、台湾民俗研究、辞书书证）；现代企业"年会/尾牙宴"商业再造的权威报道直读
- 《授时通考·天时》大寒条原文直读（核对《三礼义宗》佚文与省略号处全文）
- 元稹《咏廿四气诗》组诗古籍本（敦煌写本系统/《全唐诗》录文）直读与作者归属讨论综述（沿 wave1-2 结论：维基文库无组诗页）
- 陆游诗校本与系年（中华书局《剑南诗稿》校点本、钱仲联系年）；"雞乳/鸡始乳"异文对校（含《授时通考》引文）
- 消寒糕第二源与谱系（《帝京岁时纪胜》《北平风俗类征》检索）；"一九一只鸡"南京地方文献出处
- 大寒节气专属国家级非遗项目页检索（尾牙/做牙未检得 project_details 锚点；如确认无则 region 维度维持现状）
- 寒中禊/寒修行社寺活动页与"寒の入り-寒明け"历法解说直读（glob 卡升级前置条件）
- 三候现代物候验证（鸡冬季孵育分布、冰厚观测）；1991-2020年原始终端数据（国家气象科学数据中心）入库
- 花信风"瑞香/兰花/山矾"古籍首出处（二十四番花信谱系）
- 人民日报专版另两篇（"大寒过了就是年"/《元沙院》诗）内容利用评估
- 与小寒/冬至侧（并行波次）的跨节气约定："小寒大寒"并称谚语归属、"谁更冷"命题互链、腊月食俗分层
- GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）

## A · Auto Candidate（仅链接）
- [[03_notes/hist-yueling-dahan-pentads|大寒三候原文]]（high）
- [[03_notes/sci-dahan-vs-xiaohan-cold|小寒与大寒谁更冷]]（high）
- [[03_notes/lit-luyou-dahan-jiangling|陆游《大寒出江陵西門》]]（medium）
- [[03_notes/lit-yuanzhen-dahan-shierzhong|元稹《大寒十二月中》]]（medium）
- [[03_notes/trad-dahan-nongshi|积肥备春耕与占年农谚]]（medium）
- [[03_notes/trad-dahan-food|食俗地域标本]]（medium）

---

## 附：AI 边界声明

本总包由 AI 汇编（各节气分节由研究代理按统一规范产出，引擎路由表随日志留档）；未进行任何最终审核；无任何卡被标记 verified；human_review 全部为 null；所有 Decision/Reviewer/Notes 留空待人工填写。若审核发现证据问题，按规范回退 draft/withdrawn 并留修改记录。

[[07_research/batch-24-solar-terms-plan|批量研究计划]] · [[07_research/solar24-batch-research-report|批量研究报告]] · [[00_project/guide|三道门槛]]
