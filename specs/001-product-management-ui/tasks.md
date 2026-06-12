# Tasks: Product Management UI

**Input**: Design documents from `specs/001-product-management-ui/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/`, `quickstart.md`

**Validation**: Each user story includes validation tasks before implementation tasks, aligned with the project constitution and quickstart scenarios.

**Organization**: Tasks are grouped by user story to support independent implementation, validation, and demonstration.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the Vite React TypeScript project and test tooling.

- [X] T001 Create Vite React TypeScript project metadata and scripts in `package.json`
- [X] T002 Configure TypeScript compiler options in `tsconfig.json`
- [X] T003 Configure Vite with React plugin in `vite.config.ts`
- [X] T004 [P] Create HTML application shell in `index.html`
- [X] T005 [P] Create React entry point in `src/main.tsx`
- [X] T006 [P] Create root application component placeholder in `src/app/App.tsx`
- [X] T007 Configure Vitest, React Testing Library, jsdom, and setup file reference in `vitest.config.ts`
- [X] T008 Configure Playwright desktop and mobile projects in `playwright.config.ts`
- [X] T009 [P] Create shared test setup in `src/test/setup.ts`
- [X] T010 [P] Create base stylesheet and responsive layout tokens in `src/styles.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Define shared product domain, API, validation, and mock infrastructure required by every user story.

**CRITICAL**: No user story work should begin until this phase is complete.

- [X] T011 [P] Define `Product`, `ProductInput`, and product UI state types in `src/products/productTypes.ts`
- [X] T012 [P] Implement product input validation helpers in `src/products/productValidation.ts`
- [X] T013 [P] Add validation unit tests for required text, max lengths, positive price, and whole non-negative quantity in `tests/unit/productValidation.test.ts`
- [X] T014 Implement Axios instance and product API base configuration in `src/products/productApiClient.ts`
- [X] T015 Implement product service functions for list, create, update, and delete in `src/products/productService.ts`
- [X] T016 [P] Create MSW product API handlers for list, create, update, delete, empty, and failure responses in `src/test/handlers.ts`
- [X] T017 [P] Create reusable test render utilities for product page tests in `src/test/renderProductPage.tsx`
- [X] T018 Wire the product management route into the root app in `src/app/App.tsx`

**Checkpoint**: Foundation ready; user story implementation can begin.

---

## Phase 3: User Story 1 - View Product Inventory (Priority: P1) MVP

**Goal**: Users can open the product management screen and understand the product inventory, including loading, empty, and load-failure states.

**Independent Test**: Open the screen with products, no products, loading, and failed load responses; confirm the expected inventory, empty, loading, and error UI appears.

### Validation for User Story 1

- [ ] T019 [P] [US1] Add component tests for product list rendering, loading state, empty state, and load error state in `tests/unit/ProductManagementPage.view.test.tsx`
- [ ] T020 [P] [US1] Add Playwright checks for desktop and mobile inventory viewing in `tests/e2e/product-management-view.spec.ts`
- [ ] T021 [P] [US1] Add manual validation notes for view inventory scenarios in `specs/001-product-management-ui/quickstart.md`

### Implementation for User Story 1

- [ ] T022 [P] [US1] Implement product list display component with desktop table and mobile stacked layout in `src/products/components/ProductList.tsx`
- [ ] T023 [P] [US1] Implement loading, empty, and load-error UI states in `src/products/components/ProductListStates.tsx`
- [ ] T024 [US1] Implement initial product loading and retry behavior in `src/products/ProductManagementPage.tsx`
- [ ] T025 [US1] Connect Product Management page to root app rendering in `src/app/App.tsx`
- [ ] T026 [US1] Add responsive product inventory styling in `src/styles.css`

**Checkpoint**: User Story 1 is independently functional and testable as the MVP.

---

## Phase 4: User Story 2 - Add Product (Priority: P2)

**Goal**: Users can add a valid product, see validation feedback for invalid submissions, and see success or failure feedback after saving.

**Independent Test**: Add a valid product and confirm it appears without refresh; attempt invalid saves for missing text, non-positive price, and negative quantity and confirm validation blocks submission.

### Validation for User Story 2

- [ ] T027 [P] [US2] Add component tests for add product success, validation errors, and failed create response in `tests/unit/ProductManagementPage.add.test.tsx`
- [ ] T028 [P] [US2] Add Playwright checks for add product success and invalid submission handling in `tests/e2e/product-management-add.spec.ts`

### Implementation for User Story 2

- [ ] T029 [P] [US2] Implement reusable product form for create mode with field-level validation messages in `src/products/components/ProductForm.tsx`
- [ ] T030 [US2] Add create product state, submit handling, success feedback, and failure feedback in `src/products/ProductManagementPage.tsx`
- [ ] T031 [US2] Integrate `createProduct` service call and inventory update behavior in `src/products/ProductManagementPage.tsx`
- [ ] T032 [US2] Add form and feedback styling for add workflow in `src/styles.css`

**Checkpoint**: User Stories 1 and 2 work independently and together.

---

## Phase 5: User Story 3 - Edit Product Details (Priority: P3)

**Goal**: Users can edit existing product details, cancel edits without changes, and preserve original values when validation or saving fails.

**Independent Test**: Edit an existing product with valid values and confirm the inventory updates; cancel an edit and confirm values remain unchanged; simulate failed save and confirm original values remain.

### Validation for User Story 3

- [ ] T033 [P] [US3] Add component tests for edit success, edit validation errors, cancel behavior, and failed update response in `tests/unit/ProductManagementPage.edit.test.tsx`
- [ ] T034 [P] [US3] Add Playwright checks for edit success and cancel behavior in `tests/e2e/product-management-edit.spec.ts`

### Implementation for User Story 3

- [ ] T035 [US3] Extend product form for edit mode with initial values and cancel support in `src/products/components/ProductForm.tsx`
- [ ] T036 [US3] Add edit selection, update submit handling, success feedback, and failure feedback in `src/products/ProductManagementPage.tsx`
- [ ] T037 [US3] Integrate `updateProduct` service call while preserving original product values on cancel or failure in `src/products/ProductManagementPage.tsx`
- [ ] T038 [US3] Add edit controls and edit-state styling in `src/products/components/ProductList.tsx`

**Checkpoint**: User Stories 1, 2, and 3 work independently and together.

---

## Phase 6: User Story 4 - Delete Product (Priority: P4)

**Goal**: Users can delete a product only after confirmation, cancel safely, and see success or failure feedback.

**Independent Test**: Choose delete, cancel and confirm the product remains; choose delete again, confirm, and confirm the product is removed; simulate failed delete and confirm the product remains visible.

### Validation for User Story 4

- [ ] T039 [P] [US4] Add component tests for delete confirmation, cancel, success, and failed delete response in `tests/unit/ProductManagementPage.delete.test.tsx`
- [ ] T040 [P] [US4] Add Playwright checks for delete confirmation, cancel, and successful removal in `tests/e2e/product-management-delete.spec.ts`

### Implementation for User Story 4

- [ ] T041 [P] [US4] Implement delete confirmation dialog component in `src/products/components/DeleteProductDialog.tsx`
- [ ] T042 [US4] Add delete selection, confirmation, cancel, success feedback, and failure feedback in `src/products/ProductManagementPage.tsx`
- [ ] T043 [US4] Integrate `deleteProduct` service call and post-delete inventory update behavior in `src/products/ProductManagementPage.tsx`
- [ ] T044 [US4] Add destructive action and dialog styling in `src/styles.css`

**Checkpoint**: All user stories are independently functional and testable.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, accessibility, resilience, and documentation updates across all stories.

- [ ] T045 [P] Add accessible labels, focus management, and keyboard support checks in `src/products/ProductManagementPage.tsx` and `src/products/components/ProductForm.tsx`
- [ ] T046 [P] Add currency and quantity display formatting helpers in `src/products/productFormatters.ts`
- [ ] T047 Apply product formatting helpers to product list and form feedback in `src/products/components/ProductList.tsx`
- [ ] T048 [P] Add responsive visual regression or viewport assertions for desktop and mobile in `tests/e2e/product-management-responsive.spec.ts`
- [ ] T049 Run and document quickstart validation results in `specs/001-product-management-ui/quickstart.md`
- [ ] T050 Run final lint, unit, component, and end-to-end validation through scripts in `package.json`

---

## Dependencies & Execution Order

### Phase Dependencies

- Setup (Phase 1): no dependencies.
- Foundational (Phase 2): depends on Setup completion and blocks every user story.
- User Story 1 (Phase 3): depends on Foundational and is the MVP.
- User Story 2 (Phase 4): depends on Foundational; integrates with the inventory view from US1 for the normal user flow.
- User Story 3 (Phase 5): depends on Foundational; uses the same form and service boundary established for add/edit behavior.
- User Story 4 (Phase 6): depends on Foundational; uses the product list and service boundary.
- Polish (Phase 7): depends on all desired user stories being complete.

### User Story Dependencies

- US1 View Product Inventory: no dependency on other user stories after Foundational.
- US2 Add Product: can be implemented after Foundational, but the end-to-end user flow is clearer after US1.
- US3 Edit Product Details: can be implemented after Foundational; reuses the product form from US2 if US2 is already complete.
- US4 Delete Product: can be implemented after Foundational; relies on the product list action surface from US1.

### Within Each User Story

- Validation tasks come before implementation tasks.
- Component and Playwright tests should fail before the corresponding implementation is complete.
- Shared models and validation belong in Foundational tasks.
- Service integration comes before page-level mutation behavior.
- A story is complete only when its checkpoint can be validated independently.

---

## Parallel Opportunities

- T004, T005, T006, T009, and T010 can run in parallel after T001 through T003 are understood.
- T011, T012, T013, T016, and T017 can run in parallel during Foundational work.
- T019, T020, and T021 can run in parallel for US1 validation.
- T027 and T028 can run in parallel for US2 validation.
- T033 and T034 can run in parallel for US3 validation.
- T039 and T040 can run in parallel for US4 validation.
- T041 can run in parallel with T042 planning because it is isolated to the dialog component file.
- T045, T046, and T048 can run in parallel during Polish.

---

## Parallel Example: User Story 1

```text
Task: "T019 [P] [US1] Add component tests for product list rendering, loading state, empty state, and load error state in tests/unit/ProductManagementPage.view.test.tsx"
Task: "T020 [P] [US1] Add Playwright checks for desktop and mobile inventory viewing in tests/e2e/product-management-view.spec.ts"
Task: "T021 [P] [US1] Add manual validation notes for view inventory scenarios in specs/001-product-management-ui/quickstart.md"
```

## Parallel Example: User Story 2

```text
Task: "T027 [P] [US2] Add component tests for add product success, validation errors, and failed create response in tests/unit/ProductManagementPage.add.test.tsx"
Task: "T028 [P] [US2] Add Playwright checks for add product success and invalid submission handling in tests/e2e/product-management-add.spec.ts"
Task: "T029 [P] [US2] Implement reusable product form for create mode with field-level validation messages in src/products/components/ProductForm.tsx"
```

## Parallel Example: User Story 3

```text
Task: "T033 [P] [US3] Add component tests for edit success, edit validation errors, cancel behavior, and failed update response in tests/unit/ProductManagementPage.edit.test.tsx"
Task: "T034 [P] [US3] Add Playwright checks for edit success and cancel behavior in tests/e2e/product-management-edit.spec.ts"
```

## Parallel Example: User Story 4

```text
Task: "T039 [P] [US4] Add component tests for delete confirmation, cancel, success, and failed delete response in tests/unit/ProductManagementPage.delete.test.tsx"
Task: "T040 [P] [US4] Add Playwright checks for delete confirmation, cancel, and successful removal in tests/e2e/product-management-delete.spec.ts"
Task: "T041 [P] [US4] Implement delete confirmation dialog component in src/products/components/DeleteProductDialog.tsx"
```

---

## Implementation Strategy

### MVP First

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. Stop and validate US1 with component tests, Playwright checks, and the quickstart view inventory checks.

### Incremental Delivery

1. Deliver US1 as the inventory viewing MVP.
2. Add US2 to support product creation.
3. Add US3 to support product updates.
4. Add US4 to support confirmed product deletion.
5. Complete Polish tasks for accessibility, formatting, responsiveness, and final validation.

### Validation Commands

```powershell
npm test
npm run test:e2e
```

---

## Notes

- [P] tasks modify separate files or can proceed without depending on incomplete same-file changes.
- [US1], [US2], [US3], and [US4] labels map to the prioritized user stories in `spec.md`.
- All service calls must go through `src/products/productService.ts` and the Axios client in `src/products/productApiClient.ts`.
- All user-facing loading, empty, success, validation, failure, and confirmation states must remain visible and testable.
