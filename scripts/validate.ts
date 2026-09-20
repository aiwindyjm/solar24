import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { createHash } from 'node:crypto';
import {
  ManifestSchema,
  ContentSchema,
  ReferencesSchema,
  AssetsSchema,
  assertPublishableNote,
} from '../packages/protocol/src/index.js';
import { readNote } from './knowledge.js';
import { checkMusicFiles } from './community-music.js';
import { solarTermSlugs } from '../packages/protocol/src/index.js';

const json = (path: string) => JSON.parse(readFileSync(path, 'utf8'));
function files(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory()
      ? ['node_modules', 'dist', '.git', '.obsidian', 'private', '_private', 'raw'].includes(e.name)
        ? []
        : files(join(dir, e.name))
      : [join(dir, e.name)],
  );
}
function check(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}
const noteFiles = files('knowledge-base').filter(
  (p) => p.endsWith('.md') && /^---\r?\n/.test(readFileSync(p, 'utf8')),
);
const notes = noteFiles.filter((p) => !p.includes('90_templates')).map(readNote);
const byId = new Map(notes.map((n) => [n.id, n]));
check(byId.size === notes.length, 'Duplicate knowledge IDs');
noteFiles.forEach(readNote);
const modules = readdirSync('modules').filter((s) => !s.startsWith('_'));
check(modules.length === 24, 'Expected 24 modules');
check(solarTermSlugs.every(slug => modules.includes(slug)), 'Community solar term IDs must match modules');
const musicPaths = modules.flatMap(slug => {
  const dir = `modules/${slug}/community/music`;
  return existsSync(dir) ? files(dir).filter(path => path.endsWith('.json')) : [];
});
const musicChecks = checkMusicFiles(musicPaths);
musicChecks.entries.forEach((entry, index) => {
  const expected = resolve(`modules/${entry.solar_term}/community/music/${entry.id}.json`);
  check(resolve(musicPaths[index]) === expected, `Music path/term/ID mismatch: ${entry.id}`);
});
musicChecks.warnings.forEach(warning => console.warn(warning));
const seen = new Set<number>();
for (const slug of modules) {
  const base = `modules/${slug}`;
  const m = ManifestSchema.parse(json(`${base}/module.manifest.json`));
  check(m.id === slug && m.slug === slug, `Module ID mismatch: ${slug}`);
  check(!seen.has(m.order), 'Duplicate order');
  seen.add(m.order);
  check(
    m.season === ['spring', 'summer', 'autumn', 'winter'][Math.floor((m.order - 1) / 6)],
    'Season/order mismatch',
  );
  check(
    readFileSync(`${base}/README.md`, 'utf8').includes(`> ${m.status} ·`),
    `README status drift: ${slug}`,
  );
  for (const path of [m.entry, m.content, m.assets, m.references, 'README.md'])
    check(existsSync(`${base}/${path}`), `Missing ${base}/${path}`);
  const content = ContentSchema.parse(json(`${base}/${m.content}`));
  check(content.term_id === slug, 'Content term mismatch');
  const refs = ReferencesSchema.parse(json(`${base}/${m.references}`));
  check(new Set(refs.map((r) => r.id)).size === refs.length, 'Duplicate source IDs');
  check(
    new Set(content.claims.map((c) => c.id)).size === content.claims.length,
    'Duplicate claim IDs',
  );
  for (const section of content.sections)
    for (const id of section.claim_ids)
      check(
        content.claims.some((c) => c.id === id),
        `Unresolved claim ${id}`,
      );
  for (const claim of content.claims) {
    for (const id of claim.source_ids)
      check(
        refs.some((r) => r.id === id),
        `Missing reference ${id}`,
      );
    for (const id of claim.knowledge_ids) {
      const note = byId.get(id);
      check(note, `Missing knowledge ${id}`);
      if (content.review_status === 'approved') {
        assertPublishableNote(note);
        check(note.solar_terms.includes(slug), `Knowledge term mismatch ${id}`);
        check(
          claim.source_ids.every((s) => note.source_ids.includes(s)),
          `Evidence mismatch ${id}`,
        );
      }
    }
  }
  if (content.review_status === 'approved') {
    check(content.claims.length && content.sections.length, 'Empty content cannot be approved');
    check(
      refs.every((s) => s.verification === 'human-verified'),
      'Approved content requires verified sources',
    );
  }
  if (m.status === 'Released')
    check(content.review_status === 'approved', 'Released module requires approved content');
  for (const asset of AssetsSchema.parse(json(`${base}/${m.assets}`))) {
    const data = readFileSync(`${base}/${asset.path}`);
    check(
      data.length === asset.bytes &&
        createHash('sha256').update(data).digest('hex') === asset.sha256,
      `Asset checksum mismatch ${asset.id}`,
    );
    if (m.status === 'Released') check(asset.rights_status === 'cleared', 'Asset rights pending');
  }
}
for (const note of notes) {
  for (const term of note.solar_terms) check(modules.includes(term), `Unknown term ${term}`);
  for (const id of note.source_ids)
    check(byId.get(id)?.type === 'Source', `Unresolved source ${id}`);
  for (const ids of Object.values(note.links ?? {}))
    for (const id of ids) check(byId.has(id), `Unresolved knowledge link ${id}`);
  if (
    note.status === 'approved' &&
    [
      'CulturalFact',
      'ScientificFact',
      'HistoricalRecord',
      'Tradition',
      'RegionalExpression',
    ].includes(note.type)
  )
    assertPublishableNote(note);
}
for (const asset of json('assets/docs/manifest.json')) {
  const data = readFileSync(`assets/docs/${asset.path}`);
  check(
    data.length === asset.bytes && createHash('sha256').update(data).digest('hex') === asset.sha256,
    `Documentation asset drift: ${asset.id}`,
  );
  check(asset.license && asset.creator && asset.source, 'Documentation asset attribution missing');
}
const vaultFiles = files('knowledge-base').filter((p) => p.endsWith('.md'));
for (const path of vaultFiles) {
  for (const match of readFileSync(path, 'utf8').matchAll(/\[\[([^\]|#]+)(?:[^\]]*)\]\]/g)) {
    check(
      existsSync(resolve('knowledge-base', match[1] + '.md')),
      `Broken wiki link in ${path}: ${match[1]}`,
    );
  }
}
const docFiles = [
  'README.md',
  'CONTRIBUTING.md',
  'COMMUNITY_GUIDELINES.md',
  'AGENTS.md',
  ...files('docs'),
  ...files('modules'),
  ...vaultFiles,
].filter((p) => p.endsWith('.md'));
for (const path of docFiles) {
  for (const match of readFileSync(path, 'utf8').matchAll(/\]\(([^\s)]+)\)/g)) {
    const dest = match[1].replace(/^<|>$/g, '').split('#')[0];
    if (!dest || /^(https?:|mailto:)/.test(dest)) continue;
    check(
      existsSync(resolve(dirname(path), decodeURIComponent(dest))),
      `Broken Markdown link in ${path}: ${dest}`,
    );
  }
}
console.log(
  `Validated ${modules.length} modules, ${notes.length} knowledge entities, ${noteFiles.length - notes.length} templates, citations, assets and local links.`,
);
