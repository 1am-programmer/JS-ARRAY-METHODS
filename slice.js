array.SLICE()
// Returns shallow copy of the portion of an array ,, IT wont modify the original array.

//Slice numbers,using their index => To remove the numbers,and return the sliced to the console
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//This will give us an array of 1 to 4
var onetoFour = numbers.slice(0, 4);
console.log(onetoFour);

//Return 5 to 10
var fivetoTen = numbers.slice(4, 10);
console.log(fivetoTen);

//Using Negative index
//This will show the last 3 items of the array
var usingNegative = numbers.slice(-3);
console.log(usingNegative);

//This will show the last 9 items of the array
usingNegative = numbers.slice(-9);
console.log(usingNegative);

//Using the index to slice the array and return the elements from the index called
//Returns the elements from the 8th Index
var indexEight = numbers.slice(8);
console.log(indexEight);

//Returns from the 3rd Index
var indexThree = numbers.slice(3);
console.log(indexThree);

//Using strings
//Removes the last 3 , and returns the first two
var participants = ['LeBron', 'Kobe', 'Morant', 'Curry', 'Shaq'];
var results = participants.slice(0, 2);
console.log(results);

//Using positive and negative index
results = participants.slice(1, -2);
console.log(results);
//Returns a result showing the Index 1 and the other elements before the last two



