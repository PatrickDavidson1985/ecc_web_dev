console.log('app.js is included');

const clubType = document.querySelector('#select-club-type');

// console.log('Club Type: ', clubType);
// console.log('Club Type Value: ', clubType.value);

// clubType.addEventListener('change', function(event) {
//     console.log(event.target.value);
//     console.log('string value', event.target.value);
//     // alert(`You picked: ${event.target.value}`);
//     event.target.style.backgroundColor = 'green';
// })

// Loop through all select fields, if change event, background color to green.
const allSelectElements = document.querySelectorAll('select');
console.log(allSelectElements);

for (let i = 0; i < allSelectElements.length; i++) {
    // allSelectElements[i] // From all items in array, get the item at the index of i
    allSelectElements[i].style.backgroundColor = 'green';
}

const numArray = [10, 20, 30, 40 ,50];
// to get the value 10.
numArray[0] // returns 10
numArray[2] // returns 30



// function show4() {
//     document.getElementById("page1").style.display = "none";
//     document.getElementById("page2").style.display = "none";
//     document.getElementById("page3").style.display = "none";
//     document.getElementById("page4").style.display = "inline";
// }
// ​
// function show3() {
//     document.getElementById("page1").style.display = "none";
//     document.getElementById("page2").style.display = "none";
//     document.getElementById("page3").style.display = "inline";
//     document.getElementById("page4").style.display = "none";
// }
// ​
// function show2() {
//     document.getElementById("page1").style.display = "none";
//     document.getElementById("page2").style.display = "inline";
//     document.getElementById("page3").style.display = "none";
//     document.getElementById("page4").style.display = "none";
// }
// ​
// function show1() {
//     document.getElementById("page1").style.display = "inline";
//     document.getElementById("page2").style.display = "none";
//     document.getElementById("page3").style.display = "none";
//     document.getElementById("page4").style.display = "none";
// } 