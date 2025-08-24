// 1. Khởi động Tàu Vũ trụ K17
console.log("1. Khởi động Tàu Vũ trụ K17:");

// Hành tinh khởi đầu
let departurePlanet = 'Trái Đất';

// Nhiệm vụ
let mission = 'Khám phá Vũ trụ K17';

// Phi hành đoàn
let crew = [
    'Linh',
    ' An',
    ' Bảo',
    ' Đạt'
];

// Khởi động Tàu
function launchShip(crew) {
    return ((`Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến
phiêu lưu ${mission}!`));
}

// Kết nối với Trung tâm Điều khiển
console.log(launchShip(crew));

// 2. Du hành đến hành tinh bí ẩn
console.log("\n2. Du hành đến hành tinh bí ẩn:");

// Hàm tính toán khoảng cách đến hành tinh đó
function calculateDistance(speed, time) {
    let distance = speed * time;
    return `Khoảng cách tính toán được: ${distance} km`;
}

// Khoảng cách tính được
console.log(calculateDistance(1000, 24));

// 3. Hành tinh kỳ lạ
console.log("\n3. Hành tinh kỳ lạ: ");

function convertTimeToHex(time) {
    let timeHex = time.toString(16);
    return `Giá trị thời gian hệ lục phân: ${timeHex} giây`;
}

// Thời gian đã được chuyển đổi sang hệ lục phân
console.log(convertTimeToHex(120));

// 4. Khám phá kho báu
console.log("\n4. Khám phá kho báu: ");

function decryptCode(code) {
    let result = '';
    for (let i = 0; i < code.length; i++) {
        let char = code[i];
        if (char >= 'a' && char <= 'z') {
            result = result + char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            result = result + char.toLowerCase();
        } else {
            result = result + char;
        }
    }
    return `Mật mã đã được giải mã: ${result}`;
}

console.log(decryptCode('K17 Challenge'));

// 5. Trở về Trái Đất
console.log("\n5. Trở về Trái Đất: ");

function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}

returnToEarth();