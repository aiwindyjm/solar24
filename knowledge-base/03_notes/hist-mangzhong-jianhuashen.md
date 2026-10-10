---
schema_version: '0.1.0'
id: 'hist-mangzhong-jianhuashen'
type: 'HistoricalRecord'
title: '《红楼梦》第二十七回"饯花神"：芒种习俗的文学文本记载'
solar_terms: ['mangzhong']
season: 'summer'
dimensions: ['customs', 'literature-art', 'history']
region: ['中国（小说叙事场景，不构成地域风俗证据）']
period: '小说成书于18世纪；程甲本1791年刊行'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'high'
risk_level: 'high'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-hongloumeng-chengjia-ch27', 'source-ihchina-mangzhong-feature']
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
    'statement': '"芒种饯花神"的可确证记载是文学文本：《红楼梦（程甲本）》第二十七回开篇写"至次日乃是四月二十六日，原來這日未時交芒種節。尙古風俗：凡交芒種節的這日，都要設擺各色禮物，祭餞花神，言芒種一過，便是夏日了，衆花皆卸，花神退位，須要餞行"，并描写闺中人以花瓣柳枝编轿马、绫锦纱罗叠旌幢系于花树。这是18世纪小说对"尚古风俗"的转述与场景想象，不是风俗志记载；非遗网芒种专题同样指出"此习俗今已不存"，并以本回为其文献依据。清代此俗的实际流行地域与社会阶层无风俗志级证据。',
    'exceptions': [
      '小说称饯花神为"尙古風俗"是叙事内说法，未给出任何典出；"闺中更興這件風俗"提示小说将其写作闺阁风俗而非全民习俗',
      '程甲本与通行整理本该段有个别虚字/标点差异（"打扮的/打扮得"），引用须注明版本',
      '当代文教、文旅内容中"芒种送花神"多直接溯源于本回，属文学传播层，不等于清俗复原',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=high/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 《红楼梦》第二十七回"饯花神"：文学文本记载

## 研究问题

"芒种饯花神"的文献根据是什么？它是风俗史证据还是文学描写？

## 证据（原文与定位）

1. **直读一手文献**：《红楼梦（程甲本）》第二十七回开篇（[[04_sources/source-wikisource-hongloumeng-chengjia-ch27|source-wikisource-hongloumeng-chengjia-ch27]]，维基文库，回目"滴翠亭楊妃戲彩蝶 埋香冢飛燕泣殘紅"）："至次日乃是四月二十六日，原來這日未時交芒種節。尙古風俗：凡交芒種節的這日，都要設擺各色禮物，祭餞花神，言芒種一過，便是夏日了，衆花皆卸，花神退位，須要餞行。閨中更興這件風俗，所以大觀園中之人都早起來了。那些女孩子們，或用花瓣柳枝編成轎馬的，或用綾錦紗羅叠成干旄旌幢的，都用綵線繫了。每一颗樹，每一枝花上，都繫了這些物事。滿園裡繡帶飄飄，花枝招展。更兼這些人打扮的桃羞杏讓，燕妬鶯慚，一時也道不盡。"
2. **直读（机构汇编）**：非遗网芒种专题习俗段（[[04_sources/source-ihchina-mangzhong-feature|source-ihchina-mangzhong-feature]]）："民间多在芒种这天举行祭祀花神仪式，饯送花神归位……**此习俗今已不存**，但曹雪芹在《红楼梦》第二十七回中提到了芒种送花神"——机构亦以小说文本为该俗唯一依托，并明言今已不存。

## AI 摘要 / 解释

- 证据层级判定：饯花神是**文学文献级**的芒种习俗——一手文本存在且著名（第二十七回整回即以芒种日开篇，饯花神与黛玉葬花同日），但《荆楚岁时记》《燕京岁时记》《帝京岁时纪胜》《清嘉录》等风俗志类文献的芒种条目本轮未检出饯花神记载（前四者立春/上元诸条已有直读先例，芒种条未及逐一排查，列为待办）。"尚古风俗"是小说家言的托古修辞。
- 叙事内部信息仍可利用：小说把该俗系于"四月二十六日未时交芒种节"的精确历法时刻，并把仪式细节（轿马、旌幢、彩线系花枝）写成闺中活动——这为"芒种—花事终局—春之告别"的文化心理提供了18世纪的文本样本（同回"埋香冢飞燕泣残红"与饯花神构成同一意象系统）。
- 对下游的红线：可以写"《红楼梦》记载了芒种饯花神的想象"，不得写"清代人芒种都送花神"或"芒种送花神自古有之"。

## 适用条件、例外与分歧

- 无文本分歧（程甲本直读+非遗网引文互证）；分歧在于**证据类型的解释**——本卡按 brief 要求将文学描写与风俗史严格分层。
- 二手研究（红学论著对"饯花神"是否有实俗基础的讨论）未检索，待补。

## 关联

[[01_terms/09_芒种|芒种索引]] · [[03_notes/trad-mangzhong-anmiao-zhumei|安苗·打泥巴仗·煮梅]] · [[03_notes/lit-mangzhong-luyou-shiyu|陆游《时雨》]] · [[02_topics/customs|民俗维度]] · [[02_topics/literature-art|文学艺术]]

## 待人工确认

- 风俗志排查：《清嘉录》《燕京岁时记》《帝京岁时纪胜》五月卷是否有花神/饯花条（决定"仅见小说"这一判定是否维持）。
- 红学研究中的饯花神实俗讨论（论文/专著）作为二手层。

## 修改记录

- 2026-09-16（第一轮）：建卡。程甲本逐字直读+非遗网互证；按"文学文本≠风俗志"分层，风险定 high（最易被下游当作清代通行风俗误用）。
- 2026-09-16（审核阶段）：路由引擎判 human-review-required（risk=high），列入芒种人工审核包 C 区，状态 draft → in-review。AI 不做最终审核，等待人工 Decision。
