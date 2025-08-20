# GIT
## Undo actions
- git commit --amend: Thay đổi commit message
- git commit --amend -m "message": Thay đổi commit message với nội dung là message
- git restore --staged <file_name>: Đưa <file_name> từ vùng Staging về lại Working directory
- git restore --stage .: Đưa tất cả file đã thêm trước đó từ vùng Staging về lại Working directory
- git reset HEAD~1: Đưa commit gần nhất từ vùng Repository về Working directory
## Branching model
- git checkout -b <branch_name>: Tạo và chuyển sang nhánh <branch_name>
- git checkout main: Về lại nhánh main
- git branch: Liệt kê các branch hiện có
- .gitignore file: Dùng để bỏ qua các file không cần git theo dõi
    - Ignore file: Thêm tên <file_name> vào file .gitignore
    - Ignore folder: Thêm tên <folder_name> kèm dấu / -> **<folder_name>/**

# JAVASCRIPT
## Conventions
- kebab-case: tên file
- camelCase: tên biến
- PascalCase: tên class
## Formatted console.log
- console.log('');
- console.log("");
- console.log(`${variable_name}`);
## Object
let/const <ten_object> = {
        <thuoc_tinh>: <gia_tri>,
        ...
};
## Logical operator
- &&: cả 2 vế của mệnh đề đều đúng
- ||: một trong 2 vế đúng
- !: đảo ngược lại giá trị của mệnh đề
## Array
- Khai báo
let /const <ten_array> = [
    <gia_tri_1>, <gia_tri_2>,...
];
- Truy xuất mảng
    - Độ dài mảng: <ten_array>.**length**
    - Lấy phần tử theo index: <ten_array>[0], <ten_array>[1], ...
## Function
- Khai báo
function <nameFunction>() {
    // code
}