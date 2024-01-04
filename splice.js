array.SPLICE()
// Changes an array by removing or replacing existing elements

var number = [1, 2, 3, 4, 5, 6];
// var result = number.splice(starting index | How many Elements we wnat to remove | Optionally pass in new items);


//Remove the 3 and 4 and returns the rest in the console
number.splice(2, 3);
console.log(number);

// To show the numbers deleted in a console, you give the action a variable name
var deleted = number.splice(2, 3);
console.log(deleted);

// TO ADD NEW ELEMENTS 
number.splice(2, 3, 5, 7);
console.log(number);

