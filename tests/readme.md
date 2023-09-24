# End to end tests

These tests run the application as a user would in a headless browser using Playwright.

See https://playwright.dev/docs/intro for documentation.

- see the [configuration](../playwright.config.ts) file
- `npm run e2e` will run the tests in the console
- `npm run e2e-ui` will run the tests in an environment with a headed browser (useful for writing and debugging tests)
- Tests will also run in CI on push and PR
- Also consider installing the [vscode extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
