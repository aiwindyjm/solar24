---
schema_version: '0.1.0'
id: 'trad-qingming-customs'
type: 'Tradition'
title: '扫墓、戴柳与春嬉：清明习俗的古籍证据与谱系'
solar_terms: ['qingming']
season: 'spring'
dimensions: ['customs', 'chinese-life', 'history']
region: ['文献确证：清末北京（燕京岁时记）、六世纪荆楚（荆楚岁时记，寒食名下）；当代综述为全国性机构汇编']
period: '可确证记载：6世纪（荆楚·寒食条）与清末（北京）；唐代环节见融合史卡'
language: 'zh-CN'
status: 'approved'
epistemic: 'tradition'
confidence: 'medium'
contested: false
risk_level: 'medium'
impact_level: 'regional'
source_ids:
  ['source-wikisource-yanjingsuishiji', 'source-wikisource-jingchu-suishiji', 'source-ihchina-qingming-feature']
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
    'statement': '清明习俗中可由古籍直接确证的部分：清末《燕京岁时记》清明条记北京"兒童戴柳祭掃墳塋"、世族祭扫以五色紙錢製幡蓋焚于墓门称"佛多"，按语引《析津志》"遼俗最重清明，上自內苑，下至士庶，俱立秋千架"并引《岁时百问》释名，戴柳之由按语归于"唐高宗三月三日祓禊於渭陽，賜群臣柳圈各一"；六世纪《荆楚岁时记》在寒食名下记禁火三日、造饧大麦粥、挑菜及鬬鸡鏤雞子等俗。踏青、蹴鞠、放风筝、荡秋千的当代综述见于非遗网清明专题页。',
    'exceptions': [
      '"戴柳源于唐高宗赐柳圈"是《燕京岁时记》按语引述的解释性溯源（interpretation层），且系于三月三日（上巳）事，不能直接当作戴柳的唐代起源事实',
      '非遗网专题页的蹴鞠/放风筝/植树等条目为当代汇编叙述，未逐条给出原始文献',
      '现代"网络祭扫"等新实践属当代现象，不入本传统卡',
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

# 扫墓、戴柳与春嬉：清明习俗谱系

## 研究问题

清明"扫墓+踏青+插柳"的习俗组合，哪些环节有古籍直读证据，哪些只是当代综述？

## 证据（按证据等级排列）

1. **直读一手文献**：《燕京岁时记》清明条（[[04_sources/source-wikisource-yanjingsuishiji|source-wikisource-yanjingsuishiji]]，清末北京）：
   > "清明即寒食，又曰禁煙節。古人最重之，今人不為節，但兒童戴柳祭掃墳塋而已。世族之祭掃者，於祭品之外，以五色紙錢製成幡蓋，陳於墓左。祭畢，子孫親執於墓門之外而焚之，謂之佛多，民間無用者。"
   > 按："《析津志》云：遼俗最重清明，上自內苑，下至士庶，俱立秋千架，日以嬉戲為樂。自前明以來，此風久革……""至清明戴柳者，乃唐高宗三月三日祓禊於渭陽，賜群臣柳圈各一，謂戴之可免蠆毒。今蓋師其遺意也。"
   ——扫墓（祭掃墳塋+焚纸幡"佛多"）与戴柳在同一清末北京文本内并存；秋千之俗该书按语上溯辽代而记"前明以來久革"。
2. **直读一手文献**：《荆楚岁时记》寒食条（[[04_sources/source-wikisource-jingchu-suishiji|source-wikisource-jingchu-suishiji]]，6世纪）：禁火三日、造餳大麥粥；紧接"寒食挑菜""鬬雞，鏤雞子，鬬雞子"诸条——注意这些记在**寒食/春日**名下，不是"清明条"。
3. **直读机构汇编**：非遗网清明专题页（[[04_sources/source-ihchina-qingming-feature|source-ihchina-qingming-feature]]）综述扫墓、踏青、荡秋千、蹴鞠、植树、放风筝、插柳戴柳，并记"江南还有蚕花会和祭祀蚕神等活动"（此句在项目页）。

## AI 摘要 / 解释

- 谱系结论：**扫墓与戴柳的组合在清末北京文献中确证；唐代扫墓环节的证据在寒食名下（见 [[03_notes/hist-qingming-hanshi-merger|融合史卡]]）；六世纪文本中的节俗（禁火冷食、挑菜、斗鸡镂鸡子）属寒食谱系**。"清明习俗=扫墓+踏青+插柳+秋千+蹴鞠自古并存"的整全叙事无法由本轮古籍支持，各俗各有断代。
- 悲与喜并置的结构（"既有祭扫坟墓的悲酸之泪，又有踏青游玩的欢笑之声"，项目页语）是理解清明习俗组合的关键：祭祀与春嬉两类实践在同一时间窗内叠合，非遗网专题页与此一致。

## 适用条件、例外与分歧

地域：清末北京记载限"兒童""世族"群体；荆楚条限六世纪荆楚。当代综述的地域分布未逐一核验。蹴鞠（刘向《别录》"寒食蹴鞠"引文见于《荆楚岁时记》立春条按语，本轮已读到）与寒食的绑定值得注意：多项"清明娱乐"最早文献挂靠寒食。

## 关联

[[01_terms/05_清明|清明索引]] · [[03_notes/hist-qingming-hanshi-merger|寒食清明融合史]] · [[03_notes/trad-qingming-food|冷食与青团]] · [[02_topics/customs|民俗维度]]

## 待人工确认

- 踏青与上巳的关系链（《论语》暮春浴沂、上巳祓禊→清明踏青）；《东京梦华录》等宋代表扫墓+踏青文献；插柳的独立古籍源（本轮只有燕京岁时记按语一条线）。

## 修改记录

- 2026-09-16（建卡）：燕京岁时记清明条+荆楚岁时记寒食条双古籍直读为主、非遗网综述为辅建立；戴柳溯源标 interpretation 层。
