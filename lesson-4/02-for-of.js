const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// 2.1
for (let string of str) {
    console.log("Từng ký tự của str:", string);
};

// 2.2
let reversedStr = [];

for (let reversedChar of str) {
    reversedStr.unshift(reversedChar);
}

console.log("Mảng đảo ngược từ str:", reversedStr);

// 2.3
let firstIndex = null;
let lastIndex = null;

for (let i in arr) {
    if (arr[i] === 3) {
        if (firstIndex === null) {
            firstIndex = i;
        }
        lastIndex = i;
    }
}
console.log("Vị trí đầu tiên của giá trị 3 trong arr:", firstIndex);
console.log("Vị trí cuối cùng của giá trị 3 trong arr:", lastIndex);

// 2.4
let result = [];

for (let num of dupArr) {
    let count = 0;

    for (let dupNum of dupArr) {
        if (dupNum === num) {
            count++;
        }
    }
    if (count === 1) {
        result.push(num);
    }
}

console.log("Các phần tử xuất hiện 1 lần trong dupArr:", result);