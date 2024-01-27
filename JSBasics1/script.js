// console.log("hello world 2,3,4");
// {
//   var a = 22;
//   console.log(a);
//   var a = "hi";
//   console.log(a);
// }

// var a = "hi";
// console.log(a);

// console.log(a);
// let a = 22;
// console.log(a);

// var a;
// let b;
// console.log(a);
// console.log(b);

// let a = 22;
// b = 32;
// console.log(a, b);

// function alphabet() {
//   const c = 2;
//   let e = 12;
//   var d = "hello";
//   console.log(c, e, d);
// }

// alphabet();

// const num = 12;
// num = 13;

let a = 22;
a = "hello twenty two";
console.log(a);

const car = {
  name: "mercedes",
  seater: 2,
  color: "green",
};

console.log(car.seater);
console.log(car.color);
console.log(car["name"]);

const a1 = [1, 12.2, true, "hello"];

console.log(a1[2]);
console.log(a1[3]);
console.log(a1[4]);
a1[4] = "h123";
console.log(a1[4]);
console.log(a1);
a1[3] = "bhavya";
console.log(a1[3]);
console.log(a1);

let incre = 6;

console.log(incre++);

++incre;
console.log(++incre);

let x = 5;
let y = 10;

let ans1 = ++x * --y;
let ans2 = x++ * --y;
let ans3 = x++ * y--;
let ans4 = ++x * y--;

console.log(ans1, ans2, ans3, ans4);

console.log(3 === "3");

let age = 23;

let Astatus =
  age >= 23 ? "you are eligible to vote" : "you are not eligible for vote";

console.log(Astatus);

console.log(false || 1 || 2);

let marks = 90;
if (marks >= 90) {
  console.log("A");
} else if (marks >= 80) {
  console.log("B");
} else if (marks >= 70) {
  console.log("C");
} else console.log("D");

let num = 3;

switch (num) {
  case 1:
    console.log("value selected is 1");

    break;
  case 2:
    console.log("value selected is 2");

    break;
  case 3:
    console.log("value selected is 3");

    break;

  default:
    console.log("value selected is garbage");
}

for (let i = 0; i <= 5; i++) {
  console.log("singh" + i);
}

let j = 1;
while (j < 10) {
  console.log(j);
  j;
  j++;
}

let r = 1;
do {
  console.log(r);
  r++;
} while (r == 1);
