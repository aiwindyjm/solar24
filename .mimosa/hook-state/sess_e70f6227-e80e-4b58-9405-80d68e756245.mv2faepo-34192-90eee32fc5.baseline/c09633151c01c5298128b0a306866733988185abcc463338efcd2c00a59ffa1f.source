import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { describe, expect, it } from 'vitest';
import { parse } from 'yaml';
import { z } from 'zod';
import {
  MusicSubmissionSchema,
  ContributorCreditSchema,
  assertMusicSubmission,
  musicScreeningWarnings,
  solarTermSlugs,
  maximumMusicBytes,
  type MusicSubmission,
} from '../packages/protocol/src/index.js';
import { checkMusicFiles } from '../scripts/community-music.js';

// Synthetic test-only metadata; never a real submission, person or approval record.
function idea(): MusicSubmission {
  return {
    schema_version: '0.1.0',
    id: 'test-only-sound',
    editorial_layer: 'community',
    solar_term: 'lichun',
    layer: 'sound-idea',
    title: 'Test-only idea',
    creator: 'TEST ONLY',
    creator_location: 'Undisclosed',
    creator_country: null,
    creator_description: 'Synthetic fixture',
    music_description: 'Test sound description',
    cultural_inspiration: 'Personal observation test',
    creative_intention: 'Test expression',
    why_this_solar_term: 'Test-only seasonal relationship',
    interpretation_basis: ['nature'],
    cultural_scope: 'Personal test, no cultural claim',
    instrumentation: [],
    duration: null,
    format: null,
    audio: null,
    source_or_generation_method: 'Test composition',
    ai_assisted: false,
    ai_tool: null,
    ai_disclosure: null,
    original_work: true,
    references: [],
    license: {
      id: 'CC-BY-4.0',
      reference: 'https://creativecommons.org/licenses/by/4.0/',
      attribution: 'TEST ONLY',
    },
    contact: 'test-only public handle',
    consent: { public_submission: true, rights_declaration: true, publication: false },
    rights: { status: 'needs-review', review: null },
    status: 'submitted',
    review_history: [
      {
        status: 'submitted',
        actor: 'TEST ONLY',
        role: 'submitter',
        date: '2026-09-20',
        reason: 'Test submission',
      },
    ],
    publication: null,
    featured: null,
    credits: [],
  };
}

function track(): MusicSubmission {
  const entry = idea();
  entry.layer = 'sound-sketch';
  entry.audio = { url: 'https://example.invalid/test-only.mp3', bytes: 100, sha256: null };
  entry.duration = 12.5;
  entry.format = 'mp3';
  return entry;
}

function accepted(): MusicSubmission {
  const entry = track();
  entry.status = 'accepted';
  entry.review_history.push(
    ...(['screening', 'community-review', 'curator-review', 'accepted'] as const).map((status) => ({
      status,
      actor: 'TEST CURATOR',
      role: 'curator' as const,
      date: '2026-09-20',
      reason: 'Synthetic test decision',
    })),
  );
  entry.rights = {
    status: 'cleared',
    review: { reviewer: 'TEST CURATOR', date: '2026-09-20', reason: 'Synthetic clearance' },
  };
  entry.credits = [
    {
      name: 'TEST ONLY',
      location: 'Undisclosed',
      contribution: 'Music',
      detail: 'Test composition',
      license: 'CC BY 4.0',
      url: null,
    },
  ];
  return entry;
}

function featured(): MusicSubmission {
  const entry = accepted();
  entry.consent.publication = true;
  entry.publication = {
    url: 'https://example.invalid/test-publication',
    date: '2026-09-20',
    published_by: 'TEST MAINTAINER',
  };
  entry.status = 'featured';
  entry.featured = {
    reviewer: 'TEST CURATOR',
    date: '2026-09-20',
    reason: 'Synthetic feature reason',
  };
  entry.review_history.push({
    status: 'featured',
    actor: 'TEST CURATOR',
    role: 'curator',
    date: '2026-09-20',
    reason: 'Synthetic feature reason',
  });
  return entry;
}

describe('community music editorial boundaries', () => {
  it('accepts an idea with no audio and retains explicit unresolved rights', () => {
    expect(() => assertMusicSubmission(idea())).not.toThrow();
    expect(musicScreeningWarnings([idea()])).toContain('test-only-sound: rights need human review');
    expect(() => assertMusicSubmission({ ...idea(), layer: 'seasonal-track' })).toThrow(
      /requires audio/,
    );
  });

  it('requires meaningful identity, explanation, rights and declared audio limits', () => {
    for (const field of [
      'creator',
      'title',
      'why_this_solar_term',
      'cultural_inspiration',
      'contact',
    ])
      expect(MusicSubmissionSchema.safeParse({ ...idea(), [field]: '  ' }).success).toBe(false);
    expect(MusicSubmissionSchema.safeParse({ ...idea(), solar_term: 'unknown' }).success).toBe(
      false,
    );
    expect(
      MusicSubmissionSchema.safeParse({ ...idea(), editorial_layer: 'official' }).success,
    ).toBe(false);
    expect(MusicSubmissionSchema.safeParse({ ...idea(), license: undefined }).success).toBe(false);
    expect(MusicSubmissionSchema.safeParse({ ...idea(), ai_assisted: undefined }).success).toBe(
      false,
    );
    const entry = track();
    entry.audio!.bytes = maximumMusicBytes + 1;
    expect(() => assertMusicSubmission(entry)).toThrow();
    entry.audio!.bytes = null;
    expect(() => assertMusicSubmission(entry)).not.toThrow();
    entry.audio!.url = 'javascript:alert(1)';
    expect(() => assertMusicSubmission(entry)).toThrow();
  });

  it('requires AI disclosure and blocks rights clearance until date and terms are known', () => {
    const entry = track();
    entry.ai_assisted = true;
    expect(() => assertMusicSubmission(entry)).toThrow(/AI disclosure/);
    entry.ai_tool = 'TEST TOOL';
    entry.ai_disclosure = {
      model: null,
      generation_date: null,
      terms_reference: null,
      human_contribution: 'Test editing',
      reference_material: [],
    };
    expect(() => assertMusicSubmission(entry)).not.toThrow();
    entry.rights = accepted().rights;
    expect(() => assertMusicSubmission(entry)).toThrow(/generation date and terms/);
    entry.ai_disclosure.generation_date = '2026-09-20';
    entry.ai_disclosure.terms_reference = 'Test-only terms reference';
    expect(() => assertMusicSubmission(entry)).not.toThrow();
    entry.ai_assisted = false;
    expect(() => assertMusicSubmission(entry)).toThrow(/Non-AI/);
  });

  it('does not equate accepted with published or featured', () => {
    const entry = accepted();
    expect(() => assertMusicSubmission(entry)).not.toThrow();
    expect(entry.publication).toBeNull();
    expect(entry.featured).toBeNull();
    entry.rights = idea().rights;
    expect(() => assertMusicSubmission(entry)).toThrow(/cleared rights/);
    entry.rights = accepted().rights;
    entry.credits = [];
    expect(() => assertMusicSubmission(entry)).toThrow(/Music credit/);
  });

  it('requires review sequence and curator authority, including after needs-info', () => {
    const skipped = accepted();
    skipped.review_history.splice(1, 3);
    expect(() => assertMusicSubmission(skipped)).toThrow(/transition/);
    const entry = accepted();
    entry.review_history.at(-1)!.role = 'submitter';
    expect(() => assertMusicSubmission(entry)).toThrow(/curator/);
    const retry = idea();
    retry.review_history.push(
      {
        status: 'screening',
        actor: 'TEST',
        role: 'maintainer',
        date: '2026-09-20',
        reason: 'Test',
      },
      {
        status: 'needs-info',
        actor: 'TEST',
        role: 'maintainer',
        date: '2026-09-20',
        reason: 'Test missing info',
      },
      {
        status: 'screening',
        actor: 'TEST',
        role: 'maintainer',
        date: '2026-09-20',
        reason: 'Test supplement',
      },
    );
    retry.status = 'screening';
    expect(() => assertMusicSubmission(retry)).not.toThrow();
  });

  it('requires published audio, consent and a matching feature decision', () => {
    expect(() => assertMusicSubmission(featured())).not.toThrow();
    const noPublication = featured();
    noPublication.publication = null;
    expect(() => assertMusicSubmission(noPublication)).toThrow(/published audio/);
    const noConsent = featured();
    noConsent.consent.publication = false;
    expect(() => assertMusicSubmission(noConsent)).toThrow(/consent/);
    const mismatch = featured();
    mismatch.featured!.reason = 'Different reason';
    expect(() => assertMusicSubmission(mismatch)).toThrow(/match curator/);
    const prematurelyPublished = track();
    prematurelyPublished.publication = featured().publication;
    expect(() => assertMusicSubmission(prematurelyPublished)).toThrow(/Only accepted/);
  });

  it('requires references for adapted accepted works and hides withdrawn works', () => {
    const adaptation = accepted();
    adaptation.original_work = false;
    expect(() => assertMusicSubmission(adaptation)).toThrow(/Adapted work/);
    const entry = featured();
    entry.review_history.push({
      status: 'withdrawn',
      actor: 'TEST ONLY',
      role: 'submitter',
      date: '2026-09-20',
      reason: 'Test withdrawal',
    });
    entry.status = 'withdrawn';
    expect(() => assertMusicSubmission(entry)).toThrow(/Only accepted/);
    entry.publication = null;
    entry.featured = null;
    expect(() => assertMusicSubmission(entry)).not.toThrow();
    entry.review_history.push({
      status: 'screening',
      actor: 'TEST',
      role: 'maintainer',
      date: '2026-09-20',
      reason: 'Test restart',
    });
    entry.status = 'screening';
    expect(() => assertMusicSubmission(entry)).toThrow(/transition/);
  });

  it('allows removing a feature but requires new publication after renewed review', () => {
    const entry = featured();
    entry.review_history.push({
      status: 'accepted',
      actor: 'TEST CURATOR',
      role: 'curator',
      date: '2026-09-21',
      reason: 'Test remove feature',
    });
    entry.status = 'accepted';
    entry.featured = null;
    expect(() => assertMusicSubmission(entry)).not.toThrow();
    entry.review_history.push(
      ...(
        ['needs-info', 'screening', 'community-review', 'curator-review', 'accepted'] as const
      ).map((status) => ({
        status,
        actor: 'TEST CURATOR',
        role: 'curator' as const,
        date: '2026-09-22',
        reason: 'Synthetic renewed review',
      })),
    );
    expect(() => assertMusicSubmission(entry)).toThrow(/latest acceptance/);
    entry.publication!.date = '2026-09-22';
    expect(() => assertMusicSubmission(entry)).not.toThrow();
  });

  it('flags exact duplicate audio without rejecting distinct interpretations or changing state', () => {
    const first = track();
    const second = { ...track(), id: 'test-only-second' };
    const before = JSON.stringify([first, second]);
    expect(
      musicScreeningWarnings([first, second]).some((w) => w.includes('possible duplicate')),
    ).toBe(true);
    expect(JSON.stringify([first, second])).toBe(before);
  });

  it('checks actual JSON files, rejects duplicate IDs, and never writes review decisions', () => {
    const dir = mkdtempSync(join(tmpdir(), 'solar24-music-test-'));
    try {
      const path = join(dir, 'entry.json');
      const original = JSON.stringify(idea());
      writeFileSync(path, original);
      expect(checkMusicFiles([path]).entries).toHaveLength(1);
      expect(readFileSync(path, 'utf8')).toBe(original);
      expect(() => checkMusicFiles([path, path])).toThrow(/Duplicate/);
      writeFileSync(path, '{}');
      expect(() => checkMusicFiles([path])).toThrow();
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});

describe('community entry points', () => {
  it('exports schemas from the same source used by validators', () => {
    for (const [name, schema] of [
      ['music-submission', MusicSubmissionSchema],
      ['contributor-credit', ContributorCreditSchema],
    ] as const) {
      expect(JSON.parse(readFileSync(`docs/protocol/schemas/${name}.schema.json`, 'utf8'))).toEqual(
        z.toJSONSchema(schema),
      );
    }
  });

  it('keeps the GitHub form usable with all terms and a required interpretation/rights/AI path', () => {
    const form = parse(readFileSync('.github/ISSUE_TEMPLATE/music-contribution.yml', 'utf8'));
    const fields = form.body.filter((item: { type: string }) => item.type !== 'markdown');
    expect(new Set(fields.map((f: { id: string }) => f.id)).size).toBe(fields.length);
    const field = (id: string) => fields.find((f: { id: string }) => f.id === id);
    expect(field('solar-term').attributes.options).toEqual([...solarTermSlugs]);
    expect(field('layer').attributes.options).not.toContain('featured');
    for (const id of [
      'creator',
      'location',
      'country',
      'creator-description',
      'title',
      'description',
      'inspiration',
      'intention',
      'why',
      'scope',
      'instrumentation',
      'audio',
      'audio-details',
      'method',
      'original',
      'license',
      'license-details',
      'ai',
      'ai-details',
      'references',
      'contact',
      'credits',
      'publication',
    ])
      expect(field(id)?.validations.required, id).toBe(true);
    expect(
      field('consent').attributes.options.every((o: { required: boolean }) => o.required),
    ).toBe(true);
    expect(field('publication').attributes.options).toEqual(['yes', 'no']);
  });
});
