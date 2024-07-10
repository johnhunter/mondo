# Network mocking

Mocking API at the network level using [Mock Service Worker](https://mswjs.io/docs/). For module mocking use [vi.mock](https://vitest.dev/api/#vi-mock).

## Mocking response in test

`server.use` allows overriding the mocking response directly in the test. See https://mswjs.io/docs/api/setup-server/use#runtime-request-handler

