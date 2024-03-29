// Primitive

/*  JS is a Dynamically Typed language. Dynamically-typed languages are those where the interpreter assigns variables a type at runtime based on the variable's value at the time.  */

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

/* work of Symbol is is we pass the same value
still the result will be not having same value for id and anotherId */
// console.log(id === anotherId);   // false

// bigInt can we defined by adding n at postfix to the value

const bigNumber = 32346776766765554n;

// Non Primitives (Reference Types)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Krishna",
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
}

/* How to figure out the datatype of the value */
console.log(typeof bigNumber);     // bigint
console.log(typeof outsideTemp);  // object
console.log(typeof scoreValue);   // number

console.log(typeof myFunction);   // function -> object function
console.log(typeof heros);        // object

/* All the non primitives are having return type as object */

console.log(anotherId);          // Symbol


// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom";

let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "krishna@google.com";

console.log(userOne.email);
console.log(userTwo.email);