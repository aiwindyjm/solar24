import { z } from 'zod';

export const solarTermSlugs = [
  'lichun',
  'yushui',
  'jingzhe',
  'chunfen',
  'qingming',
  'guyu',
  'lixia',
  'xiaoman',
  'mangzhong',
  'xiazhi',
  'xiaoshu',
  'dashu',
  'liqiu',
  'chushu',
  'bailu',
  'qiufen',
  'hanlu',
  'shuangjiang',
  'lidong',
  'xiaoxue',
  'daxue',
  'dongzhi',
  'xiaohan',
  'dahan',
] as const;
export const musicSubmissionStatuses = [
  'submitted',
  'screening',
  'needs-info',
  'community-review',
  'curator-review',
  'accepted',
  'featured',
  'rejected',
  'withdrawn',
] as const;
export const musicFormats = ['mp3', 'ogg', 'flac', 'wav', 'm4a', 'webm'] as const;
export const maximumMusicBytes = 50 * 1024 * 1024;

const text = z.string().trim().min(1);
const id = z.string().regex(/^[a-z][a-z0-9-]*$/);
const publicUrl = z.url({ protocol: /^https$/ });
const date = z.iso.date();
const humanRecord = z.object({ reviewer: text, date, reason: text }).strict();

export const ContributionLicenseSchema = z
  .object({
    id: z.enum(['CC0-1.0', 'CC-BY-4.0', 'CC-BY-NC-4.0', 'Other / Custom']),
    reference: text,
    attribution: text,
  })
  .strict();

export const ContributorCreditSchema = z
  .object({
    name: text,
    location: text,
    contribution: z.enum(['Music', 'Visual', 'Research', 'Code', 'Translation']),
    detail: text,
    license: text,
    url: publicUrl.nullable(),
  })
  .strict();

/** Shape contract. Editorial/state constraints are enforced by assertMusicSubmission. */
export const MusicSubmissionSchema = z
  .object({
    schema_version: z.literal('0.1.0'),
    id,
    editorial_layer: z.literal('community'),
    solar_term: z.enum(solarTermSlugs),
    layer: z.enum(['sound-idea', 'sound-sketch', 'seasonal-track']),
    title: text,
    creator: text,
    creator_location: text,
    creator_country: text.nullable(),
    creator_description: text,
    music_description: text,
    cultural_inspiration: text,
    creative_intention: text,
    why_this_solar_term: text,
    interpretation_basis: z
      .array(
        z.enum([
          'chinese-cultural-research',
          'local-seasonal-experience',
          'nature',
          'personal-memory',
          'traditional-music',
          'modern-composition',
          'other',
        ]),
      )
      .min(1),
    cultural_scope: text,
    instrumentation: z.array(text),
    duration: z.number().positive().nullable(),
    format: z.enum(musicFormats).nullable(),
    audio: z
      .object({
        url: publicUrl,
        bytes: z.number().int().positive().max(maximumMusicBytes).nullable(),
        sha256: z
          .string()
          .regex(/^[a-f0-9]{64}$/)
          .nullable(),
      })
      .strict()
      .nullable(),
    source_or_generation_method: text,
    ai_assisted: z.boolean(),
    ai_tool: text.nullable(),
    ai_disclosure: z
      .object({
        model: text.nullable(),
        generation_date: date.nullable(),
        terms_reference: text.nullable(),
        human_contribution: text,
        reference_material: z.array(text),
      })
      .strict()
      .nullable(),
    original_work: z.boolean(),
    references: z.array(
      z.object({ citation: text, url: publicUrl.nullable(), usage: text }).strict(),
    ),
    license: ContributionLicenseSchema,
    contact: text,
    consent: z
      .object({
        public_submission: z.literal(true),
        rights_declaration: z.literal(true),
        publication: z.boolean(),
      })
      .strict(),
    rights: z
      .object({
        status: z.enum(['needs-review', 'cleared']),
        review: humanRecord.nullable(),
      })
      .strict(),
    status: z.enum(musicSubmissionStatuses),
    review_history: z
      .array(
        z
          .object({
            status: z.enum(musicSubmissionStatuses),
            actor: text,
            role: z.enum(['submitter', 'community', 'curator', 'maintainer']),
            date,
            reason: text,
          })
          .strict(),
      )
      .min(1),
    publication: z
      .object({
        url: publicUrl,
        published_by: text,
        date,
      })
      .strict()
      .nullable(),
    featured: humanRecord.nullable(),
    credits: z.array(ContributorCreditSchema),
  })
  .strict();

export type MusicSubmission = z.infer<typeof MusicSubmissionSchema>;
export type ContributorCredit = z.infer<typeof ContributorCreditSchema>;
export type MusicSubmissionStatus = MusicSubmission['status'];

const transitions: Record<MusicSubmissionStatus, readonly MusicSubmissionStatus[]> = {
  submitted: ['screening', 'withdrawn'],
  screening: ['needs-info', 'community-review', 'rejected', 'withdrawn'],
  'needs-info': ['screening', 'withdrawn'],
  'community-review': ['needs-info', 'curator-review', 'withdrawn'],
  'curator-review': ['needs-info', 'accepted', 'rejected', 'withdrawn'],
  accepted: ['featured', 'needs-info', 'withdrawn'],
  featured: ['accepted', 'needs-info', 'withdrawn'],
  rejected: ['screening', 'withdrawn'],
  withdrawn: [],
};

export function assertMusicSubmission(input: MusicSubmission): void {
  const entry = MusicSubmissionSchema.parse(input);
  const check = (condition: unknown, message: string) => {
    if (!condition) throw new Error(`${entry.id}: ${message}`);
  };
  check(entry.review_history[0].status === 'submitted', 'History must begin with submitted');
  for (const [index, step] of entry.review_history.entries()) {
    const previous = entry.review_history[index - 1];
    if (previous) {
      check(step.date >= previous.date, 'History dates must be ordered');
      check(transitions[previous.status].includes(step.status), 'Invalid review transition');
    }
    if (['accepted', 'featured', 'rejected'].includes(step.status))
      check(step.role === 'curator', 'A curator must record editorial decisions');
    else if (step.status !== 'submitted' && step.status !== 'withdrawn')
      check(
        ['curator', 'maintainer'].includes(step.role),
        'A maintainer or curator must route review',
      );
  }
  check(entry.review_history.at(-1)?.status === entry.status, 'Status must match history');
  if (entry.layer !== 'sound-idea') check(entry.audio, 'A sketch or track requires audio');
  if (entry.audio) check(entry.duration && entry.format, 'Audio needs duration and format');
  else
    check(entry.duration === null && entry.format === null, 'No audio means null duration/format');
  if (entry.ai_assisted) check(entry.ai_tool && entry.ai_disclosure, 'AI disclosure is required');
  else
    check(
      entry.ai_tool === null && entry.ai_disclosure === null,
      'Non-AI work must not have AI metadata',
    );
  check(
    (entry.rights.status === 'cleared') === (entry.rights.review !== null),
    'Rights clearance requires a human record; unresolved rights stay needs-review',
  );
  if (entry.rights.status === 'cleared' && entry.ai_assisted)
    check(
      entry.ai_disclosure?.generation_date && entry.ai_disclosure.terms_reference,
      'AI rights clearance needs generation date and terms reference',
    );
  if (entry.status === 'accepted' || entry.status === 'featured') {
    check(entry.rights.status === 'cleared', 'Accepted work requires cleared rights');
    check(
      entry.credits.some((c) => c.contribution === 'Music' && c.name === entry.creator),
      'Accepted work requires a Music credit for the submitting creator',
    );
    if (!entry.original_work)
      check(entry.references.length, 'Adapted work needs reference and permission review');
  }
  if (entry.publication) {
    check(['accepted', 'featured'].includes(entry.status), 'Only accepted work may be published');
    check(entry.consent.publication, 'Publication consent required');
    const acceptance = entry.review_history
      .filter(
        (step, index) =>
          step.status === 'accepted' &&
          entry.review_history[index - 1]?.status === 'curator-review',
      )
      .at(-1)!;
    check(
      entry.publication.date >= acceptance.date,
      'Publication cannot precede latest acceptance',
    );
  }
  if (entry.status === 'featured') {
    check(
      entry.publication && entry.featured && entry.audio,
      'Featured requires published audio and curator rationale',
    );
    const decision = entry.review_history.at(-1)!;
    check(
      entry.featured?.reviewer === decision.actor &&
        entry.featured?.date === decision.date &&
        entry.featured?.reason === decision.reason,
      'Featured record must match curator history',
    );
    check(entry.featured!.date >= entry.publication!.date, 'Featuring cannot precede publication');
  } else check(entry.featured === null, 'Only featured work may carry an active feature');
}

/** Warnings are review prompts, never automatic rejection or artistic rankings. */
export function musicScreeningWarnings(entries: readonly MusicSubmission[]): string[] {
  const warnings: string[] = [];
  const seen = new Map<string, string>();
  for (const entry of entries) {
    if (entry.rights.status === 'needs-review')
      warnings.push(`${entry.id}: rights need human review`);
    if (entry.audio) {
      warnings.push(
        `${entry.id}: audio availability, actual format/size and permissions require human verification`,
      );
      for (const key of [entry.audio.url, entry.audio.sha256].filter(
        (v): v is string => v !== null,
      )) {
        const prior = seen.get(key);
        if (prior) warnings.push(`${entry.id}: possible duplicate of ${prior}; compare manually`);
        else seen.set(key, entry.id);
      }
    }
  }
  return warnings;
}
