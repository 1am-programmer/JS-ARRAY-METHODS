array.INDEXOF()
//Returns the first Index of a given element found inside the array

const names = ['Lebron', 'Morant', 'Russ', 'Shaq', 'Kobe'];
const result = names.indexOf('Kobe');
console.log(result);
//Returns the index of Kobe, which is 4

//Using IndexOf to replace elements in an Array
let superCars = ['RollsRoyce', 'Ferrari', 'Lambo', 'Porsche GTR'];
const lamboIndex = superCars.indexOf('Lambo');
superCars[lamboIndex] = "Bugatti";    
   // replace Lambo with Bugatti 

console.log(superCars);

//Searches an array for the first occurence of the element,and returns the Index
const mobile = ['iPhone', 'Infinix', 'Samsung', 'Infinix'];
//Here we have muliple Infinix

const infinixIndex = mobile.indexOf('Infinix');
console.log(infinixIndex);
//Answer is 1 because the first Infinix's index is 1

//Note: if the element in the IndexOf does not exist it returns -1 
const animals = ['Zebra', 'Lion', 'Donkey'];
const minusOne = animals.indexOf('Tiger');
console.log(minusOne);      //Result -1

