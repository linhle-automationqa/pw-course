const numbers = [1, 2, 3];
const names = ["Alice", "Bob", "Charlie"];

// 1.
numbers.push(4);
console.log("Thêm 4 vào mảng:", numbers);

names.push("David");
console.log("Thêm David vào mảng", names);

// 2.
const numbers1 = [1, 2, 3, 4]
let last = numbers1.pop();
console.log("Phần tử cuối:", last);
console.log("Mảng mới:", numbers1);

// 3.
numbers.unshift(0);
console.log("Thêm 0 vào đầu mảng:", numbers);

names.unshift('David');
console.log("Thêm David vào đầu mảng:", names);

// 4.
const numbers2 = [1, 2, 3, 4];
numbers2.shift();
console.log("Mảng sau khi loại phần tử đầu:", numbers2);