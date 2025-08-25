const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 2.1
let resultScores = scores.filter((val) => val > 80);
console.log(`Các giá trị trong scores > 80: ${resultScores}`);

// 2.2
let resultAges = ages.filter((val) => val >= 18);
console.log(`Các giá trị trong ages >= 18: ${resultAges}`);

// 2.3
let resultWords = words.filter((val) => val.length > 5);
console.log(`Các từ trong words có độ dài > 5: ${resultWords}`);