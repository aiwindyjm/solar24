---
schema_version: '0.1.0'
id: 'hist-xiaohan-naming'
type: 'HistoricalRecord'
title: '小寒的命名："月初寒尚小"——古人对寒冷进程的阶段划分，而非温度排序'
solar_terms: ['xiaohan']
season: 'winter'
dimensions: ['history', 'scientific-interpretation']
region: ['中国（古典文献传统）']
period: '《月令七十二候集解》题名元代；《孝经纬》《诗含神雾》为汉代纬书（佚文经清《广群芳谱》卷006转引）'
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
    'source-wikisource-guangqunfangpu-c006',
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
    'statement': '小寒之"小"的古典命名逻辑是**以农历月内进程为尺度的阶段划分**："月初寒尚小，故云。月半則大矣"（《月令七十二候集解》）——同一农历月（十二月）内，月初之寒称小寒、月半之寒称大寒。纬书给出同构解释：《孝经纬》"冬至後十五日斗指癸為小寒……今日初寒尚小也"、《诗含神雾》"小寒為節者亦形於大寒故謂之小，言時寒氣猶未極也"（均经《广群芳谱》卷006转引）。"小/大"命名说的是寒的进程次序，**不是实测温度的大小排序**——这为"小寒常比大寒冷"的气象事实（另卡）留下命名与实测的反差空间。',
    'exceptions': [
      '《孝经纬》《诗含神雾》为纬书佚文，本轮经清代类书《广群芳谱》卷006转引直读，原书已佚、无法直接核读，引用须注明转引层级',
      '《月令》句维基文库本作"故云。月半則大矣"（句号），非遗网/中国天气网引作"故云，月半则大矣"（逗号）——标点微异、文字一致',
      '命名逻辑（进程阶段）与实测气候（小寒更冷）是两个层面，本卡只建立前者；后者见 sci 卡',
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

# 小寒的命名：月初寒尚小

## 研究问题

小寒为什么叫"小"？古人以"小/大"命名一对相邻节气时用什么尺度？

## 证据（原文与定位）

1. **已直接读取**：《月令七十二候集解》小寒条（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]，本代理重抓）："小寒，十二月節。月初寒尚小，故云。月半則大矣。"同书大寒条："大寒，十二月中。解見前。"——小寒/大寒被显式定义为同一个农历月的"節"与"中"（月初/月中），与立春"正月節"、雨水"正月中"的结构相同。
2. **已直接读取（类书转引）**：《御定佩文斋广群芳谱》卷006 十二月汇编（[[04_sources/source-wikisource-guangqunfangpu-c006|source-wikisource-guangqunfangpu-c006]]）：
   > "小寒原─孝經緯─冬至後十五日斗指癸為小寒陽極隂生乃為寒今日初寒尚小也"
   > "─詩含神霧─小寒為節者亦形於大寒故謂之小言時寒氣猶未極也"
   > "─大寒─増─孝經緯─小寒後十五日斗指丑為大寒至此栗烈極也"
3. **已直接读取**：新华网2023稿的现代归纳（[[04_sources/source-xinhua-xiaohan-2023|source-xinhua-xiaohan-2023]]）："冷气积久而寒，小寒意指寒气尚未达到顶点，虽冷，却还未冷到极致。"与古籍口径同向。

## AI 摘要 / 解释

- **命名的尺度是月内进程，不是温度计**：《月令》把小寒与大寒放在"十二月"这一个农历月里对举（月初/月半），"小/大"标记的是**寒冷进程的前后阶段**；《诗含神雾》"亦形於大寒故謂之小"说得最直白——"小"是相对"大"的形况词，"言時寒氣猶未極也"。
- 与"小暑/大暑"（[[03_notes/hist-xiaoshu-furi-origins|小暑命名谱系]]，同构的"小/大"对）呼应：二十四节气里有四对"小/大"相邻对举（小暑大暑、小雪大雪、小寒大寒；小满芒种非对举），小寒大寒是其中唯一在气象实测上"名实倒挂"的一对（多数省份小寒更冷，见 [[03_notes/sci-xiaohan-vs-dahan-temperature|气温对照卡]]）。
- 《孝经纬》"冬至後十五日斗指癸為小寒"提供了斗柄指向（斗指癸）与距冬至天数（十五日）的古典定位法——与黄经285°（冬至270°+15°）数值相合（斗指/黄经两套定位语言的对应关系属解释层，本卡不展开）。

## 适用条件、例外与分歧

- 纬书佚文转引层级是本卡主要弱点：若《广群芳谱》所引与《孝经纬》辑本（如《古微书》）有出入，以辑本校勘为准——待人工。
- "陽極隂生乃為寒"的阴阳宇宙论是古典解释体系，分层引用，不进命题层。
- 命名之"小"不蕴含"温度较低"：本卡显式区分命名语义与气候实测，防止把"小寒=不太冷"倒灌进现代科普表述。

## 关联

[[01_terms/23_小寒|小寒索引]] · [[03_notes/hist-yueling-xiaohan-pentads|小寒三候]] · [[03_notes/sci-xiaohan-vs-dahan-temperature|小寒与大寒谁更冷（实测层）]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_topics/history|历史维度]]

## 待人工确认

- 《孝经纬》《诗含神雾》佚文对辑本（《古微书》《纬书集成》）校勘。
- "小/大"四对节气的命名通则是否值得上升为共享卡（待多节气波次汇总，不在本卡内定论）。

## 修改记录

- 2026-09-16（建卡）：月令直读+广群芳谱转引双源；确立"进程阶段命名 vs 温度排序"的辨析框架，与气温实测卡互链分层。
