---
schema_version: '0.1.0'
id: 'hist-yueling-lidong-pentads'
type: 'HistoricalRecord'
title: '《月令七十二候集解》立冬三候：水始冰、地始冻、雉入大水为蜃'
solar_terms: ['lidong']
season: 'winter'
dimensions: ['phenology', 'history', 'ecology']
region: ['文本经验锚定中国（黄河流域为核心的古典物候传统）；实际物候因纬度海拔而异']
period: '文本传统题名为元代；所承物候体系更早（《礼记·月令》《吕氏春秋》等）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-yueling-qishierhou-wikisource', 'source-ihchina-lidong-feature']
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
    'statement': '《月令七十二候集解》将立冬列为十月节，定义"冬，終也，萬物收藏也"（"立"字释义回指立春条"立，建始也……立夏、秋、冬同"），并以五日为一候记立冬三候：一候水始冰、二候地始冻、三候雉入大水为蜃。',
    'exceptions': [
      '"雉入大水为蜃"注文本身汇集诸家（郑康成/《淮南子》/高诱注蜃为大蛤，《礼记》注蛟属说，《埤雅》蛇化说）并加以裁定，属于古典解释体系内的考辨，不是现代动物学结论',
      '"大水，淮也，晉語曰：雉入于淮為蜃"以《国语》为据把"大水"落实为淮河——地理上限定古典物候观察的北方重心',
      '七十二候所述物候是古典文本经验，不等于当代中国各地的实际物候观测',
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

# 立冬三候（古典文本记载）

## 研究问题

传统文献如何描述立冬时节的自然变化？"三候"体系的原始文本是什么？

## 证据（原文与定位）

已直接读取维基文库《月令七十二候集解》立冬节全文（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]，霜降之后、小雪之前）：

> 定义："立冬，十月節。立字解見前。冬，終也，萬物收藏也。"
> 一候："水始冰。水面初凝，未至于堅也。"
> 二候："地始凍。土氣凝寒，未至于拆。"
> 三候："雉入大水為蜃。雉，野雞；鄭康成、《淮南子》、高誘俱註蜃為大蛤。《玉篇》亦曰：蜃，大蛤也。……大水，淮也，晉語曰：雉入于淮為蜃。"

"立字解見前"回指同书立春条（本轮同页重读确证）："立，建始也。五行之氣往者過來者續于此。而春木之氣始至，故謂之立也。立夏、秋、冬同。"——四立命名的共同逻辑见 [[03_notes/hist-yueling-lichun-pentads|立春三候卡]]。

**交叉印证（异发布方）**：非遗网立冬专题（[[04_sources/source-ihchina-lidong-feature|source-ihchina-lidong-feature]]）引用"冬，终也，万物收藏也"及三候全文，与维基文库录文一致；《礼记·月令》孟冬亦载"水始冰，地始凍。雉入大水為蜃。虹藏不見"（见 [[03_notes/hist-lidong-yingdong-beijiao|迎冬礼卡]]），物候序列更早。

## AI 摘要 / 解释

- 三候叙事：**水面初凝（尚未坚冰）→ 土地始冻（尚未开裂）→ 雉匿而蜃现**。前两候明确写"始""未至于堅/拆"——古典文本自己就把立冬标记为**进程的开端**而非深冬状态，与现代"立冬≠气象入冬"的辨析（[[03_notes/sci-lidong-vs-meteorological-winter|两套冬天]]）异层同构。
- 第三候"雉入大水为蜃"是七十二候中转化叙事色彩最强的一类：野鸡（雉）入淮化为大蛤（蜃）。注文先列"蜃为大蛤"诸家旧注，再驳《礼记》注"蛟属"与《埤雅》蛇化说，末以《本草》车螯条与《章龟经》裁定"此為蛤，明矣"。**文本性质须注明**：这是古典博物分类体系内的考辨，"雉化蜃"不是现代生物学的物种转化；春分二候"玄鸟至"与秋分"雷乃收声"体系中的候鸟消长，在此被以"化生"框架解释。
- "冬，終也，萬物收藏也"给出立冬的文化定义：终（万物终成）与藏（收藏闭固）——与《河图稽耀钩》"冬，終也。立冬之時，萬物終成"（[[04_sources/source-gjts-suigong-lidong|岁功典立冬部]]辑）同一释名传统。

## 适用条件、例外与分歧

- **版本异文（待校勘）**：本卡以维基文库录文为准，未与中华书局印本或《四库》本对校；注文引书繁密（《玉篇》《墨子》《本草》《章龟经》《爾雅翼》《埤雅》），转引文字与各原书需人工比对。
- 《易通卦验》作"雀入水為蛤"（[[04_sources/source-gjts-suigong-lidong|岁功典]]辑），禽鸟种类与"雉"异文，属纬书系统的平行记载。
- 当代物候验证完全缺失——水面初冰、土壤始冻的现代观测日期序列（如中国物候观测网）待研究。

## 关联

[[01_terms/19_立冬|立冬索引]] · [[03_notes/hist-yueling-lichun-pentads|立春三候（"立，建始也"互证）]] · [[03_notes/hist-lidong-yingdong-beijiao|礼记月令孟冬]] · [[02_shared/hist-solarterms-pentad-system|七十二候体系]] · [[02_topics/phenology|物候维度]]

## 待人工确认

- 版本校勘（注文诸引书比对）；《逸周书·时训解》立冬条的平行记载直读。
- 是否引入现代物候观测建立"传统三候 vs 现代观测"对照（ ecology 维度缺口）。

## 修改记录

- 2026-09-16（第一轮）：建卡。月令维基文库全页重读切分，立冬定义句+三候+注文逐字直读；"立字解見前"以同页立春条回读确证；非遗网作异发布方交叉。
