const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";

// 1.
for (let i = 0; i < phoneNumber.length; i++) {
    console.log(phoneNumber[i].replace(' ', '.'));

}

// 2.
console.log(report.replace('lỗi', 'bug'));

// 3.
for (let i = 0; i < numbersStr.length; i++) {
    console.log(numbersStr[i].replace(',', '.'));
}