const { compileFunction } = require("vm");

const scores = [85, 90, 78];
const numbers = [1, 2, 3];

// 4.1
let newArr = scores.map((score) => {
    if (score < 90) {
        return score * 1.1;
    } else if (score >= 90) {
        return score * 0.95;
    }
});
console.log("Mảng mới:", newArr);

// 4.2
let stringNumbers = numbers.map((num) => `${num}`);
console.log("Mảng chuỗi:", stringNumbers);

// 4.3
let doubleNumbers = numbers.map((num) => num * 2);
console.log("Mảng nhân đôi mỗi giá trị:", doubleNumbers);