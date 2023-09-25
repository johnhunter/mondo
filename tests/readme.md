# End to end tests

These tests run the application as a user would in a headless browser using Playwright.

See https://playwright.dev/docs/intro for documentation.

- See the [configuration](../playwright.config.ts) file
- `npm run e2e` will run the tests in the console

- Tests will also run in CI on push and PR

## Helpers

- `npm run e2e-ui` will run the tests in an environment with a headed browser (useful for finding locators and debugging tests)
- `npm run e2e-record` will start a browser window where you can exercise the app and record your actions as test code.
- Also consider installing the [vscode extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) which will provide a lot of support within the IDE.

### Example recording output

```JS
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5174/');
  await page.getByRole('link', { name: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' }).click();
  await page.getByRole('button', { name: '← Back' }).click();
  await page.locator('li').filter({ hasText: 'qui est esse' }).click();
  await page.getByRole('link', { name: 'qui est esse' }).click();
  await page.getByRole('button', { name: '← Back' }).click();
});
```
