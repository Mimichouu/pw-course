/* utils function: các hàm tiện ích có sẵn
-> xử lý code nhanh hơn
-> có 2 dạng: 
    1. string util
    2. array util
*/

// 1. String util : hỗ trợ cho string
let str = 'Hello K14 class'

// trim() : loại bỏ khoảng trắng ở đầu và cuối của string
console.log(str.trim());

// toLowerCase() : chuyển tất cả ký tự sang thường
console.log(str.toLowerCase());

// toUpperCase() : chuyển tất cả ký tự sang viết hoa
console.log(str.toUpperCase());

// includes() : kiểm tra chuổi có chứa chuỗi con bên trong không -> trả về: true/false
console.log(str.includes('class'));

// replace() : thay thế một chuỗi con bằng 1 chuỗi khác trong chuỗi ban đầu
str = str.replace('K14', 'K15');
console.log(str);

// split() : chia chuỗi thành các chuỗi con dựa theo ký tự phân chia (delimiter)
let words = str.split(' ');
console.log(words);

// substring() : trả về 1 phần của chuỗi, bắt đầu từ số index được chỉ định đến số index kết thúc
console.log(str.substring(0, 9));

// indexOf() : trả về vị trí đầu tiên của chuỗi con đang tìm trong chuỗi, nếu không tìm thấy thì trả về giá trị -1
console.log(str.indexOf('K14'));

// 2. Array util: làm hỗ trợ cho array
 let arr = ['Nhung', 'Nhi', 'Tai', 'hang', 'Quang'];

 // map() : tạo mảng mới bằng cách áp 1 hàm lên từng phần tử của mảng gốc
 let upperName = arr.map(nameValue => nameValue.toUpperCase());
 console.log(upperName);

 // filter() : tạo 1 mảng mới, chỉ bao gồm các phần tử thỏa mãn điều kiện được chỉ định
 let arr2 = [1, 2, 3, 4, 5];
 let eventNumber = arr2.filter(num => num % 2 === 0);
 console.log(eventNumber);

// find() : trả về giá trị phần tử đầu tiên thỏa mãn điều kiện trong mảng, nếu k có phần tử thỏa mãn -> undefined
let arr3 = [1, 2, 3, 4, 5];
let evenNumber = arr2.find(num => num % 2 === 0);
 console.log(evenNumber);

// reduce() : áp dụng từng phần tử trong mảng và trả về 1 kết quả duy nhất
let arr4 = [1, 2, 3, 4, 5];
let sum = arr4.reduce((total, num) => total + num, 0);
console.log(sum);

// some() : check có tồn tại phần tử nào trog mảng thỏa mãn đk không, nếu có trả về true, k có false
let arr5 = [1, 2, 3, 4, 8];
let checkNum = arr5.some(num => num > 6);
console.log(checkNum);

// every() : check toàn bộ phần tử trong mảng xem có thỏa mãn kđ hay không, có trả về true, không có false
let arr6 = [1, 2, 3, 5, 8];
let checkNums = arr6.every(num => num % 2 === 0);
console.log(checkNums);

// push() : thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài của mảng mới
console.log(arr6.push(7, 10));
console.log(arr6);

// shift() : loại bỏ phần tử đầu tiên của mảng và trả về phần tử đó
let arr7 = [1, 2, 3, 5, 8];
console.log(arr7.shift());
console.log(arr7);

// sort() : sắp xếp các phần tử trong mảng theo từ điển unicode, chuyển từng phẩn tử về dạng chuỗi sau đó so sánh chuổi rồi mới sắp xếp
let arr8 = [2, 9, 5, 8, 6];
console.log(arr8.sort());


