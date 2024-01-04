 Array.REDUCE()
// executes a call back function on every elements of an array and it will return one single output value

const numbers = [1, 2, 3, 4, 5, 6];
//Sum up all elements in athe array
const sum = numbers.reduce(total, 0);
// Represents, the(callback, initialValue);
function total(accumulator, value, index, array) {
    return accumulator + value;
    //Adds the value & accumulates it i.e 1+2 =3 saves in the accumulator,and returns it + the value again
};
console.log(sum);

//Get the maximum from this array, using same reduce method 
const result = numbers.reduce(max, -Infinity);

function max(accumulator, value) {
    if (accumulator > value) {
        return accumulator;
    } else {
        return value;
    }
}
console.log(result);

            <1/2>

//Calculate the total value of products in a store
const store = [
    {
        product: 'laptop',
        value: 1000,
        count: 3
    }, {
        product: 'desktop',
        value: 3000,
        count: 45
    }, {
        product: 'mobile',
        value: 4400,
        count: 18
    }
];
const stock = store.reduce(
    (accumulator, item) => accumulator + (item.value * item.count),
    0);
console.log(stock); 
// Gives the total value of the items in the store
