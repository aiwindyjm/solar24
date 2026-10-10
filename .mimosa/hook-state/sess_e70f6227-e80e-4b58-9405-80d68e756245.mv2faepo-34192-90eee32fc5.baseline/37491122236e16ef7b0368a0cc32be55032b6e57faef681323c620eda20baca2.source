import { readFileSync, readdirSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  ManifestSchema,
  ContentSchema,
  ReferencesSchema,
  AssetsSchema,
} from '../packages/protocol/src/index.js';

const all = readdirSync('modules').filter((s) => !s.startsWith('_'));
const selected = process.env.SOLAR24_MODULE
  ? all.filter((s) => s === process.env.SOLAR24_MODULE)
  : all;
if (!selected.length) throw new Error('Unknown module');
describe.each(selected)('%s module contract', (slug) => {
  it('has coherent identity, empty draft content and an executable entry', async () => {
    const read = (path: string) => JSON.parse(readFileSync(`modules/${slug}/${path}`, 'utf8'));
    const m = ManifestSchema.parse(read('module.manifest.json'));
    expect(m.id).toBe(slug);
    expect(m.slug).toBe(slug);
    const content = ContentSchema.parse(read(m.content));
    expect(content.term_id).toBe(slug);
    // Scaffold checks deliberately make no claims about cultural completeness.
    if (!content.claims.length) expect(content.review_status).toBe('draft');
    ReferencesSchema.parse(read(m.references));
    AssetsSchema.parse(read(m.assets));
    const { default: module } = await import(`../modules/${slug}/src/index.ts`);
    expect(module.manifest).toEqual(m);
    expect(module.mount).toBeTypeOf('function');
  });
});
