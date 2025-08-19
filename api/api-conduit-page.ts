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

    request:APIRequestContext;
    baseUrl: string;
    registerEndpoint: string = '/users';

    // constructor
    constructor(request:APIRequestContext, baseUrl: string) {
        this.request = request;
        this.baseUrl = baseUrl;
    }

    async register(email: string, password: string, username:string) {
        const url = this.baseUrl + this.registerEndpoint;
        const response = await this.request.post(url, {
            data: {
                'user': {
                    'email': email,
                    'password':password,
                    'username': username
                }
            }
        })

        return response;
    }
}