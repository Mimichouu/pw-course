import { Page } from "@playwright/test";

export class LoginPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToLoginPage() {
        await this.page.goto('url');
    }

    // method login
    async Login(username: string, password: string) {
        await this.page.locator('xpath_username').fill(username);
        await this.page.locator('xpath_password').fill(password);
        await this.page.locator('xpath_btn_login').click();
    }

}