const accountId = 144533;
let accountEmail = "krishna@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 3;  // Not allowed

accountEmail = "krishna@google.com";
accountPassword = "2334234";
acccountCity = "Vrindavan";

console.log(accountId);

/* Prefer not to use var
because of issue in block scope and functional scope 
*/
console.table([accountId, accountEmail, accountPassword, acccountCity, accountState]);