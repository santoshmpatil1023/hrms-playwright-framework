
import { test, expect } from '../../fixtures/testFixtures.js';
import employees from '../../data/employees.json' with { type: 'json' };

test.describe('OrangeHRM PIM', () => {

    test('User should navigate to PIM module', async ({
        loggedInPage,
        pimPage
    }) => {

        await pimPage.navigateToPIM();

        await expect(
            loggedInPage.getByText('Employee Information', {
                exact: true
            })
        ).toBeVisible();
    });

    test('User should be able to add a new employee', async ({
        loggedInPage,
        pimPage,
        employeePage
    }) => {
        await pimPage.navigateToPIM();
        await pimPage.navigateToAddEmployee();

        await employeePage.addEmployee(
            employees.employee1.firstName,
            employees.employee1.middleName,
            employees.employee1.lastName
        );

        await expect(loggedInPage.getByRole('heading', { name: 'Personal Details' })).toBeVisible();

    })

});