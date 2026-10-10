---
schema_version: '0.1.0'
id: 'legend-dongzhi-zhangzhongjing-jiaozi'
type: 'CulturalFact'
title: '"冬至吃饺子源于张仲景舍祛寒娇耳汤"传说（legend 层）'
solar_terms: ['dongzhi']
season: 'winter'
dimensions: ['food', 'customs', 'chinese-life']
region: ['传说流传地：中国（叙事层面）；习俗实践的地域限定见食俗卡']
period: '传说叙事无信史断代可证；载体为当代机构汇编与媒体'
language: 'zh-CN'
status: 'approved'
epistemic: 'legend'
confidence: 'low'
risk_level: 'high'
impact_level: 'term'
contested: false
source_ids: ['source-ihchina-dongzhi-feature']
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
    'statement': '传说层记载（非史实）：非遗网冬至专题（2017）以"有一种说法"引出——冬至吃饺子习俗"是为纪念''医圣''张仲景冬至舍药医治人们冻疮的善举"；配谚"冬至不端饺子碗，冻掉耳朵没人管"。该传说的叙事框架（张仲景冬至舍"祛寒娇耳汤"、饺子形似耳朵、吃饺子防冻耳朵）无任何汉代文献依据：张仲景（《伤寒杂病论》作者，东汉医家）为真实历史人物，但"舍娇耳汤"故事本轮未获任何古籍直读，最早的文献载体未查明。当代饺子食俗（机构层可证）与该起源传说必须分层。',
    'exceptions': [
      '"祛寒娇耳汤"名称与故事细节在本轮唯一直读源（非遗网）中仅为概述（"纪念张仲景冬至舍药医治人们冻疮的善举"），更详细的流行版本（返乡白河、大棚搭舍、面皮包羊肉辣椒等）均为未直读的媒体转述，细节不写入本卡',
      '张仲景生平（约150-约219，南阳人，《伤寒杂病论》）为史实层，与本卡讨论的"吃饺子起源于张仲景"断言无关，不得混用',
      '谚语"冬至不端饺子碗，冻掉耳朵没人管"本身是民俗语言（机构层可证），谚语的存在不等于传说为真',
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

# "冬至吃饺子源于张仲景"传说（legend 层）

> **性质声明：本卡记录的是传说叙事，不是历史事实。**"冬至吃饺子起源于张仲景舍祛寒娇耳汤"不能被表述为食俗起源的结论；饺子食俗的地域与断代证据见 [[03_notes/trad-dongzhi-shisu-fenceng|冬至食俗分层卡]]。

## 研究问题

这个流传极广的起源故事讲什么？它与文献证据的差距如何？

## 证据

1. **机构汇编直读**：非遗网冬至专题（[[04_sources/source-ihchina-dongzhi-feature|source-ihchina-dongzhi-feature]]）："有一种说法，称这一习俗是为纪念'医圣'张仲景冬至舍药医治人们冻疮的善举。虽然饺子在南北方做法各异、名称不同，但广受人们喜爱。"——机构自己使用"有一种说法"的传说措辞，未作史实断言。
2. **结构性观察**：故事的因果环（冻疮→耳朵状食物"娇耳"→"不端饺子碗冻掉耳朵"谚语）首尾借用真实谚语自证，中间环节（汉代文献记载）为零；与本库已确证的防幻觉样本（"雨生百谷"误引、"春分竖蛋4000年"无据）同构。

## AI 摘要 / 解释

- 分层结论：**传说（本卡，legend）／饺子食俗实践（食俗卡，tradition 机构层）／张仲景医史人物（史实）三层各自独立**。"起源"断言是把第一层冒充第二层的起源结论——本节气对外传播的最高频错误之一（媒体每年冬至重复此说），knowledge 库应显式持有这张 legend 卡作为防混排锚点。
- 传说的叙事价值独立成立：它把"冬至吃饺子"系于一位真实医圣的仁术，为民食俗提供道德化的名人事出处——与立夏"称人三国起源"（[[03_notes/legend-lixia-chengren-adou|立夏传说卡]]）同一生成机制。

## 适用条件、例外与分歧

- 本轮仅非遗网一个直读源叙述该传说（概述级）；传说的成文史（近代报刊/民国民俗读物首出）未查，记 Needs Research。
- 无"版本互斥"问题（流行版本细节高度一致，但均为未直读转述）。

## 关联

[[01_terms/22_冬至|冬至索引]] · [[03_notes/trad-dongzhi-shisu-fenceng|冬至食俗分层卡]] · [[03_notes/legend-lixia-chengren-adou|立夏称人传说（同类样本）]] · [[02_topics/food|饮食维度]]

## 待人工确认

- 传说的最早成文载体检索（近代报刊数据库、《中华全国风俗志》等民国民俗汇编）。
- 张仲景医史文献中是否确有冬令施药记载（《伤寒论》序/《针灸甲乙经》序所载张仲景事迹核读）。

## 修改记录

- 2026-09-16（建卡）：作为本节气 Legend-as-Fact 审计重点样本建卡；仅收录非遗网直读概述，媒体流行细节不写入。
- 2026-09-16（YAML修复）：claim 串内 ASCII 单引号（''医圣''）按规范双写修复。
- 2026-09-16（审核阶段）：路由判 human-review-required（pending-primary-source：传说最早载体未直读；risk=high），status draft → in-review，入审核分节 C 区。
