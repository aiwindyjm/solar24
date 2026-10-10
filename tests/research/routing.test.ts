import { describe, expect, it } from 'vitest';
import { KnowledgeSchema, type KnowledgeNote } from '../../packages/protocol/src/index.js';
import { assess } from '../../skills/solar24-cultural-research/workflows/route.js';

/**
 * Solar24 Cultural Research Skill — 回归测试（8 个固定 Case）。
 * 修改路由/审计规则时这些测试不得退化（SKILL.md 修改规则）。
 */

const base = {
  schema_version: '0.1.0',
  title: '测试卡',
  solar_terms: ['lichun'],
  season: null as unknown,
  dimensions: ['history'],
  region: [] as string[],
  period: null as unknown,
  language: 'zh-CN',
  status: 'draft',
  epistemic: 'fact',
  confidence: 'low',
  contested: false,
  source_ids: [] as string[],
  author: 'test',
  created: '2026-09-16',
  updated: '2026-09-16',
  human_review: null,
};

function claimNote(o: Record<string, unknown>): KnowledgeNote {
  return KnowledgeSchema.parse({ ...base, id: 'note-1', type: 'CulturalFact', ...o });
}

function sourceNote(id: string, o: Record<string, unknown>): KnowledgeNote {
  return KnowledgeSchema.parse({
    ...base,
    id,
    type: 'Source',
    solar_terms: [],
    dimensions: ['references'],
    epistemic: 'unverified',
    source: {
      id,
      title: '测试来源',
      authors: ['甲'],
      publisher: '测试出版社',
      published: null,
      url: 'https://example.org/' + id,
      citation: '测试引用',
      source_type: 'institutional',
      access: 'direct-read',
      accessed: '2026-09-16',
      original_excerpt: '原文',
      locator: '第1段',
      ai_summary: '',
      rights: 'unknown',
      verification: 'unverified',
      ...o,
    },
  });
}

function run(note: KnowledgeNote, extra: KnowledgeNote[] = []) {
  const all = [note, ...extra];
  const byId = new Map(all.map((n) => [n.id, n]));
  return assess(note, byId, all);
}

const strongSourceA = sourceNote('src-a', { publisher: '机构甲' });
const strongSourceB = sourceNote('src-b', { publisher: '机构乙' });
// institutional(3) + direct-read(1) + cross-checked(1) = 5 分 → A 档
const crossChecked = { verification: 'cross-checked' } as const;

describe('Case 01 正确事实 → auto-candidate', () => {
  it('双独立机构直读+交叉核验，无重大发现', () => {
    const n = claimNote({
      claim: { statement: '某地县志记载立春日迎春。', exceptions: [] },
      source_ids: ['src-a', 'src-b'],
      confidence: 'medium',
    });
    const a = run(n, [
      { ...strongSourceA, source: { ...strongSourceA.source!, ...crossChecked } },
      { ...strongSourceB, source: { ...strongSourceB.source!, ...crossChecked } },
    ]);
    expect(a.evidenceTier).toBe('A');
    expect(a.independence).toBe(2);
    expect(a.route).toBe('auto-candidate');
  });
});

describe('Case 02 地域泛化 → human-review-required', () => {
  it('地域卡出现全国性表述', () => {
    const n = claimNote({
      type: 'RegionalExpression',
      claim: { statement: '中国人在立春都会举行鞭春牛仪式。', exceptions: [] },
      source_ids: ['src-a', 'src-b'],
      confidence: 'medium',
    });
    const a = run(n, [strongSourceA, strongSourceB]);
    expect(a.findings.map((f) => f.code)).toContain('national-claim-on-regional-note');
    expect(a.route).toBe('human-review-required');
  });
});

describe('Case 03 历史争议 → human-review-required', () => {
  it('contested 未解决不得自动通过', () => {
    const n = claimNote({
      claim: { statement: '某节气名称的起源存在 A/B 两说。', exceptions: [] },
      contested: true,
      source_ids: ['src-a'],
      confidence: 'medium',
    });
    const a = run(n, [{ ...strongSourceA, source: { ...strongSourceA.source!, ...crossChecked } }]);
    expect(a.findings.map((f) => f.code)).toContain('contested-open');
    expect(a.route).toBe('human-review-required');
  });
});

describe('Case 04 无来源 Claim → needs-research', () => {
  it('没有任何来源的 claim 卡被拦截', () => {
    const n = claimNote({
      epistemic: 'unverified',
      claim: { statement: '待核验命题：某说未读来源。', exceptions: [] },
    });
    const a = run(n);
    expect(a.findings.map((f) => f.code)).toContain('no-source');
    expect(a.route).toBe('needs-research');
  });
});

describe('Case 05 AI解释冒充事实 → human-review-required', () => {
  it('fact 卡中的象征性措辞被识别', () => {
    const n = claimNote({
      claim: { statement: '咬春象征着中国人对丰年的期盼。', exceptions: [] },
      source_ids: ['src-a', 'src-b'],
      confidence: 'medium',
    });
    const a = run(n, [strongSourceA, strongSourceB]);
    expect(a.findings.map((f) => f.code)).toContain('interpretation-as-fact');
    expect(a.route).toBe('human-review-required');
  });
});

describe('Case 06 GlobalExpression 强行对应 → human-review-required', () => {
  it('未否定的"完全对应"表述被拦截且保持 candidate', () => {
    const n = KnowledgeSchema.parse({
      ...base,
      id: 'glob-test',
      type: 'GlobalExpression',
      solar_terms: ['lichun'],
      epistemic: 'unverified',
      confidence: 'low',
      source_ids: ['src-a'],
      claim: { statement: '待核验：某国节日与立春的关系。', exceptions: [] },
      expression: {
        schema_version: '0.1.0',
        id: 'glob-test',
        editorial_layer: 'community',
        term_ids: ['lichun'],
        title: { 'zh-CN': '测试表达', en: 'Test' },
        location: '某地',
        country: '某国',
        region: '某区域',
        culture: '某文化',
        creators: [{ name: '社区', url: null, role: 'creator' }],
        time_period: '古代至今',
        natural_context: '冬春之交',
        cultural_expression: '某仪式',
        relationship_to_solar_term: 'nearby-time',
        relationship_reason: '时间相近',
        similarity: '与立春完全对应',
        difference: '仪式内容不同',
        source_ids: [],
        license: 'pending',
        media_types: ['text'],
        asset_ids: [],
        consent: 'pending',
        status: 'candidate',
        featured: null,
      },
    });
    const a = run(n, [strongSourceA]);
    expect(a.findings.map((f) => f.code)).toContain('global-forced-correspondence');
    expect(a.findings.map((f) => f.code)).toContain('global-candidate-hold');
    expect(a.route).toBe('human-review-required');
  });
});

describe('Case 07 Shared Knowledge 重复 → human-review-required', () => {
  it('节气卡复制 shared 命题被识别', () => {
    const shared = claimNote({
      id: 'shared-1',
      solar_terms: [],
      claim: { statement: '二十四节气形成于中国黄河流域的观察经验并通行全国。', exceptions: [] },
      source_ids: ['src-a'],
      confidence: 'medium',
    });
    const dup = claimNote({
      id: 'term-dup',
      solar_terms: ['lichun'],
      claim: { statement: '二十四节气形成于中国黄河流域的观察经验并通行全国。', exceptions: [] },
      source_ids: ['src-a'],
      confidence: 'medium',
    });
    const a = run(dup, [shared, strongSourceA]);
    expect(a.findings.map((f) => f.code)).toContain('shared-duplicate');
    expect(a.route).toBe('human-review-required');
  });
});

describe('Case 08 Unsupported HumanExplanation → human-review-required', () => {
  it('解释层的分布断言无同域背书且被发布门拦截', () => {
    const support = claimNote({
      id: 'support-1',
      type: 'ScientificFact',
      epistemic: 'scientific-explanation',
      dimensions: ['climate'],
      claim: { statement: '气候学以候温定义四季，入春标准为连续五天≥10℃。', exceptions: [] },
      source_ids: ['src-a'],
      confidence: 'medium',
    });
    const ex = KnowledgeSchema.parse({
      ...base,
      id: 'ex-test',
      type: 'HumanExplanation',
      epistemic: 'interpretation',
      solar_terms: ['lichun'],
      explanation: {
        audience: '全球读者',
        one_sentence: { 'zh-CN': '某节气是天文时刻。', en: 'A solar term is an astronomical moment.' },
        summary: {
          'zh-CN': '某节气不是天气转折：此时全国大部仍然寒冷。',
          en: 'It is not a weather turn.',
        },
        expanded: { 'zh-CN': '展开。', en: 'Expanded.' },
        why_it_matters: { 'zh-CN': '农时重要。', en: 'Farm timing matters.' },
        supporting_knowledge_ids: ['support-1'],
        limitations: [],
      },
    });
    const a = run(ex, [support, strongSourceA]);
    expect(a.findings.map((f) => f.code)).toContain('unsupported-distribution');
    expect(a.findings.map((f) => f.code)).toContain('explanation-gated');
    expect(a.route).toBe('human-review-required');
  });
});

// 2026-09-17 质量修正 F04 新增：复现大寒解释卡真实问题（EN "only some southern regions"
// 比中文层更绝对；why_it_matters 层此前不在检查范围）。
describe('Case 09 translation-strengthening → human-review-required', () => {
  it('英文层 only/always 而中文层无对应绝对化措辞', () => {
    const support = claimNote({
      id: 'support-1',
      type: 'ScientificFact',
      epistemic: 'scientific-explanation',
      dimensions: ['climate'],
      claim: { statement: '统计口径：部分区域冷在大寒。', exceptions: [] },
      source_ids: ['src-a'],
      confidence: 'medium',
    });
    const ex = KnowledgeSchema.parse({
      ...base,
      id: 'ex-en-strong',
      type: 'HumanExplanation',
      epistemic: 'interpretation',
      solar_terms: ['dahan'],
      explanation: {
        audience: '全球读者',
        one_sentence: { 'zh-CN': '大寒是最后一个节气。', en: 'Dahan is the last solar term.' },
        summary: {
          'zh-CN': '部分区域在大寒达到全年最低。',
          en: 'Only some southern regions are coldest at Dahan.',
        },
        expanded: { 'zh-CN': '展开。', en: 'Pending translation review.' },
        why_it_matters: { 'zh-CN': '命名与数据错位。', en: 'Names and data diverge.' },
        supporting_knowledge_ids: ['support-1'],
        limitations: [],
      },
    });
    const a = run(ex, [support, strongSourceA]);
    expect(a.findings.map((f) => f.code)).toContain('translation-strengthening');
    expect(a.route).toBe('human-review-required');
  });
});

describe('Case 10 why_it_matters 分布断言 → human-review-required', () => {
  it('why_it_matters 层的无背书分布断言被识别（此前该层不在检查范围）', () => {
    const support = claimNote({
      id: 'support-1',
      type: 'Tradition',
      epistemic: 'tradition',
      dimensions: ['customs'],
      claim: { statement: '清代北京有某习俗。', exceptions: [] },
      source_ids: ['src-a'],
      confidence: 'medium',
    });
    const ex = KnowledgeSchema.parse({
      ...base,
      id: 'ex-why-dist',
      type: 'HumanExplanation',
      epistemic: 'interpretation',
      solar_terms: ['lichun'],
      explanation: {
        audience: '全球读者',
        one_sentence: { 'zh-CN': '某节气是天文时刻。', en: 'A solar term.' },
        summary: { 'zh-CN': '简述。', en: 'Brief.' },
        expanded: { 'zh-CN': '展开。', en: 'Pending translation review.' },
        why_it_matters: {
          'zh-CN': '这个习俗至今在全国各地普遍流行。',
          en: 'The custom is practiced everywhere today.',
        },
        supporting_knowledge_ids: ['support-1'],
        limitations: [],
      },
    });
    const a = run(ex, [support, strongSourceA]);
    expect(a.findings.map((f) => f.code)).toContain('unsupported-distribution');
    expect(a.route).toBe('human-review-required');
  });
});

// 2026-09-18 审计 R01 真实漏检复现：中文已收窄为"唯一法定节假日"，
// 英文仍断言"the only one that grew into a major traditional festival"——
// 两层各有唯一性量词，旧规则因此静默。机器不能判定命题是否同构，只能强制人工对齐核对。
describe('Case 11 双语唯一性断言 → bilingual-assertion-alignment', () => {
  it('中英双层同时出现唯一性断言时列入人工对齐核对', () => {
    const support = claimNote({
      id: 'support-1',
      type: 'CulturalFact',
      epistemic: 'fact',
      dimensions: ['history'],
      claim: { statement: '2008年起某节气成为中国内地法定节假日。', exceptions: [] },
      source_ids: ['src-a'],
      confidence: 'medium',
    });
    const ex = KnowledgeSchema.parse({
      ...base,
      id: 'ex-unique-align',
      type: 'HumanExplanation',
      epistemic: 'interpretation',
      solar_terms: ['qingming'],
      explanation: {
        audience: '全球读者',
        one_sentence: {
          'zh-CN': '某节气是唯一列为法定节假日的成员（中国内地，2008年起）。',
          en: 'It is the only one of the 24 solar terms that also grew into a major traditional festival.',
        },
        summary: { 'zh-CN': '简述。', en: 'Brief.' },
        expanded: { 'zh-CN': '展开。', en: 'Pending translation review.' },
        why_it_matters: { 'zh-CN': '双重身份。', en: 'Double identity.' },
        supporting_knowledge_ids: ['support-1'],
        limitations: [],
      },
    });
    const a = run(ex, [support, strongSourceA]);
    expect(a.findings.map((f) => f.code)).toContain('bilingual-assertion-alignment');
  });
  it('仅在单语言出现唯一性断言时不触发（避免噪声）', () => {
    const support = claimNote({
      id: 'support-1',
      type: 'CulturalFact',
      epistemic: 'fact',
      dimensions: ['history'],
      claim: { statement: '2008年起某节气成为中国内地法定节假日。', exceptions: [] },
      source_ids: ['src-a'],
      confidence: 'medium',
    });
    const ex = KnowledgeSchema.parse({
      ...base,
      id: 'ex-unique-align-2',
      type: 'HumanExplanation',
      epistemic: 'interpretation',
      solar_terms: ['qingming'],
      explanation: {
        audience: '全球读者',
        one_sentence: {
          'zh-CN': '某节气是唯一列为法定节假日的成员（中国内地，2008年起）。',
          en: 'It is a statutory public holiday in mainland China since 2008.',
        },
        summary: { 'zh-CN': '简述。', en: 'Brief.' },
        expanded: { 'zh-CN': '展开。', en: 'Pending translation review.' },
        why_it_matters: { 'zh-CN': '双重身份。', en: 'Double identity.' },
        supporting_knowledge_ids: ['support-1'],
        limitations: [],
      },
    });
    const a = run(ex, [support, strongSourceA]);
    expect(a.findings.map((f) => f.code)).not.toContain('bilingual-assertion-alignment');
  });
});

// 2026-09-18 审计 R03 真实漏检复现：小满三候卡正文已写"独立证据方仍为 1"（原典+机构转写），
// 引擎却按发布方计数返回 independence 2 / auto-candidate。机器无法识别转写关系本身，
// 但可以识别卡内 YAML 声明的同源标记并保守送审。
describe('Case 12 声明同源证据结构的 high 卡 → same-source-evidence-declared 保守送审', () => {
  it('exceptions 含转写核对声明时不再 auto-candidate', () => {
    const srcWs = sourceNote('src-ws', { publisher: '维基文库', source_type: 'historical' });
    const srcIh = sourceNote('src-ih', { publisher: '非遗网', source_type: 'institutional' });
    const n = claimNote({
      type: 'HistoricalRecord',
      claim: {
        statement: '《月令七十二候集解》记某节气三候。',
        exceptions: ['证据结构为单一原典直读＋同文本转写核对（非独立来源互证）'],
      },
      source_ids: ['src-ws', 'src-ih'],
      confidence: 'high',
    });
    const a = run(n, [srcWs, srcIh]);
    expect(a.independence).toBe(2); // 发布方多样性仍为 2——它不是证据独立性
    expect(a.findings.map((f) => f.code)).toContain('same-source-evidence-declared');
    expect(a.route).toBe('human-review-required'); // 不再 auto-candidate
  });
  it('无同源声明的正常双源卡不受影响', () => {
    const n = claimNote({
      claim: { statement: '某地县志记载立春日迎春。', exceptions: [] },
      source_ids: ['src-a', 'src-b'],
      confidence: 'medium',
    });
    const a = run(n, [
      { ...strongSourceA, source: { ...strongSourceA.source!, ...crossChecked } },
      { ...strongSourceB, source: { ...strongSourceB.source!, ...crossChecked } },
    ]);
    expect(a.findings.map((f) => f.code)).not.toContain('same-source-evidence-declared');
    expect(a.route).toBe('auto-candidate');
  });
});
