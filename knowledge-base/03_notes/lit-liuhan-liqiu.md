---
schema_version: '0.1.0'
id: 'lit-liuhan-liqiu'
type: 'CulturalFact'
title: '刘翰《立秋》：南宋立秋诗与"乳鸦/乱鸦"异文'
solar_terms: ['liqiu']
season: 'autumn'
dimensions: ['literature-art', 'phenology']
region: ['中国']
period: '南宋（刘翰）；生卒系年本轮未核'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-liuhan-liqiu', 'source-gjts-suigong-liqiu', 'source-xinhua-liqiu-2022']
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
    'statement': '南宋刘翰七绝《立秋》传世文本存在首句异文：维基文库作品页（录自《千家诗·卷三》）作"乳鴉啼散玉屏空，一枕新涼一扇風。睡起秋聲無覓處，滿階梧葉月明中"；《古今图书集成·岁功典·立秋部》（题作《立秋日》）作"亂鴉啼散玉屏空……"——后三句两系统一致。民间流传的另一版本末句"梧桐叶上月如霜"两个直读系统均未见，未获任何直读文本支持。诗以"一枕新凉"的体感与"满阶梧叶"的目击写立秋夜（与"梧桐报秋"物候传统呼应，见一叶知秋卡），经《千家诗》进入传统蒙学，新华社节令稿亦引其后两句。',
    'exceptions': [
      '两个直读文本同为维基文库托管（作品页+类书卷页），按同发布方规则不构成独立交叉，confidence 封顶 medium；定本需校勘（千家诗各刻本/南宋别集）',
      '"梧桐叶上月如霜"版本仅存在于流行转述（含研究任务线索句），无直读来源，不得引用',
      '作者刘翰的生平系年（一说字武子，南宋人）本轮未核，卡内不写',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=low/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 刘翰《立秋》

## 研究问题

古典诗歌中立秋的"物候感知"如何被表达？流传最广的立秋诗文本是否稳定？

## 证据（原文与定位）

- **已直接读取**维基文库作品页（[[04_sources/source-wikisource-liuhan-liqiu|source-wikisource-liuhan-liqiu]]，标注收录于《千家诗/卷三》）：

> 乳鴉啼散玉屏空　一枕新涼一扇風
> 睡起秋聲無覓處　滿階梧葉月明中

- **已直接读取**《古今图书集成·岁功典》立秋部艺文二（[[04_sources/source-gjts-suigong-liqiu|source-gjts-suigong-liqiu]]，题作《立秋日》）：

> 亂鴉啼散玉屏空，一枕新涼一扇風。睡起秋聲無覓處，滿階梧葉月明中。

- **已直接读取**新华社2022年立秋稿引文："睡起秋声无觅处，满阶梧叶月明中"——与两系统后两句一致。

## AI 摘要 / 解释

- 为什么值得作为文化表达样本：(1) "一枕新凉一扇风"以**体感**捕捉立秋（凉意初至而扇未撤），"睡起秋声无觅处"写**听觉**（秋声似有而无），"满阶梧叶月明中"以**目击**收束（梧桐落叶实证秋至）——一夜之间风、声、叶三重感官，正对应三候"凉风至、寒蝉鸣"的入秋感知结构（[[03_notes/hist-yueling-liqiu-pentads|立秋三候卡]]）；(2) 梧桐叶落是"梧桐报秋"物候传统的诗歌化（[[03_notes/hist-liqiu-yiye-zhiqiu|一叶知秋卡]]）；(3) 经《千家诗》进入蒙学并进入当代新华社节令稿，流传广度双层可查。
- 异文本身是数据："乳鸦（幼鸦）"与"乱鸦（散乱之鸦）"意象有别，取舍需校勘，不宜由 AI 定版；这正是"流行文本≠定本"的样本。

## 适用条件、例外与分歧

- 首句异文（乳鴉/亂鴉）为两直读系统间唯一分歧；后三句稳定。
- "梧桐叶上月如霜"末句变体：本轮全部直读来源均无此句，按防幻觉红线处理（同型案例："雨生百谷"四字不在月令集解原文）。

## 关联

[[01_terms/13_立秋|立秋索引]] · [[03_notes/hist-yueling-liqiu-pentads|立秋三候]] · [[03_notes/hist-liqiu-yiye-zhiqiu|一叶知秋典故]] · [[02_topics/literature-art|文学艺术]]

## 待人工确认

- 《千家诗》通行刻本与刘翰别集（若有传）校勘定版；作者系年核验。
- 《古今图书集成》立秋部艺文所收其余立秋诗（杜甫、白居易、范成大等）作为后续文学扩展池。

## 修改记录

- 2026-09-16（第一轮建库）：建卡。双系统直读+异文登记；同托管方规则封顶 medium；流行末句变体显式排除。
