# WEEK 1 — JAVASCRIPT FUNDAMENTALS REVISION

# DAY 01 — INTRODUCTION TO JAVASCRIPT & VARIABLES

**Estimated Study Time:** 3 Hours

## Learning Objectives

After completing this lesson, you should be able to:

1. Understand what JavaScript is.
2. Understand the role of HTML, CSS, and JavaScript.
3. Learn three ways to add JavaScript to HTML.
4. Understand console.log().
5. Understand variables.
6. Declare variables using var, let, and const.
7. Understand variable scope.
8. Follow JavaScript variable naming rules.

---

# PART 1: INTRODUCTION TO JAVASCRIPT

## 1.1 What is JavaScript?

JavaScript is a high-level programming language used to make websites interactive and dynamic.

It allows developers to add functionality to websites, such as:

- Button click events.
- Form validation.
- Calculations.
- Dynamic content updates.
- Animations.
- Communication with servers.

## 1.2 Three Main Technologies of Web Development

### 1. HTML (HyperText Markup Language)

HTML provides the structure of a website.

Examples:
<<<<<<< HEAD
=======

> > > > > > > a2544a5 (Add Day 01 JavaScript practice Exercises)

- Headings
- Paragraphs
- Buttons
- Forms
- Images

### 2. CSS (Cascading Style Sheets)

CSS is used to style and design a website.

Examples:

- Colors
- Fonts
- Layouts
- Spacing
- Animations

### 3. JavaScript

JavaScript adds functionality and interactivity to a website.

Examples:

- Button click events.
- Calculations.
- Form validation.
- Dynamic content updates.

### Example: AgriNova Website

Imagine you are developing an AgriNova agricultural website.

- HTML: Creates a "Check Crop Recommendation" button.
- CSS: Makes the button green and attractive.
- JavaScript: Performs an action when the farmer clicks the button.

---

# PART 2: WAYS TO ADD JAVASCRIPT TO HTML

There are three main ways to add JavaScript to an HTML document.

## 2.1 Inline JavaScript

JavaScript can be written directly inside an HTML element using an event attribute.

Example:

```html
<button onclick="alert('Hello!')">Click Me</button>
```

Explanation:

- button creates a button.
- onclick executes JavaScript when the button is clicked.
- alert() displays a popup message.

## 2.2 Internal JavaScript

JavaScript can be written inside an HTML document using the script tag.

Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Practice</title>
  </head>
  <body>
    <h1>Hello JavaScript</h1>

    <script>
      console.log("Hello World");
    </script>
  </body>
</html>
```

Explanation:

- script defines JavaScript code.
- console.log() displays output in the browser console.

## 2.3 External JavaScript

External JavaScript means writing JavaScript in a separate .js file and connecting it to HTML.

HTML File (index.html):

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Practice</title>
  </head>
  <body>
    <h1>My First JavaScript</h1>

    <script src="script.js"></script>
  </body>
</html>
```

JavaScript File (script.js):

```javascript
console.log("Hello World");
```

Advantages of External JavaScript:

1. Keeps HTML and JavaScript separate.
2. Makes code easier to manage.
3. Improves project organization.
4. Makes code reusable.
5. Easier to maintain in large projects.

Professional Tip:

External JavaScript is generally preferred in professional web development. JavaScript modules are also commonly used in larger projects.

---

# PART 3: console.log()

## 3.1 What is console.log()?

console.log() is a built-in JavaScript method used to display information in the browser's developer console.

Syntax:

```javascript
console.log(value);
```

Examples:

```javascript
console.log("Hello");
console.log(25);
console.log(10 + 20);
console.log("Welcome to JavaScript");
```

Output:

```text
Hello
25
30
Welcome to JavaScript
```

## 3.2 How to Open Browser Console

Follow these steps:

1. Open your website in Google Chrome.
2. Right-click anywhere on the page.
3. Select Inspect.
4. Open the Console tab.

Shortcut: Ctrl + Shift + J

---

# PART 4: VARIABLES IN JAVASCRIPT

## 4.1 What is a Variable?

A variable is a named storage location used to store data in a program.

In simple words, a variable is like a container that holds a value.

Example:

Imagine you want to store your university CGPA.

- Container name = cgpa
- Stored value = 3.59

JavaScript Example:

```javascript
let cgpa = 3.59;

console.log(cgpa);
```

Output:

```text
3.59
```

## 4.2 Understanding Variable Syntax

```javascript
let cgpa = 3.59;
```

Explanation:

- let = Keyword used to declare a variable.
- cgpa = Variable name (identifier).
- = = Assignment operator.
- 3.59 = Value stored in the variable.
- ; = Statement terminator (optional in many cases).

---

# PART 5: THREE WAYS TO DECLARE VARIABLES

JavaScript provides three main variable declaration keywords:

1. var
2. let
3. const

## 5.1 var Keyword

var is an older keyword used to declare variables in JavaScript.

Example 1: Declaration and Initialization

```javascript
var name = "Sara";

console.log(name);
```

Output:

```text
Sara
```

Example 2: Reassignment

A var variable can be reassigned.

```javascript
var age = 20;

age = 21;

console.log(age);
```

Output:

```text
21
```

Example 3: Redeclaration

A var variable can be declared again using the same name in the same scope.

```javascript
var age = 20;

var age = 22;

console.log(age);
```

Output:

```text
22
```

## 5.2 let Keyword

let is used to declare variables whose values may change during program execution.

Example 1: Declaration

```javascript
let city = "Mianwali";

console.log(city);
```

Output:

```text
Mianwali
```

Example 2: Reassignment

A let variable can be reassigned.

```javascript
let city = "Mianwali";

city = "Islamabad";

console.log(city);
```

Output:

```text
Islamabad
```

Example 3: Redeclaration

A let variable cannot be redeclared in the same scope.

```javascript
let age = 20;

let age = 22; // SyntaxError
```

However, you can declare another variable with the same name in a different scope.

## 5.3 const Keyword

const is used to declare variables that cannot be reassigned after initialization.

Example 1: Declaration and Initialization

```javascript
const university = "Mianwali University";

console.log(university);
```

Output:

```text
Mianwali University
```

Example 2: Reassignment

A const variable cannot be reassigned.

```javascript
const age = 20;

age = 21; // TypeError
```

Example 3: Initialization Requirement

A const variable must be initialized when it is declared.

Incorrect:

```javascript
const country; // SyntaxError
```

Correct:

```javascript
const country = "Pakistan";

console.log(country);
```

Output:

```text
Pakistan
```

Important Concept:

const prevents reassignment, but it does not make objects and arrays completely immutable.

Example:

```javascript
const student = {
  name: "Sara",
  age: 20,
};

student.age = 21;

console.log(student.age);
```

Output:

```text
21
```

The object's properties can change, but the student variable cannot be reassigned to another object.

---

# PART 6: DIFFERENCE BETWEEN var, let AND const

This is an important concept for interviews and practical programming.

| Feature                     | var | let | const |
| --------------------------- | --- | --- | ----- |
| Reassignment                | Yes | Yes | No    |
| Redeclaration in same scope | Yes | No  | No    |
| Block scoped                | No  | Yes | Yes   |
| Must initialize immediately | No  | No  | Yes   |

## 6.1 What is Scope?

Scope defines the area of a program where a variable can be accessed.

JavaScript has different types of scope:

1. Global Scope
2. Function Scope
3. Block Scope

For now, understand block scope.

## 6.2 Block Scope Example

A block is a section of code written inside curly braces { }.

```javascript
{
  let name = "Sara";
  const age = 20;
  var city = "Mianwali";
}

console.log(city);

console.log(name); // ReferenceError
console.log(age); // ReferenceError
```

Output:

```text
Mianwali
ReferenceError
ReferenceError
```

Explanation:

- let is block-scoped.
- const is block-scoped.
- var is not block-scoped.

Therefore, city can be accessed outside the block, but name and age cannot.

## 6.3 Professional Best Practices

In modern JavaScript:

- Use const by default.
- Use let when you need to reassign a value.
- Avoid var in modern code unless you have a specific reason.

Example:

```javascript
const university = "Mianwali University";

let semester = 5;

semester = 6;
```

---

# PART 7: VARIABLE NAMING RULES

Variable names are also called identifiers.

JavaScript has specific rules for naming variables.

## 7.1 Valid Variable Names

```javascript
let studentName = "Sara";

let studentAge = 20;

let totalMarks = 450;

let _price = 500;

let $amount = 1000;
```

## 7.2 Invalid Variable Names

```javascript
let 1name = "Sara";
// Cannot start with a number.

let student name = "Ali";
// Spaces are not allowed.

let let = 20;
// Reserved keyword cannot be used.
```

## 7.3 Variable Naming Convention: camelCase

JavaScript developers commonly use camelCase.

CamelCase means:

- The first word starts with a lowercase letter.
- Each following word starts with an uppercase letter.

Correct Examples:

```javascript
let firstName = "Sara";

let studentAge = 20;

let totalStudents = 50;

let cropRecommendation = "Wheat";

let universityName = "Mianwali University";
```

Best Practice:

Always choose meaningful variable names that explain what the variable stores.

---

# PART 8: QUICK REVISION

| Concept       | Important Point                    |
| ------------- | ---------------------------------- |
| JavaScript    | Makes websites interactive.        |
| HTML          | Provides website structure.        |
| CSS           | Provides website styling.          |
| External JS   | JavaScript in a separate file.     |
| console.log() | Displays output in the console.    |
| Variable      | Stores data using a name.          |
| var           | Function-scoped.                   |
| let           | Block-scoped and reassignable.     |
| const         | Block-scoped and not reassignable. |
| Scope         | Determines variable accessibility. |
| camelCase     | Common variable naming convention. |
| Concept       | Important Point                    |
| ------------- | ---------------------------------- |
| JavaScript    | Makes websites interactive.        |
| HTML          | Provides website structure.        |
| CSS           | Provides website styling.          |
| External JS   | JavaScript in a separate file.     |
| console.log() | Displays output in the console.    |
| Variable      | Stores data using a name.          |
| var           | Function-scoped.                   |
| let           | Block-scoped and reassignable.     |
| const         | Block-scoped and not reassignable. |
| Scope         | Determines variable accessibility. |
| camelCase     | Common variable naming convention. |

---

# DAY 01 — COMPLETION CHECKLIST

[ ] Understand what JavaScript is.

[ ] Understand HTML, CSS and JavaScript.

[ ] Learn inline, internal and external JavaScript.

[ ] Practice console.log().

[ ] Understand variables.

[ ] Learn var, let and const.

[ ] Understand block scope.

[ ] Learn variable naming rules.

[ ] Complete all six exercises.

[ ] Upload notes and practice to GitHub.

---

# IMPORTANT INSTRUCTIONS

1. Write every code example yourself in VS Code.
2. Run the code using Node.js or Chrome.
3. Predict the output before executing the code.
4. Complete all exercises independently.
5. Upload your notes and practice files to GitHub.

NEXT LESSON:

DAY 02 — JAVASCRIPT DATA TYPES AND typeof
