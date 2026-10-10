---
schema_version: '0.1.0'
id: 'trad-dongzhi-shijiu-xiaohantu'
type: 'Tradition'
title: '数九与九九消寒图：从冬至日起算的九九八十一天'
solar_terms: ['dongzhi']
season: 'winter'
dimensions: ['customs', 'chinese-life', 'climate']
region: ['中国（数九与消寒图可确证实践为明末北京；数九歌版本"南北各异"——非遗网；当代为跨地域通行习俗——新华社口径）']
period: '可确证文献：明末《帝京景物略》（1635）；数九习俗的更早起源（南北朝说）本轮未获直读'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  ['source-wikisource-dijing-jingwulue', 'source-xinhua-dongzhi-2021', 'source-ihchina-dongzhi-feature']
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
    'statement': '数九是从冬至日起算的寒程计时习俗：每9天为一个"九"，九九共81天（新华社2021："我国民间素有冬至数九的习俗，即从冬至日起，每9天为一个九……总计81天"）。明末《帝京景物略》直读确证北京实践："日冬至，畫素梅一枝，為瓣八十有一，日染一瓣，瓣盡而九九出，則春深矣，曰『九九消寒圖』"，且当时已有刻版售卖的圈九丛九圈消寒图并"附以九九之歌"——所录明版数九歌（"一九二九，相喚不出手；三九二十七，籬頭吹觱篥……"）与今通行版（"一九二九不出手……九九加一九，耕牛遍地走"，非遗网）用词有别，证明数九歌是多版本流变的歌谣。',
    'exceptions': [
      '常被引用的《荆楚岁时记》"俗用冬至日数及九九八十一日，为寒尽"——本轮直读维基文库《荆楚岁时记》全文，未见此句（九九/数九零命中），该归引待考（可能为佚文或后世辑本），在获得直读前不得写成"数九见于荆楚岁时记"',
      '"连冬起九"等清代说法（《清嘉录》）本轮无直读源（维基文库无此书）',
      '非遗网另录"庭前垂柳珍重待春風"九字描红消寒图，该具体形式未见于《帝京景物略》直读文本（书中为素梅与圈九丛两式），按机构汇编层对待',
      '数九的农事功能（江苏农事版数九歌："一九二九，背起粪篓……九九八十一，犁耙一起出"，非遗网）与预测功能（冬至日占验农谚群见农谚卡）为并行传统',
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

# 数九与九九消寒图

## 研究问题

"冬至交节即数九"的规则与消寒图实践，各有多硬的文献？"数九源自《荆楚岁时记》"的说法可信吗？

## 证据
- **补证（2026-09-25，R46）**：《燕京岁时记》冬至条直读另录**圈格版**消寒图——「消寒圖乃九格八十一圈。自冬至起，日塗一圈，上陰下晴，左風右雨，雪當中」，与本书所引染梅版并存，且作者自注「此事予兒時曾為之」。
（按证据等级排列）

1. **直读一手文献**：《帝京景物略》卷二（[[04_sources/source-wikisource-dijing-jingwulue|source-wikisource-dijing-jingwulue]]，明末北京）：素梅染瓣消寒图（冬至日起日染一瓣、八十一瓣尽而九九出）+刻版圈字消寒图+"九九之歌"全文（明版）。
2. **直读机构源**：新华社2021稿（[[04_sources/source-xinhua-dongzhi-2021|source-xinhua-dongzhi-2021]]，紫金山天文台专家受访）："我国民间素有冬至数九的习俗，即从冬至日起，每9天为一个'九'……总计81天。""民间流传的各种版本的数九歌都是在长期生产、生活实践中总结出来的。"
3. **直读机构汇编**：非遗网冬至专题（[[04_sources/source-ihchina-dongzhi-feature|source-ihchina-dongzhi-feature]]）："流传最广的冬至歌谣就是数九歌，虽然版本颇多、南北各异，但大意是相同的"（录通行版全首）+江苏农事版全首+"庭前垂柳珍重待春風"描红式。
4. **直读负面证据**：维基文库《荆楚岁时记》（[[04_sources/source-wikisource-jingchu-suishiji|source-wikisource-jingchu-suishiji]]）全文检索"九九/数九"零命中——常被归引的"俗用冬至日数及九九八十一日，为寒尽"**不在该直读文本中**。

## AI 摘要 / 解释

- **计时结构**：数九是"把最冷时段拆成九个九天"的倒计时系统：从冬至（白昼最短但非最冷，见 [[03_notes/sci-dongzhi-shortest-day-year-anchor|回归年锚卡]]）起数，"三九四九"（1月中旬前后，与"1月最冷"经验吻合）约在中间偏后，"九九"出则春耕（通行版末句"耕牛遍地走"、江苏版末句"犁耙一起出"）。它是冬至天文点向农业周期翻译的民俗计时器。
- **消寒图**是把数九可视化为一笔一画的日常仪式（染梅瓣/描圈/描红），明末已有商品化刻版——"刻而市之"。
- **冬夏对偶**：数九自冬至起算，与三伏自夏至数庚（[[03_notes/sci-xiaoshu-sanfu-gengday-mechanism|小暑三伏庚日机制卡]]）构成传统时间体系里冬夏两极的倒计时对偶（一者数日、一者数干支，机制不同，不混写）。

## 适用条件、例外与分歧

- 数九歌文本存在显著的版本流变（明版 vs 通行版 vs 江苏版），引用任何一版都须注明版本；"南北各异"为非遗网概括，逐地分布未核。
- 数九起源断代：可确证实践为明末北京；南北朝起源说（《荆楚岁时记》归引）本轮**直读否定**（不在文本中），敦煌文献中的数九材料未查——起源问题保持开放（Needs Research）。

## 关联

[[01_terms/22_冬至|冬至索引]] · [[03_notes/hist-dongzhi-hedong-jiaotian|贺冬与郊天]] · [[03_notes/trad-dongzhi-nongshi|冬至农事农谚]] · [[03_notes/sci-dongzhi-shortest-day-year-anchor|白昼最短与回归年锚]] · [[03_notes/sci-xiaoshu-sanfu-gengday-mechanism|三伏庚日机制（冬夏对偶）]] · [[02_topics/customs|民俗维度]]

## 待人工确认

- 《荆楚岁时记》"数九"佚文的辑本出处（守山阁丛书本/《说郛》本）；敦煌"九九歌"写本研究文献。
- 《清嘉录》"连冬起九"条直读（无维基文库页，需其他录文源）。
- "庭前垂柳珍重待春風"描红消寒图的文献首出。

## 修改记录

- 2026-09-16（建卡）：以《帝京景物略》直读+新华社机构直读双源建卡；荆楚归引经直读查证不成立，作为负面证据写入（本节气防幻觉发现之一）。
- 2026-09-25（R46）：补燕京岁时记圈格版消寒图直读证据（双版本并存）。
