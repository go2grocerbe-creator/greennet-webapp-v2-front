# Claude Reimagination Design Reference

## Overview

This directory contains the design reference for the Claude Reimagination redesign of GreenNet's public web presence.

**Source:** Commit 32b6ac0 in `go2grocerbe-creator/greennet-webapp` (wrong repo, reference only)

**Design Approach:**
- Brand: Dark navy, petrol teal, solar amber accents
- Typography: Space Grotesk (headings), Inter (body)
- Responsive: Mobile-first, 880px nav toggle
- Accessibility: WCAG AA, semantic HTML, keyboard navigation
- Architecture: No inline styles, Tailwind v4 utilities only

## Color Palette

| Variable | Value | Usage |
|----------|-------|-------|
| `--midnight-navy` | #0D1B24 | Header, footers, dark sections |
| `--petrol-teal` | #0C5A56 | Primary brand, accents |
| `--petrol-light` | #147A74 | Hover states, secondary |
| `--petrol-dark` | #084240 | Dark backgrounds |
| `--solar-amber` | #F3B23F | CTAs, highlights, brand accent |
| `--amber-light` | #F5C76A | Light hover, backgrounds |
| `--amber-dark` | #D99A2A | Dark hover, darker backgrounds |
| `--titanium-grey` | #69757A | Secondary text |
| `--warm-white` | #F5F2EA | Light backgrounds, subtle |

## Typography

- **Headings:** Space Grotesk (500, 600, 700)
- **Body:** Inter (400, 500, 600)
- **Default radius:** 2px (sharp edges)

## Navigation Structure

```
Home
Products
Solutions
Projects
Monitoring & Support
About
Contact (separate, form page)
```

## Page Structure

1. **Homepage** (`/`) - Hero, categories, benefits, journey, applications, CTA
2. **Products** (`/products`) - Category filters, product grid, details
3. **Solutions** (`/solutions`) - Commercial & residential use cases
4. **Projects** (`/projects`) - Capability sectors & support stages
5. **Monitoring** (`/monitoring`) - Dashboard, support stages, features
6. **About** (`/about`) - Company narrative, values, team placeholder
7. **Quote** (`/quote`) - 13-field form (no backend)
8. **Contact** (`/contact`) - Contact info, general enquiry form (no backend)

## Product Categories (7)

1. Solar Panels
2. Inverters
3. Battery Storage
4. Monitoring Systems
5. EV Charging
6. Solar Carports
7. Commercial Systems

## Implementation Notes

- All content claims marked [Pending approval] are placeholder-only
- No real project images; all placeholders are AI-generated
- No backend/database changes in this phase
- Forms are client-side only (no submission)
- Disclaimer required on all AI-generated imagery

## Accessibility Checklist

- ✓ Semantic HTML (nav, section, article, form)
- ✓ Heading hierarchy (H1, H2, H3 no skips)
- ✓ Keyboard navigation (Tab, Enter, Escape)
- ✓ Focus visible (2px amber outline)
- ✓ Form labels with htmlFor association
- ✓ ARIA labels, aria-expanded, aria-controls
- ✓ Color contrast (WCAG AA)
- ✓ Reduced motion respected

## Testing Breakpoints

- 375px (mobile small)
- 430px (mobile large)
- 768px (tablet)
- 1024px (desktop)
- 1440px (desktop large)

## Reference Files

Design component prototypes and specifications available in `content/` directory.
Actual implementation uses Tailwind v4 + React/Next.js components (not HTML prototypes).
