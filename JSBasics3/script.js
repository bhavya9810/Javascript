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

//deletion from array

let num = [22, 1, 34, 113, 4, 66];

//from end
num.pop();

//from start
num.shift();

//from middle
num.splice(1, 2);

//emptying an array
let newArray = [1, 2, 3, 4, 5, 6];
let newArray2 = newArray;
console.log(newArray);

//method1
// newArray = [];
// console.log(newArray);
// console.log(newArray2);

//method 2
// newArray.length = 0;
// console.log(newArray);

//method 3
// newArray.splice(0, newArray.length);
// console.log(newArray);

//method4
// while (newArray.length > 0) {
//   newArray.pop();
// }

// console.log(newArray);
// console.log(newArray2);

//method5
// while (newArray.length > 0) {
//   newArray.shift();
// }
// console.log(newArray);
// console.log(newArray2);

//combining and slicing array
let num1 = [1, 2, 3, 7, 8];
let num2 = [4, 5, 6];

let combine = num1.concat(num2);
console.log(combine);

//slicing
let slicedArray = combine.slice(2, 6);

let tens = [10, 20, 30, 40, 50, 60, 70, 80];

slicedTens = tens.slice(2, 6);
// slicedTens = tens.slice(2);
// slicedTens = tens.slice();
console.log(slicedTens);

// spread operator
// let arr1 = [1, 2, 3, 11, 22, 33];
// let arr2 = [4, 5, 6];

// let combined = [...arr1, "a", "b", ...arr2, "c", true];
// console.log(combined);

// //joining array
// let array1 = [10, 20, 30, 40, 50, 60];
// let joinedArray = array1.join("|");

// console.log(joinedArray);

// let splitedArray = joinedArray.split("|");
// console.log(splitedArray);

//iterating an array

let marks = [33, 43, 55, 76, 89];

for (let values of marks) {
  console.log(values);
}

//forEach loop
marks.forEach((value) => console.log(value));

//joining array
let rawArray = [12, 23, 34, 45];

let joinedArray = rawArray.join("!");

let splited = joinedArray.split("!");

//sort array
let numm = [5, 10, 4, 40];
console.log(numm.reverse());

console.log(numm.sort());
console.log(numm.reverse());
console.log(numm.sort());

//callback functions
let details = [
  { no: 1, fName: "bhavya" },
  { no: 2, fName: "shubham" },
];
// details.find(function (detail) {
//   return detail.fName=='bhavya';
// });

let detail = details.find((value) => value.fName == "bhavya");

console.log(detail);

//sorting on references

let obj2 = [
  { fName: "bhavya", lName: "singh" },
  { fName: "shubham", lName: "kumar" },
  { fName: "himesh", lName: "singhal" },
  { fName: "rajesh", lName: "sindhu" },
];

console.log(obj2);

let obj3 = obj2.sort((a, b) => {
  if (a.lName > b.lName) {
    return 1;
  }
  if (a.lName < b.lName) {
    return -1;
  }

  return 0;
});

console.log(obj2);
//filtering arrays

let unfiltered = [2, 22, 23, -2, 12, 4];

let filtered = unfiltered.filter((value) => {
  return value > 0 && value <= 22;
});

console.log(filtered);

//mapping arrays
let numArr = [7, 8, 9, 10];

let mappedArr = numArr.map((p) => "enroll_No " + p);

console.log(mappedArr);

//mapping arrays on objects
let Num = [2, 33, -2, -5];

let items = Num.filter((p) => p >= 0).map(function (q) {
  return { value: q };
});
