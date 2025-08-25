const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 1.1
let resultScores = scores.every((val) => val > 70);
console.log("Tất cả giá trị trong scores có > 70 không:", resultScores);

// 1.2
let resultAges = ages.every((val) => val > 15);
console.log("Tất cả giá trị trong ages có > 15 không:", resultAges);

// 1.3
let resultWords = words.every((val) => val.length > 3);
console.log("Tất cả từ trong words có độ dài > 3 không:", resultWords);