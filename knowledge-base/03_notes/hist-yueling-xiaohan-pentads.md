---
schema_version: '0.1.0'
id: 'hist-yueling-xiaohan-pentads'
type: 'HistoricalRecord'
title: '《月令七十二候集解》小寒三候：雁北乡、鹊始巢、雉始雊'
solar_terms: ['xiaohan']
season: 'winter'
dimensions: ['phenology', 'history', 'ecology']
region: ['文本经验锚定中国（黄河流域为核心的古典物候传统）；实际物候因纬度海拔而异']
period: '文本传统题名为元代；所承物候体系更早（《礼记·月令》《逸周书·时训》等）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  [
    'source-yueling-qishierhou-wikisource',
    'source-ihchina-xiaohan-feature',
    'source-xinhua-xiaohan-2023',
  ]
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
    'statement': '《月令七十二候集解》将小寒列为十二月节（居大寒"十二月中"之前），定义"小寒，十二月節。月初寒尚小，故云。月半則大矣"，并以五日为一候记小寒三候：一候雁北乡（鴈北鄉）、二候鹊始巢、三候雉始雊（雉雊，注音"音姤"）。三候均为鸟类对"阳气已动"的反应：雁北飞、鹊筑巢、雉雌雄同鸣。',
    'exceptions': [
      '本直读本三候第三候作"雉雊"，非遗网小寒专题与新华网2023稿均作"雉始鸲"——雊（gòu，野鸡鸣叫）/鸲（qú，鸲鹆即八哥）为两字，机构页"鸲"疑为"雊"之形误或另一录文系统，本卡以维基文库直读为准、异文待校勘',
      '机构页对三候的串解（"古人认为大雁顺阴阳而迁移……雉因感到阳气生长而鸣叫"）与《集解》注文同向但为现代转述',
      '七十二候所述物候是古典文本经验，不等于当代中国各地的实际物候观测；雁鹊雉的当代迁徙/营巢/鸣叫节律需现代观测验证',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立3；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 小寒三候（古典文本记载）

## 研究问题

传统文献如何描述小寒时节的自然变化？"三候"体系的原始文本是什么？

## 证据（原文与定位）

已直接读取维基文库《月令七十二候集解》小寒节全文（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]，本代理本轮重抓全页切分；位于冬至"十一月中"之后、大寒"十二月中"之前）：

> 定义："小寒，十二月節。月初寒尚小，故云。月半則大矣。"
> 一候："鴈北鄉〈【去聲】〉。鄉，向導之義。二陽之候，鴈將避熱而回，今則鄉北飛之，至立春後皆歸矣，禽鳥得氣之先故也。"
> 二候："鵲始巢。喜鵲也，鵲巢之門每向太歲，冬至天元之始，至後二陽已得來年之節氣，鵲遂可為巢，知所向也。"
> 三候："雉雊〈【音姤】〉。雉，文明之禽，陽鳥也；雊，雌雄之同鳴也，感于陽而後有聲。"

另已直接读取非遗网小寒专题（[[04_sources/source-ihchina-xiaohan-feature|source-ihchina-xiaohan-feature]]）："小寒三候为：'一候雁北乡，二候鹊始巢，三候雉始鸲'。古人认为大雁顺阴阳而迁移，此时阳气已动，大雁开始向北迁移；喜鹊开始筑巢；雉因感到阳气生长而鸣叫。"——第三候"鸲"为异文（见 exceptions）。

## AI 摘要 / 解释

- 三候构成一个"阳气已动于最深寒冬"的叙事：**雁（候鸟）启程北返 → 鹊（留鸟）开始营巢 → 雉（留鸟）感阳而鸣**。三候全部是鸟，与小雪三候（虹藏→气塞→闭塞成冬，见 [[03_notes/hist-yueling-xiaoxue-pentads|小雪三候]]）的"天地闭塞"叙事相反：小寒在闭极之冬里记录的是**最早的阳动信号**——这与冬至"一阳生"的古典阴阳框架相承（注文"二陽之候""至後二陽已得來年之節氣"）。
- "雉雊"注"雌雄之同鳴也，感于陽而後有聲"——古人把雉鸣释为对阳气生长的感应，这是**古典解释体系（Interpretation）**；现象层（小寒时节雉鸣）与解释层（感阳）应分层引用。
- 一候注"至立春後皆歸矣，禽鳥得氣之先故也"：雁北乡是"归程的预告"而非抵达，古典文本自己就把它与立春关联——七十二候的候与候之间存在跨节气的叙事连续性。

## 适用条件、例外与分歧

- **异文（待校勘）**："雉雊/雉始鸲"两系并存（直读古籍本 vs 两机构页）；"雊"有注音"音姤"佐证为原字。中华书局印本/《四库》本对校待人工。机构页串解不用于替代原文。
- 与《礼记·月令》《逸周书·时训》仲冬/季冬平行记载的比对（"雁北乡"在《月令》季冬条有平行文本）未做，七十二候体系定型过程见 [[02_shared/hist-solarterms-pentad-system|七十二候体系]]。
- 当代物候验证缺失：大雁北迁、喜鹊营巢、雉鸡鸣叫的开始期在中国各地的实际观测（中国物候观测网数据）完全未建卡——气候变化下"禽鸟得气之先"是否仍按时序是重要后续课题。

## 关联

[[01_terms/23_小寒|小寒索引]] · [[03_notes/hist-xiaohan-naming|小寒命名卡]] · [[02_shared/hist-solarterms-pentad-system|七十二候体系]] · [[02_topics/phenology|物候维度]]

## 待人工确认

- "雊/鸲"异文校勘（《四库》本与中华书局印本）；机构页"鸲"字来源追查。
- 《逸周书·时训》《礼记·月令》平行记载直读；现代鸟类物候观测对照。

## 修改记录

- 2026-09-16（建卡）：逐字直读建卡；发现并登记"雉雊/雉始鸲"机构页异文；非遗网与新华网两机构页为第二三直读发布方（引文层，异文如实并存）。
