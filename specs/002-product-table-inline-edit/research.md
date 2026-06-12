# Research: Product Table Inline Edit

## Decision: Keep the existing frontend stack and update the table component.

- The repository already uses Vite + React + TypeScript, so the feature should extend the existing `ProductManagementPage.tsx` implementation rather than introducing a new framework or page.
- The inline edit workflow should be implemented within the current product table view to preserve context and minimize structural changes.

## Decision: Replace the details column with a dedicated quantity column.

- The current implementation shows a separate `Details` button in the table, which duplicates detail visibility and consumes horizontal space.
- The feature requirement explicitly calls for a quantity column instead of details in the main table view, so the table header and row layout should be updated accordingly.

## Decision: Use row-level inline editing under the selected row.

- Inline edit below the selected row preserves the product list context while allowing a focused editing surface.
- Only one edit form should be open at a time to avoid user confusion and keep the row-action model simple.

## Decision: Reuse the existing `Product` entity and existing service boundary.

- The existing `Product` type already includes `id`, `name`, `description`, `price`, and `quantity`.
- No additional backend contract changes are required: the inline edit feature can use the existing `updateProduct(id, input)` service call.

## Decision: Keep validation rules consistent with the repository’s current product validation.

- The repository already enforces `name` and `description` non-empty, `price > 0`, and `quantity >= 0`.
- The inline edit form should reuse these rules to ensure the same save behavior as product creation.

## Alternatives considered

- Keeping the details column and adding quantity as a separate property was rejected because the feature specifically requires quantity to replace details in the table view.
- Using a modal or a dedicated edit screen was rejected because the spec requires the row data to open in a form below the table.
- Adding inline editing directly within the row cells was rejected in favor of a dedicated form below the row, which is easier to implement clearly and can support validation feedback in one place.
