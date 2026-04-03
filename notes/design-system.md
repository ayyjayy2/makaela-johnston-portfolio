# Makaela Johnston Portfolio — Design System

## Vibe & Aesthetic

**Overall feel:** Artsy professional — the site should feel like walking into a curated gallery, not a corporate portfolio. Elevated, intentional, and personal.

**Style direction:** Motion-driven with elegant restraint. Inspired by the Lauren Baker Photography moodboard — earthy tones, confident serif energy, creative industry credibility without being flashy.

**Mood keywords:** Cinematic · Earthy · Elegant · Editorial · Handcrafted · Grounded · Expressive

**Reference:** The moodboard leans into vintage typography, rich natural colors, and artisan-feeling layouts. Think film credits meets fine art gallery.

---

## Color Palette

Client-specified. All five colors are used intentionally — not interchangeably.

| Name            | Hex       | CSS Variable                  | Use                                      |
|-----------------|-----------|-------------------------------|------------------------------------------|
| Dark green      | `#0A3323` | `--color-dark-green`          | Primary text, headings, dominant surfaces |
| Moss green      | `#839958` | `--color-moss-green`          | Borders, secondary accents, hover states |
| Beige           | `#F7F4D5` | `--color-beige`               | Site background — warm, not stark white  |
| Rosy brown      | `#D3968C` | `--color-rosy-brown`          | Accent, CTA highlights, warm touches     |
| Midnight green  | `#105666` | `--color-midnight-green`      | Muted text, links, subtle depth          |

### Semantic Aliases
These are what components should use — keeps the palette flexible if anything shifts.

| Alias                    | Maps To         | Purpose                  |
|--------------------------|-----------------|--------------------------|
| `--color-background`     | Beige           | Page background          |
| `--color-surface`        | White           | Cards, overlays          |
| `--color-text-primary`   | Dark green      | Main body/heading text   |
| `--color-text-muted`     | Midnight green  | Secondary/supporting text|
| `--color-accent`         | Rosy brown      | Highlights, CTAs         |
| `--color-border`         | Moss green      | Dividers, outlines       |

### Color Mood
The palette reads as natural and grounded — deep forest greens anchoring the warmth of the beige and rosy brown. Midnight green bridges the two. No blacks or pure whites — everything has organic warmth.

---

## Typography

### Font Pairing
| Role     | Font           | Weights         | Personality                            |
|----------|----------------|-----------------|----------------------------------------|
| Headings | **Archivo**    | 300, 400, 500, 600, 700 | Strong, geometric, confident. Has editorial presence without feeling stiff. Italic adds artsy softness. |
| Body     | **Space Grotesk** | 300, 400, 500, 600, 700 | Friendly and modern. Slightly quirky — feels human, not corporate. |

**Why this pairing:** Archivo's structure gives Makaela's name and titles the weight they deserve. Space Grotesk keeps descriptions and navigation approachable. Together they read as a creative professional who takes their craft seriously.

### Type Scale (fluid — scales between mobile and desktop)
| Token             | Size Range         | Used For               |
|-------------------|--------------------|------------------------|
| `--text-display`  | 3rem → 6rem        | Hero name / splash text |
| `--text-h1`       | 2rem → 3.5rem      | Page titles            |
| `--text-h2`       | 1.5rem → 2.25rem   | Section headings       |
| `--text-h3`       | 1.125rem → 1.5rem  | Sub-sections, card titles |
| `--text-body`     | 1rem               | Body copy              |
| `--text-small`    | 0.875rem           | Captions, labels, meta |

---

## Motion & Animation

**Philosophy:** Motion should feel like a breath, not a performance. Every animation serves a purpose — guiding attention, confirming interaction, or revealing content naturally.

| Type                  | Duration                     | Notes                                  |
|-----------------------|------------------------------|----------------------------------------|
| Micro-interactions    | `--transition-fast` (150ms)  | Hover color changes, focus rings       |
| Standard transitions  | `--transition-base` (300ms)  | Card hovers, nav states                |
| Entrances / reveals   | `--transition-slow` (400ms)  | Scroll-triggered, page elements        |
| Parallax              | Passive scroll               | Hero only, 3–5 layers                  |

**Always:** Respect `prefers-reduced-motion` — all animations disabled for users who opt out.

---

## Layout & Spacing

- **Max content width:** `max-w-6xl` (1152px) — wide enough to breathe, not so wide it sprawls
- **Section spacing:** `--spacing-section` — fluid `clamp(4rem, 10vw, 8rem)` top/bottom padding
- **Grid:** CSS Grid for project layouts, Flexbox for nav and inline components
- **Line length:** Body text capped at `65ch` for readability

---

## Z-Index Scale

| Variable        | Value | Used For                  |
|-----------------|-------|---------------------------|
| `--z-base`      | 10    | Default elevated elements |
| `--z-overlay`   | 20    | Card hovers, tooltips     |
| `--z-nav`       | 30    | Navigation header         |
| `--z-modal`     | 50    | Lightbox, modals          |

---

## Accessibility Baseline

- Minimum contrast ratio: **4.5:1** for body text (WCAG AA)
- Focus rings: `2px solid --color-moss-green` on all interactive elements
- Touch targets: minimum **44×44px**
- No color as the only indicator
- All images require descriptive `alt` text
- Tab order must match visual reading order
