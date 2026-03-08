# CLAUDE.md — OneHeart Group Website

## Quick Reference

This is a Next.js 16 single-page site using Tailwind CSS v4 and TypeScript.
All site content lives in one file. Components are layout-only — they read data, not define it.

## Content Editing

**To change ANY text, image, stat, CTA, or link on the site, edit only:**

```
lib/site-data.ts
```

Here's what each export controls:

| Export | Section | What it controls |
|---|---|---|
| `siteConfig` | Global | Company name, email, phone, location, logo path |
| `navItems` | Header | Navigation menu links |
| `brandLogos` | Logo carousel | Partner logo images (tripled in component for infinite scroll) |
| `heroContent` | Hero | Badge text, H1 heading, description, CTA buttons, video sources |
| `serviceCards` | Solutions Grid | 4 service cards (title, description, icon key, feature list) |
| `ctaTop` | First CTA banner | Heading, description, button, background image |
| `stats` | Stats bar | 4 stat items (value, label, icon key) |
| `aboutContent` | About | Section heading, subtitle, two sub-sections with paragraphs + images |
| `coreValues` | About (bottom) | 4 value cards (label, description, icon key) |
| `whyChooseUsItems` | Why Choose Us | 4 cards with stat, statLabel, title, description, icon key |
| `ctaBottom` | Second CTA banner | Heading, description, two buttons, background image |
| `technologyContent` | Technology | Section heading, subtitle, description, image |
| `technologyHighlights` | Technology | 4 tech feature cards (title, description) |
| `operationsImages` | Gallery | 6 gallery images (src, alt) |
| `commitmentItems` | Commitment | 4 commitment cards (title, description, icon key) |
| `contactInfo` | Contact | 3 info cards — titles, subtitles, icon keys (values come from siteConfig) |
| `footerLinks` | Footer | Service links and company links |

## Icon System

Icons are string keys mapped to SVGs in `components/icons.tsx` via `getIcon(key, sizeClass)`.

**Available icon keys:** `people`, `shield`, `lightbulb`, `trending`, `alert`, `trophy`, `location`, `headset`, `email`, `phone`

**Service card icons** (defined separately in `components/solutions-grid.tsx`): `warehouse`, `chart`, `globe`, `truck`

**Stats icons** (defined separately in `components/stats-section.tsx`): `package`, `people`, `check`, `clock`

To add a new icon: add a key + SVG path string to `components/icons.tsx` in the `paths` record, then use that key in `site-data.ts`.

## File Structure

```
app/
  layout.tsx          — Root layout, metadata, body classes
  page.tsx            — Composes all section components in order
  globals.css         — Tailwind v4 theme tokens, custom animations

components/
  icons.tsx           — Shared getIcon() helper (string key → SVG)
  site-header.tsx     — Fixed header with scroll effect, mobile menu
  hero-video.tsx      — Fullscreen video hero ← heroContent
  logo-carousel.tsx   — Infinite scroll logo strip ← brandLogos
  solutions-grid.tsx  — 4-col service cards ← serviceCards
  scale-cta-section.tsx — CTA banner with bg image ← ctaTop
  stats-section.tsx   — 4-col stats bar ← stats
  about-section.tsx   — About with two sub-grids + core values ← aboutContent, coreValues
  why-choose-us.tsx   — 2-col cards with stats ← whyChooseUsItems
  scale-cta-bottom.tsx — Second CTA banner ← ctaBottom
  technology-section.tsx — Text + image grid ← technologyContent, technologyHighlights
  operations-section.tsx — 3-col image gallery ← operationsImages
  commitment-section.tsx — 2-col commitment cards ← commitmentItems
  contact-section.tsx — Form + info cards ← contactInfo, siteConfig
  site-footer.tsx     — Footer grid ← siteConfig, footerLinks

lib/
  site-data.ts        — ALL site content (single source of truth)

public/
  images/             — All images (.webp, .png, .svg)
  videos/             — Hero background videos (.mp4, .webm)
```

## Design Tokens (globals.css)

Colors, fonts, and custom utilities are defined in `app/globals.css` under `@theme`:

- `--color-bg-default: #060606` (near-black background)
- `--color-bg-secondary: #14191f` (dark gray sections)
- `--color-brand-primary: #b63e9e` (magenta — buttons, accents)
- `--color-brand-purple: #361d72` (deep purple — hero CTAs)
- `--color-brand-pink: #df4eac` (gradient accent)
- Fonts: DM Sans (body), DM Mono (section labels)

## Common Tasks

**Change company contact info:** Edit `siteConfig` in `lib/site-data.ts`

**Add/remove a service card:** Edit `serviceCards` array. Use icon keys: warehouse, chart, globe, truck

**Change a stat value:** Edit `stats` array — just change the `value` string

**Swap a gallery image:** Edit `operationsImages` array — update src/alt

**Add a nav link:** Add to `navItems` array with `{ label, href }`. The href should be `#section-id`

**Change CTA button text:** Edit `ctaTop.cta.label`, `ctaBottom.primaryCta.label`, or `heroContent.primaryCta.label`

**Change hero video:** Update `heroContent.video.sources` with new file paths and add files to `public/videos/`
