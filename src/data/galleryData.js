/**
 * Gallery Data Configuration
 * 
 * Customize your gallery by editing this file.
 * Each item should have the following structure:
 * 
 * {
 *   id: unique identifier (string or number)
 *   image: URL to the image or video (.mp4, .webm, .ogg, .mov)
 *   title: Main heading for the piece
 *   description: 2-3 sentences about the piece
 *   poster: Optional - thumbnail image for videos (shown before play)
 * }
 * 
 * Videos will autoplay (muted) when scrolled into view and pause when scrolled away.
 */

export const galleryConfig = {
  // Gallery header - set to null to hide
  title: "A Curated Collection",
  subtitle: "Selected Works",
};

export const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    title: "Alpine Serenity",
    description: "The first light of dawn breaks across the jagged peaks, painting the sky in gradients of rose and amber. In these quiet moments before the world awakens, the mountains hold an ancient silence."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    title: "Portrait Study",
    description: "Natural light filtering through linen curtains creates soft, diffused illumination. The interplay of shadow and highlight reveals character in ways harsh light never could."
  },
  {
    id: 3,
    // Example video - replace with your own .mp4 URL
    image: "/videos/rockstar.mp4",
    title: "Motion Study",
    description: "Movement captured in time, a fleeting moment preserved. Video content autoplays when scrolled into view and pauses when you scroll away.",
    poster: ""
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&q=80",
    title: "Coastal Minimalism",
    description: "Where the ocean meets the shore, there exists a liminal space of constant transformation. Each wave erases and rewrites the story of the sand, a meditation on impermanence."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80",
    title: "Golden Hour Fields",
    description: "Rolling hills stretch toward the horizon, each undulation catching the warm afternoon light differently. The cypress trees stand as sentinels, unchanged for centuries."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
    title: "Mist & Mountains",
    description: "Fog drifts through the valley like memories, revealing and concealing the ancient forest in turn. There's a profound stillness here, broken only by the distant call of ravens."
  }
];
