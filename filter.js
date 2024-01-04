// array.FILTER()
//create a new array by removing all the elements for which callback function returns a falsy value

const number = [1, 2, 3, 4, 5, 6];
const eveNumber = number.filter(isEven);
function isEven(value) {
    return value % 2 === 0;
    //It checks through the array and returns only the even numbers 
}
console.log(eveNumber);

//Using this in Object
const people = [
    {
        Name: "Dave",
        Age: 22
    },
    {
        Name: "Daniel",
        Age: 29
    },
    {
        Name: "Danny",
        Age: 11
    }
]
const resultArray = people.filter(value => value.Age >= 15)
//Filters out Age below 15 and returns elements with age above 15
console.log(resultArray);

//Another use case of  filter(), to remove all duplicates from an array(it is not advised)
const filterDuplicate = [1, 2, 3, 4, 2, 4, 3, 5, 8, 4, 2, 3, 5, 1];

const resultDuplicate = filterDuplicate.filter((value, index, array) => {
    return array.indexOf(value) === index;
    //Takes the first index of each numbers and filters out their duplicates
});
console.log(resultDuplicate);