---
schema_version: '0.1.0'
id: 'research-jingzhe-batch-log'
type: 'ResearchNote'
title: '惊蛰第一轮批产研究 · 执行日志（2026-09-16）'
solar_terms: ['jingzhe']
season: 'spring'
dimensions: ['ai-research-log', 'references']
region: []
period: null
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'unknown'
contested: false
risk_level: 'low'
impact_level: 'term'
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
research:
  {
    'task': '为节气03惊蛰（jingzhe/spring）完成第一轮研究：天文定义、月令三候直读、启蛰改名公案、初雷气候、农谚春耕、吃梨与打小人民俗、观田家文学、全球表达Candidate，产出11张知识卡+9张来源卡并更新索引。',
    'queries':
      [
        '惊蛰 太阳黄经345° 3月5日 新华网 OR 中国政府网 OR 中国天气网',
        '惊蛰 原名启蛰 避汉景帝刘启讳 改名 考证 学术',
        '惊蛰 打小人 鹅颈桥 香港 民俗 专题报道',
        'gohk.gov.hk 鵝頸橋 打小人 香港自遊樂在18區',
        'info.gov.hk 新聞公報 堅拿道天橋 打小人 驚蟄',
        'Japan keichitsu 啓蟄 72 microseasons solar term March insects awaken Chinese origin',
        '维基文库API：觀田家 韋應物（定位作品页）',
        '直读URL：ihchina.cn/solar_details/42.html、zh.wikisource.org 月令七十二候集解、zh.wikisource.org 淮南子/天文訓、ihchina.cn/solarzx_details/25587.html、hrczh.cass.cn 节气名称文章、weather.com.cn/zt/tqzt/09jzzt/03/62283.shtml、news.cn/2022-03/04/c_1128436336.htm、gohk.gov.hk 鹅颈桥、info.gov.hk 立法会答问、nippon.com/features/h00124/',
      ],
    'discovered_source_ids':
      [
        'source-ihchina-jingzhe-feature',
        'source-xinhua-jingzhe-2022',
        'source-weathercn-jingzhe-origin',
        'source-ihchina-chenguangzhong-ordering',
        'source-cass-history-jingzhe-renaming',
        'source-gohk-ngokengkiu-daxiaoren',
        'source-infogov-hk-daxiaoren-2025',
        'source-wikisource-guantianjia',
        'source-nippon-72microseasons',
      ],
    'conflicts':
      [
        '农谚异文：任务线索作"到了惊蛰节，锄头不停歇"，非遗网直读作"过了惊蛰节，春耕不能歇"——按直读版本入卡，线索版记为异文待考（trad-jingzhe-nongyan-chungeng exceptions）',
        '改名公案评价层分歧：陈广忠斥刘歆三统历排惊蛰为正月中是"错误改序"，中国历史研究院刊文称"有一定道理"——事实层（名称与次序变化）两源一致，评价层如实记分歧不裁决（hist-jingzhe-qizhe-renaming）',
        '非遗网42页引《周礼》作"卷四十《挥人》篇"——"挥人"疑为"韗人"之误，照录存疑待核（source-ihchina-jingzhe-feature）',
        '打小人地域范围：港府答问"中国南方地区民间习俗"（直读）vs 维基"香港、广东珠三角"（摘要级未直读）——region卡命题严格限定香港鹅颈桥',
        '淮南子直读见"雷驚蟄"三字连文（"加十五日指甲則雷驚蟄"），与通行"驚蟄"单名表述略异——已照录原文，不作校勘结论',
      ],
    'conclusions':
      [
        '第一轮建立11张知识卡、9张新来源卡（8直读+1线索级），复用既有直读源2张（月令维基文库、淮南子维基文库），另引GB/T元数据源；全部卡draft或in-review，human_review=null',
        '高可信锚点：黄经345°/3月5-6日三机构直读互证（sci-jingzhe-longitude-345，high）；月令惊蛰段全文逐字直读含三候注文（hist-yueling-jingzhe-pentads，high）；观田家全诗直读+新华社引文互证（lit-weiyingwu-guantianjia，high）；鹅颈桥打小人双港府源直读（region-hkg-ngokengkiu-daxiaoren，high）',
        '改名公案按三层处理：文献层可直读确证（启蛰→惊蛰、次序往返）；避景帝讳为学界通说（两篇学术文章直读一致）但一手动因文献未读；网络细化情节（唐代恢复说等）不采信——卡confidence medium、risk high进人工审核',
        '初雷南北时差与"昆虫听不见雷"均有机构科普稿直读，但气候数据层未读，卡止于medium并留B级复核',
        '吃梨按Modern Popularization处理（机构汇编层+谱系缺口明示）；鹅颈桥打小人按港府原话定位（商业活动、非遗清单级而非名录级）严格限定',
        '全球表达Candidate（日本啓蟄）仅线索级，被路由引擎判needs-research（insufficient-evidence），如实列入D区',
      ],
    'human_questions':
      [
        '避讳动因一手文献与避讳学专著（陈垣《史讳举例》等）需人工核读后，hist-jingzhe-qizhe-renaming 能否升级',
        'GB/T 33661-2017 正文与初雷气候统计数据的获取途径（sci两张B级卡的共同缺口）',
        '《香港非物质文化遗产清单》"驚蟄祭白虎"条目页与华南打小人分布的方志级证据',
        '日本啓蟄/72微季节权威来源（国立国会图书馆等）直读，全球表达Candidate升级路径',
        '农书证据链（齐民要术/授时通考）与吃梨地域谱系（山西梨乡传说）的第二轮排查方向',
      ],
  }
---

# 惊蛰第一轮研究 · 执行日志

## 执行摘要

2026-09-16 执行。研究问题：**惊蛰是什么？名字为什么改过？春雷叙事在现代气候下站得住吗？民俗证据边界在哪里？** 网络作业10次直读成功（非遗网×2、新华网、中国天气网、维基文库×3、香港政府×2、中国历史研究院），1次线索级（Nippon.com），WebFetch对ihchina/info.gov.hk超时后按手册改用备用阅读器成功。

## 12项审计（§7）

1. **Unsupported Distribution**：未发现。解释层"初雷南北差"有初雷卡同域命题背书；"大江南北"仅以新华网原文引文形式出现在卡内证据区并保留"陆续"限定。
2. **Regional Generalization**：通过。打小人严格限香港鹅颈桥（"中国南方民间习俗"仅引港府原话且注明华南分布无直读）；region卡命题无全国性表述（引擎无national-claim finding）。
3. **Modern-as-Ancient**：通过。吃梨卡明示"由来已久"为页面用语、不作断代；蒙鼓皮条标注汇编级。trad类卡无"自古"断言（引擎无modern-as-ancient finding）。
4. **Historical Leakage**：通过。古籍卡（月令三候、改名公案）claim中无黄经/气象学等现代概念；"鹰化为鸠"标注古典转化叙事。
5. **Scientific Leakage**：通过。三候解释（互变框架、章龟经）只在HistoricalRecord卡的"解释"小节以古典解释体系身份出现，未混入fact命题。
6. **Legend-as-Fact**：通过。吃梨的两种传闻解释保留"据传/或说"原话并降层；祭白虎在非遗网条目标为民间传说。
7. **Weak Source Inflation**：发现1处并已正确降级——日本啓蟄卡仅search-excerpt源，被引擎判insufficient-evidence（needs-research），保持low/unverified不进审核。
8. **Search Excerpt Misuse**：通过。唯一search-excerpt源（nippon）verification=unverified，只支撑Candidate；维基打小人线索未建源卡。
9. **Cross-source False Validation**：发现并明示2处限制——鹅颈桥两源同属港府体系（卡内exceptions声明）；月令文本"双源互证"实为传抄一致性（卡内注明为文本层互证非独立观察）。
10. **Creative-as-Fact**：通过。idea卡带性质声明与红线段（打小人不做游戏化交互）；改名单独标"通说+待核"标签要求。
11. **Global Forced Correspondence**：通过。啓蟄卡三要素齐全，relationship写明"传播分支…不是同一个节日"，无未否定"对应/等同"表述（引擎无global-forced-correspondence finding）。
12. **Shared Knowledge Duplication**：通过。黄道24等分/UNESCO/置闰机制等命题均链接共享卡未复述；本节气卡命题与shared卡无文本重复（引擎无shared-duplicate finding）。

## 19维覆盖矩阵

| 维度 | 状态 | 说明 |
|---|---|---|
| astronomy | complete | 黄经345°三机构直读（sci-jingzhe-longitude-345, high） |
| calendar | partial | "二月节"定位+农历漂移实例已录；无独立历法卡，挂共享卡 |
| climate | complete | 初雷南北时差+雷-虫关系现代解释（sci-jingzhe-thunder-climate, medium） |
| phenology | complete | 月令三候全文逐字直读含注文（hist-yueling-jingzhe-pentads, high） |
| agriculture | partial | 农谚+春耕动员三层证据（trad-jingzhe-nongyan-chungeng, medium）；农书链缺口 |
| ecology | weak | 昆虫苏醒温度解释在气候卡内；无现代物候观测卡 |
| chinese-life | partial | 吃梨+打小人+蒙鼓皮/祭白虎汇编层；大陆当代生活实践无调查 |
| customs | partial | 同上；非遗锚点为香港清单级（非国家级项目页） |
| food | partial | 吃梨记录层（trad-jingzhe-chili-pears, medium）；地域谱系不明 |
| history | complete | 改名公案三层组织+淮南子/汉书文献链（hist-jingzhe-qizhe-renaming, medium） |
| literature-art | partial | 观田家全诗直读（lit-weiyingwu-guantianjia, high）；元稹组诗未核 |
| regional-differences | partial | 香港鹅颈桥卡（high）+初雷南北差；其他地域无卡 |
| scientific-interpretation | complete | 黄经+初雷两卡 |
| global-expressions | weak | 日本啓蟄Candidate仅线索级（引擎判needs-research） |
| visual-assets | missing | 无已授权素材（非遗网配图不使用） |
| audio-assets | missing | 黄鹂鸣声等待授权研究 |
| interaction-ideas | complete | 3创意+红线段（idea-jingzhe-interaction-sketches） |
| references | partial | 9新源+2复用直读源+1元数据源+1线索源 |
| ai-research-log | complete | 本日志+审核分节 |

统计：complete 8 / partial 8 / weak 2 / missing 2 / N-A 0（19维）。

## 素材边界审计

- 图像：零采集。非遗网42页配图（字体设计、惊蛰习俗图）版权不明且页面声明需注明出处——一律不用；鹅颈桥档摊照片涉肖像与档主权益——红线。
- 音频：零采集。黄鹂鸣声、雷声素材需另行授权（idea卡已标注）。
- 文本：古籍（月令/淮南子/观田家）公有领域，引文带定位；港府页面按官方版权仅短摘录并注明；Nippon.com未直读，只存摘要线索。
- 本轮未读取的直读目标：Nippon.com正文（curl/WebFetch未尝试直读，因该卡已定Candidate不需要更高证据）、info.gov.hk防疫公告（2022年，内容与已读答问重叠，未读记线索）。

## 引擎路由表（2026-09-16实跑，npx tsx skills/solar24-cultural-research/workflows/route.ts jingzhe）

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| glob-jingzhe-keichitsu-japan | GlobalExpression | global | high | D(独立直读×0) | **needs-research** | insufficient-evidence, global-candidate-hold |
| hist-jingzhe-qizhe-renaming | HistoricalRecord | term | high | A(独立直读×3) | **human-review-required** | pending-primary-source |
| hist-yueling-jingzhe-pentads | HistoricalRecord | term | medium | A(独立直读×2) | **auto-candidate** | — |
| jingzhe-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |
| lit-weiyingwu-guantianjia | CulturalFact | term | low | A(独立直读×2) | **auto-candidate** | — |
| region-hkg-ngokengkiu-daxiaoren | RegionalExpression | regional | medium | A(独立直读×2) | **human-review-required** | pending-primary-source |
| sci-jingzhe-longitude-345 | ScientificFact | term | medium | A(独立直读×4) | **human-review-required** | pending-primary-source |
| sci-jingzhe-thunder-climate | ScientificFact | term | medium | A(独立直读×3) | **human-review-required** | pending-primary-source |
| trad-jingzhe-chili-pears | Tradition | term | medium | A(独立直读×1) | **auto-candidate** | — |
| trad-jingzhe-nongyan-chungeng | Tradition | term | medium | A(独立直读×3) | **auto-candidate** | — |

（引擎另输出6张shared卡行，均为既有human-review-required，与本轮无关，不重复计入。idea卡为InteractionIdea不进路由。）

**分节结果**：A=4（hist-yueling-jingzhe-pentads、lit-weiyingwu-guantianjia、trad-jingzhe-chili-pears、trad-jingzhe-nongyan-chungeng）；B=3（sci-jingzhe-longitude-345、sci-jingzhe-thunder-climate、region-hkg-ngokengkiu-daxiaoren，均因pending-primary-source留人工核读项）；C=2（hist-jingzhe-qizhe-renaming：risk=high+历史归属待一手文献；jingzhe-human-explanation：类型规则）；D=1（glob-jingzhe-keichitsu-japan：线索级证据不足）。human-review卡status已置in-review，其余保持draft。

## Needs Research 清单（第二轮）

1. 避讳动因一手文献（汉代文献/避讳学专著）→ hist-jingzhe-qizhe-renaming 升级路径。
2. GB/T 33661-2017 正文 + 初雷气候统计 → 两张B级sci卡共同缺口。
3. 《香港非物质文化遗产清单》"驚蟄祭白虎"条目直读 + 华南打小人方志证据。
4. 日本啓蟄权威来源直读 → 全球表达Candidate升级。
5. 农书链（唐→清惊蛰农事）+ 吃梨地域谱系（山西梨乡）。
6. 观田家系年与点校本校勘；元稹《咏廿四气诗》惊蛰篇核验。
7. 三候现代物候验证（桃花始花期/黄鹂初鸣现代观测数据）。

## 修改记录

- 2026-09-16（第一轮研究）：建日志；YAML自检发现3卡单引号转义问题并修复后重跑引擎（本表为修复后结果）。
- 2026-09-16（复查记录）：终检时重跑 `route.ts jingzhe` 因**并行批产其他代理**新写入的4张谷雨卡 YAML 单引号未转义（fact-guyu-un-chinese-language-day 等）而全库解析失败——非本节气文件，按铁律6未代改。已用一次性脚本（.batch-tmp/jingzhe-route-check.ts，复用引擎自身 assess 函数、跳过损坏外来文件）复现：本节气10卡路由结果与上表逐行一致。协调方需通知谷雨代理修复其引号转义。

[[01_terms/03_惊蛰|惊蛰索引]] · [[07_research/sections/review-jingzhe|审核分节]] · [[04_sources/README|来源库]]
