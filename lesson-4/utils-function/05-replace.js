let phoneNumber = "0123 456 789";
let report = "Có một lỗi trong hệ thống.";
let numbersStr = "1,234,567";

// 1.
phoneNumber = phoneNumber.replace(/ /g, '.');
console.log(phoneNumber);

// 2.
console.log(report.replace('lỗi', 'bug'));

// 3.
numbersStr = numbersStr.replace(/,/g, '.');
console.log(numbersStr);