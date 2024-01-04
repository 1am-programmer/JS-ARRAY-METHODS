// array.FILL()
//changes all the elements in an array with a provided value
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.fill(1);
console.log(numbers);   //  Fills the whole numbers Array with 1

//The next two digits in the log stands for the elements of an array INdex 
var thenumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
thenumbers.fill(-1, 0, 6); //Here, 0 and 6 are the index
console.log(thenumbers);
//Returns a new array with -1 in the first 6 values 

//USING THE FILL TO FILL IN NUMBERS 1-10
function fillNumbers(digits) {
    return Array(digits).fill(0).map((_, index) => index + 1);
};
console.log(fillNumbers(10));

//FILL IN THE FIRST THREE NUMBERS 
var thenumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
thenumbers.fill(2, 0, 3);
console.log(thenumbers);
//Replace the first three values with 2