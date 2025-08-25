const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 5.1
let resultScores = scores.some((val) => val > 80);
console.log("Kiểm tra scores có giá trị nào > 80 không:", resultScores);

// 5.2
let resultAges = ages.some((val) => val < 18);
console.log("Kiểm tra ages có giá trị nào < 18 không:", resultAges);

// 5.3
let resultWords = words.some((val) => val.length > 5);
console.log("Kiểm tra trong words có từ nào dài > 5 không:", resultWords);