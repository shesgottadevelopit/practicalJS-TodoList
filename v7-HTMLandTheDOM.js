/****  V7 requirements:
- there should be a "display todos" button and a "toggle all" button in the app using HTML
- clicking "display todos" should run todoList.displayTodos
- clicking "toggle all" should run todoList.toggleAll

****/


var todoList = {

    todos: [], //emptied the array so it doesn't come with text filled in

    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log("Your todo list is empty");
        } else {
            console.log('my todos'); // will access THIS objects todos property
            for (var i = 0; i < this.todos.length; i++ ) {


                //adds logic for if the todo item is completed
                if(this.todos[i].completed === true){
                    console.log("(x)", this.todos[i].todoText);
                } else {
                    console.log("( )", this.todos[i].todoText);
                }
            }
        }
    },


// below we're changing the addTodo function so that it adds objects with properties and not just text
    addTodo: function (todoText) {
        this.todos.push({
        todoText: todoText, //the value will equal what the user inputs and the property name todoText will remain constant
        completed: false, // this boolean value tells us whether the todoText item was completed or not, by default is is false
    });
        this.displayTodos(); // displayTodos after a new todo is added
    },


    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos(); // prints the list so that we know an item was changed
    },


    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    },

    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },

    //our new feature!!
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        for (var i = 0; i < totalTodos; i++) {
            if(this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        if (completedTodos === totalTodos) {
            //make everything false
            for(var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }

        } else {
            //make everything true
            for(var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        };
        this.displayTodos();
    },
};

// DOM Manipulation
var displayTodosButton = document.getElementById("displayTodosButton");
var toggleAllButton = document.getElementById("toggleAllButton");

displayTodosButton.addEventListener("click", function(){
	// this is a method on the displayTodosButton, and when the click happens it will run the function
	todoList.displayTodos(); // this will still display in the console but it's activated via the browser user interface

});

toggleAllButton.addEventListener("click", function() {
    todoList.toggleAll();
});

// EVERYTHING IS WORKING SO FAR SO GOOD!
