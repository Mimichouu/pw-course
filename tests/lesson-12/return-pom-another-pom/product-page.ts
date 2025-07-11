import { Page } from '@playwright/test';
import { CheckoutPage } from './checkout-page';

export class ProductPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addToCart() {
        // code 
        // if (pageName = 'Cart Page') {
        //     // return new CartPage(this.page);
        // }

        // if (pageName = 'Checkout Page') {
            return new CheckoutPage(this.page);
        // }
    }
}
