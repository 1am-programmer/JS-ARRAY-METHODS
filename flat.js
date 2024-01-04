// array.FLAT()
//creates a new array with all the sub elements concatenated into it

const number = [1, [2, [3, [4, [5]]]]];
const result = number.flat(4);
//The number in () tells the compiler how many brackets it should remove
console.log(result);

const NBA = [1, [23], ['Lebron'], [24, ['Kobe']]];
const resulting =NBA.flat(2);
console.log(resulting);