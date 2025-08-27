const student = { "name": "Alex", "age": 10, "salary": 20 };

// 3.1
for (let property in student) {
    console.log("Tên thuộc tính của student:", property);
    console.log("Giá trị mỗi thuộc tính:", student[property]);
}

// 3.2
sum = 0;
for (let property in student) {
    if (typeof student[property] === "number") {
        sum += student[property];
    }
}
console.log("Tổng các giá trị số trong student:", sum);

// 3.3
propertyName = [];

for (let property in student) {
    propertyName.push(property);
}
console.log("Mảng chứa tên các thuộc tính của student:", propertyName);