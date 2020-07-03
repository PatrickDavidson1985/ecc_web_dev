// && and
// || or

// if ( test1 && test2 && test3 ) {
    // Execute this code
// }

// var element = document.querySelector('element_name');

// element.addEventListener('blur', function(event) {
//     console.log('Event:', event);
// });

// let
// const
// var // We dont normally use var now because...
//     // scope clashing, variable clashing, variable overriding

// Arrays.
// let exampleArray = ['string', 13, true, null];

// console.log(exampleArray[2]); // output = true

// I know what value i want,
// but i dont know the index where that value is
// how do i find the index of value 13?
// exampleArray.indexOf(13);

// let thePositionIWant = exampleArray.indexOf(13);
// console.log('initial', thePositionIWant);
// thePositionIWant = 'string...';
// console.log('reassigned', thePositionIWant);

// Add 'apple' to end of array.
// exampleArray.push('apple');
// console.log(exampleArray);

// Select all p elements from index.html
// const paragraphs = document.querySelectorAll('p');
// console.log(paragraphs[1]);
// paragraphs[1].style.backgroundColor = 'red';
// paragraphs[5].innerText = 'This is the fifth paragraph';

// const ancestor = document.querySelector('.ancestor');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// ancestor.addEventListener('click', function() {
//     alert('ancestor fired');
// });

// parent.addEventListener('click', function() {
//     alert('parent fired');
// });

// child.addEventListener('click', function(event) {
//     alert('child fired 1');
//     event.stopImmediatePropagation();
// });

// const elementArray = [ancestor, parent, child];
// for (let index = 0; index < elementArray.length; index++) {
//     elementArray[index].addEventListener('click', function(){});
// }

// elementArray.forEach(function(item, index) {
//     console.log('item: ', item)
// })

// query select a form
    // hook method a method into submit
        // event.preventDefault();


// How to make the above more effecient.
// Create an array, and bind an event to each.
// Create prototype property for the document

// let globalVar = 'some variable string'; // Global

// function testFunction(arg1, arg2) {
//     let functionVariable = 'function variable';
//     console.log('inside function:', functionVariable);
//     console.log('global var in func: ', globalVar);
// }
// testFunction();

// console.log('outside function:', functionVariable);
