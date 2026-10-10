/**
 * Solar24 Cultural Research Skill — Review Routing Engine v1.0
 *
 * 规则优先的审核路由器：输入知识库笔记，输出 auto-candidate /
 * human-review-required / needs-research / reject 四类路由与可解释的
 * findings。它不做文化判断，只执行 SKILL.md 中写成规则的机械检查。
 *
 * 路由结果不是 verified：auto-candidate 仅表示"未发现必须立即人工介入的问题"。
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';
import { KnowledgeSchema, type KnowledgeNote } from '../../../packages/protocol/src/index.js';

export type Route = 'auto-candidate' | 'human-review-required' | 'needs-research' | 'reject' | 'not-routed';
export type Severity = 'blocker' | 'major' | 'minor' | 'info';
export interface Finding {
  code: string;
  severity: Severity;
  message: string;
}
export interface Assessment {
  id: string;
  type: string;
  impact: 'system' | 'term' | 'regional' | 'creative' | 'global';
  risk: 'low' | 'medium' | 'high';
  evidenceTier: 'A' | 'B' | 'C' | 'D';
  independence: number;
  route: Route;
  findings: Finding[];
}

const CLAIM_TYPES = [
  'CulturalFact',
  'ScientificFact',
  'HistoricalRecord',
  'Tradition',
  'RegionalExpression',
];
const ROUTED_TYPES = [...CLAIM_TYPES, 'GlobalExpression', 'HumanExplanation'];

const AUTHORITY: Record<string, number> = {
  historical: 3,
  scientific: 3,
  institutional: 3,
  fieldwork: 2,
  cultural: 1,
  'personal-observation': 0,
};
const ACCESS_SCORE: Record<string, number> = { 'direct-read': 1, 'search-excerpt': -1 };
const VERIFICATION_SCORE: Record<string, number> = {
  'human-verified': 2,
  'cross-checked': 1,
  unverified: 0,
};

const NATIONAL = /全国|中国人|各地|全国性/;
const DIST_PHRASE = /大部分|大部|多数地区|全国|各地|普遍|更多地方|很多地方/;
const WEATHER_KEYWORD = /寒冷|温暖|气温|天气|降温|气候|冰霜/;
const SPREAD_PHRASE = /更多地方|各地|很多地方/;
const HISTORICAL_PERIOD = /清末|清代|明代|唐代|宋代|元代|古代/;
const LIVING_PERIOD = /当代|现代|至今|延续/;

export function sourceScore(s: { source_type: string; access: string; verification: string }): number {
  return (
    (AUTHORITY[s.source_type] ?? 0) +
    (ACCESS_SCORE[s.access] ?? 0) +
    (VERIFICATION_SCORE[s.verification] ?? 0)
  );
}

export function evidenceTier(scores: number[]): { tier: 'A' | 'B' | 'C' | 'D'; best: number } {
  const best = scores.length ? Math.max(...scores) : 0;
  const tier = best >= 5 ? 'A' : best >= 3 ? 'B' : best >= 1 ? 'C' : 'D';
  return { tier, best };
}

function host(url: string | null): string {
  if (!url) return '';
  return url.replace(/^https?:\/\//, '').split('/')[0];
}

function stripNegated(text: string): string {
  return text.replace(
    /(不是|并非|不构成|没有|无|不同于)[^。，；！？]{0,10}(对应|等同|等于|相同|同一个|同一|同源)/g,
    '',
  );
}

function sentences(text: string): string[] {
  return text
    .split(/[。；；;！!？?]/)
    .map((s) => s.trim())
    .filter((s) => s.length > 4);
}

function clauses(text: string): string[] {
  return text
    .split(/[，,；;。：:、]/)
    .map((c) => c.trim())
    .filter((c) => c.length > 2);
}

/**
 * 分布断言背书判定 v1.2（回放修正两次后的规则）：
 * 解释句中含分布短语的分句，必须有支撑卡命题中【同一分句】同时含
 * 分布短语与同域关键词（天气域 or 非天气域一致）。
 * 分句级共现可防"农业分布"给"气候分布"背书、以及关键词偶然共现。
 */
function distClauseBacked(sentence: string, supporting: KnowledgeNote[]): boolean {
  const distClauses = clauses(sentence).filter((c) => DIST_PHRASE.test(c));
  return distClauses.some((sc) => {
    const weather = WEATHER_KEYWORD.test(sc);
    return supporting.some((s) =>
      clauses(s.claim?.statement ?? '').some((cc) => DIST_PHRASE.test(cc) && WEATHER_KEYWORD.test(cc) === weather),
    );
  });
}

function deriveImpact(note: KnowledgeNote): Assessment['impact'] {
  if (note.impact_level) return note.impact_level;
  if (note.type === 'GlobalExpression') return 'global';
  if (['VisualAsset', 'AudioAsset', 'InteractionIdea'].includes(note.type)) return 'creative';
  if (note.type === 'RegionalExpression') return 'regional';
  if (note.solar_terms.length === 0 && CLAIM_TYPES.includes(note.type)) return 'system';
  if (note.claim?.statement && /二十四节气(整体|体系)|UNESCO|入选.*名录/.test(note.claim.statement))
    return 'system';
  return 'term';
}

export function assess(
  note: KnowledgeNote,
  byId: Map<string, KnowledgeNote>,
  allNotes: KnowledgeNote[],
): Assessment {
  const findings: Finding[] = [];
  const sources = note.source_ids
    .map((id) => byId.get(id))
    .filter((n): n is KnowledgeNote => !!n && n.type === 'Source' && !!n.source)
    .map((n) => n.source!);

  const scores = sources.map(sourceScore);
  const { tier } = evidenceTier(scores);
  const publishers = new Set(
    sources.filter((s) => s.access === 'direct-read').map((s) => s.publisher || host(s.url)),
  );
  publishers.delete('');
  const independence = publishers.size;

  const impact = deriveImpact(note);

  // 语义说明（2026-09-18 审计 R03）：independence 按直读来源的不同发布方（publisher/域名）计数，
  // 是"发布方多样性"的机器近似——同一原典在不同机构的转写会使它虚高；已声明同源结构的卡
  // 由 same-source-evidence-declared 规则保守送审。不得把该数值表述为"已确认的独立证据数"。

  const claimText = note.claim?.statement ?? '';
  const exceptions = note.claim?.exceptions ?? [];

  // ---- 派生风险等级（存储值优先） ----
  let risk: Assessment['risk'] = note.risk_level ?? 'low';
  if (!note.risk_level) {
    if (note.contested || impact === 'system' || impact === 'global') risk = 'high';
    else if (
      impact === 'regional' ||
      NATIONAL.test(claimText) ||
      exceptions.some((e) => /异文|版本差异|争议|分歧/.test(e))
    )
      risk = 'medium';
  }

  if (!ROUTED_TYPES.includes(note.type)) {
    return {
      id: note.id,
      type: note.type,
      impact,
      risk,
      evidenceTier: tier,
      independence,
      route: 'not-routed',
      findings: [{ code: 'not-routed', severity: 'info', message: '非知识声明类型，不进入证据路由。' }],
    };
  }

  // ---- 规则库 ----
  if (CLAIM_TYPES.includes(note.type) || note.type === 'GlobalExpression') {
    if (sources.length === 0) {
      findings.push({
        code: 'no-source',
        severity: 'blocker',
        message: 'claim 类笔记没有任何来源。',
      });
    }
    if (note.epistemic === 'unverified' && !['low', 'unknown'].includes(note.confidence)) {
      findings.push({
        code: 'epistemic-confidence-conflict',
        severity: 'blocker',
        message: 'epistemic=unverified 但 confidence 高于 low，属于 AI 断言越权。',
      });
    }
    if (
      note.type === 'GlobalExpression' &&
      (note.epistemic === 'fact' || note.epistemic === 'scientific-explanation') &&
      /传说|神话|民间故事/.test(claimText)
    ) {
      findings.push({
        code: 'legend-as-fact',
        severity: 'blocker',
        message: '传说/神话内容被标记为 fact。',
      });
    }
    if (sources.some((s) => s.access === 'search-excerpt' && s.verification !== 'unverified')) {
      findings.push({
        code: 'excerpt-as-read',
        severity: 'blocker',
        message: 'search-excerpt 来源却标记了 cross-checked/human-verified，疑似摘要冒充原文。',
      });
    }
    if (sources.length >= 2 && independence <= 1 && note.confidence === 'high') {
      findings.push({
        code: 'fake-cross-check',
        severity: 'major',
        message: '多个来源实为同一发布方（互相转载），不构成独立交叉验证，却标了 high。',
      });
    }
    if (tier === 'D') {
      findings.push({
        code: 'insufficient-evidence',
        severity: 'blocker',
        message: '没有正分证据来源（仅线索级或无来源）。',
      });
    } else if (tier === 'C' && note.confidence === 'low') {
      findings.push({
        code: 'weak-source-low-confidence',
        severity: 'blocker',
        message: '弱来源+低置信度的占位卡，应继续研究而非进入审核。',
      });
    }
    if (
      (note.confidence === 'medium' && tier === 'D') ||
      (note.confidence === 'high' && (tier !== 'A' || independence < 2))
    ) {
      findings.push({
        code: 'evidence-below-confidence',
        severity: 'major',
        message: `置信度 ${note.confidence} 高于证据支撑（tier ${tier}，独立直读方 ${independence}）。`,
      });
    }
    if (exceptions.some((e) => /未读|未直读|待人工核读|待核读/.test(e))) {
      findings.push({
        code: 'pending-primary-source',
        severity: 'major',
        message: '存在未直读的一手/标准来源（如国标正文），需人工核读后才能 verified。',
      });
    }
    if (note.type === 'RegionalExpression' && NATIONAL.test(claimText)) {
      findings.push({
        code: 'national-claim-on-regional-note',
        severity: 'major',
        message: '地域卡出现全国性表述（地域泛化）。',
      });
    }
    const regionalSourcesOnly =
      sources.length > 0 &&
      sources.every((s) => /省|市|县|州/.test((s as { locator?: string }).locator ?? '')) &&
      NATIONAL.test(claimText);
    if (regionalSourcesOnly) {
      findings.push({
        code: 'regional-evidence-national-claim',
        severity: 'major',
        message: '全部来源只覆盖地方，claim 却做全国断言。',
      });
    }
    if (
      (note.epistemic === 'fact' || note.epistemic === 'scientific-explanation') &&
      /象征着|寓意|体现着|代表着|表达了/.test(claimText)
    ) {
      findings.push({
        code: 'interpretation-as-fact',
        severity: 'major',
        message: '解释性措辞出现在 fact/scientific-explanation 命题中。',
      });
    }
    if (note.type === 'HistoricalRecord' && /黄经|气象学定义|天文学定义/.test(claimText)) {
      findings.push({
        code: 'modern-concept-in-historical-claim',
        severity: 'major',
        message: '历史记载卡使用了现代科学概念（现代知识倒灌）。',
      });
    }
    if (note.type === 'Tradition' && /自古|古已有之/.test(claimText) && !/缺乏|没有|无文本|不支持|警示|辨析/.test(claimText)) {
      findings.push({
        code: 'modern-as-ancient',
        severity: 'major',
        message: '传统卡使用"自古/古已有之"式断代断言，需逐环文献。',
      });
    }
    if (note.contested) {
      findings.push({
        code: 'contested-open',
        severity: 'major',
        message: 'contested=true：存在未解决分歧，必须人工裁决。',
      });
    }
    if (exceptions.some((e) => /待核验|待验证|待研究/.test(e)) && note.confidence === 'high') {
      findings.push({
        code: 'assertion-above-evidence',
        severity: 'major',
        message: '例外中留有待核验项，但置信度标到 high。',
      });
    }
    // 2026-09-18（审计 R03）：已声明的同源/转写证据结构——independence 只反映发布方多样性，
    // 不等于已确认的证据独立性。对高置信卡保守升级送审，避免"auto-candidate + independence 2"
    // 掩盖"单一原典 + 机构转写核对"的真实结构。
    if (
      exceptions.some((e) => /转写核对|非独立.{0,6}互证|同一历法传统的另一传承渠道|同源证据结构已声明/.test(e))
    ) {
      findings.push({
        code: 'same-source-evidence-declared',
        severity: note.confidence === 'high' ? 'major' : 'minor',
        message: `卡内已声明同源/转写证据结构：independence(${independence}) 仅为发布方多样性，证据独立性须人工判定。`,
      });
    }
    // 共享知识重复：非 shared 笔记复制了 shared 命题
    if (note.solar_terms.length > 0 && claimText.length > 12) {
      const dup = allNotes.find(
        (n) =>
          n.id !== note.id &&
          n.solar_terms.length === 0 &&
          CLAIM_TYPES.includes(n.type) &&
          n.claim?.statement &&
          (n.claim.statement === claimText ||
            (claimText.includes(n.claim.statement.slice(0, 24)) && n.claim.statement.length > 24)),
      );
      if (dup) {
        findings.push({
          code: 'shared-duplicate',
          severity: 'major',
          message: `命题与共享知识 ${dup.id} 重复，应引用 02_shared/ 而非复制。`,
        });
      }
    }
  }

  if (note.type === 'GlobalExpression' && note.expression) {
    const ex = note.expression;
    if (ex.status === 'candidate') {
      findings.push({
        code: 'global-candidate-hold',
        severity: 'info',
        message: 'Global Expression 处于 candidate：不构成已核实的文化对应。',
      });
    }
    if (
      !ex.similarity.trim() ||
      !ex.difference.trim() ||
      !ex.relationship_reason.trim() ||
      /待填写/.test(ex.similarity + ex.difference + ex.relationship_reason)
    ) {
      findings.push({
        code: 'global-missing-comparison',
        severity: 'major',
        message: 'Similarity / Difference / Relationship 三要素不完整。',
      });
    }
    const forced = stripNegated(`${ex.similarity}${ex.difference}${ex.relationship_reason}`);
    if (/完全对应|等同|等于|相同|同一个节日|同源发明/.test(forced)) {
      findings.push({
        code: 'global-forced-correspondence',
        severity: 'major',
        message: '全球表达出现未否定的"对应/等同"式强行对应表述。',
      });
    }
  }

  if (note.type === 'HumanExplanation' && note.explanation) {
    const supporting = note.explanation.supporting_knowledge_ids
      .map((id) => byId.get(id))
      .filter((n): n is KnowledgeNote => !!n);
    if (supporting.some((s) => s.status !== 'approved') || note.status !== 'approved') {
      findings.push({
        code: 'explanation-gated',
        severity: 'major',
        message: '支撑卡或解释卡未 approved：按 Content Gate 禁止发布（Knowledge verified ≠ Explanation verified）。',
      });
    }
    const layers: Array<[string, string, Severity]> = [
      [note.explanation.one_sentence['zh-CN'], note.explanation.one_sentence.en, 'major'],
      [note.explanation.summary['zh-CN'], note.explanation.summary.en, 'major'],
      [note.explanation.expanded['zh-CN'], note.explanation.expanded.en, 'minor'],
      // why_it_matters 2026-09-17 纳入（审计 F04：该层此前不在检查范围）
      [note.explanation.why_it_matters['zh-CN'], note.explanation.why_it_matters.en, 'major'],
    ];
    // 2026-09-17（审计 F04）：英文层比中文层更绝对的措辞检测（translation-strengthening）
    const zhStrong = /只有|总是|所有|唯一|到处|全国|各地|普遍/;
    const enStrong = /\b(only|always|everywhere|throughout China|all of China)\b/i;
    for (const [text, en, severity] of layers) {
      for (const sentence of sentences(text)) {
        if (DIST_PHRASE.test(sentence)) {
          if (!distClauseBacked(sentence, supporting)) {
            findings.push({
              code: 'unsupported-distribution',
              severity,
              message: `解释句含分布性断言但无同域支撑卡命题背书："${sentence.slice(0, 40)}…"`,
            });
          }
        }
        if (SPREAD_PHRASE.test(sentence)) {
          const historicalOnly = supporting.some(
            (s) =>
              s.type === 'Tradition' &&
              HISTORICAL_PERIOD.test(s.period ?? '') &&
              !LIVING_PERIOD.test(s.period ?? ''),
          );
          if (historicalOnly) {
            findings.push({
              code: 'modern-spread-over-historical-scope',
              severity,
              message: `解释句宣称现代普遍实践，但支撑传统卡仅确证历史时期："${sentence.slice(0, 40)}…"`,
            });
          }
        }
      }
      if (enStrong.test(en) && !zhStrong.test(text)) {
        findings.push({
          code: 'translation-strengthening',
          severity,
          message: `英文层出现中文层没有的绝对化措辞（only/always/everywhere 等），中英语义强度不一致："${en.slice(0, 60)}…"`,
        });
      }
      // 2026-09-18（审计 R01）：双语文本同时出现唯一性断言时，机器无法判定两者限定的是
      // 同一命题（清明漏检的真实形态：中文已收窄为法定节假日、英文仍是历史排他），强制列入人工对齐核对。
      const zhUnique = /唯一|只有/;
      const enUnique = /\b(only|sole|the one and only)\b/i;
      if (zhUnique.test(text) && enUnique.test(en)) {
        findings.push({
          code: 'bilingual-assertion-alignment',
          severity: 'minor',
          message: `中英双层同时出现唯一性断言——须人工核对两语言限定的是同一命题（含地域/时间/管辖区范围）："${en.slice(0, 50)}…"`,
        });
      }
    }
  }

  // ---- 路由裁决（优先级：reject > needs-research > human-review > auto） ----
  const blockerCodes = findings.filter((f) => f.severity === 'blocker').map((f) => f.code);
  const rejectCodes = ['epistemic-confidence-conflict', 'legend-as-fact', 'excerpt-as-read'];
  let route: Route;
  if (blockerCodes.some((c) => rejectCodes.includes(c))) route = 'reject';
  else if (findings.some((f) => f.severity === 'blocker')) route = 'needs-research';
  else if (
    findings.some((f) => f.severity === 'major') ||
    risk === 'high' ||
    note.type === 'HumanExplanation' ||
    note.type === 'GlobalExpression'
  )
    route = 'human-review-required';
  else route = 'auto-candidate';

  return { id: note.id, type: note.type, impact, risk, evidenceTier: tier, independence, route, findings };
}

// ---------------- CLI：对知识库执行路由并输出 Markdown ----------------

function files(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory()
      ? ['node_modules', 'dist', '.git', '.obsidian', 'private', '_private', 'raw', '90_templates'].includes(
            e.name,
          )
        ? []
        : files(join(dir, e.name))
      : [join(dir, e.name)],
  );
}

export function loadNotes(vault: string): KnowledgeNote[] {
  return files(vault)
    .filter((p) => p.endsWith('.md') && /^---\r?\n/.test(readFileSync(p, 'utf8')))
    .map((p) => {
      const raw = readFileSync(p, 'utf8');
      const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      if (!m) return null;
      return KnowledgeSchema.parse(parse(m[1]));
    })
    .filter((n): n is KnowledgeNote => !!n);
}

export function routeTerm(notes: KnowledgeNote[], term: string | null): Assessment[] {
  const byId = new Map(notes.map((n) => [n.id, n]));
  return notes
    .filter(
      (n) =>
        ROUTED_TYPES.includes(n.type) &&
        (term ? n.solar_terms.includes(term) || n.solar_terms.length === 0 : true),
    )
    .map((n) => assess(n, byId, notes));
}

function main() {
  const term = process.argv[2] ?? null;
  const vault = 'knowledge-base';
  if (!existsSync(vault)) {
    console.error('请在仓库根目录运行（需要 knowledge-base/）。');
    process.exit(1);
  }
  const notes = loadNotes(vault);
  const rows = routeTerm(notes, term);
  console.log(`# Routing report${term ? ` — ${term}` : ''}\n`);
  console.log('| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |');
  console.log('|---|---|---|---|---|---|---|');
  for (const a of rows) {
    console.log(
      `| ${a.id} | ${a.type} | ${a.impact} | ${a.risk} | ${a.evidenceTier}(发布方直读×${a.independence}) | **${a.route}** | ${a.findings.map((f) => f.code).join(', ') || '—'} |`,
    );
  }
  console.log('\n## Findings 明细\n');
  for (const a of rows) {
    for (const f of a.findings) {
      console.log(`- \`${a.id}\` **${f.code}**（${f.severity}）：${f.message}`);
    }
  }
}

if (process.argv[1]?.replace(/\\/g, '/').endsWith('/route.ts')) main();
