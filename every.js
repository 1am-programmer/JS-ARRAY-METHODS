//array.EVERY() 
//Executes a given function on every item in an array and returns true only if the callback function returns a truthy value for all items in the array, if a falsy value is found, it will return false immediately ..

const number = [1, 2, 3, 4, 5];
const result = number.every(isPositive);

function isPositive(value) {
    return value > 0;
}
console.log(result);
//Returns true,because every item in the array is positive and above 0

// TO GET FALSE
const falseNumber = [-1, 2, 3, 4, 5];
const falseResult = falseNumber.every(isnotPositive);

function isnotPositive(item) {
    return item > 0;
};
console.log(falseResult);   //Returns false,
// because there's a negative value in the array,which is negative,and is below 0

//Using an Object araray to check if all the objects of an array has a certain property
const objectEvery = [{
    name: 'Lebron',
    age: 32
}, {
    name: 'Hormozi',
    age: 40
}, {
    name: 'Tate',
    job: 'Kickboxer'
}
];  //Every object has an age property except the third one  
const resultObject = objectEvery.every(object => object.age !== undefined);
console.log(resultObject);
// We get false because the third one do not have price

//Arrays of Arrays
const arrayEvery = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const resultArray = arrayEvery.every(arr => Array.isArray(arr))
console.log(resultArray); 
//The result is true,because every element here is an Array
