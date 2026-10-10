// Date-level reference, Hong Kong (UTC+8). No live ephemeris or exact crossing times.
// Hong Kong Observatory: /en/gts/time/calendar/text/files/T2026e.txt and T2027e.txt
export const DAY = 86_400_000;
export const TICK_MS = 600;
const dates = [
  '2026-02-04',
  '2026-02-18',
  '2026-03-05',
  '2026-03-20',
  '2026-04-05',
  '2026-04-20',
  '2026-05-05',
  '2026-05-21',
  '2026-06-05',
  '2026-06-21',
  '2026-07-07',
  '2026-07-23',
  '2026-08-07',
  '2026-08-23',
  '2026-09-07',
  '2026-09-23',
  '2026-10-08',
  '2026-10-23',
  '2026-11-07',
  '2026-11-22',
  '2026-12-07',
  '2026-12-22',
  '2027-01-05',
  '2027-01-20',
  '2027-02-04',
];
export const cycleDates = dates.map((date) => Date.parse(`${date}T00:00:00Z`));
export const YEAR_START = cycleDates[0];
export const YEAR_END = cycleDates[24];
const nextYear = [
  '02-04',
  '02-19',
  '03-06',
  '03-21',
  '04-05',
  '04-20',
  '05-06',
  '05-21',
  '06-06',
  '06-21',
  '07-07',
  '07-23',
  '08-08',
  '08-23',
  '09-08',
  '09-23',
  '10-08',
  '10-23',
  '11-07',
  '11-22',
  '12-07',
  '12-22',
];
const boundaries = [
  { date: Date.UTC(2026, 0, 1), term: 21 }, // January opens in the preceding winter-solstice interval.
  { date: Date.UTC(2026, 0, 5), term: 22 },
  { date: Date.UTC(2026, 0, 20), term: 23 },
  ...cycleDates.slice(0, 24).map((date, term) => ({ date, term })),
  ...nextYear.map((date, term) => ({ date: Date.parse(`2027-${date}T00:00:00Z`), term })),
];
export function termAtDate(date: number) {
  for (let i = boundaries.length - 1; i >= 0; i--) {
    if (date >= boundaries[i].date) return boundaries[i].term;
  }
  return 21;
}
export function nextTourDate(date: number) {
  return date + DAY >= YEAR_END ? YEAR_START : date + DAY;
}
export function dateForRoute(term: number, saved: unknown) {
  return typeof saved === 'number' &&
    Number.isInteger(saved / DAY) &&
    saved >= Date.UTC(2026, 0, 1) &&
    saved < Date.UTC(2028, 0, 1) &&
    termAtDate(saved) === term
    ? saved
    : cycleDates[term];
}
// Interpolation is a reading aid between published dates, not a calculated solar longitude.
export function dialProgress(date: number) {
  let i = cycleDates.length - 1;
  while (i >= 0 && date < cycleDates[i]) i--;
  if (i < 0 || i >= 24) return termAtDate(date);
  return i + (date - cycleDates[i]) / (cycleDates[i + 1] - cycleDates[i]);
}
