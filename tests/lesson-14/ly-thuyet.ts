/* 
* Javascript: Async & Await
- là 1 concept trong Js giúp viết code bất đồng bộ 1 cách dễ hiểu dễ đọc hơn
    + Đồng bộ: thực hiện lần lượt theo thứ tự
    + Bất đồng bộ: thực hiện song song

- Async: dùng để khai báo hàm bất đồng bộ
- Await: dùng để chờ một Promise 

-> mục đích: Async await giúp tăng hiệu năng xử lý cho hệ thống


* Test generator (không lạm dụng)
- Tự sinh ra code test khi thao tác: npx playwright codegen https://pw-practice.platwrightvn.com
- record một test
    + sử dụng VS code: click vào folder cần làm -> click testing 
        -> record new test: input url cần test -> thực hiện các thao tác manual => tự động gen code
        -> record at cursor: 
    + sử dụng terminal bằng câu lệnh: npx playwwright codegen <url> -> copy codegen paste lại sang file
- pick locator


* Visual comparison
- Generate screenshot:
    import {expect, test} from '@playwright/test';
    test('visual test', async ({page}) => {
        await page.goto('https://material.playwrightvn.com');
        await expect(page).toHaveScreenshot('homepage.png');
            -> chạy lần đầu sẽ fail và tự động gen ra ảnh chụp màn hình, check ảnh vừa đc chụp
            -> chạy lần 2 để so sánh với lần 1

    - Update screenshot
        + Remove old file: xóa bằng tay
        + Using terminal command:
            câu lệnh chayh test: npx playwright test -g 'tên test'
            Câu lệnh chạy test và so sánh với ảnh expect: npx playwright test -g 'tên test' --update-snapshots
    -> chạy test mới cần đổi tên ảnh

- Mask locator: che locator
    + mask: [xpath locator]
    + maskColor: #color


* Video recording: record video when running test
    - mode:
        + on: bật - reocrd tất cả các test
        + off: tắt
        + on-first-retry: record khi test thất bại lần đầu tiên
        + retain-on-failue: record vid cho mỗi test nhưng xóa tất cả vid của các test thành công
    - size

    - vào file playwright.config.ts
        import {defineConfig} from '@playwright/test';
        export default defineConfig ({
            use: {
                trace: 'on',
                video: {
                    mode: 'on',
                    size: { width: 640, height: 480 }
                }
            },
        });


* Test report: có 2 cách xem report
    1/ Click Testing trên thanh công cụ -> click show trace viewer -> ấn chạy test -> gen ra report
    2/ Chạy bằng lệnh: npx playwright test -g 'tên test' --trace on 
        xong chạy tiếp lệnh: npx playwright show-report
    
* Test emulation: giả lập, mô phỏng -> vào file playwright.config.ts -> project -> use
    - devices
    - viewport: {width: 1200, height: 720},
    - locale & timezone
    - color scheme
    - geolocation
    - permission
    - further reading


* Drag a Drop: kéo thả
    import {test} from "@playwright/test";

// - dragTo: lấy xpath điểm đầu, điểm cuối -> dùng câu lệnh: await page.dragAndDrop(start, end);

    test('Drag n drop, async ({page}) => {
        awat page.goto('https://');
        const start = 'xpath start';
        const end = 'xpath end';

        await page.dragAndDrop(start, end);
    })

// - Drag manually: thực hiện hover -> hành động của chuột (mouse.down, mouse.up)

    test ('Drag n drop 02, async ({page}) => {
        awat page.goto('https://');
        const start = 'xpath start';
        const end = 'xpath end';

        await page.locator(start).hover();
        await page.mouse.down();
        await page.locator(end).hover();
        await page.mouse.up();
    })


* Global setup & teardown
    - Khái niệm và concept:
        + GlobalSetup: chạy trước khi tất cả các test chạy, chỉ chạy MỘT LẦN DUY NHẤT
        + GlobalTeardown: chạy sau khi tất cả các test chạy, chỉ chạy MỘT LẦN DUY NHẤT
    
    - Tạo 1 file riêng "global-setup.ts" (teardown tương tự)
        import {test as setup} from "@playwright/test";
        setup('set up env', async ({}) => {
            console.log('set up env)
        });
    
-> vào file playwright.config.ts -> project -> thêm một project mới cho global setup
        {
            name: 'setup'
            testMatch: /ten file đã tạo\.ts/
            testDir: '.<tên folder chứa file>' // nếu file nằm ở folder khác ngoài config thì thêm 
            teardown: 'tên file teardown đã tạo' // thêm 1 thuộc tính teardown trong project tạo cho global setup
        }

-> với teardown: vẫn thêm 1 project tương tự như global setup 
// project teardown không cần thêm thuộc tính teardown như global setup

thêm thuộc tính dependencies: ['ten project tạo ở trên'] vừa tạo ở project global setup vào project ở dưới 
=> ý nghĩa: project này sẽ bị phụ thuộc vào project bên trên.


*/