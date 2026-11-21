import { lazy, Suspense } from 'react';
import { findYear } from './years';

// Each year is its own lazily loaded chunk, so one year's CSS never loads on another year's page.
// Navigation between years is a full page load, so the path is resolved once.
const Page = lazy(findYear(window.location.pathname).load);

function App() {
  return (
    <Suspense fallback={<div className="page-loading" aria-hidden="true" />}>
      <Page />
    </Suspense>
  );
}

export default App;
