---
schema_version: '0.1.0'
id: 'hist-xiaoshu-liuyueliu-sunning'
type: 'HistoricalRecord'
title: '六月六晾晒：《燕京岁时记》"抖晾衣服书籍"与"晒伏"之名的文献差距'
solar_terms: ['xiaoshu']
season: 'summer'
dimensions: ['customs', 'history', 'chinese-life']
region: ['文献确证限清末北京（京师）；"晒伏"之名与各地实践的分布未核验']
period: '可确证记载：清末（《燕京岁时记》，清光绪年间成书）；同日他俗（洗象/晾经）亦清末北京记闻'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
contested: false
source_ids:
  [
    'source-wikisource-yanjingsuishiji',
    'source-ihchina-xuzhou-fuyang',
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
risk_level: 'medium'
impact_level: 'term'
claim:
  {
    'statement': '清末北京有农历六月六日晾晒衣物书籍的习俗，直接文献为《燕京岁时记》"六月六"条："京师于六月六日抖晾衣服书籍，谓可不生虫蠹"；同日北京另有洗象（"每岁六月六日牵往宣武门外河内浴之"）与戒台寺晾经会（"惟六月六日有晾经会，纵人游观"）两俗。"晒伏""晒衣节"等现代通名不见于该书所读条目，其得名（晾晒逢伏天）与全国分布为现代流行说法，文献链待建。',
    'exceptions': [
      '"六月六"是农历日期，小暑是节气（公历7月6-8日交节），两者逐年相对位置变动、并不绑定；本卡只因六月六通常落在小暑前后时段而系于小暑，引用时须写明农历日期属性',
      '"晒伏"名称及"六月六晒伏各地皆有"类分布断言无直读文献，未入命题',
      '徐州伏羊页所记"六月六，接姑姑，新麦馍馍熬羊肉"为六月六的另一地方形态（苏北），见 [[03_notes/region-xiaoshu-xuzhou-fuyang|徐州伏羊卡]]',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 六月六晾晒（古典文献记载）

## 研究问题

"六月六晒伏"的最早可靠文献是什么？古代记载与 modern 通名有多大差距？

## 证据（原文与定位）

1. **直读一手文献**：《燕京岁时记》"六月六"条（[[04_sources/source-wikisource-yanjingsuishiji|source-wikisource-yanjingsuishiji]]，清末北京，本轮重读六月部分）：
   > "京师于六月六日抖晾衣服书籍，谓可不生虫蠹。"
   同书相邻条目：洗象（"象房有象时，每岁六月六日牵往宣武门外河内浴之，观者如堵"）；戒台（"盖戒台无定期，惟六月六日有晾经会，纵人游观，而游者卒鲜"）。
2. **直读机构页**：非遗网徐州伏羊项目页（[[04_sources/source-ihchina-xuzhou-fuyang|source-ihchina-xuzhou-fuyang]]）载徐州六月六习俗："六月六，接娘肉（接出嫁的女儿回门）""六月六，接姑姑，新麦馍馍熬羊肉"（据历代地方志转述）。

## AI 摘要 / 解释

- 谱系结论（当前证据下）：**六月六晾晒的直接文献止于清末北京，且原词是"抖晾"而非"晒伏"**；同日并存的还有洗象、晾经会两个北京特定习俗（洗象随象房废止而消失，属历史记忆）。"晒伏"作为名称是现代通行说法，与"六月六晒衣不生虫"的地域分布（南北方差异、寺庙晒经传统）需方志与民国文献补链。
- 六月六的日期逻辑是**农历重日节俗**（与二月二、七月七同型），不是节气历法日；它通常落在小暑到大暑之间的公历7月，这是它被归入小暑时段的原因，也是必须写明"非节气绑定"的原因。

## 适用条件、例外与分歧

- 无跨来源直接冲突；流行名（晒伏/晒衣节/天贶节——"天贶节"之说本轮未直读，不写入）与文献证据的差距是本卡核心记录点。
- 《帝京岁时纪胜》六月条：维基文库 API 检索无此书（夏至波次已确认无书），待点校本人工核读——若其六月六条有"晒"俗记载可再前推记录层。

## 关联

[[01_terms/11_小暑|小暑索引]] · [[03_notes/region-xiaoshu-xuzhou-fuyang|徐州伏羊食俗]] · [[03_notes/sci-xiaoshu-sanfu-gengday-mechanism|三伏机制]] · [[02_topics/customs|民俗维度]]

## 待人工确认

- 《帝京岁时纪胜》《清嘉录》六月条点校本；"晒伏"一词的词源与近现代流变；六月六习俗的南方形态（"六月六晒红绿"类谚语的方志出处）。

## 修改记录

- 2026-09-16（建卡）：重读《燕京岁时记》六月部分直读建卡；"抖晾/晒伏"用词差距与"农历日期非节气"两点作为分层警示写入；status=draft。
