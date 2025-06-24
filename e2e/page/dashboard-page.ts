import { Page } from "@playwright/test";
import { BasePage } from "../../page/base-page";


export class DashboardPage extends BasePage {
    xpathHeadingDashboard = '#h1-dashboard';
    xpathActivity = '#activity';

    constructor(page: Page) {
        super(page);
    }

    async navigateToDashboardpage() {
        await this.navigateTo('url_dashboard');
    }        
}
