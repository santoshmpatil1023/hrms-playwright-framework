import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage.js';
import { PIMPage } from '../../pages/PIMPage.js';
import { EmployeePage } from '../../pages/EmployeePage.js';
import { environment } from '../../config/environments.js';
import employees from '../../data/employees.json' with { type: 'json' };
// import data from '../../data/users.json' with { type: 'json' };



test.describe('OrangeHRM PIM', () => {

    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            environment.username,
            environment.password
        );

    });

    test('User should navigate to PIM module', async ({ page }) => {

        const pimPage = new PIMPage(page);

        await pimPage.navigateToPIM();

        await expect(page.getByRole('heading', { name: 'Employee Information' })).toBeVisible();

    });

    test('User should be able to add a new employee', async ({ page }) => {

        const pimPage = new PIMPage(page);
        const employeePage = new EmployeePage(page);

        await pimPage.navigateToPIM();

        await pimPage.navigateToAddEmployee();

        await employeePage.addEmployee(
            employees.employee1.firstName,
            employees.employee1.middleName,
            employees.employee1.lastName
        );

        await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();

    });

});