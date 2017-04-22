/****  V9 requirements:

1: There should be an `<li>` element for every todo
2: each `<li>` element should contain .todoText property
3: each `<li>` element should display .completed property


****/


var todoList = {

    todos: [], // empty array


/**** WE NO LONGER NEED THE DISPLAY TODOS METHOD OF todos but it follows a very similar logic to the views.displayTodos() method, so it was a helpful exercise

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
*/

// below we're changing the addTodo function so that it adds objects with properties and not just text
    addTodo: function (todoText) {
        this.todos.push({
        todoText: todoText, //the value will equal what the user inputs and the property name todoText will remain constant
        completed: false, // this boolean value tells us whether the todoText item was completed or not, by default is is false
    });
        //this.displayTodos(); // displayTodos after a new todo is added
    },


    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        //this.displayTodos(); // prints the list so that we know an item was changed
    },


    deleteTodo: function(position) {
        this.todos.splice(position,1);
        //this.displayTodos();
    },

    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        //this.displayTodos();
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
        //this.displayTodos();
    },
};

// DOM Manipulation

var handlers = {
    /* displayTodos:  function() {
    	todoList.displayTodos();
    }, */
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

            //todoLI.textContent = todoList.todos[i].todoText;
            todoLI.textContent = todoTextWithCompletion;
            todosUL.appendChild(todoLI);

        }
    }
};
