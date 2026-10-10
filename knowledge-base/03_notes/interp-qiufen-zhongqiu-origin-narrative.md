---
schema_version: '0.1.0'
id: 'interp-qiufen-zhongqiu-origin-narrative'
type: 'CulturalFact'
title: '"中秋节由秋分祭月演变而来"是推断性叙事：两个日期锚的分层数据（interpretation 层）'
solar_terms: ['qiufen']
season: 'autumn'
dimensions: ['chinese-life', 'history', 'customs']
region: ['中国（叙事流通层；文献实例锚定清末北京）']
period: '流行叙事为当代传播；所引文献：清末《燕京岁时记》（引明末《帝京景物略》）、唐821年祭文、2017年机构页'
language: 'zh-CN'
status: 'approved'
epistemic: 'interpretation'
confidence: 'medium'
risk_level: 'high'
impact_level: 'term'
contested: false
source_ids:
  ['source-ihchina-qiufen-feature', 'source-wikisource-yanjingsuishiji', 'source-wikisource-yuanzhen-jibaishen']
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
    'statement': '"中秋节由秋分祭月演变而来"是现代流行的推断性叙事，不是有直接文献支持的定论。本轮直读的分层数据：①机构层（非遗网）称"秋分曾是传统的祭月节"，并谓"『中秋』一词最早出现在《周礼》中，但那时的『中秋』只是单纯的月令时间，并无节日之意"；②国家祀典层确有秋分夕月（[[03_notes/hist-qiufen-xiyue-sacrifice|祭月礼制卡]]）；③民间实践层可直读的清末北京记载锚定在八月十五：《燕京岁时记》中秋条"至十五月圓時，陳瓜果於庭以供月……惟供月時男子多不叩拜。故京師諺曰：『男不拜月，女不祭灶。』"（并转引《帝京景物略》"八月十五日祭月，其祭果餅必圓……曰團圓節也"）；④日期锚不同：秋分是太阳黄经180°的节气日，在农历八月内逐年漂移（直读实例：821年八月十八、2017年八月初四），中秋固定于农历八月十五（望日）。两套日期机制不同，"演变"关系的中间环节（何时、因何从秋分移锚到望日）无直接文献。',
    'exceptions': [
      '本卡命题是"该叙事为推断、两个日期锚可分"，不是"中秋节与秋分祭月无关"——礼制祭月与民俗拜月同为敬月实践，关联方向的研究空间保留',
      '《周礼》"中秋"一词的原始文本本轮未直读（非遗网转述），"最早出现在《周礼》"按机构汇编口径归因',
      '清末北京记载限京师，不能外推为全国民间形态',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'hold',
    'findings': ['contested-open'],
    'notes': '待补证',
  }
---

# "中秋源于秋分祭月"叙事辨析

## 研究问题

"秋分曾是祭月节，后来演变为中秋节"这一流行说法，文献上能站到哪一步？

## 证据（分层数据，均本轮直读）

1. **机构叙事层**：非遗网秋分专题（[[04_sources/source-ihchina-qiufen-feature|source-ihchina-qiufen-feature]]）："秋分曾是传统的'祭月节'。'中秋'一词最早出现在《周礼》中，但那时的'中秋'只是单纯的月令时间，并无节日之意。"
2. **礼制层**：秋分夕月为国家祀典（清会典明文，见 [[03_notes/hist-qiufen-xiyue-sacrifice|祭月礼制卡]]）。
3. **民间实践层（清末北京）**：《燕京岁时记》八月"中秋"条（[[04_sources/source-wikisource-yanjingsuishiji|source-wikisource-yanjingsuishiji]]，本轮重读该条）："京師之曰八月節者，即中秋也。每屆中秋，府第朱門皆以月餅果品相饋贈。至十五月圓時，陳瓜果於庭以供月，並祀以毛豆、雞冠花。……惟供月時男子多不叩拜。故京師諺曰：'男不拜月，女不祭灶。'"——民间供月的日期锚是"十五月圓時"。
4. **日期漂移实例**：元稹《秋分日祭百神文》纪"八月……十八日"为秋分日（821年）；非遗网载2017年秋分为"农历丁酉年八月初四"——秋分在农历八月内的位置逐年变动，与固定八月十五的中秋不是同一日。

## AI 摘要 / 解释（谱系警示）

- 流行叙事的结构是"秋分祭月（礼制事实）→ 祭月节移到八月十五 → 中秋节"，其中首尾两端都有直读证据（礼制夕月、清末八月十五供月），**中间的"移锚"环节是推论**——没有任何本轮读到的文献记载"改在八月十五祭月"这件事本身及其原因。这与广汉保保节辨析（[[03_notes/region-guanghan-yushui-baobaojie|拉保保卡]]：保保节日期锚是正月十六而非雨水日）同构：现代叙事习惯把相邻的两个时间锚合并成一个连续故事。
- 学术上有讨论空间的解释（如"秋分日未必有满月、望日祭月更合 ritual 逻辑"）本轮无直读文献支撑，不写入，记 Needs Research。
- 引用红线：对外内容写"秋分在礼制上是祭月（夕月）的日子；民间八月十五供月的清末文献与国家秋分祀典并行可考，两者的演变关系属学界推断"，不得写"中秋节由秋分祭月演变而来"为定论。

## 适用条件、例外与分歧

无两源正面冲突；"演变"叙事与文献证据之间是证据真空而非矛盾。若后续直读到记载移锚过程的文献（如唐宋礼俗变迁研究），本卡应升级改写。

## 关联

[[01_terms/16_秋分|秋分索引]] · [[03_notes/hist-qiufen-xiyue-sacrifice|秋分祭月礼制卡（事实层）]] · [[03_notes/region-guanghan-yushui-baobaojie|拉保保辨析先例]] · [[03_notes/lit-liuyuxi-qiufen-xiyuetan|刘禹锡诗]] · [[02_topics/chinese-life|中国人的生活]]

## 待人工确认

- 《周礼》"中秋"原始条目直读（"中秋献良裘"等，确认"月令时间无节日之意"的表述）；《帝京景物略》原书直读（本轮仅经《燕京岁时记》转引）。
- 学界关于"秋分祭月→中秋"的代表性研究论文（作为 interpretive 文献引入，与本卡的证据分层互补）。
- 唐代八月十五中秋节成立过程的研究文献（中秋节自身谱系不属本卡范围，留待中秋相关研究）。

## 修改记录

- 2026-09-16（首轮批研究）：建卡。以"两个日期锚+中间证据真空"结构处理流行叙事；三个直读层（机构/礼制/民间）与两个漂移实例（821年八月十八、2017年八月初四）入卡；contested=true 标记叙事争议。
- 2026-09-16（审核阶段）：路由 human-review-required（findings：contested-open——争议命题必须人工裁决；pending-primary-source），风险定级 high，状态 draft → in-review。见 [[07_research/sections/review-qiufen|秋分审核分节]]。
