import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImageModal.css';

function isVideo(src) {
  if (!src) return false;
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
  const lowercaseSrc = src.toLowerCase();
  return videoExtensions.some(ext => lowercaseSrc.includes(ext));
}

function ImageModal({ isOpen, onClose, item }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!item) return null;

  const isVideoMedia = isVideo(item.image);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close modal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="modal-media-wrapper">
              {isVideoMedia ? (
                <video
                  className="modal-media"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={item.image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="modal-media"
                />
              )}
            </div>

            <div className="modal-info">
              <h2 className="modal-title">{item.title}</h2>
              <p className="modal-description">{item.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ImageModal;
