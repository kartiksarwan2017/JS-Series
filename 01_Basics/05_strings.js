// Concatenation of strings
"hello" + " world";

const name = "Ram";
const repoCount = 50;

// console.log(name + repoCount + " Value");

/* Modern way to write string concatenation using
string literals

string interpolation -> making placeholders and directly injecting the variables
*/
// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

// console.log("hello");

/* Here gameName string is of type object
key-value pairs e.g {0: "k", 1: "r"}
this object has length property as well and various methods in prototype
 */
// const gameName = new String("krishna");
// console.log(gameName);
// console.log(typeof gameName);   // object

// accessing the key from the object
// console.log(gameName[0]);
// // accessing the prototype
// console.log(gameName.__proto__);

// console.log(gameName.length);
/* this would not make changes in the original string. */
// console.log(gameName.toUpperCase());
// console.log(gameName);

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));


// const userName = new String("hitesh-hc");
/* we cant use negative values in substring() method. if we use negative index then it will consider it as 0 */
// const newString = userName.substring(0, 4);
// console.log(newString);

// const newString = userName.substring(-3, 4);
// console.log(newString);

/* we can add negative index as well here in slice() method */
// const anotherString = userName.slice(0, 4);
// const anotherString = userName.slice(-8, 4);
// console.log(anotherString);

// const newString1 = "     hitesh      ";
// console.log(newString1);
// /* trim() method removes the starting and ending spaces of the string */
// console.log(newString1.trim());

// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

// const url = "https://hitesh.com%20choudhary";

// console.log(url.replace('%20', '-'));  // https://hitesh.com-choudhary

// console.log(url.includes('hitesh'));   // true
// console.log(url.includes('sundar'));   // false


const newString = new String('hitesh-hc-com');
console.log(newString.split('-'));


