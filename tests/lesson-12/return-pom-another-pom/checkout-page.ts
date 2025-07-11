import { Page } from '@playwright/test';
import { ConfirmPage } from './confirm-page';

export class CheckoutPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async checkout() {
        // code 

        return new ConfirmPage(this.page);

    }
}