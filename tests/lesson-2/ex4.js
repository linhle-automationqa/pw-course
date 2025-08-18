// a. Khai bao chieu cao
const chieuCao = 173;

// b.

//Khai bao va Tinh can nang li tuong
let canNangLyTuong = (chieuCao % 100) * 9 / 10;

//Khai bao va Tinh can nang toi da
let canNangToiDa = chieuCao % 100;

//Khai bao va Tinh can nang toi thieu
let canNangToiThieu = (chieuCao % 100) * 8 / 10;

console.log("Can nang ly tuong: " + canNangLyTuong + "kg", "|", "Can nang toi da: " + canNangToiDa + "kg", "|", "Can nang toi thieu: " + canNangToiThieu + "kg");