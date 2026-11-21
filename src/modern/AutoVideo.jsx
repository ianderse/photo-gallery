import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

// Muted looping video that plays while on screen and pauses when off screen.
// Falls back to native controls if the browser blocks autoplay.
export default function AutoVideo({ src, poster, className, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (inView) {
      const attempt = video.play();
      if (attempt) attempt.catch(() => setShowControls(true));
    } else {
      video.pause();
    }
  }, [inView]);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      controls={showControls}
      aria-label={label}
      onError={() => setShowControls(true)}
    />
  );
}
