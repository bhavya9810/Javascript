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
let person = {
  fName: "Bhavya",
  lName: "Singh",
  get fullName() {
    return `${person.fName} ${person.lName}`;
  },

  set fullName(Name) {
    let divide = Name.split(" ");
    this.fName = divide[0];
    this.lName = divide[1];
  },
};

console.log(person);

person.fullName = "Rajkumar Rao ";
console.log(person.fullName);
