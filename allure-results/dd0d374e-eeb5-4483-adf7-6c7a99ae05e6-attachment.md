# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\pim.spec.ts >> OrangeHRM PIM >> User should be able to add a new employee
- Location: tests\ui\pim.spec.ts:37:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Save' })
    - locator resolved to <button type="submit" data-v-10d463b7="" data-v-304890b0="" class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div data-v-d5bfe35b="" class="oxd-form-loader">…</div> intercepts pointer events
  - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - generic:
    - complementary [ref=f3e4]:
      - navigation "Sidepanel" [ref=f3e5]:
        - generic [ref=f3e6]:
          - link [ref=f3e7]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f3e9]
          - text: 
        - generic [ref=f3e10]:
          - generic [ref=f3e11]:
            - generic [ref=f3e12]:
              - textbox "Search" [ref=f3e15]
              - button "" [ref=f3e16] [cursor=pointer]
            - separator [ref=f3e18]
          - list [ref=f3e19]:
            - listitem [ref=f3e20]:
              - link "Admin" [ref=f3e21]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f3e25]:
              - link "PIM" [ref=f3e26]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f3e41]:
              - link "Leave" [ref=f3e42]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f3e46]:
              - link "Time" [ref=f3e47]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f3e54]:
              - link "Recruitment" [ref=f3e55]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f3e62]:
              - link "My Info" [ref=f3e63]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f3e70]:
              - link "Performance" [ref=f3e71]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f3e80]:
              - link "Dashboard" [ref=f3e81]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f3e85]:
              - link "Directory" [ref=f3e86]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f3e90]:
              - link "Maintenance" [ref=f3e91]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f3e96]:
              - link "Claim" [ref=f3e97]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f3e105]:
              - link "Buzz" [ref=f3e106]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f3e110]:
      - generic [ref=f3e111]:
        - generic [ref=f3e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f3e114]
        - link [ref=f3e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e117] [cursor=pointer]
        - list [ref=f3e123]:
          - listitem [ref=f3e124]:
            - generic [ref=f3e125] [cursor=pointer]:
              - img "profile picture" [ref=f3e126]
              - paragraph [ref=f3e127]: John Doe
              - generic [ref=f3e128]: 
      - navigation "Topbar Menu" [ref=f3e130]:
        - list [ref=f3e131]:
          - listitem [ref=f3e132] [cursor=pointer]:
            - generic [ref=f3e133]:
              - text: Configuration
              - generic [ref=f3e134]: 
          - listitem [ref=f3e135] [cursor=pointer]:
            - link "Employee List" [ref=f3e136]:
              - /url: "#"
          - listitem [ref=f3e137] [cursor=pointer]:
            - link "Add Employee" [ref=f3e138]:
              - /url: "#"
          - listitem [ref=f3e139] [cursor=pointer]:
            - link "Reports" [ref=f3e140]:
              - /url: "#"
          - button "" [ref=f3e142] [cursor=pointer]
  - generic [ref=f3e144]:
    - generic [ref=f3e147]:
      - heading "Add Employee" [level=6] [ref=f3e148]
      - separator [ref=f3e149]
      - generic [ref=f3e150]:
        - generic [ref=f3e154]:
          - generic [ref=f3e155]:
            - generic [ref=f3e157]:
              - button "Choose File"
              - generic [ref=f3e158]:
                - img "profile picture" [ref=f3e160]
                - button "" [ref=f3e161] [cursor=pointer]
            - paragraph [ref=f3e163]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=f3e164]:
            - generic [ref=f3e165]:
              - generic [ref=f3e168]:
                - generic [ref=f3e169]: Employee Full Name*
                - generic [ref=f3e171]:
                  - textbox "First Name" [ref=f3e174]: Santosh
                  - textbox "Middle Name" [ref=f3e177]: Test
                  - textbox "Last Name" [active] [ref=f3e180]: Automation
              - generic [ref=f3e183]:
                - generic [ref=f3e184]: Employee Id
                - textbox [ref=f3e187]: "0406"
            - separator [ref=f3e188]
            - generic [ref=f3e189]:
              - paragraph [ref=f3e190]: Create Login Details
              - checkbox [ref=f3e193]
        - separator [ref=f3e195]
        - generic [ref=f3e196]:
          - paragraph [ref=f3e197]: "* Required"
          - button "Cancel" [ref=f3e198] [cursor=pointer]
          - button "Save" [ref=f3e199] [cursor=pointer]
    - generic [ref=f3e200]:
      - paragraph [ref=f3e201]: OrangeHRM OS 5.9
      - paragraph [ref=f3e202]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e203]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class EmployeePage {
  4  |   readonly page: Page;
  5  | 
  6  |   readonly firstNameInput: Locator;
  7  |   readonly middleNameInput: Locator;
  8  |   readonly lastNameInput: Locator;
  9  |   readonly employeeIdInput: Locator;
  10 |   readonly saveButton: Locator;
  11 | 
  12 |   constructor(page: Page) {
  13 |     this.page = page;
  14 | 
  15 |     this.firstNameInput = page.getByPlaceholder('First Name');
  16 |     this.middleNameInput = page.getByPlaceholder('Middle Name');
  17 |     this.lastNameInput = page.getByPlaceholder('Last Name');
  18 | 
  19 |     this.employeeIdInput = page
  20 |       .locator('input')
  21 |       .nth(4);
  22 | 
  23 |     this.saveButton = page.getByRole('button', {
  24 |       name: 'Save',
  25 |     });
  26 |   }
  27 | 
  28 |   async addEmployee(
  29 |     firstName: string,
  30 |     middleName: string,
  31 |     lastName: string
  32 |   ): Promise<void> {
  33 | 
  34 |     await this.firstNameInput.fill(firstName);
  35 |     await this.middleNameInput.fill(middleName);
  36 |     await this.lastNameInput.fill(lastName);
  37 | 
> 38 |     await this.saveButton.click();
     |                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  39 |   }
  40 | }
```