// array.FINDINDEX ()
// will find the element and return the Index

const names = ['Lebron', 'James', 'Bryant', 'Kobe'];
const result = names.findIndex(findNames);

function findNames(item) {
    return item === 'James';
}
console.log(result);
//Returns the Index of James,which is 1

//Using the number 3 to find its index
const numbers = [1, 2, 3, 4, 5, 6];
const numberIndex = numbers.findIndex(indexthree);

function indexthree(value) {
    return value === 3;
};
console.log(numberIndex);