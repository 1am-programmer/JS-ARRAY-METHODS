array.MAP()
// executes a given function on every from an array and returns a new array

//To multiply all element in an array by 3
const numbers = [1, 2, 3, 4, 5, 6];
var result = numbers.map(multiply);
//Recalling the function back
function multiply(item) {
  return item * 3;
  //Multiplies all elements in an array by 3
};
console.log(result);

//To multiply all element in the array above by their index
var result = numbers.map(multiplyIndex);
function multiplyIndex(item, index) {
  return item * index;
  //Multiplies all elements in an array by 3
};
console.log(result);

//Showing the total G/A of players
const footballers = [
  {
    name: 'Ronaldo',
    Goals: 53,
    Assists: 22
  },
  {
    name: 'Messi',
    Goals: 35,
    Assists: 28
  }, {

    name: 'Kevin',
    Goals: 23,
    Assists: 52
  }
];
const total = footballers.map(item => ({
  name: item.name,
  totalGA: item.Goals + item.Assists
}))
console.log(total);

//Change a string of numbers to a number
const str = ['1', '2', '3', '4', '5'];
let toNum = str.map(Number);
console.log(toNum);





