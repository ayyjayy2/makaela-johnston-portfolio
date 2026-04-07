# Working Hours Log — Makaela Johnston Portfolio

---

## Key

| Type | Description |
|------|-------------|
| **Dev** | Active development session with Claude |
| **Planning** | Solo planning, research, or design work outside of Claude |
| **Collab** | Meetings, calls, or collaboration with client or collaborators |
| **Review** | Design or code review sessions |

---

## Total Hours

| Category | Hours |
|----------|-------|
| Development (Claude sessions) | ~10h 15m |
| Planning & Collaboration | — |
| **Total** | **~10h 15m** |

---

## Log

### April 2026

#### 2026-04-06 — Dev Sessions (~4h 3m)
**Time 1:** 6:18 PM – 6:44 PM EDT (~26m)
**Time 2:** 6:53 PM – 10:55 PM EDT (~4h 2m)
**Type:** Development

**Work Completed:**
- Resume page (MJ-13) — full credits list, chronological order, All / Narrative / Commercial filter tabs
- Dynamic PDF generation — `@react-pdf/renderer` client-side via mount guard, professional LETTER format with contact header and credits sections
- Extracted credits data to `app/data/resume.ts` as single source of truth for page + PDF
- Site-wide terminology fix — replaced all instances of "Production Designer" with "Production Design"
- Added `.claude/` to `.gitignore` and removed accidentally committed internal files
- Resume data overhaul — corrected all 21 credits with accurate roles, studios, and types
- PDF improvements — fixed contact line alignment, added `|` delimiters, removed broken unicode icons, condensed for single-page fit
- Footer redesign — combined CTA band + footer, quote in rosy-brown above contact links (email, Instagram, IMDb), responsive layout
- About page select credits — replaced hardcoded stale array with dynamic slice from `data/resume.ts`
- Firebase deploy — initialized Hosting, created `makaelajohnston` project, site live at https://makaelajohnston.web.app
- Bloodline project page — added to narrative grid, YouTube video embed with autoplay (stashed, pending completion)
- Home page cleanup — removed marquee strip, eyebrow text, scroll indicator, CTA buttons, moved tagline under role line
- Footer cleanup — removed headline quote and copyright section
- Firebase cleanUrls fix — resolved 404s on clean URLs across all pages

---

#### 2026-04-03 — Dev Session (~5h 49m)
**Time:** 11:05 AM – 4:54 PM EDT
**Type:** Development

**Work Completed:**
- Project setup — GitHub repo, Next.js 14 + Tailwind CSS scaffold, Firebase Hosting plan
- Design system — color tokens (dark green, moss green, beige, rosy brown, midnight green), Archivo + Space Grotesk typography, global CSS architecture
- Navigation — sticky header with scroll behavior, mobile hamburger menu with animated bars
- Home page — two-column hero (photo + content), client marquee strip, quote/intro section
- About page — bio, 10+ years stat, disciplines list, select credits table, CTA band
- Design overhaul — full rebuild to dark cinematic theme, CSS-first architecture (no Tailwind layout utilities)
- Bug fixes — hero grid layout broken by CSS pseudo-element conflict, nav gradient veil for readability, quote section centering
- Project card component — reusable card with 16:9 image, hover overlay, "View Project →" CTA
- Commercial page — 3-column grid with all 6 commercial projects, responsive layout
- Narrative page — 3-column grid with all 5 narrative credits, responsive layout
- Project detail page — dynamic route template for all 11 projects with metadata, hero image, gallery, and prev/next navigation
- Working hours log — created and structured `notes/hours.md`
- Project documentation — converted and committed the project brief PDF to the repo
