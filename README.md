# Molly Varangkounh - Brand Website

A high-end, award-winning website with a modern editorial/agency aesthetic for Molly Varangkounh, a leadership advisor who helps leaders gain clarity and make bold, grounded decisions.

## Design Approach

- **Typography**: Cormorant Garamond for editorial headlines, DM Sans for body text
- **Color Palette**: Sophisticated greyscale with warm cream backgrounds and subtle accent colors
- **Animations**: Scroll-triggered reveals, parallax effects, and staggered entrances using Framer Motion
- **Layout**: 12-column grid system with generous whitespace

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (custom configuration)
- **Animations**: Framer Motion
- **Typography**: Google Fonts (Cormorant Garamond, DM Sans)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css    # Global styles and CSS utilities
│   ├── layout.tsx     # Root layout with metadata
│   └── page.tsx       # Main page component
├── components/
│   ├── Navbar.tsx     # Hide-on-scroll navigation
│   ├── Hero.tsx       # Oversized typography with parallax
│   ├── Mission.tsx    # Mission statement section
│   ├── Vision.tsx     # Dark contrast vision section
│   ├── FounderStory.tsx # Two-column founder story
│   ├── Values.tsx     # Accordion-style values list
│   ├── Approach.tsx   # Brand archetypes and microscripts
│   ├── CTA.tsx        # Large interactive links
│   └── Footer.tsx     # Minimal footer
├── tailwind.config.ts # Custom Tailwind configuration
└── package.json       # Dependencies and scripts
```

## Key Features

- Fluid typography using `clamp()` for responsive scaling
- Scroll-linked animations with smooth easing
- Hidden scrollbar for cleaner aesthetic
- Custom hover states with subtle transforms
- Mobile-responsive design

## Brand Guidelines Implemented

- **Mission**: Helping leaders gain clarity and make bold, grounded decisions
- **Vision**: A world where leaders approach difficult decisions with clarity and confidence
- **Values**: Loving, Brave, Positive, Inspiring, Authentic
- **Tagline**: Lead with clarity. Make bold moves.

---

Built with intention, designed for impact.



