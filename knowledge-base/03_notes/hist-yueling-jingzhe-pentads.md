---
schema_version: '0.1.0'
id: 'hist-yueling-jingzhe-pentads'
type: 'HistoricalRecord'
title: '《月令七十二候集解》惊蛰三候：桃始华、仓庚鸣、鹰化为鸠'
solar_terms: ['jingzhe']
season: 'spring'
dimensions: ['phenology', 'history', 'ecology']
region: ['文本经验锚定中国（黄河流域为核心的古典物候传统）；实际物候因纬度海拔而异']
period: '文本传统题名为元代；所承物候体系更早（《夏小正》《礼记·月令》等）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
contested: false
risk_level: 'medium'
impact_level: 'term'
source_ids:
  ['source-yueling-qishierhou-wikisource', 'source-ihchina-jingzhe-feature']
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
    'statement': '《月令七十二候集解》将惊蛰列为二月节，定义句作"驚蟄，二月節。《夏小正》曰：正月啟蟄，言發蟄也。萬物出乎震，震為雷，故曰驚蟄。是蟄蟲驚而出走矣"，并以五日为一候记惊蛰三候：一候桃始华、二候仓庚鸣、三候鹰化为鸠（注文以"化者，反歸舊形之謂"解释鹰鸠互变）。',
    'exceptions': [
      '七十二候所述物候是古典文本经验，不等于当代中国各地的实际物候观测',
      '"鹰化为鸠"注文属古典转化叙事（古人以"化"解释候鸟消长），不是现代鸟类学记录，引用时必须注明文本性质',
      '各版本注文存在异文可能（立春三候已发现一处维基文库本与CText检索摘要不一致），本卡以维基文库本为准，异文待校勘',
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

# 惊蛰三候（古典文本记载）

## 研究问题

传统文献如何描述惊蛰时节的自然变化？三候的原始文本与注文是什么？

## 证据（原文与定位）

已直接读取维基文库《月令七十二候集解》惊蛰节全文（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]，位于雨水节之后、春分节之前）：

> 定义："驚蟄，二月節。《夏小正》曰：正月啟蟄，言發蟄也。萬物出乎震，震為雷，故曰驚蟄。是蟄蟲驚而出走矣。"
> 一候："桃始華〈【《呂氏春秋》作桃李華】〉。桃，果名，花色紅，是月始開。"
> 二候："倉庚鳴，庚亦作鶊，黃鸝也。詩所謂'有鳴倉庚'是也。《章龜經》曰：倉，清也；庚，新也；感春陽清新之氣而初出，故名。其名最多，《詩》曰黃鳥，齊人謂之搏黍，又謂之黃袍，僧家謂之金衣公子，其色鵹黑而黃，又名鵹黃。諺曰黃栗畱、黃鶯鶯兒，皆一種也。"
> 三候："鷹化為鳩。鷹，鷙鳥也，鷂鸇之屬。鳩，即今之布穀，《章龜經》曰：仲春之時，林木茂盛，口啄尚柔，不能捕鳥，瞪目忍飢如癡而化，故名曰鳲鳩。《王制》曰鳩化為鷹，秋時也。此言鷹化為鳩，春時也。以生育肅殺氣盛，故鷙鳥感之而變耳。孔氏曰：化者，反歸舊形之謂。故鷹化為鳩，鳩復化為鷹，如田鼠化為鴽，則鴽又化為田鼠。若腐草為螢，鴙為蜃，爵為蛤，皆不言化，是不再復本形者也。"

## AI 摘要 / 解释

- 三候的叙事链：**桃树开花（植物）→ 仓庚（黄鹂）初鸣（鸟声）→ 鹰化为鸠（猛禽隐去、布谷渐出）**，观察对象从植物到鸟类，全部可用目验；定义句把节气名与雷联系起来（"萬物出乎震，震為雷"）。
- **"鹰化为鸠"是古典转化叙事**：注文明言"化者，反歸舊形之謂"，以"鹰春化为鸠、秋复化为鹰"解释两类鸟的季节性消长——这是古人用互变框架整合物候观察的解释体系，不是鸟类学事实（现代解释：鹰隼春季迁徙/换羽而少见，布谷春季始鸣，古人遂以为"化"）。此分层必须在任何引用中保留。
- 定义句同时保留了更早的文献层："《夏小正》曰：正月啟蟄"——月令本身记录了"启蛰"旧名（改名公案见 [[03_notes/hist-jingzhe-qizhe-renaming|启蛰改名卡]]）。
- 二候注文对仓庚（黄鹂）罗列了《诗》"黄鸟"、齐人"搏黍"、"黄袍"、僧家"金衣公子"等诸名，是古典名物学的一手材料。

## 适用条件、例外与分歧

- 古典文本经验 ≠ 现代观测：三候反映的是传统农时观察框架（七十二候体系见共享卡 [[02_shared/hist-solarterms-pentad-system|七十二候体系]]，此处不复述），当代物候验证（桃花始花期、黄鹂初鸣期的现代数据）完全缺失，待研究。
- 非遗网惊蛰专题（[[04_sources/source-ihchina-jingzhe-feature|source-ihchina-jingzhe-feature]]）所引月令文"二月节……万物出乎震，震为雷，故曰惊蛰，是蛰虫惊而出走矣"及三候名称与维基文库本一致（两处独立直读互证文本传抄一致）；但非遗网引文为节引，未含注文。
- 花信（"一候桃花，二候杏花，三候蔷薇"）为非遗网专题页所载，月令七十二候集解直读部分未见对应条文，来源层次不同，不在本卡命题内。

## 关联

[[01_terms/03_惊蛰|惊蛰索引]] · [[03_notes/hist-jingzhe-qizhe-renaming|启蛰改名公案]] · [[03_notes/sci-jingzhe-thunder-climate|惊蛰与初雷]] · [[02_shared/hist-solarterms-pentad-system|七十二候体系]] · [[02_topics/phenology|物候维度]]

## 待人工确认

- 版本校勘（维基文库本 vs 中华书局印本/《四库》本）与《礼记·月令》《吕氏春秋》对惊蛰三候的平行记载。
- "鹰化为鸠"的现代物候学对照（鹰隼类春季迁徙记录）——用于解释层，不入本卡。

## 修改记录

- 2026-09-16（第一轮研究）：建卡。月令维基文库全文直读（逐字含注文），非遗网专题页独立印证定义句与三候名，confidence high。
