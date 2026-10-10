import { describe, expect, it } from 'vitest';
import { readNote } from '../scripts/knowledge.js';
import manifest from '../modules/lichun/module.manifest.json';
import {
  assertPublishableNote,
  assertKnowledgeNote,
  ManifestSchema,
  GlobalExpressionSchema,
} from '../packages/protocol/src/index.js';

describe('editorial gates', () => {
  const template = () => readNote('knowledge-base/90_templates/CulturalFact.md');
  it('never exports an AI draft', () => {
    expect(() => assertPublishableNote(template())).toThrow('Human approval');
  });
  it('requires evidence even after a review record is present', () => {
    const note = template();
    note.status = 'approved';
    note.epistemic = 'fact';
    note.human_review = {
      reviewer: 'TEST ONLY',
      reviewed_at: '2026-09-16',
      decision: 'approved',
      notes: 'Synthetic test, never production evidence',
    };
    expect(() => assertPublishableNote(note)).toThrow('source');
    note.source_ids = ['test-source'];
    expect(() => assertPublishableNote(note)).not.toThrow();
    note.contested = true;
    expect(() => assertPublishableNote(note)).toThrow('Unresolved');
  });
  it('rejects missing type-specific payloads', () => {
    const note = template();
    delete note.claim;
    expect(() => assertKnowledgeNote(note)).toThrow('Claim');
  });
  it('does not accept remote module entries or invented project statuses', () => {
    expect(ManifestSchema.safeParse(manifest).success).toBe(true);
    expect(
      ManifestSchema.safeParse({ ...manifest, entry: 'https://example.com/plugin.js' }).success,
    ).toBe(false);
    expect(ManifestSchema.safeParse({ ...manifest, status: 'complete' }).success).toBe(false);
  });
  it('preserves community distinction and requires a description of differences', () => {
    const note = readNote('knowledge-base/90_templates/GlobalExpression.md');
    expect(
      GlobalExpressionSchema.safeParse({ ...note.expression, editorial_layer: 'official' }).success,
    ).toBe(false);
    expect(GlobalExpressionSchema.safeParse({ ...note.expression, difference: '' }).success).toBe(
      false,
    );
  });
});
