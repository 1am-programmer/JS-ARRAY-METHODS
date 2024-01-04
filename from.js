// array.FROM()
//Creates a new shallow copy of an array from an array like or iterable object

//Converts the string of Numbers to numbers
const string = '123456';   //This ia a string
const result = Array.from(string, Number);     
  //From string to Number
console.log(result);

//To remove all the duplicated value from an array
const duplicate = [1, 3, 5, 6, 3, 5, 6, 4, 7, 1, 5, 7, 8, 3];
const theResult = Array.from(new Set(duplicate));
//Set removes the duplicate, and array.from converts it to an array
console.log(theResult);

//It works with strings too

