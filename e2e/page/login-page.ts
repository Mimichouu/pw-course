import { Page } from "@playwright/test";
import { BasePage } from "../../page/base-page";


export class LoginPage extends BasePage {
    xpathUserName = '#username';
    xpathPassWord = '#password';
    xpathBtnLogin = '#login';

    constructor(page: Page) {
        super(page);
    }

    async navigateToLoginPage() {
        await this.navigateTo('url_login')
    }

    async fillUsername(username: string) {
        await this.page.locator(this.xpathUserName).fill(username);
    }
    async fillPassWord(password: string) {
        await this.page.locator(this.xpathPassWord).fill(password);
    }
    async clickBtnLoin() {
        await this.page.locator(this.xpathBtnLogin).click();
    }

    async Login(username: string, password: string) {
        await this.fillUsername(username);
        await this.fillPassWord(password);
        await this.clickBtnLoin();
    }
}