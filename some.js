 array.SOME()
// Executes a given function on the elements of an array and returns true 
// if the callback function returns truthy value for atleast 
// one element and returns false if all are falsy values

//Checks if atleast a number is greater than 4
const number = [1, 2, 3, 4, 5];
const result = number.some(greaterthanFour);

function greaterthanFour(item) {
    return item > 4;
};
console.log(result);

//Using an object
const object = [
    {
        name: "Laptop",
        price: 2000
    }, {
        name: "Desktop",
        price: 19000
    }, {
        name: "Mac",
        price: 1500
    }
];
const resulting = object.some(highprice);
function highprice(amount) {
    return amount.price > 3000
};
console.log(resulting);

// const footballers = ['Kevin', 'Messi', 'Ronaldo', 'Beckham']
// const totalnames = footballers.some(tried)
// function tried(item) {
//     return (typeof item === String);
// };
// console.log(totalnames);