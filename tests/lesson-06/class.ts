/*
1. class
    - Dùng để khai báo kiểu dữ liệu cho đối tượng
    - Là một khuôn mẫu định nghĩa các thuộc tính và phương thức mà các đối tượng thuộc class đó sẽ có
    - Tái sử dụng code
    - tăng tính linh hoạt

2. Phương thức
    - là các hàm được gắn với class
    - Thường để thực hiện các hành động liên quan đến đối tượng (class) đó

    2.1 Với parameter
        + Khai báo
            - Tên class
            - Constructor
            - Property
            - Methods
            - Methods with parameter
        + Sử dụng
            const student = new Student();
            student.sayMyName();
        + Ví dụ
            - Khai báo class LoginPage với method:
                fillLogin(username, password)


class person {
    constructor(name, birthday) {
        this.name = name;
        this.birthday = birthday;
    }

    greet () {
        console.log(`Xin chào Tôi tên là ${this.name}. Sinh ngày ${this.birthday}`);
    }

    myHobbies(hobbies = []) {
        console.log(`Sở thích của tôi là ${hobbies.map((hobbies) => `${hobbies}`)}`);
    }
}

const me = new person('Hằng', '20/01/1995');
me.greet();
me.myHobbies(['Xem phim',  'Du lịch']);


*/


import {Page} from 'playwright-core';

// Tạo 1 class với thuộc tính - Basepage: page, xpathDashboard, method, navigateTo(url)

class BasePage {
    //thuộc tính
    page: Page;
    xpathDashboard = '#dashboard';

    //ham khoi tạo
    constructor(page: Page) {
        this.page = page;
    }

    //method
    async navigateTo(url: string) {
        //code
    }
}

class LoginPage extends BasePage {
    //code 
    constructor(page: Page) {
        super(page);
    }
}


/* Class extend: 
- Sử dụng extends để kế thừa.
class A extends class B {
    constructor() {
    super()
    }
}
=> class A là class con, class B là class cha

- keyword: super = gọi tới hàm tạo của class cha

- extends = reuse: Khi class A kế thừa class B, A chứa toàn bộ các property và method của B.

*/
