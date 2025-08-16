// a. Khai bao chieu cao
const chieuCao = 173;

// b.

//Khai bao can nang li tuong
let canNangLyTuong = 0;
// Tinh can nang li tuong
canNangLyTuong = (chieuCao % 100) * 9 / 10

//Khai bao can nang toi da
let canNangToiDa = 0;
// Tinh can nang toi da
canNangToiDa = chieuCao % 100

//Khai bao can nang toi thieu
let canNangToiThieu = 0;
// Tinh can nang toi thieu
canNangToiThieu = (chieuCao % 100) * 8 / 10

console.log("Can nang ly tuong: " + canNangLyTuong + "kg", "|", "Can nang toi da: " + canNangToiDa + "kg", "|", "Can nang toi thieu: " + canNangToiThieu + "kg");