import { test, expect } from '@playwright/test';

test('la page se charge correctement', async ({ page }) => {
  await page.goto('http://localhost:8003');
  await expect(page).toHaveTitle('Space invaders');
});

test('le canvas est present', async ({ page }) => {
  await page.goto('http://localhost:8003');
  const canvas = page.locator('#canvas');
  await expect(canvas).toBeVisible();
});

test('le bouton Start est present', async ({ page }) => {
  await page.goto('http://localhost:8003');
  const startBtn = page.locator('#start-button');
  await expect(startBtn).toBeVisible();
});