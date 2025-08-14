import {test} from '../../../Src/fixture-env-conf';


test('ENV', async () => {
    console.log(process.env.ENV);
    if (process.env.ENV == 'dev') {
        console.log(process.env.LOADING_TIME_DEV);
    } else {
        console.log(process.env.LOADING_TIME_PROD);
    }
})

// thêm 2 biến LOADING_TIME_DEV, LOADING_TIME_PROD vào file env.
// tại file test in ra nếu là env dev => in ra loading của dev và ngược lại

test('test use envConf', async ({envConf}) => {
    console.log(envConf.get('LOADING_TIME'));
})