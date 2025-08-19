import {expect, test} from '@playwright/test';

// chụp toàn màn
test('visual test', async ({page}) => {
    await page.goto('https://material.playwrightvn.com');
    await expect(page).toHaveScreenshot('homepage.png'); 
    // chạy lần đầu sẽ fail và tự động gen ra ảnh chụp màn hình, check ảnh vừa đc chụp
    // chạy lần 2 để so sánh với lần 1
})

// chụp 1 phần
test('visual test 02', async ({page}) => {
    const containerBlockLocator = page.locator('//div[@class="container"]');
    await page.goto('https://material.playwrightvn.com');
    await expect(page).toHaveScreenshot('homepage-01.png'); 
    // cần đổi tên ảnh để tránh lấy nhầm ảnh đã verify ở test trc    
})

// che 1 phần (che quảng cáo,...)
test('visual test 03', async ({page}) => {
    const adsBlockLocator = page.locator('//div[@id="ads-here"]');
    await page.goto('https://material.playwrightvn.com');
    await expect(page).toHaveScreenshot('homepage-with-mask.png', {
        mask: [adsBlockLocator],
        maskColor: '#000000' // che bằng màu
    })
})