array.REVERSE()
// Switches the elements from ascending to descending order

const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.reverse();
console.log(numbers);
// Re-arranges the elements from ascending to descending order

//Reversing a string
const string = 'Coding is Fun';

const result = string.split('')
    //All letters get seperated by '' and stands on their own ass individual letters
    .reverse()        //  the words get reversed from back to front
    .join('');       //they words joined back  to words but reversed

console.log(result);

const names = ['LeBron', 'is', 'an', 'NBA', 'Player'];
names.reverse();
console.log(names);     //Reverse it from back to front

