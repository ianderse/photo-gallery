/**
 * Holiday 2026 content.
 *
 * TODO: these photos/videos are placeholders copied from 2025 — swap in the 2026 media
 * (put new files under /public/2026/...) before publishing.
 *
 * photos:       { src, alt }                       — the snapshot grid (click to enlarge)
 * achievements: { video?, image?, poster?, title, description }
 *               Use `video` for .mp4/.webm, or `image` for a still. `poster` is the video thumbnail.
 */
const content = {
  year: 2026,
  name: 'Zoe',
  eyebrow: 'The Annual Report',
  subtitle: 'Another Baby Life',
  intro:
    'Another year of record-breaking accomplishments, recorded here for the benefit of future historians.',
  photos: [
    { src: '/photos/real/1.JPEG', alt: 'Zoe, snapshot 1' },
    { src: '/photos/real/2.JPEG', alt: 'Zoe, snapshot 2' },
    { src: '/photos/real/3.JPEG', alt: 'Zoe, snapshot 3' },
    { src: '/photos/real/4.JPEG', alt: 'Zoe, snapshot 4' },
    { src: '/photos/real/5.JPEG', alt: 'Zoe, snapshot 5' },
    { src: '/photos/real/6.JPEG', alt: 'Zoe, snapshot 6' },
  ],
  achievements: [
    {
      video: '/videos/nobelpeaceprize.mp4',
      poster: '/photos/nobelpeaceprize.jpg',
      title: 'Nobel Peace Prize',
      description:
        "Zoe is presented with the 'Nobel Peace Prize', as the crowd looks on and applauds. Zoe was instrumental in the efforts to end nine wars in 2025, much to the chagrin of others who only ended eight wars.",
    },
    {
      video: '/videos/mountain.mp4',
      poster: '/photos/mountain.jpg',
      title: 'Summiting Mount Everest',
      description:
        'Zoe summits Mount Everest. Zoe was the first baby to summit the mountain without an oxygen tank.',
    },
    {
      video: '/videos/rockstar.mp4',
      poster: '/photos/rockstar.jpg',
      title: 'Headlining Coachella',
      description:
        "Lady Gaga remarked, 'It is not just her skill—Zoe is obviously the best guitar player of her generation, but her incredible stage presence commands the attention of thousands without her saying a word.'",
    },
    {
      video: '/videos/cutestbaby.mp4',
      poster: '/photos/cutestbaby.jpg',
      title: 'Cutest Baby of the Year',
      description: 'Zoe won the cutest baby of the year award with a unanimous decision.',
    },
    {
      video: '/videos/formulaone.mp4',
      poster: '/photos/formulaone.jpg',
      title: "Formula 0.5 — the final championship lap",
      description:
        "Max Verstappen had this to say about Zoe, 'Wow, her sheer grit and determination saw her easily win the F0.5 championship. I just count myself lucky that I will be retired by the time her feet can reach the pedals of a full size car, I would never win again racing against her.'",
    },
    {
      video: '/videos/moremilk.mp4',
      poster: '/photos/moremilk.jpg',
      title: 'More Milk Now Protests',
      description: "Zoe led the 'More Milk Now' movement, and she did in fact get more milk in the end.",
    },
    {
      video: '/videos/ceo.mp4',
      poster: '/photos/ceo.jpg',
      title: 'Fortune 500 CEO of the Year',
      description:
        "Zoe was named 'CEO of the Year' for delivering consistent shareholder value while also having the highest employee satisfaction score in the country.",
    },
  ],
  signoff: 'Happy holidays, from our family to yours.',
};

export default content;
