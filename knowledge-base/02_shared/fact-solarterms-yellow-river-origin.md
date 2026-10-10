---
schema_version: '0.1.0'
id: 'fact-solarterms-yellow-river-origin'
type: 'CulturalFact'
title: '二十四节气形成于黄河流域的观察经验（申报表述）'
solar_terms: []
season: null
dimensions: ['history', 'regional-differences', 'references']
region: ['中国黄河流域（体系起源地）；后随历法通行传播至各地']
period: '体系定型于西汉（《淮南子》完整记载）；更早渊源（先秦文献链）待研究'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
contested: false
source_ids: ['source-xinhua-unesco-solarterms']
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
    'statement': '据UNESCO申报表述，二十四节气形成于中国黄河流域，以该区域的天象、气温、降水和物候时序变化为观察基准，后作为农耕社会的时间指南通行全国。',
    'exceptions': [
      '这是对体系起源地的概括性学术表述，具体到每个节气、每条物候的起源地与定型过程存在更细的学术讨论（待研究）',
      '"黄河流域"表述不能反推每个节气的农谚物候在黄河流域以外同样准确——见各地域差异维度',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=high/A/独立1；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 二十四节气形成于黄河流域（申报表述）

## 研究问题

二十四节气的知识体系最初基于哪里的自然经验？这对理解"地域适用性"意味着什么？

## 证据

已直接读取：新华社通稿转述的申报内容（[[04_sources/source-xinhua-unesco-solarterms|source-xinhua-unesco-solarterms]]）——"形成于中国黄河流域"，以该区域天象、气温、降水和物候的时序变化为观察基准。香港天文台页面亦提示节气气候经验"为古代中国中部气候的部分反映"（[[04_sources/source-hko-solar-terms|source-hko-solar-terms]]，已读）。

## 解释

这条命题是整个知识库**地域校准的基石**：节气的天文部分全球有效，但其物候与农事经验最初锚定于黄河中下游。脱离地域和时代直接写"中国人此时会看到/会做……"就是这个体系最容易产生的错误。项目内容应始终注明地域适用范围。

## 适用条件与分歧

"黄河流域起源"是学界通行表述，但各节气的雏形（如《尚书·尧典》四仲中星、《夏小正》物候）到《淮南子》定型的完整学术链条，本轮未做文献核验（待研究）。学界对"单一起源还是多地积累"是否有不同意见，尚需检索民俗学与天文史文献确认。

## 关联

[[01_terms/01_立春|立春索引]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[03_notes/hist-yueling-lichun-pentads|立春三候]] · [[02_topics/regional-differences|地域差异]]

## 待人工确认

申报书原文（联合国教科文组织编号00647页面）与天文史/农史学术文献（如《中国天文学史》相关章节）的核对。

## 修改记录

- 2026-09-16（模型复盘）：period 字段由"先秦至西汉逐步形成"改为"体系定型于西汉（《淮南子》完整记载）；更早渊源（先秦文献链）待研究"。原因："先秦逐步形成"是本轮未经文献核验的时代推断（申报表述未给出该断代），犯了"以体系定型时间倒推形成过程"的错误；已读证据只支持"西汉已定型"。
