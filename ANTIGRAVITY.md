# Antigravity Implementation Brief

## Objective

Establish the production-quality primary structure for a clean, sleek and
mobile-first GreenNet frontend. The design itself will be expanded later in
Emergent after this foundation is approved.

## Non-negotiable scope

This repository is a standalone frontend prototype. Do not create or replace:

- the GreenNet database;
- backend services;
- authentication;
- media storage;
- the admin or maintenance dashboard;
- the existing immersive 3D frontend.

Use typed mock data for the current phase. All product reads must pass through a
service interface so the mock adapter can later be exchanged for the existing
GreenNet API adapter.

## First-pass responsibilities

1. Preserve the Next.js App Router and TypeScript strict-mode setup.
2. Preserve the route and feature boundaries already created.
3. Improve accessibility, semantics and responsive behavior.
4. Keep visual treatment restrained; do not finalize a visual identity.
5. Keep reusable primitives small and composable.
6. Maintain loading, error, empty and not-found states.
7. Run lint, typecheck and build before committing.
8. Document every assumption that affects future backend integration.

## Allowed changes

- `src/app/**`
- `src/components/**`
- `src/features/**`
- `src/config/**`
- `src/lib/**`
- `src/mocks/**`
- `docs/**`
- project-level frontend configuration

## Forbidden changes

- Adding database clients or migrations
- Adding authentication providers
- Adding a CMS
- Adding privileged credentials
- Hard-coding data directly inside page components when it belongs in mocks
- Replacing the service adapter pattern
- Introducing 3D, WebGL, scroll hijacking or excessive motion
- Deploying to a production domain

## Completion evidence

Provide:

- a concise implementation summary;
- the final route map;
- the final component map;
- lint, typecheck and build results;
- responsive screenshots for homepage, catalogue and product detail;
- a list of remaining assumptions for Emergent and backend integration.
