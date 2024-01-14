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
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// let score = undefined;
// let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// let score = true;
// let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// let score = "krishna";
// let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

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


let isLoggedIn = "Krishna";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);  // true

/* 1 => true
   0 => false
   "" => false
   "hitesh" => true
*/

// let someNumber = 22;
// let StringNumber = String(someNumber);
// console.log(StringNumber);
// console.log(typeof StringNumber);