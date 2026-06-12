# Implementation Plan: Product Table Inline Edit

**Branch**: `master` | **Date**: 2026-06-12 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/002-product-table-inline-edit/spec.md`

**Note**: This plan is based on the existing Vite React TypeScript frontend in the repository and the feature specification for inline edit behavior.

## Summary

Replace the current product row details workflow with a table layout that shows quantity as a dedicated column and supports opening an inline edit form directly below the selected product row. The implementation will preserve the existing product list behavior while removing the details column, adding inline editing state, and validating save/cancel flows in place.

## Technical Context

**Language/Version**: TypeScript 5.x, React 18

**Primary Dependencies**: React, Axios, Vite, React Testing Library, Vitest, Playwright

**Storage**: UI state in browser memory; product data loaded from the current product API service boundary

**Testing**: Vitest unit/component tests, Playwright end-to-end validation, browser-based manual verification via Vite dev server

**Target Platform**: Modern desktop and mobile browsers

**Project Type**: Single frontend web application built with Vite + React + TypeScript

**Performance Goals**: Table loads and renders within the existing app without additional bundle impact; inline edit interactions update visible state within 500 ms of a successful service response and preserve form state on failure

**Constraints**: Existing product model is assumed available with `name`, `description`, `price`, and `quantity`; the inline edit form must support only one active row at a time and must not reintroduce the removed details column

**Scale/Scope**: One product management UI screen; focus on the inline edit workflow, quantity visibility, and responsive table behavior

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- User-first specification: PASS — the plan maps directly to the feature stories for quantity visibility and inline editing.
- Incremental delivery: PASS — the change is scoped to a single table view and inline edit flow that can be validated independently.
- Validation before implementation: PASS — quickstart and contracts define explicit validation scenarios before development begins.
- Feedback states: PASS — the inline edit workflow includes save, cancel, validation, success, and error expectations.
- Simplicity and traceability: PASS — the feature builds on the existing `src/products` implementation without adding extra app layers.

## Project Structure

### Documentation (this feature)

```text
specs/002-product-table-inline-edit/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── product-service.md
│   └── product-ui.md
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── app/
│   └── App.tsx
├── products/
│   ├── components/
│   ├── productApiClient.ts
│   ├── productService.ts
│   ├── productTypes.ts
│   ├── productValidation.ts
│   └── ProductManagementPage.tsx
├── test/
│   ├── handlers.ts
│   └── setup.ts
├── main.tsx
`-- styles.css

tests/
├── unit/
│   └── productValidation.test.ts
```

**Structure Decision**: Use the existing single frontend project structure. Product UI, service, types, and validation remain under `src/products/`; the feature extends `ProductManagementPage.tsx` and may use new component files in `src/products/components/` if needed.

## Complexity Tracking

No constitution violations identified.

## Phase 0: Research

The repository already contains the core product entity, listing behavior, and API service layer. Research confirmed the current `ProductManagementPage.tsx` uses a details button and a static table layout. The feature will remove that details column and implement an inline editing row with pre-filled form values and validation using the existing product model.

## Phase 1: Design & Contracts

Design artifacts for this feature are captured in:

- `data-model.md`
- `contracts/product-service.md`
- `contracts/product-ui.md`
- `quickstart.md`

These artifacts define the product table data model, the product service boundary, the user-facing UI contract, and validation steps for the inline edit workflow.

## Post-Design Constitution Check

- User-first specification: PASS — the contract and quickstart explicitly preserve the user-story priorities.
- Incremental delivery: PASS — the feature remains a single UI change with independent validation paths.
- Validation before implementation: PASS — quickstart provides runnable checks.
- Feedback states: PASS — the design covers inline save, cancel, validation, and error handling.
- Simplicity and traceability: PASS — no new architectural layers or service patterns are introduced.
