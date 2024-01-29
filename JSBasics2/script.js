console.log(0);

// let rectangle = {
//   length: 22,
//   breadth: 23,

//   draw: function () {
//     console.log("drawing rectangle with lengths and breadth");
//   },
// };

//factory function

// function createRectangle() {
//   let rectangle = {
//     length: 22,
//     breadth: 23,

//     draw: function () {
//       console.log("drawing rectangle with lengths and breadth");
//     },
//   };
//   return rectangle;
// }

//factory function with parameters

// function createRectangle(length, breadth) {
//   return (rectangle = {
//     length,
//     breadth,

//     draw() {
//       console.log("draw");
//     },
//   });
// }

// let obj1 = createRectangle(12, 23);
// let obj2 = createRectangle(10, 25);

// console.log(obj1.length);
// console.log(obj1.breadth);
// console.log(obj2.length);
// console.log(obj2.breadth);

//factory function using parameters

// function person(name, age) {
//   let person = {};

//   person.name = name;
//   person.age = age;

//   person.greeting = function () {
//     return "good morning " + person.name;
//   };
//   return person;
// }

// let p1 = person("ravi", 22);
// let p2 = person("kishan", 25);

// console.log(p1.name);
// console.log(p2.greeting());

//constructor function ->

function Rectangle() {
  this.length = 1;
  this.breadth = 2;
  this.draw = function () {
    console.log("drawing");
  };
}

let obj1 = new Rectangle();

obj1.shape = "rectangle";
delete obj1.shape;

let Rectangle1 = new Function(
  "length",
  "breadth",
  `this.length = length;
this.breadth = breadth;
this.draw = function () {
  console.log("drawing");
}`
);

//object creation using rectangle1

let rectangle2 = new Rectangle1(2, 23);

console.log(rectangle2);

// functions are objects
function icecream() {
  const favIcecream = "chocolate";
  console.log(`my favourite flavour is ${favIcecream}`);
}

icecream.flavour = ["chocolate", "vanilla", "mango"];

icecream.showFlavour = function () {
  return this.flavour;
};

console.log(icecream);

//function are called first-class objects

//they can be stored in variables
const showIceCream = function () {};

const arr = [22, "hello", showIceCream];

const object1 = {
  one: 22,
  two: showIceCream,
};

console.log(object1);

//they can be passed as parameters in another function

function flavour() {
  return "chocolate";
}

function findFlavour(func) {
  console.log(`icecream flavour is ${func}`);
}

findFlavour(flavour());

//types in js
//primitive types
//reference types or objects

// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);

// let c = { value: 10 };
// let d = c;

// c.value++;

// console.log(c);
// console.log(d);

// let a = 10;

// function increase(a) {
//   a++;
//   //   console.log(a);
// }

// increase(a);
// console.log(a);

// iteration through objects
//for-in

let rectangle = {
  length: 23,
  breadth: 12,
};

for (let key in rectangle) {
  console.log(key, rectangle[key]);
}

//for of loop

for (let key of Object.entries(rectangle)) {
  console.log(key);
}

//check if some key property is present in object or not

if ("color" in rectangle) {
  console.log("present");
} else console.log("absent");

//object cloning
//iteration

let abc = {
  x: 10,
  y: 20,
  z: 30,
};

let xyz = {};

for (let key in abc) {
  xyz[key] = abc[key];
}
abc.x++;
console.log(abc.x);

//assign

let uvw = Object.assign({}, abc);

//spread

let def = { ...abc };
