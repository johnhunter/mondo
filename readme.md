# Mondo

A simple react template.

A lighter alternative to Create React App using [Vite](https://vitejs.dev/) for its leverage of ES module support in the browser and convention based approach. Testing uses [Testing Library](https://testing-library.com/) and [Vitest](https://vitest.dev/)

More complete templates will be created as branches.

## React-query

An implementation with [react-query](https://tanstack.com/query/v4) for data fetching. [Ky](https://github.com/sindresorhus/ky#readme) for fetching and [msw](https://mswjs.io/) for api mocking. _Note we use Ky-universal so tests will have the necessary Node fetch polyfills._

## Npm scripts

- `npm start` starts the dev HMR environment on http://localhost:5173
- `npm run test-ui` runs the tests, reporting in the console as well as opening the test UI interface in http://localhost:51204/__vitest__/
