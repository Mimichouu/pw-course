import { Page, test as base } from '@playwright/test'; 
// test của pw đang tên là base -> đổi như vậy để đồng bộ tất cả dùng test

// cú pháp tạo test.extend() có fixture tên dashboard
// khai báo type of fixture -> cú pháp: <{ten fixture: type}>
const test = base.extend<{dashboard: Page}>({
    dashboard: async ({page}, use) => {
        // beforaEach
        console.log('Login');

        // use
        await use(page);

        // afterEach
        console.log('Clean up data');
    }
})

// để dùng fixture phải export 
export { test };


