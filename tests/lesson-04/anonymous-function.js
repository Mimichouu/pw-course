/* Anonymous function

- Hàm ẩn danh (hàm không có tên)
- cú pháp: function () {}

- thường được sử dụng 1 lần hoặc làm đối số truyền vào các hàm khác
- cú pháp : function (parameters) {
    code here
}

*/

let sum = function (a, b) {
    return a + b;
}


/* Lambda function (Arrow function)
- Một ngắn gọn viết hàm trong JS
- Sử dụng dấu => thay vì từ khóa function
- cú pháp: (parameters) => {
    code here
}

*/

// Hàm có nhiều tham số

let sum2 = (a, b) => {
    return a + b;
}
const total = sum(5, 6);
console.log(total);


// Hàm có 1 tham số

let dup = x => {
    return x * 2;
}
console.log(dup(2));


// Hàm chỉ có 1 biểu thức return

let dup2 = x => x * 2;


// Hàm không có tham số

() => {
    console.log("");
}

