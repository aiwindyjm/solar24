---
schema_version: '0.1.0'
id: 'glob-shuangjiang-firstfrost-dates'
type: 'GlobalExpression'
title: '北美园艺的 first frost date：以本地初霜日为暖季种植季终结时钟（Candidate）'
solar_terms: ['shuangjiang']
season: 'autumn'
dimensions: ['global-expressions', 'agriculture']
region: ['美国/加拿大家庭园艺文化（按邮编与USDA耐寒区本地化）']
period: '现代园艺实践（历书传统延续至今；The Old Farmer''s Almanac 创刊于1792年的说法本轮未直读）'
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'low'
risk_level: 'high'
impact_level: 'global'
contested: false
source_ids: ['source-almanac-com-shuangjiang-frostdates']
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
claim:
  {
    'statement': '待核验（Candidate）：北美家庭园艺文化以"first fall frost date / last spring frost date"（秋季初霜日/春季终霜日）为种植季时钟——检索摘要显示 The Old Farmer''s Almanac 工具页称 last spring frost 标志可以户外定植、first fall frost 标志"暖季作物生长季的终结"（the end of the growing season for warm-weather crops），园艺者按邮编查询本地霜日安排播种与收获。',
    'exceptions': ['仅检索摘要级来源（almanac.com 与 farmersalmanac.com 页面抓取均被拒），页面未直接读取；NOAA/气象部门霜日统计口径未核'],
  }
expression:
  {
    'schema_version': '0.1.0',
    'id': 'glob-shuangjiang-firstfrost-dates',
    'editorial_layer': 'community',
    'term_ids': ['shuangjiang'],
    'title': { 'zh-CN': '北美园艺的初霜日（first frost date）', 'en': 'First Frost Dates in North American Gardening Culture' },
    'location': '美国/加拿大（家庭园艺与农家历书传统，按邮编/USDA耐寒区本地化）',
    'country': '美国（及加拿大）',
    'region': '北美',
    'culture': '英语农家历书（farmers'' almanac）与家庭园艺传统',
    'creators': [{ 'name': '北美园艺社区与历书出版传统（无个人作者）', 'url': null, 'role': 'community' }],
    'time_period': '现代园艺实践；历书传统延续中（创刊年代待核）',
    'natural_context': '秋季第一次霜冻出现、暖季作物种植季终结的时点',
    'cultural_expression': '以本地 first frost date 安排收获与秋播、以 last frost date 安排春植；霜日预警（frost warning）下的防霜护苗操作（覆盖、采收）',
    'relationship_to_solar_term': 'shared-nature',
    'relationship_reason': '中国霜降节气以"初霜出现"标记深秋农事转折（"霜降见霜，米谷满仓"），北美园艺以本地统计初霜日标记暖季种植季终结——两者是相近自然现象（秋季初霜）被赋予农事时间意义的平行经验，无传播关系，不互为对应节日。',
    'difference': '北美 frost date 是按地点多年统计的概率日期（可按邮编查询的现代园艺规划数据），不构成历法体系，也无节令仪式/食俗层；二十四节气是太阳黄经刻度（霜降=210°），"霜降"之名承载"天降"古典认知与物候叙事。霜日的社会组织形态不同：一方为工具性查询，一方为节气历法与节俗（如壮族霜降节）。',
    'similarity': '都以秋季初霜作为农事季的转折信号：中国农谚"晚稻就怕霜来早""霜降见霜，米谷满仓"以霜期早晚论收成，北美园艺以 first frost 为暖季作物收获的最后期限（"the end of the growing season"）。',
    'source_ids': ['source-almanac-com-shuangjiang-frostdates'],
    'license': 'pending（习俗描述文本的来源许可待核）',
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

# 北美 first frost date · GlobalExpression（Candidate）

> **状态：Candidate（候选表达）**——表达层草稿，来源未直读（search-excerpt 级）、consent=pending。三要素：**Similarity** 同以秋季初霜为农事季转折信号（霜期早晚↔收成/种植季终结）；**Difference** 北美霜日是按地点统计的现代园艺规划数据，非历法体系、无节令民俗层，二十四节气是黄经刻度+节俗复合体；**Relationship** shared-nature——相近自然现象被赋予农事意义的平行经验，**无传播关系，不得写成"美国版的霜降"或"对应节气"**。不得进入正式对外内容。

## 研究问题

秋季初霜作为农时标记，在中国节气体系之外是否有可比的社会组织形态？

## 证据与状态

线索级：仅依据检索摘要（[[04_sources/source-almanac-com-shuangjiang-frostdates|source-almanac-com-shuangjiang-frostdates]]，未读原页）。核心断言（first frost=暖季作物种植季终结、按邮编查询）必须直接读取 almanac.com 或 NOAA/NWS 气候中心霜日统计页后才能用于正式内容；平行线索（Farmers'' Almanac 平均初霜日页、"NOAA 称高纬山区8月31日前可初霜"）同样未直读。

## 待人工确认

- 直接读取 almanac.com/gardening/frostdates 与 NOAA/NWS 气候中心（30%概率霜日口径）页面。
- 北美 frost warning 天气预警业务与"first frost"在园艺文化的地位（州立 Extension 推广文献）。
- 按规范获得跨文化顾问确认后才可脱离 Candidate。

## 修改记录

- 2026-09-16（第一轮）：建卡。选型：与日语"霜降（そうこう）"（NAOJ 直读，见 [[03_notes/sci-shuangjiang-longitude-210|黄经卡]]证据）的历法传播案例相比，本条目为"相近自然现象的农事意义"平行案例（brief 推荐的诚实选项）；relationship 取枚举值 shared-nature，禁用自造值；日语霜降传播可作第二 Candidate 候补（NAOJ 源已在库）。

[[01_terms/18_霜降|霜降索引]] · [[02_topics/global-expressions|世界文化表达]] · [[03_notes/trad-shuangjiang-nongshi|霜降农事（对照端）]]
