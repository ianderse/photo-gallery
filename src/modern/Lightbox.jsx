import { useCallback, useEffect } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';

export default function Lightbox({ photos, index, onChange, onClose }) {
  const open = index !== null;
  const step = useCallback(
    (delta) => onChange((index + delta + photos.length) % photos.length),
    [index, onChange, photos.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, step]);

  const photo = open ? photos[index] : null;

  return (
    <AnimatePresence>
      {open && (
        <Motion.div
          className="hx-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <Motion.img
            key={photo.src}
            className="hx-lightbox__img"
            src={photo.src}
            alt={photo.alt}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="hx-lightbox__bar" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => step(-1)} aria-label="Previous photo">←</button>
            <span>
              {String(index + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
            </span>
            <button type="button" onClick={() => step(1)} aria-label="Next photo">→</button>
            <button type="button" className="hx-lightbox__close" onClick={onClose} aria-label="Close">
              Close
            </button>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
