// const obj1 = {
//   a: "value_A",
//   b: "value_B",
//   c: "value_C",
// };
// const first2Keys = Object.entries(obj1)
//   .slice(0, 2)
//   .map((entries) => entries[0]);
// const first2Values = Object.entries(obj1)
//   .slice(0, 2)
//   .map((entries) => entries[1]);

// const first2Pair = Object.entries(obj1).slice(0, 2);

// console.log(first2Pair);
// console.log(obj1);

//slice two values of object

const object = {
  a: "valueA",
  b: "valueB",
  c: "valueC",
};

console.log(object);
const keysTwo = Object.entries(object)
  .slice(0, 2)
  .map((v) => v[0]);

const valuesTwo = Object.entries(object)
  .slice(0, 2)
  .map((v) => v[1]);

const firstTwoEntries = Object.entries(object).slice(0, 2);

console.log(JSON.stringify(keysTwo));
console.log(keysTwo);
console.log(JSON.stringify(valuesTwo));
console.log(JSON.stringify(firstTwoEntries));
