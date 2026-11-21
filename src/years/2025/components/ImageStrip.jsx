import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageModal from './ImageModal';
import './ImageStrip.css';

function isVideo(src) {
  if (!src) return false;
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
  const lowercaseSrc = src.toLowerCase();
  return videoExtensions.some(ext => lowercaseSrc.includes(ext));
}

function ImageStrip({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <>
      <div className="image-strip">
        <div className="image-strip__container">
          {items.map((item, index) => {
            const isVideoMedia = isVideo(item.image);
            const thumbnailSrc = isVideoMedia && item.poster ? item.poster : item.image;

            return (
              <motion.div
                key={item.id || index}
                className="image-strip__item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleImageClick(item)}
              >
                {isVideoMedia && !item.poster ? (
                  <video
                    className="image-strip__thumbnail"
                    src={item.image}
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={thumbnailSrc}
                    alt={item.title}
                    className="image-strip__thumbnail"
                  />
                )}
                <div className="image-strip__overlay">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
      />
    </>
  );
}

export default ImageStrip;
