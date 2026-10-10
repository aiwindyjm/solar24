---
schema_version: '0.1.0'
id: 'hist-yueling-mangzhong-pentads'
type: 'HistoricalRecord'
title: '《月令七十二候集解》芒种三候：螳螂生、鵙始鸣、反舌无声'
solar_terms: ['mangzhong']
season: 'summer'
dimensions: ['phenology', 'history', 'ecology']
region: ['文本经验锚定中国（黄河流域为核心的古典物候传统）；实际物候因纬度海拔而异']
period: '文本传统题名为元代（吴澄）；所承物候体系更早（《礼记·月令》《吕氏春秋》等）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-yueling-qishierhou-wikisource', 'source-ihchina-mangzhong-feature', 'source-xinhua-mangzhong-2024']
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
    'statement': '《月令七十二候集解》将芒种列为五月节（节气，非中气），并以五日为一候记芒种三候：一候螳螂生、二候鵙始鸣、三候反舌无声。其中"鵙"（音局，即伯劳/百劳）为古籍用字——非遗网芒种专题页将该候误排为"鹏始鸣"，属传抄讹误，引用时须校正。',
    'exceptions': [
      '各版本三候注文文字存在异文可能，引用需注明版本（本卡以维基文库本为准）',
      '七十二候所述物候是古典文本经验，不等于当代中国各地的实际物候观测',
      '"反舌"为何鸟诸书有争议（《月令》注文明言"诸书以为百舌鸟，特註疏以為蝦蟆"），不得径直写成单一物种定论',
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

# 芒种三候（古典文本记载）

## 研究问题

传统文献如何描述芒种时节的自然变化？"三候"体系的原始文本是什么？

## 证据（原文与定位）

已直接读取维基文库《月令七十二候集解》芒种节全文（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]，2026-09-16 重抓全页切分）：

> 定义："芒種〈【上聲】〉，五月節。謂有芒之種穀可稼種〈【去聲】〉矣。"（命名取义详见 [[03_notes/hist-mangzhong-naming|芒种命名卡]]）
> 一候："螳螂生。螳螂，草蟲也，飲風食露，感一陰之氣而生，能捕蟬而食，故又名殺蟲；曰天馬，言其飛捷如馬也；曰斧蟲，以前二足如斧也，尚名不一，各隨其地而稱之。深秋生子于林木閒，一殼百子，至此時則破殼而出，藥中桑螵蛸是也。"
> 二候："鵙〈【音局】〉始鳴。鵙，百勞也，《本草》作博勞；朱子《孟》注曰：博勞，惡聲之鳥，蓋梟類也。曹子建《惡鳥論》：百勞以五月鳴，其聲鵙鵙然，故以之立名……《毛詩》曰：七月鳴鵙。蓋周七月夏五月也。"
> 三候："反舌無聲。諸書以為百舌鳥，以其能反復其舌故名，特註疏以為蝦蟆，蓋蛙屬之舌尖向內，故名之。今辨其非者，以其此時正鳴，不知失者也……陳氏曰：螳螂、鵙皆陰類，感微陰而或生或鳴，反舌感陽而發，遇微陰而無聲也。"

紧随其后即夏至节（"夏至，五月中"）。

**版本核验发现**：非遗网芒种专题页（[[04_sources/source-ihchina-mangzhong-feature|直读]]）作"一候螳螂生；二候**鹏**始鸣；三候反舌无声"，且其释义段写"伯劳鸟"——"鹏"为"鵙"之形近讹字；新华社2024年稿（[[04_sources/source-xinhua-mangzhong-2024|直读]]）作"鵙始鸣"，与维基文库本一致。候名以《月令》原文"鵙"为准。

## AI 摘要 / 解释

- 三候构成芒种的古典叙事：**螳螂破壳而出（感"一阴之气"）→ 伯劳始鸣 → 反舌（百舌）停止鸣叫**。前两候被注家归为"阴类"感微阴而动，第三候被解释为感阳而发的鸟遇微阴而噤声——即仲夏"阳气极盛、阴气始生"的转折信号（属古典阴阳解释体系，与现象记录本身分层引用）。
- "七月鳴鵙"注文明言《毛诗》周历七月即夏历五月，是文本内部完成的三正换算，可供历法研究引用。
- 反舌鸟/虾蟆之辨是古籍内部已存在的物种争议，现代物候转写（如"乌鸫停止鸣叫"）必须标注为解释而非原文。

## 适用条件、例外与分歧

- "鵙/鹏"讹字为机构汇编页的传抄风险样本：下游引用三候时一律校回"鵙"，并注明来源页原误。
- 七十二候体系与二十四节气是相关但不同粒度的体系（24×3候=72候），见 [[02_shared/hist-solarterms-pentad-system|七十二候体系]]。
- 当代物候验证（螳螂孵化、伯劳鸣期、百舌静默期的现代观测）完全缺失，是气候变化维度的重要后续课题。

## 关联

[[01_terms/09_芒种|芒种索引]] · [[03_notes/hist-mangzhong-naming|芒种命名]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_topics/phenology|物候维度]]

## 待人工确认

- 与中华书局印本或《四库》本核对芒种三候注文（尤其"濁溫""禽經註"等句读）。
- 《礼记·月令》仲夏"螳蜋生……反舌無聲"平行记载的对读（《月令》注文明引註疏系统）。

## 修改记录

- 2026-09-16（第一轮）：建卡。月令维基文库本逐字直读；记录非遗网"鹏/鵙"讹字发现（新华网稿可反证）。
