array.SORT()
// Sorts the element of an array by manipulating the array;  Default sort order
// is ascending, it will convert the elemnent to an array...
// Then it will compare that sequences of UTF 16 code unit values

const names = ['Messi', 'Alba', 'Pique', 'Valdes', 'Suarez'];
names.sort();
console.log(names);     //It will be sorted in an alphabetical order

const numbers = [7, 9, 1, 4, 3, 6, 8, 8];
numbers.sort()
console.log(numbers);

//We sort this array and Re-arrange based on prices
const objects = [
    {
        name: 'iPhone',
        price: 699
    },
    {
        name: 'Samsung',
        price: 799
    }, {
        name: 'Xiaomi',
        price: 499
    }
]
objects.sort((a, b) => {
    return a.price - b.price
})
console.log(objects);
