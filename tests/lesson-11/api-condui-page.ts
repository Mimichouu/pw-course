/* POM API: tổ chức POM cho API test
    ● Mục tiêu 
        ○ File test gọn gàng hơn. 
        ○ Không chứa các setup (baseURL, url của các API)
    ● Cách tổ chức POM API 
        ○ Có thuộc tính: request 
        ○ Có thuộc tính: baseURL 
        ○ Define các endpoint giống như các XPath

*/

import { APIRequestContext, request } from "@playwright/test";

export class ConduitPage {
    request: APIRequestContext;
    baseUrl: string;
    registerEndPoint: string = '/users';

    constructor(request: APIRequestContext, baseUrl: string) {
        this.request = request;
        this.baseUrl = baseUrl;
    }

    async register(email: string, password: string, username: string) {
        const url = this.baseUrl + this.registerEndPoint;
        const response = await this.request.post(url, {
            data : {
                "user": {
                    "email": "teovn84@gmail.com",
                    "password": "teo@123"
                }
            }
        })
        return response;
    }
}
