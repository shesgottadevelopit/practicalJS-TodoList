//Booleans: true or false values

//V4 requirements:
// r1 : todoList.addTodo should add objects; right now it's only adding text; these new objects will have to properties 1) todoText + 2) 
// r2 : todoList.changeTodo should change the todoText property
// r3 : todoList.toggleCompleted should change the completed property


// this is an object
var todoList = {
  todos: [], // we eliminated the existing array items... not sure why
  displayTodos: function() { 
    console.log("My Todos:", this.todos);
  },
  addTodo: function(todoText) { // so here you're replacing a string variable w/ a new object that will be created on AddTodo. This new object has 2x properties, with todoText being the string argument and completed, a boolean value by default set to false
    this.todos.push({
		todoText: todoText,
		completed: false // boolean value true or false
		
	});
    this.displayTodos(); 
  },
  changeTodo: function(position, todoText) { // changed the variable name because it's more descriptive
	this.todos[position].todoText = todoText; // this will only change the todoText of the todo object using dot notation 
    this.displayTodos(); 
  },
  deleteTodo: function(position) { // 
    this.todos.splice(position,1);
    this.displayTodos();
    
  },
  insertTodoPriority: function(position, insertValue) { //rBonus: my own function for adding an item at a particular point
	  this.todos.splice(position, 0, insertValue);
	  this.displayTodos();
  },
  toggleCompleted: function(position) { // we need the position because it will refer to the object we're modifying
	  var todo = this.todos[position]; // this saves typing, because if we didn't name the variable, we'd have to type this.todos[position].completed and also !this.todos[position].completed
	  todo.completed = !todo.completed; // this will enable us to access the completed property of the position [x] object
	  this.displayTodos();
  }
  
};

// {
	// todoText: "item 1",
	// completed: false // boolean value true or false
// }

// the ! bang operator takes the opposite of the value that comes after it
// so !true == false
// !false == true
// you can define a variable and say you want the opposite like akudo = false and then akudo = !akudo will yield true