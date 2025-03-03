# Playwright with JS
## Introduction

This repository demonstrates how to use Playwright with JavaScript for end-to-end (E2E) testing. Playwright is a Node.js library to automate Chromium, Firefox, and WebKit with a single API.

## Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x)

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/Playwright_JS.git
cd Playwright_JS
npm install
```

## Running Tests

To run the tests, use the following command:

```bash
npx playwright test
```

## Writing Tests

Tests are located in the `tests` directory. Here is an example of a simple test:

```javascript
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
});
```

## Configuration

Playwright configuration is located in the `playwright.config.js` file. You can customize the settings such as test directory, timeout, and browser options.

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright GitHub Repository](https://github.com/microsoft/playwright)
