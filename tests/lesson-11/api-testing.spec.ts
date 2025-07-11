/* 
1. API = Application Programming Interface
    - là công cụ trung gian giúp giao tiếp giữa dữ liệu hệ thống với giao diện người dùng
    - Các địng dạng sử dụng trong API
        + XML: có cấu trúc giống các thẻ HTML, dùng cho SOAP 
        + JSON: 
            _ nằm trong ngoặc {} hoặc []
            _ có cấu trúc dạng key:value
            _ dùng trong REST
    - API tesing: 
        + Test tích hợp giữa các sẻvice
        + phát hiện sớm các vấn đề, kể cả phía FE vẫn chưa xong
    - các loại API:
        + SOAP: Simple Object Access Protocol - trả về XML
        + RPC: Remote Procedure Call 
        + REST: Representational State Transfer
    - Chủ yếu dùng REST: 
        ● Authentication: quá trình sử dụng các thông tin xác thực như username, password hay secret key
để hệ thống validate được đó là bạn.
        ● Trong API test, thường sử dụng 2cách để authentication: 
            ○ Sử dụng header: thêm authentication token vào header
            ○ Sử dụng cookie
       

2. API Component
    ● API giao tiếp với nhau qua giao thức HTTP/ HTTPS 
        ○ HTTP (Hypertext Transfer Protocol): không có mã hoá
        ○ HTTPS (Hypertext Transfer Protocol Secure): có mã hoá
    ● Client: gửi đi yêu cầu (Request) 
    ● Server: trả về kết quả (Response)
    ● Request
        ○ URL
            ■ Base URL
            ■ Endpoint
            ■ Parameter
                _ Đầu tiên: ?
                _ Từ thứ 2: &
        ○ Method
            ● GET: lấy dữ liệu
            ● POST: tạo mới dữ liệu
            ● PUT: update toàn bộ dữ liệu
            ● DELETE: xoá dữ liệu
            ● PATCH: update một phần dữ liệu
            ● OPTION: trả về danh sách các phương thức HTTP hỗ trợ endpoint
            ● HEAD: giống GET nhưng chỉ trả header
        ○ Header
        ○ Body

    ● Response
        ○ Status code
            + 1xx: Phản hồi thông tin
                101: Switching protocol.
            + 2xx: Thành công
                200: OK
                201: Created
            + 3xx: chuyển hướng
                301, 302: Redirected
            + 4xx: lỗi liên quan đến người dùng
                400: Bad Request
                404: Not Found
            + 5xx: lỗi hệ thống
                500: Internal Server Error
                502: Bad Gateway
        ○ Header
        ○ Body
    
    ● API doc: swagger

3. API với Postman

4. API với Playwright
    ● Sử dụng request fixture để thực hiện gọi API. 
    ● Gọi các API mà không cần phải thực hiện thao tác thông qua trình duyệt
    ● Thực hiện các thao tác gọi API trực tiếp trong code.
    ● https://playwrightvn.com/blog/voc-playwright-api-testing/
    ● Lưu ý về cách lấy response:
        ○ response.json(): trả về object
        ○ response.text(): trả về string
    

*/

// Ví dụ 1: Tạo một API request lấy thông tin
// ● Base URL: https://conduit-api.bondaracademy.com/
// ● Endpoint & params: api/articles?limit=10&offset=0
// ● Method: GET


import {request, test} from '@playwright/test';


test('appi-demo1', async ({request}) => {

    const baseUrl = 'https://conduit-api.bondaracademy.com/';
    const response = await request.get(baseUrl+'api/articles?limit=10&offset=0');

    console.log('States code: ' + response.status());
    console.log('status text: ' + response.statusText());

    const rpBody = await response.json() 
    console.log('rpBody: ', rpBody);

})

// Ví dụ 2: Tạo một request đăng nhập vào hệ thống
// ○ Base URL: https://conduit-api.bondaracademy.com/
// ○ Endpoint: api/users/login
// ○ Method: POST
// ○ Body:
// {
//  "user": {
//      "email": "teovn84@gmail.com",
//      "password": "teo@123"
//  }
// }

test('api-demo2', async ({request}) => {
    const baseUrl2 = 'https://conduit-api.bondaracademy.com/api/users/login';
    const response = await request.post(baseUrl2, {
        data : {
            "user": {
                "email": "teovn84@gmail.com",
                "password": "teo@123"
            }
        }
    })

    const rpStatus = await response.status();
    console.log('Stt code: ', rpStatus);

    const rpBodyText = await response.json();
    console.log('Body text: ', rpBodyText);

    //truy xuất object
    const textError = rpBodyText['errors']['email or password'][0];
    console.log(textError);
})



/* 
POM API: tổ chức POM cho API test
    ● Mục tiêu 
        ○ File test gọn gàng hơn. 
        ○ Không chứa các setup (baseURL, url của các API)
    ● Cách tổ chức POM API 
        ○ Có thuộc tính: request 
        ○ Có thuộc tính: baseURL 
        ○ Define các endpoint giống như các XPath

POM Styles: một vài styles viết POM
1. POM manager
    - Quản lý nhiều page object.
    - Các page objects có thể được tạo và truy cập từ một nơi duy nhất.
    - Các page objects độc lập với nhau.
    - Các page chỉ được tạo khi cần thiết.
VD: 
import { Page } from "@playwright/test";
import { LoginPage } from "./00-pom-login";
import { DashboardPage } from "./00-pom-dashboard";
export class PomManager {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    getLoginPage() {
        return new LoginPage(this.page);
    }

    getDashboardPage() {
        return new DashboardPage(this.page);
    }
}

2. Return POM from another POM
- Các method của 1 Page Object trả về Page Object khác.
Ex:
login > add to cart > checkout > confirm

import { Page } from '@playwright/test';
import { DashboardPage } from './00-pom-dashboard';
export class LoginReturnPage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    login() {
        const dashboardPage =
        return new DashboardPage(page);
        return new DashboardPage(this.page);
    }
}

*/



