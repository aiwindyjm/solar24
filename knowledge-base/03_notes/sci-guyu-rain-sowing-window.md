---
schema_version: '0.1.0'
id: 'sci-guyu-rain-sowing-window'
type: 'ScientificFact'
title: '谷雨的农业气象意义：暮春降雨增多与春播关键期'
solar_terms: ['guyu']
season: 'spring'
dimensions: ['climate', 'agriculture', 'scientific-interpretation']
region: ['中国（机构表述口径；"降雨增多"为节气气候经验概括，非分区气候统计）']
period: '当代机构/媒体科普口径（2017非遗网稿、2022新华社稿）'
language: 'zh-CN'
status: 'approved'
epistemic: 'fact'
confidence: 'medium'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids: ['source-ihchina-guyu-feature', 'source-xinhua-guyu-2022']
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
    'statement': '两个机构直读源一致以"降雨增多+春播关键期"概括谷雨的气候与农业意义：非遗网"谷雨节气天气温和，降雨增多，适量的雨水有利于越冬作物的返青拔节和春播作物的播种出苗，但雨水过量或严重干旱，会对作物造成危害"；新华社2022年稿"此时节，降水日增，秧苗初插，作物新种，春茶采摘"。谷雨因此被列为代表降水状况的节气之一（新华社："与‘雨水’‘小满’‘小雪’‘大雪’一样，都是代表降水状况的节气"）。',
    'exceptions': [
      '"降雨增多"是节气气候经验的机构概括，本轮无分区域、分年代的气候统计直读源（终霜期/降水距平数据未建来源）',
      '两源发布年份不同（2017/2022）但表述框架相近，机构科普稿存在互相沿用成说的可能，独立性弱于两篇原创研究',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立2；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 谷雨的农业气象意义：暮春降雨与春播窗口

## 研究问题

在科学/科普口径下，谷雨时节最重要的气候—农业事实是什么？证据强度如何？

## 证据

- **机构汇编直读**：非遗网谷雨专题农事段（[[04_sources/source-ihchina-guyu-feature|source-ihchina-guyu-feature]]）：雨量与"返青拔节/播种出苗"的正反两面表述（适量有利、过量或干旱有害）。
- **媒体直读**：新华社2022年稿（[[04_sources/source-xinhua-guyu-2022|source-xinhua-guyu-2022]]）："降水日增，秧苗初插，作物新种"；谷雨属"代表降水状况的节气"。
- 对照：传统侧的"清明断雪，谷雨断霜"农谚与农谚群在 [[03_notes/trad-guyu-nongshi|农事卡]]（tradition 层），不混入本卡。

## 解释（Scientific Interpretation）

从气象学角度，"谷雨降雨增多"对应的是中国东部春季降水随夏季风推进而增多的气候背景在黄河—长江流域农区的经验投影；节气名与农事窗口的绑定（播种移苗）使它成为"水热条件满足春播需求"的时间坐标。**边界**：本卡的"降雨增多"止于机构科普表述层面，具体到某地某年代的降水量、终霜日统计需要气候数据源（中国气象局/国家气候中心），本轮未建。

## 适用条件、例外与分歧

无跨来源冲突；主要不确定性是科普口径的同质化（exceptions 已注明）。南方前汛期、华南"谷雨前后的强对流"等地域气候话题无直读源，未写入。

## 关联

[[01_terms/06_谷雨|谷雨索引]] · [[03_notes/sci-guyu-longitude-30|天文定义]] · [[03_notes/trad-guyu-nongshi|农事与农谚（tradition）]] · [[02_topics/climate|气候维度]]

## 待人工确认

- 气候统计源（终霜日、4月下旬降水气候值）直读后可将"降雨增多"升级为分区量化表述。
- 谷雨与华南前汛期开场、北方春旱的关系（气象局科普稿直读）。

## 修改记录

- 2026-09-16（第一轮）：建卡。两机构直读支撑定性表述；量化气候数据显式留白。
