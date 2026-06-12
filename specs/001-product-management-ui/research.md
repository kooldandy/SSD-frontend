# Research: Product Management UI

## Decision: Use React + TypeScript + Vite

**Rationale**: The repository is a frontend workspace with no existing application source. React + TypeScript + Vite provides a small, standard setup for building a browser-based CRUD UI while keeping the feature easy to test and iterate.

**Alternatives considered**:

- Plain HTML, CSS, and JavaScript: simpler tooling, but weaker type safety and less structure for a growing UI.
- Next.js: useful for routing and server features, but unnecessary for a single product management screen.
- Vue or Svelte: viable, but no existing project convention favors them here.

## Decision: Keep Product CRUD behind a product service boundary

**Rationale**: The specification says product data already exists outside the UI. A product service module keeps the UI independent from the eventual backend details while still supporting realistic loading, success, and failure states.

**Alternatives considered**:

- Hard-coded in-component state: useful for prototypes, but it would hide failure states and make later backend integration harder.
- Global state library: unnecessary for one screen and one entity.

## Decision: Validate product input in a dedicated validation module

**Rationale**: Product rules are shared by add and edit flows: required name and description, name max 100 characters, description max 500 characters, price greater than zero, and quantity as a whole number greater than or equal to zero. A dedicated module avoids duplicated form rules.

**Alternatives considered**:

- Inline validation in each form submit handler: acceptable for one form, but add and edit workflows need identical behavior.
- Schema validation dependency: useful for larger forms, but not needed for this small model unless later tasks choose it for consistency.

## Decision: Use Vitest, React Testing Library, Playwright, and MSW

**Rationale**: Component tests can verify validation, rendering, and feedback states quickly. Playwright can validate full user workflows on desktop and mobile viewport sizes. MSW lets tests simulate successful and failed product service calls without a real backend.

**Alternatives considered**:

- Manual-only validation: insufficient for repeatable CRUD behavior and regression prevention.
- Cypress: viable for browser workflows, but Playwright covers desktop and mobile viewport validation with straightforward project configuration.

## Decision: Use responsive table/list presentation

**Rationale**: Product managers need to scan name, description, price, and quantity. A table-like layout works well on desktop, while stacked product rows/cards work better on narrow screens. Both presentations should expose the same actions and states.

**Alternatives considered**:

- Cards on every viewport: easier to make responsive, but less efficient for desktop inventory scanning.
- Dense table only: efficient on desktop, but weaker on mobile.
