# Routing Output Schema（v1.0）

路由引擎 `workflows/route.ts` 的输出结构。机器可执行，改动需过 `tests/research/routing.test.ts`。

## Assessment

```ts
interface Assessment {
  id: string;            // 知识卡 ID
  type: string;          // KnowledgeNote type
  impact: 'system' | 'term' | 'regional' | 'creative' | 'global';
  risk: 'low' | 'medium' | 'high';
  evidenceTier: 'A' | 'B' | 'C' | 'D';   // A≥5分 B≥3 C≥1 D≤0（见 Source 计分模型）
  independence: number;                   // 直读来源的不同发布方数
  route: 'auto-candidate' | 'human-review-required' | 'needs-research' | 'reject' | 'not-routed';
  findings: Finding[];
}
interface Finding {
  code: string;
  severity: 'blocker' | 'major' | 'minor' | 'info';
  message: string;
}
```

## 裁决优先级

`reject` > `needs-research` > `human-review-required` > `auto-candidate`。
非知识类型（Source/SolarTerm/ResearchNote/创意三类型）→ `not-routed`（创意层走 Experience Gate，不走证据路由）。

## Finding 代码表

| code | severity | 触发条件 | 对应异常类 |
|---|---|---|---|
| no-source | blocker | claim 类无任何来源 | 无来源Claim |
| epistemic-confidence-conflict | blocker→reject | unverified 却标高置信 | AI越权断言 |
| legend-as-fact | blocker→reject | 传说内容标 fact | 传说变事实 |
| excerpt-as-read | blocker→reject | search-excerpt 却标已核验 | 摘要冒充原文 |
| insufficient-evidence | blocker | 证据分≤0（全线索级） | 弱来源 |
| weak-source-low-confidence | blocker | C档+低置信占位卡 | 弱来源 |
| fake-cross-check | major | 多来源同发布方却标 high | 假交叉验证 |
| evidence-below-confidence | major | high 需 A档+独立×2 / medium 需 ≥B | 置信虚高 |
| pending-primary-source | major | 例外中含"未读/待人工核读" | 一手来源未读 |
| national-claim-on-regional-note | major | 地域卡含全国措辞 | 全国/地域泛化 |
| regional-evidence-national-claim | major | 来源全地方、断言全国 | 地域泛化 |
| interpretation-as-fact | major | fact 卡含"象征/寓意"类措辞 | 解释冒充事实 |
| modern-concept-in-historical-claim | major | 历史卡用黄经等现代概念 | 科学倒灌 |
| modern-as-ancient | major | 传统卡"自古如此"式断言（带否定守卫） | 现代冒充古代 |
| contested-open | major | contested=true | 历史争议 |
| assertion-above-evidence | major | 例外留待核验却标 high | AI补全 |
| shared-duplicate | major | 节气卡复制 shared 命题 | 共享重复 |
| global-candidate-hold | info | GlobalExpression=candidate | 跨文化候选 |
| global-missing-comparison | major | Similarity/Difference/Relationship 缺失 | 强行对应 |
| global-forced-correspondence | major | 未否定的"对应/等同"表述（含否定剥离） | 强行对应 |
| explanation-gated | major | 解释卡或支撑卡未 approved | 解释越权发布 |
| unsupported-distribution | major/minor | 分布断言无同域同分句背书 | 解释无据（v1.2：分句级共现+同域关键词） |
| modern-spread-over-historical-scope | major/minor | 现代传播措辞超出传统卡历史范围 | 时代混淆 |
| not-routed | info | 非知识声明类型 | — |

## Source 计分模型

```
score = authority[source_type] + access_score[access] + verification_score[verification]
authority: historical=3 scientific=3 institutional=3 fieldwork=2 cultural=1 personal-observation=0
access:    direct-read=+1 search-excerpt=-1
verification: human-verified=+2 cross-checked=+1 unverified=0
tier: ≥5→A  ≥3→B  ≥1→C  ≤0→D
independence = |{ publisher | host } over direct-read sources|
```
