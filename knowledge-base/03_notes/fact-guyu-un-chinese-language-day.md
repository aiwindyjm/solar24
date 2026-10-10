---
schema_version: '0.1.0'
id: 'fact-guyu-un-chinese-language-day'
type: 'CulturalFact'
title: '联合国中文日：定在每年4月20日（谷雨同日）的现代制度事实'
solar_terms: ['guyu']
season: 'spring'
dimensions: ['global-expressions', 'history', 'chinese-life']
region: ['联合国（机构 observance，面向全球）']
period: '2010年启动联合国语言日并选定日期；现行有效'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'high'
impact_level: 'global'
contested: false
source_ids: ['source-un-zhongwenri-guyu']
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
    'statement': '联合国中文日（UN Chinese Language Day）定于每年4月20日，与中国传统节气谷雨同日：2010年联合国新闻部（现全球传播部）启动联合国语言日倡议，经国内专家论证后由中国常驻联合国代表团建议将中文日定在谷雨这一天，联合国官网表述其纪念理由为"以纪念‘中华文字始祖’仓颉造字的贡献"；首届庆祝活动于2010年11月12日在纽约联合国总部举行。',
    'exceptions': [
      '本卡仅由联合国官网中文页单一来源直读支撑（两次独立抓取引文一致，curl 被反爬拦截未获原始 HTML），日期与背景表述建议人工浏览器复核',
      '联合国官网对日期缘由的表述援引仓颉传说——纪念性选择理由，不构成谷雨得名于仓颉的史实依据（分层见传说卡）',
      '联合国中文日是联合国（UN）机构 observance，与UNESCO人类非遗代表作名录为两个体系，二者不得混写',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=high/B/独立1；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 联合国中文日 · 现代制度事实卡

## 研究问题

谷雨在当代有没有跨出农耕语境的制度性纪念？证据与边界在哪里？

## 证据（原文与定位）

已直接读取联合国官网中文 observances 页面（[[04_sources/source-un-zhongwenri-guyu|source-un-zhongwenri-guyu]]，2026-09-16 两次抓取引文一致）：

> 页面标题标注："联合国中文日　4月20日"
> "2010年，联合国新闻部（现全球传播部）宣布启动联合国语言日。"
> "在经过国内专家论证之后，中国常驻联合国代表团向联合国建议，将中文日定为每年4月20日中国传统节气'谷雨'这一天，以纪念'中华文字始祖'仓颉造字的贡献。"
> "首届庆祝活动于2010年11月12日在纽约联合国总部举行。"

## AI 摘要 / 解释

- 这是谷雨故事里罕见的**现代全球制度锚点**：一个联合国机构语言日以谷雨为日期坐标，纪念理由直接援引仓颉传说——事实（日期、设立过程）与传说（仓颉造字、天降谷雨）在同一页面并置，正是需要分层引用的典型文本。
- 分层用法：日期与设立过程=本卡（fact）；仓颉叙事=[[03_notes/legend-guyu-cangjie|传说卡]]（legend）。写"联合国为纪念仓颉把中文日定在谷雨这天"是本卡事实；写"谷雨因此得名/谷雨的由来是仓颉造字"是被页面传说小节带偏的 Legend-as-Fact 错误。
- 常见混淆预警：中文日（UN observance，2010，非法定假日）≠ 二十四节气入选UNESCO非遗名录（2016，[[02_shared/fact-solarterms-unesco-2016|共享卡]]）——两件事、两个机构体系。

## 适用条件、例外与分歧

- 单一直读源；关键句建议人工浏览器复核（含全角标点与提法细节）。
- 各年庆祝活动内容（论坛、书画展等）逐年不同，本卡只锁日期与设立事实。

## 关联

[[01_terms/06_谷雨|谷雨索引]] · [[03_notes/legend-guyu-cangjie|谷雨祭仓颉传说（legend）]] · [[02_shared/fact-solarterms-unesco-2016|UNESCO非遗（共享卡，勿混写）]] · [[02_topics/global-expressions|世界文化表达]]

## 待人工确认

- 联合国六语言日整体框架（其他五个语言日日期）与中文日确定过程的更详细档案（联合国文号/新闻稿）。
- 2010年前后中方建议过程的中文一手报道（作为第二独立直读源）。

## 修改记录

- 2026-09-16（第一轮）：建卡。status=in-review（单源机构直读+跨体系混淆风险高，等待人工审核）。
