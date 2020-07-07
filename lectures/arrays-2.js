// Arrays 2 (7.2.2020)
// console.log('arrays 2 js included');

// Primitive Types:
// 1. String
// 2. Number
// 3. Undefined values
// 4. Unary operators

// What is an array?
// let messyArray = ['dog', 45, null, 'cat', 22, 55, 'stray'];
// console.log(messyArray);

// console.log(messyArray[0]);
// console.log(messyArray[1]);
// console.log(messyArray[2]);

// .length gives us the amount of items in the array;
// index++ === index = index + 1
// for (let index = 0; index < messyArray.length; index++) {
//     console.log(messyArray[index]);
// }

// Challenge:
// With this array, find the sum of all the numbers in the array.
const numArray = [14, 23, 72, 99, 4, 13, 27];

// let sumOfArray = 0;

// for (let index = 0; index < numArray.length; index++) {
//     // Hint: use variables
//     // Hint: variables can be modified with +=
//     sumOfArray = sumOfArray + numArray[index]
// }
// console.log('final total: ', sumOfArray)

// Challenge.
// Create an array with at least three animals
// Using array methods (push, pop, shift, unshift)
// Replace the last item in the array with 'elephant'
// Insert an 'emu' into the beginning of the array
// find the amount of items in the array.

const animals = ['lion', 'tiger', 'bear'];

animals.pop();
console.log(animals)
animals.push('elephant');
console.log(animals)

animals.unshift('emu');
console.log(animals)

let animalsLength = animals.length
console.log(animalsLength)