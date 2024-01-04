//array.CONCAT()
// Allows you to match two or more arrays into one

var firstConcat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var secondConcat = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var thirdConcat = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

var resultConcat = firstConcat.concat(secondConcat, thirdConcat);
console.log(resultConcat);

//Result=> All the elements of the arrays into one array 

//USING ARRAY METHODS AS PUSH FUNCTION
var finalConcat = firstConcat.concat(-7, -6, -5, -4, -3, -2, -1, 0);
console.log(finalConcat);

//Result= Adds all the elements in finalConcat to the firstConcat Array