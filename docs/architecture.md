# Frontend Architecture

## Core rule

Pages and visual components consume domain services. They do not import mock data
directly.

```text
Routes and components
        ↓
ProductService interface
        ↓
MockProductService now
ApiProductService later
        ↓
Existing GreenNet API later
```

## Layers

- `src/app`: routes, metadata and route-level states.
- `src/components`: cross-feature layout and UI primitives.
- `src/features`: domain types, services and feature components.
- `src/mocks`: prototype content matching the domain types.
- `src/config`: site and environment configuration.
- `src/lib`: framework-neutral helpers.

## Integration rule

When the existing backend is connected, page components should not be rewritten.
Only the API adapter and any required mapping/validation layer should change.
