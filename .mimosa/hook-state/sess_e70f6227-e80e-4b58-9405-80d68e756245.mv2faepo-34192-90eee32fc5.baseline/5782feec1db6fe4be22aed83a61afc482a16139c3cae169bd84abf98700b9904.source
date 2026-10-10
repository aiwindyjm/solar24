/**
 * 立春首版权威文本快照同步/校验（2026-09-18 复核收口引入）
 *
 * 权威位置：knowledge-base/03_notes/lichun-human-explanation.md 的 frontmatter
 * `explanation`（one_sentence / summary / expanded / why_it_matters，各含 zh-CN 与 en）。
 * 审核包 docs/research/lichun-minimum-content-review-package.md §B 在
 * <!-- SNAPSHOT:BEGIN --> / <!-- SNAPSHOT:END --> 标记之间保存由本脚本生成的快照
 * （含 sha256 内容哈希）。任何一侧单独变化都会使 verify 失败：
 *   - 权威字段变化 → 哈希与文本同时不再匹配 → 提示重跑 --write 并重新审核
 *   - 快照被单独改写 → 哈希行与实际文本不符或整体不等 → 同样失败
 * 用法：npx tsx scripts/lichun-snapshot.ts [--write|--verify]（默认 --verify）
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { readNote } from './knowledge.js';

const CARD = 'knowledge-base/03_notes/lichun-human-explanation.md';
const PKG = 'docs/research/lichun-minimum-content-review-package.md';
const BEGIN = '<!-- SNAPSHOT:BEGIN -->';
const END = '<!-- SNAPSHOT:END -->';

export interface SnapshotPayload {
  one_sentence: { zh: string; en: string };
  summary: { zh: string; en: string };
  expanded: { zh: string; en: string };
  why_it_matters: { zh: string; en: string };
}

export function snapshotPayload(
  note: ReturnType<typeof readNote> & { explanation?: Record<string, unknown> },
): SnapshotPayload {
  const ex = note.explanation;
  if (!ex) throw new Error('explanation payload missing');
  const pair = (k: string) => {
    const v = ex[k] as { 'zh-CN'?: string; en?: string };
    if (!v?.['zh-CN'] || !v?.en) throw new Error(`explanation.${k} missing zh-CN or en`);
    return { zh: v['zh-CN'], en: v.en };
  };
  return {
    one_sentence: pair('one_sentence'),
    summary: pair('summary'),
    expanded: pair('expanded'),
    why_it_matters: pair('why_it_matters'),
  };
}

/** 稳定序列化：递归按键名排序（JSON.stringify 的 replacer 数组会过滤嵌套键，不可用） */
function stableStringify(value: unknown): string {
  if (Array.isArray(value)) return '[' + value.map(stableStringify).join(',') + ']';
  if (value && typeof value === 'object') {
    const keys = Object.keys(value as Record<string, unknown>).sort();
    return (
      '{' +
      keys.map((k) => JSON.stringify(k) + ':' + stableStringify((value as Record<string, unknown>)[k])).join(',') +
      '}'
    );
  }
  return JSON.stringify(value);
}

export function payloadHash(p: SnapshotPayload): string {
  return createHash('sha256').update(stableStringify(p), 'utf8').digest('hex');
}

const NAMES: Record<keyof SnapshotPayload, string> = {
  one_sentence: '一句话 One Sentence',
  summary: '短摘要 Summary',
  expanded: '展开故事 Expanded',
  why_it_matters: 'Why it matters',
};

export function renderSnapshot(p: SnapshotPayload): string {
  const hash = payloadHash(p);
  let out = `${BEGIN}\n`;
  out += `<!-- 权威文本内容哈希 sha256: ${hash} -->\n`;
  out += `<!-- 生成：npx tsx scripts/lichun-snapshot.ts --write ；校验：npx tsx scripts/lichun-snapshot.ts 或 tests/snapshot.test.ts -->\n`;
  out += `<!-- 本节由脚本从解释卡 frontmatter 生成，禁止手改；权威字段变化后须重写并重新过审 -->\n`;
  for (const key of Object.keys(NAMES) as Array<keyof SnapshotPayload>) {
    out += `\n### ${NAMES[key]}（${key}）\n\n**zh-CN**：\n\n\`\`\`text\n${p[key].zh}\n\`\`\`\n\n**en**：\n\n\`\`\`text\n${p[key].en}\n\`\`\`\n`;
  }
  out += END;
  return out;
}

export function currentBlock(pkgText: string): string | null {
  const b = pkgText.indexOf(BEGIN);
  const e = pkgText.indexOf(END);
  if (b < 0 || e < 0 || e < b) return null;
  return pkgText.slice(b, e + END.length);
}

function main() {
  const mode = process.argv[2] ?? '--verify';
  const payload = snapshotPayload(readNote(CARD) as never);
  const rendered = renderSnapshot(payload);
  const pkgText = readFileSync(PKG, 'utf8').replace(/\r\n/g, '\n');
  const block = currentBlock(pkgText);
  if (mode === '--write') {
    if (!block) throw new Error(`markers not found in ${PKG}`);
    writeFileSync(PKG, pkgText.replace(block, rendered), 'utf8');
    console.log(`snapshot written; sha256=${payloadHash(payload)}`);
    return;
  }
  if (!block) {
    console.error(`FAIL: markers not found in ${PKG}`);
    process.exit(1);
  }
  if (block === rendered) {
    console.log(`snapshot OK; sha256=${payloadHash(payload)}`);
    return;
  }
  const recorded = block.match(/sha256: ([0-9a-f]{64})/)?.[1];
  const actual = payloadHash(payload);
  if (recorded && recorded !== actual)
    console.error(
      `FAIL: 权威文本已变化（记录 ${recorded.slice(0, 12)}… 实际 ${actual.slice(0, 12)}…）——请运行 npx tsx scripts/lichun-snapshot.ts --write 并重新提交该快照过审`,
    );
  else console.error('FAIL: 审核包快照被单独修改或与权威字段不一致——请以 --write 重新生成');
  process.exit(1);
}

if (process.argv[1]?.replace(/\\/g, '/').endsWith('lichun-snapshot.ts')) main();
