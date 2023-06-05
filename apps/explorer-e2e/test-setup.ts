import { device } from 'detox';

beforeAll(async () => {
  await device.launchApp();
});

afterAll(async () => {
  await device.terminateApp();
}

// Path: apps/explorer-e2e/src/app.e2e-spec.ts
import { expect, element, by } from 'detox';

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
}

