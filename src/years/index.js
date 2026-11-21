/**
 * Year registry — newest first. The first entry is the home page ("/").
 *
 * Each new holiday season:
 *   1. Change the current year's `path` from "/" to "/<year>" so it becomes an archive page.
 *   2. Add a new folder (e.g. ./2027) with a content.js and Page.jsx, copying the latest year.
 *   3. Add an entry for it at the top of this list with path "/".
 * Every entry after the first automatically shows up in the "Past years" links.
 */
export const years = [
  {
    year: 2026,
    path: '/',
    tagline: 'Another Baby Life',
    load: () => import('./2026/Page.jsx'),
  },
  {
    year: 2025,
    path: '/2025',
    tagline: 'A Baby Life',
    load: () => import('./2025/Page.jsx'),
  },
];

export const currentYear = years[0];
export const pastYears = years.slice(1);

function normalize(pathname) {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

export function findYear(pathname) {
  const path = normalize(pathname);
  return years.find((y) => y.path === path) ?? currentYear;
}
