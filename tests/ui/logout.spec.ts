// import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage.js';
import { DashboardPage } from '../../pages/DashboardPage.js';
import data from '../../data/users.json' with { type: 'json' };


// test('User should be able to logout', async ({ page }) => {

//     const loginPage = new LoginPage(page);
//     const dashboardPage = new DashboardPage(page);

//     await loginPage.navigateToLoginPage();

//     await loginPage.login(
//         // environment.username,
//         // environment.password
//         data.validUser.username,
//         data.validUser.password
//     );

//     await expect(dashboardPage.dashboardHeader).toBeVisible();

//     await dashboardPage.logout();

//     await expect(loginPage.usernameInput).toBeVisible();
// });

import { test, expect } from '../../fixtures/testFixtures.js';

test('User should be able to logout', async ({
  loggedInPage,
  dashboardPage,
  loginPage,
}) => {
  await expect(dashboardPage.dashboardHeader).toBeVisible();
  await dashboardPage.logout();
  await expect(loginPage.usernameInput).toBeVisible();
});