import { z } from 'zod';

export * from './community-music.ts';

export const statuses = [
  'Planned',
  'Researching',
  'Prototype',
  'In Development',
  'Interactive',
  'Released',
] as const;
export const seasons = ['spring', 'summer', 'autumn', 'winter'] as const;
export const dimensions = [
  'astronomy',
  'calendar',
  'climate',
  'phenology',
  'agriculture',
  'ecology',
  'chinese-life',
  'customs',
  'food',
  'history',
  'literature-art',
  'regional-differences',
  'scientific-interpretation',
  'global-expressions',
  'visual-assets',
  'audio-assets',
  'interaction-ideas',
  'references',
  'ai-research-log',
] as const;
const id = z.string().regex(/^[a-z][a-z0-9-]*$/);
const text = z.string().min(1);
const date = z.iso.date();
const localized = z.object({ 'zh-CN': text, en: text }).strict();
const relativePath = text.refine(
  (p) => !p.startsWith('/') && !p.includes('..') && !p.includes('\\') && !p.includes(':'),
  'Use a relative path inside the module',
);
export const ManifestSchema = z
  .object({
    protocolVersion: z.literal('0.1.0'),
    id,
    slug: id,
    name: text,
    name_en: text,
    season: z.enum(seasons),
    order: z.number().int().min(1).max(24),
    version: z.string().regex(/^\d+\.\d+\.\d+$/),
    status: z.enum(statuses),
    entry: z.literal('src/index.ts'),
    capabilities: z.array(z.enum(['static', 'interaction', 'webgl', 'audio'])),
    content: z.literal('content/zh-CN.json'),
    assets: z.literal('assets/manifest.json'),
    references: z.literal('references.json'),
    locales: z.array(z.enum(['zh-CN', 'en'])).min(1),
  })
  .strict();
export type ModuleManifest = z.infer<typeof ManifestSchema>;

export const SourceSchema = z
  .object({
    id,
    title: text,
    authors: z.array(text),
    publisher: text.nullable(),
    published: text.nullable(),
    url: z.url().nullable(),
    citation: text,
    source_type: z.enum([
      'historical',
      'scientific',
      'cultural',
      'institutional',
      'fieldwork',
      'personal-observation',
    ]),
    access: z.enum(['direct-read', 'search-excerpt']),
    accessed: date.nullable(),
    original_excerpt: z.string(),
    locator: z.string(),
    ai_summary: z.string(),
    rights: text,
    verification: z.enum(['unverified', 'cross-checked', 'human-verified']),
  })
  .strict();
export const ReferencesSchema = z.array(SourceSchema);
export const AssetSchema = z
  .object({
    id,
    path: relativePath,
    media_type: z.enum(['image', 'audio', 'video', 'model', 'font']),
    creator: text,
    source: text,
    license: text,
    rights_status: z.enum(['pending', 'cleared']),
    sha256: z.string().regex(/^[a-f0-9]{64}$/),
    bytes: z.number().int().nonnegative(),
    alt: localized,
    ai_generated: z.boolean(),
    generation_record: text.nullable(),
  })
  .strict();
export const AssetsSchema = z.array(AssetSchema);
export const ClaimSchema = z
  .object({
    id,
    kind: z.enum([
      'fact',
      'interpretation',
      'opinion',
      'tradition',
      'legend',
      'scientific-explanation',
    ]),
    text: localized,
    region: z.array(text),
    period: text,
    source_ids: z.array(id).min(1),
    knowledge_ids: z.array(id).min(1),
    reviewer: text,
    reviewed_at: date,
  })
  .strict();
export const ContentSchema = z
  .object({
    schema_version: z.literal('0.1.0'),
    term_id: id,
    locale: z.literal('zh-CN'),
    review_status: z.enum(['draft', 'approved']),
    sections: z.array(
      z
        .object({
          id: z.enum(['what', 'why', 'nature', 'people', 'culture', 'science']),
          title: localized,
          claim_ids: z.array(id).min(1),
        })
        .strict(),
    ),
    claims: z.array(ClaimSchema),
  })
  .strict();

export const GlobalExpressionSchema = z
  .object({
    schema_version: z.literal('0.1.0'),
    id,
    editorial_layer: z.literal('community'),
    term_ids: z.array(id).min(1),
    title: localized,
    location: text,
    country: text.nullable(),
    region: text,
    culture: text,
    creators: z
      .array(z.object({ name: text, url: z.url().nullable(), role: text }).strict())
      .min(1),
    time_period: text,
    natural_context: text,
    cultural_expression: text,
    relationship_to_solar_term: z.enum([
      'same-time',
      'nearby-time',
      'shared-nature',
      'seasonal-experience',
      'life-cycle',
      'other',
    ]),
    relationship_reason: text,
    difference: text,
    similarity: text,
    source_ids: z.array(id),
    license: text,
    media_types: z.array(z.enum(['text', 'image', 'audio', 'video', 'interactive'])).min(1),
    asset_ids: z.array(id),
    consent: z.enum(['pending', 'confirmed', 'not-applicable']),
    status: z.enum(['candidate', 'draft', 'submitted', 'reviewing', 'published', 'withdrawn']),
    featured: z.object({ reason: text, curator: text, date }).strict().nullable(),
  })
  .strict();

const knowledgeTypes = [
  'SolarTerm',
  'CulturalFact',
  'ScientificFact',
  'HistoricalRecord',
  'Tradition',
  'RegionalExpression',
  'GlobalExpression',
  'VisualAsset',
  'AudioAsset',
  'InteractionIdea',
  'HumanExplanation',
  'ResearchNote',
  'Source',
] as const;
export const KnowledgeSchema = z
  .object({
    schema_version: z.literal('0.1.0'),
    id,
    type: z.enum(knowledgeTypes),
    title: text,
    solar_terms: z.array(id),
    season: z.enum(seasons).nullable(),
    dimensions: z.array(z.enum(dimensions)),
    region: z.array(text),
    period: text.nullable(),
    language: text,
    status: z.enum(['draft', 'in-review', 'approved', 'withdrawn']),
    epistemic: z.enum([
      'fact',
      'interpretation',
      'opinion',
      'tradition',
      'legend',
      'scientific-explanation',
      'unverified',
    ]),
    confidence: z.enum(['unknown', 'low', 'medium', 'high']),
    risk_level: z.enum(['low', 'medium', 'high']).optional(),
    impact_level: z.enum(['system', 'term', 'regional', 'creative', 'global']).optional(),
    contested: z.boolean(),
    source_ids: z.array(id),
    author: text,
    created: date,
    updated: date,
    human_review: z
      .object({
        reviewer: text,
        reviewed_at: date,
        decision: z.enum(['approved', 'changes-requested']),
        notes: text,
      })
      .strict()
      .nullable(),
    source: SourceSchema.optional(),
    links: z.record(z.string(), z.array(id)).optional(),
    claim: z
      .object({ statement: text, exceptions: z.array(text) })
      .strict()
      .optional(),
    expression: GlobalExpressionSchema.optional(),
    explanation:
      z
        .object({
          audience: text,
          one_sentence: localized,
          summary: localized,
          expanded: localized,
          why_it_matters: localized,
          supporting_knowledge_ids: z.array(id),
          limitations: z.array(text),
        })
        .strict()
        .optional(),
    asset: z
      .object({
        creator: text,
        license: text.nullable(),
        source: text.nullable(),
        media_type: z.enum(['image', 'audio']),
        ai_generated: z.boolean(),
        generation_record: text.nullable(),
      })
      .strict()
      .optional(),
    research: z
      .object({
        task: text,
        queries: z.array(text),
        discovered_source_ids: z.array(id),
        conflicts: z.array(text),
        conclusions: z.array(text),
        human_questions: z.array(text),
      })
      .strict()
      .optional(),
    ai_review: z
      .object({
        reviewer_model: text,
        reviewed_at: date,
        decision: z.enum(['approve', 'revise', 'hold', 'reject']),
        findings: z.array(text),
        notes: text,
      })
      .strict()
      .optional(),
  })
  .strict();
export type KnowledgeNote = z.infer<typeof KnowledgeSchema>;

/**
 * AI 拟审一致性（2026-09-25 第六阶段 A1 引入）：
 * ai_review 是 AI 第一遍审核的如实署名记录，不等于人工批准。
 * - decision=approve 仅允许出现在 in-review 卡（AI 建议进入人审批准队列）；
 * - decision=reject 仅允许出现在 draft 卡（AI 建议回退，等待人审确认）；
 * - human_review 与 ai_review 可以并存（人审在 AI 拟审之后签署）。
 */
export function assertAiReviewConsistency(note: KnowledgeNote): void {
  if (!note.ai_review) return;
  if (note.ai_review.decision === 'approve' && !['in-review', 'approved'].includes(note.status))
    throw new Error('ai_review approve requires status in-review or approved');
  if (note.ai_review.decision === 'reject' && note.status !== 'draft')
    throw new Error('ai_review reject requires status draft');
}

export function assertPublishableNote(note: KnowledgeNote): void {
  KnowledgeSchema.parse(note);
  if (note.status !== 'approved' || note.human_review?.decision !== 'approved')
    throw new Error('Human approval is required');
  if (note.contested || note.epistemic === 'unverified')
    throw new Error('Unresolved claims cannot be exported');
  if (!note.source_ids.length) throw new Error('A source is required');
  if (
    [
      'ResearchNote',
      'SolarTerm',
      'Source',
      'InteractionIdea',
      'HumanExplanation',
      'GlobalExpression',
      'VisualAsset',
      'AudioAsset',
    ].includes(note.type)
  )
    throw new Error('This note is not a publishable claim');
  if (!note.claim) throw new Error('A claim statement is required');
}

/**
 * 发布内容的知识引用规则（2026-09-18 审计 R05 引入）：
 * 引用的知识卡必须整体可发布，且满足其一——
 * ① 属于本节气（solar_terms 包含 slug）；② 是系统级共享知识（solar_terms 为空，
 *   且为经真实人工批准的 claim 卡——assertPublishableNote 已排除不可发布类型）。
 * 其他节气的私有卡仍然拒绝。solar_terms 为空不因类型巧合而放行：
 * 只有能通过 assertPublishableNote 的 claim 卡才走到共享判定。
 */
export function assertKnowledgeUsableForTerm(note: KnowledgeNote, slug: string): void {
  assertPublishableNote(note);
  if (note.solar_terms.includes(slug)) return;
  if (note.solar_terms.length === 0) return; // 共享知识：调用方应另行校验其位于 02_shared/
  throw new Error(
    `Knowledge term mismatch: ${note.id} is private to [${note.solar_terms.join(', ')}], not ${slug}`,
  );
}

export interface Preferences {
  reducedMotion: boolean;
  muted: boolean;
  locale: 'zh-CN' | 'en';
}
export interface ModuleHandle {
  pause(): void;
  resume(): void;
  updatePreferences(preferences: Preferences): void;
  dispose(): void;
}
export interface ModuleDefinition {
  manifest: ModuleManifest;
  mount(context: { container: HTMLElement; preferences: Preferences }): ModuleHandle;
}

/** Type-specific and editorial constraints supplement the exported shape schema. */
export function assertKnowledgeNote(note: KnowledgeNote): void {
  const required = (value: unknown, message: string) => {
    if (!value) throw new Error(message);
  };
  if (note.type === 'Source') {
    required(note.source, 'Source payload required');
    required(note.source?.id === note.id, 'Source ID must equal note ID');
  }
  if (
    [
      'CulturalFact',
      'ScientificFact',
      'HistoricalRecord',
      'Tradition',
      'RegionalExpression',
    ].includes(note.type)
  )
    required(note.claim, 'Claim payload required');
  if (note.type === 'GlobalExpression') required(note.expression, 'Expression payload required');
  if (['VisualAsset', 'AudioAsset'].includes(note.type)) {
    required(note.asset, 'Asset payload required');
    required(
      note.asset?.media_type === (note.type === 'AudioAsset' ? 'audio' : 'image'),
      'Asset type mismatch',
    );
  }
  if (note.type === 'ResearchNote') required(note.research, 'Research payload required');
  if (note.type === 'SolarTerm')
    required(note.solar_terms.length === 1 && note.season, 'SolarTerm needs one term and season');
  required(note.updated >= note.created, 'Updated cannot precede created');
  if (note.status === 'approved') {
    required(note.human_review?.decision === 'approved', 'Human approval required');
    required(
      !note.contested && note.epistemic !== 'unverified',
      'Resolve uncertainty before approval',
    );
    if (note.type === 'Source')
      required(note.source?.verification === 'human-verified', 'Source must be verified');
  }
}
