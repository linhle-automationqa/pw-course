// a. Lặp từ 1 tới 100 
for (let i = 1; i <= 100; i++) {
    console.log(i)
};

console.log("--------");

// b. In chẵn, lẻ
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("Số " + i + " là số chẵn");
    }
    if (i % 2 === 1) {
        console.log("Số " + i + " là số lẻ");
    }
}