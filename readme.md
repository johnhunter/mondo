# Mondo

A simple react template.

A lighter alternative to Create React App using [Vite](https://vitejs.dev/) for its leverage of ES module support in the browser and convention based approach. Testing uses [Testing Library](https://testing-library.com/) and [Vitest](https://vitest.dev/).

More complete templates will be created as branches.

## React-query

An implementation with [react-query](https://tanstack.com/query/v4) for data fetching. [Ky](https://github.com/sindresorhus/ky#readme) for fetching and [msw](https://mswjs.io/) for api mocking.

## Prerequisites

### Node

The local environment assumes `node@18`. You can use any Node version manager that uses the `.nvmrc` configuration file (we recommend [fnm](https://fnm.vercel.app/)).

## Npm scripts

- `npm start` starts the dev HMR environment on http://localhost:5173
- `npm test` runs the tests (will watch in a dev environment)
- `npm run lint` runs eslint and prettier format check
- `npm run preview` performs a production build and starts a web server on http://localhost:4173/
- `npm run test-ui` runs the tests, reporting in the console as well as opening the test UI interface in [`http://localhost:51204/__vitest__/`](http://localhost:51204/__vitest__/)
