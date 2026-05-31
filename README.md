# Fatehin Alam Portfolio

A premium personal portfolio built with Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis, and React Icons.

## Features

- Modern dark luxury design
- Smooth scrolling
- Scroll reveal animations
- Staggered motion sections
- Parallax-inspired hero composition
- Animated navbar and scroll progress indicator
- Skills, projects, timeline, contact form, and footer
- SEO metadata, Open Graph, Twitter card support
- Sitemap and robots support
- Fully responsive layout

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Next.js.

## Production build

```bash
npm run build
npm start
```

## Optional environment variable

Set this before deployment if you want absolute metadata URLs in production:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Replace the profile photo

The hero uses:

```text
public/profile.jpg
```

Replace that file with your own photo to update the portfolio image everywhere it is used.

## Project structure

- `app/` — App Router pages and SEO routes
- `components/` — UI and motion sections
- `hooks/` — smooth scroll, scroll progress, and GSAP reveal hooks
- `lib/` — site content and shared utilities
- `public/` — static assets
- `styles/` — global styles and design system utilities
