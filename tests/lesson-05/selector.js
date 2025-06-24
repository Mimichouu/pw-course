/* Selector

- Là cách chọn phần tử trên rang
- có nhiều kiểu:
    + Xpath selector
    + CSS selector
    + Playwright selector


1. XPath selector

- Xpath = XML Path
- Có 2 loại:
    + Tuyệt đối: đi học theo cây DOM: bắt đầu bởi 1 /
    + tương đối: bắt đầu bởi 2 // -> VD: //tenthe[@thuoctih="gia tri"]
- Nên dùng XPath tương đối

- Tìm phần tử trên trang: F12 -> ctrl F -> cú pháp tìm -> tìm Xpath là duy nhất -> ném vào auto
    + tìm tuyệt đối: /html/body/div[1]/p -> 1 là index của thẻ đó
    + tìm tương đối: //input[@id="username"] -> ưu tiên chọn thuộc tính duy nhất

- Tìm phẩn tử bằng text()
    //h1[text()="User Re"] -> tìm phần tử theo text
hoặc //a[contains(text(),"Bài học 1: Register page")]

Thực hành: //input[@id="reading"]

- Trong html đôi khi sẽ có phần tử thừ khoảng trắng hoặc có giá trị không cố định
-> sử dụng: Contains()
    contains(<giá trị>, <giá trị contains>)

    Vd: //div[contains(text(), 'Tôi là Alex")]
        //div[contains(text(), 'Bây giờ là:')] 


Xpath: advance methods
    1. Wildcard: * 
    2. chứa thuộc tính
    3. and và or
    4. innerText: text()
    5. normalize-space()
    6. contains
    7. starts-with
    8. not

Xpath: Axes 
    ● parent 
    ● child 
    ● ancestor 
    ● descendant 
    ● following 
    ● preceding 
    ● following-sibling 
    ● preceding-sibling
//tag/relationship::tagname[@attr=’value’]

VD: Tìm thẻ input qua thẻ div có class= form-group và id= parent
->  //div[@class='form-group' and @id='parent']/child::input[@id='username']

Tìm từ thẻ table có id=user table tìm đến thẻ div cí id=ads here
-> //table[@id='userTable']/preceding::div[@id='ads-here']

Từ laber tìm thẻ input có name = gender
-> //label[@for='gender']/following::input[@type='radio' and @id='male']

2. CSS selector
- Cú pháp đơn giản, ngắn gọn hơn
- Không sử dụng được cho các case phức tạp: contains, text

3. Playwright selector
- những hàm đc cung cấp sẵn để tìm
- nhanh gọn dễ tìm nhưng sử dụng đc trong playwright
    + page.getByrole() button, checkbox, heading, link, list, table, and many more 
        -> vd:  await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
                await page.getByRole('checkbox', { name: 'Subscribe' }).check();
                await page.getByRole('button', { name: Submit }).click();
    + page.getByText() -> vd: page.getByText('Welcome, John')
    + page.getByLabel() -> vd: await page.getByLabel('Password').fill('secret');
    + page.getByPlaceholder() -> vd: await page.getByPlaceholder('name@example.com').fill('playwright@microsoft.com');
    + page.getByTitle() -> vd: await expect(page.getByTitle('Issues count')).toHaveText('25 issues');
    + page.getByAltText() -> vd: await page.getByAltText('playwright logo').click();
    + page.getByTestId(“directions”) mặc định dùng cho thuộc tính “data-testid”
        -> vd:  <button data-testid="directions">Itinéraire</button>
                <button id="directions">Itinéraire</button>
                await page.setTestIdAttribute(‘id’);
                await page.getByTestId('directions').click();
    



*/


