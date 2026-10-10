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
export function daysInMonth(month: number) {
  return new Date(Date.UTC(2026, month + 1, 0)).getUTCDate();
}
export function clampDay(day: number, month: number) {
  return Math.min(Math.max(1, day), daysInMonth(month));
}
export const places = [
  { id: 'water', name: '水岸观春', en: 'At the water', category: 1, position: [-5, -0.6, 6] },
  { id: 'field', name: '田畦与农时', en: 'In the fields', category: 2, position: [0, -0.4, 2] },
  { id: 'house', name: '屋舍与说春', en: 'A human voice', category: 3, position: [5, 1.5, 0] },
] as const;
