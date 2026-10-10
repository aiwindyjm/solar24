---
schema_version: '0.1.0'
id: 'lit-liuyuxi-qiufen-xiyuetan'
type: 'CulturalFact'
title: '刘禹锡《监祠夕月坛书事》：唐诗中的秋分夕月现场（"西皥司分晝夜平"）'
solar_terms: ['qiufen']
season: 'autumn'
dimensions: ['literature-art', 'history']
region: ['中国（唐代都城）']
period: '唐·刘禹锡（772-842）；具体作年未考'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-liuyuxi-xiyuetan', 'source-wikisource-yuanzhen-jibaishen']
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
    'statement': '刘禹锡七绝《监祠夕月坛书事》全诗为"西皥司分晝夜平，羲和停午太陰生。鏗鏘揖讓秋光裏，觀者如雲出鳳城。"（维基文库作品页直读，题注"其禮用晝"，公有领域）。诗题"监祠夕月坛"表明诗人以监祠使身份亲历夕月坛祭祀，首句"西皥司分晝夜平"以神话语言嵌入秋分"昼夜平"的天文内核，"秋光""觀者如雲出鳳城"记录都人围观祭祀的现场。另有元稹《秋分日祭百神文》（821年，长庆元年八月十八日）为秋分日国家祭祀的唐代文书样本（祭百神非祭月，分立引用）。',
    'exceptions': [
      '两个文本均为维基文库直读（同一托管方），按同托管方规则 confidence 上限 medium',
      '刘禹锡诗作年、监祠本事（何年何地、坛在何处）未考，"唐代夕月礼细节"不作超出诗面的推断',
      '"西皥"（少皞/西方秋神）"司分"（主二分之节）的神话训释为通行解读，诗无自注，引用时标为解释',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=low/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 刘禹锡《监祠夕月坛书事》

## 研究问题

古典诗歌如何书写秋分？"秋分"字面与夕月礼制如何在诗中相遇？

## 证据（原文与定位）

已直接读取维基文库作品页（[[04_sources/source-wikisource-liuyuxi-xiyuetan|source-wikisource-liuyuxi-xiyuetan]]）：

> 監祠夕月壇書事〈其禮用晝〉　西皥司分晝夜平，羲和停午太陰生。鏗鏘〈一作「鏘鏘」〉揖讓秋光裏，觀者如雲出鳳城。

页面标注：作者刘禹锡，唐朝作品，全世界公有领域。

## AI 摘要 / 解释

- 选为秋分文学样本的理由：(1) 诗题即"夕月坛"祭祀现场，与礼制卡（[[03_notes/hist-qiufen-xiyue-sacrifice|秋分祭月礼制]]）的注疏-会典谱系在"唐代实践"一环交汇——文学与礼制两条证据线独立可读、相互对照；(2) 首句"西皥司分晝夜平"以"秋神执掌分节、昼夜正平"的神话意象承载秋分的天文内核（对照 [[03_notes/sci-qiufen-day-night-equal|昼夜均分卡]]），是"诗人如何知道昼夜平"的古典表达样本；(3) "觀者如雲出鳳城"显示国家祭祀是都城公共景观——祭祀不止于宫廷内部。
- 题注"其禮用晝"：该次夕月礼行于昼。这与夕月"迎月出"（清会典语）的暮夜意象不同，提示历朝祭月时刻存在差异——细节留给礼制研究，本卡仅存录。
- 备选文本落选说明：任务线索中的谢逸《点绛唇·金气秋分》与李朴《中秋》本轮均未获可靠直读（维基文库无页；检索服务中文查询被过滤，返回内容为AI转述不能作直读），记 Needs Research；元稹祭文（[[04_sources/source-wikisource-yuanzhen-jibaishen|source-wikisource-yuanzhen-jibaishen]]）作为唐代第二直读文本并入本卡作互证。

## 适用条件、例外与分歧

无文本分歧（异文仅"鏗鏘/鏘鏘"一处，页内自注）。诗的系年与唐代夕月坛建置未核，不越出诗面信息。

## 关联

[[01_terms/16_秋分|秋分索引]] · [[03_notes/hist-qiufen-xiyue-sacrifice|秋分祭月礼制卡]] · [[03_notes/sci-qiufen-day-night-equal|昼夜均分卡]] · [[02_topics/literature-art|文学艺术]]

## 待人工确认

- 与《全唐诗》通行印本核对；刘禹锡监祠本事（系年考证，参考《刘禹锡年谱》类文献）。
- 谢逸《点绛唇·金气秋分》的可靠文本直读（全宋词点校本或图书馆途径）后可另建宋词卡。

## 修改记录

- 2026-09-16（首轮批研究）：建卡。刘禹锡诗维基文库逐字直读为主，元稹祭文为同代互证；同托管方双源故 confidence=medium；谢逸/李朴两线索如实记 Needs Research 不硬造。
