---
schema_version: '0.1.0'
id: 'hist-xiaoshu-furi-origins'
type: 'HistoricalRecord'
title: '伏日的历史起源：《史记》"秦德公二年初伏"与"庚金伏藏"解释传统'
solar_terms: ['xiaoshu']
season: 'summer'
dimensions: ['history', 'calendar', 'chinese-life']
region: ['中国（起源记事锚定秦地雍城；解释传统为汉代以降文献所承）']
period: '起源记事为春秋秦德公二年（前676年）；所引注释与考订为汉至宋代'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
contested: false
source_ids:
  [
    'source-gujintushu-suigong-furi',
    'source-xinhua-sanfu-2024',
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
    'statement': '据《史记·秦本纪》"德公二年初伏，以狗禦蠱"及历代注疏（本轮经清代类书《古今图书集成·岁功典》伏日部直读）：伏日祭祀起于秦德公二年（前676年），汉晋注家认为"周时无伏，秦始作之"；"伏"的传统释名有二——"隐伏避盛暑"（《史记正义》）与"金气伏藏"（《历忌释》：立秋以金代火、金畏火，故至庚日必伏，庚者金也）；"夏至后第三庚为初伏"的推算法在类书所引《阴阳书》《事物纪原》中已经定型，与现代科普口径一致。',
    'exceptions': [
      '本卡引文均系《古今图书集成》转引，《史记》及各注疏原典点校本未逐字核对',
      '"庚金伏藏"是五行历忌解释体系（古典 Interpretation），不是三伏推算的机制原因——推算只依赖干支纪日，见 [[03_notes/sci-xiaoshu-sanfu-gengday-mechanism|机制卡]]',
      '秦德公二年对应公历前676年的系年从通行年表，本轮未独立核验',
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

# 伏日起源与"庚金伏藏"解释传统

## 研究问题

三伏作为时段标记从何而来？古人如何解释"伏"字与"庚日"？

## 证据（原文与定位，均直读自《古今图书集成·岁功典》第056卷伏日部，[[04_sources/source-gujintushu-suigong-furi|source-gujintushu-suigong-furi]]）

> 《史記》秦本紀："德公二年初伏，以狗禦蠱。"注：孟康曰："六月伏日初也。"周時無，至此乃有之。《正義》曰："六月三伏之節，起秦德公為之，故云初伏。伏者，隱伏，避盛暑也。"
> 《曆忌釋》云："伏者何？以金氣伏藏之日也。四時代謝，皆以相生。……立秋以金代火，故至庚日必伏。庚者金，故曰伏也。"
> 《封禪書》："（秦德公）作伏祠磔狗邑四門，以禦蠱菑。"《索隱》引服虔："周時無伏，秦始作之。"
> 《緗素雜記》伏日考引顏師古曰："伏者，謂陰氣將起，迫於殘陽而未得升，故為藏伏，因名伏日也。"又按《陰陽書》曰："夏至後第三庚為初伏，第四庚為中伏，立秋後初庚，為末伏。"
> 《事物紀原》三伏："《史記》云：'周時不書伏。'三伏之名，始於秦德公時。"

## AI 摘要 / 解释

- 谱系（当前证据下）：**伏日起源记事最早见于《史记》秦本纪/封禅书（秦德公二年，作伏祠、磔狗邑四门以御蛊灾）**；汉代注家（孟康、服虔）强调"周时无伏"；"三伏"完整推算法在类书所引《阴阳书》（唐前历书）中已定型。
- "伏"的两种古典释名并行：①避暑行为说（"隐伏避盛暑"）；②五行气化说（"金气伏藏"：立秋以金代火，金畏火，故庚日必伏）。后者解释了**为什么选庚日**——这是古典解释体系的自洽叙事，与干支计日的实际机制要分层引用。
- 唐宋以降伏日已成民俗节候：《事物纪原》引《梦华录》"唐時都人最重三伏……風亭水榭，雪檻冰盤，浮瓜沉李……"；清代方志群记伏日造酱、洗六畜、汤饼（江陵"辟惡餅"）、避暑饮等。

## 适用条件、例外与分歧

- 无跨来源直接冲突；"磔狗御蛊"的巫术内容按历史观念记录。
- 《史记》原典逐字校勘待做；秦德公二年=前676年的系年换算待核。
- 方志民俗条目为清代类书汇编，具体县府的年代学（方志版本）未核。

## 关联

[[01_terms/11_小暑|小暑索引]] · [[03_notes/sci-xiaoshu-sanfu-gengday-mechanism|三伏机制卡]] · [[03_notes/region-xiaoshu-xuzhou-fuyang|徐州伏羊食俗]] · [[02_topics/history|历史维度]]

## 待人工确认

- 《史记》中华书局点校本逐字核对（"以狗禦蠱"）；《阴阳书》《历忌释》辑本溯源；秦德公二年系年。

## 修改记录

- 2026-09-16（建卡）：与机制卡分层（本卡只载历史起源与古典解释，不复述现代机制命题）；status=draft（历史归属类 finding 建议人工复核，见审核分节）。
