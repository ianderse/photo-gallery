import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import './Gallery.css';

function isVideo(src) {
  if (!src) return false;
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
  const lowercaseSrc = src.toLowerCase();
  return videoExtensions.some(ext => lowercaseSrc.includes(ext));
}

function GalleryItem({ item, isReversed }) {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.33 });
  const isInViewOnce = useInView(ref, { once: true, margin: "-100px" });
  const isVideoMedia = isVideo(item.image);

  // Handle video autoplay based on visibility
  useEffect(() => {
    if (!videoRef.current || !isVideoMedia) return;

    const video = videoRef.current;

    if (isInView) {
      // Ensure video is ready before playing
      if (video.readyState >= 3) {
        video.play().catch((error) => {
          console.log('Autoplay prevented:', error);
        });
      } else {
        video.addEventListener('canplay', () => {
          video.play().catch((error) => {
            console.log('Autoplay prevented:', error);
          });
        }, { once: true });
      }
    } else {
      video.pause();
    }
  }, [isInView, isVideoMedia]);

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.02 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section 
      ref={ref}
      className={`gallery-item ${isReversed ? 'gallery-item--reversed' : ''}`}
    >
      <motion.div 
        className="gallery-item__image-container"
        initial="hidden"
        animate={isInViewOnce ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <div className="gallery-item__image-wrapper">
          {isVideoMedia ? (
            <video
              ref={videoRef}
              src={item.image}
              className="gallery-item__media gallery-item__video"
              muted
              loop
              playsInline
              preload="metadata"
              poster={item.poster}
            />
          ) : (
            <img 
              src={item.image} 
              alt={item.title}
              className="gallery-item__media gallery-item__image"
              loading="lazy"
            />
          )}
        </div>
      </motion.div>

      <motion.div 
        className="gallery-item__content"
        initial="hidden"
        animate={isInViewOnce ? "visible" : "hidden"}
        variants={textVariants}
      >
        <h2 className="gallery-item__title">{item.title}</h2>
        <p className="gallery-item__description">{item.description}</p>
      </motion.div>
    </section>
  );
}

function Gallery({ items, title, subtitle }) {
  return (
    <div className="gallery">
      {(title || subtitle) && (
        <header className="gallery__header">
          {subtitle && <span className="gallery__subtitle">{subtitle}</span>}
          {title && <h1 className="gallery__title">{title}</h1>}
          <div className="gallery__header-line" />
        </header>
      )}

      <div className="gallery__items">
        {items.map((item, index) => (
          <GalleryItem 
            key={item.id || index}
            item={item}
            isReversed={index % 2 === 1}
          />
        ))}
      </div>

      <footer className="gallery__footer">
        <div className="gallery__footer-line" />
        <span className="gallery__footer-text">
          {items.length} {items.length === 1 ? 'piece' : 'pieces'}
        </span>
      </footer>
    </div>
  );
}

export default Gallery;
