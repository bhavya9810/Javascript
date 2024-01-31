console.log("hello brother");

//Math object
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.PI);
console.log(Math.round(1.8));
console.log(Math.max(1.8, -3, 44));
console.log(Math.min(1.8, -3, 44));
console.log(Math.abs(2));
console.log(Math.abs(-2));

//String object

let lastName = "singh";

let firstName = new String("  bhavya  ");

console.log(firstName);

let message = new String("jaldi jaldi karo javascript");

let words = message.split(" ");

let poem = `twinkle  'twinkle
"little" star
 - by ${firstName}`;
let poem2 = "twinkle twinkle little star";

console.log(poem);

//date
const date = new Date();
let date2 = new Date("June 20 1999 06:23");
let date3 = new Date(1998, 2, 20, 7);

date3.setFullYear(1947);
date3.setDate(15);
date3.setMonth(7);

date3.getHours();

console.log(date3);

console.log(date3.getHours());

//arrays
//array creation

let numbers = [12, 23, 4, 32, 333];

console.log(numbers);

numbers[0];

// insert at end
numbers.push(123);
console.log(numbers);

// insert at beginning

numbers.unshift(0.111);
console.log(numbers);

// insert at middle
numbers.splice(3, 0, 24, 25, 26);
console.log(numbers);
numbers.splice(6, 4, 27, 28, 29, 30);
console.log(numbers);
numbers.splice(0, 2, 21, 22);
console.log(numbers);

//searching

console.log(numbers);

console.log(numbers.indexOf(30));
console.log(numbers.indexOf(31));

// we want to check that number is present in array or not
if (numbers.indexOf(21) != -1) {
  console.log("present");
} else console.log("absent");

//method 2

console.log(numbers.includes(22));

//method3

console.log(numbers.indexOf(24, 4));

//searching on references

let courses = [
  { no: 1, name: "bhavya" },
  { no: 2, name: "singh" },
  { no: 3, name: "shubham" },
  { no: 4, name: "sharma" },
  { no: 5, name: "shiv" },
  { no: 5, name: "kumar" },
];

console.log(courses);

// console.log(courses.indexOf({ no: 1, name: "bhavya" }));

//searching in reference type arrays using callback functions
//callback functions

let course = courses.find(function (course) {
  return course.name == "bhavya";
});

console.log(course);
