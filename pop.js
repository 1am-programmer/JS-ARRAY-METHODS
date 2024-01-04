array.POP()
// Removes the last element of an array

//Removes the last name
var names = ['Messi', 'Ronaldo', 'Ramos', 'Pele'];
names.pop();
console.log(names);

//Removes the last number,if it confirms that the typeof Array is an object
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.pop(removeLastitem);

function removeLastitem(item) {
    if (typeof item === Object) {
        numbers.pop();
    } else {
        numbers.push(5);
    }
};
console.log(numbers);

//Removes the last boolean
var booleans = [true, false, true, false, true];
booleans.pop()
console.log(booleans);

//Removes the last name but returns the name it removed in the console
var NBA = ['Lebron', 'James', 'Kobe', 'Bryant'];
var finalist = NBA.pop(returnLastname);

function returnLastname(item) {
    if (typeof item === Object) {
        nameLIst.pop()
    } else {
        nameLIst.push('Morant');
    }
}
console.log(finalist);


