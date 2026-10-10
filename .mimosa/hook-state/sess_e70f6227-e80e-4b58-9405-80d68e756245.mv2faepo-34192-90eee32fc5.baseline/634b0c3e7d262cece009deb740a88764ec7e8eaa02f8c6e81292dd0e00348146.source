import { describe, expect, it } from 'vitest';
import {
  DAY,
  YEAR_START,
  YEAR_END,
  cycleDates,
  nextTourDate,
  termAtDate,
  dialProgress,
  dateForRoute,
} from '../../docs/design/solar24-v5/src/timeline';
import { bookCopy } from '../../docs/design/solar24-v5/src/book-copy';
import provenance from '../../docs/design/solar24-v5/src/book-provenance.json';
import { terms } from '../../docs/design/solar24-v5/src/data';

describe('V5 calendar-driven journey', () => {
  it('restores the selected calendar day from history and rejects mismatched or invalid state', () => {
    expect(dateForRoute(0, Date.UTC(2026, 1, 12))).toBe(Date.UTC(2026, 1, 12));
    expect(dateForRoute(1, Date.UTC(2026, 1, 12))).toBe(cycleDates[1]);
    for (const value of [null, undefined, NaN, Infinity, '2026-02-12', Date.UTC(2030, 1, 12)]) {
      expect(dateForRoute(0, value)).toBe(YEAR_START);
    }
  });
  it('advances through all 24 terms in order over 365 dates and returns to Lichun', () => {
    const visited: number[] = [];
    let date = YEAR_START;
    for (let day = 0; day < 365; day++) {
      const term = termAtDate(date);
      if (visited.at(-1) !== term) visited.push(term);
      expect(date).toBe(YEAR_START + day * DAY);
      expect(dialProgress(date)).toBeGreaterThanOrEqual(term);
      expect(dialProgress(date)).toBeLessThan(term + 1);
      date = nextTourDate(date);
    }
    expect(visited).toEqual(Array.from({ length: 24 }, (_, i) => i));
    expect(date).toBe(YEAR_START);
    expect(YEAR_END - YEAR_START).toBe(365 * DAY);
  });
  it('switches on the reference day, not at equal fifteen-day intervals', () => {
    for (let term = 1; term < 24; term++) {
      expect(termAtDate(cycleDates[term] - DAY)).toBe(term - 1);
      expect(termAtDate(cycleDates[term])).toBe(term);
    }
    expect((cycleDates[1] - cycleDates[0]) / DAY).toBe(14);
    expect((cycleDates[4] - cycleDates[3]) / DAY).toBe(16);
  });
  it('keeps February, year rollover, and manual dates valid without timezone drift', () => {
    expect(new Date(nextTourDate(Date.UTC(2026, 1, 28))).toISOString()).toBe(
      '2026-03-01T00:00:00.000Z',
    );
    expect(new Date(nextTourDate(Date.UTC(2026, 11, 31))).toISOString()).toBe(
      '2027-01-01T00:00:00.000Z',
    );
    expect(termAtDate(Date.UTC(2027, 0, 1))).toBe(21);
    expect(termAtDate(Date.UTC(2027, 0, 5))).toBe(22);
    expect(termAtDate(Date.UTC(2027, 1, 4))).toBe(0);
    expect(termAtDate(Date.UTC(2026, 0, 1))).toBe(21);
    expect(termAtDate(Date.UTC(2027, 11, 22))).toBe(21);
  });
});

describe('V5 static introduction book', () => {
  it('gives every term five bilingual chapters with traceable factual sections', () => {
    for (const term of terms) {
      const copy = bookCopy[term.id];
      expect(copy).toHaveLength(5);
      const references = provenance.chapters[term.id as keyof typeof provenance.chapters];
      for (let i = 0; i < 5; i++) {
        expect(copy[i][0].length).toBeGreaterThan(25);
        expect(copy[i][1].length).toBeGreaterThan(50);
        if (i < 4) expect(references[i].length).toBeGreaterThan(0);
        else expect(references[i]).toEqual([]); // Explicit creative observation, not an invented citation.
        for (const id of references[i]) {
          const note = provenance.notes[id as keyof typeof provenance.notes];
          expect(note).toBeDefined();
          expect(note.sources.length).toBeGreaterThan(0);
          for (const sourceId of note.sources) {
            const source = provenance.sources[sourceId as keyof typeof provenance.sources];
            expect(new URL(source.url).protocol).toMatch(/^https?:$/);
          }
        }
      }
    }
    expect(provenance.editorialStatus).toBe('draft');
    expect(provenance.humanReview).toBeNull();
  });
});
