# Contract: Product UI

This contract defines the expected behavior for the product table and inline edit workflow.

## Product Table

- The table shows columns for `Name`, `Price`, `Quantity`, and action buttons.
- The table does not include a separate `Details` column in the main list view.
- Each row provides an `Edit` action that opens an inline form directly below the selected row.
- Only one inline edit form is visible at a time.

## Inline Edit Behavior

- Clicking `Edit` on a row opens a form below that row with the current `name`, `description`, `price`, and `quantity` pre-filled.
- Saving the form updates the row values immediately upon success.
- Canceling the form closes it without changing the row.
- If an edit is already open and the user clicks `Edit` on a different row, the previous form closes and the new row’s form opens.

## Validation

- `name` is required and must not be empty.
- `price` must be a number greater than zero.
- `quantity` must be a whole number greater than or equal to zero.
- Validation errors should appear inline in the edit form and prevent save.

## Feedback

- Successful save should show success feedback and update the row in the visible table.
- Failed save should show error feedback and preserve the current form values.
- Cancel should show no destructive change and return the table to view state.

## Responsive Behavior

- Desktop view displays the table and inline edit form clearly without requiring the user to navigate away.
- Narrow view keeps the table readable and the inline form accessible, with no action hidden from the user.
