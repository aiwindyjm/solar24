---
schema_version: '0.1.0'
id: 'hist-xiazhi-diji-sacrifice'
type: 'HistoricalRecord'
title: '夏至祭地：从《史记》"夏日至，祭地祗"到清代方泽大祀的礼制谱系'
solar_terms: ['xiazhi']
season: 'summer'
dimensions: ['history', 'customs']
region: ['中国（国家祀典层面，非民间实践；清代例证为朝廷典礼）']
period: '谱系两端：西汉追记的周制理想（《史记》引《周官》）至清代国家祀典定例（顺治十四年谕，1657）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-shiji-fengshan', 'source-wikisource-qinghuidian-fangze', 'source-wikisource-tushu-xiazhi-bu', 'source-wikisource-yanjingsuishiji', 'source-ihchina-xiazhi-feature']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review:
  {
    'reviewer': 'aiwindyjm',
    'reviewed_at': '2026-09-28',
    'decision': 'approved',
    'notes': 'Owner-authorized batch approval based on AI pre-review',
  }
claim:
  {
    'statement': '夏至祭地在中国文献中是一条可核验的国家礼制谱系：《史记·封禅书》引《周官》"冬日至，祀天於南郊，迎長日之至；夏日至，祭地祗"，二者"皆用樂舞"（西汉追记的周制理想，冬至祭天与夏至祭地对举）；清代官修《钦定大清会典则例》载顺治十四年谕"夏至祭地均奉太祖太宗配饗著為定例"，夏至祭地与冬至祭天并列为配飨定制，祭所为方泽、神位为皇地祇。同期民间口径相反：《燕京岁时记》冬至条按语引《汉书》"夏至陰氣起，故不賀"——礼制有国家大祀，民俗不以此为贺节。',
    'exceptions': [
      '《史记》所记为西汉追记的周制理想礼制，不能等同于某一朝代实际施行情况的实证档案',
      '北京地坛（方泽坛）的建置方位（安定门外、嘉靖九年建等）本轮未直读到文献（检索命中的《春明梦余录》卷16维基文库页为空页），"地坛=方泽坛"的坛庙对应关系待补证',
      '《帝京岁时纪胜》《清嘉录》的夏至条目维基文库无书（API检索无命中），清人岁时记层面夏至祀典的民间记述本轮缺位',
      '"夏至尝黍""夏至曾是民间重大节日（夏节）"等流行说法无一手文献直读，未入命题，见 Needs Research',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': ['一手来源（GB/T正文/标准全文）未直读，已在exceptions登记；降级处理'],
    'notes': 'REVISE→APPROVE：pending-primary-source不影响命题正确性（已有多独立直读源），待核来源列入人审条件',
  }
---

# 夏至祭地 · 礼制谱系

## 研究问题

"古代夏至祭地"的证据链能扎到多深？国家祀典与民间节庆是同一回事吗？

## 证据（按文献时代排列，均已直读原文）

1. **《史记·封禅书》（西汉，追记周制）**（[[04_sources/source-wikisource-shiji-fengshan|source-wikisource-shiji-fengshan]]）：
   > "周《周官》曰：「冬日至，祀天於南郊，迎長日之至；夏日至，祭地祗。」皆用樂舞，而神乃可得而禮也。"
   冬至祀天／夏至祭地**对举**，是后世"冬至圜丘、夏至方泽"格局的文献源头。注意：非遗网夏至专题引作"夏至日，祭地，皆用乐舞"系转写（原文作"夏日至，祭地祗"；"皆用樂舞"兼指祀天与祭地两事），引用以原书为准。
2. **《钦定大清会典则例》卷七十七（清代官修，四库本）**（[[04_sources/source-wikisource-qinghuidian-fangze|source-wikisource-qinghuidian-fangze]]）：
   > "十四年諭……以後冬至祈榖祭天均奉太宗同太祖配饗**夏至祭地均奉太祖太宗配饗著為定例**……"
   > "是年夏至奉太祖高皇帝太宗文皇帝**配饗方澤**……奉安於**皇地祇**幄旁東西配位黄幄……"
   "著為定例"四字表明：至迟顺治十四年（1657），夏至祭地已是写入会典的国家祀典定例，而非临时之举。此为"清代夏至祭地为国家大典"命题的直接官书证据。
3. **《钦定古今图书集成·岁功典·夏至部》艺文目录（清类书）**（[[04_sources/source-wikisource-tushu-xiazhi-bu|source-wikisource-tushu-xiazhi-bu]]）：著录明皇甫汸诗题"**夏至日天子有事於方丘**小臣太學齋居作"——明代"夏至日天子有事于方丘"的直接题名证据，可证夏至祭地叙事在明代的存在（诗文内容未读）。
4. **《燕京岁时记》冬至条按语（清末北京）**（[[04_sources/source-wikisource-yanjingsuishiji|source-wikisource-yanjingsuishiji]]）：
   > "按，《漢書》：冬至陽氣起，君道長，故賀。**夏至陰氣起，故不賀。**"
   同书冬至条正文："冬至郊天令節，百官呈遞賀表。民間不為節，惟食餛飩而已。與夏至之食麵同。"——清代北京的夏至在岁时记层面只留下食面记载（见 [[03_notes/trad-xiazhi-mian|冬至馄饨夏至面]]），"贺节"层面的夏至民俗不显。

## AI 摘要 / 解释

- 谱系结论：**国家祀典层面**的夏至祭地证据链完整（西汉追记周制 → 明代方丘叙事 → 清代会典定例）；**民间节庆层面**目前只读到"不贺"与食面。两层面不能混写为"古人夏至都过节祭地"。
- 结构性对称：冬至祀天（圜丘／南郊）与夏至祭地（方泽／方丘）是同一礼制框架的一对，"天圆地方""南阳北阴"的空间对应是理解这条谱系的钥匙（此句为解释性框架，依据即上引对举结构本身，不另立卡）。
- 阴阳解释（"夏至陰氣起，故不賀"）与《月令》注"夏至一陰生"（[[03_notes/hist-yueling-xiazhi-pentads|三候卡]]）同属一个解释体系：极盛转衰之日不宜贺——解释层，非史实层。

## 适用条件、例外与分歧

- 无跨来源直接冲突；非遗网对《史记》的转写措辞差异已在上文登记（回溯原书处理）。
- 唐宋两代夏至祭地（方丘）的中间环节（《大唐开元礼》、宋北郊议）本轮未读，谱系两端直读、中段待补。
- 民国以降祀典废止过程、当代地坛夏至文化活动的复兴谱系，均无来源，未写。

## 关联

[[01_terms/10_夏至|夏至索引]] · [[03_notes/trad-xiazhi-mian|冬至馄饨夏至面]] · [[03_notes/hist-yueling-xiazhi-pentads|夏至三候（"夏至一陰生"）]] · [[02_topics/history|历史维度]] · [[02_topics/customs|民俗维度]]

## 待人工确认

- 北京地坛建置文献（《春明梦余录》卷16维基文库页为空页；《日下旧闻考》《大清会典图》地坛方泽坛条）。
- 《帝京岁时纪胜》《清嘉录》夏至条（两书均不在维基文库，需点校本或影印本人工核读）。
- 唐宋环节与"夏至尝黍"（《诗经》黍稷谱系）的一手文献。

## 修改记录

- 2026-09-16（建卡）：四个直读文献（史记/清会典/图书集成目录/燕京岁时记）构成谱系两端+明代中继；"地坛方位""民间节日说"按证据边界留白。
- 2026-09-16（引擎复核）：路由 human-review-required，finding=pending-primary-source（地坛建置与唐宋中间环节文献未直读，已在 exceptions 声明）；状态 draft → in-review，入 B 建议复核。AI 不做最终审核，等待人工 Decision。
