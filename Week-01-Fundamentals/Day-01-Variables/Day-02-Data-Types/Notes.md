# Day 02 — JavaScript Data Types

## 1. What are Data Types?

Data types define what kind of value a variable stores.

Example:

```javascript
let name = "Sara";
let age = 20;
let isStudent = true;
```

## 2. Primitive Data Types

1. String — Stores text.
2. Number — Stores integers and decimal numbers.
3. Boolean — Stores true or false.
4. Undefined — Variable declared but not assigned.
5. Null — Represents intentional absence of a value.
6. BigInt — Stores very large integers.
7. Symbol — Creates unique values.

## 3. Non-Primitive Data Types

1. Object — Stores data in key-value pairs.
2. Array — Stores multiple values.
3. Function — Reusable block of code.

## 4. typeof Operator

The typeof operator checks the data type of a value.

```javascript
let name = "Sara";
let age = 20;

console.log(typeof name); // string
console.log(typeof age); // number
```

## 5. Important Examples

```javascript
console.log(typeof "Hello"); // string
console.log(typeof 25); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof {}); // object
```

## 6. Array.isArray()

Use Array.isArray() to check whether a value is an array.

```javascript
let fruits = ["Apple", "Mango"];

console.log(Array.isArray(fruits)); // true
```

## 7. Important Points

- Array indexing starts from 0.
- Arrays are special types of objects.
- typeof null returns object because of historical JavaScript behavior.
- Array.isArray() correctly identifies arrays.

## 8. Today's Learning

- Primitive and non-primitive data types.
- typeof operator.
- Arrays and objects.
- Functions.
- Array.isArray().
