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
console.log(sum(11, 12, 23, 24, 35));
