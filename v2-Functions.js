// Convert the previous requirements into functions instead of individual statements

// It should have a function to display todos
// It should have a function to add todos
// It should have a function to change todos
// It should have a function to delete todos

//r1: It should have a function to display todos
var todos = ['item 1', 'item 2', 'item 3'];
function displayTodos() {
    console.log(todos);
}
// to run this code you'd type displayTodos(); and it will print the array

//r2: It should have a function to add todos
function addTodo() {
    todos.push("new todo");
    displayTodos(); // adding this will actually print the list so that we know a new item was added
}
// to run this you can type addTodos(); and it will automatically add the todo to the end of the list

// Another way to add a todo is by creating a variable and passing that value into the function when we call it.

function addTodo(newtodo) {
    todos.push(newtodo);
    displayTodos(); // adding this will actually print the list so that we know a new item was added
}

// So when we call the addTodo(); function we'd need to insert the variable like
addTodo("go grocery shopping");

//r3: It should have a function to change todos

function changeTodos(position, newValue) {
    todos[position] = newValue;
    displayTodos(); // adding this will actually print the list so that we know a new item was added
}

// r4: It should have a function to delete todos

function deleteTodo(position){
    todos.splice(position,1); // this will delete the array item at position 1 and only one item. One is hardcoded
    displayTodos();
}
