# JavaScript Array Methods

This repository contains a list of common JavaScript array methods along with brief descriptions and examples for each method.

## Introduction

JavaScript arrays come with a variety of built-in methods that make it easier to perform various operations on arrays. These methods range from basic manipulation like adding or removing elements to more advanced operations like sorting, filtering, and mapping.

## List of Methods

### 1. `push()`

Adds one or more elements to the end of an array and returns the new length of the array.

```javascript
const array = [1, 2, 3];
array.push(4, 5);
// Output: [1, 2, 3, 4, 5]
2. pop()
Removes the last element from an array and returns that element.

javascript
Copy code
const array = [1, 2, 3];
const lastElement = array.pop();
// Output: 3
3. shift()
Removes the first element from an array and returns that element.

javascript
Copy code
const array = [1, 2, 3];
const firstElement = array.shift();
// Output: 1
4. unshift()
Adds one or more elements to the beginning of an array and returns the new length of the array.

javascript
Copy code
const array = [2, 3];
array.unshift(0, 1);
// Output: [0, 1, 2, 3]
5. concat()
Merges two or more arrays and returns a new array.

javascript
Copy code
const array1 = [1, 2];
const array2 = [3, 4];
const newArray = array1.concat(array2);
// Output: [1, 2, 3, 4]
... (continue with other methods)

Contributing
Contributions are welcome! If you'd like to add more array methods, improve descriptions, or fix errors, feel free to fork the repository and submit a pull request.

License
This project is licensed under the MIT License.






