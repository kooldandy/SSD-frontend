# Quickstart: Validate Product Table Inline Edit

## Prerequisites

- Node.js installed
- Dependencies installed via `npm install`
- The repository root is the current working directory

## Run the app

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open the browser at the URL shown by Vite.
3. Navigate to the Product Management page.

## Validation Scenarios

### Scenario 1: Verify quantity column appears instead of details

1. Ensure product data exists.
2. Open the Product Management page.
3. Confirm the product table shows `Name`, `Price`, `Quantity`, and action buttons.
4. Confirm there is no `Details` column in the table header.

### Scenario 2: Open inline edit form

1. Click `Edit` for an existing product row.
2. Confirm an editable form appears directly below the selected row.
3. Confirm the form fields are pre-filled with the product's current values.

### Scenario 3: Save inline edit changes

1. Change the `Name`, `Price`, or `Quantity` in the inline form.
2. Click `Save`.
3. Confirm the row updates immediately with the new values.
4. Confirm success feedback is visible.

### Scenario 4: Cancel inline edit

1. Open the inline edit form for a row.
2. Change a value and then click `Cancel`.
3. Confirm the inline form closes.
4. Confirm the product row remains unchanged.

### Scenario 5: Inline validation feedback

1. Open the inline edit form for a row.
2. Clear the `Name` field and click `Save`.
3. Confirm validation feedback is shown and save is blocked.
4. Repeat with `Price` ≤ 0 and `Quantity` < 0.

## Test Commands

- Run unit tests:
  ```bash
  npm test
  ```
- If Playwright tests are present, run them with:
  ```bash
  npx playwright test
  ```

## Expected Outcome

- Product table shows quantity column and no details column.
- Inline edit form opens below the selected row.
- Save updates the row immediately.
- Cancel leaves product values unchanged.
- Validation errors appear inline and block invalid saves.
