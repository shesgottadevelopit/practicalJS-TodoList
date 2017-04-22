/****  V10 requirements:

Requirements:
1: There should be a way to create delete buttons
2: There should be a delete button for each todo
3: Each li should have an id that has the todo position
4: Delete buttons should have access to the todo ID
5: Clicking delete should update todoList.todos and the DOM


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
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
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

        for(var i = 0; i < todoList.todos.length; i++) {

            var todoLI = document.createElement("li");

            var todoTextWithCompletion = "";
            var todo = todoList.todos[i];

            if(todo.completed === true) {
                todoTextWithCompletion =" ( x ) " + todo.todoText;
            } else {
                todoTextWithCompletion =" (  ) " + todo.todoText;
            }

            todoLI.textContent = todoTextWithCompletion;
            todosUL.appendChild(todoLI);

        }
    }
};
