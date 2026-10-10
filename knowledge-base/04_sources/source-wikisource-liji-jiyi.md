---
schema_version: '0.1.0'
id: 'source-wikisource-liji-jiyi'
type: 'Source'
title: '维基文库：《礼记·祭义》（"祭日於東，祭月於西"直读）'
solar_terms: ['qiufen']
season: 'autumn'
dimensions: ['history', 'references']
region: ['中国（先秦至汉代礼经文本传统）']
period: '《礼记》定型于汉代；维基文库本'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
source:
  {
    'id': 'source-wikisource-liji-jiyi',
    'title': '禮記/祭義',
    'authors': ['《礼记》编者（传统题名戴圣辑）'],
    'publisher': '维基文库',
    'published': null,
    'url': 'https://zh.wikisource.org/wiki/禮記/祭義',
    'citation': '《礼记·祭义》，维基文库本，2026-09-16 读取。',
    'source_type': 'historical',
    'access': 'direct-read',
    'accessed': '2026-09-16',
    'original_excerpt': '郊之祭，大報天而主日，配以月。夏後氏祭其闇，殷人祭其陽，周人祭日，以朝及闇。祭日於壇，祭月於坎；以別幽明，以製上下。祭日於東，祭月於西；以別外內，以端其位。日出於東，月生於西。陰陽長短，終始相巡，以致天下之和。',
    'locator': '《祭义》篇郊祭段。',
    'ai_summary': '《礼记·祭义》确立日月在国家祭祀中的对偶配置：郊祭"主日配月"，祭日于坛（春/东）、祭月于坎（秋/西），以别幽明外内。注意：本篇直读文本中**没有**"天子春朝日，秋夕月"字句（该句出自汉应劭注《汉书》等，见 [[04_sources/source-wikisource-jingkang-xiyue|靖康缃素杂记引]]）；"春分朝日、秋分夕月"的时点对应是经疏（周礼疏/礼记疏）的诠释，见 [[04_sources/source-wikisource-wxtk-jiriyue|文献通考引疏]]。',
    'rights': '维基文库（公众领域古籍，CC BY-SA 4.0 文本层）。',
    'verification': 'human-verified',
  }

# owner-authorized source upgrade 2026-09-28
---

# 《礼记·祭义》· Source

- 实际读取：是（2026-09-16，curl 经代理抓取，grep 定位"祭月於坎"段）。
- 交叉核对：所引段与《文献通考·卷七十九》转引《祭义》"郊之祭，大報天而主日，配以月……祭日於東，祭月於西"文字一致（两处直读互证）。
- 本卡的关键用途：核验非遗网秋分专题"《礼记》载：'天子春朝日，秋夕月'"的出处标注——直读《祭义》无此句，仅有坛坎/东西对偶；"春朝日秋夕月"句的直接文献来源为应劭注（经《靖康缃素杂记》转引）。

[[04_sources/README|来源入口]]
