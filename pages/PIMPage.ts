import { Page, Locator } from '@playwright/test';

export class PIMPage {
  readonly page: Page;

  readonly pimMenu: Locator;
  readonly addEmployeeMenu: Locator;
  readonly employeeListMenu: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pimMenu = page.getByRole('link', { name: 'PIM' }); //page.getByText('PIM', { exact: true });
    this.addEmployeeMenu = page.getByRole('button', { name: ' Add' }) //page.getByText('Add Employee', {exact: true,});

    this.employeeListMenu = page.getByText('Employee List', {
      exact: true,
    });
  }

  async navigateToPIM(): Promise<void> {
    await this.pimMenu.click();
  }

  async navigateToAddEmployee(): Promise<void> {
    await this.addEmployeeMenu.click();
  }

  async navigateToEmployeeList(): Promise<void> {
    await this.employeeListMenu.click();
  }
}