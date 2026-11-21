import { useCallback, useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import AutoVideo from './AutoVideo';
import Lightbox from './Lightbox';
import { pastYears } from '../years';
import './ModernPage.css';

const ease = [0.2, 0.8, 0.2, 1];

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease },
  }),
};

const pad = (n) => String(n).padStart(2, '0');

function ArchiveLinks({ className = '' }) {
  if (pastYears.length === 0) return null;
  return (
    <ul className={`hx-archive ${className}`}>
      {pastYears.map((y) => (
        <li key={y.year}>
          <a href={y.path}>
            <span className="hx-archive__year">{y.year}</span>
            <span className="hx-archive__tagline">{y.tagline}</span>
            <span className="hx-archive__arrow" aria-hidden="true">→</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Hero({ content }) {
  return (
    <header className="hx-hero">
      <div className="hx-hero__snow" aria-hidden="true" />
      <nav className="hx-nav">
        <span className="hx-nav__mark">
          {content.name}
          <em>Holiday {content.year}</em>
        </span>
        {pastYears.length > 0 && (
          <div className="hx-nav__archive">
            <span className="hx-nav__label">Past years</span>
            {pastYears.map((y) => (
              <a key={y.year} href={y.path}>
                {y.year}
              </a>
            ))}
          </div>
        )}
      </nav>

      <div className="hx-hero__body">
        <Motion.p className="hx-eyebrow" variants={rise} initial="hidden" animate="show" custom={0}>
          {content.eyebrow} · Vol. {pad(pastYears.length + 1)}
        </Motion.p>
        <h1 className="hx-hero__title">
          <Motion.span
            className="hx-hero__name"
            initial={{ opacity: 0, y: '0.35em' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease }}
          >
            {content.name}
          </Motion.span>
          <Motion.span
            className="hx-hero__year"
            initial={{ opacity: 0, rotate: -14, scale: 0.8 }}
            animate={{ opacity: 1, rotate: -6, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
          >
            {content.year}
          </Motion.span>
        </h1>
        <Motion.p className="hx-hero__subtitle" variants={rise} initial="hidden" animate="show" custom={4}>
          {content.subtitle}
        </Motion.p>
        <Motion.p className="hx-hero__intro" variants={rise} initial="hidden" animate="show" custom={5}>
          {content.intro}
        </Motion.p>
      </div>

      <Motion.div
        className="hx-hero__stats"
        variants={rise}
        initial="hidden"
        animate="show"
        custom={6}
      >
        <div>
          <strong>{pad(content.achievements.length)}</strong>
          <span>Major achievements</span>
        </div>
        <div>
          <strong>{pad(content.photos.length)}</strong>
          <span>Official portraits</span>
        </div>
        <a className="hx-hero__cue" href="#snapshots">
          Scroll <span aria-hidden="true">↓</span>
        </a>
      </Motion.div>
    </header>
  );
}

function Snapshots({ photos, onOpen }) {
  return (
    <section className="hx-snaps" id="snapshots">
      <div className="hx-section-head">
        <span className="hx-section-head__num">§ 01</span>
        <h2>
          Official <em>portraits</em>
        </h2>
        <p>Released by the press office. Tap to enlarge.</p>
      </div>
      <div className="hx-snaps__grid">
        {photos.map((photo, i) => (
          <Motion.button
            type="button"
            key={photo.src}
            className="hx-snap"
            style={{ '--tilt': `${(i % 2 ? 1 : -1) * (1 + (i % 3))}deg` }}
            onClick={() => onOpen(i)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease }}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <span className="hx-snap__tag">No. {pad(i + 1)}</span>
          </Motion.button>
        ))}
      </div>
    </section>
  );
}

function Achievements({ items }) {
  return (
    <section className="hx-feats">
      <div className="hx-section-head hx-section-head--light">
        <span className="hx-section-head__num">§ 02</span>
        <h2>
          The <em>achievements</em>
        </h2>
        <p>A selection of this year&rsquo;s highlights, in no particular order of importance.</p>
      </div>
      <ol className="hx-feats__stack">
        {items.map((item, i) => (
          <li
            key={item.title}
            className={`hx-feat hx-feat--${i % 4}`}
            style={{ '--i': i }}
          >
            <div className="hx-feat__media">
              {item.video ? (
                <AutoVideo
                  className="hx-feat__video"
                  src={item.video}
                  poster={item.poster}
                  label={item.title}
                />
              ) : (
                <img className="hx-feat__video" src={item.image} alt={item.title} loading="lazy" />
              )}
            </div>
            <div className="hx-feat__text">
              <span className="hx-feat__num">
                {pad(i + 1)}
                <small>/{pad(items.length)}</small>
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Footer({ content }) {
  return (
    <footer className="hx-footer">
      <div className="hx-hero__snow" aria-hidden="true" />
      <p className="hx-footer__signoff">{content.signoff}</p>
      <p className="hx-footer__big">
        Happy <em>holidays</em>
      </p>
      {pastYears.length > 0 && (
        <div className="hx-footer__archive">
          <h2 className="hx-eyebrow">From the archive</h2>
          <ArchiveLinks />
        </div>
      )}
      <p className="hx-footer__fine">
        {content.name} · Holiday {content.year}
      </p>
    </footer>
  );
}

export default function ModernPage({ content }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    document.title = `${content.name} — ${content.year}`;
  }, [content.name, content.year]);

  return (
    <div className="hx">
      <Hero content={content} />
      <main>
        <Snapshots photos={content.photos} onOpen={setLightboxIndex} />
        <Achievements items={content.achievements} />
      </main>
      <Footer content={content} />
      <Lightbox
        photos={content.photos}
        index={lightboxIndex}
        onChange={setLightboxIndex}
        onClose={closeLightbox}
      />
    </div>
  );
}
