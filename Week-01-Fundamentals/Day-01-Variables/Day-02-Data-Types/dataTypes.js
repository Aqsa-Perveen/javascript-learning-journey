
// ==========================================
// Day 02 - JavaScript Data Types
// Author: Sara
// ==========================================

// 1. STRING
let studentName = "Sara";
let university = "Mianwali University";

console.log("STRING:");
console.log(studentName);
console.log(typeof studentName);
console.log(university);
console.log(typeof university);


// 2. NUMBER
let age = 20;
let cgpa = 3.59;

console.log("\nNUMBER:");
console.log(age);
console.log(typeof age);
console.log(cgpa);
console.log(typeof cgpa);


// 3. BOOLEAN
let isStudent = true;
let isGraduated = false;

console.log("\nBOOLEAN:");
console.log(isStudent);
console.log(typeof isStudent);
console.log(isGraduated);
console.log(typeof isGraduated);


// 4. UNDEFINED
let course;

console.log("\nUNDEFINED:");
console.log(course);
console.log(typeof course);


// 5. NULL
let selectedCourse = null;

console.log("\nNULL:");
console.log(selectedCourse);
console.log(typeof selectedCourse);


// 6. BIGINT
let bigNumber = 12345678901234567890n;

console.log("\nBIGINT:");
console.log(bigNumber);
console.log(typeof bigNumber);


// 7. SYMBOL
let studentId = Symbol("ID");

console.log("\nSYMBOL:");
console.log(studentId);
console.log(typeof studentId);


// 8. OBJECT
let student = {
    name: "Sara",
    age: 20,
    university: "Mianwali University",
    cgpa: 3.59
};

console.log("\nOBJECT:");
console.log(student);
console.log(student.name);
console.log(typeof student);


// 9. ARRAY
let subjects = ["JavaScript", "Database", "Networking"];

console.log("\nARRAY:");
console.log(subjects);
console.log(subjects[0]);
console.log(subjects[1]);
console.log(typeof subjects);
console.log(Array.isArray(subjects));


// 10. FUNCTION
function greet() {
    console.log("Welcome to JavaScript Learning!");
}

console.log("\nFUNCTION:");
greet();
console.log(typeof greet);


// 11. ADDITIONAL TYPE CHECKING
console.log("\nADDITIONAL TYPE CHECKING:");

console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});

// ==========================================
// End of Day 02 Practice
// ==========================================
