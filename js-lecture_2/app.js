// // console.log('This is a simple console log');
// // console.error('This is an ERROR!!!!');
// // console.warn('This is a warning');

// /*
// console: essentially a class object that provides us with numerous
// debuggin functions.
// */
// // function test() {
// //     console.log('test function firing');
// // }



// // Strings.
// var testString = 'This is the test string';
// let string = 'String';
// const number = 100;
// let number2 = 19;
// console.log(number2)
// number2 = 39;
// console.log(number2)
// // alert('Alert withOUT variable');
// // alert(testString);

// console.log(testString);

// // Redefine testString.
// testString = 'New testString value!!!';
// console.log(testString);

// string = 'New Deb\'s value';
// console.log(string);

// console.log(number);
// // number = 33;
// // console.log(number);

// /**
//  * 1. Create a variable with a string value
//  * 2. Log it to the browser console.
//  * 3. Create two variables with number values
//  * 4. Perform math on those number variables
//  * 5. Log that math's value to the console.
//  * 6. Separate your JS file from you html file.
//  */

// // camelCase
// // snake_case
// // PascalCase

// // Solution:
// let str = 'Hello world';
// console.log(str);

// let homerSimpson = 45;
// const elephant = 3;
// const testArray = {
//     key_1: 'value 1',
//     key_2: 'value 2'
// }

// // Array: Cluster of values.
// // ['value_1', 'value_2', 3]
// // ['key_1', 'key_2', 'key_3']

// // Object: Essentially an Associative Array.
// {}

// // Boolean Values: True or False, Yes or No, On or Off.
// true;
// false;
// // ! "Bang" inverts the value.
// ! false; // this is equal to true.
// // Loose Language: certain values can be interpreted as "truthy" or "falsey"
// // 0 === falsey
// // 1 === truthy

// // Comparison Operators:
// // < less than
// // > greater than
// // === equal to
// // !== NOT equal to

// // == Dont use these comparison operators in JS anymore!!!!!
// // !=

// console.log(25 !== 5);

// console.log('Type of the testArray variable: ', typeof testArray);

// const allButtonsOnPage = document.querySelectorAll('button'); // Browser returns an array.

// if (!allButtonsOnPage) {
//     console.log('no buttons on page');
// } else {
//     console.log('there are buttons on the page');
// }

// // Logical Operators:
// let testValue = true;
// if (testValue === true) {
//     console.log('testvalue is true!');
// } else {
//     console.log('testvalue is false');
// }

// // 
// for (let i = 0; i < allButtonsOnPage.length - 1; i++) {
//     allButtonsOnPage[i].addEventListener('click', function() {
//         console.log('You clicked a button!');
//     })
// }

// const button1 = document.querySelector('#button1');

// Logical Operators Example
const hasParagraphs = document.querySelectorAll('p');

if (hasParagraphs.length < 0) {
    hasParagraphs.forEach(item => item.style.color = 'red');
} else {
    hasParagraphs.forEach(item => item.style.backgroundColor = 'green');
}