---
schema_version: '0.1.0'
id: 'glob-guyu-april-showers'
type: 'GlobalExpression'
title: '英语农谚"April showers"：四月阵雨与春播的时间经验（Candidate）'
solar_terms: ['guyu']
season: 'spring'
dimensions: ['global-expressions', 'agriculture']
region: ['英国/英语文化圈（谚语语境）；检索线索另涉北美流传']
period: '溯源说法：Thomas Tusser 1557 农事历书（检索摘要，未核）；词条称现代句式首录1886年（未核）'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'low'
risk_level: 'high'
impact_level: 'global'
contested: false
source_ids: ['source-wikipedia-april-shower-guyu', 'source-farmersalmanac-aprilshowers-guyu']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
claim:
  {
    'statement': '待核验：英语农谚"April showers bring May flowers"（及长式"March winds and April showers bring forth May flowers"）把四月阵雨与五月花开连成因果口诀；检索线索称其源头可追至 Thomas Tusser 1557 年农事历书 A Hundred Good Points of Husbandry（"Sweet April showers / Do spring May flowers"）。它与谷雨同属农业社会对"春末降雨—播种/生长窗口"的时间经验，是相近农业阶段的经验表达，不构成对应或等同关系。',
    'exceptions': ['仅检索摘要级来源（Wikipedia 词条摘要+Farmers’ Almanac 检索聚合摘要），两页均未直接读取'],
  }
expression:
  {
    'schema_version': '0.1.0',
    'id': 'glob-guyu-april-showers',
    'editorial_layer': 'community',
    'term_ids': ['guyu'],
    'title': { 'zh-CN': '英语农谚"四月阵雨带来五月花"', 'en': 'April showers bring May flowers (English husbandry proverb)' },
    'location': '英国（起源语境）；英语文化圈流传',
    'country': '英国',
    'region': '欧洲西部',
    'culture': '英语农谚/农事历书（husbandry almanac）传统',
    'creators': [{ 'name': '英语民间农谚（溯源线索：Thomas Tusser，1524-1580）', 'url': null, 'role': 'community' }],
    'time_period': '溯源线索为16世纪（Tusser 1557，未核）；现代短式首录年份另一说为1886年（未核）',
    'natural_context': '暮春四月对流性阵雨频发的英国天气与春播/生长季开端',
    'cultural_expression': '口诀"April showers bring May flowers"：以四月的雨预告五月的花，兼作农时经验与乐观格言（ adversity 之后有好时光）',
    'relationship_to_solar_term': 'seasonal-experience',
    'relationship_reason': '无传播关系：英语农谚独立于中国节气体系，两者从未互相派生。可比较的是**相近农业阶段的时间经验**——都在春末以降雨为线索组织对播种与生长的预期；谷雨此外还是精确到太阳黄经30°的历法刻度并有物候/民俗制度附着，农谚只是韵语化经验。因此本条是"平行经验"的类比样本，不是"外国版谷雨"。',
    'difference': '形态不同：农谚是单句口诀，无天文定义、无三候物候体系、无官方历法地位，也不锚定具体日期；作用域是语言社区的经验共识，而谷雨是可推算交节时刻的历法节气并嵌入农事与民俗制度。气候背景亦不同：英国四月阵雨为大西洋温带海洋性气候的对流降水经验，与中国东部季风区春季降水增多属不同气候机制。',
    'similarity': '同为农业社会对"春末降雨关系到当年收成/花期"的经验化表达；都把降雨窗口转译为可传承的时间口诀（农谚/节气名+农谚群），提示不同农区独立发展出对春雨的重视。',
    'source_ids': ['source-wikipedia-april-shower-guyu', 'source-farmersalmanac-aprilshowers-guyu'],
    'license': 'pending（谚语本身为民间传统；两来源页面未直读，描述文本许可待核）',
    'media_types': ['text'],
    'asset_ids': [],
    'consent': 'pending',
    'status': 'candidate',
    'featured': null,
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'hold',
    'findings': ['insufficient-evidence'],
    'notes': '来源仅搜索摘要/弱来源，证据不足；列needs-research',
  }
---

# April showers · 谷雨的跨文化经验类比（GlobalExpression · Candidate）

> **状态：Candidate（候选表达）**——来源未直读（两个 search-excerpt 级源）、consent=pending。三要素：**Similarity** 同为春末降雨窗口的农事经验口诀；**Difference** 农谚无天文定义/物候体系/历法制度地位，气候机制也不同（温带海洋性 vs 季风区）；**Relationship** 无传播关系的平行经验，写"相近农业阶段的时间经验"，不写"对应/等同/外国版"。不得进入正式对外内容。

## 研究问题

谷雨"暮春降雨—春播"的经验内核在其他农业文化中有没有可比较（而非相对应）的表达？

## 证据与状态

线索级：仅检索摘要（[[04_sources/source-wikipedia-april-shower-guyu|Wikipedia April shower]]、[[04_sources/source-farmersalmanac-aprilshowers-guyu|Farmers' Almanac 溯源]]，两页均未直读）。Tusser 1557 溯源、1886 年首录、英国四月气候背景等断言**全部待直读核验**。备选比较项：南亚农业季历中的春雨播种期（rabi/zaid 换茬窗口）本轮连检索线索也未成条，记 Needs Research。

## 待人工确认

- 直读 Wikipedia "April shower" 词条与 Farmers' Almanac 原页；核 Tusser 原书（EEBO/HathiTrust 图像）中"Sweet April showers"句。
- 跨文化顾问审核后决定是否保留/改写/替换本 Candidate；南亚方向另行立项。

## 修改记录

- 2026-09-16（第一轮）：建卡（Candidate）。按诚实选项原则选"春末降雨与播种窗口"的平行经验，避免"外国版谷雨"叙事。

[[01_terms/06_谷雨|谷雨索引]] · [[03_notes/trad-guyu-nongshi|谷雨农事]] · [[02_topics/global-expressions|世界文化表达]]
