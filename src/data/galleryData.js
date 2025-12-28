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
    poster: "/photos/mountain.jpg"
  },
  {
    id: 3,
    image: "/videos/rockstar.mp4",
    title: "Zoe headlining Coachella",
    description: "Lady Gaga remarked, 'It is not just her skill—Zoe is obviously the best guitar player of her generation, but her incredible stage presence commands the attention of thousands without her saying a word.'",
    poster: "/photos/rockstar.jpg"
  },
  {
    id: 4,
    image: "/videos/cutestbaby.mp4",
    title: "Cutest Baby 2025",
    description: "Zoe won the cutest baby of the year award with a unanimous decision.",
    poster: "/photos/cutestbaby.jpg"
  },
  {
    id: 5,
    image: "/videos/formulaone.mp4",
    title: "Formula 0.5 - Zoe's final championship lap",
    description: "Max Verstappen had this to say about Zoe, 'Wow, her sheer grit and determination saw her easily win the F0.5 championship. I just count myself lucky that I will be retired by the time her feet can reach the pedals of a full size car, I would never win again racing against her.",
    poster: "/photos/formulaone.jpg"
  },
  {
    id: 6,
    image: "/videos/moremilk.mp4",
    title: "More Milk Now Protests",
    description: "Zoe led the 'More Milk Now' movement, and she did in fact get more milk in the end.",
    poster: "/photos/moremilk.jpg"
  },
  {
    id: 7,
    image: "/videos/ceo.mp4",
    title: "Fortune 500 CEO of the year",
    description: "Zoe was named 'CEO of the Year' for delivering consistent shareholder value while also having the highest employee satisfaction score in the country.",
    poster: "/photos/ceo.jpg"
  }
];
