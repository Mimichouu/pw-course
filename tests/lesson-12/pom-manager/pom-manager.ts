import { Page } from "@playwright/test";

import { PostPage } from "./post-page";
import { LoginPage } from "./login-page";

export class PomManager {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getLoginPage() {
        return new LoginPage(this.page);
    }

    getPostPage() {
        return new PostPage(this.page)
    }
}