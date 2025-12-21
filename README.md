# Photo Gallery

An elegant, editorial-style photo gallery with smooth scroll animations and alternating split-screen layout. Built with React and Framer Motion.

## Features

- **Alternating split layout** — Images and text alternate sides as you scroll
- **Video support** — Videos autoplay (muted) when scrolled into view
- **Subtle fade animations** — Elements gracefully animate into view
- **Fully responsive** — Stacks to single column on mobile
- **Easy customization** — Just edit one data file to add your photos
- **Vercel-ready** — Deploy in minutes

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Customizing Your Gallery

All customization happens in one file: `src/data/galleryData.js`

### Change the Header

```js
export const galleryConfig = {
  title: "Your Gallery Title",      // Main heading (or null to hide)
  subtitle: "Your Subtitle",        // Small text above title (or null to hide)
};
```

### Add Images or Videos

Each gallery item follows this structure:

```js
{
  id: 1,                           // Unique identifier
  image: "https://...",            // Image or video URL
  title: "Title",                  // Main heading
  description: "Your description text goes here...",
  poster: "https://..."            // Optional: thumbnail for videos
}
```

### Video Support

Videos are automatically detected by file extension (`.mp4`, `.webm`, `.ogg`, `.mov`).

- Videos autoplay when scrolled into view
- Videos pause when scrolled out of view
- Videos are muted and loop by default
- Optional `poster` property sets a thumbnail image

```js
{
  id: 2,
  image: "/videos/my-video.mp4",   // Video file
  title: "Motion Study",
  description: "A short film exploring movement.",
  poster: "/images/video-thumb.jpg" // Optional thumbnail
}
```

### Using Local Files

1. Add images/videos to `public/images/` or `public/videos/`
2. Reference them like: `image: "/images/your-photo.jpg"`

## Customizing Styles

### Colors

Edit the CSS variables in `src/components/Gallery.css`:

```css
.gallery {
  --color-bg: #f8f7f4;           /* Main background */
  --color-bg-alt: #f0eeea;       /* Alternating section background */
  --color-text: #1a1a1a;         /* Primary text */
  --color-text-muted: #6b6b6b;   /* Secondary text */
  --color-text-light: #999999;   /* Subtle text */
  --color-accent: #2d2d2d;       /* Accent color */
  --color-border: #e0ded9;       /* Borders and dividers */
}
```

### Fonts

The gallery uses Google Fonts (Cormorant Garamond + DM Sans). To change them:

1. Update the `@import` in `src/index.css`
2. Update `--font-display` and `--font-body` in `Gallery.css`

## Deploy to Vercel

### Option 1: Via Git

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the repository at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite — just click Deploy

### Option 2: Via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Project Structure

```
photo-gallery/
├── public/
│   ├── images/          # Local images
│   └── videos/          # Local videos
├── src/
│   ├── components/
│   │   ├── Gallery.jsx  # Main gallery component
│   │   └── Gallery.css  # Gallery styles
│   ├── data/
│   │   └── galleryData.js  # ← YOUR CONTENT GOES HERE
│   ├── App.jsx
│   ├── App.css
│   ├── index.css        # Global styles & fonts
│   └── main.jsx
├── index.html
└── package.json
```

## License

MIT
