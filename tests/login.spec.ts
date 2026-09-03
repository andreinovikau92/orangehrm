import { myTest, expect } from '../fixtures/fixture';

myTest('Successful login with valid credentials', async ({ page, startPage }) => {
  // await startPage.login('Admin', 'admin123');
  // await startPage.clickLoginBtn();
  await expect(page.locator('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toHaveText('Dashboard');

});

myTest('Verify after clicking Login button and blank fields', async ({ page, startPage }) => {
  await startPage.clickLoginBtn();
  expect(page.getByText('Required').first()).toBeVisible();
});