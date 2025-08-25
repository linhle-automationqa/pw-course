const name = "Nguyễn Văn A";
const email = "example@gmail.com";
const productName = "MacBook Pro";
const description = "Khóa học JavaScript cơ bản";

// 2.1
let resultName = name.indexOf('a'); // không có 'a' nên trả về -1

console.log("Vị trí 'a' trong name:", resultName);

// 2.2
let resultEmail = email.indexOf('@'); // không có 'a' nên trả về -1

console.log("Vị trí '@' trong email:", resultEmail);

// 2.3
let resultDescription = description.indexOf('JavaScript');

console.log("Vị trí 'JavaScript' trong description:", resultDescription);