// 1 module có 5 fixture -> dùng tính năng merge fixture
// tạo file index.ts (là file import tất cả vào đó khi dung chỉ cần export từ đó ra)

import {test as test1} from './fixture';
import {test as test2} from './fixture-01';
import { mergeTests } from '@playwright/test';

export const test = mergeTests(test1, test2);