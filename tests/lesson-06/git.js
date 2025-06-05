/* 
1. git clone
- lấy 1 dự án có sẵn về máy local để làm việc (lấy cả repo)
- câu lệnh : git clone <ssh key>
- đổi tên (nếu muốn) : git clone <ssh key> <ten thay doi>


2. git branch
- tạo nhánh: git branch <ten>
- di chuyển sang nhánh khác: git checkout <ten>
- tạo 1 nhánh với và di chuyển sang nhánh mới: git checkou -b <ten>
- kiểm tra xem có bao nhiêu nhánh đã tạo : git branch


3. git push
- đưa code lên github
- câu lệnh:  git push <remote_name> <branch_name>
git push origin main


4. git pull
- lấy dữ liệu từ vùng remote repository về (chỉ lấy dữ liệu của nhánh đc chọn)
- câu lệnh: git pull <remote_name> <branch_name>
git pull origin branchA


5. git stashing
- lưu lại các file đang làm trên máy local vào vùng nhớ tạm
- câu lệnh: git stash
- câu lệnh lấy ra dữ liệu đã lưu: git stash pop
- xem lại những lần stash: git stash list


6. Convention
    - đặt tên branch: <type>/<short-description>
        + type:
            - feat: tính năng mới
            - fix: sửa lỗi
            - conf: thay đổi cấu hình (config)
            - chore: các thay đổi “lặt vặt”: Xóa file không dùng, đổi tên file,...
        + short-description: Mục đích của branch được tạo ra
    - Viết commit message: <type>: <short-description>
        + type:
            - feat: tính năng mới
            - fix: sửa lỗi
            - conf: thay đổi cấu hình (config)
            - chore: các thay đổi “lặt vặt”: Xóa file không dùng, đổi tên file,...
        + short-description: Mục đích của commit

        
Yêu cầu: 
1. clone repo về máy
2. trước khi làm bt:
    - pull code mới nhất từ main về
    - tạo nhánh mới
    - làm bt trên folder
    - tạo pull request (add reviewer)


*/

