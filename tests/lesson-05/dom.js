/* DOM ( Document Object Model)

- node: các phần tử trong DOM được sắp xếp theo thứ tự 
-> còn đc gọi là element. Vd: <option>United State</option> -> option thẻ mở, /option thẻ đóng
+ thuộc tính trong thẻ <option value='use'>United State</option>
+ thẻ tự đóng: <img src='image.jpg' alt='Image description'/>: thẻ ảnh
                <br>: thẻ xuống dòng 
                <hr>: thẻ dấu gạch ngang
+ trong thẻ chứa text hoặc thẻ con
+ có thể thêm thuộc tính vào 

- Các thẻ Html thường gặp:
+ thẻ <div> ( viết tắt của divide): dùng để chia các khối trong trang web
+ thẻ <h1></h1> đến <h6></h6> (viết tắt của heading): dùng để tạo ra các header phân cấp theo thứ tự từ lớn đến bé
+ thẻ <form></form>: dùng để chứa một form thông tin
+ thẻ input: text, email, radio, checkbox, file, color, range, date
+ thẻ textarea: hiển thị ô input, dạng to
+ thẻ radio button: tạo nút chọn một (radio)
+ thẻ checkbox: tạo nút cho nhiều lựa chọn (checkbox)
+ thẻ list và dropdown: hiển thị danh sách hoặc nemu thả xuống
+ thẻ button: tạo nút bấm
+ thẻ table: hiển thị bảng dữ liệu
    . thead = table heading
        .. tr = table row = 1 dòng
            ... th: table heading: text in đậm
    . tbody
        .. tr -> td = table data
+ thẻ date picker: tạo bộ chọn ngày
+ thẻ slider: tạo thanh trượt
+ thẻ iframe: hiển thị nội dung từ một trang web khác bên trong trang hiện tại

*/

/* DOM: Quy ước
- Node gốc

- Node hiện tại: self
    + parent: là node phía trên trực tiếp của node hiện tại
    + children: là node phía dưới trực tiếp của node hiện tại
    + ancestor (tổ tiên): những node phía trên trực hệ của thẻ hiện tại
    + ancestor-or-self: nhũng node phía trên trực hệ của thẻ hiện tại và cả chính nó
    + descendant (hậu duệ): những node phía dưới trực hệ của thẻ hiện tại 
    + descendant-or-self: những node phía dưới trực hệ của thẻ hiện tại và chính nó
    + sibling (anh em): những phần tử cùng cấp - ngang hàng
    + following: gồm các node ở phía sau nút đóng của node hiện tại (không bao gồm thẻ con cháu của node hiện tại)
    + preceding: gồm các node ở phía trước của node hiện tại (không bao gồm thẻ tổ tiên của node hiện tại)
    + following-sibling: Anh em phía sau
    + preceding-sibling: anh em phía trước

- Node cần chú ý

*/