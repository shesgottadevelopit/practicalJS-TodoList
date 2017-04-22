// V2 To-do app “requirements”:
// It should have a place to store todos; done // var todos = [“item1”, “item2”, “item3”]
// It should have a way to display todos; done //console.log(todos)
// It should have a way to add todos; done // variable.push(“item4”)
// It should have a way to change todos; done; accessed the array using indices and reassigned value // todos[0] = itemFirst
// It should have a way to delete todos; done // splice(x,y); x is the starting position, y is the number of array items you want to delete

// HIT SHIFT + ENTER TO WRITE MULTIPLE LINES IN GOOGLE CHROME CONSOLE

// r1: It should have a place to store todos;

var todos = ["item1", "item2", "item3"] // define the todo list

// r2: It should have a way to display todos;

function displayTodos() { // creates the function that will display the todo list
console.log("My Todos:", todos);
}

displayTodos(); // activates the todo list

// r3: It should have a way to add todos;

function addTodo() { // defines the function that will add more todos to the list
todos.push("new todo");
}

addTodo(); // adds a "new todo" item but doesn't display anything letting us know

function addTodo() {
todos.push("new todo");
displayTodos(); // added a pre-existing function to this function; this allows it to print the existing list along with the new item appended
}

addTodo();

function addTodo(todo) {
todos.push(todo);
displayTodos(); // added a pre-existing function to this function; this allows it to print the existing list along with the new item appended
}

addTodo("go grocery shopping"); // this will display the list and add a new item called "go grocery shopping"

// r4: It should have a way to change todos

function changeTodo(position, newValue) {
	//todos[0] = itemFirst // we want to update the index via parameters as well as the corresponding value
	todos[position] = newValue;
}

changeTodo(0, "my first item");

function changeTodo(position, newValue) {
todos[position] = newValue;
displayTodos(); // displays the todo list after you've changed something so you can see how it's used in the body of the function
}

// r5: It should have a way to delete todos;

function deleteTodo(position) {
todos.splice(position,1);
displayTodos();
}

deleteTodo(0); // deletes the item at position 0

// FUNCTIONS only - COPY/PASTE INTO CONSOLE FOR PRACTICE

// r1: It should have a place to store todos;

var todos = ["item1", "item2", "item3"] // define the todo list

// r2: It should have a way to display todos;

function displayTodos() { // creates the function that will display the todo list
console.log("My Todos:", todos);
}

// r3: It should have a way to add todos;

function addTodo(todo) {
todos.push(todo);
displayTodos(); // added a pre-existing function to this function; this allows it to print the existing list along with the new item appended
}

// r4: It should have a way to change todos

function changeTodo(position, newValue) {
todos[position] = newValue;
displayTodos(); // displays the todo list after you've changed something so you can see how it's used in the body of the function
}

// r5: It should have a way to delete todos;

function deleteTodo(position) {
todos.splice(position,1);
displayTodos();
}

// my own function for adding an item at a particular point

function insertTodoPriority(position, insertValue) {
	todos.splice(position, 0, insertValue);
	displayTodos();
		
}


