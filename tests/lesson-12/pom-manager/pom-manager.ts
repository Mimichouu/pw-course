/* POM Styles: một vài styles viết POM
1. POM manager
    - Quản lý nhiều page object.
    - Các page objects có thể được tạo và truy cập từ một nơi duy nhất.
    - Các page objects độc lập với nhau.
    - Các page chỉ được tạo khi cần thiết.
*/

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