# Mondo

A simple react template.

---

**Note**
This template is less relevant as much of the tooling included has its own scaffolding

- https://vitejs.dev/guide/#scaffolding-your-first-vite-project
- https://eslint.org/docs/latest/use/getting-started
- https://prettier.io/docs/en/integrating-with-linters.html
- https://vitest.dev/guide/#adding-vitest-to-your-project
- https://testing-library.com/docs/react-testing-library/setup
- https://playwright.dev/docs/intro#installing-playwright

---

A lighter alternative to Create React App using [Vite](https://vitejs.dev/) for its leverage of ES module support in the browser and convention based approach. Testing uses [Testing Library](https://testing-library.com/) and [Vitest](https://vitest.dev/).

More complete templates will be created as branches.

- [react-query](https://github.com/johnhunter/mondo/tree/react-query)

## Prerequisites

### Node

The local environment assumes `node@18`. You can use any Node version manager that uses the `.nvmrc` configuration file (we recommend [fnm](https://fnm.vercel.app/)).

## Npm scripts

- `npm start` starts the dev HMR environment on http://localhost:5173
- `npm test` runs the tests (will watch in a dev environment)
- `npm run lint` runs eslint and prettier format check
- `npm run preview` performs a production build and starts a web server on http://localhost:4173/
- `npm run test-ui` runs the tests, reporting in the console as well as opening the test UI interface in [`http://localhost:51204/__vitest__/`](http://localhost:51204/__vitest__/)
