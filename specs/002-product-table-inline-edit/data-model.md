# Data Model: Product Table Inline Edit

## Entities

### Product

- `id: string` — Unique identifier for the product.
- `name: string` — Product name.
- `description?: string` — Optional product description used in edit forms and accessible details.
- `price: number` — Product price, displayed in the table and editable inline.
- `quantity: number` — Product inventory quantity, displayed in the table as its own column.

### Inline Edit Form

- `editingProductId: string | null` — The currently selected product row being edited.
- `formValues: { name: string; description?: string; price: string; quantity: string }` — The temporary editable values for the inline form.
- `formErrors: { name?: string; price?: string; quantity?: string }` — Validation feedback shown when inline save validation fails.
- `formStatus: 'idle' | 'saving' | 'error' | 'success'` — User-visible state for inline save operations.

## Relationships

- The inline edit form is associated with a single `Product` row at a time.
- The product table is the source of truth for visible product values, with edits reflected immediately upon successful save.

## Validation Rules

- `name` MUST be non-empty.
- `price` MUST be a number greater than zero.
- `quantity` MUST be an integer greater than or equal to zero.
- `description` MAY be empty, but the field should preserve existing description values while editing.

## State Transitions

- `idle` → `editing` when the user clicks an edit button on a product row.
- `editing` → `saving` when the user submits the inline edit form.
- `saving` → `success` when the update succeeds and table state is refreshed.
- `saving` → `error` when the update fails.
- `editing` → `idle` when the user cancels the inline edit.
