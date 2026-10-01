# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\logout.spec.ts >> User should be able to logout
- Location: tests\ui\logout.spec.ts:9:1

# Error details

```
Error: Neither profile menu was visible on the page.
```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic:
    - complementary [ref=f1e4]:
      - navigation "Sidepanel" [ref=f1e5]:
        - generic [ref=f1e6]:
          - link [ref=f1e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f1e9]
          - text: 
        - generic [ref=f1e10]:
          - generic [ref=f1e11]:
            - generic [ref=f1e12]:
              - textbox "Search" [ref=f1e15]
              - button "" [ref=f1e16] [cursor=pointer]
            - separator [ref=f1e18]
          - list [ref=f1e19]:
            - listitem [ref=f1e20]:
              - link "Admin" [ref=f1e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f1e25]:
              - link "PIM" [ref=f1e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f1e41]:
              - link "Leave" [ref=f1e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f1e46]:
              - link "Time" [ref=f1e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f1e54]:
              - link "Recruitment" [ref=f1e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f1e62]:
              - link "My Info" [ref=f1e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f1e70]:
              - link "Performance" [ref=f1e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f1e80]:
              - link "Dashboard" [ref=f1e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f1e85]:
              - link "Directory" [ref=f1e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f1e90]:
              - link "Maintenance" [ref=f1e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f1e96]:
              - link "Claim" [ref=f1e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f1e105]:
              - link "Buzz" [ref=f1e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f1e110]:
      - generic [ref=f1e111]:
        - generic [ref=f1e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=f1e114]
        - link [ref=f1e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f1e117] [cursor=pointer]
        - list [ref=f1e123]:
          - listitem [ref=f1e124]:
            - generic [ref=f1e125] [cursor=pointer]:
              - img "profile picture" [ref=f1e126]
              - paragraph [ref=f1e127]: John Doe
              - generic [ref=f1e128]: 
      - navigation "Topbar Menu" [ref=f1e130]:
        - list [ref=f1e131]:
          - button "" [ref=f1e133] [cursor=pointer]
  - generic [ref=f1e135]:
    - generic [ref=f1e137]:
      - generic [ref=f1e139]:
        - generic [ref=f1e141]:
          - generic [ref=f1e142]: 
          - paragraph [ref=f1e143]: Time at Work
        - separator [ref=f1e144]
      - generic [ref=f1e148]:
        - generic [ref=f1e150]:
          - generic [ref=f1e151]: 
          - paragraph [ref=f1e152]: My Actions
        - separator [ref=f1e153]
        - generic [ref=f1e155]:
          - img "No Content" [ref=f1e156]
          - paragraph [ref=f1e157]: No Pending Actions to Perform
      - generic [ref=f1e159]:
        - generic [ref=f1e161]:
          - generic [ref=f1e162]: 
          - paragraph [ref=f1e163]: Quick Launch
        - separator [ref=f1e164]
      - generic [ref=f1e168]:
        - generic [ref=f1e170]:
          - generic [ref=f1e171]: 
          - paragraph [ref=f1e172]: Buzz Latest Posts
        - separator [ref=f1e173]
      - generic [ref=f1e177]:
        - generic [ref=f1e178]:
          - paragraph [ref=f1e183]: Employees on Leave Today
          - generic [ref=f1e184] [cursor=pointer]: 
        - separator [ref=f1e185]
      - generic [ref=f1e189]:
        - generic [ref=f1e191]:
          - generic [ref=f1e192]: 
          - paragraph [ref=f1e193]: Employee Distribution by Sub Unit
        - separator [ref=f1e194]
      - generic [ref=f1e198]:
        - generic [ref=f1e200]:
          - generic [ref=f1e201]: 
          - paragraph [ref=f1e202]: Employee Distribution by Location
        - separator [ref=f1e203]
    - generic [ref=f1e206]:
      - paragraph [ref=f1e207]: OrangeHRM OS 5.9
      - paragraph [ref=f1e208]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e209] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class DashboardPage {
  4  |   readonly page: Page;
  5  |   readonly dashboardHeader: Locator;
  6  |   readonly qaProfileMenu: Locator;
  7  |   readonly personalProfileMenu: Locator;
  8  |   readonly logoutButton: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     this.page = page;
  12 | 
  13 |     this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' });
  14 |     this.qaProfileMenu = page.getByText('QA-AutoTest-17907601621511 QA-AutoTest-1790760162151-3');
  15 |     this.personalProfileMenu = page.getByText('Daniel Martin');
  16 |     this.logoutButton = page.getByRole('menuitem', { name: 'Logout' })
  17 |   }
  18 | 
  19 |   async isDashboardDisplayed(): Promise<boolean> {
  20 |     return await this.dashboardHeader.isVisible();
  21 |   }
  22 | 
  23 |   async logout(): Promise<void> {
  24 | 
  25 |     if (await this.qaProfileMenu.isVisible()) {
  26 |       await this.qaProfileMenu.click();
  27 |     } else if (await this.personalProfileMenu.isVisible()) {
  28 |       await this.personalProfileMenu.click();
  29 |     } else {
> 30 |       throw new Error('Neither profile menu was visible on the page.');
     |             ^ Error: Neither profile menu was visible on the page.
  31 |     }
  32 | 
  33 |     await this.logoutButton.click();
  34 |   }
  35 | }
```