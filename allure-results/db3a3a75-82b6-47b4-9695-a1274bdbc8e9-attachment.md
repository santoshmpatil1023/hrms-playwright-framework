# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\logout.spec.ts >> User should be able to logout
- Location: tests\ui\logout.spec.ts:9:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('QA-AutoTest-17907601621511 QA-AutoTest-1790760162151-3')

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
              - paragraph [ref=f1e127]: Daniel Martin
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
        - generic [ref=f1e146]:
          - generic [ref=f1e147]:
            - img "profile picture" [ref=f1e149]
            - generic [ref=f1e150]:
              - paragraph [ref=f1e151]: Punched Out
              - paragraph [ref=f1e152]: "Punched Out: Mar 29th at 01:19 PM (GMT 7)"
          - generic [ref=f1e153]:
            - generic [ref=f1e154]: 0h 0m Today
            - button "" [ref=f1e155] [cursor=pointer]
          - separator [ref=f1e157]
          - generic [ref=f1e158]:
            - generic [ref=f1e159]:
              - paragraph [ref=f1e160]: This Week
              - paragraph [ref=f1e161]: Sep 28 - Oct 04
            - generic [ref=f1e162]:
              - generic [ref=f1e163]: 
              - paragraph [ref=f1e164]: 0h 0m
      - generic [ref=f1e168]:
        - generic [ref=f1e170]:
          - generic [ref=f1e171]: 
          - paragraph [ref=f1e172]: My Actions
        - separator [ref=f1e173]
        - generic [ref=f1e175]:
          - generic [ref=f1e176]:
            - button [ref=f1e177] [cursor=pointer]
            - paragraph [ref=f1e183] [cursor=pointer]: (1) Pending Self Review
          - generic [ref=f1e184]:
            - button [ref=f1e185] [cursor=pointer]
            - paragraph [ref=f1e194] [cursor=pointer]: (1) Candidate to Interview
      - generic [ref=f1e196]:
        - generic [ref=f1e198]:
          - generic [ref=f1e199]: 
          - paragraph [ref=f1e200]: Quick Launch
        - separator [ref=f1e201]
        - generic [ref=f1e203]:
          - generic [ref=f1e204]:
            - button "Assign Leave" [ref=f1e205] [cursor=pointer]
            - generic "Assign Leave" [ref=f1e208]:
              - paragraph [ref=f1e209]: Assign Leave
          - generic [ref=f1e210]:
            - button "Leave List" [ref=f1e211] [cursor=pointer]
            - generic "Leave List" [ref=f1e218]:
              - paragraph [ref=f1e219]: Leave List
          - generic [ref=f1e220]:
            - button "Timesheets" [ref=f1e221] [cursor=pointer]
            - generic "Timesheets" [ref=f1e227]:
              - paragraph [ref=f1e228]: Timesheets
          - generic [ref=f1e229]:
            - button "Apply Leave" [ref=f1e230] [cursor=pointer]
            - generic "Apply Leave" [ref=f1e233]:
              - paragraph [ref=f1e234]: Apply Leave
          - generic [ref=f1e235]:
            - button "My Leave" [ref=f1e236] [cursor=pointer]
            - generic "My Leave" [ref=f1e241]:
              - paragraph [ref=f1e242]: My Leave
          - generic [ref=f1e243]:
            - button "My Timesheet" [ref=f1e244] [cursor=pointer]
            - generic "My Timesheet" [ref=f1e247]:
              - paragraph [ref=f1e248]: My Timesheet
      - generic [ref=f1e250]:
        - generic [ref=f1e252]:
          - generic [ref=f1e253]: 
          - paragraph [ref=f1e254]: Buzz Latest Posts
        - separator [ref=f1e255]
        - generic [ref=f1e257]:
          - generic [ref=f1e258]:
            - generic [ref=f1e259] [cursor=pointer]:
              - img "profile picture" [ref=f1e261]
              - generic [ref=f1e262]:
                - paragraph [ref=f1e263]: Daniel Shirley Martin
                - paragraph [ref=f1e264]: 2026-30-09 03:59 PM
            - separator [ref=f1e265]
            - paragraph [ref=f1e266]: QA IS THE FUTURE 1790764174053
          - generic [ref=f1e267]:
            - generic [ref=f1e268] [cursor=pointer]:
              - img "profile picture" [ref=f1e270]
              - generic [ref=f1e271]:
                - paragraph [ref=f1e272]: Daniel Shirley Martin
                - paragraph [ref=f1e273]: 2026-30-09 03:58 PM
            - separator [ref=f1e274]
            - paragraph [ref=f1e275]: QA IS THE FUTURE 1790764132621
      - generic [ref=f1e277]:
        - generic [ref=f1e278]:
          - paragraph [ref=f1e283]: Employees on Leave Today
          - generic [ref=f1e284] [cursor=pointer]: 
        - separator [ref=f1e285]
        - generic [ref=f1e287]:
          - img "No Content" [ref=f1e288]
          - paragraph [ref=f1e289]: No Employees are on Leave Today
      - generic [ref=f1e291]:
        - generic [ref=f1e293]:
          - generic [ref=f1e294]: 
          - paragraph [ref=f1e295]: Employee Distribution by Sub Unit
        - separator [ref=f1e296]
        - list [ref=f1e301]:
          - listitem [ref=f1e302] [cursor=pointer]:
            - generic "Engineering" [ref=f1e304]
          - listitem [ref=f1e305] [cursor=pointer]:
            - generic "Human Resources" [ref=f1e307]
          - listitem [ref=f1e308] [cursor=pointer]:
            - generic "Administration" [ref=f1e310]
          - listitem [ref=f1e311] [cursor=pointer]:
            - generic "Client Services" [ref=f1e313]
          - listitem [ref=f1e314] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e316]
      - generic [ref=f1e318]:
        - generic [ref=f1e320]:
          - generic [ref=f1e321]: 
          - paragraph [ref=f1e322]: Employee Distribution by Location
        - separator [ref=f1e323]
        - list [ref=f1e328]:
          - listitem [ref=f1e329] [cursor=pointer]:
            - generic "Texas R&D" [ref=f1e331]
          - listitem [ref=f1e332] [cursor=pointer]:
            - generic "New York Sales Office" [ref=f1e334]
          - listitem [ref=f1e335] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e337]
    - generic [ref=f1e338]:
      - paragraph [ref=f1e339]: OrangeHRM OS 5.9
      - paragraph [ref=f1e340]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e341] [cursor=pointer]:
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
  6  |   readonly profileMenu: Locator;
  7  |   readonly logoutButton: Locator;
  8  | 
  9  |   constructor(page: Page) {
  10 |     this.page = page;
  11 | 
  12 |     this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' });
  13 |     this.profileMenu = page.getByText('QA-AutoTest-17907601621511 QA-AutoTest-1790760162151-3');
  14 |     this.logoutButton = page.getByRole('menuitem', { name: 'Logout' })
  15 |   }
  16 | 
  17 |   async isDashboardDisplayed(): Promise<boolean> {
  18 |     return await this.dashboardHeader.isVisible();
  19 |   }
  20 | 
  21 |   async logout(): Promise<void> {
> 22 |     await this.profileMenu.click();
     |                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  23 |     await this.logoutButton.click();
  24 |   }
  25 | }
```