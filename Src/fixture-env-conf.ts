import {test as base} from '@playwright/test';

export class EnvConf {
    get(key:string) {
        let keyPostFix = '_PROD';

        if (process.env.ENV == 'dev') {
            keyPostFix = '_DEV';
        }

        return process.env[`${key}${keyPostFix}`];

    }
}

const test = base.extend<{envConf: EnvConf}>({
    envConf: async ({}, use) => {
        const envConf = new EnvConf();

        await use(envConf);
    }
})

export {test};