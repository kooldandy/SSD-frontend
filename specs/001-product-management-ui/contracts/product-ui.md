# Contract: Product UI

This contract defines observable behavior for the product management screen.

## Product Management Screen

### Loading State

- Shows a clear loading indicator while products are being retrieved.
- Does not show stale success feedback while loading the initial inventory.

### Loaded State With Products

- Shows each product's name, description, price, and quantity.
- Provides actions to edit and delete each product.
- Provides a clear action to add a product.

### Empty State

- Explains that no products are available.
- Provides a clear action to add a product.

### Error State

- Explains that products could not be loaded.
- Provides a way to retry loading products.

## Add Product

- User can enter name, description, price, and quantity.
- Missing name or description blocks save and shows field-specific validation feedback.
- Price less than or equal to zero blocks save and shows validation feedback.
- Quantity less than zero or non-whole blocks save and shows validation feedback.
- Successful save closes or clears the form, updates the inventory, and shows success feedback.
- Failed save preserves entered values and shows failure feedback.

## Edit Product

- User can edit name, description, price, and quantity for an existing product.
- Validation rules match the add-product workflow.
- Cancel leaves the original product unchanged.
- Failed save leaves the original product unchanged and shows failure feedback.
- Successful save updates the visible inventory and shows success feedback.

## Delete Product

- Delete action opens a confirmation prompt before removal.
- Cancel leaves the product unchanged.
- Confirm attempts deletion.
- Successful deletion removes the product from the visible inventory and shows success feedback.
- Failed deletion keeps the product visible and shows failure feedback.

## Responsive Behavior

- Desktop view supports efficient scanning of multiple products.
- Mobile view keeps product details, add/edit controls, validation feedback, and delete confirmation usable without horizontal scrolling.
