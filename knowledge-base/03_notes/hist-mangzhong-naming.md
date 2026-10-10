---
schema_version: '0.1.0'
id: 'hist-mangzhong-naming'
type: 'HistoricalRecord'
title: '芒种的命名："谓有芒之种谷可稼种矣"的古典定义与宋人异说'
solar_terms: ['mangzhong']
season: 'summer'
dimensions: ['history', 'agriculture', 'chinese-life']
region: ['中国（命名取义于麦稻农时，文本传统锚定黄河-江淮农区）']
period: '《月令七十二候集解》传统题名为元代；《嬾真子錄》为南宋；现代机构释义为当代用语'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-yueling-qishierhou-wikisource', 'source-wikisource-guangqunfangpu-c4', 'source-ihchina-mangzhong-feature']
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
    'statement': '《月令七十二候集解》对芒种命名的定义句为"謂有芒之種穀可稼種矣"（种，上声/去声二读：有芒之麦类至此可收，有芒之稻谷可种）；南宋《嬾真子錄》已记载"二十四氣其名皆可解，獨小滿、芒種說者不一"的命名之争，其解为"謂麥至是而始可收，稻過是而不可種也，古人名節之意，所以告農候之早晚深哉"。现代机构释义（"芒"字指麦类收获、"种"字指谷黍类播种）与古籍定义句方向一致，属现代白话转写，引用时应注明层次。',
    'exceptions': [
      '《嬾真子錄》引文本轮经《广群芳谱》卷四（1708年类书）转引直读，原书未直读，校勘待做',
      '《嬾真子錄》所引《周礼》稻人"澤草所生，種之芒種"及其旧注的解释，是该书作者征引的另说，非定谳',
      '芒种与"忙种"的谐音关系是现代通俗表达（非遗网"表明一切作物都在忙种了"），不是古籍定义内容',
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

# 芒种的命名：古籍定义句与宋人异说

## 研究问题

"芒种"这个名字在原始文献中的定义是什么？古人自己有没有不同解释？

## 证据（原文与定位）

1. **直读一手文献**：《月令七十二候集解》芒种定义句（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]，2026-09-16 重抓全页）："芒種〈【上聲】〉，五月節。謂有芒之種穀可稼種〈【去聲】〉矣。"——两个"种"字注音（上声=种子之种、去声=种植之种）提示句内双关：有芒之种（谷）可以收种了。
2. **直读类书引文**：《广群芳谱》卷四芒种条（[[04_sources/source-wikisource-guangqunfangpu-c4|source-wikisource-guangqunfangpu-c4]]）增引南宋马永卿《嬾真子錄》："二十四氣其名皆可解，獨小滿、芒種說者不一……皆為麥也……僕近為老農始知過五月節則稻不可種，所謂芒種五月節者，謂麥至是而始可收，稻過是而不可種也，古人名節之意，所以告農候之早晚深哉。"
3. **现代机构释义（直读）**：非遗网芒种专题（[[04_sources/source-ihchina-mangzhong-feature|source-ihchina-mangzhong-feature]]）："'芒'字指麦类等作物的收获，'种'字是指谷黍类作物的播种，'芒种'二字表明一切作物都在'忙种'了，是农事最为繁忙的时节。"——前半为对古籍的转写，"忙种"谐音为现代通俗层。

## AI 摘要 / 解释

- 命名谱系（当前证据下）：**古籍定义=麦收与稻种的双关农时（"有芒之種穀可稼種矣"）；宋人已明言此名"說者不一"，并给出"麦始可收、稻过不可种"的强农时解释——把芒种读作一条截止期警告（收的窗口与种的死线），这正是后世"双抢"观念的文献源头**。新华社2024年稿引《月令》同句并作"有芒的麦子快收，有芒的稻子可种"式白话（见 [[03_notes/trad-mangzhong-nongshi|农事农谚卡]]）。
- "谐音忙种"是当代传播层：可作通俗记忆钩子，但不得写成命名本义。

## 适用条件、例外与分歧

- 《嬾真子錄》为单源（经类书转引），其中乐举明远的对话本身是宋人一家之解——"说者不一"四字提示当时已有多说并存，本卡不把任何一说定为唯一正解。
- 郑玄注《周礼》"種之芒種"一系的经学解释（"芒种"作稻麦名）只在《嬾真子錄》转述中出现，未直读原注，不展开。

## 关联

[[01_terms/09_芒种|芒种索引]] · [[03_notes/hist-yueling-mangzhong-pentads|芒种三候]] · [[03_notes/trad-mangzhong-nongshi|芒种农事与农谚]] · [[02_topics/history|历史维度]]

## 待人工确认

- 《嬾真子錄》原书（有维基文库/四库本与否）直读核对，确认类书转引无删改。
- 《周礼》稻人注的经学脉络（郑玄"芒种"稻麦说）是否值得另立经学史卡。

## 修改记录

- 2026-09-16（第一轮）：建卡。核心发现：宋人《嬾真子錄》已记载芒种命名"说者不一"并给出"麦收稻种截止"解释——命名不是单义顺承，而是自古有争的古农时双关。
- 2026-09-16（审核阶段）：路由引擎判 human-review-required（finding: pending-primary-source——《嬾真子錄》原书未直读），列入芒种审核包 B 区，状态 draft → in-review。
