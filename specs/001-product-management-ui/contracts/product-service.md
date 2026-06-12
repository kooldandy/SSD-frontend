# Contract: Product Service

The Product Management UI depends on a product service boundary. The implementation may back this service with HTTP, local mock data, or another existing product domain adapter, but the UI consumes the behavior below.

## Types

```ts
type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

type ProductInput = {
  name: string;
  description: string;
  price: number;
  quantity: number;
};
```

## Operations

### List Products

`listProducts(): Promise<Product[]>`

- Returns all products visible to the current product management workflow.
- Returns an empty array when no products exist.
- Rejects when products cannot be loaded.

### Create Product

`createProduct(input: ProductInput): Promise<Product>`

- Creates one product from validated input.
- Returns the created product including its assigned `id`.
- Rejects when the product cannot be saved.

### Update Product

`updateProduct(id: string, input: ProductInput): Promise<Product>`

- Updates one existing product.
- Returns the updated product.
- Rejects when the product does not exist or cannot be saved.

### Delete Product

`deleteProduct(id: string): Promise<void>`

- Deletes one existing product.
- Resolves when deletion succeeds.
- Rejects when the product does not exist or cannot be deleted.

## Error Handling Expectations

- Service failures must be surfaced to the UI as user-visible failure feedback.
- Failed edits must not replace the visible product values with invalid or unsaved values.
- Failed deletes must leave the product visible in the inventory.
