/****  V8 requirements:
1. it should have working controls for .addTodo
2. it should have working controls for .changeTodo
3. it should have working controls for .deleteTodo
4. it should have working controls for .toggleCompleted

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

var handlers = {
    displayTodos:  function() {
    	todoList.displayTodos();
    },
    addTodo: function() {
        var addTodoTextInput= document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = ""; // this will clear the input after you've added an item
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.vaue = "";
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
    },
    toggleAll: function() {
        todoList.toggleAll();
    }
}










/* THIS CODE IS NOT DRY - TOO REPETITIVE - DELETE AS WE MOVE ALONG

var displayTodosButton = document.getElementById("displayTodosButton");
var toggleAllButton = document.getElementById("toggleAllButton");

displayTodosButton.addEventListener("click", function(){
	todoList.displayTodos();
});

toggleAllButton.addEventListener("click", function() {
    todoList.toggleAll();
});

*/
