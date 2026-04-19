import { test, expect } from '@playwright/test';

test('la page se charge correctement', async ({ page }) => {
  await page.goto('http://localhost:8002');
  await expect(page).toHaveTitle('Keep white space');
});

test('le canvas est present', async ({ page }) => {
  await page.goto('http://localhost:8002');
  const canvas = await page.locator('canvas').first();
  await expect(canvas).toBeVisible();
});

test('le gamepanel est present', async ({ page }) => {
  await page.goto('http://localhost:8002');
  const gamepanel = await page.locator('#gamepanel');
  await expect(gamepanel).toBeVisible();
});