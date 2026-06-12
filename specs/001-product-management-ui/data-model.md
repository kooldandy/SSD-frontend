# Data Model: Product Management UI

## Entity: Product

Represents an inventory item managed by the Product CRUD UI.

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `id` | string | Yes for existing products | Unique stable identifier assigned by the product data source |
| `name` | string | Yes | Trimmed value must be non-empty and no longer than 100 characters |
| `description` | string | Yes | Trimmed value must be non-empty and no longer than 500 characters |
| `price` | number | Yes | Must be greater than 0 |
| `quantity` | number | Yes | Must be a whole number greater than or equal to 0 |

## Form Input Model

`ProductFormInput` represents editable form values before persistence.

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `name` | string | Yes | Same as Product.name |
| `description` | string | Yes | Same as Product.description |
| `price` | string or number | Yes | Parsed numeric value must be greater than 0 |
| `quantity` | string or number | Yes | Parsed numeric value must be a whole number greater than or equal to 0 |

## Relationships

- The product management screen displays zero or more `Product` records.
- Add creates one new `Product`.
- Edit updates one existing `Product` by `id`.
- Delete removes one existing `Product` by `id` after confirmation.

## State Transitions

### Product List

```text
idle -> loading -> loaded
idle -> loading -> load-failed
loaded -> mutating -> loaded
loaded -> mutating -> mutation-failed
```

### Product Form

```text
closed -> editing-new -> validating -> submitting -> closed
closed -> editing-existing -> validating -> submitting -> closed
editing-new -> closed
editing-existing -> closed
validating -> editing-new
validating -> editing-existing
submitting -> editing-new
submitting -> editing-existing
```

### Delete Confirmation

```text
closed -> confirming -> deleting -> closed
confirming -> closed
deleting -> confirming
```

## Traceability

- Product fields support FR-001, FR-002, FR-006, and FR-010.
- Validation rules support FR-007 through FR-009 and SC-006.
- State transitions support FR-003 through FR-005 and FR-011 through FR-015.
