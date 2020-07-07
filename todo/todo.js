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

// Generate todo (<li>) element
// function generateTodo(todo) {
//     const task = document.createElement('li');
//     const taskText = document.createElement('span');
//     const checkbox = document.createElement('input');
//     const deleteButton = document.createElement('button');

//     // Checkbox.
//     checkbox.setAttribute('type', 'checkbox');

//     // Insert text
//     taskText.innerText = todo;

//     // Build the task item.
//     task.appendChild(checkbox);
//     task.appendChild(taskText);

//     return task;
// }

// todoList.appendChild(generateTodo('__test__'))