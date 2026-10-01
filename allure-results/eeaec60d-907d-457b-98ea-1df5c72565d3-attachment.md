# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> OrangeHRM Login >> User should not be able to login with invalid credentials
- Location: tests\ui\login.spec.ts:24:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Username')

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   readonly page: Page;
  5  |   readonly usernameInput: Locator;
  6  |   readonly passwordInput: Locator;
  7  |   readonly loginButton: Locator;
  8  |   readonly invalidCredentialsMessage: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     this.page = page;
  12 | 
  13 |     this.usernameInput = page.getByPlaceholder('Username');
  14 |     this.passwordInput = page.getByPlaceholder('Password');
  15 |     this.loginButton = page.getByRole('button', {
  16 |       name: 'Login',
  17 |     });
  18 |     this.invalidCredentialsMessage = page.getByText('Invalid credentials')
  19 |   }
  20 | 
  21 |   async navigateToLoginPage(): Promise<void> {
  22 |     await this.page.goto('/web/index.php/auth/login');
  23 |   }
  24 | 
  25 |   async login(username: string, password: string): Promise<void> {
> 26 |     await this.usernameInput.fill(username);
     |                              ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  27 |     await this.passwordInput.fill(password);
  28 |     await this.loginButton.click();
  29 |   }
  30 | 
  31 |   async isInvalidCredentialsDisplayed(): Promise<boolean> {
  32 |     return await this.invalidCredentialsMessage.isVisible();
  33 |   }
  34 | }
```