// In this case we are sure about the type since we are defining the variable here itself
// let score = 33;

// console.log(typeof score);
// console.log(typeof(score));

/* 
in this case when we are fetching the data from the client end in backend. In this case we need to know the type of the variable score coming from the frontend
const {score} = req.body;

in this case we could use typeof to know the type of the variable
*/

// let score = "33";
// console.log(typeof score);
// console.log(typeof(score));

// Type Conversion
// let score = "33";
// let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));


// let score = "33abc";
// let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// let score = null;
// let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));  // number
// console.log(valueInNumber);         // 0

// let score = undefined;
// let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));   // number
// console.log(valueInNumber);           // NaN

// let score = true;
// let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));        // number
// console.log(valueInNumber);                // 1

// let score = "krishna";
// let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));    // number
// console.log(valueInNumber);            // NaN

/* "33" => 33  
   "33abc" => NaN
    true  => 1  false => 0
    "krishna" => NaN
*/

// let isLoggedIn = 1;

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);


// let isLoggedIn = "";

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);  // false


// let isLoggedIn = "Krishna";
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);  // true

/* 1 => true
   0 => false
   "" => false
   "hitesh" => true
*/

// let someNumber = 22;
// let StringNumber = String(someNumber);       
// console.log(StringNumber);                   // 22
// console.log(typeof StringNumber);            // string

// let obj = {name: "Krishna"};
// console.log(obj);
// console.log(typeof obj);

// let num = Number(obj);
// console.log(num);         // NaN
// console.log(typeof(num)); // number

// let obj = {name: "Krishna"};
// console.log(obj.surname);
// obj.surname = "Shri"
// console.log(obj);


/***********  Operations  *************/
let value = 3;
let negValue = -value;
// console.log(negValue);   // -3

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "hare";
let str2 = " Krishna";

let str3 = str1 + str2;
// console.log(str3);
// ECMA Script Standards toPrimitive for details Type Conversion
// https://tc39.es/ecma262/multipage/abstract-operations.html
// console.log("1" + 2);
// console.log(1 + "2");

// if first operand is string then all the other operands at right are converted to strings
// console.log("1" + 2 + 2);

// if string is present as last operand then in that case the addition would be done then conversion will happen in string
// console.log(1 + 2 + "2");
// console.log((3 + 4) * 5 % 3);

// console.log(+true);   
// // console.log(true+);  
// console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
// gameCounter++;
// console.log(gameCounter);


++gameCounter;
console.log(gameCounter);

/* link to study
https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
*/

