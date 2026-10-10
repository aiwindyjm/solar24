import { describe, expect, it } from 'vitest';
import { readNote } from '../scripts/knowledge.js';
import manifest from '../modules/lichun/module.manifest.json';
import {
  assertPublishableNote,
  assertKnowledgeNote,
  assertKnowledgeUsableForTerm,
  ManifestSchema,
  GlobalExpressionSchema,
} from '../packages/protocol/src/index.js';
import { knowledgeReferenceProblem } from '../scripts/content-checks.js';

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

// 2026-09-18 审计 R05：生产内容引用共享知识的契约。全部使用纯夹具（模板卡改造），
// 不修改任何真实研究记录的审核字段。
describe('knowledge references for published content (R05)', () => {
  const approvedFixture = () => {
    const note = readNote('knowledge-base/90_templates/CulturalFact.md');
    note.status = 'approved';
    note.epistemic = 'fact';
    note.source_ids = ['test-source'];
    note.human_review = {
      reviewer: 'TEST ONLY',
      reviewed_at: '2026-09-18',
      decision: 'approved',
      notes: 'Synthetic test, never production evidence',
    };
    return note;
  };
  it('allows an approved shared knowledge card (empty solar_terms) to be referenced', () => {
    const note = approvedFixture();
    note.solar_terms = [];
    expect(() => assertKnowledgeUsableForTerm(note, 'lichun')).not.toThrow();
  });
  it('allows the term’s own approved card and rejects another term’s private card', () => {
    const own = approvedFixture();
    own.solar_terms = ['lichun'];
    expect(() => assertKnowledgeUsableForTerm(own, 'lichun')).not.toThrow();
    const other = approvedFixture();
    other.solar_terms = ['yushui'];
    expect(() => assertKnowledgeUsableForTerm(other, 'lichun')).toThrow('term mismatch');
  });
  it('still refuses draft, withdrawn, contested or unreviewed notes', () => {
    const draft = approvedFixture();
    draft.status = 'draft';
    expect(() => assertKnowledgeUsableForTerm(draft, 'lichun')).toThrow('Human approval');
    const withdrawn = approvedFixture();
    withdrawn.status = 'withdrawn';
    expect(() => assertKnowledgeUsableForTerm(withdrawn, 'lichun')).toThrow('Human approval');
    const contested = approvedFixture();
    contested.solar_terms = [];
    contested.contested = true;
    expect(() => assertKnowledgeUsableForTerm(contested, 'lichun')).toThrow('Unresolved');
    const unreviewed = approvedFixture();
    unreviewed.human_review = null;
    expect(() => assertKnowledgeUsableForTerm(unreviewed, 'lichun')).toThrow('Human approval');
  });
});

// 2026-09-18 复核收口：调用方（validate.ts）的完整关联校验，含 02_shared/ 目录约束。
// 纯夹具路径字符串，不创建真实文件、不改任何真实记录的审核状态。
describe('caller-side knowledge reference check (validate path)', () => {
  const approved = () => {
    const note = readNote('knowledge-base/90_templates/CulturalFact.md');
    note.status = 'approved';
    note.epistemic = 'fact';
    note.source_ids = ['test-source'];
    note.human_review = {
      reviewer: 'TEST ONLY',
      reviewed_at: '2026-09-18',
      decision: 'approved',
      notes: 'Synthetic test, never production evidence',
    };
    return note;
  };
  it('合法共享卡（02_shared/ 目录）可被引用', () => {
    const note = approved();
    note.solar_terms = [];
    expect(knowledgeReferenceProblem(note, 'knowledge-base/02_shared/x.md', 'lichun')).toBeNull();
  });
  it('非共享目录中清空 solar_terms 的卡仍被拒绝（目录约束）', () => {
    const note = approved();
    note.solar_terms = [];
    expect(knowledgeReferenceProblem(note, 'knowledge-base/03_notes/x.md', 'lichun')).toMatch(
      '02_shared',
    );
    expect(knowledgeReferenceProblem(note, 'knowledge-base\\03_notes\\x.md', 'lichun')).toMatch(
      '02_shared',
    );
  });
  it('他节气私有卡与未审核卡走协议层拒绝', () => {
    const other = approved();
    other.solar_terms = ['yushui'];
    expect(knowledgeReferenceProblem(other, 'knowledge-base/03_notes/x.md', 'lichun')).toMatch(
      'term mismatch',
    );
    const draft = approved();
    draft.status = 'draft';
    expect(knowledgeReferenceProblem(draft, 'knowledge-base/03_notes/x.md', 'lichun')).toMatch(
      'Human approval',
    );
  });
});
