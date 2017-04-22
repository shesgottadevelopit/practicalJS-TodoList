// V3 requirements

// r1: It should store the todos array on an object
// r2: It should have a displayTodos method
// r3: It should have an addTodo method
// r4: It should have a changeTodo method
// r5: It should have a deleteTodo method

var todoList = {
// r1: It should store the todos array on an object
    todos: ['item 1', 'item 2', 'item 3'],
    // this takes the var todos = [] from V1 and V2 and makes it a property instead of just a variable

// r2: It should have a displayTodos method
    displayTodos: function() { //anonymous function
        console.log('my todos', this.todos); // will access THIS objects todos property
    },

// r3: It should have an addTodo method
    addTodo: function (newtodo) {
        this.todos.push(newtodo); // since we don't have a variable anymore , we can only refer to the array using the Todos property on THIS object
        this.displayTodos(); // this will allow us to run the function displayTodos() similar to the original, but calls it through the property of this object which houses the function
    },

// r4: It should have a changeTodo method
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos(); // print the list so that we know a new item was added
    },

// r5: It should have a deleteTodo method
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    },
}

// methods to run for this object:
// todoList; // this will return everything within the object, functions and all
// todoList.displayTodos();
// todoList.addTodo("new todo");
// todoList.changeTodo(1,"first"); // That should change the text of the second array item to "first".
// todoList.deleteTodo(1); //will delete the item at position number 1
