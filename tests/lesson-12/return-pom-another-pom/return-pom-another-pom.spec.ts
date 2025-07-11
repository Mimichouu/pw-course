import { expect, test } from '@playwright/test';
import { LoginPage } from './login';

test('return pom another pom', async ({page}) => {
    const loginPage = new LoginPage(page);
    const productPage = await loginPage.Login('username','password');
    const checkoutPage = await productPage.addToCart();
    const confirmPage = await checkoutPage.checkout();
    const infoOrder = await confirmPage.getInfoOrder();
    // expect (infoOrder).
})