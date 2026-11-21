import { useEffect } from 'react';
import Gallery from './components/Gallery';
import { galleryItems, galleryConfig, imageStripItems } from './galleryData';
import { currentYear } from '../index';
import './legacy.css';

// The original holiday2025 site, preserved as-is. Only this wrapper and the
// "back" link are new; everything under ./components is frozen.
export default function Page2025() {
  useEffect(() => {
    document.title = 'Zoe — 2025';
    document.documentElement.classList.add('is-legacy-2025');
    return () => document.documentElement.classList.remove('is-legacy-2025');
  }, []);

  return (
    <main className="legacy-2025">
      <Gallery
        items={galleryItems}
        title={galleryConfig.title}
        subtitle={galleryConfig.subtitle}
        stripItems={imageStripItems}
      />
      <a className="legacy-2025__home" href={currentYear.path}>
        ← Holiday {currentYear.year}
      </a>
    </main>
  );
}
