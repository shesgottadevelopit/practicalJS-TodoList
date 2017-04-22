/****  V5 requirements:
- .displayTodos should show .todoText
- .displayTodos should tell you if .todos is empty
- .displayTodos should show .completed

****/


var todoList = {

    todos: [], //emptied the array so it doesn't come with text filled in

    displayTodos: function() { // INSERTED AN if/else statement to determine whether the todo-list is empty or nah
        if (this.todos.length === 0) {
            console.log("Your todo list is empty");
        } else {
            console.log('my todos'); // will access THIS objects todos property
            for (var i = 0; i < this.todos.length; i++ ) {
                //console.log(this.todos[i].todoText); THIS IS NO LONGER NEEDED, AS THE OUTPUT IS COMBINED IN THE CONSOLE.LOG BELOW

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
}
// to test this, I used the displayTodos(); method on todoList and it worked. But I also added some todos and then attempted to delete them. I learned that if I don't specify an actual position in deleteTodo(); it will start from the beginning of the array and delete one at a times
