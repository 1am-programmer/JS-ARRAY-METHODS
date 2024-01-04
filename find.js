//array.FIND()
//Search inside the array and find the first element for which the callback function returns a truthy value if it doesnt find one, it will return undefined

const names = ['Lebron', 'James', 'Bryant', 'Kobe'];
const result = names.find(findNames);

function findNames(item) {
    return item === 'James';
}
console.log(result);
//If James is an element of the array it returns James,but if not, it returns undefined

//Using Object => to get price of the product,using the name
const object = [
    {
        name: "Laptop",
        price: 12000


    }, {
        name: "Desktop",
        price: 19000
    },
    {
        name: "Mobile",
        price: 1500
    }
];

const findPrice = object.find(findlaptopPrice).price;
function findlaptopPrice(amount) {
    return amount.name === 'Laptop';
    //Searches through the Arrays for 'Laptop', then returns it price to the console

};
console.log(findPrice); 