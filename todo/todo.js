console.log('In todo.js!');

// Selectors.
const todoInput = document.getElementById('todoInput');
const addTodoButton = document.querySelector('#addTodoButton');
const todoList = document.querySelector('#todoList');
const todos = ['Static Test Todo'];

// JS addEventListener Method: Add an event listener to an html element that has been
// selected in js
// Anon Function: Function is not defined elsewhere in the codebase, and is called
// immediately within the arg.
addTodoButton.addEventListener('click', function() {
    // Get the todoInput value.
    let todoValue = todoInput.value;

    // Sanitize | trim = removing trailing and preceding whitespace.
    todoValue = todoValue.trim();

    // Push the todo input value to the todos array.
    if (todoValue !== '') {
        todos.push(todoValue);
    } else {
        // Modify the input element to have border red.
        todoInput.style.border = '1px solid red';
        // alert('You can\'t submit an empty value.');
    }
});

// Generate.