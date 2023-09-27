import { test as base } from '@playwright/test';
import type { MockServiceWorker } from 'playwright-msw';
import { createWorkerFixture } from 'playwright-msw';
import { handlers } from '../src/mocks/handlers';
export { expect } from '@playwright/test';

export const test = base.extend<{
  worker: MockServiceWorker;
}>({ worker: createWorkerFixture(handlers) });
