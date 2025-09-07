## Functions advance
1. Lambda function (Arrow function)
- Một cách ngắn gọn viết hàm trong JS.
- Sử dụng dấu **=>** thay vì từ khoá **function**
- Cú pháp
```js
//Lambda function (Arow function)

(parameters) => {
    // Cú pháp
}
```
```js
// Hàm nhiều tham số

const sum = (a, b) => {
    return a + b;
}

const total = sum(2, 5);
```
```js
// Hàm có 1 tham số

const duplicate = x => {
    x = x * 2;
    return x;
}

const duplicate2 = x => x * 2;
```
```js
// Hàm không có tham số

() => {
    console.log('Hello World');
}
```
2. Anonymous functions
- Hàm không có tên
- Thường được sử dụng 1 lần hoặc làm đối số truyền vào các hàm khác
- Cú pháp
```js
//Anonymous function

function (parameters) {
    // Cú pháp
}
```
## DOM
1. DOM = Document Object Model
2. Thẻ
```js
<option value="usa">United States</option>

// <option : thẻ đóng
// value : thuộc tính
// "usa" : giá trị của thuộc tính
// United States : text
// </option> : thẻ đóng
```
3. Thẻ tự đóng
```js
<img src="image.jpg" alt="Image description"/>
```
4. Thẻ HTML thường gặp
- Thẻ <div> (viết tắt của divide): dùng để chia các khối trong trang web
- Thẻ <h1></h1> đến <h6></h6> (viết tắt của heading): dùng để tạo ra các header phân cấp
theo thứ tự từ lớn đến bé.
- Thẻ <form></form>: dùng để chứa một form thông tin.
- Thẻ input: text, email, radio, checkbox, file, color, range, date
- Thẻ textarea: hiển thị ô input, dạng to.
- Thẻ radio button: tạo nút chọn một (radio).
- Thẻ checkbox: tạo nút chọn nhiều lựa chọn (checkbox).
- Thẻ list và dropdown: hiển thị danh sách hoặc menu thả xuống.
- Thẻ button: tạo nút bấm.
- Thẻ table: hiển thị bảng dữ liệu.
    - thead = table heading
        - tr = table row = 1 dòng
            - th: table heading: text in đậm

    - tbody
        - tr -> td = table data
- Thẻ date picker: tạo bộ chọn ngày.
- Thẻ slider: tạo thanh trượt.
- Thẻ iframe: hiển thị nội dung từ một trang web khác bên trong trang hiện tại.
## Selector - XPath selector
- XPath = XML Path
- Có 2 loại:
    - Tuyệt đối: đi dọc theo cây DOM
        - bắt đầu bởi 1 /
    - Tương đối: tìm dựa vào đặc tính
        - bắt đầu bởi 2 //
        - //tenthe[@thuoctinh=”gia tri”]
- Nên dùng XPath tương đối
- Ví dụ
    - //h1[text()="Tài liệu học automation test"]
    - //input[@id='mail']
## Playwright basic syntax
1. test: Đơn vị nhỏ hơn test, để khai báo từng step của test case
```js
import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {
// Code của test
});
```
2. step: Đơn vị nhỏ hơn test, để khai báo từng step của test case
```js
await test.step('Tên step', async () => {
// Code here
});
```
3. Basic actions
- Navigate
```js
await page.goto('https://pw-practice.playwrightvn.com/');
```
- Click
```js
// Single click
await page.locator("//button").click();

// Double click
await page.locator("//button").dblclick();

// Click chuột phải
page.locator("//button").click({
button: 'right'
})

// Click chuột kèm bấm phím khác
page.locator("").click({
modifiers: ['Shift'],
})
```
- Input
```js
// Fill: Giống việc bạn paste content vào một ô input
page.locator("//input").fill('Playwright Viet Nam');

// pressSequentially: Giống việc bạn gõ từng chữ cái vào ô input
page.locator("//input").pressSequentially('Playwright Viet Nam', { delay: 100,
});
```
- Check
```js
// Check

await page.check("//input[@id = 'male']");
```
- Select
```js
// Select

await page.selectOption("//selecct[@id = 'country']", "uk");
```
- Set input file
```js
// Set input file

await page.setInputFile("//input[@type = 'file']", "relative_path")
```