import { useRef, useEffect, useState } from 'react';
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
  const [showControls, setShowControls] = useState(false);
  const isInView = useInView(ref, { once: false, amount: 0.33 });
  const isInViewOnce = useInView(ref, { once: true, margin: "-100px" });
  const isVideoMedia = isVideo(item.image);

  // Handle video autoplay based on visibility
  useEffect(() => {
    if (!videoRef.current || !isVideoMedia) return;

    const video = videoRef.current;

    // Add error handler
    const handleError = (e) => {
      console.error('Video error:', e);
      console.error('Video error code:', video.error?.code);
      console.error('Video error message:', video.error?.message);
      setShowControls(true);
    };

    const handleLoadedMetadata = () => {
      console.log('Video metadata loaded');
    };

    const handleLoadedData = () => {
      console.log('Video data loaded');
    };

    video.addEventListener('error', handleError);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('loadeddata', handleLoadedData);

    if (isInView) {
      console.log('Video in view, readyState:', video.readyState);

      // Load the video if not already loaded (important for mobile)
      if (video.readyState === 0) {
        console.log('Loading video...');
        video.load();
      }

      // Ensure video is ready before playing
      if (video.readyState >= 3) {
        console.log('Video ready, attempting play...');
        video.play().catch((error) => {
          console.log('Autoplay prevented:', error);
          // Show controls if autoplay fails (common on mobile)
          setShowControls(true);
        });
      } else {
        const playWhenReady = () => {
          console.log('Video canplay event fired, attempting play...');
          video.play().catch((error) => {
            console.log('Autoplay prevented:', error);
            // Show controls if autoplay fails (common on mobile)
            setShowControls(true);
          });
        };
        video.addEventListener('canplay', playWhenReady, { once: true });

        return () => {
          video.removeEventListener('canplay', playWhenReady);
          video.removeEventListener('error', handleError);
          video.removeEventListener('loadedmetadata', handleLoadedMetadata);
          video.removeEventListener('loadeddata', handleLoadedData);
        };
      }
    } else {
      video.pause();
    }

    return () => {
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
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
              preload="auto"
              poster={item.poster}
              webkit-playsinline="true"
              controls={showControls}
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
