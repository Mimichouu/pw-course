import {test, expect} from '@playwright/test';
import { LoginPage } from '../../page/login-page';
import { DashboardPage } from '../../page/dashboard-page';

test('test with POM', async ({page}) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);


    await test.step('Navigate to loginpage', async () => {
        await loginPage.navigateToLoginPage();
    })

    await test.step('login', async () => {
        await loginPage.fillUsername('abc');
        await loginPage.fillPassWord('123');
        await loginPage.clickBtnLoin();
        
        // ví dụ: tạp POM dashboardPage, verify xpathHeading hiển thị thành công

        await expect(dashboardPage.page.locator(dashboardPage.xpathHeadingDashboard)).toBeVisible();
    })


})