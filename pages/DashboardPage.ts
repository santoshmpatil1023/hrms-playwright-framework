import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly dashboardHeader: Locator;
  readonly qaProfileMenu: Locator;
  readonly personalProfileMenu: Locator;
  readonly john: Locator;
  readonly bilol: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' });
    this.qaProfileMenu = page.getByText('QA-AutoTest-17907601621511 QA-AutoTest-1790760162151-3');
    this.personalProfileMenu = page.getByText('Daniel Martin');
    this.john = page.getByText('John Doe')
    this.bilol = page.getByText('Bilol Abdurasul', { exact: true });
    this.logoutButton = page.getByRole('menuitem', { name: 'Logout' })
  }

  async isDashboardDisplayed(): Promise<boolean> {
    return await this.dashboardHeader.isVisible();
  }

  async logout(): Promise<void> {

    if (await this.qaProfileMenu.isVisible()) {
      await this.qaProfileMenu.click();
    } else if (await this.personalProfileMenu.isVisible()) {
      await this.personalProfileMenu.click();
    } else if( await this.john.isVisible()) {
      await this.john.click();
    } else if( await this.bilol.isVisible()) {
      await this.bilol.click();
    } else {
      throw new Error('Neither profile menu was visible on the page.');
    }

    await this.logoutButton.click();
  }
}