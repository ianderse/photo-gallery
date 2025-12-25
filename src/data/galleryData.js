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
  title: "Zoe - 2025",
  subtitle: "Selected Works",
};

// Image strip items - appears as horizontal scrollable thumbnails under the header
// Separate from the main gallery items
export const imageStripItems = [
  {
    id: 'strip-1',
    image: "/photos/real/1.JPEG",
  },
  {
    id: 'strip-2',
    image: "/photos/real/2.JPEG",
  },
  {
    id: 'strip-3',
    image: "/photos/real/3.JPEG",
  },
  {
    id: 'strip-4',
    image: "/photos/real/4.JPEG",
  },
  {
    id: 'strip-5',
    image: "/photos/real/5.JPEG",
  },
  {
    id: 'strip-6',
    image: "/photos/real/6.JPEG",
  },
];

export const galleryItems = [
  {
    id: 1,
    image: "/videos/nobelpeaceprize.mp4",
    title: "Nobel Peace Prize",
    description: "Zoe is presented with the 'Nobel Peace Prize', as the crowd looks on and applauds. Zoe was instrumental in the efforts to end nine wars in 2025, much to the chagrin of others who only ended eight wars.",
    poster: "/photos/nobelpeaceprize.jpg"
  },
  {
    id: 2,
    image: "/videos/mountain.mp4",
    title: "Summiting Mount Everest",
    description: "Zoe summits Mount Everest. Zoe was the first baby to summit the mountain without an oxygen tank.",
    poster: "/pictures/mountain.jpg"
  },
  {
    id: 3,
    // Example video - replace with your own .mp4 URL
    image: "/videos/rockstar.mp4",
    title: "Motion Study",
    description: "Movement captured in time, a fleeting moment preserved. Video content autoplays when scrolled into view and pauses when you scroll away.",
    poster: "/pictures/rockstar.jpg"
  },
  {
    id: 4,
    image: "/videos/cutestbaby.mp4",
    title: "Motion Study",
    description: "Movement captured in time, a fleeting moment preserved. Video content autoplays when scrolled into view and pauses when you scroll away.",
    poster: "/pictures/cutestbaby.jpg"
  },
  {
    id: 5,
    image: "/videos/formulaone.mp4",
    title: "Motion Study",
    description: "Movement captured in time, a fleeting moment preserved. Video content autoplays when scrolled into view and pauses when you scroll away.",
    poster: "/pictures/formulaone.jpg"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
    title: "Mist & Mountains",
    description: "Fog drifts through the valley like memories, revealing and concealing the ancient forest in turn. There's a profound stillness here, broken only by the distant call of ravens."
  }
];
