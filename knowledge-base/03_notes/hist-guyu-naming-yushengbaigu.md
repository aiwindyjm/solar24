---
schema_version: '0.1.0'
id: 'hist-guyu-naming-yushengbaigu'
type: 'HistoricalRecord'
title: '谷雨的命名："雨其穀于水"的古典定义与"雨生百谷"的现代概括'
solar_terms: ['guyu']
season: 'spring'
dimensions: ['history', 'agriculture', 'chinese-life']
region: ['中国（命名取义于农事与降水，文本传统锚定黄河流域农区）']
period: '《月令七十二候集解》传统题名为元代；"雨生百谷"四字为现代机构/媒体用语'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  ['source-yueling-qishierhou-wikisource', 'source-ihchina-guyu-feature', 'source-xinhua-guyu-2022']
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
    'statement': '《月令七十二候集解》以降水—播种关系定义谷雨命名："自雨水後，土膏脉動，今又雨其穀于水也……蓋穀以此時播種自上而下也"（雨读去声，义为"降下"）；经本轮全书检索，"雨生百穀"四字并不出现在《月令七十二候集解》文本中——它是现代机构与媒体的概括用语（非遗网专题标题"雨生百谷"、新华社稿将谷雨释为降水类节气并引"雨生百谷"之说），不是古籍原文。命名取义于农事与降水，与仓颉传说无文献关联（传说层另卡处理）。',
    'exceptions': [
      '"雨生百谷"作为现代概括的确切首出文献（如《群芳谱》等明清农书是否已有近似表述）本轮未检索完成，不排除更早出处',
      '《月令》"雨其穀于水"一句诸本或有异文（"于水/于地"），引用需注明版本',
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

# 谷雨的命名：古籍定义句 vs 现代四字概括

## 研究问题

"谷雨"这个名字在原始文献中的定义是什么？"雨生百谷"四字是古籍原文吗？

## 证据（原文与定位）

1. **直读一手文献**：《月令七十二候集解》谷雨定义句（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]，2026-09-16 重抓全页）："穀雨〈【去聲】〉，三月中。自雨水後，土膏脉動，今又雨其穀于水也。雨讀作去聲，如'雨我公田'之雨，蓋穀以此時播種自上而下也。"——命名逻辑：雨水之后土壤解冻回润（土膏脉动），此时"降下谷种"（雨作动词），播种自上而下。
2. **全书检索**：对维基文库《月令七十二候集解》全文检索"雨生百穀/雨生百谷"均为0次；全书唯一"百穀"出现在小满"麥秋至"注（"秋者，百穀成熟之期"），与谷雨无关。
3. **现代用语的直读样本**：非遗网谷雨专题页标题即"雨生百谷——二十四节气之谷雨"，正文作"古人说'雨生百谷'"（[[04_sources/source-ihchina-guyu-feature|source-ihchina-guyu-feature]]）；新华社2022年稿："'谷雨'，寓意'雨生百谷'……都是代表降水状况的节气，也是农耕文化在节令上的反映"（[[04_sources/source-xinhua-guyu-2022|source-xinhua-guyu-2022]]）。

## AI 摘要 / 解释

- 命名谱系（当前证据下）：**古籍定义=农事降水取义（"雨其穀于水"，播种时节）；"雨生百谷"=现代四字概括，语义方向一致但非古籍原文**。产品文案若引用"雨生百谷"，应标"今概括/民间说法"，不应冠以《月令》书名。
- 本卡是仓颉传说卡（[[03_notes/legend-guyu-cangjie|谷雨祭仓颉传说]]）的反面锚点：命名的文献根据在农事，不在造字传说。任何"谷雨因仓颉得名"式因果断言与本卡证据冲突，一律不得采用。

## 适用条件、例外与分歧

- "雨生百谷"更早的文本出处（明清农书、类书）未查：若人工核得（如《月令七十二候集解》之外的文献），本卡的"现代概括"定位需相应改写为"后世俗概括"。
- 《月令》各本"雨其穀于水"异文待校勘（见 [[03_notes/hist-yueling-guyu-pentads|三候卡]] 的版本说明）。

## 关联

[[01_terms/06_谷雨|谷雨索引]] · [[03_notes/hist-yueling-guyu-pentads|谷雨三候]] · [[03_notes/legend-guyu-cangjie|谷雨祭仓颉传说（legend 层）]] · [[03_notes/fact-guyu-un-chinese-language-day|联合国中文日]] · [[02_topics/history|历史维度]]

## 待人工确认

- "雨生百谷"四字的文献学溯源（《群芳谱》《月令广义》等是否出现）；建议人工查四库/方志数据库。

## 修改记录

- 2026-09-16（第一轮）：建卡。核心发现："雨生百谷"非《月令七十二候集解》原文（全书0次），系现代概括——立卡存证，供文案引用规范使用。
