---
schema_version: '0.1.0'
id: 'lit-luyou-xiaohan-layue'
type: 'CulturalFact'
title: '陆游《腊月》：小寒所在农历十二月的暖冬诗（腊月诗身份声明）'
solar_terms: ['xiaohan']
season: 'winter'
dimensions: ['literature-art']
region: ['中国']
period: '南宋（陆游，1125-1210）；文本经清《广群芳谱》卷006"十二月"集藻直读'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'low'
impact_level: 'term'
contested: false
source_ids: ['source-wikisource-guangqunfangpu-c006']
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
    'statement': '南宋陆游五律《腊月》全文（据《广群芳谱》卷006十二月集藻直读）："今冬少霜雪，臘月厭重裘。漸動園林興，頓寬薪炭憂。山陂泉脈活，村市栁枝柔。春餅吾何患，嘉蔬日可求。"诗写的是一个少霜雪的暖腊月：无需重裘、薪炭之忧顿宽、泉脉已活、柳枝已柔、春饼嘉蔬可期。其与小寒的关联是**月序关联**（小寒为"十二月節"，见 [[03_notes/hist-yueling-xiaohan-pentads|三候卡]]）而非节气直接咏叹——本卡身份声明：这是腊月诗，不是节气诗。',
    'exceptions': [
      '文本经清代类书《广群芳谱》卷006转引直读，《剑南诗稿》原集未核，文字以转引为准、校勘待做',
      '本诗系年（作于何年何地）未核，"暖冬"是文本内证（今冬少霜雪）不等于气候学断代证据',
      '首选样本元稹《咏廿四气诗·小寒十二月节》（"小寒连大吕，欢鹊垒新巢"）与备选黄庭坚《驻舆遣人寻访後山陈德方家》（"江雨蒙蒙作小寒"）在维基文库均无直读页（本轮全文检索确认，沿 wave1-2 结论），两诗仅存机构稿引句（新华网/中国天气网各引两句），组诗全文本未直读——记 Needs Research',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': ['一手来源（GB/T正文/标准全文）未直读，已在exceptions登记；降级处理'],
    'notes': 'REVISE→APPROVE：pending-primary-source不影响命题正确性（已有多独立直读源），待核来源列入人审条件',
  }
---

# 陆游《腊月》：小寒时段的暖冬诗

## 研究问题

小寒没有可直接直读的节气诗（元稹、黄庭坚两首选均无维基文库页）时，文学样本的诚实选择是什么？

## 证据（原文与定位）

已直接读取《御定佩文斋广群芳谱》卷006"十二月"集藻五言律詩（[[04_sources/source-wikisource-guangqunfangpu-c006|source-wikisource-guangqunfangpu-c006]]）：

> "─増─宋陸游臘月─今冬少霜雪臘月厭重裘漸動園林興頓寬薪炭憂山陂泉脈活村市栁枝柔春餅吾何患嘉蔬日可求"

页面语境：该诗编于十二月汇编的"集藻"部，同部收唐太宗《除夜》、杜甫《杜位宅守岁》、陆游《腊月》等岁末诗。

## AI 摘要 / 解释

- **身份声明（本卡红线）**：这是**腊月诗**（农历十二月），不是小寒节气诗。它进入小寒知识域的唯一通道是月序：小寒为"十二月節"，腊月即小寒所在的月。任何"陆游写小寒"式转述都超出文本证据。
- **样本价值**：(1) 提供"暖腊月"的反向样本——小寒通常是全年最冷时段（[[03_notes/sci-xiaohan-vs-dahan-temperature|气温卡]]），而陆游笔下的这个腊月"少霜雪""泉脈活""栁枝柔"，说明个别年分的冬季冷暖波动早已进入诗人的直接经验（年际气候变率的主观记录，作文学观察、不作气候数据）；(2) "顿寬薪炭憂"是冬季能源焦虑的直白表达——薪炭是前现代御寒的核心物资，与小寒食俗的高热量逻辑（[[03_notes/trad-xiaohan-caifan-nuomifan|食俗卡]]）同属一个生计世界。
- **同页对读材料**：同卷十二月"花月令"（"梅蘂吐山茶麗水仙凌波"）与《赏心乐事》十二月"湖山探梅""玉照堂看早梅"（南宋张镃）——腊月赏梅的古典时间表，与非遗网小寒页"探梅"习俗条目（"此时腊梅已开，红梅含苞待放"）跨代呼应（两端均已直读，中间谱系未查）。

## 适用条件、例外与分歧

- 类书转引层级：文字以《广群芳谱》为准，《剑南诗稿》校勘待做（若诗题或字句有出入，以原集为准）。
- 元稹《小寒十二月节》与黄庭坚小寒诗**未直读不建卡**；机构稿引句（"小寒连大吕，欢鹊垒新巢""莫怪严凝切，春冬正月交"）仅作线索登记，不入证据区。

## 关联

[[01_terms/23_小寒|小寒索引]] · [[03_notes/hist-yueling-xiaohan-pentads|小寒三候（十二月節）]] · [[02_topics/literature-art|文学艺术]]

## 待人工确认

- 《剑南诗稿》原集校勘与系年。
- 元稹《咏廿四气诗·小寒十二月节》全文直读（敦煌写本/《全唐诗补编》路径）；黄庭坚《驻舆遣人寻访後山陈德方家》文本（山谷集外集诸本）——两案均沿 wave1-2 的"无维基文库页"结论，转其他古籍库（ctext 已知被拦，需替代途径）。
- 腊月赏梅谱系（张镃《赏心乐事》原书直读；梅谱类文献）。

## 修改记录

- 2026-09-16（建卡）：两首选诗直读失败后，按"诚实降级"取已直读的腊月诗样本并显式声明身份；元稹/黄庭坚线索与全文缺口记 Needs Research。

- 2026-09-16（审核阶段）：路由 human-review-required（pending-primary-source：《剑南诗稿》原集未核），status draft → in-review。AI 不做最终审核，等待人工 Decision。
