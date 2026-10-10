import { describe, expect, it } from 'vitest';
import { parseRoute, routeHash, clampDay, daysInMonth } from '../../docs/design/solar24-v4/src/state';
import { terms } from '../../docs/design/solar24-v4/src/data';

describe('V4 local prototype state boundaries', () => {
  it('restores every term and perspective from a deep link', () => {
    for (let term = 0; term < terms.length; term++) {
      for (const view of ['seasons', 'cosmos', 'life'] as const) {
        expect(parseRoute(routeHash({ term, view }))).toEqual({ term, view });
      }
    }
  });
  it('accepts the old slug-only link and normalizes unknown routes safely', () => {
    expect(parseRoute('#daxue')).toEqual({ term: 20, view: 'seasons' });
    expect(parseRoute('#missing/cosmos')).toEqual({ term: 0, view: 'cosmos' });
    expect(parseRoute('#yushui/missing')).toEqual({ term: 1, view: 'seasons' });
    expect(parseRoute('')).toEqual({ term: 0, view: 'seasons' });
  });
  it('keeps a selected day valid when crossing month boundaries in the 2026 preview', () => {
    expect(daysInMonth(1)).toBe(28);
    expect(clampDay(31, 1)).toBe(28);
    expect(clampDay(31, 3)).toBe(30);
    expect(clampDay(15, 1)).toBe(15);
    expect(clampDay(0, 0)).toBe(1);
  });
});
