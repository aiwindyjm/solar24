---
schema_version: '0.1.0'
id: 'research-xiaoshu-batch-log'
type: 'ResearchNote'
title: '小暑批量研究 · 第一轮执行日志（2026-09-16）'
solar_terms: ['xiaoshu']
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
    'task': '按 24 节气批量研究规范完成小暑（11，summer）第一轮研究：天文/三伏机制（本节气知识锚）/物候/气候/习俗（六月六/食新）/农事/区域非遗锚点/文学/全球表达/解释层/创意层',
    'queries': [
      'curl 直连：ihchina.cn/solar_details/50.html（结果为三门祭冬——brief 线索失败）；逐个试探 46-54（46 空响应/504、47 九华立春祭、48 博览会、49 班春劝农、50 三门祭冬、51-54 均 404）；solarzx_list/p/8.html 枚举得 solarzx_details/25570（画说小暑）；solar_details/6971.html 及其 302 目标 Article/Index/detail?id=9909 三次 504 后经 web_reader 成功（夏至波次日志的"小暑=6971"编号情报确认）；project_details/23627（徐州伏羊食俗）',
      '维基文库API（走代理）：srsearch=晒伏 / 帝京歲時紀勝 / 夏夜追涼 楊萬里 / 納涼 / 倏忽溫風至 因循小暑來 / 夜熱依然午熱同 / 時有微涼不是風 / 攜杖來追柳外涼 / 畫橋南畔倚胡床 / 風定池蓮自在香 / 竹深樹密蟲鳴處 / 淮海集 / 歲功典 小暑 / 誠齋集 卷五',
      '维基文库直读页（走代理 curl）：月令七十二候集解（全页抓取切小暑节）；燕京歲時記（重抓全页取六月部分：六月六/洗象/戒台晾经会）；欽定古今圖書集成/曆象彙編/歲功典/第054卷（季夏部彙考）、第056卷（季夏部雜錄+伏日部彙考）、第098/099卷（寒暑部藝文，诗歌检索用）；誠齋集（四部叢刊本/卷第三十九、四庫全書本/卷005——均未获《夏夜追凉》）；御定佩文齋詠物詩選/卷022、卷358（暑/莲两部，无目标诗）',
      'WebSearch：小暑 节气 太阳黄经105° 7月6日至8日 新华网；三伏 夏至三庚数头伏 初伏 天文台 科普 入伏日期逐年变动；小暑 黄经105度 中国政府网 OR 气象局 OR cma.gov.cn；Dog Days Sirius heliacal rising hottest days summer ancient Rome Greece；site:ihchina.cn 徐州伏羊食俗；site:ihchina.cn 小暑',
      'curl 直连机构稿：news.cn/2022-07/05/c_1128804642.htm（新华网2022小暑稿，成功）；xinhuanet.com/science/20240627/.../c.html（新华网2024三伏稿，成功）；news.cn/20240706/.../c.html（新华社2024诗意节令小暑稿，成功）；forestry.gov.cn/c/www/lcdt/679392.jhtml（国家林草局2026稿，成功）；weather.com.cn/life/2022/07/3548268.shtml（央视网转载养生稿，无黄经，未建卡）',
    ],
    'discovered_source_ids':
      [
        'source-ihchina-xiaoshu-feature',
        'source-ihchina-xiaoshu-huashuo-2021',
        'source-ihchina-xuzhou-fuyang',
        'source-xinhua-xiaoshu-2022',
        'source-xinhua-sanfu-2024',
        'source-xinhua-xiaoshu-poetic-2024',
        'source-forestry-xiaoshu-2026',
        'source-gujintushu-suigong-jixia',
        'source-gujintushu-suigong-furi',
        'source-wikipedia-dog-days',
      ],
    'conflicts':
      [
        '食新地域范围：新华社2022稿（由国庆受访）"我国各地有食新的习俗" vs 新华社2024稿"南方有食新的习俗"——同发布方前后口径不一致；处理：内容采纳、范围从窄（南方稻作区），"各地"说降级为待核验宽泛表述，登记于 trad-xiaoshu-shixin',
        '小暑公历日期范围：新华网2022"7月6日、7日或8日" vs 国家林草局2026与非遗网专题页"7月7日或8日"——黄经卡取并集"7月6日至8日"并在 exceptions 注明 7月6日仅见新华社口径',
        '三候异文（非错误冲突，属传本系统差异）：月令集解维基文库本"蟋蟀居壁/鹰始击" vs 现代机构稿通例"蟋蟀居宇/鹰始鸷" vs 逸周书时训解"居壁/鹰乃学习"；非遗网专题页以《诗经·七月》"八月在宇"为"居宇"作解——三方异文+互文线索全部登记于 hist-yueling-xiaoshu-pentads',
        '伏羊谚语两版本：非遗网项目页"彭城伏羊一碗汤，不用大夫开药方" vs 新华社2024"伏羊一碗汤，不用神医开药方"——字句略异，各按原文引用不合并',
        '页面定位：brief LEAD"solar_details/50.html=小暑专题页"为错误线索（实为三门祭冬）——小暑专题页实为 6971（302 至 Article detail id=9909，curl 504、web_reader 可读）；已在源卡记录修正',
      ],
    'conclusions':
      [
        '第一轮建立知识卡13张（11张知识卡+解释层+创意层；high 5张：sci-xiaoshu-longitude-105 / hist-yueling-xiaoshu-pentads / sci-xiaoshu-sanfu-gengday-mechanism / hist-xiaoshu-furi-origins / hist-xiaoshu-liuyueliu-sunning + region-xiaoshu-xuzhou-fuyang 共6张 high）、Source卡10张（9直读+1检索摘要级）；引用共享卡4张（sci-solarterms-calendar-role / hist-solarterms-pentad-system / fact-solarterms-unesco-2016 / fact-solarterms-yellow-river-origin，另 hist-huainanzi-complete-24terms 仅链接），全部仅链接不复述',
        '三伏机制卡（知识锚）成立且证据链最强：新华网2024（天文科普专家杨婧，干支纪日+三庚规则+三年实例）与《古今图书集成·岁功典》伏日部（《阴阳书》"夏至後第三庚為初伏"）古今互证；"三伏不是节气、是干支计日传统"的分层表述置于命题首句；"入伏常落小暑期内"降档为"实例+机制推算"层',
        '非遗网页面体系再确认：solar_details 编号 40-45（春季节气）→46-50（项目/资讯混合，47九华立春祭/49班春劝农/50三门祭冬）→中断→6968+（立夏起的节气专题，小暑=6971，与夏至波次情报一致）；"画"说系列在 solarzx_details（小暑=25570）；project_details 可 curl 直连。徐州伏羊食俗（Ⅹ-179，2021第五批）为小暑-入伏时段的区域非遗锚点，四要素卡成立',
        '文学卡按 brief 备选路径落地：秦观《纳凉》/杨万里《夏夜追凉》/孟浩然《夏日南亭怀辛大》在维基文库均无可直读作品页（多轮 API 检索+文集卷页排查），最终以新华社2024稿直读引文的杨万里《夏夜追凉》全诗建卡（medium，待校《诚斋集》）；元稹《咏廿四气诗》组诗仍无直读文本，机构稿高频引用的"倏忽温风至"不标作者、不建卡',
        '主要证据缺口：《咏廿四气诗》组诗文本、《帝京岁时纪胜》六月条（维基文库无书）、三候现代物候观测、出梅气象判据、《史记》伏日条点校本、徐州方志、犬日直读源、GB/T 33661-2017 正文（继承立春待办）',
      ],
    'human_questions':
      [
        '"入伏日落在小暑节气内"能否从"三年实例+机制推算"升格为已证命题（建议以天文年历逐百年抽验后决定）',
        '食新"我国各地"说（新华社2022专家语）是否直接废弃，还是立项逐省核验',
        '三候异文的定版口径：对外文案主用哪个系统（建议主用月令集解直读本"居壁/始击"括注机构通例"居宇/始鸷"，与诗经互文说明是否保留）',
        'lit-yangwanli-xiaoshu-zhuiliang 诗文本以新华社引文为据，是否需先校《诚斋集》再对外',
        '犬日 Candidate 的直读核验优先级（en.wikipedia 词条+天文馆/古典学源）',
        'GB/T 33661-2017 正文直读（继承立春待办，适用全部节气定义）',
      ],
  }
---

# 小暑批量研究 · 第一轮执行日志

## 执行摘要

2026-09-16 由 AI 研究代理执行（brief：`.batch-tmp/AGENT-BRIEF.md`）。顶层问题：**小暑是什么？"小"的界限在哪里？三伏这套非节气的时间系统如何与它耦合？**

## 流程记录

1. **样例对齐**：读 brief + 立春 9 张样例卡 + 索引目标形态，仿写结构。
2. **非遗网定位（有波折）**：brief 线索页 50.html 实为"三门祭冬"→ 试探 46-54（51+ 全 404）→ solarzx_list 枚举发现"画"说系列 25570（curl 直读成功）→ 夏至波次日志情报"小暑=6971"→ 6971 及 302 目标三次 504 → web_reader 成功补读（含黄经定义句、《诗经·七月》互文、分区域气候、鲁南苏北吃暑羊）→ 源卡重组（6971 用 feature 名，25570 改 huashuo-2021，知识卡回填）。
3. **古籍直读**：月令七十二候集解小暑节（维基文库本逐字，含注文）；燕京岁时记六月部分（六月六"抖晾衣服书籍"+洗象+晾经会）；古今图书集成·岁功典 054（季夏部：时训解/礼记月令/淮南子天文训小暑段）、056（伏日部：史记秦本纪/封禅书/缃素杂记/事物纪原/农政全书占候/清代方志群）、098/099（寒暑部艺文，为检索诗歌）。
4. **机构稿直读**：新华网2022小暑稿、新华网2024三伏科普稿、新华社2024诗意节令稿、国家林草局2026稿（四个页面 curl 直连全部成功；weather.com.cn 央视网转载稿无黄经未建卡）。
5. **检索级**：Dog Days（Wikipedia 摘要，Candidate 专用）；徐州伏羊项目页（WebSearch 定位 + curl 直读）。
6. **文学排查**：候选诗三首的维基文库 API 多轮检索与文集卷页抓取全部未命中直读页，改用新华社2024稿内引文建卡；元稹组诗确认不可直读。
7. **建卡与引擎**：13 张卡 + 10 源卡 + 索引更新；首次路由发现 glob 卡 YAML 枚举值不合法（relationship_to_solar_term 用了自造值，协议枚举为 same-time/nearby-time/shared-nature/seasonal-experience/life-cycle/other），改为 seasonal-experience 后通过；按 §8 入包规则校正三张卡 status（auto-candidate 保持 draft、human-review 卡升 in-review）。

## 12项审计（§7）

1. **Unsupported Distribution**：发现+已处理——"我国各地有食新"（新华社2022专家语）与2024稿"南方"冲突，取从窄并登记；"我国大部分地区进入炎热季节""全国的农作物都进入了茁壮成长阶段"仅保留在源引文层，未进入任何卡命题与解释层正文。
2. **Regional Generalization**：通过——徐州（伏羊）、清末北京（六月六）、鲁南苏北（吃暑羊）、江淮/华北东北/华南（分区气候）、南方稻作区（食新）全部带地域限定；解释层逐句自查无未背书的"全国/各地/普遍"。
3. **Modern-as-Ancient**：发现+已处理——"晒伏"为现代通名，卡片明确原词是"抖晾"；"头伏饺子二伏面""伏羊一碗汤"等当代民俗均未写入古籍卡。
4. **Historical Leakage**：通过——三候卡、伏日起源卡无黄经/气象学概念；黄经卡不载古典内容；淮南子小暑段仅作历史印证且链接共享卡。
5. **Scientific Leakage**：通过——"庚金伏藏/金畏火"五行解释只入 hist 卡并标注属古典解释体系；sci 三伏机制卡命题只含干支计日规则本身。
6. **Legend-as-Fact**：通过——"彭祖起源/汉代形成"仅存在于检索摘要，未入卡；"磔狗御蛊"按《史记》史料记载呈现并标注巫术内容按历史观念记录。
7. **Weak Source Inflation**：发现+已处理——气候卡气温数值（南方28-30℃）仅科普稿概述→confidence medium+exceptions；农谚/食俗机构汇编无逐一出处→medium 以下；占验谚语标"非科学命题"。
8. **Search Excerpt Misuse**：通过——犬日唯一 search-excerpt 源，verification=unverified，仅支撑 low Candidate；引擎 finding=insufficient-evidence 路由 needs-research，符合预期设计。
9. **Cross-source False Validation**：通过——黄经105°的 high 置信建立在新华社×林草局×非遗网三个不同机构直读上（非遗网2017与2021两页属同机构同源汇编，未重复计数为独立源）；类书转引一律注明"未回原典"。
10. **Creative-as-Fact**：通过——idea 卡四条全部标注性质声明+依据卡+误导风险红线。
11. **Global Forced Correspondence**：通过——犬日卡三要素明确写"不是对应、不是等同、不是外国版三伏"；relationship_reason 说明参照系差异（恒星偕日升 vs 干支庚日）。
12. **Shared Knowledge Duplication**：通过——黄道24等分/节气阳历属性/淮南子序列/UNESCO/七十二候体系均只链接 02_shared 卡；本节气卡内不复述系统级命题。

## 19维覆盖矩阵

| 维度 | 状态 | 支撑卡 |
|---|---|---|
| astronomy | complete | sci-xiaoshu-longitude-105（high，3独立直读机构） |
| calendar | complete | sci-xiaoshu-sanfu-gengday-mechanism（high·锚）+ hist-xiaoshu-furi-origins（high） |
| climate | partial | sci-xiaoshu-climate-heat-humid（medium；分区表述已建，气象数据/出梅判据缺） |
| phenology | complete（文本层） | hist-yueling-xiaoshu-pentads（high，含三方异文；现代物候验证 missing） |
| agriculture | partial | trad-xiaoshu-nongshi（medium，机构汇编级） |
| ecology | missing | 无卡（三候古典记载归 phenology；现代生态观测未建） |
| chinese-life | complete | hist-xiaoshu-liuyueliu-sunning（high）+ trad-xiaoshu-shixin（medium）+ region 卡 |
| customs | complete | hist-xiaoshu-liuyueliu-sunning + region-xiaoshu-xuzhou-fuyang + hist-xiaoshu-furi-origins |
| food | partial | trad-xiaoshu-shixin + region 卡（伏面/鳝片/藕等未单独建卡） |
| history | complete | 伏日起源（high）+ 三候（high）+ shared 淮南子链接 |
| literature-art | partial | lit-yangwanli-xiaoshu-zhuiliang（medium 待校勘；元稹组诗 needs research） |
| regional-differences | partial | region-xiaoshu-xuzhou-fuyang（high）+ shared 黄河起源；区域锚点仅一个 |
| scientific-interpretation | complete | 黄经/三伏/气候三卡 |
| global-expressions | weak | glob-xiaoshu-dog-days（Candidate，search-excerpt） |
| visual-assets | missing | 无已授权素材 |
| audio-assets | missing | 无已授权素材 |
| interaction-ideas | complete | idea-xiaoshu-interaction-sketches（4条创意） |
| references | complete | 新增10源（9直读+1线索） |
| ai-research-log | complete | 本日志 |

统计：complete 10 / partial 5 / weak 1 / missing 3（visual/audio/ecology）。

## 素材边界审计

本轮未引入任何图片、音频、视频素材（非遗网页面配图一律不用；页脚"部分图文来自网络"声明已记录于源卡 rights）。全部引用为文本短摘录：古籍（公有领域）逐字摘录带定位；机构稿件短引（新华社/林草局版权，仅要点级引用）。临时文件仅写入 .batch-tmp/xiaoshu-* 前缀。

## 引擎路由表（npx tsx .batch-tmp/batch-route.mts xiaoshu，2026-09-16，源卡重组后重跑）

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| fact-solarterms-unesco-2016 | CulturalFact | system | high | A(独立直读×2) | **human-review-required** | — |
| fact-solarterms-yellow-river-origin | CulturalFact | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-huainanzi-complete-24terms | HistoricalRecord | system | high | A(独立直读×1) | **human-review-required** | — |
| hist-solarterms-pentad-system | HistoricalRecord | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-calendar-role | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| sci-solarterms-jieqi-zhongqi | ScientificFact | system | high | A(独立直读×2) | **human-review-required** | — |
| glob-xiaoshu-dog-days | GlobalExpression | global | high | D(独立直读×0) | **needs-research** | insufficient-evidence, global-candidate-hold |
| hist-xiaoshu-furi-origins | HistoricalRecord | term | medium | A(独立直读×2) | **auto-candidate** | — |
| hist-xiaoshu-liuyueliu-sunning | HistoricalRecord | term | medium | A(独立直读×2) | **auto-candidate** | — |
| hist-yueling-xiaoshu-pentads | HistoricalRecord | term | medium | A(独立直读×3) | **auto-candidate** | — |
| lit-yangwanli-xiaoshu-zhuiliang | CulturalFact | term | low | A(独立直读×2) | **human-review-required** | pending-primary-source |
| region-xiaoshu-xuzhou-fuyang | CulturalFact | term | medium | A(独立直读×2) | **human-review-required** | pending-primary-source |
| sci-xiaoshu-climate-heat-humid | ScientificFact | term | medium | A(独立直读×3) | **auto-candidate** | — |
| sci-xiaoshu-longitude-105 | ScientificFact | term | medium | A(独立直读×3) | **human-review-required** | pending-primary-source |
| sci-xiaoshu-sanfu-gengday-mechanism | ScientificFact | system | medium | A(独立直读×4) | **auto-candidate** | — |
| trad-xiaoshu-nongshi | Tradition | term | low | A(独立直读×3) | **auto-candidate** | — |
| trad-xiaoshu-shixin | Tradition | term | medium | A(独立直读×2) | **auto-candidate** | — |
| xiaoshu-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |

Findings 明细：glob-xiaoshu-dog-days insufficient-evidence(blocker)+global-candidate-hold(info)；lit-yangwanli / region-xuzhou / sci-longitude-105 各 pending-primary-source(major)（前者=《诚斋集》未校、中者=方志与《汉书》未直读、后者=GB/T 正文未直读）；xiaoshu-human-explanation explanation-gated(major)。

本节气路由统计（不含6张系统级共享卡）：**A 7 · B 3 · C 1 · D 1**。

## 修改记录

- 2026-09-16（第一轮）：全部卡片、源卡、索引、解释层、创意层、日志一次完成。
- 2026-09-16（修正1）：glob 卡 relationship_to_solar_term 自造值"same-phenomenon-different-system"违反协议枚举，改"seasonal-experience"（引擎首跑发现）。
- 2026-09-16（修正2）：6971 专题页补读成功后源卡重组——feature 名让给 6971，25570 改名 huashuo-2021；黄经/气候/三候/农事/伏羊五卡回填证据（黄经卡升3独立源、气候卡升级分区域命题、三候卡增《诗经》互文）。
- 2026-09-16（修正3）：按 §8 入包规则校正 status——sci-sanfu/hist-yueling 由 in-review 回 draft（auto-candidate），lit-yangwanli 升 in-review（human-review-required）。

[[01_terms/11_小暑|小暑索引]] · [[07_research/sections/review-xiaoshu|审核分节]] · [[07_research/research-xiazhi-batch-log|夏至日志（编号情报来源）]]
