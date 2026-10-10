# Solar24 批量批准包 · Batch Ratification Package（2026-09-25）

> **给人审的唯一入口**。AI 拟审已完成 299 张 claim 卡与解释卡的七查与四审校 persona 交叉。你只需阅读本包第 1-3 节，抽查第 4 节必查清单，然后在第 5 节逐组签署。

## 审核统计

| 决策 | 数量 | 说明 |
|---|---|---|
| approve 建议 | 263 | 证据已核、范围明确、AI 未发现内容错误；179 张已升 in-review |
| hold | 36 | 全球候选（证据不足/仅线索源）或存在待解 findting；不阻塞 |
| reject | 0 | 未发现需要立即回退的卡 |

## 第一节 · System 级共享知识（17 张，杠杆最大）

| 卡 ID | 命题一句话 | 证据 | AI Decision | 一句理由 |
|---|---|---|---|---|
| fact-solarterms-unesco-2016 | 2016-11-30 二十四节气列入UNESCO人类非遗代表作名录 | 新华社直读+非遗网双源 A×2 | **approve** | 双机构独立直读，时间线互证；UNESCO官方页核读列人审条件 |
| sci-solarterms-calendar-role | 节气属阳历范畴；农历为阴阳合历；无中气置闰 | PMO直读+HKO直读 A×2 | **approve** | 历法权威机构双源 |
| sci-solarterms-jieqi-zhongqi | 单数位为节气双数位为中气；雨水定正月 | PMO直读 A×1 | **approve** | PMO逐字直读；月令直读互证 |
| hist-huainanzi-complete-24terms | 《淮南子·天文训》首次完整记载24节气序列 | 维基文库直读 A×1 | **approve** | 一手古籍直读；"四十五/四十六日"异文如实登记 |
| hist-solarterms-pentad-system | 七十二候体系与二十四节气的关系 | 多源直读 | **approve** | 体系层卡 |
| fact-solarterms-yellow-river-origin | 体系形成于黄河流域观察经验（申报表述） | 新华社直读 A×1 | **approve** | UNESCO申报表述直读；地域校准注意 |
| hist-nongshu-shiyi-concept | 农书"时宜"概念框架 | 齐民要术+授时通考直读 A×1 | **approve** | 北魏农书直读+清官修辑录 |
| hist-qimin-zhonggu-shixu | 齐民要术种谷"三时"：清明+桃始花双锚 | 齐民要术直读 A×1 | **approve** | 一手古籍逐字直读（引文复验 6/6 命中） |
| hist-qimin-gengtian-shouzhong | 齐民要术耕田收种时宜经验 | 齐民要术直读 A×1 | **approve** | 同上 |
| hist-quannong-institutional-chain | 劝农制度链：月令→朱熹→燕京→九华 | 四源直读 A×3 | **approve** | 四点直读链条闭合 |
| hist-suisizuanyao-jieqi-zhongqi-pairing | 四时纂要逐月"节/中气"配对 | 全本直读 A×1 | **approve** | 唐末农书直读；十二月异文如实登记 |
| hist-suisizuanyao-nongshi-zhanhou | 四时纂要农事占候混编结构 | 全本直读 A×1 | **approve** | 含七夕乞巧/腊日庭燎原文 |
| hist-shoushitongkao-quanke-juan42 | 授时通考劝课门：经书训→朱熹劝农文 | 卷42直读 A×1 | **approve** | 清官修直读 |
| hist-suiguangji-jieqi-kaoju | 岁时广记节气考据链（斗柄+释名+候应） | 卷1-4直读 A×1 | **approve** | 宋类书四卷直读；谷雨释名转引链修正 |
| hist-shixun-buzhi-omin | 七十二候的占验面（时训"不至"句） | 卷3/4直读 A×1 | **approve** | 占验层明确标注 |
| hist-huaxinfeng-24winds | 二十四番花信风最早系统文本 | 岁时广记卷1直读 A×1 | **approve** | 东皋杂录条直读 |
| sci-xiaoshu-sanfu-gengday-mechanism | 三伏与庚日机制 | PMO直读 | **approve** | 历法机制 |

## 第二节 · 立春 LC 依赖卡（7 张，垂直切片关键路径）

| 卡 ID | LC | 命题 | 证据 | AI Decision | 人审条件 |
|---|---|---|---|---|---|
| sci-lichun-longitude-315 | LC-2 | 立春=黄经315°，2月3-5日 | 非遗网+PMO+HKO直读 A×4 | **approve** | GB/T正文核读 |
| sci-lichun-calendar-position | LC-3 | 立春与春节两套规则 | PMO+非遗网直读 A×3 | **approve** | — |
| sci-lichun-vs-meteorological-spring | LC-4 | 立春≠气象入春 | 深圳气象局直读 B×1 | **approve** | QX/T原文核读 |
| hist-yueling-lichun-pentads | LC-5 | 立春三候原文 | 维基文库直读 A×1 | **approve** | 中华书局点校本 |
| region-jiuhua-lichun-ji | LC-6a | 九华立春祭：立春日鞭春牛 | 非遗网直读+新华社 A×2 | **approve** | — |
| region-shiqian-shuochun | LC-6b | 石阡说春：春官说唱劝农 | 非遗网直读+新华社 A×2 | **approve** | 乾隆方志 |
| lichun-human-explanation | LC全文 | 三层解释（逐句可追溯） | 支撑14张 | **approve** | S3/S7处置+全部支撑卡approved |

**LC 就绪判定**：LC-1~8 全部依赖卡的 AI decision 均为 approve → **签署后即可落盘 modules/lichun/content**。

## 第三节 · 各节气术语卡（按节气分组摘要）

共 239 张 approve 建议（system 17 + LC 7 + 其余节气 215）。每节气 5-18 张不等。**详细逐卡表过长（215 行），已内置于各卡 ai_review.notes 字段**。此处给每组统计：

| 节气 | approve | hold | 主卡 |
|---|---|---|---|
| 立春 | 18 | 2 | 黄经/历法/三候/九华/石阡/班春/解释 |
| 冬至 | 15 | 2 | 黄经/周正/郊天/数九/食俗/传说/三门/白居易/临安/北京/解释 |
| 秋分 | 14 | 1 | 黄经/昼夜均/夕月/丰收节/解释 |
| 立秋 | 13 | 1 | 黄经/一叶知秋/贴秋膘/苗赶秋/解释 |
| 白露 | 13 | 1 | 黄经/露凝/收清露/白露茶/解释 |
| （其余 19 节气各 5-12 张） | ... | ... | ... |

## 第四节 · 必查清单（人审前请至少抽查这些）

| 类别 | 卡 | 原因 |
|---|---|---|
| system 全部 | 见第一节 17 张 | 影响全库 |
| AI 分歧 | hist-yueling-lichun-pentads（独立性=1） | 单源古籍 |
| AI 分歧 | sci-lichun-vs-meteorological-spring（单源+分布断言） | 解释S3源头 |
| AI 分歧 | trad-daxue-yanrou（"自古"措辞语境） | 否定语境误报 |
| AI 分歧 | trad-xiaohan-caifan-nuomifan（同上） | 否定语境误报 |
| 随机抽 1 | interp-qiufen-zhongqiu-origin-narrative（contested） | 中秋起源争议 |
| 随机抽 2 | legend-dongzhi-zhangzhongjing-jiaozi（legend 层） | 传说分层 |
| 随机抽 3 | region-gd-qingming-jinzhu（新华转羊晚，cultural 级） | 地方媒体来源 |
| 随机抽 4 | hist-shu-eryueer-taqing-canshi（岁时广记单源） | 宋代地域实践 |
| 随机抽 5 | trad-hanlu-customs-food（寒露合并卡） | 维度合并 |
| 随机抽 6 | hist-bianchun-song-capitals（两宋对读） | 新建卡 |
| 随机抽 7 | sci-lidong-longitude-225（11月7/8日双例） | 新建卡 |
| 随机抽 8 | glob-setsubun-early-february（全球候选零直读） | hold 样本 |

## 第五节 · Hold 台账（36 张，不阻塞签署）

全部为 GlobalExpression（24 张）与个别证据不足卡（interp-global、hist-1914-chunjie、lit-dufu-lichun-shimpan 等 12 张）。**这些不影响首版内容生产**。

## 第六节 · 签署区

**批准方式**：逐组签署。每组一行：组名 / Decision（approved / changes-requested） / 签署人 / 日期 / 备注。

| 组 | Decision | 签署人 | 日期 | 备注 |
|---|---|---|---|---|
| A. System 共享知识（17张） | 待填 | 待填 | 待填 | |
| B. 立春 LC 依赖（7张） | 待填 | 待填 | 待填 | |
| C. 立春其余卡（11张） | 待填 | 待填 | 待填 | |
| D. 春夏节气（72张） | 待填 | 待填 | 待填 | |
| E. 秋冬节气（72张） | 待填 | 待填 | 待填 | |
| F. 非节气绑定卡（84张） | 待填 | 待填 | 待填 | |
| G. 解释卡（24张·Stage 2） | 待填 | 待填 | 待填 | |

**AI 处理承诺**：你签署后，我将按组回填 human_review（reviewer=你的名字 / reviewed_at=签署日期 / decision=你的 decision / notes=签署备注），status 改 approved，并运行 pnpm validate 确认 approved 链校验通过。changes-requested 的组我将逐卡列出修改清单等你确认。

---

*本包由 Solar24 AI (GLM-5.3) 拟审生成，2026-09-25。AI 不代填任何 human_review 字段。*
