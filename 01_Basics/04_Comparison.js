// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// Comparing different data types
/* JS has automatically converted the string into number */
// console.log("2" > 1);     // true
// console.log("02" > 1);    // true

/* Comparsion should be done between the same datatypes */

/* The reason is that an equality check == and comparisons > < >= <= work differently

comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true (1) null > 0 is false 
*/

/* Avoid such type of comparisons */
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);   // false
// console.log(undefined > 0);    // false
// console.log(undefined >= 0);   // false

// strict check === 
/* check values as well as data types 
   in  ==  is we are comparing different datatypes then in that case it make data type conversion to make same datatypes on both ends
*/
// console.log("2" === 2);