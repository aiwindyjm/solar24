---
schema_version: '0.1.0'
id: 'legend-guyu-cangjie'
type: 'CulturalFact'
title: '"谷雨祭仓颉"传说（legend 层）：仓颉造字、天雨粟与白水祭祀'
solar_terms: ['guyu']
season: 'spring'
dimensions: ['customs', 'history', 'chinese-life']
region: ['传说流传地：中国（叙事层面）；当代祭祀实践：陕西省渭南市白水县（非遗网表述）']
period: '传说叙事无信史断代可证；"自汉代以来流传千年"为非遗网说法（未给出处）；白水祭祀"至今"延续（非遗网表述）'
language: 'zh-CN'
status: 'approved'
epistemic: 'legend'
confidence: 'medium'
risk_level: 'high'
impact_level: 'term'
contested: false
source_ids:
  ['source-ihchina-guyu-feature', 'source-wikisource-huainanzi-benjingxun-guyu', 'source-un-zhongwenri-guyu']
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
    'statement': '传说层记载（非史实）：民间叙事称仓颉造字后"天雨粟、鬼夜哭"，天帝降谷子雨以嘉其功，故有"把仓颉造字这天叫做谷雨"的说法——非遗网专题页以"传说……于是有种说法"的措辞引出，并称陕西渭南白水县至今有谷雨祭祀文祖仓颉的习俗、"谷雨祭仓颉"为"自汉代以来流传千年的民间传统"（断代未给出处）。被该传说最常援引的古籍出处《淮南子·本经训》原文为"昔者蒼頡作書，而天雨粟，鬼夜哭"，其语境是论"能愈多而德愈薄"，通篇未提谷雨或任何节气、日期，不构成谷雨得名于仓颉的文献依据（命名依据见命名卡）。这一传说叙事在当代被制度性引用：联合国将中文日定在4月20日谷雨这一天以纪念仓颉（见联合国中文日卡）。',
    'exceptions': [
      '"自汉代以来流传千年"、白水祭祀的历史渊源均无原始文献支撑，属机构汇编断代表述',
      '非遗网转述作"天雨谷"，《淮南子》维基文库本作"天雨粟"，一字异文待校勘',
      '白水仓颉庙祭祀是否有非遗名录项目身份（如国家级"仓颉传说"）本轮未查证',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=high/A/独立3；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# "谷雨祭仓颉"传说（legend 层样本卡）

> **性质声明：本卡记录的是传说叙事与它在当代的流传、引用情况，不是历史事实。** 传说中"仓颉造字""天雨粟"不能被表述为已发生的史实；"谷雨因仓颉得名"是传说叙事内部的因果，不是命名的文献结论。

## 研究问题

"谷雨祭仓颉"传说的内容、文本源头和当代形态是什么？它与谷雨命名的关系应如何分层？

## 证据（原文与定位）

1. **机构汇编直读**：非遗网谷雨专题"祭仓颉"条（[[04_sources/source-ihchina-guyu-feature|source-ihchina-guyu-feature]]）：""谷雨祭仓颉"，是自汉代以来流传千年的民间传统。传说仓颉造字后'天雨谷，鬼夜哭'，于是有种说法，把仓颉造字这天叫做谷雨，陕西渭南白水县至今流传着谷雨祭祀文祖仓颉的习俗。"——注意页面自己的措辞是"传说""有种说法"，未把它当作得名定论。
2. **古籍直读**：《淮南子·本经训》（[[04_sources/source-wikisource-huainanzi-benjingxun-guyu|source-wikisource-huainanzi-benjingxun-guyu]]）："昔者蒼頡作書，而天雨粟，鬼夜哭；伯益作井，而龍登玄雲，神棲昆侖；能愈多而德愈薄矣。"——语境为慨叹智巧日进而德性日薄，**与谷雨无关**。"天降谷子雨救万民/天帝嘉奖"的完整故事形态是后世的传说扩展（联合国页面亦以传说口吻复述，[[04_sources/source-un-zhongwenri-guyu|source-un-zhongwenri-guyu]]）。
3. **当代引用**：联合国中文日（4月20日）的设立理由援引仓颉造字贡献——现代制度事实另卡处理（[[03_notes/fact-guyu-un-chinese-language-day|联合国中文日卡]]），两卡分层互链、不得合并。

## AI 摘要 / 解释

- 分层结论：**传说叙事（legend）／古籍原文（fact：原文语境不论谷雨）／当代地方实践（tradition：白水祭祀，机构转述）／现代制度引用（fact：UN中文日）四层各自独立**。常见的"谷雨因仓颉得名"是把第一层冒充命名的文献结论，与 [[03_notes/hist-guyu-naming-yushengbaigu|命名卡]]（农事降水取义）直接冲突，属本库重点防范的 Legend-as-Fact 错误。
- 传说的文化价值独立成立：它把"文字之创造"与"谷之降落"两个"降落/诞生"意象系在一起，为谷雨注入文字崇拜维度，并在白水地方祭祀与联合国中文日两端获得当代延续——这是叙事生命力，不是史实性。

## 适用条件、例外与分歧

- 无跨来源直接冲突（各源均自认传说/转述）；风险全部集中在"被 downstream 当史实引用"。
- 仓颉造字本身在文献学上属古史传说层（战国秦汉文献层累形成），本卡不介入该讨论，仅记录其与谷雨的关联叙事。

## 关联

[[01_terms/06_谷雨|谷雨索引]] · [[03_notes/hist-guyu-naming-yushengbaigu|谷雨命名（fact）]] · [[03_notes/fact-guyu-un-chinese-language-day|联合国中文日（fact）]] · [[02_topics/customs|民俗维度]]

## 待人工确认

- 白水仓颉庙谷雨祭祀的非遗名录身份与仪式细节（ihchina 项目页直读）；"自汉代以来"断代的方志依据。
- 《淮南子》"天雨粟/天雨谷"异文校勘（对比《论衡》诸卷引文）。

## 修改记录

- 2026-09-16（第一轮）：建卡，作为本节气 Legend-as-Fact 审计重点样本；status=in-review 等待人工审核。
