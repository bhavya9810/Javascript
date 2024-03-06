// function sync() {
//   console.log("first");
// }

// sync();

// console.log("second");

// function newFunc() {
//   console.log("third");
// }

// setTimeout(newFunc, 2000);
// console.log("second");

// function sync() {
//   console.log("first");
// }

// sync();
// let hi = "helo";
// function example(resolve, reject) {
//   setTimeout(function () {
//     console.log("i am inside promise");
//   }, 3000);
//   if (hi === "hello") {
//     resolve(1998);
//   } else {
//     reject(new Error("1999"));
//   }
// }
// let newPromise = new Promise(example);

// newPromise.then((value) => console.log(value));

// console.log("first");

// let myPromise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("I am inside promise");
//   }, 5000);
//   // resolve(1998);
//   reject(new Error("Bhaisahab its got rejected, kyuki error aaye hai"));
// });

// console.log("pehla");
// let success = true;
// function getUsers() {
//   return (promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success == true) {
//         resolve([
//           { username: "bhavya", email: "bhavya@gmail.com" },
//           { username: "shubham", email: "shubham@gmail.com" },
//         ]);
//       } else reject("failed to start");
//     }, 2000);
//   }));
// }

// function onFulfill(users) {
//   console.log(users);
// }

// function onRejected(error) {
//   console.log(error);
// }

// const promise = getUsers();
// promise.then(onFulfill, onRejected);

let p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("this is promise 1");
  }, 3000);

  //   resolve();
});

let p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("this is promise 2");
  }, 5000);
});

console.log("this is just log 3");
