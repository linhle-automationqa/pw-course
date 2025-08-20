// Bài 1
console.log("Bài 1:");

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
};
console.log(`Tổng từ 1 đến 100: ${sum}`);
console.log("----");

// Bài 2
console.log("Bài 2:");

for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}`);
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
};
console.log("----");

// Bài 3
console.log("Bài 3:");

let arr = [];

for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        arr.push(i);
    }
};
console.log(arr);
console.log("----");

// Bài 4
console.log("Bài 4:");

for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
};
console.log("----");

// Bài 5
console.log("Bài 5:");

const doanhThu = [
    { "month": 1, "total": 99 },
    { "month": 2, "total": 100 },
    { "month": 3, "total": 90 },
    { "month": 4, "total": 145 },
    { "month": 5, "total": 111 },
    { "month": 6, "total": 87 },
    { "month": 7, "total": 110 },
    { "month": 8, "total": 56 },
    { "month": 9, "total": 100 },
    { "month": 10, "total": 150 },
    { "month": 11, "total": 122 },
    { "month": 22, "total": 100 }
];
let tongDoanhThu = 0;
for (let i = 0; i < doanhThu.length; i++) {
    tongDoanhThu = tongDoanhThu + doanhThu[i].total;
}
console.log(`Tổng doanh thu của 12 tháng: ${tongDoanhThu}`);