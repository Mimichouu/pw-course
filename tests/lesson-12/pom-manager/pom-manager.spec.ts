import { test } from '@playwright/test';
import { PomManager } from './pom-manager';

test('POM MANAGER', async ({page}) => {
    const pomManager = new PomManager(page);
    const loginPage = pomManager.getLoginPage();
    const postPage = pomManager.getPostPage();

    await loginPage.navigateToLoginPage();
    await loginPage.Login('username', 'password');
    await postPage.clickMenuPost();
})