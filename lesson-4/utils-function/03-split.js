const name = "Nguyễn Văn A";
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const date = "2024-05-19";

// 1.
let resultName = name.split(' ');
console.log("Mảng các từ:", resultName);

// 2.
let resultEmail = emails.split(',');
console.log("Mảng các email:", resultEmail);

// 3.
let resultDate = date.split('-');
console.log("Mảng ngày, tháng, năm:", resultDate);