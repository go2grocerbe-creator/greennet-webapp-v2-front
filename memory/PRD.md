# GreenNet — Sleek Visual Prototype (PRD)

## Original problem statement
Transform the restrained Next.js scaffold (repo: go2grocerbe-creator/greennet-webapp-v2-front)
into a polished, client-ready **sleek frontend prototype** for GreenNet — a second, calmer
frontend (no 3D). Mock-data only; preserve the service-adapter architecture. No backend,
DB, auth, CMS or admin. Build on branch `feature/sleek-visual-prototype`, do not merge to main.

## Stack (preserved)
Next.js 16 App Router · React 19 · TypeScript strict · Tailwind CSS v4 · mock/API service adapters.

## What's been implemented (2026-06)
- **Design system**: warm-ivory + forest-green + terracotta tokens (`src/styles/tokens.css`),
  Fraunces (display) + Instrument Sans (body) via next/font, `.reveal` motion (reduced-motion safe),
  focus rings, skip link. Documented in `docs/design-system.md` + `docs/visual-direction.md`.
- **Pages**: Homepage (hero, positioning, value props, category cards, featured products,
  industries, dark sustainability, capabilities, CTA), Products catalogue (client filter + search +
  empty state), Product detail (gallery, benefits, specs, applications, documents placeholder,
  related, enquiry CTA), About, Projects (new projects feature + service + mocks), Contact
  (full form: enquiry type, product interest, name/company/email/phone/message, validation,
  success/error, privacy placeholder — local-only isolated submit).
- **Nav**: sticky header, accessible mobile menu (aria-expanded/controls, Escape, scroll lock,
  active states), dark grouped footer.
- **States**: loading skeletons, empty, error, not-found.
- **Architecture preserved**: pages read `getProductService()` / `getProjectService()`;
  copy in `src/config/content.ts`; records in `src/mocks`. Mock→API switch intact.
- **Imagery**: 8 images stored locally in `public/images` (6 stock + 2 generated).

## Validation (run, passing)
- `tsc --noEmit` ✓ · `eslint .` ✓ (0 errors) · `next build` ✓ (17 routes)
- Playwright: no horizontal overflow at 375/430/768/1024/1440 across all routes;
  mobile menu toggles + Escape-close; contact validation alert; category cards render.

## Git
Branch `feature/sleek-visual-prototype`, tip `d970890`. 5 logical commits. Scaffold history
preserved. Working tree clean. **Not yet pushed** (user to push via Save to GitHub).

## Placeholders needing client confirmation
Logo (public/brand), brand palette, contact details, company statements, product specs
(`[Approved specification required]`), project impact figures, privacy notice, production imagery.

## Backlog / next
- P1: Replace placeholder logo + approved brand tokens; swap stock imagery for approved photography.
- P1: Connect real GreenNet API (flip `NEXT_PUBLIC_DATA_SOURCE=api`; align adapter to real shapes).
- P2: Wire contact submit to existing enquiry endpoint; add Playwright test suite to repo.
- P2: Optional per-category product detail SEO/OG images.

## Architecture confirmations
No backend, database, auth, CMS or admin dashboard created. No production secrets. No 3D/WebGL.
Existing 3D frontend untouched (separate repo). Data-service abstraction intact.
