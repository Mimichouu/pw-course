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


*/


