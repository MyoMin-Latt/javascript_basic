// node ms38_variables.js
// let and const differences
/* Note*/
console.log('Hello World');

// let
// let email; // undefined
// let email = 'test@gmail.com';

// const
// const city = 'yangon';
// const city; // raise error

// reassignment
// let email;
// let email; // Cannot redeclare block-scoped variable 'email'
// const city = 'yangon';
// const city = 'mdy'; //Cannot redeclare block-scoped variable 'city'

// updating value
// let email = "test@gmail.com";
// email = "updateTest@gmail.com";
// console.log(email);
// const city = "Yangon";
// city = "Mandalay" // TypeError: Assignment to constant variable
// console.log(city);


// case sensitive
// Let email; // Unknown keyword or identifier. Did you mean 'const'?
// Const city = "Yangon"; // Unknown keyword or identifier. Did you mean 'const'?


// Variable name rules
// 1) must start with a letter(a-z or A_Z), underscore(_) or dollar sign ($). Cannot start with number
// 2) no space between words (lastNameAndFirstName)
// 3) Cannot use reserve words (let delete = "Can Delete")

