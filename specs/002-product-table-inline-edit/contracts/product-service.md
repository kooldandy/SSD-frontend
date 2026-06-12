# Contract: Product Service

This feature reuses the existing product service boundary and must preserve the API shape used by the product management UI.

## Types

```ts
type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  quantity: number;
};

type ProductInput = {
  name: string;
  description?: string;
  price: number;
  quantity: number;
};
```

## Operations

### List Products

`listProducts(): Promise<Product[]>`

- Returns all products visible to the product management workflow.
- Returns an empty array when no products exist.
- Rejects when products cannot be loaded.

### Update Product

`updateProduct(id: string, input: ProductInput): Promise<Product>`

- Updates the product identified by `id`.
- Returns the updated product with the same `id`.
- Rejects when validation fails, the product does not exist, or the update cannot be saved.

## Error Handling Expectations

- Service failures must be surfaced to the UI as user-visible failure feedback.
- Failed edits must preserve the original visible product values.
- Failed edits must not leave the inline form in a broken state.
