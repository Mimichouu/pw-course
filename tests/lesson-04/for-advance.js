/* 
- for ... in: sẽ dùng lặp qua tất cả các thuộc tính trong 1 object
- cú pháp:
    for (let i in object) {
        code here
    }

*/
let students = {
    name: 'michou',
    age: 3,
    address: 'Ha Noi',
    job: {
        job_title: "EB",
        company: "Home"
    }
};

for (let property in students) {
    console.log(property);
    console.log(students[property]);
};

/* 
- forEach: là 1 hàm được hỗ trợ dùng cho mảng
- cú pháp: 
    arr.forEach((value, index) => {
    code here
})

*/

let fruits = ['banana', 'oảnge', 'apple'];

fruits.forEach((value, index) => {
    console.log(value, index);
})


/* 
- for ... of: sẽ dúng để lặp các giá trị trong mảng/string
- cú pháp:
    for (let i of array) {
        code here
    }

*/

let string = 'banana'
for (let char of string) {
    console.log(char);
}

// break và continue

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} là số chẵn`);
        continue;
    }
    console.log(`${i} là số lẻ`)
}

// continue: câu lệnh thoát khỏi một vài vòng lặp
// break: thoát ngay khỏi vòng lặp 
