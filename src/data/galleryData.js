/**
 * Gallery Data Configuration
 * 
 * Customize your gallery by editing this file.
 * Each item should have the following structure:
 * 
 * {
 *   id: unique identifier (string or number)
 *   image: URL to the image
 *   title: Main heading for the piece
 *   subtitle: Optional - Date, location, or category (appears above description)
 *   description: 2-3 sentences about the piece
 *   tags: Optional - Array of tags/categories
 * }
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
    subtitle: "Dolomites, Italy — 2024",
    description: "The first light of dawn breaks across the jagged peaks, painting the sky in gradients of rose and amber. In these quiet moments before the world awakens, the mountains hold an ancient silence.",
    tags: ["Landscape", "Mountains", "Dawn"]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    title: "Portrait Study",
    subtitle: "Studio Series — No. 7",
    description: "Natural light filtering through linen curtains creates soft, diffused illumination. The interplay of shadow and highlight reveals character in ways harsh light never could.",
    tags: ["Portrait", "Natural Light"]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80",
    title: "Urban Nocturne",
    subtitle: "Tokyo, Japan — 2023",
    description: "Neon signs flicker against the rain-slicked streets, their reflections fragmenting into rivers of color. The city breathes differently at night—faster, more alive, unapologetically itself.",
    tags: ["Urban", "Night", "Japan"]
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&q=80",
    title: "Coastal Minimalism",
    subtitle: "Pacific Coast — Winter",
    description: "Where the ocean meets the shore, there exists a liminal space of constant transformation. Each wave erases and rewrites the story of the sand, a meditation on impermanence.",
    tags: ["Seascape", "Minimal"]
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80",
    title: "Golden Hour Fields",
    subtitle: "Tuscany — Summer Solstice",
    description: "Rolling hills stretch toward the horizon, each undulation catching the warm afternoon light differently. The cypress trees stand as sentinels, unchanged for centuries.",
    tags: ["Landscape", "Golden Hour", "Italy"]
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
    title: "Mist & Mountains",
    subtitle: "Pacific Northwest — Autumn",
    description: "Fog drifts through the valley like memories, revealing and concealing the ancient forest in turn. There's a profound stillness here, broken only by the distant call of ravens.",
    tags: ["Nature", "Fog", "Forest"]
  }
];
