// Bài 1
console.log("Bài 1:");

const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: '2021'
};
console.log(car.year);
console.log("----");

// Bài 2
console.log("Bài 2:");

const person = {
    name: 'Linh',
    address: {
        street: 'Nguyen Thi Dinh',
        city: 'Ho Chi Minh',
        country: 'Vietnam'
    }
};
console.log(person.address.street);
console.log("----");

// Bài 3
console.log("Bài 3:");

const student = {
    name: 'Linh',
    grades: {
        english: '80'
    }
};
student.grades["math"] = 90;
console.log(student.grades.math);
console.log("----");

// Bài 4
console.log("Bài 4:");

const settings = {
    volume: 'medium',
    brightness: 'low'
};
settings.volume = 'high';
console.log(settings);
console.log("----");

// Bài 5
console.log("Bài 5:");

const bike = {
};
bike.color = 'yellow';
console.log(bike);
console.log("----");

// Bài 6
console.log("Bài 6:");

const employee = {
    name: 'Linh',
    age: 25
};
delete employee.age;
console.log(employee);
console.log("----");

// Bài 7
console.log("Bài 7:");

const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};
console.log(school);