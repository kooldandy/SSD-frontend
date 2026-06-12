# Tasks: Product Table Inline Edit

**Input**: Design documents from `specs/002-product-table-inline-edit/`

**Prerequisites**: `spec.md`, `plan.md`, `research.md`, `data-model.md`, `contracts/`, `quickstart.md`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the existing Vite React TypeScript project and test tooling support the feature implementation.

- [ ] T001 Verify `package.json` includes React, Vite, TypeScript, Axios, Vitest, and test scripts in `package.json`
- [ ] T002 Verify `tsconfig.json` supports React JSX and strict TypeScript settings in `tsconfig.json`
- [ ] T003 Verify `vite.config.ts` includes the React plugin and correct project root settings in `vite.config.ts`
- [ ] T004 Verify `src/main.tsx` renders `src/app/App.tsx` and the root app imports `src/products/ProductManagementPage.tsx`
- [ ] T005 Verify test tooling is configured in `vitest.config.ts` and `src/test/setup.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Align the product domain model, validation, API service, and test helpers with the new inline edit feature.

- [ ] T006 [P] Align product entity types with the feature data model in `src/products/productTypes.ts`
- [ ] T007 [P] Align product validation rules for inline edit save behavior in `src/products/productValidation.ts`
- [ ] T008 [P] Confirm or update the product API client in `src/products/productApiClient.ts`
- [ ] T009 [P] Confirm or update the product service boundary and `updateProduct` behavior in `src/products/productService.ts`
- [ ] T010 [P] Update `src/test/handlers.ts` to support product list and update scenarios for inline editing
- [ ] T011 [P] Add shared test render helpers in `src/test/renderProductPage.tsx` for future component verification
- [ ] T012 [P] Confirm `src/products/ProductManagementPage.tsx` has stable load, empty, and error handling prior to inline edit extension

---

## Phase 3: User Story 1 - View Product Table with Quantity (Priority: P1)

**Goal**: Display the product table with a dedicated quantity column and remove the separate details column.

**Independent Test**: Verify the product table shows Name, Price, Quantity, and actions, with no Details column, plus valid empty/error states.

- [ ] T013 [US1] Replace the `Details` column with a `Quantity` column in `src/products/ProductManagementPage.tsx`
- [ ] T014 [US1] Remove the old `handleDetails` logic and button from `src/products/ProductManagementPage.tsx`
- [ ] T015 [US1] Ensure the table row structure still includes Name, Price, Quantity, Edit, and Delete cells in `src/products/ProductManagementPage.tsx`
- [ ] T016 [P] [US1] Update responsive table styles in `src/styles.css` or inline styles in `src/products/ProductManagementPage.tsx`
- [ ] T017 [US1] Ensure empty and loading/failure view states remain visible and clear in `src/products/ProductManagementPage.tsx`

---

## Phase 4: User Story 2 - Open Editable Row Form Inline (Priority: P2)

**Goal**: Open an inline edit form immediately below the selected product row when the user clicks Edit.

**Independent Test**: Verify clicking Edit opens a pre-filled form below that row, and opening a different row closes the previous form.

- [ ] T018 [US2] Add edit selection state and render the inline form below the selected row in `src/products/ProductManagementPage.tsx`
- [ ] T019 [US2] Create the inline edit form component in `src/products/components/ProductEditForm.tsx`
- [ ] T020 [US2] Populate the inline edit form with the selected product's current values in `src/products/ProductManagementPage.tsx`
- [ ] T021 [US2] Add behavior to close the previous inline form when a different row's Edit button is clicked in `src/products/ProductManagementPage.tsx`

---

## Phase 5: User Story 3 - Save Inline Product Changes (Priority: P3)

**Goal**: Save edits from the inline form and update the visible table row immediately.

**Independent Test**: Verify valid inline edits persist and update the table row; cancel preserves original values.

- [ ] T022 [US3] Wire `updateProduct` from `src/products/productService.ts` into the inline save flow in `src/products/ProductManagementPage.tsx`
- [ ] T023 [US3] Add inline form validation feedback for `name`, `price`, and `quantity` in `src/products/components/ProductEditForm.tsx`
- [ ] T024 [US3] Update the visible product row immediately after a successful inline save in `src/products/ProductManagementPage.tsx`
- [ ] T025 [US3] Add cancel behavior that closes the inline edit form and preserves the existing row values in `src/products/ProductManagementPage.tsx`

---

## Phase 6: User Story 4 - Maintain Table Usability During Edit (Priority: P4)

**Goal**: Keep the product table and inline edit workflow usable across desktop and common narrow viewports.

**Independent Test**: Verify the table and inline edit form remain readable and actionable on desktop and narrow screens.

- [ ] T026 [US4] Adjust table and inline form styling for desktop and mobile-friendly layouts in `src/styles.css`
- [ ] T027 [US4] Add keyboard and focus support for the inline edit workflow in `src/products/ProductManagementPage.tsx`
- [ ] T028 [US4] Verify responsive behavior for the inline edit row and table layout in `src/products/ProductManagementPage.tsx`

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Clean up implementation, document the new behavior, and validate final product quality.

- [ ] T029 [P] Document the inline edit flow and quantity column behavior in `specs/002-product-table-inline-edit/quickstart.md`
- [ ] T030 [P] Add source-level comments or notes in `src/products/ProductManagementPage.tsx` and `src/products/components/ProductEditForm.tsx`
- [ ] T031 [P] Run manual validation of the new inline edit workflow and record the result in `specs/002-product-table-inline-edit/quickstart.md`
- [ ] T032 [P] Remove any unused details-column code and cleanup old handlers in `src/products/ProductManagementPage.tsx`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies.
- **Phase 2 (Foundational)**: Depends on Setup and blocks all story work.
- **Phase 3+ (User Stories)**: Depend on Foundational.
- **Phase 7 (Polish)**: Depends on all user stories being complete.

### User Story Dependencies

- **US1**: Can start after Phase 2, and provides the quantity-column table foundation.
- **US2**: Can start after Phase 2, but works best after US1 layout updates are in place.
- **US3**: Depends on US2 form wiring and product service support.
- **US4**: Depends on the inline edit row and table layout from US1–US3.

### Parallel Opportunities

- T006, T007, T008, T009, T010, T011, and T012 can run in parallel during Foundational work.
- T016 can run in parallel with T013–T015 for responsive styling.
- T018 and T019 can run in parallel while the inline edit form and page state are designed together.
- T029, T030, T031, and T032 can run in parallel during the final polish phase.

### Implementation Strategy

- MVP scope is **User Story 1**: update the table to show quantity and remove the details column.
- After US1 is validated, implement US2 to open the inline edit row.
- After US2 is validated, implement US3 to save changes and update the table.
- Finish with US4 responsive polish and cross-cutting cleanup.
