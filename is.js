array.IS()
// Checks if the past value is an array

const isArray = ['City', 'Pool', 'United'];
const isString = 'I am a Developer';
const isNumber = 99;

console.log(Array.isArray(isArray));
//Is an array so it is true

console.log(Array.isArray(isString));
// Is a string not an array so its false

console.log(Array.isArray(isNumber));
// Is a number not an array so its false


