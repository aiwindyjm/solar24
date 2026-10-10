/**
 * Solar24 Cultural Research Skill — Batch Routing Runner v1.0
 *
 * route.ts 的容错批量变体（2026-09-16 批处理中由雨水代理首创、批处理协调方通用化）：
 * 评估逻辑与 route.ts 完全同源（复用 routeTerm），但逐文件 try/catch，
 * 跳过无法解析的文件（并行批处理中其他代理的半成品 YAML）并打印跳过清单，
 * 避免全库加载单点崩溃。若跳过清单出现你自己的文件，必须修好重跑。
 *
 * 用法：npx tsx skills/solar24-cultural-research/workflows/route-batch.mts <term>
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';
import { KnowledgeSchema, type KnowledgeNote } from '../../../packages/protocol/src/index.js';
import { routeTerm } from './route.js';

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

const term = process.argv[2] ?? null;
const vault = 'knowledge-base';
if (!readFileSync('package.json', 'utf8').includes('"solar24"')) {
  console.error('请在仓库根目录运行（需要 knowledge-base/）。');
  process.exit(1);
}
const skipped: string[] = [];
const notes: KnowledgeNote[] = [];
for (const p of files(vault)) {
  if (!p.endsWith('.md')) continue;
  const raw = readFileSync(p, 'utf8');
  if (!/^---\r?\n/.test(raw)) continue;
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) continue;
  try {
    notes.push(KnowledgeSchema.parse(parse(m[1])));
  } catch (err) {
    skipped.push(`${p} :: ${(err as Error).message.split('\n')[0].slice(0, 120)}`);
  }
}

console.log(`# Routing report${term ? ` — ${term}` : ''}（tolerant loader）\n`);
if (skipped.length) {
  console.log(`> 跳过 ${skipped.length} 个无法解析的文件（并行批处理半成品，非本节气问题）：`);
  for (const s of skipped) console.log(`> - ${s}`);
  console.log('');
}
const rows = routeTerm(notes, term);
console.log('| ID | 类型 | 影响 | 风险 | 证据 | 路由 | findings |');
console.log('|---|---|---|---|---|---|---|');
for (const a of rows) {
  console.log(
    `| ${a.id} | ${a.type} | ${a.impact} | ${a.risk} | ${a.evidenceTier}(发布方直读×${a.independence}) | **${a.route}** | ${a.findings.map((f) => f.code).join(', ') || '—'} |`,
  );
}
console.log('\n## Findings 明细\n');
for (const a of rows) {
  for (const f of a.findings) console.log(`- \`${a.id}\` **${f.code}**（${f.severity}）：${f.message}`);
}
