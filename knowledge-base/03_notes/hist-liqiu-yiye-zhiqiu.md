---
schema_version: '0.1.0'
id: 'hist-liqiu-yiye-zhiqiu'
type: 'HistoricalRecord'
title: '"一叶知秋"典故链：《淮南子》"见一叶落而知岁之将暮"与"一叶落知天下秋"'
solar_terms: ['liqiu']
season: 'autumn'
dimensions: ['literature-art', 'history', 'scientific-interpretation']
region: ['中国（古典文献传统）']
period: '西汉（《淮南子·说山训》）；"一叶落知天下秋"句式系《文录》引唐人诗（转引级）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-huainanzi-shanshun', 'source-gjts-suigong-liqiu']
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
    'statement': '"一叶知秋"的文献链有两个层级：(1) 《淮南子·说山训》（西汉，直读）："嘗一臠肉，知一鑊之味；懸羽與炭，而知燥溼之氣；以小明大。見一葉落，而知歲之將暮；睹瓶中之冰，而知天下之寒；以近論遠。"——原文说的是"岁之将暮"（一年将尽），语境是以小明大、以近论远的推理格言群，并未直接说"秋"；(2) "山僧不解數甲子，一葉落知天下秋"句式系《文录》引"唐人诗"（《古今图书集成·岁功典》立秋部杂录转引）——"知秋"的定型句式属这一层。另有梧桐报秋的物候记载：《陶朱公书》"立秋之刻，必脫一葉"、《群芳谱》"梧桐如某時立秋，至期一葉先墜"（均为类书转引）。',
    'exceptions': [
      '《淮南子》原文"知岁之将暮"与流行成语"一叶知秋"之间存在语义位移（岁暮→知秋），把成语原文直接写成"见一叶落而知天下之秋"是不准确的',
      '《文录》条目为清代类书转引，所据《文录》原书与"唐人诗"出处本轮未回溯',
      '《陶朱公书》《群芳谱》均为类书辑文未回原典，按转引级对待',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=low/B/独立1；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# "一叶知秋"典故链

## 研究问题

"一叶知秋"的原始文献是什么？梧桐落叶与立秋在古典文献中如何绑定？

## 证据（原文与定位）

1. **直读**：《淮南子·说山训》（[[04_sources/source-wikisource-huainanzi-shanshun|source-wikisource-huainanzi-shanshun]]）："嘗一臠肉，知一鑊之味；懸羽與炭，而知燥溼之氣；以小明大。見一葉落，而知歲之將暮；睹瓶中之冰，而知天下之寒；以近論遠。"
2. **直读（类书辑文）**：《古今图书集成·岁功典》立秋部杂录（[[04_sources/source-gjts-suigong-liqiu|source-gjts-suigong-liqiu]]）："《文錄》：'唐人有詩云：山僧不解數甲子，一葉落知天下秋。'及觀陶元亮詩云：'雖無紀曆志，四時有成歲。'便覺唐人費力。"
3. **直读（类书辑文）**：同卷彙考："《陶朱公書》：立秋之刻，必脫一葉。"杂录："《群芳譜》：梧桐如某時立秋，至期一葉先墜。"选句另辑五代杨凝式帖语"當一葉報秋之初，乃韭花逞味之始"。

## AI 摘要 / 解释

- 典故链分层：《淮南子》句是**推理格言**（以小明大），落点在"岁暮"；"一叶落知天下秋"是**唐人诗句**（山僧不计历法、以叶落计时），落点移到"秋"——成语"一叶知秋"兼有两层血统，引用时应区分。
- 梧桐报秋：《陶朱公书》"立秋之刻必脱一叶"与《群芳谱》"至期一叶先坠"把梧桐落叶当作**立秋时刻的指示物**——这是刘翰诗"满阶梧叶"（[[03_notes/lit-liuhan-liqiu|刘翰卡]]）与三候"凉风至"感知传统的物候底座；宋代宫廷"梧桐报秋"仪式的流行叙述本轮未见直读来源，不写。
- 现代解释视角（Interpretation）：以个别先兆推断整体进程（叶落→岁暮/秋至），与现代物候学"指示植物"思路形似而方法论不同——此对比属解释层，不入 fact。

## 适用条件、例外与分歧

- 两直读源同为维基文库托管（原典页+类书卷页），同发布方规则封顶 medium；《淮南子》句已获逐字直读，文本本身可靠，待中华书局点校本对校。
- 《文录》成书与"唐人诗"的确切出处（一说《子西语录》）未核。

## 关联

[[01_terms/13_立秋|立秋索引]] · [[03_notes/lit-liuhan-liqiu|刘翰《立秋》]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》二十四节气完整记载（天文训，另篇）]] · [[02_topics/literature-art|文学艺术]]

## 待人工确认

- 《淮南子》点校本（刘文典《淮南鸿烈集解》）对校；《文录》/《子西语录》溯源。
- "梧桐报秋"宫廷仪式（宋室南渡后临安记载）的一手文献检索（谈钥《嘉泰吴兴志》类方志/《武林旧事》）。

## 修改记录

- 2026-09-16（第一轮建库）：建卡。典故两层级（淮南子格言/唐人诗句）+梧桐报秋辑文分层登记；"知岁之将暮→知秋"语义位移作为核心 finding 写入命题。
