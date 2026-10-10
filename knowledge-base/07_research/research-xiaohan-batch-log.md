---
schema_version: '0.1.0'
id: 'research-xiaohan-batch-log'
type: 'ResearchNote'
title: '小寒批量研究 · 第一轮执行日志（2026-09-16）'
solar_terms: ['xiaohan']
season: 'winter'
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
    'task': '按 24 节气批量研究规范完成小寒（23，winter）第一轮研究：天文定义（黄经285°双机构直读）/月令三候直读+雊鸲异文/命名卡（月令+孝经纬+诗含神雾双源）/小寒vs大寒气温科学锚（23省/8沿海，30年口径）/三九数九（锚冬至辨析）/九九消寒图（帝京景物略经广群芳谱转引）/腊八辨析（日期锚=农历十二月初八，荆楚-燕京双直读）/南京菜饭广州糯米饭地域食俗/农事/文学（两首选失败后诚实降级陆游腊月诗）/全球表达（Plough Monday Candidate）/解释层/创意层',
    'queries': [
      'ihchina 编号确认：curl 直连 -L solar_details/6983.html，页面标题"雪里已知春信至——二十四节气之小寒"命中（brief 预计编号正确；本节气编号=6983，供后续波次）',
      'curl 走代理直读维基文库：月令七十二候集解（全页切小寒节：定义句+三候全文注文，第三候作"雉雊〈音姤〉"）；燕京岁时记（腊八粥/雍和宫熬粥/打冰"冬至三九則冰堅"三条）；荆楚岁时记（zh-hans 变体页，"十二月八日为腊日"条全文）；御定佩文斋广群芳谱卷006（十二月汇编：孝经纬/诗含神雾小寒定义、花月令、赏心乐事、风土记腊八粥、帝京景物略九九消寒图、陆游腊月诗）',
      'WebSearch：小寒 大寒 哪个更冷 最冷节气 中国天气网 平均气温 → 命中人民日报2026-01-03与光明网；再搜"小寒 23个省份 1991至2020" → 命中中国天气网 news.weather.com.cn/2025/11/4414229.shtml',
      'WebFetch 直读：人民日报 paper.people.com.cn（2026-01-03，成功：北京数据/南北归纳/干冷湿冷/热量亏空）；中国天气网 4414229（成功：23省/8沿海/-5℃/谚语群）；新华网 news.cn/politics/2023-01/04/c_1129256158.htm（成功：黄经285度/第23个/"小寒往往是全年最冷的时节"/"小寒时处二三九"）',
      'WebSearch：新华网 小寒 太阳到达黄经285度 1月5日 节气 → 命中新华网2023/2020/2026三稿，直读2023稿作交叉源',
      '维基文库检索 API（走代理）：駐輿遣人/後山陳德方/江雨蒙蒙/江雨濛濛/雪飄五出/小寒連大呂/歡鵲壘新巢 → 元稹《咏廿四气诗》与黄庭坚小寒诗均无直读页（沿 wave1-2 结论）；改取广群芳谱卷006集藻内陆游《腊月》全诗（已直读）',
      'WebSearch：腊八节 起源 释迦牟尼 成道 腊八粥 民俗 → 命中非遗网《过了腊八就是年》专文；curl 直连 -L news_1_details/10156.html 成功（腊祭谱系/释迦谱传说层/武林旧事/雍和宫舍粥/各地食俗）',
      'WebSearch：Plough Monday first Monday after Epiphany England tradition → Historic UK/Wikipedia/JSTOR 线索（摘要级，未直读，作 Candidate）',
    ],
    'discovered_source_ids':
      [
        'source-ihchina-xiaohan-feature',
        'source-xinhua-xiaohan-2023',
        'source-weathercn-xiaohan-2025',
        'source-people-xiaohan-dahan-2026',
        'source-wikisource-guangqunfangpu-c006',
        'source-ihchina-laba-2017',
        'source-historicuk-plough-monday',
      ],
    'conflicts':
      [
        '三候第三候：《月令》维基文库直读"雉雊〈音姤〉" vs 非遗网小寒页/新华网2023稿均作"雉始鸲"——雊（gòu雉鸣）/鸲（qú鸲鹆）两字，机构页疑形误或另系录文，卡内以直读为准、异文登记待校',
        '《月令》定义句标点：直读"故云。月半則大矣" vs 非遗网/中国天气网引"故云，月半则大矣"（文字一致）',
        '荆楚腊日条：维基文库本"村人并系细腰鼓，戴胡公头" vs 广群芳谱引"村人並擊細腰鼓，戴胡頭"——系/擊、胡公头/胡頭两处异文（两传本系统）',
        '谚语"小寒大寒×冰团"四形并存：冷成冰团（江南·非遗网）/冻成冰团（天气网正文）/冻成一团（天气网谚表）/冻作一团（非遗网养生段）——口传异文群',
        '"小寒vs大寒谁冷"两口径：人民日报民间归纳"北方小寒胜大寒，南方大寒冷小寒" vs 中国天气网30年逐省统计"23省小寒低/8沿海大寒低"——粒度不同，两卡并存不合并',
        '腊八与小寒相对位置逐年变动：2018年小寒落农历十一月十九（非遗网小寒页实例），该年腊八（公历1月24日）已入大寒时段——"腊八=小寒节日"不成立',
        '非遗网小寒专题全文未提腊八（与腊八专文分立）——机构自身的页面分工支持"节气×农历节庆"两锚分立',
      ],
    'conclusions':
      [
        '天文定义双机构直读互证：黄经285°、公历1月5日或6日、第23个/冬季第五个/公历新年第一个（非遗网×新华网）；"1月5-7日"下限仅摘要级降入 exceptions',
        '本节气科学锚立稳："小寒常比大寒冷"有数据源直读（中国天气网1991-2020盘点：23省份小寒平均气温低于大寒、8沿海例外、全国平均小寒最低-5℃）+人民日报北京个案+新华网定性句，三机构同向，地域边界显式入命题',
        '命名卡双古典源：月令"月初寒尚小"（直读）+孝经纬/诗含神雾（广群芳谱转引）——"小/大"是农历月内进程尺度，与实测反差分层表述',
        '三九卡显式记"数九锚冬至非小寒"（燕京打冰条"冬至三九則冰堅"直读+四机构谚语层），与气温卡互证但不互替',
        '消寒图古籍原文首次直读（帝京景物略经广群芳谱转引："冬至日畫素梅一枝為瓣八十有一日染一瓣瓣盡而九九畢則春深矣"），锚冬至、覆盖小寒、非小寒专属',
        '腊八辨析按寒露×重阳先例：日期锚=农历十二月初八；荆楚（六世纪腊鼓逐疫无粥）-宋代粥层（转引）-清末北京（直读）三段谱系；成道说按宗教传说层；2018年实例证锚差',
        '食俗地域卡单源机构层如实降权（南京菜饭/广州糯米饭/天津黄芽菜逐地限定，"古时"断代不采信）；农事卡兴修水利锚"海南和华南"条目原文',
        '文学卡诚实降级：元稹/黄庭坚两首选直读失败（维基文库无页，检索API确认），取已直读的陆游《腊月》（腊月诗身份声明、月序关联）；两首选记 Needs Research',
        '全球表达取 Plough Monday Candidate（search-excerpt 级、nearby-time 枚举、三要素齐备、difference 写"御寒备年vs农事重启"反向对照）；NAOJ日语小寒因大寒波次已建同类（source-naoj-24sekki-dahan）留待后波汇总不重复',
      ],
    'human_questions':
      [
        '"雉雊/雉始鸲"机构页异文：是否需要在全库层做一次二十四节气机构页三候用字普查（多波次均可能出现）？',
        'trad-xiaohan-caifan-nuomifan 的 modern-as-ancient finding 系否定式警示触发字面匹配（沿大雪腌肉卡先例），此类引擎误报是否统计上报给 route.ts 维护方？',
        'sci-xiaohan-vs-dahan-temperature 的 risk=high 是否合理（命题有30年数据背书，风险主要在逐省表未发布——请人工判断降级条件）',
        '腊八谱系卡（hist-xiaohan-laba）同时挂 xiaohan/dahan 两 solar_terms：大寒波次侧是否需要建对向链接卡？跨节气卡归属规则待定（同"小雪腌菜大雪腌肉"先例问题）',
        '广群芳谱卷006是冬三月（冬至-小寒-大寒-腊日-除夕）共享直读页，大寒/冬至波次可直接复用，是否登记入 §2 式共享源清单？',
      ],
  }
---

# 小寒批量研究 · 第一轮执行日志

## 执行摘要

小寒（23，winter）第一轮完成：13 张知识卡（sci×2 / hist×4 / trad×3 / lit×1 / glob×1 / idea×1 / explanation×1）+ 7 张新 Source 卡（6 直读 + 1 线索）+ 索引更新。ihchina 专题页编号实测 **6983**（标题"雪里已知春信至——二十四节气之小寒"，curl 直连一次成功）。本轮最有价值的发现：(1) "小寒常比大寒冷"拿到机构数据直读——中国天气网1991-2020盘点"23个省份在小寒期间平均气温低于大寒，仅8个沿海地区大寒更冷"，与命名之"小"构成"名实倒挂"知识锚；(2) 三候第三候机构页普遍作"雉始鸲"而《月令》直读为"雉雊"，又一处防幻觉异文；(3) 腊八日期锚辨析（锚农历十二月初八非节气日）拿到2018年小寒落农历十一月十九的机构页实例，证"腊八可落大寒时段"；(4) 九九消寒图古籍原文（《帝京景物略》经《广群芳谱》转引）与腊日谱系（荆楚腊鼓→宋代粥→清末北京）双直读。坑：元稹/黄庭坚小寒诗在维基文库均无直读页（检索 API 多关键词确认），文学卡诚实降级为陆游《腊月》（腊月诗身份声明）；两处 YAML 串内 ASCII 单引号（"谓之'腊八粥'"、"'三九'前后"）翻车已修，python 全量复验通过。

## 流程记录

1. 读 brief §0-§10 与全部样例卡（sci/hist/trad/lit/glob/explanation/idea/Source×3/立春索引）+ 大雪波次成品（索引/日志/审核分节）对齐最新格式；另读寒露波次"重阳邻近卡"作为腊八辨析先例。
2. 情报核验：ihchina solar_details/6983 = 小寒（标题确认，2018-01-05 创建，curl 直连）。
3. 直读（成功 9 页/书）：ihchina 6983 与腊八专文 10156（curl 直连×2）；月令七十二候集解、燕京岁时记、荆楚岁时记（zh-hans 变体页）、御定佩文斋广群芳谱卷006（curl 走代理×4，全页抓取后切分）；人民日报2026-01-03、中国天气网2025-11盘点、新华网2023小寒稿（WebFetch×3）。检索摘要级：Plough Monday（Historic UK/Wikipedia/JSTOR）、光明网、新华网2020/2026稿、搜狐转述——均未直读，不入证据区。
4. 复用既有直读源：source-yueling-qishierhou-wikisource、source-wikisource-yanjingsuishiji、source-wikisource-jingchu-suishiji（三源重抓、逐字摘本节气所需段落）；source-hko-solar-terms、source-gbt-33661-openstd（系统机制/标准层引用）。
5. 写卡 → python YAML+链接全量校验（修复2处串内单引号、1处不存在链接）→ 首跑 batch-route（解释卡 unsupported-distribution finding）→ 改写解释句与支撑卡命题逐字对齐 → 复跑（finding 清除）→ 7 卡升 in-review → 写审核分节与索引。

## 12项审计（§7）

1. **Unsupported Distribution**：发现+已处置。首跑引擎对解释卡 summary"23个省份小寒期间比大寒冷，仅8个沿海省市区例外"判 unsupported-distribution（压缩转述未命中支撑卡命题句式）；改写为与 sci 卡逐字对齐（"23个省份在小寒期间的平均气温低于大寒，仅江苏、上海、浙江、福建、江西、广东、广西、海南8个沿海省市区大寒更冷"）后复跑清除。全卡无"大部/普遍/各地"类无背书短语。
2. **Regional Generalization**：通过。菜饭限南京（且"有些淡化"）、糯米饭限广州（早餐场景）、黄芽菜限"旧时天津"、兴修水利限"海南和华南大部分地区"、"小寒胜大寒"限23省口径且8例外显式列出。
3. **Modern-as-Ancient**：发现+finding。trad-xiaohan-caifan-nuomifan 被判（触发词为卡内登记的非遗网原话"古时南京人对小寒很重视"，exceptions 已明示不采信其断代含义——否定语境字面匹配，沿大雪腌肉卡先例交人工判读）；卡实质内容（单源机构层、古籍锚缺失）已如实分层。
4. **Historical Leakage**：通过。三候/命名/腊八/消寒图/腊月诗五张古籍向卡无黄经、气象学等现代概念；"30年统计/-5℃"只出现在 sci 卡；纬书阴阳语标注为古典解释体系。
5. **Scientific Leakage**：通过。农谚卡（nongshi）、三九卡、食俗卡均无科学机制内容；热量亏空机制在 sci 卡且标注"媒体科普转述、原始文献未直读"。
6. **Legend-as-Fact**：通过。释迦牟尼成道/牧女乳糜按宗教传说层登记（非遗网"相传"标记+《释迦谱》转引层级），未进入任何 claim 命题与解释层正文；桓景式俗源断言未涉及。
7. **Weak Source Inflation**：通过。摘要级信息（Plough Monday 全部断言、"1月7日"下限、逐省数值表、元稹诗句、"南方大寒冷小寒"粒度差）全部停留 search-excerpt/exceptions/Needs Research，未撑任何卡命题。
8. **Search Excerpt Misuse**：通过。唯一 search-excerpt 源（source-historicuk-plough-monday）verification=unverified，仅支撑 low 的 Candidate 卡。
9. **Cross-source False Validation**：发现+处置。非遗网小寒页与新华网2023稿三候同作"鸲"（两机构一致但同异于直读古籍，不用于抵消《月令》"雊"）；非遗网腊八文引《燕京岁时记》与维基文库直读逐字一致才给 cross-checked；人民日报"南方大寒冷小寒"（民间归纳）与天气网"8沿海"（30年统计）粒度不同，两卡并存不合并为单一"南方大寒更冷"。
10. **Creative-as-Fact**：通过。idea 卡性质声明+每条依据卡与误导风险（逐省地图"须接国家气候中心级数据源，不得以新闻稿数字伪造"；消寒图"入口在小寒模块必须标注自冬至起算"）。
11. **Global Forced Correspondence**：通过。Plough Monday 三要素齐备、relationship 用协议枚举 nearby-time、明示"不是外国版小寒"；difference 写入"御寒备年 vs 农事重启"的反向对照，传播关系明示为无。
12. **Shared Knowledge Duplication**：通过。黄道24等分/UNESCO/七十二候体系/节气中气与置闰/淮南子序列/黄河起源全部链接引用（02_shared）；本节气卡只写特有内容（285°、三候异文、命名双源、23省数据、腊八锚差等）。

## 19维覆盖矩阵

| 维度 | 状态 | 说明 |
|---|---|---|
| astronomy | complete | 黄经285°/1月5日或6日/第23个，双机构直读（high） |
| calendar | partial | "十二月節"身份写入三候/命名卡，节气中气与历法角色以共享卡承载；本节气无独立 calendar 卡 |
| climate | complete | 小寒vs大寒23省/8沿海数据锚（high，本节气科学锚） |
| phenology | complete | 三候原文+注文直读（high；雊/鸲异文登记） |
| agriculture | complete | 防寒防冻/积肥/华南兴修水利+农谚群（medium） |
| ecology | weak | 雁/鹊/雉三候鸟类的现代生态对应仅在物候卡内提及，无独立卡、无观测数据 |
| chinese-life | complete | 三九/食俗/农事/解释层覆盖深冬生计线 |
| customs | complete | 数九三九、消寒图、腊八、探梅花月令（机构+古籍两层） |
| food | complete | 南京菜饭/广州糯米饭/天津黄芽菜地域条目+腊八粥谱系 |
| history | complete | 命名双源+三候+腊八谱系+消寒图+shared 淮南子/UNESCO |
| literature-art | partial | 陆游《腊月》直读（medium，腊月诗身份声明）；元稹/黄庭坚小寒诗无直读页（Needs Research） |
| regional-differences | partial | 南北气温差异+南京/广州/天津地域条目+8沿海例外；无独立 region 卡（本节气无国家级非遗项目锚点，按 brief 非必做） |
| scientific-interpretation | complete | 黄经定义+名实倒挂数据锚两卡 |
| global-expressions | partial | Plough Monday Candidate（low，needs-research 路由）；日语小寒传播留待后波 |
| visual-assets | missing | 无已授权素材（消寒图素梅/三候鸟/菜饭图像列需求清单） |
| audio-assets | missing | 同上（雉雊鸟鸣线索仅在物候卡文字层） |
| interaction-ideas | complete | 3条创意（名实对照器/染瓣计日/日期锚小测） |
| references | complete | 7 新源（6直读+1线索）+6复用源登记 |
| ai-research-log | complete | 本日志+审核分节 |

小计：complete 12 / partial 4 / weak 1 / missing 2（visual/audio 为全库共性缺口，非本节气特有）。

## 素材边界审计

- 配图零使用：ihchina 小寒页图1-8（字体设计/腊梅/什刹海冰场/菜饭等）与腊八文配图仅作文字信息源，版权未清，一律不引用。
- 文本引用长度：古籍引文限于小寒节三候与定义句、腊八粥/雍和宫/打冰三条、腊日条、消寒图句、孝经纬/诗含神雾两句、陆游五律全诗40字（公有领域）；机构文摘录为定位所需短段；谚语按原句抄录不改写。
- 未读内容不引：《释迦谱》《武林旧事》《永乐大典》《帝京景物略》《津门杂记》《授时通考》《剑南诗稿》原书均未直读（只在转引层登记）；新华2020/2026稿、光明网、搜狐、Plough Monday 各页、大寒侧已有源（source-naoj-24sekki-dahan 等）未进入任何卡证据区。
- .batch-tmp 只写了 xiaohan- 前缀临时文件（xiaohan-ihchina-6983/-yueling/-yanjing/-jingchu/-jingchu2/-gqfp-006/-sgd-81/-sgd-jidong/-ihchina-laba/-route-final 各 .html/.txt）。

## 引擎路由表（npx tsx .batch-tmp/batch-route.mts xiaohan，2026-09-16，解释句对齐后复跑）

```
# Routing report — xiaohan（tolerant loader）

| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |
|---|---|---|---|---|---|---|
| glob-xiaohan-plough-monday | GlobalExpression | global | high | D(独立直读×0) | **needs-research** | insufficient-evidence, global-candidate-hold |
| hist-xiaohan-laba | HistoricalRecord | term | medium | A(独立直读×4) | **human-review-required** | pending-primary-source |
| hist-xiaohan-naming | HistoricalRecord | term | medium | A(独立直读×3) | **auto-candidate** | — |
| hist-xiaohan-xiaohantu | HistoricalRecord | term | medium | B(独立直读×1) | **human-review-required** | pending-primary-source |
| hist-yueling-xiaohan-pentads | HistoricalRecord | term | medium | A(独立直读×3) | **auto-candidate** | — |
| lit-luyou-xiaohan-layue | CulturalFact | term | low | B(独立直读×1) | **human-review-required** | pending-primary-source |
| sci-xiaohan-longitude-285 | ScientificFact | term | medium | A(独立直读×4) | **human-review-required** | pending-primary-source |
| sci-xiaohan-vs-dahan-temperature | ScientificFact | term | high | A(独立直读×4) | **human-review-required** | pending-primary-source |
| trad-xiaohan-caifan-nuomifan | Tradition | term | medium | A(独立直读×1) | **human-review-required** | pending-primary-source, modern-as-ancient |
| trad-xiaohan-nongshi | Tradition | term | low | A(独立直读×1) | **auto-candidate** | — |
| trad-xiaohan-sanjiu | Tradition | term | medium | A(独立直读×5) | **human-review-required** | pending-primary-source |
| xiaohan-human-explanation | HumanExplanation | term | medium | D(独立直读×0) | **human-review-required** | explanation-gated |

## Findings 明细

- `glob-xiaohan-plough-monday` **insufficient-evidence**（blocker）：没有正分证据来源（仅线索级或无来源）。
- `glob-xiaohan-plough-monday` **global-candidate-hold**（info）：Global Expression 处于 candidate：不构成已核实的文化对应。
- `hist-xiaohan-laba` **pending-primary-source**（major）：存在未直读的一手/标准来源，需人工核读后才能 verified。
- `hist-xiaohan-xiaohantu` **pending-primary-source**（major）：同上（《帝京景物略》原书）。
- `lit-luyou-xiaohan-layue` **pending-primary-source**（major）：同上（《剑南诗稿》原集）。
- `sci-xiaohan-longitude-285` **pending-primary-source**（major）：同上（GB/T 正文）。
- `sci-xiaohan-vs-dahan-temperature` **pending-primary-source**（major）：同上（逐省数值表/机制一手文献）。
- `trad-xiaohan-caifan-nuomifan` **pending-primary-source**（major）：同上（《津门杂记》原书）。
- `trad-xiaohan-caifan-nuomifan` **modern-as-ancient**（major）：传统卡使用"自古/古已有之"式断代断言，需逐环文献。
- `trad-xiaohan-sanjiu` **pending-primary-source**（major）：同上（数九首出文献）。
- `xiaohan-human-explanation` **explanation-gated**（major）：支撑卡或解释卡未 approved：按 Content Gate 禁止发布。
```

注：本表为本节气12卡；另有6张 02_shared 共享卡（unesco/yellow-river/huainanzi/pentad-system/calendar-role/jieqi-zhongqi）同为 human-review-required，属系统级既有卡，不在本节气审核包内（沿大雪波次口径）。首跑曾对解释卡报 unsupported-distribution（summary 压缩句未命中支撑卡命题），改写对齐后复跑清除，过程见修改记录。并行波次的 dahan/dongzhi 文件（如 sci-dahan-vs-xiaohan-cold、trad-dongzhi-shijiu-xiaohantu）非本代理所建，未触碰。

## 修改记录

- 2026-09-16（第一轮）：建本日志；13 知识卡+7 源卡+索引更新；YAML 两处修复（source-ihchina-laba-2017"谓之'腊八粥'"、source-people-xiaohan-dahan-2026"'三九'前后"改「」）；trad-xiaohan-sanjiu 删除一处指向不存在卡（sci-xiaoshu-vs-superheat）的链接；7 卡按路由升 in-review（hist-laba / hist-xiaohantu / lit-layue / sci-longitude-285 / sci-vs-dahan / trad-caifan / trad-sanjiu）。
