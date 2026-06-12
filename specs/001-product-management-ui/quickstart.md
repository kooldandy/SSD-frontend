# Quickstart: Product Management UI Validation

## Prerequisites

- Node.js 20 LTS
- npm

## Setup

After implementation tasks create the frontend project files, install dependencies:

```powershell
npm install
```

## Run The App

```powershell
npm run dev
```

Expected result: the development server starts and the product management screen is available in a browser.

## Automated Validation

Run unit and component tests:

```powershell
npm test
```

Expected result: validation rules, product rendering, add, edit, delete, loading, empty, and failure-state tests pass.

Run end-to-end tests:

```powershell
npm run test:e2e
```

Expected result: Playwright validates the primary product workflows on desktop and mobile viewport sizes.

## Manual Acceptance Checks

### View Product Inventory

1. Open the product management screen with products available.
2. Confirm each product shows name, description, price, and quantity.
3. Reload with an empty product response and confirm the empty state offers a way to add a product.
4. Reload with a failed product response and confirm an error state and retry option are visible.

### Add Product

1. Add a product with valid name, description, price, and quantity.
2. Confirm it appears in the inventory without a page refresh.
3. Try saving with blank required text, price `0`, and quantity `-1`.
4. Confirm invalid submissions are blocked with visible validation feedback.

### Edit Product

1. Edit an existing product with valid values.
2. Confirm the inventory shows the updated values.
3. Start editing again and cancel.
4. Confirm the product remains unchanged.
5. Simulate a failed save and confirm original values remain visible with failure feedback.

### Delete Product

1. Choose delete for an existing product.
2. Confirm a confirmation prompt appears.
3. Cancel and confirm the product remains.
4. Delete again and confirm.
5. Confirm the product is removed and success feedback is visible.
6. Simulate a failed delete and confirm the product remains visible with failure feedback.

## Traceability

- View checks validate US1 and FR-001 through FR-005.
- Add checks validate US2 and FR-006 through FR-009, FR-013 through FR-015.
- Edit checks validate US3 and FR-010, FR-011, FR-013 through FR-015.
- Delete checks validate US4 and FR-012 through FR-015.
- Desktop and mobile checks validate FR-016.
