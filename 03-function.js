// Bài 1
console.log("Bài 1:");

function multiply(a, b) {
    console.log(`${a} x ${b} = ${a * b}`);
};

multiply(5, 2.5);
multiply(-5, 2);

console.log("----");

// Bài 2
console.log("Bài 2:");

function findMin(a, b, c) {
    let min = a;
    if (min > b) {
        min = b;
        if (min > c) {
            min = c;
        }
    }
    console.log(min);
};

findMin(100, 99, 6);
findMin(-2, 10.5, 5);

console.log("----");

// Bài 3
console.log("Bài 3:");

const students = [
    { "name": 'Linh', score: 99 },
    { "name": 'Vy', score: 50 },
    { "name": 'Quang', score: 60 },
    { "name": 'Huy', score: 70 },
    { "name": 'Hoang', score: 88 },
    { "name": 'Yen', score: 75 }
];

function getTopStudents(students, threshold) {
    let top = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            top.push(students[i].name);
        }
    }
    return top;
};

let topStudents = getTopStudents(students, 70);
console.log(topStudents);

console.log("----");

// Bài 4
console.log("Bài 4:");

let total = 0;
function calculateInterest(principal, rate, years) {
    total = principal + principal * rate * years / 100;
    console.log(`Total: ${total}`);
};

calculateInterest(10000, 5, 15);