/**
 * Solar24 知识库统计报告（可重复运行）· 2026-09-17 质量修正引入
 *
 * 口径约定（与审计/修复报告一致）：
 * - "claim 类 high 卡"只统计 CulturalFact/ScientificFact/HistoricalRecord/Tradition/
 *   RegionalExpression 五类知识卡的 confidence=high，**不含** Source/GlobalExpression/
 *   HumanExplanation/InteractionIdea 自身的 confidence 字段；
 * - 独立直读方 = 引用的 direct-read Source 的不同 publisher 数（与路由引擎同口径，
 *   是"发布方多样性"的近似，不等于证据独立性的语义认证）；
 * - 路由统计复用 skills/.../route.ts 的 assess（与 CI 回归同引擎）。
 * 用法：pnpm tsx scripts/kb-stats.ts（在仓库根执行）
 */
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';
import { KnowledgeSchema, type KnowledgeNote } from '../packages/protocol/src/index.js';
import { assess } from '../skills/solar24-cultural-research/workflows/route.js';

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
const notes: KnowledgeNote[] = [];
const idToFile = new Map<string, string>();
for (const p of files('knowledge-base')) {
  if (!p.endsWith('.md')) continue;
  const raw = readFileSync(p, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) continue;
  const n = KnowledgeSchema.parse(parse(m[1]));
  notes.push(n);
  idToFile.set(n.id, p);
}
const byId = new Map(notes.map((n) => [n.id, n]));
const CLAIM5 = ['CulturalFact', 'ScientificFact', 'HistoricalRecord', 'Tradition', 'RegionalExpression'] as const;
const isClaim5 = (n: KnowledgeNote) => (CLAIM5 as readonly string[]).includes(n.type);
const sources = notes.filter((n) => n.type === 'Source');
const urls = new Set(sources.map((n) => n.source?.url ?? '').filter(Boolean));

const lines: string[] = [];
const say = (s = '') => lines.push(s);
say(`# KB stats · generated ${new Date().toISOString().slice(0, 10)}`);
say(`- knowledge entities: ${notes.length} (id→file unique: ${idToFile.size})`);
say(`- status: ${Object.entries(countBy(notes, (n) => n.status)).map(([k, v]) => `${k} ${v}`).join(' · ')}`);
say(`- Source records: ${sources.length}; unique URL: ${urls.size}`);
say(
  `- source access: direct-read ${sources.filter((n) => n.source!.access === 'direct-read').length} · search-excerpt ${sources.filter((n) => n.source!.access === 'search-excerpt').length}`,
);
say(
  `- source verification: cross-checked ${sources.filter((n) => n.source!.verification === 'cross-checked').length} · unverified ${sources.filter((n) => n.source!.verification === 'unverified').length} · human-verified ${sources.filter((n) => n.source!.verification === 'human-verified').length}`,
);
say(`- types: ${Object.entries(countBy(notes, (n) => n.type)).map(([k, v]) => `${k} ${v}`).join(' · ')}`);
const highClaim = notes.filter((n) => isClaim5(n) && n.confidence === 'high');
say(`- claim5 high: ${highClaim.length} (${CLAIM5.map((t) => `${t} ${notes.filter((n) => n.type === t && n.confidence === 'high').length}`).join(' + ')})`);

function countBy<T>(arr: T[], f: (x: T) => string): Record<string, number> {
  const r: Record<string, number> = {};
  for (const x of arr) r[f(x)] = (r[f(x)] ?? 0) + 1;
  return r;
}

// 每节气 claim5 high（门槛核对；立春试点另计）
say(`\n## per-term claim5 high (batch gate: >=4 per term)`);
const slugs = ['lichun', 'yushui', 'jingzhe', 'chunfen', 'qingming', 'guyu', 'lixia', 'xiaoman', 'mangzhong', 'xiazhi', 'xiaoshu', 'dashu', 'liqiu', 'chushu', 'bailu', 'qiufen', 'hanlu', 'shuangjiang', 'lidong', 'xiaoxue', 'daxue', 'dongzhi', 'xiaohan', 'dahan'];
const below: string[] = [];
for (const t of slugs) {
  const arr = notes.filter((n) => isClaim5(n) && n.confidence === 'high' && n.solar_terms.includes(t));
  say(`- ${t}: ${arr.length}${arr.length < 4 ? '  <-- BELOW GATE' : ''}`);
  if (arr.length < 4 && t !== 'lichun') below.push(`${t}(${arr.length})`);
}
say(`- below-gate terms (excl. lichun pilot): ${below.join(', ') || 'none'}`);

// high 卡独立直读方<2 清单（单原典使用情形登记）
say(`\n## claim5 high with independence < 2`);
const byIdAll = byId;
let ind = 0;
for (const n of highClaim) {
  const srcs = n.source_ids
    .map((id) => byIdAll.get(id))
    .filter((s): s is KnowledgeNote & { source: NonNullable<KnowledgeNote['source']> } => !!s && s.type === 'Source' && !!s.source);
  const pubs = new Set(srcs.filter((s) => s.source.access === 'direct-read').map((s) => s.source.publisher));
  pubs.delete('');
  if (pubs.size < 2) {
    ind++;
    say(`- ${n.id} (indep ${pubs.size}; pubs: ${[...pubs].join('/') || '—'})`);
  }
}
say(`- total: ${ind}`);

// 重复 URL 的 Source 组
say(`\n## duplicate-URL source groups (same material candidates)`);
const byUrl = new Map<string, string[]>();
for (const n of sources) if (n.source?.url) byUrl.set(n.source.url, [...(byUrl.get(n.source.url) ?? []), n.id]);
for (const [url, ids] of [...byUrl.entries()].filter(([, ids]) => ids.length > 1).sort((a, b) => b[1].length - a[1].length))
  say(`- ${ids.length}x ${url} :: ${ids.join(', ')}`);

// 引擎路由（全库，同 assess 口径）
say(`\n## engine routing (all routed notes, lichun included)`);
const routes = notes.map((n) => assess(n, byId, notes)).filter((r) => r.route !== 'not-routed');
say(`- ${Object.entries(countBy(routes, (r) => r.route)).map(([k, v]) => `${k} ${v}`).join(' · ')}`);
const routed23 = routes.filter((r) => {
  const n = byId.get(r.id)!;
  return n.solar_terms.length > 0 && !n.solar_terms.includes('lichun') && ['GlobalExpression', 'HumanExplanation', ...CLAIM5].includes(n.type);
});
say(`- batch-23 scoped: ${Object.entries(countBy(routed23, (r) => r.route)).map(([k, v]) => `${k} ${v}`).join(' · ')}`);
const globByRoute = countBy(
  notes.filter((n) => n.type === 'GlobalExpression').map((n) => assess(n, byId, notes)),
  (r) => r.route,
);
say(`- GlobalExpression by route: ${Object.entries(globByRoute).map(([k, v]) => `${k} ${v}`).join(' · ')}`);

writeFileSync('.kb-stats.md', lines.join('\n') + '\n');
if (!existsSync('.gitignore') || !readFileSync('.gitignore', 'utf8').includes('.kb-stats.md')) {
  // 不自动改 .gitignore；输出提示
  console.log('note: .kb-stats.md not in .gitignore — consider adding it');
}
console.log(lines.join('\n'));
