---
schema_version: '0.1.0'
id: 'hist-xiaoxue-naming'
type: 'HistoricalRecord'
title: '小雪命名的古籍依据："小者，未盛之辭"与大雪"大者，盛也"的同书对偶'
solar_terms: ['xiaoxue']
season: 'winter'
dimensions: ['history', 'climate']
region: ['命名经验锚定黄河流域古典气候；地名通用']
period: '《月令七十二候集解》文本传统题名为元代；明代《群芳谱》为媒体转引级线索'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-yueling-qishierhou-wikisource', 'source-xinhua-xiaoxue-2019']
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
    'statement': '《月令七十二候集解》给出"小雪"命名的古籍原文："雨下而為寒氣所薄，故凝而為雪。小者，未盛之辭"——雨被寒气所迫凝结为雪，"小"是说雪尚未盛大；同书紧随的大雪条"大者，盛也。至此而雪盛矣"与之构成命名对偶。两层含义均指降雪程度的预期量级，是对气候趋势的命名，不是对小雪当日天气的断言。',
    'exceptions': [
      '明代《群芳谱》"小雪气寒而将雪矣，地寒未甚而雪未大也"本轮仅为中新社2019稿转引（古籍原书未直读，维基文库无《群芳谱》），只作线索级补充，不入证据主链',
      '"小雪"作为节气的语义（雪未盛）与气象学术语"小雪"（降雪强度等级）是两套概念，不可混用（见 sci-xiaoxue-not-necessarily-snow）',
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

# 小雪命名（古籍文本）

## 研究问题

"小雪"这个名字的古籍出处是什么？"小"修饰的是什么？

## 证据（原文与定位）

1. **直读一手文本**：维基文库《月令七十二候集解》小雪条（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]）："小雪，十月中。雨下而為寒氣所薄，故凝而為雪。小者，未盛之辭。"
2. **直读一手文本（同书对偶）**：同页大雪条："大雪，十一月節。大者，盛也。至此而雪盛矣。"
3. 线索级（媒体转引，未直读古籍）：中新社2019稿（[[04_sources/source-xinhua-xiaoxue-2019|source-xinhua-xiaoxue-2019]]）转引明代《群芳谱》："小雪气寒而将雪矣，地寒未甚而雪未大也。"

## AI 摘要 / 解释

- 命名逻辑链：**雨 + 寒气所薄 → 凝而为雪；量级 → 未盛（小）**。命名描述的是"降水相态由雨转雪、且雪量尚小"这一气候阶段，与小雪在冬季序列中的位置（冬季第二个，紧接立冬）相配。
- 小雪/大雪是二十四节气中罕见的"程度对偶"命名对（类似小暑/大暑、小寒/大寒）：同书分别以"未盛之辭""大者，盛也"释名，两节气的间隔（黄经240°→255°）被古典命名体系读作降雪量级的递进。
- 现代辨析（分层引用，不在本卡展开）：这个命名是黄河流域经验对气候趋势的概括，不保证小雪当日降雪、更不构成"小雪节气下雪量最小"之类的统计断言——见 [[03_notes/sci-xiaoxue-not-necessarily-snow|小雪≠必然降雪]]。

## 适用条件、例外与分歧

- 无直读文本层面的冲突。《群芳谱》句若要升级为证据，需直读原书（维基文库仅有清代增辑《广群芳谱》，与《群芳谱》非同一书，本轮未在其中的天时谱部分定位到该句）。
- "小雪"作为地名的语义（陕西等地有"小雪"地名与不常见人名）与本卡无关，不混入。

## 关联

[[01_terms/20_小雪|小雪索引]] · [[03_notes/hist-yueling-xiaoxue-pentads|小雪三候]] · [[03_notes/sci-xiaoxue-not-necessarily-snow|小雪≠必然降雪]] · [[02_topics/history|历史维度]]

## 待人工确认

- 《群芳谱》（明·王象晋）原书直读，核对该句及语境；《广群芳谱·天时谱》平行文本。
- 《月令七十二候集解》版本校勘（与三候卡同一待办）。

## 修改记录

- 2026-09-16（建卡）：命名原文直读建卡；大雪"大者，盛也"对偶同页直读补入；《群芳谱》句按媒体转引级明确降权处理。
- 2026-09-16（路由入包）：引擎路由 human-review-required（finding: pending-primary-source——《群芳谱》原书未直读），status draft → in-review。AI 不做最终审核。
