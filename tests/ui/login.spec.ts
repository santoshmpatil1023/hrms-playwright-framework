import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage.js';
import { DashboardPage } from '@pages/DashboardPage.js';
import { environment } from '@config/environments.js';
import data from '@data/users.json' with { type: 'json' };

test.describe('OrangeHRM Login', () => {

  test('User should be able to login with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
      environment.username,
      environment.password
    );
    await expect(dashboardPage.dashboardHeader).toBeVisible();
  });

  test('User should not be able to login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
      data.invalidUser.username,
      data.invalidUser.password
    );
  })

});