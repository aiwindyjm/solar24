---
schema_version: '0.1.0'
id: 'trad-xiaohan-sanjiu'
type: 'Tradition'
title: '"小寒时处二三九"：数九体系与小寒的时段关系（数九锚定冬至，非小寒）'
solar_terms: ['xiaohan', 'dongzhi']
season: 'winter'
dimensions: ['customs', 'chinese-life', 'climate']
region: ['中国（谚语流传地域逐条未标明；数九为通行华北及多数北方地区的冬季计日传统，机构汇编口径）']
period: '《燕京岁时记》成书于清末（1906年前后）；当代谚语为机构汇编层'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  [
    'source-wikisource-yanjingsuishiji',
    'source-ihchina-xiaohan-feature',
    'source-xinhua-xiaohan-2023',
    'source-weathercn-xiaohan-2025',
    'source-people-xiaohan-dahan-2026',
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
    'statement': '"数九"是自冬至日起按九天为一单元累计的冬季计日体系，其日期锚是冬至而非小寒；小寒节气通常落在"二九"后半至"三九/四九"（谚云"小寒时处二三九"），故"冷在三九""三九四九冰上走"的最冷时段与小寒在时段上高度重叠——这是"小寒最冷"经验与三九民俗互为表里的结构。《燕京岁时记》"打冰"条（清末北京）已将三九与冰事并记："冬至三九則冰堅，於夜內鑿之，聲如鏨石，曰打冰。三九以後，冰雖堅不能用矣。"',
    'exceptions': [
      '"数九从冬至日起算"的规则表述本轮来自机构汇编与谚语内证（"冬至三九"），数九体系的首出文献（如《荆楚岁时记》前后文献源流）未直读，断代存疑待考',
      '各地"九九歌"词句版本繁多（"三九四九冰上走"仅为通行版本之一），流传地域逐条未标明',
      '谚语属传统层（tradition），"三九最冷"的气象学验证在 [[03_notes/sci-xiaohan-vs-dahan-temperature|气温对照卡]]（30年统计的小寒最低）有部分印证但不逐旬对齐——两卡不互相替代',
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

# 三九、数九与小寒

## 研究问题

"冷在三九"的"三九"是什么？它与小寒是什么关系？

## 证据（按证据等级排列）

1. **直读一手文献**：《燕京岁时记》"打冰"条（[[04_sources/source-wikisource-yanjingsuishiji|source-wikisource-yanjingsuishiji]]，本代理本轮重抓，清末北京）："冬至三九則冰堅，於夜內鑿之，聲如鏨石，曰打冰。三九以後，冰雖堅不能用矣。"——同条又按《事物原会》追记周代凌人藏冰之制（"歲十二月，敕令斬冰納於淩陰"），是冰事与季节计日的文献链。
2. **直读机构汇编**：新华网2023稿（[[04_sources/source-xinhua-xiaohan-2023|source-xinhua-xiaohan-2023]]）："'小寒时处二三九，天寒地冻冷到抖'"。人民日报2026稿（[[04_sources/source-people-xiaohan-dahan-2026|source-people-xiaohan-dahan-2026]]）：小寒在"'三九'前后到来"、谚"三九四九冻破石头""冷在三九"。
3. **直读机构汇编**：中国天气网盘点（[[04_sources/source-weathercn-xiaohan-2025|source-weathercn-xiaohan-2025]]）："此时北方正值'三九'严寒时节，河面冻得十分厚实"；九九歌句"三九四九冰上走"；谚"小寒三九天，把好防冻关"。
4. **直读机构汇编**：非遗网小寒专题（[[04_sources/source-ihchina-xiaohan-feature|source-ihchina-xiaohan-feature]]）农谚组："牛喂三九，马喂三伏""大雪年年有，不在三九在四九""三九不封河，来年雹子多"。
5. 数九起点=冬至的完整古籍原文（九九消寒图"冬至日畫素梅一枝……瓣盡而九九畢"）见 [[03_notes/hist-xiaohan-xiaohantu|九九消寒图卡]]（《帝京景物略》经《广群芳谱》转引直读）。

## AI 摘要 / 解释

- **两套计时的叠加**：节气（太阳黄经15°一格）与数九（冬至起9×9天）是两套并行体系；数九锚冬至，小寒通常落二九末至三九/四九——"小寒时处二三九"是对两者相对位置的民间概括。因每年冬至公历日期稳定（12月21-23日前后），三九（约1月上中旬）与小寒（1月5-19日）的叠加年复一年成立。
- **"冷在三九"的民俗地理与30年统计的呼应**：数九民俗把最冷定位在三九四九，气象统计把全国平均最低定位在小寒节气（[[03_notes/sci-xiaohan-vs-dahan-temperature|气温卡]]）——两套独立表述指向同一时段，是"民俗经验×现代数据"在本节气最漂亮的互证；但粒度不同（九天单元 vs 十五天节气时段），不写成同一命题。
- **"牛喂三九，马喂三伏"**：三九与三伏对偶出现于同一农谚——最冷与最热两极的牲畜饲养提示，是数九/数伏双体系嵌入农事知识的样本（三伏机制属小暑/大暑波次课题，本轮未跨卡引证）。

## 适用条件、例外与分歧

- 数九体系起源（"冬至后数九"首见何书）未确证：本轮只有清末《燕京岁时记》与机构转述，凡"数九始于某代"式断言一律不写。
- 九九歌词句的地域版本差异未逐条登记（"冰上走"版本通行北方）；"三九四九冻破石头"（人民日报）与"三九四九冰上走"（中国天气网）已并存登记。

## 关联

[[01_terms/23_小寒|小寒索引]] · [[01_terms/22_冬至|冬至索引（数九锚点）]] · [[03_notes/hist-xiaohan-xiaohantu|九九消寒图]] · [[03_notes/sci-xiaohan-vs-dahan-temperature|小寒与大寒谁更冷]] · [[02_topics/customs|民俗维度]]

## 待人工确认

- 数九体系首出文献直读（《帝京景物略》原书全条、更早的九九歌文本）；九九歌主要地域版本谱系。
- 小寒各年落在二九/三九/四九的逐年核算（可与逐年交节时刻表一并做）。

## 修改记录

- 2026-09-16（建卡）：燕京岁时记打冰条直读（"冬至三九則冰堅"）+四机构谚语层；显式记"数九锚冬至非小寒"，与消寒图卡、气温卡三方互链。

- 2026-09-16（审核阶段）：路由 human-review-required（pending-primary-source：数九首出文献未直读），status draft → in-review。AI 不做最终审核，等待人工 Decision。
