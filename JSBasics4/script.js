console.log("JSBasics 4 started");

//functions
function run() {
  console.log("running");
}

//function call or invoke
run();

//funciton assignment

let stand = function straight() {
  console.log("standing");
};

stand();
let static = stand;
static();

// dynamic nature of javascript on functions

function sum(a, b) {
  for (let i = 0; i < arguments.length; i++) {
    console.log(` argument at ${i} = ${arguments[i]}`);
  }

  //using for in loop which is used for objects
  finalSum = 0;
  for (let value in arguments) {
    finalSum = finalSum + arguments[value];
  }
  total = 0;
  for (let num of arguments) {
    total = total + num;
  }
  console.log(finalSum);
  console.log(total);
  console.log(`'a'=${a}`);
  console.log(`'b'=${b}`);
  console.log(arguments);
  console.log(` argument at 0 = ${arguments[0]}`);
  console.log(` argument at 1 = ${arguments[1]}`);
  console.log(` argument at 2 = ${arguments[2]}`);
  console.log(` argument at 3 =${arguments[3]}`);
  console.log(` argument at 4 =${arguments[4]}`);
  return a + b;
}

// console.log(sum(1, 2));
// console.log(sum(1));
// console.log(sum());
console.log(sum(1, 2, 3, 5, 4));

//rest operator (or rest parameter) in functions
function summiung(a, b, c, d, e, ...vals) {
  console.log(a, b, vals);
}

summiung(1, 23, 2, 3, 344, 32, 21, 67);

//default parameter

function interest(p, r = 7, y = 10) {
  return (p * r * y) / 100;
}
// console.log(interest(1000, 8));
console.log(interest(1000, undefined, 8));

//getter ,setters
// let person = {
//   fName: "Bhavya",
//   lName: "Singh",
//   get fullName() {
//     return `${person.fName} ${person.lName}`;
//   },

//   set fullName(Name) {
//     let divide = Name.split(" ");
//     this.fName = divide[0];
//     this.lName = divide[1];
//   },
// };

// console.log(person);

// person.fullName = "Rajkumar Rao ";
// console.log(person.fullName);

let person = {
  firstName: "JOhn",
  lastName: "Doe",
  lang: "en",

  get language() {
    return this.lang;
  },

  set language(lang) {
    this.lang = lang;
  },
};

person.language = "HIN";
console.log(person.language);

//javascript function or getter

let person1 = {
  firstName: "JOhn",
  lastName: "Doe",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person1.fullName());

let person2 = {
  firstName: "john",
  lastName: "cena",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person2.fullName.toUpperCase());

let person3 = {
  firstName: "john",
  lastName: "cena",
  language: "",
  get lang() {
    return this.language;
  },

  set lang(language) {
    this.language = language.toUpperCase();
  },
};
person3.lang = "hindi";
console.log(person3.lang);

//try and catch

let person4 = {
  fName: "Bhavya",
  lName: "Singh",
  get fullName() {
    return `${person4.fName} ${person4.lName}`;
  },

  set fullName(Name) {
    console.log(typeof Name);
    if (typeof Name !== String) {
      throw new Error("It uses string only");
    }
    let divide = Name.split(" ");
    this.fName = divide[0];
    this.lName = divide[1];
  },
};

// console.log(person4);
// try {
//   person4.fullName = "Shubham singh";
// } catch (e) {
//   alert(e);
// }
// console.log(person4.fullName);

//array of objects ,filter method and console.table
const players = [
  { name: "Ronaldo", age: 37, team: ["Madrid", "United"] },
  {
    name: "Salah",
    age: 30,
    team: ["Roma", "Liverpool"],
  },
  {
    name: "Haaland",
    age: 22,
    team: ["Dortmund", "City"],
  },
  {
    name: "Bruyne",
    age: 31,
    team: ["Wolfsburg", "City"],
  },
];

console.table(
  //   players.filter((player) => player.age < 30),
  players.filter((p) => p.team.includes("City"))
);

//scopes

if (true) {
  var a = 5;
}

console.log(a);

for (var i = 0; i < 5; i++) {}
console.log(i);

function a() {
  const ab = 5;
}

function b() {
  const ab = 5;
}

const d = 15;

function c() {
  const d = 18;
  console.log(d);
}

c();
console.log(d);

//reducing an array

let arr = [23, 24, 55, 16];
let ttl = 0;
for (let val of arr) {
  ttl += val;
}
console.log(ttl);

let arr2 = [2, 4, 6, 8];

let final = 0;
arr2.forEach((val) => (final = final + val));

console.log(final);

//reducing an arry - reduce() method
let newArr = [23, 1, 2, 4, 5, 6];
let initialValue = 0;
let sumOfArray = newArr.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sumOfArray);
