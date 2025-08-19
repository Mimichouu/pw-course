import { test, request, expect } from "@playwright/test";
import { ConduitPage} from "../../api/api-conduit-page.ts";

test('pom-api', async ({request}) => {
    const baseurl: string = 'http://conduit-api.bondaracademy.com/api';

    const conduitPage: ConduitPage = new ConduitPage(request, baseurl);

    const email: string = 'k11-plw';
    const password: string = '123598e6';
    const username: string = 'k11-plw-2025'

    const response = await conduitPage.register(email, password, username);

    expect(response.status()).toBe(201);
    
    const resBody = await response.json();
    const actualEmail: string = resBody['user']['email'];
    const actualUsername: string = resBody['user']['username'];
    expect(actualEmail).toBe(email);
    expect(actualUsername).toBe(username);
})