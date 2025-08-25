const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 6.1
let sumScores = scores.reduce((sumScores, score) => sumScores + score, 0);
console.log("Tổng các giá trị trong scores:", sumScores);

// 6.2
let productNumbers = numbers.reduce((productNumbers, number) => productNumbers * number);
console.log("Tích các giá trị trong numbers:", productNumbers);

// 6.3
let sumExpenses = expenses.reduce((sumExpenses, expense) => sumExpenses + expense, 0);
console.log("Tổng các giá trị trong expenses:", sumExpenses);