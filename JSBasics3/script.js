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
