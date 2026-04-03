# Makaela Johnston Portfolio — Development Plan

## Project Overview
- **Client:** Makaela Johnston — Production Designer & Set Decorator
- **Current site:** https://www.makaelajohnston.com (Squarespace — full custom rebuild)
- **Vibe:** Artsy professional
- **Stack:** Next.js 14 (App Router) + Tailwind CSS
- **Hosting:** Firebase Hosting → `makaelajohnston.web.app` + custom domain `makaelajohnston.com`
- **Repo:** https://github.com/ayyjayy2/makaela-johnston-portfolio
- **Branch strategy:** `main` (production) ← `develop` ← feature branches

---

## Design System

### Color Palette (client-specified)
| Name           | Hex       |
|----------------|-----------|
| Dark green     | `#0A3323` |
| Moss green     | `#839958` |
| Beige          | `#F7F4D5` |
| Rosy brown     | `#D3968C` |
| Midnight green | `#105666` |

### Typography
- **Headings:** Archivo (300–700)
- **Body:** Space Grotesk (300–700)
- Source: Google Fonts

### Style
- Motion-driven, artsy, elegant
- Serif-inspired aesthetic (ref: Lauren Baker Photography moodboard)
- Scroll animations (Intersection Observer), entrance animations, parallax hero
- Hover transitions: 300–400ms
- Always respect `prefers-reduced-motion`

---

## Site Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero with "Makaela Johnston" + "Production Design & Set Decoration" |
| About | `/about` | Bio + portrait photo |
| Commercial | `/commercial` | Project grid — brand/advertisement work |
| Narrative | `/narrative` | Project grid — film, TV, music video work |
| Project Detail | `/commercial/[slug]` `/narrative/[slug]` | Shared dynamic template |
| Resume | `/resume` | Production credits list + PDF download |
| Contact | `/contact` | Contact form + direct email |

### Known Commercial Projects
1. Spotify x Jack Harlow
2. Chicago Blackhawks "Night at the United Center"
3. Chicago Bulls 1966 x Just Don
4. A Kernel of Truth: A Benny the Bull Film
5. The Crab Place: Crab Cake Eggs Benny
6. Toyota "Naughty List"

### Notable Narrative Credits
- *Dark Matter* S1 & S2 — Apple TV (Art Dept Coordinator / Set Decoration Coordinator)
- *Saturn Return* — Netflix Feature Film (Set Decoration Buyer)
- *Chicago Fire* S12 — NBC (Set Decorator)
- *Justified: City Primeval* — FX/Hulu (Set Decorator)
- *Lightyears* S1 — Amazon Prime (Art Dept Coordinator)

### Contact
- Email: makaela.johnston@gmail.com

---

## Task Breakdown & Branch Strategy

| # | Branch | Task |
|---|--------|------|
| 1 | `setup/init` | Initialize GitHub repo + Next.js 14 + Tailwind scaffold |
| 2 | `setup/design-system` | Color tokens, fonts, global styles |
| 3 | `feat/navigation` | Sticky header, mobile hamburger nav |
| 4 | `feat/home` | Hero — name + role, entrance animations |
| 5 | `feat/about` | Bio + portrait photo |
| 6 | `feat/project-card` | Reusable card component (shared by Commercial & Narrative) |
| 7 | `feat/commercial` | Commercial grid (6 projects) |
| 8 | `feat/narrative` | Narrative grid (film/TV credits) |
| 9 | `feat/project-detail` | Dynamic `[slug]` template for both project types |
| 10 | `feat/resume` | Production credits list + PDF download |
| 11 | `feat/contact` | Contact form + email |
| 12 | `feat/footer` | Footer component |
| 13 | `feat/animations` | Scroll/entrance/hover animations |
| 14 | `feat/responsive` | Mobile → desktop pass (375px, 768px, 1024px, 1440px) |
| 15 | `feat/seo` | Meta tags, OG, sitemap, favicon |
| 16 | `deploy/firebase` | Firebase Hosting → `makaelajohnston.web.app` + custom domain |

---

## Pre-Delivery Checklist

- [ ] No emojis as icons (use SVG: Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150–300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard nav
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] All images have alt text
- [ ] OG tags + sitemap complete
- [ ] Firebase deploy verified on custom domain
