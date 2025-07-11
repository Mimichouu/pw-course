import { Page } from "@playwright/test";

export class PostPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // method post
    async clickMenuPost () {
        await this.page.locator('xpath_menu_post').click();
    }

}