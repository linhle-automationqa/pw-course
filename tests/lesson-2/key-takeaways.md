# Version control system
- Local: lưu ở máy cá nhân
- Centralize: lưu ở một máy chủ tập trung
- Distributed: lưu ở nhiều máy khác nhau

# GIT
1. Git has three states
- Working Directory -> git status -> màu đỏ
- Staging Area -> git status -> màu xanh
- Repository -> xám

2. Key
- git init: khởi tạo thư mục được quản lý bởi Git
- Cấu hình:
    - Cho 1 repo (**đứng tại repo đó**)
        - git config user.name "name"
        - git config user.email "email"
    - Default
        - git config --global user.name "name"
        - git config --global user.email "email>"
- Thêm file vào vùng Staging
    - git add file_name -> thêm 1 file
    - git add . -> thêm toàn bộ
- Xem trạng thái file
    - git status
- Commit
    - git commit -m "message"
    - Git commit convention: <type_commit>: <short_description>
        - chore: sửa nhỏ lẻ, chính tả, xóa file không dùng
        - feat: thêm tính năng mới, test case mới
        - fix: sửa 1 lỗi test trước đó
        - short_description: 50 characters
3. Git - simple workflow
- Không dùng global config
    - init -> config -> add -> commit -> push
- Dùng global config
    - init -> add -> commit -> push

# Javascript basic
- mkdir <tên_thư_mục>: tạo thư mục
- cd <thư_mục> -> code . : mở VS Code
- Tạo file: <tên_file>.js
- console.log("Hello World!"): in dòng Hello World!
- Chạy lệnh: node <relative_path>/<tên_file>.js
- Variable
    - var: khai báo lại được
    - **let**: không khai báo lại được -> nên dùng
    - const: khi biến không gán lại
- Data types
    - String: "tên", "Playwright"
    - Number: 100, -5, 0.5
    - Boolean: true, false
- Comparison oparator
    - So sánh hơn kém
    - So sánh bằng: ===, !==, >=, <=
- Unary operator
    - i++: i=i+1
    - i--: i=i-1
- Arithmetic operator
    - +, -, *, /
- Conditional
    - if (<điều kiện>) {code}
- Loops
    - for (<khởi tạo>; <điều kiện chạy>; <điều kiện dừng>) {code}
- Format code
    - Mac: Option + Shift + F
    - Window: Alt + Shift + F