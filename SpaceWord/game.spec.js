import { test, expect } from '@playwright/test';

test('la page se charge correctement', async ({ page }) => {
  await page.goto('http://localhost:8001');
  await expect(page).toHaveTitle('Jump Game');
});

test('le canvas est present', async ({ page }) => {
  await page.goto('http://localhost:8001');
  const canvas = await page.locator('#canvas');
  await expect(canvas).toBeVisible();
});

test('le bouton PLAY est present', async ({ page }) => {
  await page.goto('http://localhost:8001');
  const playBtn = await page.locator('#jogar-btn');
  await expect(playBtn).toBeVisible();
});
