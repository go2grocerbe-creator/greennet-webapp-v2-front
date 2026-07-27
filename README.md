# GreenNet Webapp V2 Front

A separate, frontend-first repository for the sleek GreenNet website direction.
It is intentionally isolated from the existing immersive 3D application while
remaining ready to consume the same backend later.

## Current phase

The repository is for client-facing design approval. It uses typed mock data and
must not create or replace GreenNet's database, authentication, storage, API, or
admin dashboard.

## Stack

- Next.js App Router
- React
- TypeScript in strict mode
- Tailwind CSS
- Service adapters for mock-now/API-later data access

## Start locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

Or run all three:

```bash
npm run check
```

## Repository boundaries

During prototype work:

- Keep `NEXT_PUBLIC_DATA_SOURCE=mock`.
- Store editable demo content in `src/mocks`.
- Access product data through `src/features/products/services`.
- Do not add a second database, CMS, authentication system, or admin dashboard.
- Do not place production secrets in this repository.

Read `ANTIGRAVITY.md` before autonomous implementation and
`docs/emergent-handoff.md` before importing the repository into Emergent.
