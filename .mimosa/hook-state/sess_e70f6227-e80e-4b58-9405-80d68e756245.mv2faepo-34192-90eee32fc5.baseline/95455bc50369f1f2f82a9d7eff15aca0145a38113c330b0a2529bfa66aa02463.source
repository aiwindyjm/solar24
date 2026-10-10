import { expect, test } from '@playwright/test';

test('24 modules navigate, deep-link and recover without presenting unreviewed content', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.getByRole('navigation').getByRole('link')).toHaveCount(24);
  await expect(page.getByRole('heading', { level: 2 })).toContainText('立春');
  await page.getByRole('link', { name: '雨水 Rain Water' }).click();
  await expect(page.getByRole('heading', { level: 2 })).toContainText('雨水');
  await page.reload();
  await expect(page.getByRole('heading', { level: 2 })).toContainText('雨水');
  await page.getByRole('link', { name: '跳到节气内容' }).focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  await expect(page).toHaveURL(/#yushui$/);
  await expect(page.locator('article')).toHaveAttribute('data-reduced-motion', 'true');
  await page.goto('/#unknown');
  await expect(page.getByRole('status')).toContainText('未找到');
  await page.getByRole('link', { name: '立春 Beginning of Spring' }).click();
  await expect(page.getByRole('heading', { level: 2 })).toContainText('立春');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  expect(errors).toEqual([]);
});
