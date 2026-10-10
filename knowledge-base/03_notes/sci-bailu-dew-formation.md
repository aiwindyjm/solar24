---
schema_version: '0.1.0'
id: 'sci-bailu-dew-formation'
type: 'ScientificFact'
title: '露的形成机制：夜间辐射冷却至露点以下凝结；白露时节昼夜温差拉大'
solar_terms: ['bailu']
season: 'autumn'
dimensions: ['climate', 'scientific-interpretation', 'agriculture']
region: ['露的形成机制为通用气象学（与地域无关）；"白露时节温差拉大"的表述锚定中国中纬度经验']
period: '现代气象学口径；世界气象组织20世纪60年代给出露的正式定义（据科普中国稿转述）'
language: 'zh-CN'
status: 'approved'
epistemic: 'scientific-explanation'
confidence: 'high'
risk_level: 'medium'
impact_level: 'term'
contested: false
source_ids:
  ['source-kpzg-dew-formation', 'source-weathercn-tianjin-lushuang', 'source-xinhua-bailu-2022', 'source-ihchina-bailu-feature']
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
    'statement': '露是水汽凝结物而非降水：晴朗微风或无风的夜晚，地面物体因辐射冷却降温，贴近其表面的空气随之降温至露点温度以下，多余水汽在0°C以上凝结成附着于物体表面的微小水滴，日出后随升温蒸发消失。白露节气前后，中国多数地区夏季风被冬季风取代、冷空气南下、夜间晴朗少云地面辐射散热加快，昼夜温差明显拉大，清晨易见露——这是以"露"命名该节气的气象学基础。',
    'exceptions': [
      '"白露是昼夜温差最大的节气"为新华社2022稿独家表述，本轮未见第二独立直读源，仅按单源媒体命题登记，不并入主命题',
      '非遗网"白天温度虽然可达三十度以上，可是夜晚会下降到二十几度甚至更低，温差相当大"为2017年稿件概述级描述，无站点与统计数据支撑',
      '露对干旱地区作物的水分意义（科普中国"我国北方的夏季"段）是定性科普描述，非定量农学结论',
    ],
  }
ai_review:
  {
    'reviewer_model': 'Solar24 AI (GLM-5.3) · 拟审',
    'reviewed_at': '2026-09-25',
    'decision': 'approve',
    'findings': [],
    'notes': '路由=medium/A/独立4；机器七查+四审校persona交叉：无阻塞发现',
  }
---

# 露的形成机制与白露时节的温差

## 研究问题

"白露"这个名字对应的自然现象——露——在现代气象学中如何解释？为什么这个节气以露为名？

## 证据

- **已直接读取**：科普中国（人民网）露形成专文（[[04_sources/source-kpzg-dew-formation|source-kpzg-dew-formation]]）："露并不是从天空中降下来的……在0°C以上，空气因冷却而达到水汽饱和时的温度叫做'露点温度'。在温暖季节里，夜间地面物体强烈辐射冷却的时候，与物体表面相接触的空气温度下降，在它降到'露点'以后就有多余的水汽析出……这些多余的水汽就凝结成水滴附着在地面物体上，这就是露。""露和霜一样，也大都出现于天气晴朗、无风或微风的夜晚。""露一般在夜间形成，日出以后，温度升高，露就蒸发消失了。"
- **已直接读取**：中国天气网天津站（[[04_sources/source-weathercn-tianjin-lushuang|source-weathercn-tianjin-lushuang]]）："傍晚或夜间，地面或地物由于辐射冷却，使贴近地表面的空气层也随之降温，当其温度降到露点以下，空气中水汽含量过饱和时……如果此时的露点温度在0℃以上，在地面或地物上就出现微小的水滴。"（并给出露/霜的0°C分界：露点高于冰点、霜点低于冰点）
- **已直接读取**：新华社2022白露稿（[[04_sources/source-xinhua-bailu-2022|source-xinhua-bailu-2022]]）解释白露温差成因："夏季风逐步被冬季风所代替，冷空气'转守为攻'，开始南下频繁，加之太阳直射地面位置逐渐南移，北半球日照时间变短，日照强度减弱，夜间常晴朗少云，地面辐射散热加快，人们会明显感觉到早晚温差在加大。"
- **已直接读取**：非遗网白露专题温差段（[[04_sources/source-ihchina-bailu-feature|source-ihchina-bailu-feature]]）："白天温度虽然可达三十度以上，可是夜晚会下降到二十几度甚至更低，温差相当大。"

## 解释（Scientific Interpretation）

命名与机制在此汇合：古人观察到夏秋之交清晨草木上开始出现白露并越结越厚（[[03_notes/hist-bailu-naming|命名卡]] 的"陰氣漸重，露凝而白"），现代气象学把同一现象解释为**夜间辐射冷却使贴地空气温度降到露点以下**。白露前后昼夜温差拉大的结构性原因（冷空气南下、日照减弱、夜间晴空辐射散热强）恰好同时满足成露的三条件——晴夜、微风、水汽充足——所以露从"偶见"变成"常态"，节气名与物候观察在这里对上了。露与霜的分界是露点是否低于0°C：同一机制下温度更低即凝华为霜（"白露为霜"的诗句物候感知见 [[03_notes/lit-shijing-jianjia|蒹葭卡]] 的解释层标注）。

## 适用条件与待核验

- 待核验：露水对作物的生态水分贡献的定量研究（科普中国仅定性提及北方夏季干旱时叶片夜间靠露恢复）。
- 待核验："白露=昼夜温差最大节气"的气候统计依据（需国家气候中心数据或气象局专题稿第二源）。
- 地域提醒：机制全球通用，但"白露时节见露"的日常经验以中纬度地区为限；热带与高纬不必然。

## 关联

[[01_terms/15_白露|白露索引]] · [[03_notes/hist-bailu-naming|白露的命名]] · [[03_notes/trad-bailu-nongshi|白露农事]] · [[03_notes/lit-shijing-jianjia|蒹葭]] · [[02_topics/climate|气候维度]]

## 待人工确认

- "昼夜温差最大的节气"单源命题的处置（找第二机构源或降格为线索）。
- 中国物候观测网晨露观测数据是否存在（古典"白露降"与现代观测对照）。

## 修改记录

- 2026-09-16（第一轮）：建卡。机制命题由科普中国+中国天气网两个独立机构直读支撑；节气温差段由新华社+非遗网直读支撑；"温差最大"单源表述降格至 exceptions。
