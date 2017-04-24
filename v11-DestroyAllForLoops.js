/****  V11 requirements:

Requirements:
1. todoList.toggleAll should use forEach
2. view.displayTodos should use forEach


****/


var todoList = {

    todos: [], // empty array

// below we're changing the addTodo function so that it adds objects with properties and not just text
    addTodo: function (todoText) {
        this.todos.push({
        todoText: todoText, //the value will equal what the user inputs and the property name todoText will remain constant
        completed: false, // this boolean value tells us whether the todoText item was completed or not, by default is is false
    });
    },


    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;

    },


    deleteTodo: function(position) {
        this.todos.splice(position,1);
    },

    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },

    //our new feature!!
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        this.todos.forEach(function(todo){
            if(todo.completed === true) { // we don't need to reference the position any longer because we're passing in the variable todo that corresponds to each todo item that will be looped through.
                completedTodos++;
            }
        });

        this.todos.forEach(function(todo){

            if (completedTodos === totalTodos) {

                //make everything false
                todo.completed = false;
            } else {
                // make everything true
                todo.completed = true;
            }
        });
    },
};

// DOM Manipulation

var handlers = {

    addTodo: function() {
        var addTodoTextInput= document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = ""; // this will clear the input after you've added an item
        views.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.vaue = "";
        views.displayTodos();
    },
    deleteTodo: function(position) { // changed from .valueAsNumber
        todoList.deleteTodo(position);
        views.displayTodos();
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
        views.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        views.displayTodos();
    }
};

// Views

var views = {
    displayTodos: function(){
        var todosUL = document.querySelector("ul");
        todosUL.innerHTML = "";

        todoList.todos.forEach(function(todo, position){
            var todoLI = document.createElement("li");

            var todoTextWithCompletion = "";
            // NO LONGER NEEDED var todo = todoList.todos[i];

            if(todo.completed === true) {
                todoTextWithCompletion =" ( x ) " + todo.todoText;
            } else {
                todoTextWithCompletion =" (  ) " + todo.todoText;
            }

            todoLI.id = position; // changed from a variable
            todoLI.textContent = todoTextWithCompletion;
            todoLI.appendChild(views.createDeleteButton());
            todosUL.appendChild(todoLI);
        });
    },
    createDeleteButton: function() {
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
    },

    setUpEventListeners: function() {
        var todosUL = document.querySelector("ul");

        todosUL.addEventListener("click", function(event) {

            // get the element that was clicked on
            var elementClicked = event.target;

            // Check if elementClicked is a delete button
            if(elementClicked.className === "deleteButton") {

                //run event handler
                handlers.deleteTodo(parseInt(event.target.parentNode.id));
            }
        });
    },
};

// run setUpEventListeners
views.setUpEventListeners();
