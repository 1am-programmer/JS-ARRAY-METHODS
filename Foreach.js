// array.FOREACH()
//executes a given function for all elements in an array

var numbers = [1, 2, 3, 4, 5]
//using Arrow function
numbers.forEach((item, index) => {
    console.log('a[' + index + ']=' + item);
});  //This function write down the letter, its index and its number                                                                          

// Using to foreach to calculate the sum in the item,.. use 
let sum = 0;
numbers.forEach(items => {
    sum += items;
    //Adds the items together
});
console.log(sum); //To give you the total of all items in an array

//Another use case of forEach(),to see how many times a letter appears in an Array
const letters = ['a', 'b', 'a', 'b', 'c', 'd', 'a', 'b', 'c', 'd'];
let count = {};

letters.forEach(item => {
    if (count[item]) {
        count[item]++;
    } else {
        count[item] = 1;
    }
});
console.log(count);




