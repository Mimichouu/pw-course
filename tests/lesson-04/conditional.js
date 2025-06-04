/*
Câu lệnh if else
    if (điều kiện) {
    nếu đk đúng -> thực hiện code
    } else {
     nếu đk sai -> thực hiện code}

*/

// VD: In ra màn hình 1 số chẵn, lẻ

let a = 6;
if (a % 2 === 0) {
    console.log('a là số chẵn');
} else {
    console.log('a là số lẻ');
}

// VD: Nếu điểm < 5: học sinh yếu
// 5 <= điểm < 8: học sinh khá
// điểm > 8: học sinh giỏi

let diem = 6;
if (diem < 5 && diem >= 0) {
    console.log('Hoc sinh yeu');
} else if (diem >= 5 && diem < 8) {
    console.log('Hoc sinh kha');
} else if (diem >= 8 && diem <= 10) {
    console.log('Hoc sinh gioi');
} else {
    console.log('Khong hop le');
};

/* 
- Cú pháp switch case:
    switch (tham so) {
        case cond1: 
            code cond1;
            break;
        case cond2:
            code cond2;
            break;
        ....
        default:
            code default;
        }

VD: Nhập vào 1 số và in ra số đó là tháng mấy trong năm
*/

let month = 12;

switch (month) {
    case 1: 
        console.log('Thang 1');
        break;
    case 2: 
        console.log('Thang 2');
        break;
    case 3: 
        console.log('Thang 3');
        break;
    case 4: 
        console.log('Thang 4');
        break;
    case 5: 
        console.log('Thang 5');
        break;
    default:
        console.log('Thang khong hop le');
}

