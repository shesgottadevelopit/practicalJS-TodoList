//V4 requirements:
// r1 : todoList.addTodo should add objects
// r2 : todoList.changeTodo should change the todoText property
// r3 : todoList.toggleCompleted should change the completed property

var todoList = {

    todos: [], //emptied the array so it doesn't come with text filled in


// NO CHANGE
    displayTodos: function() { //anonymous function
        console.log('my todos', this.todos); // will access THIS objects todos property
    },

// requirement 1
// below we're changing the addTodo function so that it adds objects with properties and not just text
    addTodo: function (todoText) {
        this.todos.push({
        todoText: todoText, //the value will equal what the user inputs and the property name todoText will remain constant
        completed: false, // this boolean value tells us whether the todoText item was completed or not, by default is is false
    });
        this.displayTodos(); // displayTodos after a new todo is added
    },

// requirement 2
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos(); // prints the list so that we know an item was changed
    },


    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    },

// requirement 3
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
}

// methods to run for this object:
// todoList; // this will return everything within the object, functions and all
// todoList.displayTodos();
// todoList.addTodo("new todo");
// todoList.changeTodo(1,"first"); // That should change the text of the second array item to "first".
// todoList.deleteTodo(1); //will delete the item at position number 1
