import { describe, expect, it } from 'vitest';
import {
  KnowledgeSchema,
  assertAiReviewConsistency,
  type KnowledgeNote,
} from '../../packages/protocol/src/index.js';

/**
 * Stage6 A1 回归用例：ai_review 字段语义边界。
 * 规则：ai_review 不抬高 status；ai_review ≠ human_review。
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
  contested: false,
  source_ids: [] as string[],
  author: 'test',
  created: '2026-09-25',
  updated: '2026-09-25',
  human_review: null,
};

const AI_OK = {
  reviewer_model: 'Solar24 AI (GLM-5.3) · 拟审',
  reviewed_at: '2026-09-25',
  decision: 'approve' as const,
  findings: [],
  notes: '测试',
};

describe('ai_review 回归', () => {
  it('ai_review.approve 只允许 in-review（不抬高 status：draft+approve 拒绝）', () => {
    const note = KnowledgeSchema.parse({
      ...base,
      id: 't-air-1',
      type: 'CulturalFact',
      status: 'draft',
      epistemic: 'fact',
      confidence: 'low',
      ai_review: AI_OK,
    }) as KnowledgeNote;
    expect(() => assertAiReviewConsistency(note)).toThrow('in-review');
  });

  it('in-review + ai_review.approve 合法；human_review 保持 null（AI≠人审）', () => {
    const note = KnowledgeSchema.parse({
      ...base,
      id: 't-air-2',
      type: 'CulturalFact',
      status: 'in-review',
      epistemic: 'fact',
      confidence: 'low',
      ai_review: AI_OK,
    }) as KnowledgeNote;
    expect(() => assertAiReviewConsistency(note)).not.toThrow();
    expect(note.human_review).toBeNull();
    expect(note.ai_review?.decision).toBe('approve');
  });

  it('ai_review.reject 只允许 draft', () => {
    const note = KnowledgeSchema.parse({
      ...base,
      id: 't-air-3',
      type: 'CulturalFact',
      status: 'in-review',
      epistemic: 'fact',
      confidence: 'low',
      ai_review: { ...AI_OK, decision: 'reject' },
    }) as KnowledgeNote;
    expect(() => assertAiReviewConsistency(note)).toThrow('draft');
  });
});
