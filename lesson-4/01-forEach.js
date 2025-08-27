const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// 1.1
numbers.forEach((val) => {
    console.log(`${val}`);
});

// 1.2
let sum = 0;
let max = numbers[0];
let min = numbers[0];

numbers.forEach((num) => {
    sum += num;
    if (num > max) {
        max = num;
    }
    if (num < min) {
        min = num;
    }
});

console.log(`Tổng: ${sum}`);
console.log(`Giá trị lớn nhất: ${max}`);
console.log(`Giá trị nhỏ nhất: ${min}`);

// 1.3
let doubleNumbers = [];

numbers.forEach((num) => {
    doubleNumbers.push(num * 2);
});

console.log("Mảng nhân đôi:", doubleNumbers);