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

function createRectangle(length, breadth) {
  return (rectangle = {
    length,
    breadth,

    draw() {
      console.log("draw");
    },
  });
}

let obj1 = createRectangle(12, 23);
let obj2 = createRectangle(10, 25);

console.log(obj1.length);
console.log(obj1.breadth);
console.log(obj2.length);
console.log(obj2.breadth);

//factory function using parameters

function person(name, age) {
  let person = {};

  person.name = name;
  person.age = age;

  person.greeting = function () {
    return "good morning " + person.name;
  };
  return person;
}

let p1 = person("ravi", 22);
let p2 = person("kishan", 25);

console.log(p1.name);
console.log(p2.greeting());
