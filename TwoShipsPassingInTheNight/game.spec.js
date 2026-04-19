import { test, expect } from '@playwright/test';

test('la page se charge correctement', async ({ page }) => {
  await page.goto('http://localhost:8004');
  await expect(page).toHaveTitle('js13k-2021');
});

test('le canvas est present', async ({ page }) => {
  await page.goto('http://localhost:8004');
  const canvas = page.locator('canvas').first();
  await expect(canvas).toBeVisible();
});

test('le body est present', async ({ page }) => {
  await page.goto('http://localhost:8004');
  const body = page.locator('body');
  await expect(body).toBeVisible();
});