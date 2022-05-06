//type conversion and type coercion

let myvar;
myvar = 34;
console.log(myvar, (typeof myvar));
myvar = String(34);
console.log(myvar, (typeof myvar));

let num = 34;
console.log(num, (typeof num));
console.log(num.toString())
let num1 = '34';


num1 = Number('34');

let newNum = parseInt('43.32');

console.log(newNum);

let str = '34'
let num2 = 32
console.log(str + num2); //this will convert 32 to string and concatenate
console.log(Number(str) + num2); //this will just sum the two numbers
