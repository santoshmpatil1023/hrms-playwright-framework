import { test as base, expect, Page } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { PIMPage } from '../pages/PIMPage';
import { EmployeePage } from '../pages/EmployeePage';

import { environment } from '../config/environments';

type Fixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  pimPage: PIMPage;
  employeePage: EmployeePage;
  loggedInPage: Page;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },

  pimPage: async ({ page }, use) => {
    await use(new PIMPage(page));
  },

  employeePage: async ({ page }, use) => {
    await use(new EmployeePage(page));
  },

  loggedInPage: async ({ page, loginPage }, use) => {
    await loginPage.navigateToLoginPage();

    await loginPage.login(
      environment.username,
      environment.password
    );

    await use(page);
  },
});

export { expect };