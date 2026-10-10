---
schema_version: '0.1.0'
id: 'hist-yueling-xiaoshu-pentads'
type: 'HistoricalRecord'
title: '《月令七十二候集解》小暑三候：温风至、蟋蟀居壁、鹰始击（含三方异文）'
solar_terms: ['xiaoshu']
season: 'summer'
dimensions: ['phenology', 'history', 'ecology']
region: ['文本经验锚定中国（黄河流域为核心的古典物候传统）；实际物候因纬度海拔而异']
period: '文本传统题名为元代（吴澄编，据新华社2024稿编著者表述）；所承物候体系更早（《逸周书·时训解》《礼记·月令》等）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
contested: false
source_ids:
  [
    'source-yueling-qishierhou-wikisource',
    'source-gujintushu-suigong-jixia',
    'source-ihchina-xiaoshu-feature',
    'source-ihchina-xiaoshu-huashuo-2021',
    'source-forestry-xiaoshu-2026',
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
    'statement': '《月令七十二候集解》将小暑列为六月节，定义句为"小暑，六月节。《说文》曰：暑，热也。就热之中，分为大小，月初为小，月中为大，今则热气犹小也"，并记小暑三候：一候温风至、二候蟋蟀居壁、三候鹰始击（维基文库本）。三候第二、三项存在显著异文：《逸周书·时训解》作"蟋蟀居壁/鹰乃学习"，现代机构稿（非遗网、新华社、国家林草局）通作"蟋蟀居宇/鹰始鸷"。',
    'exceptions': [
      '"居壁/居宇"与"始击/始鸷（乃学习）"为传本与引用系统的异文，本卡以直读的维基文库本为基准如实并列，不裁断孰是',
      '《礼记·月令》仲夏之月有"小暑至"句（本轮经《古今图书集成》转读），早期月令系统中小暑的位置与后世二十四节气序列不同，引用时不可混同',
      '七十二候所述物候是古典文本经验，不等于当代中国各地的实际物候观测',
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

# 小暑三候（古典文本记载）

## 研究问题

传统文献如何描述小暑时节的自然变化？三候文本在各传本间有何异文？

## 证据（原文与定位）

已直接读取维基文库《月令七十二候集解》小暑节全文（[[04_sources/source-yueling-qishierhou-wikisource|source-yueling-qishierhou-wikisource]]）：

> 定义："小暑，六月节。《说文》曰：暑，热也。就热之中，分为大小，月初为小，月中为大，今则热气犹小也。"
> 一候："温风至。至，极也，温热之风至此而极矣。"
> 二候："蟋蟀居壁。一名蛬【音拱】，一名蜻蛚，即今之促织也。《礼记注》曰：生土中。此时羽翼稍成，居穴之壁，至七月则远飞而在野矣。盖肃杀之气初生则在穴，感之深则在野而斗。"
> 三候："鹰始击【《礼记》作鹰乃学习】。击，搏击也。应氏曰：杀气未肃，鸷猛之鸟始习于击，迎杀气也。"

**平行记载**（已直接读取《古今图书集成·岁功典》第054卷，[[04_sources/source-gujintushu-suigong-jixia|source-gujintushu-suigong-jixia]]）：

> 《汲冢周书》时训解："小暑之日溫風至，又五日蟋蟀居壁，又五日鷹乃學習。溫風不至，國無寬教。蟋蟀不居壁，急迫之暴；鷹不學習，不備戎盜。"
> 《禮記》月令："仲夏之月。小暑至。"
> 《淮南子》天文訓："夏至加十五日，斗指丁，則小暑音比大呂。"

**现代机构稿异文**（已直接读取）：非遗网小暑节气专题页（[[04_sources/source-ihchina-xiaoshu-feature|source-ihchina-xiaoshu-feature]]，2017）与"画"说资讯页（[[04_sources/source-ihchina-xiaoshu-huashuo-2021|source-ihchina-xiaoshu-huashuo-2021]]，2021）、国家林草局稿（[[04_sources/source-forestry-xiaoshu-2026|source-forestry-xiaoshu-2026]]）均作"一候温风至；二候蟋蟀居宇；三候鹰始鸷"。专题页并为"居宇"作解，引《诗经·七月》"七月在野，八月在宇，九月在户，十月蟋蟀入我床下"，称"文中所说的八月即是夏历的六月，由于炎热，蟋蟀离开了田野，到庭院的墙角下以避暑热"——提示"居宇"读法与《诗经》"八月在宇"的互文关系。

## AI 摘要 / 解释

- 三候构成盛夏开始的叙事：**风中带热（温风至）→ 蟋蟀避热近人（居壁）→ 鹰感杀气习击（始击）**——观察对象从气象信号转向动物行为，且后两候都带"避暑/迎秋"的时间方向感（蟋蟀至七月远飞在野；鹰迎肃杀之气）。
- 定义句的逻辑是**程度分级**："就热之中分为大小，月初为小，月中为大"——小暑之"小"不是"不热"，而是"热而未极"。注意"暑，热也"四字在原书中系引《说文》，非遗网等机构稿多略去出处直接作"暑，热也"。
- **异文谱系（本卡核心记录点）**：二候"居壁"（《时训解》与《月令集解》一致）vs"居宇"（现代机构稿通例，且与《诗经·七月》"八月在宇"形成互文——非遗网专题页明确作此勾连）——一字之差，释义从"居穴之壁"变为"居屋檐下"；三候"始击"（《月令集解》正文）vs"乃学习"（《礼记》系统，《月令集解》自注存异）vs"始鸷"（现代机构稿）。三个文本系统的差异需在一切引用中注明版本。

## 适用条件、例外与分歧

- 异文待校勘：本卡以直读维基文库本为基准；与中华书局印本、《四库》本的比对未做，"居宇/始鸷"的现代通行读法来源（通行教材或普及读物系统）未溯源。
- 《时训解》以"不至/不居壁/不学习"附灾异占验（"国无宽教"等），属古典占验观念，本卡仅作文本记录。
- 当代物候验证（蟋蟀移居、鹰行为）完全缺失，"今天这些物候是否仍按期出现"待研究。

## 关联

[[01_terms/11_小暑|小暑索引]] · [[02_shared/hist-solarterms-pentad-system|七十二候体系]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_topics/phenology|物候维度]]

## 待人工确认

- 版本校勘（《月令集解》各本、《礼记》《吕氏春秋》平行条文）；"居宇/始鸷"现代通行读法的来源考证。
- 是否引入现代物候观测建立"传统物候 vs 现代观测"对照。

## 修改记录

- 2026-09-16（建卡）：维基文库本逐字直读+《时训解》平行记载直读，三方异文（居壁/居宇；始击/乃学习/始鸷）如实并列；status=draft（引擎路由 auto-candidate）。
- 2026-09-16（证据补强）：补读非遗网2017专题页（6971），新增《诗经·七月》"八月在宇"与"居宇"读法的互文证据（机构页自证的异文来源线索）。
