---
schema_version: '0.1.0'
id: 'sci-xiazhi-longitude-90'
type: 'ScientificFact'
title: '夏至的天文定义：太阳黄经 90°'
solar_terms: ['xiazhi']
season: 'summer'
dimensions: ['astronomy', 'scientific-interpretation']
region: ['全球（黄经定义与地域无关）；"白昼最长"的极值经验限北半球，且因纬度而异']
period: '现代天文学口径；2026年机构稿仍在沿用同一表述'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  ['source-ihchina-xiazhi-feature', 'source-weathercn-xiazhi-feature', 'source-xinhua-xiazhi-2026']
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
    'statement': '夏至是二十四节气中的第十个节气：太阳到达黄经90°的时刻交节，出现在每年公历6月21日或22日；此时太阳直射地面的位置到达一年的最北端、几乎直射北回归线，北半球白昼最长，且越往北越长。',
    'exceptions': [
      '"黄经90°"字样本轮由中国天气网页单独直读；非遗网夏至专题与新华社2026稿以"直射最北端／距天赤道最北处、直射北回归线"表述同一时刻，三页日期（6月21或22日）一致',
      '"白昼最长"为北半球限定表述：南半球同日白昼最短；赤道地区昼长随季节变化极小，"最长"表述是否适用赤道，本轮机构源未专门论述，待核后再写',
      '节气时刻按东经120°北京时间计，与其他时区的"当天"可能相差一日',
      '夏至逐年交节时刻的权威数据（紫金山天文台《中国天文年历》）本轮未纳入来源库',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立3；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 夏至的天文定义：太阳黄经 90°

## 研究问题

夏至在现代天文与历法口径中的定义是什么？"白昼最长"这一经验表述的适用边界在哪里？

## 证据

- **已直接读取**：中国天气网夏至稿（[[04_sources/source-weathercn-xiazhi-feature|source-weathercn-xiazhi-feature]]）："每年公历6月21日或22日视太阳运行至黄经90度为夏至，此时太阳直射地面的位置到达一年的最北端，几乎直射北回归线，北半球的日照时间最长。"
- **已直接读取**：中国非遗网夏至专题（[[04_sources/source-ihchina-xiazhi-feature|source-ihchina-xiazhi-feature]]）："夏至是二十四节气中的第十个节气。每年6月21日或22日是夏至日……此时北半球的白昼最长，且越往北越长。"（2017年夏至为6月21日，农历五月廿七）
- **已直接读取**：新华社2026年夏至稿（[[04_sources/source-xinhua-xiazhi-2026|source-xinhua-xiazhi-2026]]，受访专家为中科院紫金山天文台科普主管）："天文学上，夏至是指太阳在黄道上运行到距天赤道最北处的时刻，此时太阳直射在地球北回归线。"
- 黄道24等分、每段15°的系统机制见共享卡 [[02_shared/sci-solarterms-calendar-role|节气在历法中的角色]]，不在本卡复述。

## 解释（Scientific Interpretation）

夏至对应黄经90°——从春分0°起算的黄道四分点之一，与黄经270°的冬至对踵。定义绑定太阳位置而非天气，对全球任何经纬度同时成立；但由此派生的"白昼最长"经验**只在北半球成立**（南半球同日白昼最短），且随纬度增高而增强（北京约15小时、漠河约17小时、北极圈极昼，见 [[03_notes/sci-xiazhi-longest-day|夏至昼长极值与三个假"最"]]）。"夏至=最热"是不成立的经验联想（同卡）。夏至在农历中的位置属五月的中气，置闰机制见 [[02_shared/sci-solarterms-jieqi-zhongqi|节气与中气分组]]。

## 适用条件与待核验

- 待核验1：赤道及低纬地区"白昼最长"表述的适用口径（需天文台/天文馆专门论述页直读）。
- 待核验2：GB/T 33661-2017 正文条款（立春卡已登记的同一待办，适用全部节气定义）。
- 待核验3：夏至逐年交节时刻（《中国天文年历》数据源未入库）。

## 关联

[[01_terms/10_夏至|夏至索引]] · [[03_notes/sci-xiazhi-longest-day|昼长极值与假"最"]] · [[03_notes/hist-yueling-xiazhi-pentads|夏至三候]] · [[02_shared/hist-huainanzi-complete-24terms|《淮南子》完整记载]] · [[02_topics/astronomy|天文维度]]

## 待人工确认

- 三页机构直读一致，是否满足对外发布口径；赤道表述补证后的措辞修订。

## 修改记录

- 2026-09-16（建卡）：三个独立直读机构源（非遗网/中国天气网/新华社2026）支撑，confidence 定为 high。
