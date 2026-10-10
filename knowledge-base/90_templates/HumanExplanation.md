---
schema_version: '0.1.0'
id: 'template-human-explanation'
type: 'HumanExplanation'
title: '待填写 · HumanExplanation'
solar_terms: []
season: null
dimensions: []
region: []
period: null
language: 'zh-CN'
status: 'draft'
epistemic: 'interpretation'
confidence: 'unknown'
contested: false
source_ids: []
author: 'Solar24 AI-assisted scaffold'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
explanation:
  {
    'audience': '待填写：面向谁（零前提知识的全球读者？）',
    'one_sentence': { 'zh-CN': '待填写：一句话', 'en': 'Pending' },
    'summary': { 'zh-CN': '待填写：约100字', 'en': 'Pending' },
    'expanded': { 'zh-CN': '待填写：四段式展开（是什么·与自然·与生活·为何今天仍值得理解）', 'en': 'Pending' },
    'why_it_matters': { 'zh-CN': '待填写：为什么中国人在意这个时间节点', 'en': 'Pending' },
    'supporting_knowledge_ids': [],
    'limitations': ['待填写：每句解释的依赖与证据边界'],
  }
---

# HumanExplanation 模板

复制到对应目录后更新 id/title/author/created/updated/范围；不要保留 template-* ID 作为正式实体。此模板没有真实研究资料，human_review 保持 null。

## 使用规则

- 解释层不是事实数据库：每句话必须能回溯到 supporting_knowledge_ids 中的知识卡；支撑卡未全部 approved 前，本卡保持 draft 且不得导出为用户内容。
- 三层（一句话 / 约100字 / 展开）不得互相矛盾；不为压缩篇幅牺牲准确性。
- 解释性收束（"为什么值得理解"）单独标注，不引入新事实。

## 研究问题或命题

TODO。

## 原文与定位

TODO：本卡无需摘录原文，但依赖卡的证据链必须完整。

## AI 摘要 / 人工解释

TODO：分别标注。

## 适用条件、例外与分歧

TODO：写入 limitations。

## 关联

TODO：填 supporting_knowledge_ids、solar_terms 和真实 Wiki Links。

## 待人工确认

TODO：解释准确性、英文译文、是否超出支撑卡范围。

[[90_templates/README|模板列表]]
