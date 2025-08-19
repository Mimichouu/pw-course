/* 
* Build test framework

Quy trình xây dựng framework

1. Chọn framework automation test:
    Dựa trên các tiêu chí
        + Server hệ thống support
        + Framework (fw) đủ nhanh, learning curve vừa phải cho cả team có thể follow được
        + Cộng đồng  support cho framework active
        + Có chuyên gia (có thể là dev/QA) khá giải trong ngôn ngữ đã chọn
    
2. Xây dựng Fw
    - Cứ 1-2 bạn xây dựng base project, viết các base page, utils fuctions để giúp việc code nhanh hơn
        -> tránh việc làm đi làm lại cùng một việc
    => Build framework cho size đơn giản
        1. Phân tích
            - Phần FE: title, category, bài viết, comment, tìm kiếm,...
            - Phần BE
        2. Xây dựng kiến trúc thư mục
            - tests
                --- storefront
                    ---- index.spec.ts
                    ---- category
                    ---- search.spec.ts
                    ---- detail.spec.ts
                --- dashboard
                    ---- authen
                        ----- login-success.spec.ts
                        ----- login-failure.spec.ts
                    ---- post
                    ---- category
                    ---- review
            - fixture
            - pom
                --- dashboard
                --- storefront
            - utils
            - constants

    3. Tiến hành xây dựng BasePage
        - init project mới: npm init playwright@latest <ten project>
        - cd <ten project>
        - code .
        - Tạo thư mục như phân tích: 
            -> cách tạo nhanh: chuột phải vào thư mục gốc -> open in integrated terminal -> mkdir <ten các thư mục>
        - Viết code cho các thư mục: 
            -> Lưu ý: POM nên có cả function riêng và funtion gom chung các function riêng lẻ bên trên


    4. Triển khai cho các team

    
    - Xây dựng hệ thống conventions, document các workflows lại
        -> viết file: README.md
            # Overview
            # Installation
            - cài đặt thế nào
            # Convention
            - sử dụng camelCase
            - ten thu mục dùng `-`
            # Document
            - Code nào, nằm ở đâu?
            - Cấu trúc project

            .
            ├── authen // Chứa code liên quan đến authentication module
            ├── comment
            │   └── comment.spec.ts
            ├── dashboard
            ├── media
            │   └── media.spec.ts
            └── page


3. Tiến hành chạy thử trên quy mô nhỏ, sửa đổi fw sao cho cảm thấy khá ưng ý


* CI/CD: Đây là một quy trình tự động hóa trong phát triển phần mềm
    - CI = Continuous integration (Tích hợp liên tục)
        -> tự động build và chạy test để kiểm tra code sau khi dev commit code
        -> Mục tiêu: phát hiện lỗi sớm, đảm bảo code mới không phá vỡ chức năng cũ

    - CD = Continuous delivery (Phân phối liên tục)
        -> tự động đóng gói để triển khai lên môi trường staging/production 
            nhưng thường cần QA/PO duyệt, sau khi code pass CI

=> Lợi ích CI/CD:
    - Phát hiện bug sớm, giảm rủi ro.
    - Triển khai nhanh, liên tục.
    - Tăng chất lượng sản phẩm.
    - DevOps, QA, Developer làm việc trơn tru.


-> Khi init playwright có dòng lệnh: "Add a GitHub Action workflow? " -> bản chất đó chính là CI/CD

- Triển khai CI/CD với GitHub action
    + tạo thư mục: .github
    + tạo thu mục: workflow
    + tạo file: playwright.yml
        trong yml file viết với cú pháp key:value (không cần đặt trong chuỗi)
            name: Playwright Test
            on: // định nghĩa chạy CI khi nào tại "ON"
                push: // có key phía trong chỉ cần tab vào
                    branch: [main, master]
                pull_request:
                    branch: [main, master]
            jobs: // các công việc sẽ làm khi CI chạy
                test: // các step trong công việc
                    timeout-minutes: 60 
                    runs-on: ubuntu-latest
                    steps:
                    - uses: actions/checkout@v4
                    - uses: actions/setup-node@v4
                        with: 
                            node-version: lts/*
                    - name: Install dependencies
                        run: npm ci
                    - name: Install Playwright Browsers
                        run: npx playwright install --with-deps  
                    - name: Run Playwright test
                        run: npx playwright test
                    - uses: actions/upload-artifact@v4
                        if: ${{ !cancelled() }}
                        with: 
                            name: playwright-report
                            path: playwright-report/
                            retention-days: 30

    -> nên đọc doc của github action để hiểu thêm 


- Triển khai CI/CD với GitLab
    + gitlab.com -> tạo tk như github
    + tạo project mới -> không chọn initialize repository with a README (để tránh conflict)
    + thay từ "orign" trong các câu lệnh bằng "gitlab"
    + tạo file: .gitlab-ci.yml -> cú pháp trong file 
        stages: //các giai đoạn 
            - test

        test-playwright: 
            image: mcr.microsoft.com/playwright
            stage: test
            script:
                - npm ci
                - npx plauwright install --with-deps
                - npx playwright test
            artifacts:
                when: always
                path: 
                    - playwright-report/**
   
    -> nên đọc doc của gitlab để hiểu thêm: docs.gitlab.com/ee/ci/yaml/                
                    
*/


