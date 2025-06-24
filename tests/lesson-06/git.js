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
git push origin branchA


4. git pull
- lấy dữ liệu từ vùng remote repository về (chỉ lấy dữ liệu của nhánh đc chọn)
- câu lệnh: git pull <remote_name> <branch_name>
git pull origin branchA


5. git stashing
- lưu lại các file đang làm trên máy local vào vùng nhớ tạm
- câu lệnh: git stash
- câu lệnh lấy ra dữ liệu đã lưu: git stash pop
- xem lại những lần stash: git stash list


6. git merge (đứng ở nhánh main rồi git merge)
- merge code = gộp code từ nhánh A và main
- merge strategy: 
    + fast-forward merge -> cú pháp:  git merge <branch_name_cần merge>
        _ khi merge không tạo ra commit merge
        _ xảy ra khi không có thay đổi nào trên nhánh chính kể từ lúc tạo nhánh feature
    + three-way merge -> cú pháp: git merge <branch_name_cần_merge>
        _ Khi merge có tạo ra commit merge
        _ xảy ra khi bạn muốn merge feature branch chính mà lịch sử của 2 branch đã có sự khác nhau
        -> có thể thay đổi message, nếu k đổi: ấn ESC rồi ấn :wq

-> tạo file mới: câu lệnh: touch "file_name"

7. git conflict 
- là xung đột xyar ra khi 2 ng cùng sửa 1 file sau đó merge vào với nhau
- xử lý conflict
    + xóa hoặc giữ các phần code tương ứng
    + xóa các phần đánh dấu conflict
-> xong git add và git commit như bt

8. git rebase (đứng ở nhánh khác rồi git rebase về main)
- tái sắp xếp lại lịch sử commit của nhánh sao cho commit mới của nhánh đó nằm trên cùng 1 lịch sử của nhánh khác
- câu lệnh: git rebase <branch_name_cần_rebase> (git rebase main: rebase commit ở nhánh main về feat/A)

9. git squash
- là hành động gộp các commit lại thành 1 commit duy nhất -> hạn chế các commit k cần thiết
- chỉ cho gộp các commit sau commit đầu tiên
- câu lệnh: git rebase -i HEAD~{số lượng commit cần gộp}
-> đi sửa commit: ấn phím "i" rồi sửa: muốn gộp commit nào vào thì đổi thành s, sửa xong ấn ESC rồi ấn :wq
-> sửa commit message: ấn phím 'i' rồi sửa: ấn # vào đầu commit để xóa, sửa xong ấn ESC rồi ấn :wq



. Convention
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

