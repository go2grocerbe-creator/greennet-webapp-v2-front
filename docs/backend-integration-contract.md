# Backend Integration Contract

Integration is intentionally deferred until the visual direction is approved.

## Current mode

```env
NEXT_PUBLIC_DATA_SOURCE=mock
```

## Future mode

```env
NEXT_PUBLIC_DATA_SOURCE=api
NEXT_PUBLIC_GREENNET_API_BASE_URL=https://example.invalid
```

## Expected approach

1. Inspect the real GreenNet product and category response shapes.
2. Add runtime validation or a mapping boundary inside the API adapter.
3. Keep the `ProductService` interface stable where practical.
4. Connect catalogue reads first, then product details, enquiries, media and SEO.
5. Never expose database service-role or other privileged credentials.

The API adapter presently expresses a candidate contract only. It must be aligned
with the actual existing backend before API mode is enabled.
