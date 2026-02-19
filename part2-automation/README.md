# QA Automation Assessment - Part 2

CodeceptJS + Playwright test automation project for Betclic.

## Prerequisites

- Node.js and npm installed globally
- Verify with `node -v` and `npm -v`

## Setup

```bash
npm install
```

## Running Tests

```bash
# Exercise 1a - Search with no results
npm run test @noResult

# Exercise 1b - Search with at least one result
npm run test @atLeastOneResult

# Exercise 2 - Footer links and pages
npm run test @linksAndPages

# API tests
npm run test @getUsers
npm run test @createUser
```

## What Was Done

### Exercise 1a - Fix a broken test (`@noResult`)

The search test was failing due to multiple issues on the live Betclic website:

- **Selector fix:** The search input selector was using `#forms_inputText` (ID), but `forms_inputText` is a CSS class. Changed to `.forms_inputText`.
- **API endpoint update:** The search API endpoint changed from `offer.cdn.begmedia.com/api/pub/v4/events` to `offering.begmedia.com/.../SearchMatchesWithNotifications`.
- **Expected text update:** The "no result" description text changed on the website. Updated the expected text in the feature file.

### Exercise 1b - Implement a missing step (`@atLeastOneResult`)

- Implemented `validateAtLeastOneResult()` in `offer-search-fragment.ts` using CodeceptJS methods: `waitForElement`, `grabNumberOfVisibleElements`, and `assertAbove`.
- Changed the search term from "football" (no longer returns results) to "Paris".

### Exercise 2 - Extend footer tests (`@linksAndPages`)

The footer test had a "not standard" implementation using `eval()` to dynamically resolve page object properties. Several fixes were needed:

- **Property naming:** Renamed `link` to `{item}Button` in page objects to match the `eval()` pattern (e.g., `responsibleGamingButton`, `termsAndConditionsButton`).
- **Selector updates:** The site migrated from `listeContent` to `contentPage` structure. Updated all `pageContent` selectors with `contains(@class,...)` for robustness.
- **New page object:** Created `privacy-policy-page.ts` for the "Respect de la vie privee" page.
- **Assertion fix:** Changed `assertEqual` to `assertContain` in `validateContent()` for more resilient text matching.
- **Footer lazy loading:** Added `scrollTo(bottom)` + `waitForElement` to handle the footer being lazy-loaded on the homepage.
- **Cookie banner:** Made `rejectCookies()` resilient to the banner not appearing (checks visibility before clicking).

## Project Structure

```
├── features/               # Gherkin feature files
│   ├── front-end/
│   │   ├── offer-search.feature
│   │   └── footer.feature
│   └── back-end/
│       └── users-api.feature
├── step_definitions/        # Step implementations
├── fragments/               # UI interaction logic
├── pages/                   # Page objects
├── codecept.conf.js         # CodeceptJS configuration
└── steps.d.ts               # TypeScript definitions
```

## Tools

- **CodeceptJS** v3.5.3 with Playwright helper
- **TypeScript** for type safety
- **codeceptjs-chai** for assertions
