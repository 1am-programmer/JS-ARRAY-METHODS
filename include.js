// array.INCLUDES()
//Checks if an element is included in an array
const elements = ['Florine', 'Neon', 'Sodium', 'Magnesium'];
const isIncluded = elements.includes('Florine');
console.log(isIncluded);        //Returns true

const notIncluded = elements.includes('Hydrogen');
console.log(notIncluded);
//Returns false because there no Hydrogen in the Array

//With an IF STATEMENT
const basket = ['Apple', 'Orange', 'Paw-paw'];
const orangeIncluded = basket.includes('Orange');
// console.log(orangeIncluded); If orange is included,it returns true

if (orangeIncluded) {
    console.log('I want to buy Orange');
} else {
    console.log("Let's buy an Apple");
};


