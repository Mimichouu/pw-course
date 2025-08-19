/*
1. Fixture
    - Playwright sử dụng concept fixture
    - Fixture dùng để khởi tạo các environment khác nhau cho các test.
    - Fixture là isolate(độc lập) giữa các test.
    - Fixture giúp nhóm các test dựa trên ý nghĩa, thay vì common(chung) setup
    - Fixture nhớ kĩ:
        + Trước use: giống beforeEach
        + use: chạy code trong test
        + Sau use: giống afterEach



const test = base.extend({
  todoPage: async ({ page }, use) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addToDo('item1');
    await todoPage.addToDo('item2'); // các dòng code trc use tương đương beforeEach
    await use(todoPage); // đây là use
    await todoPage.removeAll(); // dòng code dưới use tương đương afterEach
  },
});



2. Built-in fixture

Fixture            Type                        Mô tả

page               Page                        Tạo một page riêng biệt cho test.
context            BrowserContext              Tạo một context riêng biệt cho test. Fixture page phía trên cũng cùng context với context này.
browser            Browser                     Browser được dùng chung giữa các test để tối ưu tài nguyên.
browserName        string                      Tên browser đang chạy. Có thể là chromium, firefox hay webkit.
request            APIRequestContext           Một APIRequestContext instance độc lập.


3. Tạo mới fixture
  - Sử dụng test.extend() để tạo mới một test object.
        import { test as base } from '@playwright/test'

          class Page2 {
            sayMyName() {
              console.log('My name is Page2');
            }
          }

  - Demo
        import { test as base } from '@playwright/test'
        
          const test = base.extend<{ page2: Page2 }>({
            page2: async ({ }, use) => {
              const page2 = new Page2();
              page2.sayMyName();
              await use(page2);
              console.log("after page2");
            }
          })

  - Cách tổ chức fixture (merge fixture)
        export { test };

          import { mergeTests } from "@playwright/test";
          import { test as t1 } from './fixture-1';
          import { test as t2 } from './fixture-2';

          export const test = mergeTests(t1, t2);



4. Sử dụng fixture
  - Demo

  Managing environment variables
    - Tình huống:
        Có 2 môi trường
        Mỗi môi trường có 1 data khác nhau.
        VD: tạo tag
            dev: tag1, tag2
            prod: javascript, playwright
    - Cài đặt thư viện dotenv
    - Tạo file .env
    - Tạo file data theo biến môi trường
    - Url production: https://pw-practice.playwrightvn.com/wp-admin 

    - cú pháp cài env: 
    npm install dotenv --save
    —
    import { config } from 'dotenv';
    config();
    console.log(process.env.ENV);

*/