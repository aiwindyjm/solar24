import { terms } from './data';
export type View = 'seasons' | 'cosmos' | 'life';
export type Lens = 'earth' | 'year';
export type Route = { term: number; view: View };
export function parseRoute(hash: string): Route {
  const [slug, view] = hash.replace(/^#/, '').split('/');
  return {
    term: Math.max(
      0,
      terms.findIndex((t) => t.id === slug),
    ),
    view: view === 'cosmos' || view === 'life' ? view : 'seasons',
  };
}
export function routeHash(route: Route) {
  return `#${terms[route.term].id}/${route.view}`;
}
export function daysInMonth(month: number, year = 2026) {
  return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}
export function clampDay(day: number, month: number, year = 2026) {
  return Math.min(Math.max(1, day), daysInMonth(month, year));
}
export const places = [
  { id: 'water', name: '水岸 · 停听', en: 'Water · listen', position: [-5, -0.6, 6] },
  { id: 'field', name: '田间 · 循时', en: 'Field · tend', position: [0, -0.4, 2] },
  { id: 'house', name: '灯下 · 留字', en: 'Home · remember', position: [5, 1.5, 0] },
] as const;
