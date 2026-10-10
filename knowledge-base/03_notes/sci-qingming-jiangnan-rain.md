---
schema_version: '0.1.0'
id: 'sci-qingming-jiangnan-rain'
type: 'ScientificFact'
title: '"清明时节雨纷纷"的气候核验：主要是江南春雨期的特色'
solar_terms: ['qingming']
season: 'spring'
dimensions: ['climate', 'scientific-interpretation']
region: ['中国（统计覆盖部分省会城市；结论聚焦江南/长江中下游，北方结论相反）']
period: '统计口径1951-2010年；稿件发布于2015-04-03'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
contested: false
risk_level: 'medium'
impact_level: 'term'
source_ids:
  ['source-weather-com-qingming-rain', 'source-ihchina-qingming-feature']
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
    'statement': '气象统计支持"清明时节雨纷纷"主要是江南地区的气候特色而非全中国天气：中国天气网统计部分省会城市1951-2010年清明节当天降水次数，以长沙、南昌为代表的江南城市60年间下雨超过30次（半数以上），南方城市降水次数多于北方；从常年4月中上旬降水日数分布看，江南地区在清明节气期间降水日数最多；同期北方气温回升快、降水稀少、干燥多风。',
    'exceptions': [
      '统计口径是清明节当天（非整个清明节气约15天），且仅覆盖部分省会城市',
      '数据为1951-2010年，2011年以后及近十余年变化未核',
      '南方多于北方为统计概括，逐省逐市概率未列出',
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

# "清明时节雨纷纷"的气候核验

## 研究问题

杜牧"清明时节雨纷纷"是文学夸张还是真实气候规律？它描述的是哪里的气候？

## 证据

- **已直接读取**：中国天气网《数据帝扒天气第31期》（[[04_sources/source-weather-com-qingming-rain|source-weather-com-qingming-rain]]，2015-04-03）："数据帝统计分析了部分省会级城市1951~1980年和1981~2010年的清明节当天降水次数。""南方普遍比北方降水次数多。""长沙、南昌为代表的江南地区，1951-2010年清明节下雨超过了30次。""从常年4月中上旬降水日数分布来看，也确实证明江南地区在清明节气期间最爱下雨。"该稿并据杜牧842-852年行迹（湖北东部、安徽南部、浙江北部，即"江淮南部到江南北部"）与隋唐江南湿润期，讨论诗句的经验背景。
- **已直接读取**：非遗网清明专题页天气段（[[04_sources/source-ihchina-qingming-feature|source-ihchina-qingming-feature]]）：北方"气温回升很快，降水稀少，干燥多风，是一年中沙尘天气多的时段"；"这时的江南地区常常时阴时晴，长江中下游降雨明显增加，'清明时节雨纷纷'指的正是江南的气候特色。"

## 解释（Scientific Interpretation）

清明节气（4月上中旬）正值江南春雨时段：降水日数居前；而北方此时多晴少雨、风沙多。诗句因此是**区域气候经验的文学化**——把它读成"全中国清明都下雨"是常见误读，面向公众内容应注明地域。成因层的现代气象机制（冷暖空气交汇的环流细节）本轮无直读来源，不做展开。

## 适用条件与待核验

- "普遍"一词仅存于原始摘录，本卡命题已改写为具体统计口径；引用数据时保留"部分省会城市、清明节当天"两重限定。
- 逐年/逐市数据、清明节气全程（非单日）统计、近十年气候态变化：均无来源，不写。

## 关联

[[01_terms/05_清明|清明索引]] · [[03_notes/lit-dumu-qingming|杜牧《清明》]] · [[03_notes/hist-yueling-qingming-pentads|清明三候（虹始见）]] · [[02_topics/climate|气候维度]]

## 待人工确认

- 数据帝统计的原始数据集与逐年数值；江南春雨的环流成因表述是否引入中国气象局专题稿。

## 修改记录

- 2026-09-16（建卡）：双机构直读（中国天气网+非遗网）建立；命题严格限定在统计口径与江南/北方两域，未做全国性断言。
