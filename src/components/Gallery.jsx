import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Gallery.css';

function GalleryItem({ item, index, isReversed }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const indexNumber = String(index + 1).padStart(2, '0');

  return (
    <section 
      ref={ref}
      className={`gallery-item ${isReversed ? 'gallery-item--reversed' : ''}`}
    >
      <motion.div 
        className="gallery-item__image-container"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <div className="gallery-item__image-wrapper">
          <img 
            src={item.image} 
            alt={item.title}
            className="gallery-item__image"
            loading="lazy"
          />
        </div>
      </motion.div>

      <motion.div 
        className="gallery-item__content"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={textVariants}
      >
        <span className="gallery-item__index">{indexNumber}</span>
        <h2 className="gallery-item__title">{item.title}</h2>
        {item.subtitle && (
          <span className="gallery-item__subtitle">{item.subtitle}</span>
        )}
        <p className="gallery-item__description">{item.description}</p>
        {item.tags && (
          <div className="gallery-item__tags">
            {item.tags.map((tag, i) => (
              <span key={i} className="gallery-item__tag">{tag}</span>
            ))}
          </div>
        )}
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
            index={index}
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
