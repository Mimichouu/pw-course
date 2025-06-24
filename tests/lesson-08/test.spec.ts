/* Test describe

1. test suite:
    - là tập hợp test cases
    - nhóm các test case lại cho dễ quản lý
    - test suite trong pw: 
        test.describe('<tên suite>', async () => { 
            test('test1', async ({ page }) => {
                // code ...
            });
            
            test('test 2', async ({ page }) => {
                // code ...
            });
        })


2. test hooks
    - Các thời điểm chạy test 
        + trước khi chạy
        + trong khi chạy
        + sau khi chạy
    - Các thời điểm chạy suite
        + Trước khi chạy
        + Trong khi chạy
        + Sau khi chạy
    -> PW: gọi các thời điểm này là hooks
    - Các hooks:
        + beforeAll: chạy trc test group -> cú pháp: test.beforeAll(async () =>{ code });
        + beforeEach: chạy trc mỗi test case -> cú pháp: test.beforeEach(async () =>{ code });
        + afterEach: chạy sau các step của test case -> cú pháp: test.afterEach(async () =>{ code });
        + afterAll: chạy cuối cùng sau khi chạy test group -> cú pháp: test.afterAll(async () =>{ code });
    => nguyên tắc chạy: beforeAll -> beforeEach -> TC1 -> afterEach -> beforeEach -> TC2 -> afterEach -> afterAll


3. PW assertion
    - Assertion: 


*/


import {test, expect} from '@playwright/test';

test.describe('AUTH - Authencation', () => {
  
        //data test
        const invalidUserCredential = {
            userName: 'K14-class',
            password:'K14-class'
        }; 

        const xpathUserName = '//input[@id="user_login"]';
        const xpathPassword = '//input[@id="user_pass"]';
        const xpathBtnLogIn = '//input[@id="wp-submit"]';
        const xpathErrMsg = '//div[@id="login_error"]//p';

    
    test.beforeEach(async ({page}) => {
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
    })
    

    
    test('@Auth_001 - Login Fail', async ({page}) => {
        await test.step('Nhập vào thông tin username, password bị sai', async() => {
            //Nhập vào thông tin username, password bị sai
            await page.locator(xpathUserName).fill(invalidUserCredential.userName);
            await page.locator(xpathPassword).fill(invalidUserCredential.userName);

            //Giá trị của username, password được điền vào ô input
            const actualUssername = await page.locator(xpathUserName).inputValue();
            const actualPassword = await page.locator(xpathPassword).inputValue();

            expect(actualUssername).toEqual(invalidUserCredential.userName); //assertion
            expect(actualPassword).toEqual(invalidUserCredential.userName);

        });

        await test.step('Clicks button Login', async() => {
            //Click button Login
            await page.locator(xpathBtnLogIn).click();

            //expected
            const expMsg = ``;

            await expect(page.locator(xpathErrMsg)).toHaveText(expMsg);

        });
    });

    test('ten TC 2', async () => {
        console.log('Chay tc 2')
    });
});