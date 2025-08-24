## JAVASCRIPT
# Phạm vi của biến
- **var**: có thể truy cập được vào biến trước khi được khai báo -> global
```js
console.log(a);
var a = 5;
// không báo lỗi
```
- **let**: KHÔNG thể truy cập trước khi khai báo -> scope: {}
```js
console.log(a);
let a = 5;
// báo lỗi
```
# Advance condition: if...else, if...else if, switch...case
1. **if...else**
```js
let score = 8;

if (score >= 8) {
    console.log('Giỏi');
} else {
    console.log('Khá hoặc Trung bình hoặc Yếu');
}
```
2. **if...else if**
```js
let score = 8;

if (score >= 8) {
    console.log('Giỏi');
} else if (score >= 6 && score < 8) {
    console.log('Khá');
} else {
    console.log('Trung bình');
}
```
3. **switch...case...default** (kèm break sau mỗi case)
```js
let month = 11;
switch (month) {
    case 11:
        console.log('30 ngày');
        break;
    case 12:
        console.log('31 ngày');
        break;

    default:
        console.log('Tháng không hợp lệ');
}
```
# == và !=
1. **== và !=**: so sánh kiểu "lỏng lẻo" và convert giá trị về kiểu "lớn hơn"
```js
let result = '5' == 5;
let result1 = '5' === 5;

console.log(result); // true
console.log(result1); // false
```
2. **=== và !==**: so sánh tuyệt đối
```js
let result2 = '5' != 5;
let result3 = '5' !== 5;
console.log(result2); // false
console.log(result3); // true
```
# Advance loops
1. **for ... in**
```js
// Object
let students = {
    name: 'Linh',
    age: 20,
    city: 'HCM',
    street: 'Le Loi',
};

for (let property in students) {
    console.log(property); // => name, age, city, street
    console.log(students[property]); // => Linh, 20, HCM, Le Loi
 }
```
```js
// Array
let numbers = [4, 5, 7];
for (let index in numbers) {
    console.log(index[0]); // => 0, 1, 2
    console.log(`${numbers[index]}`); // => 4, 5, 7
}
```
2. **forEach**
```js
let numbers = [4, 5, 7];

numbers.forEach((val) => {
    console.log(`${val}`); // => 4, 5, 7
});
```
3. **for ... of**
```js
let names = ['Loi', 'Linh', 'Uyen', 'Nga'];

for (let name of names) {
    console.log(name); // => Loi, Linh, Uyen, Nga
}
```
4. **break**: thoát khỏi vòng lặp
```js
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i); // => 0, 1, 2, 3, 4
}
```
5. **continue**: bỏ qua vòng lặp hiện tại, chạy đến vòng lắp tiếp theo
```js
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i); // => 0, 1, 2, 3, 4, 6, 7, 8, 9, 10
}
```
# Array helper functions
1. **map()** => tạo ra một mảng mới bằng cách áp dụng 1 hàm lên từng phần tử trong mảng gốc
```js
let numbers = [1, 2, 3, 5];
let doubleNumbers = numbers.map((val) => val * 2);

console.log(doubleNumbers); // => 2, 4, 6, 10
```
2. **filter()** => tạo ra 1 mảng chứa các phần tử thỏa điều kiện
```js
let numbers = [1, 2, 3, 5];
let result = numbers.filter((val) => val % 2 === 0);

console.log(result); // => 2
```
3. **find()** => dùng để trả về phần tử đầu tiên trong mảng thỏa điều kiện
```js
let numbers = [2, 2, 3, 5];
let result = numbers.find((val) => val % 2 === 1);

console.log(result); // => 3
```
4. **some()** => kiểm tra ít nhất có 1 phần tử thỏa điều kiện => trả về kết quả true hoặc false
```js
let numbers = [2, 2, 4, 5];
let result = numbers.some((val) => val % 2 === 1);

console.log(result); // => true
```
5. **every()** => kiểm tra các phần tử thỏa điều kiện =>trả về kết quả true hoặc false
```js
let numbers = [2, 2, 4, 5];
let result = numbers.every((val) => val % 2 === 1);

console.log(result); // => false
```
6. **push()** => thêm 1 hoặc nhiều phần tử vào cuối mảng => thay đổi trực tiếp mảng đã cho
```js
let str = [1, 2];
str.push(3, 4);

console.log(str); // => [1, 2, 3, 4]
```

7. **shift()** => xóa phần tử đầu tiên của mảng và trả về phần tử đó =>  thay đổi trực tiếp mảng đã cho
```js
let numbers = [1, 2, 4, 5];
let result = numbers.shift();

console.log(result); // => 1
console.log(numbers); // [2, 4, 5]
```

8. **reduce()** => áp dụng lên mỗi phần tử của mảng và trả về 1 giá trị duy nhất
```js
let numbers = [1, 2, 4, 5];
let total = numbers.reduce((total, num) => total + num, 0);
// total: giá trị hứng
// num: giá trị lọc qua 1, 2, 4, 5
// 0: giá trị ban đầu

console.log(total); // 12
```

8. **sort()** => sắp xếp theo thứ tự tăng dần của mảng hoặc thoe hàm so sánh được cung cấp => làm thay đổi mảng gốc
```js
let numbers = [2, 1, 421, -5];

console.log(numbers.sort()); // => tăng dần [-5, 1, 2, 421]
```
# String helper functions
1. **trim()** => loại bỏ những khoảng trắng ở đầu và cuối
```js
let str = '              Trim           ';

console.log(str.trim()); // => Trim
```
2. **toUpperCase và toLowerCase** => trả kết quả chữ hoa và chữ thường
```js
let text = 'K17 playwright';

console.log(text.toLowerCase()); // => k17 playwright
console.log(text.toUpperCase()); // => K17 PLAYWRIGHT
```
3. **includes()** => kiểm tra chuỗi con có nằm trong chuỗi chính hay không => trả về true hoặc false
```js
let str = 'hoc JavaScript';

console.log(str.includes('Java')); // => true
```
// 4. replace() => thay thế một chuỗi bằng một chuỗi khác
```js
let str = 'hoc JavaScript';

console.log(str.replace('JavaScript','JS')); // => hoc JS
```
// 5. split() => chia chuỗi thành những chuỗi con dựa vào 1 kí tự
```js
let name = 'An, Linh, Huy';
let result = name.split('n');

console.log(result); // => ['A, ', Li', 'h, Huy']
```
6. **substring(srart, end)** => cắt chuỗi theo index truyền vào
```js
let str = 'hoc JavaScript rat vui';
let result = str.substring(4, 14);
let result2 = str.substring(4);

console.log(result); // => JavaScript
console.log(result2); // => JavaScript rat vui
```
7. **indexOf()** => trả về vị trí đầu tiên xuất hiện của chuỗi con trong chuỗi chính
```js
let str = 'hoc JavaScript rat vui';
let result = str.indexOf('vui');

console.log(result); // => 19
```