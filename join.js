array.JOIN()
// Creates a new string from an array by concatenating all the elements from that array default it uses a comma but you can select
//  which seperator you want between the items

var country = ['USA', 'Romania', 'Switzerland'];
var result = country.join('-');

console.log(result);
//Shows you the results {USA-Romania-Switzerland} 
