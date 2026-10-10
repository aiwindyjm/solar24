---
schema_version: '0.1.0'
id: 'research-lichun-phase3-log'
type: 'ResearchNote'
title: '立春第三阶段：证据补强与模板定型 · 执行日志（2026-09-16）'
solar_terms: ['lichun']
season: 'spring'
dimensions: ['ai-research-log']
region: []
period: null
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'unknown'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
research:
  {
    'task': '补强五个薄弱维度（Calendar/Agriculture/Human Life/Food/Literature），系统级知识拆分，协议升级与黄金模板定型',
    'queries': [
      '农历 节气 中气 无中气置闰 十九年七闰 规则 香港天文台',
      '中国农业博物馆 二十四节气 立春 备耕 农事 农谚',
      '荆楚岁时记 立春 剪彩为燕 戴春胜 宜春 原文',
      '张栻 立春偶成 律回岁晚冰霜少 原文 南宋',
    ],
    'discovered_source_ids':
      [
        'source-pmo-almanac-qa',
        'source-ihchina-lichun-feature',
        'source-wikisource-jingchu-suishiji',
        'source-wikisource-yanjingsuishiji',
        'source-wikisource-lichun-oucheng',
      ],
    'conflicts': ['五辛盘位置：现代流行说法"立春吃五辛盘"与《荆楚岁时记》文本（五辛盘在正月一日条）不符——已建谱系警示卡'],
    'conclusions':
      [
        '五个薄弱维度全部补强：Calendar 高（PMO直读）、Agriculture medium、Human Life high（荆楚+燕京两份一手文献）、Food medium（一手文献+谱系修正）、Literature medium（张栻卡）',
        '系统级知识拆分完成：02_shared/ 4卡（UNESCO/黄河流域/淮南子/历法角色），节气卡不再复制系统事实',
        '协议升级：calendar维度、HumanExplanation类型（explanation字段）、GlobalExpression candidate枚举、Source access字段；validate 新增6条证据-置信度机器规则',
        'HumanExplanation 正式建卡：三层解释+why-it-matters+六环叙事链（全部≥medium），并明确 Needs Research 清单',
        '黄金模板（A-L）定型，含24节气统一流程与"上一节气4卡人审通过才启动下一个"的门槛',
      ],
    'human_questions':
      [
        '《燕京岁时记》《荆楚岁时记》文字请与中华书局点校本核对（已读维基文库本，异体字已注明）',
        '英文解释译文为机器草稿，需人工润色',
        '协议与validate的6条新机器规则请代码评审',
      ],
  }
---

# 立春第三阶段执行日志

## 执行摘要

2026-09-16 执行。4 组定向检索（远少于第一轮的11组），换来 5 个直读来源——其中 3 份是一手古籍（荆楚岁时记、燕京岁时记、张栻诗），验证"少量高价值"策略。

## 补强结果（对照上轮矩阵）

| 维度 | 上轮 | 本轮 | 关键增量 |
|---|---|---|---|
| Calendar | weak | **complete** | PMO历书问答直读（机制全解）+ 立春位置卡（与春节独立、2018腊月实例）+ shared卡 |
| Agriculture | weak | **partial** | 非遗网农事页直读；农谚保持线索；地域分卡待做 |
| Human Life | weak | **partial** | 荆楚（6世纪人身装饰）+ 燕京（清末官方礼+日常食俗）两份一手文献 |
| Food | weak | **partial** | 咬春升级 medium（一手文献+谱系修正）；五辛盘辨析卡 |
| Literature | weak | **partial** | 张栻《立春偶成》直读卡；杜甫卡维持 low 待校勘 |

## 关键学术发现

**五辛盘谱系修正**：《荆楚岁时记》立春条无食俗，五辛盘系于正月一日条——"立春吃五辛盘自古如此"的流行说法无文本支持。此发现直接来自读原书（而非转述），是本项目"读原文"纪律的价值证明。

## 协议与机器规则变更（需代码评审）

- dimensions +calendar；knowledgeTypes +HumanExplanation（explanation 字段）；GlobalExpression.status +candidate；SourceSchema +access（direct-read/search-excerpt，必填）。
- validate.ts：medium/high 须 direct-read 来源；high 须 cross-checked；search-excerpt-only 封顶 low；epistemic unverified 封顶 low；approved 卡须全 human-verified 来源；approved 解释须全 approved 支撑卡。

[[01_terms/01_立春|立春索引]] · [[07_research/research-lichun-model-review|模型复盘]] · [[07_research/golden-term-template|黄金模板]]
