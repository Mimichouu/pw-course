/* Basic syntax ( cú pháp cơ bản)

1. Test: Đơn vị cơ bản khai báo 1 auto test
- tên file test: tenfile.spec.ts

- Cú pháp gọi để dùng: import { test } form '@playwrigth/test';

test("ten test case", async () => {
    code auto của test
});

2. Step: Đơn vị nhỏ hơn test, để khai báo từng step của test case
->trong TCS có thể có nhiều step
-> step nên map  1-1 với TCS để dễ dàng maintain

- Cú pháp khai báo 1 step: await test.("ten step1", async () => {
    code here
});


3. Basic actions

3.1 Navigate
- thêm page: đại diện cho trình duyệt mình tương tác
import { test } form '@playwrigth/test';

test("ten test case", async ({ page }) => {
    code auto của test
});

- cú pháp: await page.goto("url page");

3.2 Click
- Single click: await page.locator("selector").click();
- Double click: await page.locator("selector").dbclick();
- Click nhiều lần : await page.locator("selector").click({clickCount: 5}); -> 5: số lần click
- Click chuột phải: await page.locator("selector").click({button: "right"});
- Click chuột kèm bàn phím khác: await page.locator("selector").click({modifiers: ["tổ hợp phím"]});


4. Input: thực hiện nhập form
- sử dụng hàm fill: giống việc copy/paste content vào 1 ô
    + cú pháp: page.locator("//input").fill("Playwrigth Việt Nam");

- Sử dụng pressSequentially: giống việc gõ từng chữ vào ô 
    + cú pháp: 
    page.locator("//input").pressSequentially("Playwrigth Việt Nam", {
        delay: 100,
    });


5. Radio/checkbox
- lấy giá trị hiện tại đang là check hay không
    const isCheck = page.locator('//input').isChecked();

- Check/uncheck
    page.locator('//input').check();
    page.locator('//input').setCheck(false);


6. Select option
    await page.locator("//select").selectOption();


7. Set input file
    await page.locator("//input").setInputFile("relative path muốn upload")

*/

import { test } from '@playwright/test'

test("ten test case", async ({ page }) => {
    // navigate
    await page.goto("https://material.playwrightvn.com/");
    
    // clisk();
    await page.locator('//a[contains(text(), "Bài học 1: Register Page")]').click();

    // fill
    await page.locator('//input[@id="username"]').fill("K14 Playwrigth");

    // pressSequentially
    await page.locator('//input[@id="username"]').pressSequentially("K14 Playwrigth Test basic syntax");

    await page.locator('//input[@value = "male"]').isChecked();
    const isChecked = await page.locator('//input[@value = "male"]').isChecked();
    console.log(isChecked);

    await page.locator("//select[@id='country']").selectOption("canada");

    await page.locator("//input[@id='profile']").selectOption("");

});
